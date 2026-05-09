---
version: alpha
name: MHC Calm & Scannable — Muted (Fitbit-toned)
description: Cool off-white surfaces, desaturated categorical accents — pulled back from warm-neutral toward a quieter, more clinical Fitbit-like register.
colors:
  # Surface family — cool off-white base (vs warm-neutral sand in v1)
  surface: "#F5F7FA"
  surface-dim: "#ECEFF3"
  surface-bright: "#FFFFFF"
  surface-container-lowest: "#FFFFFF"
  surface-container-low: "#F5F7FA"
  surface-container: "#ECEFF3"
  surface-container-high: "#DDE2EA"
  surface-container-highest: "#CDD3DD"

  # Ink — cool graphite (was warm graphite)
  on-surface: "#1F2937"
  on-surface-variant: "#4B5563"
  outline: "#94A3B8"
  outline-variant: "#D1D5DB"

  # Primary — muted teal-blue (was saturated sky-teal #2A6489)
  primary: "#4D7B95"
  on-primary: "#FFFFFF"
  primary-container: "#D6E4ED"
  on-primary-container: "#1F3D4E"

  # Secondary — muted sage (was saturated moss #2A573B)
  secondary: "#6B8E5A"
  on-secondary: "#FFFFFF"
  secondary-container: "#DCE6D4"
  on-secondary-container: "#2D4023"

  # Tertiary — muted indigo for AI labeling (was #343864)
  tertiary: "#6F73A0"
  on-tertiary: "#FFFFFF"
  tertiary-container: "#DDDFEC"
  on-tertiary-container: "#2A2D52"

  # Warm — muted terracotta for rewards (was #8A4A26)
  warm: "#B68B5C"
  on-warm: "#FFFFFF"
  warm-container: "#F0E2D0"
  on-warm-container: "#5C3F1D"

  # State
  error: "#B05A4A"
  on-error: "#FFFFFF"
  warning: "#A07835"

  # Inverse
  inverse-surface: "#1F2937"
  inverse-on-surface: "#F5F7FA"

  background: "#F5F7FA"
  on-background: "#1F2937"

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
    backgroundColor: "{colors.surface-container-lowest}"
    rounded: "{rounded.lg}"
    padding: "{spacing.5}"
  card-tile:
    backgroundColor: "{colors.surface-container-lowest}"
    rounded: "{rounded.md}"
    padding: "{spacing.4}"
  ai-band:
    backgroundColor: "{colors.surface-container-lowest}"
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

# DESIGN.md — MHC Calm & Scannable · Muted (Fitbit-toned)

## Overview

A muted, **cool-toned** variant of the calm-and-scannable system. The warm-neutral sand foundation has been pulled back to a cool off-white; categorical accents have been desaturated by roughly 40–50%. The page reads quieter, more clinical — closer to Fitbit's editorial register than to a wellness magazine. Same calm/scannable principles, lower contrast, less chromatic energy.

## Colors

The palette shift from v1 (warm-neutral) → muted (Fitbit-toned):

| Role | v1 (warm-neutral) | This variant (muted) |
|------|-------------------|----------------------|
| Surface | `#FAF6F0` warm sand | **`#F5F7FA` cool off-white** |
| On Surface | `#2C2A26` warm graphite | **`#1F2937` cool graphite** |
| Outline Variant | `#DDD5C7` warm hairline | **`#D1D5DB` cool gray** |
| Primary | `#2A6489` saturated sky-teal | **`#4D7B95` muted teal-blue** |
| Secondary (DCP) | `#2A573B` deep moss | **`#6B8E5A` sage** |
| Tertiary (AI) | `#343864` deep indigo | **`#6F73A0` dusty indigo** |
| Warm (rewards) | `#8A4A26` burnt sienna | **`#B68B5C` muted terracotta** |

The surface family stays inside the M3 surface ladder, but the entire ramp is cool-shifted (off-white instead of sand). All categorical accents use 60-stop equivalents instead of 600/700 — desaturated, lower-contrast, easier on the eye for daily-returning members.

## Typography

Unchanged from v1. SF Pro Display + Text, Major Second scale.

## Layout

Unchanged from v1. 4 dp grid, 24/32/40 section padding, 1200 max-width.

## Shapes

Unchanged from v1.

## Components

- **Lanes** now show **one featured item** + a "see more" link. Less density, single anchor. Best for low-noise daily use; the second-tier content lives one tap away.
- All other components unchanged from v1.

## Do's and Don'ts

**Do**

- Use one featured lane item plus a "see N more" link — surface the most relevant, defer the rest.
- Keep AI / DCP / Reward eyebrows in their muted hues; the lower saturation is the point.
- Hold the cool-shifted surface ramp — don't reintroduce sand tones for warmth.

**Don't**

- Don't bump primary back to saturated teal. The muted register is the differentiator.
- Don't replace the sage with a saturated green; it'll fight the page's calm.
- Don't expand to multiple items per lane — that defeats the muted, single-anchor design intent.
