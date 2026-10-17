import type { RenderCtx, Route, RouteMeta } from '../../app/types';
import { alternates, localePath } from '../../i18n';
import { arrowThin } from '../../lib/icons';
import { initReveal } from '../../ui/reveal';
import { X3_PATH, X3_ROBOTS, article, bullets, paras, subnav, table } from './shared';

/**
 * The Chrome extension's own privacy policy — the URL given to the Chrome Web
 * Store. Unlike the product pages, it names the extension plainly: the store
 * reviews this page against the manifest, permission by permission.
 */
export const X3_EXT_PRIVACY_PATH = '/x3companion/privacy/extension';

export const x3PrivacyExtension: Route = {
  id: 'x3-privacy-extension',
  path: X3_EXT_PRIVACY_PATH,
  theme: 'x3',

  meta({ lang, t }: RenderCtx): RouteMeta {
    const m = t.x3.extPrivacy.meta;
    return {
      title: m.title,
      description: m.description,
      canonicalPath: localePath(lang, X3_EXT_PRIVACY_PATH),
      ogTitle: m.ogTitle,
      ogDescription: m.ogDescription,
      themeColor: '#0B1412',
      themeColorLight: '#F6F9F7',
      icon: '/icons/x3companion-64.png',
      alternates: alternates(X3_EXT_PRIVACY_PATH),
      robots: X3_ROBOTS,
    };
  },

  render(ctx: RenderCtx): string {
    const e = ctx.t.x3.extPrivacy;
    const section = (s: (typeof e.before)[number]) => ({
      id: s.id,
      title: s.title,
      html: paras(s.paras) + (s.list.length ? bullets(s.list) : ''),
    });

    const sections = [
      ...e.before.map(section),
      { id: 'permissions', title: e.permsTitle, html: `<p>${e.permsLead}</p>${table(e.permsHead, e.permsRows)}` },
      {
        id: 'data',
        title: e.dataTitle,
        html: `<p>${e.dataLead}</p>${table(e.dataHead, e.dataRows)}<p>${e.dataNot}</p>`,
      },
      ...e.after.map(section),
    ];

    return /* html */ `${subnav(ctx, 'privacy')}

  <section class="wrap x3-page-head" id="top">
    <p class="label rv"><span class="dot"></span> ${e.label}</p>
    <h1 class="rv">${e.h1}</h1>
    <p class="x3-updated rv" style="--d:80ms">${e.updated}</p>
    <p class="x3-more x3-more-left rv" style="--d:120ms"><a href="${ctx.href(X3_PATH.privacy)}">${e.back} ${arrowThin()}</a></p>
  </section>
${article(e.toc, sections)}

  <section class="wrap">
    <p class="x3-legal">${ctx.t.x3.common.legal}</p>
  </section>`;
  },

  mount(main: HTMLElement): () => void {
    return initReveal(main);
  },
};
