# Avatar Video Player — Design Spec

**Designer:** Davinder Rehal
**Status:** Draft — for engineering scoping alongside the Video Playback PRD
**Figma:** *Health Advisor AI (Video)* → page *ANNA Wireframes* → canonical frames **H · I · J** (poster → full-screen portrait → unlock), **D** (chat)
**Jira:** [Link]
**Related docs:** `projects/feature-dcp/interactive chat/Video Player BB - PRD [WIP].md` (platform/technical layer, all DCP video) · `outputs/jun12-anna-interaction-model/anna-acceptance-criteria.md` (locked v1 UX scope) · `outputs/jun12-anna-interaction-model/anna-interaction-logic-spec.md` (full vision) · `projects/feature-dcp/_decisions.md`, 2026-06-15 and 2026-06-16 entries

---

## What this doc is, and isn't

Two documents already exist and are **not being re-decided here**:

1. **The Video Playback PRD** — a platform-layer spec, written generically for *all* DCP video (filmed lectures, explainers, diagrams). It defines the technical substrate: video as a first-class lesson element, delivery/CDN, a screen-coverage setting, captions-as-files, playback reporting.
2. **The ANNA acceptance criteria** — the UX for the avatar lecture specifically, already locked by decision on 2026-06-16: full-screen portrait "call" player, launched from a poster tile, native 9:16 render, captions on by default, soft unlock into chat.

This spec is the **visual layer that sits between them** — it takes the PRD's generic settings model and specifies exactly how the avatar/HeyGen-Tavus lecture uses it: which crop mode, what the poster and chrome look like, how the player renders on desktop, and where the PRD's assumptions (filmed footage, a 4K master, an unclear caption source) don't hold for vendor-rendered avatar video and need a different answer.

**Nothing below overrides `anna-acceptance-criteria.md`.** Where this spec is silent, that doc is authoritative.

---

## Overview

The avatar lecture player is a full-screen, portrait, "video call"–style presentation of Anna or Nathan reading a lesson script — launched from a poster tile inline in the lesson page, with captions on by default and a soft unlock into chat on completion. It is the near-term primary consumer of the video-lesson-element and playback-reporting infrastructure the PRD proposes; other video types (explainers, filmed footage) are the same underlying element, configured differently.

---

## User Problem

A member hears MHC pitched as an AI-forward, high-outcome program, then opens a lesson and gets a wall of text — the "magical results don't jibe with the too-basic UX" gap (`jun16-kaitlyn-ai-video-notes.md`). Members who can't or won't read (waiting rooms, low literacy, low trust in text-only content) have no equivalent way to get the same lesson delivered as a person talking to them.

---

## Design Solution — Player Anatomy & States

| State | Where | What it is |
|---|---|---|
| **Poster tile** | Inline in the lesson page (top of the article) | A still of Anna/Nathan + play affordance + "Watch with Anna · [duration]." Not full-bleed — a modest preview block, not the immersive presentation. |
| **Full-screen portrait player (mobile)** | Takeover on tap | Anna fills the screen; minimal chrome (close, title, CC toggle up top; scrub + elapsed/total at bottom). |
| **Centered call window (desktop)** | Overlay on the lesson page, dimmed backdrop | A bounded portrait window, sized to the video's native aspect — not full-bleed, not a landscape inline player. Meet/Zoom 1:1–style. |
| **Captions overlay** | Bottom third of the video, both platforms | On by default. Sourced from the lecture script (or vendor TTS timing — see Vendor Considerations). |
| **Transcript** | Pull-up sheet (mobile) / side rail (desktop) | Read-along, auto-scroll, tap-to-seek. Distinct from the article text on the page. |
| **Completion / unlock end card** | Replaces the video frame at ~90% watched or "Mark complete" | "✓ Lesson complete · Chat with Anna" → Chat (primary) · Continue · Replay. |

---

## Visual Spec — Frame, Fill, and Chrome

### Aspect ratio: 9:16, native

`design/foundation/aspect-ratios.md` currently has no vertical-video row — its ratio table (16:9 tiles, 1:1 avatars, 3:2/4:3 photography) is landscape/square-biased. The 9:16 avatar lecture is a **documented exception**, not a gap: it's already decided (`_decisions.md`, 2026-06-16) and justified by the talking-head/AI-presenter grammar (Reels, Shorts, Duolingo Max, and HeyGen/Tavus's own default export). **Action:** add a "Lecture / avatar video — 9:16, portrait, full-bleed on mobile only" row to `aspect-ratios.md` so this isn't a one-off exception living only in a decisions log.

### Poster tile — not 9:16

The poster is inline content on an otherwise normal article page; a full vertical block there would dominate the page before the member has opted in. Use the system's existing tall-preview allowance instead: `A_Card`'s documented preview range is 4:1 (shortest) to 3:4 (tallest) — **use 3:4** for the poster crop (head-and-shoulders, centered focal point per `aspect-ratios.md`'s focal-point rule). The full 9:16 presentation is reserved for the tap-triggered full-screen state. This keeps the poster a normal card citizen and makes the transition to full-screen feel like an intentional escalation, not a jump-cut in proportions.

### Screen-coverage setting (PRD Improvement 3) — avatar default

The PRD defines one setting, three positions: **Edge to edge / Fills the screen / Whole picture.** For the avatar lecture:

| Position | Use for avatar video |
|---|---|
| Edge to edge | Not used. Avatar framing keeps the face/shoulders near the top third — running that behind the notch crops the one thing the member is looking at. |
| **Fills the screen — default** | Matches the PRD's own system default and its stated rationale (presenter's head sits near the top, exactly where the notch is) — same logic applies directly to avatar framing, which is even more consistently centered than filmed footage. |
| Whole picture | Only if a future avatar render includes wide on-screen visuals (a diagram cut-in) that would be cropped otherwise. Not the default case. |

### Mobile full-screen takeover

- `width: 100vw; height: 100dvh` (use `dvh`, not `vh` — avoids the address-bar resize jump on mobile Safari/Chrome).
- Respect safe-area insets (`env(safe-area-inset-*)`) for chrome placement — "Fills the screen" keeps content clear of the notch/home bar per PRD Improvement 3; chrome (close, CC, title) sits inside the safe area regardless.
- Background: `--ink` (#1A1D21) behind the video, so any letterbox edge (if the vendor render isn't exactly 9:16) resolves to near-black, not the app's warm `--bg` (#FAF7F0) — a light bar behind portrait video reads as a rendering bug, not a design choice.

### Desktop centered call window

Bounded box, not full-bleed, over a dimmed backdrop of the lesson page (page stays visible/dimmed, not replaced):

- Height: `clamp(560px, 70vh, 780px)`; width = height × 9/16 (so ~315–439px) — sized to the *video's* aspect, meaning no crop/letterbox decision is needed on desktop (the "Whole picture" case naturally, since the container matches the source).
- Corner radius: `--r-xl` (16px), consistent with the DCP suite system.
- Backdrop scrim: `--ink` at ~60% opacity over the lesson page.
- Elevation: a soft shadow (no elevation token exists yet in `design/foundation/elevation.md` — flag this as the second doc gap this project surfaces; use a shadow consistent with the highest-elevation surface already shipped in the DCP suite kit until that token exists).
- Close (X) top-right of the window, outside or on the window edge — must be reachable without hunting, since this is a modal-weight interaction on desktop.

### Chrome and tokens

- Chrome is minimal by design (PRD: "replacing platform controls is the largest out-of-scope item" / ANNA AC: "immersive, call-style chrome") — close, title, CC toggle top; scrub + elapsed/total bottom. No branded video-player skin.
- Caption box: dark scrim behind white text, contrast ratio ≥ 4.5:1 (WCAG 2.1 AA, per PRD Improvement 5 and the Accessibility section below) — do not rely on video-content darkness alone for legibility.
- System tokens in play: `--brand` #1B355C (chat CTA, "Chat with Anna" primary button on the unlock card), `--ink` #1A1D21 (player background, scrim), `--bg` #FAF7F0 (lesson page behind the desktop scrim). Progress/ring token (`--progress-fill` #4A4A60, graphite) applies to the scrub bar if a progress indicator is shown, consistent with the suite-wide "ring/bar = graphite, never amber" decision (`_decisions.md`, 2026-07-13) — the lecture is not a reward meter.

---

## Vendor Considerations — HeyGen / Tavus, near-term

**Updated 2026-09-02** (Davinder/Alex weekly sync) — this section originally assumed HeyGen/Tavus export native 9:16 directly. That's now confirmed **wrong**; the actual production decision is below. Left the superseded reasoning struck through rather than deleted, since it's the wrong assumption a future reader might otherwise re-make.

**Decided (2026-09-02):** Generate **landscape** in HeyGen, then **crop a portrait version via Claude** from that same render. Two delivery assets, one paid generation call — not two vendor renders. A second independent HeyGen call was explicitly rejected: HeyGen generation isn't deterministic, so two separate calls produce two *different* videos, not a matched pair. This makes the avatar asset pipeline **structurally identical to the PRD's Improvement 2 model** (one master, two derived versions) — just with Claude doing the crop instead of ffmpeg/MediaConvert.

**⚠️ This reopens a settled decision.** `_decisions.md` (2026-06-16) explicitly chose native 9:16 rendering and rejected "two separate render libraries... a maintenance trap," calling center-crop-from-16:9 "a demo bridge only." The 2026-09-02 sync makes that demo-bridge approach the permanent one. Flagged in the decisions log as unreconciled — confirm this supersession is intentional before treating it as final, since it directly reverses a framing-risk argument the acceptance criteria (Story 2.2) already made once.

| PRD assumption | Avatar reality (corrected 2026-09-02) |
|---|---|
| One 4K master, two versions cropped from it (tall + wide) | Confirmed to apply directly: HeyGen master (landscape) → Claude-cropped portrait. <s>HeyGen/Tavus export native 9:16 directly — no master-to-crop pipeline needed.</s> |
| Framing risk flagged in `anna-acceptance-criteria.md` (Story 2.2): center-crop-from-16:9 "runs tight on a centered head-and-shoulders" | **Now the live risk, not a hedge.** The production pipeline *is* the center-crop case the June decision called a demo bridge. Confirm Claude's crop is subject-tracking (follows the presenter), not a fixed center-crop — a fixed crop against a HeyGen avatar that isn't perfectly centered every take will clip inconsistently across 634 lectures. <s>This risk mostly disappears once native 9:16 is confirmed.</s> |
| Captions: MHC produces WebVTT timing from the lecture script (Improvement 5, open question #6) | Unresolved either way — not addressed in the 2026-09-02 sync. Still needs confirming whether vendor TTS timing exports to a WebVTT sidecar, or whether MHC owns caption production separately. |
| "Pre-rendered lectures play free" — cost is a one-time render, not per-play (`_decisions.md`, 2026-06-16 assumption) | Holds, and is now cheaper than the two-render fear the June entry may have been pricing in — one paid HeyGen call still yields both assets. A script edit still means one paid re-render (same content-maintenance cost the interaction-logic spec names as "the real ongoing cost"). |
| Video "later carries other video: explainers, diagrams, recorded walkthroughs" not assuming a centered presenter (PRD "three things to hold") | **Confirmed exactly as scoped:** portrait is avatar-only; walkthroughs, diagrams, and Journeys stay landscape. Landscape-only content needs a **rotate-to-view prompt on mobile** (new requirement, not in the original spec — see Responsive Behavior below). |
| No note on movement/demonstration content | Avatar tools cannot demonstrate physical movement. Same split already flagged as `[DECISION — AY]` in the acceptance criteria (Story 2.2: "pure talking-head vs. needs-visuals (MSK)") and independently raised by Kaitlyn (6/16): **MSK and other movement-dependent lessons should not route to avatar video near-term.** |

**New from the 2026-09-02 sync, not previously in this spec:**
- A **per-video portrait-mode toggle** may be needed, defaulting **on** for AI avatar content — likely an addition to the PRD's Admin-configurable table (Engineering Notes below), not a replacement for the screen-coverage setting.
- **Platform current-state corrections** (extends PRD Appendix A): Android today won't fill the screen even with a **portrait** asset supplied — not only landscape. This confirms the Media3 migration (PRD Appendix B) is required regardless of which asset strategy wins; it isn't a workaround for the current player. iOS already expands to fill on device rotation.
- **Modal vs. inline display on desktop is still an open decision**, not settled by this spec. Panel-on-the-right is ruled out. The live choice is inline (lightbox expand) vs. a centered modal window — close to, but not identical to, the "centered call window" framing below; reconcile with Keen before treating this spec's desktop section as final.
- **Unconfirmed technical constraint:** the app currently cannot mix layout types across platforms — can't run desktop as page-layout while mobile is modal. If true, it constrains the mobile-takeover / desktop-bounded-window pattern recommended below (both would need to resolve to "modal," just sized differently per platform, which may be fine — but this needs Keen's confirmation, not an assumption).

---

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Mobile (<768px) | Poster tile inline (3:4). Tap → full-screen portrait takeover, "Fills the screen" crop, safe-area-aware chrome. Transcript = pull-up sheet. Chat = bottom sheet. |
| Tablet (768–1024px) | Same as desktop treatment below — a bounded portrait window reads better than a full-bleed takeover once the viewport is wider than the video is tall. |
| Desktop (>1024px) | Poster tile inline (3:4) within the article column. Click → centered portrait "call window" over a dimmed lesson page. Transcript = side rail. Chat = docked right side-panel (lesson page stays visible). **Open:** confirm this resolves to "modal" in the same sense mobile does — Keen to confirm whether desktop page-layout and mobile modal-layout can be configured independently (2026-09-02 sync). |
| Landscape content, mobile (walkthroughs, diagrams, Journeys — non-avatar) | **New requirement (2026-09-02):** prompt the member to rotate their device rather than playing landscape video small/letterboxed in portrait orientation. Does not apply to avatar lectures, which are portrait-native and never need rotation. |

---

## Content Guidelines

| Element | Guidance |
|---|---|
| Poster label | "Watch with Anna · [duration]" — persona name + time commitment, no more. |
| Player chrome title | Lesson title only, truncate rather than wrap. |
| Unlock end card | "✓ Lesson complete · Chat with Anna" — exact copy from `anna-acceptance-criteria.md` Epic 6. Do not restate what was just watched. |
| End card actions | Chat with Anna (primary) · Continue to next lesson · Replay — in that order, primary action first. |
| Captions | Sourced from the lecture script (or vendor-provided timing, pending confirmation above) — not the article's long-form prose, which is written differently (`jun16-kaitlyn-ai-video-notes.md` flags this as an active content-consistency risk, not yet resolved). |

---

## Accessibility Requirements

- [ ] Captions on by default; toggle available in player chrome; WCAG 2.1 AA contrast for the caption box against any video frame, not just typical ones.
- [ ] Transcript is a full text equivalent, independently reachable (not solely inside a paused video state).
- [ ] All chrome controls (close, CC toggle, play/pause, scrub) meet 44×44px minimum touch target.
- [ ] Desktop call window fully keyboard-operable: focus trapped inside while open, Esc closes, tab order close → CC → scrub → transcript toggle.
- [ ] Captions-on state is never color-only — pair with the CC icon and a visible on/off label.
- [ ] Screen-off/background audio continuation (mobile) needs a system media-session integration so a screen reader / lock screen shows what's playing, not silent background audio with no controls.

---

## Engineering Notes

**Page Layout Element:** Avatar video is the **same** video lesson element the PRD's Improvement 1 proposes — not a bespoke "Anna element." It's a configuration of that element: screen-coverage = "Fills the screen," poster crop = 3:4, captions = on-by-default, persona metadata attached.

**Data requirements (additions to the PRD's Admin-configurable table):**
- `persona` (Anna / Nathan / text-only) — lesson level, per `anna-acceptance-criteria.md` Epic 5.
- `vendor_source_id` / render metadata — which vendor job produced this asset, for re-render/versioning when a script changes.
- Reporting events (PRD Improvement 4: quarter/half/three-quarter/finish/abandon/skip, captions-on, audio-chosen) — **add `persona` to the event payload** so completion/engagement can be split by Anna vs. Nathan, not just by lecture.

**Edge cases:**
- Vendor render fails or is mid-generation when a member reaches the lesson → poster should degrade to the existing text-only lesson view, not show a broken tile (ties to PRD open question #10, currently unanswered for all video — avatar needs the same fallback, not a special case).
- Script edited after render → re-render is a paid, non-instant vendor call; the lesson should not silently serve a stale video against updated article text. Needs a content-maintenance workflow, flagged above, not solved here.

---

## Open Questions / Risks Carried Into This Spec (not resolved here)

These are flagged, not answered — they belong to product/content/engineering, not to this visual spec:

1. **Content-consistency risk** — avatar script vs. written lesson text diverge (`jun16-kaitlyn-ai-video-notes.md`). Affects what the transcript/captions show relative to the article on the same page.
2. **Credibility of the avatar format** — raised independently by Kaitlyn; not a visual-design fix.
3. **Talking-head vs. needs-visuals routing** — `[DECISION — AY]` in the acceptance criteria; determines which lessons get an avatar poster at all near-term.
4. **Vendor caption export format** — confirm HeyGen/Tavus timing output actually satisfies PRD Improvement 5's WebVTT sidecar approach before assuming it's free.
5. ~~Wide/desktop export necessity~~ — **Resolved 2026-09-02:** yes, needed. The landscape render is the master; portrait is cropped from it, not a separate native export.
6. **Modal vs. inline on desktop** — panel-on-the-right is ruled out; inline (lightbox expand) vs. centered modal is still open. Resolve with Keen before this spec's desktop section is final.
7. **Cross-platform layout-mixing constraint** — unconfirmed whether the app can run desktop as page-layout while mobile is modal, or whether both platforms must resolve to the same layout family. Blocks finalizing the desktop window strategy.
8. **Claude-crop method** — confirm the portrait crop is subject-tracking (follows the presenter frame-by-frame), not a fixed center-crop. A fixed crop against non-perfectly-centered HeyGen takes will clip inconsistently across 634 lectures — this is the exact framing risk the June 16 decision flagged when it rejected center-cropping as a production approach.
9. **Reconcile `_decisions.md` 2026-06-16 vs. 2026-09-02** — the native-9:16 decision and the landscape-master-crop decision directly conflict. Needs an explicit supersession note, not two live entries saying different things.

---

## QA Checklist

- [ ] Matches canonical Figma frames H · I · J · D
- [ ] Poster renders at 3:4, not full 9:16, inline in the article
- [ ] Mobile: full-screen takeover, "Fills the screen" crop, safe-area-respecting chrome, `dvh` used (no address-bar jump)
- [ ] Desktop: centered call window at native 9:16 aspect, dimmed backdrop, keyboard-operable, Esc closes
- [ ] Captions on by default, ≥4.5:1 contrast, toggle works
- [ ] Transcript reachable independent of playback state; tap-to-seek works
- [ ] Completion fires at ~90% watched OR explicit "Mark complete," whichever first; both logged separately
- [ ] Chat is reachable at all times, never gated on completion
- [ ] Reporting events fire with `persona` field populated
- [ ] Fallback view renders correctly when video asset is missing/failed
