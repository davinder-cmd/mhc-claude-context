# MHC Type Scale

The agreed type scale and the rationale behind it. Use this document as the type-scale source of truth in other contexts (rebrand work, design-system updates, agent prompts) without dragging in the rest of the DESIGN.md.

The values are deliberate. The rationale explains *why*, so the scale survives translation to other fonts, ratios, or branding.

---

## Scale at a glance

Medium Form (≥600 dp). Family stays SF Pro across the scale; the role determines which optical variant.

| MHC role | Size | Line height | Weight | Family | Tracking | When to use |
|---|---|---|---|---|---|---|
| **h1** | 36 | 40 | 600 | SF Pro Display | -0.028em | Hero / page-display headlines |
| **h2** | 32 | 36 | 600 | SF Pro Display | -0.022em | Reserved — heaviest section heads if needed |
| **h3** | 28 | 32 | 600 | SF Pro Display | -0.022em | Greeting · big section feature heads |
| **h4** | 24 | 28 | 600 | SF Pro Display | -0.018em | Section heads (`<h2>` elements) |
| **h5** | 22 | 26 | 600 | SF Pro Display | -0.018em | Lane / sub-section heads · big numerics (tracker, challenge) |
| **h6** | 20 | 24 | 600 | SF Pro Display | -0.012em | List-item titles · tile titles |
| **body-1** | 18 | 28 | 400 | SF Pro Text | 0 | Subtitle / slightly emphasized prose |
| **body-2** | **16** | 24 | 400 | SF Pro Text | 0 | **Default body. WCAG-minimum at default zoom.** |
| **body-3** | 14 | 20 | 400 | SF Pro Text | 0 | Small body · button-md · dense meta lines |
| **caption** | 12 | 16 | 500 | SF Pro Text | 0 | Meta lines, links, sub-heads, footer |
| **label-caps** | 11 | 14 | 600 | SF Pro Text | +0.08em | Eyebrow tags ("ARTICLE · SLEEP", "AI INSIGHT") |
| **small** | 10 | 14 | 500 | SF Pro Text | 0 | Rare. Use caption instead unless space-constrained. |

**Numerics get serif + tabular-nums.** Tracker values, reward amounts, $ rewards: SF Pro Display Bold + `font-variant-numeric: tabular-nums` so columns of numbers align.

---

## Small Form (≤599 dp)

Mobile shifts each role down one step. Body-2 / body-3 / caption hold so reading text never drops below 14 px and body never drops below 16 px.

| Role | ≥600 dp | <600 dp |
|---|---|---|
| h1 | 36 | 28 |
| h2 | 32 | 26 |
| h3 | 28 | 24 |
| h4 | 24 | 22 |
| h5 | 22 | 20 |
| h6 | 20 | 18 |
| body-1 | 18 | 17 |
| body-2 / body-3 / caption / label-caps / small | hold | hold |

---

## Rationale

### Why Major Second (1.125)

The scale ratio between adjacent type sizes is approximately 1.125 — the musical "Major Second." This is the calmest ratio that still gives perceptible hierarchy. Compared to alternatives:

- **Major Third (1.25)** — Common for "magazine" or display-led layouts. Reads more dramatic; jumps between roles feel large. Too loud for the calm-and-scannable register.
- **Perfect Fourth (1.333)** — Even more dramatic. Used for poster / landing-page hierarchies.
- **Minor Second (1.067)** — Too compressed. Roles read as the same weight; hierarchy collapses.
- **Major Second (1.125)** — Sweet spot for calm-but-clear hierarchy. Enough delta to read role differences, not so much that the page shouts.

The exact ratio drifts in places where the value gets rounded to a whole pixel (e.g., 16 → 18, not 16 → 18.0). The scale honors role-based intent over mathematical purity.

### Why one step smaller than typical web defaults

Many web type scales start hero/display sizes at 48–64 px and run body at 16–18 px. This scale shifts every role one step smaller (h1 = 36, body default = 16). Two reasons:

1. **The calm-and-scannable aesthetic rewards smaller, confident type.** Reading apps (NYT, Apple News, Substack) sit closer to this range. Larger scales read as marketing/landing pages — wrong register for daily-returning members.
2. **Density matters at the page level.** A smaller scale lets more content sit above the fold without crowding. The page reads tight not because spacing collapsed, but because the type is right-sized for scanning.

### Why 16 px is the body minimum

Per MHC's documented `design/foundation/typography.md` rule: *"Minimum body text: 16px at base size."* WCAG AA does not mandate a specific size, but 16 px at default browser zoom (100%) is the practical floor for accessibility — smaller body text fails informally for older users, anyone with reduced acuity, and anyone reading on a small device. `body-2 = 16` is the default; `body-3 = 14` is acceptable for **secondary** text only (small meta lines, button-md).

### When SF Pro Display vs SF Pro Text

Apple's SF Pro family ships two optical variants. The break point is **20 px**:

- **≥ 20 px → SF Pro Display.** Tighter spacing, lighter strokes. Optimized for large display sizes where character forms read clearly without help.
- **< 20 px → SF Pro Text.** More open spacing, slightly heavier strokes. Optimized for body and UI sizes where the human eye needs more support distinguishing letterforms.

In this scale: `display-lg`, `h1`–`h6` use Display; `body-*`, `caption`, `label-*`, `small` use Text. The font-stack fallback (`-apple-system, BlinkMacSystemFont, 'SF Pro Display'/'SF Pro Text'`) auto-selects on Apple platforms; explicit family names cover other systems.

For non-Apple platforms (Material/Android, web partners with custom fonts), substitute equivalents that have a similar Display/Text split (Inter is fine; Roboto Flex if available).

### Letter-spacing (tracking) logic

Tracking values follow Apple HIG guidance for SF Pro:

| Size range | Tracking |
|---|---|
| Display ≥ 32 px | -0.022em to -0.028em (tight) |
| Display 20–28 px | -0.012em to -0.018em (moderately tight) |
| Body 14–18 px | 0 (default) |
| Label / caps 10–12 px | +0.06em to +0.08em (loose) |

Tight tracking on display sizes lets large letterforms feel composed instead of airy. Loose tracking on small caps gives breathing room between glyphs that would otherwise crowd at small sizes.

### Line-height policy

Three line-height tokens cover the scale:

| Token | Multiplier | Used for |
|---|---|---|
| `--lh-display` | ~112.5% | Headings (h1–h6, display-lg) |
| `--lh-ui` | ~125% | Body, captions, buttons, UI labels |
| `--lh-paragraph` | ~150% | Prose blocks — hero body, AI insight text, long-form |

Line-height is normalized to whole-pixel values in the scale (e.g., body-2 16 × 1.5 → 24, rounded). Whole-pixel line-heights prevent sub-pixel vertical rhythm drift.

### Why numerics get a serif treatment

Big values in the UI (tracker ring values, reward amounts, $ rewards) use SF Pro Display **Bold** + `font-variant-numeric: tabular-nums`. The bold weight emphasizes the value at a glance; tabular-nums keeps columns of numbers aligned (`52,470` and `14,200` line up digit-for-digit).

---

## Token mapping (MD3 equivalents)

If the destination uses Material 3 role names, this is the direct equivalence:

| MHC role | Size | MD3 role |
|---|---|---|
| h1 | 36 | display-lg |
| h2 | 32 | — |
| h3 | 28 | headline-lg |
| h4 | 24 | headline-md |
| h5 | 22 | headline-sm |
| h6 | 20 | title-lg |
| body-1 | 18 | body-lg |
| body-2 | 16 | body-md |
| body-3 | 14 | body-sm |
| caption | 12 | label-md |
| label-caps | 11 | label-caps (~11) |

---

## Machine-readable tokens

YAML (design.md format · paste into the `typography:` block of any DESIGN.md):

```yaml
typography:
  display-lg:
    fontFamily: SF Pro Display
    fontSize: 36px
    fontWeight: "600"
    lineHeight: 40px
    letterSpacing: -0.028em
  headline-lg:
    fontFamily: SF Pro Display
    fontSize: 28px
    fontWeight: "600"
    lineHeight: 32px
    letterSpacing: -0.022em
  headline-md:
    fontFamily: SF Pro Display
    fontSize: 24px
    fontWeight: "600"
    lineHeight: 28px
    letterSpacing: -0.018em
  headline-sm:
    fontFamily: SF Pro Display
    fontSize: 22px
    fontWeight: "600"
    lineHeight: 26px
    letterSpacing: -0.018em
  title-lg:
    fontFamily: SF Pro Display
    fontSize: 20px
    fontWeight: "600"
    lineHeight: 24px
    letterSpacing: -0.012em
  title-md:
    fontFamily: SF Pro Display
    fontSize: 18px
    fontWeight: "600"
    lineHeight: 22px
    letterSpacing: -0.012em
  body-lg:
    fontFamily: SF Pro Text
    fontSize: 18px
    fontWeight: "400"
    lineHeight: 28px
  body-md:
    fontFamily: SF Pro Text
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 24px
  body-sm:
    fontFamily: SF Pro Text
    fontSize: 14px
    fontWeight: "400"
    lineHeight: 20px
  label-md:
    fontFamily: SF Pro Text
    fontSize: 12px
    fontWeight: "500"
    lineHeight: 16px
  label-caps:
    fontFamily: SF Pro Text
    fontSize: 11px
    fontWeight: "600"
    lineHeight: 14px
    letterSpacing: 0.08em
```

CSS custom properties (paste into `:root`):

```css
:root {
  /* Type scale — MHC roles · Major Second · Medium Form (≥600dp) */
  --t-h1: 36px;
  --t-h2: 32px;
  --t-h3: 28px;
  --t-h4: 24px;
  --t-h5: 22px;
  --t-h6: 20px;
  --t-body-1: 18px;
  --t-body-2: 16px;   /* documented body minimum */
  --t-body-3: 14px;
  --t-caption: 12px;
  --t-label-caps: 11px;
  --t-small: 10px;    /* rare — prefer caption */

  /* Line-height tokens */
  --lh-display: 1.125;
  --lh-ui: 1.25;
  --lh-paragraph: 1.5;

  /* Font stacks */
  --font-display: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro', 'Helvetica Neue', Arial, sans-serif;
  --font-text:    -apple-system, BlinkMacSystemFont, 'SF Pro Text',    'SF Pro', 'Helvetica Neue', Arial, sans-serif;
}

@media (max-width: 599px) {
  :root {
    --t-h1: 28px;
    --t-h2: 26px;
    --t-h3: 24px;
    --t-h4: 22px;
    --t-h5: 20px;
    --t-h6: 18px;
    --t-body-1: 17px;
    /* body-2, body-3, caption, label-caps, small hold */
  }
}
```

---

## For rebrand work

If a rebrand replaces the type family (e.g., SF Pro → Inter, Public Sans, Plus Jakarta Sans), the **sizes, line heights, and tracking rules carry over**. Only `fontFamily` changes. The Major Second ratio + the one-step-smaller-than-web-defaults register are the architectural commitments worth preserving across visual identity shifts.

Three things to re-verify on font swap:

1. **Body minimum.** Whatever family is chosen, body-2 stays at 16 px. If the new family reads smaller-than-expected at 16 (e.g., a condensed face), consider bumping body-2 to 17.
2. **Optical variant split.** If the new family has a Display/Text split (Inter has tabular variants; Source Serif has Subhead; Roboto Flex has size axis), apply it at the same 20 px breakpoint.
3. **Tracking.** Tracking values are tuned for SF Pro. Inter typically wants -0.01em on display sizes (vs SF Pro's -0.028em). Tune by eye, then settle on equivalent values per role.

---

## Sources

- `outputs/may05-home-redesign-review/experiments/v2/calm-scannable-v12-logo-left.html` — canonical CSS implementation (`:root` block)
- `outputs/may07-md3-design-md/DESIGN.md` — design.md format implementation (YAML `typography:` map)
- `design/foundation/typography.md` — official MHC typography rules (Confluence-linked) including the 16 px body minimum and 4.5:1 contrast floor
