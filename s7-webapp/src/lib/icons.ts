/**
 * Inline SVG, kept in one place.
 *
 * Every icon here is a plain string so it can be interpolated by the route
 * renderers on both sides of the build. The ReqTone wordmark paths appear in
 * three places (product card, product hero, favicon) and are defined once.
 */

/** The S7 mark: two interlaced squares — the eight-point khatem, abstracted. */
export const s7Mark = (cls = '') => /* html */ `
<svg${cls ? ` class="${cls}"` : ''} viewBox="0 0 32 32" aria-hidden="true">
  <g fill="none" stroke="currentColor" stroke-width="1.5">
    <rect x="9" y="9" width="14" height="14"/>
    <rect x="9" y="9" width="14" height="14" transform="rotate(45 16 16)"/>
  </g>
</svg>`;

/** Right arrow used on every call to action. */
export const arrow = (cls = '') => /* html */ `
<svg${cls ? ` class="${cls}"` : ''} viewBox="0 0 16 16" fill="none" stroke="currentColor"
     stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M2 8h12M9 3l5 5-5 5"/>
</svg>`;

export const arrowThin = (cls = '') => /* html */ `
<svg${cls ? ` class="${cls}"` : ''} viewBox="0 0 16 16" fill="none" stroke="currentColor"
     stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M2 8h12M9 3l5 5-5 5"/>
</svg>`;

/** Moroccan flag — the axis of the time strip. */
export const flagMA = (cls = '') => /* html */ `
<svg${cls ? ` class="${cls}"` : ''} viewBox="0 0 30 20" aria-hidden="true">
  <rect width="30" height="20" fill="#C1272D"/>
  <path d="M15 4l3.53 10.85L9.29 8.15h11.42l-9.24 6.7Z" fill="none" stroke="#0A7C46"
        stroke-width="1.1" stroke-linejoin="miter"/>
</svg>`;

/** The three glyph paths of the ReqTone mark, at its native 1024 scale. */
const REQTONE_PATHS = [
  'M8470 8480 c-55 -55 -97 -87 -155 -117 -163 -84 -377 -130 -549 -120 -192 12 -318 41 -771 177 -235 70 -356 90 -537 91 -161 0 -267 -18 -393 -66 -249 -93 -473 -339 -563 -615 -28 -84 -177 -676 -738 -2920 -251 -1004 -458 -1826 -459 -1828 -2 -2 -18 4 -36 13 -17 9 -73 30 -123 46 -293 95 -623 70 -901 -69 -182 -91 -369 -257 -464 -412 -163 -268 -144 -567 48 -759 201 -201 541 -275 913 -200 401 80 734 340 908 705 52 109 75 190 170 589 45 187 122 509 171 715 108 450 106 441 214 900 47 201 106 448 130 550 24 102 105 446 180 765 258 1098 264 1121 336 1242 43 70 147 174 219 218 30 18 91 46 135 61 76 27 89 28 250 28 135 -1 193 -5 280 -23 279 -56 329 -63 485 -64 228 -2 400 36 603 131 355 166 596 446 692 804 22 81 45 241 34 236 -2 -1 -38 -36 -79 -78z',
  'M4150 7314 c-66 -14 -162 -49 -345 -129 -110 -48 -229 -100 -265 -115 -404 -171 -1756 -763 -1844 -807 -292 -147 -489 -380 -568 -671 -30 -110 -30 -314 -1 -432 50 -199 156 -365 319 -500 62 -51 359 -251 952 -639 89 -58 280 -184 425 -279 144 -95 290 -189 325 -209 179 -101 372 -98 531 8 107 71 173 177 194 308 20 133 -40 288 -146 375 -23 19 -224 152 -447 296 -223 145 -448 291 -500 325 -52 34 -176 115 -275 179 -99 65 -197 134 -218 154 -107 102 -107 231 0 334 25 24 83 57 163 94 122 54 539 239 710 314 47 20 231 101 410 180 179 78 381 167 450 197 486 212 507 224 576 312 66 85 89 156 88 276 0 80 -5 111 -23 155 -48 118 -144 208 -265 250 -58 21 -195 34 -246 24z',
  'M6450 7046 c-81 -17 -147 -54 -211 -116 -63 -61 -92 -112 -114 -197 -39 -151 1 -305 109 -417 58 -59 188 -144 726 -473 206 -127 461 -283 565 -348 105 -65 253 -156 330 -204 155 -95 206 -140 231 -207 23 -60 15 -149 -20 -207 -45 -77 -79 -97 -479 -273 -144 -64 -413 -182 -597 -264 -184 -81 -409 -180 -500 -220 -91 -40 -230 -102 -310 -137 -177 -80 -210 -94 -282 -126 -69 -31 -162 -94 -205 -138 -89 -95 -132 -231 -114 -357 31 -206 185 -341 411 -359 125 -9 169 5 635 210 132 58 510 223 840 367 736 321 1038 456 1165 520 490 246 693 836 452 1315 -120 239 -266 378 -607 577 -33 19 -310 186 -615 370 -1172 707 -1093 661 -1197 683 -81 17 -138 18 -213 1z',
] as const;

/**
 * The ReqTone app icon. `gradId` must be unique per instance — two SVGs in one
 * document sharing a gradient id is the classic way to lose a fill.
 */
export const reqtoneMark = (gradId: string, cls = '', label = 'ReqTone') => /* html */ `
<svg${cls ? ` class="${cls}"` : ''} viewBox="0 0 1024 1024" role="img" aria-label="${label}">
  <defs>
    <linearGradient id="${gradId}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0098ff"/>
      <stop offset="100%" stop-color="#0066cc"/>
    </linearGradient>
  </defs>
  <rect width="1024" height="1024" rx="220" fill="#0e131b"/>
  <rect width="1024" height="1024" rx="220" fill="none" stroke="#242e40" stroke-width="32"/>
  <g transform="translate(0,1024) scale(0.1,-0.1)" fill="url(#${gradId})">
    ${REQTONE_PATHS.map((d) => `<path d="${d}"/>`).join('\n    ')}
  </g>
</svg>`;

/** Data-URI favicon for the studio pages — no extra request. */
export const S7_FAVICON =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E" +
  "%3Crect width='32' height='32' rx='8' fill='%230A0A0B'/%3E" +
  "%3Cg fill='none' stroke='%23C8323C' stroke-width='1.6'%3E" +
  "%3Crect x='9' y='9' width='14' height='14'/%3E" +
  "%3Crect x='9' y='9' width='14' height='14' transform='rotate(45 16 16)'/%3E%3C/g%3E%3C/svg%3E";

/** Theme control: the mode you will get when you press it. */
export const sunIcon = (cls = '') => /* html */ `
<svg${cls ? ` class="${cls}"` : ''} viewBox="0 0 24 24" fill="none" stroke="currentColor"
     stroke-width="1.6" stroke-linecap="round" aria-hidden="true">
  <circle cx="12" cy="12" r="4.2"/>
  <path d="M12 2.4v2.4M12 19.2v2.4M4.6 4.6l1.7 1.7M17.7 17.7l1.7 1.7M2.4 12h2.4M19.2 12h2.4M4.6 19.4l1.7-1.7M17.7 6.3l1.7-1.7"/>
</svg>`;

export const moonIcon = (cls = '') => /* html */ `
<svg${cls ? ` class="${cls}"` : ''} viewBox="0 0 24 24" fill="none" stroke="currentColor"
     stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M20.5 14.4A8.6 8.6 0 1 1 9.6 3.5a6.9 6.9 0 0 0 10.9 10.9Z"/>
</svg>`;

/**
 * The PilPod mark — the real product logo, shipped as a raster PNG.
 *
 * `pilpod.png` is the 512px master. `pilpod-176.png` is the same image scaled
 * down (33 kB rather than 244 kB) and is what the card and the hero actually
 * need: 176 is 2x the largest CSS size the mark is ever drawn at. The master
 * stays in the srcset for displays beyond 2x.
 */
export const pilpodMark = (cls = '', label = 'PilPod') => /* html */ `
<img${cls ? ` class="${cls}"` : ''} src="/icons/pilpod-176.png"
     srcset="/icons/pilpod-176.png 176w, /icons/pilpod.png 512w" sizes="88px"
     width="176" height="176" alt="${label}" decoding="async" />`;

/** Chrome Web Store / extension puzzle piece, for the PilPod call to action. */
export const puzzleIcon = (cls = '') => /* html */ `
<svg${cls ? ` class="${cls}"` : ''} viewBox="0 0 16 16" fill="none" stroke="currentColor"
     stroke-width="1.4" stroke-linejoin="round" aria-hidden="true">
  <path d="M6.2 2.2a1.5 1.5 0 0 1 3 0V3h2.3a.7.7 0 0 1 .7.7V6h.8a1.5 1.5 0 0 1 0 3h-.8v2.3a.7.7 0 0 1-.7.7H9.2v-.8a1.5 1.5 0 0 0-3 0v.8H3.9a.7.7 0 0 1-.7-.7V9.7h.8a1.5 1.5 0 0 0 0-3h-.8V3.7a.7.7 0 0 1 .7-.7h2.3z"/>
</svg>`;
