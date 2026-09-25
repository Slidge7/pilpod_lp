import type { Dict } from '../i18n';

/**
 * The phone menu.
 *
 * Five destinations plus the language and theme controls stopped fitting on a
 * narrow bar, so below the breakpoint the links move into a panel. The panel
 * is the same list of links — not a second copy of the navigation — so the
 * language switch keeps both in step.
 *
 * Kept deliberately small: no focus trap, because the panel sits in the
 * document right after the button, so the natural tab order already walks
 * through it and then out. Escape closes, a click outside closes, and
 * following any link closes.
 */
export function initMenu(getDict: () => Dict): () => void {
  const btn = document.getElementById('menuBtn');
  const panel = document.getElementById('menuPanel');
  const nav = document.getElementById('nav');
  if (!btn || !panel || !nav) return () => {};

  const isOpen = (): boolean => btn.getAttribute('aria-expanded') === 'true';

  function setOpen(open: boolean): void {
    btn!.setAttribute('aria-expanded', String(open));
    const label = open ? getDict().a11y.closeMenu : getDict().a11y.openMenu;
    btn!.setAttribute('aria-label', label);
    btn!.setAttribute('title', label);

    if (open) {
      panel!.hidden = false;
      // One frame between display and the transition, or it jumps open.
      requestAnimationFrame(() => nav!.classList.add('menu-open'));
    } else {
      nav!.classList.remove('menu-open');
      const end = (): void => {
        if (!isOpen()) panel!.hidden = true;
        panel!.removeEventListener('transitionend', end);
      };
      panel!.addEventListener('transitionend', end);
      // Belt and braces: if the transition never fires (reduced motion,
      // background tab) the panel must still end up hidden.
      window.setTimeout(end, 400);
    }
  }

  const onToggle = (): void => setOpen(!isOpen());

  const onKey = (e: KeyboardEvent): void => {
    if (e.key === 'Escape' && isOpen()) {
      setOpen(false);
      btn.focus();
    }
  };

  const onDocClick = (e: MouseEvent): void => {
    if (!isOpen()) return;
    const target = e.target as Node;
    if (panel.contains(target)) {
      // A link inside the panel: let the router handle it, then close.
      if ((target as Element).closest?.('a')) setOpen(false);
      return;
    }
    if (!btn.contains(target)) setOpen(false);
  };

  // A wider window makes the panel irrelevant; leaving it open would strand
  // the links in a floating box beside a nav that already shows them.
  const wide = window.matchMedia('(min-width: 861px)');
  const onWide = (): void => {
    if (wide.matches && isOpen()) setOpen(false);
  };

  btn.addEventListener('click', onToggle);
  document.addEventListener('keydown', onKey);
  document.addEventListener('click', onDocClick);
  wide.addEventListener('change', onWide);

  return () => {
    btn.removeEventListener('click', onToggle);
    document.removeEventListener('keydown', onKey);
    document.removeEventListener('click', onDocClick);
    wide.removeEventListener('change', onWide);
  };
}
