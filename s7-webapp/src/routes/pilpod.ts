import type { RenderCtx, Route, RouteMeta } from '../app/types';
import { alternates, localePath } from '../i18n';
import { arrow, pilpodMark, puzzleIcon } from '../lib/icons';
import { initReveal } from '../ui/reveal';

const pad = (n: number): string => (n < 10 ? '0' : '') + n;

const CHROME_STORE =
  'https://chromewebstore.google.com/detail/pilpod-companion/ooogjmdnagfepkocppnldkafbcbmdhal';

export const pilpod: Route = {
  id: 'pilpod',
  path: '/pilpod',
  theme: 'pilpod',

  meta({ lang, t }: RenderCtx): RouteMeta {
    return {
      title: t.pilpod.meta.title,
      description: t.pilpod.meta.description,
      canonicalPath: localePath(lang, '/pilpod'),
      ogTitle: t.pilpod.meta.ogTitle,
      ogDescription: t.pilpod.meta.ogDescription,
      themeColor: '#0F172A',
      themeColorLight: '#F8FAFC',
      icon: '/icons/pilpod.svg',
      alternates: alternates('/pilpod'),
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'PilPod',
        applicationCategory: 'BrowserApplication',
        operatingSystem: 'Chrome',
        softwareVersion: '2.1.0',
        url: 'https://pilpod.ma/',
        downloadUrl: CHROME_STORE,
        description: t.pilpod.meta.jsonLdDescription,
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        publisher: { '@type': 'Organization', name: 'S7', url: 'https://s7.ma/' },
      },
    };
  },

  render({ t, href }: RenderCtx): string {
    const p = t.pilpod;

    const panel = p.panel
      .map(
        ([step, detail], i) => `<li><b>${pad(i + 1)}</b> <span>${step}</span> — ${detail}</li>`,
      )
      .join('\n          ');

    const decisions = p.decisions
      .map(
        ([title, body], i) => /* html */ `
      <li class="rv">
        <span class="n">${pad(i + 1)}</span>
        <h3>${title}</h3>
        <p>${body}</p>
      </li>`,
      )
      .join('');

    const privacy = p.privacyPoints
      .map(
        ([title, body], i) => /* html */ `
      <div class="pp-card rv"${i ? ` style="--d:${i * 80}ms"` : ''}>
        <h3>${title}</h3>
        <p>${body}</p>
      </div>`,
      )
      .join('');

    return /* html */ `
  <!-- ============ HERO ============ -->
  <section class="pd-hero wrap" id="top">
    <p class="crumb"><a href="${href('/#products')}">${p.crumbProducts}</a> <span>/</span> <span>${p.crumbCurrent}</span></p>

    <div class="pd-head rv">
      ${pilpodMark('pd-mark')}
      <div class="pd-titles">
        <h1>PilPod</h1>
        <p class="pd-kind">${p.kind}</p>
      </div>
    </div>

    <p class="pd-lead rv" style="--d:80ms">${p.lead}</p>

    <dl class="spec rv" style="--d:140ms">
      ${p.specs.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('\n      ')}
    </dl>

    <div class="pd-cta rv" style="--d:200ms">
      <a class="btn btn-primary" href="${CHROME_STORE}" target="_blank" rel="noopener">
        ${puzzleIcon()}
        ${p.ctaInstall}
      </a>
      <a class="btn btn-ghost" href="https://pilpod.ma/" target="_blank" rel="noopener">
        ${p.ctaSite}
        ${arrow()}
      </a>
      <a class="btn btn-ghost" href="${href('/#products')}">${p.ctaAll}</a>
      <span class="status-pill is-live"><i></i> ${p.statusPill}</span>
    </div>
  </section>

  <!-- ============ THE PRODUCT ============ -->
  <section class="wrap">
    <p class="label rv"><span class="dot"></span> ${p.productLabel}</p>

    <div class="prod">
      <div class="rv">
        <h2>${p.productHeading}</h2>
        <p style="margin-top:1.5rem">${p.productP1}</p>
        <p>${p.productP2}</p>
        <p>${p.productP3}</p>
      </div>

      <div class="loop rv" style="--d:120ms">
        <p class="loop-bar"><i></i> ${p.panelBar}</p>
        <ol>
          ${panel}
        </ol>
      </div>
    </div>
  </section>

  <!-- ============ ENGINEERING ============ -->
  <section class="wrap">
    <p class="label rv"><span class="dot"></span> ${p.engineeringLabel}</p>

    <div class="sec-head rv">
      <h2>${p.engineeringHeading}</h2>
      <p>${p.engineeringLead}</p>
    </div>

    <ol class="eng">${decisions}
    </ol>
  </section>

  <!-- ============ PRIVACY ============ -->
  <section class="wrap">
    <p class="label rv"><span class="dot"></span> ${p.privacyLabel}</p>

    <div class="sec-head rv">
      <h2>${p.privacyHeading}</h2>
      <p>${p.privacyBody}</p>
    </div>

    <div class="pp-privacy">${privacy}
    </div>
  </section>

  <!-- ============ STATUS ============ -->
  <section class="wrap">
    <p class="label rv"><span class="dot"></span> ${p.statusLabel}</p>

    <div class="pd-status">
      <div class="rv">
        <h2>${p.statusHeading}</h2>
        <p>${p.statusBody}</p>
        <p class="note">${p.statusNote}</p>
      </div>

      <dl class="plat rv" style="--d:100ms">
        ${p.platforms
          .map(([k, v], i) => `<div><dt>${k}</dt><dd${i === 0 ? ' class="ok"' : ''}>${v}</dd></div>`)
          .join('\n        ')}
      </dl>
    </div>
  </section>`;
  },

  mount(main: HTMLElement): () => void {
    return initReveal(main);
  },
};
