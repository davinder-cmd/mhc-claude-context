# Claude Design Prompt — Flow B: Enrolled Teammate (LifeForce progression)

**Companion to:** the lifecycle flow map (Flow B) and `design-prompt-flowA-unenrolled.md`.

**Note:** Flow A (enrollment) is already built in this system (see `Updated_LifeforceUX_V2/`). Flow B must be a seamless continuation. **The MHC brand design system is the source of truth** — the exported token bundle, not eyeballed screen values.

**How to use:**
1. Attach the **MHC design-system bundle** — authoritative for all colors, type, spacing, radii: `Updated_LifeforceUX_V2/LifeForce enrollment flow/_ds/mobile-health-design-system-.../colors_and_type.css` (and its `README.md`). Build against these tokens exactly.
2. Attach the **shared icon set** and reuse its exact SVG paths: `Updated_LifeforceUX_V2/LifeForce enrollment flow/lifeforce-icons.svg.html`. Do not substitute a library icon set.
3. Attach the **V2 screenshots** as the layout/composition reference (how the tokens are arranged per screen): `Updated_LifeforceUX_V2/` (all screenshots). Flow B must look like a continuation of these. If a screenshot's eyeballed color differs from a DS token, **the DS token wins.**
4. Attach a **screenshot of Flow B from the lifecycle flow map** — AFTER the above, for connective structure (branches, loops, phase/empty-state variants, hand-off from Flow A).
5. Attach as **content source only** (not visual model): `Current_Dashboard_Sreenshots/EnrolledUser/` screenshots (phase tile, My Progress/Goals biometrics table, recommended programs).
6. Paste the prompt below.

---

**Role & goal.** You are designing a connected, end-to-end mobile flow for Mobile Health Consumer (MHC), an employer wellbeing app. This is the **enrolled-teammate journey** for Truist's **LifeForce** program — a nurse-coached program that earns monthly medical credit as the teammate progresses through Phases 1–5 — rebuilt natively inside MHC's **Health Programs** experience (LifeForce is a **"Special Program" in Digital Care**). Produce polished, high-fidelity mobile screens (concept, not production) that visibly **connect as one flow**.

**Reference images.** The **MHC design-system bundle (`_ds/…/colors_and_type.css`) is the source of truth** for all tokens — match it exactly. The V2 screenshots show layout/composition; where a screenshot's eyeballed color differs from a DS token, the **DS token wins**. The "current LifeForce" screenshots are the legacy dashboard I'm replacing — **content source only**, not the visual model.

**Visual system (MHC brand tokens — from `colors_and_type.css`, authoritative):**
- **Font: use the V2 system stack** `-apple-system, 'SF Pro Text', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif` (NOT Raleway — match the V2 render). Weights: 800 titles / 700 section headers + buttons + labels / 400 body. Type scale (from V2): screen titles 24–34px, section headers ~17px, body 15–16px, small labels 11–13px.
- **Primary — Brand Blue `#0f497f`** (`--mh-brand-blue`): primary buttons on light, links, active nav, logo, hero/dark sections.
- **Secondary (bright, use sparingly — one accent per composition):** Aqua `#04a0b7`, Spring Green `#52a045`, Lava Orange `#f15922`. Lava Orange is the subhead color **on** Brand Blue backgrounds.
- **State:** success = Spring Green `#52a045` (checks / progress); warning = Mango `#f3b31e`; info = Aqua `#04a0b7`.
- **Text:** primary Charcoal `#373d3f` (`--mh-fg-1`); secondary Slate `#6e7a7d` (`--mh-fg-2`); brand-tinted/links Brand Blue.
- **Backgrounds/surfaces:** white paper `#ffffff`; soft section bg Cloud `#e6ebec`; deepest dark Night Sky `#062a42`. Borders Silver `#c6cccd`; dividers `#dfe4e5`. **No gradients** — solid color blocks only.
- **Radii:** buttons pill `999px`; cards/surfaces 8–16px. Circle is the signature brand form. **Shadows** soft/cool, used sparingly.
- **Labels/eyebrows:** UPPERCASE, wide tracking (`.04em` / eyebrow `.12em`), Slate or Brand Blue.
- **Icons:** reuse the exact SVG paths from `lifeforce-icons.svg.html` (nav: home / digital-care / wellbeing / benefits / rewards; step/status tiles: account-check / clipboard / flask / heart). Brand icon style = thick-outline, geometric. **No icon-library substitutes; no emoji.**
- Bottom nav on every full screen: Home / Digital Care / Wellbeing / Benefits / Rewards — reuse the icon-set nav, active tab in Brand Blue `#0f497f`.

**UI constraints (do not violate):**
- **Chevrons (›) are OK on tappable list/step cards** to indicate the row opens a detail page. Do **not** put arrow glyphs inside buttons or as decorative arrows next to headers/text links; convey external/SSO destinations in the button label + subtext.
- **Reward info uses the V2 card style** (icon tile + "$X of $Y earned" / "You earned $X"). Do **NOT** include a "Tap to see your reward" line. If you link to the Rewards detail, use a clear standard affordance, not a "tap this pill to reveal" pattern.
- **Info (ⓘ) affordance** is an info icon placed **in the page body next to the H1** — never in the top nav/header.
- **No emoji** anywhere (the brand has its own icon system).

**Important design constraint — phase advancement is undocumented.** Do NOT assert *how* a teammate advances phases (it's unknown whether it's goal-based, participation-based, or nurse-decided). Design the phase indicator to show **current phase + what more could be earned**, without claiming the mechanism.

**Screens to produce (mobile, portrait) — a connected sequence:**

**B0 — Program concept overview.** Same overview screen reached via the in-page **ⓘ** affordance (shared with Flow A's A2; the ⓘ sits within the page body, not the top nav/header). Explains: LifeForce is nurse-coached — meet regularly with a registered nurse (telehealth/phone) who reviews your labs + health assessment and sets personal goals; progressing through phases earns **monthly medical credit**. Re-openable anytime.

**B1 — Home in-progress card.** LifeForce in the Home "Your action items" / in-progress rail. Shows current phase and display-only reward framing "**$X of $Y earned**" (not a tappable pill). Tapping the card opens B2.

**B2 — Status hero (program detail · Status).** Program detail page with a **Status / My Progress** toggle. Hero shows **LifeForce Phase as a 5-stage progress indicator**. Include a phase-specific nudge and the credit calculator link "Calculate your plan's medical premiums & semi-monthly credit." Produce **2–3 phase variants** of this screen:
  - **Phase 2** (default walkthrough): *"You are making progress. Save up to **$[amount]** more per year if you improve your health and reach LifeForce Phase 5."*
  - **Phase 5** = the B6 terminal state (below).
  - (Optional third: Phase 3/4 to show the mid-journey copy.)

**B3a — From your nurse (persistent).** A **persistent** section for nurse guidance / individual goals (plain text passed to us). Build **both states**:
  - **Populated:** the nurse's guidance and specific goals to work on before the next appointment.
  - **Empty:** *"Your nurse hasn't added new guidance yet — check back after your next appointment."* (Persistent even when empty — do not hide.)

**B3b — My Progress & Goals** (the "My Progress" toggle of B2). Lab-results status line (e.g., "CarePlus has not received your lab results yet"), then a clean **biometrics list, Your result / Your goal**, styled as MHC data rows (not a raw table): Weight (lbs), Blood pressure (sys/dia), Heart rate, % Body fat, Fitness score, Total cholesterol, LDL, HDL, Triglycerides, Fasting glucose, BMI, Waist (in).

**B4 — Maximize credit (Household).** Callout card(s) **contingent on Spouse/Domestic-Partner state only** — produce all 3 variants:
  - No SP/DP registered on CarePlus → *"Invite your Spouse or Domestic Partner to register and complete the Health Assessment to maximize your medical credit"* + **Invite dependent** button.
  - SP/DP registered but no HA this plan year → *"Don't forget to remind your Spouse/Domestic Partner to complete their Health Assessment to maximize your medical credit."*
  - SP/DP with HA complete → section hidden.

**B5 — Recommended for you.** Two **independent** lists, each shown only when it has items (not tied to each other or to B4):
  - **Recommended Programs** — For-You rail of program cards.
  - **Recommended Educational Handouts** — list of educational content cards.

**B6 — Phase 5 / max state.** GLP-1 celebrate pattern. 5-stage indicator full; *"Congratulations on reaching the top LifeForce Phase! You are meeting, achieving and maintaining goals towards better health and well-being and earning your medical credit."* Reward framing "**You earned $X**" + maintain-status messaging. This is the Phase-5 variant of B2.

**Every screen:** MHC app chrome + bottom nav matching the V2 build (reuse the icon-set nav); a Peak Health support card (Phone 252-237-5090 / Email appointment@peak-health.net + outlined "Peak Health portal" button) in the program footer/support area, styled like the V2 step-page support card.

**Deliver:** screens B0–B6 (including 2–3 phase variants of B2, both states of B3a, and all 3 variants of B4), mobile portrait, built against the **MHC brand tokens** (`colors_and_type.css`) and the shared icon set, a seamless continuation of the V2 enrollment flow. Keep the phase mechanism unspecified. Note any assumptions and flag all placeholder values (e.g., $[amount], Phase 2).
