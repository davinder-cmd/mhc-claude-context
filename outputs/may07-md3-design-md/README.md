# MHC Home — design.md experiment

Experiment: rebuild the v12 home page from a single source of truth declared in [Google's design.md format](https://www.npmjs.com/package/@google/design.md).

## Files

| File | Purpose |
|---|---|
| `DESIGN.md` | Design system spec — YAML token front matter (Material 3 token names, MHC values) + markdown rationale (calm-and-scannable principles, do's and don'ts) |
| `index.html` | Responsive home page that consumes only tokens declared in `DESIGN.md`. CSS custom properties at the top of `<style>` mirror the YAML tree 1:1 |

## What's in the DESIGN.md

| Token group | Notes |
|---|---|
| `colors` | M3 token names (surface, on-surface, primary, secondary, tertiary, etc.) carrying MHC's v6 warm-neutral values. Sand surfaces, graphite ink, sky-teal CTA, moss for DCP, indigo for AI, warm for rewards |
| `typography` | SF Pro Display + Text in 11 type roles (display-lg → label-caps), Major Second scale |
| `rounded` | xs/sm/md/lg/xl/full (4 / 8 / 12 / 16 / 20 / 9999 px) |
| `spacing` | 4 dp base — 1 through 9 = 4 / 8 / 12 / 16 / 24 / 32 / 40 / 64 / 80 |
| `components` | button-primary, button-secondary, button-ghost, card, card-tile, ai-band, divider, thumb-round |

## Validate / export

```bash
# lint the spec
npx @google/design.md lint DESIGN.md

# export as Tailwind v4 CSS theme
npx @google/design.md export --format css-tailwind DESIGN.md > theme.css

# export as W3C DTCG tokens.json
npx @google/design.md export --format dtcg DESIGN.md > tokens.json
```

## Open the page

```bash
open index.html
```

Resize from <600 px (small form) → 600–904 → ≥905 to see the responsive reflow:

- Lanes pair → stack at <905
- Programs grid 3 → 2 → 1 cols
- Tracker 4 → 2 cols at <600
- Hero image-left flips to image-on-top at <905
- Display sizes shift down one step at <600

## Why this is interesting

- **Single source of truth** — every value in `index.html` resolves from `DESIGN.md`. No magic numbers in the CSS.
- **Lintable** — `npx @google/design.md lint` catches contrast issues, broken token refs, missing primary, orphan tokens.
- **Portable** — same DESIGN.md exports to Tailwind, Figma variables, or W3C DTCG tokens.
- **Documented** — the markdown body explains *why* the system is the way it is (calm rationale, restraint rules, do's and don'ts), so a coding agent that reads this can extend the system without re-deriving the principles.

## What's missing vs. v12

- Tracker icons are emoji (👣 🌙 🔥 ⚡) — placeholders pending real iconography
- Hero image is a CSS gradient stand-in — production would swap to an `<img>` per `feedback_neutral_vs_surface_warmth`
- No interaction layer (focus states, button hovers in JS, modal patterns)
