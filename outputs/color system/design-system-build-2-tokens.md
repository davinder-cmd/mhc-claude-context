# Design System Build — Part 2: Tokens + Figma Export
> Run this file only after the designer has reviewed and confirmed the palette from Part 1.

---

## Role

You are a senior brand and design systems expert from one of the world's top digital health design agencies. The core palette has been approved. You are now building the complete token system on top of it and exporting it as a Figma-ready variables JSON.

---

## Source of Truth

- Confirmed input summary from the interview
- Approved palette from Part 1 (hex values are now fixed — do not change them)
- If the designer requested any palette adjustments before confirming, apply those first and note them

---

## Delivery Order

Build in strict sequence. Do not begin a layer until the previous one is complete.

```
Layer 2 → Semantic tokens
Layer 3 → Component tokens
Layer 4 → Icon rules
Layer 5 → Illustration palette
Layer 6 → Figma variables JSON export
          Accessibility summary
          Stakeholder narrative
```

---

## Layer 2 — Semantic Tokens

Assign meaning to the approved core palette stops. Every token references a core palette token — no raw hex at this layer.

**Output format:**

| Token | References | Hex (resolved) | Contrast on default bg | Notes |
|-------|------------|----------------|------------------------|-------|

### Required Tokens

**Backgrounds**
```
color.background.default
color.background.subtle
color.background.inverse
```

**Text**
```
color.text.primary
color.text.secondary
color.text.disabled
color.text.inverse
color.text.onPrimary
```

**Borders**
```
color.border.default
color.border.strong
color.border.focus
```

**Interactive**
```
color.interactive.default
color.interactive.hover
color.interactive.pressed
color.interactive.selected
color.interactive.disabled
```

---

## Layer 3 — Component Tokens

Map semantic tokens to atomic components. Reference semantic tokens only — no raw hex. Flag any pairing that fails contrast and provide a corrected reference.

### Buttons

**Primary**
```
button.primary.background         → interactive.default
button.primary.background.hover   → interactive.hover
button.primary.background.press   → interactive.pressed
button.primary.label              → text.onPrimary
button.primary.border             → none
```

**Secondary (outlined)**
```
button.secondary.background       → transparent
button.secondary.border           → border.strong
button.secondary.label            → text.primary
button.secondary.border.hover     → interactive.default
button.secondary.label.hover      → interactive.default
```

**Ghost**
```
button.ghost.background           → transparent
button.ghost.label                → interactive.default
button.ghost.label.hover          → interactive.hover
```

**Disabled (all variants)**
```
button.disabled.background        → interactive.disabled
button.disabled.label             → text.disabled
button.disabled.border            → border.default
```

### Badges and Lozenges

Backgrounds at 100, labels at 700–800. Verify AA contrast for every pairing on white. Flag and correct any failures.

Required variants: `success`, `warning`, `error`, `neutral`, `primary`

If custom categorical variants were confirmed in the interview, add them using the same pattern.

```
badge.[variant].background        → [variant].100
badge.[variant].label             → [variant].800
badge.[variant].border            → [variant].200
```

### Selection Containers

```
selection.default.background      → transparent
selection.default.border          → border.default
selection.default.label           → text.primary

selection.selected.background     → interactive.selected
selection.selected.border         → interactive.default
selection.selected.label          → interactive.default

selection.hover.background        → background.subtle
selection.hover.border            → border.strong

selection.disabled.background     → background.subtle
selection.disabled.label          → text.disabled
selection.disabled.border         → border.default
```

### Focus Ring
```
focus.ring.color                  → border.focus
focus.ring.width                  → 2px
focus.ring.offset                 → 2px
```

### Border Radius Scale
```
radius.sm    → 8px
radius.md    → 12px
radius.lg    → 16px
radius.xl    → 20px
radius.full  → 9999px
```

### Data Visualization (if confirmed in interview)

If a separate data viz scale was confirmed, define it here. If shared with the core palette, specify which stops are approved for data viz use and which are reserved for UI only.

---

## Layer 4 — Icon System

### Sizing
```
icon.size.sm    → 20px   (inline, inputs, badges, dense UI)
icon.size.md    → 24px   (default, navigation, standalone)
```

Micro-context only: 16px (table cells, tags). Document any use of a third size with a reason.

### Filled vs. Stroked Rule
```
Stroked   → default state, informational, navigation, unselected
Filled    → selected state, active state, emphasis, confirmation
```

### Icon Color Tokens
```
icon.color.default          → text.secondary
icon.color.interactive      → interactive.default
icon.color.onPrimary        → text.onPrimary
icon.color.disabled         → text.disabled
icon.color.success          → success.700
icon.color.warning          → warning.700
icon.color.error            → error.700
```

Icons inside filled containers always use `text.onPrimary` or the component label token — never an independent color.

### Icon System Recommendation

Evaluate and recommend the best open-source icon system based on the aesthetic direction confirmed in the interview. Assess against:

- Aesthetic fit with the palette and component softness
- Stroked and filled variant availability
- Free and open-source license
- Figma plugin or direct import support

Be direct — confirm the recommendation or make the case for an alternative.

---

## Layer 5 — Illustration Palette

### Color Range Rule
```
Illustration surfaces         → neutral.50, warm.100, warm.200
Illustration accents          → primary.300, primary.400
Illustration organic tones    → warm.300, warm.400
Illustration emphasis         → primary.500 (one use per illustration max)
Off-limits                    → error.*, warning.*, neutral.800+
```

### Style Direction

Based on the illustration style confirmed in the interview, describe:
- Stroke weight and line quality
- Fill approach — flat, gradient, or textured
- Warmth and character cues
- What to avoid

---

## Layer 6 — Figma Variables JSON Export

Generate a Figma-compatible variables JSON file. Name it `figma-variables.json`.

### Structure

Use the Figma Variables API format with two collections:

**Collection 1: `Core Palette`**
All raw color stops from Part 1. These are the primitive values.

```json
{
  "name": "Core Palette",
  "modes": ["Value"],
  "variables": [
    {
      "name": "primary/50",
      "type": "COLOR",
      "values": { "Value": { "r": 0.0, "g": 0.0, "b": 0.0, "a": 1 } }
    }
  ]
}
```

**Collection 2: `Semantic Tokens`**
All semantic and component tokens. These reference Core Palette variables — not raw hex values.

```json
{
  "name": "Semantic Tokens",
  "modes": ["Light"],
  "variables": [
    {
      "name": "background/default",
      "type": "COLOR",
      "values": {
        "Light": {
          "type": "VARIABLE_ALIAS",
          "key": "Core Palette/neutral/50"
        }
      }
    }
  ]
}
```

### Requirements

- All hex values converted to Figma's 0–1 RGB float format
- Semantic tokens must alias Core Palette variables — not duplicate hex values
- Component tokens must alias Semantic Token variables
- Group variables using `/` as a path separator (e.g. `button/primary/background`)
- Include all tokens from Layers 2 and 3
- Include border radius values as `FLOAT` type variables
- Include icon size values as `FLOAT` type variables

---

## Accessibility Summary

Consolidated table of all component token pairings:

| Component | Foreground token | Background token | Hex fg | Hex bg | Ratio | AA | AAA |
|-----------|-----------------|------------------|--------|--------|-------|----|-----|

Flag every failure. Provide a resolved token reference for each — no unresolved failures.

---

## Stakeholder Narrative

4–6 sentences suitable for presenting to a CPO or brand stakeholder:
- What the existing brand contributed
- What was intentionally left behind and why
- What the new palette achieves emotionally and functionally
- How it positions the product in the digital health landscape

Tone: clear, confident, non-designer. Readable by someone who does not think in hex values.

---

## Hard Constraints

- Purple is not the primary color — available as secondary or tertiary only
- Warm-leaning neutrals only — no blue-grey
- All component tokens reference semantic tokens — never raw hex
- All semantic tokens reference core palette stops — never raw hex
- All hex values verified for WCAG AA in their intended pairing
- Icon system must be free and open-source
- Border radius default range: 16–20px for primary components
- Any assumption made during build must be noted inline
- Do not alter any hex values approved in Part 1

This list is mirrored in [`MAP.md` § Hard Constraints](MAP.md#hard-constraints) as the program-wide index. If a constraint changes, update it here first; MAP.md reflects.

---

## Post-approval logging

After the designer confirms tokens + Figma JSON (and only then), close out the iteration:

1. Save outputs into the version folder:
   - `v{N}/figma-variables.json`
   - `v{N}/tokens-summary.md` — a one-page summary of Layers 2 + 3 + 4 + 5 (token tables, icon recipes, illustration palette, accessibility summary, stakeholder narrative). Optional if everything fits in the JSON, but recommended for stakeholder review.
2. Append the final iteration entry to [`decisions.md`](decisions.md) covering any token-layer decisions that aren't already logged (icon system choice, data-viz scale call, illustration palette boundaries, gradient policy if used).
3. Update [`MAP.md`](MAP.md):
   - Bump every **Active program state** row to `v{N}` (status `current`).
   - Mark the prior version (if any) as `superseded` in the **Versions** table.
   - Append `v{N}` row to **Versions** with status `current` and a one-line description.
   - Resolve or update the **Open gaps** table (e.g., remove "First build" once v1 lands; add new gaps if applicable).
4. Update [`DESIGN.md`](DESIGN.md) Color and Typography sections — replace the "TBD — pending first build" placeholders with the locked direction. Keep DESIGN.md as a snapshot, not a log; one-paragraph descriptions, not full token tables.
