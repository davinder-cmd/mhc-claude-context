# LifeForce — responsive HTML/CSS

Six LifeForce pages built as **responsive web pages**, synthesizing three sources:
- **Colors + visual treatments** → from the Figma file (flat navy system, tints, cards, focal/phase/deadline treatments)
- **Type scale + typography breakpoints** → MHC Type System v3 (25-class scale; **Medium+ size bump fires at ≥1200**, the "real desktop" tier)
- **Responsive behavior + page shell** → from the home output (`outputs/may26-pair-no-employer`): centered content column, two-up grids that collapse under 600px, Material Symbols icons, SF Pro

## Files
- `lifeforce.css` — shared stylesheet (tokens, type scale w/ ≥1200 bump, components, responsive grids)
- `1-enroll-3-left.html` — Status · Getting started (3 left)   *(Figma 2454-7081)*
- `2-active-visit-done.html` — Status · Active, visit done   *(2454-7206)*
- `3-enrollment-detail.html` — Enrollment steps drill-in   *(2485-19368)*
- `4-progress-populated.html` — My Progress · results + programs   *(2454-7263)*
- `5-progress-full-results.html` — Lab results & goals (12-metric panel)   *(2498-26596)*
- `6-resources.html` — All programs & resources (35, 2-line clamp)   *(2506-27830)*

## Responsive behavior
- **Content column** caps at 760px and centers; body padding bumps 16→24 at ≥600.
- **Grids** (biometrics, resources) are two-up by default and **collapse to one column under 600px**.
- **Type scale bumps at ≥1200** — headings/body grow to the Medium+ tier while line-heights hold.
- **Descriptions** on resource/program cards are **hard-clamped to 2 lines** (`-webkit-line-clamp`).

## Notes
- Placeholders remain: `$[X]` / `$[amount]`, illustrative dates, sample biometric values.
- Icons use Google Material Symbols (loaded via CDN); SF Pro is system-resident.
