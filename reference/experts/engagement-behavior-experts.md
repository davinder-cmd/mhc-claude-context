# Engagement, Behavior Change & Learning-Loop Experts — Reference

People who shaped how we think about **engagement loops, behavior change, gamification, and learning design**. Use these references when the question is *will people come back and keep going?* — habit formation, streaks, rewards, mastery, motivation — not whether an interface is usable (see `ux-usability-experts.md` for that).

**Companion to:** `ux-usability-experts.md` (does it *work*?), `visual-design-experts.md` (does it *look* right?), `product-design-experts.md` (is it the *right thing*?). This doc answers: **does it *retain*?**

**Especially relevant to:** `projects/feature-ebb/` (education-path model, Duolingo/Headspace) and `feature-rewards/`, `feature-healthy-habits/`, `feature-journeys/`.

> **The tiers below are DOMAINS, not a ranking.** "Cross-cutting foundations" means *framework originators everyone else builds on* — it does not mean "more important than" the health or learning sections. For MHC's actual work, the digital-health names (esp. Bucher, Michie) are often the higher-priority reads.

> **Ethics guardrail for MHC:** we build health products, not slot machines. Engagement loops here must be autonomy-supportive and honest. Manipulative retention (dark-pattern streaks, guilt notifications, artificial loss aversion) is a liability in a clinical-adjacent context. Bucher, Michie, and the SDT tradition are the counterweights — read them alongside the mechanics people. Nir Eyal sits on *both* sides of this line (see his entry).

> ⚠️ **Evidence reality-check (2026):** the research pressure-test found the empirical case for *gamification specifically* is weak in health. Don't over-index on points/badges/streaks. See **"What the evidence actually says"** below before designing a reward loop.

---

## Cross-cutting foundations
*Framework originators whose vocabulary everyone else uses. Domain-agnostic.*

### BJ Fogg
**Known for:** Behavior Design, the Fogg Behavior Model (B=MAP), *Tiny Habits*, Stanford Behavior Design Lab
**Current role (verified 2026):** Founder/Director, Behavior Design Lab, Stanford; Adjunct Professor.

**Why he matters:** The physics under every engagement loop. B = MAP (Behavior = Motivation × Ability × Prompt) explains *why a loop fires at all*. His core insight — make the behavior tiny and reduce friction rather than pump motivation — is exactly right for health, where users' motivation is low and unreliable. Design the *first* action with Fogg.

**The model:**
- **Motivation** — how much they want to
- **Ability** — how easy it is (reduce this friction first)
- **Prompt** — the trigger that fires the behavior
- All three must converge at the same moment or the behavior doesn't happen

**Best content:** *Tiny Habits* (book) · behaviordesign.stanford.edu · behaviormodel.org (the canonical B=MAP one-pager)

**Follow:** bjfogg.com, @bjfogg

**What to learn:** Trigger design, friction reduction, why "just be more motivated" always fails, celebration as reinforcement

---

### Nir Eyal — *use as framework + cautionary tale, not role model*
**Known for:** *Hooked* (the Hook Model), *Indistractable*

**Why he matters:** The Hook Model is the shared vocabulary for engagement loops — everyone builds on it. But two caveats the research surfaced:
1. **It's not gamification.** Eyal himself: *"Hooked is not about gamification. It's about finding real value for users."* Don't file him with Chou/Kapp.
2. **It's contested on ethics.** Critics (Per Axbom and others) argue *Hooked* is a manipulation playbook (variable rewards to build compulsion) and *Indistractable* then shifts blame to the user. His two-question ethics test ("Would I use it? Does it materially improve lives?") is widely called inadequate.

**How to use at MHC:** Know the model because everyone references it. Then read it *against* Bucher/SDT — Eyal tells you how to build a compulsion loop; the health question is whether you should. For a clinical-adjacent product, the answer is usually "use the structure, refuse the dark patterns."

**The Hook Model:** Trigger (external → internal) → Action → **Variable Reward** → Investment (loads next trigger)

**Best content:** *Hooked* (the mechanics) · *Indistractable* (the guardrails) · nirandfar.com

**Follow:** nirandfar.com, @nireyal

---

### Yu-kai Chou — *practitioner framework, not empirically validated*
**Known for:** Octalysis gamification framework, *Actionable Gamification*

**Why he matters:** The most complete *taxonomy* of why mechanics motivate — 8 core drives, split "white hat" (empowerment, meaning, accomplishment) vs "black hat" (scarcity, unpredictability, loss avoidance). Useful as a diagnostic: which drives is this design leaning on, and have we drifted into black-hat pressure that's wrong for health?

**Caveat (research flag):** Chou is a consultant/practitioner — no formal academic credentials or institutional affiliation, and Octalysis is **not empirically validated**. Treat it as a structured brainstorming lens, not evidence. For the rigorous version, use **Michie's COM-B** (below).

**The 8 Core Drives:** Epic Meaning & Calling · Development & Accomplishment · Empowerment of Creativity & Feedback · Ownership & Possession · Social Influence & Relatedness · Scarcity & Impatience · Unpredictability & Curiosity · Loss & Avoidance

**Best content:** *Actionable Gamification* · yukaichou.com

---

### Deci & Ryan — *the foundation under Bucher*
**Known for:** Self-Determination Theory (SDT); *Intrinsic Motivation and Self-Determination in Human Behavior*

**Why they matter:** SDT is the research bedrock for *durable, self-motivated* behavior — the three basic needs: **Autonomy, Competence, Relatedness**. This is the theory Amy Bucher operationalizes into health-product design, and the reason extrinsic rewards can *crowd out* intrinsic motivation. If you only remember one thing for a health engagement loop: satisfy these three needs and you get behavior that survives the removal of the reward.

**Best content:** *Self-Determination Theory* (Ryan & Deci, 2017) · selfdeterminationtheory.org

**What to learn:** Autonomy/competence/relatedness, intrinsic vs extrinsic motivation, the overjustification (crowding-out) effect

---

## Digital health & behavior change
*The closest analogues to MHC's problem — engagement and behavior change inside health products.*

### Amy Bucher — ⭐ primary practical reference for MHC
**Known for:** *Engaged: Designing for Behavior Change*, SDT in product form
**Current role (verified 2026):** Chief Behavioral Officer, Lirio · PhD & MA Organizational Psychology, University of Michigan

**Why she matters:** The single most directly applicable person on this list for EBB. She works engagement loops specifically in **digital health**, grounded in Self-Determination Theory (see Deci & Ryan above). Her whole thesis is designing for durable, self-motivated behavior change instead of extrinsic carrot-and-stick loops that collapse the moment you remove the reward — exactly the trap a rewards-heavy health app falls into. She's a *synthesist/translator* rather than a framework originator, which is why she sits here and not in "foundations" — but for your purpose, read her first.

**Best content:** *Engaged: Designing for Behavior Change* (start here for EBB) · talks/articles on SDT-based product design · Lirio writing

**Follow:** @amybphd

**What to learn:** SDT in product form, autonomy-supportive design, designing rewards that don't crowd out intrinsic motivation

---

### Susan Michie — *the rigorous framework Octalysis isn't* (research addition)
**Known for:** COM-B model & the Behaviour Change Wheel (BCW); Behaviour Change Techniques (BCT) Taxonomy
**Current role (verified 2026):** Director, UCL Centre for Behaviour Change; Professor of Health Psychology; Co-Director, Behavioural Research UK

**Why she matters:** COM-B (**Capability, Opportunity, Motivation → Behaviour**) and the Behaviour Change Wheel are *the* dominant academically-validated framework for designing behavior-change interventions, used heavily in digital health and public health. Where Chou's Octalysis is a practitioner lens, Michie's work is the evidence-grounded, peer-reviewed version. Her BCT Taxonomy is a shared vocabulary for *exactly which* technique an intervention uses.

**Best content:** *The Behaviour Change Wheel: A Guide to Designing Interventions* · UCL Centre for Behaviour Change · the BCT Taxonomy (v1)

**What to learn:** COM-B diagnosis, systematic intervention design, naming behavior-change techniques precisely

---

### Katy Milkman
**Known for:** *How to Change*; "fresh-start effect," temptation bundling
**Current role (verified 2026):** James G. Dinan Endowed Professor & Professor of Operations, Information and Decisions, Wharton; co-founder/co-director, Behavior Change for Good Initiative (Penn)

**Why she matters:** Rigorous, evidence-based behavioral science with directly usable loop hooks. The fresh-start effect (people are more open to change at temporal landmarks — Mondays, birthdays, new year) and temptation bundling (pair a should-do with a want-to-do) are concrete mechanics you can build into journeys and habit prompts.

**Best content:** *How to Change* (book) · Behavior Change for Good research · *Choiceology* (podcast)

**Follow:** @katymilkman

**What to learn:** Fresh-start effect, temptation bundling, commitment devices

---

### Kevin Volpp & Mitesh Patel — *the health-incentive evidence base* (affiliations corrected)
**Known for:** Rigorous RCTs applying behavioral economics (financial incentives, gamification, nudges) to patient health behavior — steps, medication adherence, weight

- **Kevin Volpp** *(verified 2026):* Founding Director, **CHIBE** (Center for Health Incentives and Behavioral Economics), Penn; Mark V. Pauly President's Distinguished Professor across Perelman School of Medicine and Wharton. Still the anchor of this evidence base.
- **Mitesh Patel** *(verified 2026 — CORRECTED):* **No longer at Penn.** He founded and ran the **Penn Medicine Nudge Unit (2016–2021)**, then left; as of Nov 2025 he is **Chief Clinical Transformation Officer at Ascension**, still working the behavioral-science + digital-health + clinical-design intersection.

> ⚠️ The "Nudge Unit" was **Patel's**; the "Center for Health Incentives" (CHIBE) is **Volpp's**. Don't merge them.

**Why they matter:** The evidence, not the theory. When someone claims "gamification works for health," this is where you check whether it actually did and under what design conditions (e.g., loss-framed incentives tend to outperform gain-framed).

**Best content:** CHIBE publications · Penn Medicine Nudge Unit trials · Framing Financial Incentives studies (loss aversion in health)

**What to learn:** What's actually proven in health incentives, incentive framing, social-accountability designs that survive real patients

---

### Adaptive-intervention scientists: Susan Murphy, Eric Hekler, Predrag Klasnja — *the science of when/what to prompt* (research addition)
**Known for:** Just-in-Time Adaptive Interventions (JITAIs) and micro-randomized trials (MRTs)

- **Susan Murphy** — Harvard; MacArthur Fellow; the statistical methodology (MRTs) for optimizing *when* and *what* to deliver in mobile health.
- **Eric Hekler** *(verified 2026):* Professor, UC San Diego (Herbert Wertheim School of Public Health + Design Lab); bridges behavior-change theory, design, and rigorous methods.
- **Predrag Klasnja** — Michigan; applied JITAI design in real mHealth products.

**Why they matter:** This is the rigorous, empirical version of "engagement-loop timing." Instead of guessing when to fire a prompt, JITAIs adapt intervention type/intensity to the person's changing state via decision rules — delivered "when and where it is needed." If EBB gets serious about *smart* notifications and adaptive nudging (not blast reminders), this is the literature.

**Best content:** Nahum-Shani et al. on JITAIs · micro-randomized trial methodology (Murphy) · Hekler's work on precision behavioral health

**What to learn:** Adaptive nudging, decision rules for prompts, designing notifications that adapt to state rather than fire on a fixed schedule

---

## Learning & mastery
*Engagement loops for serious learning — the Khan / technical-training axis.*

### Luis von Ahn
**Known for:** Duolingo — the definitive consumer-education engagement loop
**Current role (verified 2026):** Co-Founder & CEO, Duolingo (active in the Q1 2026 earnings call)

**Why he matters:** The reference implementation of the loop EBB is modeling. Nobody has operationalized streaks, XP, leagues, loss-aversion (streak freezes), and re-engagement notifications for *learning* at Duolingo's scale. Study the **product decisions** — the streak widget, freeze mechanic, leagues — more than the interviews.

**Best content:** Duolingo the product (dogfood it) · research.duolingo.com · his talks on making learning addictive-but-good

**Follow:** @LuisvonAhn

**What to learn:** Streak design, XP/leagues, loss-aversion mechanics for good, re-engagement notification strategy at scale

---

### Robert & Elizabeth Bjork — *the empirical bedrock under Duolingo/Khan* (research addition)
**Known for:** "Desirable difficulties" — spacing, interleaving, retrieval practice, contextual variation
**Current role (verified 2026):** Bjork Learning and Forgetting Lab, UCLA (Dept. of Psychology)

**Why they matter:** The learning science that makes an education path actually *teach* rather than just entertain. "Desirable difficulties" is the counter-intuitive finding that making learning slightly harder (spacing it out, mixing topics, forcing recall) produces more durable learning. This is *why* Duolingo's spaced review and Khan's mastery gating work — and the antidote to a feel-good path that doesn't stick.

**Best content:** bjorklab.psych.ucla.edu · "Desirable Difficulties" papers · *Make It Stick* (Brown, Roediger, McDaniel) as the popular synthesis

**What to learn:** Spacing, interleaving, retrieval practice, the difference between performance (looks like learning now) and learning (retained later)

---

### Karl Kapp
**Known for:** *The Gamification of Learning and Instruction* — instructional design + game mechanics

**Why he matters:** The bridge between game mechanics and real pedagogy — mastery, spaced practice, scaffolding, retrieval. Where von Ahn is product instinct, Kapp is the instructional-design theory that tells you *why* a learning loop teaches. Essential for the technical-training / Khan-style side of EBB.

**Best content:** *The Gamification of Learning and Instruction* + fieldbook · karlkapp.com

**Follow:** @kkapp, karlkapp.com

**What to learn:** Mastery learning, spaced practice, scaffolding, structural vs content gamification

---

### Sal Khan
**Known for:** Khan Academy — mastery-based learning, energy points, Khanmigo (AI tutoring)

**Why he matters:** Your named reference. Khan Academy's mastery model — you don't advance until you've demonstrated competence — plus a light engagement layer is the calm, learning-first version of the loop, and a good counterweight to Duolingo's more aggressive mechanics.

**Best content:** *The One World Schoolhouse* · Khan Academy the product (mastery challenges) · his writing on mastery learning + AI tutoring

**Follow:** @khanacademy

**What to learn:** Mastery learning, competence-gated progression, engagement that serves learning rather than the reverse

---

### James Paul Gee
**Known for:** *What Video Games Have to Teach Us About Learning and Literacy*

**Why he matters:** The academic foundation for why well-designed games are extraordinary learning environments — challenge pacing, low cost of failure, just-in-time information, identity. The theory Kapp operationalizes. Read for the deep "why," not tactics.

**Best content:** *What Video Games Have to Teach Us About Learning and Literacy* · his 36 learning principles

**What to learn:** Flow and challenge pacing, productive failure, situated learning, identity in learning

---

## Also worth knowing

| Person | Known for | Use for |
|--------|-----------|---------|
| **Clare Purvis** | Behavioral science lead formerly at Headspace | Practitioner at *exactly* your intersection (Headspace-style health-education product). *Verify current role — data is from ~2020.* |
| **Michelle Segar** | Sustainable behavior change via intrinsic motivation | Autonomy-based health-behavior work; complements Bucher/SDT |
| **Burr Settles** | Duolingo research lead; half-life regression spaced-repetition model | The person who *built* Duolingo's learning engine — concrete, not "go study Duolingo" |
| **Pooja Agarwal** | Retrieval practice (retrievalpractice.org) | Retrieval practice made practical for education products |
| **Jane McGonigal** | *SuperBetter*, *Reality Is Broken* | Games explicitly designed for wellbeing/resilience |
| **Sebastian Deterding** | Academic gamification, "gameful design" *(now Chair in Design Engineering, Imperial College London)* | The critical, research-grounded view; antidote to hype |
| **Rajat Paharia** | *Loyalty 3.0*, founded Bunchball | Enterprise/loyalty gamification pioneer — dated but foundational |
| **Charles Duhigg** | *The Power of Habit* | Popular cue-routine-reward habit framing (journalism, not primary research) |
| **Wendy Wood** | *Good Habits, Bad Habits* | Rigorous habit science — context/friction over willpower |

---

## What the evidence actually says (2026 pressure-test)

Two findings that should shape how aggressively you gamify a health-education product:

- **Gamification's step-count effect is trivial.** A 2024 systematic review/meta-analysis (36 RCTs, 10,079 adults, *eClinicalMedicine*) found gamified health apps added only **~489 steps/day** vs non-gamified — and the certainty of even that small effect is **not** high. Gamification is a marginal additive, not a transformative engagement driver.
- **For mental-health apps, gamification did NOT improve retention — and may hurt it.** A Nov 2025 *JAMA Psychiatry* meta-analysis (Liu et al., 79 RCTs of depression/anxiety apps) found that **reminders and human contact reduced dropout, while gamification elements did not** (and may weaken retention).

**Implication for EBB:** for a Headspace-style, clinically-adjacent education path, prioritize **reminders, human/coach contact, mastery, and SDT-style autonomy support** over points/badges/streaks. Use gamification lightly and instrumentally — not as the primary retention strategy.

---

## Frameworks Quick Reference

### Fogg Behavior Model — B = MAP
Diagnosing why a behavior isn't happening. Behavior fires only when **Motivation × Ability × Prompt** converge. If it fails: too hard (Ability)? no trigger (Prompt)? genuinely unwanted (Motivation)? **Fix Ability first** — cheaper and more reliable than boosting motivation.

### Michie's COM-B / Behaviour Change Wheel
The rigorous, validated intervention-design framework. Behaviour = **Capability × Opportunity × Motivation**. Diagnose which is missing, then select intervention functions + specific Behaviour Change Techniques. Use this where you'd otherwise reach for Octalysis and want evidence behind it.

### Self-Determination Theory (Deci & Ryan; Bucher applies it)
Designing for durable, intrinsic motivation. Satisfy three needs: **Autonomy** (in control, not coerced), **Competence** (capable, progressing), **Relatedness** (connected to others/purpose). Beware: extrinsic rewards can **crowd out** intrinsic motivation.

### Eyal Hook Model
A habit-forming loop: **Trigger** (external → internal) → **Action** → **Variable Reward** → **Investment** (loads next trigger). Ethics check for health: use the structure, refuse the dark patterns.

### Chou Octalysis — 8 Core Drives (brainstorming lens, not evidence)
Auditing which motivations a design leans on. **White hat** (sustainable): Meaning, Accomplishment, Empowerment. **Black hat** (pressure — use sparingly in health): Scarcity, Unpredictability, Loss Avoidance. Ask: *are we motivating with growth, or with anxiety?*

### Bjork's Desirable Difficulties (learning)
Making learning slightly harder produces more durable retention: **space** repetitions over time, **interleave** topics, force **retrieval** (recall > re-reading). Distinguish *performance* (looks learned now) from *learning* (retained later).

---

## How to Use This Reference

### When designing an engagement loop (EBB, journeys, habits):
1. Map the loop with **Eyal's Hook Model** — then ethics-check it against Bucher/SDT
2. Pressure-test the *first action* with **Fogg's B=MAP** (is it tiny enough?)
3. For rigor, run a **COM-B (Michie)** diagnosis; use **Octalysis** only as a brainstorming lens
4. Sanity-check ethics with **Bucher / SDT** — is this autonomy-supportive?

### When designing rewards (feature-rewards):
1. **Bucher / SDT** first — will these rewards crowd out intrinsic motivation?
2. **Volpp & Patel** + the evidence section — what's actually proven (loss vs gain framing)?
3. Remember the meta-analyses: gamification is a **marginal** driver — don't over-build it
4. **Chou** — are we over-relying on points/badges/leaderboards?

### When designing learning/mastery paths (EBB education model):
1. **Kapp** for instructional structure; **Bjork** for the retention science (spacing/interleaving/retrieval)
2. **von Ahn / Duolingo** (and **Burr Settles** for the actual engine) for the engagement layer
3. **Khan** for competence-gated progression — learning-first, calm mechanics
4. **Gee** for the deep "why games teach" theory

### When designing notifications / prompts:
1. Default to **reminders + human/coach contact** — the evidence says these retain
2. For smart timing, look at **JITAIs (Murphy/Hekler/Klasnja)** — adapt to state, don't blast on a schedule

### When justifying (or killing) a gamification idea:
1. **Volpp & Patel** + the evidence section for what works in health
2. **Deterding** for the critical/research view
3. **Eyal (Indistractable) + Bucher** for the ethics gut-check

---

## Verification note

Names, roles, and frameworks in this doc were pressure-tested via multi-source deep research (2026-07-01): 26 sources, 24 claims verified by 3-vote adversarial check. Key corrections applied: Mitesh Patel (now Ascension, not Penn), Volpp/CHIBE vs Nudge-Unit disentangled, Deterding (now Imperial College London). Additions from research: Deci & Ryan (SDT), Susan Michie (COM-B/BCW), the JITAI cluster (Murphy/Hekler/Klasnja), the Bjorks (desirable difficulties), plus practitioner mentions (Purvis, Segar, Settles, Agarwal). Primary sources on file: Stanford Behavior Design Lab, behaviormodel.org, Lirio, Wharton/OID, CHIBE, UCL CBC, Duolingo investor relations, plus *eClinicalMedicine* (2024) and *JAMA Psychiatry* (Nov 2025) meta-analyses.

---

## Revision Log

| Date | Change |
|------|--------|
| 2026-07-01 | Initial version — 12 experts across foundations, digital health, and learning/mastery; 4 frameworks. Complements `ux-usability-experts.md`. |
| 2026-07-01 | Deep-research revision. Relabeled tiers as domains (removed implied ranking); added Deci & Ryan (SDT foundation) + Bucher "primary reference" marker; corrected Patel (Ascension) and untangled Volpp/CHIBE vs Nudge Unit; added Susan Michie (COM-B/BCW), the JITAI cluster (Murphy/Hekler/Klasnja), and the Bjorks (desirable difficulties); added evidence reality-check (gamification is a marginal driver in health; may hurt retention in mental-health apps); reframed Eyal (cautionary) and flagged Chou (unvalidated practitioner framework); added COM-B, SDT, desirable-difficulties to frameworks reference; added verification note. |
