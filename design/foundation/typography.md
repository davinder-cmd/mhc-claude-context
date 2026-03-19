# Typography

**Confluence:** https://mobilehealthc.atlassian.net/wiki/spaces/MDS/pages/1344045333
**Figma:** https://www.figma.com/file/QGp66GqX7B1LDkjD82bvwC/Design-System-Master?node-id=49848%3A6285
**Status:** ✅ Documented

---

## Purpose

A consistent type system that maintains hierarchy and legibility across all platforms and partner implementations.

---

## Font Stack

| Platform | Default | Alternatives |
|----------|---------|--------------|
| iOS | SF Pro | Roboto, partner custom font |
| Android | Roboto | Partner custom font |
| Web / Mobile web | Roboto | Partner custom font |

**Critical rule:** When a client requires a custom font, use their font exactly. Do not approximate with Google Fonts or any substitute.

---

## Type Scale

Responsive Major Second scale. All values normalized to whole pixel numbers. The scale is fixed — do not introduce new sizes.

**Breakpoints:**
- Small: < 600dp → [Small Form scale](https://mobilehealthc.atlassian.net/wiki/spaces/MDS/pages/1344045391)
- Large: 600dp and up → [Medium Form scale](https://mobilehealthc.atlassian.net/wiki/spaces/MDS/pages/1344045403)

---

## Line Height

| Style | Line height |
|-------|-------------|
| Display, Heading | ~112.5% of type size |
| Subtitle, Caption, Small, Button | ~125% of type size |
| Paragraph | ~150% of type size |

---

## Weight & Formatting

| Style | Use |
|-------|-----|
| Bold / Semi-bold | Hierarchy, section headers |
| Medium | Emphasis within a sentence |
| Italic | Titles of works, technical terms, captions only |
| Underline | Links only — never for emphasis |

---

## Rules

- Type scale is fixed — never introduce new sizes
- Sentence case on all interactive elements (buttons, labels)
- Never use ALL CAPS for emphasis
- Color contrast for all text: 4.5:1 minimum (WCAG AA)
- Minimum body text: 16px at base size

## Escalate if

A new type size, weight, or style is needed outside the existing scale.
