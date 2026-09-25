import type { RenderCtx, Route, RouteMeta } from '../app/types';
import { alternates, localePath } from '../i18n';
import { arrow } from '../lib/icons';
import { initReveal } from '../ui/reveal';

const pad = (n: number): string => (n < 10 ? '0' : '') + n;

export const services: Route = {
  id: 'services',
  path: '/services',
  theme: 's7',

  meta({ lang, t }: RenderCtx): RouteMeta {
    return {
      title: t.services.meta.title,
      description: t.services.meta.description,
      canonicalPath: localePath(lang, '/services'),
      ogTitle: t.services.meta.ogTitle,
      ogDescription: t.services.meta.ogDescription,
      themeColor: '#0A0A0B',
      themeColorLight: '#F6F3EE',
      alternates: alternates('/services'),
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'S7 — Service7',
        url: 'https://s7.ma/services',
        description: t.services.meta.jsonLdDescription,
        areaServed: 'Worldwide',
        address: { '@type': 'PostalAddress', addressCountry: 'MA' },
        knowsAbout: [
          'Custom software development',
          'Sage X3 integration',
          'Java',
          'Spring Boot',
          'React',
          'Rust',
          'Developer tooling',
        ],
      },
    };
  },

  render({ t, href }: RenderCtx): string {
    const s = t.services;

    const offers = s.offers
      .map(
        ([title, body], i) => /* html */ `
      <article class="svc rv"${i ? ` style="--d:${i * 80}ms"` : ''}>
        <span class="svc-n">${pad(i + 1)}</span>
        <h3>${title}</h3>
        <p>${body}</p>
      </article>`,
      )
      .join('');

    const process = s.process
      .map(
        ([title, body], i) => /* html */ `
        <li class="pr rv">
          <span class="pr-n">${pad(i + 1)}</span>
          <h3 class="pr-t">${title}</h3>
          <p class="pr-d">${body}</p>
        </li>`,
      )
      .join('');

    const stack = s.stack
      .map(
        ([group, items]) => /* html */ `
        <div class="stack-row rv">
          <dt>${group}</dt>
          <dd>${items}</dd>
        </div>`,
      )
      .join('');

    return /* html */ `
  <!-- ============ HERO ============ -->
  <section class="svc-hero wrap" id="top">
    <p class="eyebrow"><span class="pulse"></span> ${s.label}</p>

    <h1>${s.h1}</h1>

    <p class="hero-sub">${s.lead}</p>

    <div class="hero-cta">
      <a class="btn btn-primary" href="${href('/contact')}">
        ${s.ctaStart}
        ${arrow()}
      </a>
      <a class="btn btn-ghost" href="${href('/#standard')}">${s.ctaStandard}</a>
    </div>

    <p class="hero-meta">
      <span>${s.stat1}</span>
      <span>${s.stat2}</span>
      <span>${s.stat3}</span>
      <span>${s.stat4}</span>
    </p>
  </section>

  <!-- ============ WHAT WE DO ============ -->
  <section id="what" class="wrap">
    <p class="label rv"><span class="dot"></span> ${s.offerLabel}</p>

    <div class="section-head">
      <h2 class="rv">${s.offerHeading}</h2>
      <p class="rv" style="--d:80ms">${s.offerLead}</p>
    </div>

    <div class="svc-grid">${offers}
    </div>
  </section>

  <!-- ============ HOW THE WORK RUNS ============ -->
  <section id="process" class="standard wrap">
    <p class="label rv"><span class="dot"></span> ${s.processLabel}</p>

    <div class="std-grid">
      <div class="std-aside rv">
        <h2>${s.processHeading}</h2>
        <p>${s.processLead}</p>
      </div>

      <ol class="std-list">${process}
      </ol>
    </div>
  </section>

  <!-- ============ STACK ============ -->
  <section id="stack" class="wrap">
    <p class="label rv"><span class="dot"></span> ${s.stackLabel}</p>

    <div class="section-head">
      <h2 class="rv">${s.stackHeading}</h2>
      <p class="rv" style="--d:80ms">${s.stackLead}</p>
    </div>

    <dl class="stack">${stack}
    </dl>
  </section>

  <!-- ============ CLOSE ============ -->
  <section class="wrap">
    <div class="svc-close rv">
      <h2>${s.closeHeading}</h2>
      <p>${s.closeBody}</p>
      <a class="btn btn-primary" href="${href('/contact')}">
        ${s.ctaStart}
        ${arrow()}
      </a>
    </div>
  </section>`;
  },

  mount(main: HTMLElement): () => void {
    return initReveal(main);
  },
};
