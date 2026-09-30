/**
 * geometry.ts — pure geometry helpers for the Phase 7 advanced tools.
 * All coordinates are CSS px in the workspace frame unless noted.
 */

/** Euclidean distance between two points. */
export function distPx(x1: number, y1: number, x2: number, y2: number): number {
  return Math.hypot(x2 - x1, y2 - y1);
}

/**
 * Direction of the line from (x1,y1) to (x2,y2) as degrees, normalized to
 * [0, 180) — a line has no direction, so 200° and 20° are the same line.
 */
export function lineAngleDeg(x1: number, y1: number, x2: number, y2: number): number {
  const deg = (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;
  return ((deg % 180) + 180) % 180;
}

/**
 * Smallest angle between two directions (each 0–360°) in degrees, [0, 180].
 * Used by the protractor for the angle between its arms.
 */
export function angleBetweenDeg(a: number, b: number): number {
  const diff = Math.abs((((a - b) % 360) + 360) % 360);
  return diff > 180 ? 360 - diff : diff;
}

/** Rotate point (px,py) around center (cx,cy) by deg degrees (clockwise-positive in screen coords). */
export function rotatePoint(
  px: number,
  py: number,
  cx: number,
  cy: number,
  deg: number
): { x: number; y: number } {
  const rad = (deg * Math.PI) / 180;
  const cos = Math.cos(rad);
  const sin = Math.sin(rad);
  const dx = px - cx;
  const dy = py - cy;
  return { x: cx + dx * cos - dy * sin, y: cy + dx * sin + dy * cos };
}

/**
 * Snap a coordinate to the nearest guide position within `threshold` px.
 * `positions` are guide offsets along one axis. Returns the snapped position,
 * or null when nothing is close enough.
 */
export function snapToGuide(pos: number, positions: number[], threshold: number): number | null {
  let best: number | null = null;
  let bestDist = threshold;
  for (const g of positions) {
    const d = Math.abs(g - pos);
    if (d <= bestDist) {
      bestDist = d;
      best = g;
    }
  }
  return best;
}

/**
 * Grid cell size in CSS px for the grid overlay: 1 cm or 1 inch of calibrated space.
 */
export function gridCellPx(gridUnit: 'cm' | 'in', pxPerInch: number): number {
  if (!Number.isFinite(pxPerInch) || pxPerInch <= 0) {
    throw new RangeError(`pxPerInch must be a positive finite number, got ${pxPerInch}`);
  }
  return gridUnit === 'cm' ? pxPerInch / 2.54 : pxPerInch;
}
