import { describe, expect, it } from 'vitest';
import {
  cardPpi,
  deviceCssPxPerInch,
  diagonalPpi,
  isSanePpi,
  MAX_SANE_PPI,
  MIN_SANE_PPI,
} from './ppi.js';

describe('ppi math', () => {
  it('diagonalPpi derives CSS px/in from resolution and diagonal', () => {
    // 24" 1080p monitor: sqrt(1920² + 1080²) / 24 ≈ 91.79
    expect(diagonalPpi(1920, 1080, 24)).toBeCloseTo(91.7878, 3);
    // 13.6" MacBook Air class: 2560×1664 @ 13.6" ≈ 224.51 (Apple lists 224 PPI)
    expect(diagonalPpi(2560, 1664, 13.6)).toBeCloseTo(224.51, 2);
  });

  it('diagonalPpi is independent of devicePixelRatio (DPR cancels out)', () => {
    // A 460-physical-PPI phone at DPR 3 and the same phone at DPR 2 must
    // yield the same CSS px/in from the diagonal formula.
    const cssW = 1179;
    const cssH = 2556;
    const diag = Math.sqrt((cssW * 3) ** 2 + (cssH * 3) ** 2) / 460;
    expect(diagonalPpi(cssW, cssH, diag)).toBeCloseTo(460 / 3, 9);
  });

  it('cardPpi converts a matched card rectangle to px/in', () => {
    // At exactly 96 CSS px/in, an 85.6 mm card spans 323.527… px.
    const rectPx = (85.6 / 25.4) * 96;
    expect(cardPpi(rectPx)).toBeCloseTo(96, 9);
    // A narrower rectangle means a lower-density display.
    expect(cardPpi(200)).toBeCloseTo(200 / (85.6 / 25.4), 9);
  });

  it('cardPpi honours a custom card width', () => {
    expect(cardPpi(96, 25.4)).toBeCloseTo(96, 9); // 1-inch-wide card
  });

  it('deviceCssPxPerInch divides factory PPI by the pixel ratio', () => {
    expect(deviceCssPxPerInch(460, 3)).toBeCloseTo(153.333333, 5);
    expect(deviceCssPxPerInch(227, 2)).toBeCloseTo(113.5, 9);
    expect(deviceCssPxPerInch(96, 1)).toBe(96);
  });

  it('rejects non-positive inputs', () => {
    expect(() => diagonalPpi(0, 1080, 24)).toThrow(RangeError);
    expect(() => diagonalPpi(1920, -1, 24)).toThrow(RangeError);
    expect(() => diagonalPpi(1920, 1080, 0)).toThrow(RangeError);
    expect(() => cardPpi(0)).toThrow(RangeError);
    expect(() => deviceCssPxPerInch(460, 0)).toThrow(RangeError);
    expect(() => deviceCssPxPerInch(Number.NaN, 2)).toThrow(RangeError);
  });

  it('isSanePpi validates the 50–1000 plausible range', () => {
    expect(isSanePpi(96)).toBe(true);
    expect(isSanePpi(MIN_SANE_PPI)).toBe(true);
    expect(isSanePpi(MAX_SANE_PPI)).toBe(true);
    expect(isSanePpi(49.999)).toBe(false);
    expect(isSanePpi(1000.001)).toBe(false);
    expect(isSanePpi(0)).toBe(false);
    expect(isSanePpi(-96)).toBe(false);
    expect(isSanePpi(Number.NaN)).toBe(false);
    expect(isSanePpi(Number.POSITIVE_INFINITY)).toBe(false);
  });
});
