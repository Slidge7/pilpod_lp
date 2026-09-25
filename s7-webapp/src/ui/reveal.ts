/**
 * Scroll reveal for elements marked `.rv`.
 *
 * Scoped to a root so it can be torn down and rebuilt per route without
 * leaking observers across navigations.
 */
export function initReveal(root: ParentNode): () => void {
  const items = root.querySelectorAll<HTMLElement>('.rv');
  if (!items.length) return () => {};

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('rv-on'));
    return () => {};
  }

  const io = new IntersectionObserver(
    (entries, obs) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('rv-on');
        obs.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
  );

  items.forEach((el) => io.observe(el));
  return () => io.disconnect();
}
