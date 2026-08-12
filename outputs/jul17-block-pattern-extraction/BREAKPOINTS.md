# BREAKPOINTS — the responsive thresholds (single source of truth)

Authored as **viewport media queries**. Four thresholds, mapped to Material 3 window size classes. Base styles are mobile-first (unprefixed); Compact adds a few `max-width:599px` teardowns on top.

| Class | Range | Query | Container width |
|---|---|---|---|
| **Compact** | < 600px | `@media (max-width: 599px)` | fluid, side gutters |
| **Medium** | 600–1199px | `@media (min-width: 600px)` | rail max 1280 |
| **Large** | 1200–1599px | `@media (min-width: 1200px)` | rail max 1280 |
| **Extra-large** | ≥ 1600px | `@media (min-width: 1600px)` | rail max 1440 |

## What changes, by component

| Component | < 600 (Compact) | ≥ 600 (Medium) | ≥ 1200 (Large) |
|---|---|---|---|
| Type scale | small tier | small tier | **large tier** (Title 1 / Body 1 / Paragraph 1 flip Text→Display at 20sp) |
| Shell/rail | fluid + gutters | padding step up | — (1440 at ≥1600) |
| Greeting | "compact" copy | "medium" copy | — |
| Hero | stacked, 216px media band, stretched-link on, button off | 5/7 split, fixed 360px height, button on | large type |
| Pair | 1-col | 2-col, 80² thumb | 160×120 4:3 thumb, full footer labels |
| Trackers | 2-col grid | 4-col grid | large type |
| Insight / Challenge | banner icon hidden; challenge stacks | icon shown, single row | large type |
| Programs | scroll-snap **carousel** (78% cols) | 3-col grid | large type |
| Rewards | 2-col grid | 4-col grid | large type |

## Notes
- Most shifts are `min-width` (progressive). Three are Compact-only teardowns (`max-width:599px`): programs→carousel, hero stretched-link, banner-icon hide.
- Type-scale jump is at **1200**, not 600 — Compact and Medium deliberately share the smaller scale (v71 experiment, kept).
- **Flagged migration (not done):** container queries. Blocks dropped into varying admin/host slots would benefit from responding to their container width, not the viewport. This re-architects every component's CSS — recommendation only. See GAPS.md.
