import type { RenderCtx, Route, RouteMeta } from '../../app/types';
import { localePath } from '../../i18n';
import { arrow, arrowThin, x3Mark } from '../../lib/icons';
import { initReveal } from '../../ui/reveal';
import { X3_PATH, closing, flowList, pad, subnav, x3Meta } from './shared';

const PILLAR_ANCHORS = ['#screens', '#users', '#ai'] as const;

export const x3Home: Route = {
  id: 'x3companion',
  path: X3_PATH.overview,
  theme: 'x3',

  meta(ctx: RenderCtx): RouteMeta {
    const m = ctx.t.x3.home.meta;
    return x3Meta(ctx, 'overview', m, {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'X3Companion',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Windows',
      url: 'https://s7.ma' + localePath(ctx.lang, X3_PATH.overview),
      description: m.jsonLdDescription,
      publisher: { '@type': 'Organization', name: 'S7', url: 'https://s7.ma/' },
    });
  },

  render(ctx: RenderCtx): string {
    const { href } = ctx;
    const x = ctx.t.x3.home;

    const pillars = x.pillars
      .map(
        ([title, body, label], i) => /* html */ `
      <a class="x3-pillar rv" href="${href(X3_PATH.features + (PILLAR_ANCHORS[i] ?? ''))}"${i ? ` style="--d:${i * 80}ms"` : ''}>
        <span class="n">${pad(i + 1)}</span>
        <h3>${title}</h3>
        <p>${body}</p>
        <span class="go">${label} ${arrowThin()}</span>
      </a>`,
      )
      .join('');

    const [, colUsual, colOurs] = x.whyCols;
    const why = x.whyRows
      .map(
        ([aspect, usual, ours]) => /* html */ `
        <tr>
          <th scope="row">${aspect}</th>
          <td class="usual" data-col="${colUsual}">${usual}</td>
          <td class="ours" data-col="${colOurs}">${ours}</td>
        </tr>`,
      )
      .join('');

    const trust = x.trust
      .map(
        ([title, body], i) => /* html */ `
        <div class="pp-card rv"${i ? ` style="--d:${i * 80}ms"` : ''}>
          <h3>${title}</h3>
          <p>${body}</p>
        </div>`,
      )
      .join('');

    return /* html */ `${subnav(ctx, 'overview')}

  <!-- ============ HERO ============ -->
  <section class="pd-hero x3-hero wrap" id="top">
    <div class="pd-head rv">
      ${x3Mark('pd-mark')}
      <div class="pd-titles">
        <h1>X3Companion</h1>
        <p class="pd-kind">${x.kind}</p>
      </div>
    </div>

    <p class="pd-lead rv" style="--d:80ms">${x.lead}</p>

    <dl class="spec rv" style="--d:140ms">
      ${x.specs.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('\n      ')}
    </dl>

    <div class="pd-cta rv" style="--d:200ms">
      <a class="btn btn-primary" href="${href('/contact')}">
        ${ctx.t.x3.common.ctaDemo}
        ${arrow()}
      </a>
      <a class="btn btn-ghost" href="${href(X3_PATH.features)}">${x.ctaFeatures}</a>
      <span class="status-pill"><i></i> ${x.statusPill}</span>
    </div>
  </section>

  <!-- ============ THE THREE PILLARS ============ -->
  <section class="wrap">
    <p class="label rv"><span class="dot"></span> ${x.pillarsLabel}</p>
    <div class="sec-head rv">
      <h2>${x.pillarsHeading}</h2>
    </div>
    <div class="x3-pillars">${pillars}
    </div>
  </section>

  <!-- ============ WHY ============ -->
  <section class="wrap">
    <p class="label rv"><span class="dot"></span> ${x.whyLabel}</p>
    <div class="sec-head rv">
      <h2>${x.whyHeading}</h2>
      <p>${x.whyLead}</p>
    </div>
    <div class="x3-vs rv">
      <table>
        <thead>
          <tr>
            <td></td>
            <th scope="col" class="usual">${colUsual}</th>
            <th scope="col" class="ours">${colOurs}</th>
          </tr>
        </thead>
        <tbody>${why}
        </tbody>
      </table>
    </div>
  </section>

  <!-- ============ IN SAGE ============ -->
  <section class="wrap">
    <p class="label rv"><span class="dot"></span> ${x.shotLabel}</p>
    <div class="sec-head rv">
      <h2>${x.shotHeading}</h2>
      <p>${x.shotLead}</p>
    </div>
    <div class="x3-shots x3-shots-one">
      <figure class="rv">
        <img src="/x3companion/recap-devis.webp" width="1280" height="800"
             alt="${x.shotAlt}" loading="lazy" decoding="async" />
        <figcaption><span>${x.shotCaption}</span></figcaption>
      </figure>
    </div>
    <p class="x3-more rv">
      <span>${x.shotNote}</span>
      <a href="${href(X3_PATH.features)}">${x.shotLink} ${arrowThin()}</a>
    </p>
  </section>

  <!-- ============ HOW IT WORKS ============ -->
  <section class="wrap">
    <p class="label rv"><span class="dot"></span> ${x.flowLabel}</p>
    <div class="sec-head rv">
      <h2>${x.flowHeading}</h2>
      <p>${x.flowLead}</p>
    </div>
    <ol class="x3-flow">${flowList(x.flow)}
    </ol>
    <p class="x3-more rv">
      <span></span>
      <a href="${href(X3_PATH.docs)}">${x.flowLink} ${arrowThin()}</a>
    </p>
  </section>

  <!-- ============ WHY IT SAYS YES ============ -->
  <section class="wrap">
    <p class="label rv"><span class="dot"></span> ${x.trustLabel}</p>
    <div class="pp-privacy">${trust}
    </div>
  </section>
${closing(ctx, { href: X3_PATH.docs, label: ctx.t.x3.features.ctaDocs })}`;
  },

  mount(main: HTMLElement): () => void {
    return initReveal(main);
  },
};
