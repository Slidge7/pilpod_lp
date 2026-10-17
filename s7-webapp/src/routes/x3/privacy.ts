import type { RenderCtx, Route, RouteMeta } from '../../app/types';
import { arrowThin } from '../../lib/icons';
import { initReveal } from '../../ui/reveal';
import { X3_EXT_PRIVACY_PATH } from './privacy-extension';
import { article, bullets, paras, subnav, x3Meta, X3_PATH } from './shared';

export const x3Privacy: Route = {
  id: 'x3-privacy',
  path: X3_PATH.privacy,
  theme: 'x3',

  meta(ctx: RenderCtx): RouteMeta {
    return x3Meta(ctx, 'privacy', ctx.t.x3.privacy.meta);
  },

  render(ctx: RenderCtx): string {
    const p = ctx.t.x3.privacy;
    const sections = p.sections.map((s) => ({
      id: s.id,
      title: s.title,
      html: paras(s.paras) + (s.list.length ? bullets(s.list) : ''),
    }));

    return /* html */ `${subnav(ctx, 'privacy')}

  <section class="wrap x3-page-head" id="top">
    <p class="label rv"><span class="dot"></span> ${p.label}</p>
    <h1 class="rv">${p.h1}</h1>
    <p class="x3-updated rv" style="--d:80ms">${p.updated}</p>
    <p class="x3-note rv" style="--d:120ms">${p.extNote} <a href="${ctx.href(X3_EXT_PRIVACY_PATH)}">${p.extLink} ${arrowThin()}</a></p>
  </section>
${article(p.toc, sections)}

  <section class="wrap">
    <p class="x3-legal">${ctx.t.x3.common.legal}</p>
  </section>`;
  },

  mount(main: HTMLElement): () => void {
    return initReveal(main);
  },
};
