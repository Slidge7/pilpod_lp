/**
 * The pointer-reactive part of the backdrop: a soft light and a lens that
 * brightens the zellige geometry in place.
 *
 * The lens is a moving window over a counter-translated copy of the same
 * tessellation, so the lit pattern stays locked to the ambient grid instead of
 * sliding under the cursor.
 *
 * Performance notes — measured, not assumed:
 *
 *   · The original broadcast the cursor position as inherited custom
 *     properties (--px / --py) on the backdrop root. Any change to an
 *     inherited custom property makes the browser re-resolve every var() in
 *     that subtree — including background images — and a profile showed the
 *     full-viewport zellige layer being repainted on every pointer frame.
 *     Here the three moving layers receive their transforms directly; nothing
 *     else in the tree is touched, and a transform on an already-composited
 *     layer is a compositor update with no paint at all.
 *
 *   · The easing loop shuts itself off once it has caught up, so a still
 *     pointer costs zero frames.
 */
export function initAmbient(): void {
  const ambient = document.querySelector<HTMLElement>('.ambient');
  if (!ambient) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (reduce || !fine) return;

  const light = ambient.querySelector<HTMLElement>('.pointer-light');
  const lens = ambient.querySelector<HTMLElement>('.zellige-lens');
  const inner = ambient.querySelector<HTMLElement>('.lens-inner');
  if (!light || !lens || !inner) return;

  // Half the lens window; read once, it never changes.
  const half = lens.offsetWidth / 2 || 125;

  let tx = 0;
  let ty = 0;
  let cx = 0;
  let cy = 0;
  let running = false;
  let seeded = false;

  // Low factor: the lens trails well behind the cursor and settles gently
  // instead of snapping to it.
  const EASE = 0.055;

  function write(): void {
    const x = cx.toFixed(1);
    const y = cy.toFixed(1);
    light!.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    lens!.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    inner!.style.transform = `translate3d(${(half - cx).toFixed(1)}px, ${(half - cy).toFixed(1)}px, 0)`;
  }

  function step(): void {
    cx += (tx - cx) * EASE;
    cy += (ty - cy) * EASE;
    write();

    if (Math.abs(tx - cx) > 0.3 || Math.abs(ty - cy) > 0.3) {
      requestAnimationFrame(step);
    } else {
      running = false;
    }
  }

  window.addEventListener(
    'pointermove',
    (e) => {
      if (e.pointerType && e.pointerType !== 'mouse') return;
      // The light and lens belong to the studio theme; elsewhere, do nothing.
      if (document.documentElement.dataset.theme !== 's7') return;
      tx = e.clientX;
      ty = e.clientY;
      if (!seeded) {
        cx = tx;
        cy = ty;
        seeded = true;
        write();
      }
      document.body.classList.add('pointer-active');
      if (!running) {
        running = true;
        requestAnimationFrame(step);
      }
    },
    { passive: true },
  );

  const rest = (): void => document.body.classList.remove('pointer-active');
  document.documentElement.addEventListener('pointerleave', rest);
  window.addEventListener('blur', rest);
}
