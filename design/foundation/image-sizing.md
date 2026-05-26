# Image Sizing

**Confluence:** TBD
**Demos:** [outputs/may22-image-pattern-demos/](../../outputs/may22-image-pattern-demos/) — three live HTML files showing each pattern
**Status:** 🚧 Draft

---

## Purpose

Defines how image containers behave responsively across viewports. Where [aspect-ratios.md](aspect-ratios.md) defines *which* ratios to use, this doc defines *how* the container resizes — whether it's locked to a ratio, locked to a height, or both.

Three patterns cover ~95% of cases. The pattern is determined by the image's *role* on the page, not by personal preference. Breakpoints follow Material 3 window size classes (see [responsive-grid.md](responsive-grid.md)).

---

## MHC Defaults Reference

Quick-lookup for the values committed to MHC. See sections below for the reasoning.

| Role | Pattern | Ratio | Size (Compact / Medium+) |
|------|---------|-------|------|
| Hero / marquee (split) | Fix-width on Medium+ | 3:2 desktop, 16:9 mobile aspect-implied | fluid wide × **216 tall** Compact / **600 × 400** Medium+ |
| Hero / marquee (full-bleed with text overlay) | Fix-height | n/a | full-bleed × `height: 280–320dp` |
| Program / feature tile | Fix-height | 16:9-ish (visible aspect floats) | column × **160** Compact / column × **240** Medium+ |
| Editorial card | Fix-height | 3:2-ish | column × `height: 200–240dp` |
| Preview thumbnail | Fix-both | 4:3 or 1:1 | **80 × 80** Compact / **160 × 120** Medium+ |
| Avatar | Fix-both | 1:1 | 32 / 48 / 64 / 80dp from Imagery 1:1 scale |
| Page / section header | Fix-height | n/a | `height: 240dp` |

**Integer rule:** every image dimension must be an integer at every breakpoint. Multiples of 4 or 8 preferred. See "Integer Dimensions Rule" below.

**Content max-width:** 1280dp optimal, 1440dp ceiling — target for the top-nav redesign ([patterns/navigation-responsive.md](../patterns/navigation-responsive.md)). Designs must also remain workable at **1040dp** (current product with side nav). Never wider than 1440.

---

## Integer Dimensions Rule

**Every image renders at integer pixel dimensions at every viewport.** Multiples of 4 or 8 preferred. This applies regardless of which pattern below you use.

**Why:**
- Fractional dimensions (e.g., 451.33 × 253.87) cause sub-pixel rendering drift, edge-blur, and break QA reproducibility
- The documented Imagery scales (in Figma) are integer-valued — fractional rendered output diverges from spec silently
- Production systems like Gmail, Apple, Stripe lock every image to integer dimensions at every breakpoint for this reason

**How — two approaches:**

| Approach | When to use | Example |
|---|---|---|
| **Fix width** | Image sits *alongside* content (split hero, side-by-side layouts). Both width and height become deterministic via `aspect-ratio`. | `.hero { grid-template-columns: 600px 1fr } .hero__media { aspect-ratio: 3 / 2 }` → image = 600 × 400 exact |
| **Fix height** | Image sits *above* content (card / tile / stack). Only height matters visibly — width fills the column fluidly with `object-fit: cover`. | `.program__media { height: 240px } .program__media img { object-fit: cover }` → image always 240dp tall; width fluid |

**Rule of thumb when only one can be locked:**
1. Lock **height** for image-above-content layouts (cards stacked vertically — the only visible edge is the image's bottom)
2. Lock **width** for image-beside-content layouts (split heroes — both edges of the image are visible against the content panel)
3. Lock **both** for thumbnails and avatars (small discrete sizes)

**What this REPLACES:** the older fluid-aspect implementation (`width: 100%; aspect-ratio: 16/9` inside a `1fr` grid column) produces fractional dimensions because the column width is rarely an integer multiple of the ratio's denominator. Update existing components to use one of the two approaches above instead. See snap-to-grid demos in [outputs/may23-figma-recreation/](../../outputs/may23-figma-recreation/) — v58 (hero, fix-width), v59 (program card, fix-height Medium+), v60 (Compact gap closed).

**Imagery scale is a guideline, not strict bible.** Pick documented values when they match the visual intent; pick a clean even integer near the documented value when scale-strict alignment forces a visual jump. Always integer, always even (or multiple of 4/8) where possible.

---

## The Three Patterns

| Pattern | Behavior | Default for |
|---------|----------|-------------|
| **1. Aspect-ratio locked** | Width flexes with grid. Height = width × ratio. Both shrink together. Shape never changes — only scale. | Editorial cards, program tiles, content previews, anything inside a grid column |
| **2. Fixed-height cover-crop** | Container has a fixed pixel height. Width flexes. Image fills via `object-fit: cover`, crops differently at every width. | Page headers, section anchors — only when vertical anchoring matters more than seeing the full image |
| **3. Hybrid (ratio + max-height)** | Aspect-ratio below a crossover width; height-capped above it. | Marquee / full-bleed heroes — anywhere a pure 16:9 hero would be too tall at desktop |

---

## Decision Tree

1. **Is it a hero / marquee?** → **Pattern 3 (Hybrid).** 3:2 with `max-height: 360dp` for split layouts, or 280–320dp for full-bleed with text overlay.
2. **Is it inside a grid column (card, tile, preview)?** → **Pattern 1 (Aspect-ratio locked).** 16:9 for program/feature tiles; 3:2 for editorial cards; 4:3 or 1:1 for small previews.
3. **Is it a page/section header where the title and controls need a predictable Y position?** → **Pattern 2 (Fixed-height).** 240dp.
4. **Is it an avatar or thumbnail?** → **Pattern 1 with 1:1, fixed pixel size (64–80dp).**

If none of these fit, see [Exceptions](#exceptions) — and escalate.

---

## Pattern 1 — Aspect-Ratio Locked (with fixed width to honor integer rule)

```css
/* Use FIXED WIDTH at each breakpoint, not 100%. Aspect-ratio derives height. */
.media {
  width: 240px;             /* pick from Imagery scale at this breakpoint */
  aspect-ratio: 16 / 9;     /* derives height = 240 × 9/16 = 135 (integer ✓) */
  overflow: hidden;
}
.media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

**At each breakpoint, the image width must produce an integer height when multiplied by the ratio.** For 16:9 this means width must be a multiple of 16; for 3:2 must be multiple of 3; for 4:3 must be multiple of 4. The Imagery scale's documented sizes are pre-validated for this.

**Figma:** Frame with fixed Width and Height (both integer). Constrain proportions ON so resizing is uniform. Image fill = Fill (cover). At each breakpoint, manually set the frame to a documented Imagery-scale size.

**Don't use `width: 100%`** inside a fluid grid column — the column width is fractional, and `aspect-ratio` compounds that into a fractional height. Use Pattern 2 (fix-height) instead when the image must fill the column width.

---

## Pattern 2 — Fixed-Height Cover-Crop

```css
.page-header {
  width: 100%;
  height: 240px;
  overflow: hidden;
}
.page-header img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

**Figma:** Frame with fixed pixel height, width fills container. Image fill = Fill (cover). Resize the frame width at each breakpoint to confirm crop is acceptable.

Height is locked. As width changes, the container's effective ratio changes — wide letterbox on desktop, near-square on mobile. The image crops aggressively, so the focal point must be near center (see [aspect-ratios.md#focal-point](aspect-ratios.md#focal-point)).

**Use sparingly.** Only for full-bleed surfaces where vertical anchoring is required (page/section headers).

---

## Pattern 3 — Hybrid

```css
.hero {
  width: 100%;
  aspect-ratio: 3 / 2;      /* rules below the crossover */
  max-height: 360px;        /* rules above the crossover */
  overflow: hidden;
}
.hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

With `aspect-ratio: 3/2` and `max-height: 360dp`, the crossover is at **540dp container width** (because 540 × 2/3 = 360). Below 540, ratio rules. Above 540, height locks and only width grows — image crops more on top/bottom as the container widens.

**MHC-specific:** content is capped at **1440dp wide (1280dp optimal)**. With the 360dp height cap, the hero behaves as follows across container widths:

| Container width | Window size class | Active rule | Hero shape |
|------|------|-------|-------|
| ≤540dp | Compact (small phone) | aspect-ratio | 3:2 — image-forward, photo readable |
| 540–840dp | Compact → Medium / Expanded | max-height | Stretching from 3:2 toward letterbox |
| **1040dp** | Expanded (current product, side-nav) | max-height | ~2.89:1 cinematic, well-balanced |
| **1280dp** | Large (optimal — top-nav redesign) | max-height | ~3.56:1 cinematic letterbox |
| **1440dp** | Extra-large (max — top-nav redesign) | max-height | 4:1 banner — top end |

Window size class names follow Material 3 — see [responsive-grid.md](responsive-grid.md).

At max content width, the hero is roughly 4:1 — wider than 21:9 ultrawide cinema. This is sized for a **split hero** (image on one side, text panel on the other), where the image only fills ~half the container width. With a 50/50 split at 1280dp, the image alone is ~640 × 360 = 16:9 — exactly the shape a photo wants.

For a **full-bleed hero with text overlaid**, drop the cap to 280–320dp to avoid the letterbox feeling.

**Figma has no native equivalent** — Figma can't express "ratio until X, then capped." Set up two variants of the hero frame:
- Compact (container ≤540dp): 3:2 ratio constrained
- Medium and above (container >540dp): full-width × 360dp fixed height

Document the crossover in the component's properties so engineering knows to use the single CSS pattern, not two separate components.

---

## Exceptions

When to use something other than the three patterns. **Each requires a specific, articulable reason.**

| Exception | When | What to do instead |
|-----------|------|--------------------|
| **Art direction** | Crop itself is editorial — different photo/crop per breakpoint, not just resized | `<picture>` element to swap sources; container still uses Pattern 1 or 3 |
| **User-uploaded content** | Image dimensions are unpredictable (e.g., member progress photos) | Let intrinsic ratio drive container with a `max-height` safety net |
| **Iconography & logos** | Symbols, not photos — cropping is unacceptable | Fixed pixel size + `object-fit: contain` |
| **Content with a native ratio** | Embedded video (16:9), book cover, screenshot | Match content's native ratio exactly |
| **Marketing landing hero** | Standalone page; hero fills viewport for impact | `height: 100vh; max-height: 800px` (viewport-based, not container-based) |
| **Data visualization** | Charts have legibility minimums | Fixed minimums + responsive width; not aspect-ratio |

Of these, only **user-uploaded content** and **iconography** are likely to arise on MHC product surfaces. The rest don't apply to our context today.

---

## Rules

- **Every image dimension must be integer at every breakpoint.** Multiples of 4 or 8 preferred. (See Integer Dimensions Rule above.)
- Default to Pattern 2 (fix-height) for images stacked above content (cards, tiles)
- Use Pattern 1 (fix-width + aspect-ratio) only when image sits beside content (split hero)
- Always set the shape on the container — never let an image's intrinsic dimensions drive layout
- Use `object-fit: cover` for photo imagery; `object-fit: contain` only for icons/logos
- Never use `object-fit: fill` (the HTML default) — it distorts the image
- Pick ratios from the [aspect-ratios.md](aspect-ratios.md) catalog — don't introduce new ones
- Match the ratio to the card type, not the photo
- Content max-width: **1280dp optimal, 1440dp ceiling** (top-nav redesign target). Must also work at **1040dp** (current side-nav product)
- Hero cap height: **360dp** (split layout) / **280–320dp** (full-bleed with text overlay). The 360dp cap is chosen because it works gracefully across the entire 1040–1440 range
- Page-header fixed height: **240dp**
- Focal points must be center-weighted

---

## Escalate if

- A surface needs an image pattern not covered by these three
- A hero needs a `max-height` cap different from 360dp (or 280–320dp for full-bleed)
- A page header needs a fixed height different from 240dp
- Content needs to exceed 1440dp max-width
- Engineering proposes letting image dimensions drive container size
- A new aspect ratio is needed (escalate via [aspect-ratios.md](aspect-ratios.md))

---

## Related

- [aspect-ratios.md](aspect-ratios.md) — which ratios to use
- [responsive-grid.md](responsive-grid.md) — column widths that drive container widths
- [object-styles.md](object-styles.md) — corner radius for media containers
- [outputs/may22-image-pattern-demos/](../../outputs/may22-image-pattern-demos/) — live demos of each pattern

---

## Revision Log

| Date | Change |
|------|--------|
| 2026-05-22 | Initial draft — three patterns, decision tree, exceptions, MHC-specific crossover math |
| 2026-05-22 | Committed MHC defaults: 1280–1440 content cap, 3:2 + 360dp hero (split), 280–320dp hero (full-bleed), 16:9 tile, 4:3 thumbnail, 1:1 avatar. Updated crossover to 540dp container width. Added MHC Defaults Reference table near top. |
| 2026-05-22 | Clarified content-width range: 1280–1440 is the top-nav redesign target; designs must also work at 1040dp (current side-nav product). Added 1040dp row to Pattern 3 container-width behavior table. |
| 2026-05-24 | **Integer Dimensions Rule added.** Cross-cutting principle: every image renders at integer pixel dimensions at every viewport, multiples of 4 or 8 preferred. Replaces the older fluid-aspect implementation (`width: 100%; aspect-ratio: X/Y` inside fluid grid columns) which produced fractional dimensions like 451.33 × 253.87. Two approaches documented: fix-width (image-beside-content) or fix-height (image-above-content). Pattern 1 example updated to use fixed width + aspect-ratio (so derived height is also integer). Defaults Reference table updated to show concrete Compact / Medium+ sizes per role. Snap-to-grid demos in v58–v60. Validated against Google / Apple / Stripe / Airbnb production conventions. |
