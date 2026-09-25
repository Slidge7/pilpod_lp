/** Shapes shared by every dictionary. */

/** A label and its value: principles, facts, spec rows, loop steps. */
export type Pair = readonly [label: string, value: string];

/** A feature group: its heading and its bullets. */
export type Feature = readonly [heading: string, items: readonly string[]];

/** A service offered: its title, what it covers, and the stack it runs on. */
export type Service = readonly [title: string, body: string, stack: string];

export type Lang = 'en' | 'fr';

export const LANGS: readonly Lang[] = ['en', 'fr'];

export const isLang = (v: unknown): v is Lang => v === 'en' || v === 'fr';
