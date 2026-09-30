/**
 * guides.ts — pure guide-line model + pixel→unit conversion for Phase 4 tools.
 *
 * Guides are transient (not persisted); positions are in CSS px relative to
 * the workspace origin. Rendering lives in RulerApp.astro.
 */

import { inchesToUnit, type Unit } from './units.js';

export type GuideOrientation = 'h' | 'v';

export interface Guide {
  id: string;
  orientation: GuideOrientation;
  /** Position in CSS px from the workspace origin (top for 'h', left for 'v'). */
  pos: number;
}

let counter = 0;

function requireNonNegativePx(name: string, v: number): void {
  if (!Number.isFinite(v) || v < 0) {
    throw new RangeError(`${name} must be a finite non-negative number, got ${v}`);
  }
}

/** Append a guide; returns a new array (immutable update). */
export function addGuide(
  guides: Guide[],
  orientation: GuideOrientation,
  pos: number,
  id?: string
): Guide[] {
  if (orientation !== 'h' && orientation !== 'v') {
    throw new RangeError(`orientation must be 'h' or 'v', got ${String(orientation)}`);
  }
  requireNonNegativePx('pos', pos);
  counter += 1;
  return [...guides, { id: id ?? `g${counter}`, orientation, pos }];
}

/** Move a guide; unknown ids leave the array unchanged. */
export function moveGuide(guides: Guide[], id: string, pos: number): Guide[] {
  requireNonNegativePx('pos', pos);
  return guides.map((g) => (g.id === id ? { ...g, pos } : g));
}

/** Remove a guide by id. */
export function removeGuide(guides: Guide[], id: string): Guide[] {
  return guides.filter((g) => g.id !== id);
}

/** Remove all guides. */
export function clearGuides(): Guide[] {
  return [];
}

/**
 * Convert a workspace pixel coordinate to the active unit, using the
 * calibrated CSS-px-per-inch.
 */
export function pxToUnitValue(px: number, unit: Unit, pxPerInch: number): number {
  if (!Number.isFinite(pxPerInch) || pxPerInch <= 0) {
    throw new RangeError(`pxPerInch must be a positive finite number, got ${pxPerInch}`);
  }
  if (!Number.isFinite(px)) {
    throw new RangeError(`px must be finite, got ${px}`);
  }
  return inchesToUnit(px / pxPerInch, unit, pxPerInch);
}
