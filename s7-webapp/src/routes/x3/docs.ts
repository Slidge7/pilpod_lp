import type { RenderCtx, Route, RouteMeta } from '../../app/types';
import { initReveal } from '../../ui/reveal';
import { X3_PATH, article, closing, flowList, pad, paras, subnav, table, x3Meta } from './shared';

export const x3Docs: Route = {
  id: 'x3-docs',
  path: X3_PATH.docs,
  theme: 'x3',

  meta(ctx: RenderCtx): RouteMeta {
    return x3Meta(ctx, 'docs', ctx.t.x3.docs.meta);
  },

  render(ctx: RenderCtx): string {
    const d = ctx.t.x3.docs;

    const steps = d.deploySteps
      .map(([step, detail], i) => `<li><b>${pad(i + 1)}</b> <p><span>${step}</span> ${detail}</p></li>`)
      .join('\n          ');

    const security = d.securityGroups
      .map(
        ([heading, items]) => /* html */ `
          <section class="fg">
            <h3>${heading}</h3>
            <ul>${items.map((li) => `<li>${li}</li>`).join('')}</ul>
          </section>`,
      )
      .join('');

    const faq = d.faq
      .map(
        ([q, a]) => /* html */ `
          <details>
            <summary>${q}</summary>
            <p>${a}</p>
          </details>`,
      )
      .join('');

    const sections = [
      { id: 'overview', title: d.s.overview, html: paras(d.overview) },
      {
        id: 'architecture',
        title: d.s.arch,
        html: `<p>${d.archLead}</p>
        <ol class="x3-flow x3-flow-doc">${flowList(d.flow)}
        </ol>
        ${table(d.archHead, d.archRows)}`,
      },
      { id: 'requirements', title: d.s.req, html: `<p>${d.reqLead}</p>${table(d.reqHead, d.reqRows)}` },
      {
        id: 'deployment',
        title: d.s.deploy,
        html: `<p>${d.deployLead}</p>
        <div class="loop x3-steps"><ol>
          ${steps}
        </ol></div>`,
      },
      { id: 'definitions', title: d.s.defs, html: paras(d.defs) },
      { id: 'security', title: d.s.security, html: `<p>${d.securityLead}</p><div class="x3-sec">${security}</div>` },
      { id: 'ai', title: d.s.ai, html: paras(d.ai) },
      { id: 'upgrades', title: d.s.upgrades, html: paras(d.upgrades) },
      { id: 'faq', title: d.s.faq, html: `<div class="x3-faq">${faq}</div>` },
    ];

    return /* html */ `${subnav(ctx, 'docs')}

  <section class="wrap x3-page-head" id="top">
    <p class="label rv"><span class="dot"></span> ${d.label}</p>
    <h1 class="rv">${d.h1}</h1>
    <p class="x3-page-lead rv" style="--d:80ms">${d.lead}</p>
  </section>
${article(d.toc, sections)}
${closing(ctx, { href: X3_PATH.features, label: ctx.t.x3.nav.features })}`;
  },

  mount(main: HTMLElement): () => void {
    return initReveal(main);
  },
};
