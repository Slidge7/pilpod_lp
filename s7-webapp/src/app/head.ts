import type { HeadTags, RouteMeta } from './types';
import type { Lang } from '../i18n';
import { S7_FAVICON } from '../lib/icons';

/** Production origin. Canonical URLs are absolute against this, always. */
export const ORIGIN = 'https://s7.ma';

const esc = (s: string): string =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const absolute = (path: string): string => ORIGIN + (path === '/' ? '/' : path);

/** BCP-47 tags used in hreflang and og:locale. */
const HREFLANG: Record<Lang, string> = { en: 'en', fr: 'fr' };
const OG_LOCALE: Record<Lang, string> = { en: 'en_US', fr: 'fr_FR' };

/* ------------------------------------------------------- build-time <head> */

/**
 * The full set of head tags for a route in one language, written into the
 * static HTML at build time. Crawlers and link unfurlers never run our
 * JavaScript, so this is the only version of the metadata they will ever see —
 * it has to be complete, and it has to point at the other language.
 */
export function headTags(meta: RouteMeta, lang: Lang): HeadTags {
  const url = absolute(meta.canonicalPath);
  const tags: string[] = [
    `<meta name="description" content="${esc(meta.description)}">`,
    `<meta name="theme-color" content="${meta.themeColor}">`,
    `<meta name="color-scheme" content="dark light">`,
    `<link rel="canonical" href="${url}">`,
    `<meta name="robots" content="${meta.robots ?? 'index, follow'}">`,
    ``,
  ];

  // hreflang: each language's URL for this same page, plus the default one
  // search engines fall back to for everyone else.
  for (const alt of meta.alternates) {
    tags.push(
      `<link rel="alternate" hreflang="${HREFLANG[alt.lang]}" href="${absolute(alt.path)}">`,
    );
  }
  const fallback = meta.alternates.find((a) => a.lang === 'en');
  if (fallback) {
    tags.push(`<link rel="alternate" hreflang="x-default" href="${absolute(fallback.path)}">`);
  }

  tags.push(
    ``,
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="S7">`,
    `<meta property="og:locale" content="${OG_LOCALE[lang]}">`,
    `<meta property="og:title" content="${esc(meta.ogTitle)}">`,
    `<meta property="og:description" content="${esc(meta.ogDescription)}">`,
    `<meta property="og:url" content="${url}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${esc(meta.ogTitle)}">`,
    `<meta name="twitter:description" content="${esc(meta.ogDescription)}">`,
    ``,
    `<link rel="icon" id="favicon" href="${meta.icon ?? S7_FAVICON}"${meta.icon ? ' type="image/svg+xml"' : ''}>`,
  );

  if (meta.jsonLd) {
    tags.push(
      ``,
      `<script type="application/ld+json" id="ld">\n${JSON.stringify(meta.jsonLd, null, 2)}\n</script>`,
    );
  }

  return { title: meta.title, tags };
}

/* ----------------------------------------------------------- runtime <head> */

/** The meta of the route currently mounted, so theme-colour can be re-applied. */
let mounted: RouteMeta | null = null;

/** Browser UI colour follows both the route palette and the light/dark mode. */
export function refreshThemeColor(): void {
  if (!mounted) return;
  const light = document.documentElement.dataset.mode === 'light';
  setAttr(
    'meta[name="theme-color"]',
    'content',
    light ? mounted.themeColorLight : mounted.themeColor,
  );
}

function setAttr(selector: string, attr: string, value: string): void {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

/**
 * Bring the live document's head in line with the route and language that just
 * mounted. Every tag except JSON-LD exists in every prerendered page, so this
 * is almost entirely attribute rewrites.
 */
export function applyMeta(meta: RouteMeta, lang: Lang): void {
  const url = absolute(meta.canonicalPath);

  mounted = meta;
  document.title = meta.title;
  document.documentElement.lang = HREFLANG[lang];

  setAttr('meta[name="description"]', 'content', meta.description);
  refreshThemeColor();
  setAttr('meta[name="robots"]', 'content', meta.robots ?? 'index, follow');
  setAttr('link[rel="canonical"]', 'href', url);
  setAttr('meta[property="og:locale"]', 'content', OG_LOCALE[lang]);
  setAttr('meta[property="og:title"]', 'content', meta.ogTitle);
  setAttr('meta[property="og:description"]', 'content', meta.ogDescription);
  setAttr('meta[property="og:url"]', 'content', url);
  setAttr('meta[name="twitter:title"]', 'content', meta.ogTitle);
  setAttr('meta[name="twitter:description"]', 'content', meta.ogDescription);

  for (const alt of meta.alternates) {
    setAttr(`link[rel="alternate"][hreflang="${HREFLANG[alt.lang]}"]`, 'href', absolute(alt.path));
    if (alt.lang === 'en') {
      setAttr('link[rel="alternate"][hreflang="x-default"]', 'href', absolute(alt.path));
    }
  }

  const icon = document.getElementById('favicon');
  if (icon) icon.setAttribute('href', meta.icon ?? S7_FAVICON);

  // Structured data: the only head tag that can legitimately appear or vanish
  // between routes (the 404 has none).
  let ld = document.getElementById('ld');
  if (meta.jsonLd) {
    if (!ld) {
      ld = document.createElement('script');
      ld.id = 'ld';
      ld.setAttribute('type', 'application/ld+json');
      document.head.append(ld);
    }
    ld.textContent = JSON.stringify(meta.jsonLd, null, 2);
  } else {
    ld?.remove();
  }
}
