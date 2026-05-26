# may13 — Home, Uber-style restyle

Re-skin of the [may12 Material 3 home](../may12-material-google-home/home-google-material-v1.html) against the Uber-inspired design system from `DESIGN.md` (alpha). Same content scaffold; pure visual+tokens swap.

## Source
- DESIGN.md — Uber-inspired alpha (provided in chat 2026-05-13)
- Source page — [may12 Material v1](../may12-material-google-home/home-google-material-v1.html)

## Iterations

| File | Date | Slug | Notes |
|------|------|------|-------|
| [home-uber-v1-pill-duet.html](home-uber-v1-pill-duet.html) | 2026-05-13 | pill-duet | First pass. Pure B/W duet, pill 999px on every interactive, Inter as UberMove/UberMoveText substitute, polarity-flipped black "Insight" + "Challenge" bands, hero "request card" analogue on the right, deep-black footer, 4:3 illustration backdrops via CSS gradient shapes. 60/30/10 weighting strip at page foot. |

## Key tokens applied (vs may12 Material)

| Dimension | may12 Material | may13 Uber |
|-----------|----------------|------------|
| Brand colour | Teal `#006a60` | Ink `#000000` (only conversion colour) |
| Surfaces | Tonal teal scale (8 steps) | White + 2 grays (`#efefef`, `#f3f3f3`) |
| Display face | Google Sans (400) | Inter 700, sentence-case |
| Body face | Roboto Flex | Inter 400/500 |
| Headline weight | 400 (Material display) | 700 (Uber display) |
| Hero headline | 36px display-s | 52px display-xxl |
| Interactive radius | 999px (consistent) | 999px pill on every interactive |
| Card radius | 16px shape-lg | 16px rounded.xl |
| Promo decoration | tonal radial gradients | 4:3 editorial illustration frame |
| Mid-page rhythm | tonal cards (no polarity flip) | black promo band (Insight, Challenge) |
| Footer | none | deep-black band with link columns |
| Tab toggle | M3 segmented chip | pill-tab 36px (off-shape) |
| FAB + bottom-nav | M3 extended FAB + 5-item nav | none — Uber-web has neither |

## Breakpoint behaviour
- **< 600px** mobile — promo cards stack; nav collapses to brand + icon-btns + avatar; hero focus-card hides
- **600–767px** mobile-large — promo cards become 5/7 horizontal; trackers go 4-up
- **768–1119px** tablet — hero gains its right-side focus card; carousel = 3-up scroll-snap
- **≥ 1120px** desktop — programs row becomes 3-up grid (no scroll); content caps at 1200px

## What's intentionally NOT here (yet)
- A wide-flex (1200px+) view file — per [Wireframe breakpoint views](../../../.claude/projects/-Users-davinderrehal--claude/memory/feedback_wireframe_breakpoint_views.md), next iteration should ship three side-by-side breakpoint frames. v1 is a single live page that *reflows* across all three; it doesn't yet present them statically.
- Real editorial illustrations — current backdrops are CSS-gradient silhouettes as placeholders for the 4:3 rider/skyline frames the brand actually uses.
- Pressed/hover state previews — only baseline state is on the page.

## Next moves (likely v2 candidates)
- Add a 1200px wide-flex view alongside desktop + mobile, per breakpoint-views rule.
- Bring readability lever: drop one item per row in trackers + rewards at mobile (currently 2-up; consider 1-up below 480).
- Decide whether the hero "focus card" earns its place or should be removed to keep the hero a pure headline + CTA pair (closer to Uber's actual hero).
- Sub-in real 4:3 illustrations or photography (need source).
