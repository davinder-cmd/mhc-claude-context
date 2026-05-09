# MAP — design system program state

> Single source of truth for "what's active right now." Updated every time a build lands.
>
> **Last updated:** 2026-05-04 (built D11 decision-probe · Light Active direction-locked; v6 still canonical pending v7 system-preview)

---

## Active program state

| Layer | Active version | Status | Where |
|---|---|---|---|
| Full system (consolidated) | **v6** | **current** | [`v6/system.html`](v6/system.html) |
| Tokens (Layers 1+2) | v2 (carried into v4 → v5 → v6) | reference | [`v2/system.html`](v2/system.html) |
| Components (Layer 3) | v6 (Neutral discipline; jewel filled badge retired) | included in `v6/system.html` | [`v6/system.html`](v6/system.html) §Layer 3 |
| Icons (Layer 4) | v6 (5 recipes; R4 lighter at 500) | included in `v6/system.html` | [`v6/system.html`](v6/system.html) §Layer 4 |
| Illustrations (Layer 5) | v6 (variant grid, green-forward palette) | included in `v6/system.html` | [`v6/system.html`](v6/system.html) §Layer 5 |
| Applied product | v6 included (5 screens + weighting viz) | included in `v6/system.html` | [`v6/system.html`](v6/system.html) §Applied moments |

`v6/system.html` is the canonical artifact — full system + applied moments + accessibility + narrative, under a Neutral register with sand surfaces holding the warmth. Refines v5's muddle-fix architecture but pulls jewel weight back: categoricals retire to 100–200 stops, gradients retire from product entirely, purples (lavender + indigo) demote to glyph/dot/border only, and the green family (moss + success) gets the most product real estate when chroma surfaces. Re-aligns with v4 Rule 5 ("AI labeled, not bathed") that v5 partially relaxed. v5 retained as the prior canonical reference.

---

## Versions

| Version | Status | What it is | Files |
|---|---|---|---|
| v1 | archived | Warmed-teal lineage (Withings-leaning warm hug). Superseded by R2 direction. | [`archive/may01-warmed-teal/`](archive/may01-warmed-teal/) |
| v2 | current (tokens) | R2 sky-teal bridge token system. Layer 1+2 + extended categoricals (indigo + fuchsia). | [`v2/system.html`](v2/system.html) + [`v2/_audit-trail/`](v2/_audit-trail/) |
| v3 | sparse | R2 applied to product. Figma reskin landed; HTML mockup never landed. | [`v3/`](v3/) (intent only) |
| v4 | superseded | Editorial-restraint reset, full system. R2 tokens + v4 layer discipline + variant-grid illustrations + 3 applied moments + accessibility + narrative. Superseded by v5 on 2026-05-04. | [`v4/system.html`](v4/system.html), [`v4/layer-3-components.html`](v4/layer-3-components.html), [`v4/layer-4-icons.html`](v4/layer-4-icons.html) |
| v5 | superseded | Neutral-base + Jewel-accents register. Tested the muddle-fix hypothesis (warm + blue at light tints → muddled). Light tints (100/200) retired from product surfaces; categoricals appeared at 600/700 jewel stops. Icon recipes 3 → 5. Member CTA deepened primary.600 → primary.700. Gradients pruned: warm-mist + cool-mist retired; deep-moss/-rose/-indigo + neutral-mist added. AI surface dropped indigo wash for sand + indigo border + tag. 8 applied moments (3 anchors + 5 color-flex). Superseded by v6 on 2026-05-04. | [`v5/system.html`](v5/system.html) |
| v6 | **current** | Neutral register with sand surfaces holding warmth. Refines v5: jewel weight pulled back to 100–200 stops on categoricals; gradients retire entirely from product (B4); purples (lavender + indigo) demoted to glyph/dot/border only — never as background (per C2). Buyer hero moves from gradient.deep-primary to flat primary.800. Member CTA reverts primary.700 → primary.600 (v4 default). Icon recipes hold at 5; R4 container shifts 600/700 → 500 (one stop, AA-text constrained). Jewel filled badge variant retired. Green family (moss + success) gets the most product real estate when chroma surfaces. **5 applied moments** (3 anchors + 2 color-flex: moss container + lavender glyph-only); weighting viz re-included. Re-aligns with v4 Rule 5 that v5 partially relaxed. | [`v6/system.html`](v6/system.html) |

---

## Decisions

| ID | Decision | Status | Where |
|---|---|---|---|
| D1 | Visual tribe = Clinical-Modern Distinctive (Hinge / Sword cluster) | locked | [`decisions.md`](decisions.md) |
| D2 | Primary hue = R2 Sky-teal bridge (`~200°`) | direction-locked (5 verification gates pending) | [`decisions/D2-primary-hue/audit.html`](decisions/D2-primary-hue/audit.html) |
| D11 | Brand color role = C2 Light Active (Earth · clay+sage co-lead · brand-DNA at 100–200 stops · one chromatic moment per screen) | direction-locked (6 verification gates pending) | [`decisions/D11-active-brand-role/audit.html`](decisions/D11-active-brand-role/audit.html) |
| D12 | Tone-on-tone register = T2 Primary (R2 sky-teal bridge) tone-on-tone | direction-locked (6 verification gates pending) | [`decisions/D12-tone-on-tone-register/audit.html`](decisions/D12-tone-on-tone-register/audit.html) |

D2 verification gates: see audit file §7. Not promoted to fully `locked` until all five pass.

D11 verification gates: see audit file §Verification gates. Amends "color is an accent, not a coat" to "color is an accent at light saturation; one chromatic moment per screen permitted as a coat at 100-stop." v7 system-preview cannot build until G1–G4 pass; G5 is the v7 build itself.

D12 verification gates: see audit file §Verification gates. Reopens Q13 (categorical-badge architecture) on landing; Q13 formally retires when D12 graduates to fully `locked`. D2 remains independently locked on R2 — D12 honors that direction.

---

## Hard Constraints

Program-wide invariants. Each rule traces to a source decision (D-series), Q-answer (Q1–Q17 from the original interview), or architectural emergence (decisions that came out of build iteration, not the formal interview). The interview catches violations at intake (D.1 lock-conflict check); the build catches them at write-time. **Both reference this table — do not restate the rules anywhere else.**

| ID | Rule | Source | Interview catches | Build catches |
|---|---|---|---|---|
| HC-1 | Visual tribe = Clinical-Modern Distinctive (Hinge/Sword cluster) | [D1](decisions.md) | D.1 #2 (premise conflict with tribe) | — |
| HC-2 | Primary hue family = R2 Sky-teal bridge (~200°) | [D2](decisions.md) | D.1 #6 (primary outside R2/R1/R3) | hex-range audit |
| HC-3 | `neutral.*` / `sand.*` split — separate scales, neither cross-purposed | Architectural (since v2 neutral-split) | D.1 #7 | scale-existence check |
| HC-4 | One primary CTA color — no `interactive.secondary.*` | Q12 | D.1 #4 | reject if token defined |
| HC-5 | Purple is categorical only — never primary | Q10 | D.1 #3 | — |
| HC-6 | WCAG AA minimum (4.5:1 text, 3:1 UI components) | Q17 | D.1 #5 | per-pairing audit; resolve all failures inline |
| HC-7 | Border radius 16–20px for primary components | Architectural (v3+) | — | radius-token check |
| HC-8 | Gradients only on container surfaces + primary CTAs (never text, never borders) | Architectural (v2+) | D.1 #8 | gradient-target audit |
| HC-9 | All component tokens reference semantic tokens; no raw hex past Layer 1 | Architectural (Layer system) | — | hex-reference check |
| HC-10 | Icon library open-source / free | Q15 | D.1 #10 | — |
| HC-11 | Color register (per INTERVIEW B1) — Pastel, Fluorescent, and Tone-on-tone require a backing decision-probe | INTERVIEW B1 | D.1 #1, #2, #3 | reject without correct `Decision touched` (Pastel→D11; Fluorescent→D1+HC-12; Tone-on-tone→D2+Q13) |
| HC-12 | Phase 0 attributes (Credible / Direct / Outcome-obsessed / Human / AI-competent) — flag any iteration that violates one | [D4](decisions.md) + Phase 0 §3 | — | flag in Delta Panel `Changed` field |
| HC-13 | Brand color role (per INTERVIEW B6) — Active permitted only at the C2 Light Active envelope (one chromatic moment per screen at 100-stop, module containers at 100-stop, CTAs hold solid primary). Beyond-envelope Active reopens D11 again. | INTERVIEW B6 + D11 | D.1 #4 | reject if hero gradient exceeds 100-stop, if module containers exceed 100-stop, or if CTAs adopt non-primary chromatic fill |

### Maintenance rule

If a sourcing decision changes (a Q-answer is reopened, a D-series decision flips), update this table here, in MAP.md. INTERVIEW.md and BUILD.md will pick it up automatically because they reference this table — they do not duplicate it.

---

## Alts

| Alt | Off version | What it is | Where |
|---|---|---|---|
| sky-primary | v1 (archived) | Sky promoted to primary, teal demoted. Brand-blue continuity exploration. Not on the active path. | [`alts/v1-alt-sky-primary-system.html`](alts/v1-alt-sky-primary-system.html) |
| secondary-treatments | v4 (current) | Sibling to v4. R2 primary held. `warm` re-tuned peach → honey/clay; `rose` re-tuned candy-pink → dusty mauve. v4 rule #3 softened (module-tinted card surfaces). Icon recipes 3 → 5; Material Symbols Rounded. Applied moments 3 → 6: member tour (DCP · Habits · Wellbeing) + system stress tests (Buyer · AI Insight · AI→human hand-off with new `gradient.handoff` token). | [`alts/v4-alt-secondary-treatments/system.html`](alts/v4-alt-secondary-treatments/system.html) |
| calm-inspired | v4 (current) | Sibling to v4. Imports Calm + Lovi's selective hue-shifted gradient logic (hue + saturation + brightness). Cool-register revision (2026-05-03): all 6 featured gradient moments restricted to the indigo → blue → green slice of the wheel. Lighter trio: `dawn-mist`, `cool-bloom`, `spectral`. Darker trio: `deep-twilight`, `aurora`, `tide`. Halo recipes (R4): primary, moss, indigo, success — cool only. Warm/rose/fuchsia/lavender excluded from gradient + halo register (lavender retained as Health Data categorical for badges/glyphs/charts only). Container-surface scope expands to cool-bloom (B1, cool revision). Icon recipes 3 → 5 (adds R4 radial halo + R5 saturated gradient). Applied moments 3 → 6: home, daily check-in, biometrics results, DCP detail, leaderboard, rewards milestone. Weighting viz skipped this iteration. | [`alts/v4-alt-calm-inspired/system.html`](alts/v4-alt-calm-inspired/system.html) |

---

## Open gaps

| Gap | Severity | Notes |
|---|---|---|
| ~~`v4/system.html` doesn't exist~~ | resolved | Built 2026-05-03 — consolidated v4 system preview now lives at [`v4/system.html`](v4/system.html). First file produced under the new pipeline. |
| ~~Layer 5 (illustrations) for v4~~ | resolved | Variant grid included in `v4/system.html` §Layer 5. |
| Standalone `v4/applied.html` | low | An applied-probe artifact would surface the 3 screens + token annotations independently. Currently the screens live inside `v4/system.html` §Applied. Build only if a stakeholder asks for the screens in isolation. |
| `v3/` is intent only | medium | The HTML product mockup (5 screens with v2 tokens) was planned but never built; the Figma reskin lives in Figma, not on disk. Decide whether to backfill or retire `v3/` and treat v4 as the first applied iteration. |
| D2 verification gates | medium | 5 gates pending before D2 graduates from `direction-locked` to `locked`. See [`decisions/D2-primary-hue/audit.html`](decisions/D2-primary-hue/audit.html) §7. |
| D11 verification gates | high | 6 gates pending. G2 (member-warmth at applied scale w/ photography) is the highest-risk; if it fails, revert to C1 Passive baseline. v7 system-preview is gated on G1–G4 passing. See [`decisions/D11-active-brand-role/audit.html`](decisions/D11-active-brand-role/audit.html) §Verification gates. |
| D12 verification gates | medium | 6 gates pending before D12 graduates from `direction-locked` to `locked`. See [`decisions/D12-tone-on-tone-register/audit.html`](decisions/D12-tone-on-tone-register/audit.html) §Verification gates. G2 (member-warmth test) is the highest-risk gate. |
| v7 system-preview build | high | Direction is C2 Light Active (Earth · clay+sage co-lead · brand-DNA at 100–200). Cannot build until D11 G1–G4 pass. Once cleared, target path = `v7/system.html` (next version on the main lineage; v6 → superseded on landing). |
| ~~v6 system-preview build~~ | resolved | Built 2026-05-04 as Neutral register (`v6/system.html`), not tone-on-tone. The D12 tone-on-tone direction remains DIRECTION LOCKED with verification gates pending — any future iteration that adopts T2 must clear G1+G3 first. v6 honors v4's editorial restraint discipline instead. |
| Avatar System (Challenges) | low | Specified in archived MD specs but never rendered in v4 system. Build when Challenges work resumes. |

---

## Folder map

```
design-system/
├── MAP.md              ← this file
├── INTERVIEW.md        ← run before every build
├── BUILD.md            ← run after interview is confirmed
├── decisions.md        ← running log of strategic decisions
│
├── _templates/         ← copy from these; never edit directly
│   ├── system-preview.html
│   ├── layer-probe.html
│   ├── decision-probe.html
│   └── applied-probe.html
│
├── _strategy/          ← Phase 0 + original meta-process docs
│   ├── phase-0.md
│   ├── INTERVIEW-v2-original.md      ← preserved baseline
│   ├── INTERVIEW-v2-blank-refs-variant.md
│   └── BUILD-v2-original.md          ← preserved baseline
│
├── _reference/         ← assets the program reads, never writes
│   ├── brand-guidelines-2021.pdf
│   └── screenshots/
│       ├── bloom/
│       ├── clue/
│       ├── fitbit/
│       ├── lovi/
│       ├── noom/
│       ├── sword-health/
│       └── withings/
│
├── v2/                 ← R2 token system (current foundation)
│   ├── system.html
│   └── _audit-trail/
│       ├── layer-1-2-tokens.html
│       └── layer-3-components.html
│
├── v3/                 ← R2 applied (sparse — intent only)
│
├── v4/                 ← editorial-restraint reset (current discipline)
│   ├── layer-3-components.html
│   └── layer-4-icons.html
│
├── decisions/          ← decision probes
│   ├── D2-primary-hue/
│   │   ├── audit.html
│   │   ├── applied-comparison.html
│   │   └── _audit-trail/
│   │       └── candidates.html
│   └── D12-tone-on-tone-register/
│       ├── audit.html
│       └── _audit-trail/
│
├── alts/               ← parallel branches
│   ├── v1-alt-sky-primary-system.html
│   └── v4-alt-secondary-treatments/
│       └── system.html
│
└── archive/            ← read-only audit trail
    ├── may01-warmed-teal/    ← entire prior lineage
    ├── meta-process-v1/      ← old interview / build doc versions
    └── old-indexes/          ← INDEX.md from the date-stamped folders
```

---

## How to add new work

1. Open `INTERVIEW.md`. Answer the questions. Output a Delta Panel.
2. Open `BUILD.md`. Follow the per-type recipe. The template carries most of the spec.
3. After the file is written, update this `MAP.md` (active version, gaps, status transitions).
4. If the iteration resolved a decision, append to `decisions.md`.

Never write a new top-level folder. Everything goes inside `design-system/`.

---

## Status legend

- **current** — actively used; the state of the world right now
- **direction-locked** — recommendation is committed but verification gates remain
- **locked** — fully verified and protected; downstream changes must reference, not re-open
- **superseded** — replaced by a successor; kept for audit trail in `archive/`
- **archived** — frozen, off the retrieval path; lives in `archive/`
- **draft** — in-progress, not yet ratified
