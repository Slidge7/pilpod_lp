import type { Dict } from '../i18n';
import type { Mode } from '../app/types';
import { refreshThemeColor } from '../app/head';

/**
 * Light / dark.
 *
 * Dark is the design's home state and stays the default. A visitor's choice is
 * remembered and applied by the inline script in <head> *before first paint*,
 * so a returning light-mode visitor never sees a flash of the dark page — this
 * module only handles the click.
 */

const KEY = 's7.mode';

export const currentMode = (): Mode =>
  document.documentElement.dataset.mode === 'light' ? 'light' : 'dark';

/** The label describes what pressing the button will do, not the current state. */
export const themeLabel = (t: Dict, mode: Mode): string =>
  mode === 'light' ? t.a11y.themeToDark : t.a11y.themeToLight;

function save(mode: Mode): void {
  try {
    localStorage.setItem(KEY, mode);
  } catch {
    /* private mode: the choice lasts as long as the tab does */
  }
}

export function applyMode(mode: Mode, t: Dict): void {
  document.documentElement.dataset.mode = mode;
  refreshThemeColor();

  const btn = document.getElementById('themeBtn');
  if (btn) {
    const label = themeLabel(t, mode);
    btn.setAttribute('aria-label', label);
    btn.setAttribute('title', label);
  }
}

export function initTheme(getDict: () => Dict): void {
  const btn = document.getElementById('themeBtn');
  if (!btn) return;

  // The inline head script has already set data-mode; make the label agree.
  applyMode(currentMode(), getDict());

  btn.addEventListener('click', () => {
    const next: Mode = currentMode() === 'light' ? 'dark' : 'light';
    save(next);
    applyMode(next, getDict());
  });
}
