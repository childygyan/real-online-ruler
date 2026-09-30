import { describe, expect, it } from 'vitest';
import { addGuide, clearGuides, moveGuide, pxToUnitValue, removeGuide } from './guides.js';

describe('guide model', () => {
  it('adds guides immutably with generated ids', () => {
    const a = addGuide([], 'h', 42, 'a');
    expect(a).toHaveLength(1);
    expect(a[0]).toMatchObject({ id: 'a', orientation: 'h', pos: 42 });
    const b = addGuide(a, 'v', 10);
    expect(a).toHaveLength(1); // original untouched
    expect(b).toHaveLength(2);
    expect(typeof b[1].id).toBe('string');
  });

  it('moves a guide by id', () => {
    const guides = [addGuide([], 'h', 10, 'x')[0], addGuide([], 'v', 20, 'y')[0]];
    const moved = moveGuide(guides, 'x', 55);
    expect(moved.find((g) => g.id === 'x')?.pos).toBe(55);
    expect(moved.find((g) => g.id === 'y')?.pos).toBe(20);
  });

  it('ignores unknown ids on move', () => {
    const guides = addGuide([], 'h', 10, 'x');
    expect(moveGuide(guides, 'nope', 99)).toEqual(guides);
  });

  it('removes a guide by id', () => {
    const guides = [addGuide([], 'h', 10, 'x')[0], addGuide([], 'v', 20, 'y')[0]];
    const rest = removeGuide(guides, 'x');
    expect(rest.map((g) => g.id)).toEqual(['y']);
  });

  it('clears all guides', () => {
    const guides = addGuide(addGuide([], 'h', 1, 'a'), 'v', 2, 'b');
    expect(clearGuides()).toEqual([]);
    expect(guides).toHaveLength(2);
  });

  it('rejects invalid input', () => {
    expect(() => addGuide([], 'h', -1)).toThrow(RangeError);
    expect(() => addGuide([], 'x' as never, 10)).toThrow(RangeError);
    expect(() => moveGuide([], 'x', Number.NaN)).toThrow(RangeError);
  });
});

describe('pxToUnitValue', () => {
  it('converts workspace pixels to the active unit', () => {
    // 96 px at 96 px/in = 1 in = 2.54 cm = 25.4 mm
    expect(pxToUnitValue(96, 'in', 96)).toBeCloseTo(1, 12);
    expect(pxToUnitValue(96, 'cm', 96)).toBeCloseTo(2.54, 12);
    expect(pxToUnitValue(96, 'mm', 96)).toBeCloseTo(25.4, 12);
    expect(pxToUnitValue(96, 'px', 96)).toBeCloseTo(96, 12);
  });

  it('honours the calibrated density', () => {
    // 153.333 px at 153.333 px/in = 1 inch
    expect(pxToUnitValue(153.333, 'in', 153.333)).toBeCloseTo(1, 9);
    expect(pxToUnitValue(76.6665, 'cm', 153.333)).toBeCloseTo(1.27, 2);
  });

  it('rejects bad density values', () => {
    expect(() => pxToUnitValue(10, 'cm', 0)).toThrow(RangeError);
    expect(() => pxToUnitValue(10, 'cm', -5)).toThrow(RangeError);
    expect(() => pxToUnitValue(Number.NaN, 'cm', 96)).toThrow(RangeError);
  });
});
