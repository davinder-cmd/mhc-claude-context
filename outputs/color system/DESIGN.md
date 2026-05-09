# DESIGN — Mobile Health Consumer color system snapshot

> One-page summary. **Read first.** Points to [`MAP.md`](MAP.md) and [`decisions.md`](decisions.md) for depth.
>
> **Current as of:** 2026-05-05 · **Active version:** none yet — pending first build

---

## What this product is

**Mobile Health Consumer (MHC)** — a consumer-facing digital health and wellbeing app for working adults (29–58) managing 2+ chronic conditions.

**Modules:** Rewards · Journeys · Healthy Habits · Digital Care Paths (Depression · Anxiety · Back Pain · Diabetes) · Challenges · Health Data · Biometrics · Conditions · Digital Advisor.

**Brand purpose.** Working adults managing chronic conditions don't have to wait, pay, or do it alone.

**Dual promise.** Both must read true on the same screen.

| Audience | Promise |
|---|---|
| **Member** | Measurable progress on every condition you're carrying — guaranteed, on your phone, without the wait or the bill. |
| **Buyer** | Real clinical outcomes across every condition your employees are managing — at the engagement rates that move your spend, guaranteed. |

**Strategic discipline.** Every visual decision must read *credible to the buyer* AND *human to the member*. If it pulls only one direction, it's wrong.

---

## Visual tribe

**Clinical-Modern Distinctive** — Hinge Health / Sword Health cluster.

**Reference triangulation:**

| Reference | What it contributes |
|---|---|
| Withings | Illustration economy; warm-editorial craft; premium product feel |
| Sword Health | Premium clinical authority; scientific data treatment; real-bodies-in-motion photography |
| Hinge Health | Real-patient photography; B2B2C peer execution; clinical-warm palette; dual-audience proof |

**Must be invented:** the AI-competent visual register. None of the references lean visibly on AI; MHC's AI features (Insights, Coach, Expert) require a canonical AI surface treatment that doesn't exist in the reference set.

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

## Photography

**Subject:** real working adults, 29–58. Diverse race / body / age / ability / gender presentation. Mid-condition-management — never before/after triumphalism. Physically demanding work *and* knowledge work (warehouse manager, nurse, truck driver, facilities director, knowledge worker).

**Environment:** real domestic settings (kitchens at 11pm, truck cabs at dawn, break rooms, stoops, backyards, family rooms). Working-class to middle-class lived-in spaces. Phones visible but not the hero.

**Treatment:** natural light, documentary register, warm-but-accurate skin tones, eye-level composition.

**Avoid:** Getty wellness library; scrubs, white coats, exam-room props; laptops on couches in lit lofts; triumphant-after-photo tropes (yoga pose, fist pump, sunrise stretch); Whoop/Peloton optimization aesthetic; all-white studio backgrounds.

**Reference treatment:** Hinge Health web hero; Maven Clinic marketing; Ro brand campaigns.

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

**Forbidden:** hidden AI · chatbot avatar tropes (anthropomorphic robots, animated assistants) · long AI monologues · opening sessions with platform data ("I see you're a 45-year-old…") · AI mimicking human to deceive.

**Status.** A canonical AI surface treatment is required and not yet specified. Resolves through iteration.

---

## Color (pending first build)

| Role | Direction |
|---|---|
| **Primary hue** | TBD — interview to confirm. Loose anchor: legacy Aqua Blue `#04a0b7`. |
| **Surface family** | TBD — interview Q10 (warm-to-neutral scale) determines |
| **Ink family** | TBD |
| **Module categoricals** | TBD — interview Q13 confirms which modules need their own hue |
| **Purple** | Categorical only. Never primary. |

**Retired from product:** Brand Blue `#0f497f` (corporate — retained for legacy collateral only). All other legacy palette items deferred to interview review.

*Populated after first palette build. Run `design-system-interview.md` → `design-system-build-1-visual.md`.*

---

## Typography (pending first build)

**Pairing principle.** A confident editorial display face + a clean modern sans. Display carries warmth and humanity; sans carries clinical precision. Together they hit Clinical-Modern Distinctive.

| Tier | Typeface role |
|---|---|
| Display headlines (24px+) | editorial face — TBD |
| Body copy + UI (16px floor) | sans — TBD |
| Numerical / outcomes data | tabular variant of the sans |
| Buttons + interactive | sans, regular weight |

**Candidate pairings parked** (budget decision deferred): Söhne + GT Sectra · Inter + Tiempos Headline · Pangram Sans + Editorial New · ABC Diatype + ABC Maxi Round.

**Avoid:** system-default sans, rounded display faces, heavy-weighted display sans (Headspace), decorative serifs (DTC supplement), 3+ families on one surface.

---

## Accessibility floor

**WCAG AA.** 4.5:1 minimum for text, 3:1 for UI components. AAA where it lands naturally (primary buttons, headings) but not required.

---

## Hard constraints

Source-of-truth lives in [`design-system-build-2-tokens.md` § Hard Constraints](design-system-build-2-tokens.md). [`MAP.md`](MAP.md) surfaces them in a single table and may add new ones as decisions land. **Do not duplicate them here.**

---

## What this snapshot does NOT decide

Parked questions that subsequent iterations resolve against this chassis:

- Brand mark / logo evolution (corporate Brand Blue ↔ product palette disconnect risk)
- Photography commissioning approach (stock vs. shoot vs. illustration-led)
- Typography licensing budget (paid pairings vs. free)
- Module categorical naming (color-led vs. emotional/functional role-led)
- Dark mode posture (Sword leans dark; Hinge stays light; MHC undecided)
- Exact primary hue + chroma
- Canonical AI surface treatment

---

## Where to look next

| Need | File |
|---|---|
| What's the active version, what's superseded, what's an alt | [`MAP.md`](MAP.md) |
| Why a decision was made | [`decisions.md`](decisions.md) |
| Run a new iteration | [`design-system-interview.md`](design-system-interview.md) → build files |
| Step 1 of build (palette) | [`design-system-build-1-visual.md`](design-system-build-1-visual.md) |
| Step 2 (component preview) | [`design-system-build-1b-components.md`](design-system-build-1b-components.md) |
| Step 3 (tokens + Figma JSON) | [`design-system-build-2-tokens.md`](design-system-build-2-tokens.md) |
| Latest shipped artifact | *TBD — pending first build* |
| Legacy 2021 brand guidelines | `archive/colors/MHC-Brand_Guidelines_FA (2) (1).pdf` (root: `/Users/davinderrehal/@claude/`) |

---

## Maintenance

Update DESIGN.md when:

- A strategic decision lands (logged in `decisions.md`)
- A Hard Constraint is added, removed, or restructured
- The active version pointer changes
- An open question lands (color direction, typography pairing, AI surface, etc.)

Do not update DESIGN.md to log iteration outcomes — that's MAP.md's job.
