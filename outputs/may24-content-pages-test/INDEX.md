# May 24 — Content page test (desktop simulation of mobile-only Figma)

Test pages simulating mobile-only Figma screens at desktop resolutions. Purpose: confirm the v62 hero pattern, the v3 type scale, and the M3 button sizing all work on **content pages** (no hero card, image is just a header).

**Source:** [Figma file](https://www.figma.com/design/VNE9i4uHQUvqsmXlAWFayC/claude-test?node-id=1-764)

## Status (2026-05-24)

- ✅ **Onboarding pattern locked.** Documented at [design/patterns/onboarding-split-screen.md](../../design/patterns/onboarding-split-screen.md). Use this for first-run / takeover sequences going forward.
- 🅿️ **Content-page hero-wider-than-body (v2) parked.** Works at high-density viewports but feels unbalanced when content is short. Davinder to revisit. v1 (hero = content width per breakpoint) stays as the working baseline for content pages.

## Files

| File | Pattern | Hero treatment | Status |
|---|---|---|---|
| [01-treating-insomnia.html](01-treating-insomnia.html) | v1 — Course landing (video hero + CTA) | Hero width = content width per breakpoint (343 / 600 / 720) | Working baseline |
| [02-understanding-insomnia.html](02-understanding-insomnia.html) | v1 — Article (photo hero + long-form body) | Hero width = content width per breakpoint | Working baseline |
| [01-treating-insomnia-v2.html](01-treating-insomnia-v2.html) | v2 — Same course landing, new hero pattern | Hero wider than body (page-container width, fluid; body capped at 720) | 🅿️ Parked — feels unbalanced with short content |
| [02-understanding-insomnia-v2.html](02-understanding-insomnia-v2.html) | v2 — Same article, new hero pattern | Hero wider than body | 🅿️ Parked |
| [03-onboarding.html](03-onboarding.html) | **Onboarding** — first-run experience | Compact: image stacked above content. Medium+: split-screen (image left fills full column height; content + CTA fills right half centered) | ✅ **Locked. Canonical onboarding pattern.** Documented in [design/patterns/onboarding-split-screen.md](../../design/patterns/onboarding-split-screen.md) |
| [04-bending-backwards.html](04-bending-backwards.html) | **Educational article — no hero, inline illustrations** | No top hero. Body has inline 3:4 illustration figures (240→280→320dp wide, centered, preserved aspect). Numbered summary section. Sticky CTA on Compact, inline at Medium+. | Working baseline — different pattern from articles with hero. Worth promoting to its own documented pattern once we have more examples. |

## v1 vs v2 — what changed

v1 made hero width and body width the same per breakpoint. Two issues:
1. Hero snapped hard between breakpoints (343 → 600 → 720 with no in-between scaling)
2. Big empty side margins at viewports between breakpoints (e.g., 800px viewport with 600 content = 100dp empty each side)

**v2 uses the standard editorial pattern (Medium / NYT / Substack / Stripe docs):**

| Element | Width |
|---|---|
| **Page outer container** | viewport-fluid, capped at 1280, with side margins (16dp Compact / 24dp Medium+) |
| **Hero image** | full page-container width (fluid) × per-breakpoint integer height |
| **Article body** | max-width 720dp, centered within the wider page container |

Result:
- Hero scales smoothly with viewport (only HEIGHT snaps at 4 breakpoints: 216 / 320 / 400 / 480 — width is always fluid)
- Body stays narrow for readability regardless of viewport
- At desktop, hero is wider than body — anchors the visual, body feels intentional (not lost in empty space)

## Hero height table (v2)

| Breakpoint | Page-container width | Hero height | Body max-width |
|---|---|---|---|
| Compact (<600) | viewport - 32dp | **216** | full |
| Medium (600-1023) | viewport - 48dp | **320** | 720 (capped, fluid below cap) |
| Large (1024-1279) | viewport - 48dp | **400** | 720 |
| Extra-large (≥1280) | 1280 (capped) | **480** | 720 |

Hero width is the page-container width at every viewport. Height steps at 4 breakpoints, all integer.

## Onboarding pattern

Different from the content pages — it's a takeover experience.

| Viewport | Layout |
|---|---|
| Compact | Stacked: top bar → hero 320dp tall → content centered → dots → full-width Next button |
| Medium+ | Split: image fills LEFT half (min-height 480dp), content + dots + Next button centered in RIGHT half |

Top bar is per-Figma: hamburger left, AAA logo centered, nothing right. Different from content-page top bar (back arrow + ACME left-aligned).

## What this tests

| System layer | What gets exercised |
|---|---|
| **Per-breakpoint hero (v2)** | Heights 216 / 320 / 400 / 480 across 4 breakpoints. Width fluid. All heights integer, multiples of 8. |
| **Page shell width vs body width** | Page-outer is wide (up to 1280); body-content is narrow (720). Different from v1 where both were the same. |
| **Type scale** | Heading 3 / 4 / 6 across pages; Paragraph 2 for body; Caption for meta; Eyebrow for category. |
| **Button system** | `.btn-m` (M, 56dp + Label 0) for primary CTAs; `.btn` (S, 40dp) for icon buttons. Full-width Next button on Compact (`.btn-block`); fixed-width on Medium+. |
| **Onboarding split-screen** | New CSS pattern — flex-direction column on Compact, row on Medium+; hero gets flex:1 to fill column height. |

## How to test

Open each file at several viewport widths:
- **375** — Compact (mobile)
- **700** — between breakpoints (tests whether hero scales smoothly with the v2 pattern)
- **900** — Medium
- **1280** — Large+
- **1600** — Extra-large

For the **v2 pages**: notice the hero scales width smoothly with viewport (only height snaps at the 4 breakpoints), and body stays at 720dp centered. Compare to v1: hero snapped hard, body had wide empty margins.

For **onboarding**: notice the split-screen pattern kicks in at 600dp. Resize from 375 → 800 — image goes from on-top to on-left.

## Open questions for tomorrow

- **Top app bar:** content pages use back arrow + ACME left-aligned; onboarding uses hamburger left + AAA centered. Different chrome per context — confirm this distinction holds for all content vs all takeover/onboarding flows.
- **Hero rounded corners vs full-bleed:** v2 content pages keep the hero contained with `border-radius: var(--r-xl)` and page-edge padding. Some content sites do full-bleed (image touches viewport edges). For MHC, contained probably reads as more app-like, full-bleed reads as more marketing — confirm preference.
- **Onboarding image aspect at desktop:** currently the image fills 50% of viewport width by `min-height: 480` of its own column. At very wide viewports this becomes a tall narrow strip — could need a `max-width` cap on the image column.
- **Onboarding centering at desktop:** content is centered vertically within its column. If the column is very tall (large viewport), there's a lot of empty space. Consider a `max-height` on the layout or a top-aligned variant.
