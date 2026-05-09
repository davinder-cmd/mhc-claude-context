# Jill's Claude Design Exploration — What Works, What Doesn't

**Date:** 2026-05-05
**Scope:** Critique of the artifacts in `outputs/MHC UI/` against (a) John's Top 5, (b) Granola alignment with Darcy, and (c) UX standards. Bottom-line first; rationale below.

---

## Bottom line

Jill's exploration is genuinely strong work. It moves the conversation from "fix five things" to "here's what the home page should be," which is the conversation John's list never has on its own. Nine-tenths of the strategic content survives — the focus pill treatment, hero options for wide layouts, AI Insights state model, three-shell rendering pattern, KPI hypothesis. But it has three structural problems worth correcting before this goes anywhere near John or engineering.

**Ship as-is:** Hero options exploration, focus-pill discoverability analysis, AI Insights states, three-shell architecture, KPI hypothesis, risk register.

**Course-correct before sharing further:** Picker selection count and skip behavior, the "no-focus state" sub-system, the Chat Advisor card pattern.

**Out of scope (defer):** Chat Advisor entirely, the divergent brand-forward direction, density-comparison tooling.

---

## Specific concerns you raised — answered

### 1. "Asking the user to focus on one thing — and then only some of the home reflects it"

**Your instinct is correct, and the artifacts validate it.** Jill's Current-vs-Focused AB doc (`MHC Home - Current vs Focused AB.html`) is explicit: only the hero, the action items, and the for-you content respond to focus. Today strip and Insights are intentionally focus-independent ("they don't depend on focus — activity, points, AI insights are all useful day one"). That's the right call — it would be wrong to gate raw tracker data behind a focus selection.

**The real problem isn't "only some of the page reflects focus." It's that Jill's filter is too narrow.** Two action items under "For your sleep focus" *will* feel thin (Jill flagged this herself — "narrow focus feels empty"). The fix isn't more focus penetration; it's the **two-column "from your employer / based on your focus"** model from the Granola conversation. That gives the focus side enough room to breathe — it's a column, not a strip.

**Recommendation:** Keep Jill's "Today strip and Insights are focus-independent" rule. Replace the "For your focus" strip + "More from Umbrella" strip with a **two-column treatment**: employer content (left or right) and focus content (the other side). Each labeled with provenance. This is what Granola actually decided; Jill's exploration predates that decision.

### 2. "The activities section shows steps, sleep — are biometrics not shown? Is it canned?"

**Not canned.** The Today strip uses live tracker data from Apple Health / Health Connect. Jill's `MHC Home - Today Tracker Sync.html` builds out four sync states (fresh, recent, stale, broken) with real freshness indicators ("4 min ago", "47 min ago", "5h ago", "Yesterday, 8:42 AM") and a per-tile cadence model that acknowledges heart rate syncs faster than steps. This is the opposite of canned — it's a serious treatment of the messiness of real wearable data.

**The metric SET is fixed, not the data.** Granola's "4 hardcoded metrics" wording is misleading. What it actually means: the user doesn't *configure* which tiles appear. The platform decides — Steps, Sleep, Heart Rate (and optionally Active Minutes). That's the right call (Tesler's Law: don't push complexity to the user). Personify does this and it works.

**Biometrics (clinical screening data — BP, A1C, weight, cholesterol) are NOT in the Today strip in any of Jill's variants.** And they shouldn't be. Tracker data is daily, ambient, low-stakes. Biometrics are episodic, often elevated emotional weight (a high A1C reading is not a "Today tile"), and belong on a detail screen with context. Confirm this is the intent — but don't second-guess it.

**The performance optimization John flagged (#5)** is orthogonal to all of this. The Today strip can render skeleton tiles in <100ms while the actual values stream in — that's the right pattern regardless of what tiles ship.

**Recommendation:** Today = 3 tiles (Steps, Sleep, Heart Rate) with a cadence reframe to "this week" if and only if you decide partial-day sync ambiguity is a bigger UX problem than weekly-vs-today comprehension. Jill's `Today Cadence Reframe` file has the trade-offs laid out — option E (hybrid: today + this week) is the best compromise, but it's the most complex to render. Default to plain "Today" with strong sync-state design; revisit if research shows users mistrust partial numbers.

### 3. "We ask for interests in onboarding, then ask again — narrowed to one — on the home page"

**You're right that this happens in some of Jill's earlier explorations, and it's wrong.** The picker HTML files (`MHC Focus Picker.html`, `v2`, `v3`) treat the picker as a single-select onboarding step ("Pick the one focus that matters most"). The Current-vs-Focused AB doc evolves to "1–2." The Granola meeting evolves further to **1–3, mandatory, no skip, no re-prompt.** That last version is the right one and it resolves your concern directly.

**The risk now is the opposite of yours.** Jill's "no-focus state" sub-system — onboarding hero with chip CTA, dashed "Pick your focus" pill, persistent nudge after 7 days, picker re-prompt on day 3 — is an entire branch of design work that **only exists if the picker is skippable**. Granola says it isn't. So either:

- **Granola is right (mandatory picker):** delete Jill's no-focus state work entirely. The home never has to handle "user has no focus" because every user has one. Big simplification.
- **Granola is overstating it (picker should be skippable in practice):** Jill's no-focus state work is the right safety net, but it adds a meaningful branch to every component. We're shipping two homes, not one.

**Recommendation:** Mandatory picker, 1–3 selections, and delete the no-focus state. The reasons:

- A required step is honest about what we need from the user. A skippable required step is dishonest about what we need.
- The no-focus state, no matter how well-designed, is a worse home than the focused one. We'd be shipping two qualities of experience.
- HRA is already required at onboarding. Adding 1–3 taps to declare focus is incremental friction, not a new philosophical asking-the-user-stuff problem.
- The downstream design effort saved is enormous — every component has one fewer state.

If research later shows picker dropout is unacceptable, we add the no-focus state then. Don't pre-build it.

---

## What works in Jill's artifacts (ship)

### Hero options for wide / no-left-nav layouts

`MHC Home - Current vs Focused AB.html`, "Hero treatment options" section. Five options (capped width, 50/50 split, 21:7 aspect, card inset, editorial), each with what-it-does / why / tradeoff. Recommendation lands on B (50/50 split). The reasoning is correct — head-in-frame at any width, no overlay contrast hacks, scales gracefully. The photography brief at the bottom (subjects centered, eyes at 35–45% from top, square or near-square crops) is exactly what photo-ops will need.

**This deserves to be a design system contribution, not just a one-off.** The split-hero pattern will be reused for every wide-shell context (SDK, future top-nav, possibly marketing). Document it as a reusable component.

### Focus pill — discoverability rationale

`MHC Home - Current vs Focused AB.html`, "Focus control — discoverability options" section. Compares baseline pill (badge-like, fails affordance test) against three alternatives — stronger pill with explicit "Edit" label, full-width banner row, inline editable heading. Cites NN/g, Material, Polaris, Primer. Recommendation lands on the stronger pill for steady-state, with the inline editable heading as an echo below the fold. This is the right answer and the rationale is bulletproof.

The segmented control was correctly ruled out (system constraint: hard-coded segments, >4 standard focus areas). That kind of "I checked and it doesn't fit our system" reasoning is what saves engineering cycles downstream.

### AI Insights — state model

`MHC Home - Current vs Focused AB.html`, "AI Insights — four display states" section. Server decides which state to send (Ready / Refreshable / Read-only / Hidden); client just renders. Tracker linking gates it. The "action button is its own element outside the bordered card" detail respects the existing system constraint. This is well-reasoned and ready to spec.

### Three-shell architecture

The "three delivery modes" section — mobile native / web with left nav / web without left nav (SDK + future top-nav) sharing a single component tree — is the right architecture call. SDK partners' chrome on top, our content below; future top-nav planned for MHC-hosted desktop; mobile bottom-tabs unchanged. Don't fork the home view per shell — pass a shell prop and let the layout adapt. This is the kind of decision that, if we don't make it now, costs us six months of duplicate component maintenance later.

### KPI hypothesis + risk register

`MHC Home - Current vs Focused AB.html`, "What this should move" and "Risks" sections. Six predicted lifts with mechanism for each, north-star metric named (30-day tracker link rate), measurement plan (50/50 split on new users, 6 weeks, ~15k MAU minimum), and four named risks with mitigations. This is the rare PM-grade thinking from a design exploration. Use it verbatim as the basis for the experiment design.

---

## What doesn't work (course-correct)

### The picker variants haven't converged

Three variants in `MHC Focus Picker.html`:

| Variant | What it is | Where it lands |
|---|---|---|
| **V1 — Pillar grid (RECOMMENDED)** | 2-column tiled grid, grouped by pillar (Physical, Emotional, Career, Financial, Social), single-select | Browse-first; reinforces the pillar taxonomy from first interaction |
| **V2 — Tabbed list (ALT)** | Single column with pillar tabs; each row has a "why this matters" subtitle, single-select | Familiar mobile filter pattern (App Store, Spotify); better for ambiguous items |
| **V3 — Hero pick (BOLD)** | One recommended focus rendered large with reasoning; chip pool of alternates beneath | Lowest friction if you have a real recommendation engine; brand moment |

All three are single-select. None match the "1–3 mandatory" Granola decision. **None of these ship as-is.** The tabbed list (V2) is closest to right because the subtitles ("Better recovery, mood and focus the next day") earn their place — but it needs to be modified to multi-select (radios → checkboxes), capped at 3 selections, with a "1 of 3 chosen" counter, and the skip path stripped out.

The **pillar grid (V1)** is visually the strongest as a browse-first pattern but the subtitles disappear and that's a real loss. Recommendation: take V2's structure, V1's pillar headers, and merge into a single converged picker. This is the single highest-priority follow-up.

### The "no-focus" state is design work for a problem we shouldn't have

See concern #3 above. If the picker is mandatory, this entire branch is unnecessary. If we keep it, we're shipping two home pages. Decide and delete.

### Chat Advisor card pattern is scope creep

`MHC Home Page - Design Review.html` recommendation: "Ship Desktop '3 banners' + Mobile 'Chat Advisor cards.'" The advisor pattern is well-designed (cards for content-feel, scales to long titles, ≥44px touch targets) — but it's net-new home-page real estate that doesn't appear in John's Top 5 and didn't come up in the Granola alignment except as "fuels the advisor" framing for the picker. Adding it to this round means shipping a new conversational interface on home alongside the structural reframe.

**Recommendation: defer.** Queue it as a follow-up experiment after the focus reframe ships and proves out. The picker → advisor handoff Jill describes ("How do I sleep better on travel nights?") is a real opportunity, but it's a Q3 conversation, not a May ship.

### "Three banners" recommendation is in tension with Granola's single-banner direction

Jill's Design Review says "3 banners" (1=sparse, 4=ad-shelf, 3=just right). Granola says one hero + a priority engine for the top banner slot. These are different artifacts proposing different things. The Current-vs-Focused AB doc resolves it in favor of single-hero (which matches Granola), so treat the Design Review recommendation as superseded. But it's still in the file and will confuse a reader who opens it cold. Mark it as superseded or remove.

### Density toggle is dev-tooling, not design

The TweaksPanel + density toggle (compact/regular) across files is a useful exploration tool but produces no shippable artifact. If it influenced any of the recommendations, surface that influence; otherwise treat it as scaffolding and don't include it in handoff.

### Divergent brand-forward direction is interesting but premature

`MHC Home Page - Design Review.html`, "Divergent direction — Brand-forward" section. Circle motif, orange-on-blue, softer Guardian voice. Jill correctly flagged the tradeoffs ("higher lift — new components", "moves away from the shared scaffold", "requires buy-in from content team on voice"). This is a valuable provocation but it's a separate conversation from John's remediation ask. **Tag, archive, revisit in a brand-system refresh — not now.**

---

## Mapping Jill's exploration to John's Top 5

How much of the strategic work actually fixes what John flagged:

| John's ask | Jill addresses it? | Notes |
|---|---|---|
| #1 Logo top center | Partially | Jill's hero options assume top-nav with logo. Granola explicitly said top-nav for every shell. The exact placement (center vs. left) needs a one-liner decision. |
| #2 Side nav → top/bottom | Yes — extensively | "Three delivery modes" architecture handles all three nav contexts. This is the most thoroughly addressed of John's items. |
| #3 Carousel → scroll/stack/paged | Yes — replaced with single hero + optional "More from Umbrella" strip | Stronger answer than John asked for: replace the *idea* of a carousel, not just the implementation. |
| #4 Spinner + 1s threshold | No | Not in scope of any artifact. Pure component/motion work; doesn't need strategic context. Standalone ticket. |
| #5 Tracker perf audit | Indirectly | Jill's sync-state model + per-tile cadence implies a fetch strategy but doesn't audit current calls. Eng-led work; design provides the rendering contract. |

**John's #4 and #5 are not blocked by anything in Jill's exploration.** They can ship in parallel with whatever home redesign happens. Pull them out as standalone tickets and don't let them get caught up in the strategic decision.

---

## Recommended path forward (one ask)

| Track | Scope | Owner | Sequence |
|---|---|---|---|
| **A1 — Spinner threshold** | John #4. New spinner + 1s delay logic. | Eng + Design | Now. No dependencies. |
| **A2 — Tracker perf audit** | John #5. Audit and defer non-critical calls. | Eng | Now. No dependencies. |
| **A3 — Logo + nav decision** | John #1, #2. Decide top-nav structure (center vs. center-left logo, top-nav vs. top+bottom-nav for mobile). | Design (Davinder) → John for sign-off | Next 2 weeks. Gates Track B. |
| **A4 — Carousel removal** | John #3. Replace 5-banner carousel with single hero (no other changes yet). | Design + Eng | Can ship behind a flag once A3 lands. |
| **B — Strategic reframe** | Picker, focus pill, Today strip promotion, two-column employer/focus content, Insights state model. | Design (Davinder + Jill) → John for buy-in → Eng | After A3, conditional on John buy-in. |

If John doesn't buy into B, A1–A4 still ship and we've cleaned up his Top 5. If he does, we have the design foundation already laid.

---

## Things I'd want Jill to know

She should keep doing this. The KPI hypothesis, the risk register, the citation-grounded discoverability analysis — that's PM-quality work product from a design exploration, and we don't get enough of it. The course-corrections above are about scope and convergence, not the quality of what was made.

---

*Saved to `outputs/may05-home-redesign-review/`. Companion file: `01-clean-assumptions-and-notes.md`.*
