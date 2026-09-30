/**
 * ppi.ts — pure pixel-density math for Real Online Ruler.
 *
 * The single number the whole app depends on is "CSS pixels per inch":
 * how many CSS px the browser must draw to span one physical inch on the
 * visitor's display. All three calibration paths below produce it.
 */

/** A CSS-px-per-inch value is only usable inside this plausible range. */
export const MIN_SANE_PPI = 50;
export const MAX_SANE_PPI = 1000;

/** True when `v` is a finite, positive, plausible CSS-px-per-inch value. */
export function isSanePpi(v: number): boolean {
  return Number.isFinite(v) && v >= MIN_SANE_PPI && v <= MAX_SANE_PPI;
}

function requirePositive(name: string, v: number): void {
  if (!Number.isFinite(v) || v <= 0) {
    throw new RangeError(`${name} must be a positive finite number, got ${v}`);
  }
}

/**
 * CSS px per inch from the screen's diagonal.
 *
 * Why the device pixel ratio cancels out: physical pixels per inch are
 *   sqrt((cssW·dpr)² + (cssH·dpr)²) / diagonal
 * = dpr · sqrt(cssW² + cssH²) / diagonal.
 * But rulers are drawn in CSS px, so we need CSS px per inch =
 * physical PPI / dpr = sqrt(cssW² + cssH²) / diagonal.
 * The dpr factor divides away — `cssW`/`cssH` are the CSS-pixel screen
 * dimensions (e.g. `window.screen.width`), valid at 100% browser zoom.
 */
export function diagonalPpi(cssW: number, cssH: number, diagonalIn: number): number {
  requirePositive('cssW', cssW);
  requirePositive('cssH', cssH);
  requirePositive('diagonalIn', diagonalIn);
  return Math.sqrt(cssW * cssW + cssH * cssH) / diagonalIn;
}

/**
 * CSS px per inch from the credit-card method: the user resizes an on-screen
 * rectangle until it exactly covers a real card, then we read the rectangle's
 * CSS-pixel width. Standard ID-1 cards are 85.60 × 53.98 mm.
 */
export function cardPpi(rectWidthPx: number, cardWidthMm = 85.6): number {
  requirePositive('rectWidthPx', rectWidthPx);
  requirePositive('cardWidthMm', cardWidthMm);
  return rectWidthPx / (cardWidthMm / 25.4);
}

/**
 * CSS px per inch from a device-database entry: the factory physical PPI
 * divided by the device pixel ratio.
 */
export function deviceCssPxPerInch(physicalPpi: number, devicePixelRatio: number): number {
  requirePositive('physicalPpi', physicalPpi);
  requirePositive('devicePixelRatio', devicePixelRatio);
  return physicalPpi / devicePixelRatio;
}
