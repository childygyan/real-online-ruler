/**
 * verify-i18n.mjs — post-build Phase 8 checks on dist/ output.
 *
 * 1. Every locale page carries the right <html lang>.
 * 2. Every page carries the full hreflang set (en/es/fr/pt/zh-Hans/id/x-default).
 * 3. No English chrome leakage: localized pages must not contain a set of
 *    English UI strings that the dictionaries translate.
 * 4. Localized JSON-LD: FAQ answers on locale pages are not English.
 * 5. Localized pages differ from their English counterparts.
 *
 * Run after `npm run build`. Exits non-zero on failure.
 */
import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');

const LOCALES = [
  { code: 'es', htmlLang: 'es' },
  { code: 'fr', htmlLang: 'fr' },
  { code: 'pt', htmlLang: 'pt' },
  { code: 'zh', htmlLang: 'zh-Hans' },
  { code: 'id', htmlLang: 'id' },
];

const PAGES = ['', 'guide/', 'how-to-calibrate/', 'cm/', 'inches/', 'mm/', 'pixels/'];

/** English chrome strings that MUST be translated on every locale page. */
const ENGLISH_CHROME = [
  'Skip to content',
  'How to calibrate',
  'Reading guide',
  'Frequently asked questions',
  'Calibrate your display',
  'Auto-detect',
  'Pick device',
  'Screen diagonal',
  'Credit card',
  'Measurement log',
  'Keyboard shortcuts',
  'Drag-to-measure tool',
  'Protractor overlay',
  'Magnifier loupe',
  'Floating ruler',
  'Grid overlay',
  'Toggle guide lines',
  'Toggle crosshair',
  'Keep browser zoom at 100%',
  'No signup',
  'Back to the ruler',
  'Open the ruler',
];

const HREFLANGS = ['en', 'es', 'fr', 'pt', 'zh-Hans', 'id', 'x-default'];

let failures = 0;
function fail(msg) {
  failures++;
  console.error('FAIL:', msg);
}
function read(rel) {
  const p = join(dist, rel);
  if (!existsSync(p)) {
    fail(`missing output file: ${rel}`);
    return null;
  }
  return readFileSync(p, 'utf8');
}

for (const loc of LOCALES) {
  for (const page of PAGES) {
    const rel = loc.code + '/' + (page ? page + 'index.html' : 'index.html');
    const html = read(rel);
    if (!html) continue;

    // 1. html lang
    if (!html.includes(`<html lang="${loc.htmlLang}"`)) {
      fail(`${rel}: missing <html lang="${loc.htmlLang}">`);
    }

    // 2. hreflang set
    for (const h of HREFLANGS) {
      if (!html.includes(`hreflang="${h}"`)) {
        fail(`${rel}: missing hreflang="${h}"`);
      }
    }

    // 3. no English chrome leakage (strip HTML comments: developer notes only)
    const visible = html.replace(/<!--[\s\S]*?-->/g, '');
    for (const s of ENGLISH_CHROME) {
      if (visible.includes(s)) {
        fail(`${rel}: English chrome leakage: "${s}"`);
      }
    }

    // 5. differs from English counterpart
    const enRel = page ? page + 'index.html' : 'index.html';
    const enHtml = read(enRel);
    if (enHtml && html === enHtml) {
      fail(`${rel}: identical to English output`);
    }
  }

  // 4. localized FAQ JSON-LD on the guide page
  const guide = read(loc.code + '/guide/index.html');
  if (guide) {
    if (guide.includes('How do I read fractions of an inch')) {
      fail(`${loc.code}/guide: FAQ JSON-LD still English`);
    }
    if (!guide.includes('FAQPage')) {
      fail(`${loc.code}/guide: missing FAQPage JSON-LD`);
    }
  }
}

// English pages keep English chrome (sanity: the check above is meaningful)
const enHome = read('index.html');
if (enHome && !enHome.includes('Skip to content')) {
  fail('index.html: English chrome missing — leakage check is vacuous');
}

if (failures > 0) {
  console.error(`\n${failures} i18n verification failure(s)`);
  process.exit(1);
}
console.log('i18n verification passed: lang, hreflang, no EN leakage, localized JSON-LD.');
