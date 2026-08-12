# ANNA — Interaction-Logic Spec (Full Experience)

**Workstream A:** ANNA's interaction model and her relationship to the chat.
**Status:** Draft for review · 2026-06-12 (rev 3) · Davinder Rehal
**Design stance:** This specs the **full North Star experience — how it *should* work, not how it *has to* work given current limits.** Alex Young's *DCP AI Assistant — PRD (revised)* (ships June 30, Allstate) is the reference for what's already built, not a ceiling. After team review we narrow to a skinny June-30 cut; phasing is tagged inline.
**Output is interaction logic, not visual design.**

**Phasing tags:** `[CORE]` = the spine of the full experience · `[v2]` = genuinely later capability · cut candidates for the skinny June-30 version are collected at the end.

> **Status update (2026-06-16):** v1 is scoped **lesson-level**, and the lecture is delivered as a **full-screen portrait "call," launched from a poster** (canonical wireframes **H/I/J**). This supersedes the inline-16:9 + Watch/Read-toggle framing wherever they differ. This doc is the *vision*; **`anna-acceptance-criteria.md` + `_decisions.md` are authoritative for what v1 builds.**

---

## What ANNA is

ANNA is **one persona, two modes**: a **pre-rendered video lecturer** and a **live conversational advisor**. The video is one-way content featuring her likeness and voice; the **persona relationship lives in the conversation.** Nathan is the same model with a different face/voice. The persona is a presentation layer over the existing router→coach→safety pipeline — identity changes; clinical substance and safety do not.

Because lectures are **pre-rendered** from the 634 scripts, playing and re-watching them is free. The only metered surface is the conversation. The "reserve ANNA for high-value moments" cost constraint therefore applies only to a future **live video/audio mode** `[v2]`, not to the v1 experience. The real ongoing cost is **content maintenance** — a script edit means re-rendering video.

---

## The lesson page `[CORE]`  *(updated — portrait "call" model)*

A teaching lesson is **one scrollable page** with a video **poster tile**; tapping it opens Anna **full-screen, portrait** — like a call. Reading and chat live on the same page; there is **no Watch/Read mode toggle**.

| Element | What it is |
|---|---|
| **Poster tile** | Anna still + play + "Watch with Anna · [duration]"; opens the full-screen portrait player. |
| **Full-screen portrait player** | Immersive "call"-style: Anna fills the screen; captions overlay; controls + `Ask Anna` + a pull-up `Transcript`. |
| **Article (read)** | The existing long-form text, on the same page by scrolling. "Listen with Anna" audio available. |
| **Chat** | Anna conversation — bottom sheet (mobile) / docked side-panel (desktop). The interactive surface. |

### Movement & completion

| Logic | Rationale | Backed by |
|-------|-----------|-----------|
| Tap the **poster → full-screen portrait** lecture. | "Talk with Anna like a call"; the dominant talking-head / AI-presenter grammar. | Reels/Shorts; Duolingo Max "Video Call"; HeyGen/Synthesia/Tavus 9:16 |
| **Reading + chat share the page** — no mode toggle. | Matches the existing production lesson (inline scroll); fewer decisions. | Hick's Law; existing DTx pattern |
| **Completion** = watch ~90% **or** explicit "Mark complete"; **chat is never gated** on it. | Don't withhold the coach in a health app; the PRD shows chat anytime. | Nielsen #3; PRD line 131 |
| **Completion triggers a soft "unlock" moment** — celebrates + elevates the Chat CTA (end card: Chat · Continue · Replay). | Reward without locking; fire at peak context. | HAX G3 (time to context); PAIR |
| **Captions** overlay (on by default); **transcript** = pull-up sheet (mobile) / side rail (desktop), tap-to-seek. | Sound-off + read-along. | NNG; WCAG 2.1 AA |
| Video is **one-way**; `Ask Anna` reachable from the player chrome. | No mid-lecture Q&A. | North Star out-of-scope decision #4 |

### Orientation & render `[DECISION — AY]`
- **Portrait full-screen**, launched from a poster. Desktop = centered portrait **"call window,"** not full-bleed.
- **Render native 9:16** for the 634 lectures (recommended); center-crop the 16:9 only as a demo bridge. **No** dual render libraries.
- Portrait suits **pure talking-head**; topics needing on-screen visuals/movement (MSK) need a per-topic call — dock visuals below, or a landscape exception.

---

## Persona selection & identity `[CORE]`

| Logic | Rationale | Backed by |
|-------|-----------|-----------|
| Persona (Anna · Nathan · text-only) is chosen **once, at first discoverability of the agent**. | Make the capability legible exactly when relevant, then get out of the way. | HAX G1; North Star line 35–40 |
| Thereafter the system **smart-defaults and simply displays** the chosen persona — no re-choice on later lessons. | Don't inflict per-lesson choice load. | Hick's Law; North Star line 40 |
| The user can change persona from **profile/settings**, and via a **low-emphasis** control on the lesson (present, not prominent). | Override should be easy to find when wanted, easy to ignore when not. | Nielsen #3; progressive disclosure |
| Persona preference is **global per user**; the coach/content swaps **per topic**. Anna stays Anna across insomnia → depression → back-pain. | A consistent companion strengthens the comorbidity daisy-chain and removes a decision. | North Star comorbidity storyline |
| Identity resolves **dynamically per user**: in/after a lecture → that persona; else the user's saved preference; else "Health Advisor." | One mind across modes; reconciles the doc's fallback (line 81) with the demo's need for Anna at 3am. | North Star line 81 + demo |

Only `botName` + `botAvatarUrl` change by persona. Pipeline, knowledge base, and safety routing are identical across personas.

---

## Memory, exit & re-engagement `[CORE]`

**Anna remembers.** In the full experience, Anna carries memory **across sessions** — return to the chat after the lecture, or days later, and she recalls what you discussed and where you are in the program. This is what makes the persona feel real; without it, "talk to Anna" is a stranger every time. *(The shipped chat is within-session only — that's the leading skinny-cut candidate, not the design.)*

| Logic | Rationale | Backed by |
|-------|-----------|-----------|
| Returning to the chat, Anna can **pick up where you left off** ("Last time we talked about your 11pm wind-down — how'd it go?"). | Continuity is the core of a coaching relationship. | PAIR; North Star persona vision |
| **Re-engagement is user-initiated**; Anna does not pop up uninvited mid-flow. The contextual lecture-end invitation is the one nudge. | Reactive-by-default lowers interruption cost. | PAIR (proactive vs reactive); HAX G3 |
| Closing chat returns the user to their place; **Done** advances. | Preserve orientation. | Nielsen #1 |
| Re-watching a lecture is allowed but passive; the engagement loop that matters is **returning to the chat**. | That's where depth and outcomes accrue. | North Star goals |

---

## Standalone "Talk to Anna" + the topic home `[CORE]`

| Logic | Rationale | Backed by |
|-------|-----------|-----------|
| A persistent **"Talk to Anna"** lives on the **topic home** — chat without first entering a lesson (the 3am-insomnia case). | The case has no home today; the under-used top-level page gets a job. | North Star line 44; JTBD |
| The top-level page is **reworked around three things that earn their place**: next action, progress, and Anna. Assorted content/data that doesn't is cut. | The page is acknowledged-weak; give it a spine. | North Star; "fewer, deeper" |
| Cold-open identity follows the same dynamic rule (saved persona, else Health Advisor); safety routing identical. | A 3am mood/sleep conversation is exactly where crisis routing matters. | PRD Safety Agent (non-negotiable) |

---

## Forward compatibility — live conversational modes `[v2]`

The North Star anticipates video-chat and audio-call with Anna (line 43). Design the conversation surface so these are **added modalities of the same persona**, not a new product: the chat is the home; voice and video are toggles on it later. **This is where the per-invocation cost constraint finally bites** — gate live modes to high-value beats (onboarding, emotional/crisis-adjacent moments, milestones). Don't build it now; don't design anything that blocks it.

---

## Workstream B — streamlining surfaced along the way

| Opportunity | Impact | Effort | Note |
|-------------|--------|--------|------|
| **Top-level page gets a job** (next action · progress · Anna). | High | Med | Folded into `[CORE]` above |
| **Choose persona once**, smart-default forever, low-emphasis switch. | High | Low | `[CORE]` |
| **Listen → Anna audio** + screen-off playback. | Med | Low–Med | `[CORE]` if cheap |
| **Lecture → non-lecture handoff** smoothness (North Star open question). | Med | Med | Design now, polish later |
| **Read/transcript view** on lecture lessons. | Med | Low–Med | Part of the workspace |

Each is separable; none blocks the lecture↔chat spine.

---

## Open items (need a content/eng answer, not a design change)

- **Transcript source:** is Watch-mode's transcript the lecture *script* or the original long-form prose? Related but not identical (scripts were "lecturified"). Confirm what Read vs transcript each show.
- **Content-maintenance owner/SLA** for pre-rendered video (script edit ⇒ re-render across ~33h).
- **MSK movement cut-ins** — the lecture player must support inline media/gif/AI-motion.
- **Video-player parity** across all 3 platforms (North Star).
- **Demo daisy-chain** (comorbidity prompt) — Anna-voiced or system message?

---

## The skinny June-30 cut — to narrow with the team

The full design above is the target. If June 30 forces a reduction, this is the spine that must survive and the order I'd cut in:

**Must survive (the experience is incoherent without it):** the Watch/Read/Chat lesson workspace; bidirectional Watch↔Chat; choose-persona-once + dynamic identity display; the contextual lecture-end chat invitation.

**Cut candidates, in order:**
1. **Cross-session memory** → ship within-session only (the current behavior). *Biggest felt loss — Anna forgets between sessions. Design so it can switch on later without rework.*
2. **Standalone "Talk to Anna" + top-level rework** → defer to a fast-follow; keep chat lesson-scoped at launch.
3. **Profile-level persona change** → defer; keep the low-emphasis lesson switch only.
4. **Live video/audio modes** → already `[v2]`.

The decision the team owns: **how much of cross-session memory and the standalone entry we can pull into June 30** — because those are the two places the full experience and the shipped reality diverge most. I recommend protecting cross-session memory's *architecture* even if the feature ships dark, so it's a toggle later, not a rebuild.

---

## Next step

On your sign-off I'll: (a) draft Jira-ready acceptance criteria for the full lesson workspace + persona resolution, marking each line `[CORE]`/`[v2]`/skinny-cut so eng sees both the target and the fallback; and (b) lay out the workspace and topic-home as breakpoint wireframes for Figma.
