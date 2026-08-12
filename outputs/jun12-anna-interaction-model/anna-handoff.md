# ANNA — Product Handoff

**Owner:** Davinder Rehal · **Date:** 2026-06-16 · **Status:** For review with Darcy
**Audience:** Darcy (Head of Product); shareable to Alex, Jill, clinical
**What this is:** the single entry point to the ANNA interaction work — the v1 scope, the model, the artifacts, and the decisions that need a product call.

---

## TL;DR
ANNA is **one persona, two modes** — a pre-rendered video lecturer and a text chat advisor — layered onto the DCP experience on top of the chat shipping June 30. We've scoped **v1 strictly to the lesson level**: Anna is launched only from inside a lesson. The interaction model, the lesson workspace (Watch/Read/Chat), captions/transcript, the lecture-end handoff, and a rebuilt topic-home dashboard are designed and spec'd with Jira-ready acceptance criteria. **One strategic gap needs you:** what's being *pitched* (a live, 24×7 video-call coach) is a different, later, costlier product than what's *scheduled*.

---

## ⭐ Decisions I need from Darcy (the meeting agenda)

Each is framed: context → my recommendation → the call I need.

**1. The sell-vs-build gap — the headline.**
The Alight pitch shows Anna as a live, "Immediate Access · 24×7×365" **video-call coach**. What's scheduled: **text chat (Jun 30)** → **pre-rendered lectures + text (~Oct)**. The live video call is unscheduled and the costliest mode.
→ *Recommendation:* treat live video as **roadmap direction, not a v1 client commitment**; align sales on what we put in writing to Alight vs what we demo as vision.
→ **Decision:** what do we actually commit to Alight, and who owns reconciling the demo narrative with the roadmap?

**2. The 3am story / topic-level entry.**
v1 is lesson-level only, so Anna can't be opened "cold" — but "can't sleep at 3am" is the demo's signature moment. It has no home in a lesson-only build.
→ *Recommendation:* keep 3am as **demo/vision**; commit the topic-level standalone "Talk to Anna" as a **documented fast-follow**, not v1.
→ **Decision:** demo-only, fast-follow (with a date), or pull into v1?

**3. Cross-session memory.**
The June-30 chat remembers only within a session. Cross-session memory ("last time you mentioned…") is what makes Anna feel like a real coach — and it's an engagement/outcomes lever. PRD holds it at v2.
→ *Recommendation:* ship v1 within-session, **architect so it toggles on without rework**, fund it as the **first fast-follow**.
→ **Decision:** hold at v2, or resource it as a Rev1 fast-follow?

**4. The live video-call mode + its cost owner.**
It's the pitch. Per-invocation video cost is the original hard constraint; there's no date and no cost model.
→ *Recommendation:* put it on the roadmap as a **budget-gated, high-value-moment** capability; assign a **cost-model owner before any client commitment**.
→ **Decision:** is it on the roadmap, and who owns the cost model?

**Dependencies I'm already routing (FYI, not your call):**
- **Per-user persona identity** — the chat must resolve Anna/Nathan per *user*, not statically per topic; raising with **Alex/Jill** (data model). This is the one hard build dependency.
- **Outcome metric per condition** — which metric the topic-home dashboard shows (sleep for insomnia, etc.); needs **clinical/content** input.

---

## What ANNA is, and the staircase
One persona, surfaced as the product matures:

| Mode | What it is | Status |
|---|---|---|
| Text chat | SMS-style, lesson-scoped, quota-capped | **Ships Jun 30** |
| Video lecturer | Pre-rendered lessons + text Q&A | **~Oct target** |
| Live video coach | Two-way real-time call (the pitch) | **Roadmap — needs date + cost model** |

Pre-rendered lectures play free; the cost lever is content re-rendering, not per-play. The per-invocation cost constraint applies to the **live-call** mode only.

## What's decided for v1 (lesson-level)
- Anna is launched **only from inside a lesson/step** (matches the June-30 PRD).
- No topic-level, session-level, or standalone entry → **deferred, not deleted**.
- Consequence: the **topic home is rebuilt as a program dashboard** (next action → progress → outcome metric → suggestions), since Anna no longer lives there. "Continue" is now the on-ramp to Anna.
- Rationale + full assumptions: `feature-dcp/_decisions.md` (2026-06-16 entry).

## The interaction model (summary) — portrait "call" model
- **Lesson page:** one scrollable page — a video **poster tile** + the article text + chat, no Watch/Read toggle.
- **Lecture:** tapping the poster opens Anna **full-screen, portrait — like a call** (the dominant talking-head/AI-presenter grammar; matches the "talk with Anna" intent). Desktop = centered portrait **"call window."** **CC captions** (on by default) + **read-along transcript** (pull-up sheet on mobile, side rail on desktop, tap-to-seek). Screen-off audio.
- **Completion & chat:** completion = watch ~90% **or** explicit "Mark complete." **Chat is never gated** on completion; completion triggers a **soft "unlock" moment** that celebrates + elevates the Chat CTA (end card: Chat · Continue · Replay).
- **Chat:** reuses the shipped June-30 pipeline (safety/RAG/quotas intact); only persona identity is added. **Sheet on mobile, docked side-panel on desktop.**
- Production calls flagged for AY: **render native 9:16** (not dual libraries); **pure talking-head vs needs-visuals (MSK)** per topic.
- Full detail: interaction-logic spec + Acceptance Criteria + Interaction Map (below).

## Artifacts — where everything lives

**Figma — file *Health Advisor AI (Video)*, page *ANNA Wireframes*:**
- **Canonical lesson model: H (poster launch) · I (full-screen portrait) · J (complete → chat unlock)** + **D (Chat with Anna)**
- Superseded (kept for history): A (Watch 16:9) · B (Read) · C (Lecture-end) · F/G (single-page toggle)
- Topic home dashboard: **E2** (E = prior version, kept)
- **ANNA · Interaction Map** — every state + transition, deferred items greyed
- **01 DTX org** — annotated structure diagram (ANNA notes + divergences)
- **01 DTX Sections** — DTX flow set updated for ANNA (deferred entries badged)

**Docs (`outputs/jun12-anna-interaction-model/`):**
- `anna-interaction-logic-spec.md` — the full-experience model (vision; topic-level shown as the North Star target)
- `anna-acceptance-criteria.md` — **the authoritative v1 (lesson-level) scope**, Jira-ready, tagged `[CORE]`/`[v2]`/`[DEFERRED]`
- `feature-dcp/_decisions.md` — the lesson-level decision + assumptions

> Note for readers: where the spec (vision) and the AC (v1 scope) differ on placement, **the AC + decisions log are authoritative for what we build now.**

## Deferred / v2 (re-openable)
- `[DEFERRED]` topic-level standalone entry; 3am cold-open; session-level entry; notification deep-link into Anna.
- `[v2]` live video/audio call; cross-session memory; profile-level persona change; client-chosen personas.
