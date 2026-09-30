# Phase 6 Report — Hardening & Launch

**Date:** 2026-09-30 · **Project:** Real Online Ruler · **Repo:** https://github.com/childygyan/real-online-ruler

## Hardening

- **Contrast audit (computed, not eyeballed):** white text on `brand-600` measured 3.68:1 —
  below WCAG AA for normal text. Fixed by moving all white-on-teal surfaces (primary buttons,
  pressed toolbar toggles, guide labels, crosshair badge, step badges, "Saved" note) to
  `brand-700` (5.36:1). Focus ring moved to `brand-600` (≥3:1 as a non-text indicator on both
  themes). Minor tick marks (2.3:1) are decorative — major ticks carrying the information are
  16.3:1 (light) / 14.5:1 (dark).
- **Keyboard:** every control is a native button/input/select; global `:focus-visible` ring;
  skip-to-content link; shortcuts `1–4/G/C/F/D` (input fields excluded); Esc closes the
  calibration modal and clears guides (modal takes precedence). Modal moves focus to its close
  button on open and restores the opener on close.
- **Touch/mobile:** guide drag uses pointer events with `touch-action: none`; card calibration
  is a native range slider; toolbar wraps; stage keeps a 300 px minimum height.
- **Performance:** total client JS ~32 KB, CSS ~16 KB, no frameworks on the client beyond Astro
  islands — nothing to optimize.
- **Site origin corrected:** the placeholder `https://real-online-ruler.pages.dev` did not match
  the real project subdomain, so `site` (astro.config), `robots.txt`, and the JSON-LD `siteUrl`
  were updated to the actual temporary origin **https://real-online-ruler-30y.pages.dev**.
  Canonicals and sitemap now point at a domain that resolves. Custom production domain still TBD.

## Deploy incident (resolved)

The second deploy briefly served the **height-calculator** site (all URLs 301 → height-calculator.net):
root cause was my own command — `cf-wrangler` runs with cwd `~/workspace/height-calculator`,
and I passed a relative `dist`, which resolved to the wrong project. Redeployed immediately with
the absolute path; verified live content is ours. Lesson recorded in `~/AGENTS.md`.

## Launch

- **Method:** official Wrangler only (`cf-wrangler pages deploy`), per standing rule.
- **Production URL:** https://real-online-ruler-30y.pages.dev
- **Smoke test (all live):**

| Check                                                                        | Result             |
| ---------------------------------------------------------------------------- | ------------------ |
| `/`, `/how-to-calibrate/`, `/guide/`, `/cm/`, `/inches/`, `/mm/`, `/pixels/` | 200 × 7            |
| `/sitemap-index.xml`, `/robots.txt`, `/favicon.svg`, `/_astro/*.css`         | 200                |
| `/no-such-page`                                                              | 404 (correct page) |
| Ruler app markup + correct `<title>`/canonical in home HTML                  | confirmed          |

## Quality gates (all green)

| Gate               | Result         |
| ------------------ | -------------- |
| vitest             | **80/80 pass** |
| `tsc --noEmit`     | clean          |
| `eslint .`         | clean          |
| `prettier --check` | clean          |
| `npm run build`    | clean          |

## Delivery

- **Commit:** pushed to `main`
- **GitHub:** https://github.com/childygyan/real-online-ruler
- **Drive zip:** `real-online-ruler-phase6-20260930.zip` → folder "Real Online Ruler"

## TBD

- **Production domain:** Firoz has not chosen a custom domain — site is live on the temporary
  Pages URL above.

## Next

Per Firoz (2026-09-30): chain continues — **Phase 7 (i18n)** starts immediately with the
REVISED locale set: **es, fr, pt, zh-Hans (/zh/), id + English base — 6 locales total.
Arabic is DROPPED** (native-term check: "مسطرة اون لاين" ≈ zero measurable demand; no RTL work).
Natural native-quality translations (not word-by-word), typed dictionaries, `/{locale}/`
routing, hreflang `en/es/fr/pt/zh-Hans/id` + `x-default`, language switcher. Rationale recorded
in `docs/PHASE7-REPORT.md`.
