# Pattern — Onboarding (split-screen at desktop)

**Status:** ✅ Locked 2026-05-24
**Live example:** [outputs/may24-content-pages-test/03-onboarding.html](../../outputs/may24-content-pages-test/03-onboarding.html)
**Figma:** [claude-test, node 0-1974](https://www.figma.com/design/VNE9i4uHQUvqsmXlAWFayC/claude-test?node-id=0-1974)

---

## Purpose

A takeover experience shown before the member reaches the home page — used for first-run, multi-step onboarding (carousel of slides). The pattern adapts a mobile-first stacked layout into a desktop split-screen without becoming a marketing page.

This is the canonical onboarding chrome for MHC. Any first-run takeover, multi-step educational sequence, or "before-you-start" walkthrough should use this layout.

---

## When to use

- First-run experience (account setup, first-time-here walkthrough)
- Multi-step educational sequences with image + short text per step
- Any takeover modal that needs to feel app-native at both mobile and desktop sizes

**Don't use for:**
- Single-screen action confirmations → use a dialog/modal pattern
- Content articles → use the content-page pattern
- Marketing landing pages → use full-bleed marketing layout

---

## Layout

### Compact (<600dp) — stacked

```
┌─────────────────────────────────┐
│  ☰         AAA              ·   │  top bar (64dp)
├─────────────────────────────────┤
│                                 │
│       [Hero image — 320 tall]   │  hero, fluid width × 320
│                                 │
├─────────────────────────────────┤
│                                 │
│      Title (heading-3)          │  content panel
│      Body (paragraph-2)         │  centered, max-width 480
│                                 │
│           · · ●                 │  carousel dots
│                                 │
│  ┌───────────────────────────┐  │
│  │       Next  (M, 56dp)     │  │  full-width button
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

### Medium+ (≥600dp) — split-screen

```
┌─────────────────────────────────────────────────────────────────┐
│  ☰                AAA                                       ·   │  top bar
├─────────────────────────────────┬───────────────────────────────┤
│                                 │                               │
│                                 │     Title (heading-3)         │
│        Hero image               │     Body (paragraph-2)        │
│        fills left half          │                               │
│        min-height 480           │       · · ●                   │
│        (fluid wider on          │                               │
│        large viewports)         │     [ Next (M, 56dp) ]        │
│                                 │                               │
└─────────────────────────────────┴───────────────────────────────┘
       LEFT (flex: 1)                   RIGHT (flex: 1, centered)
```

---

## Spec

### Top bar

- Height **64dp** (matches app standard)
- Three-zone grid: hamburger LEFT, AAA logo CENTERED, empty RIGHT
- Uses `grid-template-columns: 1fr auto 1fr` so the brand stays optically centered regardless of side content

**Different from content-page top bar** (back arrow left + ACME left-aligned). Onboarding is a takeover, so the chrome is per-takeover, not per-content.

### Hero image

| Viewport | Width | Height |
|---|---|---|
| Compact (<600) | full viewport | **320dp** |
| Medium+ (≥600) | fills left column (`flex: 1`, fluid) | full column height, **min-height 480dp** |

Width is fluid in both modes. Use `object-fit: cover` with the inner `<img>` for real photos so the image fills the box without aspect-ratio constraints.

The image side is allowed to grow tall on large viewports — that's intentional. Onboarding wants the photo to anchor the experience visually.

### Content panel

- **Compact:** centered text, padded `var(--s-06)` top, `var(--s-05)` sides
- **Medium+:** centered vertically + horizontally within its column; padded `var(--s-08)` top/bottom + `var(--s-07)` sides
- **Large+ (≥1024):** padding bumps to `var(--s-09)` all around for desktop breathing room
- Inner content `.ob-text` is constrained to **max-width 480 / 520dp** so long titles wrap naturally

### Title

- `.heading-3` (32sp Compact / 36sp Medium+)
- Centered, two-line maximum
- For shorter titles, `.heading-4` is acceptable

### Body

- `.paragraph-2` (16sp Compact / 18sp Medium+, 1.5 LH)
- Color: `--ink-soft` (subdued, not full ink)
- Short — 1 to 2 lines max ideally

### Carousel dots

- 8dp circles, `var(--s-02)` (8dp) gap
- Inactive: `--hairline` (warm gray)
- Active: `--brand` (navy)
- Centered horizontally below the title/body
- Order: pushed near the bottom on Compact (with `.ob-spacer { flex: 1 }`), naturally below content on Medium+ (centered with the rest)

### Next button

- **M size (56dp height, Label 0 = 16sp medium)**
- Filled variant (navy bg)
- **Full-width on Compact** (`.btn-block` makes it stretch to the panel's max-width 480)
- **Fixed-width on Medium+** (min-width 240, hugs content with padding)

---

## CSS skeleton

```css
.main {
  flex: 1;
  display: flex; flex-direction: column;
}
.ob-hero { width: 100%; height: 320px; background-size: cover; background-position: center; }
.ob-content {
  flex: 1;
  padding: var(--s-06) var(--s-05) var(--s-05);
  display: flex; flex-direction: column;
  align-items: center; text-align: center;
  gap: var(--s-05);
}
.ob-text { display: flex; flex-direction: column; gap: var(--s-03); max-width: 480px; }
.ob-spacer { flex: 1; }   /* pushes dots + button to bottom on Compact */
.ob-dots { display: flex; gap: var(--s-02); }
.ob-actions { width: 100%; max-width: 480px; }

@media (min-width: 600px) {
  .main {
    flex-direction: row;
    min-height: calc(100vh - 64px);
  }
  .ob-hero { flex: 1; height: auto; min-height: 480px; }
  .ob-content {
    flex: 1;
    padding: var(--s-08) var(--s-07);
    justify-content: center;
    gap: var(--s-06);
  }
  .ob-spacer { display: none; }
  .ob-actions { width: auto; }
  .btn-block  { width: auto; min-width: 240px; }
}
```

---

## Variants worth thinking about

- **Two-line vs one-line title** — keep title in one or two lines maximum; longer titles should be re-edited or use `heading-4` instead of `heading-3`
- **Skip button** — when adding "Skip" / "Skip onboarding" affordances, place as a Text Button in the top bar's RIGHT slot (currently empty). Don't add a second CTA next to "Next" — keep the primary path singular
- **Progress dots vs progress bar** — for ≤5 steps, dots are correct. For ≥6, switch to a linear progress bar at the top of the content panel
- **Back button** — multi-step onboarding may need a "Back" affordance at step 2+. Place as a Text Button in the top bar's LEFT slot (replacing the hamburger only during onboarding flow)

---

## Rules

- Always use the split-screen layout at ≥600dp — never stacked on tablet/desktop
- Always center content vertically in the right panel on desktop — never top-align (creates empty bottom space)
- The Next button is the ONLY primary CTA on the screen — no secondary actions competing for attention
- Top bar is fixed and matches the AAA-centered chrome (not the ACME left chrome from content pages)
- Hero image must use `object-fit: cover` for real images — never `contain` (don't letterbox)

---

## Escalate if

- A step needs a form (input fields) — escalate, the pattern needs a form layout variant
- Multiple CTAs are needed on a single step (rare — usually a sign the step should be split into two)
- The hero image is a video instead of a photo — escalate for inline-video handling
- The onboarding needs to be re-entered later (e.g., from a settings menu) — confirm pattern still applies vs a settings-page treatment

---

## Related

- [outputs/may24-content-pages-test/03-onboarding.html](../../outputs/may24-content-pages-test/03-onboarding.html) — live example
- [design/atoms/button.md](../atoms/button.md) — button sizes (M used here)
- [design/foundation/typography.md](../foundation/typography.md) — type classes used
- [design/foundation/image-sizing.md](../foundation/image-sizing.md) — image sizing principles

---

## Revision Log

| Date | Change |
|------|--------|
| 2026-05-24 | Initial draft. Pattern locked from prototype iteration. |
