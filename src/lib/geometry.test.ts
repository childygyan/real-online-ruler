import { describe, expect, it } from 'vitest';
import {
  angleBetweenDeg,
  distPx,
  gridCellPx,
  lineAngleDeg,
  rotatePoint,
  snapToGuide,
} from './geometry.js';

describe('distPx', () => {
  it('computes Euclidean distance', () => {
    expect(distPx(0, 0, 3, 4)).toBe(5);
    expect(distPx(1, 1, 1, 1)).toBe(0);
    expect(distPx(-2, 0, 2, 0)).toBe(4);
  });
});

describe('lineAngleDeg', () => {
  it('normalizes line direction to [0, 180)', () => {
    expect(lineAngleDeg(0, 0, 10, 0)).toBeCloseTo(0, 9);
    expect(lineAngleDeg(0, 0, 0, 10)).toBeCloseTo(90, 9);
    expect(lineAngleDeg(0, 0, 10, 10)).toBeCloseTo(45, 9);
    // reversed direction is the same line
    expect(lineAngleDeg(10, 0, 0, 0)).toBeCloseTo(0, 9);
    expect(lineAngleDeg(0, 10, 0, 0)).toBeCloseTo(90, 9);
    expect(lineAngleDeg(0, 0, -10, 10)).toBeCloseTo(135, 9);
  });
});

describe('angleBetweenDeg', () => {
  it('returns the smaller angle between two directions', () => {
    expect(angleBetweenDeg(0, 90)).toBe(90);
    expect(angleBetweenDeg(10, 350)).toBe(20);
    expect(angleBetweenDeg(0, 180)).toBe(180);
    expect(angleBetweenDeg(45, 45)).toBe(0);
    expect(angleBetweenDeg(350, 10)).toBe(20);
  });
});

describe('rotatePoint', () => {
  it('rotates around a center', () => {
    const p = rotatePoint(10, 0, 0, 0, 90);
    expect(p.x).toBeCloseTo(0, 9);
    expect(p.y).toBeCloseTo(10, 9);
    const q = rotatePoint(5, 5, 5, 5, 123);
    expect(q.x).toBeCloseTo(5, 9);
    expect(q.y).toBeCloseTo(5, 9);
  });
});

describe('snapToGuide', () => {
  it('snaps to the nearest guide within threshold', () => {
    expect(snapToGuide(102, [50, 100, 200], 10)).toBe(100);
    expect(snapToGuide(109, [50, 100, 200], 10)).toBe(100);
    expect(snapToGuide(115, [50, 100, 200], 10)).toBe(null);
    expect(snapToGuide(50, [], 10)).toBe(null);
  });
});

describe('gridCellPx', () => {
  it('computes 1 cm / 1 inch cells from the calibrated density', () => {
    expect(gridCellPx('in', 96)).toBeCloseTo(96, 9);
    expect(gridCellPx('cm', 96)).toBeCloseTo(96 / 2.54, 9);
    expect(gridCellPx('cm', 192)).toBeCloseTo(192 / 2.54, 9);
  });

  it('rejects bad densities', () => {
    expect(() => gridCellPx('cm', 0)).toThrow(RangeError);
    expect(() => gridCellPx('in', -3)).toThrow(RangeError);
  });
});
