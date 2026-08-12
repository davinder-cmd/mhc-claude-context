# LifeForce — Web build (current design, HTML)

Portable HTML implementation of the current LifeForce designs — the engineering-facing
artifact (for Ren). Evolved from the `aug09-lifeforce-grid` set with the Aug-11 updates:
**image focal cards** and the **gradient phase bar**.

## Structure
- `index.html` — landing page; every screen linked, grouped by act. Prev / Next flips through.
- Screens (one file each) — enrollment spine, first-visit, active + deadlines, dependents, My Progress, records.
- `lifeforce.css` — **one stylesheet**, no per-screen CSS. MHC Type System v3 (SF Pro), semantic
  color, Material-3 responsive grid (small + large form), the component library.
- `assets/` — licensed imagery.
- `docnav.js` — the demo flip-through nav only (not part of any screen).

## What's new vs. the aug09 set
- **`.focal--banner`** — an image banner on a focal card (full-bleed, rounded top, then content).
- **`.phasebar`** — the turquoise→green gradient phase bar with a "you are here" marker,
  "Start / Peak Health" endpoints, replacing the earlier position dots.
- Color is already the current semantic system (ocean / turquoise / mustard / coral / green) —
  no palette change needed.

## Image cards — mapping
| Screen | Card | Image |
|---|---|---|
| 01 Getting set up | Program Acknowledgment | `assets/enroll-acknowledge.jpg` (path) ✅ |
| 02 Complete lab work | Do this next | `assets/labs.jpg` (water) ✅ |
| 08 Labs due (notice) | Complete lab work | `assets/labs.jpg` (water) ✅ |
| **03 Health Assessment** | Do this next | **`assets/assessment.jpg` — needs the mug + journal image** ⚠️ |
| **09 HA due (notice)** | Health Assessment | **`assets/assessment.jpg` — same** ⚠️ |
| 10 / 11 (coral alerts) | — | **none, by design** (tone-tiering: alerts are image-free) |

**To finish 03 + 09:** drop the mug + journal image at `assets/assessment.jpg` — the banner markup
is ready to switch on.

## Config note (for Ren)
Screens are semantic HTML + one stylesheet, **no JS required** — maps to the CKEditor HTML-block +
CodeMirror stylesheet authoring model. `docnav.js` is only the demo flip-nav; drop it in production.

## Provenance
Built from the aug09 HTML base + the Aug-11 design references (imagery, phase gradient, tone-tiering)
while the Figma bridge was offline. Reconcile against Figma (`Journey` frame, node 4381:78059) when
the bridge is reconnected.
