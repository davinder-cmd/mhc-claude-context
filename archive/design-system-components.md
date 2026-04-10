# MH Design System — Component Reference

> This is the agent-facing decision layer for the MH Design System. It is NOT a replacement for Confluence documentation — it's a quick reference to help make correct component decisions without opening Figma or Confluence every time. When in doubt, escalate to Davinder.
>
> **Figma Master:** https://www.figma.com/file/QGp66GqX7B1LDkjD82bvwC/Design-System-Master
> **Confluence (MDS):** https://mobilehealthc.atlassian.net/wiki/spaces/MDS/overview
> **Confluence (DF):** https://mobilehealthc.atlassian.net/wiki/spaces/DF

**Documentation status key:**
- ✅ Documented — full guidance available
- 🔶 Partial — some guidance, Confluence has more
- 🚧 Stub — page exists, content in progress

---

# Foundation

## Application Frame ✅
**Confluence:** https://mobilehealthc.atlassian.net/wiki/spaces/MDS/pages/1344045104

The structural skeleton of the app. Consistent across all employer implementations.

Three regions on every platform: App Bar, Navigation, Body.

**Navigation rules by platform:**
- Mobile (iOS/Android): Bottom Navigation bar only
- Desktop/Tablet: Navigation Panel (256dp expanded, 72dp collapsed)
- Mobile browser <600dp: Modal navigation drawer

**Body region:**
- Max content width desktop: 940dp. Common content widths: 720, 640, 480dp
- SDK implementations: partner requirements may override standard widths
- Margin at base: 16dp. At 600dp+ breakpoint: 32dp. At 840dp+: 200dp max

---

## Colors 🔶
**Confluence:** https://mobilehealthc.atlassian.net/wiki/spaces/MDS/pages/1344045170

Token-driven color system. Always use semantic tokens — never hardcode hex values.

**Key token categories:**
- `$background` — page and surface backgrounds
- `$text-primary / secondary / placeholder / error / disabled` — all text
- `$icon-primary / secondary / on-color / disabled` — all icons
- `$focus` — focus rings and underlines (accessibility critical)
- `$link-primary / secondary / visited` — link states
- Semantic colors: informative, negative, notice, positive — always pair with text or icon, never color alone

**Color themes:** System supports 4 themes (2 light, 2 dark). Color should never be the sole communicator of meaning.

**Escalate if:** A new color is needed that doesn't map to an existing token.

---

## Spacing ✅
**Confluence:** https://mobilehealthc.atlassian.net/wiki/spaces/MDS/pages/1344045236
**Figma:** https://www.figma.com/file/QGp66GqX7B1LDkjD82bvwC/Design-System-Master?node-id=52775%3A23488

Base unit: 4dp. All spacing values divisible by 4.

| Token | dp |
|-------|----|
| $spacing-01 | 2 |
| $spacing-02 | 4 |
| $spacing-03 | 8 |
| $spacing-04 | 16 |
| $spacing-05 | 24 |
| $spacing-06 | 32 |
| $spacing-07 | 40 |
| $spacing-08 | 64 |
| $spacing-09 | 80 |
| $spacing-10 | 96 |
| $spacing-11 | 128 |

Use spacing tokens for all margin and padding. Never introduce custom spacing values.

---

## Typography ✅
**Confluence:** https://mobilehealthc.atlassian.net/wiki/spaces/MDS/pages/1344045333
**Figma:** https://www.figma.com/file/QGp66GqX7B1LDkjD82bvwC/Design-System-Master?node-id=49848%3A6285

**Font stack:**
- iOS: SF Pro (default), Roboto, or partner custom font
- Android + Web: Roboto (default), or partner custom font
- When a client requires a custom font, use their font exactly — do not approximate with Google Fonts

**Type scale:** Responsive Major Second scale. All values are whole pixel numbers.

**Line height:**
- Display / Heading: ~112.5% of type size
- Subtitle / Caption / Small / Button: ~125% of type size
- Paragraph: ~150% of type size

**Formatting rules:**
- Bold/Semi-bold: hierarchy and section headers
- Italic: titles, technical terms, captions only
- Underline: links only — never for emphasis
- Type scale is fixed — do not introduce new type sizes

**Escalate if:** A new type size or weight is needed outside the existing scale.

---

# Components

## Banner 🚧
**Confluence:** https://mobilehealthc.atlassian.net/wiki/spaces/MDS/pages/1344045465

An inline message that alerts users to important information or required actions. Documentation in progress — check Confluence for latest.

---

## Bottom Navigation ✅
**Confluence:** https://mobilehealthc.atlassian.net/wiki/spaces/MDS/pages/1344045485

Top-level navigation for iOS and Android native apps. **Mobile only** — desktop uses the Navigation Panel.

**Use for:** Primary app navigation between 3–5 top-level destinations.
**Don't use for:** Sub-sections, secondary content, or actions.

**Key rules:**
- 3–5 items only. More adds complexity and shrinks touch targets.
- Always pair icons with text labels — icon-only navigation is not permitted
- Notification badges are supported — use sparingly to avoid badge blindness
- Does not appear on Modal Pages
- Hiding on scroll-down is optional behavior

**Navigation behavior:**
- Tapping active tab from a child page → returns to top of that section
- Tapping inactive tab → navigates to top of that section's tree
- Returning to previous tab → restores most recent state where possible

---

## Button ✅
**Confluence:** https://mobilehealthc.atlassian.net/wiki/spaces/DF/pages/107938719
**Figma:** https://www.figma.com/file/QGp66GqX7B1LDkjD82bvwC/Design-System-Master?node-id=52807%3A23823

**Variants in order of emphasis:**

| Variant | Emphasis | Rule |
|---------|----------|------|
| Primary | High | One per page max. The dominant CTA. Not every screen needs one. |
| Standard | Medium | Use when multiple actions share equal importance, or a primary is too heavy. |
| Tinted / Stroked | Low | Always paired with another button. Never standalone. |
| Negative | High | Destructive actions only. Use sparingly. |
| Reverse Contrast | — | On colored backgrounds only. Static white or black. |
| Text | — | Tertiary actions only, within a button group. Never standalone. |
| Icon | — | Only when clarity requires it. Never decorative. |

**Sizes:**

| Size | Height | Default use |
|------|--------|-------------|
| Jumbo | 48dp | Use sparingly |
| Large | 40dp | Modals and pages |
| Medium | 36dp | Small dialogs, button groups, feature cards |
| Small | 32dp | Tables, lists, preview cards |

**Content rules:**
- Start with a verb ("Agree" not "Yes", "Sign Up" not "Submit")
- Sentence case always — never all caps
- Width adjusts to fit text; padding 8–16dp each side

**Escalate if:** A new button variant is needed that doesn't exist here.

---

## Button Group ✅
**Confluence:** https://mobilehealthc.atlassian.net/wiki/spaces/MDS/pages/1344045513

Groups of related buttons. Use when actions have a contextual relationship or when stepping through linear content (Back / Next / Skip / Cancel).

**Alignment rules:**

| Alignment | When to use |
|-----------|-------------|
| Left | Following a block of text |
| Center | Empty states |
| Right | Toasts, inline banners, progressive forms, single-button dialogs |
| Full-span | Modal dialogs, modal panels, modal pages |

**Key rules:**
- Max 2 button styles per group
- Top-level action = Primary or Negative; all others = secondary
- Button order follows text alignment: most critical action left when text is left-aligned; most critical right when right/center-aligned
- Icons only on top-level actions within the group
- Overflow: buttons stack vertically with most critical action at bottom

---

## Chip Group ✅
**Confluence:** https://mobilehealthc.atlassian.net/wiki/spaces/MDS/pages/1344045541

Lays out a collection of chips. Three modes:

**Single Choice** — one selection at a time, auto-deselects others. Alternative to: Switch, Radio Button, Dropdown, Segment Control. Use for: data entry, wizards, filtering.

**Multiple Choice** — any number selectable. Alternative to: Checkboxes, Switches. Use for: filtering, narrowing search results.

**Action** — triggers contextual actions. Alternative to: Buttons (when buttons would feel too persistent). Can be horizontally scrollable.

**Placement:**
- Default: left-to-right, wraps to next line on overflow
- Horizontal scroll: preferred on mobile when many options exist
- If more than 2 rows when stacked, switch to horizontal scroll

---

## Feature Card 🚧
**Confluence:** https://mobilehealthc.atlassian.net/wiki/spaces/MDS/pages/1344045575

Documentation in progress. Commonly used with Button Groups. Check Confluence for latest.

---

## Filter Group 🚧
**Confluence:** https://mobilehealthc.atlassian.net/wiki/spaces/MDS/pages/1344045586

Documentation in progress. Check Confluence for latest.

---

## Header Bar 🚧
**Confluence:** https://mobilehealthc.atlassian.net/wiki/spaces/MDS/pages/1344045597

Documentation in progress. Contains employer branding. Always present at top, consistent across platforms. On web, may include navigation or action items (profile, settings, messages). Check Confluence for latest.

---

## Navigation Bar 🚧
**Confluence:** https://mobilehealthc.atlassian.net/wiki/spaces/MDS/pages/1344045625

Documentation in progress. Check Confluence for latest.

---

## Overlay Header 🚧
**Confluence:** https://mobilehealthc.atlassian.net/wiki/spaces/MDS/pages/1344045636

Documentation in progress. Check Confluence for latest.

---

## Pagination 🚧
**Confluence:** https://mobilehealthc.atlassian.net/wiki/spaces/MDS/pages/1344045647

Documentation in progress. Check Confluence for latest.

---

## Popover 🔶
**Confluence:** https://mobilehealthc.atlassian.net/wiki/spaces/MDS/pages/1344045658

Transient content container for menus, options, and additional actions. Floats above the interface with stroke and drop shadow.

**Use when:** Displaying contextual, temporary content triggered by a user action.
**Don't use when:** Content volume is too large — use a Tray instead on small screens.

**Dismissal:** Tap/click outside the popover, or tap the source again, or select an action inside.
**Show tip:** When the trigger source doesn't have a clear down state, use a popover with a directional tip.

---

## Preview Card 🚧
**Confluence:** https://mobilehealthc.atlassian.net/wiki/spaces/MDS/pages/1344045674

Documentation in progress. Check Confluence for latest.

---

# Quick Decision Guide

**Choosing between similar components:**

| If you need... | Use |
|----------------|-----|
| Single selection from a short list | Chip Group (Single Choice) |
| Multiple selections | Chip Group (Multiple Choice) |
| A single dominant action | Button (Primary) |
| Two related actions | Button Group |
| Temporary options menu | Popover |
| Alert or status message | Banner |
| Top-level app navigation (mobile) | Bottom Navigation |

**Escalation triggers:**
- A component is needed that doesn't exist in this system → escalate to Davinder immediately
- A 🚧 stub component needs to be used in a spec → confirm with Davinder before proceeding
- A new color, spacing value, or type size is needed → escalate, do not invent
