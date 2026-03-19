# Spacing

**Confluence:** https://mobilehealthc.atlassian.net/wiki/spaces/MDS/pages/1344045236
**Figma:** https://www.figma.com/file/QGp66GqX7B1LDkjD82bvwC/Design-System-Master?node-id=52775%3A23488
**Status:** ✅ Documented

---

## Purpose

Spacing tokens ensure consistent rhythm and density across all surfaces. They eliminate arbitrary values and make layouts predictable for engineering.

---

## Scale

Base unit: **4dp**. All values are multiples of 4.

| Token | Value | Common use |
|-------|-------|------------|
| $spacing-01 | 2dp | Micro gaps — icon to label, tight inline spacing |
| $spacing-02 | 4dp | Minimal separation within a component |
| $spacing-03 | 8dp | Internal component padding (compact) |
| $spacing-04 | 16dp | Standard internal padding, default margin |
| $spacing-05 | 24dp | Between related groups |
| $spacing-06 | 32dp | Section separation |
| $spacing-07 | 40dp | Large section gaps |
| $spacing-08 | 64dp | Major layout regions |
| $spacing-09 | 80dp | Hero/banner spacing |
| $spacing-10 | 96dp | Page-level top/bottom padding |
| $spacing-11 | 128dp | Largest structural gaps |

---

## Rules

- Always use tokens — never hardcode a dp value
- Never introduce a custom spacing value outside this scale
- Default body margin: 16dp. At 600dp+ breakpoint: 32dp. At 840dp+: 200dp max

## Escalate if

A spacing value is needed that doesn't exist in this scale.
