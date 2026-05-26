# Aspect Ratios

**Confluence:** https://mobilehealthc.atlassian.net/wiki/spaces/MDS/pages/1344045135
**Reference:** Material 3 — Image guidance (m3.material.io)
**Status:** ✅ Documented — Material-aligned 2026-05-22

---

## Purpose

Ensures images and videos scale correctly across displays of varying sizes. Aspect ratios define the proportional relationship between width and height and never change — a 16:9 image stays 16:9 regardless of size.

---

## Standard Export Size

800×600px (4:3 aspect ratio)

---

## Common Ratios

Listed in order of Material 3 alignment. Default to the primary ratios; reach for secondary only with justification.

| Ratio | Material 3 | Default for |
|-------|------------|-------------|
| **16:9** | Primary | Feature media — program/feature tiles, content cards, video thumbnails, banners |
| **1:1** | Primary | Avatars, square cards, thumbnails, profile images |
| **4:3** | Common | Photography, secondary cards, preview thumbnails |
| **3:2** | Common | Editorial cards, MHC hero imagery (mobile text legibility benefits — see [image-sizing.md](image-sizing.md)) |
| 2:1 | Non-canonical | Wide banner callouts — avoid unless layout demands it |
| 16:10 | Non-canonical | Match for laptop-screen-shaped imagery (screenshots). Avoid otherwise. |

Custom hardcoded sizes are allowed only as overrides when ratios don't fit the context — and require justification per [image-sizing.md#exceptions](image-sizing.md#exceptions).

---

## Focal Point

Keep the focal point of any image centered to account for the widest range of cropping scenarios. A centered focal point ensures the subject survives any aspect ratio change.

---

## Behavior

Images scale relative to container width. Maintain the defined ratio — never stretch or distort.

---

## Rules

- Always define an aspect ratio for image and video containers — never let content define the size freely
- **Default for feature tiles / cards:** 16:9 (Material primary)
- **Default for editorial heroes:** 3:2 (Material common) — see [image-sizing.md](image-sizing.md) for hybrid pattern
- **Default for previews / thumbnails:** 4:3 or 1:1
- **Avatar:** always square (1:1)
- Reach for 2:1 or 16:10 only when the layout specifically demands it — these are non-canonical in Material

---

## Useful Calculators

- https://aspectratiocalculator.com
- https://wistia.com/aspect-ratio-calculator

---

## Revision Log

| Date | Change |
|------|--------|
| 2026-05-22 | Reorganized Common Ratios by Material 3 alignment (primary / common / non-canonical). Updated default rules to reflect Material primary (16:9 for tiles, 1:1 for avatars). 2:1 is no longer a recommended card preview default — use 16:9 instead. |
