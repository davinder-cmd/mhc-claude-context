# Session Handoff — Prototyping the MHC Home Redesign

> Paste the section labeled **"Prompt for new chat"** below into a new Claude Code session. The files listed are the ones a fresh chat won't auto-load — read them at the start.

---

## Prompt for new chat

I'm continuing high-fidelity prototyping for the MHC home page redesign. The prior session (`outputs/may05-home-redesign-review/`) produced block-fidelity wireframe experiments across `experiments/v1/`, `experiments/v2/`, `experiments/v3/`, plus **one fully built responsive prototype** of v1 Exp 02 ("Programs First") in grayscale at `experiments/v1/programs-first-v1-grayscale-calm.html`.

**My next task:** _[fill in — e.g. "build a responsive prototype of v2.F Calm & Scannable matching the visual language of programs-first-v1"; or "iterate on programs-first-v1 to add a sticky bottom CTA"; or "prototype v3.F Dismissible Left Nav"]_

### Read these first (none auto-load)

**Canonical requirements + spec for this session:**

- [outputs/may05-home-redesign-review/INDEX.md](outputs/may05-home-redesign-review/INDEX.md) — full inventory of what's been done, what's locked, what's open
- [outputs/may05-home-redesign-review/00-requirements-from-pd-innov.md](outputs/may05-home-redesign-review/00-requirements-from-pd-innov.md) — authoritative requirements (John's offsite memo + Darcy brief)
- [outputs/may05-home-redesign-review/10-home-page-section-inventory.md](outputs/may05-home-redesign-review/10-home-page-section-inventory.md) — locked section spine, weights, competitor notes
- [outputs/may05-home-redesign-review/08-design-outline-and-meeting-prep.md](outputs/may05-home-redesign-review/08-design-outline-and-meeting-prep.md) — concerns + Davinder's six recommendations (options A–F)

**Working prototype to extend / match style:**

- [outputs/may05-home-redesign-review/experiments/v1/programs-first-v1-grayscale-calm.html](outputs/may05-home-redesign-review/experiments/v1/programs-first-v1-grayscale-calm.html) — the existing high-fidelity responsive prototype. This is the visual-language reference.

**Design system foundation (tokens drive spacing, type, color, layout):**

- [design/_index.md](design/_index.md) — system inventory + status of each component
- [design/foundation/spacing.md](design/foundation/spacing.md) — 4dp base scale
- [design/foundation/typography.md](design/foundation/typography.md) — Major Second scale, Roboto/SF Pro, fixed sizes
- [design/foundation/colors.md](design/foundation/colors.md) — token-driven, four themes
- [design/foundation/responsive-grid.md](design/foundation/responsive-grid.md) — 12-col, breakpoints (note conflict below)
- [design/atoms/button.md](design/atoms/button.md) — 6 variants, 4 sizes, one Primary per screen max
- [design/atoms/card.md](design/atoms/card.md) — anatomy, aspect ratios, when not to use
- [design/components/feature-card.md](design/components/feature-card.md) — program/challenge surfacing card

**Reference (UX principles):**

- [reference/landing-page-patterns.md](reference/landing-page-patterns.md) — NN/g scanning patterns (layer-cake, spotted), fold rules, responsive reflow rules, fidelity ladder
- [reference/ux-laws-quick-reference.md](reference/ux-laws-quick-reference.md) — Hick, Miller, Fitts, Goal-Gradient, Peak-End, etc.

**Block-fidelity wireframe references (load only when prototyping a specific variant):**

- [experiments/v1/home-experiments-v1-7-alternatives.html](outputs/may05-home-redesign-review/experiments/v1/home-experiments-v1-7-alternatives.html) — 7 v1 alternatives (Calm Anchor / Programs First / Hero+3 / Today Strip / Two-Column / T+I Combined / Rewards Forward)
- [experiments/v2/home-experiments-v2-personalization-forward.html](outputs/may05-home-redesign-review/experiments/v2/home-experiments-v2-personalization-forward.html) — v2 baseline (lanes promoted to w4, DCP-only, paired)
- [experiments/v2/home-experiments-v2-variants-A-E.html](outputs/may05-home-redesign-review/experiments/v2/home-experiments-v2-variants-A-E.html) — six v2 variants (incl. **2.F Calm & Scannable**, the readability response)
- [experiments/v3/home-experiments-v3-sidebar-7-variants.html](outputs/may05-home-redesign-review/experiments/v3/home-experiments-v3-sidebar-7-variants.html) — 7 sidebar variants (boxed hero)
- [experiments/v3/home-experiments-v3-non-nav-rails-4-models.html](outputs/may05-home-redesign-review/experiments/v3/home-experiments-v3-non-nav-rails-4-models.html) — 4 non-nav rail concepts (Goals / AI / Health / Calendar)

### Locked constraints (carry across all prototyping work)

- **Grayscale only** — whites, grays, near-black; no color anywhere
- **Calm + scannable** — fewer items per section, generous whitespace, single CTA per section, soft fills, ~6 items above the fold (per saved memory `feedback_readability_over_density`)
- **DCP-only Programs section** — no journeys, habits, or in-progress challenges in the Programs band; those live elsewhere
- **Single hero** — no carousel in V1 (locked per offsite #3)
- **Logo top center** — per offsite #1
- **Tracker reduced footprint** — weekly view, 4 metrics (Steps · Sleep · Calories · Active Min)
- **Tracker Insights kept** — takeaway + action format (MHC differentiator)
- **Source labeling** on all content surfaces
- **508 a11y baseline** + skeleton-render data-dependent sections
- **Saved auto-memories already apply** (don't need to re-read): outputs-folder-naming · neutral-vs-surface-warmth · iteration-versioning · color-weighting-visualization · carousel-critique-framing · readability-over-density · wireframe-breakpoint-views

### Open tension to clarify with me before coding

The design system says body caps at 1040dp on large desktop ([responsive-grid.md](design/foundation/responsive-grid.md)). My saved memory `feedback_wireframe_breakpoint_views` says "wide-flex (1200px+, content fills viewport)." The existing `programs-first-v1-grayscale-calm.html` follows the design system (caps at 1040), not the memory. Before writing, **ask me which behavior to use for this prototype** — I previously reverted a 1200+ flex-out change in this file.

### Where to save

```
outputs/may05-home-redesign-review/experiments/v{N}/<concept>-v{N}-<slug>.html
```

Use the iteration-versioning convention: a new file per iteration, never overwrite. Update `INDEX.md` after saving.

### Approach

1. Read the canonical requirements + the specific variant's wireframe section before writing — don't assume what the variant tested
2. Match the visual language of `programs-first-v1-grayscale-calm.html` (CSS variables, spacing scale, type scale, button styles, card patterns)
3. Build one responsive HTML that adapts via media queries — don't render multiple side-by-side frames
4. Use real content (DCP names, hero copy, lane items, AI insight, employer messages) — not Lorem Ipsum or placeholder labels
5. Confirm the wide-flex behavior with me before writing layout containers (see open tension above)

---

## What's auto-loaded (no need to include)

For reference — these load automatically in any new chat per `CLAUDE.md`:

- `CLAUDE.md` (project instructions)
- `about-me.md`
- `working-preferences.md`
- `strategy/Product Service Information.md`
- `strategy/Ideal Customer Profile.md`
- `MEMORY.md` and all linked memory files

---

## Recommended next prototypes (per session output)

Pick from these or specify a new direction:

| Variant | Why | Folder |
|---|---|---|
| **v2.F Calm & Scannable** | Direct response to "v2 was too dense"; the readability bet at v2 ranking | `experiments/v2/` |
| **v1 Exp 1 Calm Anchor** | Conservative baseline as control to compare against Programs First | `experiments/v1/` |
| **v3.F Dismissible Left Nav** | Honors John's offsite directive #2 directly; member controls density | `experiments/v3/` |
| **v3.C Compact Icon Sidebar** | Calm/scannable bet for the sidebar layer; cleanest content-to-nav ratio | `experiments/v3/` |
| **v3.E Right Engagement Rail** | Permanent home for the multi-type rewards moat (sales demo) | `experiments/v3/` |
| **v3.J Wellness Identity Rail** | Clinical-depth differentiator made visible at every visit | `experiments/v3/` |
| **v3.K Upcoming / Calendar Rail** | Open-enrollment / employer-event use case (CS-named) | `experiments/v3/` |
| **v2.E Adaptive Sparse-State** | Solves the empty-lane production risk that v1 + v2 baseline share | `experiments/v2/` |
