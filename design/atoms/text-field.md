# Text Field

**Figma Page:** `A_Text Field` — https://www.figma.com/file/QGp66GqX7B1LDkjD82bvwC/Design-Building-Blocks
**Notion:** https://www.notion.so/Text-Field-33e69fed903181cd8db5d343033dc88e
**Status:** ✅ Ready

---

## Quick Reference

- **Variants:** Standard, Password (with toggle), Search (with icon + clear)
- **Default:** Standard
- **Height:** 44dp minimum (touch target)
- **Label required** — never use placeholder as label

---

## Escalate If

- New input type requested outside standard/password/search
- Custom validation pattern needed
- Inline editing behavior required

---

## Decision Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-04-10 | Label always required | Accessibility: placeholders disappear on focus |
| 2026-04-10 | 44dp minimum height | Touch target compliance |
| 2026-04-10 | Validation on blur by default | Reduces cognitive load during typing |
