# The 350 tier — filling the hole at the light end

**Date:** 2026-08-06 · **Method:** LCH midpoint of steps 300 and 400, gamut-clamped to sRGB

---

## The gap is systematic, not a one-off

It surfaced from a real need — a Mango-derived tag tint (`#FAE1A5`) whose nearest palette value was
**ΔE 3.76 away** (Mustard 400). Measuring the ramps explains why:

| Family | 100→200 | 200→300 | **300→400** | 400→500 |
|---|---|---|---|---|
| Mustard | 4.3 | 3.5 | **7.4** | 6.5 |
| Yellow | 4.5 | 3.7 | **9.0** | 4.0 |
| Orange | 4.1 | 3.7 | **7.9** | 7.5 |
| Ember | 5.1 | 3.6 | **8.9** | 9.4 |
| Coral | 5.9 | 4.7 | **11.0** | 10.4 |
| Coffee | 2.9 | 3.2 | **8.1** | 11.5 |
| Mub | 2.1 | 2.0 | **5.7** | 7.7 |

**300→400 is the largest jump in the light half of every family.** The first two intervals run
ΔE 2.0–5.9 — under one MH step (≈4.9). Then 300→400 roughly doubles to 5.7–11.0. Anything a designer
needs in that interval has no palette value, so they invent one — which is exactly what happened.

This is the mirror of the **50 tier** finding: the light end is under-served, but at *two* different
places. 50 sits above 100; 350 sits inside the 300→400 jump.

---

## The tier

Every family clears the just-noticeable-difference bar from both neighbours, so all 22 earn a step.

| Family | 350 | ΔE to 300 | ΔE to 400 | Gap was | On white | Family ink on it |
|---|---|---|---|---|---|---|
| Coffee | `#D0C4BB` | 4.01 | 4.1 | 8.06 | 1.71:1 | 9.93:1 |
| Cocoa | `#E2D0BF` | 3.58 | 3.71 | 7.24 | 1.5:1 | 9.12:1 |
| Mub | `#D7D4CC` | 2.9 | 2.8 | 5.7 | 1.48:1 | 9.64:1 |
| Grey | `#DDDDDC` | 1.78 | 1.61 | 3.38 | 1.36:1 | 8.19:1 |
| Honeydew | `#F1F6C2` | 3.63 | 2.94 | 6.51 | 1.12:1 | 8.02:1 |
| Lime | `#D9F1C5` | 3.52 | 3.26 | 6.72 | 1.21:1 | 8.48:1 |
| Green | `#CCEACC` | 4.14 | 3.19 | 7.27 | 1.3:1 | 8.49:1 |
| Jade | `#C2ECDF` | 3.47 | 3.35 | 6.78 | 1.28:1 | 8.38:1 |
| Teal | `#B7EEF0` | 3.59 | 3.01 | 6.54 | 1.27:1 | 8.17:1 |
| Turquoise | `#B9E1F0` | 3.3 | 3.19 | 6.46 | 1.39:1 | 8.65:1 |
| Ocean | `#BBD6F0` | 3.76 | 3.75 | 7.5 | 1.5:1 | 8.85:1 |
| Blue | `#BDCAF1` | 4.7 | 4.38 | 9.04 | 1.63:1 | 9.05:1 |
| Indigo | `#C4B9EF` | 5.81 | 5.4 | 11.12 | 1.82:1 | 9.42:1 |
| Purple | `#DAB3EC` | 5.63 | 5.32 | 10.87 | 1.8:1 | 9.1:1 |
| Violet | `#ECB4DE` | 5.47 | 5.26 | 10.63 | 1.73:1 | 8.35:1 |
| Pink | `#F7B7CD` | 5.15 | 4.88 | 9.91 | 1.67:1 | 7.77:1 |
| Coral | `#F8AFAF` | 5.7 | 5.46 | 11.03 | 1.79:1 | 6.92:1 |
| Ember | `#FBC7B4` | 4.68 | 4.3 | 8.91 | 1.51:1 | 6.86:1 |
| Orange | `#FFD1A9` * | 4.24 | 3.74 | 7.92 | 1.41:1 | 5.96:1 |
| Mustard | `#FFE0AA` * | 3.86 | 3.61 | 7.42 | 1.27:1 | 5.76:1 |
| Yellow | `#FFEBA3` * | 5.03 | 4.11 | 9.04 | 1.19:1 | 5.55:1 |
| Lemon | `#FFF7AA` * | 3.96 | 3.45 | 7.36 | 1.1:1 | 5.37:1 |

`*` = the LCH midpoint fell outside sRGB and was clamped. Affects Orange, Mustard, Yellow and Lemon —
their 300 and 400 steps already sit at `#FF` in the red channel, so there is no headroom. The clamped
values still land 3.4–4.1 from both neighbours, which is the point of the step.

**Last column matters:** pairing a 350 with its own family's 1600 gives 5.4–9.9:1 — every family's
350 can carry its own ink at AA. That is what makes it usable as a lozenge, chip or callout fill
without borrowing a colour from somewhere else.

---

## Applied

**Mustard 350 `#FFE0AA`** is now the `RECOMMENDED` tag fill on `Status · 01 Enroll — 3 left`
(`4217:10422`), paired with **Mustard 1600 `#87440A`** — **5.76:1**, one family, both palette-native.

It replaces `#FAE1A5`, a hand-mixed 40% tint of Mango that was ΔE 2.66 away and off-palette.

---

## Why Mustard rather than Orange, for the record

The tag started as orange and orange is already spoken for: `DUE SEP 15` / `DUE JUN 30` use
`#B43C00` and `OVERDUE` uses `#CA3B27`. An orange "recommended" tag sat ΔE 4–5 from the deadline
colours — near enough that the calm state and the late state read as one signal.

Mango is **ΔE 38.8 from DUE and 40.9 from OVERDUE**. And the tint level does its own work: a pale
wash reads as a label, a saturated amber reads as caution. At 350 it is unmistakably a highlight.

---

## Status

Proposed. Not added to the `MH colors v2` Figma file — that is a design-system change and needs a
decision, same as the 50 tier. `tier-350.json` holds the values.
