# v82 MHC blocks bundle — NO-EMPLOYER scenario

**Source:** [`outputs/may26-pair-row-redesign/home-figma-recreation-v82b-no-employer.html`](../may26-pair-row-redesign/home-figma-recreation-v82b-no-employer.html) — the monolithic prototype this bundle was built from.

**Forked from:** [`outputs/may26-v81-mhc-blocks/`](../may26-v81-mhc-blocks/) — the earlier v81 blocks bundle. Only `mhc-home.css`, `block-2-pair.html`, and `host-page-example.html` differ from that source.

**Date:** 2026-05-28

## Scenario

No employer-supplied content is configured for this client / member. The pair row collapses to a **single full-width section** on desktop, with **two interest cards side-by-side** inside it, and one "See N more matching your interests" link below.

The Edit pill sits at the right edge of the section header, spanning the row.

## What's in this folder

| File | Purpose | Diff vs may26-v81-mhc-blocks |
|------|---------|-----------------------------|
| `mhc-home.css` | All styles; v82 borderless pair treatment | **Updated** (pair CSS replaced; identical to the sibling bundle's CSS) |
| `block-1-greeting-hero.html` | Greeting + hero | unchanged |
| **`block-2-pair.html`** | **v82 NO-EMPLOYER pair markup** | **Replaced** |
| `block-3-thisweek.html` | Tracker tiles | unchanged |
| `block-4-insights.html` | Insights (state-flag-driven) | unchanged |
| `block-5-programs.html` | In-progress programs | unchanged |
| `block-6-challenge.html` | Challenge banner | unchanged |
| `block-7-rewards.html` | Rewards 4-card grid | unchanged |
| `action-button-audit.md` | v81 → MHC action reclassification | unchanged (pair row gained no new buttons) |
| **`host-page-example.html`** | Runnable smoke test | **Updated** with new pair markup |

## What the CSS change does

Identical change to the with-employer bundle: the pair section's visual frame moved off the section and onto the card inside it. Header (title + Edit pill) and footer ("See N more") float above and below the cards; only `.rec-card` carries the border.

On mobile (`<600px`) a media query reverts the `.pair-section` to the v81 bordered-section pattern (cards lose their borders, section regains its frame, two cards stack inside it).

## Pair block — new class structure for this scenario

```
.pair                            (grid; single column at any width)
  .pair-section                  (full-width column; borderless on desktop, bordered on mobile)
    .pair-section__header         (h3 + .pill-edit pinned right)
    .pair-section__cards          (grid 1fr 1fr at >=600; 1fr on mobile)
      .rec-card                  (first interest card)
      .rec-card                  (second interest card — gated by hasInterest2)
    .pair-section__footer         (See N more link)
```

## How to run

```bash
cd outputs/may28-blocks-pair-no-employer
python3 -m http.server 8000
# open http://localhost:8000/host-page-example.html
```

Resize the window narrower than 600px to confirm the mobile bordered-section pattern with two cards stacked.

## Sibling bundle

The with-employer scenario lives in: [`outputs/may28-blocks-pair-with-employer/`](../may28-blocks-pair-with-employer/). Same architecture; only `block-2-pair.html` and `host-page-example.html` differ in pair markup (two pair-sections side by side, one for interests and one for employer).

Identical `mhc-home.css` is intentional — the same stylesheet supports both scenarios. In production, the host page picks which `block-2-pair.html` to render based on whether `formula.hasEmployerPair` resolves true.

## Note for production

In the eventual production block library, these two block-2 files could either be:

1. **Two separate block files** the platform selects between based on `hasEmployerPair`. Cleaner per-block markup. The split mirrors how Jill's bundle was originally organized.
2. **One block file** with both branches inside, gated by `{{#formula.hasEmployerPair}}` / `{{^formula.hasEmployerPair}}` inverse blocks. Single file to maintain, more conditional logic per render.

The two scenarios share the same CSS and the same component vocabulary (`pair-section`, `rec-card`, `pill-edit`), so either approach is viable. Splitting feels less error-prone given each scenario has a distinct structural layout.
