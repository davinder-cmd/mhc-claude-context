# LifeForce · Status (Scheduled) — responsive HTML · 5 versions

**Source design:** Figma node `2255:168` — *04 · Status — Scheduled* with the consolidated
resources footer (Peak Health support row + About + Calculate). File `lifeforce`.

**System (all 5 share `lifeforce-base.css`):**
- **Type:** MHC Type System v3 — SF Pro (`--f-display` / `--f-text`, system-resident), the
  25-atomic-class scale, rem-based. Size bump fires at **≥1200** (LifeForce "real desktop" rule);
  line-heights fixed on the 4dp grid.
- **Spacing:** `spacing.md` tokens only (4/8/12/16/24/32…). 16dp within clusters, 24dp between
  sections; body margin 16dp Compact → 24dp Medium+.
- **Color:** flat navy `#0f497f` / aqua / green (no gradients, D16).
- Icons are an inline SVG sprite per file (portable — opens from `file://`, no external refs).

**Loaded for this work:** `design/foundation/typography.md`, `design/foundation/spacing.md`.

## The five responsive strategies

| File | Strategy | What changes across breakpoints |
|---|---|---|
| `v1-mobile-shell.html` | **Mobile shell** | The app in a 412px device frame, centered on any screen; goes full-bleed < 440. Faithful to the phone; least "web." Bottom tab bar. |
| `v2-fluid-column.html` | **Fluid single column** | One reading column, max 600 → 640; padding grows 16→24→32; nav rides the **bottom on mobile, jumps to a top bar ≥720**. |
| `v2b-fluid-wide.html` | **Fluid single column — wide** | Same as v2 but the column maxes at **840** (Material "Expanded" breakpoint) — more horizontal room. Compare against v2 (640). |
| `v3-two-column.html` | **Two-column dashboard** | Tabs + earning strip stay full-width; **≥900 splits** into a primary column (focal + Next steps) and a sidebar (Completed + Resources). Top nav. |
| `v4-bento-grid.html` | **Bento grid** | Every section is a tile reflowing **1 → 2 → 3 columns**; the focal card is the hero tile (spans 2×2 wide); Resources runs full-width. |
| `v5-web-rail.html` | **Web app (left rail)** | **≥1000 shows a left sidebar nav** + centered content column; collapses to the bottom tab bar below 1000. Full product-web treatment. |

**How to view:** open any file in a browser and resize the window to see the reflow. Each is
self-contained except for the shared `lifeforce-base.css` (keep it in the same folder).

## Recommendation
- **v1** for a pure mobile deliverable / prototype parity.
- **v2** is the safest true-responsive web version (single column scales cleanly, minimal risk).
- **v3 / v5** are the strongest desktop experiences — but a two-column/rail layout is an **IA
  decision** (top-nav vs bottom-nav, dashboard split) that D'Arcy + Ren should sign off on before
  it's treated as the target, not just small-form parity.
- **v4** is the most exploratory; good for a "dashboard home" pitch, less so for a focused status page.

## Notes / open
- `$[X]` / `$[Y]` are placeholders pending the requirements doc.
- These mirror the unified Figma set (SF Pro · v3, focal-card hierarchy, D20/D21). If the footer
  consolidation choice changes (V1/V2/V3 options), update the `.reslist` block in `lifeforce-base.css`
  markup across all five.
