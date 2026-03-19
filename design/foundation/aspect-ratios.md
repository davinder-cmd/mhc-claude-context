# Aspect Ratios

**Confluence:** https://mobilehealthc.atlassian.net/wiki/spaces/MDS/pages/1344045135
**Status:** ✅ Documented

---

## Purpose

Ensures images and videos scale correctly across displays of varying sizes. Aspect ratios define the proportional relationship between width and height and never change — a 16:9 image stays 16:9 regardless of size.

---

## Standard Export Size

800×600px (4:3 aspect ratio)

---

## Common Ratios

| Ratio | Use |
|-------|-----|
| 1:1 | Square — profile images, social media thumbnails |
| 2:1 | Wide banner images |
| 3:2 | Photography — most common in still photography |
| 4:3 | Standard monitors, older displays, presentation slides |
| 16:9 | Default for widescreen video, mobile recording, modern monitors |
| 16:10 | Some laptop screens |

Custom/hardcoded image sizes are allowed as overrides when ratios don't fit the context.

---

## Focal Point

Keep the focal point of any image centered to account for the widest range of cropping scenarios. A centered focal point ensures the subject survives any aspect ratio change.

---

## Behavior

Images scale relative to container width. Maintain the defined ratio — never stretch or distort.

---

## Rules

- Always define an aspect ratio for image and video containers — never let content define the size freely
- Card preview default: 2:1 or 16:9
- Avatar: always square (1:1)

## Useful Calculators

- https://aspectratiocalculator.com
- https://wistia.com/aspect-ratio-calculator
