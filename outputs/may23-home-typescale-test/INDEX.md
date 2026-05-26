# May 23 — Home page on MHC type system + responsive type scale showcase

Three HTML deliverables that validate the type scale and line-height decisions before committing the doc update.

## Files

| File | What it shows |
|---|---|
| [type-scale-showcase-v1.html](type-scale-showcase-v1.html) | All 17 MHC classes rendered with annotations · responsive · resize browser to switch Compact ↔ Medium at 600dp · live viewport readout in bottom-right |
| [home-mhc-original-lh-v1.html](home-mhc-original-lh-v1.html) | v1 · Home page · **original** per-class LH · stat & reward values at `heading-4` (28/32) |
| [home-mhc-simplified-lh-v1.html](home-mhc-simplified-lh-v1.html) | v1 · Home page · **simplified** 3-ratio LH · stat & reward values at `heading-4` (28/32) |
| [home-mhc-original-lh-v2.html](home-mhc-original-lh-v2.html) | **v2** · Same as v1 but stat & reward values dropped one step to `heading-5` (25/29) |
| [home-mhc-simplified-lh-v2.html](home-mhc-simplified-lh-v2.html) | **v2** · Same as v1 but stat & reward values dropped one step to `heading-5` (25/29) |
| [home-mhc-simplified-lh-v3.html](home-mhc-simplified-lh-v3.html) | **v3** · Same as simplified-lh-v2 but with Material-aligned weights · Body/Paragraph 400 (was 500) · Caption 500 (was 600) · Small 600 (was 700) · `<strong>` wrappers removed from pair card titles (replaced with `heading-6`) |
| [home-mhc-simplified-lh-v4.html](home-mhc-simplified-lh-v4.html) | **v4** · Same as v3 but caption and small no longer bump at 600dp · caption stays 12px and small stays 11px at every viewport (matches Material 3 and Apple HIG, which don't responsively scale label/metadata classes) |

## How to compare

1. Open [type-scale-showcase-v1.html](type-scale-showcase-v1.html). Resize the browser slowly from 1440 down to 375. Every Display, Heading, Body, Caption, Small, and Paragraph class bumps down when you cross 600dp. The live indicator at the bottom-right shows which form-factor is active.

2. Open the two home-page files in **adjacent tabs**:
   - [home-mhc-original-lh-v1.html](home-mhc-original-lh-v1.html) — orange banner
   - [home-mhc-simplified-lh-v1.html](home-mhc-simplified-lh-v1.html) — green banner

   They have identical content, sizes, fonts, weights, and layout. **Only line heights differ.** Toggle between the tabs to see the change in context.

## Key changes vs. the v2 prototype

| What | v2 prototype | Both new home files |
|---|---|---|
| Type classes | M3 names (`display-s`, `head-m`, `title-l`, etc.) — invented for the prototype | **MHC classes** (`heading-2`, `heading-4`, `heading-6`, `body-2`, `body-3`, `caption`, `paragraph-2`) — match the Confluence system |
| Type sizes | Custom 12–36 px scale | **MHC scale** from Small Form (Compact) and Medium Form (≥600) per Confluence |
| Responsive behavior | Sizes fixed across breakpoints | **All sizes step up** at 600dp per the MHC system |

The home page now reflects what engineering will actually build, not the prototype's stand-in scale.

## Where to look for the line-height differences

| Class | Original LH | Simplified LH | Watch in… |
|---|---|---|---|
| heading-6 | 1.2 | 1.125 | "Continue your programs" section head; pair card item titles; insight headline; program card titles |
| caption | 1.333 | 1.25 | Eyebrows (uppercase) throughout — "SUGGESTED FOR YOU", "BASED ON YOUR INTERESTS", reward chips |
| body-3 | 1.286 | 1.25 | Meta text under section headings; button labels; hero meta row |
| body-1 (Compact only) | 1.333 | 1.25 | Not used heavily here, but visible in any multi-line Body 1 text |
| paragraph-2 | 1.5 | 1.5 | Hero subtitle paragraph — **identical in both versions** |

Most differences are subtle (<3% ratio change) but the cumulative effect on multi-line text and stacked captions is perceptible.

## What's still TBD

1. **Line-height direction:** original (per-class) vs simplified (3-ratio). Decision triggered by these files.
2. **iOS Dynamic Type mapping refinements** — parked, depends on whether Matt is using built-in iOS styles directly or `UIFontMetrics` with custom sizes.
3. **typography.md update** — held until both above are resolved.

## Iterations

| Version | Date | Change |
|---|---|---|
| v1 | 2026-05-23 | Initial three-file set. Type scale showcase with live form-factor indicator. Two home-page variants using MHC classes throughout. Stat values & reward values at `heading-4`. |
| v2 | 2026-05-23 | Stat values ("8,420", "6h 43m", "645", "52") and reward values ("$75", "1,250", "12", "$25") dropped one step from `heading-4` (28sp / 32sp) to `heading-5` (25sp / 29sp). Hero "Sleep better in 4 weeks" stays at `heading-4`. v1 preserved for comparison. |
| v3 | 2026-05-23 | Material-aligned font weights applied to the simplified-LH home page only. Body/Paragraph dropped from 500 to **400 regular**. Caption dropped from 600 to **500 medium**. Small dropped from 700 bold to **600 semibold**. Display/Heading stay at 500. Pair card titles ("Based on your interests", "From your employer") changed from `body-2 + <strong>` to `heading-6` so they read as titles, not bolded body. Item titles within pair cards ("How to wind down before bed", "Complete your health assessment") removed `<strong>` wrappers — now read as body-2 weight 400. `<strong>` retained only in the insight ("38 minutes less") where inline emphasis is the correct use. |
| v4 | 2026-05-23 | Caption and Small classes no longer participate in the 600dp responsive bump. They stay constant: Caption 12 (0.75rem) and Small 11 (0.6875rem) at every viewport. Display, Heading, Body, and Paragraph still bump as before. Matches Material 3 / Apple HIG conventions where label/metadata classes don't responsively scale. Implies a Confluence Medium Form spec update: Caption drops 14 → 12, Small drops 13 → 11. |
