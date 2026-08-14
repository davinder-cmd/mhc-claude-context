# Typography

**Confluence:** https://mobilehealthc.atlassian.net/wiki/spaces/MDS/pages/1344045333/Typography+v2
**Figma:** https://www.figma.com/file/QGp66GqX7B1LDkjD82bvwC/Design-System-Master?node-id=49848%3A6285
**Reference:** Material 3 Type System · Apple HIG Dynamic Type
**Status:** 🔄 Updating — MHC Type System v3 adopted 2026-05-23. Confluence Typography v2 spec needs corresponding update.

---

## Purpose

A consistent type system that maintains hierarchy and legibility across mobile, tablet, and web. The system defines a closed set of 25 atomic type classes. Designers and engineers apply classes; they do not override class properties.

---

## Type System Principles

The principles below are non-negotiable. They prevent the system from drifting via one-off fixes.

| Principle | Meaning |
|---|---|
| **Atomic classes** | Each class fully defines its role: size, line-height, weight, family, letter-spacing. Properties are bundled and applied as a unit. |
| **No overrides** | Inline overrides (`style="font-weight: ..."`, `style="font-size: ..."`, etc.) are not permitted. If a new visual role is required, **extend the scale with a new class** — do not patch an existing one. |
| **rem-based sizing** | All font-size and line-height values are expressed in rem so they respect the user's browser font-size preference (accessibility). The HTML root font-size is left at the browser default (16px). |
| **Universal margin reset** | Every text element (`h1`–`h6`, `p`, `ul`, `ol`, `blockquote`, etc.) ships with `margin: 0`. Container `gap`/`padding` handles spacing between siblings, not element margins. |
| **Closed scale** | New classes require system-level escalation, not inline improvisation. |

---

## Font Stack

| Platform | Default | Fallbacks |
|---|---|---|
| iOS | SF Pro | Roboto, partner custom font |
| Android | Roboto | Partner custom font |
| Web / Mobile web | SF Pro (system-resident), Roboto | Partner custom font |

**Critical rule:** when a client requires a custom font, use the font exactly as provided. Do not approximate via Google Fonts or any substitute.

**CSS family tokens:**
- `--f-display`: `"SF Pro Display", -apple-system, BlinkMacSystemFont, "Roboto", Arial, sans-serif`
- `--f-text`: `"SF Pro Text", -apple-system, BlinkMacSystemFont, "Roboto", Arial, sans-serif`

---

## Type Scale (25 classes)

Sizes shown as **size / line-height** in sp (Android) / pt (iOS) / px (web). 1.0 conversion ratio across all three platforms. At default browser font-size, 1sp = 1px = 0.0625rem.

| Class | Compact (<600) | Medium+ (≥600) | Weight | Family | Transform | Tracking | iOS Dynamic Type |
|---|---|---|---|---|---|---|---|
| **Display 1** | 58 / 64 | 66 / 74 | 400 regular | display | none | -0.01em | Large Title (custom-scaled) |
| **Display 2** | 51 / 56 | 58 / 64 | 400 regular | display | none | -0.01em | Large Title (custom-scaled) |
| **Display 3** | 45 / 52 | 52 / 60 | 400 regular | display | none | -0.01em | Large Title (custom-scaled) |
| **Heading 1** | 40 / 44 | 46 / 52 | 500 medium | display | none | -0.01em | Large Title (custom-scaled) |
| **Heading 2** | 36 / 40 | 41 / 46 | 500 medium | display | none | -0.01em | Large Title (custom-scaled) |
| **Heading 3** | 32 / 36 | 36 / 40 | 500 medium | display | none | -0.01em | Large Title |
| **Heading 4** | 28 / 32 | 32 / 36 | 500 medium | display | none | -0.01em | Title 1 |
| **Heading 5** | 25 / 28 | 29 / 32 | 500 medium | display | none | -0.008em | Title 2 |
| **Heading 6** | 20 / 24 | 23 / 26 | 500 medium | display | none | -0.008em | Title 3 |
| **Title 1** *(new)* | 18 / 24 | 20 / 24 | 500 medium | display | none | -0.008em | Headline |
| **Title 2** *(new)* | 16 / 20 | 18 / 24 | 500 medium | display | none | -0.008em | Callout (semibold) |
| **Title 3** *(new)* | 14 / 18 | 16 / 20 | 500 medium | display | none | -0.008em | Subheadline (semibold) |
| **Body 1** | 18 / 24 | 20 / 24 | 400 regular | text | none | -0.008em | Body |
| **Body 2** | 16 / 20 | 18 / 24 | 400 regular | text | none | -0.008em | Callout |
| **Body 3** | 14 / 18 | 16 / 20 | 400 regular | text | none | -0.008em | Footnote |
| **Label 0** *(new)* | 16 / 20 | 16 / 20 (static) | 500 medium | text | none | 0 | Callout (semibold) |
| **Label 1** *(new)* | 14 / 16 | 14 / 16 (static) | 500 medium | text | none | 0 | Footnote (semibold) |
| **Label 2** *(new)* | 12 / 16 | 12 / 16 (static) | 500 medium | text | none | 0 | Caption 1 (semibold) |
| **Label 3** *(new)* | 11 / 14 | *(Compact-only — use Label 2)* | 500 medium | text | none | 0 | Caption 2 |
| **Caption** | 12 / 16 | 14 / 20 | 500 medium | text | none (mixed-case) | 0 | Caption 1 |
| **Eyebrow** *(new)* | 11 / 14 | 12 / 16 | 500 medium | text | **uppercase** | 0.04em | Caption 1 / 2 |
| **Small** | 11 / 14 | 12 / 16 | 600 semibold | text | none | 0 | Caption 2 |
| **Paragraph 1** | 18 / 27 | 20 / 30 | 400 regular | text | none | -0.003em | Body |
| **Paragraph 2** | 16 / 24 | 18 / 27 | 400 regular | text | none | -0.003em | Callout |
| **Paragraph 3** | 14 / 20 | 16 / 24 | 400 regular | text | none | -0.003em | Footnote |

**Line-height rule:** every value above is chosen to land on the **4dp baseline grid** (or 2dp where 4dp doesn't fit at small sizes). Target ratios are approximately 1.125 for Display + Heading, 1.25 for Title + Body + Caption + Small, and 1.5 for Paragraph — but the actual line-height per class is the grid-aligned integer, not a strict mathematical ratio. This preserves vertical rhythm when stacking text blocks (e.g., Body 1 at 24dp LH composes cleanly with a 24dp icon row or a 24/32/40 spacing column).

## Responsive tiers

The scale renders in **three window-size tiers**, mapped to Material 3 window classes. Type changes at two breakpoints — **600** and **1200**:

| Tier | Width | Devices |
|---|---|---|
| **Compact** | `<600` | phones |
| **Medium** | `600–1199` | large phones, tablets, small windows |
| **Large** | `≥1200` | desktop / wide web |

- **Compact → Medium** are the two columns in the scale table above.
- **Medium → Large** steps the **primary reading hierarchy up one role**. **Caption, Small, Eyebrow, and all Label classes do NOT grow past Medium** — this keeps hierarchy intact and stops small text ballooning on wide screens.

### Large (≥1200) values
| Class group | Medium | Large |
|---|---|---|
| Page title *(Heading 5)* | 29 | **32** |
| Card / section headings *(Heading 6)* | 23 | **25** |
| Row & section titles *(Title 2)* | 18 | **20** |
| Sub-headings *(Title 3)* | 16 | **18** |
| Body copy *(Body 3)* | 16 | **18** |
| Caption · Small · Eyebrow · Labels | 14 · 12 · 12 · — | **unchanged** |

**Guardrails — what makes a tiered scale hold up at any width:**
- **Cap the measure** — hold body copy to ~65–75ch so wide screens don't produce over-long lines.
- **Large is the ceiling** — no growth beyond ≥1200; ultrawide keeps the Large sizes.
- **Small text is capped at Medium** — captions and labels never exceed their Medium size.

**Native note:** Compact/Medium cover iOS/Android; the **Large tier is web-only** (wide browser windows) — a native app doesn't reach ≥1200 in a single pane.

---

### What's new in v3 vs the Confluence v2 spec

| Change | Why |
|---|---|
| **Added Title 1–3 classes** | Filled the recurring "body-sized text with title intent" gap. Eliminates inline `font-weight: 500` overrides on body classes. |
| **Added Eyebrow class** | 12sp uppercase category label is now its own atomic class — same size and weight as Caption but with uppercase transform and letter-spacing baked in. Replaces composing `class="caption eyebrow"` with the cleaner `class="eyebrow"`. |
| **Added Label 1–3 classes** | Distinct from Body and Caption — these are the type classes that get applied to interactive UI labels (buttons, chips, tabs, nav). Medium weight (500), text family. Static across viewports (button labels don't grow with the form factor). Replaces the prior pattern of using Body 3 with an inline weight override on a 36dp button. |
| **Material-aligned weights throughout** | Body / Paragraph weights dropped from 500/600 to 400. Caption dropped from 600 to 500. Small dropped from 700 to 600. Display 3 dropped from 500 to 400. Heading 3 dropped from 600 to 500. The whole system is lighter and quieter. |
| **Line heights snapped to 4dp baseline grid** | Each class's line-height lands on the 4dp grid (or 2dp where 4dp doesn't fit at small sizes) for vertical rhythm. Target ratios are approximately 1.125 / 1.25 / 1.5 per family, but actual values are grid-aligned integers, not strict ratios. This preserves the v2 spec's grid alignment while documenting the principle explicitly. |
| **Caption + Small now bump (Eyebrow stays static)** | Caption bumps 12 → 14 on Medium+ (LH 16 → 20) to fill the Body 3 → Caption gap on desktop (Body 3 Medium+ is 16, leaving no 14 in the static-text tier). Small bumps 11 → 12 to honor the 12dp desktop floor — 11sp on a 1440px screen is too small. Eyebrow stays static at 12/16 — uppercase + tight tracking reads fine at 12, and its category-label role is the same regardless of viewport. |
| **Caption is mixed-case** | Caption is now strictly mixed-case at 12sp. The uppercase eyebrow treatment moved to its own atomic class (Eyebrow). No more composing modifiers. |
| **iOS Dynamic Type mappings refined** | Consistent across forms. Heading 3 promoted to Large Title. Paragraph 3 → Footnote (fixes a backwards mapping in v2). Title tier maps to Headline / Callout / Subheadline. |

---

## Element vs Class

The element choice (HTML semantics) and class choice (visual styling) are independent decisions.

| Decision | What it controls | Driven by |
|---|---|---|
| **HTML element** | Document outline (heading levels), screen reader navigation, semantics | Accessibility, document structure |
| **Type class** | Visual size, weight, family, line-height | Design |

### When to use which element

| Use this element | When the text is |
|---|---|
| `<h1>`–`<h6>` | A real heading in the document outline — page title, section title, article title. Screen readers will navigate using these. |
| `<p>` | A paragraph of running text (one or more sentences). |
| `<div>` / `<span>` | A UI label, widget header, badge text, or any text that is **not** part of the document outline. Card titles, eyebrows, list-item labels are usually divs/spans, not h-elements. |

### When to apply which class

Pick the class purely based on visual intent. The class can be applied to any element — the choice of `<div>` vs `<h3>` is independent.

| If the text is visually... | Use class |
|---|---|
| A real document heading (large, prominent) | **Heading 1–6** |
| A title-feel label that's body-sized | **Title 1–3** |
| Running text / body copy | **Body 1–3** |
| Long-form reading content (articles, descriptions) | **Paragraph 1–3** |
| An interactive label — button, chip, tab, nav item | **Label 1–3** |
| A category / section label rendered uppercase | **Eyebrow** |
| Small mixed-case label, metadata, micro-link | **Caption** |
| Tiniest label (timestamps, micro-meta, footers) | **Small** |
| Featured stat / dashboard value | **Display 1–3** |

**Common combinations:**

| HTML | Class | Example |
|---|---|---|
| `<h1 class="heading-2">` | h1 + Heading 2 | Page title styled as a section-sized heading |
| `<h2 class="heading-6">` | h2 + Heading 6 | Section title visually compact (the design language) |
| `<div class="title-2">` | div + Title 2 | Card title (label, not document heading) |
| `<p class="paragraph-2">` | p + Paragraph 2 | Body paragraph in long-form content |
| `<span class="caption">` | span + Caption | Inline label or eyebrow |

**Rule:** Heading elements (`<h1>`–`<h6>`) are for outline structure, not visual size. A card title that visually reads as "Title 2 size" should be a `<div>` (or `<span>`), not an `<h3>`.

---

## Base Layer (System Reset)

The base reset is part of the system foundation, applied before any type class. Every page imports this.

```css
/* ── Base layer — universal margin reset ─────────────── */
h1, h2, h3, h4, h5, h6,
p, ul, ol, blockquote, dl, dd, dt,
figure, hr {
  margin: 0;
}

/* Default body styling — every page inherits Body 2 */
body {
  font-family: var(--f-text);
  font-size: 1rem;                /* 16px = Body 2 size */
  line-height: 1.25;
  font-weight: 400;
  color: var(--ink);              /* defined in colors.md */
  -webkit-font-smoothing: antialiased;
  margin: 0;
  padding: 0;
}
```

With this in place, type classes do not need to declare `margin: 0` — the reset handles it. Class definitions specify only what differs from the reset.

**Do not override the root `<html>` font-size.** It must stay at the browser default (typically 16px) so user font-size preferences flow through rem-based sizing.

---

## CSS Implementation

Every class as it must be written. Engineering and the innovations team import this CSS as the single source of truth.

```css
:root {
  /* Family tokens */
  --f-display: "SF Pro Display", -apple-system, BlinkMacSystemFont, "Roboto", Arial, sans-serif;
  --f-text:    "SF Pro Text",    -apple-system, BlinkMacSystemFont, "Roboto", Arial, sans-serif;

}

/* Line-heights are absolute rem values, chosen to land on the 4dp baseline grid
   (or 2dp where 4dp doesn't fit at small sizes). They do NOT change with the
   Medium-form size bump — only font-size grows. This keeps stacked blocks at
   predictable heights (24, 32, 40, 48...) regardless of viewport. */

/* ── Display ─────────────────────────────────────────── */
.display-1 { font-family: var(--f-display); font-weight: 400; font-size: 3.625rem;  line-height: 4rem;     letter-spacing: -0.01em;  }  /* 58 / 64 */
.display-2 { font-family: var(--f-display); font-weight: 400; font-size: 3.1875rem; line-height: 3.5rem;   letter-spacing: -0.01em;  }  /* 51 / 56 */
.display-3 { font-family: var(--f-display); font-weight: 400; font-size: 2.8125rem; line-height: 3.25rem;  letter-spacing: -0.01em;  }  /* 45 / 52 */

/* ── Heading ─────────────────────────────────────────── */
.heading-1 { font-family: var(--f-display); font-weight: 500; font-size: 2.5rem;    line-height: 2.75rem;  letter-spacing: -0.01em;  }  /* 40 / 44 */
.heading-2 { font-family: var(--f-display); font-weight: 500; font-size: 2.25rem;   line-height: 2.5rem;   letter-spacing: -0.01em;  }  /* 36 / 40 */
.heading-3 { font-family: var(--f-display); font-weight: 500; font-size: 2rem;      line-height: 2.25rem;  letter-spacing: -0.01em;  }  /* 32 / 36 */
.heading-4 { font-family: var(--f-display); font-weight: 500; font-size: 1.75rem;   line-height: 2rem;     letter-spacing: -0.01em;  }  /* 28 / 32 */
.heading-5 { font-family: var(--f-display); font-weight: 500; font-size: 1.5625rem; line-height: 1.75rem;  letter-spacing: -0.008em; }  /* 25 / 28 */
.heading-6 { font-family: var(--f-display); font-weight: 500; font-size: 1.25rem;   line-height: 1.5rem;   letter-spacing: -0.008em; }  /* 20 / 24 */

/* ── Title (NEW in v3 — body-sized titles with display character) ── */
.title-1 { font-family: var(--f-display); font-weight: 500; font-size: 1.125rem; line-height: 1.5rem;   letter-spacing: -0.008em; }  /* 18 / 24 */
.title-2 { font-family: var(--f-display); font-weight: 500; font-size: 1rem;     line-height: 1.25rem;  letter-spacing: -0.008em; }  /* 16 / 20 */
.title-3 { font-family: var(--f-display); font-weight: 500; font-size: 0.875rem; line-height: 1.125rem; letter-spacing: -0.008em; }  /* 14 / 18 */

/* ── Body ────────────────────────────────────────────── */
.body-1  { font-family: var(--f-text); font-weight: 400; font-size: 1.125rem; line-height: 1.5rem;   letter-spacing: -0.008em; }  /* 18 / 24 */
.body-2  { font-family: var(--f-text); font-weight: 400; font-size: 1rem;     line-height: 1.25rem;  letter-spacing: -0.008em; }  /* 16 / 20 */
.body-3  { font-family: var(--f-text); font-weight: 400; font-size: 0.875rem; line-height: 1.125rem; letter-spacing: -0.008em; }  /* 14 / 18 */

/* ── Label (NEW in v3 — interactive UI labels: buttons, chips, tabs, nav.
   All static across viewports.) ─────────────────────────── */
.label-0 { font-family: var(--f-text); font-weight: 500; font-size: 1rem;     line-height: 1.25rem;  letter-spacing: 0; }  /* 16 / 20 — hero CTAs / Jumbo buttons */
.label-1 { font-family: var(--f-text); font-weight: 500; font-size: 0.875rem;  line-height: 1rem;     letter-spacing: 0; }  /* 14 / 16 */
.label-2 { font-family: var(--f-text); font-weight: 500; font-size: 0.75rem;   line-height: 1rem;     letter-spacing: 0; }  /* 12 / 16 */
.label-3 { font-family: var(--f-text); font-weight: 500; font-size: 0.6875rem; line-height: 0.875rem; letter-spacing: 0; }  /* 11 / 14 */

/* ── Caption / Eyebrow / Small ────────────────────────────
   Caption + Small bump at ≥600dp (see @media block below).
   Eyebrow stays static — uppercase reads fine at 12sp. */
.caption { font-family: var(--f-text); font-weight: 500; font-size: 0.75rem;   line-height: 1rem;     letter-spacing: 0; }       /* 12 / 16, mixed-case */
.eyebrow { font-family: var(--f-text); font-weight: 500; font-size: 0.6875rem; line-height: 0.875rem; letter-spacing: 0.04em; text-transform: uppercase; }  /* 11 / 14 Compact + Medium, uppercase — bumps at ≥600 in canonical spec / ≥1200 in current prototype */
.small   { font-family: var(--f-text); font-weight: 600; font-size: 0.6875rem; line-height: 0.875rem; letter-spacing: 0; }       /* 11 / 14 */

/* ── Paragraph (LH ~1.5 for long-form reading) ───────── */
.paragraph-1 { font-family: var(--f-text); font-weight: 400; font-size: 1.125rem; line-height: 1.6875rem; letter-spacing: -0.003em; }  /* 18 / 27 */
.paragraph-2 { font-family: var(--f-text); font-weight: 400; font-size: 1rem;     line-height: 1.5rem;    letter-spacing: -0.003em; }  /* 16 / 24 */
.paragraph-3 { font-family: var(--f-text); font-weight: 400; font-size: 0.875rem; line-height: 1.25rem;   letter-spacing: -0.003em; }  /* 14 / 20 */

/* ── Medium-form size + LH bumps (≥600dp).
   Label 1–3 + Eyebrow do NOT bump.
   Caption + Small DO bump (12→14 and 11→12 — honors 12dp desktop floor). */
@media (min-width: 600px) {
  .display-1   { font-size: 4.125rem;  line-height: 4.625rem;  }  /* 66 / 74 */
  .display-2   { font-size: 3.625rem;  line-height: 4rem;      }  /* 58 / 64 */
  .display-3   { font-size: 3.25rem;   line-height: 3.75rem;   }  /* 52 / 60 */
  .heading-1   { font-size: 2.875rem;  line-height: 3.25rem;   }  /* 46 / 52 */
  .heading-2   { font-size: 2.5625rem; line-height: 2.875rem;  }  /* 41 / 46 */
  .heading-3   { font-size: 2.25rem;   line-height: 2.5rem;    }  /* 36 / 40 */
  .heading-4   { font-size: 2rem;      line-height: 2.25rem;   }  /* 32 / 36 */
  .heading-5   { font-size: 1.8125rem; line-height: 2rem;      }  /* 29 / 32 */
  .heading-6   { font-size: 1.4375rem; line-height: 1.625rem;  }  /* 23 / 26 */
  .title-1     { font-size: 1.25rem;   line-height: 1.5rem;    }  /* 20 / 24 */
  .title-2     { font-size: 1.125rem;  line-height: 1.5rem;    }  /* 18 / 24 */
  .title-3     { font-size: 1rem;      line-height: 1.25rem;   }  /* 16 / 20 */
  .body-1      { font-size: 1.25rem;   line-height: 1.5rem;    }  /* 20 / 24 */
  .body-2      { font-size: 1.125rem;  line-height: 1.5rem;    }  /* 18 / 24 */
  .body-3      { font-size: 1rem;      line-height: 1.25rem;   }  /* 16 / 20 */
  .paragraph-1 { font-size: 1.25rem;   line-height: 1.875rem;  }  /* 20 / 30 */
  .paragraph-2 { font-size: 1.125rem;  line-height: 1.6875rem; }  /* 18 / 27 */
  .paragraph-3 { font-size: 1rem;      line-height: 1.5rem;    }  /* 16 / 24 */
  .caption     { font-size: 0.875rem; line-height: 1.25rem;   }  /* 14 / 20 */
  .eyebrow     { font-size: 0.75rem;  line-height: 1rem;      }  /* 12 / 16 — bumped from 11/14 Compact; uppercase reads chunkier so smaller base + single-step bump */
  .small       { font-size: 0.75rem;  line-height: 1rem;      }  /* 12 / 16 */
  /* .label-0 stays 16/20 · .label-1 stays 14/16 · .label-2 stays 12/16 · .label-3 not used in Medium+ */
}
```

### Caption vs Eyebrow

Both classes share weight (500 medium) and family (SF Pro Text). They differ in transform, tracking, size, and Medium+ behavior:

| Class | Compact | Medium+ | Transform | Tracking | Use for |
|---|---|---|---|---|---|
| **Caption** | 12 / 16 | 14 / 20 (bumps) | mixed-case | 0 | Inline metadata, micro-links, small mixed-case labels |
| **Eyebrow** | 11 / 14 | 12 / 16 (bumps one step) | UPPERCASE | 0.04em | Category labels above content ("BASED ON YOUR INTERESTS", "TEAM CHALLENGE") |

Eyebrow runs one size tier smaller than Caption at every viewport because uppercase + 4% tracking reads optically larger than mixed-case at the same point size. 11sp uppercase ≈ 12sp mixed-case in visual weight; 14sp uppercase ≈ 16sp mixed-case.

Use:
- `<span class="caption">3 min read</span>`
- `<span class="eyebrow">Based on your interests</span>` (the class uppercases it)

These are **separate atomic classes**, not composed. Pick one, never both.

### Label vs Body vs Caption

Label, Body, and Caption all live in the text family at similar sizes. They differ by **role**, not by visual coincidence.

| Class | Size | Weight | Role |
|---|---|---|---|
| **Label 0** | 16sp (static) | 500 medium | Interactive UI label — hero / Jumbo button text (48dp buttons). Used where Label 1 (14sp) would read under-weighted inside a tall button. |
| **Label 1** | 14sp (static) | 500 medium | Interactive UI label — primary use is button text on Medium/Large buttons, chips, primary nav |
| **Label 2** | 12sp (static) | 500 medium | Interactive UI label — Small button text, dense UI controls |
| **Label 3** | 11sp **Compact only** | 500 medium | Tiniest interactive label — bottom nav, status pills. **Do not apply in Medium+ layouts** — use Label 2 instead. |
| **Body 3** | 14sp / 16sp Medium+ | 400 regular | Running text — same size as Label 1 in Compact but for reading, not tapping |
| **Caption** | 12sp / 14sp Medium+ | 500 medium | Inline metadata. In Compact, same size + weight as Label 2 but different role (informational, not tappable). In Medium+, Caption bumps to 14 to honor the 12dp desktop floor and fill the Body 3 → Caption gap. |

**Rule:** if the text sits inside an interactive control (button, chip, tab, nav item), use Label. If it's static information, use Body or Caption.

---

## Breakpoints

The Medium-form bump fires at **600dp** (start of the Medium window-size class per [responsive-grid.md](responsive-grid.md)). One breakpoint, one bump. No second-tier bumps at higher widths.

| Window size class | Range | Type rendering |
|---|---|---|
| **Compact** | 0–599dp | Small-form sizes (column "Compact" in scale table) |
| **Medium / Expanded / Large / Extra-large** | ≥600dp | Medium-form sizes (column "Medium+" in scale table) |

**12dp desktop floor.** On Medium+ viewports, no static-text class should fall below 12sp. The bump behavior:

- **Caption bumps** 12 / 16 → 14 / 20 — fills the Body 3 → Caption gap (Body 3 Medium+ is 16, so the static-text tier needed a 14 entry).
- **Small bumps** 11 / 14 → 12 / 16 — honors the floor.
- **Eyebrow stays static** at 12 / 16 — uppercase + tight tracking reads fine at 12, and its category-label role is the same regardless of viewport.
- **Label 0, Label 1, and Label 2 stay static** (16, 14, and 12 — already at floor or above). Interactive tap targets keep a consistent size across viewports.
- **Label 3 (11sp) is Compact-only** — bottom nav and status pills are Compact-form patterns. In Medium+ layouts, use Label 2 instead.

---

## iOS Dynamic Type

Implementation approach for Matt's iOS work:

**Recommended: UIFontMetrics with custom sizes.** Each MHC class maps to an iOS text style for **scaling rate only** — the rendered default size matches MHC's spec, not iOS's default for that style.

```swift
// Example: Heading 4 → Title 1 (scaling), but render at MHC's 28pt
let customFont = UIFont(name: "SF Pro Display", size: 28)!
let label.font = UIFontMetrics(forTextStyle: .title1).scaledFont(for: customFont)
```

This preserves cross-platform consistency (iOS renders MHC sizes by default) while respecting user Dynamic Type accessibility preferences.

**Open question:** Matt's current implementation may use built-in iOS styles directly (`UIFont.preferredFont(forTextStyle: .title1)`) — which would render iOS defaults regardless of MHC's spec. The mapping table column reflects intended SCALING behavior in either case. Confirm with Matt which pattern is in use.

### Classes that exceed iOS Dynamic Type's largest style

iOS Large Title default is 34pt. The following MHC classes are larger:

| Class | MHC size | Implication |
|---|---|---|
| Display 1 | 58sp | 71% larger than Large Title — must use UIFontMetrics scaling |
| Display 2 | 51sp | 50% larger — must use UIFontMetrics |
| Display 3 | 45sp | 32% larger — must use UIFontMetrics |
| Heading 1 | 40sp | 18% larger — must use UIFontMetrics |
| Heading 2 | 36sp | 6% larger — close enough to use Large Title directly with slight discrepancy |

There is no native iOS Dynamic Type style at these sizes. Use UIFontMetrics scaling against Large Title for these classes.

---

## Formatting

| Style | When to use |
|---|---|
| **Bold / Semibold / Medium** | Reserved for hierarchy and emphasis. Section headers use the medium weight built into Heading classes. Inline emphasis within body text should be rare — prefer different classes over inline `<strong>`. |
| **Italics** | Titles of works, technical terms, names of devices, captions. Not for emphasis. |
| **Underline** | Links only — never for emphasis. |
| **ALL CAPS** | Only via Caption + `.eyebrow` modifier for category labels. Never apply ALL CAPS to body text or sentences. |

### Inline `<strong>` and `<em>`

Use sparingly. Each `<strong>` introduces a weight mix within a sentence (e.g., "Sleep is averaging **38 minutes less** than your goal"). This conflicts with the "atomic class, no overrides" principle in spirit. Prefer one of:
- A separate sentence at a different class
- Two separate elements (e.g., a metric value + a description) at different classes
- A visually distinct callout component

If you do use inline `<strong>`, it should add visual weight equivalent to one step heavier than the surrounding text (e.g., body 400 → 600 semibold inline).

---

## Rules

The non-negotiable list:

- **Always use a type class.** Never set `font-size` or `line-height` inline on production code.
- **Never override class properties.** No inline `style="font-weight"`, `style="font-size"`, `style="line-height"`. If you need a variant, escalate for a new class.
- **Use rem for font-size, unitless for line-height.** Never `px` for type sizes.
- **Do not override the root `<html>` font-size.** Keep it at browser default (16px).
- **Body text floor is 16px (Body 2).** Do not shrink body copy below this. Body 3 (14sp) is for secondary content, not running body text.
- **Color contrast: 4.5:1 minimum** for all text (WCAG AA).
- **Caption is mixed-case; Eyebrow is uppercase.** Pick the right class — don't compose them, don't override text-transform inline.

---

## Escalate if

- A new visual role is required that isn't in the 20-class scale
- A size, weight, or family is requested outside the current spec
- iOS Dynamic Type mapping needs revision
- A partner / SDK requires a non-MHC font stack

---

## Related

- [responsive-grid.md](responsive-grid.md) — window-size classes that drive the 600dp breakpoint
- [spacing.md](spacing.md) — spacing tokens (must be used for all padding/margin/gap)
- [colors.md](colors.md) — ink tokens used by type
- [object-styles.md](object-styles.md) — corner radius, borders (not used by type but referenced)

---

## Migration from v2

For engineering and innovations team — what changes when upgrading from the Confluence v2 scale to v3.

### New classes to implement

- `.title-1` (18 / 20) — body-sized title with display character
- `.title-2` (16 / 18) — secondary card title
- `.title-3` (14 / 16) — smallest title
- `.eyebrow` (12 / 15, uppercase, tracking 0.04em) — category label, atomic class (not a modifier)
- `.label-0` (16 / 20, medium) — hero / Jumbo button label (48dp buttons)
- `.label-1` (14 / 16, medium) — interactive label for Medium / Large buttons, chips, primary nav
- `.label-2` (12 / 16, medium) — interactive label for Small buttons, dense UI controls
- `.label-3` (11 / 14, medium) — tiniest interactive label (bottom nav, status pills)

### Weight changes (all existing classes)

| Class | v2 weight | v3 weight |
|---|---|---|
| Display 3 | medium (500) | regular (400) |
| Heading 3 | semibold (600) | medium (500) |
| Body 1–3 | medium (500) | regular (400) |
| Caption | semibold (600) | medium (500) |
| Small | bold (700) | semibold (600) |
| Paragraph 1–3 | semibold (600) | regular (400) |

### Line-height changes

Per-class line-height pairs from v2 are replaced by three ratios:
- Display + Heading: **1.125**
- Title + Body + Caption + Small: **1.25**
- Paragraph: **1.5**

### Caption / Small static

- Caption: was 12 Compact / 14 Medium → **12 at all viewports**
- Small: was 11 Compact / 13 Medium → **11 at all viewports**

### Caption no longer uppercase by default

Use the new Eyebrow class for category labels:
- v2: `<span class="caption">CATEGORY</span>` → rendered uppercase via class default
- v3: `<span class="eyebrow">Category</span>` → rendered uppercase via Eyebrow class (no composition needed)
- v3: `<span class="caption">3 min read</span>` → rendered mixed-case (Caption is now strictly mixed-case)

### Confluence Small Form / Medium Form pages need updating

The Confluence sub-pages [Small Form](https://mobilehealthc.atlassian.net/wiki/spaces/MDS/pages/1344045391) and [Medium Form](https://mobilehealthc.atlassian.net/wiki/spaces/MDS/pages/1344045403) reflect v2. They should be updated to:
- Add Title 1–3 rows
- Add Eyebrow row
- Add Label 0, Label 1, Label 2 rows (static in both forms)
- Add Label 3 row to Small Form only (Compact-only; not used in Medium Form)
- Update weight columns to v3 values
- Mark Eyebrow + Label 0 + Label 1 + Label 2 as "static — same as Small Form"
- **Caption Medium Form is 14 / 20** (bumps from 12 / 16 Compact)
- **Small Medium Form is 12 / 16** (bumps from 11 / 14 Compact)
- Update Caption to mixed-case (drop the implicit uppercase)
- Adjust iOS Dynamic Type mappings per the table above

---

## Revision Log

| Date | Change |
|------|--------|
| 2026-03-17 | Confluence Typography v2 — original spec with Display, Heading, Body, Caption, Small, Paragraph |
| 2026-05-23 | **MHC Type System v3 adopted.** Title 1–3 classes added. Weights aligned to Material 3 (Body / Paragraph 500→400, Caption 600→500, Small 700→600, Paragraph 600→400). Line heights simplified to three ratios (1.125 / 1.25 / 1.5). Caption + Small set static across viewports. Universal margin reset documented as base-layer rule. rem-based sizing confirmed for web. iOS Dynamic Type mappings refined (Heading 3 → Large Title; Paragraph 3 → Footnote; Title tier → Headline/Callout/Subhead; mappings now consistent across forms). Principles section added — atomic classes, no overrides. Element-vs-class decision rules documented. |
| 2026-05-23 | **Eyebrow promoted to atomic class.** Initial v3 had Eyebrow as a `.eyebrow` modifier composed onto Caption (`class="caption eyebrow"`). This was inconsistent with the atomic-class principle — composition is a form of property modification. Eyebrow is now a standalone class at 12sp, medium weight, uppercase, 0.04em tracking. Caption stays strictly mixed-case. Pick one or the other, never compose. Scale grows from 20 to 21 classes. |
| 2026-05-24 | **Eyebrow re-spec'd as smaller-tier sibling to Caption.** Was: 12 / 16 static across viewports. Now: **11 / 14 Compact, 12 / 16 Medium+ (bumps one step).** Recognizes that uppercase + 4% tracking renders ~1 size tier larger optically than mixed-case at the same point size. So 11sp uppercase ≈ 12sp mixed-case for visual weight. Eyebrow now runs one tier smaller than its sibling Caption (12→14) at every viewport. Avoids the "uppercase 14sp feels shouty/chunky on desktop" issue. Matches existing Small class's 11/14 Compact base. |
| 2026-05-24 | **Label 0 added (16 / 20 medium static, text family).** Fills the gap between Label 1 (14sp) and Body 1 (18sp) for hero / Jumbo buttons (48dp). Validated in prototype v55: 14sp Label 1 inside a 48dp Jumbo button read anemic (3.4:1 button-to-label height ratio); 16sp Label 0 brings the ratio to ~3:1 with more presence. Pattern stays "buttons use Label" — Jumbo's prominence now comes from height + padding + filled treatment + a label sized appropriately to its scale. Scale grows 24 → 25 classes. Button atom mapping updated: Jumbo → Label 0. |
| 2026-05-23 | **Caption + Small bump (partial walk-back of "static" decision); 12dp desktop floor established.** Earlier in this session Caption (12/16) and Small (11/14) were marked static across viewports. Reverting that for Caption and Small only. **Caption bumps 12 / 16 → 14 / 20** on Medium+, **Small bumps 11 / 14 → 12 / 16**. Reason: with Body 3 at 16 on desktop and Caption at 12, the static-text tier was missing a 14 entry — too big a gap. And Small at 11sp on a 1440px screen is below the comfortable desktop reading floor. **New principle: 12dp is the desktop floor for static text.** Eyebrow stays static at 12 / 16 (uppercase reads fine at 12, and Eyebrow's role is identical across viewports — the prior justification for making Caption static was that Eyebrow would handle uppercase needs; that's still true, so Eyebrow doesn't need to bump). Label 1 (14) and Label 2 (12) stay static — already at floor. **Label 3 (11) is now Compact-only** — bottom nav and status pills are Compact-form patterns; on Medium+ designs, use Label 2 instead. Scale-wise, classes count unchanged (24) but Label 3 has no Medium+ variant. |
| 2026-05-23 | **Label tier added (Label 1–3).** Filled the gap for interactive UI labels (buttons, chips, tabs, nav). Distinct from Body (same size range, different role and weight) and Caption (same size in some cases, different role — Label is for tappable controls, Caption is for static metadata). Label 1 (14/16 medium) replaces the prior pattern of putting Body 3 inside a 36dp button with an inline weight override. Label 2 (12/16 medium) for Small buttons and dense UI. Label 3 (11/14 medium) for tiniest labels (bottom nav, status pills). All static across viewports — interactive labels keep consistent tap targets regardless of form factor. Scale grows from 21 → 24 classes. Button atom updated to reference Label 1 (Medium / Large) and Label 2 (Small). |
| 2026-05-23 | **Line-height correction — snap to 4dp grid.** Interim drafts framed line-heights as strict ratios (1.125 / 1.25 / 1.5) which produced off-grid pixel values (e.g., Body 1 at 18sp × 1.25 = 22.5 → 23). This broke vertical rhythm when stacking text blocks against the 4dp/8dp baseline grid. Reverted to per-class line-heights snapped to the 4dp grid (or 2dp where 4dp doesn't fit at small sizes). Target ratios remain ~1.125 / ~1.25 / ~1.5 as a guideline, but actual values are grid-aligned integers, not strict ratios. Body 1 returns to 18/24 (ratio 1.333), Caption returns to 12/16 (1.333), etc. The original v2 spec was largely correct on this — the "simplification" went too far. Matches Material 3's actual approach (per-class LH chosen for visual rhythm, not strict ratios). All values updated in Figma, Confluence (v3 of those pages), and the CSS reference above. |
