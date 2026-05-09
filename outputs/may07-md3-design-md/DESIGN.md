---
version: alpha
name: MHC Calm & Scannable
description: Warm-neutral health-platform UI — sand surfaces, graphite ink, sky-teal interactivity, restrained categorical accents.
colors:
  # Surface family — warm sand foundation (M3 token names, MHC values)
  surface: "#FAF6F0"
  surface-dim: "#F2EBDF"
  surface-bright: "#FFFFFF"
  surface-container-lowest: "#FFFFFF"
  surface-container-low: "#FAF6F0"
  surface-container: "#F2EBDF"
  surface-container-high: "#E5DAC4"
  surface-container-highest: "#D6C5A6"

  # Ink — neutral graphite, never brown
  on-surface: "#2C2A26"
  on-surface-variant: "#4A453E"
  outline: "#8C857A"
  outline-variant: "#DDD5C7"

  # Primary — sky-teal CTA
  primary: "#2A6489"
  on-primary: "#FAF6F0"
  primary-container: "#DAE9F2"
  on-primary-container: "#1D425C"

  # Secondary — moss for DCP / activity
  secondary: "#2A573B"
  on-secondary: "#FAF6F0"
  secondary-container: "#D5E2D8"
  on-secondary-container: "#234630"

  # Tertiary — indigo for AI labeling (never as wash)
  tertiary: "#343864"
  on-tertiary: "#FAF6F0"
  tertiary-container: "#B7BCE3"
  on-tertiary-container: "#0F1120"

  # Warm — habits / rewards, sparingly used
  warm: "#8A4A26"
  on-warm: "#FAF6F0"
  warm-container: "#FAE7D5"
  on-warm-container: "#4D2914"

  # State
  error: "#933D24"
  on-error: "#FAF6F0"
  warning: "#815816"

  # Inverse
  inverse-surface: "#2C2A26"
  inverse-on-surface: "#FAF6F0"

  background: "#FAF6F0"
  on-background: "#2C2A26"

typography:
  display-lg:
    fontFamily: SF Pro Display
    fontSize: 36px
    fontWeight: "600"
    lineHeight: 40px
    letterSpacing: -0.028em
  headline-lg:
    fontFamily: SF Pro Display
    fontSize: 28px
    fontWeight: "600"
    lineHeight: 32px
    letterSpacing: -0.022em
  headline-md:
    fontFamily: SF Pro Display
    fontSize: 24px
    fontWeight: "600"
    lineHeight: 28px
    letterSpacing: -0.018em
  headline-sm:
    fontFamily: SF Pro Display
    fontSize: 22px
    fontWeight: "600"
    lineHeight: 26px
    letterSpacing: -0.018em
  title-lg:
    fontFamily: SF Pro Display
    fontSize: 20px
    fontWeight: "600"
    lineHeight: 24px
    letterSpacing: -0.012em
  title-md:
    fontFamily: SF Pro Display
    fontSize: 18px
    fontWeight: "600"
    lineHeight: 22px
    letterSpacing: -0.012em
  body-lg:
    fontFamily: SF Pro Text
    fontSize: 18px
    fontWeight: "400"
    lineHeight: 28px
  body-md:
    fontFamily: SF Pro Text
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 24px
  body-sm:
    fontFamily: SF Pro Text
    fontSize: 14px
    fontWeight: "400"
    lineHeight: 20px
  label-md:
    fontFamily: SF Pro Text
    fontSize: 12px
    fontWeight: "500"
    lineHeight: 16px
  label-caps:
    fontFamily: SF Pro Text
    fontSize: 11px
    fontWeight: "600"
    lineHeight: 14px
    letterSpacing: 0.08em

rounded:
  none: 0
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 20px
  full: 9999px

spacing:
  base: 4px
  1: 4px
  2: 8px
  3: 12px
  4: 16px
  5: 24px
  6: 32px
  7: 40px
  8: 64px
  9: 80px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.full}"
    height: 44px
    padding: 12px 22px
  button-primary-hover:
    backgroundColor: "{colors.on-primary-container}"
  button-secondary:
    backgroundColor: "{colors.surface-container-lowest}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.full}"
    padding: 8px 16px
  button-ghost:
    backgroundColor: "{colors.surface-container-lowest}"
    textColor: "{colors.primary}"
  card:
    backgroundColor: "{colors.surface-container-low}"
    rounded: "{rounded.lg}"
    padding: "{spacing.5}"
  card-tile:
    backgroundColor: "{colors.surface-container-low}"
    rounded: "{rounded.md}"
    padding: "{spacing.4}"
  ai-band:
    backgroundColor: "{colors.surface-container-low}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.5}"
  divider:
    backgroundColor: "{colors.outline-variant}"
    height: 1px
  thumb-round:
    backgroundColor: "{colors.surface-container-high}"
    rounded: "{rounded.full}"
    size: 72px
---

# DESIGN.md — MHC Calm & Scannable

## Overview

A health-platform UI that reads as **calm, readable, and editorial**. The visual register is **warm-neutral**: sand-toned surfaces carry warmth so cards feel inviting rather than clinical, while ink stays in graphite for neutrality and contrast. Categorical hues — moss for care paths, indigo for AI, warm for rewards — appear only as small accents (eyebrow tags, dots, narrow ring strokes), never as surface washes.

The page is paced for daily-returning members: ~6 distinct items above the fold, generous whitespace between bands, and a single primary action per section. Everything else collapses to "see N more" links.

## Colors

The palette is rooted in a warm-sand foundation with graphite ink and one true interactive color.

- **Surface (#FAF6F0):** Warm sand at base — softer than pure white, less institutional than pure neutral. Used as page background and the default card surface.
- **On Surface (#2C2A26):** Graphite ink for primary text. Neutral, **not brown** — the warmth lives in surfaces, never in type.
- **Outline Variant (#DDD5C7):** Hairline borders and dividers between list items.
- **Primary (#2A6489):** Sky-teal, the single CTA color. Used for primary buttons, "see more" links, edit links.
- **Secondary (#2A573B):** Moss — Digital Care Path identity. Eyebrow dots, progress fills, movement-metric ring strokes.
- **Tertiary (#343864):** Indigo — AI labeling only. Borders and dot accents on AI surfaces; never as a background wash.
- **Warm (#8A4A26):** Burnt sienna for rewards / habits moments, used sparingly on eyebrow tags and dots.

## Typography

Two SF Pro families: **Display** for headings and numerics, **Text** for body and metadata.

- **Display sizes** (`display-lg`, `headline-*`, `title-*`) — SF Pro Display, Semibold, tight negative tracking. Reads as editorial, not utility.
- **Body sizes** (`body-lg`, `body-md`, `body-sm`) — SF Pro Text, Regular weight, comfortable 1.4–1.6 line-height. `body-md` is 16 px to meet WCAG AA at default zoom.
- **Label** (`label-md`, `label-caps`) — SF Pro Text, Semibold, 11–12 px. `label-caps` is uppercase with 0.08em tracking for eyebrow tags.

The scale is Major Second (1.125), one step smaller than typical web defaults — the calm aesthetic rewards confident, smaller type.

## Layout

- **4 dp grid.** Spacing tokens map to multiples of 4: 4, 8, 12, 16, 24, 32, 40, 64, 80.
- **Section padding** — 24/32/40 (mobile/tablet/desktop). Tighter than typical "spacious" SaaS pages; the rhythm comes from generous internal padding within cards plus 1 px section dividers between bands.
- **1200 px max-width** at desktop with 32 px gutter; collapses to single column under 905 px.

## Shapes

- Cards: `rounded.lg` (16 px)
- Tiles: `rounded.md` (12 px)
- Buttons: `rounded.full` (pill)
- Inputs: `rounded.sm` (8 px)
- Avatars and ring icons: `rounded.full` (circle)

## Components

- **`button-primary`** — solid Primary fill, On-Primary text, drop-shadow `0 2px 8px rgba(35,81,115,0.16)`. At most one per visible section.
- **`card`** — Surface Container Low fill, 1 px Outline Variant border, 16 px rounded, 24 px padding. Used for lane containers and large content groupings.
- **`card-tile`** — same fill + border, 12 px rounded, 16 px padding. Used for tracker tiles, programs grid items, reward tiles.
- **`ai-band`** — same fill but Tertiary border and Tertiary dot/text on the eyebrow only. Surface stays sand. **Never** swap the fill to a tertiary tint.
- **`divider`** — 1 px Outline Variant rule. Between lane items (replacing per-item card chrome) and between top-level sections.
- **`thumb-round`** — 72 × 72 circle, surface-container-high fill, used as lane-item image anchor.

## Do's and Don'ts

**Do**

- Use one primary CTA per section, never two.
- Use Display Semibold + tabular-nums for big values (tracker ring values, reward amounts, program $ rewards).
- Show source labels on every content surface ("Source: MHC Library", "Source: Acme HR", "Source: Apple Health").
- Use round 72 px thumbs in lane items, not rectangles.

**Don't**

- Don't put warm beige on text or borders — surfaces only. Type stays graphite.
- Don't bathe AI surfaces in indigo. Indigo is glyph + border + dot; the surface stays sand.
- Don't use more than ~6 visible items above the fold.
- Don't introduce a sixth chroma. The palette is fixed at graphite, sky-teal, moss, indigo, warm, plus state colors.
