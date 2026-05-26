# May 23 — Line Height Comparison

Two HTML documents with **identical content** showing the visual impact of the proposed line-height simplification. Open both in adjacent browser tabs and compare.

## Files

| File | Line-height rule |
|---|---|
| [line-height-original-v1.html](line-height-original-v1.html) | **Original** — per-class line heights exactly as Confluence Small Form spec defines them (17 different LH ratios) |
| [line-height-simplified-v1.html](line-height-simplified-v1.html) | **Simplified** — three-ratio rule: Display + Heading = 1.125, Body + Caption + Small = 1.25, Paragraph = 1.5 |

Both files use the **identical** type sizes, weights, font families, content, and layout. Only line heights differ.

## What to look at

Three real UI contexts:

1. **Content page** — multi-class prose with wrapping body text. The most LH-sensitive context.
2. **Card grid** — 3 cards across at ≥600dp; tests visual rhythm at density.
3. **Dashboard stat tile** — Display value + Caption + Body + Small stacked together.

## Where to expect visible differences

| Class | Direction of change | Visibility |
|---|---|---|
| `.body-1` | Tighter (1.333 → 1.25) | **Visible** in the article hero subtitle paragraph (3 lines). Wrap rhythm tightens. |
| `.caption` | Tighter (1.333 → 1.25) | Subtle. Single-line captions look identical; multi-line captions feel tighter. |
| `.heading-6` | Tighter (1.2 → 1.125) | **Visible** in wrapping card titles (Section 2). |
| `.paragraph-3` | Looser (1.428 → 1.5) | **Visible** in the multi-line "Week 1" paragraph. More breathing room. |
| `.display-3` | Tighter (1.156 → 1.125) | Subtle on single-line displays; harder to see in this demo. |
| `.heading-4` | Tighter (1.143 → 1.125) | Subtle on single-line headings. |
| Most others | ≤0.03 ratio change | Visually almost imperceptible. |

## The decision

If the simplified version reads cleanly and you don't miss the per-class optical adjustments, go with the 3-ratio rule. It saves complexity in typography.md, in engineering's CSS, and in Matt's iOS implementation — three line-heights to maintain instead of seventeen.

If you find the simplified version feels notably tighter or looser somewhere that matters, keep the per-class values. Faithful to the Confluence spec, more complex everywhere.

## Iterations

| Version | Date | Change |
|---|---|---|
| v1 | 2026-05-23 | Initial comparison — original vs simplified, identical content, same layout. |
