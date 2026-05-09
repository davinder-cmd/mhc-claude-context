---
version: alpha
name: Mobile Health Consumer
description: >
  Token contract for the MHC consumer app. Conforms to the Google DESIGN.md
  spec (https://github.com/google/design.md). Reflects the current locked
  color direction (D11, "Light Active") sourced from outputs/design-system/v6.
  The legacy Figma library "Design Building Blocks" is the prior generation
  and is being superseded — token names match where possible, hex values do not.
colors:
  # ── Surface family — warm sand foundation ─────────────────────────────
  sand-50: "#FAF6F0"
  sand-100: "#F2EBDF"
  sand-200: "#E5DAC4"
  sand-300: "#D6C5A6"
  sand-400: "#C4AC85"
  sand-500: "#A88E69"
  sand-600: "#8B7251"
  sand-700: "#6E593F"
  sand-800: "#524230"
  sand-900: "#2A2620"
  sand-950: "#1A1612"

  # ── Ink family — near-neutral graphite (warm hue, low chroma) ─────────
  neutral-50: "#FAF8F5"
  neutral-100: "#F0EBE3"
  neutral-200: "#DDD5C7"
  neutral-300: "#B5AC9C"
  neutral-400: "#8C857A"
  neutral-500: "#6B645A"
  neutral-600: "#5C564E"
  neutral-700: "#4A453E"
  neutral-800: "#38332E"
  neutral-900: "#2C2A26"
  neutral-950: "#1A1815"

  # ── Primary — sky-teal bridge (D2 direction-locked) ───────────────────
  primary-50: "#EFF5FA"
  primary-100: "#DAE9F2"
  primary-200: "#B5D2E5"
  primary-300: "#82B0CE"
  primary-400: "#5290B5"
  primary-500: "#34759E"
  primary-600: "#2A6489"
  primary-700: "#235173"
  primary-800: "#1D425C"
  primary-900: "#163346"
  primary-950: "#0D2030"

  # ── Status ────────────────────────────────────────────────────────────
  success-100: "#DFEAD0"
  success-600: "#587746"
  success-700: "#486238"
  warning-100: "#F9E3B0"
  warning-600: "#9F6D1B"
  warning-700: "#815816"
  error-100: "#F8DBD2"
  error-600: "#933D24"
  error-700: "#76311D"

  # ── Module categoricals (badges, glyphs, dots, borders only) ──────────
  warm-300: "#ECAD78"   # warm/clay module
  warm-500: "#C8744A"
  moss-300: "#76A185"   # moss module
  moss-600: "#2A573B"
  lavender-300: "#A096D5"  # lavender module
  lavender-500: "#6053A8"
  fuchsia-400: "#C95A98"   # fuchsia/success module
  fuchsia-600: "#913568"
  indigo-300: "#8990CC"    # AI surface accent
  indigo-500: "#494F95"
  rose-400: "#D45D6E"      # categorical only

  # ── Semantic roles (reference primitives above) ───────────────────────
  background: "{colors.sand-50}"
  surface: "{colors.sand-50}"
  surface-subtle: "{colors.sand-100}"
  surface-inverse: "{colors.neutral-900}"
  on-surface: "{colors.neutral-900}"
  on-surface-secondary: "{colors.neutral-700}"
  on-surface-tertiary: "{colors.neutral-500}"
  on-surface-disabled: "{colors.neutral-400}"
  on-inverse: "{colors.sand-50}"
  on-primary: "{colors.sand-50}"
  border: "{colors.neutral-200}"
  border-strong: "{colors.neutral-400}"
  border-focus: "{colors.primary-600}"
  border-ai: "{colors.indigo-300}"

typography:
  display-lg:
    fontFamily: Source Serif 4
    fontSize: 48px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -0.01em
  display-md:
    fontFamily: Source Serif 4
    fontSize: 40px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Source Serif 4
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.005em
  headline-md:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.25
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.3
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.5
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.25
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0.04em
  number-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.25
    fontFeature: '"tnum" on'

rounded:
  none: 0px
  xs: 2px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  '2xl': 20px
  full: 9999px

spacing:
  '01': 2px
  '02': 4px
  '03': 8px
  '04': 16px
  '05': 24px
  '06': 32px
  '07': 40px
  '08': 64px
  '09': 80px
  '10': 96px
  '11': 128px

components:
  button-primary:
    backgroundColor: "{colors.primary-600}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    height: 44px
    padding: 12px 24px
  button-primary-hover:
    backgroundColor: "{colors.primary-700}"
  button-primary-pressed:
    backgroundColor: "{colors.primary-800}"
  button-primary-disabled:
    backgroundColor: "{colors.sand-200}"
    textColor: "{colors.on-surface-disabled}"

  button-secondary:
    backgroundColor: "{colors.sand-50}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    height: 44px
    padding: 12px 24px
  button-secondary-hover:
    backgroundColor: "{colors.sand-100}"

  button-text:
    backgroundColor: "{colors.sand-50}"
    textColor: "{colors.primary-600}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 12px 0

  card:
    backgroundColor: "{colors.sand-50}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: 24px

  chip:
    backgroundColor: "{colors.sand-100}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    height: 28px
    padding: 4px 12px

  badge:
    backgroundColor: "{colors.sand-50}"
    textColor: "{colors.on-surface-secondary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 4px 10px

  text-field:
    backgroundColor: "{colors.sand-50}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    height: 44px
    padding: 12px 16px
  text-field-focus:
    backgroundColor: "{colors.sand-50}"
---

# Mobile Health Consumer Design System

## Overview

MHC is a consumer-facing digital health app for working adults (29–58) managing 2+ chronic conditions. Every visual decision must read **credible to the buyer** *and* **human to the member** — if it pulls only one direction, it's wrong.

The aesthetic is **Clinical-Modern Distinctive** — the Hinge Health / Sword Health cluster. Five brand attributes act as the rubric: *Credible, Direct, Outcome-obsessed, Human, AI-competent*.

This file is the agent-readable token contract. Behavioral rules (when to use what) live in Notion. Visual specs live in the Figma file `Design Building Blocks`. See [`_index.md`](./_index.md) for the routing map between all three.

## Colors

The palette has three architectural families plus four module categoricals.

- **Surface family — `sand.*`.** Warm limestone foundation. Page backgrounds, card fills, hover states. Softer and more organic than pure white; never pure-grey, never cool. `sand-50` is the canonical page background.
- **Ink family — `neutral.*`.** Near-neutral graphite, hue ~28°, chroma 4–6%. Used for *all* text, borders, dividers. **Never brown, never cool blue-grey.** This is the rule that keeps the warm surface from contaminating the ink.
- **Primary — `primary.*`.** Sky-teal bridge anchored loosely to legacy Aqua Blue (`#04a0b7`). `primary-600` is the canonical interactive color. `primary-700` for hover, `primary-800` for pressed.
- **Module categoricals — `warm`, `moss`, `lavender`, `fuchsia`.** Identity color for badges, glyphs, dots, and 1px borders only. Never used as a primary CTA, never as a surface fill.
- **AI surface — `indigo.*`.** Reserved for AI moments (Insights, Coach, Expert). Not a categorical — a designated visual register. `border-ai` uses `indigo-300`.
- **Status — `success`, `warning`, `error`.** Always paired with text or icon. Color alone never communicates meaning.

**Retired:** Brand Blue `#0f497f` (corporate use only — not a product color). Purple as primary (categorical only). Pastel washes. Gradients on text or borders.

## Typography

A confident editorial display face plus a clean modern sans. Display carries warmth; sans carries clinical precision. Together they hit Clinical-Modern Distinctive.

- **Display + headlines (≥24px):** Source Serif 4. Editorial gravity for hero and section heads.
- **Body, UI, labels:** Inter. 16px floor for body. Sentence case on all interactive elements — never ALL CAPS for emphasis.
- **Numerical / outcomes data:** Inter with tabular figures (`fontFeature: '"tnum" on'`). Use `number-md` for any data point that participates in alignment.
- **Avoid:** system-default sans, rounded display faces, decorative serifs, three or more families on a single surface.

Body line-height is 1.5; display/headline 1.1–1.25. Underline is reserved for links — never used for emphasis.

## Layout

Twelve-column responsive grid. Body content has a strict max width per breakpoint.

| Breakpoint | Range | Margin | Gutter | Body width | Columns |
|---|---|---|---|---|---|
| Extra-small (phone) | 0–599px | 16px | 16px | scaling | 4 |
| Small (tablet) | 600–904px | 32px | 16px | scaling | 8 |
| Small–Medium | 905–1239px | scaling | 24px | 840px | 12 |
| Medium (laptop) | 1240–1439px | 200px | 24px | scaling | 12 |
| Large (desktop) | 1440px+ | scaling | 24px | 1040px | 12 |

Spacing scale uses 4dp base unit. **Never** introduce a value off this scale. The full ladder is `spacing.01` (2px) through `spacing.11` (128px); standard internal padding is `spacing.04` (16px); section separation is `spacing.06` (32px).

Content within layout regions does *not* align to the grid — only the regions themselves do.

## Elevation & Depth

Depth comes from **tonal layers**, not heavy shadows. Background uses `surface`; primary content sits on `surface-subtle` with a 1px `border` above it.

When shadow is needed, four levels:

- **Depth 0** — flat. Default for in-flow surfaces.
- **Depth 1** — `0 1px 3px rgba(20,18,16,0.04)`. Card separation.
- **Depth 2** — `0 4px 12px rgba(20,18,16,0.06)`. Dropdowns, popovers.
- **Depth 3** — modal/overlay only.

Primary CTAs may carry a tinted shadow: `0 2px 8px rgba(35,81,115,0.16)`.

## Shapes

Shape language is **soft architectural**. Most components use `rounded.lg` (12px) for cards and surfaces, `rounded.sm` (4px) for inputs and dividers, and `rounded.full` for buttons and chips.

Border widths: 1px (default — text fields, dividers, popovers), 2px (button emphasis, focus rings), 4px (large dividers only). The 2px focus ring is **never suppressed**.

## Components

The `components:` token block above defines a baseline for the most common atoms. The richer behavioral docs (variants, decision history, escalation rules) live in the per-component files under [`atoms/`](./atoms/) and [`components/`](./components/) — those are the source of truth for *when* to use a thing. This DESIGN.md only specifies *what it looks like*.

The full inventory and status (✅ Ready, 🔶 Partial, 🚧 Stub) is in [`_index.md`](./_index.md).

## Do's and Don'ts

- **Do** use `primary-600` only for the single most important interactive moment per screen.
- **Do** keep ink (`neutral.*`) and surface (`sand.*`) families separate — never mix a sand-tinted text color or a neutral-tinted background.
- **Do** maintain WCAG AA contrast (4.5:1 for normal text, 3:1 for UI components and large text).
- **Do** label every AI moment visibly. AI says when it doesn't know.
- **Don't** use module categorical colors (`warm`, `moss`, `lavender`, `fuchsia`) as a primary CTA color. They are identity-only.
- **Don't** apply gradients to text or borders. Container surfaces and primary CTAs only.
- **Don't** use color alone to communicate meaning — always pair status colors with text or an icon.
- **Don't** introduce a hex value, type size, or spacing value outside the tokens defined here. Escalate instead.
- **Don't** use ALL CAPS for emphasis, exclamation marks, or default emoji in member-facing copy.
