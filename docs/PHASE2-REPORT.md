# Phase 2 Report — Calibration Engine

**Date:** 2026-09-30 · **Project:** Real Online Ruler · **Repo:** https://github.com/childygyan/real-online-ruler

## What was built

The complete calibration engine — the mathematical core that turns the page into a
true-size ruler. All device data compiled by hand from manufacturers' published specs;
all copy original.

- **`src/lib/ppi.ts`** — pure math:
  - `diagonalPpi(cssW, cssH, diagonalIn)` = √(w²+h²)/diagonal → CSS px per inch.
    Documented in-code why devicePixelRatio cancels out (physical PPI ÷ DPR).
  - `cardPpi(rectWidthPx, cardWidthMm=85.6)` for the credit-card method.
  - `deviceCssPxPerInch(physicalPpi, dpr)` = factory PPI ÷ pixel ratio.
  - `isSanePpi()` validation, plausible range 50–1000.
- **`src/data/devices.json`** — 54-entry device database, 5 categories
  (iPhone 17, iPad 8, MacBook 7, Android 10, Monitor 12). iPhone/iPad/MacBook/Android
  entries use manufacturer-published PPI (Apple/Samsung/Google); generic monitors use
  deterministic resolution÷diagonal math, each labeled with its computation note.
  Resolution-bearing entries carry `resW`/`resH` for auto-detection.
- **`src/lib/devices.ts`** — `categoryFromUserAgent()`, `detectDevice()` returning
  `{ device, confidence: high|medium|low }`. High = category + exact physical-resolution
  match (orientation-independent); medium = resolution shared by same-PPI siblings
  (harmless ambiguity); low = category only or unknown.
- **`src/lib/calibration.ts`** — localStorage persistence under `ror-calibration`
  (`{ method, pxPerInch, deviceName?, ts }`), corrupt/insane values fall back to 96,
  `resetCalibration()`, storage backend injectable for tests.
- **`src/components/CalibrateModal.astro`** — working 4-tab dialog:
  Auto-detect (runs detection, shows confidence + computed px/in + Apply),
  Pick device (category/device selects with live density readout),
  Screen diagonal (inches input → computed density),
  Credit card (draggable-outline slider over a live 85.60×53.98 mm rectangle).
  Live "Current: N px/in (method)" readout, "Saved" confirmation, reset-to-96,
  Esc/backdrop close, focus management. Opens from any `[data-open-calibrate]`.
- **Home page** — modal wired in; placeholder gained a working "Calibrate display"
  button; copy updated to reflect calibration being live.

## Quality gates (all green)

| Gate               | Result                                                    |
| ------------------ | --------------------------------------------------------- |
| vitest             | **41/41 pass** (11 units + 7 ppi + 14 devices + 9 calib.) |
| `tsc --noEmit`     | clean                                                     |
| `eslint .`         | clean                                                     |
| `prettier --check` | clean                                                     |
| `npm run build`    | clean — modal markup verified in `dist/index.html`        |
| Internal links     | 0 broken                                                  |

Two test bugs caught and fixed during the phase (wrong hand-computed expectation for
2560×1664@13.6" → corrected DB entry to Apple's 224 PPI; ambiguous Android resolution
in a detection test → switched to the unique S23 Ultra resolution).

## Delivery

- **Commit:** pushed to `main` (hash in git log below; report commit follows)
- **GitHub:** https://github.com/childygyan/real-online-ruler
- **Drive zip:** `real-online-ruler-phase2-20260930.zip` → folder "Real Online Ruler"

## TBD (unchanged)

- **Production domain:** not chosen — placeholder `https://real-online-ruler.pages.dev`.

## Next

Per Firoz (2026-09-30): chain continues — Phase 3 (ruler engine) starts immediately.
