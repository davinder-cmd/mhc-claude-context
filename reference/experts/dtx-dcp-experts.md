# Digital Therapeutics (DTx) & Care-Delivery Experts — DCP Reference

Best-practice references for delivering **evidence-based clinical care programs through a product** — what MHC calls **Digital Care Paths (DCPs)**: our condition programs for depression, anxiety, back pain / MSK, and diabetes (`projects/feature-dcp/`).

> **⚠️ This is a SECONDARY, cross-reference layer — it does not supersede the UX experts.**
> Usability and human-centered design come first (`ux-usability-experts.md`, `ux-laws-quick-reference.md`). Reach for *this* doc **after** the UX foundations, to pressure-test a specific question: *does this DCP meet digital-therapeutics delivery and evidence standards — clinical rigor, planned-for engagement decay, human-in-the-loop, reimbursement reality?* Never let a DTx "best practice" override a usability finding; use it to raise the clinical/evidence bar, not to redesign the interface.

> **Companion to** `engagement-behavior-experts.md` — that doc covers *why people come back* (loops, motivation, learning). This one covers *how you package clinical care around that loop* so it's a legitimate therapeutic, not just a wellness feature. Eysenbach's Law of Attrition (below) is the natural bridge between the two.

---

## How to use this doc

Consult it when a DCP question is about **clinical delivery**, not interface:
- "Is this program rigorous enough to call a therapeutic?" → **Coder / DTA standards**, **Torous**, **Mohr**
- "How do we deliver a condition program at scale through app + humans?" → **Duffy / Omada**, **Bento / Sword**
- "What retention should we expect, and how do we measure it honestly?" → **Eysenbach's Law of Attrition**
- "What kills DTx companies even when the product works?" → **Pear**, **Akili** (cautionary tales)

---

## Anchor references

### Sean Duffy (Omada Health) — the delivery-model exemplar
**Verified 2026:** Still founder/CEO. Omada IPO'd on Nasdaq (**OMDA**) June 2025; actively operating (~$78M Q1'26 revenue, +42% YoY).

**Why he matters:** Omada is the closest successful analogue to a DCP — a structured, evidence-based, **coach-supported** clinical program (diabetes prevention, hypertension, MSK, behavioral health) delivered through an app at scale. If you want one operator who has *shipped and sustained the DCP model*, it's Duffy. Study the **app + human-coaching** blend and the enrollment/engagement funnel.

**Caveat:** Cite Omada as a *care-delivery* exemplar, not a business-performance one — its market cap fell ~22% post-IPO (~$828M). The model is proven; sustained public-market success is not the lesson here.

**What to learn:** Program structure, human-in-the-loop coaching, enrollment → activation → sustained-engagement funnel, employer/payer distribution

---

### Megan Coder & the DTA standards — the "what counts as a DTx" backbone
**Verified 2026 (corrected):** Coder is **Chief Policy Officer & Founder** of the Digital Therapeutics Alliance (DTA) — *not* its CEO. **The DTA no longer exists as an independent body**: it was acquired by **ATA Action** (American Telemedicine Association) in March 2025 and folded into the **Advancing Digital Health Coalition** (led by Andy Molnar). The *standards artifacts* live on and remain the reference.

**Why they matter:** The definitional bar. Coder authored the field's core best-practice frameworks — the **DTx Evaluation Toolkit** and the **Value Assessment & Integration Guide** — the checklist for whether something is a legitimate therapeutic (clinical evidence, real-world outcomes, regulatory posture) vs a wellness feature. Use these to gut-check whether a DCP earns the "care path" label.

**What to learn:** DTx evaluation criteria, evidence tiers, the line between therapeutic and wellness, regulatory posture

---

## Condition-matched exemplars
*Your DCP portfolio is condition-specific; the best delivery analogues are too.*

| Your DCP | Exemplar (verified status) | What to take from it |
|---|---|---|
| **Back Pain / MSK** | **Sword Health** — Virgílio Bento, founder/CEO (operating, ~$3–5B, 700k+ patients; now an "AI Care Platform"). *You're already mood-boarding Sword.* | Digital PT delivery, motion/exercise guidance, clinician oversight at scale |
| **Back Pain / MSK** | **Hinge Health** — Daniel Perez, CEO (public, operating, strong 2026) | Second MSK model; sensor + exercise-therapy program design |
| **Depression / Anxiety** | **Big Health** (Sleepio, Daylight) — 16 RCTs, NICE guidance, FDA SleepioRx (2024). Co-founder **Colin Espie** is the CBT-I clinical authority. | Manualized CBT delivered as software; the gold standard for *evidence-first* behavioral DTx |
| **Depression / Anxiety** | **SilverCloud by Amwell** (retained & operating after Amwell's 2025 psychiatric-care divestiture) | App-delivered CBT-based behavioral health at scale |
| **Diabetes** | **Omada Health** (see above) | The origin story of digital chronic-care programs |

> **Big Health correction:** co-founder **Peter Hames LEFT** the company (~2023/24) and is now **VP Health at Microsoft AI**; **Yael Berman** is CEO (since April 2024). Cite the *product + evidence + Espie*, not "Hames, CEO."

---

## Academic authorities — the highest-value additions
*Where the rigorous, current thinking on DTx *delivery and engagement* actually lives.*

### David C. Mohr (CBITs, Northwestern) — implementation science
**Verified 2026:** Founding Director, Center for Behavioral Intervention Technologies (CBITs), Northwestern Feinberg (NIH/NIMH-funded; ALACRITY Center). *Note: announced he'll step down as director in early 2026 — successor search underway — but remains the field's implementation-science authority.*

**Why he matters:** His distinguishing focus is **implementing** digital mental-health interventions sustainably *in real healthcare systems* — not just building them. This is precisely the DCP problem: not "can we make the program," but "will it actually get used and stick in practice." His 2026 keynote title says it: *"Making Digital Mental Health Work in the Real World."*

**What to learn:** Implementation science, sustained real-world adoption, why efficacious interventions fail in practice

---

### John Torous (Digital Psychiatry Division, BIDMC / Harvard) — the evidence authority
**Verified 2026:** Director, Digital Psychiatry Division, Beth Israel Deaconess Medical Center; Harvard Medical School faculty; 150+ (likely 300+) peer-reviewed articles; Editor-in-Chief, *JMIR Mental Health*; web editor, *JAMA Psychiatry*; runs mindLAMP / mindapps.org.

**Why he matters:** The most-cited current voice on **what the evidence actually shows** for app-based mental health — efficacy, engagement, and app *evaluation*. mindapps.org is a practical framework for judging whether a mental-health app is credible. Directly relevant to the depression/anxiety DCPs.

**What to learn:** App evaluation frameworks, mental-health evidence standards, separating hype from validated intervention

---

### Gunther Eysenbach — the "Law of Attrition" (the DCP retention framework)
**Verified:** *"The Law of Attrition,"* J Med Internet Res 2005;7(1):e11 — ~2,300+ citations; by JMIR's founding editor. Dated but **still canonical**.

**Why it matters:** The single most useful framework for planning DCP engagement honestly. It establishes that **substantial dropout is near-universal** in eHealth (unlike drug trials) and that engagement must be measured as **two distinct things**:
- **Dropout attrition** — lost to follow-up (retention)
- **Nonusage attrition** — still enrolled but stopped using the app (active use)

**What to learn:** Plan for attrition from day one; instrument *both* retention and active-use; don't report enrollment as if it were engagement. This is the bridge to `engagement-behavior-experts.md` — the loops in that doc are your countermeasures against the decay this law predicts.

---

## Cautionary tales — cite as failures, not models

### Pear Therapeutics (Corey McCann) — the prescription-DTx collapse
**Verified:** Filed **Chapter 11 in April 2023**; assets sold "for parts" (~$6.05M, below ~$32M debt) at a **May 2023 auction** to four buyers. The pioneer of FDA-cleared prescription DTx (reSET, reSET-O, Somryst).

**The lesson:** Pear had **FDA clearance and clinical evidence and still failed** — killed by reimbursement and commercial-model problems (payers wouldn't pay, prescriptions didn't scale). For MHC: clinical rigor is necessary but *not sufficient*; distribution and the payment model decide whether a DCP survives. This is the most important single case study in the space.

### Akili Interactive / EndeavorRx — game-based DTx
**Directional (lighter verification):** The FDA-cleared video-game therapeutic for pediatric ADHD; the company struggled commercially post-SPAC and **sold its assets (~2024)**. Same lesson as Pear from a different angle: a clever, cleared product is not a viable business without distribution and reimbursement.

---

## Best-practice principles distilled for DCPs

What to actually carry into DCP design, drawn from the above:

1. **Evidence bar first** (Coder/DTA, Torous) — decide what evidence tier a DCP must meet to be called a care path, not a wellness feature.
2. **Plan for attrition** (Eysenbach) — assume decay; instrument dropout *and* nonusage separately; design the engagement loop as the countermeasure.
3. **Human-in-the-loop** (Duffy/Omada) — coaching/clinician touch is a repeated differentiator in programs that sustain engagement; the JAMA Psychiatry finding in the engagement doc agrees (human contact reduces dropout).
4. **Implementation, not just efficacy** (Mohr) — design for how it lands in a real member's life and workflow, not just whether it works in a trial.
5. **Distribution & payment decide survival** (Pear, Akili) — a clinically valid DCP still dies without a viable distribution/reimbursement model. Design with that reality in view.

---

## Verification note

Pressure-tested via multi-source deep research (2026-07-02): 25+ sources, findings verified by 3-vote adversarial check. Corrections applied vs. initial framing: **Peter Hames left Big Health** (now VP Health, Microsoft AI; Yael Berman is CEO) — anchor Big Health on co-founder Colin Espie + the evidence; **Megan Coder is DTA's Chief Policy Officer & Founder, not CEO**, and **the DTA was absorbed into ATA Action (March 2025)** — cite her standards artifacts. Confirmed: Duffy/Omada (IPO'd OMDA June 2025, operating), Bento/Sword (operating), Pear Chapter 11 + asset auction (2023). Additions surfaced by research: David C. Mohr (CBITs/Northwestern), John Torous (BIDMC/Harvard), Gunther Eysenbach (Law of Attrition), Hinge Health, SilverCloud by Amwell, Akili (cautionary). Primary sources on file: Omada IPO coverage (CNBC/TechCrunch), vbento.com + EY 2026, ATA Action press release, dtxalliance.org, STAT/FierceBiotech (Pear), CBITs Northwestern, BIDMC Digital Psychiatry, JMIR 2005;7(1):e11.

---

## Revision Log

| Date | Change |
|------|--------|
| 2026-07-02 | Initial version — standalone DCP cross-reference layer (secondary to UX experts). Anchors: Duffy/Omada (delivery), Coder/DTA (standards). Condition-matched exemplars (Sword, Hinge, Big Health, SilverCloud, Omada). Academic authorities (Mohr, Torous, Eysenbach's Law of Attrition). Cautionary tales (Pear, Akili). Distilled DCP best-practice principles. All roles/statuses deep-research-verified 2026-07-02. |
