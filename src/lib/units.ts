/**
 * units.ts — typed unit system for Real Online Ruler.
 *
 * The four supported measurement units. Conversions run through inches as the
 * canonical base unit. Pixel conversions need the calibrated "CSS px per inch"
 * of the visitor's display (see src/lib/ppi.ts, Phase 2); until calibration
 * exists they default to the CSS reference of 96 px/in.
 */

export type Unit = 'cm' | 'mm' | 'in' | 'px';

export const UNITS: readonly Unit[] = ['cm', 'mm', 'in', 'px'] as const;

export const UNIT_LABELS: Record<Unit, string> = {
  cm: 'Centimeters',
  mm: 'Millimeters',
  in: 'Inches',
  px: 'Pixels',
};

export const UNIT_SYMBOLS: Record<Unit, string> = {
  cm: 'cm',
  mm: 'mm',
  in: 'in',
  px: 'px',
};

/** CSS reference pixel density used when no calibration is available. */
export const DEFAULT_CSS_PX_PER_INCH = 96;

/** Inches per one unit — the canonical conversion table. */
const INCHES_PER_UNIT: Record<Exclude<Unit, 'px'>, number> = {
  in: 1,
  cm: 1 / 2.54,
  mm: 1 / 25.4,
};

function inchesPerUnit(unit: Unit, pxPerInch: number): number {
  if (unit === 'px') {
    if (!Number.isFinite(pxPerInch) || pxPerInch <= 0) {
      throw new RangeError(`pxPerInch must be a positive finite number, got ${pxPerInch}`);
    }
    return 1 / pxPerInch;
  }
  return INCHES_PER_UNIT[unit];
}

/** Convert a value in the given unit to inches. */
export function unitToInches(
  value: number,
  unit: Unit,
  pxPerInch = DEFAULT_CSS_PX_PER_INCH
): number {
  return value * inchesPerUnit(unit, pxPerInch);
}

/** Convert a value in inches to the given unit. */
export function inchesToUnit(
  inches: number,
  unit: Unit,
  pxPerInch = DEFAULT_CSS_PX_PER_INCH
): number {
  return inches / inchesPerUnit(unit, pxPerInch);
}

/** Convert directly between two units. */
export function convert(
  value: number,
  from: Unit,
  to: Unit,
  pxPerInch = DEFAULT_CSS_PX_PER_INCH
): number {
  return inchesToUnit(unitToInches(value, from, pxPerInch), to, pxPerInch);
}

/** How many CSS pixels one unit spans at the given calibration. */
export function unitToCssPx(unit: Unit, pxPerInch = DEFAULT_CSS_PX_PER_INCH): number {
  return unitToInches(1, unit, pxPerInch) * pxPerInch;
}

/** Sensible display precision per unit. */
const UNIT_DECIMALS: Record<Unit, number> = {
  in: 2,
  cm: 1,
  mm: 0,
  px: 0,
};

/** Format a measurement for display, e.g. `formatValue(12.5, 'cm')` → "12.5 cm". */
export function formatValue(value: number, unit: Unit): string {
  if (!Number.isFinite(value)) {
    throw new RangeError(`value must be finite, got ${value}`);
  }
  const decimals = UNIT_DECIMALS[unit];
  return `${value.toFixed(decimals)} ${UNIT_SYMBOLS[unit]}`;
}

/** Parse a "cm" | "mm" | "in" | "px" string into a Unit, or null when unknown. */
export function parseUnit(raw: string): Unit | null {
  const normalized = raw.trim().toLowerCase();
  return (UNITS as readonly string[]).includes(normalized) ? (normalized as Unit) : null;
}
