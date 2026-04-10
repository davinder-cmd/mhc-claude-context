# Design System Principles

Use these to validate decisions. If a choice violates a principle, you need a strong reason — and that reason should be documented.

These principles are extracted from Material Design (Google), Carbon (IBM), Polaris (Shopify), Lightning (Salesforce), and Atlassian Design System.

---

## 1. Fewer Options, Clearer Defaults

**The principle:** Every variant, size, or option you add is cognitive load for engineers and designers. Constraint enables speed.

**From Carbon:** 4 button types (Primary, Secondary, Tertiary, Danger). Not 8.

**From Material:** "Filled buttons have the most visual impact. Use them for important, final actions." — They tell you what to reach for first.

**How to apply:**
- Before adding a variant, ask: "Can an existing variant cover this use case?"
- Before adding a size, ask: "Is this solving a real problem or anticipating one?"
- Every component should have ONE obvious default

**Violates this principle:**
- 8 button variants "because we might need them"
- 4 sizes when 90% of usage is Medium
- Offering options without recommending one

---

## 2. Name Things Like the Industry Does

**The principle:** Engineers Google problems. If you invent terminology, they can't find answers. Use the same names Material, Carbon, and iOS Human Interface Guidelines use.

**How to apply:**

| Don't Say | Say | Why |
|-----------|-----|-----|
| Stroked | Outlined | Industry standard (Material, Carbon) |
| Tinted | Tonal / Soft | Material 3 terminology |
| Standard | Secondary | Clearer hierarchy relationship |
| Reverse Contrast | Inverse | Standard term |

**Violates this principle:**
- Naming a component something clever that only your team uses
- Using internal jargon in public-facing docs
- Abbreviations that require explanation

---

## 3. Behavior Over Appearance

**The principle:** Document what happens, not what it looks like. Appearance is in Figma — engineers can inspect it. Behavior isn't visible.

**From Polaris:** Their button docs explain what happens on keyboard interaction, not what the padding is.

**How to apply:**
- Write: "Focus moves to modal when opened, returns to trigger on close"
- Don't write: "Padding: 16dp on all sides" (that's in Figma)
- Write: "Disabled state prevents all interaction; does not trigger on tap"
- Don't write: "Disabled uses 40% opacity" (that's in Figma)

**Violates this principle:**
- Documenting spacing, colors, radii in words when Figma shows them
- Anatomy sections that just label parts without explaining behavior
- Any spec that duplicates what Dev Mode shows

---

## 4. One Default, Clear Exceptions

**The principle:** Every decision point should have an obvious "reach for this first." Exceptions exist but require justification.

**From Carbon:** "Use Primary buttons for the principal call to action on a page. There should only be one Primary button on a page at a time."

**How to apply:**
- Start every component doc with "Default Choice" section
- Frame variants as "use X *unless* [specific condition]"
- If two options are equally valid, you haven't thought hard enough

**Violates this principle:**
- Listing 4 variants without saying which is default
- "Choose based on your needs" (unhelpful)
- Equal visual weight to all options in docs

---

## 5. Accessibility Is Structure, Not Afterthought

**The principle:** Accessibility requirements shape component design — they're not a checklist at the end.

**From Atlassian:** Focus states, keyboard interaction, and screen reader behavior are in the main behavior section, not a separate "Accessibility" tab.

**How to apply:**
- Touch targets: 44x44dp minimum (baked into size specs)
- Focus states: Required and visible (part of state definitions)
- Color contrast: 4.5:1 minimum (baked into token definitions)
- Screen reader: Labels required (part of content rules)

**Violates this principle:**
- "Accessibility" as a separate optional section
- Focus states that can be suppressed
- Color as the only differentiator between states
- Icon-only buttons without aria-labels

---

## 6. If Engineers Ask Twice, Fix the Doc

**The principle:** The goal is zero questions during implementation. If the same question comes up twice, the documentation failed — not the engineer.

**From Polaris:** They track common questions and update docs proactively.

**How to apply:**
- Keep a "questions log" — every implementation question gets logged
- If a question repeats, add it to the doc immediately
- "Common Mistakes" section prevents repeat errors
- "When NOT to Use" prevents wrong component choices

**Violates this principle:**
- Blaming engineers for not reading the docs
- Assuming questions mean someone didn't look hard enough
- Documentation that requires a meeting to explain

---

## 7. Tokens Are the API

**The principle:** Design tokens are the contract between design and engineering. Never hardcode values. Everything references a token.

**From Material:** All colors, typography, spacing, elevation defined as tokens. Components reference tokens, not raw values.

**How to apply:**
- Colors: `$text-primary`, never `#333333`
- Spacing: `$space-md`, never `16px`
- Typography: `$body-large`, never `font-size: 16px`
- If a value doesn't have a token, create one or don't use it

**Violates this principle:**
- Hex codes in component specs
- "Use 16dp padding" instead of "Use $space-md"
- One-off values that exist outside the token system
- Engineering creating their own variables

---

## 8. Composition Over Configuration

**The principle:** Build complex things by combining simple things, not by adding configuration flags to simple things.

**From Atomic Design:** Atoms combine into Molecules, Molecules into Organisms. You don't add flags to Atoms to make them do Molecule jobs.

**How to apply:**
- Button stays simple; Button Group handles layout
- Chip stays simple; Chip Group handles selection logic
- Card stays simple; Feature Card composes Card + Badge + Button
- Don't add "showIcon", "showBadge", "layoutMode" props to everything

**Violates this principle:**
- A Button component with 15 boolean props
- A Card that can be configured into 12 different layouts
- "God components" that try to do everything

---

## 9. Document Decisions, Not Just Outcomes

**The principle:** Future you (and your team) needs to know *why* something is the way it is, not just what it is.

**From Carbon:** Their changelog explains reasoning, not just "updated Button."

**How to apply:**
- Keep a decision log: "Reduced button variants from 8 to 4 because [reason]"
- Document rejected alternatives: "Considered X, rejected because Y"
- Explain constraints: "Partner requirements limit us to X"

**Violates this principle:**
- Changelogs that just say "Updated component"
- No record of why a variant exists
- Revisiting the same decision because no one remembers the outcome

---

## 10. Solve the Problem You Have

**The principle:** Don't design for hypothetical future requirements. Build for today's real problems.

**From Polaris:** They explicitly say "We don't add components until we need them in at least 3 places."

**How to apply:**
- Don't add a variant "in case someone needs it"
- Don't create tokens for colors you aren't using
- Don't build patterns for flows that don't exist yet
- If you need it later, add it later

**Violates this principle:**
- "We might need a 5th button size someday"
- Creating 20 spacing tokens when you use 8
- Building a component for a feature that's not on the roadmap

---

## How to Use This Document

### When Adding a Component

1. Does it solve a real, current problem? (Principle 10)
2. Can existing components compose to solve this? (Principle 8)
3. What's the default usage? (Principle 4)
4. Are accessibility requirements baked in? (Principle 5)

### When Adding a Variant

1. Can an existing variant cover this? (Principle 1)
2. What's the industry name for this? (Principle 2)
3. Document the decision and reasoning (Principle 9)

### When Writing Documentation

1. Am I documenting behavior or appearance? (Principle 3)
2. Is there a clear default? (Principle 4)
3. Would an engineer need to ask a question? (Principle 6)
4. Am I using tokens, not values? (Principle 7)

### When Reviewing a Decision

Ask: "Which principle does this align with? Which does it violate?"

If it violates a principle, document why the exception is justified.

---

## Sources

| System | Best For Learning |
|--------|-------------------|
| **Material Design 3** | Token architecture, "when to use" guidance |
| **Carbon (IBM)** | Documentation structure, accessibility integration |
| **Polaris (Shopify)** | Content guidelines, practical governance |
| **Lightning (Salesforce)** | Enterprise-scale component inventory |
| **Atlassian** | Cross-platform consistency, accessibility |

---

## Revision Log

| Date | Change |
|------|--------|
| 2026-04-09 | Initial version — 10 principles extracted from Material, Carbon, Polaris, Atlassian |
