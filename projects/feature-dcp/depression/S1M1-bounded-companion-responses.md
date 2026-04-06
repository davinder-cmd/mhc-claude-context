# S1M1 Bounded Companion Response Set
## Module: "What is Depression?" — Tier 3 (Clinical-Adjacent)

**Status:** DRAFT — Requires clinical/stakeholder review before implementation

---

## 1. Companion Prompt (Post-Module)

After the user completes the S1M1 content card and micro check-in, the companion surfaces a single, closed, low-floor prompt. This is NOT open-ended. It names what the user just did and invites one small reflection.

**Companion opening message:**

> "You just spent time learning about what depression actually is — that's a real step. Was there anything in there that felt different from what you expected?"

### Why this prompt:
- **Closed:** Yes/no answerable, but invites elaboration
- **Specific to S1M1:** References the "what depression is" content directly
- **Low-floor:** Doesn't ask about their personal symptoms or emotional state
- **Tier 3 compliant:** Asks about the *content*, not about *their depression*

---

## 2. Response Branches

Based on likely user reply patterns, the companion selects from the following bounded responses. **No free generation.** The selection logic uses simple keyword/intent matching.

---

### Branch A — User affirms something surprised them
**Trigger patterns:** "yes", "I didn't know", "surprised", "didn't realize", "interesting", "the statistics", "how common", "I thought", etc.

**Companion response:**

> "It's worth sitting with that. A lot of people carry assumptions about depression that don't match reality. You now know something different — that matters."

### Branch B — User says nothing surprised them / they already knew this
**Trigger patterns:** "no", "I knew", "already knew", "nothing new", "familiar", "not really", etc.

**Companion response:**

> "That makes sense — sometimes learning confirms what you already feel. The fact that you're here, going through this intentionally, says a lot."

### Branch C — User shares a personal connection or emotional response
**Trigger patterns:** "I feel", "I've been", "that's me", "I relate", "I struggle", "going through", "hard", "difficult", etc.

**Companion response:**

> "Thank you for sharing that. This program is built for exactly where you are. You don't have to have it figured out — showing up is the part that counts."

*Note: This response validates without probing. It does NOT ask a follow-up question about their experience. One reflection, then the flow advances to the completion moment.*

### Branch D — User gives a very short or ambiguous reply
**Trigger patterns:** "ok", "sure", "yeah", "idk", "maybe", "fine", single emoji, etc.

**Companion response:**

> "No need to say more than that. You showed up and finished the first module — that's the hardest one to start. Ready to see what's next?"

### Branch E — User asks a clinical question or requests advice
**Trigger patterns:** "should I", "do I have", "am I depressed", "what should I do", "is it normal", "diagnosis", "medication", "treatment", etc.

**Companion response:**

> "That's an important question, and it deserves a real answer from someone qualified. A doctor or mental health professional would be the right person to talk to about that. In the meantime, this program will give you practical tools you can start using right away."

---

## 3. Escalation Response

**Trigger:** User input contains language indicating acute distress, self-harm ideation, or crisis. Detection uses keyword matching against a defined set (see Section 4).

**Companion response (replaces all other branches):**

> "It sounds like you might be going through something really difficult right now. You don't have to handle this alone.
>
> **If you're in crisis or having thoughts of harming yourself:**
> - Call or text **988** (Suicide & Crisis Lifeline — available 24/7)
> - Call **911** for immediate emergency help
>
> I'm glad you're here. When you're ready, your program will be right where you left it."

**Post-escalation behavior:**
- `escalationTriggered` is set to `true` in Zustand state
- The companion interaction ends — no follow-up prompt
- The user is shown a gentle "Continue when you're ready" button that returns them to the journey map (NOT the next module — they choose when to re-enter)

---

## 4. Escalation Keyword Set

These keywords/phrases trigger the escalation response when detected in user input during companion interaction. This list should be reviewed and expanded by clinical stakeholders.

**High-confidence triggers (any match = escalation):**
- "kill myself"
- "want to die"
- "end my life"
- "suicide"
- "suicidal"
- "self-harm"
- "hurt myself"
- "cutting myself"
- "don't want to be alive"
- "don't want to live"
- "better off dead"
- "no reason to live"
- "can't go on"
- "end it all"
- "not worth living"

**Context-dependent triggers (matched with surrounding negative context):**
- "hopeless" + ("completely" | "totally" | "give up" | "no point")
- "can't take it" + ("anymore" | "any more")
- "harm" + ("myself" | "self")

---

## 5. Micro Check-in Questions (Pre-Companion)

These appear after the content card, before the companion interaction. They are NOT graded — they exist to create a pause for reflection and to give the companion context.

**Question 1:**
> "Depression affects people differently. Which of these did you most relate to from what you just read?"
>
> - Emotional symptoms (sadness, hopelessness, emptiness)
> - Energy and motivation changes
> - Physical symptoms (pain, headaches, sleep)
> - I'm not sure yet — still taking it in

**Question 2:**
> "How familiar were you with this information before today?"
>
> - Most of it was new to me
> - Some was new, some I knew
> - I was already pretty familiar
> - I'd rather not say

*Note: The user's micro check-in answers are stored in module state and can inform which bounded response branch feels most natural, but they do NOT change the companion prompt itself.*

---

## 6. Completion Moment Copy

**Badge name:** "Resilience Aware"

**Completion message (shown with animation):**

> "You just took the first step toward understanding depression — not as a label, but as something you can learn to work with. That takes courage."

**Tone note:** This follows the Headspace "being seen" pattern. It names what the user did, connects it to identity ("that takes courage"), and doesn't celebrate with exclamation points or confetti. The animation should be warm and settling — a slow glow or gentle expansion, not a burst.

---

## 7. Module Entry Card Copy

**Title:** What is Depression?
**Subtitle:** Session 1 · ~5 min
**Warm framing sentence:**

> "Let's start by understanding what depression really is — and isn't. No tests, no pressure."

---

*This document must be reviewed and approved before the companion interaction screen is built. All response text is final copy intended for production — not placeholder.*
