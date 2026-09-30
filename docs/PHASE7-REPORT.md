# Phase 7 Report — Unique Advanced Features

Date: 2026-09-30
Status: Complete — tests, TypeScript, ESLint, Prettier, and build all green.

## What was built

Six original advanced tools, all working with the calibrated PPI from Phase 2 and
respecting the currently selected unit. They complement (do not replace) the four
edge rulers from Phase 3.

1. **Drag-to-measure** — With the Measure tool on, click-drag anywhere on the
   measurement canvas draws a measurement line. A live label shows the distance in
   the current unit plus the line's angle in degrees (0–180°). Endpoints snap to
   guide lines within 10 px. Releasing shows a Save / Discard popup; Save sends the
   reading to the measurement log and opens it. `Esc` cancels mid-drag.
2. **Protractor overlay** — Toggleable circular protractor with degree ticks every
   5° and numbered labels every 30°. Drag the center to move it, the ring handle to
   rotate the scale, and the two arm handles to position the arms; a digital readout
   shows the angle between the arms (0–180°).
3. **Magnifier loupe** — Toggleable 3× loupe that follows the cursor. It renders a
   live scaled clone of the stage, so it magnifies edge rulers, guides, the canvas,
   and the other tools. The clone is refreshed on calibration/unit/edge/guide
   changes; transient layers (crosshair, popups, the loupe itself) are excluded.
4. **Floating ruler** — A draggable ruler not bound to screen edges. Drag the body
   to move it; drag the amber handle at its end to rotate it to any angle (rotation
   badge shows the angle). Renders ticks in the current unit along its length
   (6 inches of calibrated space, clamped to the workspace).
5. **Measurement log** — Panel listing saved measurements with editable labels,
   per-entry Copy and Delete, Copy-all, CSV and TXT export (file download), and
   Clear. Persisted in localStorage under `ror-measurements` (cap 200 entries).
6. **Grid overlay** — Toggleable subtle grid over the canvas with cell size exactly
   1 cm or 1 inch of calibrated space (small Grid-unit selector in the toolbar),
   with a stronger line every 5 cells for layout/design alignment work.

Toolbar: a second "Advanced" toolbar row holds the six tool buttons plus a
"? Shortcuts" button that opens the in-app shortcut reference dialog.

## Shortcut map (final)

No collisions with existing shortcuts (1–4 units, G guides, C crosshair, F
fullscreen, D theme, Esc):

| Key | Action                                       |
| --- | -------------------------------------------- |
| M   | Drag-to-measure tool                         |
| P   | Protractor overlay                           |
| L   | Magnifier loupe                              |
| R   | Floating ruler                               |
| O   | Measurement log                              |
| N   | Grid overlay                                 |
| H   | Shortcut help dialog                         |
| Esc | Cancel drawing / close dialog / clear guides |

Documented in the in-app help dialog (`? Shortcuts` / `H`) and in a new
"Advanced tools" + "Keyboard shortcuts" section on `/guide/`.

## Honest-accuracy framing

All six tools measure in CSS px scaled by the Phase 2 calibration — same basis as
the edge rulers. The guide page's tips section now states this explicitly, with the
browser-zoom / OS-scaling / external-monitor caveat: keep zoom at 100% and
recalibrate when moving the window to another display. No fabricated precision
claims.

## Files added

- `src/lib/geometry.ts` — `distPx`, `lineAngleDeg` (0–180° normalized),
  `angleBetweenDeg`, `rotatePoint`, `snapToGuide`, `gridCellPx`.
- `src/lib/geometry.test.ts` — 7 tests.
- `src/lib/measurements.ts` — measurement-log model: create/add/updateLabel/remove/
  clear, `toCSV` (quoted, ISO timestamps), `toTXT`, localStorage load/save
  (`ror-measurements`).
- `src/lib/measurements.test.ts` — 7 tests.

## Files changed

- `src/lib/prefs.ts` (+ test) — persisted toggles for the six tools and the grid
  unit; `gridUnit` validated against `'cm' | 'in'`.
- `src/lib/prefs.test.ts` — round-trip test extended; +1 new test for tool prefs.
- `src/components/RulerApp.astro` — toolbar row 2, measure SVG layer + popup,
  protractor SVG, loupe, floating ruler, grid layer, log panel, help dialog, all
  interactions, keyboard map, persistence.
- `src/styles/tokens.css` — `--ror-grid-line` / `--ror-grid-major` in both themes.
- `src/pages/guide/index.astro` — "Advanced tools" and "Keyboard shortcuts"
  sections; lede/description updated; accuracy caveat added to tips.

## Verification

- Tests: **95/95 pass** (10 files) — was 80/80 at Phase 6; +15 new.
- `tsc --noEmit`: clean (one pre-existing-style error in the Phase 8 i18n
  scaffolding's `urls.ts` fixed as part of keeping gates green; scaffolding
  comments relabeled from Phase 7 to Phase 8).
- ESLint: clean. Prettier: clean. `astro build`: clean; all six tool markers
  confirmed present in `dist/index.html`.

## Deployment / archive

- Remote commit: `0ceab3836ff8263ded056de1607bf9a582beb6e0` (GitHub `main`)
- Drive archive: `real-online-ruler-phase7.zip` —
  https://drive.google.com/file/d/17qePxDkIQZVcm1RyCZ-RmO7E0KmmiQBL/view?usp=drivesdk
- Live smoke test: (recorded below after deploy)

## Notes for Phase 8 (i18n)

Every user-visible string added in this phase (tool buttons, popups, log panel,
help dialog, guide-page sections, empty states, export labels) is inline English
in `RulerApp.astro` / `guide/index.astro`, ready for dictionary extraction. The
`src/i18n/locales.ts` + `src/i18n/urls.ts` scaffolding is on disk, type-clean,
and labeled Phase 8.
