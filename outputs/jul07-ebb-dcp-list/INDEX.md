# EBB — DCP List / All Topics · Iteration Log

The browse-and-manage surface for care paths. Unblocks Lane B; may be the DCP-Only front door.

| Version | File | Date | Notes |
|---------|------|------|-------|
| scope memo | `dcp-list-scope-memo.md` / `.html` | 2026-07-07 | Job, section model (Promoted next · Continue · Discover · Completed = the content-surfaces classes), state-adaptive single-scroll (vs. tabs), pace-over-speed framing, library-vs-front-door variant. |
| v1 library | `dcp-list-v1-library.html` | 2026-07-07 | Wireframe. 4 frames. ⚠️ Anchored too closely on the uploaded screens (media cards, per-card progress) — too complex; superseded by v2. Kept for history. |
| v2 rows | `dcp-list-v2-rows.html` | 2026-07-07 | Reset per Davinder: uploaded screens are a counter-example, not a template. **Row-based** grouped list (design-system Row), **one progress bar** (on the single resume path only), others = "Session N of M" text. No per-row chips, money in slim rewards line only, outcome hint moved to topic page. Mobile + web (single-column rows, not 2-col grid). Calmer color weighting. |

| v3 item options | `dcp-list-v3-item-options.html` | 2026-07-07 | 5 item-aesthetic options (more visual presence), Mobbin-informed: 1 Squircle+dots (Alan), 2 Warm banner (Headspace), 3 Cover hero (Mindvalley/Centr), 4 Image-left (Skillshare/Tempo), 5 Two-tier (hero + mini rows). Dot-stepper progress = pace-not-speed. Lean: 5 or 1. Awaiting Davinder's pick → v4 assembles the full page in the chosen treatment. |

| v4 full page | `dcp-list-v4-page.html` | 2026-07-07 | Full page, 3 in progress. Balance per Davinder: **bigger in-progress cards** (squircle + dots, first emphasized) + **small library rail** ("Explore more paths · See all 14") so browse isn't hidden + **reward as progress-across-all** at top (segmented $200/$500 meter, "2 completed · 3 in progress"). Warm/Zero-inspired (illustrated squircle tiles, section rails). Mobile + web. |

| progress study | `dcp-progress-study.html` | 2026-07-07 | Component study on the warm-banner card: 6 ways to show progress — 1 thin bar · 2 ring/wheel · 3 dots+elongated current line · 4 text only · 5 segmented bar · 6 faint track + milestone dots (Airalo-style; dots = halfway/complete, halfway doubles as ~50% reward-eligible). Lean: 6 or 2. Drop plain bar. Awaiting pick → apply to v4 cards. |

| v5 progress placement | `dcp-list-v5-progress-placement.html` | 2026-07-07 | Zero "Today" aesthetic (white cards, ring, faint bars). A/B on WHERE progress lives: **A** per-program ring on each card (Zero "Upcoming Fast") vs **B** a top progress banner (faint track + milestone dots, paths + $ toward cap) with simplified text-only cards. Both honest to tracked data (sessions only). Combinable (B banner + ring on the single emphasized card). |

| v6 responsive | `dcp-list-v6-responsive.html` | 2026-07-07 | Picked placement B (top progress banner) across 3 breakpoints: Compact 375 (small thumb, text) · Expanded ~1024 (side nav, 76px image, Continue button) · Extra-large ~1440 (top nav, **image-forward 2-col cards** — image added on large). Banner carries progress; cards earn presence via imagery. |

| explore rail vs grid | `dcp-explore-rail-vs-grid.html` | 2026-07-07 | Explore-section study: carousel rail vs 2×2 wrapping grid on mobile. Recommend **grid** (curated 4, all visible, no hidden content; "See all 14" is the overflow). Carousel only for long swipe-to-browse sets. Grid → 3–4-up on web. |

| v7 two states | `dcp-list-v7-states.html` | 2026-07-07 | Same page, two states. **Populated** = resume-first (v6). **Empty** (nothing started, the 2nd-most-important surface / Lane B starting point) = discovery-rich: reward hook → strong why-tagged recommendations up top → **browse opens up by area** (multiple paths, not a rail) → more recs at bottom. Reward banner adapts (progress meter vs invitation). Care-paths-only — not a home page. |

| **ALL (gallery)** | `_all-ideations.html` | 2026-07-07 | **One-scroll gallery** — every iteration embedded live in order (memo → v1 → v2 → item options → v4 → progress study → placement A/B → v6 responsive → rail vs grid → v7 two states). The single link to review everything. |

## Resolved
1. **Front door vs. library** → library (2nd nav tab); front-door = header variant.
3. **Reward visibility** → not per-card money; **progress-across-all summary at top** (v4), dots per card.
- **Don't hide browse** → library rail on the page + a drill-down catalog ("See all"). Reward is present, not minimal.

## Open
2. Browse guardrails for zero-qualification self-select (clinical view).

## Next
- Review v4 + pick the in-progress card treatment (v3 options).
- **Drill-down page** ("Browse all care paths, grouped by area") — the "See all 14" catalog destination. To design.
