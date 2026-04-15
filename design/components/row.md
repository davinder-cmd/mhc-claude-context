# Row

**Figma Page:** `C_Row` — https://www.figma.com/file/QGp66GqX7B1LDkjD82bvwC/Design-Building-Blocks
**Notion:** https://www.notion.so/Row-33e69fed903181f8ba51d7a83c1d65a5
**Status:** ✅ Ready

---

## Quick Reference

- **Variants:** Standard (48dp), Two-line (64dp), Three-line (88dp), Navigation, Selection
- **Default:** Standard
- **Anatomy:** Leading slot + Content slot + Trailing slot + optional Divider
- **Content slot is required** — everything else is optional

---

## Escalate If

- Row with more than one trailing action needed
- Custom row height outside standard variants
- Swipe actions or drag-to-reorder required

---

## Decision Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-04-10 | 48dp minimum height | Touch target compliance, consistent with Material |
| 2026-04-10 | Single trailing action max | Multiple actions clutter the row; use swipe or context menu |
| 2026-04-10 | Primary text truncates, secondary wraps | Maintains visual hierarchy |
