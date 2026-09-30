import { describe, expect, it } from 'vitest';
import {
  convert,
  formatValue,
  inchesToUnit,
  parseUnit,
  unitToCssPx,
  unitToInches,
  DEFAULT_CSS_PX_PER_INCH,
  UNITS,
} from './units.js';

const EPS = 1e-12;

describe('units', () => {
  it('exposes exactly the four supported units', () => {
    expect([...UNITS]).toEqual(['cm', 'mm', 'in', 'px']);
    expect(DEFAULT_CSS_PX_PER_INCH).toBe(96);
  });

  it('converts 1 inch to metric units exactly', () => {
    expect(unitToInches(2.54, 'cm')).toBeCloseTo(1, 12);
    expect(unitToInches(25.4, 'mm')).toBeCloseTo(1, 12);
    expect(inchesToUnit(1, 'cm')).toBeCloseTo(2.54, 12);
    expect(inchesToUnit(1, 'mm')).toBeCloseTo(25.4, 12);
  });

  it('converts between metric units', () => {
    expect(convert(10, 'mm', 'cm')).toBeCloseTo(1, 12);
    expect(convert(1, 'cm', 'mm')).toBeCloseTo(10, 12);
    expect(convert(1, 'in', 'mm')).toBeCloseTo(25.4, 12);
  });

  it('round-trips through inches without drift', () => {
    for (const unit of UNITS) {
      const back = inchesToUnit(unitToInches(7.25, unit), unit);
      expect(Math.abs(back - 7.25)).toBeLessThan(EPS);
    }
  });

  it('converts pixels at the CSS reference density of 96 px/in', () => {
    expect(unitToInches(96, 'px')).toBeCloseTo(1, 12);
    expect(inchesToUnit(1, 'px')).toBeCloseTo(96, 12);
    // 2.54 cm is one inch, so it must equal 96 px at 96 PPI.
    expect(convert(2.54, 'cm', 'px')).toBeCloseTo(96, 9);
  });

  it('converts pixels at a calibrated density', () => {
    // e.g. an iPhone-class display at 460 physical PPI and DPR 3 → ~153.33 CSS px/in
    const pxPerInch = 460 / 3;
    expect(unitToInches(153.333, 'px', pxPerInch)).toBeCloseTo(1, 3);
    expect(inchesToUnit(1, 'px', pxPerInch)).toBeCloseTo(pxPerInch, 9);
  });

  it('rejects non-positive pxPerInch for pixel math', () => {
    expect(() => unitToInches(10, 'px', 0)).toThrow(RangeError);
    expect(() => inchesToUnit(10, 'px', -50)).toThrow(RangeError);
    expect(() => inchesToUnit(10, 'px', Number.NaN)).toThrow(RangeError);
  });

  it('unitToCssPx returns px spanned by one unit', () => {
    expect(unitToCssPx('in')).toBeCloseTo(96, 12);
    expect(unitToCssPx('cm')).toBeCloseTo(96 / 2.54, 12);
    expect(unitToCssPx('mm')).toBeCloseTo(96 / 25.4, 12);
    expect(unitToCssPx('px')).toBeCloseTo(1, 12);
  });

  it('formats values with per-unit precision', () => {
    expect(formatValue(12.5, 'cm')).toBe('12.5 cm');
    expect(formatValue(3.14159, 'in')).toBe('3.14 in');
    expect(formatValue(25.4, 'mm')).toBe('25 mm');
    expect(formatValue(96.7, 'px')).toBe('97 px');
  });

  it('rejects non-finite values in formatValue', () => {
    expect(() => formatValue(Number.POSITIVE_INFINITY, 'cm')).toThrow(RangeError);
    expect(() => formatValue(Number.NaN, 'in')).toThrow(RangeError);
  });

  it('parses unit strings case-insensitively', () => {
    expect(parseUnit('cm')).toBe('cm');
    expect(parseUnit('IN')).toBe('in');
    expect(parseUnit('  mm ')).toBe('mm');
    expect(parseUnit('px')).toBe('px');
    expect(parseUnit('furlong')).toBeNull();
    expect(parseUnit('')).toBeNull();
  });
});
