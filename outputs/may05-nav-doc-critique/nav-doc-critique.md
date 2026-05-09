# Navigation Design Updates — Pre-Share Critique

**To:** Self (pre-share review before eng + product distribution)
**From:** Davinder Rehal
**Date:** 2026-05-05
**Figma:** [Navigation Design Updates — node 2465:18294](https://www.figma.com/design/GWvOaoNuWLaZ9jRe3o7TYC/Navigation-Design-Updates?node-id=2465-18294)
**Reference:** [competitive/comparisons/navigation-mhc-vs-personify.md](../../competitive/comparisons/navigation-mhc-vs-personify.md)

---

## Context

The Figma file proposes a 1-2 navigation progression: (1) collapsible sidebar via top-left menu button, (2) move sidebar to top nav and expand content width. Goal is nav cleanup, content-area expansion for richer responsive content, and Personify Health parity. Before sharing with engineering and product, this memo lists what's missing.

## Recommendation

Add four frames before sharing — intro, IA mapping, recommendation, states/responsive matrix — and fix three doc-hygiene issues. Everything else moves to a Confluence companion page.

## What the file currently contains

| Section | Frames | Coverage |
|---|---|---|
| Current product | 2 | Baseline desktop |
| Hidden Navigation (Tap Menu) — Current Width | 6 | Progression 1 + mobile |
| Navigation Type | 4 | Sidebar vs. top-nav structural options |
| Content Width Variations | 3 | Width once sidebar is gone |
| Navigation Variants | 8 | Top-nav explorations |
| Profile | 2 | Profile placement |
| Top Nav / Top Bar / Page Layout (mobile) | ~6 | iOS frames |
| Components | 1 | Reusable bits |

---

## Sharing-blockers (fix before distribution)

1. **No recommendation.** 8 nav variants + 4 nav types + 3 width options = 96 implied combinations and no single "we're going with this." Eng can't scope. Product can't size. Pick one for each progression and mark it; demote the rest to "considered, rejected because…" one-liners.
2. **No problem statement or success metric.** "Compete with Personify" + "open up content" is the brief, but it isn't on the canvas. Add an intro frame: who has the problem, what we're trying to unlock, what success looks like (content-width gained at common breakpoints, time-to-find for top 5 nav targets, qualitative parity vs. Personify).
3. **5-tab IA mapping is implicit.** Comparison doc commits MHC to Home / Digital Care / Wellbeing / Benefits / Rewards. Variants don't show where each lives in each option, what gets demoted, or what happens to secondary nav. Without that table, every reviewer reverse-engineers it.

---

## IA / behavior gaps

| Area | Gap |
|---|---|
| Sidebar collapse states | Icon-only vs. hidden vs. hover-expand — pick one and show it. Tooltips on collapsed icons (a11y requirement) not shown. |
| Active / selected state | Not shown in collapsed sidebar or in any top-nav variant |
| Notifications & badges | Where does the unread/alert badge sit when sidebar is icon-only? When nav is on top? |
| Persistence | Does collapse state persist across sessions / devices? |
| Transition | Push vs. overlay vs. instant — pick the model |
| Responsive thresholds | At what px does sidebar auto-collapse? What does top-nav do at <1024? Tablet (768–1024) is absent |
| Search / profile / help | No defined home in either progression |
| Sub-navigation | Wellbeing has sections — when sidebar moves up, where does sub-nav go? Tabs? Left rail? In-page? |
| RTL & long labels | DE/FR/ES labels overflow top-nav fast. Not shown. |

---

## Strategic / buyer gaps

| Area | Gap |
|---|---|
| B2B visibility | MHC's Benefits + Rewards top-level placement is a B2B buyer signal (per comparison doc). Top-nav move can bury them. State explicitly: is "visible Rewards" a constraint or negotiable? |
| Personify parity | Doc doesn't reference what Personify does in equivalent moments. Their nav lacks Benefits — this is the differentiator. One side-by-side frame would land it. |
| AI surfaces | MHC's three AI features (AI Insights on Home, Health Advisor in Digital Care, A.I. Motivator in Challenges) need a home in the new IA. Not addressed. |

---

## Engineering handoff gaps

| Area | Gap |
|---|---|
| Tokens | Sidebar widths (expanded/collapsed), top-nav height, content max-width — reference design tokens, not pixels |
| Component delta | DS has `C_Header Bar`, `C_Navigation Bar`, `C_Bottom Navigation` (mostly 🚧 Stub). Spell out: which existing components extend vs. which are new. **Per CLAUDE.md, new components = escalation** — eng will ask. |
| Accessibility | Keyboard order, focus-visible, ARIA expanded/collapsed, skip-link to main, contrast on collapsed icons |
| Frame names | "MacBook Pro 16" - 22" isn't referenceable in a Jira ticket. Rename to intent (e.g., "Top Nav — Tabs Center + Profile Right") |
| Analytics | List new events: `nav_sidebar_collapsed`, `nav_top_clicked`, etc. |
| Phasing | Ship 1 then 2 with how long between? Behind a flag? Migration comms to existing members? |

---

## Doc hygiene

- Page title typo: "**Andoid**]" with stray bracket. Fix before sharing.
- No numbered/labeled section order — reviewers don't know where to start. Add 1–7 numbering.
- No "decisions made" or "open questions" frame at the end.

---

## Tradeoffs considered

| Option | Why not |
|--------|---------|
| Ship doc as-is and let reviewers ask | Generates 20+ comments and stretches timeline. Reviewers will reverse-engineer the IA and reach contradictory conclusions. |
| Move everything to Confluence and skip Figma fixes | Loses visual context for nav decisions. Eng prefers Figma for layout, Confluence for rules — keep both. |
| Pick one variant and delete the rest | Removes the "considered" trail that prevents the same option being re-litigated later. Keep variants, mark recommendation. |

---

## Pre-share fix order

1. **Intro frame** — problem, goal, success metric, two screenshots (current MHC + Personify side-by-side)
2. **IA mapping table** — 5 MHC tabs × each variant, showing placement + what's demoted
3. **Recommendation frame** — picked variant for each progression, marked clearly; others kept with one-line rejection rationale
4. **States + responsive matrix** — one frame each, covering all gaps in the IA/behavior table
5. **Doc hygiene** — fix typo, number sections, rename frames to intent
6. **Confluence companion page** — tokens, a11y, analytics, phasing, migration comms

---

## Open questions for product/eng before share

- Is "visible Rewards/Benefits at top level" a hard constraint (B2B buyer signal) or negotiable?
- Single release for both progressions, or staged rollout with a feature flag between?
- Are mobile bottom-nav patterns also changing, or scoped only to web for this initiative?
- What's the analytics baseline we'll measure against post-launch?

---

## Supporting material

- Figma file: [Navigation Design Updates](https://www.figma.com/design/GWvOaoNuWLaZ9jRe3o7TYC/Navigation-Design-Updates?node-id=2465-18294)
- Competitive comparison: [navigation-mhc-vs-personify.md](../../competitive/comparisons/navigation-mhc-vs-personify.md)
- DS index (component status): [design/_index.md](../../design/_index.md)
