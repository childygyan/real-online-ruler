import { describe, expect, it } from 'vitest';
import {
  addMeasurement,
  clearMeasurements,
  createMeasurement,
  loadMeasurements,
  MEASUREMENTS_KEY,
  removeMeasurement,
  saveMeasurements,
  toCSV,
  toTXT,
  updateLabel,
  type Measurement,
} from './measurements.js';

function memStorage(initial?: Record<string, string>) {
  const data = new Map<string, string>(Object.entries(initial ?? {}));
  return {
    getItem: (k: string) => (data.has(k) ? data.get(k)! : null),
    setItem: (k: string, v: string) => {
      data.set(k, v);
    },
  };
}

function sample(): Measurement {
  return createMeasurement('Line A', '12.4 cm', 'cm', 472.4, 35, 1_700_000_000_000);
}

describe('measurement log model', () => {
  it('adds entries newest-last and removes by id', () => {
    const a = sample();
    const b = createMeasurement('Line B', '5 in', 'in', 480, null, 1_700_000_000_001);
    let list: Measurement[] = [];
    list = addMeasurement(list, a);
    list = addMeasurement(list, b);
    expect(list).toHaveLength(2);
    expect(list[1].id).toBe(b.id);
    list = removeMeasurement(list, a.id);
    expect(list).toHaveLength(1);
    expect(list[0].id).toBe(b.id);
    expect(removeMeasurement(list, 'nope')).toHaveLength(1);
  });

  it('updates labels and clears', () => {
    const a = sample();
    let list = addMeasurement([], a);
    list = updateLabel(list, a.id, 'Desk width');
    expect(list[0].label).toBe('Desk width');
    expect(updateLabel(list, 'nope', 'X')[0].label).toBe('Desk width');
    expect(clearMeasurements()).toEqual([]);
  });

  it('formats CSV with quoting and ISO timestamps', () => {
    const a = sample();
    const b = createMeasurement('has, comma', '3 "in"', 'in', 288, 90, 1_700_000_000_002);
    const csv = toCSV([a, b]);
    expect(csv.startsWith('label,value,unit,angle_deg,px,timestamp\n')).toBe(true);
    expect(csv).toContain('Line A,12.4 cm,cm,35,472.4,2023-11-14T22:13:20.000Z');
    expect(csv).toContain('"has, comma","3 ""in""",in,90,288,2023-11-14T22:13:20.002Z');
    expect(csv.endsWith('\n')).toBe(true);
  });

  it('formats TXT as one readable line per entry', () => {
    const txt = toTXT([sample()]);
    expect(txt).toContain('Line A — 12.4 cm · 35° (2023-11-14T22:13:20.000Z)');
    expect(toTXT([])).toBe('');
  });

  it('persists and reloads through localStorage', () => {
    const storage = memStorage();
    const list = addMeasurement([], sample());
    saveMeasurements(list, storage);
    expect(storage.getItem(MEASUREMENTS_KEY)).toContain('Line A');
    const loaded = loadMeasurements(storage);
    expect(loaded).toHaveLength(1);
    expect(loaded[0].label).toBe('Line A');
  });

  it('returns [] for missing or corrupt storage', () => {
    expect(loadMeasurements(memStorage())).toEqual([]);
    expect(loadMeasurements(memStorage({ [MEASUREMENTS_KEY]: 'not json' }))).toEqual([]);
    expect(loadMeasurements(memStorage({ [MEASUREMENTS_KEY]: '{"a":1}' }))).toEqual([]);
    expect(loadMeasurements()).toEqual([]);
  });

  it('swallows storage failures', () => {
    const broken = {
      getItem: () => null,
      setItem: () => {
        throw new Error('quota');
      },
    };
    expect(() => saveMeasurements([sample()], broken)).not.toThrow();
  });
});
