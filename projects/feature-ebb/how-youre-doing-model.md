# "How you're doing" — the measurement model + the bottom of the topic page

> What we assess, how it's shared across every DCP, and what the bottom third of the topic page should actually do. Grounds the "How you're doing" component and retires the daily mood logger.
> Date: 2026-07-08

---

## Four different "assessments" — only one powers "How you're doing"

| # | Thing | When | Purpose | Is it "How you're doing"? |
|---|---|---|---|---|
| 1 | **Onboarding Health Assessment (HRA)** | Once, before any DCP | NCQA ~50–64Q → disease-risk scores → *which* DCP + EBB eligibility | ❌ answers "what should I work on" |
| 2 | **The DCP's outcome measure** | Baseline at intake + periodic + end | One condition-specific validated instrument, tracks change | ✅ **this is it** |
| 3 | **In-lesson "check-ins"** | Inside a session | Therapeutic exercise (e.g., CBT thought check-in) | ❌ skill practice, no score |
| 4 | **Daily mood logger** | Considered for v1 ("mood this week · Log today") | Self-reported daily mood | ❌ **cut** — see below |

**"How you're doing" reads only from #2** — the DCP's own instrument, comparing the latest result to baseline. The depression program says it plainly: *"Answer the questions to determine your baseline symptoms. At the end… you will repeat the assessment to see how your symptoms have changed."*

## The shared framework (one component, every DCP)

The instrument differs by condition; the structure is identical:

| DCP | Instrument | "Better" = | Plain-language readout |
|---|---|---|---|
| Depression | PHQ-9 | score ↓ | "feeling better" ↗ |
| Anxiety | GAD-7 | score ↓ | "less on edge" ↗ |
| Insomnia | ISI | score ↓ | "sleeping better" ↗ |
| Back / MSK | Pain 0–10 + function | pain ↓ / function ↑ | "less pain, moving more" ↗ |
| Diabetes | HbA1c / glucose | toward target | "trending toward your goal" ↗ |

Four steps, always:
1. **Baseline** at intake.
2. **Re-measure** at checkpoint(s) / end (same instrument).
3. **Clinical "meaningfully better" threshold** (reliable change / MCID), clinician-owned.
4. **Direction** (latest vs. baseline) → **normalized to a shared plain-language line** — never the number, never the instrument name.

Normalization is the trick: PHQ-9 (0–27), pain (0–10), A1c (%) are incomparable, so each maps to the *same* direction-based sentence + ↗. **Universal label, condition-specific signal inside.**

## The three states (works at any point in the DCP)

Event-driven — updates only when a new measurement lands:
- **Too early** (baseline only) → no claim: *"Your next check-in is at Session X."*
- **Improving** (beats baseline past threshold) → *"You've been feeling better since you started ↗."*
- **Flat / worse** → honest + supportive (*"change takes time"*), surface Anna/coach; crossing a **safety threshold** routes to the existing **crisis** flow.

Charter (from `_decisions.md`): **keep it only if we act on the signal.** We do (coach + crisis routing), so it earns its place. Non-response is the *most* valuable signal — it catches attrition/deterioration early.

---

## What the bottom third of the topic page should be

**Retire the daily mood logger ("Your mood this week · Log today").** Its problems: it's *homework* (a daily task), it risks *crowding out* intrinsic motivation (external logging can erode it), it *duplicates* the real measure (PHQ-9) with a weaker one, and it's *not actionable* — we don't do anything with a daily mood dot.

**Replace it with the outcome + check-in zone** — one adaptive slot that is the member-facing surface of measurement-based care:

| State | What it shows | Job |
|---|---|---|
| **Check-in due** | A light one-tap prompt: *"Quick check-in — how have you been?"* | **Collect** the periodic instrument (this is how new data arrives) |
| **Result available** | "How you're doing": feeling better ↗ / too early / needs support | **Reflect** the trajectory |
| **Needs support** | Supportive line + Talk to Anna / coach; crisis route if threshold crossed | **Act** on a bad signal |
| **Nothing due, no fresh result** | Quiet — persist the last readout, or a light coach line, or collapse | Don't manufacture a daily task to fill space |

**What we're tracking:** the DCP's own clinical instrument (e.g., PHQ-9), at baseline + periodic checkpoints — *not* daily mood. Same data that proves the program works clinically and commercially.

**Why it earns the bottom third (the value):**
- **Proof of efficacy** → competence (SDT) → motivation that outlasts the $100 (crowding-out antidote).
- **Being seen** → relatedness / human-in-the-loop.
- **Early help + safety** → routes to coach/crisis when it's not working.
- **Generates the outcome record** (PHQ-9 deltas) the DCP is judged on.

**How it sits with the rest of the page** (topic-page-scope decision): the top is the **action** zone (Continue + progress + path); the bottom is the **outcome** zone (am I actually getting better?). Data self-tracking still lives on the **tracker**, resources in the **lesson / Anna** — the bottom third is *only* this one outcome/check-in slot, event-driven, never a content hub.

## Open (needs clinical sign-off)
- The score-delta → plain-language thresholds per instrument, and the copy for each state.
- Check-in **cadence** (every N sessions? aligned to the program's own re-assessment schedule).
- The flat/worse → escalation trigger (which measure value routes to crisis).
