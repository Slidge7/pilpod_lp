/**
 * X3Companion — a small site inside the S7 site.
 *
 * Four routes (overview, features, docs, privacy) share the `x3` theme, the
 * product bar below the studio nav, the closing call to action and the Sage
 * trademark notice. Everything they share lives here, so a fifth page is one
 * new file plus one entry in PAGES.
 */
import type { RenderCtx, RouteMeta } from '../../app/types';
import { alternates, localePath } from '../../i18n';
import { arrow, x3Mark } from '../../lib/icons';

/**
 * Not announced yet: reachable by its URL only. Kept out of search results and
 * out of the sitemap, and nothing else on the site links here. When it goes
 * public, delete this and put the links back (home card, footer, contact topic).
 */
export const X3_ROBOTS = 'noindex, nofollow';

export const pad = (n: number): string => (n < 10 ? '0' : '') + n;

/** The section's pages, in the order the product bar shows them. */
export const PAGES = ['overview', 'features', 'docs', 'privacy'] as const;
export type X3Page = (typeof PAGES)[number];

export const X3_PATH: Record<X3Page, string> = {
  overview: '/x3companion',
  features: '/x3companion/features',
  docs: '/x3companion/docs',
  privacy: '/x3companion/privacy',
};

/** Head tags every page of the section shares; the page supplies its copy. */
export function x3Meta(
  { lang }: RenderCtx,
  page: X3Page,
  copy: { title: string; description: string; ogTitle: string; ogDescription: string },
  jsonLd?: Record<string, unknown>,
): RouteMeta {
  const path = X3_PATH[page];
  return {
    title: copy.title,
    description: copy.description,
    canonicalPath: localePath(lang, path),
    ogTitle: copy.ogTitle,
    ogDescription: copy.ogDescription,
    themeColor: '#0B1412',
    themeColorLight: '#F6F9F7',
    icon: '/icons/x3companion-64.png',
    alternates: alternates(path),
    robots: X3_ROBOTS,
    ...(jsonLd ? { jsonLd } : {}),
  };
}

/**
 * The product bar: the section's own navigation, sticky under the studio nav.
 * It is part of each page's render, so the current page is marked at build
 * time and needs no script.
 */
export function subnav({ t, href }: RenderCtx, current: X3Page): string {
  const n = t.x3.nav;
  const links = PAGES.map((p) => {
    const here = p === current;
    return `<a href="${href(X3_PATH[p])}"${here ? ' aria-current="page"' : ''}>${n[p]}</a>`;
  }).join('\n        ');

  return /* html */ `
  <div class="x3-bar" data-subnav>
    <div class="wrap x3-bar-inner">
      <a class="x3-bar-brand" href="${href(X3_PATH.overview)}">
        ${x3Mark('x3-bar-mark', '')}
        <span>X3Companion</span>
      </a>
      <nav class="x3-bar-links" aria-label="${n.label}">
        ${links}
      </nav>
      <a class="btn btn-primary x3-bar-cta" href="${href('/contact')}">${n.cta}</a>
    </div>
  </div>`;
}

/** The closing band every page ends on, then the trademark notice. */
export function closing({ t, href }: RenderCtx, secondary?: { href: string; label: string }): string {
  const c = t.x3.common;
  return /* html */ `
  <section class="wrap">
    <div class="x3-cta rv">
      <div>
        <h2>${c.closeHeading}</h2>
        <p>${c.closeBody}</p>
      </div>
      <div class="x3-cta-actions">
        <a class="btn btn-primary" href="${href('/contact')}">
          ${c.ctaDemo}
          ${arrow()}
        </a>
        ${secondary ? `<a class="btn btn-ghost" href="${href(secondary.href)}">${secondary.label}</a>` : ''}
      </div>
    </div>
    <p class="x3-legal">${c.legal}</p>
  </section>`;
}

/** A feature group as a card: heading, then its bullets. */
export const group = (heading: string, items: readonly string[], i: number): string => /* html */ `
      <section class="fg rv"${i ? ` style="--d:${i * 80}ms"` : ''}>
        <h3>${heading}</h3>
        <ul>
          ${items.map((item) => `<li>${item}</li>`).join('\n          ')}
        </ul>
      </section>`;

/** The four-box flow. `technical` swaps in the docs page's wording. */
export function flowList(rows: ReadonlyArray<readonly [string, string, string]>): string {
  return rows
    .map(
      ([where, title, body], i) => /* html */ `
      <li class="rv${i === 0 ? ' is-sage' : i === 1 ? ' is-ours' : ''}"${i ? ` style="--d:${i * 80}ms"` : ''}>
        <p class="where">${where}</p>
        <h3>${title}</h3>
        <p>${body}</p>
      </li>`,
    )
    .join('');
}

/**
 * A long-form page (docs, privacy): a table of contents that stays in view on
 * wide screens, and the sections beside it.
 */
export function article(
  tocLabel: string,
  sections: ReadonlyArray<{ id: string; title: string; html: string }>,
): string {
  const toc = sections
    .map((s, i) => `<li><a href="#${s.id}"><b>${pad(i + 1)}</b> ${s.title}</a></li>`)
    .join('\n          ');
  const body = sections
    .map(
      (s, i) => /* html */ `
      <section class="x3-doc-sec" id="${s.id}">
        <h2><span>${pad(i + 1)}</span> ${s.title}</h2>
        ${s.html}
      </section>`,
    )
    .join('');

  return /* html */ `
  <div class="wrap x3-doc">
    <aside class="x3-toc">
      <nav aria-label="${tocLabel}">
        <p>${tocLabel}</p>
        <ol>
          ${toc}
        </ol>
      </nav>
    </aside>
    <div class="x3-doc-body">${body}
    </div>
  </div>`;
}

/** A plain table from a header row and body rows. */
export function table(head: readonly string[], rows: ReadonlyArray<readonly string[]>): string {
  return /* html */ `
        <div class="x3-table"><table>
          <thead><tr>${head.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
          <tbody>
            ${rows
              .map((r) => `<tr>${r.map((c, i) => (i === 0 ? `<th scope="row">${c}</th>` : `<td>${c}</td>`)).join('')}</tr>`)
              .join('\n            ')}
          </tbody>
        </table></div>`;
}

/** Paragraphs from a list of strings. */
export const paras = (list: readonly string[]): string => list.map((p) => `<p>${p}</p>`).join('\n        ');

/** A bullet list from a list of strings. */
export const bullets = (list: readonly string[]): string =>
  `<ul>${list.map((li) => `<li>${li}</li>`).join('')}</ul>`;
