/**
 * devices.ts — display database + auto-detection for Real Online Ruler.
 *
 * The database (`src/data/devices.json`) is compiled by hand from
 * manufacturers' published display specs (Apple, Samsung, Google) and from
 * deterministic resolution÷diagonal math for generic monitors. Every entry
 * carries the provenance in its data; nothing is invented.
 */

import deviceData from '../data/devices.json';

export type DeviceCategory = 'iPhone' | 'iPad' | 'MacBook' | 'Android' | 'Monitor';

export const DEVICE_CATEGORIES: readonly DeviceCategory[] = [
  'iPhone',
  'iPad',
  'MacBook',
  'Android',
  'Monitor',
] as const;

export interface DeviceEntry {
  name: string;
  category: DeviceCategory;
  /** Factory physical pixels per inch (manufacturer spec or computed). */
  physicalPpi: number;
  /** Physical pixel resolution, when it identifies the model. Omitted for
   * generic monitors: resolution alone cannot identify a monitor's size. */
  resW?: number;
  resH?: number;
  /** Screen diagonal in inches, when known. */
  diagonalIn?: number;
  /** Provenance / computation note. */
  note?: string;
}

export type DetectionConfidence = 'high' | 'medium' | 'low';

export interface DetectionResult {
  /** Best matching entry, or null when nothing reliable was found. */
  device: DeviceEntry | null;
  /** high: category + exact resolution match. medium: resolution matches
   * several same-PPI siblings. low: category only — ask the user to pick. */
  confidence: DetectionConfidence;
  category: DeviceCategory | null;
}

const DEVICES: readonly DeviceEntry[] = deviceData as readonly DeviceEntry[];

export function getDevices(): readonly DeviceEntry[] {
  return DEVICES;
}

export function getDevicesByCategory(category: DeviceCategory): DeviceEntry[] {
  return DEVICES.filter((d) => d.category === category);
}

/** Guess the device category from a user-agent string. Null when unknown. */
export function categoryFromUserAgent(userAgent: string): DeviceCategory | null {
  const ua = userAgent.toLowerCase();
  if (ua.includes('iphone')) return 'iPhone';
  if (ua.includes('ipad')) return 'iPad';
  // iPadOS 13+ Safari reports "Macintosh"; without touch info we cannot tell
  // it apart from a Mac, so "Mac" maps to MacBook here.
  if (ua.includes('macintosh') || ua.includes('mac os')) return 'MacBook';
  if (ua.includes('android')) return 'Android';
  if (ua.includes('windows') || ua.includes('linux') || ua.includes('cros')) return 'Monitor';
  return null;
}

/**
 * Auto-detect the visitor's display from UA + screen geometry.
 *
 * `cssW`/`cssH` are CSS-pixel screen dimensions (window.screen.width/height
 * at 100% zoom); physical pixels are css·dpr. Orientation-independent: a
 * portrait phone and a landscape phone match the same entry.
 */
export function detectDevice(
  userAgent: string,
  cssW: number,
  cssH: number,
  devicePixelRatio: number
): DetectionResult {
  const category = categoryFromUserAgent(userAgent);
  if (category === null) {
    return { device: null, confidence: 'low', category: null };
  }

  const physW = Math.round(cssW * devicePixelRatio);
  const physH = Math.round(cssH * devicePixelRatio);
  const matches = getDevicesByCategory(category).filter(
    (d) =>
      d.resW !== undefined &&
      d.resH !== undefined &&
      ((d.resW === physW && d.resH === physH) || (d.resW === physH && d.resH === physW))
  );

  if (matches.length === 1) {
    return { device: matches[0], confidence: 'high', category };
  }
  if (matches.length > 1) {
    // Siblings sharing a display (e.g. iPhone 15 / 15 Pro) have identical PPI,
    // so the ambiguity is harmless for calibration.
    const ppis = new Set(matches.map((m) => m.physicalPpi));
    if (ppis.size === 1) {
      return { device: matches[0], confidence: 'medium', category };
    }
  }
  return { device: null, confidence: 'low', category };
}
