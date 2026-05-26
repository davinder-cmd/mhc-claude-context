# May 22 — Image Pattern Demos

Live, interactive HTML demonstrations of the three responsive image patterns for MHC. Each demo includes a bottom-right readout that shows current viewport width, container dimensions, and which CSS rule is active at that width.

**To use:** open each file in a browser and slowly drag the window from full-width down to 375px. Watch the readout and the image behavior.

## Files

| File | Pattern | Use cases shown |
|------|---------|-----------------|
| [aspect-ratio-locked-v1.html](aspect-ratio-locked-v1.html) | **Aspect-ratio locked** | Editorial card (16:9) · Program tiles (3:2 grid) · Content previews (1:1 thumbs) |
| [fixed-height-cover-v1.html](fixed-height-cover-v1.html) | **Fixed-height cover-crop** | Hero banner (480px) · Page header (240px) · Warning on misuse |
| [hybrid-v1.html](hybrid-v1.html) | **Hybrid (ratio + max-height)** | Hero marquee (16:9 capped at 480px) · Crossover math table · CSS reference |

## What to look for in each demo

**Pattern 1 — Aspect-Ratio Locked:** the readout shows "Effective ratio" stays at ~1.78:1 (16:9) at every width. Image scales uniformly, no cropping behavior changes.

**Pattern 2 — Fixed-Height Cover-Crop:** the readout shows height locked at 480px while the effective ratio changes from ~2.5:1 (wide letterbox) at desktop down to ~0.7:1 (portrait) on mobile. Image crops dramatically as the container's shape changes.

**Pattern 3 — Hybrid:** the readout switches between "aspect-ratio (16:9)" and "max-height (480px)" depending on viewport. Crossover is at 853px. Below it, behaves like Pattern 1. Above it, behaves like Pattern 2.

## Source conversation

2026-05-22 — Davinder asked how images behave when the page resizes, and whether to keep using strict aspect ratios. These demos answer that question by letting him observe the behavior live.

## Iterations

| Version | Date | Change |
|---------|------|--------|
| v1 | 2026-05-22 | Initial set — three pattern demos with live readouts |
