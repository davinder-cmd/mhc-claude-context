# Design System Build — Part 1b: Component Preview
> Run this file after the designer has confirmed the palette from Part 1. Do not run this before palette approval. Do not begin Part 2 until this preview is also confirmed.

---

## Role

You are a senior design systems expert. The core palette has been approved. You are now generating a visual component preview — a browser-based style tile that shows the approved palette applied to real UI components. This is a design review artifact, not a token spec.

---

## Source of Truth

- Confirmed input summary from the interview
- Approved hex values from Part 1 — do not change any colors
- If the designer requested palette adjustments before confirming Part 1, use the adjusted values here

---

## Your Task

Generate a single self-contained HTML file named `component-preview.html`. It opens in any browser with no dependencies. All CSS inline or in a `<style>` block. No JavaScript required for static display. Optional: lightweight JS for hover/active state simulation if it adds review value.

---

## Component Preview Requirements

Render the following components using the approved palette. Group them into sections with clear labels. Show every meaningful state.

---

### Section 1 — Buttons

Render all variants side by side, then below each in its states:

**Primary button**
- Default
- Hover
- Pressed
- Disabled
- With leading icon (stroked)
- With trailing icon (stroked)

**Secondary button (outlined)**
- Default
- Hover
- Pressed
- Disabled

**Ghost button**
- Default
- Hover
- Pressed
- Disabled

**Destructive button** (error palette)
- Default
- Hover
- Disabled

---

### Section 2 — Badges and Lozenges

Render all semantic variants in a horizontal row:
- Success
- Warning
- Error
- Neutral
- Primary

Show each with an optional leading dot or icon. Show both small and medium size if the system supports two sizes.

---

### Section 3 — Selection Containers

Chips and filter pills:
- Default (unselected)
- Hover
- Selected
- Disabled

Show a horizontal row of 4–5 chips to simulate a filter bar context.

---

### Section 4 — Form Elements

**Text input**
- Default (empty)
- Focused (with focus ring)
- Filled (with value)
- Error state (with error message below)
- Disabled

**Dropdown / Select**
- Default
- Focused
- Disabled

**Checkbox**
- Unchecked
- Checked
- Indeterminate
- Disabled

**Radio button**
- Unselected
- Selected
- Disabled

**Toggle / Switch**
- Off
- On
- Disabled

---

### Section 5 — Cards and Containers

**Standard card**
- White/default surface
- Subtle surface (background.subtle)
- With header, body text, and a primary action button
- With a badge in the top right corner

**Bordered card**
- With border.default
- With border.strong

**Selected card** (selection container at card scale)
- Default
- Selected state with primary border and background.selected tint

**List item row**
- Default
- With leading icon
- With trailing badge
- Selected state
- Disabled state

---

### Section 6 — Navigation Elements

**Tab bar** (3–4 tabs)
- Default (unselected)
- Active / selected
- Show both stroked icon + label and filled icon + label

**Breadcrumb**
- 3-level example with separator

**Stepper / Progress indicator**
- 3-step flow: completed, active, upcoming

---

### Section 7 — Feedback and Status

**Alert / Banner**
- Success
- Warning
- Error
- Informational (primary palette)

Each with an icon, title, body text, and optional dismiss action.

**Toast / Snackbar**
- Success
- Error
- Neutral

**Empty state**
- Illustration placeholder (solid color block using illustration palette)
- Title and body text
- Primary action button

---

### Section 8 — Typography Scale

Render the type scale using the approved text tokens against the default background. Show:

- Heading 1
- Heading 2
- Heading 3
- Body (default)
- Body small
- Label
- Caption
- Link (interactive color, hover state)

Use placeholder text — do not use Lorem Ipsum. Use realistic digital health copy (e.g. "Your weekly activity summary", "Last synced 2 minutes ago", "View all results").

---

### Section 9 — Icon Samples

Render a grid of 12–16 icons from the recommended icon system showing:
- Stroked variant (default state color)
- Filled variant (interactive/selected color)
- Icon inside a filled button (onPrimary color)
- Icon inside a badge (semantic color)
- Small size (20px) and medium size (24px) side by side

Use health-relevant icon names: heart, activity, sleep, nutrition, medication, calendar, chart, settings, notification, profile, home, search.

---

### Section 10 — Illustration Palette Strip

Render a horizontal strip showing the approved illustration palette colors as labeled swatches, followed by a simple placeholder illustration shape (abstract organic form, not a specific illustration) composed using only those colors. This validates that the illustration palette reads correctly at small scale and doesn't compete with the UI components above it.

---

### Section 11 — Applied Moments

Render **2–3 anchor screens** that show the system in real product context. The abstract component sections above prove the tokens render; this section proves they compose into something a member or buyer would actually see.

Default anchors (override only with reason):

1. **Member home / dashboard** — primary touchpoint. Stress-tests surface warmth, primary CTA prominence, badge variety, and how the categorical hues coexist on one screen.
2. **DCP detail or daily check-in** — content-dense moment. Stress-tests body type, list rows, progress indicators, and emphasis hierarchy under real copy.
3. **AI Insight or Coach moment** — stress-tests the canonical AI surface treatment and demonstrates how AI-competent reads at the visual level.

Each screen must include:
- Realistic mobile frame (375px width minimum) with status bar
- Real digital health copy — no Lorem Ipsum
- A short caption explaining which tokens are doing the work and why this screen was chosen
- Same accessibility scrutiny as the abstract components — flag any pairing under AA

If the interview surfaced specific screens to anchor against (e.g. a buyer-facing surface, a Challenges leaderboard), use those instead.

---

### Section 12 — Color Weighting Visualization

For each applied moment in Section 11, include a horizontal stacked bar showing how the screen splits by color role:

| Role | Typical share |
|---|---|
| Surface (background, card fill) | ~60% |
| Ink (text, borders, dividers) | ~20% |
| Module / categorical accent | ~10% |
| Primary CTA | ~5% |
| Other (semantic, icon, illustration) | ~5% |

Estimate proportions from the rendered composition. Flag estimates as such ("eyeballed, not pixel-counted"). The 60-30-10 framing is a rule of thumb — exact numbers will vary by screen, but the *order* should be stable.

This catches palettes that read fine in the abstract preview but bleed too much chroma in real composition.

---

## Page Structure

```
Header
  — Product name (if provided)
  — "Component Preview — Part 1b"
  — Iteration version (read from MAP.md)
  — Palette name and date
  — Decisions touched (D-numbers from decisions.md, or "none — net-new")
  — Note: "Colors are locked from Part 1 approval. This preview is for component and state review only."

Section 1 — Buttons
Section 2 — Badges and Lozenges
Section 3 — Selection Containers
Section 4 — Form Elements
Section 5 — Cards and Containers
Section 6 — Navigation Elements
Section 7 — Feedback and Status
Section 8 — Typography Scale
Section 9 — Icon Samples
Section 10 — Illustration Palette Strip
Section 11 — Applied Moments (2–3 anchor screens)
Section 12 — Color Weighting Visualization (one stacked bar per applied moment)

Footer
  — Accessibility summary: list any component pairings that are flagging below AA
  — Note any assumptions made during rendering
```

---

## Design Quality Bar

This file will be reviewed by a senior product designer. Apply these standards:

- Spacing: generous, consistent — minimum 8px grid
- Border radius: apply the confirmed scale (sm/md/lg/xl) consistently — do not default to 4px or 0px
- Typography: use a system font stack (Inter, -apple-system, sans-serif) at realistic sizes — body at 15–16px, not 12px
- Shadows: subtle if used — one shadow level maximum, no hard drop shadows
- Component sizing: realistic — buttons at 40–44px height, inputs at 40–44px, not toy-sized
- States: hover and focus states must be visually distinct — not just an opacity change
- Overall feel: should read as a credible, warm digital health product — not a generic UI kit

---

## Confirmation Gate

After generating the HTML file, output exactly this message and stop:

> "Part 1b complete. Open `component-preview.html` in your browser to review components in context. Check states, contrast, and overall warmth. When you're satisfied with both the palette and the component preview, confirm and we'll move to Part 2 — semantic tokens, component tokens, icon rules, and Figma variables export."

Do not begin any token work. Wait for explicit confirmation.

---

## Post-approval logging

Once the designer confirms the component preview (and only then), before proceeding to Part 2:

1. Append a component-preview decision to [`decisions.md`](decisions.md) if Part 1b surfaced any new calls (icon recipe choices, illustration register, applied-moment selection, AA failures resolved with non-obvious token swaps). Net-new builds with no surprises don't need a separate entry — note this in the Part 2 logging instead.
2. Save the HTML output as `v{N}/component-preview.html`.
3. Update the [`MAP.md`](MAP.md) **Active program state** row for "Semantic + component tokens (Layers 2–3)" to `v{N} (preview only — tokens pending)`.
