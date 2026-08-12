# LifeForce — UX Journey Walkthrough Deck
_Wording: "UX journey" = this document/deck (the presentation mechanism); "stages"/"acts" = the parts of the experience. Avoid the bare word "journey" (collides with the Wellbeing Journey product)._
_Outline + speaker notation · Aug 11 2026 · for the Aug 12 presentation_

## Paste map — final deck (18 slides, built in Figma Slides)
Copy each screen (Cmd-C in the design file) → paste on the slide's dashed zone (Cmd-V) → scale to fit.
Slides not listed are native (title / dividers / orientation / closing — nothing to paste).

| Slide | Paste | Node |
|---|---|---|
| **3 · About page** | About LifeForce / Overview — **not in the journey map**, pull from the **V3 Overview** | (V3 `01 Overview`) |
| **5** | Status · 01 Enroll — 3 left | `4381:78078` |
| **6** | Lab work submitted (+ 02/03 optional) | `4381:78102` (`78090`,`78113`) |
| **8** | Status · 04 Schedule | `4381:78145` |
| **9** | "You've finished setup" card | `4381:78150` |
| **10** | Status · 05 Scheduled | `4381:78156` |
| **12** | Status · Active (steady) | `4381:78184` |
| **13** | Phase card — crop of Active | from `4381:78184` |
| **14** | Labs due · HA due · Missed visit · Overdue | `78194` `78206` `78218` `78230` |
| **16** | Invite sent · HA reminder · Dependent done · Records | `78267` `78278` `78289` `78254` |
| **17** | Populated · Full results · Awaiting results | `78309` `78341` `78347` |

_(The prose outline below still uses the pre-intro numbering; the table above is the source of truth.)_

---


**Format:** Figma Slides. **Source screens:** `Journey flow map` page, frame `Journey` (4381:78059).
**Principle for the live tell:** narrate the **happy-path spine** one beat at a time; collapse the
variant-heavy states (deadlines, dependent lifecycle) into single "states" slides so the room isn't
parsing a wall of screens. ~16 slides.

**Notation pattern per screen slide:** _What this is_ · _Why it's built this way_ (the decision) ·
_What's new_ (vs D'Arcy V3 / the requirements doc), when relevant.

---

## 1 · Title
**LifeForce — the member UX journey**
Nurse-coached wellbeing program (Truist / McGriff via Peak Health). A per-pay-period medical
credit tied to a health **Phase (1–5)**. This walks the member's path from setup → first visit →
active, and the states that branch off it.

## 2 · Orientation — the whole map
Zoomed-out shot of the flow (3 acts). "Here's the shape; we'll walk it top to bottom."
- **Act 1 — Getting set up** (4-step qualification)
- **Act 2 — Your first visit** (Peak books it)
- **Act 3 — You're active** (phase revealed, My Progress unlocks) → then the branches
_One promise up front: the hierarchy flips at the enrollment→active hinge — setup is guidance-led;
active is status/notification-led._ (D33 / D36)

---

## ACT 1 — Getting set up

## 3 · Act divider
**Getting set up** — "Four steps qualify the member for their first nurse visit. Step 1 (CarePlus
account) is already done at this point."

## 4 · Enrollment spine — "Getting started"  → screen 01 (`4381:78078`)
- **What:** the enrollment Status screen. Progress header + a recommended action card + the
  remaining steps as an any-order list.
- **Why:** enrollment is the **motivation valley** — effort now, payoff (credit/nurse) still
  abstract. So we (a) put the **payoff on the card** ("…unlock your credit"), and (b) answer
  "how far am I?" with a quiet **progress header** ("1 of 4 done → then Peak books your visit").
  Structure **A2**: recommended card sits *inside* Next steps, under a "THEN · IN ANY ORDER"
  subhead — directive without lying about the any-order truth. (D33, D34)
- **New:** "Getting set up," not "Enrollment" (member's language, not admin term); header counts
  **forward** (momentum / goal-gradient), not backward. (D22, D34)

## 5 · Progression + the intermediate state → screens 02 / 02b / 03 (`78090` / `78102` / `78113`)
- **What:** the same screen at 2-left and 1-left, **plus** "Lab work submitted — awaiting Peak
  confirmation."
- **Why / new:** steps only complete on Peak's file, so there's a real **"submitted, pending
  confirmation"** state between action and done — D'Arcy's V3 had no such state. Building it keeps
  the member from thinking a step failed. (D19 — not-yet-designed states)

---

## ACT 2 — Your first visit

## 6 · Act divider
**All 4 steps submitted — Peak Health books your first visit.**
"The member doesn't schedule — Peak reaches out. That relieves a real anxiety, so we say it plainly."

## 7 · Being scheduled → screen 04 (`4381:78145`)
- **What:** all steps done; Peak is booking. Waiting card, no member action.
- **Why:** the card loses its button and becomes a **waiting** card; "~20 business days" (the real
  SLA, not the placeholder "2"). (D18, D34 header lifecycle → green handoff → retire)

## 8 · The completion moment → "You've finished setup" card (`4381:78150`)
- **What:** the milestone hand-off card. _(Celebration treatment in exploration — see
  `aug11-lifeforce-completion-celebrate`.)_
- **Why:** this is the **peak** of setup (Peak-End). A small, tasteful celebratory beat here lifts
  the whole onboarding memory — fired **once on completion**, not on every revisit, and kept calm
  to match the brand (confetti-quiet, not fireworks).

## 9 · Scheduled → screen 05 (`4381:78156`)
- **What:** visit booked; "call to reschedule" path shown.
- **Why / open:** "Add to calendar" + "reminder the day before" originate in D'Arcy's V3 but may
  not be buildable in the config layer (no JS; `.ics`/push unconfirmed). Fallback (text link,
  reminder line cut) is built. **Ren decision.** (D24, open-questions §5)

---

## ACT 3 — You're active

## 10 · Act divider
**First visit done — you're active.** "Phase is revealed, My Progress unlocks. And the whole page
hierarchy inverts: now the notification/action is the hero, not a credit banner."

## 11 · The steady active state → `Status · Active` (`4381:78184`)
- **What:** nothing pending. Calm status, phase, enrollment demoted to a footnote.
- **Why:** post-enrollment order is **primary (what needs attention) → phase (secondary) →
  enrollment (footnote)**. Loudness scales with urgency; a steady state is a hairline card + link,
  not a button. (D36)

## 12 · Phase, up close → (phase card detail from `78184`)
- **What:** "LifeForce phase · Phase 2 of 5," position dots, calm copy.
- **Why:** phase is a **health-state reflection, not a reward hero or a climb**. Position-marker
  dots (a "you are here," not a bar filling to 5) — members may never reach Phase 5, so we don't
  over-signal progression. **No $ amount on-screen** (credit described qualitatively → calculator).
  (D35)

## 13 · States: Deadlines (loss-aversion) — 4-up
Screens 08 / 09 / 10 / 11 (`78194` / `78206` / `78218` / `78230`)
- **What:** labs due (before visit) · HA due (annual) · missed visit (rebook) · overdue (phase at
  risk).
- **Why:** hard compliance deadlines can **drop a member to Phase 1**. Urgency lives in the
  notification, **tone-scaled**: due-soon = **amber notice** (keeps its image/warmth); at-risk =
  **coral alert** (stroked container, no image, urgent). Never average the tone to the state.
  (D36, D53, D14 deadlines)

---

## Branches

## 14 · Branch divider
**From the active state, the member branches out** — records, dependents, progress.

## 15 · States: Dependent lifecycle + Records — 4-up
Screens: Dependent invitation sent (`78267`) → HA reminder (`78278`) → done (`78289`);
Records · C chronological log (`78254`)
- **What:** the full spouse/dependent invite lifecycle + the records log.
- **Why / new:** a **registered-but-not-completed dependent** was required (maximizes credit) but
  had **no state** — built the whole lifecycle incl. the missing **send-confirmation**. (D19)

## 16 · My Progress — 3-up
Populated (`78309`) · full results (`78341`) · awaiting first results (`78347`)
- **What:** the second tab — biometrics results, programs, handouts; and its empty/awaiting states.
- **Why:** measurements render as **list rows, not a table** (reflow at 375px); empty program/
  handout sections **disappear entirely** rather than showing placeholder cards. (D5, D19)

---

## 17 · Closing — decisions & what we need
**Design decisions locked:** phase-forward credit strip · no $ amounts in-app · action-primary
post-enrollment hierarchy · tone-scaled deadlines · dependent lifecycle built · "Getting set up"
terminology.

**Needs a decision (D'Arcy / Ren / Peak):**
- Appointment data from Peak + calendar/reminder feasibility (config layer / no JS)
- Confirm **telehealth** (→ no location/directions)
- Phase-**reason** data (does Peak send why, or only the integer?)
- Credit denomination (per-pay-period vs annual) · labs cadence · live date (1/1/26 → 1/1/27)
_(Full list: `outputs/aug10-darcy-sync-notes/NOTES.md`, `jul28-lifeforce-open-questions`.)_
