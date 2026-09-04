# Landing Page Patterns & Responsive Reflow — Reference

Patterns for designing home/landing pages and translating them across breakpoints. Use alongside `visual-design-experts.md` (hierarchy, grid) and `ux-laws-quick-reference.md` (Gestalt, scan order).

---

## Sourcing

**Primary source:** Nielsen Norman Group (nngroup.com) — eye-tracking research, scanning pattern studies, content prioritization, mobile UX. Citations are listed at the end of each section by author + title + approximate year so they can be verified directly on nngroup.com.

**Secondary sources cited inline:** Krug (*Don't Make Me Think*), Wroblewski (*Mobile First*), Apple HIG, Material Design.

**House synthesis:** clearly marked. These are useful conventions assembled for this team's work, not authoritative principles. Push back on them.

---

## Part 1: Home Page Anatomy

### Reading & scanning patterns

NN/g eye-tracking research has identified several distinct scanning patterns. The right one depends on the page type, not personal preference.

**F-pattern** — applies to text-dense pages (articles, search results, content-heavy listings). Eyes scan a top horizontal stripe, then a shorter second horizontal, then drift down the left edge. Word-by-word reading drops off sharply after the first few lines.
- *Implication:* Front-load the first 2–3 words of headings and paragraphs. Right-side content is heavily under-scanned.
- *Where it applies on a home page:* mostly within content-dense sections (FAQ, long copy blocks), not the page as a whole.

**Layer-cake pattern** — applies to pages with clear horizontal section breaks and strong headings (most modern home pages, including stacked landing pages). Users scan headings first, then dive into a section only if a heading earns it.
- *Implication:* Section headings carry more weight than section bodies. A weak heading kills the section regardless of what's below it.
- *Where it applies on a home page:* this is the dominant pattern for stacked landing pages.

**Spotted pattern** — applies when users scan for specific items (numbers, links, names, keywords). Eyes skip prose entirely and lock onto matching elements.
- *Implication:* If users come with a specific intent (a metric, a feature name, a CTA), make those targets visually distinct from the surrounding prose.

**Commitment pattern** — applies when users are highly motivated and read top-to-bottom (rare; usually only on high-stakes content like contracts or articles they came specifically to read).
- *Implication:* You usually can't assume this pattern. Design for layer-cake / spotted by default.

**Marking pattern** — applies when scrolling through a long page and visually anchoring to a known landmark (e.g. an image they remember). More relevant for return visits than first-time scanning.

**Z-pattern (note):** widely taught in design education but **not validated by NN/g eye-tracking research**. NN/g has explicitly called it more myth than evidence-based pattern. Use with skepticism — the layer-cake pattern is more reliably grounded for home pages.

> *Sources: Pernice, "F-Shaped Pattern of Reading on the Web: Misunderstood, But Still Relevant (Even on Mobile)" (NN/g, 2017); Pernice, "Text Scanning Patterns: Eyetracking Evidence" (NN/g); Nielsen, "How People Read Online: New and Old Findings" (NN/g, 2020).*

### Standard section types — *house synthesis*

A home page is assembled from a known vocabulary. NN/g doesn't prescribe a specific list, but these are the section types in common practice across modern home pages.

| Section | Job | Typical placement |
|---------|-----|-------------------|
| Nav / utility | Wayfinding, account access | Top, persistent or sticky |
| Hero | State the value prop, set primary CTA | First viewport |
| Social proof / trust | Reduce skepticism (logos, stats, certifications) | Right after hero, OR before final CTA |
| Value props / pillars | Expand on what the hero promises (3-up usually) | After hero, before deep features |
| Feature spotlight | Show a key feature in detail (image + text) | Mid-page, alternating left/right |
| Outcomes / proof | Specific results, case studies, metrics | After features, before CTA |
| Testimonials | Human voice trust signal | Often paired with outcomes |
| FAQ / objections | Lower the cost of saying yes | Near bottom |
| Final CTA | Last chance to convert | Bottom, before footer |
| Footer | Secondary nav, legal, contact | Bottom |

### Sequencing logic — *house synthesis*

Two reliable templates assembled from the section vocabulary above. **These names ("conversion-led", "portal-led") are house terms, not NN/g terms** — they're shorthand for two patterns we'll see in MHC work.

**Conversion-led** (most B2C/B2B SaaS marketing home pages):
1. Hero (promise + CTA)
2. Social proof (you're not alone)
3. Value props / pillars (what specifically you get)
4. Feature spotlights (proof the pillars are real)
5. Outcomes / testimonials (it works)
6. FAQ (objection handling)
7. Final CTA (close)

**Portal-led** (logged-in or low-acquisition pages — common for member portals like MHC):
1. Personalized greeting / status
2. Primary action (next best action for this user)
3. Active programs / journeys in progress
4. Discovery / what's available
5. Social or motivational layer
6. Resources / library
7. Footer

Decide which template you're in before sequencing — they have different jobs and different success metrics.

### The fold — what's actually true

NN/g's research has been clear and consistent for over a decade: **users do scroll**, but **the first viewport disproportionately determines whether they continue**. Average attention drops sharply below the fold (Nielsen has cited 80%+ of attention spent above the fold in eye-tracking studies, with the exact number varying by page type).

The fold question is therefore a **clarity question**, not a content-quantity question. Within the first viewport, users should be able to answer:
1. Where am I? (brand, product)
2. What is this for? (value prop)
3. What can I do here? (primary CTA)

If those answers aren't visible at a glance, the hero fails — regardless of how good the content below is. *(Krug calls this the "billboard test" in Don't Make Me Think — a sibling test from a different tradition.)*

Do not stuff the fold to "fit everything in." Use it to earn the next scroll.

> *Sources: Nielsen, "Scrolling and Attention" (NN/g, 2010, updated through 2018); Fessenden, "Scrolling and Attention" updates (NN/g); Pernice, "The Fold Manifesto" / fold-related research (NN/g).*

### Information scent

NN/g has heavily covered Pirolli & Card's **Information Foraging Theory**: users follow "scent" — cues in headings, links, and images — to predict whether the next click/scroll will pay off. Weak scent kills engagement even when the underlying content is strong.

Each section of a home page should make the *next* section discoverable and worth reaching. Section headings, microcopy, and visual breaks all carry scent.

Common scent failures:
- Section headings that describe the section internally ("Our Features") rather than the user value ("How members stay engaged")
- Identical visual treatment across sections, so users can't tell when one ends and the next begins
- Strong fold, then a long flat middle that loses momentum

> *Sources: Pirolli & Card, "Information Foraging Theory" (academic, 1999) — extensively translated into UX practice via NN/g; Nielsen, "Information Foraging: Why Google Makes People Leave Your Site Faster" (NN/g, 2003 with updates); multiple NN/g articles tagged "information scent".*

---

## Part 2: Responsive Reflow

NN/g has written on responsive design and mobile UX extensively, but most concrete reflow rules below are framework conventions and common practice rather than NN/g prescription. Marked accordingly.

### Mobile-first as a thinking tool

Mobile-first as a *concept* originates with Luke Wroblewski (*Mobile First*, A Book Apart, 2011). NN/g has reinforced the underlying argument: designing for the small breakpoint first forces content prioritization decisions that desktop-first design lets you avoid.

The forcing function:
- Identifies what's truly essential per section
- Resolves a single dominant scan direction (vertical)
- Forces hierarchy without horizontal escape valves

If a section can't justify itself on mobile, it probably can't justify itself on desktop either — it just hides better.

> *Sources: Wroblewski, *Mobile First* (A Book Apart, 2011); NN/g articles on mobile content prioritization (Budiu, Pernice, others).*

### Standard breakpoints — *framework conventions, not NN/g*

These are Tailwind / Bootstrap / framework conventions. NN/g doesn't prescribe specific pixel breakpoints — they recommend designing for the content, not the device.

| Range | Label | Typical use |
|-------|-------|-------------|
| 0–639px | Mobile | Single column, stacked, hamburger nav |
| 640–1023px | Tablet | 1–2 columns, may keep horizontal nav |
| 1024–1199px | Desktop | Full multi-column layout |
| 1200px+ | Wide / flex | Layout flexes out — sections breathe, content expands to fill the viewport (not a fixed max-width with growing whitespace) |

**House convention: 1200px is the flex-out threshold.** At this breakpoint and above, wireframes should show the layout *flexing* — section content expanding to fill the available width, not capped by a max-width container. This mirrors how the live site behaves on a real desktop browser.

For wireframes, the standard set of views is **mobile + desktop + wide-flex**. Tablet only if it does something genuinely different.

### Reflow rules per section type — *house synthesis*

These are common-practice defaults assembled from observed patterns across modern home pages, not NN/g prescription. Override when you have a reason.

**Nav**
- Desktop: horizontal links + utility actions on the right
- Mobile: logo left, hamburger right; primary CTA may persist outside the menu

**Hero**
- Desktop: side-by-side (text left ~50–60%, visual right ~40–50%) OR centered with visual below
- Mobile: stack — heading first, supporting text, CTA, then visual (or visual on top if it carries the value prop)
- Headline scales down but stays large relative to other text

**3-up value props / pillars**
- Desktop: 3 columns
- Tablet: 2 + 1 (or 3 if narrow cards work)
- Mobile: 1 column stack OR horizontal scroll (only if 4+ items and order doesn't matter much)

**Feature spotlight (image + text)**
- Desktop: alternating left/right (image-text, then text-image)
- Mobile: image always on top, text below (consistent rhythm beats alternating cleverness)

**Card grid (4–8 items)**
- Desktop: 4-up or 3-up grid
- Tablet: 2-up
- Mobile: 1-up stack OR 2-up if cards are compact

**Testimonials**
- Desktop: 3-up or carousel
- Mobile: 1-up carousel with dots-below — *see house carousel guidance: the failure mode is peek-cards + no JS toggle, not multiplicity*

**FAQ**
- Desktop: 2-column accordions or single column centered
- Mobile: single column, full-width accordions

**Footer**
- Desktop: 4–6 column link groups
- Mobile: stacked accordions OR collapsed groups

### What collapses, reorders, disappears — *house synthesis*

Three reflow operations, in order of preference. NN/g writes about content prioritization on mobile; this ordering is a house rule built on top of that idea.

1. **Collapse (preferred):** content stays, just stacks. 3-col → 1-col, side-by-side → stacked.
2. **Reorder:** mobile order differs from desktop order. Common case: visual-first hero on desktop becomes text-first on mobile so the value prop reads before the image scrolls in. Use sparingly; reorders break the "what you see is what you get" model and complicate engineering.
3. **Hide (last resort):** content disappears at small breakpoints. NN/g has written explicitly against this: hiding on mobile usually signals the content wasn't load-bearing on desktop either. If you hide it, ask whether it should exist at all.

> *Source for the "don't hide on mobile" position: Budiu, "Mobile UX: Study Guide" and related NN/g articles on mobile content parity.*

### Sticky and persistent elements

| Element | Desktop | Mobile |
|---------|---------|--------|
| Top nav | Sticky or static (your call) | Usually sticky; collapses on scroll-down, reappears on scroll-up |
| Primary CTA in hero | In-flow | In-flow + optional sticky bottom bar |
| Secondary nav (in-page anchors) | Often sticky sub-nav | Rarely useful; consider removing |
| Cookie / consent | Bottom bar | Bottom bar (full-width) |

NN/g has cautioned against over-sticky designs (multiple stacked sticky elements eating viewport on mobile). Default to one sticky element per breakpoint.

> *Source: Loranger, "Sticky Headers: 5 Ways to Make Them Better" (NN/g) and related articles.*

### Touch targets and density

- **Minimum tap target: 44×44pt (Apple HIG) / 48×48dp (Material Design)** — applies on mobile *and* hybrid touch laptops. NN/g's mobile guidelines align with these platform minimums.
- **Spacing between tappable elements:** 8px minimum, 12–16px preferred *(common practice; not a specific NN/g number)*.
- **Mobile density should be lower than desktop density** — fewer items per viewport, more breathing room per item. Don't shrink desktop to fit; rebuild for the breakpoint.

> *Sources: Apple Human Interface Guidelines (Layout); Material Design (Layout — Touch targets); NN/g mobile UX articles, Budiu and Pernice.*

---

## Part 3: Wireframe-Specific Guidance

This entire section is house synthesis. NN/g writes about wireframing in general terms but doesn't prescribe a fidelity ladder, weight-labeling convention, or rev cadence.

### Fidelity ladder — *house synthesis*

Match fidelity to the decision being made.

| Fidelity | What it shows | What it hides | Use when |
|----------|---------------|----------------|----------|
| Block / box | Section presence, order, relative size | Content, type, color | Deciding sequence + visual weight (your current rev) |
| Skeleton | Section + placeholder content blocks (heading bar, body lines, image rect) | Real content, real type | Refining proportion + density |
| Greybox | Real content, neutral palette | Color, brand, illustration | Validating copy + hierarchy |
| Hi-fi | Visual design applied | Nothing | Final review |

For 5–7 revs at the section-placement-and-weight stage, **block / box fidelity is correct**. Don't drift into skeleton or greybox until structure is locked.

### Visual weight in wireframes — *house synthesis*

At block fidelity, visual weight is conveyed by:
- **Section height** — taller stripes carry more weight
- **Fill density** — how filled vs. empty the section block is (use a percentage label or simple shading)
- **Position** — earlier in scroll = more weight by default
- **Internal complexity** — number of sub-blocks within the section

Label each section block with: **name, fill % (e.g. 60%), and primary intent (e.g. "convert", "explore", "trust")**.

### The squint test for wireframes

Blur the wireframe (literally squint or apply a Gaussian blur). You should still be able to identify:
- Which section dominates the fold
- Where the eye lands second, third
- Whether sections feel distinct or blur into a uniform stripe

If everything looks the same when squinted, the visual weight is flat — surface that in this phase, not later.

> *Source: Krug, *Don't Make Me Think* — squint test originates here, not NN/g.*

### Showing all three breakpoints per rev — *house synthesis*

For each iteration, present three views together. This forces responsive thinking from rev 1 instead of bolting it on later.

Recommended layout per rev:
- **Wide / flex view** — rendered at ~1440px wide, showing the layout flexed out (sections filling the viewport, no artificial max-width cap)
- **Desktop view** — rendered at ~1100px wide (within the 1024–1199px range), showing the standard desktop layout
- **Mobile view** — rendered at 375px wide
- Annotation gutter below or beside calling out reflow decisions (collapse, reorder, hide) and flex behavior at 1200px+

The wide-flex view is the one most often skipped in wireframes and most often discovered late in implementation. Including it from rev 1 forces decisions about: which sections expand vs. cap, how content density scales with width, and where horizontal whitespace lives when the viewport is wide.

---

## How to Use This Reference

### When sequencing sections:
1. Pick the template (conversion-led vs. portal-led)
2. Apply the standard section vocabulary
3. Check sequencing logic — does each section earn the next scroll?
4. Apply NN/g's information scent test at every section boundary

### When laying out the fold:
1. Run the 3-questions test (Where am I / What's this for / What can I do)
2. Optimize for layer-cake scanning (strong, value-led headings)
3. Don't stuff — earn the next scroll

### When reflowing to mobile:
1. Default to collapse, not reorder, not hide
2. Stack 3-up grids; use horizontal scroll only for 4+ items
3. Verify touch targets and density at the smaller breakpoint
4. If something disappears on mobile, ask whether it should exist at all (NN/g)

### When evaluating a wireframe rev:
1. Squint test — is hierarchy legible?
2. Section labels — does each one have a clear job?
3. Reflow annotations — is every collapse/reorder/hide deliberate?

---

## Key NN/g articles to bookmark

Search these on nngroup.com:

- Pernice — "F-Shaped Pattern of Reading on the Web: Misunderstood, But Still Relevant (Even on Mobile)"
- Pernice — "Layer-Cake Pattern of Scanning Content on the Web"
- Pernice — "Text Scanning Patterns: Eyetracking Evidence"
- Nielsen — "How People Read Online: New and Old Findings"
- Nielsen — "Scrolling and Attention"
- Fessenden — fold-related updates
- Nielsen — "Information Foraging: Why Google Makes People Leave Your Site Faster"
- Budiu — "Mobile UX Study Guide" / mobile content prioritization articles
- Loranger — "Sticky Headers: 5 Ways to Make Them Better"

> **Verification note:** these article titles are cited from training-data recall. Before relying on a specific quote or statistic, search the title on nngroup.com to verify wording, year, and current findings — NN/g periodically updates research as new studies come in.

---

## Revision Log

| Date | Change |
|------|--------|
| 2026-05-06 | Initial version — anatomy, reflow rules, wireframe fidelity guidance |
| 2026-05-06 | Revised to anchor citations to NN/g; marked house synthesis explicitly; added scanning patterns (layer-cake, spotted, commitment, marking) and downgraded Z-pattern per NN/g critique; added information scent and fold research from NN/g. |
| 2026-05-07 | Added 1200px flex-out threshold as house convention; expanded per-rev presentation from two views to three (wide-flex + desktop + mobile) to surface flex behavior from rev 1. |
