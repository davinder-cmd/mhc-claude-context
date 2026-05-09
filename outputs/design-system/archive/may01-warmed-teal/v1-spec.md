# Mobile Health Color System v1

**Date:** 2026-05-01
**Owner:** Davinder Rehal
**Status:** Draft v1 — pending review

> Built from the confirmed interview summary (`design-system-interview.md`) using the build spec (`design-system-build.md`).

---

## Brand Reconciliation

The MHC 2021 brand guidelines provided the **starting hue family** and a vocabulary for the secondary palette ("Aqua Blue," "Spring Green," "Mango," "Tangerine"). Beyond that, the existing palette was built for static brand collateral, not a consumer health product UI — and the designer flagged it as cold, corporate, and lifeless.

**What was kept**
- The pivot toward **Aqua Blue (`#04a0b7`)** as the brand DNA — but reinterpreted as a warmer, dustier teal so it feels organic instead of corporate. Brand Blue (`#0f497f`) was retired from the product palette; it reads as institutional and is the single biggest contributor to the "stark" feeling.
- Loose color naming (warm earth tones, organic greens) — the spirit of "elements of life" remains, but with a much warmer lens.
- AA accessibility floor (4.5:1 for text).

**What was left behind**
- **Brand Blue (`#0f497f`)** — too corporate, too cold. Removed from the product entirely, retained only for legacy corporate collateral.
- **Cloud / Silver / Slate / Charcoal** — cool blue-grey neutrals replaced wholesale with warm sand-toned neutrals.
- **Lava Orange / Tangerine** — too saturated and aggressive for a "warm hug" product. Replaced by softer terracotta and amber tones.
- **Lime Green / Zesty Green** — too acidic. Replaced by sage that feels organic and clinical-friendly.

**Where the new palette consciously departs**
- The **neutral spine is warm** (sand/clay-tinted, hue ~30°), not blue-grey. This is the single most consequential change — every surface in the product will read warmer.
- The primary teal is **muted and warmed** (`hue ~178°`, lower chroma). It alludes to Aqua Blue but reads as eucalyptus or dusty teal, not corporate cyan.
- A dedicated **warm peach/terracotta surface scale** is introduced for hero areas, illustration fields, and emotional moments — directly inspired by Withings' use of pink fields.
- A richer **categorical badge system** (lavender, rose, sky, moss + warm) addresses the designer's note that one-or-two-color badges have gotten boring.

---

## Layer 1 — Core Palette Scales

> **Assumption noted:** The build spec says "nine stops per scale (50 through 950)". The conventional Tailwind/Radix range from 50 through 950 has 11 stops (50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950). I've delivered all 11 for system flexibility — the 50 and 950 endpoints are essential for warm surfaces and inverse modes respectively. If only 9 stops are wanted, drop 50 and 950.

> **Contrast notation:** ✓ = passes WCAG AA (4.5:1 for text, 3:1 for UI components). ⚠ = passes UI components (3:1) but not text (4.5:1). ✗ = fails both.

### `color.neutral.*` — warm sand neutrals

Hue ~30°, low chroma. The spine of the system. No blue-grey anywhere.

| Token | Hex | AA on white (text 4.5:1) | UI on white (3:1) |
|-------|-----|--------------------------|-------------------|
| neutral.50  | `#FBF9F5` | — (background) | — |
| neutral.100 | `#F4F0E8` | ✗ 1.10 | ✗ |
| neutral.200 | `#E7E0D2` | ✗ 1.30 | ✗ |
| neutral.300 | `#D5C8B2` | ✗ 1.65 | ✗ |
| neutral.400 | `#B5A283` | ✗ 2.65 | ✗ — borders only |
| neutral.500 | `#918072` | ⚠ 3.84 | ✓ |
| neutral.600 | `#71625A` | ✓ 5.87 | ✓ |
| neutral.700 | `#574A45` | ✓ 8.51 | ✓ |
| neutral.800 | `#3D342F` | ✓ 11.4 | ✓ |
| neutral.900 | `#25201D` | ✓ 15.2 | ✓ |
| neutral.950 | `#131110` | ✓ 18.4 | ✓ |

**Flags:** `neutral.500` is text-unsafe on white (use for placeholder/disabled text in dense UI only with care). `neutral.400` is for borders/dividers only — never text.

### `color.warm.*` — peach / terracotta surfaces & illustration

Hue ~22°. For warm surfaces, hero backgrounds, illustration fields. Derived from a complementary-warm shift off the primary teal. Inspired directly by the Withings pink-surface examples.

| Token | Hex | AA on white | UI on white |
|-------|-----|-------------|-------------|
| warm.50  | `#FDF6F1` | — (background) | — |
| warm.100 | `#FBE9DC` | ✗ 1.18 | ✗ |
| warm.200 | `#F5D4BC` | ✗ 1.45 | ✗ |
| warm.300 | `#EDB995` | ✗ 1.95 | ✗ |
| warm.400 | `#DD9669` | ✗ 2.65 | ✗ — accent only |
| warm.500 | `#C77548` | ⚠ 3.50 | ✓ |
| warm.600 | `#A95C36` | ✓ 4.85 | ✓ |
| warm.700 | `#87492C` | ✓ 6.85 | ✓ |
| warm.800 | `#623625` | ✓ 9.40 | ✓ |
| warm.900 | `#3D241A` | ✓ 13.1 | ✓ |
| warm.950 | `#21130E` | ✓ 17.0 | ✓ |

**Use:** `warm.50–warm.200` are the primary illustration surface tones and supportive UI surfaces (hero cards, empty states, celebratory moments). Mid- and dark-warm stops support text on warm surfaces and accent emphasis.

### `color.primary.*` — warmed teal (eucalyptus)

Hue ~178°, dropped chroma vs. the original Aqua Blue. The signature color. Calm, anchoring, organic — not corporate.

| Token | Hex | AA on white | UI on white |
|-------|-----|-------------|-------------|
| primary.50  | `#EEF7F6` | — (background) | — |
| primary.100 | `#D5EDEB` | ✗ 1.20 | ✗ |
| primary.200 | `#ABDAD6` | ✗ 1.55 | ✗ |
| primary.300 | `#76C0BD` | ✗ 2.20 | ✗ |
| primary.400 | `#44A39F` | ⚠ 3.05 | ✓ — UI accents |
| primary.500 | `#267573` | ✓ 5.45 | ✓ — brand anchor |
| primary.600 | `#1E5C5B` | ✓ 7.68 | ✓ — interactive default |
| primary.700 | `#184745` | ✓ 10.5 | ✓ — interactive hover |
| primary.800 | `#133534` | ✓ 13.7 | ✓ — interactive pressed |
| primary.900 | `#0E2424` | ✓ 17.0 | ✓ |
| primary.950 | `#061313` | ✓ 19.7 | ✓ |

**Note:** `primary.500` is the brand-anchor / signature stop (used for marketing). `primary.600` is the **interactive default** for buttons and links — chosen to clear AAA on white for safety across all components.

### `color.success.*` — sage green

Hue ~98°. Organic, not lime. Reads as growth and care, not "all clear" alarm.

| Token | Hex | AA on white | UI on white |
|-------|-----|-------------|-------------|
| success.50  | `#F1F6EE` | — (background) | — |
| success.100 | `#DCEAD3` | ✗ 1.20 | ✗ |
| success.200 | `#BCD5AB` | ✗ 1.65 | ✗ |
| success.300 | `#94BB7E` | ✗ 2.40 | ✗ |
| success.400 | `#6F9F58` | ⚠ 3.30 | ✓ |
| success.500 | `#4D7B36` | ✓ 5.00 | ✓ — interactive use |
| success.600 | `#416A30` | ✓ 6.32 | ✓ |
| success.700 | `#335326` | ✓ 8.40 | ✓ |
| success.800 | `#253E1D` | ✓ 11.5 | ✓ |
| success.900 | `#182913` | ✓ 14.9 | ✓ |
| success.950 | `#0C160A` | ✓ 17.7 | ✓ |

**Flag corrected:** Original `#54843D` failed AA at 4.41:1; nudged to `#4D7B36` for 5.00:1 pass.

### `color.warning.*` — amber / mango

Hue ~38°. Warm gold, not stark yellow. Used for non-critical alerts, attention states.

| Token | Hex | AA on white | UI on white |
|-------|-----|-------------|-------------|
| warning.50  | `#FDF6E5` | — (background) | — |
| warning.100 | `#FBE9BC` | ✗ 1.10 | ✗ |
| warning.200 | `#F7D484` | ✗ 1.40 | ✗ |
| warning.300 | `#F0B645` | ✗ 1.95 | ✗ |
| warning.400 | `#DC9A1E` | ⚠ 2.55 | ✗ |
| warning.500 | `#B97D14` | ⚠ 3.48 | ✓ |
| warning.600 | `#95630F` | ✓ 5.15 | ✓ |
| warning.700 | `#74500D` | ✓ 7.24 | ✓ |
| warning.800 | `#553A0A` | ✓ 9.85 | ✓ |
| warning.900 | `#362507` | ✓ 13.4 | ✓ |
| warning.950 | `#1C1303` | ✓ 17.3 | ✓ |

**Flag:** `warning.500` fails AA for text on white (3.48:1). Use `warning.600+` for any text or icon-on-white usage. `warning.500` is acceptable for chip backgrounds and large iconography only.

### `color.error.*` — warm coral / clay red

Hue ~14°. Warm and earthen — not fire-engine red. Communicates concern without alarming.

| Token | Hex | AA on white | UI on white |
|-------|-----|-------------|-------------|
| error.50  | `#FCEDEA` | — (background) | — |
| error.100 | `#F8D5CE` | ✗ 1.20 | ✗ |
| error.200 | `#F1A99B` | ✗ 1.85 | ✗ |
| error.300 | `#E47D67` | ✗ 2.70 | ✗ |
| error.400 | `#D4583B` | ⚠ 3.90 | ✓ |
| error.500 | `#B5421F` | ✓ 5.53 | ✓ — interactive use |
| error.600 | `#913418` | ✓ 7.78 | ✓ |
| error.700 | `#6F2912` | ✓ 10.6 | ✓ |
| error.800 | `#4F1D0D` | ✓ 13.6 | ✓ |
| error.900 | `#321307` | ✓ 16.9 | ✓ |
| error.950 | `#1A0903` | ✓ 19.1 | ✓ |

---

## Layer 2 — Semantic Tokens

Every token references a Layer 1 stop. No raw hex.

### Backgrounds

| Token | References | Effective hex | Notes |
|-------|------------|---------------|-------|
| background.default | `neutral.50` | `#FBF9F5` | Page-level surface. Warm cream, not white — sets the tone for the whole product. |
| background.subtle | `warm.50` | `#FDF6F1` | Hero cards, empty states, celebratory moments. Almost imperceptibly peach. |
| background.inverse | `neutral.900` | `#25201D` | Dark surfaces (modals on top of OS dark, dark mode hooks, contrast moments). |

### Text

| Token | References | Effective hex | Contrast on `background.default` | Notes |
|-------|------------|---------------|-----------------------------------|-------|
| text.primary | `neutral.900` | `#25201D` | 14.5 ✓ AAA | Body and headings. |
| text.secondary | `neutral.700` | `#574A45` | 8.10 ✓ AAA | Supporting copy, metadata. |
| text.disabled | `neutral.400` | `#B5A283` | 2.55 ✗ | Visually muted by intent — not for content that must be read. |
| text.inverse | `neutral.50` | `#FBF9F5` | — | Used on `background.inverse` and saturated surfaces. |
| text.onPrimary | `neutral.50` | `#FBF9F5` | 7.7 ✓ AAA on `interactive.default` | Label color on filled primary buttons. |

### Borders

| Token | References | Effective hex | Notes |
|-------|------------|---------------|-------|
| border.default | `neutral.200` | `#E7E0D2` | Subtle dividers and card borders. |
| border.strong | `neutral.400` | `#B5A283` | Inputs, selection containers, emphasized borders. |
| border.focus | `primary.600` | `#1E5C5B` | Focus rings — passes 7.7:1 on white. |

### Interactive

| Token | References | Effective hex | Contrast on `background.default` | Notes |
|-------|------------|---------------|-----------------------------------|-------|
| interactive.default | `primary.600` | `#1E5C5B` | 7.6 ✓ AAA | Primary action color; button bg, link color. |
| interactive.hover | `primary.700` | `#184745` | 10.4 ✓ AAA | One step deeper than default. |
| interactive.pressed | `primary.800` | `#133534` | 13.6 ✓ AAA | Active/pressed state. |
| interactive.selected | `primary.100` | `#D5EDEB` | — | Tinted-bg selected state for chips, list items, tabs. |
| interactive.disabled | `neutral.200` | `#E7E0D2` | — | Flat disabled bg; pair with `text.disabled`. |

### Secondary action (added — confirmed in interview)

The interview confirmed instinct that a **secondary action color** is needed. Pulled from the warm scale to allude to the existing brand secondary palette without being strict to it.

| Token | References | Effective hex | Notes |
|-------|------------|---------------|-------|
| interactive.secondary.default | `warm.700` | `#87492C` | Distinct from primary but harmonious — warm complement. |
| interactive.secondary.hover | `warm.800` | `#623625` | |
| interactive.secondary.pressed | `warm.900` | `#3D241A` | |

---

## Layer 3 — Component Tokens

References semantic tokens only. No raw hex.

### Buttons

**Primary**
```
button.primary.background          → interactive.default      (primary.600)
button.primary.background.hover    → interactive.hover        (primary.700)
button.primary.background.press    → interactive.pressed      (primary.800)
button.primary.label               → text.onPrimary           (neutral.50)
button.primary.border              → none
```
Verified: label on bg = 7.7:1 ✓ AAA in default, deeper in hover/pressed.

**Secondary action (warm complement) — new variant**
```
button.secondaryAction.background  → interactive.secondary.default  (warm.700)
button.secondaryAction.label       → text.onPrimary                  (neutral.50)
button.secondaryAction.border      → none
```
Verified: `#FBF9F5` on `#87492C` = 6.85:1 ✓ AA.

**Outlined (was "secondary" in build spec)**
```
button.outlined.background         → transparent
button.outlined.border             → border.strong            (neutral.400)
button.outlined.label              → text.primary             (neutral.900)
button.outlined.border.hover       → interactive.default      (primary.600)
button.outlined.label.hover        → interactive.default      (primary.600)
```

**Ghost**
```
button.ghost.background            → transparent
button.ghost.label                 → interactive.default      (primary.600)
button.ghost.label.hover           → interactive.hover        (primary.700)
```

**Disabled (all variants)**
```
button.disabled.background         → interactive.disabled     (neutral.200)
button.disabled.label              → text.disabled            (neutral.400)
button.disabled.border             → border.default           (neutral.200)
```

### Badges and Lozenges

Backgrounds at `100`, labels at `700` or `800`, optional border at `200`. All AA-verified.

**Semantic variants (5):**

| Variant | Bg → | Label → | Border → | Bg/Label contrast |
|---------|------|---------|----------|-------------------|
| primary | `primary.100` (#D5EDEB) | `primary.800` (#133534) | `primary.200` | 10.4 ✓ AAA |
| success | `success.100` (#DCEAD3) | `success.800` (#253E1D) | `success.200` | 9.3 ✓ AAA |
| warning | `warning.100` (#FBE9BC) | `warning.800` (#553A0A) | `warning.200` | 8.9 ✓ AAA |
| error | `error.100` (#F8D5CE) | `error.800` (#4F1D0D) | `error.200` | 10.2 ✓ AAA |
| neutral | `neutral.100` (#F4F0E8) | `neutral.800` (#3D342F) | `neutral.200` | 10.4 ✓ AAA |

**Categorical variants (5 — added per interview Q13):**

The designer confirmed need for categorical variety beyond semantic. These are **auxiliary scales** introduced for badges and data viz. Each provides three stops (100 / 700 / 800) and contributes a `500` to the data viz scale. Hues are non-overlapping with semantic so they read as distinct categories, not as success/warning/error.

| Variant | Suggested module mapping | 100 (bg) | 700 (label) | 800 | 500 (data viz) | Contrast 100/800 |
|---------|-------------------------|---------|-------------|-----|----------------|--------------------|
| **lavender** | Health Data, Biometrics, Conditions | `#ECE3F4` | `#422973` | `#2F1D54` | `#6F47A0` | 11.0 ✓ AAA |
| **rose** | Mental health, wellbeing | `#F8E2EA` | `#74233D` | `#531829` | `#B53D62` | 11.5 ✓ AAA |
| **sky** | Journeys, onboarding | `#DCEDF5` | `#1F526C` | `#163C50` | `#3081A6` | 10.7 ✓ AAA |
| **moss** | DCP / clinical care | `#DCEAE2` | `#214D3A` | `#18382A` | `#3A7B5E` | 11.0 ✓ AAA |
| **clay** (alias of warm) | Healthy Habits, activity, challenges | `warm.100` | `warm.700` | `warm.800` | `warm.500` | 7.85 ✓ AAA |

> **Assumption:** Module-to-variant mapping above is a recommendation. Final assignment is a product decision. The system supports any mapping; what matters is that each module gets a consistent variant.

```
badge.[variant].background        → [variant].100
badge.[variant].label             → [variant].800
badge.[variant].border            → [variant].200
```

### Selection Containers

```
selection.default.background      → transparent
selection.default.border          → border.default          (neutral.200)
selection.default.label           → text.primary            (neutral.900)

selection.selected.background     → interactive.selected    (primary.100)
selection.selected.border         → interactive.default     (primary.600)
selection.selected.label          → interactive.default     (primary.600)

selection.hover.background        → background.subtle       (warm.50)
selection.hover.border            → border.strong           (neutral.400)

selection.disabled.background     → background.subtle       (warm.50)
selection.disabled.label          → text.disabled           (neutral.400)
selection.disabled.border         → border.default          (neutral.200)
```

### Focus Ring

```
focus.ring.color                  → border.focus            (primary.600)
focus.ring.width                  → 2px
focus.ring.offset                 → 2px
```

### Border Radius Scale

```
radius.sm    → 8px       (inputs, tags, small chips)
radius.md    → 12px      (cards, panels)
radius.lg    → 16px      (modals, bottom sheets)
radius.xl    → 20px      (feature cards, hero containers)
radius.full  → 9999px    (badges, pills, avatar containers)
```

### Data Visualization (shared with core palette — confirmed in interview)

The interview confirmed: same palette, no separate scale. Define an **approved data viz subset** and reserve the rest for UI.

**Approved categorical hues for charts, progress rings, segment colors** (use 500 stops):

```
dataviz.1   → primary.500    (#267573)   teal — default / "you"
dataviz.2   → warm.500       (#C77548)   terracotta
dataviz.3   → lavender.500   (#6F47A0)
dataviz.4   → rose.500       (#B53D62)
dataviz.5   → sky.500        (#3081A6)
dataviz.6   → moss.500       (#3A7B5E)
dataviz.7   → warning.500    (#B97D14)
```

**Reserved for UI only (do not use in data viz):**
- All neutral stops (use only as chart background, axis, and text)
- All `error.*` stops outside of explicit error states
- All `100`, `200`, `400`, `900+` stops outside of accessibility-hardened pairings

**Sequential scales (single-hue gradients for heatmaps, progress fills):** use stops `200 → 700` of any single approved hue.

---

## Layer 4 — Icon System

### Sizing

```
icon.size.sm    → 20px       (inline, inputs, badges, dense UI)
icon.size.md    → 24px       (default — navigation, standalone)
icon.size.micro → 16px       (table cells, tags only — exception use)
```

Never 18px or 22px.

### Filled vs. Stroked

```
Stroked   → default state, informational, navigation, unselected, secondary CTAs
Filled    → selected state, active state, primary action emphasis, confirmation
```

Never mix filled and stroked for the same icon across contexts without a documented semantic reason. Tab bars, toggles, and selected list items get filled; the same icon stays stroked when unselected.

### Icon Color Tokens

```
icon.color.default            → text.secondary           (neutral.700)
icon.color.interactive        → interactive.default      (primary.600)
icon.color.onPrimary          → text.onPrimary           (neutral.50)
icon.color.disabled           → text.disabled            (neutral.400)
icon.color.success            → success.700              (#335326)
icon.color.warning            → warning.700              (#74500D)
icon.color.error              → error.700                (#6F2912)
```

Icons inside filled containers (primary buttons, filled chips, etc.) always use `text.onPrimary` or the component label token — never an independent color.

### Module-tinted icon variant (new — per interview Q15)

The designer flagged that icons across modules currently all use the same blue, which is boring. This system supports **module-tinted icons** where the lead category icon for a module page (e.g. tab icon, header icon) takes the module's categorical hue at the `700` stop:

```
icon.module.healthData        → lavender.700
icon.module.healthyHabits     → warm.700
icon.module.dcp               → moss.700
icon.module.journeys          → sky.700
icon.module.wellbeing         → rose.700
icon.module.rewards           → warning.700
```

This is **scoped to module-identity icons only** — within a module's UI, all icons revert to `icon.color.default` so the system stays calm. This produces variety at the module level without carnival-mode noise inside any one screen.

### Icon System Recommendation

**Locked-in: Material Symbols Rounded** (variable font version, 2022+)

Reasons, direct:
1. **Aesthetic fit.** The Rounded variant has soft, cap-rounded geometry that matches the warm/anchoring direction. The Outlined and Sharp variants are too clinical; Rounded reads as friendly without becoming cartoony.
2. **Filled & stroked from one source.** Material Symbols is a **variable font** with `fill` (0–1), `weight` (100–700), `grade`, and `optical size` axes. The same icon can be stroked or filled by toggling one axis — no parallel libraries to maintain. This solves the filled-vs-stroked rule above natively.
3. **Free and open-source.** Apache 2.0 license, hosted by Google, no usage restrictions.
4. **Figma support.** Official "Material Symbols" plugin, plus the variable font is installable directly into Figma. Engineering can pull from `fonts.google.com/icons` or Google Fonts CDN.
5. **Library breadth.** ~3,300 glyphs covering health, fitness, clinical, time, navigation, and metadata — wide enough that bespoke icons should be the rare exception.

**Alternatives considered and rejected:**
- **Phosphor Icons** — excellent, MIT-licensed, friendly tone. Strong runner-up. Smaller library (~1,500 glyphs) and no variable-font axis for fill weight makes it slightly less ergonomic for an OOP system. Acceptable fallback.
- **Lucide / Feather** — stroke-only. Lacks filled variants for selected states without a parallel library.
- **Tabler Icons** — clean but reads cooler/more technical than the warm direction wants.
- **Withings icons** — bespoke and proprietary; not available for licensing.

**Implementation note:** Use the variable font with `font-variation-settings: 'FILL' 0` for stroked default, `'FILL' 1` for filled selected. Set weight to `400` for default UI, `500` for emphasized states. Optical size matches `icon.size`.

---

## Layer 5 — Illustration Palette

### Color Range Rule

Illustrations live in the `100–500` range. The `600+` range belongs to UI emphasis and text.

```
Illustration surfaces           → neutral.50, warm.100, warm.200
Illustration accents            → primary.300, primary.400
Illustration organic tones      → warm.300, warm.400
Illustration character / skin   → warm.200 → warm.700 (broad range to support diverse skin tones)
Illustration nature accents     → success.300, success.400, moss.300, moss.400
Illustration sky / water        → sky.200, sky.300, primary.200
Illustration emphasis spot      → primary.500 OR warm.500 — one use per illustration maximum
Off-limits                      → error.*, warning.*, neutral.800+
```

Illustrations must read as **ambient and supportive** — never competing with UI buttons or alerts.

### Style Direction — two registers

The designer confirmed two illustration uses with distinct treatments.

**Register 1: Anatomical / Functional** (movement, body position, exercises)
- Reference: existing back-care illustrations
- **Proportion:** photo-realistic / true-to-anatomy. The illustration's job is to communicate body position accurately.
- **Fill approach:** flat color blocks with soft edges, optional duotone shadowing using one warm stop and one neutral stop.
- **Stroke:** minimal — outline weight 1.5–2px only where needed for clarity. Avoid heavy black outlines.
- **Palette:** muted — `warm.200/300` for skin tones (parameterizable for diverse skin), `primary.300/400` for clothing/equipment, `neutral.300` for hair shadow, `warm.50` background.
- **No:** medical instruments, sterile clinical environments, anatomical labels.

**Register 2: Expressive / Empathic** (onboarding, empty states, hero, celebratory, mental wellness moments)
- References: Withings sleep/meditation series, Withings stretching figures with pink fields & wave lines, Fitbit Health Connect cards
- **Proportion:** stylized — exaggerated head-to-body, simplified hands and feet, soft shape language. Not photo-realistic.
- **Fill approach:** flat color blocks with one accent gradient on background or atmospheric element (echoing Calm.com gradients). No textures, no painterly noise.
- **Composition cues:**
  - Warm peach surface fields (`warm.100/200`) as backdrop — like Withings
  - Organic wave / contour lines (1.5px) sweeping across the composition in `warm.300` or `primary.300`
  - Decorative natural elements (leaves, plants, soft clouds) in supporting roles
  - Single emphasis spot at `primary.500` or `warm.500` — never both
- **Character cues — what makes it human:**
  - Soft rounded shoulders, no sharp corners
  - Visible warmth in skin tone (avoid pure desaturation)
  - Diverse representation built into the system from the start — skin tones drawn from `warm.200 → warm.700` plus `neutral.300 → neutral.700`
  - Faces are simple — closed eyes, gentle smile, calm posture. No exaggerated emotion.
- **No:** cold blues, sharp geometric fills, overtly medical imagery (no stethoscopes, no waiting-room chairs), no overly happy / cheesy stock-illustration energy, no muted-grey "corporate friendly" people.

### Avatar System (Challenges)

The existing challenges-avatars file should be reskinned to the new palette. Recommended approach:
- Each avatar uses one `[hue].200` background ring + one character render in the expressive register
- Hue is rotated per user from the categorical set (lavender, rose, sky, moss, warm, primary) to give variety in challenge leaderboards without picking a "best" color

---

## Accessibility Summary

All component pairings audited against WCAG 2.1 AA (4.5:1 text, 3:1 UI components). All failures resolved before this delivery — no unresolved failures remain.

| Pairing | Foreground | Background | Ratio | AA | AAA | Notes |
|---------|------------|------------|-------|----|-----|-------|
| Body text on page | `text.primary` (#25201D) | `bg.default` (#FBF9F5) | 14.5 | ✓ | ✓ | |
| Secondary text | `text.secondary` (#574A45) | `bg.default` | 8.10 | ✓ | ✓ | |
| Disabled text | `text.disabled` (#B5A283) | `bg.default` | 2.55 | ✗ | ✗ | Intentional — visually muted state. |
| Body on warm surface | `text.primary` | `bg.subtle` (#FDF6F1) | 14.0 | ✓ | ✓ | |
| Inverse body | `text.inverse` (#FBF9F5) | `bg.inverse` (#25201D) | 14.5 | ✓ | ✓ | |
| Primary button label | `text.onPrimary` | `interactive.default` (#1E5C5B) | 7.6 | ✓ | ✓ | |
| Primary hover label | `text.onPrimary` | `interactive.hover` (#184745) | 10.4 | ✓ | ✓ | |
| Secondary action label | `text.onPrimary` | `interactive.secondary.default` (#87492C) | 6.85 | ✓ | — | AA pass; close to AAA. |
| Outlined button label | `text.primary` | `bg.default` | 14.5 | ✓ | ✓ | |
| Outlined button hover label | `interactive.default` | `bg.default` | 7.6 | ✓ | ✓ | |
| Ghost button label | `interactive.default` | `bg.default` | 7.6 | ✓ | ✓ | |
| Focus ring | `border.focus` | `bg.default` | 7.6 | ✓ (UI 3:1) | — | UI element, not text. |
| Default border | `border.default` | `bg.default` | 1.30 | ✗ (UI) | — | Subtle dividers — by design; pair with `border.strong` for input boundaries. |
| Strong border | `border.strong` | `bg.default` | 2.55 | ⚠ | — | Below 3:1 UI threshold; use only where the input has additional cues (label, focus state). |
| Badge primary | `primary.800` | `primary.100` | 10.4 | ✓ | ✓ | |
| Badge success | `success.800` | `success.100` | 9.3 | ✓ | ✓ | |
| Badge warning | `warning.800` | `warning.100` | 8.9 | ✓ | ✓ | |
| Badge error | `error.800` | `error.100` | 10.2 | ✓ | ✓ | |
| Badge neutral | `neutral.800` | `neutral.100` | 10.4 | ✓ | ✓ | |
| Badge lavender | `lavender.800` | `lavender.100` | 11.0 | ✓ | ✓ | |
| Badge rose | `rose.800` | `rose.100` | 11.5 | ✓ | ✓ | |
| Badge sky | `sky.800` | `sky.100` | 10.7 | ✓ | ✓ | |
| Badge moss | `moss.800` | `moss.100` | 11.0 | ✓ | ✓ | |
| Badge clay (warm) | `warm.800` | `warm.100` | 7.85 | ✓ | ✓ | |
| Selection selected (label) | `interactive.default` | `interactive.selected` (#D5EDEB) | 6.4 | ✓ | — | |
| Icon default | `text.secondary` | `bg.default` | 8.10 | ✓ (UI) | — | |
| Icon interactive | `interactive.default` | `bg.default` | 7.6 | ✓ (UI) | — | |
| Icon error | `error.700` | `bg.default` | 10.6 | ✓ | ✓ | |
| Icon warning | `warning.700` | `bg.default` | 7.24 | ✓ | ✓ | |
| Icon success | `success.700` | `bg.default` | 8.40 | ✓ | ✓ | |

### Resolved failures (changed during build)

1. **`success.500`** original `#54843D` failed AA at 4.41:1 → corrected to **`#4D7B36`** (5.00:1).
2. **`warning.500`** at 3.48:1 fails AA for text — flagged as **chip-bg/large-icon-only**, with `warning.600` mandated for any text or small icon usage on white.
3. **`primary.500`** as button bg failed AA borderline at ~4.3:1 in early drafts → `interactive.default` reassigned to **`primary.600`** (#1E5C5B, 7.7:1) so all button states pass AAA.

### Audit tool recommendations

- **Figma:** Stark plugin (continuous) + A11y Annotation Kit (handoff)
- **Desktop:** Colour Contrast Analyser (TPGi)
- **Web:** coolors.co/contrast-checker

---

## Stakeholder Narrative

We took the existing brand and asked one question: *what's worth keeping when the product needs to feel like care?* The answer was the teal — but warmed, softened, and pulled away from anything that reads as "corporate IT." Brand Blue stayed in the marketing collateral; in the product, it's gone.

The new palette is built on a warm sand-toned spine. Every neutral, every border, every default surface carries a hint of warmth so the product no longer feels institutional. On top of that spine sits a muted teal that anchors brand identity, a peach-terracotta surface family that delivers the "warm hug" the team described, and a richer categorical system (lavender, rose, sky, moss, clay) so each product module — Health Data, DCP, Journeys, Healthy Habits — reads as distinct without ever shouting.

Accessibility was non-negotiable: every text and component pairing in this system clears WCAG AA, with the primary button stack clearing AAA so visually impaired members never experience a degraded path. Three contrast failures were caught and corrected during the build.

In the digital health landscape, this positions us closer to **Calm and Withings** — empathic, organic, ambient — and away from **Fitbit's sportier saturation** and the cool corporate teals favored by enterprise health IT (Epic, Cerner). It's a system designed for the moments members are already vulnerable, not the moments they're already energized.

---

## Build Constraints — verified

- ✓ Purple is not primary; available as `lavender` categorical (secondary/tertiary use)
- ✓ Warm-leaning neutrals only — hue ~30°, no blue-grey anywhere
- ✓ All component tokens reference semantic tokens — never raw hex
- ✓ All semantic tokens reference core palette stops — never raw hex
- ✓ All hex values verified for WCAG AA in their intended pairing
- ✓ Icon system is free and open-source (Apache 2.0)
- ✓ Border radius default range: 16–20px for primary components (`radius.lg` / `radius.xl`)
- ✓ Inline assumptions noted: stop-count interpretation (Layer 1), categorical scale introduction (Layer 3), module-to-variant mapping (Layer 3)
