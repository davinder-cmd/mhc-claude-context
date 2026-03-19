# Tag

**Confluence:** https://mobilehealthc.atlassian.net/wiki/spaces/DF/pages/107938803
**Figma:** https://www.figma.com/file/QGp66GqX7B1LDkjD82bvwC/Design-System-Master?node-id=53102%3A34483
**Status:** ✅ Documented

---

## Purpose

Shows a small amount of color-coded metadata. Communicates category, status, or meaning at a glance. Ideal for getting a user's attention without disrupting flow.

---

## When to Use

- Labeling the category or type of an item (e.g., program type, condition, status)
- Communicating status (active, complete, pending, error)
- When a single high-visibility attribute needs to stand out

## When NOT to Use

- Multiple tags on a single item — use plain text metadata and reserve one tag for the most important attribute
- Numeric counts — use a Badge instead
- Interactive filtering — use Chip Group instead

---

## Variants

| Variant | Use |
|---------|-----|
| Non-semantic | Color-coded categories. Use when there are 8 or fewer distinct categories. Uses label colors. |
| Semantic: Positive | Success, completion, healthy status |
| Semantic: Informative | Neutral information, tips |
| Semantic: Negative | Errors, warnings, critical status |
| Semantic: Neutral | Default, inactive, or unknown status |
| Disabled | Exists but unavailable in current context. Only disable if the tag is interactive. |

---

## Placement

- In cards: left side of footer if possible
- If no footer or footer is full: right edge of the preview
- If no preview: top right corner of the card

---

## Accessibility

- Tag text and background must meet minimum contrast requirements
- Color alone must never be the sole communicator of meaning — always pair with text
- Icon alongside text: icon should have no screen reader alternative (text serves as the accessible name)

## Common Mistakes

- Using multiple tags on a single item (pick the most important one)
- Using color alone to distinguish tags without text labels
- Using Tag for numeric information (use Badge)
