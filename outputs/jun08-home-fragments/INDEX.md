# Home fragments — shadow-DOM era

**Date:** 2026-06-08
**Supersedes:** the `may28-blocks-pair-*` bundles (CKEditor + CodeMirror architecture)
**Conforms to:** `html-fragment-authoring-guide.md` (new requirement from the platform team)

---

## What changed and why

The platform team has switched from a CKEditor-edited block + CodeMirror-edited stylesheet model to a **single self-contained HTML fragment per Angular component**, injected at runtime into a shadow root.

The architectural shift is significant:

| Aspect | Old (May 28 bundles) | New (this folder) |
|--------|----------------------|--------------------|
| Delivery unit | 7 separate `block-*.html` files + 1 shared `mhc-home.css` | 1 self-contained fragment per scenario |
| CSS location | External `<link>` to a stylesheet | Inline `<style>` block at the top of each fragment |
| Token scope | `:root` (page-level) | **`:host`** (shadow-root level) |
| Icon strategy | Material Symbols via Google Fonts (ligatures) | **Font Awesome via `@font-face` + Unicode codepoints** |
| SVG | Not used | **Not allowed** (iOS WKWebView doesn't render) |
| Editor | CKEditor for HTML, CodeMirror for CSS | Whichever tool the team uses to edit one HTML file |
| Mustache templating | Yes (every dynamic value tokenized) | **Not in this delivery** — static content for layout verification |

The biggest substantive change: `:root` doesn't exist inside a shadow root, so the entire token system had to move to `:host`. Material Symbols' ligature substitution doesn't work in shadow scope either, so every icon was reauthored as a Font Awesome codepoint reference.

---

## Files

| File | Purpose |
|------|---------|
| **`fragment-home-with-employer.html`** | V1 scenario — interest + employer, two-column pair row |
| **`fragment-home-no-employer.html`** | V2 scenario — single full-width interest section with two cards |
| **`test-harness.html`** | Shadow-DOM injector — pick a fragment from the dropdown and verify it renders |
| **`INDEX.md`** | This file |

---

## How to verify

```bash
cd outputs/jun08-home-fragments
python3 -m http.server 8000
# open http://localhost:8000/test-harness.html
```

The harness mirrors the production injection pattern: `attachShadow({ mode: 'open' })` + `innerHTML = fragmentText`. If the fragment renders identically inside the harness's shadow root and at the test viewports, it will render the same way in the Angular app.

Resize the browser narrow (≤ 599 px) to confirm the mobile bordered-section pattern for the pair row. Test on iOS Safari if possible — that's the strictest environment (no SVG, WKWebView quirks).

---

## Compliance with the authoring guide

Verified against the validation checklist in `html-fragment-authoring-guide.md`:

- ✅ No `<html>`, `<head>`, or `<body>` tags
- ✅ No `<script>` tags (the test harness has one but it's a testing tool, not the fragment itself)
- ✅ No `<svg>` elements
- ✅ No ligature-based icon fonts — all icons are Font Awesome codepoint references (`<span class="fa-icon">&#xf054;</span>`)
- ✅ No `<i class="fa fa-…">` syntax
- ✅ No `:root { ... }` — all tokens on `:host`
- ✅ No `body { ... }` or `html { ... }`
- ✅ Every `font-family` ends in OS fallbacks
- ✅ Every `<img>` would have explicit `width`, `height`, `alt` (the current fragments don't use `<img>` — all icons are font glyphs, all illustrations are CSS gradient placeholders; when real photography is added, this rule applies)
- ✅ Decorative icons have `aria-hidden="true"`; standalone icon buttons carry `aria-label`
- ✅ All asset URLs are public CDN with pinned version (`/6.5.1/` for Font Awesome)
- ✅ Every interactive element has an accessible name
- ✅ Renders correctly in the shadow-root test harness

---

## Icon reference table

Font Awesome 6.5.1 Free codepoints used in these fragments:

| Location | Token (Unicode) | Glyph name | Used by |
|----------|-----------------|------------|---------|
| Top bar | `&#xf0c9;` | `fa-bars` | Hamburger menu |
| Greeting | `&#xf0e0;` | `fa-envelope` | Messages |
| Greeting | `&#xf002;` | `fa-magnifying-glass` | Search |
| Cards | `&#xf054;` | `fa-chevron-right` | Drill-in affordance on every tappable card |
| This-week | `&#xf554;` | `fa-person-walking` | Steps tracker |
| This-week | `&#xf186;` | `fa-moon` | Sleep tracker |
| This-week | `&#xf06d;` | `fa-fire` | Calories tracker |
| This-week | `&#xf2f2;` | `fa-stopwatch` | Active Min tracker |
| Tracker values | `&#xf062;` | `fa-arrow-up` | Trend-up arrow on each tile |
| Insight | `&#xf005;` | `fa-star` | Banner icon |
| Challenge | `&#xf091;` | `fa-trophy` | Banner icon |
| Bottom nav | `&#xf015;` | `fa-house` | Home |
| Bottom nav | `&#xf469;` | `fa-briefcase-medical` | Digital Care |
| Bottom nav | `&#xf004;` | `fa-heart` | Wellbeing |
| Bottom nav | `&#xf5a2;` | `fa-medal` | Benefits |
| Bottom nav | `&#xf06b;` | `fa-gift` | Rewards |

If you swap any icon, look up the new Unicode value at <https://fontawesome.com/icons> and update the codepoint in both fragments.

---

## Hosting Font Awesome locally (optional, recommended for production)

The fragments currently load Font Awesome from `cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/...`. That works for the test harness and for environments with internet access. For production:

1. Download the woff2 + ttf files from the same URLs in the fragment's `@font-face` rule
2. Drop them into the Angular app's `assets/fonts/` directory
3. Update the `@font-face` `src:` to point at the local path (`/weba/assets/fonts/fa-solid-900.woff2`, etc.)

This removes the runtime dependency on Cloudflare's CDN and lets the icons work behind firewalls / on offline-capable apps.

---

## What's NOT in this delivery

- **Mustache templating.** The fragments have static literal content (matching the static bundle from May 28). Tokenizing them for production is the next step — same `{{formula.x}}` / `{{user.x}}` / `{{#flag}}…{{/flag}}` pattern from the previous architecture works fine inside these fragments.
- **Multiple per-section fragments.** The current delivery is one fragment per scenario containing the entire home page. If the platform team prefers one Angular component (and one fragment) per section, the contents can be split — but each fragment would need its own copy of the `<style>` block since `:host` only scopes to one shadow root.
- **The dismiss / less-like-this flow.** Deferred per the Monday discussion plan.
- **Skeleton / loading state.** Still John's #4 ask, still unaddressed in this delivery. The fragment architecture supports it — same file, just a "loading" variant.

---

## Open questions for the platform team

1. **One fragment for the whole home, or one per section?** Current delivery is one-per-scenario covering everything. If Angular has per-section components, we split into 7 fragments (greeting+hero, pair, this-week, insight, programs, challenge, rewards). Each would need its own `<style>` block with the design tokens.
2. **Font Awesome version pin.** Currently `6.5.1`. Confirm this is acceptable or specify a different version.
3. **Material Symbols substitutes.** A few icon choices required interpretation — `auto_awesome` became `fa-star`, `workspace_premium` became `fa-medal`. Worth a review with whoever owns the icon vocabulary.
4. **Photography for hero / pair card thumbs.** Currently CSS-gradient placeholders. When real photography lands, use `<img>` with explicit `width`/`height`/`alt` per guide §5 option A.

---

## File quick-reference

```
outputs/jun08-home-fragments/
├── fragment-home-with-employer.html  ← V1 fragment
├── fragment-home-no-employer.html    ← V2 fragment
├── test-harness.html                 ← shadow-DOM smoke test
└── INDEX.md                          ← this file
```

For context on what was built before this:

```
outputs/may28-blocks-pair-with-employer/   ← previous architecture (CKEditor + CodeMirror)
outputs/may28-blocks-pair-no-employer/     ← previous architecture (CKEditor + CodeMirror)
outputs/may26-pair-row-redesign/           ← v82 monolithic prototypes (source for these fragments)
```

The new architecture supersedes the bundles, but the bundles' INDEX/HANDOFF docs remain useful for understanding the design history and decisions.
