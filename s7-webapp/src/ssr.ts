/**
 * Build-time entry.
 *
 * Vite compiles this to a Node bundle; scripts/prerender.mjs imports it and
 * writes one static HTML file per route per language. The route modules it
 * pulls in are the exact modules the browser runs, so a prerendered page and a
 * client-rendered one can never disagree.
 */
import { prerenderable, routes, fallback } from './routes';
import { renderBody } from './app/shell';
import { headTags, ORIGIN } from './app/head';
import { LANGS, DEFAULT_LANG, dict, localeHref, localePath, otherLang, splitLocale, type Lang } from './i18n';
import type { RenderCtx, Route } from './app/types';

export interface Page {
  /** Path of the file to write, relative to dist/ — e.g. "fr/reqtone/index.html". */
  readonly file: string;
  readonly lang: Lang;
  readonly htmlLang: string;
  readonly path: string;
  readonly title: string;
  readonly head: string;
  readonly body: string;
  readonly theme: string;
  readonly id: string;
  readonly canonical: string;
  readonly indexable: boolean;
}

const YEAR = new Date().getFullYear();

/** Build-time context: links are plain paths, because base is always "/" here. */
function ctxFor(lang: Lang, path: string): RenderCtx {
  const other = otherLang(lang);
  return {
    lang,
    t: dict(lang),
    path,
    href: (href: string) => localeHref(lang, href),
    altHref: (href: string) => localeHref(other, href),
  };
}

function fileFor(route: Route, lang: Lang): string {
  // Firebase serves a single 404.html for every unmatched path, so only the
  // default language gets one. A French visitor who lands on it is switched to
  // French by the router as soon as it runs.
  if (route.id === 'notfound') return '404.html';

  const localised = localePath(lang, route.path);
  return localised === '/' ? 'index.html' : `${localised.replace(/^\//, '')}/index.html`;
}

function build(route: Route, lang: Lang): Page {
  const ctx = ctxFor(lang, route.path);
  const meta = route.meta(ctx);
  const head = headTags(meta, lang);

  return {
    file: fileFor(route, lang),
    lang,
    htmlLang: dict(lang).htmlLang,
    path: meta.canonicalPath,
    title: head.title,
    head: head.tags.join('\n'),
    body: renderBody(ctx, route.render(ctx), YEAR),
    theme: route.theme,
    id: route.id,
    canonical: ORIGIN + (meta.canonicalPath === '/' ? '/' : meta.canonicalPath),
    indexable: (meta.robots ?? 'index, follow').includes('index,'),
  };
}

/** Every file the build should emit. */
export function pages(): Page[] {
  const out: Page[] = [];
  for (const route of prerenderable) {
    for (const lang of LANGS) {
      if (route.id === 'notfound' && lang !== DEFAULT_LANG) continue;
      out.push(build(route, lang));
    }
  }
  return out;
}

/** Used by the dev-server plugin so `vite dev` renders what `vite build` would. */
export function pageForPath(pathname: string): Page {
  const { lang, path } = splitLocale(pathname.replace(/\/+$/, '') || '/');
  const route = routes.find((r) => r.path === (path || '/')) ?? fallback;
  return build(route, lang);
}

export { ORIGIN };
