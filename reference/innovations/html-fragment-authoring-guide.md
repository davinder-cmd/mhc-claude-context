# Generating HTML Layout Fragments for Our System

## What you are producing

An HTML **fragment** that the host application injects at runtime into a shadow root inside an Angular component, then renders inside:

- Desktop browsers (Chromium, Safari, Firefox)
- iOS app via WKWebView (**does not render SVG** in our environment)
- Android app via Android WebView

The fragment is everything you output. It is **not** wrapped in `<html>`, `<head>`, or `<body>`. The host provides those, outside the shadow root your fragment lives in.

---

## Hard rules

### 1. No `<html>`, `<head>`, or `<body>` tags

These get stripped when the HTML is parsed into a shadow root. Selectors targeting them will never match.

- **Wrong:** `body { background: var(--bg); }`
- **Right:** `:host { display: block; background: var(--bg); }`

### 2. Design tokens go on `:host`, never `:root`

`:root` matches `<html>`. `<html>` does not exist inside a shadow root, so custom properties declared on `:root` are never inherited by anything in your fragment.

```css
:host {
  --bg: #FAF7F0;
  --ink: #1A1D21;
  --f-text: "SF Pro Text", -apple-system, BlinkMacSystemFont, "Roboto", Arial, sans-serif;
  display: block;
  background: var(--bg);
  color: var(--ink);
  font-family: var(--f-text);
}
```

### 3. No `<script>` tags

Scripts are not allowed in fragments. Anything that requires JavaScript at runtime is out of scope — no runtime font registration, no animations triggered by JS, no event handlers, no `<script>` tags at all.

### 4. No `<svg>` elements

Our iOS environment does not render SVG. Use one of the icon approaches below instead.

### 5. Icons: choose either image assets or Font Awesome

Both approaches are supported. Pick one per fragment (mixing is fine but usually unnecessary).

#### Option A: Image assets (`<img>`)

Use `<img>` with PNG, JPG, or WebP `src`. Provide a public CDN URL, explicit `width`/`height` to prevent layout shift, and accurate `alt` text — empty `alt=""` for purely decorative icons paired with a visible text label, descriptive `alt` for standalone icons.

```html
<!-- Decorative icon next to a visible label: alt="" so screen readers skip it -->
<button class="nav-item">
  <img src="https://cdn.example.com/icons/home-24.png"
       width="24" height="24" alt="" />
  <span class="nav-label">Home</span>
</button>

<!-- Standalone icon button: label on the button via aria-label -->
<button class="icon-btn" aria-label="Search">
  <img src="https://cdn.example.com/icons/search-24.png"
       width="24" height="24" alt="" />
</button>
```

For high-DPI displays, use `srcset`:

```html
<img src="https://cdn.example.com/icons/home-24.png"
     srcset="https://cdn.example.com/icons/home-24.png 1x,
             https://cdn.example.com/icons/home-48.png 2x"
     width="24" height="24" alt="" />
```

**Color:** if you need to tint icons, deliver each color as a separate image. CSS `filter` and `mask-image` are not reliable across the target environments.

**Trade-offs:**
- One network request per icon (mitigated by HTTP/2 and caching).
- Need pre-rendered 1× and 2× variants for high-DPI sharpness.
- Color requires multiple assets.
- Zero font dependencies; works everywhere identically.

#### Option B: Font Awesome

Font Awesome works inside a shadow root because it uses direct Unicode codepoint lookup, not OpenType ligature substitution. Declare the font with `@font-face` inside the fragment's `<style>` block, then use codepoints directly in your markup.

> Do **not** use `<i class="fa fa-envelope"></i>`. That syntax depends on `font-awesome.css` being in scope, which lives outside the shadow root and won't reach your fragment.

```html
<style>
  @font-face {
    font-family: 'FontAwesome';
    src: url('https://cdn.example.com/fonts/fontawesome-webfont.woff2') format('woff2'),
         url('https://cdn.example.com/fonts/fontawesome-webfont.ttf')   format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  .fa-icon {
    font-family: 'FontAwesome';
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    display: inline-block;
  }
</style>

<button class="nav-item">
  <span class="fa-icon" aria-hidden="true">&#xf015;</span>
  <span class="nav-label">Home</span>
</button>

<button class="icon-btn" aria-label="Search">
  <span class="fa-icon" aria-hidden="true">&#xf002;</span>
</button>
```

Look up codepoints at <https://fontawesome.com/icons> — each icon page lists its Unicode value.

**Trade-offs:**
- One font file covers hundreds of icons; one network request total.
- Sharp at any DPI without 2× variants.
- Color via `color` / `currentColor` — themable from `:host` tokens.
- Codepoints in markup are less self-documenting than image filenames.
- Pin the font version in the URL; a CDN update that changes codepoints would silently break every fragment.
- Font Awesome Pro requires a license; Free icons are unrestricted.

#### Do not use ligature-based icon fonts

`<span class="material-symbols-outlined">mail_outline</span>` and similar ligature-based icon fonts will render as raw text inside the shadow root. The OpenType ligature engine queries the document-level font registry, and we don't allow the runtime script that would be needed to register a font there.

### 6. The fragment is self-contained in the ways that matter

**Blocked from the host page:**
- Host CSS selectors and class names.
- Host stylesheets.
- Host HTML structure.

**Pierces the shadow boundary and may be inherited** (do not rely on it, but it's fine to benefit from it):
- Inherited CSS properties on the host element (`font-family`, `color`, `font-size`, etc.).
- CSS custom properties defined on the host element or above.
- Fonts the host app has registered at document scope.

**The rule:** declare every visual property your fragment needs. If inheritance happens to fill in for you, fine; if it doesn't, the fragment still looks right.

### 7. Always include OS font fallbacks

External fonts can be slow, blocked, or unavailable. First paint must be readable.

- **Good:** `font-family: "SF Pro Text", -apple-system, BlinkMacSystemFont, "Roboto", Arial, sans-serif;`
- **Bad:** `font-family: "SF Pro Text";`

For webfonts beyond system fonts, inline an `@font-face` rule in the fragment's `<style>` block pointing at a public CDN URL. Non-icon webfonts work fine in shadow scope.

### 8. Prefer class selectors over bare element selectors

Avoid `* { ... }` resets beyond `box-sizing`. Avoid `div { ... }`, `span { ... }`, etc. Use classes.

### 9. Theme with CSS custom properties and `currentColor`

A single token block on `:host` lets the design be themed and overridden via inline `style="--bg: ..."` on the host element if ever needed.

---

## Compatibility targets

Assume the intersection of:

- Latest Chromium-based Edge/Chrome
- Last two Safari versions
- iOS WKWebView, iOS 14+
- Android WebView, Android 8+

**Safe to use:** Flexbox, Grid, CSS custom properties, `aspect-ratio`, `clamp()`/`min()`/`max()`, flex `gap`, raster images with `srcset`, Font Awesome via `@font-face` + codepoints.

**Avoid for critical layout:** `:has()`, container queries, subgrid, `text-wrap: balance`, vendor-prefix-only properties, anything that requires JavaScript, anything that requires SVG, anything that requires OpenType ligature substitution.

---

## Accessibility

- Real `<button>` and `<a>` elements for interactive things. Never click handlers on `<div>` (and we don't allow scripts anyway).
- Touch targets ≥ 44×44 px.
- Every `<img>` has `alt`. Decorative icons paired with a visible label: `alt=""`. Standalone icon buttons (image or Font Awesome): label on the button via `aria-label`, and put `aria-hidden="true"` on the icon element itself so screen readers don't double-announce.
- Body text contrast ≥ 4.5:1; large text ≥ 3:1.

---

## Validation checklist

Before delivering a fragment, confirm:

- [ ] No `<html>`, `<head>`, or `<body>` tags.
- [ ] No `<script>` tags.
- [ ] No `<svg>` elements.
- [ ] No ligature-based icon fonts (no `<span class="material-symbols-outlined">name</span>` etc.).
- [ ] No `<i class="fa fa-…"></i>` syntax (use `<span class="fa-icon">&#x…;</span>` instead).
- [ ] No `:root { ... }`. Tokens are on `:host`.
- [ ] No `body { ... }` or `html { ... }`. Base styles are on `:host`.
- [ ] Every `font-family` declaration ends in OS fallbacks.
- [ ] Every `<img>` has explicit `width`, `height`, and `alt`.
- [ ] Decorative icons (image or font) have `aria-hidden="true"` or `alt=""`; standalone icon buttons carry an `aria-label`.
- [ ] All asset URLs are public CDN (no localhost, no auth-walled origins). Font Awesome URL pins a specific version.
- [ ] Every interactive element has an accessible name.
- [ ] Fragment renders correctly in the test harness below.

---

## Local preview harness

To verify a fragment behaves identically to how the app will render it, save the fragment as `fragment.html` and open this file alongside it:

```html
<!doctype html>
<html><head><meta charset="utf-8"><title>Fragment test</title></head>
<body>
<div id="host"></div>
<script>
fetch('fragment.html').then(r => r.text()).then(html => {
  document.getElementById('host')
    .attachShadow({ mode: 'open' })
    .innerHTML = html;
});
</script>
</body></html>
```

The harness uses a `<script>` to reproduce the host app's shadow-root injection — this is a testing tool only and does **not** count against the no-scripts rule for fragments. If `:root` selectors fail to apply, `<body>` rules are dropped, images load broken, or Font Awesome icons render as boxes, they will fail in the app the same way.
