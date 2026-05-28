# v81 → MHC blocks conversion

**Source:** [`outputs/may23-figma-recreation/home-figma-recreation-v81.html`](../may23-figma-recreation/home-figma-recreation-v81.html) — preserved untouched.

**Date:** 2026-05-26
**Target:** Conform v81 to the rules in [`reference/innovations/CLAUDE-MHC-blocks (1) (2).md`](../../reference/innovations/CLAUDE-MHC-blocks%20%281%29%20%282%29.md) so ops/content teams can consume each section in CKEditor.

---

## What's in this folder

| File | Purpose |
|------|---------|
| `mhc-home.css` | Extracted from v81's inline `<style>` block, unchanged. Host page loads this once. |
| `block-1-greeting-hero.html` | Greeting + hero card (focus-driven program) |
| `block-2-pair.html` | "Based on your interest" + "From your employer" pair |
| `block-3-thisweek.html` | This-week tracker tiles (4 trackers, per-tile state flags) |
| `block-4-insights.html` | Insights card — state-flag-driven (Ready / Refreshable / ReadOnly / Hidden); refresh action is host-attached |
| `block-5-programs.html` | Continue your programs (up to 3 program cards, unrolled) |
| `block-6-challenge.html` | Your challenge banner — Details affordance becomes a stretched-link card |
| `block-7-rewards.html` | Your rewards (4 reward cards: gift / points / raffle / store) |
| `action-button-audit.md` | What happened to each of v81's 17 `<button>` elements — host-injected, MHC-action, stretched-link, or stripped |
| `host-page-example.html` | Reference of how a host page stitches the blocks together (loads CSS, owns `<html>/<head>/<body>`, owns the top bar + bottom nav chrome) |

## What's **not** in this folder

- **Top bar** (logo + hamburger menu) — host chrome, not an MHC block
- **Bottom nav** (5 tab items) — host chrome, not an MHC block
- **`<style>` inside any block** — extracted into `mhc-home.css`
- **`<script>` of any kind** — v81 had none; rule §8 enforces it stays that way
- **Inline `style="width: 37.5%"` on progress fills** — converted to a `--p` custom property bound to a token

## Net change

- v81: 1,016 lines, 1 monolithic file, 0 Mustache tokens, 17 inline `<button>` elements, 0 `aria-labelledby`, 0 suppress conditionals
- Bundle: 1 CSS file + 7 block partials, every dynamic value tokenized, every action reclassified, every section labelled, every block suppressible

The visual design of v81 is preserved — `mhc-home.css` carries it verbatim. The HTML side just gets smaller, tokenized, and CKEditor-safe.

## Open follow-ups (not blockers)

1. **Action-button slot positions.** Each action-bearing block (Insights, Programs section heading, Rewards section heading) splits at the natural seam, but the host needs to know *where* to inject the action button. See `action-button-audit.md` row "Refresh Insight" for the canonical example.
2. **Program list as N User Input blocks vs one block.** The current `block-5-programs.html` unrolls 3 program cards as static markup. If "resume program" is a mutating action (vs. a navigation), each program row should become its own User Input block instead. See audit row "Continue your programs · Resume."
3. **Reward card click target.** Currently expressed as stretched-link cards to a deep-link href. If the platform wants reward redemption to be an MHC action (mutating), each reward card becomes a User Input block.
4. **Bottom-nav reclassification.** Out of MHC-block scope — but every `<button>` in `.bottom-nav` should be `<a href>` in the host shell. They are navigations, not actions.

## Use it

The host page reads:

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="mhc-home.css">
  <link href="https://fonts.googleapis.com/icon?family=Material+Symbols+Outlined" rel="stylesheet">
</head>
<body>
  <!-- host's own top-bar chrome -->
  <!-- block-1-greeting-hero.html -->
  <!-- block-2-pair.html -->
  <!-- block-3-thisweek.html -->
  <!-- block-4-insights.html -->
  <!-- HOST INJECTS: Insights action button (Get insight / Refresh / hidden) -->
  <!-- block-5-programs.html -->
  <!-- block-6-challenge.html -->
  <!-- block-7-rewards.html -->
  <!-- host's own bottom-nav chrome -->
</body>
</html>
```

`host-page-example.html` is the runnable version of the above.
