# Tokens v1 — Layer 1 + 2 + 3 build — INDEX

> Iteration log for the color token system. Each version appended; never overwrite.

## Source

- Strategy: [color system temp/_strategy-decisions.md](../../color%20system%20temp/_strategy-decisions.md)
- Phase 0 chassis: [color system temp/design-system-phase-0-strategy.md](../../color%20system%20temp/design-system-phase-0-strategy.md)
- Visual build doc: [color system temp/design-system-build-v2.md](../../color%20system%20temp/design-system-build-v2.md)
- D2 hue exploration: [outputs/may02-soft-sky-hue/](../may02-soft-sky-hue/)

## Versions (newest first)

### v2 — 2026-05-02 — Extended categoricals (indigo + fuchsia)

**File:** [tokens-v2-extended-categoricals.html](tokens-v2-extended-categoricals.html)

**Premise:** Extend the categorical hue set from 4 to 6 by adding `indigo` (Digital Advisor / AI register, ~240°) and `fuchsia` (Challenges, ~320°). Resolves Phase 0 §9 (canonical AI surface treatment). Introduces the cross-cutting AI architectural pattern.

**What's new:**
- 2 new Layer 1 scales: `indigo.*`, `fuchsia.*`
- 6 new Layer 2 module identity tokens (`color.module.challenges.*`, `color.module.digital-advisor.*`, `color.ai.surface.wash`, `color.ai.tag.label`)
- 2 new gradient utility tokens: `gradient.ai-wash`, `gradient.challenges`
- AI Health Insight pilot updated to use indigo (instead of primary)
- 2 new pilots: Challenges team step challenge (fuchsia-led), AI Coach in Challenges (cross-cutting indigo + fuchsia)
- Module hue map locked at 6 categoricals — all 9 product modules now have a documented hue strategy

**Cross-cutting AI pattern (architectural):**
- AI marker (gradient wash + tag) = indigo, always
- Module action (CTA) = parent module's hue
- Demonstrated in AI Coach in Challenges pilot (indigo wash + indigo tag + fuchsia CTA)

**Status:** v2 drafted.

**Open follow-ups:**
- Indigo saturation needs designer-eye verification
- Cross-cutting pattern needs to be applied to DCP AI Expert chat surface (multi-turn, not just card)
- Layer 4 (icons) and Layer 5 (illustrations) still not built

---

### Layer 3 — 2026-05-02 — Component tokens v1

**File:** [tokens-v1-layer3-components.html](tokens-v1-layer3-components.html)

**Premise:** Layer 3 of the v2 build doc — buttons, badges, selection containers, focus ring, border radius scale, data viz palette. Primary-agnostic (components reference Layer 2 semantic tokens).

**Components covered:**
- Buttons (primary, primary-deep-gradient, secondary outlined, ghost, disabled — 3 sizes, 44×44 floor)
- Badges (5 semantic + 4 module)
- Selection containers (radio, checkbox, list row, card — 4 states each)
- Focus ring (2px, 2px offset, primary.600)
- Border radius scale (sm/md/lg/xl/full)
- Data visualization palette (7 categorical at 500 stop + sequential gradients)

**Pilot screen:** DCP onboarding step 3 — choose sessions per week. Real moment from the ICP (onboarding step 4 has 31% drop-off currently).

**Status:** v1 drafted.

**What's open:** progress steps as a token-spec'd component, tooltips/popovers, inline alerts, toasts, modals/sheets, form fields full spec, avatars, tabs, empty states, Layer 4 (icons), Layer 5 (illustrations).

---

### Comparison — 2026-05-02 — R1 / R2 / R3 applied side-by-side

**File:** [tokens-comparison-r1-r2-r3.html](tokens-comparison-r1-r2-r3.html)

**Premise:** Same component HTML rendered against three primary scales. Three pilot moments × three candidates = nine applied views. Tests whether R2's swatch-level lock holds at the applied-UI level vs. R1 (Withings-coded) and R3 (Sword-coded) alts.

**Pilot moments compared:**
1. Member · DCP completion (module-led, primary subtle)
2. Buyer · website hero (gradient.deep-primary, primary-led)
3. AI · Health Insight (canonical AI surface, primary-led)

**Outcome:** R2 confirmed as direction lock at applied-UI level. R1 wins isolated member moment, loses buyer hero. R3 wins isolated buyer hero, loses member-side warmth. R2 holds all five attributes simultaneously without trade-offs.

**Status:** Comparison drafted; R2 confirmed; R1/R3 documented at applied-UI parity for verification-fallback routes.

---

### v1 — 2026-05-02 — Layer 1 + Layer 2 + 3 pilot screens (R2 only)

**File:** [tokens-v1-layer1-2.html](tokens-v1-layer1-2.html)

**Premise:** Build the color token system per the v2 build doc. R2 Sky-teal bridge as locked primary. 10 core scales (Layer 1). Semantic + gradient utility tokens (Layer 2). Three pilot applied screens with weighting visualization on each.

**Scales delivered:**
- Structural: `neutral`, `sand`
- Brand: `warm`, `primary` (R2)
- Semantic: `success`, `warning`, `error`
- Module categorical: `moss` (DCP), `lavender` (Health Data), `rose` (Wellbeing); Healthy Habits uses `warm.*`

**Semantic tokens:** backgrounds, text, borders, interactive, status, module identity (4 modules covered)

**Gradient tokens:** warm-mist, peach, cool-mist, deep-primary, dcp, health-data, wellbeing, healthy-habits

**Pilot screens:**
1. Member · DCP completion (uses moss module hue + sand surfaces)
2. Buyer · website hero (uses gradient.deep-primary)
3. AI · Health Insight — first canonical AI surface treatment draft (Phase 0 §9 deliverable)

**AI surface treatment v1 features:**
- Visible "From your AI" label with primary-tinted dot
- Subtle primary.50 gradient wash on card surface
- SMS-style brevity (one observation + one number + one action)
- Honesty line ("I don't have your medication data yet")
- Memory control link always visible
- "Why this?" reasoning available on demand
- Feedback channel ("Not useful")

**Status:** v1 drafted. Awaiting designer review.

**Open follow-ups:**
- D2 verification gates still pending (5 gates from D2 v2 deliverable)
- Module categorical naming refactor pending (deferred decision)
- Confirm whether Challenges, Rewards, Journeys, Biometrics, Digital Advisor need their own categorical hue
- Layer 4 (icons) and Layer 5 (illustrations) not yet built
- AI surface treatment needs to be applied to Fitness Challenge AI Coach and DCP AI Expert to confirm the pattern holds

---

## How to add a v2

1. Copy the relevant v1 file → `tokens-v2-{slug}.html`
2. Update this INDEX with the new entry above v1
3. Cross-link from `_strategy-decisions.md`
4. Never overwrite v1
