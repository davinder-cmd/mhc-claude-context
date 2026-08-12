# Engagement-Based Billing (EBB) — Project Brief

> **For agents:** Read this before any work on EBB. Raw source materials (specs, playbook, decks, 1-pager, client notes) live in `source/`. Running decisions live in `_decisions.md`.
> Last updated: July 2026

---

## What This Project Is

**This is a product design project.** The goal is to design the member experience — the **"DCP Only" (Digital Care Only)** app variant — that drives and optimizes engagement with and completion of Digital Care Path (DCP) programs, so MHC achieves its Engagement-Based Billing (EBB) goals.

EBB is the commercial backdrop: MHC's revenue shifts to being tied to **member completion of DCP programs** (claims billed as members complete sessions, à la Hinge/Sword). That model is important context and it sets our constraints — but **it is not what we are designing here.** What we are designing is the product that makes completion happen.

## Launch update (2026-07-05, from Darcy's meeting notes)

> Source: `outputs/jul05-ebb-meeting-notes/ebb-meeting-notes.md`. Full record in `_decisions.md` (2026-07-05). Darcy documenting formal requirements by Mon 7/6.

- **Naming to confirm:** notes say "**Episode**-Based Billing"; source docs say "**Engagement**-Based Billing."
- **Reward:** **$100 Amazon gift card** on completion (not HSA / not choice). Billing per session; $100 at full completion; **~50%** required to guarantee it.
- **Cap:** **$500/yr per user** is the *recommended* config; system default = no cap, no risk requirement. **Risk stratification** = a configurable eligibility input (default off; internal debate).
- **Scope:** 14/15 DCPs (**pregnancy excluded**). **Home page OUT OF 9/1 LAUNCH SCOPE** — existing hero banners + "Just For You" stay for launch; **we continue to ideate on it and may adjust once table stakes are locked.** For EBB-only clients: keep team challenges; journeys/habits may be trimmed.
- **Timeline:** Alight House lighthouse — **go-live Sept 1**, testing August. Waystar signed.
- **Enrollment funnel (new emphasis):** assessment-driven — surface *"you may qualify to earn $100"* post-health-assessment, post-wellbeing-assessment, and mid-DCP. An **enrollment daisy-chain** (assessment → DCP recommendation → EBB enrollment), distinct from the completion daisy-chain.
- **Constraint:** data siloed today (assessment can't pre-populate DCP; no cross-session memory) → limits "based on what we know about you" personalization near-term.

## The Design Problem

Members complete more DCP programs when the experience is focused, personalized, and rewarding. Design a streamlined "DCP Only" experience that:

- Reduces distraction from non-DCP content
- Surfaces the active program, next recommended session, and progress/completion clearly
- Personalizes recommendations to the member (interests, conditions/risks, behavior)
- Ties rewards and celebration to program completion (the billing trigger)
- Keeps the paths to Rewards, Messages, Health Coach, and account info accessible

## Member Goal

Make real progress on a health program that matters to me — always know what to do next, feel my progress, and get rewarded for finishing.

## Business Goal (why this matters)

Drive DCP enrollment and completion. Under EBB, completion *is* the revenue event, so the product experience is the primary lever on business outcomes.

## ⚠️ Guardrail (non-negotiable): protect efficacy — pace, not speed

**The single most important constraint on this redesign: clinical efficacy must not regress.** Engagement is a *means* to outcomes, never the goal. Over-gamifying to lift engagement (Jill's caution) can **backfire on outcomes** — the documented **engagement–efficacy gap**: more usage ≠ better outcomes, and maximizing engagement can *undermine* efficacy. Our own experience bears it out — members who **race** through a path chase the reward and get little clinical benefit; the members who **pace** themselves are the ones who improve.

So every design choice optimizes for **efficacy first**, and specifically for **pace, not speed**:

- **Reward consistency and completion quality, never velocity.** Mechanically enforced by the §11.5 one-session/week pacing gate; the surface must not undercut it (see `_decisions.md` — *Pace over speed* + *Efficacy guardrail*).
- **Gamification is subordinate to efficacy.** A mechanic that lifts engagement but risks outcomes loses.
- **Success = outcomes holding or improving** post-redesign — not session velocity or raw engagement.

This applies to every EBB surface **and anything shared externally.**

## Design Approach & Mental Model

This is a **fresh exercise** — not a reskin of the current app and not derived from any existing mockups.

**Leaning heavily on the education / structured-path model** — the Duolingo and Headspace playbook — over a rewards-first model. A DCP is a program with a clear beginning, a sequence of sessions, and a finish line. The design bet is that a well-designed *path* (always-clear next step, visible progress toward completion, streak/momentum mechanics, satisfying completion moments) is what drives finishing — with rewards *reinforcing* the path rather than being the primary driver.

- **Primary lens:** education-path model (clear finishable paths — Duolingo, Headspace)
- **Secondary lens:** reward model (reinforces the path; ties to the EBB completion/billing trigger)

## The Engagement Loop (design the loop, not just screens)

EBB is a **loop** that keeps moving a member to their next DCP — not a single surface. Design must treat it as a
cycle with multiple **trigger points** (places we re-enter/nudge the loop) and **celebration** as a core beat.

**Trigger points to consider:**
- **Home page** — surfaces the recommended next DCP / progress
- **Topic home** — progress + "continue" / next-step nudge
- **Rewards** — earnings progress, "you could earn $X more," next opportunity
- **Push notification** (device-level) — re-engagement / acquisition hooks (e.g. "Earn $100 when you try Digital Care")
- **In-app notification** — nudges, reminders, incentive alerts

**Celebration states are the hinge of the loop — MOST IMPORTANT.** Completing a session and (especially)
completing a program is the payout moment AND the moment we tee up the next DCP. Celebration must do double duty:
reward the finish *and* propel the member into the next loop iteration. (Today's celebration fires on *start* and
uses points language — see current-dcp notes; EBB needs completion-triggered, $-framed, next-teeing celebration.)

Rough loop shape: **trigger → enter/continue DCP → progress → celebrate completion (payout) → tee up next → trigger again.**

## Horizons (both matter)

The work spans two time horizons, and we should be explicit about which any recommendation targets:

1. **Long-term / directional** — where this product *should* be to make EBB work as a durable product (the ideal education-path experience).
2. **Short-term / bridge (next 1–2 months)** — what we can realistically ship now that moves us toward that direction.

Sequence: **start from the current experience → define the long-term direction → then design the short-term bridge that heads there.**

## Working Sequence

1. Davinder provides the **current experience design** → Claude gives feedback (not solutioning yet).
2. Then begin solutioning: long-term direction, then short-term bridge.

## Product Configurations (3 retained models)

- **DCP Only** ← new, the focus of this project
- **Wellbeing Only**
- **Wellbeing + DCP** (current combined)

## Commercial Context (constraints, not the deliverable)

*These facts shape what the product must support — e.g. completion must be an unambiguous, trackable event; incentives are client-funded and tied to completion. They are background, not the design focus.*

- **Pricing signal:** ~$47.50 per DCP completion = $37.50 MHC revenue + $10 client-funded incentive (target incentive $100/DCP completion; client funds any increase, never MHC margin).
- **Incentives are employer-funded** — MHC processes on the employer's behalf; no incentive paid without collected cash to fund it. Contract clause required.
- **Claims/RCM:** MHC owns RCM (submission, denials, reconciliation); Waystar is the clearinghouse/automation layer. Claims cost target ≤1% of revenue. Denials target ~0% (employer contractually obligated to pay 100%).
- **Implementation:** plan 60–90 days per new payer; payment timing 30–60 days initially, dropping to 1–3 weeks once live.
- **Regulatory:** positioned as a wellness benefit (same posture as Hinge/Sword); key compliance point is clarity on incentive funding + employer tax/withholding reporting.
- **Deployed DCPs:** 15 programs (Depression 10, Anxiety 10, Insomnia 8, Low Back 8, Neck 9, Shoulder 9, Hip 7, Knee 7, Healthy Blood Pressure 12, Diabetes Prevention 9, Continuing Diabetes Prevention 9, Diabetes Management 10, Weight Loss 12, Weight Management 10, Pregnancy 39). Upcoming: Alcohol Use, Substance Misuse, Healthy Blood Cholesterol, GLP-1 support/taper.

## Minimum Product Inclusions (DCP Only)

DCP List Page · Tracker/Health Coach (TBD necessity) · Rewards · Messages.
Potential: Interest Survey (onboarding personalization), Home page, health assessment, rewards shop.

## Consent Gate (required before earning/billing) — workstream

Spec-mandated: EBB spec §7 requires consent captured **before any billable event or incentive accrues** (likely a **HIPAA authorization + ADA notice**; re-consent leans annual/benefit-year). Today DCPs just display with no gate. Existing pattern to build on: the **Gated Rewards** flow (Figma frame 25 — locked reward center → complete gate → "Rewards unlocked → Start Earning").

**Two cohorts:**
- **New users** — consent as part of onboarding/opt-in, gated at the reward ("Opt in to start earning $100 per program"). Value-forward; no in-progress work to interrupt. (§6: opt-in is a member choice kept on the payout side, so eligible-not-opted-in members still see the carrot.)
- **Existing DCP users (mid-program)** — the sensitive case. Introducing EBB requires their consent before it's billable. Working phrasing: "lock them out until they consent."

**Key decision to pin (needs legal + clinical + commercial, not just design):** hard gate vs. earn-gate for existing users.
- *Hard gate* — can't continue the DCP without consent. Only defensible if the commercial model funds only consented members.
- *Earn-gate (recommended lean)* — keep doing the clinical work; **earning/billing** gated until consent, framed as an **unlock** not a lockout ("You can now earn $100 for the program you're already doing"). Avoids a punitive interruption of an in-progress mental-health program (honesty/duty-of-care guardrail; Nielsen #3 control & freedom).

**Legal dependencies (from spec §7, open):** one-time vs annual re-consent; exactly what consent covers (health-plan billing, incentive terms, data use); which instrument(s) — HIPAA authorization and/or ADA notice; opt-out mechanics (prospective-only). Consent copy is configurable.

### Surfacing model (how opt-in is presented — proposed 2026-07-02)

Not a single "onboarding step." A **state-aware, layered** model:
- **Layer 1 — Announcement (first touch), intensity scaled by cohort:**
  - *New user (registers post-rollout):* an **onboarding step**, value-forward, **skippable**.
  - *Existing user, no DCP yet:* a **home primary card** (NOT a retro onboarding step).
  - *Existing user, mid-DCP:* a **one-time full-page modal** on next open — "in your face," but **dismissible** (Nielsen #3). Never re-shown as a modal; degrades to the banner after one view.
- **Layer 2 — Persistent entry:** a **home banner/card** that stays until opted in — the catch-all if they skip/dismiss the announcement (Recognition over recall).
- **Layer 3 — Contextual opt-in:** the **actual consent captured at the DCP** (Gated-Rewards pattern, frame 25), when they go to continue/start a program — this is where the legal HIPAA/ADA consent + the 50% eligibility message (>50% earns / <50% doesn't this run) live.

**Modal vs banner:** modal = one-time attention (mid-DCP users only); banner = the standing door (everyone, persistent). Match modal intensity to stakes.

**Prominence ≠ interruption (design principle):** importance justifies *prominence* (hero/primary card), not automatically *interruption* (a modal). Interrupt only when the message is material to this user, one-time, AND either needs a decision now or blocks a required action. For EBB: lead **inline-prominent** (primary card) for awareness; **interrupt only twice** — the one-time mid-DCP intro, and the consent decision at the point of value. Avoid a money-forward full-screen takeover for everyone (reads as a slot-machine money grab — violates the health guardrail; one-shot takeovers also get reflex-dismissed). DS support confirmed: mobile = full-page modal + modal window; desktop = right-side modal panel + modal window (use the desktop right-panel for the mid-DCP intro — less blocking than a full takeover). Whether the contextual consent modal is dismissible vs. a hard wall = open-decision #1 (earn-gate vs. hard-gate).

**Open decisions (change the flow):** (1) mid-DCP user — hard stop vs. earn-gate (governs whether the modal is dismissible or a wall); (2) new-user opt-in — onboarding, home, or **both** (lean both); (3) modal frequency (lean: one takeover, then banner-only); (4) where legal consent is captured — lean **contextual layer** (tied to the value moment).

## Open Questions

- Does DCP Only require a Home page, or start at the DCP List?
- Is the Tracker/Health Coach a necessity for v1?
- ~~Session throttling default — 2 or 3 completions/week?~~ **DECIDED: 1 session/week** (locked — spec §11.5 pacing gate; walkthrough decision). A 7-day availability floor from session *start*; prevents racing. See `_decisions.md` (Pace over speed / Efficacy guardrail).
- How are member health conditions/risks obtained (Health Assessment needed)?
- Interest vs. condition vs. behavior weighting for personalization — needed for v1?

## Related Context

- `projects/feature-dcp/_brief.md` — the underlying clinical programs being billed against
- `projects/feature-rewards/_brief.md` — incentive engine; EBB incentives run through Rewards
- `strategy/Product Service Information.md`, `strategy/Ideal Customer Profile.md`

## Source Materials (`source/`)

| File | What It Is |
|------|-----------|
| `EBB_Specification.md` | Full EBB spec |
| `EBB_Business_Decisions_Walkthrough.md` | Business/commercial decisions walkthrough |
| `Mobile_Health_EBB_Comprehensive_Internal_Playbook.md` | Internal playbook |
| `Digital Care Only.md` | DCP Only product requirements |
| `Engagement Based Billing .md` | Data requests (Board/Eric, Internal/John) + DCP session counts |
| `EBB - 1 Pager.pdf` | External 1-pager |
| `bswift_FAQ_EBB.pptx` | bswift partner FAQ |
| `2026 Sales Capabilities Overview.pptx` | Sales enablement deck |
| `Notes_ "New Interest Survey UI_UX" Jan 6 2026.eml` | Interest survey UI/UX notes |
