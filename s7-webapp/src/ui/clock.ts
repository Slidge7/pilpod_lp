import type { Dict } from '../i18n';

/**
 * The Morocco time strip — a world-clock ruler with the GMT badge as its axis.
 *
 * Morocco is derived from UTC deliberately: it reads GMT for every visitor,
 * including devices whose time-zone database has not caught up with the
 * September 2026 change. Every other city goes through the browser's own IANA
 * data, so daylight saving is handled for us and each GMT±x label is computed
 * rather than hard-coded.
 *
 * This lives in the persistent shell, so it is started once per document and
 * survives every route change — and every language change, which relabels the
 * cities through `setClockLang` instead of rebuilding them. The seconds never
 * stutter.
 */

type CityKey = keyof Dict['clock']['cities'];

const CITIES: { west: ReadonlyArray<readonly [string, CityKey]>; east: ReadonlyArray<readonly [string, CityKey]> } = {
  west: [
    ['America/Los_Angeles', 'losAngeles'],
    ['America/Chicago', 'chicago'],
    ['America/New_York', 'newYork'],
    ['America/Sao_Paulo', 'saoPaulo'],
  ],
  east: [
    ['Europe/London', 'london'],
    ['Europe/Paris', 'paris'],
    ['Asia/Dubai', 'dubai'],
    ['Asia/Tokyo', 'tokyo'],
  ],
};

interface Zone {
  key: CityKey;
  fmt: Intl.DateTimeFormat;
  root: HTMLElement;
  name: HTMLElement;
  t: HTMLElement;
  o: HTMLElement;
  hm: string;
  off: number | null;
}

const zones: Zone[] = [];
let strings: Dict | null = null;

const pad = (n: number): string => (n < 10 ? '0' : '') + n;

function el(tag: string, cls: string, text?: string): HTMLElement {
  const node = document.createElement(tag);
  node.className = cls;
  if (text != null) node.textContent = text;
  return node;
}

/** 0 → "GMT", 120 → "GMT+2", -240 → "GMT-4", 330 → "GMT+5:30" */
function gmt(off: number): string {
  if (!off) return 'GMT';
  const a = Math.abs(off);
  const h = Math.floor(a / 60);
  const m = a % 60;
  return 'GMT' + (off < 0 ? '-' : '+') + h + (m ? ':' + pad(m) : '');
}

/** "5 h behind Morocco" / "5 h de retard sur le Maroc" */
function gap(off: number, t: Dict): string {
  if (!off) return t.clock.sameAsMorocco;
  const a = Math.abs(off);
  const h = Math.floor(a / 60);
  const m = a % 60;
  const amount =
    (h ? h + ' ' + t.clock.hour : '') + (h && m ? ' ' : '') + (m ? m + ' ' + t.clock.minute : '');
  return `${amount} ${off > 0 ? t.clock.ahead : t.clock.behind}`;
}

/** Relabel every city and the badge, without touching the running clock. */
export function setClockLang(t: Dict): void {
  strings = t;
  for (const z of zones) {
    z.name.textContent = t.clock.cities[z.key];
    if (z.off !== null) {
      z.root.title = `${t.clock.cities[z.key]} · ${gmt(z.off)} · ${gap(z.off, t)}`;
    }
  }
}

export function initClock(t: Dict): void {
  const strip = document.getElementById('tz');
  const west = document.getElementById('tzWest');
  const east = document.getElementById('tzEast');
  const scroller = document.getElementById('tzScroll');
  const badge = document.getElementById('tzMa');
  const maHM = document.getElementById('tzMaHM');
  const maS = document.getElementById('tzMaS');

  if (!strip) return;
  if (
    !west || !east || !scroller || !badge || !maHM || !maS ||
    typeof Intl === 'undefined' ||
    !Intl.DateTimeFormat.prototype.formatToParts
  ) {
    strip.style.display = 'none';
    return;
  }

  strings = t;

  function build(host: HTMLElement, list: ReadonlyArray<readonly [string, CityKey]>): void {
    for (const [tz, key] of list) {
      let fmt: Intl.DateTimeFormat;
      try {
        fmt = new Intl.DateTimeFormat('en-GB', {
          timeZone: tz,
          hourCycle: 'h23',
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
        });
      } catch {
        continue; // zone unknown to this browser: skip it
      }
      const root = el('div', 'tz-city');
      const row = el('span', 'tz-val');
      const name = el('span', 'tz-name', strings!.clock.cities[key]);
      const tEl = el('span', 'tz-t', '--:--');
      const o = el('span', 'tz-o', '');
      row.append(tEl, o);
      root.append(name, row);
      host.append(root);
      zones.push({ key, fmt, root, name, t: tEl, o, hm: '', off: null });
    }
  }

  build(west, CITIES.west);
  build(east, CITIES.east);

  function render(now: number): void {
    const d = new Date(now);
    const hm = pad(d.getUTCHours()) + ':' + pad(d.getUTCMinutes());
    if (maHM!.textContent !== hm) maHM!.textContent = hm;
    maS!.textContent = ':' + pad(d.getUTCSeconds());

    const sec = Math.floor(now / 1000) * 1000;
    for (const z of zones) {
      const parts = z.fmt.formatToParts(now);
      const v: Record<string, string> = {};
      for (const p of parts) v[p.type] = p.value;

      const h = Number(v.hour) % 24;
      const m = Number(v.minute);
      const off = Math.round(
        (Date.UTC(Number(v.year), Number(v.month) - 1, Number(v.day), h, m, Number(v.second)) -
          sec) /
          60000,
      );
      const text = pad(h) + ':' + pad(m);
      if (text !== z.hm) {
        z.hm = text;
        z.t.textContent = text;
      }
      if (off !== z.off) {
        z.off = off;
        z.o.textContent = gmt(off);
        const s = strings!;
        z.root.title = `${s.clock.cities[z.key]} · ${gmt(off)} · ${gap(off, s)}`;
      }
    }
  }

  // Tick on the second boundary; catch up instantly when the tab returns.
  let timer = 0;
  function tick(): void {
    const now = Date.now();
    render(now);
    timer = window.setTimeout(tick, 1000 - (now % 1000) + 8);
  }
  tick();

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      clearTimeout(timer);
    } else {
      render(Date.now());
      clearTimeout(timer);
      tick();
    }
  });

  /*
   * When the ruler is wider than the screen it becomes a swipeable row: start
   * with the Morocco badge centred and make it keyboard-scrollable.
   *
   * A ResizeObserver replaces the debounced window resize handler — it fires
   * on the element's own box, so a mobile URL bar growing and shrinking the
   * viewport height no longer triggers a pointless re-centre.
   */
  function fit(): void {
    const w = scroller!.clientWidth;
    if (scroller!.scrollWidth > w + 1) {
      scroller!.tabIndex = 0;
      scroller!.scrollLeft =
        (badge as HTMLElement).offsetLeft - (w - (badge as HTMLElement).offsetWidth) / 2;
    } else {
      scroller!.removeAttribute('tabindex');
      scroller!.scrollLeft = 0;
    }
  }

  fit();
  if (typeof ResizeObserver !== 'undefined') {
    new ResizeObserver(fit).observe(scroller);
  } else {
    window.addEventListener('resize', fit, { passive: true });
  }
  if (document.fonts?.ready) void document.fonts.ready.then(fit);
}
