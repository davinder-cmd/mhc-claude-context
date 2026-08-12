# MH Colors v2 — Reference

**Source:** [Figma — MH colors v2](https://www.figma.com/design/i1nW5PTL7yU4MYOMgyAJ7c/MH-colors-v2) (`i1nW5PTL7yU4MYOMgyAJ7c`)
**Extracted:** 4 Aug 2026 — 22 families × 16 steps = 352 values
**Status:** Reference. Nothing here is a token yet.

**In this folder:**

| File | What it's for |
|---|---|
| `color-reference.html` | Browsable page — every ramp, contrast measured, defects flagged. Open this first. |
| `PROMPT-BLOCK.md` | Paste-ready block for referencing this system in another chat, plus the Figma working loop. |
| `mh-colors.css` | All 352 values as custom properties, annotated with contrast + band. Pull from it; don't ship it. |
| `mh-colors.json` | Same data as structured tokens, for tooling. |
| `COLOR-REFERENCE.md` | This doc — the rules and the reconciliation. |

Companions: [`../aug05-mh-brand-palette-merge/`](../aug05-mh-brand-palette-merge/MERGE-ANALYSIS.md) — brand↔palette ΔE2000 mapping · [`../aug05-fifty-step-tier/`](../aug05-fifty-step-tier/FIFTY-TIER.md) — a proposed 50 step above each 100.

---

## The short version

This palette is fine as a source of colors and unusable as a system, for four measurable reasons. The practical fix is to stop reading step numbers and start reading contrast bands — which is what the tables below give you. The real fix is a re-spaced 8-family palette, and that's the next piece of work, not this one.

---

## Why it fights you

**1. The step number means nothing across families.** Body text reaches WCAG AA at Coffee 600 but not until Yellow 1600 — ten steps of drift. So no rule of the form "800 is primary, 600 is secondary" can ever hold, and semantic tokens built on step parity will silently fail accessibility in half the families. This is the single biggest reason the system resists you.

**2. Nine of the sixteen steps do almost nothing.** Steps 100→800 span 44–66 points of lightness. Steps 800→1600 span 16–32. Coffee is the worst: 66 points across the top half, 16 across the bottom. When you reach for a darker shade and get something that looks identical, this is why. Coral 800 through 1500 is eight near-identical reds.

**3. Two families reverse.** A step that is perceptually lighter than the one before it. Any ramp, gradient, or hover progression passing through one will visibly kink.

| Family | Broken step | Problem |
|---|---|---|
| Grey | 1500 `#535051` | L\* 34.3 vs 1400's 26.2 — and the only chromatic step in a neutral family |
| Ocean | 1000 `#2473BD` | Byte-identical duplicate of Ocean 800, and L\* 47.4 vs 900's 45.1 |

> **Corrected 5 Aug 2026.** This originally listed four families, adding Violet 1200 and Ember 1100. Those were measured with HSL lightness — `(max+min)/2`, which is not perceptual and rises as a color desaturates. Under CIELAB L\* and relative luminance both are correctly ordered and fully usable. Ember 1100 is in fact the value you want for negative text on a warm surface.

**4. There is no neutral dark anywhere in it.** The graphite ink carrying the current design (`#1A1D21`) has no equivalent in 352 values — the nearest is Mub 1600 at ΔE 9.49, and every other dark stop is chromatic. So the palette can dress the product but cannot supply its primary text color. (Production's warm beige *does* have a match — Mub 100 at ΔE 2.19.)

---

## How to choose: bands, not steps

The one property that behaves consistently across all 22 families is measured contrast. Pick the job first, then look up which step in your family starts that band.

| Band | On white | Use for |
|---|---|---|
| **Wash** | 1.0–1.3:1 | Page and section backgrounds, tinted surfaces |
| **Tint** | 1.3–2:1 | Hairlines, dividers, progress tracks, chart fills |
| **Accent** | 2–3:1 | Decorative fills and illustration only — never text, never icons |
| **UI** | 3–4.5:1 | Icons, focus rings, visible borders, large text ≥24px |
| **Text** | 4.5–7:1 | Body text, links, small labels (WCAG AA) |
| **Ink** | 7:1+ | Primary text, brand fills, high-emphasis (WCAG AAA) |

### Where each band starts

| Family | Wash | Tint | Accent | UI 3:1 | Text 4.5:1 | Ink 7:1 |
|---|---|---|---|---|---|---|
| Coffee | 100 | 200 | 400 | 500 | **600** | 800 |
| Cocoa | 100 | 300 | 500 | 600 | **800** | 1100 |
| Mub | 100 | 300 | 500 | 600 | **800** | 1100 |
| Grey | 100 | 400 | 600 | 700 | **900** | 1200 |
| Honeydew | 100 | 600 | 1000 | 1200 | **1400** | 1600 |
| Lime | 100 | 500 | 800 | 1100 | **1300** | 1500 |
| Green | 100 | 400 | 700 | 900 | **1200** | 1400 |
| Jade | 100 | 400 | 700 | 900 | **1200** | 1400 |
| Teal | 100 | 400 | 700 | 1000 | **1200** | 1400 |
| Turquoise | 100 | 400 | 600 | 800 | **1100** | 1300 |
| Ocean | 100 | 300 | 500 | 600 | **800** | 1200 |
| Blue | 100 | 300 | 500 | 600 | **700** | 900 |
| Indigo | 100 | 200 | 400 | 500 | **600** | 700 |
| Purple | 100 | 200 | 400 | 500 | **600** | 800 |
| Violet | 100 | 200 | 400 | 600 | **700** | 1000 |
| Pink | 100 | 300 | 500 | 600 | **800** | 1200 |
| Coral | 100 | 200 | 400 | 600 | **700** | 1200 |
| Ember | 100 | 300 | 500 | 700 | **1000** | 1400 |
| Orange | 100 | 400 | 600 | 1000 | **1400** | 1600 |
| Mustard | 100 | 400 | 800 | 1300 | **1500** | 1600 |
| Yellow | 100 | 500 | 1100 | 1300 | **1600** | — |
| Lemon | 100 | 900 | 1200 | 1400 | **1600** | — |

A dash means the family never reaches that band. **Yellow and Lemon cannot carry AAA text at any step.**

On the warm beige background (`#FAF7F0`) rather than white, three families lose a step: Teal, Coral and Ember each need one step darker for AA. Everything else holds.

---

## Answering "lighter or darker?"

The rule that falls out of the data:

**Lighter for area, darker for meaning.** The more screen a color covers, the lighter it has to be — Wash and Tint carry surface area. UI, Text and Ink carry meaning in small amounts. A color that appears at both scales needs two separate steps, not one value at reduced opacity, because opacity on a warm background shifts hue and breaks the contrast math you just looked up.

Three corollaries:

- **Warm at 100–400, never above — and use Mub.** Coffee, Cocoa and Mub are backgrounds and hairlines only; from 500 up they read as brown, and brown ink looks like a mistake next to clinical content. Of the three, **Mub** is the one to reach for: its hue sits at 94–97°, matching the shipped beige (93°), while Coffee and Cocoa run pinker at 68–75°. All text and borders come from Grey.
- **Yellow, Lemon, Mustard and Orange never carry text.** Orange needs 1400 to reach AA; Yellow needs 1600. At that point neither reads as the color you picked. Use them as fills, with graphite or white type on top.
- **Semantic color never travels alone.** The shipped success green (`#4FA858`) is 2.97:1 on white and its palette neighbour Green 900 is 3.12:1 — both in the Accent band. Neither can be the only signal that something worked. Pair with text or an icon, every time.

### Lightness distribution, for reference

| Family | 100→800 | 800→1600 | Ratio |
|---|---|---|---|
| Coffee | 66.4 | 15.9 | 4.2× |
| Cocoa | 54.7 | 23.1 | 2.4× |
| Mub | 54.1 | 24.7 | 2.2× |
| Grey | 50.8 | 23.8 | 2.1× |
| Honeydew | 43.7 | 31.8 | 1.4× |
| Lime | 45.1 | 31 | 1.5× |
| Green | 44.5 | 30.6 | 1.5× |
| Jade | 49.2 | 27.3 | 1.8× |
| Teal | 52.7 | 24.3 | 2.2× |
| Turquoise | 51.6 | 25.6 | 2.0× |
| Ocean | 50.8 | 24.7 | 2.1× |
| Blue | 49.2 | 26.1 | 1.9× |
| Indigo | 49.2 | 28 | 1.8× |
| Purple | 57.2 | 22.2 | 2.6× |
| Violet | 55.3 | 20.4 | 2.7× |
| Pink | 47.6 | 25 | 1.9× |
| Coral | 52 | 19.4 | 2.7× |
| Ember | 43.9 | 24.7 | 1.8× |
| Orange | 45.5 | 20.2 | 2.3× |
| Mustard | 45.5 | 20.2 | 2.3× |
| Yellow | 45.5 | 20.2 | 2.3× |
| Lemon | 45.5 | 20.2 | 2.3× |

Ratio is how much more lightness the top half of the ramp covers than the bottom. Anything above 2× means the dark end is compressed and your dark steps will look alike.

---

## Reconciling with production

Current MHC CSS (`outputs/jul17-block-pattern-extraction/mhc-home.css`) against the nearest stop in this palette, measured in **CIEDE2000** and read against the tolerance ladder: ≤1 imperceptible, ≤2 brand-grade, ≤3.5 reads the same, ≤5 visibly different, >5 a different color.

| Production token | Ships as | Nearest stop | Hex | ΔE2000 | Verdict |
|---|---|---|---|---|---|
| `--hairline` | `#E6E3DC` | Mub 300 | `#E2E0DA` | **0.91** | imperceptible |
| `--insight-bg` | `#E8F0FA` | Ocean 100 | `#EAF2FA` | **1.03** | brand-grade |
| `--green` | `#4FA858` | Green 900 | `#52A353` | **1.64** | brand-grade |
| `--brand` | `#1B355C` | Ocean 1500 | `#103459` | **2.07** | reads the same |
| `--blue-icon` | `#3A6FA8` | Ocean 900 | `#226DB5` | **2.07** | reads the same |
| `--bg` | `#FAF7F0` | Mub 100 | `#F3F2EF` | **2.19** | reads the same |
| `--link` | `#2E60A4` | Ocean 1100 | `#1C5C9A` | **2.75** | reads the same |
| `--orange` | `#B5571E` | Mustard 1500 | `#B45300` | **3.21** | reads the same |
| `--surface-tinted` | `#EFE7D6` | Yellow 100 | `#FFF6E1` | **3.43** | reads the same |
| `--teal-dark` | `#1E5A6B` | Turquoise 1300 | `#125C77` | **3.87** | visibly different |
| `--progress-bg` | `#DDD7C8` | Mub 400 | `#CDC9BF` | **3.94** | visibly different |
| `--ink-soft` | `#5C5F66` | Grey 1100 | `#5F5F5F` | **4.02** | visibly different |
| `--insight-border` | `#B5C8E0` | Ocean 400 | `#A9CBED` | **4.3** | visibly different |
| `--ink-placeholder` | `#9A9EA6` | Grey 600 | `#A6A5A5` | **4.92** | visibly different |
| `--red` | `#C8272E` | Ember 1100 | `#CA3B27` | **5.53** | different color |
| `--ink` | `#1A1D21` | Mub 1600 | `#2E2A22` | **9.49** | different color |
| `--progress-fill` | `#4A4A60` | Grey 1500 | `#535051` | **10.51** | different color |

**Read this as:** the palette agrees with production far more than it first appears — **9 of 17 tokens land within ΔE 3.5**, and `--hairline` is a ΔE 0.91 dead-on match to Mub 300. Two things genuinely have no equivalent: the **neutral dark ink** (nearest is Mub 1600 at ΔE 9.49 — there is no achromatic dark anywhere in 352 values) and `--progress-fill` (nearest is Grey 1500, the broken step). The shipped beige *does* have an equivalent — Mub 100 at ΔE 2.19.

> **Corrected 5 Aug 2026.** The first version of this table used a weighted-RGB distance, which misranked 5 of the 17 rows and systematically overstated the disagreement. Recomputed with CIEDE2000 (verified against the Sharma et al. reference vectors). The headline changed: it is not "13 of 17 have no match" — roughly half match well. See [`../aug05-mh-brand-palette-merge/`](../aug05-mh-brand-palette-merge/MERGE-ANALYSIS.md).

---

## The subset worth keeping

Fifteen values out of 352. Everything MHC shipped in the last six months fits inside this, and each value clears the band it's used in.

**Surface — 60%**

| Role | Value | On white | Band |
|---|---|---|---|
| Page | `#FFFFFF` / Grey 100 `#F8F8F9` | 1.06:1 | wash |
| Warm surface | Mub 100 `#F3F2EF` | 1.12:1 | wash |
| Tinted surface | Mub 200 `#EBE9E4` | 1.21:1 | wash |
| Hairline | Mub 300 `#E2E0DA` | 1.32:1 | tint |

**Ink — 30%**

| Role | Value | On white | Band |
|---|---|---|---|
| Primary text | Grey 1600 `#393C3C` | 11.14:1 | ink |
| Strong text | Grey 1300 `#494949` | 9.00:1 | ink |
| Secondary text | Grey 1100 `#5F5F5F` | 6.39:1 | text |
| Placeholder / disabled | Grey 800 `#777777` | 4.48:1 | ui |

Mub replaces Coffee here as of 5 Aug — it is both the closer match to every shipped warm neutral under ΔE2000 and the better hue match to the shipped beige. See [`../aug05-mh-brand-palette-merge/`](../aug05-mh-brand-palette-merge/MERGE-ANALYSIS.md).

**Brand and semantic — 10%**

| Role | Value | On white | Band |
|---|---|---|---|
| Brand | Ocean 1500 `#103459` | 12.67:1 | ink |
| Link / interactive | Ocean 1100 `#1C5C9A` | 6.89:1 | text |
| Positive | Green 1200 `#3D7A3E` | 5.18:1 | text |
| Negative | Coral 1100 `#BB0000` | 6.75:1 | text |
| Notice | Mustard 1500 `#B45300` | 5.03:1 | text |
| Informative | Turquoise 1300 `#125C77` | 7.44:1 | ink |

Two things changed from production. The semantics moved 2–4 steps darker to clear AA — the shipped green (`#4FA858`, 2.97:1) was failing badly, and its palette neighbour Green 900 is barely better at 3.12:1. And placeholder text moved from Grey 600 (2.46:1, decorative band) to Grey 800 (4.48:1) — still short of 4.5:1, but at that point you're trading contrast against the visual meaning of "inactive," so treat Grey 800 as the floor and don't put anything essential in it.

---

## Full palette

Every family, every step, with contrast on white and on the warm beige. ⚠️ marks a defective step.

### Warm neutrals

Backgrounds only at 100–300. 400+ reads as brown ink.

**Coffee** — UI from 500 · AA text from 600 · AAA from 800

| Step | Hex | On white | On beige | Band |
|---|---|---|---|---|
| 100 | `#F0EDEA` | 1.17:1 | 1.09:1 | wash |
| 200 | `#E7E1DC` | 1.3:1 | 1.21:1 | wash |
| 300 | `#DDD4CD` | 1.46:1 | 1.37:1 | tint |
| 400 | `#C3B5A9` | 2:1 | 1.87:1 | tint |
| 500 | `#A68F7E` | 3.06:1 | 2.86:1 | ui |
| 600 | `#886A53` | 4.96:1 | 4.64:1 | text |
| 700 | `#75553C` | 6.73:1 | 6.29:1 | text |
| 800 | `#624025` | 9.21:1 | 8.61:1 | ink |
| 900 | `#5D3D23` | 9.73:1 | 9.1:1 | ink |
| 1000 | `#573921` | 10.43:1 | 9.75:1 | ink |
| 1100 | `#4E331D` | 11.57:1 | 10.81:1 | ink |
| 1200 | `#442D19` | 12.84:1 | 12:1 | ink |
| 1300 | `#3B2716` | 14.12:1 | 13.19:1 | ink |
| 1400 | `#322113` | 15.41:1 | 14.4:1 | ink |
| 1500 | `#2D1D10` | 16.22:1 | 15.16:1 | ink |
| 1600 | `#261A10` | 16.97:1 | 15.86:1 | ink |

**Cocoa** — UI from 600 · AA text from 800 · AAA from 1100

| Step | Hex | On white | On beige | Band |
|---|---|---|---|---|
| 100 | `#F6F0EB` | 1.13:1 | 1.06:1 | wash |
| 200 | `#F0E7DE` | 1.22:1 | 1.14:1 | wash |
| 300 | `#EADDD0` | 1.33:1 | 1.25:1 | tint |
| 400 | `#DBC3AF` | 1.69:1 | 1.58:1 | tint |
| 500 | `#C9A686` | 2.26:1 | 2.11:1 | accent |
| 600 | `#B7885E` | 3.14:1 | 2.93:1 | ui |
| 700 | `#A87548` | 3.96:1 | 3.7:1 | ui |
| 800 | `#986232` | 5.09:1 | 4.75:1 | text |
| 900 | `#905D2F` | 5.54:1 | 5.18:1 | text |
| 1000 | `#88572C` | 6.09:1 | 5.69:1 | text |
| 1100 | `#7A4E28` | 7.12:1 | 6.66:1 | ink |
| 1200 | `#6B4523` | 8.4:1 | 7.85:1 | ink |
| 1300 | `#5D3C1E` | 9.86:1 | 9.21:1 | ink |
| 1400 | `#4F3319` | 11.54:1 | 10.78:1 | ink |
| 1500 | `#452D16` | 12.81:1 | 11.97:1 | ink |
| 1600 | `#3C2A18` | 13.67:1 | 12.77:1 | ink |

**Mub** — UI from 600 · AA text from 800 · AAA from 1100

| Step | Hex | On white | On beige | Band |
|---|---|---|---|---|
| 100 | `#F3F2EF` | 1.12:1 | 1.05:1 | wash |
| 200 | `#EBE9E4` | 1.21:1 | 1.13:1 | wash |
| 300 | `#E2E0DA` | 1.32:1 | 1.23:1 | tint |
| 400 | `#CDC9BF` | 1.65:1 | 1.55:1 | tint |
| 500 | `#B3AD9E` | 2.24:1 | 2.09:1 | accent |
| 600 | `#9A927E` | 3.09:1 | 2.89:1 | ui |
| 700 | `#89806B` | 3.92:1 | 3.66:1 | ui |
| 800 | `#776E57` | 5.06:1 | 4.73:1 | text |
| 900 | `#716852` | 5.52:1 | 5.16:1 | text |
| 1000 | `#6A624D` | 6.06:1 | 5.66:1 | text |
| 1100 | `#5F5845` | 7.07:1 | 6.61:1 | ink |
| 1200 | `#544D3D` | 8.38:1 | 7.83:1 | ink |
| 1300 | `#494335` | 9.82:1 | 9.18:1 | ink |
| 1400 | `#3E392D` | 11.49:1 | 10.74:1 | ink |
| 1500 | `#373227` | 12.74:1 | 11.91:1 | ink |
| 1600 | `#2E2A22` | 14.28:1 | 13.35:1 | ink |


### Cool neutral

All MHC ink comes from here. 1500 is out of order — skip it.

**Grey** — UI from 700 · AA text from 900 · AAA from 1200

| Step | Hex | On white | On beige | Band |
|---|---|---|---|---|
| 100 | `#F8F8F9` | 1.06:1 | 1.01:1 | wash |
| 200 | `#F1F1F1` | 1.13:1 | 1.06:1 | wash |
| 300 | `#E5E5E4` | 1.26:1 | 1.18:1 | wash |
| 400 | `#D6D6D5` | 1.45:1 | 1.36:1 | tint |
| 500 | `#C0C0C0` | 1.82:1 | 1.7:1 | tint |
| 600 | `#A6A5A5` | 2.46:1 | 2.3:1 | accent |
| 700 | `#898989` | 3.5:1 | 3.27:1 | ui |
| 800 | `#777777` | 4.48:1 | 4.19:1 | ui |
| 900 | `#717171` | 4.88:1 | 4.56:1 | text |
| 1000 | `#6A6A6A` | 5.41:1 | 5.06:1 | text |
| 1100 | `#5F5F5F` | 6.39:1 | 5.97:1 | text |
| 1200 | `#545454` | 7.57:1 | 7.08:1 | ink |
| 1300 | `#494949` | 9:1 | 8.41:1 | ink |
| 1400 | `#3E3E3E` | 10.7:1 | 10:1 | ink |
| 1500 ⚠️ | `#535051` | 7.97:1 | 7.45:1 | ink — **Lighter than 1400 — ramp reverses** |
| 1600 | `#393C3C` | 11.14:1 | 10.41:1 | ink |


### Yellow-greens

Light-starved. No AAA text available in Honeydew.

**Honeydew** — UI from 1200 · AA text from 1400 · AAA from 1600

| Step | Hex | On white | On beige | Band |
|---|---|---|---|---|
| 100 | `#FBFCEC` | 1.04:1 | 1.03:1 | wash |
| 200 | `#F8FADF` | 1.06:1 | 1.01:1 | wash |
| 300 | `#F5F8D2` | 1.09:1 | 1.02:1 | wash |
| 400 | `#EDF3B2` | 1.16:1 | 1.09:1 | wash |
| 500 | `#E4ED8B` | 1.25:1 | 1.17:1 | wash |
| 600 | `#DBE765` | 1.34:1 | 1.26:1 | tint |
| 700 | `#CFDC4F` | 1.5:1 | 1.4:1 | tint |
| 800 | `#C3D039` | 1.69:1 | 1.58:1 | tint |
| 900 | `#B8C436` | 1.91:1 | 1.79:1 | tint |
| 1000 | `#ADB933` | 2.15:1 | 2.01:1 | accent |
| 1100 | `#9BA52E` | 2.69:1 | 2.51:1 | accent |
| 1200 | `#899128` | 3.42:1 | 3.19:1 | ui |
| 1300 | `#777E23` | 4.38:1 | 4.1:1 | ui |
| 1400 | `#656B1D` | 5.72:1 | 5.34:1 | text |
| 1500 | `#595E1A` | 6.91:1 | 6.45:1 | text |
| 1600 | `#494C1B` | 9:1 | 8.41:1 | ink |

**Lime** — UI from 1100 · AA text from 1300 · AAA from 1500

| Step | Hex | On white | On beige | Band |
|---|---|---|---|---|
| 100 | `#F3FBED` | 1.06:1 | 1.01:1 | wash |
| 200 | `#EBF8E1` | 1.1:1 | 1.03:1 | wash |
| 300 | `#E3F5D4` | 1.15:1 | 1.07:1 | wash |
| 400 | `#CFEDB5` | 1.28:1 | 1.19:1 | wash |
| 500 | `#B6E490` | 1.45:1 | 1.35:1 | tint |
| 600 | `#9EDB6B` | 1.64:1 | 1.53:1 | tint |
| 700 | `#8ECF56` | 1.87:1 | 1.75:1 | tint |
| 800 | `#7DC240` | 2.17:1 | 2.03:1 | accent |
| 900 | `#76B73D` | 2.44:1 | 2.28:1 | accent |
| 1000 | `#6EAC3A` | 2.75:1 | 2.57:1 | accent |
| 1100 | `#639A34` | 3.39:1 | 3.16:1 | ui |
| 1200 | `#57882E` | 4.23:1 | 3.95:1 | ui |
| 1300 | `#4C7628` | 5.34:1 | 5:1 | text |
| 1400 | `#406422` | 6.85:1 | 6.41:1 | text |
| 1500 | `#39581E` | 8.11:1 | 7.58:1 | ink |
| 1600 | `#30471D` | 10.27:1 | 9.6:1 | ink |


### Greens

Green = positive semantic. Jade unused at MHC.

**Green** — UI from 900 · AA text from 1200 · AAA from 1400

| Step | Hex | On white | On beige | Band |
|---|---|---|---|---|
| 100 | `#EFF8EF` | 1.09:1 | 1.01:1 | wash |
| 200 | `#E4F3E4` | 1.15:1 | 1.08:1 | wash |
| 300 | `#DAEFDA` | 1.21:1 | 1.13:1 | wash |
| 400 | `#BEE4BF` | 1.4:1 | 1.31:1 | tint |
| 500 | `#9ED79F` | 1.66:1 | 1.55:1 | tint |
| 600 | `#7DC97F` | 1.99:1 | 1.86:1 | tint |
| 700 | `#6ABB6B` | 2.35:1 | 2.2:1 | accent |
| 800 | `#57AD57` | 2.79:1 | 2.61:1 | accent |
| 900 | `#52A353` | 3.12:1 | 2.92:1 | ui |
| 1000 | `#4C9A4E` | 3.48:1 | 3.25:1 | ui |
| 1100 | `#458A46` | 4.22:1 | 3.94:1 | ui |
| 1200 | `#3D7A3E` | 5.18:1 | 4.84:1 | text |
| 1300 | `#356A36` | 6.43:1 | 6.01:1 | text |
| 1400 | `#2C5A2E` | 8.05:1 | 7.52:1 | ink |
| 1500 | `#274F28` | 9.39:1 | 8.78:1 | ink |
| 1600 | `#254325` | 11:1 | 10.29:1 | ink |

**Jade** — UI from 900 · AA text from 1200 · AAA from 1400

| Step | Hex | On white | On beige | Band |
|---|---|---|---|---|
| 100 | `#ECF9F5` | 1.08:1 | 1.01:1 | wash |
| 200 | `#DFF5EE` | 1.14:1 | 1.06:1 | wash |
| 300 | `#D2F1E7` | 1.2:1 | 1.12:1 | wash |
| 400 | `#B1E7D6` | 1.38:1 | 1.29:1 | tint |
| 500 | `#89DAC1` | 1.63:1 | 1.53:1 | tint |
| 600 | `#62CEAD` | 1.92:1 | 1.79:1 | tint |
| 700 | `#4DC19C` | 2.23:1 | 2.08:1 | accent |
| 800 | `#37B38B` | 2.63:1 | 2.46:1 | accent |
| 900 | `#2FA782` | 3.01:1 | 2.82:1 | ui |
| 1000 | `#309F7D` | 3.29:1 | 3.08:1 | ui |
| 1100 | `#2B8F70` | 3.99:1 | 3.73:1 | ui |
| 1200 | `#267E63` | 4.94:1 | 4.62:1 | text |
| 1300 | `#216E56` | 6.12:1 | 5.72:1 | text |
| 1400 | `#1B5D48` | 7.76:1 | 7.25:1 | ink |
| 1500 | `#185240` | 9.05:1 | 8.46:1 | ink |
| 1600 | `#1A4538` | 10.76:1 | 10.05:1 | ink |


### Cyans

Turquoise 1300 is the closest match to MHC teal-dark.

**Teal** — UI from 1000 · AA text from 1200 · AAA from 1400

| Step | Hex | On white | On beige | Band |
|---|---|---|---|---|
| 100 | `#E8FAFA` | 1.08:1 | 1.01:1 | wash |
| 200 | `#D4F1F2` | 1.19:1 | 1.11:1 | wash |
| 300 | `#CAF2F4` | 1.2:1 | 1.12:1 | wash |
| 400 | `#A3E9EC` | 1.36:1 | 1.27:1 | tint |
| 500 | `#75DEE3` | 1.58:1 | 1.47:1 | tint |
| 600 | `#47D3D9` | 1.81:1 | 1.69:1 | tint |
| 700 | `#2FC5CC` | 2.1:1 | 1.97:1 | accent |
| 800 | `#17B8BE` | 2.43:1 | 2.27:1 | accent |
| 900 | `#15AEB4` | 2.71:1 | 2.53:1 | accent |
| 1000 | `#13A4AB` | 3.03:1 | 2.83:1 | ui |
| 1100 | `#11939A` | 3.71:1 | 3.47:1 | ui |
| 1200 | `#108188` | 4.65:1 | 4.34:1 | text |
| 1300 | `#0E7077` | 5.83:1 | 5.45:1 | text |
| 1400 | `#0B5F65` | 7.4:1 | 6.91:1 | ink |
| 1500 | `#0A545A` | 8.65:1 | 8.08:1 | ink |
| 1600 | `#0F474A` | 10.39:1 | 9.71:1 | ink |

**Turquoise** — UI from 800 · AA text from 1100 · AAA from 1300

| Step | Hex | On white | On beige | Band |
|---|---|---|---|---|
| 100 | `#E9F6FA` | 1.1:1 | 1.03:1 | wash |
| 200 | `#DAF0F7` | 1.18:1 | 1.1:1 | wash |
| 300 | `#CBE9F4` | 1.27:1 | 1.19:1 | wash |
| 400 | `#A6DAEC` | 1.52:1 | 1.42:1 | tint |
| 500 | `#79C7E3` | 1.89:1 | 1.77:1 | tint |
| 600 | `#4DB5D9` | 2.35:1 | 2.2:1 | accent |
| 700 | `#35A6CC` | 2.81:1 | 2.62:1 | accent |
| 800 | `#1E96BE` | 3.41:1 | 3.19:1 | ui |
| 900 | `#1C8EB4` | 3.77:1 | 3.52:1 | ui |
| 1000 | `#1A85AB` | 4.21:1 | 3.94:1 | ui |
| 1100 | `#17779A` | 5.07:1 | 4.74:1 | text |
| 1200 | `#146988` | 6.17:1 | 5.76:1 | text |
| 1300 | `#125C77` | 7.44:1 | 6.95:1 | ink |
| 1400 | `#0F4E65` | 9.14:1 | 8.54:1 | ink |
| 1500 | `#0D4559` | 10.43:1 | 9.75:1 | ink |
| 1600 | `#103B49` | 12.04:1 | 11.26:1 | ink |


### Blues

Ocean is the MHC brand family. Blue and Indigo go purple — avoid.

**Ocean** — UI from 600 · AA text from 800 · AAA from 1200

| Step | Hex | On white | On beige | Band |
|---|---|---|---|---|
| 100 | `#EAF2FA` | 1.13:1 | 1.06:1 | wash |
| 200 | `#DCEAF7` | 1.22:1 | 1.14:1 | wash |
| 300 | `#CDE1F4` | 1.34:1 | 1.25:1 | tint |
| 400 | `#A9CBED` | 1.69:1 | 1.58:1 | tint |
| 500 | `#7DB1E3` | 2.27:1 | 2.12:1 | accent |
| 600 | `#5297DA` | 3.09:1 | 2.89:1 | ui |
| 700 | `#3B85CC` | 3.88:1 | 3.63:1 | ui |
| 800 | `#2473BD` | 4.93:1 | 4.61:1 | text |
| 900 | `#226DB5` | 5.35:1 | 5:1 | text |
| 1000 ⚠️ | `#2473BD` | 4.93:1 | 4.61:1 | text — **Lighter than 900 — ramp reverses** |
| 1100 | `#1C5C9A` | 6.89:1 | 6.44:1 | text |
| 1200 | `#195188` | 8.16:1 | 7.63:1 | ink |
| 1300 | `#164677` | 9.65:1 | 9.02:1 | ink |
| 1400 | `#133B65` | 11.41:1 | 10.66:1 | ink |
| 1500 | `#103459` | 12.67:1 | 11.84:1 | ink |
| 1600 | `#16314D` | 13.29:1 | 12.42:1 | ink |

**Blue** — UI from 600 · AA text from 700 · AAA from 900

| Step | Hex | On white | On beige | Band |
|---|---|---|---|---|
| 100 | `#EBEFFA` | 1.15:1 | 1.07:1 | wash |
| 200 | `#DDE3F7` | 1.28:1 | 1.2:1 | wash |
| 300 | `#CFD8F4` | 1.42:1 | 1.33:1 | tint |
| 400 | `#ABBCED` | 1.88:1 | 1.76:1 | tint |
| 500 | `#829AE3` | 2.73:1 | 2.56:1 | accent |
| 600 | `#5879DA` | 4.07:1 | 3.8:1 | ui |
| 700 | `#4265CC` | 5.3:1 | 4.95:1 | text |
| 800 | `#2C51BE` | 6.94:1 | 6.48:1 | text |
| 900 | `#294CB5` | 7.51:1 | 7.02:1 | ink |
| 1000 | `#2647AC` | 8.14:1 | 7.61:1 | ink |
| 1100 | `#223F9A` | 9.35:1 | 8.74:1 | ink |
| 1200 | `#1E3788` | 10.73:1 | 10.03:1 | ink |
| 1300 | `#1A3177` | 12:1 | 11.22:1 | ink |
| 1400 | `#162A65` | 13.52:1 | 12.64:1 | ink |
| 1500 | `#132559` | 14.62:1 | 13.66:1 | ink |
| 1600 | `#18264D` | 14.75:1 | 13.79:1 | ink |

**Indigo** — UI from 500 · AA text from 600 · AAA from 700

| Step | Hex | On white | On beige | Band |
|---|---|---|---|---|
| 100 | `#EDE9FA` | 1.19:1 | 1.11:1 | wash |
| 200 | `#E1DBF6` | 1.34:1 | 1.25:1 | tint |
| 300 | `#D4CCF3` | 1.53:1 | 1.43:1 | tint |
| 400 | `#B4A7EB` | 2.17:1 | 2.03:1 | accent |
| 500 | `#8F7BE0` | 3.46:1 | 3.23:1 | ui |
| 600 | `#694FD6` | 5.69:1 | 5.32:1 | text |
| 700 | `#5438C8` | 7.56:1 | 7.07:1 | ink |
| 800 | `#482BBD` | 8.91:1 | 8.33:1 | ink |
| 900 | `#3B1EB1` | 10.47:1 | 9.78:1 | ink |
| 1000 | `#371DA8` | 11.03:1 | 10.31:1 | ink |
| 1100 | `#321A97` | 12.14:1 | 11.34:1 | ink |
| 1200 | `#2C1685` | 13.46:1 | 12.58:1 | ink |
| 1300 | `#261474` | 14.64:1 | 13.68:1 | ink |
| 1400 | `#201163` | 15.89:1 | 14.85:1 | ink |
| 1500 | `#1C0F58` | 16.68:1 | 15.59:1 | ink |
| 1600 | `#1B1247` | 17.16:1 | 16.03:1 | ink |


### Purples

Unused at MHC.

**Purple** — UI from 500 · AA text from 600 · AAA from 800

| Step | Hex | On white | On beige | Band |
|---|---|---|---|---|
| 100 | `#F3E7F9` | 1.19:1 | 1.11:1 | wash |
| 200 | `#ECD7F5` | 1.35:1 | 1.26:1 | tint |
| 300 | `#E4C7F1` | 1.53:1 | 1.43:1 | tint |
| 400 | `#D09FE6` | 2.15:1 | 2.01:1 | accent |
| 500 | `#B86EDA` | 3.34:1 | 3.12:1 | ui |
| 600 | `#A13ECD` | 5.14:1 | 4.8:1 | text |
| 700 | `#8D26B9` | 6.75:1 | 6.31:1 | text |
| 800 | `#820DAF` | 8:1 | 7.47:1 | ink |
| 900 | `#7A0DA6` | 8.62:1 | 8.06:1 | ink |
| 1000 | `#720C9D` | 9.31:1 | 8.7:1 | ink |
| 1100 | `#670B8C` | 10.48:1 | 9.8:1 | ink |
| 1200 | `#5C097A` | 11.83:1 | 11.06:1 | ink |
| 1300 | `#510869` | 13.22:1 | 12.36:1 | ink |
| 1400 | `#460658` | 14.71:1 | 13.75:1 | ink |
| 1500 | `#3F054C` | 15.7:1 | 14.68:1 | ink |
| 1600 | `#360B40` | 16.42:1 | 15.35:1 | ink |

**Violet** — UI from 600 · AA text from 700 · AAA from 1000

| Step | Hex | On white | On beige | Band |
|---|---|---|---|---|
| 100 | `#F9E8F5` | 1.17:1 | 1.1:1 | wash |
| 200 | `#F5D8EE` | 1.32:1 | 1.23:1 | tint |
| 300 | `#F1C8E6` | 1.48:1 | 1.39:1 | tint |
| 400 | `#E79FD5` | 2.04:1 | 1.9:1 | accent |
| 500 | `#DA70BF` | 2.98:1 | 2.78:1 | accent |
| 600 | `#CE40AA` | 4.25:1 | 3.97:1 | ui |
| 700 | `#C32899` | 5.14:1 | 4.81:1 | text |
| 800 | `#B80F87` | 6.08:1 | 5.68:1 | text |
| 900 | `#AE0E7F` | 6.63:1 | 6.19:1 | text |
| 1000 | `#A40D77` | 7.24:1 | 6.76:1 | ink |
| 1100 | `#950C69` | 8.29:1 | 7.74:1 | ink |
| 1200 | `#861D5C` | 8.96:1 | 8.37:1 | ink |
| 1300 | `#79094D` | 10.72:1 | 10.02:1 | ink |
| 1400 | `#6B083F` | 12.13:1 | 11.33:1 | ink |
| 1500 | `#620736` | 13.1:1 | 12.24:1 | ink |
| 1600 | `#510E30` | 14.43:1 | 13.49:1 | ink |


### Reds & pinks

Coral 800–1500 is eight near-identical reds.

**Pink** — UI from 600 · AA text from 800 · AAA from 1200

| Step | Hex | On white | On beige | Band |
|---|---|---|---|---|
| 100 | `#FCE9EF` | 1.16:1 | 1.09:1 | wash |
| 200 | `#FBDAE4` | 1.29:1 | 1.21:1 | wash |
| 300 | `#F9CADA` | 1.45:1 | 1.35:1 | tint |
| 400 | `#F4A3BF` | 1.94:1 | 1.81:1 | tint |
| 500 | `#EF769E` | 2.71:1 | 2.53:1 | accent |
| 600 | `#E9487E` | 3.69:1 | 3.45:1 | ui |
| 700 | `#E1316A` | 4.33:1 | 4.05:1 | ui |
| 800 | `#D91955` | 4.98:1 | 4.65:1 | text |
| 900 | `#CF1750` | 5.4:1 | 5.04:1 | text |
| 1000 | `#C5154A` | 5.87:1 | 5.48:1 | text |
| 1100 | `#B51241` | 6.71:1 | 6.28:1 | text |
| 1200 | `#A51037` | 7.69:1 | 7.19:1 | ink |
| 1300 | `#970E2D` | 8.69:1 | 8.12:1 | ink |
| 1400 | `#880B23` | 9.91:1 | 9.26:1 | ink |
| 1500 | `#7E0A1D` | 10.78:1 | 10.07:1 | ink |
| 1600 | `#63101D` | 12.94:1 | 12.1:1 | ink |

**Coral** — UI from 600 · AA text from 700 · AAA from 1200

| Step | Hex | On white | On beige | Band |
|---|---|---|---|---|
| 100 | `#FDE6E6` | 1.19:1 | 1.11:1 | wash |
| 200 | `#FBD4D4` | 1.36:1 | 1.27:1 | tint |
| 300 | `#F9C4C4` | 1.53:1 | 1.43:1 | tint |
| 400 | `#F59999` | 2.12:1 | 1.98:1 | accent |
| 500 | `#F06D6D` | 2.95:1 | 2.76:1 | accent |
| 600 | `#EA4444` | 3.88:1 | 3.63:1 | ui |
| 700 | `#E31A1A` | 4.74:1 | 4.43:1 | text |
| 800 | `#DA0000` | 5.27:1 | 4.93:1 | text |
| 900 | `#D20000` | 5.61:1 | 5.25:1 | text |
| 1000 | `#C90000` | 6.03:1 | 5.63:1 | text |
| 1100 | `#BB0000` | 6.75:1 | 6.31:1 | text |
| 1200 | `#AC0000` | 7.62:1 | 7.13:1 | ink |
| 1300 | `#9F0000` | 8.49:1 | 7.93:1 | ink |
| 1400 | `#910000` | 9.53:1 | 8.91:1 | ink |
| 1500 | `#880000` | 10.26:1 | 9.59:1 | ink |
| 1600 | `#6D0A0A` | 12.37:1 | 11.56:1 | ink |

**Ember** — UI from 700 · AA text from 1000 · AAA from 1400

| Step | Hex | On white | On beige | Band |
|---|---|---|---|---|
| 100 | `#FEEEE8` | 1.13:1 | 1.05:1 | wash |
| 200 | `#F8DDD3` | 1.29:1 | 1.21:1 | wash |
| 300 | `#FCD6C8` | 1.35:1 | 1.26:1 | tint |
| 400 | `#FAB8A0` | 1.69:1 | 1.58:1 | tint |
| 500 | `#F89570` | 2.2:1 | 2.06:1 | accent |
| 600 | `#F57141` | 2.87:1 | 2.68:1 | accent |
| 700 | `#EF5D28` | 3.35:1 | 3.13:1 | ui |
| 800 | `#E7531F` | 3.71:1 | 3.47:1 | ui |
| 900 | `#DF4916` | 4.12:1 | 3.85:1 | ui |
| 1000 | `#D73F0D` | 4.56:1 | 4.26:1 | text |
| 1100 | `#CA3B27` | 5.04:1 | 4.71:1 | text |
| 1200 | `#BE3009` | 5.81:1 | 5.43:1 | text |
| 1300 | `#B12907` | 6.58:1 | 6.15:1 | text |
| 1400 | `#A42105` | 7.5:1 | 7.01:1 | ink |
| 1500 | `#9B1C04` | 8.2:1 | 7.66:1 | ink |
| 1600 | `#7A1F0E` | 10.35:1 | 9.67:1 | ink |


### Oranges & yellows

Never for text. Yellow and Lemon cannot reach AAA at any step.

**Orange** — UI from 1000 · AA text from 1400 · AAA from 1600

| Step | Hex | On white | On beige | Band |
|---|---|---|---|---|
| 100 | `#FFEDE1` | 1.14:1 | 1.06:1 | wash |
| 200 | `#FFE5D0` | 1.21:1 | 1.13:1 | wash |
| 300 | `#FFDCBF` | 1.29:1 | 1.21:1 | wash |
| 400 | `#FFC694` | 1.53:1 | 1.43:1 | tint |
| 500 | `#FFAD66` | 1.84:1 | 1.72:1 | tint |
| 600 | `#FF9333` | 2.22:1 | 2.07:1 | accent |
| 700 | `#F9841A` | 2.52:1 | 2.35:1 | accent |
| 800 | `#F87900` | 2.72:1 | 2.54:1 | accent |
| 900 | `#F57400` | 2.85:1 | 2.66:1 | accent |
| 1000 | `#ED6C00` | 3.11:1 | 2.91:1 | ui |
| 1100 | `#E86600` | 3.32:1 | 3.1:1 | ui |
| 1200 | `#DF5D00` | 3.68:1 | 3.44:1 | ui |
| 1300 | `#D15200` | 4.27:1 | 3.99:1 | ui |
| 1400 | `#C34600` | 5:1 | 4.68:1 | text |
| 1500 | `#B43C00` | 5.85:1 | 5.47:1 | text |
| 1600 | `#87330A` | 8.37:1 | 7.83:1 | ink |

**Mustard** — UI from 1300 · AA text from 1500 · AAA from 1600

| Step | Hex | On white | On beige | Band |
|---|---|---|---|---|
| 100 | `#FFF2E1` | 1.1:1 | 1.03:1 | wash |
| 200 | `#FFEDD0` | 1.15:1 | 1.07:1 | wash |
| 300 | `#FFE7BF` | 1.2:1 | 1.13:1 | wash |
| 400 | `#FFDA94` | 1.34:1 | 1.25:1 | tint |
| 500 | `#FFC966` | 1.52:1 | 1.42:1 | tint |
| 600 | `#FFB933` | 1.72:1 | 1.6:1 | tint |
| 700 | `#F9AE1A` | 1.89:1 | 1.77:1 | tint |
| 800 | `#F8A200` | 2.07:1 | 1.93:1 | accent |
| 900 | `#F59C00` | 2.18:1 | 2.04:1 | accent |
| 1000 | `#F19500` | 2.32:1 | 2.17:1 | accent |
| 1100 | `#E88800` | 2.64:1 | 2.47:1 | accent |
| 1200 | `#DF8000` | 2.91:1 | 2.72:1 | accent |
| 1300 | `#D17100` | 3.46:1 | 3.23:1 | ui |
| 1400 | `#C36100` | 4.17:1 | 3.9:1 | ui |
| 1500 | `#B45300` | 5.03:1 | 4.7:1 | text |
| 1600 | `#87440A` | 7.34:1 | 6.86:1 | ink |

**Yellow** — UI from 1300 · AA text from 1600 · AAA from never

| Step | Hex | On white | On beige | Band |
|---|---|---|---|---|
| 100 | `#FFF6E1` | 1.08:1 | 1.01:1 | wash |
| 200 | `#FFF3D0` | 1.11:1 | 1.03:1 | wash |
| 300 | `#FFF0BF` | 1.14:1 | 1.06:1 | wash |
| 400 | `#FFE687` | 1.24:1 | 1.16:1 | wash |
| 500 | `#FFDF66` | 1.31:1 | 1.23:1 | tint |
| 600 | `#FFD633` | 1.41:1 | 1.32:1 | tint |
| 700 | `#F9CD1A` | 1.52:1 | 1.42:1 | tint |
| 800 | `#F8C400` | 1.63:1 | 1.52:1 | tint |
| 900 | `#F5BD00` | 1.73:1 | 1.61:1 | tint |
| 1000 | `#F1B500` | 1.85:1 | 1.73:1 | tint |
| 1100 | `#E8A600` | 2.12:1 | 1.99:1 | accent |
| 1200 | `#DF9600` | 2.47:1 | 2.31:1 | accent |
| 1300 | `#D18300` | 3.02:1 | 2.82:1 | ui |
| 1400 | `#C37500` | 3.58:1 | 3.35:1 | ui |
| 1500 | `#B46500` | 4.37:1 | 4.09:1 | ui |
| 1600 | `#87500A` | 6.6:1 | 6.17:1 | text |

**Lemon** — UI from 1400 · AA text from 1600 · AAA from never

| Step | Hex | On white | On beige | Band |
|---|---|---|---|---|
| 100 | `#FFF9E1` | 1.06:1 | 1.01:1 | wash |
| 200 | `#FFF9D0` | 1.07:1 | 1:1 | wash |
| 300 | `#FFF8BF` | 1.08:1 | 1.01:1 | wash |
| 400 | `#FFF694` | 1.11:1 | 1.04:1 | wash |
| 500 | `#FFF566` | 1.13:1 | 1.06:1 | wash |
| 600 | `#FFF333` | 1.16:1 | 1.08:1 | wash |
| 700 | `#F9ED1A` | 1.22:1 | 1.14:1 | wash |
| 800 | `#F8E700` | 1.28:1 | 1.2:1 | wash |
| 900 | `#F5DE00` | 1.37:1 | 1.28:1 | tint |
| 1000 | `#F1D500` | 1.47:1 | 1.38:1 | tint |
| 1100 | `#E8C300` | 1.72:1 | 1.6:1 | tint |
| 1200 | `#DFB100` | 2.01:1 | 1.88:1 | accent |
| 1300 | `#D19B00` | 2.5:1 | 2.34:1 | accent |
| 1400 | `#C38400` | 3.17:1 | 2.96:1 | ui |
| 1500 | `#B47600` | 3.8:1 | 3.55:1 | ui |
| 1600 | `#875C0A` | 5.89:1 | 5.5:1 | text |


---

## What this doesn't do

This is the map, not the system. When the token work starts, in this order:

1. **Cut 22 families to 8.** Grey, Coffee, Ocean, Green, Coral, Mustard, Turquoise, plus one categorical set for data visualisation. Jade, Blue, Indigo, Purple, Violet, Pink, Honeydew, Lime, Teal, Cocoa, Mub, Ember, Orange, Yellow and Lemon are optionality nobody asked for, and each one is a chance for two designers to pick differently.
2. **Re-space the ramps on even perceptual lightness.** This is what makes step numbers mean the same thing in every family, lands the AA line in one place, and makes role-based tokens possible at all. It is the load-bearing fix — everything else is cleanup.
3. **Name by role, not hue.** `surface` / `ink` / `brand` / `positive` / `negative` / `notice` / `informative`, each pointing at a step. Partner theming then swaps the pointer, not the component — which is what `design/foundation/colors.md` already promises and the palette can't currently deliver.
4. **Fold the production values in.** The warm beige and graphite ink shipping today are better choices for health content than anything in this file.

One open question worth deciding before step 2: whether the re-spaced palette keeps 16 steps or drops to 10. Sixteen only earns its place if partner theming genuinely needs that granularity — otherwise 10 evenly-spaced steps would remove most of the ambiguity above on its own. My read is 10.
