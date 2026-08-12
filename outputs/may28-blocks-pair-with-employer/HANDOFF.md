# CKEditor + CodeMirror split — what goes where

**For:** Jill, ops, anyone editing MHC home blocks
**Companion to:** `CLAUDE-MHC-blocks (1) (2).md` (the authoring rules)
**Last updated:** 2026-05-28

---

## The split, in one sentence

**CKEditor** edits the HTML block files (one per page section). **CodeMirror** edits `mhc-home.css` (one shared stylesheet). The host page loads both at render time.

```
┌─ Host page (system-rendered) ──────────────────────────┐
│  <head>                                                │
│    <link rel="stylesheet" href="mhc-home.css">  ◄── CodeMirror edits this
│  </head>                                               │
│  <body>                                                │
│    <header>…</header>     ◄── host chrome (top bar)     │
│    <main>                                              │
│      [ block-1-greeting-hero.html ]   ◄── CKEditor edits these
│      [ block-2-pair.html          ]                    │
│      [ block-3-thisweek.html      ]                    │
│      [ block-4-insights.html      ]                    │
│      [ block-5-programs.html      ]                    │
│      [ block-6-challenge.html     ]                    │
│      [ block-7-rewards.html       ]                    │
│    </main>                                             │
│    <nav>…</nav>           ◄── host chrome (bottom nav)  │
│  </body>                                               │
└────────────────────────────────────────────────────────┘
```

---

## What goes in CKEditor (each block file)

- The HTML for ONE section of the page
- Mustache tokens (`{{formula.x}}` / `{{user.x}}` / `{{#flag}}…{{/flag}}`)
- Class names that map to styles in `mhc-home.css`
- Inline `style="..."` only for *dynamic* values that can't live in CSS:
  - `style="--p:{{formula.programN_progress_pct}}%"` (per-row progress %)
  - `style="background-image: url('{{formula.heroImage}}')"` (dynamic image URL)

**Must NOT go in a block file:**
- `<style>` tags
- `<script>` tags (or `on*=` handlers, or `javascript:` URLs)
- `<form>`, `<input>`, `<button type="submit">`
- `<html>`, `<head>`, `<body>`, `<link>`, `<meta>`, `<title>`

See `CLAUDE-MHC-blocks (1) (2).md` for the full list.

---

## What goes in CodeMirror (`mhc-home.css`)

- All visual styles: type scale, colors, spacing, shape, layout
- `@media` queries (responsive behavior — desktop, mobile, etc.)
- CSS custom properties (`:root { --bg: …; --ink: …; }`)
- Component classes (`.pair-section`, `.rec-card`, `.pill-edit`, etc.)
- Hover / focus / active states
- Selectors using `:has()`, `:where()`, `:not()` if needed

**Rule of thumb:** if it's the same on every render, it goes here. If it varies per user / per row / per data point, it stays in the block as an inline value or a token.

---

## What goes elsewhere (host page, not authored)

- `<html>` / `<head>` / `<body>` wrappers
- The `<link rel="stylesheet">` tag that loads `mhc-home.css`
- The Material Symbols `<link>` (or whatever icon font is used)
- The top bar (logo + hamburger) and bottom nav — these are platform chrome, not MHC blocks
- The action button slot for blocks like Insights — host injects this between blocks based on the state flags the block exposes
- Mustache rendering — the platform substitutes tokens at render time

---

## CKEditor configuration — verify these BEFORE production

1. **Class attribute preservation.** The blocks rely on dozens of classes (`pair-section`, `rec-card`, `title-1`, `body-3`, `eyebrow`, `meta`, etc.). CKEditor's default ACF strips `class` attributes. Set:
   ```js
   config.allowedContent = true;            // permissive — easiest to start
   // OR a more constrained whitelist if security demands it:
   config.allowedContent = 'p h1 h2 h3 h4 h5 h6 ul ol li a[href] span div section header article footer img[src,alt] svg(*) ...(*){*}';
   ```

2. **Inline `style` attributes.** Some blocks need `style="..."` for dynamic values. Confirm `style` is not stripped from elements that need it (hero media, card thumbs, progress fills).

3. **Mustache tokens.** `{{` and `}}` are plain text from CKEditor's view, but some CKEditor versions HTML-escape them. Roundtrip test: paste a block in, save, copy out, diff. If `{{` becomes `&#123;&#123;`, the tokens won't substitute at runtime.

4. **Custom CSS properties via inline style.** `style="--p:65%"` is non-standard syntax. Some CKEditor sanitizers reject custom-property syntax. Test once with a real progress-bar block.

5. **`aria-*` and `role` attributes.** Used for accessibility. Whitelist them so a11y survives the editor.

---

## Verification checklist (do this once with a real block)

1. Open `host-page-example.html` from one of the bundles in a browser. Confirm it renders correctly with the CSS.
2. Open `block-2-pair.html` in CKEditor. Save it without making any edits. Copy the saved HTML out. **Diff against the original.** Anything that changed is something CKEditor is mangling — flag it and update the config.
3. Open `mhc-home.css` in CodeMirror. Confirm it edits cleanly with no mangling.
4. Wire up a test render: host page + Mustache substitution + CSS file. Confirm a single block renders correctly with real data.
5. Resize the browser narrow (≤ 599 px). Confirm mobile media queries fire (pair section regains its border, cards lose theirs, etc.).

---

## Common gotchas

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| Card content is unstyled (looks like raw HTML) | CSS file not loaded by host page | Add `<link rel="stylesheet" href="mhc-home.css">` in host `<head>` |
| Card classes missing from saved HTML | CKEditor stripped them | Set `config.allowedContent = true` or whitelist classes |
| Progress bar is 0% wide | Inline `style="--p:X%"` was stripped | Whitelist `style` attribute on `.progress__fill` |
| `{{formula.foo}}` shows as literal text on the rendered page | Mustache substitution not running | Verify the template engine fires before the page is served |
| Page looks fine on desktop but cards lose their layout on mobile | `@media (max-width: 599px)` rules in CSS not applying | Confirm `mhc-home.css` is being served fresh (cache-bust) |
| Icons render as text ("redeem", "chevron_right", etc.) | Material Symbols font not loaded | Host page must include the Google Fonts `<link>` for Material Symbols |

---

## Quick reference for who edits what

| Asking to change… | Edit this | Tool |
|--------------------|-----------|------|
| The copy in a section header | `block-N-*.html` | CKEditor |
| The list of items in a section | `block-N-*.html` (add a new repeated row, gated by `hasItemN`) | CKEditor |
| Whether a section appears | `block-N-*.html` (the top-level `{{#formula.hasX}}…{{/}}` suppress) — or the data that drives the flag | CKEditor / data layer |
| Spacing, colors, type sizes | `mhc-home.css` | CodeMirror |
| The 2-column → 1-column breakpoint for the pair row | `mhc-home.css` (`@media (min-width: 600px)`) | CodeMirror |
| The Edit pill style | `mhc-home.css` (`.pill-edit`) | CodeMirror |
| Adding a new section to the home | New block file + add `<link>` reference in host page | CKEditor + platform |

If a change touches both files (e.g. a new class), do CSS first, then HTML. That way the HTML never renders unstyled even briefly.
