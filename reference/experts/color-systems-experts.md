# Color Systems Experts — Reference

People who shaped how we think about color as a *system* — perceptual science, palette construction, and accessible color at scale — not just aesthetic taste. Use these references when the question is *is this palette engineered correctly?*, not just *does it look nice?* (see `visual-design-experts.md` for the latter — Albers lives there too; he's the bridge between the two docs).

**Companion to:** `visual-design-experts.md` (color as one of several visual tools), `reference/review/accessibility.md` (contrast floors), `reference/review/conformance.md` (are palette values legal). This doc answers: **is the color system itself sound — perceptually, accessibly, systematically?**

**Grounds existing MHC work:** `outputs/aug04-mh-color-reference/` (352-value contrast-measured palette) and `outputs/MHC UI/colors_and_type.css` (ΔE2000 brand-to-palette mapping) are already operating at the level this doc's Tier 1 describes. This file is the theory under practice you'd already built — read it to defend decisions you've made empirically, not to relearn them.

---

## Tier 1: Perceptual Foundations

*Why color can't be measured or compared in RGB/HSL — the science under [[feedback_colorimetry_not_hsl]].*

### Josef Albers
**Known for:** *Interaction of Color*, Bauhaus, color relativity

**Why he matters:** Proved perceptually — decades before the math existed to prove it numerically — that color is context-dependent: the same swatch reads differently depending on what surrounds it. Every argument for testing a color *in situ* rather than in isolation traces back to him.

**Best content:**
- *Interaction of Color* (book) — the definitive color theory text
- Homage to the Square series — color relativity in practice

**What to learn:** Color relativity, why a palette has to be tested in context, not swatch-by-swatch

---

### CIE / CIELAB & CIEDE2000 — *the standard, not a person*
**Known for:** The perceptually-uniform color space (CIELAB, 1976) and the difference formula built on it (CIEDE2000, 2001) that MHC's palette work already uses

**Why it matters:** RGB and HSL are display encodings, not models of human perception — equal numeric steps in either do not read as equal visual steps, and hue/saturation/lightness in HSL are not perceptually independent. CIELAB was built so that Euclidean distance approximates perceived difference; CIEDE2000 corrects known distortions in that distance (especially in blues and low-chroma greys) that plain ΔE76/94 gets wrong. This is *why* [[feedback_colorimetry_not_hsl]] is a hard rule, not a preference: two shipped errors came from ranking by hex/HSL instead.

**Practical use:** L* (CIELAB lightness) for ordering a scale — it's what "lighter/darker" perceptually means. ΔE2000 for difference/similarity — under ~1.0 is imperceptible, 2–10 is noticeable-to-distinct, above ~10 is a different color. This is the exact method behind `outputs/aug04-mh-color-reference/` and the brand-palette ΔE2000 merge.

**Best content:** Sharma, Wu & Dalal, "The CIEDE2000 Color-Difference Formula" (2005) — the reference paper · any CIELAB primer before reaching for a ΔE calculator

**What to learn:** L* for ordering, ΔE2000 for difference, why "one step" needs a numeric definition (MHC's is ΔE 4.9 — see [[project_mh_brand_palette_merge]])

---

## Tier 2: Systematic Palette Construction

*People who turned color into an engineered scale, not a swatch book.*

### Nate Baldwin
**Known for:** *Color in UI Design: A (Practical) Framework*, color systems consulting (formerly Adobe Spectrum), perceptually-driven scale generation

**Why he matters:** The most direct, practitioner-level bridge from color science to shippable design tokens. His framework treats a palette as a generated, perceptually-even scale rather than a hand-picked set of hex values — exactly the model an accessible, token-based system like MHC's needs. Read him for *how* to build the scale your CIEDE2000 discipline says you should.

**Best content:** *Color in UI Design: A (Practical) Framework* (book) — start here · writing on perceptual color scales

**What to learn:** Generating tonal scales that are perceptually even (not just numerically even), palette-as-token-system thinking

---

### Adam Argyle & the CSS Color 4/5 working group
**Known for:** OKLCH and the modern CSS color spaces (`oklch()`, `lch()`), Google Chrome DevRel color tooling

**Why it matters:** OKLCH is the practical successor to "do the math in LAB, ship in hex" — a perceptually-uniform space now supported natively in CSS, meaning palette generation and interpolation (gradients, hover states, tints) can be perceptually correct *at the CSS layer* instead of requiring an offline LAB conversion step. Worth knowing even if MHC's current pipeline stays LAB/ΔE2000-based, because it's where the tooling is heading.

**Best content:** web.dev color articles (Argyle) · oklch.com — interactive OKLCH picker/converter

**What to learn:** OKLCH as perceptually-uniform CSS color, why "same lightness, different hue" finally works predictably in code

---

### Leonardo (Adobe) — *a tool, cited for its method*
**Known for:** Adobe's open-source contrast-based color scale generator

**Why it matters:** Leonardo generates an entire tonal scale by target *contrast ratio* against a background, not by target hex value — meaning accessibility is designed into the scale's construction, not checked afterward. It's the clearest public example of "systematic palette + accessibility" fused into one generation step, which is the direction Tier 2 broadly points.

**Best content:** leonardocolor.io — try it directly against MHC's existing palette as a sanity check

**What to learn:** Contrast-driven (not hex-driven) scale generation

---

## Tier 3: Accessible & Clinical Color

*Color in high-stakes, data-dense interfaces — where a misread color has a health consequence, not just an aesthetic one.*

### David Flatley / APCA (Advanced Perceptual Contrast Algorithm)
**Known for:** APCA, the contrast model behind WCAG 3's draft text-contrast guidance

**Why it matters:** WCAG 2.x's contrast ratio (the one `reference/review/accessibility.md` currently gates on) is a known-crude formula — it doesn't account for font weight/size well and can pass combinations that are hard to read while failing ones that aren't. APCA is the more perceptually accurate successor. Not yet the compliance floor (WCAG 2.2 AA still is, and stays the instrument's floor), but the thing to understand *why* a technically-passing 4.5:1 pair can still look wrong, and where the standard is heading.

**Best content:** git.myndex.com (APCA project) · "Understanding APCA" primers linked from the WCAG 3 draft

**What to learn:** Why contrast ratio alone under-describes readability, what APCA corrects

---

### Color-blind-safe & clinical data color
**Known for:** ColorBrewer (Cynthia Brewer) for categorical/sequential palettes; the broader CVD (color vision deficiency) design literature

**Why it matters:** MHC surfaces lab values, risk states, and biometric ranges — exactly the category of interface where color-as-the-only-signal is a real failure mode (see the out-of-range-lab-value example already in `_kit.md`'s scoring contract). Brewer's palettes were built for cartography but are the standard reference for choosing sequential/diverging scales that survive deuteranopia/protanopia, which is directly applicable to any risk-band or trend visualization.

**Best content:** colorbrewer2.org — filter for "colorblind safe," test any risk-state palette against it directly

**What to learn:** Sequential vs. diverging vs. qualitative palette selection, CVD-safe hue choices, never encoding clinical meaning in hue alone

---

## Frameworks Quick Reference

### CIELAB / CIEDE2000
Perceptually-uniform color math. **L\*** orders lightness the way eyes actually perceive it; **ΔE2000** measures difference the way eyes actually perceive it. Never rank or order color by hex/RGB/HSL — that's the rule two shipped MHC errors came from.

### Contrast-driven scale generation (Leonardo model)
Generate a tonal scale by target contrast ratio against its background, not by target hex. Accessibility becomes a property of how the scale was built, not a check run against it afterward.

### OKLCH
The CSS-native perceptually-uniform space. Use it as the direction of travel for interpolation/gradients/state-color math, even while the source-of-truth palette stays LAB/ΔE2000-documented.

### CVD-safe palette selection (ColorBrewer model)
Before assigning color to a risk band, trend, or category: pick from a sequential/diverging/qualitative family that's colorblind-tested, and never let hue alone carry clinical meaning.

---

## How to Use This Reference

### When defending a palette decision:
1. Cite ΔE2000, not hex distance — "these are ΔE 4.9 apart" is a defensible claim, "these look similar" isn't
2. Point to Albers if a stakeholder is judging a swatch in isolation instead of in context
3. Check `outputs/aug04-mh-color-reference/` first — the measurement may already exist

### When extending or generating a new tonal scale:
1. Baldwin's framework for the systematic approach
2. Leonardo as a contrast-driven sanity check against the existing scale
3. Confirm against `reference/review/accessibility.md`'s WCAG 2.2 AA floor — that's still the compliance gate, APCA is context only

### When assigning color to clinical/data states (risk bands, lab values, trends):
1. ColorBrewer for the palette family (sequential/diverging/qualitative)
2. Never encode meaning in hue alone — pair with position, icon, or label
3. Test against the CVD-safe filter before shipping

### When something "looks off" but passes WCAG 2.x:
1. Suspect APCA territory — font weight/size interacting with contrast in a way the ratio formula misses
2. Cross-check visually, not just numerically

---

## Revision Log

| Date | Change |
|------|--------|
| 2026-09-04 | Initial version — perceptual foundations, systematic construction, accessible/clinical color; grounds existing `outputs/aug04-mh-color-reference/` and ΔE2000 brand-merge work in named theory. |
