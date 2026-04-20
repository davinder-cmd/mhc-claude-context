# Home Screen Redesign — Iteration Log

All design iterations for the Umbrella Partners home screen redesign, organized chronologically.

## Iterations

### 01 — Styled Prototype (Original)
Single high-fidelity HTML prototype. Angular Material components, MHC token mapping, celebration modal. Teal brand color, editorial density. iPhone 14 device frame.
- `umbrella-home-screen.html`

### 02 — Density Variants
3 variants testing layout density against the original. Same content, different spacing/typography/card sizing.
- `umbrella-home-compact.html` — B · Compact (40% tighter spacing)
- `umbrella-home-editorial.html` — C · Editorial (50% wider spacing, Withings-calibrated)
- `umbrella-home-spacious.html` — D · Spacious (maximum breathing room)

### 03 — Visual Style Variants
3 variants testing visual treatment at editorial density. Same layout, different color/elevation/imagery approach.
- `umbrella-home-minimal.html` — E · Minimal (blue-grey monochrome, flat elevation)
- `umbrella-home-rich.html` — F · Rich (warm teal-green, deep gradients, photo-forward)
- `umbrella-home-dashboard.html` — G · Dashboard (strong blue, data-forward, metrics widgets)

### 04 — Layout Wireframes v1
5 layout variants in a single file, exploring section order and rewards presentation (4 reward types). Greyscale wireframes, not styled.
- `umbrella-home-wireframes.html` — All 5 side-by-side (Rewards-Dominant, Actions-First, Tabbed, Health-Forward, Combined Hero)

### 05 — Material Wireframes v2
Same 5 layouts as 04, rebuilt with Angular Material component annotations (purple pills) on every element. Includes component map tables.
- `umbrella-home-wireframes-v2.html` — All 5 side-by-side with Material mapping

### 06 — Hi-Fi Wireframes (Current)
5 independent wireframe files, each exploring a distinct design posture. Brand color #0f497f, full Material annotations, design rationale callouts.
- `home-v1-compact.html` — Compact / Data-Dense
- `home-v2-editorial.html` — Breathing / Editorial
- `home-v3-feed.html` — Feed-First
- `home-v4-clinical.html` — Status-Led / Clinical
- `home-v5-rewards.html` — Rewards-Forward

## Next iteration
New work will go into `07-[description]/`.
