# Responsive Grid

**Confluence:** https://mobilehealthc.atlassian.net/wiki/spaces/MDS/pages/1344045221
**Reference:** Material 3 — Window size classes (m3.material.io/foundations/layout/applying-layout/window-size-classes)
**Status:** 🔶 Updating — adopted Material 3 window size classes 2026-05-22

---

## Purpose

A 12-column adaptive grid based on Google Material 3's window size classes. Provides consistent layout across all viewports while standardizing breakpoints to industry best practice rather than custom values.

---

## Window Size Classes (Material 3)

| Class | Range | Margin | Gutter | Body max | Columns | Typical device |
|-------|-------|--------|--------|----------|---------|----------------|
| **Compact** | 0–599dp | 16dp | 16dp | — | 4 | Phone portrait |
| **Medium** | 600–839dp | 24dp | 24dp | — | 12 | Tablet portrait, phone landscape |
| **Expanded** | 840–1199dp | 24dp | 24dp | — | 12 | Tablet landscape, small laptop |
| **Large** | 1200–1599dp | 24dp | 24dp | **1280dp** | 12 | Laptop, desktop |
| **Extra-large** | 1600dp+ | 24dp | 24dp | **1440dp** | 12 | Large desktop, ultra-wide |

**Body max** is the maximum content-region width to preserve readability. Above the body max, the body centers and margins scale to absorb the extra viewport width.

---

## Content-Width Strategy

- **Current product** (left side nav): effective content body is ~1040dp at Large+ because the side nav consumes ~200dp — Expanded-class behavior on a Large viewport
- **Target** (top-nav redesign — see [patterns/navigation-responsive.md](../patterns/navigation-responsive.md)): content opens up to the full body max — 1280 at Large, 1440 at Extra-large
- Designs must validate at three widths: **1040** (legacy), **1280** (optimal target), **1440** (max target)

---

## Grid Structure

| Element | Definition |
|---------|------------|
| Columns | Width defined as percentages — scale with container width |
| Gutters | Fixed pixel values between columns |
| Margins | Fixed pixel values from container edge; centering kicks in above body max |
| Layout regions | Content areas that span any number of columns; resize with the grid |

---

## Behavior Rules

| Rule | Detail |
|------|--------|
| Column spanning | Layout regions can span any number of columns |
| Content within regions | Individual elements do NOT align to the grid — only layout regions do |
| Offset layouts | Content can occupy a subset of 12 columns, centered on page |
| Breaking the grid | Allowed sparingly — only for full-bleed hero images and feature cards |

---

## Rules

- Use Material window size class names (**Compact / Medium / Expanded / Large / Extra-large**) — not legacy custom names (XS / S / SM / M / L)
- Always design within the 4-column grid in Compact (0–599dp)
- Never align individual UI elements directly to the grid — only their containing regions
- Body content centers above 1280dp (Large body max) and 1440dp (Extra-large body max) — never let body content reach the viewport edge at desktop widths
- Grid breaks are intentional and rare — hero images and full-bleed cards only

---

## Escalate if

- A layout requires a breakpoint or column count outside this system
- A surface needs content wider than 1440dp

---

## Migration from the Previous Custom System

| Old (custom) | New (Material 3) | Notes |
|--------------|------------------|-------|
| Extra-small (phone) 0–599dp, 4 cols | **Compact** 0–599dp, 4 cols | Boundary unchanged |
| Small (tablet) 600–904dp, **8 cols** | **Medium** 600–839dp, **12 cols** | Boundary tightened to 839; columns jump straight to 12 (Material doesn't use an 8-col phase) |
| Small–Medium 905–1239dp | **Expanded** 840–1199dp | Boundary aligned to Material |
| Medium (laptop) 1240–1439dp, 200dp fixed margin | **Large** 1200–1599dp, 24dp margin, body max 1280 | Dropped the 200dp legacy side-nav margin; standard 24dp now |
| Large (desktop) 1440dp+, body 1040 | **Extra-large** 1600dp+, body max 1440 | New target body max; 1040 was a side-nav consequence, not a design choice |

---

## Related

- [image-sizing.md](image-sizing.md) — how images behave across these breakpoints
- [aspect-ratios.md](aspect-ratios.md) — which ratios to use
- [patterns/navigation-responsive.md](../patterns/navigation-responsive.md) — the top-nav redesign that drives the new body widths

---

## Revision Log

| Date | Change |
|------|--------|
| 2026-05-22 | Adopted Material 3 window size classes — replaced custom 5-tier system (XS/S/SM/M/L) with Compact/Medium/Expanded/Large/Extra-large. Standardized margins to 24dp at Medium+. Set body max-width: 1280dp at Large, 1440dp at Extra-large. Removed the 200dp fixed margin at "Medium laptop" — legacy of the side-nav layout. Removed the 8-column tablet phase — Material jumps 4→12 at Medium. |
