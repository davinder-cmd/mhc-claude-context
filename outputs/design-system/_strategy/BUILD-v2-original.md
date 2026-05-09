# Design System Build v2
> Run this file after the interview is confirmed. The confirmed input summary from the interview is your source of truth. Do not ask clarifying questions — use the summary to resolve any ambiguity.
>
> **What changed from v1 → v2 (folded in from iteration):**
> - **Layer 1** — explicit `neutral` (graphite ink) vs `sand` (warm beige surface) split is now architectural, not optional.
> - **Layer 2** — gradient utility tokens introduced (warm-mist, peach, cool-mist, deep-aqua, per-module).
> - **Layer 4** — icon system expanded with **5 treatment recipes** (solid disc / soft squircle / halo / outlined ring / duotone wedge) + **module-tinted icons** for module identity.
> - **Layer 5** — illustration palette now requires a **variant grid**: same composition re-tinted across module palettes, demonstrating Withings-style illustration economy.
> - **New closing step** — **Color Weighting Visualization** (60-30-10 proportional breakdown per artifact) is required output.

---

## Role

You are a senior brand and design systems expert from one of the world's top digital health design agencies. You have deep expertise in accessible color systems, UI component styling, icon systems, and illustration guidelines for consumer-facing digital health products.

---

## Source of Truth

Use the confirmed input summary from the interview session as your inputs. Do not re-ask questions that were already answered. If something is ambiguous, make a reasonable decision, apply it, and note the assumption inline.

---

## On the Existing Brand Guidelines

Review any brand guidelines provided against the target direction confirmed in the interview. Extract what genuinely serves the new palette. Leave what doesn't. Be explicit:

- What was kept and why
- What was left behind and why
- Where the new palette consciously departs from the brand

This framing will be used in the stakeholder narrative at the end.

---

## Delivery Order

Build in strict layer sequence. Do not begin a layer until the previous one is complete. Each layer references the one before it — never raw hex values beyond Layer 1.

```
Layer 1 → Core palette scales (neutral + sand + warm + primary + semantic + categoricals)
Layer 2 → Semantic tokens (incl. gradient utility tokens)
Layer 3 → Component tokens
Layer 4 → Icon system (sizing + filled/stroked + treatments + module-tinted + recommendation)
Layer 5 → Illustration palette (color range + style direction + variant grid)
Closing → Color weighting visualization, accessibility summary, stakeholder narrative
```

---

## Layer 1 — Core Palette Scales

Build the raw color scales. No semantic meaning attached yet. Eleven stops per scale (50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950). Warm-leaning. No blue-grey neutrals.

### Architectural rule — neutral vs. sand split

The warm beige-brown tonal feel **belongs only to backgrounds and surface fills** (page bg, card bg, hover states). **Text, borders, dividers, and other layout structure must use a near-neutral ink** that carries a hair of warmth in hue (~28°) but very low chroma (~4–6%) so it reads as graphite, not brown. Cool blue-grey is also off-limits — the floor is "true neutral," never cold.

Implement this as **two separate scales**:

- **`color.neutral.*`** — barely-warm graphite ink (hue ~28°, chroma 4–6%). For text, borders, dividers, ink. **Never as a primary surface fill.**
- **`color.sand.*`** — warm beige-brown (hue ~30°, chroma 8–12%). For page backgrounds, card surfaces, hover states. **Never as text or border ink.**

A single uniformly-warm "neutral" scale used for both surfaces and ink reads as muddy. Splitting them is non-negotiable.

### Required scales

- `color.neutral.*` — graphite ink (text + structure)
- `color.sand.*` — warm beige (backgrounds + surfaces)
- `color.warm.*` — peach/terracotta accents (illustration, hero pop, celebratory moments)
- `color.primary.*` — brand interactive color
- `color.success.*` — sage / organic green
- `color.warning.*` — amber / warm gold
- `color.error.*` — warm coral-clay red
- **Categorical scales** (if confirmed in interview) — typically 4–6 additional hues, each non-overlapping with the semantic set, for module identity (e.g., `lavender`, `rose`, `sky`, `moss`, `clay`). Same 11-stop structure.

### Output format — table per scale

| Token | Hex | AA on white | UI on white (3:1) |
|-------|-----|-------------|-------------------|
| color.primary.50 | #... | — / ✓ / ✗ | — / ✓ / ✗ |
| ... | | | |

Flag any stop that fails AA (4.5:1 for text, 3:1 for UI components) in its likely use context. Do not leave a failure unflagged. Resolve every failure with a corrected value before delivery.

---

## Layer 2 — Semantic Tokens

Assign meaning to core palette stops. Every token references a core palette token — no raw hex values at this layer.

**Output format:**

| Token | References | Contrast on default bg | Notes |
|-------|------------|------------------------|-------|

### Required tokens

**Backgrounds** — pull from `sand.*`, never `neutral.*`
```
color.background.default     → sand.50
color.background.subtle      → warm.50  (or similar peach-leaning)
color.background.inverse     → sand.900
```

**Text** — pull from `neutral.*`, never `sand.*`
```
color.text.primary           → neutral.900
color.text.secondary         → neutral.700
color.text.disabled          → neutral.400
color.text.inverse           → sand.50  (on dark / saturated surfaces)
color.text.onPrimary         → sand.50  (on filled primary buttons)
```

**Borders** — pull from `neutral.*`
```
color.border.default         → neutral.200
color.border.strong          → neutral.400
color.border.focus           → primary.[stop that clears AAA on bg]
```

**Interactive**
```
color.interactive.default    → primary.[stop that clears AAA on bg, typically 600 or 700]
color.interactive.hover      → primary.[next-darker stop]
color.interactive.pressed    → primary.[next-darker again]
color.interactive.selected   → primary.100
color.interactive.disabled   → sand.200
```

### Gradient utility tokens

Define gradient tokens for container backgrounds and the primary CTA. Gradients live **only** on container surfaces and primary CTAs. Never on text. Never on borders. Keep angle consistent within a screen (135° for cards, 180° for full-page surfaces).

**Required gradient tokens:**

```
gradient.warm-mist     → linear-gradient(180deg, sand.50, warm.50)
gradient.peach         → linear-gradient(135deg, warm.100, warm.200)
gradient.cool-mist     → linear-gradient(135deg, primary.50, sand.50)
gradient.deep-primary  → linear-gradient(135deg, primary.700, primary.900)
```

**Per-module gradients** (one per categorical introduced in Layer 1):

```
gradient.[module]      → linear-gradient(135deg, [module].100, [module].200)
```

Use cases:
- `warm-mist` — page surface, full-screen subtle warmth (180° fade looks intentional, not banded).
- `peach` — hero cards, celebratory empty states, achievement moments.
- `cool-mist` — softly aqua-tinted surfaces (data viz cards, calm moments).
- `deep-primary` — primary CTA on emphasized actions (Save, Continue, primary commit). Pair with a soft drop shadow tinted to the deepest primary stop.
- `[module]` — module identity surfaces (the module's hero card, its onboarding empty state, its featured callout).

If a flat color is sufficient, prefer flat. Reach for gradients when the surface needs depth or when emphasizing a hero/CTA moment.

---

## Layer 3 — Component Tokens

Map semantic tokens to atomic components. Reference semantic tokens only — no raw hex. Flag any pairing that fails contrast in its use context and provide a corrected token reference.

### Buttons

**Primary**
```
button.primary.background          → interactive.default   (or gradient.deep-primary if confirmed)
button.primary.background.hover    → interactive.hover
button.primary.background.press    → interactive.pressed
button.primary.label               → text.onPrimary
button.primary.border              → none
```

If using `gradient.deep-primary` on the primary button, pair with a soft drop shadow:
```
button.primary.shadow              → 0 4px 12px rgba(<primary.700>, 0.25)
button.primary.shadow.hover        → 0 6px 16px rgba(<primary.700>, 0.35)
```

**Secondary (outlined)**
```
button.secondary.background        → transparent
button.secondary.border            → border.strong
button.secondary.label             → text.primary
button.secondary.border.hover      → interactive.default
button.secondary.label.hover       → interactive.default
```

**Ghost**
```
button.ghost.background            → transparent
button.ghost.label                 → interactive.default
button.ghost.label.hover           → interactive.hover
```

**Disabled (all variants)**
```
button.disabled.background         → interactive.disabled
button.disabled.label              → text.disabled
button.disabled.border             → border.default
```

> **Architectural note:** v1 included a separate `button.secondaryAction.*` filled-warm variant (using `interactive.secondary.*` tokens). This is removed in v2 — the interview confirms one primary interactive color. Warm emphasis is now served by the categorical `clay/warm` badge variant and by warm illustration surfaces, not by a second filled-button color.

### Badges and Lozenges

Backgrounds at 100, labels at 700–800. Verify AA contrast for every pairing on the page surface. Flag and correct any failures.

Required semantic variants: `success`, `warning`, `error`, `neutral`, `primary`

If custom categorical variants were confirmed in the interview, add them here using the same pattern. (Convention: each categorical hue maps to one product module — e.g. `lavender` → Health Data, `moss` → DCP, `rose` → Wellbeing, `clay` → Healthy Habits.)

```
badge.[variant].background         → [variant].100
badge.[variant].label              → [variant].800
badge.[variant].border             → [variant].200
```

### Selection Containers

```
selection.default.background       → transparent
selection.default.border           → border.default
selection.default.label            → text.primary

selection.selected.background      → interactive.selected
selection.selected.border          → interactive.default
selection.selected.label           → interactive.default

selection.hover.background         → background.subtle
selection.hover.border             → border.strong

selection.disabled.background      → background.subtle
selection.disabled.label           → text.disabled
selection.disabled.border          → border.default
```

### Focus Ring
```
focus.ring.color                   → border.focus
focus.ring.width                   → 2px
focus.ring.offset                  → 2px
```

### Border Radius Scale
```
radius.sm    → 8px       (inputs, tags, small chips)
radius.md    → 12px      (cards, panels)
radius.lg    → 16px      (modals, bottom sheets)
radius.xl    → 20px      (feature cards, hero containers)
radius.full  → 9999px    (badges, pills, avatar containers)
```

### Data Visualization (if confirmed in interview)

If a separate data viz scale was confirmed, define it here. If shared with the core palette, specify which stops are approved for data viz use and which are reserved for UI only.

For shared-palette data viz, define an **approved categorical hue subset** at the `500` stop:
```
dataviz.1   → primary.500
dataviz.2   → warm.500
dataviz.3   → [categorical_a].500
dataviz.4   → [categorical_b].500
dataviz.5   → [categorical_c].500
dataviz.6   → [categorical_d].500
dataviz.7   → warning.500
```

Reserve from data viz: all `neutral.*`, all `error.*` outside literal error states, all `100/200/400/900+` stops outside accessibility-hardened pairings.

Sequential single-hue gradients (heatmaps, progress fills) use stops `200 → 700` of any approved hue.

---

## Layer 4 — Icon System

### Sizing

Two sizes only. Document any exception with a reason.

```
icon.size.sm     → 20px    (inline, inputs, badges, dense UI)
icon.size.md     → 24px    (default, navigation, standalone)
icon.size.micro  → 16px    (table cells, tags only — exception use)
```

Never 18px or 22px.

### Filled vs. Stroked Rule

```
Stroked   → default state, informational, navigation, unselected, secondary CTAs
Filled    → selected state, active state, primary action emphasis, confirmation
```

Document this rule. Never mix filled and stroked for the same icon across contexts without a documented semantic reason. Tab bars, toggles, and selected list items get filled; the same icon stays stroked when unselected.

### Icon Color Tokens

```
icon.color.default            → text.secondary
icon.color.interactive        → interactive.default
icon.color.onPrimary          → text.onPrimary
icon.color.disabled           → text.disabled
icon.color.success            → success.700
icon.color.warning            → warning.700
icon.color.error              → error.700
```

Icons inside filled containers always use `text.onPrimary` or the component label token — never an independent color.

### Module-tinted icon variant

Module identity icons (the lead/header icon for a module page, tab bar icon, etc.) take the module's categorical hue at the `700` stop:

```
icon.module.[module]          → [categorical_for_module].700
```

This is **scoped to module-identity icons only** — within a module's UI, all other icons revert to `icon.color.default`. The system stays calm; module variety lives at the entry point, not in every nested screen.

### Icon Treatments — five reusable visual recipes

Beyond size and fill, icons need **visual treatment recipes** that communicate role/context without needing distinct icon assets per case. Define five reusable treatments. Each treatment can be applied to any icon (Material Symbols Rounded glyph, etc.) using the existing color tokens — no bespoke art needed.

**1. Solid disc**
```
shape       → circle, radius.full
fill        → [hue].700  (typically primary or module)
icon.color  → text.onPrimary  (sand.50)
size        → 56×56 wrapper, 24px icon (md)
```
Use for: confirmed states, primary action affordances, "completed" markers.

**2. Soft squircle**
```
shape       → squircle (radius.lg + 4px or higher), no border
fill        → [hue].100  (typically module)
icon.color  → [hue].700
size        → 56×56 wrapper, 26px icon (md+2)
```
Use for: list-row leading icons, content category markers, default module-tinted affordances. (This is the recipe used in the v6 Care Paths screen.)

**3. Halo**
```
shape       → circle
fill        → [hue].100  (inner)
ring        → [hue].200, 4–6px halo (radial gradient or layered ring)
icon.color  → [hue].700
size        → 56×56 wrapper, 24px icon
```
Use for: selected/active list items, "currently in progress" indicators, focus moments without a hard ring.

**4. Outlined ring**
```
shape       → circle, transparent fill
border      → [hue].400, 1.5px stroke
icon.color  → [hue].700
size        → 56×56 wrapper, 24px icon
```
Use for: incomplete steps in a sequence, ghost / quiet affordances, secondary categorization.

**5. Duotone wedge**
```
shape       → squircle (radius.lg) with two-tone diagonal split
fill        → linear-gradient(135deg, [hue].100 50%, [hue].200 50%)  (or two distinct fills with sharp boundary)
icon.color  → [hue].700
size        → 56×56 wrapper, 24px icon
```
Use for: emphasized but non-actionable category headers, illustration-adjacent content cards, decorative module markers.

**Selection rules** (which treatment to use when):
- Default list rows / category leading icons → **soft squircle**
- Selected / active state → **solid disc** or **halo**
- Sequenced incomplete states → **outlined ring**
- Confirmed / completed → **solid disc**
- Decorative section header → **duotone wedge**

Demonstrate all five treatments in the preview, applied across every categorical hue, so the team can see the full matrix at a glance.

### Icon System Recommendation

Evaluate and recommend the best open-source icon system based on the aesthetic direction confirmed in the interview.

Primary candidate: **Google Material Symbols Rounded** (variable font version, 2022+)

Justify:
- **Aesthetic fit** — Rounded variant has soft cap-rounded geometry that fits warm/organic direction.
- **Filled & stroked from one source** — variable font axes (`fill`, `weight`, `grade`, `optical size`) toggle filled vs stroked on the same glyph. Solves the filled/stroked rule natively.
- **Free and open-source** — Apache 2.0.
- **Figma support** — official plugin + variable font installable directly.
- **Library breadth** — ~3,300 glyphs covering health, fitness, clinical, navigation.

Alternatives to consider and rule out (or in): **Phosphor** (MIT, friendly, smaller library), **Lucide / Feather** (stroke-only, no native filled), **Tabler** (cool/technical reading).

Be direct — do not hedge.

---

## Layer 5 — Illustration Palette

### Color Range Rule

Illustrations use a constrained subset of the core palette. They must feel ambient and supportive — never competing with UI elements.

```
Illustration surfaces           → sand.50, warm.100, warm.200
Illustration accents            → primary.300, primary.400
Illustration organic tones      → warm.300, warm.400
Illustration character / skin   → warm.200 → warm.700  (broad range — supports diverse skin tones)
Illustration nature accents     → success.300, success.400, [moss.300, moss.400 if introduced]
Illustration sky / water        → primary.200, primary.300, [sky.200/.300 if introduced as categorical]
Illustration emphasis spot      → primary.500 OR warm.500 — one use per illustration maximum
Off-limits                      → error.*, warning.*, neutral.800+
```

Illustrations live in the `100–500` range. The `600+` range belongs to UI emphasis and text.

### Style Direction

Based on the illustration style confirmed in the interview, describe:

- **Stroke weight and line quality** (if line-based)
- **Fill approach** — flat, gradient, or textured
- **Warmth and character cues** — what makes this feel human rather than clinical
- **What to avoid** — cold blues, sharp geometric fills, overtly medical imagery, painterly noise

If two registers were confirmed (e.g., functional/anatomical + expressive/empathic), describe both separately with distinct rules.

### Illustration variant grid (required)

Following the Withings illustration economy: **the same composition gets re-tinted across module palettes** rather than each module commissioning bespoke art. For one anchor composition (typically the hero/onboarding illustration), produce a 4-tile grid demonstrating the palette swap:

| Variant | Surface | Accent | Organic | Emphasis |
|---------|---------|--------|---------|----------|
| Warm-led (default) | warm.100 | warm.300 | warm.500 | warm.500 |
| Module A (e.g. moss / DCP) | moss.100 | moss.300 | moss.500 | moss.500 |
| Module B (e.g. primary / Journeys) | primary.100 | primary.300 | primary.500 | primary.500 |
| Module C (e.g. rose / Wellbeing) | rose.100 | rose.300 | rose.500 | rose.500 |

Render the same SVG composition four times, only the palette swapping. This proves that one piece of bespoke illustration art can carry an entire product's empty/onboarding/celebratory moments — instead of producing N illustrations, you produce 1 + a palette mapping.

Demonstrate this grid in the preview.

---

## Color Weighting Visualization

Required closing artifact for **every test screen and the system preview**.

After each artifact is built, include a **horizontal stacked bar** showing how the design splits the screen by color token, plus a 60-30-10-style summary tagging each role.

### Output format

A single horizontal bar (full container width) divided into segments. Each segment is sized proportionally and labeled with the token name and approximate percentage. Below the bar, a short legend grouping segments into 5–6 buckets:

```
Bucket                    Approx %    Role
──────────────────────────────────────────────────────────────
Surface (sand / gradient) ~60%        Page bg, warm hug
Ink (neutral)             ~15–18%     Text, borders, dividers
Module hue                ~6–12%      Page identity (categorical)
Primary CTA               ~5–8%       Save / Continue / Submit
Accent (warm spots)       ~2–4%       Decorative warmth
[Other / OS chrome]       remaining
```

### Why this matters

Two systems can look similar on paper but feel very different in product because of how the proportions land. Showing the weighting lets the stakeholder sanity-check that the dominant surface, the secondary mood, and the accent moments are at the right ratios — and lets them see at a glance whether the target feeling will land at the proportions used.

### Rule of use

- Estimate proportions from rendered composition; flag estimates as such. Pixel-perfect canvas analysis is not required.
- Group into buckets — don't show every individual stop.
- Apply this proactively to every artifact (preview + every test screen). Don't wait to be asked.

---

## Accessibility Summary

Close with a consolidated accessibility table covering all component pairings:

| Pairing | Foreground | Background | Ratio | AA | AAA | Notes |
|---------|------------|------------|-------|----|-----|-------|

Flag every failure. Provide a resolved value for each — no unresolved failures in the final output.

Audit tool recommendations:
- Figma: Stark plugin, A11y Annotation Kit
- Desktop: Colour Contrast Analyser
- Web: coolors.co/contrast-checker

---

## Stakeholder Narrative

Close with 4–6 sentences suitable for presenting to a CPO or brand stakeholder. Cover:

- What the existing brand contributed to the new palette
- What was intentionally left behind and why
- What the new palette is trying to achieve
- How it positions the product visually in the digital health landscape

Tone: clear, confident, non-designer. This should be readable by someone who does not think in hex values.

---

## Hard Constraints

- **Neutral / sand split is non-negotiable** — `neutral.*` is graphite ink only; `sand.*` is warm surface only. Never use a single uniformly-warm scale for both.
- Purple is not the primary color — available as a categorical (e.g., `lavender`) only.
- Warm-leaning surfaces only — no blue-grey neutrals anywhere in the system.
- All component tokens reference semantic tokens — never raw hex.
- All semantic tokens reference core palette stops — never raw hex.
- All hex values verified for WCAG AA in their intended pairing.
- Gradients live only on container surfaces and primary CTAs. Never on text. Never on borders.
- Icon system must be free and open-source.
- Border radius default range: 16–20px for primary components.
- Each artifact (preview + every test screen) must include a color weighting visualization.
- Any assumption made during build must be noted inline.
