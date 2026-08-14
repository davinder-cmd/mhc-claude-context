# LifeForce Web — Build Framework

Reference for the `outputs/aug12-lifeforce-web/` build. What the system is, the rules it holds to, and how to extend it. Aimed at Ren (eng) and future design sessions.

---

## 1. Files

| File | Role |
|---|---|
| `lifeforce.css` | The whole component system + responsive rules + type scale. Every screen links it. |
| `icons.css` | Self-contained masked icons (no webfont, no network). Every screen links it. |
| `*.html` (19 screens) | One page per state. Identical shell; only the main column changes. |
| `docnav.js` | Review-only flip-through pill (`☰ / ‹ Prev / N / Next ›`). **Not product code** — strip on handoff. |
| `index.html` | Review gallery, grouped by act. Not a product screen. |
| `single-block-01.html` | A self-contained paste-as-one-unit demo of screen 01 for the CodeMirror sandbox. |

**Global markup contract** (identical on every screen):
`<header class="appbar">` → `<main class="wrap">` ( `titleblock` → `layout`( `col main` + `col rail` ) ) → `<nav class="bottomnav">`.

---

## 2. Type scale — the one source of truth

Canonical scale: **`design/foundation/typography.md` (MHC Type System v3, adopted 2026-05-23).** rem-based, root left at browser default (16px). **Valid web steps only:** 11, 12, 14, 16, 18, 20, 23, 25, 28, 29, 32, 36, 40, 41, 45… — **never 13, 15, 13.5, 9, 21, 22.**

**Three tiers (Compact / Medium / Large).** Type changes at **600** and **1200** — mapped to Material window classes. Compact `<600`, Medium `600–1199`, **Large `≥1200`** (web wide-screen). Medium→Large steps the *primary reading hierarchy* up one role (page title 29→32, headings 23→25, titles 18→20, body 16→18); **captions/small/eyebrows/labels stay at Medium**. Full spec: `design/foundation/typography.md` § Responsive tiers. Guardrail: body copy capped at ~68ch (measure), Large is the ceiling.

**Type ≠ layout.** Separate axes: **type** at 600 + 1200; **layout** (rail + bottom nav) flips at **1200**; **hero card** reflows at **600**.

**Implementation.** Base rules carry the Compact size; a `@media(min-width:600px)` block (Medium) then a `@media(min-width:1200px)` block (Large) **at the end of `lifeforce.css`** carry the bumps — they must stay last so they override base rules defined later in the file (this bit us once — later-defined components silently ignored a mid-file bump).

### Class → scale-role map
| Component class | Role | Compact → Medium+ |
|---|---|---|
| `.page-title` | Heading 5 | 25 → 29 |
| `.focal-title` `.phase-title` `.alert-title` `.wait-card .wt` | Heading 6 | 20 → 23 |
| `.data-cell .dv` (metric) | Heading 6 | 20 → 23 |
| `.row-title` `.sec-title` `.status-card .st` `.invite-title` | Title 2 | 16 → 18 |
| `.nurse-note .nt` `.appt-when` | Title 3 | 14 → 16 |
| `.focal-body` `.alert-body` `.phase-note` `.status-card .sb` `.invite-text` `.sup-value` `.linkrow` `.wait-card .wb` `.nurse-note .nb` | Body 3 | 14 → 16 |
| `.ph-count` `.ph-note` `.row-meta` `.nurse-note .nm` `.phase-ends` `.data-cell .dl` `.appt-sub` `.note-muted` | Caption | 12 → 14 |
| `.data-cell .dg` | Small | 11 → 12 |
| `.eyebrow` `.row-eyebrow` `.sec-eyebrow` `.ph-label` `.support-header` `.invite-eyebrow` `.appt-cf` `.alert-card .eyebrow` | Eyebrow | 11 → 12 |
| `.btn` (buttons/CTAs), `.tabs a`, `.btn-ghost`, `.invite-link`, `.phase-link` | Label 0–1 | static (labels don't grow) |

**Rules:** no off-scale font sizes; no inline `style="font-size"`; new visual role → new class mapped to a scale role, never a patched one-off.

---

## 3. Responsive model (the two dials)

| Width | Shell | Hero card |
|---|---|---|
| **<600** | single column, bottom nav | image on top (vertical) |
| **600–1199** | single column (rail drops to bottom), bottom nav | image left ~46% (horizontal) |
| **≥1200** | two columns (main + sticky rail), no bottom nav | image left ~46% (horizontal) |

- **Shell flip: 1200** (Material "Large"). Below 1200 it's a single column with the **full-width horizontal hero card**; the rail only appears at ≥1200 where there's genuine room — at ~1025 a two-column split cramped both the card and the rail. Bottom nav + rail switch on this one line.
- **Hero card flip: 600** — image ≤46% / max 420px, so it never becomes a full-bleed banner.
- **Type flips: 600 (Medium) and 1200 (Large)** (see §2).
- Body max-width 1200 (Large) → 1440 (XL). Margins 16 (Compact) → 24 (Medium+). Material 3 window sizes.

---

## 4. Icons — self-contained masks

No webfont, no network. Each glyph is an inline `data:` URI **CSS mask** in `icons.css`, tinted by `currentColor`.
- Markup: `<span class="msym msym--science" aria-hidden="true"></span>` inside a container (`.row-icon`, `.sup-icon`…).
- Container sets the box + tint (`color`); `.msym` fills with `currentColor` → **themes for free** on partner reskin.
- Swap art: replace one line in `icons.css` (`.msym--science{--i:url("data:…")}`) — changes everywhere, no markup edits.
- Source: Material Symbols Outlined, weight 400, FILL 0.
- Survives HTML sanitizers (the shape lives in CSS, not the markup) — important for the CodeMirror/config layer.

---

## 5. Accessibility (WCAG 2.2 AA)

- **Semantic controls:** `<button>` for actions, `<a href>` for navigation; app-bar back is `<button aria-label="Back">`. All keyboard-operable.
- **Focus:** `:focus-visible` ring, never suppressed.
- **Icons:** decorative `msym`/svg are `aria-hidden`; icon-only controls carry names.
- **Landmarks:** `<header>` · `<main>` · labelled `<nav>`.
- **Type in rem**, root at default → survives 200% zoom / Dynamic Type. No px font sizes.
- **Reduced motion** honoured.
- **Build-time (for Ren):** add `aria-live` on progress / phase / status regions so updates announce.

---

## 6. Extending the system

1. New text role → add a class, map it to a scale role in §2, put the Compact size on the base rule and the Medium+ bump in the end-of-file block.
2. New icon → add `.msym--name{--i:url("data:…")}` to `icons.css`; use `<span class="msym msym--name" aria-hidden="true">`.
3. Never inline `font-size`, never introduce an off-scale value, never hardcode an icon hue (use `currentColor`).
4. Breakpoints: hero card at **600**, shell (rail + bottom nav) at **1200**; type at **600 (Medium)** and **1200 (Large)**.

---

## 7. Open items

- **Page 01 reconciled** — its local `<style>` preview was promoted to `lifeforce.css`; nothing is page-scoped now, and the hero is on-scale (Heading 5 at Large).
- Conformance bridge audit not yet run on the refactored components (pre-handoff).
- `aria-live` regions (§5) are a build-time task for Ren.
- Push tokens (canvas, Standard button, state layers, Large tier) into the Figma design-system file.

---

## 8. Global treatments added (Aug 12)

All in `lifeforce.css`, applied to every page via tokens/classes.

| Treatment | What / where |
|---|---|
| **Page background** | `--canvas: #F6F4F2` — faint-warm tonal off-white. One token, all pages. |
| **Segmented control (tabs)** | Full-width segmented control that **spans across the top** at every width. |
| **Three type tiers + measure cap** | Compact/Medium/Large (600 + 1200); body copy capped at 68ch. See §2. |
| **Large-tier spacing** | ≥1200: card padding 32, gaps 20→24, list rows 24×28, hero body 36×32. |
| **State layers** | `foundation/state-layers.md` — hover 8 / focus 10 / pressed 12 on `.btn`, list/support/link rows, bottom nav. Pointer-gated; focus ring still primary. |
| **Focal CTA** | On the horizontal hero/alert card (≥600): 48px, Label-0 16, fit-content, left-aligned. |
| **Standard "Start" button on action rows** | Enrollment Next-steps rows swap the caret for the Figma **Standard** button (`#F3F2EF` / `#226DB5`, 40px pill) at ≥1200, plus a 56px leading icon. Scoped with `:has(.row-cta)` — **navigation rows keep their chevron**. |

**Still page-scoped / open:** none — page 01's local preview was removed; the set is fully driven by `lifeforce.css` + `icons.css`.

**Not yet done:** conformance bridge audit; `aria-live` on progress/phase/status (build-time, Ren); push tokens (canvas, Standard button, state layers, Large tier) into the Figma design-system file.
