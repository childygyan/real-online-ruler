# Phase 8 Report — Internationalization (es / fr / pt / zh-Hans / id)

**Date:** 2026-09-30
**Project:** Real Online Ruler (`~/workspace/real-online-ruler/`)
**Stack:** Astro 5 · strict TypeScript · Tailwind v3 · Vitest · ESLint · Prettier · npm · Cloudflare Pages

## 1. Objective

Ship the site in six languages — English (base, root paths) plus native-quality
Spanish, French, Brazilian Portuguese, Simplified Chinese, and Indonesian —
with every page mirrored under `/{locale}/`, full hreflang coverage, localized
metadata/JSON-LD, and zero forced language redirects. Translations are original
and natural, not word-by-word.

## 2. What was built

### 2.1 Typed dictionary architecture

- `src/i18n/dicts/en.ts` — the English source of truth (~970 lines). Every
  user-visible string on the site lives here: chrome (header/footer/layout/
  toolbar/stage/status/measure/protractor/floating ruler/log/help/calibrate/
  404), the full home page (6 features, 12 FAQs), and all five long-form
  content articles (guide, how-to-calibrate, cm, inches, mm, pixels) as typed
  `ContentBlock[]` (h2/h3/p/ul/table) plus FAQs, breadcrumbs, related links,
  and lede copy.
- `src/i18n/dict.ts` — `export type Dict = typeof en`; `DICTS:
Record<LocaleCode, Dict>`; `getDict(code)` with English fallback.
- `src/i18n/dicts/{es,fr,pt,zh,id}.ts` — complete native translations with
  **exactly** the English key shape. TypeScript rejects any missing/extra key
  at compile time; `dict.test.ts` additionally asserts runtime parity
  (recursive key paths incl. array indices, placeholder sets, non-empty
  strings, valid block kinds).
- `src/i18n/content.ts` — shared `ContentBlock`, FAQ, related-link, and
  `ContentPageDict` types.
- `src/i18n/urls.ts` — `localizePath`, `alternateLinks` (absolute URLs),
  `ogLocale`, `getLocaleFromPath`, and `localizeHtml` (rewrites root-relative
  `href`s inside translated HTML fragments so in-content links stay in-locale).

### 2.2 Routing — 48 pages from 8 sources

- `src/i18n/locales.ts` — `en` (root), `es`, `fr`, `pt`, `zh` (html/hreflang
  `zh-Hans`, OG `zh_Hans`), `id`; OG locales `en_US/es_ES/fr_FR/pt_BR/zh_Hans/id_ID`.
- Thin wrappers `src/pages/{es,fr,pt,zh,id}/**/*.astro` (40 files) render the
  8 shared sources (home, guide, how-to-calibrate, cm, inches, mm, pixels, 404) with the locale prop. No content duplication.
- `BaseLayout` emits locale `<html lang>`, canonical localized path, 7
  hreflang links (`en/es/fr/pt/zh-Hans/id/x-default`), and localized OG
  locale + alternates.
- `LanguageSwitcher` — same-page locale links in the header; persists the
  choice under `ror-locale`; navigates only after explicit selection. No
  automatic or forced redirect anywhere.

### 2.3 Components refactored to dictionaries

- `Header`, `Footer`, `ContentLayout`, new `ContentBlocks` (renders typed
  blocks, localizes in-content links) and `LanguageSwitcher`.
- `RulerApp` — every toolbar button, Phase 7 tool label, status-bar string,
  help dialog, log panel, and shortcut hint is dict-driven. Client-runtime
  strings (guide ARIA labels, calibration status, copied/failed, empty log)
  ship via a `#ruler-i18n` JSON payload with a tiny `fill()` template helper.
- `CalibrateModal` — all four method tabs, labels, validation text, and
  runtime results (auto-detect/device/diagonal/card) via dict + `#cal-i18n`
  payload.
- `404.astro`, home page, and all six content routes rewritten to consume
  dictionaries; home and content JSON-LD (WebApplication, Offer, FAQPage) are
  generated from the active locale's strings.

### 2.4 Behavior guarantees

- Ruler tick numbers, PPI math, and calibration behavior are untouched —
  translation changes strings only.
- Sitemap now lists all 48 locale pages (Astro sitemap integration).

## 3. Translation methodology

Five parallel translator agents each rendered the full English dictionary
natively — instructed to write as a native speaker would for a friendly
instructional tool, never word-by-word. Contract per locale:

- Keep untranslated: brand "Real Online Ruler"; tokens px/PPI/CSV/TXT/DPR/
  CSS/ISO/IEC 7810 ID-1/3×; keyboard letters; `{placeholders}` (reorderable);
  English `href` paths (localized at render); numbers/unit symbols; HTML tags
  (`<strong>/<em>/<code>/<a>`), translating only inner text; feature icons.
- Arrays match English lengths exactly; block `kind`s stay as-is.

### Native-term rationale (recorded 2026-09-30)

| Locale                      | Key term choices                                                                                                                                          |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| es (neutral Latin American) | Guías (guides), Retícula (crosshair), Transportador (protractor), Lupa (loupe), Cuadrícula (grid), pulgada (inch); SEO phrasing leans on "regla en línea" |
| fr                          | Repères (guides), Réticule (crosshair), Rapporteur (protractor), Loupe, Grille (grid), pouce (inch); "règle en ligne" phrasing                            |
| pt-BR                       | Guias, Mira (crosshair — short, native), Transferidor (protractor), Lupa, Grade (grid), polegada; "régua online" phrasing; friendly _você_ register       |
| zh-Hans                     | 参考线 (guides), 十字线 (crosshair), 量角器 (protractor), 放大镜 (loupe), 网格 (grid), 厘米/毫米/英寸/像素； "在线尺子" phrasing                          |
| id                          | Garis panduan (guides), Garis bidik (crosshair), Busur derajat (protractor), Lup (loupe), Kisi (grid), inci; "penggaris online" phrasing                  |

Language selection was data-driven (Google Trends 2026-09-30, see project
memory): strong native-term demand for es ("regla online", 32 regions),
zh-Hans ("在线尺子", China-concentrated), moderate for fr ("règle en ligne"),
pt ("régua online"), id ("penggaris online"); Arabic dropped on negligible
native-term signal (UAE/Lebanon demand appears in English-term data, served by
the English base); de/it dropped for lack of signal.

## 4. Verification

- **Tests: 126/126 across 12 files** (95 Phase 7 + 31 new/updated).
  - `src/i18n/dict.test.ts` (6): exact key-path parity per locale, no
    English-fallback stubs remain, placeholder parity, non-empty strings,
    `getDict` fallback, valid block kinds.
  - `src/i18n/urls.test.ts` (5): localizePath, alternateLinks (7 links),
    ogLocale, getLocaleFromPath, localizeHtml.
  - `src/content.test.ts` rewritten for the dict architecture (6 pages × 5
    checks + home/footer/cross-link checks): locale wiring, FAQPage JSON-LD,
    dictionary completeness, per-locale mirrors, localized shape parity,
    footer links, related-link cross-linking.
- **Strict TypeScript** (`tsc --noEmit`): clean.
- **ESLint**: clean. **Prettier**: clean.
- **Astro build**: clean — 48 pages emitted (8 routes × 6 locales).
- **`scripts/verify-i18n.mjs`** (post-build): every locale page carries the
  correct `<html lang>`; all 7 hreflang links present; zero English chrome
  leakage on localized pages (22-string check; HTML developer comments
  excluded); FAQ JSON-LD localized; no locale page identical to English.
- Spot checks on built HTML: `/es/guide/` title/description/canonical
  localized; `#ruler-i18n` payload localized in all 5 languages; `/zh/404/`
  renders 「这个刻度不在尺子上」; `/pt/` h1 renders natively.

## 5. GitHub

- Implementation commit: `eba5dbfaee854e9f3bfea98c67c97ca554a3a980` (pushed to `main` on `childygyan/real-online-ruler`; report metadata follow-ups on top)

## 6. Drive archive

- Phase 8 zip uploaded to the **Real Online Ruler** Drive folder
  (id `1l1PK3Fu4pJJIhnr4iAyl4Hq3favbsqyE`):
  - File ID: `1ACBOHDA8nfHSuCndeMCnRKCumHJuvHrw`
  - Link: `https://drive.google.com/file/d/1ACBOHDA8nfHSuCndeMCnRKCumHJuvHrw/view?usp=drivesdk`
  - Size: 291,233 bytes; uploaded 2026-09-30 ~10:15 IST

## 7. Deployment

- Deployed 2026-09-30 ~10:16 IST with official Wrangler (absolute dist
  path) to the `real-online-ruler` Pages project.
- Deployment URL: `https://ac7b0e98.real-online-ruler-30y.pages.dev`
- Smoke test (all HTTP 200 with correct `<html lang>`): `/` (en), `/es/`,
  `/fr/guide/`, `/pt/`, `/zh/cm/` (zh-Hans), `/id/`.
- Temporary production origin `https://real-online-ruler-30y.pages.dev`
  verified serving the new build (hreflang `zh-Hans` present).

## 8. Caveats / open items

- Production custom domain is still TBD; the `*.pages.dev` origin is
  temporary and must not be presented as the chosen domain.
- Runtime parser/engine strings were already English-only by design (Phase 7
  contract); UI chrome is now fully translated.
- The Phase 7 Drive archive predates its report metadata follow-up (known);
  Phase 2 report/archive metadata repair is still queued (see project notes).
