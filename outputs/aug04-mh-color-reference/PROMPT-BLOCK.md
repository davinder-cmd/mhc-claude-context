# Referencing this in another chat

**Last corrected:** 5 Aug 2026 — values below supersede anything earlier in this folder.

---

## In a chat in this repo — one line

```
Load outputs/aug04-mh-color-reference/PROMPT-BLOCK.md and use the working set.
```

---

## In Figma — the two mechanics that matter

**Use the paint styles, not the variables.** `MH colors v2` has 352 paint styles (`Ocean / Ocean 1300`) as one clean set, and **704 variables** — the same 352 duplicated across two collections both named "Colors". Picking a style is unambiguous; picking a variable is a coin flip between two collections. Until that's deduped, styles only.

**Everything below is nameable.** Because Design Building Blocks is built on `MH colors v2`, every value here exists as a style you can select by name — no hex entry needed.

---

## The working set — 19 values

Contrast is given on white **and** on the warm surface, because three of the semantic values drop below AA on warm and that is the failure that actually bites.

### Surface

| Role | Style | Hex | on white |
|---|---|---|---|
| Page | — | `#FFFFFF` | — |
| Page, cool alt | Grey 100 | `#F8F8F9` | 1.06:1 |
| Page, warm | **Mub 50** ⚠ | `#FAF7F0` | 1.07:1 |
| Page, warm — stronger | Mub 100 | `#F3F2EF` | 1.12:1 |
| Raised / tinted | **Mub 200** | `#EBE9E4` | 1.21:1 |
| Hairline, divider | **Mub 300** | `#E2E0DA` | 1.32:1 |
| Dark section | Ocean 1600 | `#16314D` | 13.29:1 |

Mub is the warm-neutral family — not Coffee, not Cocoa. Its hue (94–97°) matches the beige you already ship at 93°; Coffee and Cocoa run pinker at 68–75°.

⚠ **`Mub 50` does not exist in Figma yet.** It is the proposed step at half of Mub 100 ([`../aug05-fifty-step-tier/`](../aug05-fifty-step-tier/FIFTY-TIER.md)) and happens to be exactly the beige you already ship in CSS. Everything else in this document is selectable as a paint style by name; this one you enter as hex until the tier is added.

### Ink — always Grey, never a warm family

| Role | Style | Hex | on white | on Mub 100 |
|---|---|---|---|---|
| Primary text | Grey 1600 | `#393C3C` | 11.14:1 | 9.95:1 |
| Secondary text | Grey 1100 | `#5F5F5F` | 6.39:1 | 5.70:1 |
| Disabled / placeholder | Grey 800 | `#777777` | 4.48:1 | 4.00:1 |

`Grey 800` is the floor. It is already under 4.5:1 — don't put anything load-bearing in it.

### Brand

| Role | Style | Hex | on white |
|---|---|---|---|
| Brand | **Ocean 1500** `#103459` — see the fork below | | 12.67:1 |
| Link / interactive | Ocean 1100 | `#1C5C9A` | 6.89:1 |

### Semantic — fill and text are different steps

The fill carries the hue; the text carries the contrast. Never darken the fill to make text pass.

| Role | Fill | on white | Text | on white | on Mub 100 |
|---|---|---|---|---|---|
| Positive | Green 900 `#52A353` | 3.12:1 | Green 1200 `#3D7A3E` | 5.18:1 | 4.63:1 |
| Negative | Ember 700 `#EF5D28` | 3.35:1 | **Ember 1100** `#CA3B27` | 5.04:1 | 4.50:1 |
| Notice | Orange 700 `#F9841A` | 2.52:1 | **Orange 1500** `#B43C00` | 5.85:1 | 5.23:1 |
| Informative | `#04A0B7` brand aqua, exact | 3.13:1 | **Teal 1300** `#0E7077` | 5.83:1 | 5.21:1 |

The three bolded text values are one step darker than the white-background answer. On `Mub 100`, Ember 1000 falls to 4.07:1, Orange 1400 to 4.47:1 and Teal 1200 to 4.15:1 — all fail. These four pass on both surfaces, so use them everywhere and stop tracking two sets.

Ember 700 and Orange 700 *are* your brand oranges — ΔE 0.77 to lava-orange and 0.62 to tangerine. Imperceptibly different.

---

## The one open fork: which navy

Your brand guideline and your shipped product disagree, by ΔE **8.06** — they are two different blues.

| | Value | Nearest style | ΔE |
|---|---|---|---|
| Brand Guidelines v1.2 (2021) | `#0F497F` | **Ocean 1300** `#164677` | 1.41 |
| What production ships today | `#1B355C` | **Ocean 1500** `#103459` | 2.07 |

No single stop serves both: Ocean 1300 is ΔE 6.65 from production, Ocean 1500 is ΔE 7.73 from the brand guideline.

**Use Ocean 1500 for in-product design work.** Every screen you've built this year sits on `#1B355C`, and matching what ships beats matching a five-year-old guideline for product surfaces. Reserve Ocean 1300 for brand and marketing work, where the guideline governs. Whichever you pick, don't mix them in one file — the difference is clearly visible.

This is a real decision, not a detail. It's parked, not resolved.

---

## Rules

1. **Pick by contrast band, not step number.** Step numbers aren't comparable across families — AA text starts at Coffee 600 but Yellow 1600.
2. **Lighter for area, darker for meaning.** A color used at both scales needs two steps, never one value at reduced opacity — opacity over warm surfaces shifts hue and voids the contrast figure.
3. **Warm only in surfaces (Mub 50–400).** Above Mub 400 the warm families turn brown, and brown ink reads as a mistake next to clinical content. Measured, not aesthetic: at slate lightness Coffee 600 is b\* +20.6.
4. **Semantic color never travels alone** — always pair with text or an icon.
5. **Two broken steps: Grey 1500 and Ocean 1000.** Each is perceptually lighter than its predecessor; Ocean 1000 is also a byte-identical duplicate of Ocean 800. Never route a ramp or hover state through either.
6. **Measure against the surface the color actually sits on**, not white by default.

---

## Paste-ready block for a chat outside this repo

```
COLOR SYSTEM — MH Colors v2 (Figma), band-based. Follow exactly.
Every value below is a paint style in "MH colors v2" EXCEPT the one marked *.
Use the STYLES, not the variables — the variable collections are duplicated
and ambiguous. The * value is a proposed step; enter it as hex.

SURFACE
  page              #FFFFFF
  page-cool         #F8F8F9   Grey 100
  page-warm         #FAF7F0   Mub 50 *     <- warm neutral family is Mub
  page-warm-strong  #F3F2EF   Mub 100
  raised            #EBE9E4   Mub 200
  hairline          #E2E0DA   Mub 300
  dark-section      #16314D   Ocean 1600

INK (always Grey — never a warm family, they go brown)
  text              #393C3C   Grey 1600   11.14:1
  text-secondary    #5F5F5F   Grey 1100    6.39:1
  text-disabled     #777777   Grey 800     4.48:1  (floor — nothing essential)

BRAND
  brand             #103459   Ocean 1500  12.67:1   (in-product; see note)
  interactive       #1C5C9A   Ocean 1100   6.89:1

SEMANTIC — fill carries hue, text carries contrast. Never darken the fill.
  positive-fill     #52A353   Green 900     positive-text  #3D7A3E  Green 1200
  negative-fill     #EF5D28   Ember 700     negative-text  #CA3B27  Ember 1100
  notice-fill       #F9841A   Orange 700    notice-text    #B43C00  Orange 1500
  informative-fill  #04A0B7   brand aqua    informative-text #0E7077 Teal 1300

RULES
1. Pick by contrast band, not step number — step numbers aren't comparable
   across families (AA text starts at Coffee 600 but Yellow 1600).
   wash 1-1.3:1 backgrounds · tint 1.3-2 hairlines · accent 2-3 decorative only
   ui 3-4.5 icons/borders · text 4.5-7 body (AA) · ink 7+ primary text
2. Lighter for area, darker for meaning. A color used at both scales needs TWO
   steps — never one value at reduced opacity.
3. Warm only in surfaces (Mub 50-400). Above that the warm families go brown.
   All text and borders come from Grey.
4. Semantic color never travels alone — pair with text or an icon.
5. NEVER use Grey 1500 or Ocean 1000 — both are perceptually lighter than the
   step before them, and Ocean 1000 duplicates Ocean 800.
6. Report contrast against the surface the color actually sits on, not white.
7. State the role and band for every color you choose.

NOTE ON BRAND BLUE: the 2021 brand guideline says #0F497F (= Ocean 1300) but
production ships #1B355C (= Ocean 1500). They are ΔE 8.06 apart. Use Ocean 1500
for in-product work, Ocean 1300 for brand/marketing. Never mix in one file.
```

---

## For iterative Figma edits

Role tokens still don't exist in Figma — 704 duplicated primitives, zero roles. So:

```
Set fills on this frame using the MH working set. Bind to the PAINT STYLE by
name (e.g. "Mub / Mub 100"), not to a variable — the variable collections are
duplicated. Before changing anything, list every current fill with its hex and
which role you think it is, and wait for me to approve the mapping. Then apply,
and report the contrast of each text value against the surface it sits on.
```

The "list before you change" step is the one that matters. Most color drift comes from an agent inferring intent from a hex it can't name.
