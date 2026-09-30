/**
 * ticks.ts — pure tick-mark computation for the ruler engine.
 *
 * Given a ruler length in CSS px, a unit, and the calibrated px-per-inch,
 * produce the tick marks to draw. Rendering (SVG/canvas) lives in
 * RulerApp.astro; this module is intentionally render-agnostic so the math
 * is unit-testable.
 */

import type { Unit } from './units.js';

export type TickSize = 'major' | 'long' | 'medium' | 'minor';

export interface Tick {
  /** Position in CSS px from the ruler origin (0). */
  pos: number;
  size: TickSize;
  /** Label text for major ticks; undefined for unlabeled ticks. */
  label?: string;
  /** Value in the current unit at this tick. */
  value: number;
}

function requireFinite(name: string, v: number): void {
  if (!Number.isFinite(v) || v < 0) {
    throw new RangeError(`${name} must be a finite non-negative number, got ${v}`);
  }
}

/** Metric ticks (cm and mm modes): one tick per millimeter. */
function metricTicks(lengthPx: number, mmPx: number, labelForMm: (mm: number) => string): Tick[] {
  const ticks: Tick[] = [];
  const count = Math.floor(lengthPx / mmPx);
  for (let mm = 0; mm <= count; mm++) {
    const size: TickSize = mm % 10 === 0 ? 'major' : mm % 5 === 0 ? 'medium' : 'minor';
    ticks.push({
      pos: mm * mmPx,
      size,
      value: mm,
      ...(size === 'major' ? { label: labelForMm(mm) } : {}),
    });
  }
  return ticks;
}

/** Inch ticks: sixteenths, with longer marks at halves and quarters. */
function inchTicks(lengthPx: number, pxPerInch: number): Tick[] {
  const sixteenth = pxPerInch / 16;
  const ticks: Tick[] = [];
  const count = Math.floor(lengthPx / sixteenth);
  for (let i = 0; i <= count; i++) {
    let size: TickSize = 'minor';
    if (i % 16 === 0) size = 'major';
    else if (i % 8 === 0) size = 'long';
    else if (i % 4 === 0) size = 'medium';
    ticks.push({
      pos: i * sixteenth,
      size,
      value: i / 16,
      ...(size === 'major' ? { label: String(i / 16) } : {}),
    });
  }
  return ticks;
}

/** Pixel ticks: minor every 10 px, medium every 50, labeled majors every 100. */
function pixelTicks(lengthPx: number): Tick[] {
  const ticks: Tick[] = [];
  const count = Math.floor(lengthPx / 10);
  for (let i = 0; i <= count; i++) {
    const px = i * 10;
    const size: TickSize = px % 100 === 0 ? 'major' : px % 50 === 0 ? 'medium' : 'minor';
    ticks.push({
      pos: px,
      size,
      value: px,
      ...(size === 'major' ? { label: String(px) } : {}),
    });
  }
  return ticks;
}

/**
 * Compute tick marks for a ruler `lengthPx` long in the given unit.
 * `pxPerInch` is the calibrated CSS-px-per-inch (see ppi.ts).
 */
export function computeTicks(lengthPx: number, unit: Unit, pxPerInch: number): Tick[] {
  requireFinite('lengthPx', lengthPx);
  requireFinite('pxPerInch', pxPerInch);
  if (pxPerInch === 0) throw new RangeError('pxPerInch must be positive');
  switch (unit) {
    case 'cm':
      return metricTicks(lengthPx, pxPerInch / 25.4, (mm) => String(mm / 10));
    case 'mm':
      return metricTicks(lengthPx, pxPerInch / 25.4, (mm) => String(mm));
    case 'in':
      return inchTicks(lengthPx, pxPerInch);
    case 'px':
      return pixelTicks(lengthPx);
  }
}
