# Current DCP Experience — Structure (as of July 2026)

> Davinder's walkthrough of the DCP experience. Frames to be pulled once the Desktop Bridge plugin is opened in the DCP files.

## Figma sources

| File | fileKey | Nodes | Status |
|------|---------|-------|--------|
| **dcp-for-claude** (current, modified) | `aYcvw2gkOVhTN92HNYtlXT` | `4637-49610` | current baseline |
| **01 DTx Core – Mobile** (original) | `zIjOcL4ztKJxQrKDXs830C` | `0-2392`, `0-2042` | original design (pre-modifications) |

## Current vs. original — the delta Davinder called out

The current design (`dcp-for-claude`) has been **modified from the original** (`01 DTx Core`):

- **Social — REMOVED.** The original top-level page had a social component; it's gone.
- **Chat — MOVED and made contextual.** Originally a chat component lived on the **top-level page**. It's been removed from there and **relocated to the lesson**, inline and in-context. Chat now lives *at the lesson*, not the topic top level.
- **Relevant data on the topic-level page.** The topic-level page surfaces relevant (health) data.
- **Added progress** — one version shows additional progress display that isn't in the primary design; it lives somewhere among the frames in the current file (to locate when pulling frames).

## Certified-structure constraint (from EBB brief)

The DCP **module → lesson → session** structure is certified and cannot change. What's malleable is the
**top-level topic page**, progress display, data surfacing, and cross-program navigation — NOT the lesson/session content itself.

## Structure hierarchy — VERIFIED against DCP content (July 1 2026)

- **Topic** (= the program / DCP; e.g. Managing Depression)
  - **Sessions per topic — VARIABLE, not a flat 8.** *(Sessions are the EBB billing unit; $100 incentive pays once at topic completion.)*
    Per EBB source doc + Depression content file: Depression 10 · Anxiety 10 · Insomnia 8 · Low Back 8 · Neck/Shoulder 9 · Hip/Knee 7 · Hypertension 12 · Diabetes Prevention 9 · Pregnancy 39. **Range ~7–12.**
    - **Lessons per session — the 2023 content calls them "Modules" (`S#M#`); ~5–7 per session, NOT 8–12.**
      Managing Depression: 10 sessions, **56 modules total → ~5.6/session**. Lower Back: ~5–7/session. So **~40–60 units per topic**, not 64–96.
      - each **lesson/module** contains:
        - a **video explainer** (the current Anna-narrated format)
        - **ask-Anna Q&A** — contextual comprehension help ("I don't understand this / how about X?"). Anna is the in-lesson coach.

> ⚠️ **Caveats:** (1) counts above are from the **Jan 2023** content, which uses "Module" while the current app/Davinder say "Lesson" — verify against the live curriculum before relying. (2) The dcp-for-claude mockup showed "Complete all 7 sessions" for Depression, but content + EBB doc both say **10** — the "7" was placeholder.

**Celebration implication:** lessons/modules are frequent (~40–60 per topic) → quiet progress only. Sessions (~7–12) are the
right mid-tier micro-celebration rung. Topic completion is the major celebration + payout. (See D2 celebration ladder.)
**Retention implication:** Anna's in-lesson Q&A = the "coach contact" retention lever the research favors over gamification,
and supports competence (SDT) — members get unstuck instead of dropping off.

## Frames reviewed (dcp for claude, July 1 2026)

Page "✅ Mobile Designs for prototyping" — care-path sections: Diabetes Prevention, Insomnia, Depression, Back Care.
Depression path (`37720:36481`) has 22 screens. Key ones:

- **Topic intro / opt-in** (`29603:28221`, "Care Paths 17"): video hero · "Managing Depression" · "9 weeks · 874 colleagues completed" · description · **"Get Started"** CTA · "What you'll learn." → this is the opt-in surface.
- **Celebratory** (`29835:24494`): confetti "Congratulations! You took a valuable step toward improving your health by **starting** 'Managing Depression' Keep going to earn your **1000 points**." → celebrates STARTING, in POINTS.
- **Topic home / active** (`29603:28245`, "Care Paths 18"): "Managing Depression" + help icon · TODAY card (Continue / All sessions) · **"Top Discussion"** social block still present.
- **All Sessions** (`29603:28269`, "Care Paths 19"): **"Complete all 7 sessions"** · vertical stepped path — Session 1 active (Start), rest **locked** → **this is a native Duolingo-style lock/unlock path, already in the DCP.**
- **Lesson chat** (`37687:31217`, `37687:31246`): "Chat with Anna / Health Advisor" — contextual in-lesson chat. Confirms chat moved to lesson.

## Home Page redesign v2 — Anatomy (`6519:54541`, file `6nJg9r55Y3NSgqZetujnPI`)

Sections top→bottom: **Hero · Personalization · Rewards · Data (This week) · Insight · Keep going · Challenge**.
- **Hero**: recommended DCP ("Treating Insomnia", "Based on your interests", "Start the program"). Mobile hero already shows **"Digital Care · $100 reward."**
- **Rewards module** (Davinder's "award progress section"): **points/tier** — "Silver Tier · 1,250 points · 750 to Gold · Redeem." (Points currency, not EBB $.)
- **Keep going**: multiple in-progress DCPs ("Treating Insomnia — Session 5 of 8 · continue," etc.) — continue-current, not tee-up-next.

## All Topics / Therapeutics list (`0-2130`, file `zIjOcL4z…` DTx Core)

The DCP browse-all page — **Ongoing · Discover · Completed** sections of topic cards.
Discover cards carry **Duration + Earnings** tags (an "Earnings" attribute already exists on topics).
Wireframe fidelity (Lorem ipsum / placeholder art). **This is where the cross-program daisy-chain would live.**

## Added-progress topic variant (`39608-19334`, "05", dcp for claude) — the EBB-aligned topic page

"Treating Insomnia" topic home, the version Davinder referenced:
- TODAY card (Continue / All lessons).
- **"Your progress" card — "Session 1 of 7 · 14%" with a progress bar.** ← explicit progress meter on the topic page.
- "SLEEP THIS WEEK" data section below.
- **No "Top Discussion" / social** — this version has social removed, progress + data in its place.

This is the strongest baseline for the EBB topic page: focused, progress-forward, social-free — matches the daisy-chain
direction. The completion progress ("Session X of 7") is exactly the spine EBB hangs the "get to the next" push on.

## Onboarding + Interest Survey (`39605-18855`, "Onboarding" section, dcp for claude)

Three screens:
1. **Lock-screen push** — "Trouble sleeping? **Earn $100 when you try Digital Care** to get help with your sleep." → EBB $100 acquisition/re-engagement hook, already drafted.
2. **Welcome splash** — "Welcome to Mobile Health / Living your best life" (2-dot carousel).
3. **Interest Survey** — "Wellbeing Goals · What are your interests? Select all that apply" — 10 chips (Improve Nutrition, Optimize Sleep, Reduce Stress, Exercise More, Mindfulness, Work-Life Balance, Managing Finances, Social Connections, Career Skills, Retirement). → the personalization driver that decides *which DCP is recommended next* (the daisy-chain's "what's next" input).

## Note on the DCP PRD

Per Davinder: **the DTX design IS the design-level PRD summary.** We treat the DTx/DCP designs (topic intro,
all-sessions, lesson, all-topics) as the requirements source — no separate written DCP PRD to chase.

## Key findings for EBB (see response synthesis)

1. **Daisy-chain already exists natively** as the DCP "All Sessions" lock/unlock path — extend the same language to chain ACROSS programs.
2. **Opt-in exists** ("Get Started" on topic intro) — EBB consent + "$100 on completion" lands here.
3. **Celebration is on the wrong moment/currency** — fires on START, says "1000 points"; EBB wants COMPLETION + $100 + tee-up-next.
4. **Home already surfaces $100 reward** in hero; rewards module is points/tier and would need an EBB reframe.
5. **Social discrepancy** — "Top Discussion" still on topic home despite social being "removed." Confirm current.
6. **Gap:** "tee up the next program" (the daisy-chain signature) is not represented anywhere yet.
