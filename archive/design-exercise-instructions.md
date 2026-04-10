# Design System Constitution — Umbrella Partners (MHC)

You are building UI for a mobile health application called Umbrella Partners
for Mobile Health Consumer (MHC). The platforms are iOS (SwiftUI), Android
(Jetpack Compose), and Angular web. This constitution governs the Angular web
implementation unless otherwise specified.

---

## Component Library

Use **Angular Material 21.0.5** exclusively. Do not introduce custom CSS
components when a Material equivalent exists. Prefer MDC-based components.

**Preferred component mapping:**

| Pattern | Component |
|---|---|
| Navigation | `mat-sidenav`, `mat-toolbar` |
| Data display | `mat-card`, `mat-list`, `mat-table` |
| Primary CTA | `[mat-flat-button]` |
| Secondary action | `[mat-stroked-button]` |
| Tertiary / ghost | `[mat-button]` |
| Inputs | `mat-form-field` with `matInput`, `mat-select`, `mat-datepicker` |
| Feedback | `mat-snack-bar`, `mat-progress-bar`, `mat-spinner` |
| Overlays | `mat-dialog` (desktop), `mat-bottom-sheet` (mobile breakpoints) |
| Icons | `mat-icon` — Material Symbols Outlined only |

---

## Spacing & Layout

- Base grid: **8pt**. All spacing values must be multiples of 8 (4px minimum increment).
- Internal component padding: **16px**
- Section gaps: **24px**
- Page margins (desktop): **32px**
- Page margins (mobile < 600px): **16px**
- Use **Angular CDK `BreakpointObserver`** for responsive logic — not raw CSS media queries.

---

## Typography

Follow the Material Type Scale strictly. Do not introduce custom font sizes
outside this scale.

| Role | Token | Size |
|---|---|---|
| Page titles | `headline-medium` | 28sp |
| Section headers | `title-large` | 22sp |
| Card titles | `title-medium` | 16sp |
| Body copy | `body-medium` | 14sp |
| Labels / captions | `label-medium` | 12sp |

---

## Color

Use the Angular Material theming system with CSS custom properties.
Do not hardcode hex values in component templates — use `var(--mat-*)` tokens
or the Angular Material theme mixin system.

- **Primary:** Health-forward teal/blue — not generic purple
- **Surface:** Near-white with subtle elevation shadows — not flat
- **Error states:** Material error tokens only

> When MHC design tokens are fully wired, this section will be updated
> to reference the token file directly.

---

## Elevation

- Default card elevation: `mat-elevation-z2`
- Cards should feel like physical containers — not flat boxes
- Do not introduce drop shadows outside the Material elevation system

---

## Interaction & Motion

- All interactive elements must have a visible **focus ring** — do not suppress `outline` globally
- Use Angular Material's built-in **ripple** for touch feedback
- Page transitions: simple **fade** (150ms ease-out) — no bounce or slide unless
  the specific screen pattern explicitly requires it
- Loading states: `mat-progress-bar` at the top of the content area — not
  full-screen spinners unless it is the initial app load

---

## Density

- Target **medium density** (Material `density: 0`) — not ultra-compact, not spacious
- Health data needs breathing room — err toward generous whitespace over packed layouts

---

## Visual Reference

Calibrate output against **Withings Health Mate** (iOS/Android). Borrow specifically:

- Information hierarchy in data cards: metric large, label small, trend subtle
- Generous whitespace — not packed
- Color restraint: one accent per screen, not multiple competing colors

> Do NOT replicate Withings' visual style directly. Use it as a benchmark
> for density and hierarchy only.

---

## What to Avoid

- No inline styles on Angular components
- No arbitrary Tailwind utilities alongside Material — pick one system
- No one-off button or card variants — extend the theme instead
- No unlicensed or non-Material icon names in `mat-icon`
- No gradients unless explicitly requested
- No drop shadows outside the Material elevation system
- No hardcoded hex color values in templates

---

## When in Doubt

Choose the more **conservative** option. A plain `mat-card` with correct
typography beats a custom component with incorrect spacing every time.

**Consistency over creativity.**
