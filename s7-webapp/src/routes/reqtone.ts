import type { RenderCtx, Route, RouteMeta } from '../app/types';
import { alternates, localePath } from '../i18n';
import { arrow, reqtoneMark } from '../lib/icons';
import { initReveal } from '../ui/reveal';
import { REQTONE_DOWNLOAD, REQTONE_VERSION } from '../app/releases';

const pad = (n: number): string => (n < 10 ? '0' : '') + n;

/** Row 0 (Windows) is published and reads green; rows 1–2 (macOS, Linux)
    carry the "not ready yet" colour. */
const WARN_ROWS = 3;

export const reqtone: Route = {
  id: 'reqtone',
  path: '/reqtone',
  theme: 'reqtone',

  meta({ lang, t }: RenderCtx): RouteMeta {
    return {
      title: t.reqtone.meta.title,
      description: t.reqtone.meta.description,
      canonicalPath: localePath(lang, '/reqtone'),
      ogTitle: t.reqtone.meta.ogTitle,
      ogDescription: t.reqtone.meta.ogDescription,
      themeColor: '#101116',
      themeColorLight: '#F7F8FA',
      icon: '/icons/reqtone.svg',
      alternates: alternates('/reqtone'),
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'ReqTone',
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Windows',
        softwareVersion: REQTONE_VERSION,
        url: 'https://reqtone.com/',
        downloadUrl: REQTONE_DOWNLOAD,
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        description: t.reqtone.meta.jsonLdDescription,
        publisher: { '@type': 'Organization', name: 'S7', url: 'https://s7.ma/' },
      },
    };
  },

  render({ t, href }: RenderCtx): string {
    const r = t.reqtone;

    const decisions = r.decisions
      .map(
        ([title, body], i) => /* html */ `
      <li class="rv">
        <span class="n">${pad(i + 1)}</span>
        <h3>${title}</h3>
        <p>${body}</p>
      </li>`,
      )
      .join('');

    const features = r.features
      .map(
        ([title, items], i) => /* html */ `
      <section class="fg rv"${i ? ` style="--d:${i * 60}ms"` : ''}>
        <h3>${title}</h3>
        <ul>
          ${items.map((li) => `<li>${li}</li>`).join('\n          ')}
        </ul>
      </section>`,
      )
      .join('');

    const loop = r.loop
      .map(
        ([step, detail], i) =>
          `<li><b>${pad(i + 1)}</b> <span>${step}</span> — ${detail}</li>`,
      )
      .join('\n          ');

    return /* html */ `
  <!-- ============ HERO ============ -->
  <section class="pd-hero wrap" id="top">
    <p class="crumb"><a href="${href('/#products')}">${r.crumbProducts}</a> <span>/</span> <span>${r.crumbCurrent}</span></p>

    <div class="pd-head rv">
      ${reqtoneMark('pd-hero-grad', 'pd-mark')}
      <div class="pd-titles">
        <h1>ReqTone</h1>
        <p class="pd-kind">${r.kind}</p>
      </div>
    </div>

    <p class="pd-lead rv" style="--d:80ms">${r.lead}</p>

    <dl class="spec rv" style="--d:140ms">
      ${r.specs.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('\n      ')}
    </dl>

    <p class="methods rv" style="--d:180ms" aria-hidden="true">
      <span class="m-get">GET</span>
      <span class="m-post">POST</span>
      <span class="m-put">PUT</span>
      <span class="m-patch">PATCH</span>
      <span class="m-del">DELETE</span>
    </p>

    <div class="pd-cta rv" style="--d:220ms">
      <a class="btn btn-primary" href="${REQTONE_DOWNLOAD}" target="_blank" rel="noopener">
        ${r.ctaDownload}
        ${arrow()}
      </a>
      <a class="btn btn-ghost" href="https://reqtone.com/" target="_blank" rel="noopener">
        ${r.ctaVisit}
        ${arrow()}
      </a>
      <a class="btn btn-ghost" href="${href('/#products')}">${r.ctaAll}</a>
      <span class="status-pill is-live"><i></i> ${r.statusPill}</span>
    </div>
  </section>

  <!-- ============ THE PRODUCT ============ -->
  <section class="wrap">
    <p class="label rv"><span class="dot"></span> ${r.productLabel}</p>

    <div class="prod">
      <div class="rv">
        <h2>${r.productHeading}</h2>
        <p style="margin-top:1.5rem">${r.productP1}</p>
        <p>${r.productP2}</p>
        <p>${r.productP3}</p>
      </div>

      <div class="loop rv" style="--d:120ms">
        <p class="loop-bar"><i></i> ${r.loopBar}</p>
        <ol>
          ${loop}
        </ol>
      </div>
    </div>
  </section>

  <!-- ============ ENGINEERING ============ -->
  <section class="wrap">
    <p class="label rv"><span class="dot"></span> ${r.engineeringLabel}</p>

    <div class="sec-head rv">
      <h2>${r.engineeringHeading}</h2>
      <p>${r.engineeringLead}</p>
    </div>

    <ol class="eng">${decisions}
    </ol>
  </section>

  <!-- ============ FEATURES ============ -->
  <section class="wrap">
    <p class="label rv"><span class="dot"></span> ${r.featuresLabel}</p>

    <div class="sec-head rv">
      <h2>${r.featuresHeading}</h2>
      <p>${r.featuresLead}</p>
    </div>

    <div class="feat">${features}
    </div>
  </section>

  <!-- ============ STATUS ============ -->
  <section class="wrap">
    <p class="label rv"><span class="dot"></span> ${r.statusLabel}</p>

    <div class="pd-status">
      <div class="rv">
        <h2>${r.statusHeading}</h2>
        <p>${r.statusBody}</p>
        <p class="note">${r.statusNote}</p>
      </div>

      <dl class="plat rv" style="--d:100ms">
        ${r.platforms
          .map(
            ([k, v], i) =>
              `<div><dt>${k}</dt><dd${i === 0 ? ' class="ok"' : i < WARN_ROWS ? ' class="v"' : ''}>${v}</dd></div>`,
          )
          .join('\n        ')}
      </dl>
    </div>
  </section>`;
  },

  mount(main: HTMLElement): () => void {
    return initReveal(main);
  },
};
