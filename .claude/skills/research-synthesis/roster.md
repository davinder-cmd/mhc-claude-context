# User Research Methods — Reference

People and methods for doing real user research **as a team of one** — no dedicated researcher, no research ops, just you, the product, and limited time. Use this when the question is *how do I find out if this is true*, not *what do the usability heuristics say* (see `ux-usability-experts.md` for evaluation frameworks — this doc is about generating evidence, not applying a checklist to a finished design).

**Companion to:** `ux-usability-experts.md` (Tier 2 — Spool, Hall, Wroblewski, Jarrett already live there as the expert roster; this doc is the practical operating layer under them). `dtx-dcp-experts.md` (clinical/DCP research has extra ethical weight — see the clinical-population section below).

**Especially relevant to:** any new feature before it's built, any redesign before it ships, `feature-dcp/` work involving people with an active health condition.

---

## Tier 1: How to Do Research Alone

*The people who specifically solved "one person, real constraints, still get valid signal."*

### Leah Buley
**Known for:** *The User Experience Team of One*

**Why she matters:** The single most directly applicable book on this list. Written explicitly for the situation you're in — no research team, no budget for a lab, still need real answers. Her guidance on "guerrilla" methods that are honest about their limits (not full-rigor, but not nothing) is the right calibration for a one-person practice.

**Best content:** *The User Experience Team of One* (book) — read this first, before anything else here

**What to learn:** Which methods scale down to one person, how to be honest about a small-sample finding's limits, prioritizing research effort against what a decision actually needs

---

### Erika Hall
**Known for:** *Just Enough Research*, research ethics, avoiding "research theater"

**Why she matters:** The corrective to over-building a research process you don't have time to run. Her core question — *what decision does this research inform, and what's the minimum rigor that decision needs?* — is the filter for every method below. Skip a method if it doesn't change what you'd do next.

**Best content:** *Just Enough Research* (book) — the method-selection logic itself

**What to learn:** Right-sizing research to the decision, avoiding research that produces interesting-but-unactionable findings

---

### Steve Krug
**Known for:** *Rocket Surgery Made Easy*, guerrilla usability testing, "test with 3 users, that's enough"

**Why he matters:** His core claim — that testing with three people on a Tuesday morning beats testing with none, and beats waiting for the budget for eight — is the permission a one-person team needs to actually run sessions instead of deferring them. Most of what's wrong with a design shows up in the first 3–5 sessions; the marginal 6th–10th session mostly confirms.

**Best content:** *Rocket Surgery Made Easy* (book) — literally a step-by-step guide to running your own test with no research background

**What to learn:** Recruiting fast and cheap, running a session solo (moderating + notetaking), why 5 users surfaces most usability problems

---

## Tier 2: Running the Session

*Practical craft — discussion guides, question wording, synthesis.*

### Caroline Jarrett
**Known for:** *Forms That Work*, *Surveys That Work*, question wording

**Why she matters:** Directly applicable to MHC's health assessments and onboarding flows. Bad question wording produces bad data regardless of sample size — this is where most solo research actually breaks, not in the method choice.

**Best content:** *Forms That Work* · *Surveys That Work* (free online) · effortmark.co.uk

**What to learn:** Question wording that doesn't lead the respondent, form/survey structure, when a question is actually two questions

---

### Indi Young
**Known for:** *Practical Empathy*, *Mental Models*, listening-based qualitative research

**Why she matters:** Best corrective to the trap of asking users what feature they want (they're bad at predicting this) versus listening for the problem and reasoning behind their behavior. Her thinking-styles/mental-model interviewing method produces findings that hold up longer than feature-preference surveys.

**Best content:** *Practical Empathy* (book) — the listening method · *Mental Models* (book) — synthesizing across interviews

**What to learn:** Listening-session structure, separating "what they say they want" from "what problem they're actually solving," building a mental-model map from interview data

---

### Tomer Sharon
**Known for:** *It's Our Research*, *Validating Product Ideas*, guerrilla + lean research at scale (Google, WeWork)

**Why he matters:** Practical playbooks for validating an idea *before* building it, with methods sized to a startup/lean team rather than an enterprise research org — closer to MHC's actual constraints than most academic research methodology.

**Best content:** *Validating Product Ideas* (book) — method-by-method playbook · *It's Our Research* — embedding research culture without a research team

**What to learn:** Fast validation methods, five-second tests, concierge/Wizard-of-Oz testing before building

---

## Tier 3: Clinical & Vulnerable-Population Research

*Extra rigor required when the participant has an active health condition — depression, anxiety, chronic pain, diabetes. This is not optional polish; it's where standard guerrilla methods stop being sufficient on their own.*

> **Read this before recruiting DCP participants.** A person managing depression or an active MSK condition is a different research subject than a general consumer — question framing, session length, and topic sensitivity all need adjustment. Cross-reference `dtx-dcp-experts.md` for the clinical-evidence side of this; this section is the *research-conduct* side.

### What changes with a clinical population
- **Informed consent is not a formality.** Even a low-stakes usability session should tell participants what's being recorded, how it's used, and that they can stop at any time — more explicitly than a general-consumer guerrilla test would.
- **Avoid triggering framing.** A depression-DCP usability test that opens with "tell me about your worst day" is a research-ethics problem, not just a bad discussion guide. Lead with product tasks, not condition narrative, unless the condition narrative is the explicit research question.
- **Session length and pacing matter more.** Fatigue, cognitive load from an active condition, and chronic pain from prolonged sitting are real confounds — shorter sessions, more breaks, than a general-population test.
- **Recruit through appropriate channels**, not just convenience sampling — a friend-of-a-friend with depression is not representative of MHC's actual DCP population, and treating them as such risks building for the wrong severity band.

### Reference point
**Cyd Harrell** — *A Civic Technologist's Practice Guide* (already in `ux-usability-experts.md` Tier 3) — her inclusive-design and diverse-population research thinking transfers directly to clinical populations even though her domain is civic tech, not health: the core discipline of designing research for people who are not you, and who may have less trust or bandwidth to give you, is the same problem.

---

## Practical Playbook — Solo, One Week

*A concrete default when you have a design or flow that needs real signal and roughly a week.*

1. **Define the decision, not the topic** (Hall) — write down the specific decision this research changes. If nothing changes based on the answer, don't run it.
2. **Write a discussion guide** (Jarrett) — 5–7 open questions max, task-based if it's a usability question, listening-based (Young) if it's a "do they even have this problem" question.
3. **Recruit 5 participants** (Krug) — from the actual ICP, not convenience. For DCP work, recruit from the relevant condition band and apply the Tier 3 consent/framing adjustments.
4. **Run sessions solo** — moderate and record (with consent); don't try to take detailed notes live, review the recording after.
5. **Synthesize within 24 hours** — patterns fade from memory fast; Young's mental-model mapping or a simple affinity cluster of quotes both work at this scale.
6. **Write the decision down** — one paragraph: what you learned, what you're doing differently because of it. This is the artifact that makes the research count as research rather than a nice conversation.

---

## How to Use This Reference

### When starting research for a new feature or redesign:
1. Hall — confirm the decision this research needs to inform
2. Krug/Buley — pick the smallest method that will produce that answer
3. Jarrett — check your question wording before you recruit anyone

### When the research is about a problem, not a design:
1. Young — listening-based interview, not a feature-preference survey
2. Sharon — five-second tests or concierge tests if you need to validate demand before building

### When recruiting for DCP / clinical-population research:
1. Read Tier 3 in full before writing the discussion guide
2. Cross-check with `dtx-dcp-experts.md` for evidence-standard context
3. Adjust consent language, session length, and framing — don't reuse a general-consumer guide unmodified

### When you don't have time to run anything:
1. Sharon's five-second test or a lightweight concierge test still beats zero signal
2. State the limitation explicitly in whatever you ship the finding into — don't let a 3-person guerrilla test get cited later as if it were powered research

---

## Revision Log

| Date | Change |
|------|--------|
| 2026-09-04 | Initial version — solo-practice methods, session craft, clinical/vulnerable-population research conduct, one-week playbook. |
