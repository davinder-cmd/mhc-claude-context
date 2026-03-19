# Avatar

**Confluence:** https://mobilehealthc.atlassian.net/wiki/spaces/DF/pages/108069033
**Figma:** https://www.figma.com/file/QGp66GqX7B1LDkjD82bvwC/Design-System-Master?node-id=53214%3A37606
**Status:** ✅ Documented

---

## Purpose

Represents a unique entity — person, group, project, category, or activity — as a visual proxy. Often paired with status or presence indicators.

---

## Shape

| Shape | Use |
|-------|-----|
| Circular | Identifying people and users |
| Square | Identifying product entities — categories, pillars, features |

---

## Variants

| Variant | Use |
|---------|-----|
| Image | Displays user-uploaded photo |
| Text (Initials) | Fallback when no image is set; text overlaid on background color |
| Team | Group of users |
| Group | Aggregated entity |
| Feature | Feature or product area |
| Category | Content category |
| Activity | Activity type |

Each variant has its own default placeholder displayed when not configured.

---

## Sizes

| Size | Use |
|------|-----|
| Small (32dp) | Tight layouts, secondary importance |
| Medium (40–56dp) | Default |
| Large (64–80dp) | Avatar as focal point |
| Extra Large (96–160dp) | Primary profile view |

Size is always square or circular — height equals width.

---

## Anatomy

1. Image
2. Status indicator (optional)
3. Presence indicator (optional — available, away, focused, busy)
4. Initials (fallback)

---

## Rules

- Always provide a fallback (initials or default placeholder) for when no image is set
- Keyboard navigable — focus state adds a blue ring

## Escalate if

A new avatar type or shape is needed that doesn't fit existing variants.
