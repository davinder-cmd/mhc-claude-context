# Home Page Redesign — Session Handoff

**Session Date:** April 15, 2026  
**Purpose:** Context document for continuing home page redesign work in a new chat

---

## What We Did This Session

1. **Analyzed Personify Health screenshots** — Desktop product views, mobile marketing, actual UI patterns
2. **Audited MHC navigation IA** — Documented current 5-tab structure (Home, Digital Care, Wellbeing, Benefits, Rewards)
3. **Created comparison document** — MHC vs Personify navigation IA head-to-head
4. **Designed home page modules** — 7 modules with wireframes and states
5. **Created decision document** — Ready for stakeholder circulation
6. **Established responsive strategy** — Breakpoints at 1600, 1200, 960, 600px
7. **Built Figma file** — 6 pages (cover, modules, 4 breakpoint layouts) with warm-palette wireframes

---

## Key Decisions (Pending Stakeholder Sign-off)

| Decision | Recommendation | Status |
|----------|----------------|--------|
| Desktop layout | 2-column grid (action left, discovery right) | Pending |
| Navigation | Top nav (desktop) + bottom tabs (mobile) | Pending |
| Rewards | Persistent top-right bar, always visible | Pending |
| Module priority | Stats → Actions → Insights → DCP → Habits → Content | Pending |
| Color warmth | Shift to warm cream background (#F9F7F4) | Pending |

---

## Deliverables Created

### Markdown / HTML

| File | Purpose |
|------|---------|
| `outputs/apr18-home-ideation/home-redesign-decision-doc.md` | Stakeholder decision document — circulate for sign-off |
| `outputs/apr18-home-ideation/home-module-wireframes.html` | Visual wireframes (HTML) — open in browser to review |
| `design/patterns/navigation-responsive.md` | MHC navigation IA (updated this session) |
| `competitive/comparisons/navigation-mhc-vs-personify.md` | Navigation comparison document |

### Figma File

**Name:** `MHC Home Page Redesign — Apr 2026`
**File key:** `uJBjjzRDUDoEZ8vVOgTHgc`
**URL:** https://www.figma.com/design/uJBjjzRDUDoEZ8vVOgTHgc/MHC%20Home%20Page%20Redesign%20%E2%80%94%20Apr%202026

**Pages:**
| Page | Contents |
|------|----------|
| `01_Cover` | Title page with project overview |
| `02_Modules` | All 7 reusable modules with labels (Rewards Bar, Stats, My Actions, Insights, DCP, Habits, Content Card) |
| `03_Desktop 1600` | Full 2-column home page — generous spacing, 2-card content grid |
| `04_Desktop 1200` | Full 2-column home page — tighter margins, 2-card content grid |
| `05_Tablet 960` | Single-column layout — wide cards, 3-card content grid, hamburger nav |
| `06_Mobile 375` | Single-column mobile — hamburger nav + bottom tabs |

**Visual language applied:**
- Warm cream background (`#F9F7F4`)
- White cards with subtle shadows (0px 2px 8px rgba(0,0,0,0.08))
- Gold accent for rewards/points (`#D4A853`)
- Green for CTAs and completion (`#2E7D32`)
- Blue for DCP clinical differentiator (`#1976D2`)
- Light green gradient for AI Insights card
- Color-coded stat icons (green/blue/orange circles)

**Connecting to Figma in a new chat:**
1. Open Figma Desktop → open the file
2. Plugins → Development → Figma Desktop Bridge → Run
3. Ask Claude to verify connection with `figma_get_status`

---

## MHC Current Navigation (5 Tabs)

| Tab | Purpose | Key Features |
|-----|---------|--------------|
| **Home** | Dashboard hub | HRA prompt, coach access, AI Insights, recent metrics |
| **Digital Care** | Clinical programs | DCPs (MSK, behavioral health, diabetes, etc.) — **MHC differentiator** |
| **Wellbeing** | Health tracking | Steps, sleep, active min; Journeys; Challenges; Habits |
| **Benefits** | Employer benefits | EAP, partner resources, insurance — **MHC unique** |
| **Rewards** | Incentive engine | Points, store, raffles, history — **MHC top-level** |

---

## Personify Navigation (5 Tabs) — For Comparison

| Tab | Purpose | MHC Equivalent |
|-----|---------|----------------|
| **Home** | Dashboard | Home |
| **Health** | Tracking + journeys | Wellbeing |
| **Social** | Challenges, friends, groups | Challenges within Wellbeing |
| **Programs** | Coaching catalog | Digital Care (but less clinical) |
| **More** | Overflow utilities | No equivalent |

**Key difference:** Personify has Social (dedicated) but no Benefits or Rewards tabs. MHC has Benefits + Rewards but integrates social into Wellbeing.

---

## Home Page Module Architecture

### Proposed Modules (Priority Order)

| Priority | Module | Column (Desktop) | MHC Differentiator? |
|----------|--------|------------------|---------------------|
| 1 | Rewards Progress Bar | Header (spans both) | — |
| 2 | Stats Summary | Left (Action) | — |
| 3 | My Actions | Left (Action) | — |
| 4 | Health Insights (AI) | Right (Discovery) | **Yes** — RAG-grounded |
| 5 | Active DCP Progress | Left (Action) | **Yes** — Clinical depth |
| 6 | Healthy Habits | Left (Action) | — |
| 7 | Content Cards | Right (Discovery) | — |
| 8 | Challenge Card | Right (Discovery) | — |

### Layout Strategy

**Desktop (≥960px):** 2-column grid
- Left column (fixed ~340px): Action modules — Stats, Actions, DCP Progress, Habits
- Right column (fluid): Discovery modules — Insights, Content Cards, Challenge

**Mobile (<600px):** Single column, bottom tabs
- Priority stack: Rewards → Stats → Actions → Insights → DCP → Habits → Content

---

## Responsive Breakpoints

| Breakpoint | Width | Layout | Navigation |
|------------|-------|--------|------------|
| XL | ≥1600px | 2-column, generous whitespace | Top nav |
| LG | 1200–1599px | 2-column, standard margins | Top nav |
| MD | 960–1199px | 2-column compressed | Top nav |
| SM | 600–959px | 1-column, hamburger menu | Hamburger |
| XS | <600px | 1-column, full-width cards | Bottom tabs |

---

## Key Insights from Personify Analysis

### What They Do Well (Adapt)
1. **Rewards always visible** — Progress bar top-right, numeric + visual
2. **2-column desktop** — Action vs. discovery separation
3. **Glanceable stats** — 3 circular icons, no charts on home
4. **Point badges on content** — Gamifies content consumption
5. **Warm color palette** — Cream backgrounds, olive/gold accents

### What They Do Poorly (Avoid)
1. **Generic content** — G2 complaints about lightweight "Journeys"
2. **AI that explains without acting** — PercyIQ criticized; our format is better
3. **No clinical depth** — Their programs are content, not interventions
4. **No benefits integration** — We have employer value they lack

### MHC Advantages to Preserve
1. **DCP clinical depth** — True multi-week interventions, not content journeys
2. **AI Health Insights** — One takeaway + one action (not generic)
3. **Benefits tab** — Unique employer value
4. **3:1 ROI guarantee** — Strongest in market
5. **SDK/partner distribution** — Alight, Elevance, Lockton, WTW, Aon

---

## Components Needed

| Component | Status | Priority | Notes |
|-----------|--------|----------|-------|
| Rewards Progress Bar | NEW | P0 | Header component |
| Stats Summary | NEW | P0 | 3 circular icons |
| My Actions List | NEW | P0 | Point-earning tasks |
| Health Insights Card | NEW | P1 | AI differentiator |
| DCP Progress Card | NEW | P1 | Clinical differentiator |
| Habits Checklist | NEW | P1 | Date picker + toggles |
| Content Card (enhanced) | ENHANCE | P1 | Add point badge, completion |
| Top Navigation Bar | NEW | P0 | Desktop nav |

---

## Open Questions

| Question | Owner | Notes |
|----------|-------|-------|
| Rewards data structure? | Eng | Points, tiers, thresholds for progress bar |
| What qualifies as "Action"? | Product | Point-earning task eligibility |
| Health Insights API ready? | Eng | Determines if AI card is in v1 |
| Benefits tab placement in redesign? | Product | Keep as top-level? |
| Illustration assets available? | Design | For warmth/empty states |

---

## Next Steps

| Step | Action | Owner | By When |
|------|--------|-------|---------|
| 1 | Review wireframes (`outputs/apr18-home-ideation/home-module-wireframes.html`) | Davinder | Done |
| 2 | Circulate decision doc | Davinder | April 16 |
| 3 | Stakeholder sign-off on 5 decisions | Leadership | April 18 |
| 4 | Begin Figma wireframes | Design | Week of April 21 |
| 5 | Component design | Design | Week of April 28 |
| 6 | Engineering review | Eng | Week of May 5 |

---

## Files to Load in New Chat

When starting a new session, load these files for full context:

```
# Core context (always load)
@projects/home-redesign-session-handoff.md  ← This file

# Navigation IA
@design/patterns/navigation-responsive.md
@competitive/comparisons/navigation-mhc-vs-personify.md

# Competitive context
@competitive/personify-health-ia-analysis.md
@competitive/profiles/personify-health.md

# Design system
@design/_index.md

# Deliverables created
@outputs/apr18-home-ideation/home-redesign-decision-doc.md
@outputs/apr18-home-ideation/home-module-wireframes.html

# Reference (if reviewing designs)
@reference/ux-usability-experts.md
@reference/ux-laws-quick-reference.md
@reference/visual-design-experts.md
```

---

## Prompt to Continue

Use this prompt to start a new chat and continue the work:

> I'm continuing work on the MHC home page redesign. Load `@projects/home-redesign-session-handoff.md` for full context.
>
> Last session we:
> - Analyzed Personify Health screenshots and documented competitive nav IA
> - Created decision doc + HTML module wireframes
> - Built a Figma file (`MHC Home Page Redesign — Apr 2026`) with 6 pages: cover, 7 modules, and 4 breakpoint layouts (1600, 1200, 960, 375)
> - Applied warm-palette visual language (cream bg, gold rewards, green CTAs, blue DCP accent)
>
> Before we continue, please verify by reading the handoff doc and confirming what's in place.
>
> Today I want to: [describe next step — see options below]

**Common next steps:**
- "Review the Figma wireframes and suggest refinements" — I'll open Figma + critique
- "Run a design-review pass on the Figma file" — formal design QA
- "Build empty/loading/error states for the 7 modules" — additional module states
- "Create engineering spec using `design-spec-template.md`" — dev handoff doc
- "Export static PNGs of each breakpoint for the decision doc" — stakeholder visuals
- "Incorporate stakeholder feedback on [specific decision]" — iterate based on input
- "Add a new module: [description]" — expand the system

---

## Session Notes

- CEO mandate: Match Personify's approach while leveraging our clinical depth
- Current MHC home is "narrow and browse-focused" — needs to become action-oriented
- Personify's home isn't magic — it's standard patterns applied with discipline
- Our advantages (DCPs, AI, Benefits, ROI guarantee) need to surface on home

---

*Session handoff created: April 15, 2026*
*Updated April 22, 2026 — added Figma file and build details*
