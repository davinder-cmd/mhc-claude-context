# decisions — strategic decisions log

> Running log of strategic decisions for the color system program. Append-only — past decisions stay in the log even when superseded, so future-you can trace the reasoning.
>
> **Format per entry:**
>
> ```
> ### D{ID}. {decision title} — {STATUS}
>
> **Decision.** Single sentence stating what was decided.
> **Rationale.** Why. Cite references, screenshots, stakeholder input, prior decisions touched.
> **Implication.** What this means downstream — for the build, the palette, components, or future iterations.
> **Status.** draft / direction-locked / locked / superseded
> **Backing artifact.** Path to the build artifact, audit, or screen capture that supports this decision.
> ```

---

## Status legend

- **draft** — proposed, not yet ratified
- **direction-locked** — direction committed; verification gates pending
- **locked** — fully verified; downstream changes must reference, not reopen
- **superseded** — replaced by a successor decision (link to it)

---

## How to add an entry

1. Append under the current session date heading (use ISO `YYYY-MM-DD`)
2. Use the next available D-number across the whole log (don't reset per date)
3. Cross-link to the artifact that backs the decision (palette HTML, component HTML, screenshot, etc.)
4. Update the **Decisions** table in [`MAP.md`](MAP.md) to surface the entry
5. If the decision adds a new program-wide invariant, append to **Hard Constraints** in `MAP.md` too

---

## Log

## 2026-08-05

> All five below are **draft** — proposed from the ΔE2000 merge analysis, not ratified. Backing artifact for all: [`../aug05-mh-brand-palette-merge/`](../aug05-mh-brand-palette-merge/MERGE-ANALYSIS.md).

### D1. Adopt MH Colors v2 stops as brand equivalents where ΔE2000 is within tier tolerance — DRAFT

**Decision.** Brand colors map to palette stops when the measured difference falls inside a tier-budgeted tolerance: primary ≤ 2.0, secondary ≤ 3.5, tertiary ≤ 5.0 ΔE2000. Twelve of fifteen brand colors qualify.
**Rationale.** Measured with CIEDE2000 (implementation verified against all 27 Sharma et al. reference vectors). Both brand oranges land below the just-noticeable difference — lava-orange → Ember 700 at ΔE 0.77, tangerine → Orange 700 at ΔE 0.62 — and the primary blue → Ocean 1300 at ΔE 1.41. Tier budgeting reflects that brand recognition load concentrates in the primary and the lockup, not in tertiary washes.
**Implication.** Adopting stops rather than holding isolated brand hexes buys the whole sibling ramp: hover states, accessible twins, and hue-consistent tints that MHC currently has to invent per-screen.
**Status.** draft
**Backing artifact.** [`MERGE-ANALYSIS.md`](../aug05-mh-brand-palette-merge/MERGE-ANALYSIS.md) · visual proof in [`brand-merge.html`](../aug05-mh-brand-palette-merge/brand-merge.html)

### D2. Warm the brand only through the neutrals; ink stays chromatically neutral — DRAFT

**Decision.** Warming is applied to backgrounds and hairlines by substituting warm-neutral stops (cloud → Coffee 100, silver → Coffee 300). Text and ink stay in the neutral Grey family.
**Rationale.** All four MH brand neutrals are cool (b\* −1.1 to −3.2), so the neutrals are where temperature can shift without touching a chromatic brand color. But the warm families turn brown below roughly L\* 55 — Coffee 600 is b\* +20.6 from slate, Cocoa 1400 is +23.4 from charcoal. Coffee 100 is deliberately a *worse* match to cloud than Grey 300 (ΔE 4.0 vs 2.6); the extra 1.4 ΔE is spent to buy warmth in the only place it is safe to spend it. Satisfies HC-2 (warm-leaning neutrals, no blue-grey) without producing brown ink.
**Implication.** Sets the ceiling on how warm the product can go. Any future request to warm text or borders should be refused with this measurement.
**Status.** draft
**Backing artifact.** [`MERGE-ANALYSIS.md` § Warming the neutrals](../aug05-mh-brand-palette-merge/MERGE-ANALYSIS.md)

### D3. Retire brand `slate` rather than map it — DRAFT

**Decision.** `--mh-slate` (`#6E7A7D`) is removed from the working palette and its role taken by Grey 800 / Grey 1100.
**Rationale.** Nearest palette stop is ΔE 5.67 — outside secondary tolerance, so it cannot be defended as a match. Its cool blue-grey cast is the specific quality the warming direction moves away from, so the mismatch is in the desired direction. Presenting this as a deliberate retirement is more honest than stretching the tolerance argument to cover it.
**Implication.** This is the only decision here that changes the brand rather than mapping it. Needs sign-off from whoever owns brand — flagged as the one item in this set worth a conversation.
**Status.** draft
**Backing artifact.** [`MERGE-ANALYSIS.md` § Your four questions](../aug05-mh-brand-palette-merge/MERGE-ANALYSIS.md)

### D4. Keep `aqua-blue` exact as an off-palette stop — DRAFT

**Decision.** `--mh-aqua-blue` (`#04A0B7`) keeps its exact brand value and is not mapped to a palette stop.
**Rationale.** Nearest stop is Teal 1000 at ΔE 6.00 — a different color by any tolerance. Aqua-blue carries CTA and headline duty per the brand guidelines, so it holds real recognition load. Substituting it is the single change in this exercise a stakeholder would notice unprompted.
**Implication.** The merged system carries one intentional off-palette value. It gets no sibling ramp, so its accessible text pairing comes from Teal 1200 (4.65:1) and that pairing must be specified explicitly wherever aqua-blue appears with text.
**Status.** draft
**Backing artifact.** [`MERGE-ANALYSIS.md` § Your four questions](../aug05-mh-brand-palette-merge/MERGE-ANALYSIS.md)

### D5. Brand accents pair with an accessible twin from the same family — DRAFT

**Decision.** Any brand accent below 4.5:1 is used as a fill only, paired with a darker stop from its own family for text. No brand accent is darkened to pass contrast.
**Rationale.** Most brand accents fail AA as text — mango 1.86:1, zesty-green 1.58:1, tangerine 2.53:1, lava-orange 3.39:1. Darkening the brand color to pass breaks the brand; pairing preserves the hue while the text passes. Satisfies HC-5 without touching brand values.
**Implication.** Semantic roles split into `-fill` and `-text` pairs (see Layer 2 of `mh-brand-merged.css`). Components consuming semantic color must reference the correct half.
**Status.** draft
**Backing artifact.** [`mh-brand-merged.css`](../aug05-mh-brand-palette-merge/mh-brand-merged.css) · [`MERGE-ANALYSIS.md` § The accessible twin pattern](../aug05-mh-brand-palette-merge/MERGE-ANALYSIS.md)
