import { describe, expect, it } from 'vitest';
import { computeTicks } from './ticks.js';

describe('computeTicks', () => {
  it('cm mode: mm ticks with labeled centimeter majors', () => {
    // 192 px at 96 px/in = 2 in = 50.8 mm → ticks at 0..50 mm
    const ticks = computeTicks(192, 'cm', 96);
    expect(ticks.length).toBe(51);
    expect(ticks[0]).toMatchObject({ pos: 0, size: 'major', label: '0', value: 0 });
    // 10 mm tick → 1 cm, labeled "1"
    expect(ticks[10]).toMatchObject({ size: 'major', label: '1', value: 10 });
    expect(ticks[10].pos).toBeCloseTo((96 / 25.4) * 10, 9);
    // 5 mm tick → medium, unlabeled
    expect(ticks[5].size).toBe('medium');
    expect(ticks[5].label).toBeUndefined();
    // 3 mm tick → minor
    expect(ticks[3].size).toBe('minor');
  });

  it('mm mode: labels show millimeter values', () => {
    const ticks = computeTicks(192, 'mm', 96);
    expect(ticks[10]).toMatchObject({ size: 'major', label: '10', value: 10 });
    expect(ticks[20].label).toBe('20');
  });

  it('in mode: sixteenths with fractional tiers and whole-inch labels', () => {
    // 192 px at 96 px/in = exactly 2 inches → 33 sixteenth ticks
    const ticks = computeTicks(192, 'in', 96);
    expect(ticks.length).toBe(33);
    expect(ticks[0]).toMatchObject({ pos: 0, size: 'major', label: '0' });
    expect(ticks[16]).toMatchObject({ size: 'major', label: '1' });
    expect(ticks[16].pos).toBeCloseTo(96, 9);
    expect(ticks[32]).toMatchObject({ label: '2' });
    expect(ticks[8].size).toBe('long'); // 1/2"
    expect(ticks[24].size).toBe('long'); // 1 1/2"
    expect(ticks[4].size).toBe('medium'); // 1/4"
    expect(ticks[12].size).toBe('medium'); // 3/4"
    expect(ticks[2].size).toBe('minor'); // 1/8"
    expect(ticks[1].size).toBe('minor'); // 1/16"
    expect(ticks[1].pos).toBeCloseTo(6, 9); // 96/16
  });

  it('in mode: tick values are fractional inches', () => {
    const ticks = computeTicks(96, 'in', 96);
    expect(ticks[8].value).toBeCloseTo(0.5, 12);
    expect(ticks[4].value).toBeCloseTo(0.25, 12);
  });

  it('px mode: 10 px minors, labeled 100 px majors', () => {
    const ticks = computeTicks(250, 'px', 96);
    expect(ticks.length).toBe(26); // 0..250 step 10
    expect(ticks[0]).toMatchObject({ pos: 0, size: 'major', label: '0' });
    expect(ticks[10]).toMatchObject({ pos: 100, size: 'major', label: '100' });
    expect(ticks[5]).toMatchObject({ pos: 50, size: 'medium' });
    expect(ticks[5].label).toBeUndefined();
    expect(ticks[3]).toMatchObject({ pos: 30, size: 'minor' });
  });

  it('scales with the calibrated density', () => {
    // At 192 px/in, 192 px spans exactly one inch: sixteenth step = 12 px, 17 ticks.
    const ticks = computeTicks(192, 'in', 192);
    expect(ticks.length).toBe(17);
    expect(ticks[1].pos).toBeCloseTo(12, 9);
    expect(ticks[16]).toMatchObject({ label: '1' });
    expect(ticks[16].pos).toBeCloseTo(192, 9);
  });

  it('always emits a tick at the origin, even for zero length', () => {
    for (const unit of ['cm', 'mm', 'in', 'px'] as const) {
      const ticks = computeTicks(0, unit, 96);
      expect(ticks.length).toBe(1);
      expect(ticks[0].pos).toBe(0);
    }
  });

  it('rejects invalid inputs', () => {
    expect(() => computeTicks(-5, 'cm', 96)).toThrow(RangeError);
    expect(() => computeTicks(100, 'cm', 0)).toThrow(RangeError);
    expect(() => computeTicks(100, 'in', Number.NaN)).toThrow(RangeError);
    expect(() => computeTicks(Number.POSITIVE_INFINITY, 'px', 96)).toThrow(RangeError);
  });
});
