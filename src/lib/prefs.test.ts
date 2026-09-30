import { describe, expect, it, beforeEach } from 'vitest';
import {
  DEFAULT_PREFS,
  loadPrefs,
  parsePrefs,
  PREFS_KEY,
  savePrefs,
  type StorageLike,
} from './prefs.js';

function memoryStorage(): StorageLike {
  const map = new Map<string, string>();
  return {
    getItem: (k) => (map.has(k) ? map.get(k)! : null),
    setItem: (k, v) => {
      map.set(k, v);
    },
    removeItem: (k) => {
      map.delete(k);
    },
  };
}

describe('prefs', () => {
  let storage: StorageLike;
  beforeEach(() => {
    storage = memoryStorage();
  });

  it('returns defaults when nothing is stored', () => {
    expect(loadPrefs(storage)).toEqual(DEFAULT_PREFS);
    expect(DEFAULT_PREFS.unit).toBe('cm');
    expect(DEFAULT_PREFS.edges.top).toBe(true);
  });

  it('round-trips saved prefs', () => {
    savePrefs(
      {
        unit: 'in',
        edges: { top: false, bottom: true, left: true, right: false },
        guidesOn: true,
        crosshairOn: true,
        measureOn: true,
        protractorOn: false,
        loupeOn: true,
        floatingRulerOn: false,
        logOpen: true,
        gridOn: true,
        gridUnit: 'in',
      },
      storage
    );
    const raw = storage.getItem(PREFS_KEY);
    expect(raw).not.toBeNull();
    expect(loadPrefs(storage)).toEqual({
      unit: 'in',
      edges: { top: false, bottom: true, left: true, right: false },
      guidesOn: true,
      crosshairOn: true,
      measureOn: true,
      protractorOn: false,
      loupeOn: true,
      floatingRulerOn: false,
      logOpen: true,
      gridOn: true,
      gridUnit: 'in',
    });
  });

  it('merges partial stored prefs over defaults', () => {
    storage.setItem(PREFS_KEY, JSON.stringify({ unit: 'px' }));
    expect(loadPrefs(storage)).toEqual({ ...DEFAULT_PREFS, unit: 'px' });
  });

  it('falls back per-field on invalid values', () => {
    storage.setItem(
      PREFS_KEY,
      JSON.stringify({ unit: 'furlong', edges: { top: 'yes' }, guidesOn: 1 })
    );
    const prefs = loadPrefs(storage);
    expect(prefs.unit).toBe('cm');
    expect(prefs.edges.top).toBe(true);
    expect(prefs.guidesOn).toBe(false);
  });

  it('falls back to defaults on corrupt JSON', () => {
    storage.setItem(PREFS_KEY, '{oops');
    expect(loadPrefs(storage)).toEqual(DEFAULT_PREFS);
    expect(parsePrefs(null)).toEqual(DEFAULT_PREFS);
  });

  it('parses Phase 7 tool prefs and validates gridUnit', () => {
    storage.setItem(
      PREFS_KEY,
      JSON.stringify({
        measureOn: true,
        protractorOn: true,
        loupeOn: 'yes',
        floatingRulerOn: 1,
        logOpen: true,
        gridOn: true,
        gridUnit: 'in',
      })
    );
    const prefs = loadPrefs(storage);
    expect(prefs.measureOn).toBe(true);
    expect(prefs.protractorOn).toBe(true);
    expect(prefs.loupeOn).toBe(false);
    expect(prefs.floatingRulerOn).toBe(false);
    expect(prefs.logOpen).toBe(true);
    expect(prefs.gridOn).toBe(true);
    expect(prefs.gridUnit).toBe('in');

    storage.setItem(PREFS_KEY, JSON.stringify({ gridUnit: 'furlong' }));
    expect(loadPrefs(storage).gridUnit).toBe('cm');
  });

  it('works without a storage backend', () => {
    expect(loadPrefs(null)).toEqual(DEFAULT_PREFS);
    expect(() => savePrefs(DEFAULT_PREFS, null)).not.toThrow();
  });
});
