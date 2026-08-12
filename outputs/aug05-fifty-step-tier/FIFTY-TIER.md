# A 50 tier for MH Colors v2

**Question:** a step at half of 100 across all families, and maybe a 25 across the neutrals.
**Answer:** yes to 50 for 21 of 22 families. No to 25 anywhere. No 50 for Grey.
**Date:** 5 Aug 2026 · CIELAB / CIEDE2000, gamut-checked against sRGB

| File | What it's for |
|---|---|
| `fifty-tier.html` | Visual proof, including the side-by-side that explains the whole thing. Open this first. |
| `tier-50.css` | The 21 values. |
| `tier-50.json` | Values plus the JND screen and the 25 test. |

---

## The short version

Your instinct is right, and you already acted on it. **The beige you ship, `#FAF7F0`, is ΔE 0.20 from the computed Mub 50.** You built the missing step months ago and never named it. Everything below is mostly a matter of formalising that and extending it.

But the 25 fails, and it fails specifically in the neutrals you wanted it for. The reason is worth more than the answer.

---

## "Too dark" is usually "too grey"

Grey 100 is `#F8F8F9` at L\* 97.6. Your shipped beige is `#FAF7F0` at L\* 97.3 — **measurably darker** — and it reads cleaner and brighter. That's the **Helmholtz–Kohlrausch effect**: chromatic colors appear lighter than achromatic ones of the same luminance.

So when you say the neutrals still feel dark at 100, two different things are bundled together:

- **Coffee 100 at L\* 93.9 genuinely is dark.** Six points off white is a lot for a page background. A 50 fixes this.
- **Grey 100 at L\* 97.6 is not dark at all — it's flat.** There are only 2.4 points of lightness left between it and white. You cannot fix flat with lightness, because there's almost none left to add. You fix it with chroma.

This is why the warm-neutral 50s below hold C\* 3.7 instead of taking the proportional 0.8. At proportional chroma, Mub 50 comes out at C\* 0.6 and renders as plain white — technically lighter, and useless, because it loses the warmth that was the entire point.

---

## The tier

**Method.** L\* at the perceptual midpoint between white and the family's 100 — literally "half of 100," measured in a space where halving means something. Chroma at 50% of the 100 step, capped to the sRGB gamut. Coffee, Cocoa and Mub override to C\* 3.7.

**Bar to clear.** A step must be ΔE ≥ 1.0 from *both* white and the 100 step. Below that it's a token designers will use and reviewers cannot verify.

| Family | 50 | 100 | L* | C* | ΔE white | ΔE to 100 | Contrast |
|---|---|---|---|---|---|---|---|
| Coffee | `#FBF5EF` | `#F0EDEA` | 96.9 | 3.7 | 4.01 | 2.45 | 1.082:1 |
| Cocoa | `#FEF7F1` | `#F6F0EB` | 97.6 | 3.7 | 4.07 | 1.56 | 1.061:1 |
| Mub | `#FAF7F0` | `#F3F2EF` | 97.7 | 3.7 | 3.70 | 2.30 | 1.061:1 |
| Grey **— no 50** | ~~`#FBFBFC`~~ | `#F8F8F9` | 98.8 | 0.3 | 0.95 | 0.60 | 1.034:1 |
| Honeydew | `#FDFDF5` | `#FBFCEC` | 99.3 | 4.1 | 3.99 | 3.49 | 1.022:1 |
| Lime | `#F9FDF6` | `#F3FBED` | 98.8 | 3.9 | 4.37 | 3.68 | 1.029:1 |
| Green | `#F7FCF7` | `#EFF8EF` | 98.4 | 2.8 | 3.94 | 2.87 | 1.038:1 |
| Jade | `#F6FCFA` | `#ECF9F5` | 98.4 | 2.5 | 3.36 | 3.33 | 1.038:1 |
| Teal | `#F4FDFC` | `#E8FAFA` | 98.5 | 3.1 | 4.34 | 3.48 | 1.034:1 |
| Turquoise | `#F4FAFD` | `#E9F6FA` | 98.0 | 2.4 | 3.07 | 3.02 | 1.053:1 |
| Ocean | `#F5F8FD` | `#EAF2FA` | 97.6 | 2.5 | 2.96 | 2.64 | 1.064:1 |
| Blue | `#F5F7FD` | `#EBEFFA` | 97.2 | 2.9 | 3.36 | 2.78 | 1.071:1 |
| Indigo | `#F6F4FD` | `#EDE9FA` | 96.5 | 4.5 | 5.15 | 4.17 | 1.089:1 |
| Purple | `#F9F3FC` | `#F3E7F9` | 96.5 | 5.1 | 6.00 | 5.01 | 1.091:1 |
| Violet | `#FCF3FA` | `#F9E8F5` | 96.8 | 4.5 | 6.15 | 4.53 | 1.086:1 |
| Pink | `#FEF4F7` | `#FCE9EF` | 97.0 | 3.7 | 5.40 | 4.30 | 1.077:1 |
| Coral | `#FEF2F2` | `#FDE6E6` | 96.5 | 4.2 | 5.83 | 4.61 | 1.094:1 |
| Ember | `#FFF6F3` | `#FEEEE8` | 97.6 | 3.3 | 4.34 | 3.18 | 1.064:1 |
| Orange | `#FFF6F0` | `#FFEDE1` | 97.4 | 4.4 | 4.70 | 4.15 | 1.066:1 |
| Mustard | `#FFF9F0` | `#FFF2E1` | 98.0 | 4.8 | 4.67 | 3.97 | 1.047:1 |
| Yellow | `#FFFAF0` | `#FFF6E1` | 98.5 | 5.3 | 4.88 | 4.32 | 1.040:1 |
| Lemon | `#FFFCF1` | `#FFF9E1` | 98.9 | 5.8 | 5.14 | 4.87 | 1.027:1 |

Orange, Mustard, Yellow and Lemon are gamut-capped — their 100 steps already sit at `#FF` in the red channel, so there is no headroom to lighten while holding proportional chroma. The cap costs 0.1–0.4 C\*, which is immaterial.

**Grey is the one exclusion.** Grey 50 would be `#FBFBFC` — ΔE 0.95 from white and 0.60 from Grey 100. Both under the just-noticeable difference. Don't issue it.

**Use `#FAF7F0` as Mub 50,** not the computed `#FBF8F1`. It's ΔE 0.20 away, it already ships, and adopting it means zero visual change to live screens.

---

## Why 25 fails

| Family | 25 would be | ΔE white | ΔE to 50 | Verdict |
|---|---|---|---|---|
| Grey | `#FDFDFD` | 0.40 | 0.66 | **invisible** |
| Mub | `#FCFCFB` | 0.81 | 3.11 | **invisible** |
| Coffee | `#FBFAFA` | 1.08 | 3.43 | marginal |
| Cocoa | `#FDFBFA` | 1.23 | 2.98 | marginal |
| Ocean | `#FAFCFE` | 1.40 | 1.67 | marginal |
| Coral | `#FFF9F9` | 3.02 | 2.83 | marginal |

It survives in the chromatic families and dies in the neutrals — the opposite of what you wanted.

This isn't a limitation of the palette, it's arithmetic. A neutral has almost no chroma to spend, so lightness is the only axis available, and there are 2.4 points of it between Grey 100 and white. That does not subdivide into visible steps. **If a surface needs to be subtler than Grey 100, the answer is white.**

---

## What I'd do

1. **Add 50 to 21 families.** Real step everywhere but Grey, and it fills a gap you have been working around by hand.
2. **Name `#FAF7F0` as Mub 50.** Zero visual change, and it retires an off-system value.
3. **Skip Grey 50 and the 25 tier entirely.** Below the threshold of vision.
4. **When a neutral surface feels dark, reach for chroma, not lightness.** The measurement backs this, and it is the durable version of the rule.

---

## Do NOT recompute this naively (read before regenerating)

The intuitive shortcut — "100 flattened at 50% over white" (sRGB channel average) — is **wrong for the
neutrals** and will quietly undo the point of the tier. Channel-averaging toward white **strips
chroma**, so:

- **Chromatic families** (Teal, Ocean, Green…) come out ~1 step from these values — close enough that
  a quick "colour at 50% opacity" looks right. This is why teal-at-50% passed by eye.
- **Warm neutrals** collapse. Naive Mub 50 = `#F9F9F7` (≈ achromatic, near-white) — it loses the
  warmth that justifies Mub's existence. The correct **Mub 50 = `#FAF7F0`** holds C\* 3.7.

The values in `tier-50.css` are the source of truth. If you regenerate, use the **CIELAB method**
above (L\* midpoint + hold 50% chroma, warm-neutrals pinned to C\* 3.7), **not** a flatten/opacity.

---

## Applying in Figma (MH colors v2)

Create one paint style per family, named to match the existing convention (`Ocean / Ocean 1300`):
**`{Family} / {Family} 50`**, solid fill = the `tier-50.css` value. 21 styles, **no Grey 50**.

A ready-to-run script is queued at [`apply-50-styles.js`](apply-50-styles.js) — it guards on the file
name, skips any `… 50` style that already exists, and creates the rest. It must run on the **MH colors
v2** file's active tab (cross-file execution times out), so open that file first, then run it.

---

## Caveat worth stating

A 50 tier makes the light end of the ramp finer while the dark end stays compressed — steps 800→1600 already cover only 16–32 points of lightness against 44–66 at the top. This widens that imbalance rather than fixing it. It is still worth doing, because the gap is real and you are already filling it manually. But it is a patch on the light end, not the re-spacing the ramps actually need. See `../aug04-mh-color-reference/` for that.
