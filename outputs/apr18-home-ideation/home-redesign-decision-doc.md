# Home Page Redesign — Decision Document

**To:** Leadership, Product, Engineering  
**From:** Davinder Rehal  
**Date:** 2026-04-15

---

## Context

Competitive analysis of Personify Health reveals our home page experience lags behind on first-impression quality, rewards visibility, and responsive layout. Internal and external feedback confirms the experience feels narrow and browse-focused rather than action-oriented. CEO has expressed need to match Personify's approach while leveraging our clinical depth.

## Recommendation

Redesign the home page using a **2-column desktop layout** (action modules left, discovery modules right) that collapses to **single-column on mobile**, with **rewards progress bar always visible** and **navigation moved to top bar (desktop) / bottom tabs (mobile)**.

## Rationale

- **Personify's home page works** — Their 2-column split (action vs. discovery) reduces cognitive load and creates clear information hierarchy. We should adopt the pattern, not reinvent it.
- **Rewards drive engagement** — Their rewards bar is the first thing users see. Ours is buried. Making it persistent orients users to "why should I engage today?"
- **Our depth is hidden** — We have stronger DCPs, AI Health Insights, and clinical programs. The current narrow layout doesn't surface this depth. A modular card system lets us showcase our differentiators.

## Tradeoffs Considered

| Option | Why Not |
|--------|---------|
| Keep vertical stack, enhance visually | Doesn't solve information hierarchy problem; still feels like mobile-web on desktop |
| Copy Personify exactly | We'd lose our differentiators (DCPs, AI Insights); also unnecessary — adapt, don't copy |
| Sidebar navigation (Personify style) | Adds complexity; top nav is cleaner for responsive and more modern |
| Rewards as hero module | Takes too much space; persistent bar is more efficient and always visible |

---

## Design Decisions Required

### 1. Layout Architecture

| Decision | Options | Recommendation | Rationale |
|----------|---------|----------------|-----------|
| Desktop layout | Vertical stack vs. 2-column grid | **2-column grid** | Matches Personify; separates action from discovery |
| Column split | 50/50 vs. Fixed left + fluid right | **Fixed left (320-360px) + fluid right** | Action column is consistent; discovery scales |
| Collapse breakpoint | 1200px vs. 960px | **960px** | Below 960 = tablet/mobile behavior |

### 2. Rewards Visibility

| Decision | Options | Recommendation | Rationale |
|----------|---------|----------------|-----------|
| Placement | Hero module vs. Persistent bar | **Persistent top-right bar** | Always visible without taking content space |
| Display format | Progress bar only vs. Bar + numeric | **Bar + numeric (e.g., "5,200 / 10,000")** | Matches Personify; shows exact progress |
| Link behavior | Opens modal vs. Navigates to Rewards page | **Navigates to Rewards page** | Simpler; consistent with Personify |

### 3. Navigation Structure

| Decision | Options | Recommendation | Rationale |
|----------|---------|----------------|-----------|
| Desktop nav | Side nav vs. Top nav | **Top nav (horizontal)** | Maximizes content width; cleaner responsive |
| Mobile nav | Top hamburger vs. Bottom tabs | **Bottom tabs (5 tabs)** | Platform convention; matches Personify |
| Tab structure | Custom vs. Match Personify | **Match: Home, Health, Social, Programs, More** | Reduces user learning curve from competitors |

### 4. Home Page Module Priority

Proposed priority order (top to bottom on mobile, distributed on desktop):

| Priority | Module | Column (Desktop) |
|----------|--------|------------------|
| 1 | Rewards Progress Bar | Header (spans both) |
| 2 | Stats Summary (Steps, Sleep, Active Min) | Left (Action) |
| 3 | My Actions (point-earning tasks) | Left (Action) |
| 4 | Health Insights Card (AI) | Right (Discovery) — **MHC differentiator** |
| 5 | Active DCP Progress | Left (Action) — **MHC differentiator** |
| 6 | Healthy Habits Checklist | Left (Action) |
| 7 | Content Cards (articles, tips) | Right (Discovery) |
| 8 | Challenge Card | Right (Discovery) |

### 5. Visual Warmth

| Decision | Options | Recommendation | Rationale |
|----------|---------|----------------|-----------|
| Background color | Neutral gray vs. Warm cream | **Warm cream (#F9F7F4 or similar)** | Matches Personify warmth; less clinical |
| Card style | Flat vs. Elevated with shadow | **Elevated (subtle shadow)** | Creates depth; defines module boundaries |
| Illustrations | None vs. Add illustration system | **Add for empty states + promos** | Creates emotional warmth; humanizes app |

---

## Responsive Breakpoints

| Breakpoint | Width | Layout | Navigation |
|------------|-------|--------|------------|
| XL | ≥1600px | 2-column, generous whitespace | Top nav |
| LG | 1200–1599px | 2-column, standard margins | Top nav |
| MD | 960–1199px | 2-column compressed | Top nav |
| SM | 600–959px | 1-column, 2-card grid for content | Hamburger menu |
| XS | <600px | 1-column, full-width cards | Bottom tabs |

---

## New Components Required

| Component | Priority | Effort Estimate |
|-----------|----------|-----------------|
| Rewards Progress Bar | P0 | Low (1-2 days) |
| Stats Summary Module | P0 | Low (2-3 days) |
| My Actions List | P0 | Medium (3-5 days) |
| Health Insights Card | P1 | Medium (depends on AI readiness) |
| DCP Progress Card | P1 | Medium (3-5 days) |
| Habits Checklist | P1 | Medium (3-5 days) |
| Enhanced Content Card | P1 | Low (enhance existing) |
| Top Navigation Bar | P0 | Medium (3-5 days) |

---

## Ask

**Approval needed on:**

1. **Layout:** 2-column desktop / 1-column mobile — Yes/No?
2. **Navigation:** Top nav (desktop) + bottom tabs (mobile) — Yes/No?
3. **Rewards:** Persistent top-right bar — Yes/No?
4. **Module priority:** Agree with proposed hierarchy — Yes/No/Adjust?
5. **Color warmth:** Shift to warm cream background — Yes/No?

**Timeline:** Decisions needed by **EOD Friday, April 18** to begin wireframe phase the following week.

---

## Supporting Material

- Personify Health screenshots: `outputs/personify/`
- Competitive analysis: `competitive/personify-health-ia-analysis.md`
- Design system inventory: `design/_index.md`
- Previous home explorations: `outputs/home-v1-compact.html` through `outputs/home-v5-rewards.html`

---

## Next Steps (Post-Approval)

1. **Week of April 21:** Wireframe all breakpoints (XS, SM, MD, LG, XL)
2. **Week of April 28:** Component design (new components in Figma)
3. **Week of May 5:** Engineering review + feasibility check
4. **Week of May 12:** High-fidelity mockups
5. **Week of May 19:** Dev handoff

---

*Document version: 1.0 | Last updated: 2026-04-15*
