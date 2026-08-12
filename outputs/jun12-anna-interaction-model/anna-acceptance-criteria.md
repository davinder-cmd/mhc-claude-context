# ANNA — Acceptance Criteria (v1, lesson-level · portrait "call" model)

**For:** Engineering handoff · QA
**Status:** Draft for review · updated 2026-06-16 · Davinder Rehal
**Scope:** ANNA Rev1, **strictly lesson-level**, lecture delivered as a **full-screen portrait "call"** launched from a poster (see `feature-dcp/_decisions.md`, 2026-06-15 + 2026-06-16). Builds on the June-30 chat (Alex Young PRD). Visual reference: ANNA Wireframes page — **canonical frames H · I · J** (poster → full-screen portrait → unlock); D (chat); E2 (topic home). A/B/C and F/G are superseded.

**Tag legend:** `[CORE]` = in v1 · `[v2]` = later · `[DEFERRED]` = post-v1, re-openable · `[DECISION]` = needs a named owner before build.

**One-line scope:** Anna is launched **only from inside a lesson/step**. The lecture opens **full-screen, portrait**, like a call. There is no topic-/session-level or standalone entry in v1.

---

## EPIC 1 — Lesson page (poster launch) `[CORE]`

**Story 1.1 — Single page, no Watch/Read toggle**
- [ ] A lecture-eligible lesson is **one scrollable page**: a video **poster tile** + title + "X min lecture · Y min read" + key points + the article text. No Watch/Read mode toggle.
- [ ] The **poster tile** shows Anna, a play affordance, "Watch with Anna · [duration]," and a hint that it opens full screen.
- [ ] Tapping the poster opens the **full-screen portrait player** (Epic 2).
- [ ] Non-lecture-eligible modules (assessment, track, evaluate, pure form/UI) show no poster — existing UX unchanged.

**Story 1.2 — Reading + chat on the same page**
- [ ] The article text (existing content) is readable inline by scrolling — reading needs no mode switch.
- [ ] A persistent **"Ask Anna"** affordance is available on the page (soft — not gated; Epic 6).
- [ ] A **"Mark complete"** control is available for the read path (Epic 6).

---

## EPIC 2 — Anna lecture: full-screen portrait player `[CORE]`

**Story 2.1 — Player**
- [ ] Tapping the poster opens a **full-screen, portrait** player (mobile) — immersive, "call"-style chrome: close (X) + lesson title + CC toggle up top; minimal controls.
- [ ] Controls: play / pause / scrub; time elapsed/total.
- [ ] Screen-off / background audio continues.
- [ ] Reaching the end → completion + unlock state (Epic 6).
- [ ] No mid-lecture Q&A (one-way); `Ask Anna` is reachable from the player chrome.

**Story 2.2 — Source / orientation** `[DECISION — AY/production]`
- [ ] Lecture is a **pre-rendered** asset (no per-play generation cost).
- [ ] **Render native 9:16 portrait** for production (recommended). *Center-cropping the existing 16:9 is a demo bridge only — the crop runs tight on a centered head-and-shoulders.* **Do not** maintain two render libraries (16:9 + 9:16).
- [ ] Player supports inline media cut-ins (MSK movement clips). `[DECISION — AY]` **Pure talking-head topics → portrait full-screen. Topics needing on-screen visuals/movement beside Anna → portrait fights this; decide per topic (dock visuals below, or a landscape exception).**

**Story 2.3 — Desktop**
- [ ] On desktop the portrait video opens as a **centered "call window"** (Meet/Zoom 1:1 style), not full-bleed; not a landscape inline player.

---

## EPIC 3 — Captions & transcript `[CORE]`
- [ ] **CC captions** overlay the video; **on by default**; sourced from the lecture script; WCAG 2.1 AA.
- [ ] **Read-along transcript**: a **pull-up sheet** over the portrait player on mobile; a **side rail** on desktop. Auto-scrolls + highlights the current line; tap a line to seek.
- [ ] Transcript = the spoken lecture script (distinct from the page's article text).

---

## EPIC 4 — Read / article `[CORE]`
- [ ] The existing long-form article renders on the lesson page (no content change).
- [ ] "Listen with Anna" audio is available (Anna audio replaces the legacy "listen" mode).

---

## EPIC 5 — Persona selection & identity `[CORE]`
- [ ] At the **first lecture-eligible lesson**, the user picks Anna · Nathan · Text-only; smart-defaulted after, **no re-prompt**; low-emphasis switch on the lesson.
- [ ] Persona change in Profile/Settings. `[v2]`
- [ ] Persona preference is **global per user**; coach/KB swaps **per topic**.
- [ ] Chat identity resolves to the lesson's persona (sets/refreshes preference).
- [ ] **`[DECISION — Alex/Jill]` Per-user persona identity:** the chat must resolve `botName`/`botAvatarUrl` per *user*, not statically per topic (June-30 config is per-topic static). **The one hard build dependency.**

---

## EPIC 6 — Completion & unlock `[CORE]`
- [ ] **Completion is not required to chat** — `Ask Anna` is reachable throughout (consistent with the PRD; chat is shown whenever enabled + within quota). **No hard gate.**
- [ ] **Mark complete** fires by **either**: watching to ~90%, **or** an explicit "Mark complete" tap (whichever first). `[DECISION — product/clinical: confirm ~90% threshold]`
- [ ] **Always log actual watch-through %** separately from "marked complete," so a low-watch completion is visible in analytics and does not inflate efficacy reporting.
- [ ] On completion, a **soft "unlock" moment** appears (full-screen end card in the player, or on the page): "✓ Lesson complete · Chat with Anna" → `Chat with Anna` (primary) · `Continue to next lesson` · `Replay`. This **celebrates and elevates** the chat; it does not unlock a previously-locked capability.
- [ ] `Continue` is the only action that navigates to the next lesson/module.

---

## EPIC 7 — Chat (reuse June-30 pipeline, reskinned) `[CORE]`
- [ ] Chat uses the **shipped June-30 pipeline** (router → coach → safety; RAG on topic KB; SMS-style 1–3 bubbles ≤150 tokens; typing indicator; thumbs up/down). Only persona identity is added (Epic 5).
- [ ] Greeting is persona-aware; post-lecture it references the lesson just watched.
- [ ] From chat the user can re-open the lecture and return — bidirectional; chat state preserved.
- [ ] Privacy & Terms → modal → back. Close/Done returns to the lesson.
- [ ] **Memory:** within-session (June-30 parity). Cross-session is the target — architect so it toggles on without rework. `[v2]`
- [ ] **System/edge states (inherited):** crisis → Safety Agent; jailbreak → Refusal; maxTurns (100) → new-chat; daily/client quota → graceful disable with PRD copy.

---

## EPIC 8 — Platform behavior `[CORE]`
- [ ] **Mobile:** lesson is a page; the **lecture is a full-screen portrait takeover** launched from the poster; chat overlay = **bottom sheet**.
- [ ] **Desktop:** lesson is a page/route; the **lecture is a centered portrait "call window"**; chat = **docked right side-panel** (lesson stays visible).
- [ ] `[CORE]` Video-player parity verified across all 3 platforms — incl. full-screen/portrait, captions, transcript sheet (the North Star line-79 "evaluate the video player on all 3 platforms" task).

---

## EPIC 9 — Topic home = program dashboard `[CORE]` (wireframe E2)
- [ ] Renders, in order: **Next action** (next lesson + est. time + Continue/All Sessions) → **Progress** → **Outcome metric** → **stage-relevant Suggestions** ("Recommended this week").
- [ ] **No** "Talk to Anna" entry (Anna is lesson-level). `Continue` is the on-ramp.
- [ ] Outcome card shows only when the topic has a clean outcome metric. `[DECISION — clinical/content: which metric per topic]`

---

## Out of scope / deferred
- `[DEFERRED]` topic-level standalone "Talk to Anna"; 3am cold-open (→ Darcy/Alex); session-level entry; notification deep-link into Anna.
- `[v2]` live video/audio **call** ("Call Anna") — **the sales pitch**; budget-gated; the portrait "call" model already anticipates its presentation. Cross-session memory; profile-level persona change; client-chosen personas.

## Decisions needing a named owner before build
1. **Per-user persona identity** (Epic 5) → Alex/Jill (data model). *Hard dependency.*
2. **Native 9:16 render vs crop** + **talking-head vs needs-visuals (MSK)** (Epic 2) → AY/production, per topic.
3. **Completion threshold (~90%)** (Epic 6) → product/clinical.
4. **Outcome metric per condition** (Epic 9) → clinical/content.
5. **Transcript availability** — confirm article vs spoken-script transcript both exist per lesson.
