# Home page · component sheet

**Date:** 2026-06-09
**Folder:** `outputs/jun09-component-sheet/`
**Companion to:** `outputs/jun08-home-fragments/` (the shadow-DOM fragment architecture this sheet's components conform to) and `outputs/jun09-rewards-banners/` (full set of rewards-banner variants this sheet links to)

---

## What this is

A single HTML page that catalogues every component built for the home page redesign. Each component shows up as a card with:

1. **A live preview** of the component
2. **A copy-pasteable HTML source snippet** (the same HTML used in the preview — one source of truth via `<template>`)
3. **Notes** on variants, icon codepoints, and when to use it

It's a shareable artifact. The admin team can open it in any browser, scroll through, expand the "HTML source" disclosure on the component they need, and copy the snippet straight into whatever they're editing.

---

## What's in the sheet

Ten component sections. Pair row is one section with two variants (V1 + V2).

| # | Component | Notes |
|---|-----------|-------|
| 01 | Top bar | Hamburger + logo |
| 02 | Greeting | "Hi Davinder" + date + mail/search icons |
| 03 | Hero | 3:2 art panel + body + CTA, stacks on mobile |
| 04 | Pair row · V1 + V2 | With-employer (2 cols) and no-employer (1 col, 2 cards) |
| 05 | This Week | 4 tracker tiles |
| 06 | Insight banner | Sparkle + insight text + refresh |
| 07 | Programs (Keep going) | 3 cards with progress bars |
| 08 | Challenge banner | Trophy + name + standing |
| 09 | Rewards banner | Single-reward (Direct rewards example); full set linked out |
| 10 | Bottom nav | 5-item mobile nav |

The rewards section deliberately shows only one of the 12 variants — the rest live in [outputs/jun09-rewards-banners/](../jun09-rewards-banners/) so this sheet stays scannable.

---

## How to view

```bash
cd outputs/jun09-component-sheet
python3 -m http.server 8766
# open http://localhost:8766/home-components-sheet-v1.html
```

The sheet is a regular HTML page — full `<html>`/`<head>`/`<body>` structure, because it's a documentation artifact, not a fragment. The **components inside** are written in the shadow-DOM fragment style (no `<head>`, no `<script>`, class-only selectors, Font Awesome codepoint references) so they can be copied into the admin editor as-is.

---

## How the source-of-truth pattern works

Each component section has a hidden `<template>` element holding the component HTML. A tiny inline script (40 lines, at the bottom of the file) does two things on page load:

1. Clones the template's contents into the component's preview area
2. Copies the template's source string into the `<code>` block for display

So when you edit a template, both the preview AND the code snippet update in lockstep. There's no risk of the preview drifting away from the code.

This is the one place the sheet uses JavaScript. The script lives in the sheet shell — **the components themselves are pure HTML + CSS**.

---

## Compatibility with the fragment architecture

Every component snippet in this sheet honors the rules from `html-fragment-authoring-guide.md`:

- ✅ No `<svg>` (all icons are Font Awesome `&#xCODEPOINT;` references)
- ✅ No ligature-based icon fonts
- ✅ No `<i class="fa fa-…">` syntax
- ✅ Class-only selectors
- ✅ Every interactive element has an accessible name
- ✅ Decorative icons are `aria-hidden="true"`

The component CSS in this sheet is currently written under a `.mhc-home { ... }` wrapper instead of `:host { ... }`. When porting a snippet into a fragment, swap the wrapper:

- In the sheet (regular HTML page): styles scoped to `.mhc-home`
- In a fragment (shadow root): styles scoped to `:host`

Class names and structure don't change. Only the wrapper selector does.

---

## Icon reference table

Same set as the jun08 fragments. Font Awesome 6.5.1 Free codepoints:

| Glyph | Codepoint | Used by |
|-------|-----------|---------|
| `fa-bars` | `&#xf0c9;` | Top bar menu |
| `fa-envelope` | `&#xf0e0;` | Greeting mail icon |
| `fa-magnifying-glass` | `&#xf002;` | Greeting search icon |
| `fa-chevron-right` | `&#xf054;` | Drill-in affordance on every tappable card |
| `fa-person-walking` | `&#xf554;` | Steps tracker |
| `fa-moon` | `&#xf186;` | Sleep tracker |
| `fa-fire` | `&#xf06d;` | Calories tracker |
| `fa-stopwatch` | `&#xf2f2;` | Active min tracker |
| `fa-arrow-up` | `&#xf062;` | Trend-up arrow |
| `fa-arrow-down` | `&#xf063;` | Trend-down arrow (variant) |
| `fa-star` | `&#xf005;` | Insight banner |
| `fa-trophy` | `&#xf091;` | Challenge banner |
| `fa-gift` | `&#xf06b;` | Rewards banner |
| `fa-house` | `&#xf015;` | Bottom nav · Home |
| `fa-briefcase-medical` | `&#xf469;` | Bottom nav · Digital Care |
| `fa-heart` | `&#xf004;` | Bottom nav · Wellbeing |
| `fa-medal` | `&#xf5a2;` | Bottom nav · Benefits |

---

## Open questions

1. **Should the sheet include legacy variants?** Currently it shows only the canonical version of each component. The earlier May 28 block bundles and the v82 pair-row variations are superseded; including them would add noise. If we want to preserve them for historical reference, that's a separate "archive sheet" deliverable.
2. **Tokenization.** Components show static content. If we want a fragment-ready version (with `{{token.path}}` placeholders), that's a quick mechanical pass on top of this.
3. **State variants for the hero.** The hero notes call out three states (standard, in-progress, zero-state). Today only standard is shown. Worth a follow-up to add the other two if needed for the admin team.
4. **Photography placeholders.** Hero, pair-row card thumbs, and program covers all use CSS gradients today. When production photography lands, swap them for `<img>` tags with explicit width / height / alt.

---

## Companion deliverables on Jun 9

| Folder | What |
|--------|------|
| `outputs/jun09-rewards-banners/` | 12-variant single-reward-banner ideation HTML — referenced by the Rewards section of this sheet |
| Figma section "Single-reward banners — ideation v1 · Jun 9" | Same 12 variants converted into Figma frames next to the May 25 rewards-module ideation node |

---

## File quick-reference

```
outputs/jun09-component-sheet/
├── home-components-sheet-v1.html  ← the sheet (open in browser)
└── INDEX.md                       ← this file
```
