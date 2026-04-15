# Navigation IA Comparison — MHC vs Personify Health

**Date:** April 2026
**Purpose:** Head-to-head comparison of navigation information architecture for app frame redesign decisions

---

## Executive Summary

Both apps use a 5-tab bottom navigation model, but with fundamentally different priorities:

- **MHC** prioritizes clinical depth (dedicated Digital Care tab) and employer benefits (dedicated Benefits tab)
- **Personify** prioritizes social engagement (dedicated Social tab) and overflow utilities (More tab)

MHC dedicates real estate to rewards and benefits; Personify embeds rewards in Home and omits employer benefits from primary nav. MHC integrates challenges within Wellbeing; Personify elevates social features to top-level. This reflects different product philosophies: MHC as a clinical-first platform, Personify as an engagement-first platform.

---

## Tab-by-Tab Comparison

| # | MHC | Personify | Analysis |
|---|-----|-----------|----------|
| 1 | **Home** | **Home** | Similar dashboard hub pattern. Both surface rewards progress, personalized content, and daily stats. Personify's Home is more card-feed oriented; MHC's is more structured with clear sections. |
| 2 | **Digital Care** | **Programs** | **Key differentiator.** MHC dedicates a tab to clinical programs (DCPs) with structured multi-week interventions. Personify's "Programs" is a browsable catalog of coaching and lightweight journeys — no clinical depth. |
| 3 | **Wellbeing** | **Health** | Similar purpose (health tracking, journeys, habits). MHC integrates Challenges here; Personify separates them. Personify adds Care Checklist (preventive care) which MHC doesn't surface as prominently. |
| 4 | **Benefits** | — | **MHC unique.** Employer benefits (EAP, partner resources, insurance providers) get top-level nav. Personify has no equivalent — benefits navigation is buried or absent. |
| 5 | **Rewards** | — | **MHC unique as top-level.** Dedicated tab for incentive engine. Personify embeds rewards in Home (progress bar) and Programs (How to Earn) but no dedicated tab. |
| — | — | **Social** | **Personify unique.** Dedicated social hub: Challenges, Friends, Groups, Events. MHC integrates challenges into Wellbeing and has no Friends/Groups features. |
| — | — | **More** | **Personify unique.** Overflow menu for Media, Settings, Devices, Support, Trophy Case. MHC has no overflow — everything fits in 5 tabs or secondary nav. |

---

## Feature Surface Comparison

| Feature | MHC Location | Personify Location | Notes |
|---------|--------------|-------------------|-------|
| **Health Tracking** | Wellbeing (main) | Health (main) | Both surface steps, sleep, active minutes |
| **Clinical Programs** | Digital Care (dedicated tab) | Programs (catalog) | MHC deeper — DCPs are structured interventions |
| **Challenges** | Wellbeing → Challenges section | Social (dedicated tab) | Personify elevates; MHC integrates |
| **Rewards** | Rewards (dedicated tab) | Home + Programs | MHC elevates; Personify distributes |
| **Benefits/EAP** | Benefits (dedicated tab) | Not in primary nav | MHC unique value |
| **Coaching** | Digital Care → Health Advisor | Programs → Coaching | MHC is AI; Personify is human coaches |
| **Friends/Groups** | Not available | Social (dedicated) | Personify unique |
| **Journeys/Content** | Wellbeing → Journeys | Health + Programs | Both have educational journeys |
| **HRA/Health Check** | Deep link from Home | Health → Health Check | Similar flow |
| **Gamification** | — | More → Trophy Case | Personify has badges; MHC doesn't surface |

---

## AI Integration Comparison

| AI Feature | MHC | Personify |
|------------|-----|-----------|
| **Personalized Insights** | Home → AI Insights section | None visible |
| **Clinical AI Coach** | Digital Care → Health Advisor modal | None — human coaching only |
| **Engagement AI** | Wellbeing → Challenges → A.I. Motivator Coach | None visible |
| **AI-driven recommendations** | HRA → DCP recommendations | Health Check → Journey recommendations |

**Gap:** Personify shows no evidence of AI features. MHC has three distinct AI surfaces. This is a strategic differentiator for MHC.

---

## Navigation Depth Comparison

| Destination | MHC Depth | Personify Depth |
|-------------|-----------|-----------------|
| Dashboard/Home | Shallow (1-2 taps) | Shallow (1-2 taps) |
| Clinical Programs | Deep (4-5 taps to lesson) | Medium (2-3 taps to content) |
| Health Tracking | Medium (2-3 taps) | Medium (2-3 taps) |
| Challenges | Medium (2-3 taps) | Deep (3-4 taps with team creation) |
| Rewards | Medium (2-3 taps) | Distributed (varies by entry point) |

---

## Strategic Implications

### Where MHC is Stronger

1. **Clinical depth** — Digital Care tab signals seriousness about health outcomes, not just engagement
2. **Employer benefits** — Top-level Benefits tab serves B2B buyer (HR/benefits teams) visibility needs
3. **AI differentiation** — Three AI features vs. zero; positions MHC as tech-forward
4. **Focused navigation** — No "More" overflow means everything is intentionally placed

### Where Personify is Stronger

1. **Social engagement** — Dedicated Social tab with Friends, Groups, Events creates community
2. **Gamification** — Trophy Case, badges, and leaderboards drive retention
3. **Content depth** — Rich Media library and Coach Minute video series
4. **Discoverability** — "More" tab provides clear home for secondary features

### Redesign Considerations

| Question | Implication |
|----------|-------------|
| Should MHC add social features? | Personify's Social tab is thin outside Challenges. MHC could add lightweight social without dedicated tab. |
| Should rewards stay top-level? | Personify embeds rewards successfully. But MHC's B2B buyers may value visible rewards tab. |
| Is "More" overflow needed? | MHC currently fits everything in 5 tabs. Only add if new features don't fit. |
| Benefits tab value? | Unique to MHC. Keep unless research shows low usage. |

---

## References

- [MHC Navigation IA](../../design/patterns/navigation-responsive.md) — standalone MHC IA documentation
- [Personify Health IA Analysis](../profiles/personify-health-ia-analysis.md) — detailed 265-screenshot analysis

---

## Revision Log

| Date | Change |
|------|--------|
| 2026-04-15 | Initial version — extracted from navigation-responsive.md, expanded with full comparison |
