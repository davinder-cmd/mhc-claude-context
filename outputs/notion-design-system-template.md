# Notion Design System — Template Spec

Use this to build your design system documentation in Notion. Copy the structures and adapt as needed.

---

## Page Hierarchy

```
Design System (Page)
│
├── Overview (Page)
│
├── Foundation (Page with nested pages OR Database)
│   ├── Colors
│   ├── Typography
│   ├── Spacing
│   ├── Grid & Layout
│   ├── Motion
│   └── Accessibility
│
├── Elements (Database)
│
├── Components (Database)
│
├── Patterns (Database)
│
└── Templates (Database)
```

---

## Database: Elements

**Description:** Primitive UI building blocks. Single-purpose, no internal composition.

### Properties

| Property | Type | Options / Notes |
|----------|------|-----------------|
| Name | Title | — |
| Status | Select | `Draft` / `Ready` / `Needs Update` / `Deprecated` |
| Figma | URL | Link to Figma component |
| Confluence (legacy) | URL | Optional — link to old docs during migration |
| Last Updated | Date | When spec was last revised |
| Owner | Person | You or Isabel |

### Elements to Include

- Avatar
- Badge
- Button
- Checkbox
- Chip
- Dropdown
- Icon
- Loading Indicator
- Progress Indicator
- Radio Button
- Range Slider
- Stepper
- Tag
- Text Area
- Text Field
- Toggle

---

## Database: Components

**Description:** Assembled UI pieces. Composed of multiple elements. Reusable across features.

### Properties

Same as Elements, plus:

| Property | Type | Options / Notes |
|----------|------|-----------------|
| Elements Used | Relation | Links to Elements database |

### Components to Include

- Banner
- Bottom Navigation
- Button Group
- Carousel
- Chip Group
- Collapsible Container
- Feature Card
- Filter Group
- Header Bar
- List Row
- Navigation Bar
- Overlay Header
- Pagination
- Popover
- Preview Card

---

## Database: Patterns

**Description:** Recurring design solutions. Not components — they're recipes for how to solve common problems using existing components.

### Properties

| Property | Type | Options / Notes |
|----------|------|-----------------|
| Name | Title | — |
| Status | Select | `Draft` / `Ready` / `Needs Update` |
| Category | Select | `Forms` / `Navigation` / `Feedback` / `Content` / `Data Entry` |
| Figma | URL | Link to pattern examples |
| Last Updated | Date | — |

### Patterns to Include

- Form Layout (single column, multi-column, inline)
- Empty States
- Error Handling (inline, toast, modal)
- Loading States (skeleton, spinner, progressive)
- Search & Filter
- Onboarding Flow
- Confirmation Dialogs
- Data Validation
- Pagination & Infinite Scroll
- Pull to Refresh

---

## Database: Templates

**Description:** Page-level layouts. Starting points for new screens.

### Properties

| Property | Type | Options / Notes |
|----------|------|-----------------|
| Name | Title | — |
| Status | Select | `Draft` / `Ready` / `Needs Update` |
| Platform | Multi-select | `Mobile` / `Tablet` / `Web` |
| Figma | URL | Link to template frame |
| Components Used | Relation | Links to Components database |

### Templates to Include

- Detail Page
- List Page
- Settings Page
- Dashboard
- Onboarding Screen
- Modal / Overlay
- Search Results
- Profile Page

---

## Component Documentation Template

Use this structure for each Element and Component page. Copy and adapt.

---

### [Component Name]

**Figma:** [link]
**Status:** Ready
**Last updated:** 2026-04-09

---

#### Purpose

One sentence. What does this component do? When would you reach for it?

> Triggers an action or navigates to another page. The primary mechanism for user-initiated events.

---

#### Variants

| Variant | Emphasis | When to Use |
|---------|----------|-------------|
| Primary | High | Single dominant CTA. One per screen max. |
| Standard | Medium | Multiple actions of equal weight. |
| Tinted | Low | Always paired with another button. |
| Negative | High | Destructive actions only. |

---

#### Sizes

| Size | Height | When to Use |
|------|--------|-------------|
| Large | 40dp | Default for modals and full pages |
| Medium | 36dp | Button groups, cards |
| Small | 32dp | Tables, lists |

---

#### States

Default → Hover → Focus → Active → Disabled → Loading

- **Disabled:** Only when action is genuinely unavailable
- **Loading:** Pair with disabled to prevent duplicate taps
- **Focus:** Always visible for accessibility

---

#### Anatomy

1. Label (required)
2. Container (required)
3. Leading icon (optional)
4. Trailing icon (optional)
5. Loader (optional)

---

#### Content Rules

- Start with a verb: "Sign Up" not "Submit"
- Sentence case always
- Max 2-3 words preferred
- If text overflows, wrap — never truncate

---

#### Behavior

- Keyboard: Space or Enter triggers action
- Focus moves to opened target on activation
- Minimum tap target: 44x44dp

---

#### Accessibility

- Requires visible focus state
- Label must describe action (not "Click here")
- Loading state announced to screen readers

---

#### Common Mistakes

| Mistake | Why It's Wrong | Do This Instead |
|---------|----------------|-----------------|
| Multiple Primary buttons | Dilutes hierarchy | Use Standard for secondary actions |
| Disabled as default state | Frustrates users | Use validation feedback |
| Icon-only without label | Accessibility fail | Add aria-label or visible text |

---

#### When NOT to Use

- Navigation between pages → use Link
- Toggles or selections → use Chip or Toggle
- Destructive without confirmation → add confirmation modal first

---

#### Escalate If

- A new variant is needed
- Engineering requests a pattern not covered here

---

## Pattern Documentation Template

Use this for Patterns pages.

---

### [Pattern Name]

**Category:** Forms / Navigation / Feedback / Content
**Status:** Ready
**Last updated:** 2026-04-09

---

#### Problem

What user problem does this pattern solve? One sentence.

> Users abandon forms when they can't see progress or recover from errors.

---

#### Solution

How do we solve it? High-level approach.

> Validate inline, show errors in context, preserve user input on failure.

---

#### When to Use

- Multi-field forms
- Any input that can fail validation
- Flows where users might lose work

---

#### When NOT to Use

- Single-field inputs (search, quick add)
- Read-only data display

---

#### Anatomy

Describe the structure:

1. Form container
2. Field groups (labeled sections)
3. Inline validation messages
4. Submit area with primary CTA
5. Error summary (for screen readers)

---

#### Behavior

1. Validate on blur (not on type)
2. Show error inline below field
3. Scroll to first error on submit failure
4. Preserve all valid input on failure

---

#### Example

Link to Figma example or embed image.

---

#### Components Used

- Text Field
- Text Area
- Button
- Banner (for error summary)

---

## Foundation Pages

For Foundation, use simple nested pages (not a database). Each page covers:

### Colors

- Semantic color tokens (not raw hex)
- Usage rules (when to use `surface-primary` vs `surface-secondary`)
- Accessibility: contrast ratios
- Theme support (light/dark)

### Typography

- Type scale (sizes, line heights, weights)
- Semantic styles: `heading-1`, `body`, `caption`
- Usage rules per style
- Font stack

### Spacing

- Spacing scale (4, 8, 12, 16, 24, 32, 48...)
- Named tokens: `space-xs`, `space-sm`, `space-md`
- Rules: when to use which

### Grid & Layout

- Column grid (mobile, tablet, desktop)
- Margins and gutters
- Breakpoints
- Content max-width

### Motion

- Timing tokens: `duration-fast`, `duration-normal`
- Easing curves
- Entry/exit patterns
- Loading transitions

### Accessibility

- WCAG compliance level (AA minimum)
- Focus management rules
- Color contrast requirements
- Touch target minimums
- Screen reader patterns

---

## Migration Checklist

Use this to track your Confluence → Notion migration:

- [ ] Create Design System parent page
- [ ] Create Foundation nested pages
- [ ] Create Elements database with properties
- [ ] Create Components database with properties
- [ ] Create Patterns database with properties
- [ ] Create Templates database with properties
- [ ] Migrate Button (use as template validation)
- [ ] Migrate remaining high-priority Elements
- [ ] Migrate remaining Components
- [ ] Write Patterns documentation (new)
- [ ] Write Templates documentation (new)
- [ ] Update this repo's `design/_index.md` with Notion links
- [ ] Archive old Confluence spaces

---

## Claude Context Setup

Once Notion is populated, update `design/_index.md` in this repo:

```markdown
# MH Design System — Index

**Canonical docs:** https://notion.so/your-workspace/design-system
**Figma Master:** https://figma.com/file/xxx

## Quick Access

| Section | Notion | Figma |
|---------|--------|-------|
| Overview | [link] | — |
| Foundation | [link] | [link] |
| Elements | [link] | [link] |
| Components | [link] | [link] |
| Patterns | [link] | — |
| Templates | [link] | [link] |

## Escalation Rules

Always escalate to Davinder if:
- A component is needed that doesn't exist in this system
- A new color, type size, or spacing value is needed outside existing tokens
- A navigation structure change is proposed
- Engineering requests a pattern not documented

## Decision Log

| Date | Decision |
|------|----------|
| 2026-04-09 | Migrating from Confluence to Notion as canonical source |
| 2026-04-09 | Figma remains source of truth for visual; Notion for behavior/rules |
```

---

## Notion Tips

1. **Use synced blocks** for content that appears in multiple places (e.g., escalation rules)
2. **Add a "Status" filter view** so stakeholders see only "Ready" components
3. **Create a "Recently Updated" view** sorted by Last Updated date
4. **Use callouts** for "Do / Don't" guidance — visually distinct
5. **Embed Figma frames** directly in pages for visual context
