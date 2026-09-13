# UX Laws — Quick Reference

Psychological and cognitive principles for interface design. Based on [lawsofux.com](https://lawsofux.com/) — curated for MHC relevance.

---

## Decision & Cognitive Load

### Hick's Law
**The law:** Decision time increases logarithmically with the number of choices.

**MHC application:**
- Onboarding: Present 3-5 health goals, not 15
- Navigation: Limit primary nav to 5±2 items
- DCPs: One clear next action per screen

**Violates this:** Settings screens with 20 toggles. Feature lists that require scrolling to scan.

---

### Miller's Law (7±2)
**The law:** Working memory holds approximately 7 items (±2) at a time.

**MHC application:**
- Chunk health content into 5-7 item groups
- Progress trackers: 5-7 steps visible, not 12
- HRA questions: Group into digestible sections

**Violates this:** Long unbroken lists. Showing all journey steps at once.

---

### Cognitive Load
**The law:** The total mental effort required affects task completion. Reduce extraneous load.

**MHC application:**
- Pre-fill known data (don't ask what you already know)
- Progressive disclosure: Show advanced options only when needed
- Health metrics: Lead with the insight, not the raw data

**Violates this:** Forms that ask for info you have. Dashboards showing every metric at once.

---

## Perception & Grouping (Gestalt)

### Law of Proximity
**The law:** Objects near each other are perceived as related.

**MHC application:**
- Group related health metrics together
- Form fields: Label close to input, not equidistant
- Cards: Related actions clustered, not scattered

**Violates this:** Labels floating between two fields. Actions far from the content they affect.

---

### Law of Similarity
**The law:** Similar-looking elements are perceived as related.

**MHC application:**
- All tappable elements should look tappable (consistent affordances)
- Health categories: Use consistent visual treatment per type
- Progress indicators: Same style across all journeys

**Violates this:** Links that look like body text. Buttons with inconsistent styling.

---

### Law of Common Region
**The law:** Elements within a boundary are perceived as grouped.

**MHC application:**
- Cards to group related health info
- Sections with clear containers
- Modal dialogs with distinct backgrounds

**Violates this:** Related content without visual containment. Flat layouts where grouping is ambiguous.

---

## Interaction & Response

### Fitts's Law
**The law:** Time to reach a target = f(distance to target, size of target). Larger + closer = faster.

**MHC application:**
- Primary actions: Large touch targets (min 44×44pt)
- Important buttons: Bottom of screen (thumb zone)
- Destructive actions: Smaller, further from primary path

**Violates this:** Small tap targets. Critical actions in hard-to-reach corners.

---

### Doherty Threshold
**The law:** Productivity increases when response time < 400ms. Users stay in flow.

**MHC application:**
- Optimistic UI: Show success immediately, sync in background
- Skeleton screens: Show structure while loading
- Micro-interactions: Immediate feedback on tap/click

**Violates this:** Spinners for every action. Waiting for server response before showing any feedback.

---

## Memory & Experience

### Peak-End Rule
**The law:** People judge experiences by the peak moment and the ending, not the average.

**MHC application:**
- Journeys: Design strong endings (celebration, summary, next step)
- Onboarding: End with a quick win, not a form
- DCPs: Peak moment = milestone achievement; End = clear graduation

**Violates this:** Journeys that just... stop. Endings that feel like abandonment.

---

### Serial Position Effect
**The law:** First and last items in a sequence are remembered best.

**MHC application:**
- Navigation: Most important items first and last
- Lists: Key actions at top and bottom, not buried middle
- Content: Lead with the main point, end with the CTA

**Violates this:** Burying important options in the middle of lists.

---

### Von Restorff Effect (Isolation Effect)
**The law:** Distinctive items are remembered better than common items.

**MHC application:**
- Primary CTA: Visually distinct from secondary actions
- Alerts/warnings: Break the visual pattern to stand out
- Key metrics: Highlight the one that matters most

**Violates this:** Everything given equal visual weight. No hierarchy.

---

## Behavior & Motivation

### Goal-Gradient Effect
**The law:** Motivation increases as you approach a goal.

**MHC application:**
- Progress bars: Show how close to completion
- Challenges: Emphasize "3 days left" not "started 4 days ago"
- Rewards: Visible proximity to next reward tier

**Violates this:** No progress visibility. Only showing what's done, not what's left.

---

### Zeigarnik Effect
**The law:** Incomplete tasks are remembered better than completed ones.

**MHC application:**
- Show incomplete items prominently (not buried in history)
- "Continue where you left off" patterns
- Partial progress is motivating — show it

**Violates this:** Hiding incomplete tasks. No re-entry points.

---

## System Design

### Jakob's Law
**The law:** Users spend most time on *other* sites. They expect yours to work like those.

**MHC application:**
- Follow platform conventions (iOS/Android patterns)
- Standard icons for standard actions
- Don't reinvent navigation, search, or settings

**Violates this:** Custom gestures. Non-standard iconography. "Creative" navigation.

---

### Tesler's Law (Conservation of Complexity)
**The law:** Every system has irreducible complexity. Someone must bear it — user or system.

**MHC application:**
- Health data is complex — the system should do the work, not the user
- Smart defaults: Absorb complexity into the product
- Complexity budget: Spend it on what matters, not everywhere

**Violates this:** Exposing backend complexity to users. Configuration instead of smart defaults.

---

### Postel's Law (Robustness Principle)
**The law:** Be liberal in what you accept, conservative in what you produce.

**MHC application:**
- Forms: Accept varied input formats (dates, phone numbers)
- Search: Fuzzy matching, typo tolerance
- Output: Consistent, clean, normalized

**Violates this:** Rigid input validation. Rejecting "correct" data in "wrong" format.

---

## Quick Reference Matrix

| Law | When to Apply |
|-----|---------------|
| **Hick's** | Reducing choices, simplifying decisions |
| **Miller's** | Chunking content, limiting list length |
| **Fitts's** | Sizing buttons, placing CTAs |
| **Doherty** | Loading states, feedback timing |
| **Peak-End** | Journey design, offboarding |
| **Proximity** | Layout, form design |
| **Similarity** | Visual consistency, affordances |
| **Goal-Gradient** | Progress indicators, motivation |
| **Jakob's** | Platform conventions, familiar patterns |
| **Tesler's** | Complexity decisions, smart defaults |

---

## Source

Full laws with examples and further reading: [lawsofux.com](https://lawsofux.com/)

Created by Jon Yablonski — his book *Laws of UX* (O'Reilly) expands on each principle.

---

## Revision Log

| Date | Change |
|------|--------|
| 2026-04-10 | Initial version — 16 laws curated for MHC relevance |
