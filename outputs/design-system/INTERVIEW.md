# INTERVIEW — design system iteration intake

> Run this before every build. Outputs a fully-formed **Delta Panel** that pastes verbatim into the chosen template. Locked context is in `_strategy/` — do not re-ask.
>
> Conversational. Ask **one question at a time**. Wait for a full answer. Do not offer suggestions during input gathering. **Track any answer you inferred or filled in without explicit user confirmation** — these become the `Assumptions` field at D.2.

---

## Locked context (do not re-ask)

| What | Where |
|---|---|
| Active program state | [`MAP.md`](MAP.md) |
| Strategy decisions log | [`decisions.md`](decisions.md) |
| Phase 0 strategy (visual tribe, attributes, ICP) | [`_strategy/phase-0.md`](_strategy/phase-0.md) |
| Original interview baseline (Q1–Q17 answers) | [`_strategy/INTERVIEW-v2-original.md`](_strategy/INTERVIEW-v2-original.md) |
| Brand guidelines (2021) | [`_reference/brand-guidelines-2021.pdf`](_reference/brand-guidelines-2021.pdf) |
| Reference screenshots (bloom, fitbit, lovi, noom, sword, withings, clue) | [`_reference/screenshots/`](_reference/screenshots/) |

Read `MAP.md` first to know which version is active and what's already locked. Answers from the v1 interview (visual tribe, off-limits colors, accessibility target, etc.) are still in force unless an entry in `decisions.md` overrides.

---

## Run order

```
A. Direction          ← what kind of artifact, what version, target path
B. Standing deltas    ← five locked-by-default questions
C. Iteration inputs   ← references, off-limits, output prefs
D. Confirmation       ← Delta Panel emitted; user signs off; build can begin
```

---

## A. Direction

**A1. Artifact type.** Pick one — this determines which template gets copied.

- `system-preview` — full system, all 5 layers + applied moments. Use when changes span multiple layers.
- `layer-probe` — deep iteration on one layer (Layer 3, 4, etc.).
- `decision-probe` — choosing between candidates to resolve a decision (D1, D2, ...).
- `applied-probe` — testing how a system version's tokens land in real product screens.

**A2. Direction within the type.**

- Refinement of the active main lineage (continue from current locked version)
- New parallel alt branch (specify the alt's premise)
- Promotion of an existing alt to main
- Net-new exploration

**A3. Target file path** — computed from A1 + A2. Confirm or override:

- `system-preview` → `v{N+1}/system.html` (next version), or `alts/v{N}-alt-{slug}/system.html`
- `layer-probe` → `v{N}/layer-{L}-{slug}.html`
- `decision-probe` → `decisions/D{ID}-{slug}/audit.html`
- `applied-probe` → `v{N}/applied.html`

**A4. What changed since the last iteration on this lineage?** Stakeholder feedback, new constraints, competing reference, etc. Or: "none."

---

## B. Standing question deltas

Five questions. Each has a locked default. Re-confirm or override.

**B1. Color register.** Default **Earth**. Pick one per iteration:

| Option | Character | Surfaces | Categoricals | Architectural impact |
|---|---|---|---|---|
| **Earth** *(default)* | Natural, grounded, organic, honest | Sand + clay + sage co-lead; warm-but-grounded | Earthier hues prominent; rose/fuchsia recede | None — current locked state |
| **Neutral** | Minimal, editorial, restrained, timeless | Sand + neutral dominate; chromatic restraint | Categoricals minimized to 100–200; module identity barely visible | Compatible — most aligned with v4 editorial restraint |
| **Pastel** | Soft, calming, approachable, gentle | Soft 50–100 stops dominate; warm + module light tints | All categoricals at 100–200 only | **Reopens D11** — v4 retired pastel washes |
| **Jewel** | Rich, regal, premium, serious | Saturated mid-stops; surfaces deeper and richer | Categoricals at 600–700 as surface accents | Major aesthetic shift; flag in Premise |
| **Fluorescent** | Energetic, youthful, bold, attention-grabbing | Highly saturated 400–500 stops everywhere | Module hues at peak saturation | **Reopens D1 (visual tribe) + HC-12 (Phase 0 "Credible")** |
| **Shade-dominant** | Dramatic, high-contrast, modernist | Heavy dark-stop use; high-contrast layouts | Module identity via deep stops (700–900) | Soft-conflict with Q8 ("warm hug" target feeling); flag in Premise |
| **Tone-on-tone** | Monochromatic; depth through stop variation only | Single hue family across surfaces, accents, dividers, ink | Module identity from stop variation, not separate hues | **Reopens D2 + Q13** |

Architectural notes:

- **Earth, Neutral, Jewel** preserve the multi-hue architecture (R2 primary + 5 module categoricals) without reopening any locked decision. Pick freely.
- **Pastel** reopens D11 (v4 retired pastel washes). Requires backing decision-probe.
- **Fluorescent** likely conflicts with D1 (Clinical-Modern Distinctive doesn't accommodate fluorescent saturation). Requires backing decision-probe.
- **Shade-dominant** doesn't formally reopen a lock but trades against Q8's "calm and warm" anchor. Document the deliberate departure in Premise.
- **Tone-on-tone** is an architectural override — single hue across everything reopens D2 and Q13. Requires backing decision-probe. Pick only when the iteration's premise is deliberately monochromatic.

In all options, the neutral/sand split (HC-3) holds: surfaces always live on `sand.*`; ink always on `neutral.*` with low chroma. The register shifts which scales push forward and how saturated they appear — not the underlying split.

**B2. Icon treatment variety.** Locked: the active version's count (v6 = 5 recipes; v4 = 3 recipes). Constrain or expand?

**B3. Illustration economy.** Locked: variant grid — one composition × N palette swaps. Override?

**B4. Gradient comfort.** Locked: gradients only on container surfaces and primary CTAs. Push further (e.g., +20% surface area on heroes), pull back (flat throughout), or hold?

**B5. Color weighting visualization.** Locked: include the 60-30-10 stacked bar on every system-preview and applied-probe artifact. Skip for this iteration?

**B6. Brand color role.** Default **Passive** (per D11). Pick one per iteration:

| Option | What this means | Architectural impact |
|---|---|---|
| **Passive** *(default)* | Brand color sits behind content. CTAs use solid primary. Module identity through glyph color, not container fill. Color is an accent, not a coat. | None — current locked state per D11 |
| **Active** | Brand color drives the eye. Gradient backgrounds permitted on member screens. Module identity expressed through container fill or surface tint. | **Reopens D11** — v4 editorial restraint specifies passive |

Active is appropriate when an iteration's job is to *test* whether a more chromatic application reads better in a specific context (e.g., a buyer-hero variant, a celebratory moment). Not a default. If you pick Active, flag `Decision touched: D11` in the Delta Panel.

---

## C. Iteration-specific inputs

**C1. New references.** Anything new to study (apps, photography, illustration, web)? If yes, provide path or link with a label.

**C2. New off-limits / asks.** Anything to add to the off-limits list, or a specific ask not covered by the locked answers?

**C3. Output preferences.** Default is what the chosen template specifies. Any change?

---

## D. Confirmation

Two steps before BUILD can run: a lock-conflict check (D.1), then emit the Delta Panel (D.2), then sign-off (D.3).

### D.1 — Lock-conflict check

Before emitting the Delta Panel, scan the answers from A–C against the locked baseline. If any answer would reopen a locked decision or violate a hard constraint, **HALT** — switch this iteration to a `decision-probe` instead of the originally-planned type. A locked decision cannot be reopened inside an iteration that does something else; it requires its own audit.

Run each of the following checks. They're listed roughly by frequency.

| # | Check | Triggers HALT |
|---|---|---|
| 1 | **B1 = Tone-on-tone** | Yes, unless `Decision touched` references both D2 + Q13 with a backing audit at `decisions/D2-…` and `decisions/Q13-…`. Tone-on-tone reopens primary-hue family + categorical-badge architecture. |
| 2 | **B1 = Pastel** | Yes, unless `Decision touched` references D11. Pastel reopens v4 editorial restraint (which retired pastel washes). |
| 3 | **B1 = Fluorescent** | Yes, unless `Decision touched` references D1 + HC-12. Fluorescent likely conflicts with Clinical-Modern Distinctive tribe and Phase 0 "Credible" attribute. |
| 4 | **B6 = Active** | Yes, unless `Decision touched` references D11. Active reopens "color is an accent, not a coat" editorial restraint. |
| 5 | **B1 register conflicts with C1 references** | Yes — references win (per primer reconciliation rule). E.g., user picks Earth but cited references show jewel-toned products. HALT and ask user to reconfirm category, replace references, or acknowledge the conflict in Premise. |
| 6 | **Premise conflicts with D1 (visual tribe)** | E.g., "make it feel like Calm/Headspace" or "more lifestyle-leaning." Calm/Headspace = wellness-lifestyle tribe; D1 locks Clinical-Modern Distinctive. HALT and route to a tribe-reopen decision-probe. |
| 7 | **Any answer proposes purple as primary** | Q10 lock — purple is categorical only. HALT. |
| 8 | **Any answer reintroduces `interactive.secondary.*`** or "two-color CTA" | Q12 lock — one primary CTA. HALT. |
| 9 | **Any answer reduces accessibility floor below AA (4.5:1 text, 3:1 UI)** | Q17 lock. HALT. |
| 10 | **Any answer proposes a primary hue outside R2's family** without backing audit | D2 lock. HALT and route to a D2-reopen decision-probe. (Pivoting to R1 or R3 is allowed because they're documented fallback alts; pivoting *outside* R1/R2/R3 requires a new decision.) |
| 11 | **Any answer collapses the neutral / sand split** | Hard constraint (HC-3). HALT. |
| 12 | **Any answer puts gradient on text or borders** | Hard constraint (HC-8). HALT. |
| 13 | **User explicitly says "I want to reconsider [Dx]"** | Always HALT, regardless of what else is in the answers. Direct request to reopen overrides the iteration plan. |
| 14 | **Any answer proposes a non-open-source icon library** | Q15 lock. HALT. |

If a check trips: tell the user clearly which lock is reopening, then **rewrite the Delta Panel as a decision-probe** pointing at the conflict:

```
Type             → decision-probe
Target path      → decisions/D{ID}-{slug}/audit.html
Decision ID      → D{ID} (existing) or D{next} (new — propose a name)
Recommendation   → (defer until candidates are evaluated)
Premise          → "Resolve [lock] before [original premise] can proceed."
```

Tell the user explicitly: **"This iteration cannot proceed as a `{original type}` — it would reopen [lock]. The build will produce a decision-probe at [path] instead. The original intent can resume once the decision lands."**

If all checks pass, continue to D.2.

> **Defense in depth.** BUILD.md re-runs this same logic at write-time as a backstop (see BUILD.md "Hard constraints — verified at build time"). Catching a conflict at the interview is cheaper — it avoids work that can't ship.

### D.2 — Emit the Delta Panel

Output the Delta Panel block exactly as below — ready to paste verbatim into the template's header.

**Before emitting, populate `Assumptions`.** Walk back through A/B/C and list every answer you inferred or filled in without the user explicitly stating it. Each bullet should name *what* was assumed and *the cue* that triggered the inference. If every answer was explicit, write "none." This is the field future-you will scan first when an iteration's outcome doesn't match its premise — don't skip it.

```markdown
## Delta Panel

| Field            | Value                                                |
|------------------|------------------------------------------------------|
| Iteration        | v{N} · {slug}                                        |
| Type             | {system-preview / layer-probe / decision-probe / applied-probe} |
| Builds on        | {prior version path, e.g., v3/system.html}           |
| Premise          | {one sentence — what this iteration tests or asserts} |
| Color register   | {Earth / Neutral / Pastel / Jewel / Fluorescent / Shade-dominant / Tone-on-tone} |
| Brand color role | {Passive / Active}                                   |
| Changed          | • {bullet}<br>• {bullet}                             |
| Locked           | • {bullet}<br>• {bullet}                             |
| Assumptions      | • {what was inferred} — {cue / why}<br>• {"none" if every answer was explicit} |
| Decision touched | {D{ID} (gate / advance / reopen) — or "none"}        |
| Status           | draft                                                |
| Date             | YYYY-MM-DD                                           |
| Target path      | {full path to where the new file will be written}    |
| Template to copy | _templates/{type}.html                               |
| Weighting viz    | include / skip                                       |
```

### D.3 — Sign-off

Then ask:

> "Does this Delta Panel look correct? Anything to add or correct before I run the build?"

Do not proceed to the build until confirmed.

---

## Hard constraints (program-wide, never re-asked)

The master list lives in [`MAP.md` § Hard Constraints](MAP.md#hard-constraints) (HC-1 through HC-12). Each rule traces to a source decision (D-series) or Q-answer (Q1–Q17). The interview catches violations at intake via the D.1 lock-conflict check above; the build catches them at write-time.

**Do not restate the rules here.** If a constraint changes, update it once in MAP.md — both INTERVIEW.md and BUILD.md pick up the change automatically because they reference that table.
