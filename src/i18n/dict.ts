/**
 * dict.ts — the shared dictionary type and locale registry (Phase 8).
 *
 * `Dict` is `typeof en`: every locale dictionary must satisfy it, so a
 * missing or extra key fails compilation (and the dict-completeness test).
 */
import type { LocaleCode } from './locales.js';
import { en } from './dicts/en.js';
import { es } from './dicts/es.js';
import { fr } from './dicts/fr.js';
import { pt } from './dicts/pt.js';
import { zh } from './dicts/zh.js';
import { id } from './dicts/id.js';

export type Dict = typeof en;

export const DICTS: Record<LocaleCode, Dict> = { en, es, fr, pt, zh, id };

/** Dictionary for a locale; falls back to English on unknown codes. */
export function getDict(locale: LocaleCode): Dict {
  return DICTS[locale] ?? en;
}

/** Fill {placeholders} in a template string. Unknown keys become empty. */
export function fill(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_m, key: string) =>
    vars[key] === undefined ? '' : String(vars[key])
  );
}
