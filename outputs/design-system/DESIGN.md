# DESIGN — Mobile Health Consumer design system snapshot

> One-page summary of the locked design system. **Read first.** Points to [`MAP.md`](MAP.md), [`decisions.md`](decisions.md), and [`_strategy/phase-0.md`](_strategy/phase-0.md) for depth.
>
> **Current as of:** 2026-05-04 · **Active version:** v6 ([`v6/system.html`](v6/system.html)) · **Next:** v7 system-preview, gated on D11 verification gates G1–G4

---

## What this product is

**Mobile Health Consumer (MHC)** — a consumer-facing digital health and wellbeing app for working adults (29–58) managing 2+ chronic conditions. Modules: Rewards, Journeys, Healthy Habits, Digital Care Paths (Depression, Anxiety, Back Pain, Diabetes), Challenges, Health Data, Biometrics, Conditions, Digital Advisor.

**Brand purpose.** Working adults managing chronic conditions don't have to wait, pay, or do it alone.

**Dual promise.** Both must read true on the same screen.

| Audience | Promise |
|---|---|
| **Member** | Measurable progress on every condition you're carrying — guaranteed, on your phone, without the wait or the bill. |
| **Buyer** | Real clinical outcomes across every condition your employees are managing — at the engagement rates that move your spend, guaranteed. |

**Strategic discipline.** Every visual decision must read *credible to the buyer* AND *human to the member*. If it pulls only one direction, it's wrong.

---

## Visual tribe

**Clinical-Modern Distinctive** — Hinge Health / Sword Health cluster. Locked at [D1](decisions.md#d1).

**Reference triangulation:**

| Reference | What it contributes |
|---|---|
| Withings | Illustration economy; warm-editorial craft; premium product feel |
| Sword Health | Premium clinical authority; scientific data treatment; real-bodies-in-motion photography |
| Hinge Health | Real-patient photography; B2B2C peer execution; clinical-warm palette; dual-audience proof |

**What none of them solve:** the AI-competent visual register. Must be invented. Specified iteratively.

---

## Brand attributes (the rubric)

Five attributes. Use these to evaluate every visual decision.

| Attribute | Visible in product as | Fails if |
|---|---|---|
| **Credible** | Real outcomes data; clinical sources; mature confident typography; AI explains its reasoning | Looks like a wellness app; generic stock; AI hallucinates without acknowledging limits |
| **Direct** | One takeaway + one action; SMS-style AI; second-person UI copy; recommendations stated | Hedged copy ("you might consider"); long instructional text; bullet-pointed recommendations |
| **Outcome-obsessed** | Progress visible at every step; programs lead with their outcome metric | Engagement metrics dressed as outcomes; vague affirmations |
| **Human** | Real-member photography; warm surface palette; voice respects intelligence | Stock smiling-people-with-laptops; baby-talk copy; surveillance feel |
| **AI-competent** | AI moments labeled; reasoning visible; cross-session memory editable; SMS-style brevity | Hidden AI; long monologues; chatbot avatar tropes; AI mimicking human |

---

## Color (current locked direction)

| Role | Direction | Status |
|---|---|---|
| **Primary hue** | R2 Sky-teal bridge (~200°) — anchored loosely to legacy Aqua Blue `#04a0b7` | **D2 direction-locked** (5 verification gates pending) |
| **Surface family** | Warm sand (`sand.*`) — backgrounds, card fills, hover states | architectural since v2 |
| **Ink family** | Near-neutral graphite (`neutral.*`, hue ~28°, chroma 4–6%) — text, borders, dividers; never brown, never cool blue-grey | architectural since v2 |
| **Module categoricals** | Five families — primary, moss, clay/warm, lavender, success/fuchsia — used for module identity (badges, glyphs, dots, borders) | architectural |
| **Brand color role** | C2 Light Active — brand-DNA at 100–200 stops; one chromatic moment per screen permitted as a coat at 100-stop | **D11 direction-locked** (6 verification gates pending) |
| **Tone-on-tone register** | T2 Primary tone-on-tone direction parked | **D12 direction-locked** (6 verification gates pending) |
| **Purple** | Categorical only. Never primary. | locked |

**Retired from product:** Brand Blue `#0f497f` (corporate, retained for legacy collateral only); pastel washes (v4); jewel filled badge variant (v6); gradients on member surfaces (v6 pulled them back).

**Gradient policy.** Container surfaces + primary CTAs only. Never on text. Never on borders. Default angles: 135° cards, 180° full-page.

**Weighting audit.** Every artifact ships with a 60-30-10 stacked bar showing color split by role (Surface / Ink / Module / Primary CTA / Accent / Other).

---

## Typography

**Pairing principle.** A confident editorial display face + a clean modern sans. Display carries warmth and humanity; sans carries clinical precision. Together they hit Clinical-Modern Distinctive.

**Pairing decision deferred** — budget question first. Candidates parked: Söhne + GT Sectra; Inter + Tiempos Headline; Pangram Sans + Editorial New; ABC Diatype + ABC Maxi Round.

| Tier | Typeface |
|---|---|
| Display headlines (24px+) | editorial face |
| Body copy + UI (16px floor) | sans |
| Numerical / outcomes data | tabular variant of the sans |
| Buttons + interactive | sans, regular weight |

**Avoid:** system-default sans, rounded display faces, heavy-weighted display sans (Headspace), decorative serifs (DTC supplement), 3+ families on one surface.

---

## Photography

**Subject:** real working adults, 29–58. Diverse race/body/age/ability. Mid-condition-management — never before/after triumphalism. Physically demanding work *and* knowledge work.

**Environment:** real domestic settings (kitchens at 11pm, truck cabs at dawn, break rooms, stoops). Working-class to middle-class lived-in spaces.

**Treatment:** natural light, documentary register, warm-but-accurate skin tones, eye-level composition.

**Avoid:** Getty wellness library; scrubs, white coats, exam-room props; laptops on couches in lit lofts; triumphant-after-photo tropes; Whoop/Peloton optimization aesthetic; all-white studio backgrounds.

**Reference treatment:** Hinge Health web hero; Maven Clinic marketing; Ro brand campaigns.

---

## Illustration

**Two registers:**

1. **Anatomical / functional** — Back-care style, near photo-realistic in proportion. Communicates body position accurately.
2. **Expressive / empathic** — Withings-style stylized figures on warm fields with organic wave lines; abstract organic shapes with gradients; characters with natural elements.

**Economy rule.** One composition × N palette swaps (variant grid), not bespoke per module. Required deliverable: 4-tile grid demonstrating palette swap (warm-led / module A / module B / module C).

---

## Voice (member-facing UX copy)

1. Second-person, present tense.
2. One verb per sentence where possible.
3. Numbers, not adjectives. "Down 1.2 since March" beats "trending well."
4. Acknowledge the burden — don't perform empathy.
5. State recommendations; don't offer them.
6. AI says when it doesn't know.
7. No baby talk, no exclamation marks, no default emoji.

---

## AI surface (in-progress)

Because *AI-competent* is a brand attribute, AI presence is a designed surface, not a hidden feature.

**Required:** AI content visibly labeled · AI reasoning surfaceable on demand · cross-session memory exposed and editable · SMS-style brevity · "I don't know" admissions visible · crisis routing UI deterministic-visible.

**Forbidden:** hidden AI · chatbot avatar tropes · long AI monologues · opening with platform data ("I see you're a 45-year-old…") · AI mimicking human to deceive.

**Status.** A canonical AI surface treatment is required and not yet specified. Parked for subsequent iteration.

---

## Hard constraints

The 13 program-wide invariants live in [`MAP.md` § Hard Constraints](MAP.md#hard-constraints) — HC-1 through HC-13. Each rule traces to a source decision (D-series), Q-answer (Q1–Q17), or architectural emergence. **Do not duplicate them here.** Updates land once in MAP.md and propagate.

---

## Accessibility floor

**WCAG AA.** 4.5:1 minimum for text, 3:1 for UI components. AAA where it lands naturally (primary buttons, headings) but not required. Locked at Q17.

---

## What this snapshot does NOT decide

Parked strategic questions that subsequent iterations resolve against this chassis:

- Brand mark / logo evolution (corporate Brand Blue ↔ product soft sky disconnect risk)
- Photography commissioning approach (stock vs. shoot vs. illustration-led)
- Typography licensing budget (paid pairings vs. free)
- Module categorical naming (color-led vs. emotional/functional role-led)
- Dark mode posture (Sword leans dark; Hinge stays light; MHC undecided)
- Exact primary hue + chroma (R2 family direction-locked; precise hue per next visual iteration)
- Canonical AI surface treatment

---

## Where to look next

| Need | File |
|---|---|
| What's the active version, what's superseded, what's an alt | [`MAP.md`](MAP.md) |
| Why a decision was made (D1, D2, D11, D12, …) | [`decisions.md`](decisions.md) |
| The strategic chassis that backs every visual call | [`_strategy/phase-0.md`](_strategy/phase-0.md) |
| The original Q1–Q17 baseline answers | [`_strategy/INTERVIEW-v2-original.md`](_strategy/INTERVIEW-v2-original.md) |
| Run a new iteration | [`INTERVIEW.md`](INTERVIEW.md) → [`BUILD.md`](BUILD.md) |
| The latest shipped artifact | [`v6/system.html`](v6/system.html) |
| Reference screenshots | [`_reference/screenshots/`](_reference/screenshots/) |
| 2021 brand guidelines (legacy) | [`_reference/brand-guidelines-2021.pdf`](_reference/brand-guidelines-2021.pdf) |

---

## Maintenance

Update DESIGN.md when:
- A D-series decision graduates from `direction-locked` to `locked`
- A Hard Constraint is added, removed, or restructured
- The active version pointer changes (v6 → v7 → …)
- A parked open question lands

Do not update DESIGN.md to log iteration outcomes — that's MAP.md's job.
