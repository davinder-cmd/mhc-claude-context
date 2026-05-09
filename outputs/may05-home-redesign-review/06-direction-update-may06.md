# Direction Update — May 6

**Trigger:** Davinder's review of v2 wireframes and the canonical doc together.
**Effect:** Adjusts iteration-1 direction. Authoritative where it conflicts with prior files. Source: Davinder's verbatim pushback, captured.

---

## What's now decided

### 1. Scope is content-only

Nav spec is being worked separately. Wireframes focus on the home content area only. Keep top-nav and bottom-nav placeholders generic; don't iterate on them.

### 2. Hero is flexible — not single-focus

This supersedes the "page focused on one thing" framing. Davinder verbatim:

> "In Jill's current iteration, there is only one hero. The assumption is that, if you pick a focus, you would only see hero messaging around that one focus. That is a question that needs to be surfaced. That is not going to fly for sales. They like to highlight a number of things, and employers like to highlight their messaging in the hero as well, so I think we lose something if we make this all about a single focus."

**Implication:** the hero is one slot, but what populates it varies — challenge, employer message, sales promo, interest-relevant content, DCP nudge. The hero is not a focus card. It's a flexible spotlight driven by a priority engine. Wireframes must show the hero with multiple example variants to make this legible.

### 3. No mandatory focus picker on home

Killed. Davinder verbatim:

> "Not sold on this idea of a mandatory picker. When the user onboards, there is a selection list for interest. We usually have them pick that. It doesn't make sense that, once they come to the home page, they have to do another selection."

**Implication:** wellbeing interests are picked once at onboarding (existing flow). Home page does **not** ask again, does **not** filter by a mid-page chip selector, does **not** re-prompt. The "Things I care about" section just shows interest-tagged content — no UI to change focus on the home page itself. If user wants to change interests, they go to settings/profile.

### 4. Two clearly distinct sections by source

> "What it should be is a very clear selection or section for 'Here's the things that I care about. Here's the thing my employer wants me to know.' That's it. That's the distinction."

**Section labels (locked):**
- **"Things I care about"** — content tied to user's existing wellbeing interests
- **"From your employer"** — client priority items

No filter chips above the personalized section. No "Edit interests" CTA inline. Just content, labeled by source.

### 5. Tracker tiles — locked

Steps / Sleep / Calories / Active Minutes. Four tiles. Keep on home. (Updates v2's Steps/Sleep/Heart/Active to remove Heart Rate, add Calories.)

### 6. Tracker Insights — required, not conditional

Keep on home. v2 had it as conditional; promote to required.

### 7. Ongoing programs — required

Keep. Includes DCPs, journeys, challenges. Reference both new and ongoing challenges on desktop.

### 8. Rewards — referenced contextually, not as a persistent chip

Davinder verbatim:

> "Reference rewards in the new designs, even though it's not a high priority. We should reference that... The rewards chip is fine, but we have more than one reward type, so that might get a little messy. Maybe a reference to the rewards, maybe not necessarily a rewards chip for points only."

**Implication:** rewards show up *contextually* — on a DCP card ("earns $100 at completion"), on action items ("+50 pts"), on challenges ("$25 at challenge end"). No global persistent rewards chip in the chrome. No spine-level rewards module. The reward economy is acknowledged everywhere it applies, but it doesn't get a dedicated home-page surface in iteration 1.

This is consistent with the canonical doc deferring rewards-focused home to a future iteration.

### 9. Mobile hero — current ship vs. future state

**Current ship (no eng dependency):** single hero card, no carousel.

**Future state:** dots-carousel, **one card visible at a time**, swipe to see others. Davinder verbatim:

> "On mobile, the carousel at the top eventually, instead of being cards that are visibly seen horizontally through the carousel, it is one card at a time with the dots carousel concept, so you could see one at a time. It's clean, it's not messy, but you still have the option of swiping and seeing other cards."

**The Figma reference Davinder provided** ([Navigation Design Updates — node 2489-1529](https://www.figma.com/design/GWvOaoNuWLaZ9jRe3o7TYC/Navigation-Design-Updates?node-id=2489-1529)) shows the recent attempt — single card with left/right arrows below. Davinder named what's wrong with it: arrows are awkward, peek-cards are messy. **The right answer is dots-below + full-width single-card-visible + swipe.** Same design treatment for mobile and desktop carousel future state, when eng can build it.

Wireframes show: current state (single hero only) and future-state annotation (single-visible + dots + swipe).

### 10. 508 still non-negotiable

No new direction; just reaffirmed. No overlay text on hero imagery. Source labels by color + text. Touch targets ≥44×44.

---

## What's now out of scope

- Mandatory focus picker
- Page-level focus pill
- Mid-page filter chips ("Edit interests")
- Persistent rewards chip in chrome
- Spine-level rewards module
- DCP Progress card with inline clinical metric (already future-iteration)
- "Page focused on one thing" framing

---

## Locked spine — iteration 1 (v3)

| # | Module | Status |
|---|---|---|
| 1 | Top nav with logo | Required (handled by separate nav spec) |
| 2 | Greeting | Required |
| 3 | Single hero — flexible spotlight (challenge / employer / sales / interest / DCP variants) | Required |
| 4 | Tracker data — 4 tiles (Steps / Sleep / Calories / Active Min) | Required |
| 5 | Tracker Insights | Required |
| 6 | Ongoing programs (DCPs / journeys / challenges, both new and ongoing on desktop) | Required |
| 7 | "Things I care about" — interest-tagged content, no filter UI | Required |
| 8 | "From your employer" — client priority items | Required |
| 9 | Bottom nav (mobile) / chrome (desktop) | Handled by separate nav spec |

**Rewards:** referenced inline on items where applicable, not as a dedicated module.

---

## Open question still surfaced

Davinder explicitly named one question that needs surfacing to the team:

> "If you pick a focus, you would only see hero messaging around that one focus. That is a question that needs to be surfaced. That is not going to fly for sales."

**The question:** does the hero personalize to the user's interests, or stay flexible to any priority message (employer / sales / challenge / etc.)?

**Davinder's answer (locked above):** flexible. Hero is not interest-locked.

**Worth confirming with sales + employer-side stakeholders** before this becomes a spec, since they're the ones who'd care most.

---

*Companion: revised wireframes saved as `home-wireframes-v3-flexible-hero-no-picker.html`.*
