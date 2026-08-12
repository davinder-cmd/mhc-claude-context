# v82 MHC blocks bundle — WITH-EMPLOYER scenario

**Source:** [`outputs/may26-pair-row-redesign/home-figma-recreation-v82a-with-employer.html`](../may26-pair-row-redesign/home-figma-recreation-v82a-with-employer.html) — the monolithic prototype this bundle was built from.

**Forked from:** [`outputs/may26-v81-mhc-blocks/`](../may26-v81-mhc-blocks/) — the earlier v81 blocks bundle. Only `mhc-home.css`, `block-2-pair.html`, and `host-page-example.html` differ from that source.

**Date:** 2026-05-28

## Scenario

The user has both **interest-matched** content AND **employer-supplied** content available. The pair row renders as **two columns** on desktop, each with its own header (title + optional Edit pill), one rec-card, and a "See N more …" link below.

## What's in this folder

| File | Purpose | Diff vs may26-v81-mhc-blocks |
|------|---------|-----------------------------|
| `mhc-home.css` | All styles; v82 borderless pair treatment | **Updated** (pair CSS replaced; see notes below) |
| `block-1-greeting-hero.html` | Greeting + hero | unchanged |
| **`block-2-pair.html`** | **v82 WITH-EMPLOYER pair markup** | **Replaced** |
| `block-3-thisweek.html` | Tracker tiles | unchanged |
| `block-4-insights.html` | Insights (state-flag-driven) | unchanged |
| `block-5-programs.html` | In-progress programs | unchanged |
| `block-6-challenge.html` | Challenge banner | unchanged |
| `block-7-rewards.html` | Rewards 4-card grid | unchanged |
| `action-button-audit.md` | v81 → MHC action reclassification | unchanged (pair row gained no new buttons) |
| **`host-page-example.html`** | Runnable smoke test | **Updated** with new pair markup |

## What the CSS change does

The pair section's visual frame moved off the section and onto the card inside it. Header (title + Edit pill) and footer ("See N more") now float above and below the card; only `.rec-card` carries the border.

On mobile (`<600px`) a media query reverts each `.pair-section` to the v81 bordered-section pattern (the card loses its border, the section regains it) so a narrow screen still reads as one cohesive block.

No changes to any other section's CSS.

## Pair block — new class structure

```
.pair                            (grid; 1fr on mobile, 1fr 1fr on >=600px)
  .pair-section                  (column; borderless on desktop, bordered on mobile)
    .pair-section__header         (h3 + optional .pill-edit)
    .rec-card                    (the bordered card on desktop)
      .rec-card__thumb
      .rec-card__body
      .rec-card__chev
    .pair-section__footer         (See N more link)
  .pair-section                  (second column — employer in this scenario)
    …
```

## How to run

```bash
cd outputs/may28-blocks-pair-with-employer
python3 -m http.server 8000
# open http://localhost:8000/host-page-example.html
```

Resize the window narrower than 600px to confirm the mobile bordered-section pattern.

## Sibling bundle

The no-employer scenario lives in: [`outputs/may28-blocks-pair-no-employer/`](../may28-blocks-pair-no-employer/). Same architecture; only `block-2-pair.html` and `host-page-example.html` differ in pair markup (single full-width section with two cards in a `.pair-section__cards` grid).

Identical `mhc-home.css` is intentional — the same stylesheet supports both scenarios. In production, the host page picks which `block-2-pair.html` to render based on whether `formula.hasEmployerPair` resolves true.
