import type { RenderCtx, Route, RouteMeta } from '../app/types';
import { alternates, localePath } from '../i18n';
import { arrow, s7Mark } from '../lib/icons';
import { initReveal } from '../ui/reveal';

export const notFound: Route = {
  id: 'notfound',
  path: '/404',
  theme: 's7',

  meta({ lang, t }: RenderCtx): RouteMeta {
    return {
      title: t.notFound.meta.title,
      description: t.notFound.meta.description,
      canonicalPath: localePath(lang, '/404'),
      ogTitle: t.notFound.meta.title,
      ogDescription: t.notFound.meta.description,
      themeColor: '#0A0A0B',
      themeColorLight: '#F6F3EE',
      robots: 'noindex',
      alternates: alternates('/404'),
    };
  },

  render({ t, href }: RenderCtx): string {
    return /* html */ `
  <section class="nf wrap" id="top">
    <p class="code rv"><i></i> ${t.notFound.code}</p>

    <h1 class="rv" style="--d:60ms">${t.notFound.h1}</h1>

    <p class="nf-body rv" style="--d:120ms">${t.notFound.body}</p>

    <div class="cta rv" style="--d:180ms">
      <a class="btn btn-primary" href="${href('/')}">
        ${t.notFound.ctaHome}
        ${arrow()}
      </a>
      <a class="btn btn-ghost" href="${href('/#products')}">${t.notFound.ctaProducts}</a>
    </div>

    <p class="nf-mark rv" style="--d:240ms">
      ${s7Mark()}
      ${t.notFound.mark}
    </p>
  </section>`;
  },

  mount(main: HTMLElement): () => void {
    return initReveal(main);
  },
};
