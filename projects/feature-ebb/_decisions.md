# Decisions Log

> Append new entries at the top. One entry per decision. Be specific — future agents and collaborators need to understand what was decided, why, and what was rejected.

---

## Entry format

**Date:** YYYY-MM-DD
**Decision:** [What was decided — one sentence]
**Why:** [The reasoning — business goal, user need, or constraint that drove it]
**Rejected:** [What alternatives were considered and why they were ruled out]
**Success signal:** [How we'll know this was the right call]

---

**Date:** 2026-07-01
**Decision (D1 — Queue model):** Promote one clear recommended "next" DCP after completion, but keep the full DCP library one tap away. Not a hard one-at-a-time lock.
**Why:** An obvious next step drives more completions; hard-locking corners a member who stalls on a disliked program and pushes them to abandon the app entirely. This balances momentum with freedom.
**Rejected:** Strict one-at-a-time (cornering/abandonment risk); open "juggle several" (dilutes the get-to-the-next pull, becomes a browse menu).
**Success signal:** High next-program start rate right after a completion; low abandonment among members who stall mid-program.

**Date:** 2026-07-01
**Decision (D2 — Celebration cadence, FINALIZED):** A tiered "celebration ladder," proportional to the achievement so the payout stays the peak:
- **Start a topic** — brief, warm, NON-monetary "attaboy" (extra-warm the first time). Encouragement only, no money language.
- **Lesson (~40–60/topic)** — SILENT. Progress bar advances; no celebration (too frequent).
- **Session (~7–12/topic)** — modest micro-moment; surfaces distance-to-reward ("Session 3 of 8 — closer to $100"); halfway point gets a nod.
- **Topic completion** — the MAJOR celebration + payout hinge: health win → "$100 earned · 1 of 5 this year" → tee up next. First-ever completion gets an extra beat.
**Why:** Escalating loudness keeps completion the unmistakable peak; celebrating frequent lessons would cheapen the $100 and add friction. Finishing is the emotional high and the highest-momentum moment to hand off the next topic; a non-monetary start "attaboy" supports motivation without cheapening the money.
**Rejected:** Celebrating on start with points/monetary language (today's live screen — wrong moment, wrong currency); celebrating lessons (too frequent → noise); any tiny lesson-level acknowledgment (kept silent).
**Success signal:** High next-topic start rate right after completion; silent lessons don't depress mid-program completion; users read completion as clearly the biggest moment.

**Date:** 2026-07-01
**Decision (D4 — Multi-topic interest capture is a daisy-chain prerequisite):** Interest selection at onboarding is multi-topic and must capture **more than one** (target minimum 2–3). "Focus" is allowed only as a home *display* pattern (surface one clear next action) — never as a single-topic product commitment or single-select picker.
**Why:** The daisy chain needs a pool of topics to chain to; complete one → tee up the next only works if "the next" exists. EBB deliberately loads members with multiple DCPs across topics (up to 5 completions/year for the cap), so a single-topic model caps completions at one topic — actively anti-EBB. The home-redesign work already rejected page-level focus ("the composition lies," `outputs/may05-home-redesign-review/03-davinder-direction-update.md`) and already specced a multi-interest "Based on your interests" lane; onboarding survey is "select all that apply."
**Rejected:** Joe's single-topic "focus model" as a product/interest model (motivated by performance). Performance is a rendering problem — solved by single-hero image + lean sections + lazy-load — not by narrowing topics. Single-hero as a *display* pattern is kept (it's orthogonal, and matches D1).
**Success signal:** Members enter EBB with ≥2 topics of interest on file; the daisy chain always has a qualified next topic to surface after any completion.

**Date:** 2026-07-01
**Decision (D3 — EBB leads the rewards surface):** The $100 EBB completion reward is the headline of the rewards page and the home rewards module. Points, store credit, and raffles remain present but clearly secondary.
**Why:** Davinder: "EBB leads — this is going to be our bread and butter." A single, central, easy-to-understand reward ("finish a program, get $100") is far more motivating than a cluttered shelf of small reward types; burying it dilutes its pull. Aligns with the note to Darcy.
**Rejected:** Blending EBB in as one more equal reward type among points/store/raffles (loses its punch).
**Success signal:** EBB $ earned / cap progress is the first thing members see on the rewards surface; other categories still reachable but don't compete for the primary slot.

**Date:** 2026-07-02
**Decision (Completion screen — bottom treatment):** Bottom third = **Option A** — the recommended next path is a single tappable card that starts on tap (card = CTA); one quiet "Browse all care paths" link below; "close / not now" moved to a top-right ✕. Approved top unchanged (celebration → $100 → cap meter, with cap confirmed on-screen).
**Why:** Davinder — "A is the sharpest, keeps it simple." Collapsing the card + separate Start button into one tappable object is the biggest declutter and preserves D1's single-clear-next conviction. The prior layout (media card + three stacked buttons) read as muddled.
**Rejected:** Option B (compact row + explicit button — kept as calmer fallback); Option C (choose-your-next, lead + 1 alt — softened D1's one clear next; held unless testing shows users want choice here).
**Success signal:** Users tap through to the next path at a high rate from completion; the bottom reads as one clear action, not a button pile-up.

**Date:** 2026-07-02
**Decision (Topic page scope — loop-focused; data & resources subordinated, not featured):** The DCP topic page's single job is to advance the member to their next session. There is a standing push to add relevant data and resource links; for EBB these are **relocated/subordinated**, not featured on the topic page. Data lives on the tracker (with at most ONE topic-relevant insight on the page); resources/"learn more" live in-lesson and via Anna's Q&A, or a clearly secondary entry — never competing with Continue.
**Why (defensibility stack):** (1) Business — EBB bills on session completion and pays on topic completion, so every non-loop element competes with the one action that gets everyone paid. (2) UX laws — Von Restorff/Hick's (one dominant action), Cognitive Load/Miller's (a between-sessions glance can't hold loop + data + links), Nielsen #8 (the live page was already trimmed for perf; re-loading reverses that). (3) Research — the engagement–efficacy gap (more content ≠ better outcomes, can undermine them) + crowding-out (browsing "about your condition" reads as homework, dilutes momentum). (4) Strategy — a content-hub topic page is the old browse-everything model EBB deliberately moved away from (contradicts D1–D4).
**The test for any proposed addition:** "Does this help them start the next session?" If yes, it belongs; if it's nice-to-have-while-here, it goes to the tracker, the lesson, or Anna.
**Rejected:** Topic page as a data + resource hub (dilutes the primary action, engagement theater, reverts the strategy).
**Success signal:** Next-session start rate stays high; topic page reads as one clear action; data/resource additions land on the tracker/lesson/Anna without denting the loop.

**Date:** 2026-07-02
**Decision (Topic page data block = "How you're doing", assessment-based, PLAIN LANGUAGE):** The topic page's single data block is **"How you're doing"** — an assessment-based progress check-in that reflects the program's own periodic clinical measure. It is presented in **plain language with the clinical framing pulled back**: NO instrument name, scores, or clinical bands surfaced to the member — e.g., *"you've been feeling better since you started"* with a simple *"↗ trending up"* tag. The clinical assessment (PHQ-9, etc.) still runs and powers the signal **behind the scenes** for clinicians/reporting. It does NOT ask the member to log something new. Universal component label; condition-specific signal inside (feeling better / less pain / sleeping better). When an assessment is due, the block flips to a light one-tap check-in prompt.
**Why:** Davinder: liked assessment-based framing, then — "pull back the clinical framing; these are users, they don't know what PHQ-9 is." Reflecting real improvement builds competence (SDT — the lever that keeps behavior alive after the reward); a daily mood tracker would add homework and risk crowding out intrinsic motivation. Members read progress they *feel*, not a score they must decode (Nielsen #2 match-the-real-world; Don't Make Me Think). System bears the measurement (Tesler's).
**Rejected:** Surfacing the clinical instrument/scores/bands to members (v2 — "moderate → mild · PHQ-9 · 9"): too clinical, users don't recognize the instrument. "Mood this week" daily tracker (homework, doesn't generalize, crowding-out risk). A wall of raw metrics (cognitive load). Full self-tracking stays on the Tracker per the topic-page-scope decision.
**Success signal:** Members read the block as proof the program is working; no drop from added logging burden; component reused unchanged across DCP topics.

**Date:** 2026-07-02
**Decision ("How you're doing" must be evidence-based & state-aware — no hardcoded health claims):** The plain-language check-in ("you've been feeling better") is DERIVED from the DCP's own assessments (baseline at intake + periodic re-assessments; PHQ-9 for depression), comparing latest vs. baseline against a **clinically-defined improvement threshold**. The block is **state-aware**, never a fixed positive:
- **Improving** (latest beats baseline past threshold) → "you've been feeling better…" ↗
- **Too early** (only baseline, <2 data points) → no trend claim; point to the next check-in.
- **Flat / worse** → never "feeling better"; supportive + honest ("change takes time"), surface Anna/coach, and if the measure crosses a safety threshold route into the DCP's existing **crisis/escalation** path.
**Why:** Davinder — "how do we determine this?" Asserting improvement that isn't real breaks trust (Nielsen #1 accurate status) and is a clinical-claim/safety risk. The claim must be earned from the validated instrument; a worsening mental-health score is a safety event, not a UI variant.
**Rejected:** Hardcoded/optimistic copy regardless of data; claiming a trend from a single data point.
**Dependencies (needs clinical sign-off):** the score-delta→plain-language thresholds, the copy for each state, and the flat/worse escalation trigger. Applies broadly — anywhere the product implies health improvement (incl. the completion celebration) must be defensible against the actual measure.
**Success signal:** Members only ever see an improvement claim when the assessment supports it; worsening trends reliably route to support, not cheerful copy.

**Date:** 2026-07-02
**Decision ("How you're doing" — charter: outcome feedback as measurement-based care):** The block's job is to reflect **outcome / efficacy** ("is it working?") — distinct from progress ("am I getting through it?"). It is the member-facing surface of **measurement-based care / feedback-informed treatment**, and part of what makes a DCP a *therapeutic* rather than a *wellness feature* (DTx-experts: Coder/DTA, Torous, Mohr).
- **Keep it only if we act on the signal** — a real validated assessment fed back, with a response. No decorative "you're doing great!" positivity; if we won't act on it, cut it.
- **Good/bad = clinically-defined thresholds** (reliable change / MCID), clinician-owned — not arbitrary or copywriter-set.
- **Show "bad" — yes, but as a supportive doorway, never a verdict/number:** non-response surfaces Anna/a coach (human-in-the-loop, Omada/Duffy), and past a safety threshold routes to the existing crisis flow. Non-response is the *most* clinically valuable signal (catches attrition/deterioration early — Eysenbach).
- **Value to the user:** motivation that outlasts the $100 (crowding-out antidote); being seen (SDT relatedness / human-in-the-loop); self-insight; early help when it's not working.
**Why:** Davinder was stuck on the block's purpose. The DCP-expert layer elevates it from a motivation widget to a clinical practice — which both justifies it and sets the bar (act on it, or drop it).
**Rejected:** Decorative/always-positive outcome copy (dishonest, no clinical value, erodes trust — Nielsen #1); showing a raw "bad" score/verdict (harmful, esp. in depression).
**Open sub-question:** always-on fixture vs. **event-driven** (appears at check-in checkpoints/milestones). Lean event-driven — most of the time there's no new signal, and "too early" would otherwise dominate.

**Date:** 2026-07-05
**Update (Darcy meeting — EBB scope confirmations & changes):** Source: `outputs/jul05-ebb-meeting-notes/ebb-meeting-notes.md`.

*Confirmed:*
- Reward = **$100 Amazon gift card** on DCP completion (not HSA, not choice-based).
- Billing per completed **session**; user receives the **$100 at full program completion**; **~50% completion** required before the $100 is guaranteed.
- Cap: **$500/year per user** is the *recommended* best-practice config (tied to risk categories). **System default = no cap, no risk requirement.** So "$500 / 5 paths" in our designs is a representative config, not hardwired.
- **14 of 15 DCPs** eligible; **Pregnancy excluded** (no cost-savings fit).
- Lighthouse: **Alight House — go-live Sept 1**, testing in August. Waystar contract signed.

*Changes:*
- **Home page is OUT OF SCOPE for 9/1** — current layout (hero banners + "Just For You") stays as-is. → the "Home EBB variant" screen is deprioritized for launch; EBB surfacing on home for 9/1 rides the existing hero-banner + Just-For-You mechanisms.
- **Enrollment funnel is multi-touchpoint & assessment-driven:** surface EBB eligibility **post-health-assessment, post-wellbeing-assessment, and mid-DCP**, framed *"Based on what we know about you, you may qualify to earn $100."* Introduces an **enrollment daisy-chain** (assessment → DCP recommendation → EBB enrollment) — DISTINCT from our completion daisy-chain (complete DCP → next DCP). Two different "daisy chains" now; keep them named apart.
- **Risk stratification** = a new *configurable* eligibility input (health-risk model / health-assessment / DCP initial assessment). Internal debate: Jill (cap alone suffices) · Steve (market expects risk strat) · John (default = no risk flag).

*New flags / still open:*
- **Naming:** Darcy's notes say "**Episode**-Based Billing"; our source docs say "**Engagement**-Based Billing." Confirm the canonical name.
- **Data architecture:** assessment data can't pre-populate DCP lessons; no cross-session/cross-product memory today → limits the "based on what we know about you" personalization near-term (not a 9/1 fix).
- **Focus vs. at-risk tension** (Davinder flagged): the at-risk/assessment-driven recommendation model sits alongside declared interests (D4) — to revisit.

*Impact on built work:* core loop (completion, topic, rewards) holds — copy can now specify "$100 Amazon gift card." Get-In flow + experience map need revision (home out of scope, assessment entry points, at-risk model, dual funnel).

**Date:** 2026-07-05
**Update (Health Assessment documented — feeds EBB risk stratification & the $300 → $100 handoff):** Assessment now fully specified in `reference/health-assessment/` (composition + efficacy) and reviewed in Figma ("Assessment" file).
- **Structure (corrected):** NCQA-certified HRA, **~50–64 questions across 7 sections** (Wellbeing 14 · Biometrics 12 · Basic Info 4 · Medical History 9 · Nicotine 5 · Respiratory 3 · Conditions 17), ~5 min. Validated instruments: GAD-7, PHQ-9, ISI, COPD-PS, Framingham, Gail. (Darcy's "12 questions / 5 pillars" was a simplification.)
- **Output = predictive disease-risk scores**, shown as a **Health Risk results** screen (per-condition badges: Normal / Low risk / At risk).
- **Risk-stratification source (resolves an open Q):** EBB eligibility / risk stratification can use **the assessment's Health Risk results** (one of Darcy's three candidate sources). "At risk for X" → recommend the matching DCP → EBB eligibility. Clinically grounded, already built.
- **The $300 hook (key design goal):** completing the assessment pays a large incentive (~$300, per Davinder); the assessment is the **first card on home**. **Piggyback EBB on that $300 payday** — ride the completion excitement straight into "based on your results, you're at risk for X → the [DCP] can help → earn $100 more." The enrollment daisy-chain now has a real, high-momentum launchpad.
- **Framing nuance:** $300 (for *knowing* your health) and $100/path (for *doing* something about it) are different rewards — frame as additive escalation so the $100 doesn't feel small next to $300.
**Impact:** enrollment-flow storyboard (jul05) Steps 2–3 are now grounded in the real assessment + risk-driven recommendation (not placeholders) → revise to v2.
**Open:** confirm exactly where the $300 is surfaced (home card + a completion screen — not seen on the intro/results frames pulled); biometric inputs (BP/cholesterol/glucose) are friction unless the client imports biometric data.

**Date:** 2026-07-05
**Decision (EBB is assessment-agnostic — dual on-ramp; assessment = accelerant, not prerequisite):** EBB must work **with or without** the incentivized health assessment. Two on-ramps converge on the same opt-in → loop:
- **Assessment-driven** (best, when present): assessment → risk results → recommendation; hooked by the **$300** payday; recommendation grounded in clinical risk.
- **Interest / browse-driven** (baseline, always available): declared interests (D4) or self-select from the DCP list; motivated by the **$100** itself.
Downstream (opt-in → do the path → $100 → tee up next) is **identical** for both.
**Why:** the $300 assessment is client-funded (not all clients fund it); users skip assessments (biometric friction); existing users have no fresh $300 moment; Darcy's goal is the *widest funnel* with risk default OFF. Coupling EBB to the assessment is a dependency risk that narrows the funnel and would block clients without the $300. Assessment-agnostic also de-risks 9/1 (EBB doesn't wait on assessment readiness/funding).
**Rejected:** Assessment-first as the *only* path (dependency risk; narrows funnel; fails no-$300 clients and skippers).
**Tradeoff:** without the $300 hook the $100 carries motivation alone and recommendations are weaker (interests, not risk) — acceptable; leans harder on the surfacing kit + easy browse.
**Success signal:** meaningful EBB enrollment via the interest/browse path even without the assessment; no-$300 clients can still run EBB.

**Date:** 2026-07-07
**Decision (Pace over speed — SURFACE framing, aligned to the already-locked pacing engine):** The pacing *mechanics* are already solved and locked — `EBB_Specification.md` §11.5 "Session pacing — availability gate (locked)": session N+1 unlocks only when session N is complete AND ≥7 days have passed since session N's START; the walkthrough decision is **1 session/week** (hard-stop norm + auditable override). The gate "prevents going too FAST"; the ~1-yr completion clock catches "too SLOW." **This decision governs the SURFACE only:** the all-topics/topic cards must not gamify velocity — carry a **cadence** caption ("Session 6 · 3 weeks in"), not "N sessions to your reward"; keep the **$100 in the rewards banner, off cards.** The engine stops bingeing; the copy must stop *encouraging* it.
**Why:** The current live cards ("N sessions to your reward," racing bars, "on track") contradict §11.5's philosophy. Behavioral observation (Davinder): members who race a path chase the money and don't get the clinical benefit; those who pace themselves do — consistent with the documented **Engagement–Efficacy Gap** (`engagement-loop-best-practices.md`: maximizing engagement can undermine efficacy) and the anti-farming rationale (spec: the pacing gate "structurally prevents racing content for the reward"). Removing the per-card money line also declutters (one fix, both goals). Goal-gradient still applies near the *true* finish; the real progress signal is outcome ("How you're doing"), not sessions-remaining.
**Rejected:** Velocity-gamified card copy (contradicts the locked gate; trains rushing; doubles the money message).
**Correction (reconciled 2026-07-07):** an earlier draft called throttling an open "2–3/week" question — stale; spec §11.5 / walkthrough LOCK it at 1/week. `_brief.md` open-questions updated to reflect the decision.
**Open:** cadence copy per program length.
**Success signal:** completion *quality* (paced adherence, outcome improvement) holds or rises; card copy no longer implies "finish fast to get paid."
**Parent principle:** governed by the *Efficacy guardrail* below.

**Date:** 2026-07-07
**Principle (Efficacy guardrail — the redesign must not regress outcomes; optimize for efficacy, pace not speed):** The overriding constraint on all EBB design: **clinical efficacy must not get worse.** Engagement is a means to outcomes, never the end. **Gamification is subordinate to efficacy** — a mechanic that lifts engagement but risks outcomes is rejected. This principle outranks short-term engagement wins and sits above the individual surface decisions (Pace over speed, celebration ladder, topic-page scope), which are instances of it.
**Why:** Jill's caution — adding gamification for engagement's sake can backfire. Documented **Engagement–Efficacy Gap** (`engagement-loop-best-practices.md`): more usage ≠ better outcomes; maximizing engagement can undermine efficacy. Observed (Davinder): members who **race** a path chase the $100 and get little clinical benefit; members who **pace** themselves are the ones who improve. Under EBB the temptation to over-gamify is *structural* (completion = revenue), which is exactly why the guardrail must be explicit, not assumed.
**How it applies:** reward consistency/quality over velocity (mechanics locked by the §11.5 one-session/week pacing gate; surface framing per *Pace over speed*); measure success by **outcomes holding/improving vs. the pre-EBB baseline**, not engagement or speed; **state it in every shared artifact** (brief guardrail, hub, this log).
**Rejected:** engagement-maximizing gamification that trades outcomes for activity; velocity-based reward framing; treating engagement metrics as the success measure.
**Success signal:** post-launch efficacy metrics hold or improve vs. baseline; no efficacy regression attributable to reward/gamification mechanics.

**Date:** 2026-07-07
**Decision (The 50% / "halfway" rule is INTERNAL-only — never surfaced to the member):** The ~50%-completion threshold is a back-end eligibility mechanism (who qualifies for the $100, when it's guaranteed, how existing customers are handled when EBB turns on). It is **not** a user-facing concept. No UI may show a "halfway," "50%," or "reward-eligible at the midpoint" marker (e.g., no halfway node on a progress ring/track, no "halfway locks in your $100" copy).
**Why:** Davinder — the halfway mark determines internal qualification/reward logic; communicating it to the member is confusing and off-message (they should focus on the health work + finishing, not a bureaucratic threshold). Member-facing reward framing stays simple: "$100 when you complete."
**Rejected:** Progress-card / ring designs that placed a halfway/50% milestone marker in the UI (dropped from the ring-variation set).
**Applies to:** topic-page progress card, DCP-list reward banner (milestone-dot "Halfway" label → reframe or remove), any progress visualization. The DCP-list milestone track can keep Start/Complete but must not label a member-facing "50% earns" point.
**Success signal:** members see progress + a simple completion-reward message; the 50% logic lives only in eligibility/billing.

**Date:** 2026-07-08
**Decision (Retire the daily mood logger; the topic-page bottom third = the outcome + check-in zone):** The bottom third of the DCP topic page is one **adaptive slot** for measurement-based care: **collect** the DCP's periodic clinical instrument (check-in-due → one-tap prompt) and **reflect** its trajectory ("How you're doing": improving / too early / needs support), routing to coach/crisis on a bad signal. The v1 **"Your mood this week · Log today" daily logger is removed.** Full rationale + the cross-DCP measurement model in `how-youre-doing-model.md`.
**What we track:** the DCP's own validated outcome instrument (PHQ-9 depression, GAD-7 anxiety, ISI insomnia, pain 0–10 + function MSK, HbA1c/glucose diabetes) at baseline + periodic checkpoints — **not** daily mood. One universal component, condition-specific signal inside, normalized to a plain-language direction line (never the score/instrument name).
**Why:** the daily logger is homework, risks crowding out intrinsic motivation, duplicates the real measure with a weaker one, and isn't actionable. The clinical instrument is the meaningful, actionable signal — proof of efficacy (motivation past the $100), being seen, early help/safety, and it generates the outcome record the DCP is judged on. Keep it only because we *act* on the signal (coach + crisis routing).
**Rejected:** daily mood logger (v1); a content-hub bottom third (reverts topic-page-scope decision).
**Open (clinical sign-off):** delta→plain-language thresholds per instrument; check-in cadence; flat/worse→crisis trigger.
**Success signal:** members read the block as proof it's working; check-ins feed real outcome deltas; no added daily burden.

**Date:** 2026-07-09
**Decision (One progress & reward data model — every surface derives from the same fields):** All DCP surfaces (list, topic page, All Sessions, Overview, "Your care this year" banner) show numbers derived from shared fields — M=sessionsTotal (canonical per DCP, from feature-dcp brief), N=sessionsDone, completedPaths, earned=completedPaths×$100 (cap $500/yr = 5 paths). No ad-hoc per-screen numbers. Ring/bar = N of M (done of total); resume hero = "Session N+1"; banner earned = completed×100 (so 2 completed = $200). Full spec in `progress-reward-data-model.md`.
**Why:** current mocks contradict each other — Insomnia shown as 7 and 8; Depression "of 7" but is a 10-session program; care banner "1 completed · $200 earned" (impossible). Numbers must reconcile for a credible, shippable design.
**Corrections:** Insomnia = **8** sessions everywhere (topic "of 8", All Sessions "all 8"); Depression = **10** ("of 10"); care banner counts must reconcile with earned.
**Open:** flat-sessions vs module→session taxonomy (All Sessions page conflates them — lean flat); ring convention N-done-of-M vs current-session-index (this model assumes N-done).
**Success signal:** the same path shows the same numbers on every screen; earned always = completed × $100.

**Date:** 2026-07-10
**Decision (Digital Care list = re-entry to in-progress work, not a marketplace):** The second-tab library leads with **in-progress paths + the reward summary (resume-first)**; browsing the full catalog stays available but de-emphasized. The list's job is getting members **back in** to a path they're already on, not high-level shopping. Reward shown as progress/accent ("how many done · toward $500"), never a flashing headline.
**Why:** an unfinished path is an open loop (Zeigarnik) and pulls harder the closer it is to done (Goal-Gradient); leading with it converts intent to a tap, and fewer top-of-page choices speed re-entry (Hick's). Completion is what we optimize — clinically and commercially. Per IA, high-level discovery lives at the front door, not the library.
**Rejected:** discovery-first / catalog-marketplace treatment; browse weighted equal to resume. **Risk named:** path-hopping (start many, finish none) — worst case on both axes (efficacy regresses AND no completion/reward/revenue). The daisy chain requires the list to keep pointing at the one path to finish next.
**Success signal:** members re-enter an in-progress path from the list rather than browsing away; completion rate holds/improves.

**Date:** 2026-07-10
**Decision (Topic home module order + data/resources treatment):** The topic (program) page commits to one job — get the member to the **next action**. Module order: **(1) continue/next-step card = single primary CTA** (top), **(2) progress** (middle, pace-not-speed framing), **(3) sessions timeline** (bottom — de-prioritized as navigation but rendered as a richer where-you-were/are/going visual). The earlier top card offered two co-equal buttons (next step + all sessions); we removed the fork and prioritized **resume the next session**. **Data and resources are removed** from this version to protect focus; if reinstated they must be **minimized** (data as a compact strip, possibly top; resources as a simple link), never co-equal modules.
**Why:** two top CTAs force a decision before any action (Hick's); one large primary CTA is faster (Fitts) and matches highest-probability intent (Goal-Gradient). Demoting "all sessions" to a bottom timeline removes competition with the CTA while keeping orientation + user freedom (Zeigarnik, Nielsen). Data is **evidence not clutter** (feedback-informed treatment — seeing improvement is the strongest non-monetary motivator), so the tension is placement/size, not presence — resolved via progressive disclosure (loud next action; quieter, on-demand data/sessions).
**Rejected:** content-hub topic page (data + resources + articles as co-equal modules); two competing top CTAs; session list as primary navigation.
**Success signal:** members reach the next session in one tap; page reads as "about the program," not a dashboard; if data returns it doesn't reduce next-action tap-through.
**Full narrative:** `outputs/jul10-ebb-page-rationale/topic-list-and-home-rationale.html`.

<!-- Add entries above this line -->
