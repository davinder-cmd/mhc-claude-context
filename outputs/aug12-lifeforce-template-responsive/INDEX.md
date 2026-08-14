# LifeForce — one page template, responsive variants

**Aug 12 · foundation step before building page-by-page.**

All three linked screens (01 Enroll `4381:78078`, 08 Deadline `4381:78194`, and the review copies) are **one template**:

> app bar → title (+ tabs when active) → **focal card** → progress / phase → steps / lists → **support rail** → bottom nav (mobile)

Only two things actually change across widths: **how the image card behaves**, and **whether there's a side rail**. So the responsive decision is really those two dials — everything else is shared.

Proof it's one template: `01-v1.html … 01-v4.html` have **byte-identical markup**. Each links `base.css` + a small `vN.css` that overrides only `.image-card` and `.layout`.

## The two dials
- **Column model (applies to every page):** main + support rail *(V1/V2/V4)* vs one calm centered column *(V3)*.
- **Image-card reflow (image pages only):** vertical stack *(V1)* · split hero *(V2)* · compact thumbnail *(V4)*. On pages with no image (deadline alerts, active/phase, records) the focal is a text/alert/phase card, so this dial simply doesn't apply — same shell.

## The variants
| # | Name | Mobile | Desktop | Feel | Trade |
|---|------|--------|---------|------|-------|
| 1 | Stacked + rail (baseline) | vertical card | tall banner + rail | safest, most consistent | image eats vertical space on desktop |
| **2** | **Split hero + rail** ⭐ | **vertical card** | **image-left / content-right + rail** | homepage horizontal card; calm on mobile | two reflow rules to configure |
| 3 | One calm column, no rail | vertical card | same centered ~680px column | calmest, least config | no desktop rail; wide space unused |
| 4 | Compact thumbnail + rail | vertical card | small image + content + rail | dashboard-dense | image reads as a thumbnail, low impact |

## Recommendation
**Variant 2 — Split hero + rail.** It is exactly the "horizontal card on desktop / vertical card on small form" you described, keeps the support rail (call · email · portal) useful on wide screens, and stays calm and readable on phones. The reflow uses the **same markup** — the card just switches `flex-direction` at the 2-column breakpoint (≥1000px).

**Fallback: Variant 3** if we'd rather drop the rail entirely for the simplest possible single-column build (easiest for Ren, least to get wrong).

## Files
- `index.html` — the comparison gallery (open + resize each)
- `base.css` — the shared component system (copied from the verified aug12 build)
- `v1.css … v4.css` — per-variant overrides (image card + layout only)
- `01-v1.html … 01-v4.html` — identical markup, one per variant

## Next
Lock a variant → then go **page by page from 01**, applying the chosen template to each screen.
