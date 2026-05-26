# ACME Home — Type Scale v2 prototype

Applies the proposed 12-role v2 type scale to the ACME Home Page redesign (Figma node `4450:6364`). Single responsive HTML, three breakpoint views via CSS media queries — resize the browser to see wide-flex (1200+), desktop (~1100), and mobile (375).

**Figma source:** https://www.figma.com/design/8KnqJZHw475F2dpsHaubKY/Home-Page-redesign?node-id=4450-6364

---

## Iterations

| File | Notes |
|---|---|
| `v1-acme-home-typescale-v2.html` | **v1 · initial.** First pass of the 12-role v2 scale (Display / Headline 1-3 / Title 1-2 / Body 1-2 / Label 1-2 / Caption / Footnote) applied 1:1 against the Figma. Greeting demotes from Headline 1 (28) on mobile to Headline 2 (24) on desktop so the hero owns the focal point on wide screens. Warm-neutral palette: sand surfaces (60%), white card surfaces (30%), ACME red + primary indigo accents (10%). SF Pro stack (`-apple-system` chain). Tracker metric values and reward values both at Headline 2 (24/600) — same "numeric prominence" job. Lane cards use 88dp square thumbs at desktop, 64dp on mobile. Insight band: indigo border + dot. Programs: moss eyebrow dot + progress bar. Rewards: ACME-red eyebrow dot. Live breakpoint readout (bottom-right) shows current viewport class. Page ends with a system reference section: 12-role legend with usage-status column, 60/30/10 weighting bar with swatch key, and a breakpoint behavior table. Three reserve roles flagged: Display, Title 2, Body 2 — none used on this page, kept for marketing hero / dense list / table contexts. |

---

## Companion docs

| File | Purpose |
|---|---|
| `type-scale-mapping.md` | Per-element type role mapping for engineering handoff. Includes legacy → v2 cross-reference table so eng can find the v2 role from current Heading/Body/Paragraph names. |

---

## Roles used vs reserve (on this page)

| Status | Roles |
|---|---|
| **Used** (9) | Headline 1 · Headline 2 · Headline 3 · Title 1 · Body 1 · Label 1 · Label 2 · Caption · Footnote |
| **Reserve** (3) | Display · Title 2 · Body 2 |

---

## Breakpoint behavior

| Width | Tracker | Lanes | Programs | Rewards | Greeting |
|---|---|---|---|---|---|
| 375 (mobile) | 2-col | 1-col stack | 1-col stack | 2-col | Headline 1 (28) |
| ~1024 (desktop) | 4-col | 2-col | 3-col | 4-col | Headline 2 (24) |
| 1200+ (wide-flex) | 4-col | 2-col | 3-col | 4-col | Headline 2 (24) |

One type scale across all widths. Layout changes only.

---

## Open decisions

1. **Greeting size on desktop.** v1 demotes the greeting to Headline 2 (24) so the hero is the single focal point. Alternative is keeping the greeting at Headline 1 (28) for an Apple-Large-Title feel, but this competes with the hero. Decision held for review.
2. **Display role on home.** Reserve role on this page. If a future home variant adds a marketing-style "What's new" splash above the hero, Display (36) becomes the role for that headline.
3. **Title 2 vs Body 1 at 16px.** Both exist at the same size; weight (600 vs 400) carries the role. Audit usage after 1-2 more screens are prototyped — if Title 2 never beats Title 1 (18) for the same job, collapse to one Title.

---

## How to view

Open `v1-acme-home-typescale-v2.html` in a browser. Resize the window to test:
- **375px** — single-column mobile layout
- **~1100px** — 2-column lanes, 3-column programs, greeting at Headline 2
- **1240px+** — wide-flex layout, content fills the 1200px max-width

The fixed pill in the bottom-right corner reports the current breakpoint class.
