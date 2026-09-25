/**
 * Scroll handling for client-side navigation.
 *
 * The browser's own restoration is turned off, because it runs at a moment we
 * do not control — it would fire before the new route's markup exists and land
 * on the wrong offset. We keep the offsets ourselves, keyed by history entry.
 */

const positions = new Map<number, number>();
let nextKey = 1;

export interface HistoryState {
  k: number;
}

export function initScroll(): void {
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
}

/** The key of the entry currently on screen; mints one if this entry is new. */
export function currentKey(): number {
  const state = history.state as HistoryState | null;
  if (state && typeof state.k === 'number') return state.k;
  const k = nextKey++;
  history.replaceState({ k } satisfies HistoryState, '');
  return k;
}

export function mintKey(): HistoryState {
  return { k: nextKey++ };
}

export function remember(key: number): void {
  positions.set(key, window.scrollY);
}

export function recall(key: number): number {
  return positions.get(key) ?? 0;
}

/** Offset a fixed header imposes on in-page anchors. */
function headerOffset(): number {
  const nav = document.getElementById('nav');
  if (!nav) return 0;
  // The time strip collapses once the page is scrolled, so the resting height
  // of the bar is what an anchor should clear — not its current height.
  const inner = nav.querySelector<HTMLElement>('.nav-inner');
  return (inner?.offsetHeight ?? 72) + 12;
}

/**
 * Scroll to an element by fragment id. Returns false when no such element
 * exists, so the caller can fall back to the top of the page.
 */
export function scrollToHash(hash: string, behavior: ScrollBehavior = 'instant'): boolean {
  const id = hash.replace(/^#/, '');
  if (!id) return false;
  const target = document.getElementById(id);
  if (!target) return false;

  const top = target.getBoundingClientRect().top + window.scrollY - headerOffset();
  window.scrollTo({ top: Math.max(0, top), behavior });
  return true;
}

export function scrollToTop(behavior: ScrollBehavior = 'instant'): void {
  window.scrollTo({ top: 0, behavior });
}
