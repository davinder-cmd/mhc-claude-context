# DCP: Diabetes — Sub-Feature Brief

> **For agents:** Read `projects/feature-dcp/_brief.md` before this file.
> Last updated: March 2026

---

## What This Sub-Feature Is

The Diabetes suite covers two distinct programs: **Diabetes Prevention** (for members with prediabetes or elevated risk) and **Diabetes Management** (for members with a Type 2 diagnosis). A third adjacent program, **GLP-1 Support**, serves members on GLP-1 medications. These are MHC's highest-stakes metabolic DCPs and the primary target of the Conditions surface.

## Member Goal

**Prevention:** Understand their prediabetes risk and take concrete steps — lifestyle changes, nutrition, movement — to avoid or delay a Type 2 diagnosis.

**Management:** Live better with diabetes through structured self-management education, without feeling overwhelmed or judged.

## Business Goal

Metabolic programs (diabetes, weight, cardiovascular) are the highest-ROI programs for employers because of the direct healthcare cost impact. Diabetes Prevention in particular has strong CDC-recognized evidence. These programs are a key part of MHC's outcomes story and a growth area.

## Clinical Framework

**Prevention:**
- Evidence base: CDC-recognized Diabetes Prevention Program (DPP) framework
- Intake assessment: Prediabetes risk score, fasting blood glucose (if available)
- Key metric: weight loss (5–7% body weight reduction is the clinical threshold)

**Management:**
- Evidence base: DSMES (Diabetes Self-Management Education and Support) guidelines
- Intake assessment: HbA1c values (if available via biometrics), self-reported diagnosis
- Key metric: HbA1c improvement, self-management behaviors

**Both programs:**
- AI coaching methodology: Motivational Interviewing
- AI agent: General/Metabolic agent (not MSK or Behavioral Health)

## Key Constraints

- Never use diagnostic language — "elevated risk" not "you have prediabetes"
- Biometric data (blood glucose, HbA1c) is especially sensitive — HIPAA, careful UI handling
- Prevention and Management are distinct programs — do not conflate enrollment flows
- GLP-1 Support is a separate, adjacent program — design must account for this variant
- Data from Conditions surface feeds enrollment — coordinate with `feature-conditions`

## Differentiators vs. Competitors

- Virta Health: direct competitor for diabetes management (ketogenic approach)
- Noom: consumer-facing weight/metabolic, weaker clinical credentials
- Omada Health: strong DPP competitor, well-established
- MHC angle: integrated into a broader wellbeing platform vs. standalone app

## Stakeholders

| Person | Role | What They Care About |
|--------|------|---------------------|
| Al Young | Digital Care Initiative Lead | Clinical fidelity, CDC alignment, outcomes |
| Alex Young | VP of Product | Enrollment from Conditions surface, completion rates |
| Darcy Loeb | Head of Product | Non-alarmist member experience |

## Related Context

- `projects/feature-dcp/_brief.md` — parent DCP architecture
- `projects/feature-conditions/_brief.md` — primary enrollment entry point for diabetes risk
- `projects/feature-biometrics/_brief.md` — blood glucose and HbA1c data feeds these programs
- `competitive-analysis.md` — Omada, Virta, Noom competitive notes

## Figma

- Diabetes Prevention screens: [link]
- Diabetes Management screens: [link]
