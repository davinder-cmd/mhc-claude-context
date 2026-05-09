# v3 — 7 Sidebar Variants · Companion Notes

**File:** `home-experiments-v3-sidebar-7-variants.html`
**Date:** 2026-05-07
**Status:** v3 · 7 variants exploring sidebar + boxed hero · block fidelity

---

## What this is

Seven home-page variants exploring two structural changes from v2:

1. **Sidebar present** — left, right, both, or compact
2. **Boxed hero** — never full-bleed; sits as a card within the content column

All seven inherit:
- The v2 prominence ranking (Hero w5 · Things I care about w4 · From your employer w4 · Programs DCP-only w3 · Tracker+Insights paired w3)
- The calm/scannable principle from v2.F (fewer items per section, soft fills, generous gaps, single CTA per section)

## The 7 variants

| # | Name | Sidebar | Width |
|---|---|---|---|
| 3.A | Left Nav + Member Identity | Left | 180px |
| 3.B | Right Status Rail | Right | 180px |
| 3.C | Compact Icon Sidebar | Left | 56px |
| 3.D | Left Nav + Featured Program Rail | Left | 200px |
| 3.E | Right Engagement Rail | Right | 200px |
| 3.F | Dismissible Left Nav | Left | toggleable 56 ↔ 200 |
| 3.G | Triple Column | Both | 160 + content + 180 (wide desktop only) |

## Variants vs. John's offsite directive #2

John said: "Eliminate the side nav on web and mobile · OR keep and clean up · AND/OR make dismissible." Each variant addresses this differently:

| Variant | How it relates to John's directive |
|---|---|
| 3.A | Keeps + cleans up · 180px standard nav with identity card |
| 3.B | Eliminates left nav · introduces a different (right) sidebar |
| 3.C | Cleans up dramatically · 56px icon-only |
| 3.D | Keeps + adds (nav + featured DCP) · doesn't eliminate |
| 3.E | Eliminates left nav · introduces a different (right) sidebar |
| 3.F | **Honors directly** — makes dismissible (defaults collapsed) |
| 3.G | Keeps + adds + adds (wide-desktop only) — most additive |

## Recommendation summary

**Apply UI to 3 (not 7):**

1. **3.F (Dismissible Left Nav)** — honors John's directive most directly. Member controls density.
2. **3.C (Compact Icon Sidebar)** — calm/scannable bet for the sidebar layer.
3. **3.E (Right Engagement Rail)** — gives the rewards moat a permanent home.

**Hold:**

- 3.A — viable but identity card may compete with personalization lanes
- 3.B — viable; revisit if daily-return metrics support glance-value rail
- 3.D — good idea, logic-fragile (wrong featured DCP = wrong on every load)
- 3.G — only advances if wide-desktop strategy emerges

## Risks shared across all 7

- **Sidebar adds horizontal weight** that competes with content. Mitigated by calm rendering inside content area, but stakeholders may feel "the page feels wider before"
- **Mobile reflow:** sidebar always collapses to hamburger or drawer. Need to verify the hamburger pattern is acceptable for MHC's existing mobile users
- **Eng cost varies widely:** 3.A and 3.C are cheap (existing nav patterns); 3.F adds state management; 3.G adds 4 breakpoint handlers

## What's missing — still to design

- Empty states for sidebar content (e.g., 3.D with no active DCPs, 3.E with no rewards configured)
- Sidebar behavior when scrolling content (sticky? fixed? scrolls with page?)
- Tooltip / discoverability for icon-only variants (3.C, 3.F default state)
- Sidebar accessibility — focus order, screen reader landmarks, keyboard nav

## Companion file — non-nav rail concepts (3.H–3.K)

`home-experiments-v3-non-nav-rails-4-models.html` adds 4 more conceptual models for what a non-nav rail can hold (in addition to 3.B Status and 3.E Engagement from the main 7-variant file):

| # | Conceptual model | Strongest hypothesis |
|---|---|---|
| 3.H | Goals & Progress | Goal-Gradient drives engagement |
| 3.I | AI Insights Conversation | AI moat strengthens with conversational rail (Tracker Insights AI, NOT the deferred DCP AI Coach) |
| 3.J | Wellness Identity / Health Snapshot | Clinical depth visible at every visit |
| 3.K | Upcoming / Calendar | Time-bound signals drive return engagement |

The home page can only have one rail. The recommendation: rail content is **per-client configurability territory** — pick the rail that maps to the strongest engagement lever for the client population. An employer-event-heavy client probably wants 3.K (Calendar). An engagement-heavy client wants 3.E. A clinical-program client wants 3.J.

## Stack reference

| Doc | Status |
|---|---|
| `../v1/home-experiments-v1-7-alternatives.html` | v1 — 7 alternatives at v1 ranking |
| `../v2/home-experiments-v2-personalization-forward.html` | v2 baseline (paired lanes, dense) |
| `../v2/home-experiments-v2-variants-A-E.html` | v2 variants A–F (incl. 2.F calm response) |
| `home-experiments-v3-sidebar-7-variants.html` | v3 main — 7 sidebar variants (shape: nav, icon, dismissible, triple) |
| `home-experiments-v3-non-nav-rails-4-models.html` | v3 companion — 4 non-nav rail concepts (Goals · AI · Health · Calendar) |

## File companions

- `../../00-requirements-from-pd-innov.md` — canonical requirements
- `../../10-home-page-section-inventory.md` — locked spine
- `../../08-design-outline-and-meeting-prep.md` — Davinder's concerns + recommendations
