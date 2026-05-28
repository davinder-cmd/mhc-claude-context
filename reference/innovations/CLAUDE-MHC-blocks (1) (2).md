# MHC HTML blocks — authoring guide for Claude Code

Use this whenever you are writing, editing, or splitting an HTML **block** that will be rendered on the MHC home page (or any MHC surface that uses the same block/action-button system).

These rules are not stylistic preferences — they are constraints imposed by:

1. The **block + action-button** runtime (each block can have an action button configured separately by the platform; the button is **not** authored inside the block HTML).
2. The **User Input block + MHC action** mechanism — the *only* supported way to capture user input or trigger a mutation. MHC blocks **must not** contain `<form>`, `<input>`, or `<button type="submit">`. Any time user input is required, it is expressed by authoring a separate **User Input block** with an **MHC action** configured on it.
3. **No JavaScript.** The MHC platform does not execute JavaScript authored in a block. No `<script>` tags, no inline event handlers (`onclick`, `onchange`, `onload`, etc.), no `javascript:` URLs, no `data-*` attributes intended as JS hooks. Every interaction is either a plain navigation `<a href>` or an MHC action attached by the host. If a design needs client-side behaviour, it cannot ship as an MHC block — redesign it around server-driven state + MHC actions.
4. **CKEditor**, which is the authoring surface ops/content teams use to edit these blocks. CKEditor will silently mutate markup that violates HTML content models (especially `<a>` nesting), so blocks must be written in a CKEditor-safe shape.
5. The **Mustache-style** token/conditional syntax the platform uses for substitution.

If you are uncertain whether a change is safe, default to the most conservative pattern documented here.

---

## 1. File and scope conventions

- One block per file. Filenames: `block-<order>[<letter>]-<slug>.html` (e.g. `block-1-greeting-hero.html`, `block-2b-progress.html`, `block-2c-habits.html`).
- Every block's top-level wrapper is `<div class="mhc-home"> … </div>`. Do **not** use `<html>`, `<head>`, `<body>`, `<style>`, or `<script>` inside a block. Styles live in shared CSS (`mhc-home.css`, `mhc-shared.css`); the block only emits semantic markup. **No JavaScript of any kind** — see §8.
- A block may emit **multiple** sibling `<div class="mhc-home">…</div>` wrappers when it owns more than one independent surface (see `block-1b-invites.html`, which contains both the pending-invites list and the challenge banner — each wrapped separately and each gated by its own conditional).
- Every block must start with a header comment that documents:
  - What the block renders.
  - All conditionals it uses (`{{#…}}` / `{{^…}}`), with one-line meanings.
  - All tokens (`{{formula.*}}`, `{{user.*}}`) with example values.
  - Any state machine the block participates in (e.g. Insights has four mutually-exclusive states).

Keep this comment authoritative. If you change tokens or conditionals, update the comment in the same edit.

---

## 2. Templating syntax

The runtime is Mustache-flavoured. Only these constructs are supported inside a block:

| Form | Meaning |
|---|---|
| `{{token.path}}` | Interpolate a string. HTML-escape happens at render time. |
| `{{#formula.flag}}…{{/formula.flag}}` | Render the inner section if `flag` is truthy. |
| `{{^formula.flag}}…{{/formula.flag}}` | Render the inner section if `flag` is falsy (inverse). |

There are **no** loops, no partials, no helpers, no expressions, no `else` clauses. To express "if A else B", emit a `{{#A}}…{{/A}}` block immediately followed by a `{{^A}}…{{/A}}` block — see the hero variants in `block-1-greeting-hero.html`.

### Token naming

- `{{user.<field>}}` — raw user data the platform exposes directly (`user.firstName`).
- `{{formula.<name>}}` — anything computed/derived by the platform's formula layer. This includes:
  - **Data values** (`formula.tracker_steps_value`)
  - **Boolean flags** for conditionals (`formula.hasFocus`, `formula.hasLinkedTracker_steps`, `formula.insightsState_refreshable`)
  - **Hrefs** (`formula.heroCta_href`) — every link target is a formula token, never hard-coded.
  - **Copy strings** (`formula.copy_section_today`, `formula.copy_link_seeAll`) — all user-visible text that may need localisation or A/B copy is a `copy_*` token, not a literal.
  - **Asset URLs** (`formula.icon_steps_url`, `formula.heroImage`).

Rules when adding new tokens:

1. Prefer extending the `formula.*` namespace. Do not introduce a new top-level namespace without coordinating with the platform team.
2. Use **snake_case** within a token name, not kebab-case.
3. Repeat-indexed items use a `cardN_`, `inviteN_`, `habitN_`, `foryou_itemN_` prefix with a numeric suffix (1-based). Do **not** generate these with a loop — emit each index explicitly and gate index ≥2 with `{{#formula.hasCardN}}…{{/formula.hasCardN}}` (or equivalent). The platform binds tokens by exact name; no iteration is available at the template layer.
4. All link targets end in `_href`. All boolean conditionals start with `has`, `is`, or a `state_` suffix. All copy strings start with `copy_`.
5. Never inline a literal user-facing string. If a label is missing a token, add one (e.g. `formula.copy_loggedToday`) and document it in the header comment.

---

## 3. Actions and user input: what belongs in a block vs. what does not

MHC has **two** mechanisms for anything the user can act on. **Neither is rendered as HTML inside the block.** Both are configured on the block by the platform.

### 3.1 The two mechanisms

1. **Action button on a content block.** A block (e.g. Insights) can have a single primary action button configured by the platform per-block instance. The block exposes state flags; the host decides which button to render and where.
2. **User Input block + MHC action.** Anywhere user input or a mutation is required (submit a value, accept/decline, log a habit, dismiss, post a form-style answer), the surface is authored as a separate **User Input block** with an **MHC action** attached. The User Input block is the unit that owns the input affordance and its target.

### 3.2 Hard rules

- **No `<form>` in any MHC block.** The MHC template language does not support it.
- **No `<input>`, `<select>`, `<textarea>`, or `<button type="submit">`** anywhere in block HTML.
- **No `<button>` for a mutating/destructive action.** If clicking it would change state on the server, it cannot be an inline element — it must be expressed as an MHC action on a User Input block (or as the host-rendered action button on the parent content block).
- The only `<button>` elements that may appear in a block are purely presentational (e.g. a non-interactive visual element that is being phased out — prefer not to introduce new ones). When in doubt, do not author a `<button>`.
- `<a href="…">` is fine for **navigation** (drill-down to another page, "See all" links, deep links into a picker). It is **not** acceptable for any action that mutates state — those are MHC actions.

### 3.3 Action button blocks (e.g. Insights)

The block renders the *content card only*; the host attaches the action button below/around it.

`block-3-insights.html` is the canonical example. It renders only the bordered card with eyebrow, headline, body, and meta. The Get insight / Refresh / View buttons live on the action-button slot the host injects — the template never emits a `<button>` for them. The block's job is to expose the **state** so the host knows which action to render:

```mustache
{{#formula.insightsState_ready}}        … action btn becomes "Get insight"
{{#formula.insightsState_refreshable}}  … action btn becomes "Refresh"
{{#formula.insightsState_readOnly}}     … action btn hidden or disabled (cooldown)
{{#formula.insightsState_hidden}}       … entire block is suppressed
```

These states must be **mutually exclusive** and **exhaustive**, and the whole block should be wrapped in `{{^formula.<state>_hidden}}…{{/…}}` so the suppress case yields zero markup.

### 3.4 User Input blocks (anything else that requires input or mutation)

Where a previous design might have used an inline form (accept/decline, +log, dismiss, submit a value), MHC expresses it as a **User Input block** with an **MHC action** configured. The block HTML you author may include:

- The **labels, prompts, and visuals** that surround the input (headings, copy, icons, status text) — all tokenised.
- **State flags** the host needs to decide which action variant to attach (e.g. `isTeam` vs. peer, `isAutoTracked`, `done`).
- **Copy tokens** for every label the action can display (`copy_invite_accept_team`, `copy_invite_decline_team`, `copy_invite_accept_peer`, `copy_invite_decline_peer`, `copy_loggedToday`, `copy_hide`, etc.).

You do **not** author the button, form, or input element itself. The MHC action attached to the User Input block renders that affordance.

Implications for block design:

- **Per-row actions become per-row User Input blocks.** A list of N invites with Accept/Decline is N User Input blocks (one per invite), not one block with N forms. The block file you write should be authored as a *single-row template* that the platform repeats — or split into separate block files per row context — never with `<form>` markup duplicated inside.
- **Dismiss `×` is an MHC action**, not a `<form>` with an `×` button. Author the row content; let the dismiss action attach via the host.
- **"+ Log" on a habit** is an MHC action on the habit's User Input block. Author the habit display (name, target, dot strip, streak label, subline); expose `habitN_done` and `habitN_autoTracked` so the host knows whether to attach the action.
- **Reference files in this repo (`block-1b-invites.html`, `block-2b-progress.html`, `block-2c-habits.html`) currently show `<form method="post">` markup** for accept/decline, dismiss, and +log. **That markup is illustrative of intent only and is not valid MHC.** When porting these to production MHC blocks, strip the `<form>` and `<button>` elements and re-express each as a User Input block with an MHC action — keep the surrounding row markup, copy tokens, and state flags intact.

### 3.5 Block separation when an action button or User Input action is in play

Because the host injects action UI **between** blocks, you must:

- Keep the **action-bearing block** (e.g. Insights) in its own file. Do not merge it with the block above or below it. The platform splices the button after this block's markup; if you bundle two blocks into one file you will lose the splice point.
- Keep the **content that would otherwise sit visually adjacent** in a separate block file (e.g. the For-you grid is `block-4-foryou.html`, rendered *after* the Insights action button). The visual stack is: `block-3-insights` → host-rendered action button → `block-4-foryou`.
- **Every User Input block is its own block file.** If a surface needs N inputs (e.g. accept/decline per invite, +log per habit), that is N User Input blocks — not one block with N inline actions. The block file you write models *one* User Input row; the platform composes the list.
- When in doubt: if a chunk of content can ever be paired with an action button or an MHC action (now or later), it is its own block.

---

## 4. CKEditor compatibility

CKEditor will reflow markup that violates the HTML content model. The two patterns below exist specifically to keep blocks editable without surprises.

### 4.1 Stretched link, not wrapping anchor

CKEditor (and the HTML5 content model) does not tolerate block-level elements nested inside an `<a>` cleanly. **Do not wrap a card in `<a>`.** Instead, write the card as a `<div>` and place a single absolutely-positioned anchor as the **last child** that covers the whole card. The CSS is already defined in `mhc-home.css` / `mhc-shared.css`:

```css
.today-card { position: relative; }                 /* and equivalents on every card class */
.today-card-link {
  position: absolute; inset: 0;
  border-radius: inherit;
  z-index: 1;
  text-decoration: none;
}
```

Template shape:

```html
<div class="today-card">
  <div class="today-card-icon">…</div>
  <div class="today-card-value">{{formula.tracker_steps_value}}</div>
  <div class="today-card-label">{{formula.copy_label_steps}}</div>
  <a class="today-card-link" href="{{formula.tracker_steps_href}}">
    <span class="mhc-visually-hidden">{{formula.copy_label_steps}}</span>
  </a>
</div>
```

Rules:

- The stretched anchor is **always the last child** of its card container.
- The anchor contains only a `<span class="mhc-visually-hidden">` with an accessible label — never block content.
- Every card class that gets a stretched link must be `position: relative` in CSS. If you introduce a new card class, add the relative positioning at the same time.
- This pattern applies to: `today-card`, `foryou-card`, `secondary-card`, `progress-row`, `habit`, and any new card-shaped clickable surface. Use the same `<card>-link` naming.

### 4.2 No block elements inside `<a>`, `<button>`, or `<p>`

- Inside `<a>`: only inline content (`<span>`, `<svg>`, `<img>`, text). Never `<div>`, `<h*>`, `<p>`, `<ul>`, etc.
- Inside `<button>`: same — inline only. If you need a richer button visual, use stacked spans, not divs.
- `<p>` may contain only phrasing content. Wrap multi-line copy with multiple `<p>` siblings, not one `<p>` with `<div>` inside.

### 4.3 Keep markup direct-editable

- Use **canonical HTML**: close every non-void element explicitly, double-quote every attribute, never self-close non-void elements (`<div></div>`, not `<div/>`).
- Do not introduce inline `style="…"` for layout. The only inline styles permitted in blocks are `background-image: url('{{formula.*_img}}')` on `*-img` / `hero-photo` shells (because the URL is dynamic). Everything else goes in CSS.
- Do not insert author-time comments inside repeated row markup that you expect editors to duplicate — CKEditor will preserve them but they become noise. Keep documentation in the file-header comment block.
- Use real heading levels (`h1` for the greeting, `h2` for section titles, `h3` for card titles). Editors rely on the outline.

### 4.4 Icons

- Inline SVGs (decorative): `<svg … aria-hidden="true">` with no `<title>`. Use `currentColor` for strokes so the icon picks up text colour.
- Bitmap-ish icons (tracker tiles, etc.): `<img src="{{formula.icon_*_url}}" alt="" />` with `alt=""` because the label is always rendered next to it.
- For the focus-chip dots in `block-1-greeting-hero.html`, the established convention is Iconify lucide URLs with the focus-area colour passed in the query string. Match that convention; do not invent a new icon source per block.

---

## 5. Visibility and empty states

- Every block must self-suppress when it has nothing to show. Wrap the entire `<div class="mhc-home">…</div>` in a top-level conditional (`{{#formula.hasInProgressPrograms}}…{{/…}}`, `{{#formula.hasHabits}}…{{/…}}`, `{{^formula.insightsState_hidden}}…{{/…}}`). Never rely on CSS to hide an empty block.
- Per-tile zero states (e.g. "+ Link steps") use a parallel `{{#hasLinkedTracker_x}} … {{/}} {{^hasLinkedTracker_x}} … {{/}}` pair. The zero-state card uses the same card class plus a `--zero` modifier, so layout stays consistent.
- Overflow links (`See all (N)`) are gated by a separate `…Overflow` flag; do not infer overflow from a count token inside the template.

---

## 6. Accessibility

- Every section root carries `aria-labelledby="<unique-id>"` pointing at the section heading; the heading carries the matching `id`. IDs are prefixed `mhc-` (`mhc-today-title`, `mhc-thisweek-title`, `mhc-progress-title`, `mhc-habits-title`, `mhc-foryou-title`, `mhc-secondary-title`, `mhc-insights-title`, `mhc-hero-title`). When you author a new section, mint a new `mhc-*` id; do not reuse.
- Stretched anchors must include a visually-hidden span with the accessible label, because the anchor's visible content is empty.
- Decorative SVGs use `aria-hidden="true"`. Status dots (e.g. unread notifications) get a visually-hidden text equivalent.
- Action button glyphs (`×`, `+`) get `aria-label` via a `copy_*` token (`copy_hide`, etc.).

---

## 7. When in doubt — checklist before committing a block

- [ ] File starts with a header comment listing every conditional and token.
- [ ] All copy is tokenised (`copy_*`), no literal user-visible strings.
- [ ] Top-level wrapper is `<div class="mhc-home">…</div>`, wrapped in a suppress conditional when applicable.
- [ ] Section has a heading + `aria-labelledby` with a unique `mhc-*` id.
- [ ] Every card is `<div>` + last-child stretched `<a class="<card>-link">`. No `<a>` wrapping block content.
- [ ] **No `<form>`, `<input>`, `<select>`, `<textarea>`, or `<button type="submit">` anywhere in the block.** Any user input or mutation is a User Input block with an MHC action — authored as a separate block, not inline.
- [ ] `<a href="…">` is used only for navigation, never for a mutating action.
- [ ] No primary action button is inlined — that slot belongs to the host, driven by state flags the block exposes.
- [ ] Per-row interactive affordances (accept/decline, +log, dismiss) are expressed as state + copy tokens for the host's MHC action to consume, not as inline buttons.
- [ ] Repeated rows are unrolled (cardN / inviteN / habitN), not looped.
- [ ] Indexed extras (`hasCard2`, `hasInvite2`, `hasHabit2`, `hasBanner3`) are gated explicitly.
- [ ] No inline styles other than dynamic `background-image: url(…)`.
- [ ] No `<style>` or `<script>` inside the block.
- [ ] No JavaScript anywhere: no `on*="…"` event-handler attributes, no `javascript:` URLs, no inline `<script>` (including `type="application/json"`), no `data-*` JS hooks, no `<meta http-equiv="refresh">`.
- [ ] Canonical HTML (closed tags, quoted attrs).
- [ ] Header comment updated to reflect every new or renamed token / conditional.

Following this list keeps blocks rendering correctly in production, editable in CKEditor without rewrite surprises, and compatible with the host's action-button injection.

---

## 8. No JavaScript — ever

The MHC platform does not execute JavaScript authored inside a block. This is a hard platform constraint, not a style guide.

What this means in practice:

- **No `<script>` tags** of any kind — inline, external `src`, `type="module"`, or `type="application/json"`. The platform strips or rejects them.
- **No inline event handler attributes.** That includes `onclick`, `onchange`, `onsubmit`, `onload`, `onerror`, `onmouseover`, `onfocus`, `onblur`, `oninput`, and every other `on*` attribute.
- **No `javascript:` URLs** in `href`, `src`, `action`, or anywhere else. `href="javascript:void(0)"` is forbidden — if a link has no target, it is not a link, it is an MHC action.
- **No CSS expressions, no `<meta http-equiv="refresh">`, no `<iframe>`** for behavioural purposes.
- **No `data-*` attributes intended as JS hooks.** `data-*` is fine for static metadata the platform reads at render time, but never as a handle for client-side scripts.
- **No SVG `<script>`** inside inline SVGs. Decorative SVG only.
- **No reliance on `:target`, `:checked`, or other CSS-only "interactivity tricks"** to fake JS behaviour. The runtime may or may not preserve fragment navigation, and these patterns confuse CKEditor and assistive tech. If you need interaction, use an MHC action.

Design consequences — read this before you sketch anything new:

- **No client-side toggles, accordions, tabs, carousels, modals, or tooltips.** If the design calls for one, redesign the surface as either (a) always-visible content, (b) navigation to a separate page, or (c) a host-rendered affordance attached as an MHC action.
- **No client-side validation, masking, or live previews.** Validation happens server-side after a User Input block's MHC action submits.
- **No animations beyond CSS transitions/keyframes.** Pure-CSS hover and focus states are fine. Anything that requires timing logic, scroll listeners, intersection observers, or DOM mutation is not available.
- **No analytics, A/B test, or instrumentation scripts in the block.** Instrumentation is configured at the platform layer; the block must not call out to it.
- **No third-party embeds** (YouTube iframes, social embeds, chat widgets, etc.) that depend on their own scripts to render.
- **State is always server-rendered.** If a value can change in response to a user action, the change comes back through the platform on the next render — not via DOM manipulation. Design the block so that every visible state is reachable purely by varying `formula.*` tokens.

If you find yourself reaching for JavaScript to satisfy a design, stop and restate the interaction in terms of: (1) what `formula.*` flags would distinguish the two states, (2) which MHC action would transition between them, and (3) whether the surface should be split into separate blocks so the host can attach that action at the right seam.
