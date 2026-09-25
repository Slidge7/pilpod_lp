/**
 * Prerender — the last step of `npm run build`.
 *
 * Takes the client build (dist/index.html, with hashed script and style tags
 * already injected by Vite) and the SSR build of the same route modules
 * (.ssr/ssr.js), and writes one complete HTML document per route per language:
 *
 *   dist/index.html               /
 *   dist/reqtone/index.html       /reqtone
 *   dist/fr/index.html            /fr
 *   dist/fr/reqtone/index.html    /fr/reqtone
 *   dist/404.html                 anything else
 *
 * Every page is a real document: full content in its own language, its own
 * title, description, canonical, hreflang alternates, Open Graph and JSON-LD.
 * A crawler, a link unfurler or a visitor with JavaScript off gets the whole
 * site in either language. With JavaScript on, the router takes over after
 * first paint and no further document is ever loaded.
 */
import { createHash } from 'node:crypto';
import { readFile, writeFile, mkdir, readdir, rm, stat } from 'node:fs/promises';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { gzipSync } from 'node:zlib';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');
const SSR = join(ROOT, '.ssr', 'ssr.js');
const BASE = process.env.S7_BASE ?? '/';
const CSP = process.env.S7_CSP !== '0';

const fail = (msg) => {
  console.error(`\n  ✗ prerender: ${msg}\n`);
  process.exit(1);
};

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* ------------------------------------------------------------ inputs ---- */

const template = await readFile(join(DIST, 'index.html'), 'utf8').catch(() =>
  fail('dist/index.html not found — run `vite build` first'),
);
for (const marker of ['<!--app-head-->', '<!--app-body-->', '<!--app-preload-->']) {
  if (!template.includes(marker)) fail(`template is missing ${marker}`);
}

const { pages } = await import(pathToFileURL(SSR).href).catch((e) =>
  fail(`could not load ${relative(ROOT, SSR)}: ${e.message}`),
);

/* ------------------------------------------------------ font preloads ---- */

// Fonts are content-hashed by Vite, so their names are only known now.
// Preload the two faces every page uses above the fold; latin-ext is only
// fetched if a glyph actually needs it.
const assets = await readdir(join(DIST, 'assets'));
const preloadFonts = assets
  .filter((f) => /^geist-(mono-)?latin-[\w-]+\.woff2$/.test(f) && !f.includes('latin-ext'))
  .sort();
if (preloadFonts.length !== 2) {
  fail(`expected 2 preloadable fonts in dist/assets, found ${preloadFonts.length}`);
}
const preload = preloadFonts
  .map((f) => `<link rel="preload" href="${BASE}assets/${f}" as="font" type="font/woff2" crossorigin>`)
  .join('\n');

/* --------------------------------------------------------------- CSP ---- */

// The only inline script is the one-line no-js remover; pin it by hash so
// script-src can stay 'self' with nothing else allowed to run.
let csp = '';
if (CSP) {
  const inline = [...template.matchAll(/<script>([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  const hashes = inline.map(
    (src) => `'sha256-${createHash('sha256').update(src, 'utf8').digest('base64')}'`,
  );
  const policy = [
    `default-src 'self'`,
    `script-src 'self' ${hashes.join(' ')}`,
    // Inline style attributes carry the reveal stagger (--d); nothing else.
    `style-src 'self' 'unsafe-inline'`,
    `img-src 'self' data:`,
    `font-src 'self'`,
    `connect-src 'self'`,
    `object-src 'none'`,
    `base-uri 'self'`,
    `form-action 'none'`,
    `upgrade-insecure-requests`,
  ].join('; ');
  csp = `<meta http-equiv="Content-Security-Policy" content="${policy}">`;
}

/* ------------------------------------------------------------- pages ---- */

const written = [];

for (const page of pages()) {
  let head = page.head;
  if (BASE !== '/') head = head.replace(/href="\/icons\//g, `href="${BASE}icons/`);

  const html = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(page.title)}</title>`)
    .replace('<!--app-head-->', (csp ? csp + '\n' : '') + head)
    .replace('<!--app-preload-->', preload)
    .replace('<!--app-body-->', page.body)
    .replace('data-theme="s7"', `data-theme="${page.theme}"`)
    .replace('data-route="home"', `data-route="${page.id}"`)
    .replace('<html lang="en"', `<html lang="${page.htmlLang}"`);

  // Sanity: nothing left unrendered, and the page says what it is.
  if (/<!--app-/.test(html)) fail(`${page.file}: unreplaced placeholder`);
  if (!html.includes('<link rel="canonical"')) fail(`${page.file}: no canonical`);
  if (!html.includes('<main id="main"')) fail(`${page.file}: no <main>`);
  if (page.indexable && !html.includes('hreflang="x-default"')) {
    fail(`${page.file}: no hreflang alternates`);
  }

  const out = join(DIST, page.file);
  await mkdir(dirname(out), { recursive: true });
  await writeFile(out, html, 'utf8');
  written.push({
    file: page.file,
    lang: page.lang,
    bytes: Buffer.byteLength(html),
    gz: gzipSync(html).length,
  });
}

/* ----------------------------------------------------------- sitemap ---- */

// Each URL lists every language it exists in, which is how Google learns the
// two versions are the same page rather than duplicates competing with
// each other.
const today = new Date().toISOString().slice(0, 10);
const indexable = pages().filter((p) => p.indexable);
const byPath = new Map();
for (const p of indexable) {
  const key = p.file.replace(/^fr\//, '');
  if (!byPath.has(key)) byPath.set(key, []);
  byPath.get(key).push(p);
}

const urls = indexable
  .map((p) => {
    const group = byPath.get(p.file.replace(/^fr\//, '')) ?? [p];
    const links = group
      .map(
        (alt) =>
          `    <xhtml:link rel="alternate" hreflang="${alt.lang}" href="${alt.canonical}"/>`,
      )
      .join('\n');
    const isHome = p.path === '/' || p.path === '/fr';
    return `  <url>
    <loc>${p.canonical}</loc>
${links}
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${isHome ? '1.0' : '0.8'}</priority>
  </url>`;
  })
  .join('\n');

await writeFile(
  join(DIST, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`,
);

await rm(join(ROOT, '.ssr'), { recursive: true, force: true });

/* ----------------------------------------------------------- report ---- */

const kb = (n) => (n / 1024).toFixed(1).padStart(6) + ' kB';
console.log('\n  prerendered');
for (const w of written) {
  console.log(`    ${w.lang}  ${w.file.padEnd(24)} ${kb(w.bytes)}   gzip ${kb(w.gz)}`);
}

let js = 0;
let css = 0;
let fonts = 0;
for (const f of assets) {
  const buf = await readFile(join(DIST, 'assets', f));
  if (f.endsWith('.js')) js += gzipSync(buf).length;
  else if (f.endsWith('.css')) css += gzipSync(buf).length;
  else if (f.endsWith('.woff2')) fonts += (await stat(join(DIST, 'assets', f))).size;
}
console.log(`\n  shipped (gzip)    js ${kb(js)}    css ${kb(css)}    fonts ${kb(fonts)}`);
const langs = new Set(written.map((w) => w.lang));
console.log(`  sitemap.xml       ${indexable.length} urls across ${langs.size} languages`);
console.log(`  csp               ${CSP ? 'on' : 'off'}\n`);
