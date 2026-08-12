# MAP — color system program state

> Single source of truth for "what's active right now." Updated every time a build lands.
>
> **Last updated:** 2026-05-05 · **Status:** new program — no builds yet

---

## Active program state

| Layer | Active version | Status | Where |
|---|---|---|---|
| Full system | *none yet* | *pending v1* | *TBD* |
| Palette (Layer 1) | *none yet* | *pending* | *TBD* |
| Semantic + component tokens (Layers 2–3) | *none yet* | *pending* | *TBD* |
| Icons (Layer 4) | *none yet* | *pending* | *TBD* |
| Illustrations (Layer 5) | *none yet* | *pending* | *TBD* |
| Figma variables export | *none yet* | *pending* | *TBD* |

---

## Versions

| Version | Status | What it is | Files |
|---|---|---|---|

*(populated as builds land — append a row per version)*

---

## Decisions

| ID | Decision | Status | Where |
|---|---|---|---|
| D1 | Adopt MH Colors v2 stops as brand equivalents within tier tolerance (primary ≤2.0, secondary ≤3.5, tertiary ≤5.0 ΔE2000) | draft | [decisions.md](decisions.md) |
| D2 | Warm the brand only through the neutrals; ink stays chromatically neutral | draft | [decisions.md](decisions.md) |
| D3 | Retire brand `slate` rather than map it (ΔE 5.67 — needs brand sign-off) | draft | [decisions.md](decisions.md) |
| D4 | Keep `aqua-blue` exact as an off-palette stop (ΔE 6.00 to nearest) | draft | [decisions.md](decisions.md) |
| D5 | Brand accents pair with an accessible twin from the same family | draft | [decisions.md](decisions.md) |

See [`decisions.md`](decisions.md) for the full log with rationale.

---

## Hard Constraints

Initial set lives inline in [`design-system-build-2-tokens.md` § Hard Constraints](design-system-build-2-tokens.md). Append new ones here as decisions land — keep this table as the program-wide index.

| ID | Rule | Source |
|---|---|---|
| HC-1 | Purple is not the primary color — secondary or tertiary only | build-2 |
| HC-2 | Warm-leaning neutrals only — no blue-grey | build-2 |
| HC-3 | All component tokens reference semantic tokens — no raw hex | build-2 |
| HC-4 | All semantic tokens reference core palette stops — no raw hex | build-2 |
| HC-5 | All hex values verified for WCAG AA in their intended pairing | build-2 |
| HC-6 | Icon system must be free and open-source | build-2 |
| HC-7 | Border radius default range: 16–20px for primary components | build-2 |
| HC-8 | Any assumption made during build must be noted inline | build-2 |
| HC-9 | Do not alter hex values approved in Part 1 within the same iteration | build-2 |

### Maintenance rule

If a sourcing decision changes, update the source file first (build-2 for the initial nine; `decisions.md` for new ones). Then reflect in this table. **Do not duplicate constraint text elsewhere** — DESIGN.md and the build files reference this index.

---

## Open gaps

| Gap | Severity | Notes |
|---|---|---|
| First build | high | Run interview + build pipeline (1 → 1b → 2) to produce v1 palette, components, and Figma export. |
| `Design Building Blocks` not measured | high | The brand↔palette merge (D1–D5) used Brand Guidelines v1.2 + production CSS as anchors. The design-system Figma file was not open, so its live token values are unreconciled. Open it and re-run the merge. |
| Figma role tokens don't exist | medium | `MH colors v2` holds 704 duplicated primitives across two identically-named collections and zero role tokens. Layer 2 of [`mh-brand-merged.css`](../aug05-mh-brand-palette-merge/mh-brand-merged.css) is the spec for what to build. |
| Typography pairing | medium | Candidates parked in DESIGN.md; budget question first. |
| AI surface treatment | medium | Required because AI-competent is a brand attribute; specification deferred to a dedicated iteration. |
| Dark mode posture | low | Undecided. Defer until a stakeholder asks. |

---

## Folder map

```
color system/
├── MAP.md                                    ← this file
├── DESIGN.md                                 ← strategic snapshot — read first
├── decisions.md                              ← decisions log
│
├── design-system-interview.md                ← runbook step 1
├── design-system-build-1-visual.md           ← runbook step 2 — palette
├── design-system-build-1b-components.md      ← runbook step 3 — components
└── design-system-build-2-tokens.md           ← runbook step 4 — tokens + Figma JSON
```

---

## How to add new work

1. Read [`DESIGN.md`](DESIGN.md) for strategic chassis (purpose, attributes, tribe, audience tension).
2. Run [`design-system-interview.md`](design-system-interview.md). Confirm input summary.
3. Run [`design-system-build-1-visual.md`](design-system-build-1-visual.md) → confirm `palette-review.html`.
4. Run [`design-system-build-1b-components.md`](design-system-build-1b-components.md) → confirm `component-preview.html`.
5. Run [`design-system-build-2-tokens.md`](design-system-build-2-tokens.md) → confirm tokens and `figma-variables.json`.
6. Update **this MAP.md** (active version, status, gaps).
7. If a strategic decision was made or revised, append to [`decisions.md`](decisions.md) and update the Decisions table above.

Each build outputs three named files: `palette-review.html`, `component-preview.html`, `figma-variables.json`. For v2+, version the folder (`v1/`, `v2/`, …) and store all three plus a copy of the confirmed input summary inside it.

---

## Status legend

- **current** — actively used; the state of the world right now
- **direction-locked** — direction committed; verification pending
- **locked** — fully verified and protected; downstream changes must reference, not reopen
- **superseded** — replaced by a successor; kept for audit trail
- **draft** — in-progress, not yet ratified
- **archived** — frozen, off the retrieval path
