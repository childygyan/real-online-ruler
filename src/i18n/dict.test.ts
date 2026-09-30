/**
 * dict.test.ts — Phase 8 dictionary completeness tests.
 *
 * The Dict type is `typeof en`, so TypeScript already rejects missing or
 * extra keys at compile time. These tests guard the runtime shape too
 * (array lengths, placeholder parity) and catch stale English-fallback stubs.
 */
import { describe, expect, it } from 'vitest';
import { DICTS, getDict } from './dict.js';
import { en } from './dicts/en.js';
import { LOCALES } from './locales.js';

type Json = string | number | boolean | null | Json[] | { [k: string]: Json };

/** All leaf paths, with array indices, e.g. "home.features[0].name". */
function keyPaths(value: Json, prefix = ''): string[] {
  if (Array.isArray(value)) {
    return value.flatMap((v, i) => keyPaths(v as Json, `${prefix}[${i}]`));
  }
  if (value !== null && typeof value === 'object') {
    return Object.entries(value).flatMap(([k, v]) =>
      keyPaths(v as Json, prefix ? `${prefix}.${k}` : k)
    );
  }
  return [prefix];
}

/** Walk two structures in parallel, yielding [path, enValue, otherValue]. */
function* walk(a: Json, b: Json, prefix = ''): Generator<[string, Json, Json]> {
  yield [prefix, a, b];
  if (Array.isArray(a) && Array.isArray(b)) {
    for (let i = 0; i < Math.max(a.length, b.length); i++) {
      yield* walk(a[i] as Json, b[i] as Json, `${prefix}[${i}]`);
    }
    return;
  }
  if (
    a !== null &&
    b !== null &&
    typeof a === 'object' &&
    typeof b === 'object' &&
    !Array.isArray(a) &&
    !Array.isArray(b)
  ) {
    const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
    for (const k of keys) {
      yield* walk(
        (a as Record<string, Json>)[k],
        (b as Record<string, Json>)[k],
        prefix ? `${prefix}.${k}` : k
      );
    }
  }
}

function placeholders(s: string): string[] {
  return [...s.matchAll(/\{(\w+)\}/g)].map((m) => m[1]).sort();
}

const NON_EN = LOCALES.filter((l) => l.code !== 'en').map((l) => l.code);

describe('i18n dictionary parity', () => {
  it('every locale exposes exactly the English key paths (no missing, no extras)', () => {
    const expected = keyPaths(en as unknown as Json).sort();
    for (const code of NON_EN) {
      const actual = keyPaths(DICTS[code] as unknown as Json).sort();
      expect(actual, `locale ${code}`).toEqual(expected);
    }
  });

  it('no locale is still the English-fallback stub object', () => {
    for (const code of NON_EN) {
      expect(DICTS[code], `locale ${code}`).not.toBe(en);
    }
  });

  it('every translated template keeps the English placeholders', () => {
    for (const code of NON_EN) {
      const dict = DICTS[code];
      for (const [path, enValue, value] of walk(en as unknown as Json, dict as unknown as Json)) {
        if (typeof enValue === 'string' && typeof value === 'string') {
          expect(placeholders(value), `${code}:${path}`).toEqual(placeholders(enValue));
        }
      }
    }
  });

  it('translated strings are non-empty wherever English is non-empty', () => {
    for (const code of NON_EN) {
      const dict = DICTS[code];
      for (const [path, enValue, value] of walk(en as unknown as Json, dict as unknown as Json)) {
        if (typeof enValue === 'string' && enValue.length > 0) {
          expect(typeof value, `${code}:${path}`).toBe('string');
          expect((value as string).length, `${code}:${path}`).toBeGreaterThan(0);
        }
      }
    }
  });

  it('getDict falls back to English for unknown locale codes', () => {
    expect(getDict('xx' as never)).toBe(en);
    expect(getDict('en')).toBe(en);
    for (const code of NON_EN) {
      expect(getDict(code)).toBe(DICTS[code]);
    }
  });

  it('content blocks use only known kinds in every locale', () => {
    const kinds = new Set(['h2', 'h3', 'p', 'ul', 'table']);
    for (const code of NON_EN) {
      const dict = DICTS[code] as unknown as {
        content: Record<string, { blocks: { kind: string }[] }>;
      };
      for (const [page, pageDict] of Object.entries(dict.content)) {
        for (const b of pageDict.blocks ?? []) {
          expect(kinds.has(b.kind), `${code}:${page} block kind`).toBe(true);
        }
      }
    }
  });
});
