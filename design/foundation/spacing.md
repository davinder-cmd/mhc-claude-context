# Spacing

**Confluence:** https://mobilehealthc.atlassian.net/wiki/spaces/MDS/pages/1344045236
**Figma:** https://www.figma.com/file/QGp66GqX7B1LDkjD82bvwC/Design-System-Master?node-id=52775%3A23488
**Reference:** Material 3 — 4dp baseline grid
**Status:** ✅ Documented — Material-aligned 2026-05-22

---

## Purpose

Spacing tokens ensure consistent rhythm and density across all surfaces. They eliminate arbitrary values and make layouts predictable for engineering.

---

## Scale

Base unit: **4dp**. All values are multiples of 4. Twelve tokens, aligned with Material 3's spacing scale.

| Token | Value | Common use |
|-------|-------|------------|
| $spacing-01 | 4dp | Minimal separation within a component |
| $spacing-02 | 8dp | Internal component padding (compact) |
| $spacing-03 | 12dp | Medium-tight spacing — chip to label, dense list rows |
| $spacing-04 | 16dp | Standard internal padding, default margin |
| $spacing-05 | 24dp | Between related groups |
| $spacing-06 | 32dp | Section separation |
| $spacing-07 | 40dp | Medium section gaps |
| $spacing-08 | 48dp | Large section gaps |
| $spacing-09 | 64dp | Major layout regions |
| $spacing-10 | 80dp | Hero/banner spacing |
| $spacing-11 | 96dp | Page-level top/bottom padding |
| $spacing-12 | 128dp | Largest structural gaps |

**Note:** 2dp is no longer a spacing token. It's reserved for borders/dividers (see [object-styles.md](object-styles.md)).

---

## Rules

- Always use tokens — never hardcode a dp value
- Never introduce a custom spacing value outside this scale
- 2dp is **not** a spacing value — use it only for borders/dividers
- **Body margin** (matches [responsive-grid.md](responsive-grid.md)):
  - Compact (0–599dp): **16dp** ($spacing-04)
  - Medium and above (600dp+): **24dp** ($spacing-05)
  - The legacy "200dp at 840dp+" rule was a side-nav holdover — removed.

---

## Migration from Previous Scale

Token numbers shifted because we dropped 2dp and added 12dp + 48dp. Engineering will need a search-and-replace.

| Old token | Old value | New token | New value | Change |
|-----------|-----------|-----------|-----------|--------|
| $spacing-01 | 2dp | — | — | **Dropped.** 2dp is now a border/divider value, not a spacing token |
| $spacing-02 | 4dp | $spacing-01 | 4dp | Renumbered down |
| $spacing-03 | 8dp | $spacing-02 | 8dp | Renumbered down |
| — | — | $spacing-03 | 12dp | **New** |
| $spacing-04 | 16dp | $spacing-04 | 16dp | Unchanged |
| $spacing-05 | 24dp | $spacing-05 | 24dp | Unchanged |
| $spacing-06 | 32dp | $spacing-06 | 32dp | Unchanged |
| $spacing-07 | 40dp | $spacing-07 | 40dp | Unchanged |
| — | — | $spacing-08 | 48dp | **New** |
| $spacing-08 | 64dp | $spacing-09 | 64dp | Renumbered up |
| $spacing-09 | 80dp | $spacing-10 | 80dp | Renumbered up |
| $spacing-10 | 96dp | $spacing-11 | 96dp | Renumbered up |
| $spacing-11 | 128dp | $spacing-12 | 128dp | Renumbered up |

---

## Escalate if

A spacing value is needed that doesn't exist in this scale.

---

## Revision Log

| Date | Change |
|------|--------|
| 2026-05-22 | Material 3 alignment. Dropped $spacing-01 (2dp). Added 12dp and 48dp tokens. Renumbered scale to $spacing-01 through $spacing-12. Rewrote body margin rule to match the new responsive-grid breakpoints — removed the 200dp side-nav legacy value, set 16dp at Compact and 24dp at Medium+. |
