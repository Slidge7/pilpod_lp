/**
 * Nav condense state.
 *
 * The old page ran a scroll listener with a rAF throttle to toggle one class.
 * A sentinel plus an IntersectionObserver does the same job with no scroll
 * listener at all: the compositor decides when the element leaves the viewport
 * and tells us once, rather than us asking on every frame of every scroll.
 */
export function initNav(): void {
  const nav = document.getElementById('nav');
  if (!nav) return;

  if (!('IntersectionObserver' in window)) {
    // Very old browser: the bar simply stays in its resting state.
    return;
  }

  const sentinel = document.createElement('div');
  sentinel.className = 'scroll-sentinel';
  sentinel.setAttribute('aria-hidden', 'true');
  document.body.insertBefore(sentinel, document.body.firstChild);

  const io = new IntersectionObserver(
    (entries) => {
      const first = entries[0];
      if (first) nav.classList.toggle('scrolled', !first.isIntersecting);
    },
    { threshold: 0 },
  );
  io.observe(sentinel);
}
