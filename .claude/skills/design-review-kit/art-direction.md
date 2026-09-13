# Art Direction Rubric

**Instrument.** Scores composition — what wins the page, given only values the system permits.

Read [conformance.md](conformance.md) first. Conformance asks *"is every value on this screen legal?"* Art direction asks *"of the legal values, which one is doing the most work?"* Judging the second while the first is failing means grading composition through noise.

**Output:** score out of 100 (10 dimensions × 10), plus the three weakest dimensions, plus one highest-leverage fix. Never averaged with the other instruments.

---

## Why this exists

MHC has a complete design system — 25 type classes, 12 spacing tokens, a 352-value contrast-measured palette, tokenised radius and elevation. It has never had a written standard for *emphasis*. The result is screens where every value is defensible and no value is dominant: correct flows that read as flat.

That is an art direction failure, not a UX failure, and it needs its own instrument because Nielsen's heuristics will pass a flat screen without comment.

---

## Scoring bands

| Score | Meaning |
|---|---|
| 9–10 | Deliberate. Someone decided this and could defend it. |
| 7–8 | Sound. Reads as intentional; minor drift. |
| 5–6 | Defaulted. Not wrong, not decided — the system's fallback behaviour. |
| 3–4 | Working against itself. Two signals competing, or the wrong thing emphasised. |
| 0–2 | Absent. No decision was made on this dimension. |

**5–6 is the honest score for most un-art-directed work.** Nothing is broken; nothing was chosen. Do not inflate to 7 because it "looks fine" — looking fine is exactly what 5 means.

---

## The 10 dimensions

### 1. Emphasis rank
*Can you name, in order, the three things this screen wants you to see?*

**10** — One unmistakable primary. One clear secondary. Everything else recedes. Cover the copy and the rank still reads.
**5** — A hero element followed by a stack of equal-weight blocks. The first item is emphasised by *position*, not by design.
**0** — Uniform stack. The eye has no second stop after the top of the page.

Test: squint until type is illegible. If you still know what to do, this is ≥8.

---

### 2. Tonal structure
*Does surface tone create grouping and depth independent of status colour?*

**10** — 2–3 deliberate surface tones with assigned roles (page / raised / recessed), used consistently, so grouping survives with all status colour removed.
**5** — One surface tone plus borders. Grouping is carried entirely by 1dp outlines.
**0** — Everything is white on white, and the only tonal variation on the page arrives via alerts.

The failure mode this catches: when tone only exists in warning states, calm screens read as empty and alert screens read as designed. See dimension 3.

Warm tones belong to surfaces only. Ink stays near-neutral graphite — never brown. (Locked decision; see `design/foundation/colors.md`.)

---

### 3. Success/failure symmetry
*Is the healthy state composed as well as the alert state?*

**10** — The steady, complete, and on-track states are the strongest screens in the set. Alerts are legible but not the visual payoff.
**5** — Calm and alert states are roughly equal — usually because both are plain.
**0** — **The failure state is the best-looking screen in the set.**

This is MHC's most reliable art direction tell, and it is a product problem disguised as a visual one: members in good standing see the least designed screen, so the product only feels considered when something is wrong. Check by putting the healthy state and the overdue state side by side and asking which one you'd screenshot for a deck.

---

### 4. Graded density
*Does spacing vary by importance?*

**10** — Padding, internal gap, and block height all scale with rank. Strip the type and importance is still readable from density alone.
**5** — Every block uses `$spacing-04` internally regardless of what it contains.
**0** — Uniform density *and* uniform block height, so a support phone number occupies the same real estate as the primary action.

Compression is the tool people forget. Making the secondary blocks tighter is usually cheaper and better than making the primary block bigger.

---

### 5. Accent discipline
*How many hues carry non-semantic emphasis?*

**10** — One accent. One job. Reserved, and conspicuously withheld elsewhere.
**5** — One accent family used at three or four steps for slightly different jobs.
**0** — Multiple near-identical hues doing overlapping jobs (five blues, two reds).

Semantic colour (positive / negative / notice / informative) is exempt — it is spec, not accent. This dimension is only about *emphasis* colour.

Ranking hue similarity: **CIEDE2000 only.** Never by hex, RGB, or HSL proximity. Both have produced shipped errors here.

---

### 6. Type as hierarchy
*Do size and weight steps map to information rank?*

**10** — 5–6 classes on the screen, each with a distinct and repeated job. A reader could infer the rule.
**5** — Two effective tiers (title / body) with weight used decoratively rather than structurally.
**0** — Many signatures, no legible mapping. Size has stopped meaning importance because everything is a different size.

25 classes exist so that the *system* can cover every surface — not so that one screen can use fifteen. More classes on screen means less hierarchy, not more.

---

### 7. Meaning carried visually
*Where data has state, is the state visible without reading?*

**10** — In-range vs out-of-range, earned vs locked, due vs overdue, real vs placeholder — all legible pre-literacy, and each is reinforced by text or icon rather than colour alone.
**5** — State is present in copy and correct, but requires reading and sometimes arithmetic to extract.
**0** — The screen displays a value and its goal side by side and leaves the comparison entirely to the member.

This is where the palette earns its keep. If a screen shows numbers with thresholds and every tile looks identical, colour is available, semantic, tokenised, and unused precisely where it would carry real meaning.

Overlaps accessibility (colour-never-alone) and dataviz. When a finding trips both, report it under accessibility — that's a floor.

---

### 8. Imagery direction
*Does imagery say something, or fill space?*

**10** — Consistent subject treatment, consistent light, subject survives the container's locked aspect, and every image is load-bearing.
**5** — Competent stock, inconsistently lit, cropped acceptably.
**0** — Decorative filler; subject lost at the shipped crop; warmth varies image to image.

Heroes and paired image+content blocks lock to **3:2 on desktop**, with content sized to match image height — not content-driven. (Locked decision.)

For real audits use the `crop-test`, `light-test`, and `imagery-audit` skills; this dimension is the judgment layer over their measurements.

---

### 9. Motion posture
*Is motion doing orientation work, or decoration?*

**10** — Motion appears only where a state changed, and explains the change (what became available, what moved, where you now are). Everything else is instant. `prefers-reduced-motion` honoured.
**5** — Default framework transitions, applied uniformly, harmless.
**0** — Either decorative motion with no informational job, or a state change so abrupt the member can't tell what altered.

Posture only — durations and easing curves are not specified anywhere yet, and this rubric does not invent them.

---

### 10. Partner survivability
*Does the composition still read when the brand hue is swapped?*

**10** — Hierarchy is carried by tone, weight, density, and placement. Swap the navy for a partner's colour and nothing about the rank changes.
**5** — Rank survives the swap but the screen loses some of its character.
**0** — The design *is* the brand colour. Replace it and the hierarchy collapses.

MHC-specific and non-negotiable: every surface ships under partner themes (4 themes, plus client-supplied fonts and hues). An art direction POV expressed as a specific hex is an art direction POV that breaks on the first reskin. Express it as relationships.

---

## Report format

```
ART DIRECTION  48/100

  1 Emphasis rank              3
  2 Tonal structure            2
  3 Success/failure symmetry   2
  4 Graded density             3
  5 Accent discipline          4
  6 Type as hierarchy          3
  7 Meaning carried visually   4
  8 Imagery direction          —   (n/a — no imagery on screen)
  9 Motion posture             —   (n/a — static frame)
 10 Partner survivability      7

Weakest: tonal structure, success/failure symmetry, emphasis rank
Highest-leverage fix: introduce a recessed surface tone so grouping stops
depending on 1dp borders — repairs 1, 2, and 4 in one move.
```

Dimensions that don't apply are marked `—` and **excluded from the denominator**. A static frame with no imagery scores out of 80.

Always name one highest-leverage fix. Ten scores with no recommendation is analysis without a "so what."

---

## Revision Log

| Date | Change |
|---|---|
| 2026-08-06 | Initial rubric — 10 dimensions, bands, report format. Dimensions 3, 7, and 10 derived from findings in the LifeForce status set. |
