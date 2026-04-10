# Button

**Notion:** https://www.notion.so/Button-Atom-Documentation-33e69fed903181f28e49ea51c832df18
**Figma:** https://www.figma.com/file/QGp66GqX7B1LDkjD82bvwC/Design-System-Master?node-id=52807%3A23823
**Status:** Ready

---

## Quick Reference

- **Variants:** Primary, Secondary, Outlined, Danger
- **Default:** Secondary
- **Sizes:** Small (32dp), Medium (36dp, default), Large (40dp)
- **One Primary per screen max**
- **Danger requires confirmation dialog**

---

## Escalate If

- New variant requested
- Icon-only button needed without visible label
- Size outside Small/Medium/Large needed
- Engineering requests behavior not documented

---

## Decision Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-04-09 | Reduced from 8 variants to 4 | Principle #1: Fewer Options. Carbon has 4, Material has 5. 8 was overconfigured. |
| 2026-04-09 | Renamed Standard → Secondary, Stroked → Outlined | Principle #2: Industry Naming. Engineers can Google these terms. |
| 2026-04-09 | Made Medium the default size | Principle #4: One Default. 90% of usage is Medium. |
| 2026-04-09 | Removed Tinted variant | Merged into Outlined. Behavioral difference was minimal. |
| 2026-04-09 | Removed Reverse Contrast variant | Handled via theme, not a separate variant. |
| 2026-04-09 | Removed Jumbo size | Edge case. Large covers prominent CTAs. |
| 2026-04-09 | Moved from Components to Atoms | Button is a primitive — single-purpose, no internal composition. |
