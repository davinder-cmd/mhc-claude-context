# Card Pattern Library — Batch 01

**Source:** Mobbin (web). 20 card variants, captured Aug 11.
**Scope:** medium cards — the ones that survive both a 3–4 up grid and a horizontal carousel. No heroes, no bare thumbnails.
**Lens:** internal layout and information hierarchy. Colour, radius, and shadow are noted only where they carry the hierarchy.

Screenshots in [img/](img/). Browse the sources: [gallery.html](gallery.html).

## Files

| File | What it is |
|------|-----------|
| `INDEX.md` | This doc — the written record of all 20 patterns |
| `gallery.html` | Contact sheet of the **source** screenshots, with anatomy notes |
| `card-kit-v1-neutral.html` | The 20 patterns **rebuilt as live components** — neutral skin, real MHC content, tokenised. This is the Figma handoff. |
| `img/` | 20 source screenshots (webp) |

### Version log

| Version | Date | What changed |
|---------|------|--------------|
| `card-kit-v1-neutral.html` | Aug 11 | First build. All 20 layouts as live markup on one token set. Neutral skin so layout is the only variable. Verified at 1440 / 1100 / 1024 / 768 / 375 — no horizontal overflow, equal-height behaviour confirmed in 09, 14, 15, 19. Known gaps: no empty/loading/locked states, no hover/focus, #17 needs a fixed-height head slot, #11 needs a stacked variant under ~480px. |

---

## The set at a glance

| # | Source | Archetype | Media | The one thing it does |
|---|--------|-----------|-------|----------------------|
| 01 | Telescope | Image-first, caption outside | Photo | Overlay attribution chip; caption sits below the image, not on it |
| 02 | Etsy | Dense metadata stack | Photo | Six data points under one image without a divider |
| 03 | Skillshare | Three-zone with divided footer | Photo | Avatar breaks the image edge; counts live in a ruled footer |
| 04 | ClassDojo | Full-bleed colour field | Illustration | No image container — colour is the card; art bleeds off-edge |
| 05 | Mistral AI | Icon in a media slot | Icon | Glyph on a tinted panel occupying the top half; reads as an image card |
| 06 | Perplexity | Icon + icon-pair meta row | Icon | Metadata as icon/label pairs on one line |
| 07 | Employment Hero | Centred single label | Line icon | One icon, one line, huge breathing room |
| 08 | Remote | Row card, meta right | Icon | Icon left / body centre / date right on one baseline |
| 09 | Whop | Progress in card | Brand fill | Status badge overlay + progress bar with trailing % |
| 10 | Optimal Workshop | Corner-ribbon state | Pattern | Diagonal ribbon carries state without stealing title space |
| 11 | Unity | Media-left + author footer | Photo | 16:9 left, stacked right, ruled attribution footer |
| 12 | Uxcel (exercise) | Eyebrow-led | Screenshot | ALL-CAPS type label above the title; bookmark overlay |
| 13 | Uxcel (syllabus) | Row + right-side badge | Icon | Selected state = accent border; badge pinned right |
| 14 | SuperHi (course) | Tag-chip footer | Illustration | Taxonomy pushed to the bottom as chips, not into the title |
| 15 | SuperHi (resource) | Colour-coded, text-only | None | Solid fill + one chip; carries a carousel with zero imagery |
| 16 | Zillow | Centred CTA card | Illustration | Illustration on transparent ground, outlined button |
| 17 | Julienne | Title above image | Photo | Inverted order — read the title first, then see the object |
| 18 | Going | Chip → headline → meta | Optional | Same grid runs with and without images |
| 19 | Midday | Dual-action footer | Logo | Two equal-weight buttons; state via badge |
| 20 | Ferndesk | Stat card | Icon | Icon, big number, label, description — in that order |

---

## 01 — Telescope · image-first, caption outside

[Screenshot](img/01-telescope.webp) · [Mobbin](https://mobbin.com/screens/80432a1a-0202-420c-83df-17958c2375d0)

**Anatomy:** photo (variable aspect, masonry) → attribution chip overlaid top-left (avatar + name on a translucent scrim) → title below the image → subtitle/location in a lighter weight.

**Hierarchy:** the image is the whole first read. Text is deliberately small and outside the frame, so the grid scans as a wall of imagery with labels rather than a wall of cards. No border, no shadow — the photo edge is the card edge.

**Where it fits:** content browse where imagery is the differentiator. Fails the moment your photography is inconsistent, which is why it's a stress test more than a default.

---

## 02 — Etsy · dense metadata stack

[Screenshot](img/02-etsy.webp) · [Mobbin](https://mobbin.com/screens/02a6bf94-69ec-4eb6-a792-98744f221e28)

**Anatomy:** square photo (with a play affordance where video exists) → title clamped to one line → shop name + rating + review count on one line → price, strikethrough original, discount % → badge line ("FREE shipping", "Digital Download").

**Hierarchy:** six data points, no dividers, four type sizes. Price wins because it's the only bold dark value in the stack. It works only because every card carries the identical slot order — the eye learns the pattern once and then reads down a column.

**Where it fits:** the density ceiling. Useful as the counter-example when someone argues a rewards or benefits card needs "just one more line."

---

## 03 — Skillshare (class projects) · three-zone with divided footer

[Screenshot](img/03-skillshare.webp) · [Mobbin](https://mobbin.com/screens/e2f905ee-660b-4f72-a6b3-01e9674ca57b)

**Anatomy:** 16:9 image with a heart action overlaid top-right → avatar overlapping the bottom edge of the image → author name → title (bold) → hairline rule → footer with like count, comment count, and relative date.

**Hierarchy:** three zones separated by two different devices — the image edge, and a rule. The overlapping avatar stitches zone 1 to zone 2 so the card doesn't read as two stacked blocks. Author appears *above* the title, which subordinates the content to the person.

**Where it fits:** the cleanest reference in this set for a card that has to carry both content and social proof. The ruled footer is the reusable idea.

---

## 04 — ClassDojo (resources) · full-bleed colour field

[Screenshot](img/04-classdojo.webp) · [Mobbin](https://mobbin.com/screens/ddc80bd2-c4db-4ccf-93cf-c818d37468cc)

**Anatomy:** solid pastel fill, one per card → illustration bleeding off the right and top edges → title bottom-left → subtitle under it in the same colour at lower opacity.

**Hierarchy:** colour does the categorisation work that a tag row would otherwise do. Text is anchored bottom-left with generous space above it, so the illustration reads as background and the label reads as foreground despite sharing the plane.

**Where it fits:** a set of 3–5 sibling entry points. The bleed is what stops it feeling like a coloured rectangle with text on it — worth stealing. Note the accessibility cost: dark text on mid-saturation pastels is where this pattern usually fails contrast.

---

## 05 — Mistral AI · icon in a media slot

[Screenshot](img/05-mistral.webp) · [Mobbin](https://mobbin.com/screens/91a956f3-2594-47fe-af83-5b4d4238dec1)

**Anatomy:** top ~45% is a saturated fill panel with a single centred pixel-art glyph → title (bold) → description clamped to 2–3 lines → generous gap → attribution ("By Mistral") in small grey.

**Hierarchy:** the icon occupies an image slot rather than sitting inline with the title. That single decision lets an icon card sit in the same grid as an image card without looking like a different component. The gap before the attribution line does the work a divider would.

**Where it fits:** the answer to "we don't have photography for this." Strongest pattern in the set for icon-led content that must live next to image-led content.

---

## 06 — Perplexity (spaces) · icon + icon-pair meta row

[Screenshot](img/06-perplexity.webp) · [Mobbin](https://mobbin.com/screens/2a633253-700f-454d-a6fc-fa511e5fe747)

**Anatomy:** rounded-square icon tile top-left (emoji or glyph on a light tint) → generous vertical gap → title clamped to one line → meta row of two icon+label pairs (clock + "Dec 11, 2025", lock + "Private").

**Hierarchy:** almost no visual weight anywhere. The title is the only dark element; everything else is grey. The meta row uses icons as delimiters instead of middots, which reads faster at small sizes and survives translation.

**Where it fits:** quiet utility cards — saved items, collections, programs the member already owns. Deliberately un-promotional.

---

## 07 — Employment Hero (templates) · centred single label

[Screenshot](img/07-employment-hero.webp) · [Mobbin](https://mobbin.com/screens/349ad239-c248-4f68-8950-2c210e792c52)

**Anatomy:** thin-stroke line icon, centred, upper third → large empty middle → single centred label, one or two lines, in the brand accent.

**Hierarchy:** there is only one thing to read. The emptiness is the hierarchy — it signals "this is a choice, not content."

**Where it fits:** pick-one moments. Also the reference for a paired "Add new" affordance card, which this screen shows sitting in the same grid.

---

## 08 — Remote (things to do) · row card, meta right

[Screenshot](img/08-remote.webp) · [Mobbin](https://mobbin.com/screens/eba81069-677a-49c5-8270-9de96a73ed8a)

**Anatomy:** rounded icon tile left (48px, tinted fill) → title (bold, one line) + description (grey, one line) centre, left-aligned → date right-aligned, vertically centred with the title baseline.

**Hierarchy:** three columns on one row. The right-aligned date creates a scannable second column down the stack, so the list reads as a table without being one. Cards are separated by whitespace and a hairline border, not shadow.

**Where it fits:** to-do / next-action stacks. Directly relevant to any "what should I do next" surface — the right column is where a status or due date goes.

---

## 09 — Whop (courses) · progress in card

[Screenshot](img/09-whop.webp) · [Mobbin](https://mobbin.com/screens/aa901aec-5afb-437d-9d82-377a72748b8c)

**Anatomy:** brand-fill thumbnail with the product name set in it (no photo) → state badge overlaid top-left ("New lesson") → title below → progress bar with the percentage as a trailing label on the same line → meta line ("1 chapter · 1 lesson").

**Hierarchy:** the progress bar sits *above* the meta line, which puts state ahead of structure. Putting the % inline at the end of the track rather than above it saves a full line of height — that's the detail worth copying.

**Where it fits:** the closest reference in this set to a DCP / learning-path card. Note the two cards differ only by badge + fill state, which is how a single component should flex.

---

## 10 — Optimal Workshop · corner-ribbon state

[Screenshot](img/10-optimal-workshop.webp) · [Mobbin](https://mobbin.com/screens/7cb41553-8cd7-4d89-a3cd-a3d743d9b2a3)

**Anatomy:** dark patterned thumbnail with a centred logo + word mark → diagonal ribbon in the top-right corner reading "Complete" → title in accent colour → description at 3–4 lines.

**Hierarchy:** state is pushed into the corner, so it costs zero vertical space and never competes with the title. The description is unusually long for a card this size and gets away with it because there is no metadata competing below it.

**Where it fits:** completion state across a set of equal-weight modules. The ribbon is a cheaper alternative to a badge that has to be laid out.

---

## 11 — Unity · media-left + author footer

[Screenshot](img/11-unity.webp) · [Mobbin](https://mobbin.com/screens/5857e5eb-0b02-4b21-9c7c-008a5e88f936)

**Anatomy:** 16:9 image occupying the left ~45%, with a small sequence badge overlaid → right side: title (bold, up to 2 lines) → meta dot-row ("Tutorial · Beginner · 5 Mins") → hairline rule → author row with small avatar + name.

**Hierarchy:** title dominates because it's the largest type on the card by a wide margin. The dot-row compresses three attributes into one line. The rule before the author row separates content from provenance.

**Where it fits:** a carousel or vertical stack where titles are long. Horizontal cards buy you two lines of title without the card getting taller.

---

## 12 — Uxcel (exercises) · eyebrow-led

[Screenshot](img/12-uxcel-exercise.webp) · [Mobbin](https://mobbin.com/screens/de1ddcb2-c483-49d4-a118-d2d636ceab04)

**Anatomy:** screenshot floated on a light tinted field (inset, not full-bleed) → bookmark icon overlaid top-right → ALL-CAPS type label ("EXERCISE") in small grey → title (bold) → footer line with a small glyph + source name.

**Hierarchy:** the eyebrow tells you *what kind of thing* this is before you read *which* thing it is. That order is right when a grid mixes content types. Insetting the screenshot rather than bleeding it keeps UI-screenshot imagery from looking broken at small sizes.

**Where it fits:** mixed-type browse grids. The inset-on-tint treatment is the answer for any imagery that isn't photography.

---

## 13 — Uxcel (syllabus) · row + right-side badge

[Screenshot](img/13-uxcel-syllabus.webp) · [Mobbin](https://mobbin.com/screens/302c50f7-0ac2-4d8d-b435-e5bc9f4a855d)

**Anatomy:** rounded icon tile left → title (bold) → meta line ("Course · 6h · Beginner") → pill badge pinned right ("Popular"). Selected state: 2px accent border + accent-tinted icon.

**Hierarchy:** near-flat by design — this is a queue, and every row is meant to look equally available. The accent border on one row is the only strong signal, and it's carrying "you are here."

**Where it fits:** long ordered lists where one item is the current step. Cheaper and calmer than giving the active item a different layout.

---

## 14 — SuperHi (most popular) · tag-chip footer

[Screenshot](img/14-superhi-course.webp) · [Mobbin](https://mobbin.com/screens/6b7b46e8-2e03-4cca-a6c0-c8d358b16708)

**Anatomy:** full-bleed graphic image top → title (large, 2 lines) → description (3–4 lines) → flexible gap → row of outlined chips ("FREE", "BEGINNER", "COURSE").

**Hierarchy:** title is genuinely large — close to a page heading — which makes this card work in a carousel where only three are visible. Taxonomy is pushed to the bottom as chips, keeping the title free of qualifiers. Cards are equal height with the chip row bottom-aligned, so the chips form a rail across the carousel.

**Where it fits:** the reference for chips-as-footer. Bottom-aligning the chip row across cards is what makes an unequal-copy-length set look ordered.

---

## 15 — SuperHi (news + resources) · colour-coded, text-only

[Screenshot](img/15-superhi-resource.webp) · [Mobbin](https://mobbin.com/screens/aa4e077d-528a-4f32-aeb7-15c060bf9d8b)

**Anatomy:** solid colour fill, one per card → title (bold, 2 lines) → description (3–4 lines) → single outlined chip bottom-left ("RESOURCES", "EVENTS").

**Hierarchy:** no imagery at all, and it still reads as a designed card because the fill colour is doing categorisation and the chip confirms it. Text colour stays near-black on every fill rather than inverting, which keeps the set coherent.

**Where it fits:** the honest answer for content with no art budget. Pair with #14 on the same page and you get a two-tier system — image cards for featured, colour cards for the long tail.

---

## 16 — Zillow · centred CTA card

[Screenshot](img/16-zillow.webp) · [Mobbin](https://mobbin.com/screens/5786d9ec-2668-40a8-aed9-fde51ab6325d)

**Anatomy:** illustration on the card's own white ground (no image container, no tint) → centred title (bold) → centred body, 3 lines → outlined button, centred.

**Hierarchy:** symmetrical and slow. Centring makes it read as an offer rather than as content, and the outlined (not filled) button keeps three side-by-side cards from fighting each other.

**Where it fits:** three-up "choose your path" rows. The restraint on the button is the lesson — three filled buttons in a row is three primary actions, which is none.

---

## 17 — Julienne (cookbooks) · title above image

[Screenshot](img/17-julienne.webp) · [Mobbin](https://mobbin.com/screens/c5c37f34-b6fc-47dd-82ea-e58223bcd341)

**Anatomy:** title (2 lines) → author, both *above* → product image centred on a warm tinted field with room around it → footer: sale price, strikethrough original, rating + review count → filled Buy button bottom-right.

**Hierarchy:** inverted. You read the name, then look at the object — the opposite of every other card here. It works because the products are books, where the title *is* the identity, and it makes the images look like a considered still-life row rather than a product grid.

**Where it fits:** rare, but the right call when the name carries more meaning than the picture. Worth keeping as an argument that image-on-top isn't a law.

---

## 18 — Going (blog) · chip → headline → meta

[Screenshot](img/18-going.webp) · [Mobbin](https://mobbin.com/screens/e06cbaf5-8427-4a20-bb9c-982be8a34898)

**Anatomy:** filled dark chip ("Airlines") → headline (bold, 2 lines) → meta line (date · read time · arrow glyph). Image, when present, sits *above* the chip; the same grid runs image and no-image cards side by side.

**Hierarchy:** identical text hierarchy whether or not there's an image, so the grid stays even. The trailing arrow does the affordance work without a button.

**Where it fits:** editorial/article surfaces where art coverage is partial. This is the pattern that makes a half-illustrated content set look intentional instead of incomplete.

---

## 19 — Midday (integrations) · dual-action footer

[Screenshot](img/19-midday.webp) · [Mobbin](https://mobbin.com/screens/03313f42-04ef-4481-80db-96429e4a63c7)

**Anatomy:** logo top-left → state badge top-right ("Installed", "Beta") → title → description, 3 lines → two equal-width outlined buttons side by side ("Details" / "Install"), footer-aligned.

**Hierarchy:** the card carries two actions of equal weight without either becoming primary — both outlined, both half-width. State lives in the badge, so the buttons only have to change label ("Install" → "Disconnect").

**Where it fits:** any card where "learn more" and "do it" both need to be present. The equal-weight treatment is what keeps a grid of these from looking like a wall of CTAs.

---

## 20 — Ferndesk · stat card

[Screenshot](img/20-ferndesk.webp) · [Mobbin](https://mobbin.com/screens/a41b87bc-6104-4cc3-8cb6-cfd4620701b1)

**Anatomy:** small accent-coloured icon → large numeral → label (bold, small) → description, 2 lines grey. Three cards share one container, separated by hairline dividers rather than being individually bordered, with a coloured top rule per card.

**Hierarchy:** number first by size, label second by weight, description third by colour — three different devices, one for each level. The shared container with dividers is the detail: it reads as one panel of related metrics rather than three competing cards.

**Where it fits:** any metric row. The description line is what most stat cards omit and then need a tooltip for.

---

## Runners-up (captured, not written up)

| Source | Why it's here | Link |
|--------|--------------|------|
| Fabric | Chevron set *inside* the title line as the affordance — no separate arrow | [Mobbin](https://mobbin.com/screens/46ce7cf7-8553-41cf-b695-99c7f089098d) |
| Givingli | Pure image tile, aspect-locked, single overlay badge, zero text | [Mobbin](https://mobbin.com/screens/7109a2f4-4000-48e7-99a8-95f004ae2864) |
| Hotjar | Footer swaps an availability line for a full-width Connect button on hover | [Mobbin](https://mobbin.com/screens/da542ad5-960c-4289-8d46-d73f10824061) |
| Supabase | Dark row-card grid — logo, title, description, far-right chevron | [Mobbin](https://mobbin.com/screens/4680bf9b-b126-4254-a48a-cb8c821398e8) |
| Portrait | Heterogeneous masonry — pure-image and card-in-card in one grid | [Mobbin](https://mobbin.com/screens/63d395a6-162e-437f-bf4f-4dafb77d026b) |

---

## What the set says

Six devices are doing nearly all the hierarchy work across these 20 cards, and they're worth naming as a vocabulary:

1. **An image slot that isn't always an image** (#05, #04, #15) — the top block can be a photo, a tinted icon panel, or a colour fill, and the card stays the same component.
2. **The eyebrow** (#12, #18) — type label above the title, for grids that mix content types.
3. **The ruled footer** (#03, #11, #20) — a hairline that separates content from provenance or metrics.
4. **Bottom-aligned chips** (#14, #15) — taxonomy as a rail across a carousel, keeping qualifiers out of titles.
5. **The overlay, not the row** (#09, #10, #12) — state and actions placed on the media so they cost no vertical space.
6. **The right column** (#08, #13) — right-aligning one attribute turns a card stack into a scannable table.

**Next batch, if useful:** empty/loading/locked states of these same archetypes, and the mobile (375px) behaviour of #11, #14, and #19 — the three that have the most to lose when a horizontal layout has to stack.
