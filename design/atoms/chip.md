# Chip

**Figma Page:** `A_Chip` — https://www.figma.com/file/QGp66GqX7B1LDkjD82bvwC/Design-Building-Blocks
**Notion:** https://www.notion.so/Chip-33e69fed90318147bbf2df9e6648e8fb
**Status:** ✅ Ready

---

## Quick Reference

- **Variants:** Selection, Filter, Input
- **Default:** Selection (for single/multi-select scenarios)
- **Always used via Chip Group** — never standalone
- **Chips are dynamic, buttons are persistent**

---

## Escalate If

- New chip variant needed outside Selection/Filter/Input
- Standalone chip usage requested (should use Chip Group)
- Chip with custom interaction pattern

---

## Decision Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-04-10 | Kept 3 variants (no reduction) | Behaviorally distinct. Aligns with Material Design. |
| 2026-04-10 | Renamed Choice → Selection | Principle #2: Industry Naming. Clearer intent. |
| 2026-04-10 | Added Default Choice section | Principle #4: One Default. Selection is most common. |
