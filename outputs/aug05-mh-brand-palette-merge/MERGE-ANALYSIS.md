# MH Brand × MH Colors v2 — Merge Analysis

**Brand source:** MHC Brand Guidelines v1.2 (2021), via `outputs/MHC UI/colors_and_type.css`
**Palette:** Figma [MH colors v2](https://www.figma.com/design/i1nW5PTL7yU4MYOMgyAJ7c/MH-colors-v2)
**Method:** CIEDE2000, implementation verified against all 27 Sharma et al. reference vectors
**Date:** 5 Aug 2026

**In this folder:**

| File | What it's for |
|---|---|
| `brand-merge.html` | Visual proof — every pair fused edge-to-edge so you can look for the seam. Open this first. |
| `MERGE-ANALYSIS.md` | This doc — answers, tolerance framework, process. |
| `mh-brand-merged.css` | The three-layer merged token set. |
| `brand-merge.json` | All measurements, for tooling. |

Companion: `outputs/aug04-mh-color-reference/` — the palette itself, contrast-measured, with its two broken steps flagged.

---

## The headline

Twelve of fifteen brand colors have a defensible palette equivalent. **Both oranges and the primary blue are effectively exact.** Two colors fail tolerance, and one of those failures is useful — it's pointing at the warming you already want.

You are not choosing between the brand and this palette. You're adopting the palette's *ramps* while holding the brand's *hues*, which is the only version of this that survives a brand review.

---

## Your four questions

**Is MH Blue the same as Ocean 900?** No, and not close. MH Blue `#0F497F` is **Ocean 1300** `#164677` at ΔE 1.41 — brand-grade. Ocean 900 is ΔE **13.06** away and 15 L* lighter; you'd be shipping a visibly different blue. Ocean 1200 (ΔE 2.69) is the only other stop inside a defensible tolerance. Nothing in Blue, Indigo, Turquoise or Teal comes closer than ΔE 7.3.

**How about the orange?** This is the win. Lava-orange `#F15922` → **Ember 700** `#EF5D28` at ΔE **0.77**. Tangerine `#F6851F` → **Orange 700** `#F9841A` at ΔE **0.62**. Both are below the just-noticeable difference — you cannot see them apart side by side, which the fused strips in the HTML demonstrate. Adopt both without discussion. Mango → Yellow 1000 at ΔE 1.92 is also brand-grade.

**How about the pale green?** Weakest area in the set. Glacier `#D2E5E1` → Jade 200 at ΔE **3.69**; sky-blue `#92D5DA` → Teal 400 at ΔE **4.64**. Both are only defensible at tertiary tier. The structural reason: the palette has no pale, low-chroma green-cyan — its light stops are all more saturated than MH's pastels. If glacier does real work in your illustration system, keep it exact rather than accept a 3.69.

The saturated greens are fine: spring-green → Green 900 (ΔE 2.37), zesty-green → Honeydew 700 (ΔE 2.26), lime-green → Lime 800 (ΔE 3.20).

**The secondaries?** Two of nine fail. **Aqua-blue** `#04A0B7` is ΔE **6.00** from its nearest stop (Teal 1000) — a different color. **Slate** `#6E7A7D` is ΔE **5.67** from Grey 800. Everything else lands between 1.81 and 3.90.

Those two failures need opposite treatments, and the reasoning matters more than the numbers:

- **Aqua-blue: keep it exact, off-palette.** It's a secondary doing CTA and headline work, so it carries real recognition load. Substituting it at ΔE 6.0 is the one change in this whole exercise a stakeholder would actually notice.
- **Slate: retire it.** Its cool blue-grey cast is precisely what you're warming away from. Replacing it with neutral Grey 800 isn't a failed match — it's the warming decision. State it that way rather than hiding it inside a tolerance argument.

---

## The tolerance ladder

This is what makes a substitution defensible. Tolerance is budgeted **by tier**, because recognition load isn't evenly distributed — it concentrates in the primary and the lockup.

| ΔE2000 | What the eye does | Defensible for |
|---|---|---|
| ≤ 1.0 | No visible difference, even side by side | Anything, including the logo |
| ≤ 2.0 | Visible only on close side-by-side inspection | **Primary** — the required bar |
| ≤ 3.5 | Visible when adjacent; reads the same alone | **Secondary** |
| ≤ 5.0 | Clearly a different shade side by side | **Tertiary** only |
| > 5.0 | A different color | Nothing — keep the brand hex |

These cut-offs are working conventions from print and packaging colour management, not physics. ΔE 1.0 as the just-noticeable difference is well established; the tier thresholds above it are a judgement I'd defend but which a colour scientist would call arbitrary. What matters is that they're declared up front and applied consistently.

---

## Every mapping

| Brand color | Tier | Ships as | Nearest stop | Hex | ΔE2000 | Verdict | Action |
|---|---|---|---|---|---|---|---|
| `--mh-tangerine` | tertiary | `#F6851F` | Orange 700 | `#F9841A` | **0.62** | imperceptible | adopt stop |
| `--mh-lava-orange` | secondary | `#F15922` | Ember 700 | `#EF5D28` | **0.77** | imperceptible | adopt stop |
| `--mh-brand-blue` | primary | `#0F497F` | Ocean 1300 | `#164677` | **1.41** | brand-grade | adopt stop |
| `--mh-charcoal` | secondary | `#373D3F` | Grey 1600 | `#393C3C` | **1.81** | brand-grade | adopt stop |
| `--mh-mango` | tertiary | `#F3B31E` | Yellow 1000 | `#F1B500` | **1.92** | brand-grade | adopt stop |
| `--mh-zesty-green` | tertiary | `#C4D939` | Honeydew 700 | `#CFDC4F` | **2.26** | reads the same | adopt stop |
| `--mh-spring-green` | secondary | `#52A045` | Green 900 | `#52A353` | **2.37** | reads the same | adopt stop |
| `--mh-lime-green` | tertiary | `#90C73E` | Lime 800 | `#7DC240` | **3.2** | reads the same | drop |
| `--mh-night-sky` | secondary | `#062A42` | Ocean 1600 | `#16314D` | **3.57** | visibly different | adopt — logged exception |
| `--mh-glacier` | tertiary | `#D2E5E1` | Jade 200 | `#DFF5EE` | **3.69** | visibly different | adopt stop |
| `--mh-cloud` | secondary | `#E6EBEC` | Mub 200 | `#EBE9E4` | **3.99** | visibly different | warm on purpose |
| `--mh-sky-blue` | tertiary | `#92D5DA` | Teal 400 | `#A3E9EC` | **4.64** | visibly different | adopt stop |
| `--mh-slate` | secondary | `#6E7A7D` | Grey 800 | `#777777` | **5.67** | different color | warm on purpose |
| `--mh-aqua-blue` | secondary | `#04A0B7` | Teal 1000 | `#13A4AB` | **6** | different color | keep exact |
| `--mh-silver` | secondary | `#C6CCCD` | Mub 400 | `#CDC9BF` | **6.43** | different color | warm on purpose |

---

### Logged exceptions

Two entries above breach the ladder. Both are deliberate, and both are recorded here rather than rounded away — that is the whole point of step 8 of the process.

**night-sky → Ocean 1600, ΔE 3.57.** A secondary at 0.07 over the 3.5 bar. Nothing in 352 values is closer; the next stop is ΔE 5.42. It is a dark background anchor with effectively no recognition load, so I accept it. Flagging it rather than quietly calling 3.57 "about 3.5" is the difference between a tolerance framework and a rationalisation.

**cloud → Mub 200 (3.99) and silver → Mub 400 (6.43).** These are not match claims and shouldn't be read against the ladder at all. Grey 300 (2.62) and Grey 500 (3.94) are the closer matches; they keep the cool cast. The extra ΔE is the warming, bought on purpose. See decision D2.

---

## How much flexibility you have

One step inside any family costs **ΔE 4.3–5.4** (mean 4.9), and that consistency across all 22 families is the useful part — it gives you a unit of currency. Every family swap can be priced in steps.

| Family move | ΔE2000 | = steps | Hue | Warmth | Reading |
|---|---|---|---|---|---|
| Coffee → Cocoa | 9.3 | **2.0×** | 2° | +5.3% | a touch warmer |
| Cocoa → Mub | 11.1 | **2.5×** | 25° | -8.2% | a touch cooler |
| Mub → Grey | 8.2 | **1.8×** | 29° | -5.5% | a touch cooler |
| Honeydew → Lime | 9.5 | **1.9×** | 19° | -5.4% | a touch cooler |
| Lime → Green | 7.0 | **1.4×** | 14° | -8.1% | a touch cooler |
| Green → Jade | 8.9 | **1.9×** | 27° | -10.1% | a touch cooler |
| Jade → Teal | 11.3 | **2.4×** | 34° | -9.9% | a touch cooler |
| Teal → Turquoise | 11.0 | **2.4×** | 33° | -5.9% | a touch cooler |
| Turquoise → Ocean | 10.9 | **2.3×** | 33° | -6.3% | a touch cooler |
| Ocean → Blue | 9.1 | **1.8×** | 20° | -5.7% | a touch cooler |
| Blue → Indigo | 10.0 | **1.9×** | 16° | -5.2% | a touch cooler |
| Indigo → Purple | 8.5 | **1.6×** | 14° | +5.9% | a touch warmer |
| Purple → Violet | 11.5 | **2.2×** | 24° | +14.9% | markedly warmer |
| Violet → Pink | 12.5 | **2.4×** | 29° | +15.9% | markedly warmer |
| Pink → Coral | 12.0 | **2.4×** | 22° | +15.3% | markedly warmer |
| Coral → Ember | 8.6 | **1.7×** | 11° | +2.0% | same temperature |
| Ember → Orange | 11.1 | **2.3×** | 14° | +7.0% | a touch warmer |
| Orange → Mustard | 10.4 | **2.2×** | 14° | +2.8% | same temperature |
| Mustard → Yellow | 8.2 | **1.7×** | 11° | +2.6% | same temperature |
| Yellow → Lemon | 7.7 | **1.6×** | 9° | +2.4% | same temperature |

**Answering your question directly: Green → Jade costs 1.9 steps and reads 10% cooler,** rotating hue 27°. Your instinct of "5% or 10%" was the right magnitude.

A note on the metric, because this is where it's easy to fool yourself. Warmth is **b\***, the CIELAB yellow–blue axis (positive = warm). The percentage is Δb\* normalised against the palette's *total* warm–cool span of 161 units (Indigo 900 at −71.8 to Lemon 800 at +89.3). I first tried normalising against each family's own chroma and it produced garbage — Jade → Teal came out as "−277% cooler" because Jade's mean |b\*| is only 5.8. Percentages of a near-zero baseline are meaningless. The fixed span is stable and comparable across every pair.

**How to read the table:** anything at 1.4–1.7× is a cheap move — Lime→Green, Yellow→Lemon, Indigo→Purple, Coral→Ember, Mustard→Yellow. Anything at 2.3–2.5× is a different color decision, not an adjustment. The warm end of the spectrum (Coral through Lemon) is tightly packed in temperature — five families spanning only 2–7% of the warm–cool range — which means you have lots of hue choice there and very little temperature choice. The cool end is the opposite.

---

## Warming the neutrals — where the real move is

Every MH brand neutral is cool: cloud b\* −1.1, silver −1.2, slate −3.2, charcoal −2.1. This is the one place you can shift the brand's temperature without touching a chromatic color, which is exactly the "loosely warming it up" you described.

| Brand neutral | Closest (stays cool) | Warm option | Warmest option |
|---|---|---|---|
| cloud `#E6EBEC` | Grey 300 `#E5E5E4` — ΔE 2.6, b\* +1.6 | **Mub 200 `#EBE9E4`** — ΔE 4.0, b\* +3.7 | Cocoa 100 `#F6F0EB` — ΔE 5.6, b\* +4.2 |
| silver `#C6CCCD` | Grey 500 `#C0C0C0` — ΔE 3.9, b\* +1.2 | **Mub 400 `#CDC9BF`** — ΔE 6.4, b\* +6.7 | Coffee 400 `#C3B5A9` — ΔE 11.2, b\* +9.1 ⚠️ brown |
| slate `#6E7A7D` | **Grey 800 `#777777`** — ΔE 5.7, b\* +3.2 | Grey 900 `#717171` — ΔE 6.3 | Coffee 600 — ΔE 20.5, b\* +20.6 ⚠️ brown |
| charcoal `#373D3F` | **Grey 1600 `#393C3C`** — ΔE 1.8, b\* +1.6 | Grey 1400 `#3E3E3E` — ΔE 3.5 | Mub 1400 — ΔE 9.4, b\* +10.4 ⚠️ olive |

**The ceiling, and it's the important finding.** At slate and charcoal lightness the warm families have already turned brown — Coffee 600 is b\* +20.6 from slate, Cocoa 1400 is +23.4 from charcoal. That is why warmth belongs to backgrounds and hairlines only and ink stays neutral. It was a taste rule before; now it's a measured property of where these ramps go.

**Why Mub and not Coffee.** Mub wins on every axis for both roles — closer in ΔE, closer in lightness, *and* warmer. It also matches the hue of the beige you already ship: Mub sits at 94–97°, the shipped `#FAF7F0` at 93°, while Coffee and Cocoa run pinker at 68–75°. This corrects the Coffee recommendation in the 4 Aug reference, which was built on a crude RGB distance and has now been amended.

Note the trade at the top of the table: Mub 200 is a *worse* match to cloud (ΔE 4.0 vs Grey 300's 2.6) and that is the point. You spend 1.4 ΔE to buy 2.2 b\* of warmth, deliberately, in the only place it is safe to spend it.

---

## The accessible twin pattern

Most brand accents fail AA as text — mango is 1.86:1, zesty-green 1.58:1, tangerine 2.53:1. The instinct is to darken the brand color, which breaks the brand. The fix is to pair the brand fill with a darker stop **of the same hue**, so the color still reads as brand while the text passes.

| Brand color | Fill (brand hue) | On white | Accessible twin | On white |
|---|---|---|---|---|
| lava-orange | Ember 700 `#EF5D28` | 3.35:1 ui | Ember 1000 `#D73F0D` | 4.56:1 text |
| tangerine | Orange 700 `#F9841A` | 2.52:1 accent | Orange 1400 `#C34600` | 5:1 text |
| mango | Yellow 1000 `#F1B500` | 1.85:1 tint | Yellow 1600 `#87500A` | 6.6:1 text |
| zesty-green | Honeydew 700 `#CFDC4F` | 1.5:1 tint | Honeydew 1400 `#656B1D` | 5.72:1 text |
| spring-green | Green 900 `#52A353` | 3.12:1 ui | Green 1200 `#3D7A3E` | 5.18:1 text |
| lime-green | Lime 800 `#7DC240` | 2.17:1 accent | Lime 1300 `#4C7628` | 5.34:1 text |
| slate | Grey 800 `#777777` | 4.48:1 ui | Grey 900 `#717171` | 4.88:1 text |
| aqua-blue | **exact brand** `#04A0B7` | 3.13:1 ui | Teal 1200 `#108188` | 4.65:1 text |

Surface and wash colors are deliberately absent from this table — they never carry text, so the twin pattern does not apply to them.

This is the strongest practical argument for adopting the ramps at all. Right now each brand accent is a single value that either passes contrast or doesn't. Adopting the family gives every brand color an accessible sibling for free.

---

## The three-layer structure

`mh-brand-merged.css` is built this way, and the separation is what makes it defensible:

**Layer 0 — brand assets.** Exact hexes, never substituted. Logo, app icon, marketing lockups, anything co-branded. ΔE 0 forever.

**Layer 1 — adopted stops.** Palette values standing in for brand colors, each annotated with its ΔE and verdict. This is where the tolerance argument lives.

**Layer 2 — roles.** `--surface`, `--ink`, `--brand`, `--positive-fill` / `--positive-text`. Everything in the product binds here and nowhere else.

The reason to keep 0 and 1 separate: when someone asks "why is the app blue not the logo blue," the answer is "it's ΔE 1.41 and here's the ladder," not a shrug. Merge those layers and you lose the ability to answer.

---

## The process, repeatable

1. **Fix the ground truth first.** One file, one date, one source. If two candidate "brand blues" exist, resolve that before measuring anything. This took the longest here.
2. **Measure in ΔE2000, never hex distance or HSL.** Both lie about perceived difference — they over-weight blue and under-weight green. My first pass at this used weighted RGB distance and ranked `--red` against Ember 1100 at "ΔE 41"; ΔE2000 tells a different and correct story. ΔE2000 is also what a brand review will accept, because it's the print-industry standard.
3. **Verify your implementation.** CIEDE2000 has enough edge cases (hue wraparound, the Rt rotation term) that a subtly wrong version passes casual inspection. Sharma et al. published 27 reference vectors specifically for this. Run them.
4. **Budget tolerance by tier.** Primary ≤ 2.0, secondary ≤ 3.5, tertiary ≤ 5.0. Spending equal rigor on a tertiary wash is wasted effort.
5. **Separate brand assets from UI tokens.** Exact forever vs. within-tolerance. This is standard practice — brand marks are spot-colour-exact, UI is tolerance-based — and it's what buys you sibling steps, hover states and accessible twins.
6. **Give every failing color an accessible twin from its own family.** Don't darken the brand color.
7. **Verify in context, not isolation.** Albers' point, and it's measurable: the same hex on `#FFFFFF` and on `#FAF7F0` are different contrast problems. Re-measure against the surface the color actually sits on. Three families (Teal, Coral, Ember) lose a step on the warm background.
8. **Log the exceptions with their numbers.** "We kept aqua-blue exact because the nearest stop was ΔE 6.0" is a defence. "It looked off" is not.

---

## Expertise worth embedding

`reference/visual-design-experts.md` already carries Albers and his central point — test colour in context, never in isolation. What it has no coverage of is the **measurement** layer, which is precisely what brand defensibility needs. Worth adding:

| Source | What it gives you |
|---|---|
| **Sharma, Wu & Dalal (2005)** — *The CIEDE2000 Color-Difference Formula* | The formula plus the reference test data. If you implement ΔE2000 anywhere, this is the correctness check. |
| **Mark Fairchild** — *Color Appearance Models* | The authority on why the same hex looks different in different surrounds. Underwrites the Albers rule with actual models (CIECAM02/16). |
| **Maureen Stone** — *A Field Guide to Digital Color* | The practical bridge from colour science to interface decisions. Short, and written for people shipping products. |
| **Björn Ottosson** — OKLab / OKLCH | The modern perceptual space for *generating* ramps. This is the tool for the re-spacing fix the palette needs. |
| **Nate Baldwin** — Adobe Leonardo | Generates palettes from target *contrast ratios* rather than lightness steps — a direct implementation of the band system. If the re-spacing work happens, start here. |
| **Google Material 3** — HCT + tonal palettes | Tone-as-contrast, productionised. The closest existing system to what MHC needs, and worth studying before building. |
| **Andrew Somers** — APCA | The successor contrast model. Flagging it because WCAG 2.1 ratios are known to misjudge mid-tones and dark mode; if dark mode gets decided, revisit the bands with APCA. |

My recommendation on that list: **Stone for the thinking, Leonardo for the doing.** The rest is depth you can reach for when a specific question comes up.

---

## Decisions to ratify

Five drafts appended to `outputs/color system/decisions.md` as **D1–D5, status `draft`** — proposed, not ratified, per that log's own status legend. Read them there and either promote to `direction-locked` or push back.

The one I'd flag: **D3, retiring slate.** It's the only decision here that changes the brand rather than mapping it, and it's the one worth a conversation with whoever owns brand.

---

## Open gaps

| Gap | Severity | Note |
|---|---|---|
| `Design Building Blocks` not read | **high** | Everything above uses Brand Guidelines v1.2 + production CSS as anchors. The actual design-system Figma file wasn't open, so its current token values are unverified. Open it and I'll reconcile. |
| Brand Guidelines v1.2 is from 2021 | medium | Five years old. Confirm nothing superseded it before ratifying. |
| Figma role tokens still don't exist | medium | 704 duplicated primitives, zero roles. See `aug04-mh-color-reference/PROMPT-BLOCK.md`. Layer 2 above is the spec for what to build. |
| Dark mode | low | Bands are WCAG 2.1, which misjudges dark mode. Revisit with APCA if dark mode is decided. |
