# Design System Build
> Run this file after the interview is confirmed. The confirmed input summary from the interview is your source of truth. Do not ask clarifying questions — use the summary to resolve any ambiguity.

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
Layer 1 → Core palette scales
Layer 2 → Semantic tokens
Layer 3 → Component tokens
Layer 4 → Icon rules
Layer 5 → Illustration palette
```

---

## Layer 1 — Core Palette Scales

Build the raw color scales. No semantic meaning attached yet. Nine stops per scale (50 through 950). Warm-leaning. No blue-grey neutrals.

Required scales:
- `color.neutral.*`
- `color.warm.*` — tint scale derived from primary, for surfaces and illustration
- `color.primary.*`
- `color.success.*`
- `color.warning.*`
- `color.error.*`

**Output format — table per scale:**

| Token | Hex | AA on white | AA on neutral.50 |
|-------|-----|-------------|------------------|
| color.primary.50 | #... | ✓ / ✗ | ✓ / ✗ |
| ... | | | |

Flag any stop that fails AA (4.5:1 for text, 3:1 for UI components) in its likely use context. Do not leave a failure unflagged.

---

## Layer 2 — Semantic Tokens

Assign meaning to core palette stops. Every token references a core palette token — no raw hex values at this layer.

**Output format:**

| Token | References | Contrast on default bg | Notes |
|-------|------------|------------------------|-------|

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

Map semantic tokens to atomic components. Reference semantic tokens only — no raw hex. Flag any pairing that fails contrast in its use context and provide a corrected token reference.

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

Required semantic variants: `success`, `warning`, `error`, `neutral`, `primary`

If custom categorical variants were confirmed in the interview, add them here using the same pattern.

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
radius.sm    → 8px     (inputs, tags, small chips)
radius.md    → 12px    (cards, panels)
radius.lg    → 16px    (modals, bottom sheets)
radius.xl    → 20px    (feature cards, hero containers)
radius.full  → 9999px  (badges, pills, avatar containers)
```

### Data Visualization (if confirmed in interview)

If a separate data viz scale was confirmed, define it here. If shared with the core palette, specify which stops are approved for data viz use and which are reserved for UI only.

---

## Layer 4 — Icon System

### Sizing

Two sizes only. Document any exception with a reason.

```
icon.size.sm    → 20px   (inline, inputs, badges, dense UI)
icon.size.md    → 24px   (default, navigation, standalone)
```

Micro-context only: 16px (table cells, tags). Never 18px or 22px.

### Filled vs. Stroked Rule

```
Stroked   → default state, informational, navigation, unselected
Filled    → selected state, active state, emphasis, confirmation
```

Document this rule. Never mix filled and stroked for the same icon across contexts without a documented semantic reason.

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

Evaluate and recommend the best open-source icon system based on the aesthetic direction confirmed in the interview.

Primary candidate: **Google Material Icons, Rounded variant**
Secondary reference quality: **Withings icons** (clean, minimal, lighter stroke weight)

Assess against:
- Aesthetic fit with warm/soft digital health direction
- Stroked and filled variant availability
- Free and open-source license
- Figma plugin or direct import support

Confirm Material Rounded or make the case for an alternative. Be direct — do not hedge.

---

## Layer 5 — Illustration Palette

### Color Range Rule

Illustrations use a constrained subset of the core palette. They must feel ambient and supportive — never competing with UI elements.

```
Illustration surfaces         → neutral.50, warm.100, warm.200
Illustration accents          → primary.300, primary.400
Illustration organic tones    → warm.300, warm.400
Illustration emphasis         → primary.500 (one use per illustration maximum)
Off-limits                    → error.*, warning.*, neutral.800+
```

Illustrations live in the 100–400 range. The 500+ range belongs to the UI.

### Style Direction

Based on the illustration style confirmed in the interview, describe:

- Stroke weight and line quality (if line-based)
- Fill approach — flat, gradient, or textured
- Warmth and character cues — what makes this feel human rather than clinical
- What to avoid — cold blues, sharp geometric fills, overtly medical imagery

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

- Purple is not the primary color — available as secondary or tertiary only
- Warm-leaning neutrals only — no blue-grey
- All component tokens reference semantic tokens — never raw hex
- All semantic tokens reference core palette stops — never raw hex
- All hex values verified for WCAG AA in their intended pairing
- Icon system must be free and open-source
- Border radius default range: 16–20px for primary components
- Any assumption made during build must be noted inline
