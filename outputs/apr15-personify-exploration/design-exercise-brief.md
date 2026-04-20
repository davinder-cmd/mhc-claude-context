# Design Exercise Brief — Home Screen Redesign

**Context:** This brief merges three sources into a single instruction set for an AI-assisted design exercise. The goal is to generate Angular web UI that addresses competitive gaps identified in a UX audit of Personify Health.

**Source files (all in this workspace):**
- `outputs/personify-ux-audit.md` — Competitive analysis with scored gaps and prioritized recommendations
- `design-system-components.md` — MHC design system component reference
- `design-exercise-instructions.md` — Angular Material implementation constitution

---

## What You're Building

Redesigned Home screen for the Umbrella Partners (MHC) web app. The current home screen scores 2.25/5 against Personify's 4.25/5 on hierarchy and scannability. The redesign targets three quick wins from the audit:

1. **Visual hierarchy overhaul** — One dominant hero moment at top, then clearly sectioned content groups with bold headers, generous inter-section spacing, and trailing chevrons for expandable sections
2. **Rewards progress visibility** — Glanceable points/earnings summary always visible near the top of home, not buried in a separate tab
3. **Curated next-best-actions** — A "What to do next" section showing 3–5 high-value actions with point values and completion states

---

## Implementation System: Angular Material

Use **Angular Material 21.0.5** exclusively. All rules from the design-exercise-instructions constitution apply. Key constraints repeated here for emphasis:

**Components to use:**

| Pattern | Component | Notes |
|---|---|---|
| Page shell | `mat-sidenav` + `mat-toolbar` | Desktop nav panel 256dp expanded, 72dp collapsed per MHC app frame spec |
| Hero/rewards card | `mat-card` with `mat-elevation-z2` | Lead with metric large, label small — Withings density reference |
| Section headers | Custom typography using `title-large` (22sp) | Bold, left-aligned, with `mat-icon` chevron trailing |
| Action list | `mat-list` with `mat-list-item` | Each item shows action name, point value badge, completion icon |
| Content cards | `mat-card` | For Daily Cards, Journey previews, Challenge CTAs |
| Filter chips | Chip Group (horizontal scroll on mobile) | For content filtering on Programs/Journeys sections |
| Primary CTA | `[mat-flat-button]` | One per visible section max |
| Secondary actions | `[mat-stroked-button]` | Paired with primary or standalone in card footers |
| Progress indicator | `mat-progress-bar` | For rewards progress toward goal |
| Icons | `mat-icon` — Material Symbols Outlined only | Never decorative. Functional only. |

**Do not use:** inline styles, Tailwind utilities, custom shadows outside Material elevation, hardcoded hex values, or custom components when a Material equivalent exists.

---

## MHC Design Token Mapping

The MHC design system uses custom tokens. Map them to Angular Material's theming system as follows:

### Spacing

| MHC Token | Value | Angular Material Usage |
|---|---|---|
| $spacing-03 | 8dp | Internal component padding (tight), icon margins |
| $spacing-04 | 16dp | Standard internal component padding, mobile page margins |
| $spacing-05 | 24dp | Section gaps between content groups |
| $spacing-06 | 32dp | Desktop page margins, major section separation |
| $spacing-07 | 40dp | Hero section bottom margin |
| $spacing-08 | 64dp | Page-level vertical rhythm breaks |

Base grid is 8pt (MHC uses 4dp base, but the exercise constitution uses 8pt — **use 8pt for this exercise**, with 4px as minimum increment).

### Typography

| Role | MHC Guidance | Material Token | Size |
|---|---|---|---|
| Page greeting ("Hi Andrew") | Display/Heading at ~112.5% line-height | `headline-medium` | 28sp |
| Section headers ("Rewards", "Just for you") | Bold/Semi-bold for hierarchy | `title-large` | 22sp |
| Card titles | — | `title-medium` | 16sp |
| Body/descriptions | Paragraph at ~150% line-height | `body-medium` | 14sp |
| Point values, labels, metadata | — | `label-medium` | 12sp |

Font: Roboto (default for web). If an employer client has a custom font, it replaces Roboto — but for this exercise, use Roboto.

### Color

| Semantic Purpose | MHC Token Category | Implementation |
|---|---|---|
| Primary brand / interactive | `$link-primary`, button fills | `var(--mat-primary)` — teal/blue, health-forward |
| Reward/achievement accent | No current MHC token (gap) | Warm gold/amber — introduce as `--mhc-reward-accent` |
| Success/completion | `$positive` semantic color | `var(--mat-primary)` or dedicated success green |
| Error states | `$negative` semantic color | Material error tokens |
| Text hierarchy | `$text-primary`, `$text-secondary` | Standard Material text tokens |
| Backgrounds | `$background` | Near-white surfaces with subtle elevation — not flat |

**Important:** Color must never be the sole communicator of meaning (MHC accessibility rule). Always pair with text or icon.

---

## Screen Specifications

### Home Screen — Section Stack (top to bottom)

**1. App Bar**
- Left: hamburger menu icon (desktop: sidenav toggle) + employer logo
- Center: MHC brand mark
- Right: notification bell + profile avatar
- Height: 56dp mobile, 64dp desktop

**2. Greeting + Rewards Summary (Hero Section)**
- Greeting: "Hi [FirstName]" in `headline-medium`
- Rewards card immediately below: current points balance (large number), progress bar toward reward goal, dollar value earned, "View Rewards" text link
- This section is the dominant visual moment — more vertical space, card with `mat-elevation-z2`
- Spacing below: $spacing-07 (40dp)

**3. What To Do Next (Curated Actions)**
- Section header: "What to do next" in `title-large`, bold, with trailing chevron
- List of 3–5 actions using `mat-list`:
  - Each row: action name (left), point value in a badge/chip (right), green checkmark if completed
  - Example actions: "Complete Health Assessment — 500 pts", "Get your A1C Checked — 200 pts", "Join a Team Challenge — 100 pts"
- "See all actions" text link below the list
- Spacing below: $spacing-05 (24dp)

**4. Daily Cards**
- Section header: "Daily Cards" in `title-large` with trailing chevron
- Horizontal scroll of 2–3 cards, each with:
  - Full-bleed image (top 60% of card)
  - Title overlay or below image in `title-medium`
  - "5 pts" badge
  - Card size: ~280dp wide, ~200dp tall
- Spacing below: $spacing-05 (24dp)

**5. Active Challenge CTA** (conditional — only if challenge is available)
- Single `mat-card` with landscape image background
- Challenge name in `title-large` over image (white text on dark overlay)
- "Join Now" `[mat-flat-button]` — primary CTA
- Progress indicator if already joined (destination unlocked count)
- Spacing below: $spacing-05 (24dp)

**6. Just For You (Personalized Content)**
- Section header: "Just for you" in `title-large` with trailing chevron
- 2 vertical `mat-card` items:
  - Each: thumbnail image (left, 80dp square), title + subtitle text (right), chevron
  - Examples: "Improve your sleep", "Get your A1C Checked"
- Spacing below: $spacing-05 (24dp)

**7. Healthy Habits**
- Section header: "Healthy Habits" in `title-large` with trailing chevron
- Compact stat row: Steps icon + count, Sleep icon + hours, Active Minutes icon + count
- "Track my healthy habits" text link
- Spacing below: $spacing-08 (64dp) before footer

---

## Celebration Modal Spec

Build as a reusable component. Triggered when a member completes a key action.

- Full-screen overlay: dark semi-transparent background (rgba(0,0,0,0.85))
- Centered content: trophy/achievement icon (large, 80dp), achievement title in `headline-medium`, subtitle with stat ("67 of 330 members earned this"), `[mat-flat-button]` dismiss
- Entry animation: fade-in 200ms, icon scale from 0.8 to 1.0
- Use `mat-dialog` as the overlay mechanism

---

## What Not to Build

- No gift card store / redemption flow
- No Health Assessment / HRA flow
- No coaching scheduling
- No challenge detail screens (just the CTA card on home)
- No settings or profile screens

Focus entirely on the Home screen and the Celebration Modal. Get those two right.

---

## Quality Benchmark

The output should feel closer to Personify's density and warmth than our current implementation, while staying within Angular Material's component system and MHC's design tokens. Specifically:

- **Scannability:** A user should be able to glance at the screen and immediately understand: what's my progress, what should I do next, what's new
- **Whitespace:** Sections should breathe. If it feels packed, add spacing
- **Hierarchy:** The rewards summary should dominate. Everything else is secondary
- **Warmth:** Photography in Daily Cards and Challenge CTA does the emotional work — don't rely on text alone
- **One accent color per visible viewport** — avoid competing color signals

When in doubt, choose the more conservative option. Correct spacing and hierarchy beat a flashy component with wrong density.
