# v82 static blocks bundle — WITH-EMPLOYER scenario (no formulas)

**Purpose:** Layout test. Same architecture as `may28-blocks-pair-with-employer/`, but every Mustache token is replaced with literal static content. Use this to verify the layout in CKEditor / CodeMirror **before** wiring any of Jill's formulas.

**Date:** 2026-05-28

## What's in this folder

| File | Purpose |
|------|---------|
| `mhc-home.css` | Identical to the tokenized bundle's CSS — no change here |
| `block-1-greeting-hero.html` | Greeting + Hero (two `<div class="mhc-home">` wrappers), literal content |
| `block-2-pair.html` | Pair · with-employer scenario, literal content |
| `block-3-thisweek.html` | This-week trackers, literal content |
| `block-4-insights.html` | Insights, literal content; action button rendered inline (not host-injected) |
| `block-5-programs.html` | Keep going — three programs, literal content |
| `block-6-challenge.html` | Your challenge, literal content |
| `block-7-rewards.html` | Your rewards, literal content |
| `host-page-example.html` | Runnable end-to-end preview — opens directly in browser, no server needed |
| `action-button-audit.md` | Unchanged from the tokenized bundle |

## What's different from `may28-blocks-pair-with-employer/`

| Aspect | Tokenized bundle | Static bundle (this one) |
|--------|------------------|--------------------------|
| Mustache tokens (`{{formula.x}}`) | Yes | **No — literal text** |
| Conditional blocks (`{{#flag}}…{{/}}`) | Yes | **No — content always renders** |
| Block-level suppress wrappers | Yes | **No — every section is on** |
| File-header comments | Document tokens + conditionals | Note: "static test — for layout testing only" |
| `mhc-home.css` | Same | Same (literally identical file) |
| Visual output when rendered | Identical to static (assuming tokens resolve) | Identical to tokenized |

The two bundles are visually identical when rendered. The difference is purely in what CKEditor sees when it loads a block file — the static bundle has plain text where the tokenized bundle has `{{double-brace}}` markers.

## How to use this for testing

### Test 1 — open it in a browser

```
open host-page-example.html
```

Drag the window narrow (< 600 px) to confirm the responsive behavior. The pair row should switch from borderless-section / bordered-card on desktop to bordered-section / borderless-card on mobile.

### Test 2 — drop a single block into CKEditor

1. Open `block-2-pair.html`.
2. Copy its contents.
3. Paste into CKEditor.
4. Save without making any edits.
5. Copy the saved HTML out.
6. **Diff against the original.** Anything that changed is something CKEditor's sanitizer is mangling — note it, then adjust the CKEditor config (`config.allowedContent`, `config.extraAllowedContent`, etc.) until the roundtrip is clean.

Repeat for each `block-N-*.html` file.

### Test 3 — drop the CSS into CodeMirror

1. Open `mhc-home.css`.
2. Paste into CodeMirror.
3. Confirm the editor handles modern selectors (`:has()`, `@media`, custom properties).
4. Save and confirm the file is byte-identical to the original.

### Test 4 — wire it all together

1. Configure the host page to load `mhc-home.css` (from CodeMirror's output).
2. Configure the host page to load each block file (from CKEditor's output) in order.
3. Open the host page — should look identical to `host-page-example.html` here.

If anything in test 1–4 fails, the **layout** is broken before we even think about formulas. Fix that first.

## What's NOT in this bundle

- **No formulas, no tokens, no conditionals.** This bundle is intentionally dumb — it tests the layout only.
- **No state variations.** Each block shows one canonical state (populated, default values). Empty states, no-employer, no-goal, etc. are not represented here.
- **No suppress logic.** Every block always renders. To test "what if Insights is hidden?" you'd remove that block from the host page manually.

When the layout is locked, port the formulas back in from the tokenized sibling bundle (`may28-blocks-pair-with-employer/`) and we'll have a fully-wired version ready for production.

## Sibling bundles

- [`may28-blocks-pair-with-employer/`](../may28-blocks-pair-with-employer/) — tokenized version of this (same content, Mustache-driven).
- [`may28-blocks-pair-no-employer/`](../may28-blocks-pair-no-employer/) — tokenized no-employer scenario (single section, two interest cards).

Once the layout passes the four tests above, decide whether to keep two bundles (with vs without employer) or merge them into one with a runtime conditional.
