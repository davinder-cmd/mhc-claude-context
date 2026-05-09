# BUILD — design system artifact build dispatcher

> Run this after `INTERVIEW.md` is confirmed. The Delta Panel from the interview is your source of truth. Do not re-ask questions; if something is ambiguous, make a reasonable decision, apply it, and note the assumption inline.

---

## Universal pre-flight (every build, every type)

1. **Read** `MAP.md` to confirm active program state and version numbering.
2. **Read** `decisions.md` for any locked decisions that bound this iteration.
3. **Read** the prior version's file at the path named in the Delta Panel's `Builds on` field. That's the locked baseline.
4. **Verify hard constraints** (see end of `INTERVIEW.md`). The build must not violate any.

---

## Step 1 — Copy the template (always)

Never write a preview from scratch.

```bash
cp _templates/{type}.html {target-path}
```

`{type}` and `{target-path}` come directly from the Delta Panel.

---

## Step 2 — Paste the Delta Panel verbatim

The Delta Panel emitted by `INTERVIEW.md` pastes into the template's `<header>` block. Don't paraphrase, don't rewrite — verbatim.

---

## Step 3 — Fill the body (type-specific)

### `system-preview`

Build in strict layer sequence. Each layer references the one before — no raw hex past Layer 1.

```
Layer 1 → Core scales (neutral, sand, primary, success, warning, error + categoricals)
Layer 2 → Semantic tokens (incl. gradient utilities)
Layer 3 → Component tokens (buttons, badges, selection, focus, radius, dataviz)
Layer 4 → Icon system (sizing, fill rule, treatments, module-tinted, library)
Layer 5 → Illustration palette (range rule, style direction, variant grid)
Applied → Three anchor moments (Member · Buyer · AI)
A11y    → Pairings table; resolve every failure inline
Narrative → 4–6 sentences, plain English, stakeholder-ready
```

The template's HTML comments tell you what each section requires. Fill them.

If `Weighting viz = include`: add the 60-30-10 stacked bar at the end of every applied moment. Skip if `Weighting viz = skip`.

### `layer-probe`

1. **Lock context** — list every layer that's NOT being modified, with the version they're locked at.
2. **Layer body** — the deep work for the one layer being changed.
3. **Pilot** — one applied screen showing this layer in real context. Pick the pilot that most stress-tests this layer.
4. **Open follow-ups** — what the next iteration should pick up.

### `decision-probe`

1. **Candidates** — every option being evaluated, with origin/hue/role/swatch row.
2. **Selection criteria** — declared up front; same criteria applied to every candidate.
3. **Applied audit** — same pilot moments rendered against each candidate.
4. **Comparison table** — candidate × criterion grid.
5. **Recommendation** — name the chosen candidate; state the tradeoff accepted.
6. **Alts retained** — fallback options + reasons; explicit drops.
7. **Verification gates** — if `direction-locked` rather than fully `locked`, list what must pass for graduation.

### `applied-probe`

1. **Screens** — render each anchor moment at fidelity.
2. **Token annotation per screen** — what tokens, why; element-by-element.
3. **Verdict + Issue** — what landed well; what needs the next pass.
4. **Open issues + decision asks** — feed forward into the next iteration.

---

## Step 4 — Update `MAP.md`

After the file is written, update `MAP.md`:

- Bump the active version pointer if a `system-preview` landed.
- Mark prior `current` version as `superseded` if this iteration is its successor.
- Append to the alts list if it's an alt.
- Record gaps if any layer is intentionally deferred.

---

## Step 5 — Update `decisions.md` (only if a decision landed)

If the iteration resolved a decision (e.g., a `decision-probe` reached `direction-locked` or `locked`):

- Append a new entry under the current session date.
- Format: `### D{ID}. {decision title} — {STATUS}` followed by Decision, Rationale, Implication, Status, links.
- Cross-link to the artifact that backs the decision.

---

## Step 6 — Status transitions

These happen automatically based on what was built:

| Trigger | Effect |
|---|---|
| Built `system-preview` for v{N+1} | v{N} → `superseded` |
| Built any artifact in `alts/` | Active main version unchanged |
| `decision-probe` reaches `locked` (all gates pass) | Add lock to `decisions.md`; surface in `MAP.md` |
| Build references a `superseded` version as `Builds on` | Reject — main lineage cannot regress without an explicit decision entry |

---

## Hard constraints — verified at build time

The master list lives in [`MAP.md` § Hard Constraints](MAP.md#hard-constraints) (HC-1 through HC-12). The build self-checks every constraint per the **Build catches** column in that table. Failures must be fixed (or documented as a flagged exception in the Delta Panel `Changed` field) before the file can be declared complete.

Notable build-time enforcements that go beyond a simple grep:

- **HC-3 — neutral/sand split:** verify both scales exist as separate ladders. Reject if a scale named `neutral.*` carries chroma > 6% or if `sand.*` is used for text/border.
- **HC-6 — accessibility:** every text-on-background pairing audited; every UI-component edge audited; failures resolved inline with corrected token references, not skipped.
- **HC-9 — token references:** Layer 2 references Layer 1; Layer 3 references Layer 2. No raw hex past Layer 1. Reject any direct hex declaration in component tokens.
- **HC-11 — Tonal direction:** see enforcement table below.

### Color register enforcement (HC-11, per INTERVIEW B1)

| Register | Build check |
|---|---|
| **Earth** *(default)* | No special check. Sand + clay + sage co-lead; ink stays in `neutral.*` ≤ 6% chroma. Matches existing locked architecture. |
| **Neutral** | Verify chromatic restraint — most surfaces in `sand.*` + `neutral.*`; categoricals minimized to 100–200 stops. Module identity barely visible by design. |
| **Pastel** | **REJECT unless `Decision touched` references D11.** Pastel washes were retired by v4 editorial restraint; reintroduction requires a backing decision-probe. |
| **Jewel** | Verify saturated mid-stops dominate surfaces; categoricals appear at 600–700 as surface accents (not just ink). Flag in Premise as a major aesthetic shift even though no lock is reopened. |
| **Fluorescent** | **REJECT unless `Decision touched` references both D1 + HC-12.** Fluorescent saturation likely conflicts with Clinical-Modern Distinctive tribe and Phase 0 "Credible" attribute; requires a backing decision-probe. |
| **Shade-dominant** | Soft-warn — confirm Premise explicitly resolves the trade against Q8 ("calm and warm"). No formal lock reopened, but the iteration's intent must justify the departure. |
| **Tone-on-tone** | **REJECT unless `Decision touched` references both D2 + Q13.** Single hue across everything collapses the multi-hue model and reopens primary-hue family + categorical-badge architecture. |

Earth, Neutral, and Jewel keep the locked architecture intact. The other four reopen specific decisions or trade against locked anchors — and must be backed accordingly.

### Brand color role enforcement (HC-13, per INTERVIEW B6)

| Role | Build check |
|---|---|
| **Passive** *(default)* | No special check. Color is an accent. CTAs use solid primary; module identity through glyph color, not container fill. Matches D11. |
| **Active** | **REJECT unless `Decision touched` references D11.** Active reopens the editorial restraint principle ("color is an accent, not a coat"); requires a backing decision-probe. |

---

## What this dispatcher does NOT do

- Does not re-ask interview questions (use `INTERVIEW.md` first)
- Does not invent layer requirements not in the template (the template is the spec)
- Does not skip status transitions silently (every move logged in `MAP.md` or `decisions.md`)
- Does not write into `archive/` (read-only audit trail)
