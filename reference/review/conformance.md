# Conformance

**Instrument.** Asks one question: *is every value on this screen a value the system permits?*

This is arithmetic. It is never judged, never eyeballed, and never negotiated. Run [conformance-audit.js](conformance-audit.js) through the Figma bridge (`figma_execute`) or read the CSS. A human counting twenty hexes by eye is theatre.

**Output:** PASS / FAIL plus counts. A FAIL is a defect, not a preference.

---

## Why this runs first

Most of what reads as "not quite polished" is not a taste problem. It is a documented system arriving on the canvas partially. Fifteen type signatures on one 375px screen is why nothing has a clear rank — when eight sizes and three weights are all in play, size has stopped signalling importance.

You cannot score composition through that noise. Fix conformance, re-measure, then judge.

---

## Thresholds

### Per-screen ceilings

| Measure | Ceiling | Rationale |
|---|---|---|
| Distinct type signatures (family + size + weight) | **6** | 25 classes exist so the *system* covers every surface, not so one screen uses fifteen |
| Distinct fill hexes | **8** | Includes white, ink, brand, semantic. Beyond this, colour is decoration |
| Font families | **2** | `--f-display` and `--f-text` only, or the partner-supplied pair |
| Text nodes with no bound style | **0** | Closed scale means bound, not approximated |
| Off-scale font sizes | **0** | See permitted sets below |
| Off-scale weights | **0** | 400 regular, 500 medium; 600 semibold is the `Small` class only |
| Spacing values not divisible by 4 | **0** | 4dp baseline grid |
| Radius values outside the token set | **0** | 2 / 4 / 8 / 12 / 16 / 999. Containers only |
| Border widths outside the token set | **0** | 1 / 2 / 4 / 8 — and 2dp is a border, never a spacing value. **Visible strokes on containers only** |

**Radius and borders are checked on containers, not vector artwork.** Icon internals carry arbitrary geometry and invisible stroke weights by nature; counting them produced a ~5× false-positive rate on the first run. The script filters to `FRAME / RECTANGLE / COMPONENT / INSTANCE` with `strokes.some(visible)`.

Watch for `100` used as a "circle" radius where `--r-full` (999) is the token. Both render as a circle at today's sizes, which is exactly the accident that breaks when the component is resized.

### Permitted font sizes

**Compact (<600dp):** 11, 12, 14, 16, 18, 20, 25, 28, 32, 36, 40, 45, 51, 58
**Medium+ (≥600dp):** 12, 14, 16, 18, 20, 23, 29, 32, 36, 41, 46, 52, 58, 66

Anything else — 13, 15, 17, 19, 22 — is off-scale by definition. There is no such thing as a 15px class.

### Size and weight are not independent axes

Each of the 25 classes fixes both. `16/Semibold` is illegal even though 16 is a legal size and Semibold is a legal weight, because no class pairs them. Checking the two axes separately misses the largest category of type drift — it missed 256 instances on the first LifeForce run.

Legal pairs, **Compact**:

| Weight | Permitted sizes | Classes |
|---|---|---|
| Regular (400) | 14, 16, 18, 45, 51, 58 | Body 1–3, Paragraph 1–3, Display 1–3 |
| Medium (500) | 11, 12, 14, 16, 18, 20, 25, 28, 32, 36, 40 | Label 0–3, Caption, Eyebrow, Title 1–3, Heading 1–6 |
| Semibold (600) | **11 only** | `Small` |

Semibold exists in the scale for exactly one class. Any other Semibold is drift.

Source of truth: [design/foundation/typography.md](../../design/foundation/typography.md). If that file changes, the tables above change with it; they are a cache, not an authority.

---

## Near-duplicate colour detection

Two hexes can be legal individually and still be a defect together: nobody can see the difference, every renderer preserves it, and the palette quietly grows.

**Similarity is measured in CIEDE2000. Never by hex string, RGB distance, or HSL proximity.** Both have produced shipped errors here. Ordering by lightness uses CIELAB L\*, not luminance shortcuts.

| ΔE2000 between two fills on one screen | Verdict |
|---|---|
| **< 2.0** | Invisible duplicate — collapse to one token. Hard FAIL. |
| **2.0 – 4.9** | Less than one palette step apart (one MH step ≈ ΔE 4.9). Almost certainly unintentional. Flag. |
| **≥ 4.9** | Legitimately distinct. |

The script computes this. Do not estimate it.

---

## What conformance does *not* tell you

It cannot tell you whether the screen is any good. A screen can be perfectly conformant and completely flat — six type classes, one accent, eight hexes, and no emphasis rank whatsoever. That is what [art-direction.md](art-direction.md) is for.

Conformance is the floor that makes the art direction score meaningful. It is not a substitute for it.

---

## Reading conformance on HTML instead of Figma

For production fragments, the same thresholds apply against the computed CSS:

- Count distinct `font-family` / `font-size` / `font-weight` triples in use, not declared
- Any literal hex in the fragment is a FAIL — colour must come through a token
- Any `border-radius`, `gap`, `padding`, or `margin` literal is a FAIL for the same reason
- Inline `style="font-*"` overrides are a FAIL — the type scale forbids overrides outright

---

## Revision Log

| Date | Change |
|---|---|
| 2026-08-06 | Initial thresholds, derived from measuring the LifeForce status set against Type System v3. |
