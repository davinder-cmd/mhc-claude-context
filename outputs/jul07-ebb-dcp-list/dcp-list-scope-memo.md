# DCP List / All Topics — Scope Memo

**To:** EBB design review
**From:** Davinder Rehal
**Date:** 2026-07-07
**Purpose:** Pin the page's job, structure, and states before wireframing. Approve the direction and I'll produce the 3-breakpoint wireframes.
**Rev 2 (2026-07-07):** incorporated review of the existing "Digital Care" all-topics screens — sharpened to **resume-first** and added the **pace-over-speed** principle.

---

## The page's job — resume-first, not a storefront

One job: **help the member find and resume their few active care paths.** Members run **1–3 paths at a time**, so for the typical visit this page is almost entirely "continue what I'm doing."

Starting a *new* path is an **occasional, deliberate** act — and it's better triggered by the **completion tee-up** (the daisy-chain: "you finished X → here's your next") than by an inline browse feed competing for attention on every visit. So:

- **Lead with the 1–3 active paths.** For most members that's the whole page.
- **Demote browse/Discover to one quiet entry** ("Browse all / add a path") — not a full recommendation feed. This is the single biggest complexity cut.
- **It unblocks Lane B** — a member with no assessment can still self-select from that one browse entry.
- **It's a library, not the front door (resolved 2026-07-07).** Reached from the **2nd bottom-nav tab (next to Home)** — high-value, deliberate arrival, *not* the app start. A **front-door variant** is defined for the DCP-Only config that launches here with no Home (see below). Center of gravity: *my care*, not a catalog.

## The uploaded "Digital Care" screens are a counter-example, NOT a template

Those screens were shared to react against, not to reskin. **Do not anchor the design on them.** They're heavily complex — a card-per-item media grid, a progress bar on every item, doubled reward messaging, chips everywhere. Design from **best practice + best content + the MHC design system**, not from that layout.

Specifically, avoid what those screens do:
- **A big media card per item** → use the **Row** component (`design/_index.md` — C_Row, Ready). A calm grouped list, not boxed photo-cards.
- **A progress bar on every item** → **one progress indicator, max**, on the single current path; others carry light "Session 4 of 10" text. Too many bars is overwhelming.
- **Per-card chips + reward lines + outcome hints** → strip the chrome. Money → the slim rewards line only; outcome ("feeling better") → the topic page, not here.
- **Two browse doors, interleaved/"recommended" completed, pregnancy shown eligible, two recommendation eyebrows** → one browse row; a demoted Completed archive; exclude pregnancy; one recommendation voice.

**Design principles for this page:** row-first · at most one progress bar · generous whitespace · calm and scannable (Hick's / cognitive load / aesthetic-minimalist) · one emphasized "continue" for the clear next (Von Restorff / D1), everything else quiet.

## Recommended structure — the content model, DCP-scoped

This is not a new model; it's your [content-surfaces framework](../../design/IA/content-surfaces-ia.md) scoped to care paths. Everything here is **Do**-mode; the sections are lifecycle states:

| Section | IA class | Member's question | Behavior inherited |
|---|---|---|---|
| **Promoted "next"** (top) | top-ranked Suggestion | *"What should I do next?"* | D1 queue model — one clear next, not a lock |
| **Continue** (Ongoing) | In progress (Member) | *"Where was I?"* | Resume; Zeigarnik pull; progress + $ toward reward |
| **Discover** (Recommended + Browse all) | Suggestion (System) | *"What else could help me?"* | Ranked; personalize (see more/less); **this is Lane B** |
| **Completed** | Done | *"What have I finished?"* | Archive; $100-earned proof; Peak-End |

**Reuses existing components** — Feature Card / Preview Card / Row / Filter Group / Chip Group — no net-new atoms (escalate only if wireframing surfaces a real gap).

## Structure decision to lock: state-adaptive single scroll (recommended)

**Recommendation:** a **single scrollable page that reorders by member state**, not fixed tabs.

- **New / Lane-B member (nothing in progress):** Discover leads — the promoted "next" is a *recommended* path (from interests, or a sensible default), then Browse-all by category. No empty "Continue" section staring at them.
- **Returning member (has an in-progress DCP):** the promoted card is **Continue** (resume + progress + distance-to-$100), then Discover below.
- **Completed** is always the tail — a collapsed archive / count, not competing for the top.

**Why single scroll over tabs:** tabs hide Discover behind a tap, which hurts the exact user we most need to serve on this page — the browse on-ramp with nothing yet in progress (Recognition over recall, Nielsen #6). A state-adaptive scroll always leads with the member's real next move (D1; Serial Position — lead and tail carry weight).

**Rejected — fixed tabs (Ongoing | Discover | Completed):** cleaner only once each bucket is substantial; penalizes the new/browse user by burying Discover, and adds a navigation decision this page shouldn't require. Keep as fallback if wireframing shows the scroll gets too long.

## Taming 14 paths (Hick's / Miller's)

14 eligible DCPs is past a comfortable scan. The page must never read as a flat 14-item menu:

- The **promoted "next"** does the triage — one obvious choice up front.
- **Discover** shows a *ranked* short set (6–7, per the home "Recommended" pattern), not all 14.
- **Browse all** is **categorized** — Behavioral · MSK · Metabolic · Cardiovascular — each group 5±2 items (Miller's), collapsible. Category is the chunking device, not a wall of tiles.
- **Search** for the expert who knows what they want (Nielsen #7, flexibility).

## Pace over speed — don't gamify velocity (the length insight)

**Observed:** members who race through a path (chasing the money) don't get the clinical benefit; the ones who pace themselves do. The current cards optimize for the *wrong* behavior — "4 sessions to your reward," filling progress bars, "on track" — they train the rush.

Design response:

- **Reframe the caption from velocity to cadence.** Not "4 sessions to your reward" → "Session 6 · 3 weeks in" / "2 sessions this week." Reward *showing up consistently*, not finishing fast.
- **Keep money in the banner, off the cards.** Removing the per-card reward line reduces clutter *and* removes the speed incentive — one fix, both goals.
- **The rhythm is already enforced.** `EBB_Specification.md` §11.5 locks a session-pacing gate — session N+1 unlocks only ≥7 days after session N *started*; the walkthrough decides **1 session/week**. The gate already "prevents going too FAST." So sessions *can't* be binged — this memo's job is to stop the **surface** from *encouraging* it.
- **The real progress signal is "How you're doing" (outcome), not sessions-remaining** — depth over distance-to-payout. Goal-gradient still helps near the *true* finish; we just stop dangling the payout at every step.

Grounded in: the **Efficacy guardrail** (`_decisions.md`), the §11.5 pacing gate (locked at **1 session/week**), the topic-page scope decision, and the Engagement–Efficacy Gap in `engagement-loop-best-practices.md`.

## Key states to design

- **Empty Continue** (new member) → collapses; Discover leads.
- **Cap reached** ($500/yr) → Discover shifts from "$100" framing to health framing (stop dangling a payout they can't collect).
- **No strong recommendation** → promoted card softens to "Explore care paths," not a forced pick.
- **Consent not yet given** → inherits the `gate_mode` variant from [_open-decisions #1](../../projects/feature-ebb/_open-decisions.md) at the point of starting a path.
- **Pregnancy excluded** — 14 of 15; don't render it as eligible.

## Open decisions (resolve in / alongside the wireframe)

1. ~~Front door vs. library~~ **RESOLVED:** library (2nd nav tab); front-door is a header-variant (see *Library vs. front-door variant*).
2. **Browse guardrails** — zero-qualification self-select means a member could pick a poorly-matched path. Any light "not sure where to start?" nudge risks re-introducing qualification. Needs a clinical view.
3. **Reward visibility on tiles** — *resolved by the pace principle:* money lives in the **banner**, not on cards; cards carry a **cadence** caption, not a distance-to-payout line. (Was: "$100 on promoted + in-progress only.")

## Design principles applied

Hick's / Miller's (triage + chunking) · Zeigarnik + Goal-Gradient (Continue shows progress and distance-to-reward) · Serial Position (lead with next, tail with completed) · Von Restorff (one promoted card, not 14 equal tiles) · Peak-End (Completed as earned proof) · Nielsen #6 recognition-over-recall (state-adaptive, nothing hidden behind tabs), #7 flexibility (search), #2 match-the-real-world (plain category names).

## Library vs. front-door variant (resolved)

One core body, two headers. The difference is entirely *above* the Continue list.

| Region | **Library** (2nd nav tab — primary) | **Front door** (DCP-Only, no Home) |
|---|---|---|
| Top | Slim title | Greeting ("keep your momentum going") |
| Loop re-entry | Continue section does it | Elevated — promoted "next" as a hero CTA |
| Rewards | Slim status line / link | Full Care Path Rewards banner |
| Enrollment surfacing | On Home/other | Announcement/banner here if not opted in |
| Body (Continue · Browse · Completed) | — | identical |

**Build:** library as primary; front door = library + a "home-like" header stack. The screens we were shown are front-door-style; the library is the leaner one.

## Responsive & nav

- **Mobile (375):** single column, bottom nav (Home · Digital Care · Wellbeing · Benefits · Rewards).
- **Web today:** left-sidebar nav + **2-column card grid**. Keep the 2-col grid for Continue at desktop/wide (it reads well), but the resume-first logic is unchanged — Continue leads, Discover/Browse demoted below.
- Wide (~1440) may shift nav per the standing content-width direction (side-nav for Expanded/legacy → top-nav for Large/Extra-large); flag but don't block on it here.

## Ask

Approve **(a)** the section model (Promoted next · Continue · Discover · Completed) and **(b)** the **state-adaptive single-scroll** direction over fixed tabs. Then I'll wireframe the three breakpoints (wide ~1440 · desktop ~1024 · mobile 375) and we iterate.

---

## Supporting material

- IA framework: `design/IA/content-surfaces-ia.md`
- Queue model + surfacing: `projects/feature-ebb/_decisions.md` (D1, D4)
- Dual on-ramp (Lane B): `outputs/jul05-ebb-dual-onramp/`
- Inventory row: `projects/feature-ebb/_screens.md` §2
