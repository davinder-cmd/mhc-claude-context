# Design System Interview v2 (blank refs) — Project Brief
> **What's different here vs. `design-system-interview-v2.md`:** The inspiration company set (reference apps + aspirational references) is *not* baked in. It is asked fresh in the delta interview at the bottom each iteration. Everything else (locked context, Q1–Q17 baseline, v2 architectural decisions) is unchanged.
>
> **Run order:** Read the locked context. Skim the locked answers (note Q6/Q7 are intentionally deferred to the delta interview). Run the **Per-iteration delta interview** at the bottom — that's the only place questions are asked. Then proceed to `design-system-build-v2.md`.

---

## Your Role

You are a senior design systems and brand color expert from one of the world's top digital health design agencies. You are helping a seasoned product designer (Davinder Rehal, Mobile Health Consumer) build and iterate a complete, accessible design system color palette for a consumer-facing digital health product.

Treat the locked context below as the **non-negotiable foundation.** Only the delta interview at the bottom is run conversationally per iteration. Inspiration sources (Section B of the delta interview) must be re-asked fresh each iteration — they are intentionally not preloaded in this variant.

---

## Locked Context

### Product / company

- **Company:** Mobile Health Consumer (MHC)
- **Designer / owner:** Davinder Rehal (`davinder@mobilehealthconsumer.com`)
- **Product type:** Consumer-facing digital health and wellbeing app
- **Modules:** Rewards, Journeys, Healthy Habits, Digital Care Paths (DCP — Depression, Anxiety, Back Pain, Diabetes), Challenges, Health Data, Biometrics, Conditions, Digital Advisor

### Brand guidelines

- **File:** `archive/colors/MHC-Brand_Guidelines_FA (2) (1).pdf` (root: `/Users/davinderrehal/@claude/`)
- **Year:** 2021
- **Status:** retained for legacy corporate collateral; the product palette has been intentionally moved off of these (see Q4 below).

### Existing brand palette (from PDF — for reference, not for product)

```
Primary:
  Brand Blue       #0f497f   (RETIRED from product — too corporate)

Secondary:
  Aqua Blue        #04a0b7   (anchor reference for v2 primary teal)
  Cloud            #e6ebec   (retired — cool blue-grey)
  Slate            #6e7a7d   (retired — cool blue-grey)
  Spring Green     #52a045
  Silver           #c6cccd   (retired — cool blue-grey)
  Charcoal         #323e48   (retired — cool blue-grey)
  Lava Orange      #f15922   (retired — too aggressive)
  Night Sky        #062a42

Tertiary:
  Glacier          #d2e5e1
  Sky Blue         #92d5da
  Zesty Green      #c4d939   (retired — too acidic)
  Lime Green       #90c73e   (retired — too acidic)
  Mango            #f3b31e
  Tangerine        #f6851f   (retired — too aggressive)
```

### Existing product assets — Figma links

> These are the canonical source-of-truth files. Inspect them rather than asking for screenshots.

| Asset | Figma file | Primary node |
|-------|-----------|--------------|
| Current product UI (screen library) | `https://www.figma.com/design/z6KAsoo92AXv6ISevp9A10/Branded-Demo-with-AI--claude-code-color-` | `4637-49610` (Mobile Designs for prototyping page) |
| Current icons | `https://www.figma.com/design/K25p5uM3MEzmDxuLmdqSDt/Imagery--Copy-` | `30-389` |
| Back Care illustrations (anatomical, bespoke SVGs) | `https://www.figma.com/design/rhtdMdIioTNvILYc6b7rYv/Back-Care-Illustrations---SVGs` | `1-2` |
| Challenges Avatars | `https://www.figma.com/design/qEyPtMX1E9Q0B44kyAwK7d/Challenges-Avatars--Copy-` | `0-1` |

### Reference / inspiration materials

> **Intentionally blank in this variant.** Reference apps (with screenshots) and aspirational references (no screens) are gathered fresh each iteration via the delta interview at the bottom (Section B). Do not assume any prior reference set.

---

## Locked Baseline Answers (Q1–Q17)

These were confirmed in the v1 interview run on 2026-05-01. They lock unless explicitly re-opened in the delta interview below.

> **Note:** Q6 (reference apps) and Q7 (aspirational references) are intentionally deferred in this variant — see Section B of the delta interview.

### Brand — current state

**Q1. Existing brand guidelines?** ✅ Yes — see PDF above.

**Q2. Primary brand color?** Brand Blue `#0f497f` (deprecated for product — too corporate).

**Q3. Secondary / accent colors?** See "Existing brand palette" above. Aqua Blue `#04a0b7` is the anchor reference (loose) for the new product primary.

**Q4. What's wrong with the current palette?**
> Cold, stark, corporate, lifeless. Imagery is canned, unnatural, cheesy — nothing that screams health and care. Want to warm it up — softer, more organic, slight nod to nature. Hopeful, not cold.

**Q5. Current product UI?** Figma file noted above. Designer's words: "inconsistent, boring, dead."

### Target direction

**Q6. Reference apps?** *Asked fresh each iteration — see delta interview Section B1.*

**Q7. Other references?** *Asked fresh each iteration — see delta interview Section B2.*

**Q8. Target feeling?** "Calm and warm — like a warm hug. Sense of security and anchoring. Nothing sharp."

**Q9. Warmth level?** Warm but clean — terracotta/sand direction, not cold/grey. Not muddied; retains crispness.

### Constraints

**Q10. Off-limits colors?** None specifically. Just nothing too stark. (Purple is allowed as a categorical, never as primary.)

**Q11. Brand colors to keep / derive from?** Loose anchor to Aqua Blue / teal direction (`#04a0b7`). Brand Blue is retired. Free to warm/cool and play with contrast/brightness from there.

### Components and scale

**Q12. How many primary interactive colors?** **One.** (v1 originally explored "one + warm secondary action," but v2 locks to one. Warm emphasis is now served by the categorical `clay/warm` badge variant and warm illustration surfaces, not a second filled-button color.)

**Q13. Custom / categorical badges beyond semantic?** ✅ Yes — needed for module variety. Currently mostly one or two colors (teal/blue) — feels boring.

**Q14. Data visualization?** ✅ Yes (charts, graphs, progress rings). Use the same palette — no separate data viz scale.

### Icons and illustrations

**Q15. Current icons?** Figma file noted above. All the same blue, no variation. Want variation across product modules. Not married to any style. **Requirement: open source, little to no cost.**

**Q16. Illustrations?** Two registers:
1. **Anatomical / functional** (back-care style) — closer to photo-realistic in proportion. Communicates body position accurately.
2. **Expressive / empathic** — stylized figures on warm fields with organic wave lines, abstract organic shapes with gradients, character illustrations with natural elements (plants, leaves, sky). *Specific stylistic anchors depend on the inspiration sources gathered each iteration (see delta interview Section B).*

### Accessibility

**Q17. Accessibility target?** **AA (4.5:1 minimum).** AAA where it lands naturally (primary buttons, headings) but not required.

---

## v2 Architectural Decisions (locked from iteration)

These emerged through v1 → v2 iteration and should be treated as locked baseline for any future build run.

### Neutral / sand split (architectural)

The warm beige-brown tonal feel **belongs only to backgrounds and surface fills** (page bg, card bg, hover states). **Text, borders, dividers, and other layout structure use a near-neutral graphite ink** (hue ~28°, chroma 4–6%) — barely warm, never brown, never cool blue-grey. Implement as two separate scales: `neutral.*` (ink) and `sand.*` (surface).

### Five icon treatments

Beyond size and filled-vs-stroked rules, icons get **five reusable visual treatments** (solid disc / soft squircle / halo / outlined ring / duotone wedge), each applicable across any categorical hue. See `design-system-build-v2.md` Layer 4 for recipes and selection rules.

### Module-tinted icons

Module identity icons (lead/header icon, tab bar icon, etc.) take the module's categorical hue at the `700` stop. Within a module's UI, all other icons revert to default (`text.secondary`).

### Illustration variant grid

Illustration economy follows a one-composition × N-palette-swap pattern: **the same composition is re-tinted across module palettes** rather than each module commissioning bespoke art. Required deliverable for any anchor composition — produce a 4-tile grid demonstrating the palette swap (warm-led / module A / module B / module C).

### Gradient utility tokens

Gradient utilities are part of the system: `gradient.warm-mist`, `gradient.peach`, `gradient.cool-mist`, `gradient.deep-primary`, plus per-module gradients. **Live only on container surfaces and primary CTAs. Never on text. Never on borders.** Default angles: 135° for cards, 180° for full-page surfaces.

### Color weighting visualization (required output)

Every artifact (preview + every test screen) must include a horizontal stacked bar showing how the design splits the screen by color token, plus a 60-30-10-style summary by role (Surface / Ink / Module / Primary CTA / Accent / Other). Estimate proportions from rendered composition; flag estimates as such.

---

## Per-iteration Delta Interview

Run this **before each new build iteration.** Locked context above is assumed; this delta is where questions are asked. Ask one question at a time, wait for a full answer, do not offer color suggestions during input gathering.

### A. Direction

**A1. What are we building this iteration?**
- [ ] Refinement of main lineage (continue from current locked main version)
- [ ] New parallel alt branch (specify the alt's premise — e.g., "sky primary," "less warm," "[reference]-leaning")
- [ ] Promotion of an existing alt to main
- [ ] Net-new exploration

**A2. What changed since the last iteration that the build should know about?** (e.g., new stakeholder feedback, new constraints, a competing reference that wasn't on the table before)

### B. Inspiration sources (asked fresh each iteration — never assume)

> Both questions below must be asked explicitly each iteration. Do not infer answers from prior iterations or from the locked context — there is no preloaded reference set in this variant.

**B1. Reference apps (with screenshots).** Which apps are in scope as direct visual study material this iteration? For each, provide:
- App name
- Local screenshot folder path (e.g., `color system temp/{name}/`) and approximate count
- One-line role for this iteration (e.g., "strongest target reference," "direction reference, not a direct match," "basis for an alt branch")

If none, say "none."

**B2. Aspirational references (no screens).** Which brands / sites / products should shape the mood and feeling without being studied for layout or component decisions? For each, provide:
- Name
- URL or short description (if applicable)
- One-line role and any constraint (e.g., "aesthetic inspo only — our product cannot go dark")

If none, say "none."

### C. Standing questions (re-confirm or update)

**C1. Warm-tone scoping.** The locked default is: warm tones on surfaces only; ink stays graphite-neutral. Is that still right, or do you want this iteration to experiment with letting warmth bleed into ink/structure (or pulling all warmth out)?

**C2. Icon treatment variety.** Locked default is the 5-treatment system (disc / squircle / halo / outlined / duotone). For this iteration, are all five still in scope, or do you want to constrain to a subset / introduce a new treatment?

**C3. Illustration economy.** Locked default is the variant grid (one composition × N palette swaps). Still right, or does this iteration want bespoke illustrations per module / a different illustration approach?

**C4. Gradient comfort.** Locked default is gradient utility tokens on container surfaces and primary CTA only. For this iteration, is that still the boundary, or do you want gradients pulled in/pushed out further? (E.g., bigger heroes with full-card gradients, or back to flat throughout.)

**C5. Color weighting.** Locked default is to include a 60-30-10 stacked bar on every artifact. Still required, or skip for this iteration?

### D. Iteration-specific inputs

**D1. Additional references beyond Section B.** Anything beyond the inspiration sources captured in Section B — new photography, illustration, web references? If yes — provide path or link, label it.

**D2. New off-limits / new asks.** Anything that should be added to the off-limits list, or any specific ask not covered by the locked answers?

**D3. Output preferences.** Any change to which artifacts to deliver this iteration? (e.g., preview only, preview + 2 test screens, preview + system audit deliverable, etc.)

---

## End of Brief — Confirmation

When the delta interview above is complete, output a short structured summary:

```
## Iteration Inputs

**Direction:** [refinement / alt / promotion / new]
**Premise:** [one-sentence summary of the iteration's intent]
**Changed since last:** [list or none]

**Inspiration sources:**
- Reference apps (with screenshots): [list with paths and roles, or none]
- Aspirational references: [list with roles and constraints, or none]

**Standing question deltas:**
- Warm-tone scoping: [locked / changed: ...]
- Icon treatments: [locked / changed: ...]
- Illustration economy: [locked / changed: ...]
- Gradient comfort: [locked / changed: ...]
- Weighting output: [locked / changed: ...]

**Iteration-specific:**
- Additional references: [list or none]
- New off-limits / asks: [list or none]
- Output preferences: [default / specific list]
```

Then ask:

> "Does this inputs summary look correct? Anything to add or correct before I run the build?"

Do not proceed to the build until confirmed.
