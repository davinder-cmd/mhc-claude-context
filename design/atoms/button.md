# Button

**Figma Page:** `A_Button` — https://www.figma.com/file/QGp66GqX7B1LDkjD82bvwC/Design-Building-Blocks
**Notion:** https://www.notion.so/Button-Atom-Documentation-33e69fed903181f28e49ea51c832df18
**Status:** ✅ Ready

---

## Quick Reference

- **Variants:** Primary, Secondary, Outlined, Danger, Text, Contrast
- **Default:** Secondary
- **Sizes:** Small (32dp), Medium (36dp, default), Large (40dp), Jumbo (48dp)
- **Icon positions:** Left, Right, Icon-only (centered, no text)
- **One Primary per screen max**
- **Danger requires confirmation dialog**
- **Text** for inline/minimal emphasis actions
- **Contrast** for use on dark/image backgrounds

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
| 2026-04-09 | Moved from Components to Atoms | Button is a primitive — single-purpose, no internal composition. |
| 2026-04-10 | Added Text variant back | Needed for inline/minimal emphasis actions where filled buttons are too heavy. |
| 2026-04-10 | Added Contrast variant back | Required for buttons on dark backgrounds, images, or colored surfaces. |
| 2026-04-10 | Confirmed 4 sizes: Jumbo/Large/Medium/Small | Jumbo (48dp) for hero CTAs, Large (40dp) for modals/pages, Medium (36dp) default, Small (32dp) for dense UI. |
