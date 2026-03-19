# Responsive Grid

**Confluence:** https://mobilehealthc.atlassian.net/wiki/spaces/MDS/pages/1344045221
**Status:** 🔶 Partial — breakpoints defined, some values still WIP

---

## Purpose

A 12-column grid that creates visual consistency across all layouts while allowing flexibility across screen sizes and orientations. The number of columns and gutter/margin sizes adapt at defined breakpoints.

---

## Grid Structure

| Element | Definition |
|---------|-----------|
| Columns | Width defined as percentages — they scale with the grid |
| Gutters | Fixed pixel values between columns — based on form factor and breakpoint |
| Layout Regions | Content areas that span any number of columns; resize with the grid |

---

## Breakpoints

| Screen | Range | Margin | Gutter | Body | Columns |
|--------|-------|--------|--------|------|---------|
| Extra-small (phone) | 0–599dp | 16dp | 16dp | Scaling | 4 |
| Small (tablet) | 600–904dp | 32dp | 16dp | Scaling | 8 |
| Small–Medium | 905–1239dp | Scaling | 24dp | 840dp | 12 |
| Medium (laptop) | 1240–1439dp | 200dp | 24dp | Scaling | 12 |
| Large (desktop) | 1440dp+ | Scaling | 24dp | 1040dp | 12 |

---

## Behavior Rules

| Rule | Detail |
|------|--------|
| Column spanning | Layout regions can span any number of columns |
| Content within regions | Individual elements do NOT align to the grid — only layout regions do |
| Offset layouts | Content can occupy a subset of 12 columns, centered on page |
| Breaking the grid | Allowed sparingly — only for large hero images and feature cards |

---

## Rules

- Always design within the 4-column grid on mobile (0–599dp)
- Never align individual UI elements directly to the grid — only their containing regions
- Grid breaks are intentional and rare — hero images and full-bleed cards only

## Escalate if

A layout requires a breakpoint or column count outside this system.
