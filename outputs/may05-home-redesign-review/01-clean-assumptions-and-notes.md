# Home Page Redesign — Clean Assumptions & Notes

**Date:** 2026-05-05
**Purpose:** Reconcile John's Top 5 priorities (Notion), the Darcy meeting (Granola, May 5), and Jill's Claude Design exploration into a single, honest set of working assumptions before recommending a direction.
**Sources read:**

- `Notion: Design — Home page + Application Frame Redesign — Based on John's Top 5 Web Priorities` (last edited 2026-04-27)
- `Granola: Homepage personalization and design strategy with focus selection` (2026-05-05, w/ Darcy)
- `outputs/MHC UI/` — Jill's exploration: 19 HTML pages, 17 JSX modules, 1 README, 1 design-canvas state file
- `projects/home-redesign-session-handoff.md` (Apr 22 baseline)
- Reference: `ux-usability-experts.md`, `ux-laws-quick-reference.md`

---

## The framing problem to fix first

The three sources are not the same brief. Treating them as one is how this work gets muddled.

| Source | What it actually is | Scope |
|---|---|---|
| **John's Top 5 (Notion)** | Targeted remediation of 5 specific UI defects clients are complaining about today | Tactical — logo, nav, carousel, spinner, tracker perf |
| **Darcy meeting (Granola)** | Strategic reframe — kill the personalization engine, ask users for focus, simplify home | Strategic — IA, content model, onboarding |
| **Jill's exploration** | A full Focused-direction product proposal — picker, hero, today strip, insights, hero variants for SDK/top-nav, KPI predictions | Strategic — full home page redesign, mostly executes the Granola reframe |

**John didn't ask for a personalization rewrite.** He asked for nav, carousel, spinner, logo, tracker perf. Jill's exploration goes far beyond that scope — it's 80% the strategic reframe Darcy and you discussed, with John's 5 fixes folded in. That's not wrong, but it needs to be acknowledged: we are bundling a big bet (kill the personalization engine, ask users to declare focus) onto a remediation ask. The case for that bundling has to land independently with John, or his Top 5 will go in unchanged and the strategic work will stall.

---

## What John actually asked for (Notion verbatim)

Five fixes, sized:

| # | Fix | Type | Effort |
|---|---|---|---|
| 1 | **Logo:** center top on web + mobile | Visual / Layout | Low |
| 2 | **Side nav:** remove, replace with top or bottom nav pattern | IA / Interaction | High |
| 3 | **Carousel:** replace with scroll, card stack, or paged alternative | Component | Medium |
| 4 | **Spinner:** redesign + 1-second delay threshold logic | Component / Motion | Low–Medium |
| 5 | **Trackers:** audit data-fetch strategy, defer non-critical calls | Performance | High |

Your own Notion commentary already flagged the right thing: **Items 2 and 5 are structural and gate the rest.** Nav is an IA decision that ripples into the app frame and home layout; tracker perf is a regression risk. Items 1, 3, 4 are local visual fixes that should not bottleneck behind them.

---

## What Darcy aligned on (Granola, May 5)

Five decisions worth treating as commitments unless explicitly reopened:

1. **Single hero, not multi-message carousel.** Behavioral shift — clients have been trained on the carousel, so this needs explicit stakeholder buy-in.
2. **Logo top-nav placement on every shell.** Web standalone, web SDK, mobile.
3. **Onboarding picker is the personalization input.** User picks **1–3 focus areas, no skipping.** Eliminates the need to re-select on home.
4. **Home content hierarchy:** (a) top banner with priority logic, (b) activity data section (fixed metric set), (c) two-column: employer content vs. user-interest content. Banner priority order: active team challenges → employer messaging → user-focus content (fallback).
5. **Left nav is collapsible via explicit button**, not browser-resize. SDK doesn't use left nav at all. Claude Design is for ideation only; final designs go back to Figma.

---

## Where Jill's exploration confirms, extends, or diverges from the above

### Confirms (ship these)

| Decision | Source convergence |
|---|---|
| **One hero, not a 5-banner carousel** | Granola + Jill's "Current vs. Focused" AB hero deltas |
| **Trackers above the fold as a "Today" strip** | Granola activity-section position + Jill's `Today_*` variants |
| **Welcome banner is deleted** (it duplicates the greeting) | Jill's desktop deltas + her own open question to leadership |
| **Three delivery shells, one component tree** (mobile / web w/ left nav / web w/o left nav for SDK + future top-nav) | Granola SDK note + Jill's three-modes section |
| **Hero treatment for wide / no-left-nav layouts = 50/50 split** (photo left, copy panel right) | Jill explored 5 options (capped, split, 21:7, card, editorial) and recommended split. The rationale — head stays in frame, no overlay contrast hacks — is sound. |
| **Focus pill = "stronger pill" treatment** (light-blue fill, brand border, explicit "Edit" label) | Jill's focus-control discoverability section, evaluated against NN/g, Material, Polaris, Primer affordance standards |
| **AI Insights has 4 server-driven states** (ready / refreshable / read-only / hidden) and lives between Today and For-You | Jill's insights section, with sensible tracker-coupling logic |

### Extends (Jill went further than Granola committed to)

| Extension | Status |
|---|---|
| **Skipped-picker / no-focus state** with onboarding hero, dashed "Pick your focus" CTA, and a 7-day-cadence persistent nudge | Granola says picker is mandatory ("no skipping"). If that holds, **all of Jill's no-focus state work is unnecessary**. Decide which is right before more pixels move. |
| **Predicted KPIs** (link-rate +25–40%, hero engagement +2–3×, content-ops –50%) | Reasonable directional bets, but no data behind them yet. Treat as hypotheses, not commitments. |
| **Risk register** (picker skip rate, narrow-focus emptiness, client pushback on hero count, tracker zero-state fatigue) | Useful as-is. Mitigations are credible. |

### Diverges (these don't match — pick one)

| Conflict | Granola says | Jill's artifacts say |
|---|---|---|
| **How many focuses can a user pick?** | 1–3, no skipping | Single-select in HTML pickers; "1–2" in the Current-vs-Focused AB doc; skip path is built |
| **Activity section metric count** | "4 hardcoded metrics: steps, active minutes" (Granola transcript is internally inconsistent — names 4 then lists 2) | 3 tiles in most variants (Steps + Sleep + Heart Rate); 4 in some |
| **Picker re-prompt cadence** | None implied (mandatory once) | "Re-prompt on day 3 if skipped"; "persistent nudge dismisses for session, reappears after 7 days" |

These three need explicit decisions before any further design work. Calling them out in `_decisions.md` so they don't get re-litigated every sprint.

---

## What Jill explicitly flagged as still-open (her own questions to leadership)

From `MHC Home Page - Design Review.html`, the recommendation card:

1. Do we keep the hero carousel or commit to a single focus card?
2. Is the "Welcome Davinder" banner redundant with the greeting above it?
3. Launch with chat advisor visible, or A/B it against the current design?

Question 1 was answered in the May 5 meeting (single hero). Question 2 is a no-brainer — kill the banner, the greeting carries the same job. Question 3 is the open one and is **not in John's Top 5**. The AI Chat Advisor card pattern is a net-new addition Jill introduced. Treat it as out of scope for the immediate ship and queue it as a separate experiment.

---

## Working assumptions for recommendations (use these as the baseline)

Locking in before producing options. Push back on any of these and I'll re-pivot.

1. **The deliverable is two tracks, sequenced.**
   - **Track A — Remediation (John's Top 5):** ships first, no strategic dependencies. Logo, carousel→scroll, spinner+threshold, tracker perf audit. These are all backwards-compatible with whatever home layout we ultimately ship.
   - **Track B — Strategic reframe (Granola alignment):** ships second, conditional on John buying into the Focused direction. Picker, single hero, Today strip, focus pill, focus-filtered for-you.
   - Nav (#2 in John's list) sits at the seam — it's structural enough that it gates Track B but visible enough that it shouldn't wait for it. **Decide nav direction in Track A, build the rest of the chrome in Track B.**

2. **Onboarding picker is mandatory, takes 1–3 focuses, never re-prompts on home.** Granola wins this conflict over Jill's 1–2 / skippable / re-prompt-day-3 model. The whole point is that home doesn't ask the user anything — it shows them what they declared.

3. **Activity / Today section uses live tracker data with a fixed metric set.** Not canned. Not biometrics (clinical screenings — those live elsewhere). Three or four tracker tiles selected by the platform, not the user. Steps + Sleep + Heart Rate is the strongest default; Active Minutes can replace Heart Rate if HR isn't broadly available across our wearable mix. Decision needed on count (3 vs 4) and on cadence (today / this-week / hybrid — Jill's "Cadence Reframe" file has 5 options worth a 15-minute review).

4. **Top banner = priority engine, not personalization engine.** Three priority slots, server-decided per session: active team challenge → employer message → user-focus content fallback. Source-of-content is always labeled ("From your employer", "Based on your focus") so the user can read why something is showing.

5. **Two-column under-the-fold = "From your employer" vs. "Based on your focus".** This is the part of the Granola model that Jill's artifacts only partially express ("More from Umbrella" strip + "For your focus"). The two-column treatment is more honest about content provenance and addresses the "muddled home" critique directly.

6. **No mid-session interruptions.** No modals, no re-prompts, no "Are you sure?" asks. Pull, never push. If the user wants to change focus, they tap the focus pill. If they want to change wellbeing interests, they go to account.

---

## Reference standards I'm holding the work to

For the recommendation pass that follows:

| Heuristic | What it says | How it applies |
|---|---|---|
| **Hick's Law** | Decision time scales with options | Picker maxes at 3 selections; home shows ≤3 priority banner slots |
| **Cognitive load** | Pre-fill what you know | Home never re-asks for input the picker captured |
| **Jakob's Law** | Users expect your product to work like others they use | Top-nav with logo center / center-left, Today metrics laid out as tiles — match consumer health-app conventions |
| **Tesler's Law** | Irreducible complexity has to live somewhere | Server decides priority order; client just renders. Don't push priority logic to the user. |
| **Peak-End Rule** | First and last impressions dominate | Onboarding ends with the user seeing their declared focus reflected on home — closes the loop. |
| **Goal-Gradient** | Motivation rises near a goal | Today strip + tracker zero-state CTA sits above the fold, where it gets seen. |
| **Doherty Threshold** | <400ms response keeps users in flow | Ties directly to John's #4 (spinner threshold) and #5 (tracker perf). |
| **Source/recipient transparency** (NN/g) | Users trust content more when source is named | The "From your employer" / "Based on your focus" labels in the two-column pattern. |

---

## What I still need from you to finalize recommendations

1. **John buy-in on Track B as a follow-up to Track A**, or just Track A solo. This shapes everything downstream.
2. **Picker selection count: 1, 1–2, or 1–3.** Granola says 3, Jill says 1–2, picker HTML says 1. Pick one.
3. **Today metrics: 3 vs. 4 tiles, and which cadence (today / this-week / hybrid).**
4. **Chat Advisor card pattern: in or out for this round?** Recommendation: out — it's net-new scope, not in John's ask, and the home is already changing enough.
5. **Are biometrics (clinical screening data — BP, A1C, weight) ever surfaced on home, or are they detail-screen only?** If yes, where; if no, confirm so the Today section's role is bounded.

A two-page recommendation memo follows in `02-jill-artifacts-critique.md`.
