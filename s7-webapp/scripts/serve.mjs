/**
 * Serve dist/ the way Firebase Hosting will: clean URLs, no trailing slash,
 * real 404s with 404.html. Zero dependencies — for checking a production
 * build locally before `firebase deploy`.
 *
 *   npm run build && npm run serve:dist
 */
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const DIST = fileURLToPath(new URL('../dist/', import.meta.url));
const PORT = Number(process.env.PORT ?? 4173);

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
};

async function file(p) {
  try {
    const s = await stat(p);
    return s.isFile() ? p : null;
  } catch {
    return null;
  }
}

async function resolve(urlPath) {
  const clean = normalize(decodeURIComponent(urlPath)).replace(/^(\.\.[/\\])+/, '');
  const base = join(DIST, clean);
  if (!base.startsWith(DIST)) return null;
  return (
    (await file(base)) ??
    (await file(base + '.html')) ??
    (await file(join(base, 'index.html')))
  );
}

createServer(async (req, res) => {
  const url = new URL(req.url ?? '/', 'http://localhost');

  // trailingSlash: false
  if (url.pathname.length > 1 && url.pathname.endsWith('/')) {
    res.writeHead(301, { Location: url.pathname.slice(0, -1) + url.search });
    return res.end();
  }

  const hit = await resolve(url.pathname);
  const path = hit ?? join(DIST, '404.html');
  const body = await readFile(path);
  const type = TYPES[extname(path)] ?? 'application/octet-stream';
  const immutable = url.pathname.startsWith('/assets/');

  res.writeHead(hit ? 200 : 404, {
    'Content-Type': type,
    'Cache-Control': immutable ? 'public, max-age=31536000, immutable' : 'no-cache',
  });
  res.end(body);
}).listen(PORT, () => {
  console.log(`\n  dist/ on http://localhost:${PORT}\n`);
});
