/**
 * The S7 Standard ledger: a pinned column, a counter and a seven-tick rail
 * that track which principle the reader is level with.
 *
 * The original computed this from a scroll handler that called
 * getBoundingClientRect() on all seven rows every frame — seven forced layouts
 * per scroll tick, which is exactly the kind of thing that makes a page feel
 * heavy on a laptop trackpad.
 *
 * Here, two IntersectionObservers do the measuring off the main thread:
 *   · a zero-height band at 55% of the viewport names the active row;
 *   · a line at 82% counts how many rows have been reached.
 * Neither reads layout from JavaScript, so scrolling costs nothing.
 */
export function initStandard(root: ParentNode): () => void {
  const rows = Array.from(root.querySelectorAll<HTMLElement>('.pr'));
  if (!rows.length) return () => {};

  const ticks = Array.from(root.querySelectorAll<HTMLElement>('.std-rail i'));
  const count = root.querySelector<HTMLElement>('.std-count');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const pad = (n: number): string => (n < 10 ? '0' : '') + n;

  let reached = 0;
  let active = -1;
  let hovered = -1;

  function paint(): void {
    const a = hovered >= 0 ? hovered : active;
    const r = Math.max(reached, a >= 0 ? a + 1 : 0);

    rows.forEach((row, i) => row.classList.toggle('is-active', i === a));
    ticks.forEach((t, i) => {
      t.classList.toggle('is-on', i < r);
      t.classList.toggle('is-active', i === a);
    });
    if (count) count.textContent = pad(r);
  }

  if (reduce || !('IntersectionObserver' in window)) {
    reached = rows.length;
    paint();
    return () => {};
  }

  // Which row is level with the reader's eye. Rows that have scrolled up past
  // the band are remembered, so once the reader is below the whole list the
  // last principle stays lit — as it did on the original page.
  const inBand = new Set<number>();
  const above = new Set<number>();

  const scanner = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const i = rows.indexOf(entry.target as HTMLElement);
        if (i === -1) continue;
        if (entry.isIntersecting) {
          inBand.add(i);
          above.delete(i);
        } else {
          inBand.delete(i);
          const band = entry.rootBounds?.top ?? window.innerHeight * 0.55;
          if (entry.boundingClientRect.bottom <= band) above.add(i);
          else above.delete(i);
        }
      }
      active = inBand.size ? Math.max(...inBand) : above.size ? Math.max(...above) : -1;
      paint();
    },
    { rootMargin: '-55% 0px -45% 0px', threshold: 0 },
  );

  // How far down the ledger the reader has got.
  const counter = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const i = rows.indexOf(entry.target as HTMLElement);
        if (i >= 0) reached = Math.max(reached, i + 1);
      }
      paint();
    },
    { rootMargin: '0px 0px -18% 0px', threshold: 0 },
  );

  rows.forEach((row) => {
    scanner.observe(row);
    counter.observe(row);
  });

  const enter = (i: number) => () => {
    hovered = i;
    paint();
  };
  const leave = (): void => {
    hovered = -1;
    paint();
  };

  const bound: Array<[HTMLElement, () => void]> = [];
  rows.forEach((row, i) => {
    const onEnter = enter(i);
    row.addEventListener('mouseenter', onEnter);
    row.addEventListener('mouseleave', leave);
    bound.push([row, onEnter]);
  });

  paint();

  return () => {
    scanner.disconnect();
    counter.disconnect();
    bound.forEach(([row, onEnter]) => {
      row.removeEventListener('mouseenter', onEnter);
      row.removeEventListener('mouseleave', leave);
    });
  };
}
