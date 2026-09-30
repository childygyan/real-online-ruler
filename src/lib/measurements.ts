/**
 * measurements.ts — the measurement log model (Phase 7).
 * Pure list operations plus CSV/TXT export formatting and localStorage persistence.
 * A Measurement stores the calibrated CSS-px length and an optional line angle;
 * valueText is the human-readable rendering in the unit active when it was saved.
 */

export type Unit = 'cm' | 'mm' | 'in' | 'px';

export interface Measurement {
  id: string;
  label: string;
  /** e.g. "12.4 cm" — rendered in the unit active when saved. */
  valueText: string;
  unit: Unit;
  /** Calibrated CSS-px length; 0 for angle-only protractor readings. */
  px: number;
  /** Line direction in degrees [0,180), or null when not applicable. */
  angleDeg: number | null;
  /** Epoch ms. */
  ts: number;
}

export const MEASUREMENTS_KEY = 'ror-measurements';
const MAX_ENTRIES = 200;

let nextId = 1;

/** Create a measurement record; ids are unique per page session. */
export function createMeasurement(
  label: string,
  valueText: string,
  unit: Unit,
  px: number,
  angleDeg: number | null,
  ts: number = Date.now()
): Measurement {
  return { id: `m${nextId++}-${ts}`, label, valueText, unit, px, angleDeg, ts };
}

function sanitize(list: Measurement[]): Measurement[] {
  return list
    .filter((m) => m && typeof m.id === 'string' && typeof m.valueText === 'string')
    .slice(0, MAX_ENTRIES);
}

/** Append a measurement (newest last), enforcing the entry cap. */
export function addMeasurement(list: Measurement[], m: Measurement): Measurement[] {
  return sanitize([...list, m]);
}

/** Rename an entry's label; unknown ids leave the list unchanged. */
export function updateLabel(list: Measurement[], id: string, label: string): Measurement[] {
  return list.map((m) => (m.id === id ? { ...m, label } : m));
}

/** Remove one entry by id. */
export function removeMeasurement(list: Measurement[], id: string): Measurement[] {
  return list.filter((m) => m.id !== id);
}

/** Empty the log. */
export function clearMeasurements(): Measurement[] {
  return [];
}

function csvCell(value: string): string {
  return /[",\n]/.test(value) ? `"${value.replace(/"/g, '""')}"` : value;
}

/** Export the log as CSV: label,value,unit,angle_deg,px,timestamp. */
export function toCSV(list: Measurement[]): string {
  const rows = [
    'label,value,unit,angle_deg,px,timestamp',
    ...list.map((m) =>
      [
        csvCell(m.label),
        csvCell(m.valueText),
        m.unit,
        m.angleDeg === null ? '' : String(m.angleDeg),
        String(Math.round(m.px * 100) / 100),
        new Date(m.ts).toISOString(),
      ].join(',')
    ),
  ];
  return rows.join('\n') + '\n';
}

/** Export the log as plain text, one readable line per entry. */
export function toTXT(list: Measurement[]): string {
  const lines = list.map((m) => {
    const angle = m.angleDeg === null ? '' : ` · ${m.angleDeg}°`;
    return `${m.label} — ${m.valueText}${angle} (${new Date(m.ts).toISOString()})`;
  });
  return lines.join('\n') + (lines.length > 0 ? '\n' : '');
}

export interface StorageLike {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
}

/** Load the persisted log; returns [] on missing/corrupt data. */
export function loadMeasurements(storage?: StorageLike): Measurement[] {
  if (!storage) return [];
  try {
    const raw = storage.getItem(MEASUREMENTS_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return sanitize(parsed as Measurement[]);
  } catch {
    return [];
  }
}

/** Persist the log; failures (e.g. quota) are swallowed by design. */
export function saveMeasurements(list: Measurement[], storage?: StorageLike): void {
  if (!storage) return;
  try {
    storage.setItem(MEASUREMENTS_KEY, JSON.stringify(sanitize(list)));
  } catch {
    /* storage unavailable — the log simply is not persisted */
  }
}
