# Design System Phase 0 — Strategic Chassis

> Locked strategic foundation that runs above the v2 visual interview. Read this before any visual iteration. Updated only by amending the strategy decisions log and re-running this brief.

## Reading order

Always read this file before running:
- [design-system-interview-v2-blank-refs.md](design-system-interview-v2-blank-refs.md)
- [design-system-build-v2.md](design-system-build-v2.md)
- Any visual review, palette iteration, or design-system audit

The decision log at [_strategy-decisions.md](_strategy-decisions.md) is the source of truth. This file synthesizes those decisions into a single working chassis.

---

## 1. Brand purpose

> Mobile Health exists so that working adults managing chronic conditions don't have to wait, pay, or do it alone.

Three barriers, one promise. Every product, every visual decision, every line of UX copy traces back to one of those three barriers.

---

## 2. Brand promise (dual-audience)

The brand has two audiences. Both need a one-sentence promise. Both must be true at the same time on the same screen.

### Member-facing

> *"Measurable progress on every condition you're carrying — guaranteed, on your phone, without the wait or the bill."*

**When this promise has to land:**
- The first time a member opens the product
- Onboarding step 4 (where 31% currently drop off)
- Inside a flare moment at 11pm
- After completing the first DCP module
- At gateway-condition expansion (when the system recommends a second program)

### Buyer-facing

> *"Real clinical outcomes across every condition your employees are managing — at the engagement rates that move your spend, guaranteed."*

**When this promise has to land:**
- First slide of a sales deck
- mobilehealthconsumer.com hero
- Procurement RFP cover page
- Industry conference materials
- The moment a CHRO has 30 seconds to take the meeting

### How they ladder

Both anchor on **"every condition"** (comorbidity moat — uniquely true to MHC) and **"guaranteed"** (ROI anchor — the strongest competitive claim in the category). Member friction = *wait, bill*. Buyer friction = *engagement, spend*. Each line solves the friction the audience actually feels.

**The dual-promise test:** *would a CHRO put either sentence on a board slide AND would a member screenshot either sentence to a friend who's struggling?*

If yes to both for both promises, the ladder holds. If no, the wording needs work.

---

## 3. Brand attributes

Five attributes. Each carries a definition, a visible-in-product test, and a failure mode. Use these as a rubric for every visual decision.

| Attribute | Definition | Visible in product as | Fails the test if |
|---|---|---|---|
| **Credible** | Clinically grounded; trusted by clinicians and benefits managers; outcomes-backed not feature-listed | Real outcomes data shown; clinical sources cited; mature confident typography; AI explains its reasoning | Looks like a wellness app; uses generic stock; AI hallucinates without acknowledging limits; outcome claims unsupported |
| **Direct** | Says what it means; opinionated; doesn't hedge or pad | One takeaway + one action; SMS-style AI; UI copy short and second-person; recommendations stated, not suggested | Hedged copy ("you might consider"); long instructional text; cluttered hierarchy; bullet-pointed recommendations |
| **Outcome-obsessed** | Every interaction connects to a measurable health or business result | Progress visible at every step; programs lead with their outcome metric; gift card and A1C drop equally prominent | Engagement metrics dressed as outcomes; vague affirmations; missing or hidden progress data |
| **Human** | Treats the member as a whole adult with constraints and stigma; warm without infantilizing | Real-member photography; warm surface palette; voice respects intelligence; no scrubs, no clipboards | Stock smiling-people-with-laptops; baby-talk copy; assumes unlimited time/money; surveillance-feeling memory references |
| **AI-competent** | Visibly intelligent; transparent about being AI; useful and restrained, not chatty | AI moments labeled as AI; reasoning visible when it matters; cross-session memory exposed and editable; SMS-style brevity | Hidden AI; long monologues; AI that doesn't acknowledge limits; AI that surveils ("I see you're a 45-year-old woman who…") |

**Note on AI-competent:** This attribute may evolve as AI becomes table stakes across the category (2–3 year horizon). Re-evaluate at next brand review.

---

## 4. Audience tension (the strategic constraint)

The same screen that closes a 3:1 ROI guarantee for a Fortune 500 benefits manager has to be the same screen an anxious member opens at 11pm during a flare.

| Audience | What they need | Visual register |
|---|---|---|
| **Benefits manager** (CHRO, VP Total Rewards, Benefits Manager) | Credible, evidence-grounded, financially-fluent legibility | Confident typography, clinical-grade data viz, mature color, real outcomes visible |
| **Member** (working adult, 29–58, managing 2+ conditions) | Warm, low-friction, dignity-preserving support | Warm sand surfaces, real-member photography, second-person copy, soft modern primary |

Most digital health brands collapse this tension by picking one side. Personify, Sharecare, Thrive, Navigate lean buyer (corporate, generic, cold). Calm, Headspace, Noom lean consumer (warm, lifestyle, soft). Both losses leave the brand weaker against MHC's positioning.

**The strategic discipline:** every visual decision must read credible to the buyer AND human to the member. If a decision pulls only one direction, it's wrong.

**The test phrase:** *would a CHRO put this on a board slide AND would a member screenshot it to a friend who's struggling?*

---

## 5. Voice principles (member-facing UX copy)

The existing [Brand Voice Guides](../strategy/) cover stakeholder communication. The product voice (member-facing UX copy) is derived from but distinct.

1. **Second-person, present tense.** "Your sleep" — not "the user's sleep" or "members' sleep data."
2. **One verb per sentence where possible.** Cut linking verbs; cut adverbs.
3. **Numbers, not adjectives.** "Down 1.2 points since March" beats "trending well."
4. **Acknowledge the burden, don't perform empathy.** "You logged pain again today" — not "We see you're struggling."
5. **State recommendations; don't offer them.** "Try the 4-7-8 breathing exercise" — not "You might want to consider..."
6. **AI says when it doesn't know.** "I don't have data on that yet" — never invent.
7. **No baby talk, no exclamation marks, no default emoji.** Confident, not cute.

---

## 6. Photography direction

### Subject
- Real working adults, ages 29–58 (per ICP)
- Physically demanding work AND remote knowledge work — warehouse manager, nurse, truck driver, facilities director, knowledge worker
- Diverse race, body type, age, ability, gender presentation
- People mid-condition-management — not before/after triumphalism

### Environment
- Real domestic settings: kitchens at 11pm, truck cabs at dawn, break rooms, stoops, backyards, family rooms
- Working-class to middle-class lived-in spaces
- Phones visible but not the hero (this is a phone product, but the person is the subject)

### Treatment
- Natural light, not studio
- Documentary-photography register, not lifestyle-blog
- Color grading: warm but accurate skin tones; no Instagram-filter saturation
- Composition: at the subject's eye level; not from above

### What to avoid
- Stock photography, especially Getty wellness library
- Scrubs, white coats, stethoscopes, exam-room props
- Laptops on couches in well-lit lofts
- Triumphant-after-photo tropes (yoga pose, fist pump, sunrise stretch)
- Models from optimization-fitness brands (Whoop, Peloton aesthetic)
- All-white studio backgrounds (the corporate-wellbeing default)

### Reference for treatment
Hinge Health (web hero photography); Maven Clinic (marketing site); Ro (brand campaigns). All three photograph real-feeling people in real environments without slipping into wellness-lifestyle.

---

## 7. Typography intent

### Pairing principle
A confident editorial display face paired with a clean modern sans. The display carries warmth and humanity; the sans carries clinical precision. Together they hit the Clinical-Modern Distinctive register.

### Reference candidate pairings

| Pairing | Vibe | Cost |
|---|---|---|
| **Söhne (Klim) + GT Sectra (Grilli Type)** | Sword Health-adjacent; premium clinical | Paid, both |
| **Inter (free) + Tiempos Headline (Klim)** | Withings-adjacent warm-editorial | Paid Klim only |
| **Pangram Sans + Editorial New (Pangram Pangram)** | Modern editorial, gaining traction | Paid, both, reasonable |
| **ABC Diatype + ABC Maxi Round (Dinamo)** | Premium clinical-modern | Paid, premium |

Final pairing decision deferred to next iteration; budget question to be answered first.

### Role per tier
- **Display headlines** (24px+) — editorial face
- **Body copy + UI** (16px standard per ICP accessibility floor) — sans
- **Numerical data / outcomes** — tabular variant of the sans
- **Buttons + interactive** — sans, regular weight

### What to avoid
- System default sans (looks like every B2B competitor)
- Rounded display faces (slip into wellness-lifestyle)
- Heavy-weighted display sans (Headspace territory)
- Decorative serifs (slip into period-tracker / supplement DTC territory)
- More than two typeface families on a single product surface

---

## 8. Visual tribe + reference brand triangulation

**Tribe lock:** Clinical-Modern Distinctive (Hinge Health / Sword Health cluster).

**Reference brands** triangulate three facets; no single reference is sufficient.

| Reference | Contributes | Does NOT contribute |
|---|---|---|
| **Withings** | Illustration economy; warm-editorial craft; typography editorial register; premium product feel | Clinical-credibility floor (consumer-premium, not clinical) |
| **Sword Health** | Premium clinical authority; scientific data treatment; confident voice; real-bodies-in-motion photography | Warmth (cool/scientific lean); illustration craft |
| **Hinge Health** | Real-patient photography; B2B2C peer execution; clinical-warm palette; dual-audience proof | Distinctive ownability (solid but not visually iconic) |

**What none contributes (must be invented):** the AI-competent visual register. None of the references lean visibly on AI; MHC's AI features (Insights, Coach, Expert) require a canonical AI surface treatment that doesn't exist in the reference set.

---

## 9. AI-competence — visual + verbal implications

Because *AI-competent* is locked as a brand attribute, AI presence must be a designed surface, not a hidden feature.

### Required visible behaviors
- AI-generated content visibly labeled (icon, color treatment, or attribution tag)
- AI reasoning surfaceable on demand (not hidden, not mandatory)
- Cross-session memory exposed: viewable, editable, deletable from the UI
- AI restraint: SMS-style brevity, "I don't know" admissions visible
- Crisis routing UI deterministic-visible (clearly NOT LLM-generated)

### Forbidden patterns
- Hidden AI (looks like a feature, not a brand attribute)
- Chatbot avatar tropes (anthropomorphic robots, animated assistants)
- Long AI monologues / data dumps
- Opening sessions with platform data ("I see you're a 45-year-old woman who…")
- AI mimicking human behavior to deceive

This becomes a design system requirement: a **canonical AI surface treatment** that signals AI-competence visually. To be specified in subsequent iteration.

---

## 10. What this brief explicitly does NOT decide

These are the open strategic questions parked in [_strategy-decisions.md](_strategy-decisions.md). Phase 0 establishes the chassis; subsequent iterations resolve them against the chassis.

- **Brand mark / logo evolution** — is there a brand-product disconnect risk if the corporate logo stays Brand Blue while the product runs soft sky + sand?
- **Photography commissioning approach** — stock vs. shoot vs. illustration-led
- **Typography licensing budget** — paid editorial-grotesque pairings vs. free alternatives
- **Module categorical naming** — color-led (current) vs. emotional/functional role-led (recommended)
- **Dark mode posture** — Sword leans dark-premium; Hinge stays light; MHC undecided
- **Exact primary color hue and chroma** — direction-locked to soft sky blue (D2); precise hue for next visual iteration
- **Canonical AI surface treatment** — visual register for AI moments

---

## How this brief is updated

Phase 0 is amended only by:
1. New decision logged in [_strategy-decisions.md](_strategy-decisions.md)
2. Decision reaches LOCKED status
3. This brief is updated to reflect the new lock
4. Affected sections of the v2 visual interview / build are flagged for re-run

Do not edit Phase 0 directly without a corresponding log entry.
