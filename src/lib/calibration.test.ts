import { describe, expect, it, vi, beforeEach } from 'vitest';
import {
  CALIBRATION_KEY,
  DEFAULT_CALIBRATION,
  loadCalibration,
  parseCalibration,
  resetCalibration,
  saveCalibration,
  type StorageLike,
} from './calibration.js';

function memoryStorage(): StorageLike & { clear: () => void } {
  const map = new Map<string, string>();
  return {
    getItem: (k) => (map.has(k) ? map.get(k)! : null),
    setItem: (k, v) => {
      map.set(k, v);
    },
    removeItem: (k) => {
      map.delete(k);
    },
    clear: () => map.clear(),
  };
}

describe('calibration store', () => {
  let storage: ReturnType<typeof memoryStorage>;
  beforeEach(() => {
    storage = memoryStorage();
  });

  it('loads the default 96 px/in when nothing is stored', () => {
    expect(loadCalibration(storage)).toEqual(DEFAULT_CALIBRATION);
  });

  it('round-trips a saved calibration', () => {
    const saved = saveCalibration(
      { method: 'device', pxPerInch: 153.333, deviceName: 'iPhone 15 Pro' },
      storage
    );
    expect(saved.ts).toBeGreaterThan(0);
    const loaded = loadCalibration(storage);
    expect(loaded.method).toBe('device');
    expect(loaded.pxPerInch).toBeCloseTo(153.333, 9);
    expect(loaded.deviceName).toBe('iPhone 15 Pro');
    expect(loaded.ts).toBe(saved.ts);
  });

  it('writes valid JSON under the ror-calibration key', () => {
    saveCalibration({ method: 'card', pxPerInch: 110.5 }, storage);
    const raw = storage.getItem(CALIBRATION_KEY);
    expect(raw).not.toBeNull();
    const parsed = JSON.parse(raw!);
    expect(parsed.method).toBe('card');
    expect(parsed.pxPerInch).toBe(110.5);
  });

  it('falls back to default on corrupt JSON', () => {
    storage.setItem(CALIBRATION_KEY, '{not json');
    expect(loadCalibration(storage)).toEqual(DEFAULT_CALIBRATION);
  });

  it('falls back to default on insane or unknown values', () => {
    storage.setItem(
      CALIBRATION_KEY,
      JSON.stringify({ method: 'diagonal', pxPerInch: 5000, ts: Date.now() })
    );
    expect(loadCalibration(storage)).toEqual(DEFAULT_CALIBRATION);

    storage.setItem(
      CALIBRATION_KEY,
      JSON.stringify({ method: 'telepathy', pxPerInch: 96, ts: Date.now() })
    );
    expect(loadCalibration(storage)).toEqual(DEFAULT_CALIBRATION);
  });

  it('rejects saving out-of-range values', () => {
    expect(() => saveCalibration({ method: 'card', pxPerInch: 10 }, storage)).toThrow(RangeError);
    expect(() => saveCalibration({ method: 'nope' as never, pxPerInch: 96 }, storage)).toThrow(
      RangeError
    );
  });

  it('resetCalibration removes the stored value', () => {
    saveCalibration({ method: 'auto', pxPerInch: 120 }, storage);
    resetCalibration(storage);
    expect(storage.getItem(CALIBRATION_KEY)).toBeNull();
    expect(loadCalibration(storage)).toEqual(DEFAULT_CALIBRATION);
  });

  it('parseCalibration handles edge inputs', () => {
    expect(parseCalibration(null)).toBeNull();
    expect(parseCalibration('42')).toBeNull();
    expect(parseCalibration(JSON.stringify({ method: 'default', pxPerInch: 96, ts: 123 }))).toEqual(
      { method: 'default', pxPerInch: 96, ts: 123 }
    );
  });

  it('works without any storage backend', () => {
    expect(loadCalibration(null)).toEqual(DEFAULT_CALIBRATION);
    expect(() => resetCalibration(null)).not.toThrow();
    const spy = vi.fn();
    saveCalibration({ method: 'card', pxPerInch: 100 }, null);
    expect(spy).not.toHaveBeenCalled();
  });
});
