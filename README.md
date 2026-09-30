# Real Online Ruler

A free, actual-size on-screen ruler web app. Calibrate once for your display, then measure
small objects in centimeters, millimeters, inches, or pixels — no signup, no download.

**Status:** Phase 1 (Foundation) — layout, theme, design system, units library.
The calibration engine (Phase 2) and ruler engine (Phase 3) are not built yet.

## Stack

- Astro 5 (static) + TypeScript strict + Tailwind v3
- Deploy target: Cloudflare Pages (direct upload)
- Tests: vitest · Lint: eslint · Format: prettier

## Develop

```bash
npm install
npm run dev        # start dev server
npm test           # run vitest suite
npm run typecheck  # tsc --noEmit
npm run lint       # eslint
npm run build      # production build
```

## Project layout

- `src/pages/` — routes (`index.astro`, `404.astro`)
- `src/layouts/` — `BaseLayout.astro` (SEO head, theme init)
- `src/components/` — `Header.astro`, `Footer.astro`
- `src/lib/` — `units.ts` (typed unit system + conversions)
- `src/styles/` — design tokens + global styles
- `docs/` — per-phase reports

## Phases

1. Foundation (this phase)
2. Calibration engine
3. Ruler engine
4. Precision tools (guides, crosshair, fullscreen)
5. SEO content
6. Hardening & launch
7. i18n (es/de/fr/it/pt)

Production domain: **TBD**.
