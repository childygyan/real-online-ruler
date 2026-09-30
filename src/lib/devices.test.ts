import { describe, expect, it } from 'vitest';
import {
  categoryFromUserAgent,
  detectDevice,
  DEVICE_CATEGORIES,
  getDevices,
  getDevicesByCategory,
} from './devices.js';
import deviceData from '../data/devices.json';

const IPHONE_UA =
  'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1';
const MAC_UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';
const WINDOWS_UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';
const ANDROID_UA =
  'Mozilla/5.0 (Linux; Android 14; SM-S928B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Mobile Safari/537.36';

describe('devices database', () => {
  it('holds 40–60 entries across the five categories', () => {
    const devices = getDevices();
    expect(devices.length).toBeGreaterThanOrEqual(40);
    expect(devices.length).toBeLessThanOrEqual(60);
    expect(new Set(devices.map((d) => d.category))).toEqual(new Set(DEVICE_CATEGORIES));
  });

  it('every entry has a valid schema and sane PPI', () => {
    for (const d of getDevices()) {
      expect(typeof d.name).toBe('string');
      expect(d.name.length).toBeGreaterThan(0);
      expect(DEVICE_CATEGORIES).toContain(d.category);
      expect(d.physicalPpi).toBeGreaterThanOrEqual(50);
      expect(d.physicalPpi).toBeLessThanOrEqual(1000);
      if (d.resW !== undefined) {
        expect(Number.isInteger(d.resW) && d.resW > 0).toBe(true);
        expect(Number.isInteger(d.resH) && d.resH! > 0).toBe(true);
      }
    }
  });

  it('has no duplicate names', () => {
    const names = getDevices().map((d) => d.name);
    expect(new Set(names).size).toBe(names.length);
  });

  it('matches the raw JSON file one-to-one', () => {
    expect(getDevices().length).toBe(deviceData.length);
  });

  it('getDevicesByCategory filters correctly', () => {
    const iphones = getDevicesByCategory('iPhone');
    expect(iphones.length).toBeGreaterThan(0);
    expect(iphones.every((d) => d.category === 'iPhone')).toBe(true);
  });

  it('spot-checks well-known factory PPI values', () => {
    const byName = new Map(getDevices().map((d) => [d.name, d.physicalPpi]));
    expect(byName.get('iPhone 15 Pro')).toBe(460);
    expect(byName.get('iPhone 11')).toBe(326);
    expect(byName.get('iPad mini (7th gen)')).toBe(326);
    expect(byName.get('MacBook Pro 14" (Apple silicon)')).toBe(254);
    expect(byName.get('MacBook Air 13" (M1)')).toBe(227);
    expect(byName.get('27" monitor · 4K (3840×2160)')).toBe(163);
  });
});

describe('categoryFromUserAgent', () => {
  it('classifies common user agents', () => {
    expect(categoryFromUserAgent(IPHONE_UA)).toBe('iPhone');
    expect(categoryFromUserAgent(MAC_UA)).toBe('MacBook');
    expect(categoryFromUserAgent(WINDOWS_UA)).toBe('Monitor');
    expect(categoryFromUserAgent(ANDROID_UA)).toBe('Android');
    expect(
      categoryFromUserAgent('Mozilla/5.0 (iPad; CPU OS 17_0 like Mac OS X) AppleWebKit/605.1.15')
    ).toBe('iPad');
  });

  it('returns null for unrecognized agents', () => {
    expect(categoryFromUserAgent('curl/8.0')).toBeNull();
    expect(categoryFromUserAgent('')).toBeNull();
  });
});

describe('detectDevice', () => {
  it('high-confidence match: MacBook Pro 14 by exact resolution', () => {
    // 1512×982 CSS @2x = 3024×1964 physical
    const r = detectDevice(MAC_UA, 1512, 982, 2);
    expect(r.confidence).toBe('high');
    expect(r.device?.name).toBe('MacBook Pro 14" (Apple silicon)');
    expect(r.device?.physicalPpi).toBe(254);
  });

  it('medium confidence: iPhone with a display shared by siblings', () => {
    // 393×852 CSS @3x = 1179×2556 — shared by iPhone 15 / 15 Pro / 14 Pro
    const r = detectDevice(IPHONE_UA, 393, 852, 3);
    expect(r.device).not.toBeNull();
    expect(r.device?.physicalPpi).toBe(460);
    expect(r.confidence).toBe('medium');
  });

  it('is orientation-independent', () => {
    const portrait = detectDevice(IPHONE_UA, 393, 852, 3);
    const landscape = detectDevice(IPHONE_UA, 852, 393, 3);
    expect(portrait.device?.physicalPpi).toBe(landscape.device?.physicalPpi);
  });

  it('low confidence with null device for generic desktop monitors', () => {
    const r = detectDevice(WINDOWS_UA, 1920, 1080, 1);
    expect(r.device).toBeNull();
    expect(r.confidence).toBe('low');
    expect(r.category).toBe('Monitor');
  });

  it('low confidence for unknown user agents', () => {
    const r = detectDevice('curl/8.0', 1920, 1080, 1);
    expect(r.device).toBeNull();
    expect(r.confidence).toBe('low');
    expect(r.category).toBeNull();
  });

  it('detects an Android flagship by resolution', () => {
    // Galaxy S23 Ultra: 3088×1440 physical — unique in the database.
    // 772×360 CSS @4x = 3088×1440.
    const r = detectDevice(ANDROID_UA, 772, 360, 4);
    expect(r.confidence).toBe('high');
    expect(r.device?.name).toBe('Galaxy S23 Ultra');
    expect(r.device?.physicalPpi).toBe(500);
  });
});
