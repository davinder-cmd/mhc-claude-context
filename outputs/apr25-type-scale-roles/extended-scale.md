# MH Type Scale — Extended with Role Tiers

Proposal for adding role-driven weight and letter-spacing to the existing MH type scale, plus two new role tiers (Title and Label). This brings the MH scale to structural parity with Material 3's role-tokenized typography system.

The intent is **not** to change MH's visual character — sizes and line-heights are kept exactly as they are today. The change is to make every token *self-contained*: applying a token gives you size, line-height, weight, *and* letter-spacing in one step, with values chosen by role.

**Status:** sketch. Weight and tracking values are starting proposals based on Material 3 conventions. They need calibration against MH's actual visual aesthetic — looking at how current production headings, buttons, and card titles render, then adjusting these defaults to match.

---

## Scope of changes

| Action | Count |
|---|---|
| Existing tokens kept (size + line-height unchanged) | 17 |
| Existing tokens retrofitted (weight + tracking added) | 17 |
| New tokens added (Title 1-3, Label 1-3) | 6 |
| **Total tokens after change** | **23** |

---

## Full extended scale

### Display — large display type, hero numbers, splash moments

| Token | Size | Line-height | Weight | Tracking | Material 3 equiv |
|---|---|---|---|---|---|
| Display 1 | 58px | 64px | 400 | -1px | display-large (57/64) |
| Display 2 | 51px | 56px | 400 | -0.5px | *(no equivalent)* |
| Display 3 | 45px | 52px | 400 | -0.25px | display-medium (45/52) |

### Heading — page-level structural headings

| Token | Size | Line-height | Weight | Tracking | Material 3 equiv |
|---|---|---|---|---|---|
| Heading 1 | 40px | 44px | 700 | -0.5px | *(no equivalent)* |
| Heading 2 | 36px | 40px | 700 | -0.25px | display-small (36/44) |
| Heading 3 | 32px | 36px | 700 | 0 | headline-large (32/40) |
| Heading 4 | 28px | 32px | 600 | 0 | headline-medium (28/36) |
| Heading 5 | 25px | 28px | 600 | 0 | headline-small (24/32) |
| Heading 6 | 20px | 24px | 600 | 0 | *(no equivalent)* |

### Title — component-level headings (NEW TIER)

| Token | Size | Line-height | Weight | Tracking | Material 3 equiv |
|---|---|---|---|---|---|
| Title 1 | 22px | 28px | 500 | -0.2px | title-large (22/28) |
| Title 2 | 18px | 24px | 500 | -0.1px | *(no equivalent)* |
| Title 3 | 16px | 20px | 500 | 0 | title-medium (16/24) |

**Use for:** card titles, dialog headers, section heads inside components, list group headers. Anywhere the text is the title of a *component*, not the title of a *page*.

### Body — UI text, descriptions, dense content

| Token | Size | Line-height | Weight | Tracking | Material 3 equiv |
|---|---|---|---|---|---|
| Body 1 | 18px | 24px | 400 | 0.25px | *(no equivalent)* |
| Body 2 | 16px | 20px | 400 | 0.25px | *(no equivalent — Material body-large is 16/24)* |
| Body 3 | 14px | 18px | 400 | 0.25px | *(no equivalent — Material body-medium is 14/20)* |

**Note:** Body line-heights are tighter than Material's by design (16/20 vs Material 16/24). This is MH's UI density preference.

### Paragraph — long-form prose with reading-friendly line-height

| Token | Size | Line-height | Weight | Tracking | Material 3 equiv |
|---|---|---|---|---|---|
| Paragraph 1 | 18px | 27px | 400 | 0.5px | *(no equivalent)* |
| Paragraph 2 | 16px | 24px | 400 | 0.5px | body-large (16/24) |
| Paragraph 3 | 14px | 20px | 400 | 0.5px | body-medium (14/20) |

**Use for:** article body, descriptions, multi-line prose. Use when the text wants to be *read*, not *scanned*. Tracking is slightly wider than Body to aid sustained reading.

### Label — UI controls and micro-text (NEW TIER)

| Token | Size | Line-height | Weight | Tracking | Material 3 equiv |
|---|---|---|---|---|---|
| Label 1 | 14px | 20px | 500 | 0.1px | label-large (14/20) |
| Label 2 | 12px | 16px | 500 | 0.4px | label-medium (12/16) |
| Label 3 | 11px | 14px | 500 | 0.5px | label-small (11/16) |

**Use for:** buttons, chips, tabs, eyebrow labels, tag pills, badge text. The weight 500 gives UI controls the visual presence to read as "interactive surface" rather than "prose."

### Caption / Small — auxiliary text

| Token | Size | Line-height | Weight | Tracking | Material 3 equiv |
|---|---|---|---|---|---|
| Caption | 12px | 16px | 400 | 0.4px | body-small (12/16) |
| Small | 11px | 14px | 400 | 0.5px | *(close to label-small)* |

**Use for:** image captions, footnotes, fine print, timestamps, helper text below form fields. Distinct from Label (which is for UI controls) — Caption/Small are for descriptive auxiliary content.

---

## What changed and why

### Existing tokens — added weight and tracking

Every existing token was specified with only size and line-height. After this change, each token specifies all four properties. The numeric values for weight and tracking follow these conventions:

- **Display (400 weight):** large enough that bold would feel heavy. Negative tracking tightens the visual bunching at large sizes.
- **Heading (700 for H1-3, 600 for H4-6):** stronger weight at the top of the hierarchy, easing as the headings get smaller and closer to body weight. Headings are page-structural and earn the visual weight.
- **Body / Paragraph (400 weight):** prose weight. Body has tighter tracking (0.25px) for compact UI; Paragraph has wider tracking (0.5px) for sustained reading.
- **Caption / Small (400 weight):** stay light; they're auxiliary.

### New tokens — Title and Label tiers

**Title tier** fills the gap between Heading and Body for component-level headings. A card title at H6 (20/24/600) reads as "page-structural at smaller scale," which is the wrong signal — the card isn't a section of the page. Title 3 (16/20/500) carries the same point size as Body 2 but with weight 500 and 0 tracking, which reads as "this is the header of a component," not "this is prose."

**Label tier** is for UI controls. A button at Body 3 (14/18/400) reads as prose pushed onto a button. Label 1 (14/20/500/0.1) reads as a UI surface — different weight, slightly looser line-height, slight positive tracking. Same point size, three different visual jobs.

The role-driven distinctions matter most at smaller sizes (14px and below), where weight and tracking carry more signal than at display sizes. This is why Material 3 has three distinct roles converging at 14px (body-medium, title-small, label-large) — and why MH should too.

---

## Decisions to validate

These are the calls baked into this sketch. Each is worth checking against the actual MH product before publishing.

1. **Heading weights — is 700 too heavy for H1-3?** Some brands run headings at 600 across the tier or even 500 for a softer feel. The proposal uses 700 because that's the most common "strong heading" convention, but the right answer depends on MH's brand voice.

2. **Body tracking at 0.25px — is that right?** Material 3 ships 0.5px on body-large, 0.25px on body-medium. The proposal uses 0.25 across all Body sizes for consistency. If MH prefers Material's varying tracking, switch.

3. **Title 2 (18/24) is novel — keep it?** Material has only two 14-22px Title sizes (title-medium 16, title-large 22). The proposal adds an 18px Title that mirrors MH's Body 1. Useful if you want title-weight at 18px; redundant if 16 and 22 cover the use cases.

4. **Caption vs Label 2 — both at 12px, when to use which?** Caption is weight 400 (prose), Label 2 is weight 500 (UI). The decision tree is: *is this text describing or labeling auxiliary content (Caption) or is it a UI control / structural label (Label 2)?* Worth a one-page decision tree for engineers.

5. **Should Heading 1 (40px) become Display 4?** Heading 1 sits between display-small (36) and Material's biggest headline (32) — it's bigger than a "headline" should be by Material conventions. Could be reclassified as a fourth Display size with weight 400. Depends on how Heading 1 is currently used: as a page-level header (keep as Heading) or as a hero-scale element (move to Display).

---

## Implementation: CSS custom properties

For engineers to consume, exposing each token as a `font:` shorthand custom property (so applying it is one line):

```css
:root {
  /* Display */
  --type-display-1: 400 58px/64px 'Inter', sans-serif; /* + letter-spacing -1px */
  --type-display-2: 400 51px/56px 'Inter', sans-serif; /* + letter-spacing -0.5px */
  --type-display-3: 400 45px/52px 'Inter', sans-serif; /* + letter-spacing -0.25px */

  /* Heading */
  --type-heading-1: 700 40px/44px 'Inter', sans-serif; /* + letter-spacing -0.5px */
  --type-heading-2: 700 36px/40px 'Inter', sans-serif; /* + letter-spacing -0.25px */
  --type-heading-3: 700 32px/36px 'Inter', sans-serif;
  --type-heading-4: 600 28px/32px 'Inter', sans-serif;
  --type-heading-5: 600 25px/28px 'Inter', sans-serif;
  --type-heading-6: 600 20px/24px 'Inter', sans-serif;

  /* Title (NEW) */
  --type-title-1: 500 22px/28px 'Inter', sans-serif; /* + letter-spacing -0.2px */
  --type-title-2: 500 18px/24px 'Inter', sans-serif; /* + letter-spacing -0.1px */
  --type-title-3: 500 16px/20px 'Inter', sans-serif;

  /* Body */
  --type-body-1: 400 18px/24px 'Inter', sans-serif; /* + letter-spacing 0.25px */
  --type-body-2: 400 16px/20px 'Inter', sans-serif; /* + letter-spacing 0.25px */
  --type-body-3: 400 14px/18px 'Inter', sans-serif; /* + letter-spacing 0.25px */

  /* Paragraph */
  --type-paragraph-1: 400 18px/27px 'Inter', sans-serif; /* + letter-spacing 0.5px */
  --type-paragraph-2: 400 16px/24px 'Inter', sans-serif; /* + letter-spacing 0.5px */
  --type-paragraph-3: 400 14px/20px 'Inter', sans-serif; /* + letter-spacing 0.5px */

  /* Label (NEW) */
  --type-label-1: 500 14px/20px 'Inter', sans-serif; /* + letter-spacing 0.1px */
  --type-label-2: 500 12px/16px 'Inter', sans-serif; /* + letter-spacing 0.4px */
  --type-label-3: 500 11px/14px 'Inter', sans-serif; /* + letter-spacing 0.5px */

  /* Caption / Small */
  --type-caption: 400 12px/16px 'Inter', sans-serif; /* + letter-spacing 0.4px */
  --type-small: 400 11px/14px 'Inter', sans-serif;   /* + letter-spacing 0.5px */
}
```

**Note on the `font:` shorthand:** CSS's `font` shorthand does *not* include `letter-spacing`. To get a true one-line application, either (a) apply `letter-spacing` separately via a sibling custom property and use both, or (b) define each token as a CSS class with both properties baked in:

```css
.text-label-1 {
  font: 500 14px/20px 'Inter', sans-serif;
  letter-spacing: 0.1px;
}
```

The class-based approach is what Material does (`mat-typography` classes apply both). Recommended for MH unless you have a strong reason to prefer custom properties.

---

## Suggested rollout

1. **Audit current usage** — grep production CSS for hardcoded `font-size`, `font-weight`, `letter-spacing`. Tag each occurrence with the role it should map to (Title, Label, Body, etc.).
2. **Define the 23 tokens** as CSS classes (or custom properties) in the design system layer.
3. **Replace highest-traffic components first** — buttons, card titles, page headers. These are where role distinctions matter most.
4. **Document the decision tree** — one page, "which role do I pick?" — so non-frontend devs and LLM-prompted UI work can converge on the right token without knowing weight/tracking rules.
5. **Deprecate inline weight/tracking** — once components are migrated, ban inline `font-weight` and `letter-spacing` outside the token definitions.

Estimated effort: 2-3 days for token definition + a high-traffic component sweep. The audit step (1) is the biggest variable depending on codebase size.
