# MHC Component Kit — catalog & composition rules

**What this is:** a copy-and-go kit for composing MHC home-style pages. Grab a component's snippet, drop it into a page, set the order, and the containers / typography / spacing / grids / layout are already consistent — because every component rides one shared stylesheet.

**Load order for a fresh Claude session building a page:**
1. This file (`KIT.md`) — what exists and how to compose it.
2. `mhc-home.css` — the one stylesheet (edited in CodeMirror). Never fork it per page.
3. `reference/innovations/CLAUDE-MHC-blocks (1) (2).md` — the block authoring rules (no `<form>`, no JS, stretched-link pattern, tokens). Non-negotiable.
4. `BREAKPOINTS.md` — the responsive thresholds. `GAPS.md` — what can't be a block.

**Where the code lives:** each component has a **render frame** (`frame-<name>.html`, sample data, links `mhc-home.css`) used by the gallery, and a **showcase page** (`component-<name>.html`) with the live playground, breakpoints, and the **tokenised markup to paste**. Open `index.html` for the visual sticker sheet, and **`page-compose.html`** for a full page assembled from kit snippets (the copy-and-go proof + per-session clone template). Modeled on the Material 3 kit (component type → variants → responsive).

---

## The two-file split (who edits what)

| Layer | File(s) | Tool | Rule |
|---|---|---|---|
| **Structure** (HTML blocks) | `block-*.html` / your page | CKEditor | Classes + Mustache tokens. One section per block. No `<style>`/`<script>`/`<form>`. |
| **Style** (all visuals) | `mhc-home.css` | CodeMirror | Type, colour, spacing, shape, layout, `@media`. Same on every render → lives here. |
| **Host** (not authored) | page shell, top bar, bottom nav, action buttons | platform | Owns `<html>/<head>/<body>`, the CSS `<link>`, and injected action buttons. |

Rule of thumb: **same on every render → CodeMirror. Varies per user/row → a token in the block.**

---

## Composition recipe (build a page)

1. **Wrap** the page in the shell + rail (host-owned, but this is the container):
   ```html
   <div class="shell"><div class="shell__rail">
     <!-- blocks go here, in order -->
   </div></div>
   ```
2. **Order the blocks** top to bottom. The proven home order:
   `greeting → hero → pair → this-week (trackers) → insight → programs → challenge → rewards`.
   Each block is its own `<div class="mhc-home">…</div>` wrapper (suppressible).
3. **Group** hero + pair inside the recommendations supergroup when you want them clustered:
   ```html
   <div class="recommendations"> <!-- hero block --> <!-- pair block --> </div>
   ```
4. **Wrap listy sections** in `<section class="section">` with a `.section-head` (title + optional trailing link), then the grid container.
5. **Pick the grid** (see table) — it handles the responsive columns for you.
6. **Paste the component snippet** from its `component-*.html` page. Keep tokens if going to CKEditor; swap tokens for real values if rendering a static demo.

You specify **order + which grid + which components**; the kit guarantees the rest.

---

## Catalog

### Cards (M3 · Cards) — all live
| Component | File | Root class | Grid it sits in | Responsive headline |
|---|---|---|---|---|
| Pair card | `component-pair.html` | `.pair-card` | `.pair` (1→2 col) | thumb 80² → 160×120 4:3 @≥1200 |
| Program card | `component-program.html` | `.program` | `.programs` (carousel→3-col) | 16:9 media; Compact carousel |
| Reward card | `component-reward.html` | `.reward` | `.rewards` (2→4 col) | 4 chip colourways |
| Tracker tile | `component-tracker.html` | `.tracker` | `.trackers` (2→4 col) | 4 accent variants + zero state |
| Insight banner | `component-insight.html` | `.insight` | — (full width) | state-flag driven; icon hidden <600 |
| Challenge banner | `component-challenge.html` | `.challenge` | — (full width) | stacks + icon hidden <600 |

### Heroes — live
| Hero | `component-hero.html` | `.hero` | inside `.recommendations` | stacked 216px → 5/7 split @360px; photo recrops |

### Lists & grids (M3 · Lists, Carousel) — live · `component-lists.html`
| Grid class | Columns | Used by |
|---|---|---|
| `.trackers` | 2 → 4 @600 | tracker tiles |
| `.rewards` | 2 → 4 @600 | reward cards |
| `.programs` | carousel <600 → 3 @600 | program cards |
| `.pair` | 1 → 2 @600 | pair cards |

### Rows (M3 · List items) — live · `component-rows.html`
`.section-head` (title + trailing link) · `.pair-card__row` (thumb + body) · meta row (`.eyebrow` + `.dot`) · `.greeting`.

### Atoms (M3 · Chips, Buttons, Dividers, Badges, Progress) — live · `component-atoms.html`
`.reward-chip` (chip) · `.btn.btn-text` on `<a>` (text-link, the only authorable button) · `.icon-btn` (icon button) · `.banner-icon` · `.progress`/`.progress__fill` · `.*__link` (stretched-link) · `--hairline` divider.

### Page behavior — live · `component-page-behavior.html`
`.shell` + `.shell__rail` (container, 1280→1440 @1600) · `.section` (40dp rhythm) · `.recommendations` (supergroup) · the Compact/Medium/Large/XL engine.

### Foundations (M3 · Styles) — live · `component-foundations.html`
`:root` tokens (colour/shape/spacing) + 24 atomic type classes. **Theming & token rework are deferred** — the kit uses the current values as-is.

---

## Consistency guarantees (why it's copy-and-go)

- **One container system:** all cards use the same surface (`--surface` bg, `--hairline` 1px border, `--r-xl` radius, `--s-04` padding). Drop any card into any grid — it matches.
- **One type scale:** 24 atomic classes; two responsive tiers (Compact/Medium share the smaller scale, Large ≥1200 bumps up). Never hand-set font sizes.
- **One spacing scale:** `--s-01…--s-09`. Grids and sections consume it; you don't set margins.
- **One clickable pattern:** whole-card links use the stretched-link atom (CKEditor-safe). Never wrap a card in `<a>`.
- **One image system:** media shells lock aspect (3:2 / 16:9 / 4:3) so any photo crops predictably. (Add `background-size:cover` to the shells in `mhc-home.css` — see GAPS.)

---

## Known caveats (see GAPS.md for the full list)
- Media shells (`.hero__media`, `.program__media`, `.pair-card__thumb`) need `background-size:cover; background-position:center` for real photos.
- Progress bar uses inline `style="--p:X%"` — verify CKEditor doesn't strip custom-property inline styles.
- Icons need the Material Symbols font `<link>`; the demo photos need internet (picsum). Offline handoff → inline SVG icons + local images.
- `.tracker--zero` is named in block comments but not in the CSS yet.
