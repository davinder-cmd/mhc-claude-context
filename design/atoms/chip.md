# Chip

**Confluence:** https://mobilehealthc.atlassian.net/wiki/spaces/DF/pages/108134577
**Status:** ✅ Documented

> Note: For groups of chips, see [Chip Group](../components/chip-group.md). This page covers the individual chip element.

---

## Purpose

A compact, interactive element representing discrete information. Used for input, selection, filtering, or triggering actions. Appears dynamically as part of a group — not as a standalone persistent element like a button.

---

## Variants

| Variant | Use |
|---------|-----|
| Choice chip | Single or multiple selection from a set. Auto-deselects others when single-select. Alternative to toggle button, checkbox, radio button. |
| Filter chip | Filters content by tags or descriptive words. Can be single or multi-select. |
| Input chip | Represents complex input (entity, text entry) in compact form. Editable until action is taken. Can be reordered or moved between fields. |

---

## Anatomy

1. Container (defined by stroke or fill)
2. Text (entity name, description, tag, action)
3. Thumbnail / avatar (optional — for entities like people)
4. Remove icon (optional — input chips only)

---

## Placement

- **Action chips:** After primary content (below a card, or persistently at screen bottom)
- **Filter chips:** Below a search field or at top of list
- **Input chips:** Inline with text cursor, in a stacked list, or horizontally scrollable

---

## States

Default → Hover → Focus → Active → Disabled

- Focus state: required for keyboard and accessibility
- Closable/clickable chips get `role="button"` and are focusable
- Close with Backspace or Delete; activate with Enter

---

## RTL

Avatar right-aligned, close button left-aligned in RTL layouts.

## Common Mistakes

- Using a standalone chip instead of grouping within Chip Group
- Using chips as a persistent navigation element (use Bottom Navigation)
- Treating chips like buttons — chips appear dynamically, buttons persist
