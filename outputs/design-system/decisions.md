# Strategy Decisions — MHC Design System & Brand

> Running log of strategic decisions for the MHC product design system and brand. Each entry has a date, a decision, rationale, status (locked / direction-locked / open / superseded), and any open questions. Locked decisions become inputs to subsequent interview iterations and build runs. This file graduates to a clean `strategy-context.md` once the major decisions stabilize.
>
> **Reading order:** always read this file + [`MAP.md`](MAP.md) before running any design system interview, build, or visual review. Then run [`INTERVIEW.md`](INTERVIEW.md) → [`BUILD.md`](BUILD.md). Original meta-process docs preserved in [`_strategy/`](_strategy/).

---

## Decision Log

### 2026-05-02 — Session 1: tribe lock + color re-anchor + Phase 0 commitment

#### D1. Visual tribe — LOCKED

**Decision:** Clinical-Modern Distinctive (Hinge Health / Sword Health cluster).

**Rationale:**
- **Business model match.** B2B2C, sold to employers, used by members — same dual-audience tension as Hinge/Sword. Wellness-lifestyle brands (Calm, Headspace, Noom) win one consumer at a time on the App Store; premium-performance brands (Oura, Whoop) lean on hardware. Neither GTM shape matches MHC.
- **Differentiation alignment.** ROI guarantee + clinical DCPs require an identity that codes credibility, not lifestyle content. A wellness-lifestyle aesthetic actively undercuts the sales narrative ("we're not Thrive Global").
- **Member reality.** DCP users have real medical conditions (depression, anxiety, MSK, diabetes). Soft-everywhere aesthetic trivializes the depth.
- **Category whitespace.** Every direct B2B-wellbeing competitor (Personify, Sharecare, Thrive, Navigate, Well.co, Evive) sits in the bottom half of the distinctive ↔ generic axis. The top-right (distinctive + clinical-modern) is uncontested.
- **Brief fidelity.** Only tribe that lands warmth + credibility simultaneously.

**Implication for build:**
- Photography direction = real-member, real-environment; not stock, not scrubs, not laptops on couches.
- Typography carries equal weight to palette: editorial-grotesque pairing (e.g., Söhne + GT Sectra, Inter + Tiempos, or a Pangram/Klim option) — the most under-defended visual lane in the category.
- Voice/tone pulls from existing [strategy/Brand Voice Guide - External & Health.md](../strategy/Brand%20Voice%20Guide%20-%20External%20%26%20Health.md) — confident, direct, second-person, no jargon.
- Illustration and color evaluated against "credible-warm," not "feel-good-warm."

**Status:** LOCKED. Re-open only with explicit business model change or stakeholder mandate.

---

#### D2. Primary color anchor — DIRECTION LOCKED, HUE OPEN

**Decision:** Re-anchor primary toward **soft sky blue**. Step away from the corporate aqua/teal of the 2021 brand (Brand Blue `#0f497f`, Aqua Blue `#04a0b7`) without departing to a warm/clay primary.

**Rationale:**
- Designer instinct: prior "sky" alt direction read as a promising start.
- Risk to mitigate: cold-corporate read of legacy palette; saturation of teal across the B2B-wellbeing category (Personify, Sharecare, Navigate).
- Risk to avoid: a hard departure to terracotta/clay primary signals lifestyle-wellness, not Clinical-Modern (D1).
- The blue family preserves clinical credibility cues while giving room for a softer, more modern, distinctive variant.

**Open questions for next iteration:**
- **Hue family** — periwinkle (warm-shifted, slight violet), mineral/slate-blue (grey-shifted, sophisticated), powder/sky (clean light blue, risk of feeling weak), or aqua-shifted (closest to legacy, least distinctive).
- **Saturation/chroma** — too clean reads tech, too muted reads dusty.
- **Surface pairing** — locked architectural decision keeps `sand.*` for surfaces; question is how the soft sky reads against `sand.50` page background and against `warm.*` accent moments.
- **Deep secondary** — whether an emphasis CTA or hero gradient needs a deep navy / deep teal anchor (Sword-style) for confident moments.

**Status:** DIRECTION LOCKED. Hue/chroma exploration is the deliverable for the next visual iteration.

---

#### D3. Phase 0 (strategic chassis) — COMMITTED

**Decision:** Add a Phase 0 strategic brief above the existing v2 visual interview. Runs once, not per iteration. Locks brand purpose, promise, attributes, audience tension, voice principles, photography direction, and typography intent before any visual iteration runs.

**Rationale:**
- Current v2 interview asks "how should this look" before "what is this brand promising." Surface decisions get relitigated each iteration because the strategic core isn't fixed.
- A locked Phase 0 makes every visual decision testable against fixed attributes ("does this read credible? does this read warm without being soft?") instead of designer gut feel.

**Scope of Phase 0 (target draft):**
1. Brand purpose (1 sentence — why MHC exists beyond features)
2. Brand promise (1 sentence — what MHC delivers, member-facing)
3. Brand attributes (3–5 defensible adjectives)
4. Audience tension (benefits manager evaluating + anxious member living with — on one screen)
5. Voice principles (pulled from existing Brand Voice Guide, Health register)
6. Photography direction (subject, environment, treatment, what to avoid)
7. Typography intent (editorial-grotesque pairing, role per tier)

**Status:** LOCKED. Draft delivered as [design-system-phase-0-strategy.md](design-system-phase-0-strategy.md) on 2026-05-02.

---

#### D4. Brand attributes — LOCKED

**Decision:** Five brand attributes — **Credible, Direct, Outcome-obsessed, Human, AI-competent.**

**Rationale:**
- *Credible* + *Outcome-obsessed* form the moat against Personify, Sharecare, Thrive, and Navigate (all of whom lead with engagement metrics, not clinical outcomes). Also the legibility lever for the buyer-side (CHRO, benefits manager, CFO).
- *Direct* is the voice principle pulled from the existing Brand Voice Guide — non-negotiable.
- *Human* is the differentiator vs. corporate wellbeing platforms; carries the warmth claim that the Clinical-Modern Distinctive tribe (D1) requires.
- *AI-competent* added explicitly. AI is a category-shaping competence in 2026 (ChatGPT Health, Claude Health setting consumer expectations); MHC's RAG + MI + crisis routing + condition-specific agents architecture is a real moat. Carrying it as a brand attribute (not just a feature) means visual identity, typography, motion, and AI surface design must signal AI-competence — not bolt it on.

**Implication for build:**
- Each attribute carries a concrete visible-in-product test (see Phase 0 §3).
- Decisions that fail any attribute test get rejected before they reach the visual interview.
- *AI-competent* implies a canonical AI surface treatment in the design system (deferred for design work).

**Caveat:** *AI-competent* may evolve in 2–3 years as AI becomes table stakes across the category. Re-evaluate at next brand review.

**Status:** LOCKED.

---

#### D5. Brand promises (dual-audience) — LOCKED

**Decision:** Two laddered promises — one member-facing, one buyer-facing — anchored on the same comorbidity moat and ROI guarantee.

**Member-facing:**
> *"Measurable progress on every condition you're carrying — guaranteed, on your phone, without the wait or the bill."*

**Buyer-facing:**
> *"Real clinical outcomes across every condition your employees are managing — at the engagement rates that move your spend, guaranteed."*

**Rationale:**
- Both promises share the **comorbidity moat** ("every condition") — uniquely true to MHC; not claimable by Hinge (single-condition), Sword (MSK + behavioral), Personify (generic), Thrive (lifestyle), or any consumer health AI.
- Both promises share the **guarantee anchor** — directly references MHC's 3:1 ROI guarantee, the strongest competitive claim in the category.
- Member friction = *wait, bill*. Buyer friction = *engagement, spend*. Each promise solves the friction the audience actually feels.
- Member promise is readable to the buyer (doesn't embarrass the brand). Buyer promise is readable to the member (doesn't reduce them to a number).
- "AI-competent" is *implied* through "measurable" and "real clinical outcomes" — saying "AI" out loud in a brand promise dates fast.

**Implication for build:**
- Member promise is the canonical headline for member-facing UX moments (onboarding hero, first-program completion, gateway-condition expansion).
- Buyer promise is the canonical headline for sales materials, RFP cover pages, mobilehealthconsumer.com hero, and conference materials.
- Every visual artifact tested: *would a CHRO put this on a board slide AND would a member screenshot it to a friend who's struggling?*

**Status:** LOCKED.

---

#### D6. Reference brand triangulation — LOCKED

**Decision:** Three reference brands triangulate the visual identity — **Withings, Sword Health, Hinge Health.** Each contributes a distinct facet; none alone is sufficient.

| Reference | Contributes | Does NOT contribute |
|---|---|---|
| Withings | Illustration economy; warm-editorial craft; typography editorial register; premium product feel | Clinical-credibility floor (Withings is consumer-premium, not clinical) |
| Sword Health | Premium clinical authority; scientific data treatment; confident voice; real-bodies-in-motion photography | Warmth (Sword leans cool/scientific); illustration craft |
| Hinge Health | Real-patient photography; B2B2C peer execution; clinical-warm palette; dual-audience proof point | Distinctive ownability (Hinge is solid but not visually iconic) |

**What none contributes (must be invented):** the AI-competent visual register. None of the three reference brands lean visibly on AI; MHC's AI features (Insights, Coach, Expert) require a canonical AI surface treatment that doesn't exist in the reference set. Design work for subsequent iteration.

**Status:** LOCKED.

---

### 2026-05-02 — Session 2: D2 hue exploration v1

#### D2 update — IN PROGRESS, RECOMMENDATION DRAFTED

**Iteration:** Soft sky blue hue exploration, Phase 0 loaded as locked context.

**Deliverable:** [outputs/may02-soft-sky-hue/hue-exploration-v1-blue-candidates.html](../outputs/may02-soft-sky-hue/hue-exploration-v1-blue-candidates.html)

**4 candidate hue families explored:**

| # | Family | Hue | Anchor 600 | Verdict |
|---|---|---|---|---|
| C1 | Periwinkle | ~245° | #4F58A0 | Wild card / alt branch |
| C2 | Mineral-blue | ~215° | #475D75 | **Recommended primary** |
| C3 | Soft sky | ~205° | #266694 | Ruled out — too generic |
| C4 | Slate-aqua | ~195° | #266874 | Ruled out — too close to legacy |

**Audit framework:** Phase 0 §3 5-attribute rubric + Phase 0 §4 dual-audience test phrase + reference triangulation contribution + WCAG AA verification.

**Recommendation drafted in deliverable:** Lock C2 Mineral-blue as primary; keep C1 Periwinkle as documented alt branch.

**Why C2:** Strongest on *Credible* (clinical-modern read; pulls from Sword authority) and *AI-competent* (sophisticated enough at 700–900 to host an AI surface treatment). Compatible with locked sand/warm architecture (mineral stays cool on purpose; warmth comes from sand surfaces and warm.500 terracotta accent). Clearly differentiated from the legacy aqua and the Personify/Sharecare cluster.

**Why C1 stays alive:** Only candidate that creates a genuinely uncommon visual identity in the B2B-wellbeing category. Aligns with the 2026 "AI brand" color trend (Anthropic, Linear, Notion AI). Document as alt; don't lose the option if ownability becomes higher priority than credibility-floor restraint.

**Verification gates before D2 → LOCKED:**
- Render-test on physical device (phone, sRGB calibrated)
- Low-light stress test (11pm member scenario)
- Tactical review with Isabel (Visual Designer)
- Buyer hero deep gradient at presentation scale

**Status:** SUPERSEDED — designer feedback redirected the search inside the legacy blue/teal family. See Session 3 below.

---

### 2026-05-02 — Session 3: D2 direction locked R2 (Sky-teal bridge)

#### D2 update — DIRECTION LOCKED on R2

**Trigger:** Designer feedback on v1 — C2 Mineral-blue (grey-shifted) was too much of a departure from the existing corporate brand. The product brand must *softly align* with the corporate brand, descending recognizably from the legacy blue/teal family rather than shifting out of it.

**Re-anchored search inside the legacy family:**

| # | Family | Hue | Anchor 600 | Verdict |
|---|---|---|---|---|
| R1 | Soft teal (Aqua-descendant) | ~190° | `#267284` | Documented alt — Withings-coded |
| R2 | **Sky-teal bridge** | ~200° | **`#2A6489`** | **DIRECTION LOCKED** |
| R3 | Modern Brand Blue (navy-descendant) | ~210° | `#355880` | Documented alt — Sword-coded |

**Why R2:**
- Honors both legacy anchors simultaneously — descends from Aqua Blue (`#04A0B7`, ~187°) AND Brand Blue (`#0F497F`, ~211°).
- Least-occupied position in the B2B-health visual landscape — R1's teal cluster (Personify, Sharecare, Withings) is crowded; R3's deep-navy cluster (Sword, Stripe, Linear) is crowded; R2's sky-teal bridge has whitespace.
- Most modern of the three; least likely to date.
- Most literal interpretation of the original D2 directive ("soft sky blue").

**Visual artifacts (audit trail):**
- v1 — 4 blue candidates, C2 mineral-blue recommended → SUPERSEDED by feedback
- v1.5 — three corrected candidate strips (R1/R2/R3 visual reference) → fed the R2 selection
- **v2 — full sky-teal bridge audit + applied moments + weighting viz → current artifact**

**Deliverable:** [outputs/may02-soft-sky-hue/hue-exploration-v2-sky-teal-bridge.html](../outputs/may02-soft-sky-hue/hue-exploration-v2-sky-teal-bridge.html)

**Verification gates before D2 → FULLY LOCKED:**
- Render-test on physical device (phone, sRGB calibrated)
- Low-light stress test (11pm member scenario)
- Tactical review with Isabel (Visual Designer)
- Buyer hero deep gradient at presentation scale
- Stakeholder reaction check (Darcy, Alex) — does the corporate-brand alignment land

**Phase 0 implication:** §10 still lists exact primary hue as deferred. Will update Phase 0 §10 when full LOCKED status is reached after verification gates pass.

**Status:** DIRECTION LOCKED on R2 Sky-teal bridge. FULL LOCK pending verification gates.

---

### 2026-05-02 — Session 4: Layer 1 + 2 build v1

#### D7. Layer 1 + 2 tokens drafted

**Decision:** Draft Layer 1 (10 core palette scales) and Layer 2 (semantic tokens + gradient utility tokens) per the v2 build doc, with R2 as the locked primary.

**Layer 1 — 10 core scales:**
- `neutral` (graphite ink, hue ~28°)
- `sand` (warm beige surface, hue ~30°)
- `warm` (peach/terracotta accent + Healthy Habits module hue, hue ~22°)
- `primary` (R2 sky-teal bridge, hue ~200°) — locked
- `success` (sage green, hue ~95°)
- `warning` (amber gold, hue ~35°)
- `error` (warm coral-clay red, hue ~10°)
- `moss` (DCP module categorical, hue ~140°)
- `lavender` (Health Data module categorical, hue ~265°)
- `rose` (Wellbeing module categorical, hue ~345°)

**Architectural choices made:**
- Healthy Habits module uses `warm.*` tokens directly — no separate `clay.*` scale introduced (cleaner architecture; warm serves dual role as brand accent and Healthy Habits identity).
- Module categorical hue names (`moss`, `lavender`, `rose`) used provisionally — Phase 0 §10 deferred the color-led vs role-led naming question. Names will refactor when that decision lands.
- 4 categorical slots used; `Challenges`, `Rewards`, `Journeys`, `Digital Advisor`, `Biometrics` modules reuse primary or semantic tokens rather than getting their own categorical hue.

**Layer 2 — semantic tokens drafted:** backgrounds, text, borders, interactive, status (success/warning/error), module identity, gradient utility tokens (warm-mist, peach, cool-mist, deep-primary, plus per-module).

**First canonical AI-surface treatment drafted** (Phase 0 §9 deliverable) — Health Insight card with explicit AI label, "Why this?" reasoning surface, "Manage what your AI remembers" memory control, and SMS-style brevity. First draft, expects iteration.

**Deliverable:** [outputs/may02-tokens-v1/tokens-v1-layer1-2.html](../outputs/may02-tokens-v1/tokens-v1-layer1-2.html)

**Status:** v1 drafted. Awaiting designer review against the D2 verification gates (still pending) and Phase 0 §3 attribute audit at the system level.

---

### 2026-05-02 — Session 5: R1/R3 applied comparison + Layer 3 components

#### D7 update — R1 + R3 token systems applied for side-by-side comparison

**Decision:** Build the same applied-UI treatment for R1 (Soft teal) and R3 (Modern Brand Blue) so all three R-candidates can be evaluated side-by-side at the applied-UI level — not just at the swatch level.

**Rationale:** R2 was DIRECTION LOCKED at the swatch level. Applied-UI evaluation tests whether the locked direction holds across member DCP completion, buyer hero, and AI Insight surfaces. R1 and R3 deserve the same applied test before D2 graduates to FULL LOCKED.

**Deliverable:** [outputs/may02-tokens-v1/tokens-comparison-r1-r2-r3.html](../outputs/may02-tokens-v1/tokens-comparison-r1-r2-r3.html) — three primaries × three pilot screens = nine applied moments, with weighting viz on each + comparative attribute audit.

**Status:** Comparison drafted. R2 remains the leading candidate; R1 and R3 now documented at applied-UI parity for verification-fallback routes.

#### D8 — Layer 3 component tokens drafted

**Decision:** Draft Layer 3 of the v2 build doc — component tokens for buttons, badges, selection containers, focus ring, border radius scale, data viz palette. Primary-agnostic: components reference Layer 2 semantic tokens, which reference Layer 1 `primary.*` — meaning a primary swap (R2 → R1 or R3) propagates automatically.

**Components covered:**
- Buttons (primary, secondary outlined, ghost, disabled — 3 sizes; 44×44 touch-target floor per ICP)
- Badges (5 semantic: success, warning, error, neutral, primary; 4 module: dcp, health-data, wellbeing, healthy-habits)
- Selection containers (radio, checkbox, list row, card selection — default + hover + selected + disabled states)
- Focus ring (2px, 2px offset, `primary.600` — AAA)
- Border radius scale (sm/md/lg/xl/full)
- Data visualization palette (approved hue subset at 500 stop + sequential gradients)

**Pilot screen:** DCP onboarding step 3 (choose sessions per week) — components in real layout. Tests whether the system holds at the form-and-decision moment, not just the hero/celebration moment.

**Deliverable:** [outputs/may02-tokens-v1/tokens-v1-layer3-components.html](../outputs/may02-tokens-v1/tokens-v1-layer3-components.html)

**Status:** v1 drafted. Awaiting designer review.

---

### 2026-05-02 — Session 6: Extended categoricals — indigo (AI) + fuchsia (Challenges)

#### D7 v2 — two new categorical scales added

**Decision:** Extend the categorical hue set from 4 to 6 by adding:
- **`indigo`** (~240°) — Digital Advisor / AI register
- **`fuchsia`** (~320°) — Challenges module

**Rationale:**
- v1 had 4 categoricals (moss, lavender, rose, warm-as-Healthy-Habits) — at the lower bound of the build doc's "4–6" range. v2 hits the upper end with two strategically chosen additions.
- **Indigo as AI hue resolves Phase 0 §9.** The "canonical AI surface treatment" was deferred in v1 because no reference brand (Withings, Sword, Hinge) leans visibly on AI. Indigo at ~240° sits in the 2026 AI brand color register (Anthropic, Linear, Notion AI). Used as a cross-cutting marker: AI-generated content gets an indigo gradient wash + indigo "From your AI" tag, regardless of parent module.
- **Fuchsia gives Challenges its own social/competitive register.** Step challenges, team competitions, social engagement — distinct enough emotional register from DCP (moss = clinical care) or Wellbeing (rose = soft empathy) to need its own hue.

**Cross-cutting AI architectural pattern (new):**
- AI marker (gradient wash + tag) = indigo, always.
- Module action (CTA) = parent module's hue.
- Result: a DCP AI Expert chat shows indigo wash + indigo "From your AI Coach" tag + moss.600 send button. A Challenges AI Coach shows indigo wash + indigo tag + fuchsia.600 CTA. AI is visibly labeled across the system without overriding module identity.

**New tokens added:**
- Layer 1: `indigo.*` (11 stops), `fuchsia.*` (11 stops)
- Layer 2 module identity: `color.module.digital-advisor.*`, `color.module.challenges.*`
- Gradients: `gradient.digital-advisor` (indigo.100 → indigo.200), `gradient.challenges` (fuchsia.100 → fuchsia.200)

**AI Insight pilot updated:** moved from `primary.50` gradient wash to `indigo.50` gradient wash, with indigo-coded "From your AI" tag. CTA stays `primary.600` (home-screen context, no parent module).

**New pilots added:**
- **Challenges — team step challenge card** (fuchsia-led, demonstrates the new module identity)
- **Challenges AI Coach** (indigo + fuchsia composite — demonstrates cross-cutting AI on a module surface)

**Deliverable:** [outputs/may02-tokens-v1/tokens-v2-extended-categoricals.html](../outputs/may02-tokens-v1/tokens-v2-extended-categoricals.html)

**Module hue map (final at 6 categoricals):**

| Module | Categorical | Why |
|---|---|---|
| DCP | `moss` | Clinical-care green |
| Healthy Habits | `warm.*` (shared) | Active warmth, Healthy Habits' identity overlaps the brand accent |
| Health Data / Biometrics | `lavender` | Cool-distinctive, "data territory" |
| Wellbeing | `rose` | Soft empathic warmth |
| **Challenges** | **`fuchsia`** (new) | Social/competitive energy |
| **Digital Advisor / AI** | **`indigo`** (new) | AI register, cross-cutting marker |
| Rewards | uses `warm.*` (shared) | Celebratory warmth — shares Healthy Habits' hue |
| Journeys | uses `primary.*` | Brand-default — Journeys is the platform-level entry experience |

**Status:** v2 drafted. Awaiting designer review.

---

### 2026-05-02 — Session 7: v2 tokens applied to 5 real product screens

#### D9. Product mockup v1 — first system application

**Decision:** Visualize the v2 token system in real product context. User flagged 5 screens from the "Branded Demo with AI (claude code color) (Copy)" Figma file (node `24601:20388`):
1. Bonjour Andrew (Home, French locale)
2. Wellbeing
3. Benefits
4. Rewards
5. Health Assessment

**Approach used:** HTML mockup approach (faster, non-destructive). Faithful layouts in HTML using the v2 token CSS variables. Figma reskin deferred — if HTML mockups land, the Figma file gets updated next iteration with cloned screens recolored via the plugin API.

**Architectural demonstrations in product context:**
- Sand surfaces (`sand.50` page bg) replace white throughout
- Neutral graphite (`neutral.900`) replaces black ink
- R2 sky-teal bridge primary CTA + active nav across all screens
- **Cross-cutting AI pattern landed in product** — Home's "Insights ✨" section uses indigo wash + indigo "From your AI" tag. Phase 0 §9 deliverable now visible on a real screen.
- Warm-led Rewards (warm gradient hero, warm CTAs, warm-active bottom nav)
- Module hues differentiate categories on Wellbeing (moss/lavender/warning/primary/rose), Benefits EAP icons (rose/primary/warm), Health Assessment categories (lavender/moss/rose/warning/primary)
- Fuchsia debut on Challenges card preview (Wellbeing screen)

**Deliverable:** [outputs/may02-product-v2-mockup/product-v2-mockup-v1.html](../outputs/may02-product-v2-mockup/product-v2-mockup-v1.html)

**Status:** v1 drafted. Designer review pending. Figma reskin (Approach B) deferred to next iteration if mockups land.

#### D10. Figma reskin — same 5 screens, real product file

**Decision:** Apply v2 tokens directly to the 5 cloned screens in the live Figma file ("Branded Demo with AI (claude code color) (Copy)").

**Approach:** Non-destructive — created a new section "v2 colors — sky-teal bridge" *below* the original strip and cloned the 5 screens into it. Original screens untouched. Recolor applied programmatically via the Figma plugin API.

**Section location:** Same Figma file, page "✅ Mobile Designs for prototyping". Section node `24604:18820`. Positioned at `y = 2336` (240px below the original strip).

**Recoloring stats:**
- 1,705 fills examined; 862 changed by the global recolor pass
- 6 Health Assessment icons module-tinted (lavender / neutral / moss / warning / primary / rose by category)
- 12 HA icon glyph vectors recolored to match
- 3 Benefits EAP icons recolored (Mental Health → rose, Financial Services → primary, Fitness and Nutrition → warm) + 3 inner glyph vectors
- 10 Resources icons module-tinted (Sofi → primary, Ovia Health → moss, MeQuilibrium → rose, Virta Health → lavender, Fidelity → warm)
- Insights chips on Home re-tinted to indigo (cross-cutting AI register applied in product context)
- Rewards hero card: deep blue → warm gradient (module identity for Rewards)

**What's now visibly working in product:**
- Sand surfaces (`sand.50`) replace white throughout
- R2 sky-teal bridge primary on active states + interactive
- Cross-cutting indigo on Home Insights moment (Phase 0 §9 deliverable in real product)
- Rewards module identity (warm gradient hero)
- Health Assessment categories color-coded by domain (6 module hues at a glance)
- Benefits EAP and Resources items color-coded by service type

**Known limitations of the auto-recolor:**
- Some intermediate blues that didn't match any rule retained their original color
- Bottom nav active states use primary universally (Rewards should be warm-coded — manual fix needed)
- Some component instances may have nested fills the recolor didn't reach
- Wellbeing category grid icons could be further module-tinted (currently consistent rather than varied)

**File audit trail:** All work done in a non-destructive new section. Original strip at parent frame `24601:20388` is unmodified. Tactical fixes for the limitations above can happen in the same section without affecting originals.

**Status:** Live Figma artifact. Available for Isabel and stakeholder review.

---

### 2026-05-02 — Session 8: v4 reset — editorial restraint discipline

#### D11. v4 — canonical reset on the product application

**Trigger:** Designer feedback after the Figma reskin: three failures simultaneously — auto-recolor produced ugly results, the system itself felt off when applied to real product, and the approach was too incremental (too many small versions, no single artifact).

**Decision:** Reset to a single canonical artifact applying R2 with **editorial restraint**. R2 stays locked. The application discipline changes.

**The six rules (locked for v4):**

1. **Surfaces are sand.** Page background = `sand.50`. Card = white or `sand.100`. Never colored.
2. **Ink is graphite.** Body = `neutral.900`. Secondary = `neutral.700`. Never pure black, never blue-grey.
3. **Color is an accent, not a coat.** A glyph, a number, a thin line, a status dot. Never a card background. Never a gradient wash on a member moment. The 100/200 stops are essentially retired in v4 product.
4. **Module identity = glyph color, not container fill.** Icon container is uniform `sand.100`. The glyph inside takes the module's `500` stop.
5. **The AI moment is labeled, not bathed.** An indigo dot on the "From your AI" tag, an indigo arrow on the suggested action, an honesty line. The card surface stays neutral.
6. **Photography and typography do the chromatic work.** The hero photo carries warmth. The editorial display face carries gravity. The palette stops trying to do all three.

**What v4 drops:**
- Full-color module backgrounds on icons
- Warm gradient on Rewards hero (becomes a thin warm-500 top-edge accent line instead)
- Indigo wash on AI Insights card surface (becomes a tag dot only)
- Heavy chip backgrounds on Insights action buttons
- Module-tinted gradient thumbnails on cards
- Auto-recoloring as a transformation path
- Fuchsia (no role at this restraint level — stays in the system, unused in v4 product)
- Saturated 600/700 stops as decorative surface fills

**What v4 keeps:**
- R2 sky-teal bridge as primary
- Sand-50 / sand-100 / neutral architecture
- Cross-cutting AI principle (now via tag, not wash)
- Module identity through hue (now glyph-only)
- Editorial display face for headlines
- Phase 0 attributes as the rubric
- Warm.500 as Rewards-module accent (as a thin top-edge line, not a hero gradient)

**Three canonical screens delivered:**
1. **Bonjour Andrew · Home** — content-rich, AI Insights moment via labeled tag
2. **Rewards** — module identity via thin warm top-edge accent line, not a gradient hero
3. **Health Assessment** — six categories with uniform sand icon containers, module identity carried by glyph color

**Deliverable:** [outputs/may02-v4-canonical/v4-canonical.html](../outputs/may02-v4-canonical/v4-canonical.html)

**Phase 0 implication:** Phase 0 §10 list of "what this brief does NOT decide" can now move "Photography commissioning approach" up in priority — v4 leans heavily on photography to carry warmth. If we don't commission real photography, the v4 discipline may not hold at production scale.

**Status:** v4 drafted as the canonical artifact. Replaces v1–v3 of the product mockup thread. Retains them as audit trail but supersedes them.

---

### 2026-05-04 — Session 9: D12 tone-on-tone register decision-probe

#### D12. Tone-on-tone register — DIRECTION LOCKED on T2 (Primary R2 sky-teal bridge tone-on-tone)

**Trigger:** INTERVIEW intake requested a tone-on-tone register (single hue family across surfaces, accents, dividers, ink) to test the warm + blue muddle that v5's neutral-jewel split partially resolved. INTERVIEW.md D.1 lock-conflict check #1 routed the iteration from `system-preview` to `decision-probe` because tone-on-tone reopens D2 (primary hue family) and Q13 (categorical-badge architecture).

**Decision:** Direction-lock T2 — Primary (R2 sky-teal bridge) tone-on-tone — as the register baseline for any v6 system-preview that adopts tone-on-tone.

**5 candidates audited:**

| # | Candidate | Hue | Anchor 600 | Verdict |
|---|---|---|---|---|
| T1 | Warm tone-on-tone | ~22° | `#A85C36` | Alt retained — fallback if member-warmth (G2) fails |
| T2 | **Primary R2 sky-teal bridge** | ~200° | **`#2A6489`** | **DIRECTION LOCKED** |
| T3 | Moss tone-on-tone | ~140° | `#2A573B` | Dropped — D1 conflict (routes to wellness-lifestyle tribe) |
| T4 | Neutral graphite tone-on-tone | ~28° low chroma | `#38332E` (anchor at 800) | Alt retained — fallback if Distinctive becomes the priority |
| T5 | Indigo tone-on-tone | ~240° | `#3D437B` | Dropped — collapses cross-cutting AI marker; HC-5 adjacency |

Lavender excluded from candidate set entirely — would have triggered a second hard-constraint reopen (HC-5: purple is categorical only).

**Why T2:**
- Only candidate that honors the locked R2 direction (D2). Three of the four other candidates require reopening D2 in addition to Q13.
- Strongest pair on the criteria that matter most at the buyer-hero scale — Clinical-Modern Distinctive (D1) and Credible (Phase 0).
- Maintains corporate-brand alignment — legacy Brand Blue (#0F497F) and Aqua Blue (#04A0B7) both descend from the R2 family.
- Resolves muddle by removing warm entirely — no warm/cool conflict possible by construction.

**Tradeoff accepted:** Phase 0 Human attribute weakens. Without sand surfaces or warm accent, the cool-only register risks reading "corporate medical" — the failure mode D2 was originally designed to escape. Compensation strategy: lean photography and typography hard on warmth (per v4 Rule 6). T1 (Warm) held as the documented fallback if the G2 member-warmth gate fails at applied scale.

**Implication for build:**
- Categorical-badge architecture (Q13) collapses on landing. Module hues — moss (DCP), lavender (Health Data), rose (Wellbeing), fuchsia (Challenges), warm (Healthy Habits/Rewards) — retire from product. Survive only as data-viz palette and as legacy reference.
- Cross-cutting AI marker (indigo) requires a new treatment — see verification gate G3.
- HC-3 (neutral/sand split) collapses inside the chosen primary family. Sand surfaces retire; primary.50/100 become the surface stops.
- Border tokens move 200 → 300 to maintain WCAG AA UI floor (3:1).

**Verification gates before D12 → FULLY LOCKED:**
1. G1 — Tactical review with Isabel (Visual Designer)
2. G2 — Member home warmth test at member's actual phone scale with real photography (highest-risk gate)
3. G3 — AI surface re-treatment audit (lock the AI-marker substitute before v6 builds)
4. G4 — Buyer hero stress test at presentation scale (16:9 deck + 1280px+ marketing)
5. G5 — Stakeholder reaction check (Darcy, Alex) — does corporate-brand alignment land
6. G6 — Build-time AA pairing audit at v6 — verify borders-200-to-300 rule lands across every component

**Q13 status:** Reopened by D12. Will formally retire when D12 graduates to `locked`. Until then, the v5 categorical architecture remains the active reference for any non-tone-on-tone iterations.

**Deliverable:** [decisions/D12-tone-on-tone-register/audit.html](decisions/D12-tone-on-tone-register/audit.html)

**Status:** DIRECTION LOCKED on T2. FULL LOCK pending six verification gates.

---

### 2026-05-04 — Session 10: D11 active brand role decision-probe

#### D11. Brand color role — DIRECTION LOCKED on C2 Light Active

**Trigger:** INTERVIEW intake for v7 system-preview asked for warmer surfaces, brand-DNA categoricals (blue/teal/green/orange) re-engaged, "not heavy" character, with Verily as the primary visual reference and purple deemphasized. INTERVIEW.md D.1 #4 routed the iteration from `system-preview` to `decision-probe` because B6 = Active reopens D11 (the v4 editorial-restraint principle "color is an accent, not a coat").

**Decision:** Direction-lock C2 — Light Active — as the brand color role for v7 and forward.

**3 candidates audited:**

| # | Candidate | Character | Verdict |
|---|---|---|---|
| C1 | Passive baseline (v6 verbatim) | Sand surfaces; color = glyph only; no gradients | Alt retained — fallback if G2 member-warmth test fails |
| C2 | **Light Active** | Earth (clay+sage co-lead); brand-DNA categoricals at 100–200; one chromatic moment per screen at 100-stop | **DIRECTION LOCKED** |
| C3 | Verily-coded full Active | Container fills at 200-stop; multi-hue gradients on every category; chromatic page background | Dropped — sits closer to consumer-wellness aesthetic than Clinical-Modern Distinctive (D1) |

**Why C2:**
- Wins 6 of 7 selection criteria outright (Credible, Direct, Outcome-obsessed, Human, AI-competent, Distinctive, WCAG AA all pass).
- Serves Phase 0 Human meaningfully better than C1 without sacrificing Credible or Direct — exactly the trade the user's brief asks for.
- Hero gradient at 100-stop and chromatic-tinted module containers bring brand DNA forward (Brand Blue, Aqua, Spring Green/sage, Lava Orange/clay, Mango/honey).
- Deep `primary.600` CTA and white-card data treatment hold the clinical-credibility floor.
- AI surface treatment (`primary.50` wash + sparkle glyph) replaces the deprecated indigo dot — distinct, doesn't lean on dated AI conventions, holds against ChatGPT/Claude visual canon.

**Tradeoff accepted:** Phase 0 Distinctive is well-served but not maximally — C2 sits between editorial-restraint distinctive (C1) and chromatic-pastel distinctive (C3 / Verily / Calm / Lovi). The middle path means we don't fully own either signal. Accepted because both flanks have larger downside risks: C1 risks reading corporate-cold (Human failure), C3 risks reading consumer-wellness (Credible failure) at MHC's buyer scale.

**D11 amendment:** The locked principle "color is an accent, not a coat" amends to **"color is an accent at light saturation; one chromatic moment per screen is permitted as a coat at 100-stop."** Container fills at 100-stop on module identity and a single hero card per screen are the new permitted active applications. CTAs, ink, and surface backgrounds remain governed by passive editorial restraint. Reflected in HC-13 (MAP.md).

**Implications for build:**
- v7 system-preview cannot land until G1–G4 pass; G5 is the v7 build itself, G6 is post-build stakeholder check.
- Lavender retires as Health Data module categorical; **aqua replaces it** (closer to brand DNA, no purple).
- Indigo retires as AI register marker; AI surface uses `primary.50` wash + sparkle glyph + "AI Insight" label.
- Brand-DNA palette ladders for clay, sage, aqua, honey added to the token system. Spring Green and Lava Orange brand swatches preserved as PMS reference; product surfaces use the muted/lightened ladders documented in the audit.
- Gradients return to product (B4) at the C2 envelope only — container surfaces + primary CTAs, never text/borders (HC-8 holds).

**Verification gates before D11 → FULLY LOCKED:**
1. G1 — Tactical review with Isabel (Visual Designer) — does the hero gradient at 100-stop hold the active register at retina/sRGB-calibrated phone scale?
2. G2 — Member-warmth test at member's actual phone scale with real photography (highest-risk gate; if it fails, revert to C1)
3. G3 — AI surface re-audit against ChatGPT-Health / Claude-Health visual canon
4. G4 — Buyer hero stress test at presentation scale (16:9 deck + 1280px+ marketing) with CHRO-equivalent reviewer
5. G5 — v7 system-preview build verification (does the layered token system hold the new envelope without HC regressions)
6. G6 — Stakeholder reaction check (Darcy, Alex)

**Net-new exploration framing:** This iteration set aside the v4–v6 implementation lineage but retained all locked strategy (D1, D2, Phase 0, HC-1 through HC-12). v7 is a fresh application on top of the same strategic chassis, not a strategic reset.

**Deliverable:** [decisions/D11-active-brand-role/audit.html](decisions/D11-active-brand-role/audit.html)

**Status:** DIRECTION LOCKED on C2 Light Active. FULL LOCK pending six verification gates.

---

## Open Strategic Questions (deferred)

- **Brand mark / logo evolution.** Is there a brand-product disconnect risk if the logo stays Brand Blue while the product runs soft sky + sand? Defer until Phase 0 is drafted.
- **Photography commissioning.** Stock vs. shoot vs. illustration-led. Cost and timeline implications. Defer until Phase 0 photography direction is locked.
- **Typography licensing.** Editorial-grotesque pairings imply paid type licenses. Budget question — defer until Phase 0 confirms type direction.
- **Module categorical naming.** Current interview names categoricals by color (lavender, moss, rose, clay). A top-tier direction names them by emotional/functional role first, derives color second. Defer until Phase 0 attributes are locked.
- **Dark mode posture.** Not yet asked. Clinical-Modern tribe is split (Sword leans dark-premium; Hinge stays light). Defer.

---

## How this file evolves

- Each working session appends a new dated entry. Status of prior decisions is updated in place (e.g., DIRECTION LOCKED → LOCKED) when new evidence resolves an open question.
- When the major decisions (D1–D3 plus the deferred items above) are all locked, this log condenses into a clean `strategy-context.md` in [strategy/](../strategy/) for permanent reference. The log file is retained as the audit trail.
