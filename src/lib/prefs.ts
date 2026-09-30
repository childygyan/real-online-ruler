/**
 * prefs.ts — persistence for the ruler's UI preferences (Phase 4).
 *
 * Stored in localStorage under "ror-prefs". Missing/corrupt values merge
 * over the defaults so a bad write can never break the app.
 */

import { parseUnit, type Unit } from './units.js';

export const PREFS_KEY = 'ror-prefs';

export interface EdgeState {
  top: boolean;
  bottom: boolean;
  left: boolean;
  right: boolean;
}

export interface RulerPrefs {
  unit: Unit;
  edges: EdgeState;
  guidesOn: boolean;
  crosshairOn: boolean;
  /** Phase 7 advanced tools. */
  measureOn: boolean;
  protractorOn: boolean;
  loupeOn: boolean;
  floatingRulerOn: boolean;
  logOpen: boolean;
  gridOn: boolean;
  gridUnit: 'cm' | 'in';
}

export const DEFAULT_PREFS: RulerPrefs = {
  unit: 'cm',
  edges: { top: true, bottom: false, left: false, right: false },
  guidesOn: false,
  crosshairOn: false,
  measureOn: false,
  protractorOn: false,
  loupeOn: false,
  floatingRulerOn: false,
  logOpen: false,
  gridOn: false,
  gridUnit: 'cm',
};

export interface StorageLike {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

function getStorage(): StorageLike | null {
  try {
    if (typeof localStorage !== 'undefined') return localStorage;
  } catch {
    /* storage blocked */
  }
  return null;
}

function toBoolean(v: unknown, fallback: boolean): boolean {
  return typeof v === 'boolean' ? v : fallback;
}

function toGridUnit(v: unknown, fallback: 'cm' | 'in'): 'cm' | 'in' {
  return v === 'cm' || v === 'in' ? v : fallback;
}

/** Parse stored prefs, merging over defaults; never throws. */
export function parsePrefs(raw: string | null): RulerPrefs {
  const fallback = structuredClone(DEFAULT_PREFS);
  if (raw === null) return fallback;
  try {
    const parsed: unknown = JSON.parse(raw);
    if (typeof parsed !== 'object' || parsed === null) return fallback;
    const p = parsed as Record<string, unknown>;
    const unit = parseUnit(String(p['unit'] ?? ''));
    const edges = (p['edges'] ?? {}) as Record<string, unknown>;
    return {
      unit: unit ?? fallback.unit,
      edges: {
        top: toBoolean(edges['top'], fallback.edges.top),
        bottom: toBoolean(edges['bottom'], fallback.edges.bottom),
        left: toBoolean(edges['left'], fallback.edges.left),
        right: toBoolean(edges['right'], fallback.edges.right),
      },
      guidesOn: toBoolean(p['guidesOn'], fallback.guidesOn),
      crosshairOn: toBoolean(p['crosshairOn'], fallback.crosshairOn),
      measureOn: toBoolean(p['measureOn'], fallback.measureOn),
      protractorOn: toBoolean(p['protractorOn'], fallback.protractorOn),
      loupeOn: toBoolean(p['loupeOn'], fallback.loupeOn),
      floatingRulerOn: toBoolean(p['floatingRulerOn'], fallback.floatingRulerOn),
      logOpen: toBoolean(p['logOpen'], fallback.logOpen),
      gridOn: toBoolean(p['gridOn'], fallback.gridOn),
      gridUnit: toGridUnit(p['gridUnit'], fallback.gridUnit),
    };
  } catch {
    return fallback;
  }
}

export function loadPrefs(storage: StorageLike | null = getStorage()): RulerPrefs {
  if (storage === null) return structuredClone(DEFAULT_PREFS);
  try {
    return parsePrefs(storage.getItem(PREFS_KEY));
  } catch {
    return structuredClone(DEFAULT_PREFS);
  }
}

export function savePrefs(prefs: RulerPrefs, storage: StorageLike | null = getStorage()): void {
  try {
    storage?.setItem(PREFS_KEY, JSON.stringify(prefs));
  } catch {
    /* ignore write failures */
  }
}
