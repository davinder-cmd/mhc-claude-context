# Product mockup — v2 tokens applied — INDEX

> First application of the v2 color system to real product screens. Iteration log; never overwrite.

## Source

- v2 token system: [outputs/may02-tokens-v1/tokens-v2-extended-categoricals.html](../may02-tokens-v1/tokens-v2-extended-categoricals.html)
- Phase 0 chassis: [color system temp/design-system-phase-0-strategy.md](../../color%20system%20temp/design-system-phase-0-strategy.md)
- Decision log: [color system temp/_strategy-decisions.md](../../color%20system%20temp/_strategy-decisions.md)
- Real-product reference (Figma file): "Branded Demo with AI (claude code color) (Copy)" — node `24601:20388`

## Versions (newest first)

### Figma reskin — 2026-05-02 — same 5 screens, applied in the live Figma file

**Location:** Figma file "Branded Demo with AI (claude code color) (Copy)", section node `24604:18820` (named "v2 colors — sky-teal bridge"), positioned below the original strip at `y = 2336`.

**Approach:** Non-destructive. Cloned the 5 original screens into a new section. Original strip at `24601:20388` is untouched. Recolor applied programmatically via the Figma plugin API.

**Recoloring done:**
- 1,705 fills examined, 862 changed by the global recolor pass
- 6 Health Assessment icons module-tinted (lavender / neutral / moss / warning / primary / rose)
- 3 Benefits EAP icons recolored (Mental Health → rose, Financial Services → primary, Fitness and Nutrition → warm)
- 10 Resources icons module-tinted (Sofi → primary, Ovia Health → moss, MeQuilibrium → rose, Virta Health → lavender, Fidelity → warm)
- Insights chips on Home re-tinted to indigo (cross-cutting AI register)
- Rewards hero card: deep blue → warm gradient

**Known limitations:**
- Bottom nav active state on Rewards still uses primary; should be warm — manual or next-pass fix
- Some component instance nested fills not reached by the recolor

**Status:** Live Figma artifact. Available for Isabel and stakeholder review.

---

### v1 — 2026-05-02 — 5 screens with v2 tokens

**File:** [product-v2-mockup-v1.html](product-v2-mockup-v1.html)

**Approach:** HTML mockup approach (Approach A from the visualization options). Five product screens redrawn faithfully in v2 tokens, with the AI Insights moment on Home demonstrating the cross-cutting AI pattern.

**Screens included:**
1. Bonjour Andrew · Home — sand-led, with **AI Insights using indigo cross-cutting pattern** (the Phase 0 §9 deliverable in product context)
2. Wellbeing — module hues across category grid, fuchsia debut on Challenges card, primary "Track" pill
3. Benefits — Employee Assistance Program icons in module hues (Mental Health → rose, Financial → primary, Fitness → warm), brand-colored resource icons against sand surfaces
4. Rewards — warm-led module identity (warm gradient hero, warm CTAs, warm-active nav)
5. Health Assessment — module-tinted category icons (lavender / moss / rose / warning / primary), success-state for completed, sand surfaces throughout

**Key architectural demonstrations:**
- Sand surfaces replace white throughout (page bg = `sand.50`)
- Neutral graphite replaces black (text = `neutral.900`, not pure black)
- R2 sky-teal bridge replaces legacy blue/teal in all primary moments
- Indigo cross-cutting AI pattern visible on Home Insights section
- Warm-led module identity demonstrated on Rewards
- Fuchsia debut on Challenges card preview
- Module hues differentiate categories on Wellbeing, Benefits, Health Assessment

**Annotated legend at bottom of HTML** explains each color decision.

**Status:** v1 drafted. HTML mockups, not Figma artifacts. If this lands, the next iteration is the Figma reskin (Approach B from earlier proposal) — clone the original 5 screens into a "v2 colors" section in the Figma file and apply the tokens via the plugin API.

---

## How to add a v2

1. Copy v1 file → `product-v2-mockup-v2-{slug}.html`
2. Update this INDEX with the new entry above v1
3. Cross-link from `_strategy-decisions.md`
4. Never overwrite v1
