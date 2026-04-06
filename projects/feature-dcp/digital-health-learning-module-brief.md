# Digital Health Learning Module — Design & Prototype Brief
**Version 1.0 | For use with Claude Code / Claude Cowork**

---

## 1. Project Overview

We are redesigning an existing linear digital care program into an engaging, educational, AI-companion-guided learning experience. The current product is a flat sequential list: an intake assessment, approximately 10 mini-courses covering digital health topics, and a closing assessment. 

The goal is to transform this into a motivating, emotionally resonant, gamified learning journey — without losing clinical integrity — by layering in an AI chat companion, educational module mechanics, intrinsic reward systems, and modern wayfinding.

---

## 2. Technical Stack

- **Mobile framework:** React Native + Expo
- **State management:** Zustand
- **AI companion:** Claude API (Anthropic) via `/v1/messages`
- **Content format:** Existing digital care library (assessments + module content — attached separately)
- **Documentation:** Confluence
- **Design tool:** Figma

> **Note to Claude:** The existing digital care library will be attached. Reference it for assessment question structure, module titles, content format, and sequence logic before scaffolding any components.

---

## 3. Content Domain

All modules cover **digital health** topics. Current subject areas include but are not limited to:

- Back care
- Depression
- Weight loss / nutrition
- And additional clinical wellness topics

These modules vary significantly in clinical sensitivity and must be treated accordingly (see Section 7: Module Tier System).

---

## 4. Product Architecture

### 4.1 Current State
```
[Pre-Assessment] → [Course 1] → [Course 2] → ... → [Course 10] → [Post-Assessment]
```
Linear, no personalization, no companion, no reward mechanics.

### 4.2 Target State
```
[Pre-Assessment]
    ↓ (adaptive routing based on score)
[Journey Map — full path visible from day one]
    ↓
[Module N Entry] → [Content Card(s)] → [Micro Check-in] → [AI Companion Debrief] → [Completion Moment + Badge]
    ↓
[Next Module — unlocked]
    ↓ ...
[Post-Assessment] → [Milestone Celebration] → [AI Companion Reflection]
```

### 4.3 Core Loop (per module)
Each module must complete this full loop before proceeding:

1. **Module entry card** — title, estimated time, topic icon, warm framing sentence
2. **Content delivery** — lesson cards (text, guided exercise, or media)
3. **Micro check-in** — 1–2 comprehension or reflection questions (not graded)
4. **AI companion interaction** — one Socratic or reflective question triggered post-completion
5. **Completion moment** — animation + identity-based badge + warm copy
6. **Journey map update** — module visually settles into "done" state, next module activates

---

## 5. Reference Philosophies

These three products inform three distinct layers of this build. Use them as design and behavioral references — not as UI templates to copy.

---

### 5.1 Khanmigo (Khan Academy) → AI Companion Behavior

**Reference layer:** How the companion thinks, responds, and guides.

**Core philosophy:** Socratic guidance over direct answers. The companion never lectures, never summarizes content back at the user, and never gives prescriptive advice. Instead it asks one well-chosen question that invites the user to reflect on what they just experienced.

**Founding system prompt principle (from Khan Academy's Chief Learning Officer):**
> *"You are a Socratic tutor. I am a student. Don't give me answers to my questions — lead me to get to them myself."*

**Key mechanics to implement:**
- Companion always has module context injected — it knows which module just completed, what the key concepts were, and the user's tier (see Section 7)
- First interaction after each module is always a **closed, low-effort prompt** — never open-ended cold. ("What's one thing from this module that you'd like to try?" not "What did you think?")
- Companion has memory of previous module interactions — responses reference the user's journey, not just the current module
- Companion never diagnoses, never prescribes, is always transparent that it is an AI

**Three non-negotiable guardrails (adapted from Khanmigo's design principles):**
1. The companion cannot give clinical advice or direct answers to health questions
2. The companion must guide, not prescribe — always Socratic
3. The companion must be transparent about being AI if directly asked

---

### 5.2 Headspace → Emotional Design Layer

**Reference layer:** How the interface feels, sounds, and celebrates.

**Core philosophy:** Emotion-driven design. The interface itself should produce the emotional state the content is trying to teach. If a module covers stress management, the completion moment should feel like relief. If a module covers depression, the completion moment should feel like being seen.

**Key mechanics to implement:**
- Onboarding and module entry use a **breathe-first, task-second** pattern — short orienting phrase before asking anything of the user
- Completion animations are warm, specific, and human — not generic checkmarks. Copy matters as much as animation.
- **Week 2 / Module 3 is the critical retention threshold** — design the most intentional completion moment and companion interaction at this point. Users who pass this point are significantly more likely to complete the program.
- Color and illustration language should signal safety, warmth, and forward motion — not clinical sterility

**Copy tone principles:**
- Specific over generic ("You just learned three techniques for managing lower back pain" not "Module complete")
- Grounded over saccharine ("That's not nothing" not "Amazing work!")
- Human over robotic (read every piece of UI copy aloud — if it sounds like an error message, rewrite it)

---

### 5.3 Ada Health → Assessment UX

**Reference layer:** How questions are asked, how complexity is hidden, how assessments feel.

**Core philosophy:** Invisible complexity. The system knows more than it shows. One question at a time, adaptive branching based on previous answers, no decision tree visible to the user.

**Key mechanics to implement:**
- **One question per screen** — no multi-part questions, no scrolling question lists
- Questions adapt based on previous answers — if the pre-assessment detects high familiarity with a topic, that module can be compressed or flagged
- Progress indicator is always visible during assessments — prevents fatigue and abandonment
- Assessment results are never shown as a score or grade — they are shown as a **personalized path** ("Based on your answers, here's where we'll focus")
- Assessment copy uses a warm, conversational tone — "Tell us a bit about..." not "Select all that apply"
- **No time pressure** anywhere near clinical content — no timers, no urgency mechanics in assessments

---

## 6. Gamification & Reward System

### 6.1 Core Design Principle
**All progress is additive. Nothing is ever subtracted.**

No streaks to lose. No points deducted. No penalty for returning after a gap. When a user returns after time away, the companion acknowledges it positively. The journey map never resets or degrades.

### 6.2 The Journey Map (Primary Wayfinding)

This is the home screen and the spine of the experience. It must be visible in full from day one — users in clinical health contexts need to see the finish line.

**Three visual states for each module node:**

| State | Visual Treatment |
|---|---|
| **Done** | Settled, slightly receded, icon filled, completion badge visible |
| **Active** | Lit, animated subtle pulse, clear tap target, time estimate shown |
| **Upcoming** | Visible but muted, icon outlined, approachable not locked |

**Design direction:** Think trail or road, not checklist. Modules are landmarks, not line items. The visual language should communicate "you are on a journey" not "you have tasks."

### 6.3 Completion Moments (Micro-celebrations)

Triggered at the end of every module. Must include:
- A short animation (celebratory but calm — not confetti explosions near clinical content)
- Specific, warm copy referencing what the user just did
- The identity badge for that module (see 6.4)
- A single-tap to proceed — no friction at the moment of reward

### 6.4 Identity Badges (Per Module)

Badges are identity-reinforcing, not achievement-generic. They name what the user is becoming, not what they completed.

| Module Topic | Badge Name (examples — adjust to match actual module titles) |
|---|---|
| Back care | "Body Mechanic" |
| Depression | "Resilience Aware" |
| Weight / Nutrition | "Intentional Eater" |
| Sleep | "Rest Architect" |
| Stress | "Calm Practitioner" |

> **Note:** Generate badge names from actual module titles in the care library. Each badge should feel like an identity, not a diploma.

### 6.5 Milestone Kudos (Macro-celebrations)

Larger acknowledgment moments at key thresholds. Delivered through the AI companion, not just UI animation.

| Threshold | Companion Message Tone |
|---|---|
| First module complete | Warm, grounding — "You started. That matters more than people think." |
| Module 3 complete (retention threshold) | Specific, honest — "A lot of people stop before here. You didn't." |
| Halfway point | Reflective — reference something from an earlier module interaction |
| Final assessment complete | Personal, forward-looking — connect journey to what comes next |

### 6.6 Weekly Readiness Pulse (Replaces Streak Mechanic)

A lightweight optional check-in, surfaced once per week on the journey map home screen.

- Single question: "How are you feeling about your health journey this week?"
- 1–5 scale (emoji or simple visual — no labels like "terrible" or "great")
- Companion responds to the answer with one sentence — no interrogation
- Data informs personalization; never shown back to user as a grade or score

---

## 7. Module Tier System

Each module must be tagged with its clinical sensitivity tier. The AI companion behavior, copy tone, and interaction design shift based on tier.

### Tier 1 — Educational / Informational
**Examples:** Back care, sleep hygiene, nutrition basics

- Companion can be more exploratory and Socratic
- Completion moments can be playful
- "What's one thing you'd like to try this week?" is an appropriate companion opener

### Tier 2 — Behavioral / Coaching
**Examples:** Weight loss, physical activity, stress management

- Companion shifts to motivational interviewing style
- Reflective, non-judgmental, focused on user autonomy
- "What feels realistic for you right now?" over "What will you do differently?"
- Completion moments are warm and grounding

### Tier 3 — Clinical-Adjacent
**Examples:** Depression, anxiety, chronic pain

- Companion is supportive but explicitly bounded
- Validates experience, does not explore symptoms
- One reflection, then pivot to action or resource
- Completion moments feel like being seen — not celebrated
- **Escalation trigger must be implemented:** if user expresses active distress in companion interaction, surface appropriate crisis/care resources and disengage from lesson flow gracefully
- No open-ended questions about symptoms or emotional state

---

## 8. AI Companion — Technical Specification

### 8.1 API Integration
- Model: `claude-sonnet-4-20250514`
- Called at the end of each module, after the micro check-in
- Each call includes full module context in the system prompt

### 8.2 System Prompt Structure (per call)

```
[Core persona]
You are a warm, human-sounding health companion. You are not a doctor or therapist. 
You do not give clinical advice or diagnoses. You are curious, patient, and genuinely 
interested in this person's experience. You ask one question at a time.

[Module context — injected dynamically]
The user just completed the [MODULE NAME] module. 
Module tier: [1 / 2 / 3].
Key concepts covered: [pulled from care library].
User's pre-assessment score for this domain: [score if available].
Previous companion interactions this session: [summary if available].

[Tier-specific behavior rules]
[Tier 1]: You can be exploratory. Guide them to connect the content to their own life.
[Tier 2]: Use motivational interviewing principles. Reflect, don't push. Honor ambivalence.
[Tier 3]: Be warm and boundaried. Validate first, then offer one grounded reflection. 
Do not probe symptoms. If the user expresses significant distress, respond with warmth 
and surface care resources. Do not continue the lesson debrief.

[Interaction rules]
- Ask one question only. Do not follow up with a second question in the same response.
- Your first message must be a low-floor, specific prompt — not open-ended.
- Keep responses under 3 sentences unless the user has shared something that warrants more.
- Never summarize the module content back at the user.
- Never use the phrase "As an AI" or refer to yourself as a chatbot.
- If directly asked whether you are AI, confirm it simply and warmly.

[Escalation trigger]
If the user's message contains language indicating acute distress, self-harm ideation, 
or crisis: respond with warmth, do not continue the lesson debrief, and surface 
the following message: "It sounds like you might be going through something difficult 
right now. Please consider reaching out to [care team contact / crisis line]. 
I'm glad you're here."
```

### 8.3 Companion State Management (Zustand)

Track the following across the session:
```javascript
companionState: {
  moduleHistory: [],        // array of {moduleId, userResponse, companionResponse}
  currentTier: null,        // 1 | 2 | 3
  currentModuleContext: {}, // injected per module
  escalationTriggered: false
}
```

---

## 9. Screen Inventory — Build Priority Order

Build in this sequence. Complete each loop end-to-end before moving to the next.

**Phase 1 — Single module loop (Back Care — Tier 1)**
1. Module entry card
2. Lesson content card(s)
3. Micro check-in (1–2 questions)
4. Companion interaction screen
5. Completion moment + badge
6. Journey map (2-3 module nodes minimum — done, active, upcoming states)

**Phase 2 — Assessment flows**
7. Pre-assessment (Ada Health pattern — one question per screen, adaptive)
8. Assessment result / path reveal screen
9. Post-assessment (same pattern)

**Phase 3 — Gamification layer**
10. Milestone kudos screens (Modules 1, 3, halfway, final)
11. Weekly readiness pulse
12. Badge collection / profile view

**Phase 4 — Remaining modules**
13. Tier 2 module loop (Weight / Nutrition)
14. Tier 3 module loop (Depression — with escalation trigger active)
15. Remaining modules using established patterns

---

## 10. Visual Reference Direction

Screenshots from the following apps are attached separately and labeled by purpose. Reference them for the indicated component only — do not replicate their full visual language.

| Reference App | Use For |
|---|---|
| **Ada Health** | Assessment question screen, progress indicator during assessment, result reveal |
| **Headspace** | Completion moment animation style, module entry card, copy tone |
| **Noom** | Onboarding assessment UX, single-question-per-screen pattern |
| **Hinge Health / BetterUp** | Journey map / program path visualization |
| **Mobbin screenshots (attached)** | Specific components labeled per screenshot |

---

## 11. What Not to Build (Constraints)

- **No streak counters** that can be broken or lost
- **No leaderboards** or social comparison mechanics
- **No timers** on any assessment or clinical-adjacent content
- **No locked content** visible as "locked" — upcoming modules are muted, not blocked
- **No open AI responses in Tier 3** — companion in depression/clinical modules must use bounded response set or tightly constrained prompt, not free generation
- **No generic completion copy** — every module completion message must be specific to that module's content

---

## 12. Key Design Decisions Still Open

The following decisions require stakeholder input before implementation:

1. **Companion response mode for Tier 3:** Fully AI-generated (needs clinical review) vs. AI-selecting from pre-approved bounded responses (safer to ship) vs. fully scripted with AI-feeling UX
2. **Adaptive routing logic:** Does a strong pre-assessment score compress or skip modules, or does it simply personalize companion tone?
3. **Crisis escalation contact:** What resource or care team contact does the escalation trigger surface?
4. **Badge visual design:** Illustrated icons vs. typographic vs. system — needs Figma direction
5. **Readiness pulse frequency:** Weekly vs. after every 2–3 modules

---

## 13. Success Metrics (for prototype evaluation)

- User completes full single-module loop without drop-off
- Companion interaction feels distinct from a generic chatbot (qualitative)
- Journey map communicates current position and finish line at a glance
- Completion moment lands as warm and specific, not generic
- Tier 3 module does not trigger any clinical overreach from companion
- Escalation trigger fires correctly on distress language test cases

---

*Brief compiled from: stakeholder conversation, Khanmigo pedagogy documentation, Headspace UX case studies (Raw.Studio, Neointeraction), Ada Health design analysis (Merge.rocks, DhiWise), and digital health UX best practices research.*
