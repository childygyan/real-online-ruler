/**
 * calibration.ts — persistence for the visitor's calibration.
 *
 * Stored in localStorage under "ror-calibration" as
 * { method, pxPerInch, deviceName?, ts }. Anything missing, corrupt, or
 * outside the sane PPI range falls back to the 96 px/in CSS default.
 * The storage backend is injectable so the logic is unit-testable in Node.
 */

import { isSanePpi } from './ppi.js';

export const CALIBRATION_KEY = 'ror-calibration';

export type CalibrationMethod = 'auto' | 'device' | 'diagonal' | 'card' | 'default';

export const CALIBRATION_METHODS: readonly CalibrationMethod[] = [
  'auto',
  'device',
  'diagonal',
  'card',
  'default',
] as const;

export interface Calibration {
  method: CalibrationMethod;
  /** Calibrated CSS pixels per inch. */
  pxPerInch: number;
  /** Human-readable source, e.g. device name or "15.6 in diagonal". */
  deviceName?: string;
  /** Unix ms timestamp of when the calibration was saved. */
  ts: number;
}

export const DEFAULT_CALIBRATION: Calibration = {
  method: 'default',
  pxPerInch: 96,
  ts: 0,
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
    /* storage blocked — treat as unavailable */
  }
  return null;
}

function isValidMethod(m: unknown): m is CalibrationMethod {
  return typeof m === 'string' && (CALIBRATION_METHODS as readonly string[]).includes(m);
}

/** Parse + validate a stored calibration; returns null when unusable. */
export function parseCalibration(raw: string | null): Calibration | null {
  if (raw === null) return null;
  try {
    const parsed: unknown = JSON.parse(raw);
    if (typeof parsed !== 'object' || parsed === null) return null;
    const c = parsed as Record<string, unknown>;
    if (!isValidMethod(c['method'])) return null;
    if (!isSanePpi(c['pxPerInch'] as number)) return null;
    if (typeof c['ts'] !== 'number' || !Number.isFinite(c['ts'])) return null;
    const cal: Calibration = {
      method: c['method'],
      pxPerInch: c['pxPerInch'] as number,
      ts: c['ts'] as number,
    };
    if (typeof c['deviceName'] === 'string' && c['deviceName'].length > 0) {
      cal.deviceName = c['deviceName'];
    }
    return cal;
  } catch {
    return null;
  }
}

export function loadCalibration(storage: StorageLike | null = getStorage()): Calibration {
  if (storage === null) return DEFAULT_CALIBRATION;
  try {
    return parseCalibration(storage.getItem(CALIBRATION_KEY)) ?? DEFAULT_CALIBRATION;
  } catch {
    return DEFAULT_CALIBRATION;
  }
}

export function saveCalibration(
  cal: Omit<Calibration, 'ts'> & { ts?: number },
  storage: StorageLike | null = getStorage()
): Calibration {
  if (!isValidMethod(cal.method)) {
    throw new RangeError(`unknown calibration method: ${String(cal.method)}`);
  }
  if (!isSanePpi(cal.pxPerInch)) {
    throw new RangeError(`pxPerInch out of sane range: ${cal.pxPerInch}`);
  }
  const full: Calibration = { ...cal, ts: cal.ts ?? Date.now() };
  storage?.setItem(CALIBRATION_KEY, JSON.stringify(full));
  return full;
}

/** Remove the stored calibration; the app falls back to 96 px/in. */
export function resetCalibration(storage: StorageLike | null = getStorage()): void {
  try {
    storage?.removeItem(CALIBRATION_KEY);
  } catch {
    /* ignore */
  }
}
