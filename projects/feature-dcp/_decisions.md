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

**Date:** 2026-06-16
**Decision:** Anna's lecture is delivered as a **full-screen, portrait "call"-style video, launched from a poster tile** on the lesson page — replacing the inline 16:9 player + Watch/Read toggle. Captions overlay the video; the read-along transcript is a pull-up sheet (mobile) / side rail (desktop). Completion is **implicit** (auto at ~90% watched) or **explicit** ("Mark complete"); the chat is **not hard-gated** on completion — a **soft "unlock" moment** celebrates completion and elevates the Chat-with-Anna CTA. Desktop renders the portrait video as a centered "call window," not full-bleed.
**Why:** Matches the "talk with Anna like a call" product intent and the dominant mobile grammar for talking-head / AI presenters (Reels/Shorts, Duolingo Max "Video Call," HeyGen/Synthesia/Tavus default 9:16). Collapses Watch/Read into one page (matches the existing production lesson pattern) and unifies the lecture with the future live video-call into one portrait presentation.
**Open production calls (owners):** (a) render **native 9:16 portrait** for the 634 lectures *(recommended)* vs center-crop the existing 16:9 *(demo bridge only; the crop runs tight on a centered head-and-shoulders)* — AY/production; (b) **pure talking-head vs needs-visuals** — portrait full-screen is ideal for talking-head but poor when a diagram or MSK movement must sit beside Anna → per-topic call with AY; (c) completion threshold (~90%) — product/clinical.
**Rejected:** inline 16:9 + Watch/Read toggle (superseded — wireframes A/B/C, F/G); two separate render libraries (16:9 + 9:16) — maintenance trap across 634 lectures.
**Canonical artifacts:** wireframes **H/I/J** (poster → full-screen portrait → unlock). Chat remains ungated (consistent with the PRD).
**Success signal:** higher lecture watch-through and post-lecture chat rates; the "call" framing tests well in the sales demo.

---

**Date:** 2026-06-15
**Decision:** ANNA (video lecture + chat) is scoped **strictly to the lesson level** for v1 — the chat is launched only from inside a lesson/step, matching the June-30 PRD ("chat button on the step detail view"). No topic-level, session-level, or standalone "Talk to Anna" entry. Consequence: the topic home is rebuilt as a program dashboard (next action → progress → outcome metric → stage-relevant suggestions) rather than an Anna entry point (see wireframe E2).
**Why:** Aligns the design with what actually ships June 30 (cuts divergence/rework); keeps persona identity simple (always lesson-contextual, so the "Health Advisor" cold-open fallback is rarely hit); makes spend predictable (the lesson *is* the high-value moment the per-invocation cost constraint asked us to reserve for); ships the spine faster. Continuing the lesson is now also the only on-ramp to Anna.
**Assumptions:** Anna is reachable only in-lesson; every chat is lesson-scoped (context = this lesson); identity resolves in-context; "how's my whole program going" lives in the topic-home UI, not in chat; lesson-anchored chat is enough to drive lesson/program completion without an always-on coach; lesson-gating + token quotas keep cost predictable.
**Rejected (deferred, not deleted):** Topic-level standalone "Talk to Anna"; the 3am cold-open "chat without watching a lesson first" (North Star line 44); session-level entry (no doc support); notification deep-link into a standalone Anna. The 3am story is out of scope for v1 → Darcy/Alex own it.
**Conflict flagged:** This contradicts the current sales pitch (Anna as "Immediate Access · Available 24×7×365" live video coach). The sell-vs-build gap and the live-video-call mode are a **leadership call (Alex/Darcy)**, not a design one — sales to thread the needle.
**Success signal:** Lesson-anchored chat still correlates with more lessons/programs completed and same-or-better outcomes, without an always-available coach; spend stays within quotas.

---

**Date:** 2026-07-13
**Decision:** The **circular progress ring is the standardized progress primitive across the DCP suite** ("ring everywhere") — replacing the linear bar for the "sessions complete" metric on every DCP surface (program detail, list, catalog tiles, completion). Implemented as a shared, token-driven SVG component (`.pring`) in the suite foundation `outputs/jul13-dcp-suite-kit/mhc-base.css`; ring fill uses the graphite `--progress-fill` (not navy) so it never competes with the primary navy CTA. Reward stays a graphite accent ("$100 when you complete"), never an amber/gold banner. Zero-state framing adopted: "Ready when you are · at your own pace."
**Why:** A design review surfaced two progress languages for one metric (linear bar on the in-progress detail vs. a ring on a not-started mock) — a Similarity/Consistency break (Nielsen #4, Jakob's) for a suite that must feel like one system. Davinder chose to standardize on the ring as the single, more expressive primitive. Graphite fill preserves the pace-not-speed guardrail (progress is not a payout meter) and the 10% navy accent budget. "At your own pace" reinforces the efficacy guardrail; an empty linear bar at zero reads as "nothing," which the ring's "0 of N · Ready when you are" reframes positively.
**Consequence / follow-up:** **Home v81 must migrate its program cards from the linear `.progress` bar to the ring** to stay consistent — flagged, not yet done. The legacy `.progress` bar is retained in `mhc-base.css` (marked LEGACY) only until that migration.
**Rejected:** (a) *Linear bar everywhere* — most consistent with today's home, but the less-expressive option and the one Davinder declined. (b) *Dual system (ring for focal, bar for cards)* — two shapes to govern invites drift. (c) *Amber/gold reward banner* (from the not-started mock) — violates locked guardrails: warm tones = backgrounds only, ink stays graphite/navy never brown, and reward = accent not headline.
**Canonical artifacts:** `outputs/jul13-dcp-program-detail/dcp-program-detail-v2-depression.html` (first surface on the ring); `.pring` in `outputs/jul13-dcp-suite-kit/mhc-base.css`.
**Success signal:** All five DCP surfaces (and eventually home) read as one system; progress is instantly recognizable across surfaces; money never dominates a clinical surface.

<!-- Add entries above this line -->
