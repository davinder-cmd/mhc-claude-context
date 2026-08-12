# Imagery library — review & groupings

*July 27, 2026 · Davinder*
*Reviewed all 276 files in `projects/imagery`. Loaded: `design/foundation/image-sizing.md`, `design/IA/content-surfaces-ia.md`, `reference/ux-laws-quick-reference.md` (Gestalt similarity, Von Restorff).*

**Deliverables:** [imagery-groupings-v1.html](imagery-groupings-v1.html) (browsable, three groupings, tabbed) · [imagery-index.csv](imagery-index.csv) (every file tagged) · [build.py](build.py) (re-runnable when files are added)

---

## Headline

The library is **large, consistent, and lopsided in exactly the places our product needs it most.**

| What we have | What the product asks for |
|---|---|
| 62% of files are generic "happy maintenance" lifestyle | Cards that say *start*, *keep going*, *you did it* |
| 12 files show tracking / progress | Progress is the **Goal + In-progress** classes — most of For You › Today |
| 5 files show struggle or symptom | Conditions and DCP entry points are built on "why you'd start" |
| 3 strength, 7 clinical, 0 biometrics/screening | DTx / Digital Care Paths is the strategic priority |
| 41 of 276 survive the hero letterbox | Every page we design opens with a hero |

Nothing here is bad stock. The gap is that the library was assembled **by subject** ("we need a runner, we need a family") and our product places images **by moment and by container**. Three groupings below; the third is the one that changes what gets used.

---

## Grouping 1 — Subject (the library's natural shape)

14 clusters. Counts are files.

| Cluster | n | Contains | Health |
|---|---|---|---|
| **Family & life stage** | 39 | Parents + kids, multi-gen, maternity, newborn | Over-supplied |
| **Movement & cardio** | 38 | Run, walk, hike-as-exercise, cycle, stretch, class | Strong |
| **App & device in use** | 35 | Phone / tablet in hand — the product moment | Over-supplied, repetitive |
| **Mind & recovery** | 31 | Meditation, breath, rest, sleep, reading | Strong, but 5 near-identical "meditate at a vista" |
| **Friends & community** | 27 | Peer groups, couples, shared celebration, support | Strong |
| **Work & workplace** | 25 | Desk, office, collaboration, work stress, service | Mostly unusable for member-facing surfaces |
| **Food & nutrition** | 20 | Meals, produce, hydration, cooking | Adequate; skews styled flat-lay |
| **Outdoors & place** | 14 | Landscape-led; people as scale | Small but the most valuable set |
| **Portrait & symbol** | 14 | Clean-bg smiles, heart-hands ×4, confetti | Filler; 4 heart-hands is 3 too many |
| **Pets & companionship** | 10 | Dogs as motivation, comfort, routine | Underused asset |
| **Wearables & health data** | 7 | Watch glance, tracking, dashboards | **Thin** |
| **Clinical & care** | 7 | Care team, telehealth, symptoms, prevention | **Thin** |
| **Play & recreation** | 6 | Skate, tennis, ball | Thin |
| **Strength** | 3 | Weights, resistance | **Critical gap** |

Subject is the right **browse** spine — it's how you search when you know what you want. It is the wrong **selection** spine, because "a runner" doesn't tell you whether the runner belongs on a rewards card or a DCP enrollment screen.

---

## Grouping 2 — Surface fit (what our containers can do with the file)

Per `image-sizing.md`: hero is 3:2 capped at 360dp, which at 1280–1440 renders **~3.6:1 to 4:1**. Tiles are 16:9 at 240–400dp wide. Thumbnails are 4:3 / 1:1 at 80–160dp. 204 of 276 files are natively 3:2, so the file ratio is fine — **composition** is the constraint.

| Class | n | Definition | Rule |
|---|---|---|---|
| **H — Hero-capable** | 41 | Wide scene, off-centre subject, negative sky or ground | The only set that survives the 4:1 crop *and* holds overlay text |
| **T — Tile / card** | 203 | Centre-weighted single subject, reads at 240–400dp | Default. Fine at 16:9; do not letterbox |
| **N — Thumbnail only** | 28 | Tight close-up (hands, faces, detail) or portrait file | Dies in a hero; excels at 1:1 / 4:3 |
| **X — Retire** | 4 | Off-brand or dated | #81 dog-in-goggles, #114 house key, #136 tomatoes-on-eyes, #270 suit meditating on office chair |

**The bottleneck:** 41 hero-capable files across a product with a hero on every page and 8+ features. That set is where new buying should start, not "more lifestyle."

**Contrast liability:** 36% of the library is high-key backlit and 22% is strongly golden-cast. Consequences: (a) in a card grid they read as one texture — Gestalt similarity flattens the hierarchy we're building with type and spacing; (b) white overlay text fails on high-key images without a scrim, so any full-bleed hero using them needs a treatment layer, not just a photo.

---

## Grouping 3 — Journey stage (recommended)

Same 276 files, tagged by **where the member is** rather than what's in frame. This is the axis that lets a card's photo agree with its copy.

| Stage | n | Reads as | Surfaces it serves |
|---|---|---|---|
| **1 · Struggle** | 5 | Symptom, stress, pre-decision | Conditions entry, DCP intro, HRA follow-up |
| **2 · First step** | 16 | Shoes on, enrolling, opening the app | Journeys, Recommended tab, program detail |
| **3 · Effort** | 41 | Mid-activity, working, concentrating | In-progress cards, Keep going, topic pages |
| **4 · Progress** | 12 | Checking, logging, comparing, streak-aware | Goals, Health Data, Challenges standings |
| **5 · Milestone** | 30 | Summit, high-five, confetti, arms up | Rewards earned, completion screens, Events |
| **6 · Maintenance** | 172 | Unlabored everyday life | Broadcast, seasonal, general lifestyle |

**Why this is the one to adopt:** the IA framework already treats media as *an attribute of the content item, defined once and inherited by every channel* — so the tag has to describe the item's job, not its scenery. Stage maps directly onto the lifecycle already in the IA (`suggested → accepted → in progress → done`). A Suggestion pulls stage 2, an In-progress card pulls stage 3–4, a reward Event pulls stage 5. Picking a photo stops being taste.

It also exposes the real inventory problem in one line: **62% maintenance, 4% progress, 2% struggle.** We are photo-rich for the part of the funnel we don't design for and photo-poor for the parts we do.

---

## How to actually use these together

One image, three tags — `subject · stage · crop`. Not competing taxonomies; one selection rule:

```
Which container?      → crop class    (H / T / N)     hard filter
What's the message?   → journey stage (1–6)           hard filter
What's it about?      → subject                       pick within the survivors
```

Example: DCP topic-page hero for anxiety → `crop:H` + `stage:2` + `subject:mind` → a handful of candidates, all of which will survive the crop and won't contradict the copy.

Then add one thing the IA doc explicitly asks for — **category fallback sets**. "Items lacking an image get a fallback (generated tile, category color, default photo)." Nominate 3 files per content category as its default set so a photo list never breaks rhythm:

| Category | Default set (idx) |
|---|---|
| Activity / steps | 216, 235, 141 |
| Mindfulness | 116, 260, 90 |
| Nutrition | 122, 147, 243 |
| Strength | 169, 239, 176 |
| Sleep / recovery | 84, 182, 228 |
| Conditions / care | 164, 201, 203 |
| Rewards earned | 166, 161, 128 |
| Challenges | 36, 154, 97 |

---

## Fix list

**Retire (4):** 81, 114, 136, 270.

**Flag, use only with a reason:**
- **110** — in-app heart-rate screen. Real UI in a photo dates the moment the UI ships.
- **146** — floating security-shield graphic. Privacy/consent copy only.
- **148, 152** — call-centre headsets. Service/brand imagery, never a member surface.
- **261, 140, 136, 253, 258** — studio backdrops (pink, teal) that aren't in our palette. Fine for marketing, off-system in-product.

**Consolidate near-duplicates — keep one, archive the rest:**
`12/13` · `50/51` · `112/113` · `148/152` · `157/158` · `178/179` · `249/250` · heart-hands `101/143/161/274` · meditate-at-a-vista `45/116/180/209/269` · hike-with-phone `92/135/276` · walk-city-with-phone `21/190/236` · couple-selfie `41/89/100/105/123/174/244`.
That's roughly 25 files of redundancy — about 9% of the library doing no additional work.

**Buy against these gaps, in priority order:**

1. **Progress & tracking** (have 12) — logging a habit, a streak, a weekly summary, two people comparing. Serves the Goal + In-progress classes, i.e. most of Today.
2. **Struggle & onset** (have 5) — the honest, non-clinical version: stiffness getting out of a chair, fatigue at 3pm, quiet low mood. Every Conditions and DCP entry point needs these, and stock's default is either melodrama or nothing.
3. **Clinical & DCP** (have 7) — telehealth on a phone, care-team message, a coach check-in, blood-pressure cuff, glucose meter, screening event. **Zero biometrics imagery** today against DTx being the stated strategic priority.
4. **Strength** (have 3) — bands, bodyweight, kettlebell, home and gym, non-athlete bodies.
5. **Hero-capable wide scenes** (have 41) — buy for the 4:1 crop specifically: horizon-led, subject at one-third, clean negative space on the text side, mid-key not blown out.
6. **Representation** — 55+ is thin (~6 files), plus-size appears twice (141, 160), visible disability is absent, and men are underrepresented in mind/nutrition. Employer populations don't look like this library.
7. **Real food, real kitchens** — nutrition is mostly overhead styled bowls. Cooking with family, groceries, a packed lunch.

---

## Quality gates for anything added next

1. Does it survive a 4:1 centre crop with the subject still legible? → hero-eligible.
2. Is there a clean, mid-key area for overlay text? → hero-with-text eligible.
3. Can you name the journey stage in one word? If not, it's maintenance filler — we have 172.
4. Is the device on screen ambiguous enough to still be true in two years? No visible UI.
5. Mid-key, not blown out. We are already 36% high-key.
6. If it's the fifth of its kind, it displaces one — the library grows by substitution, not accumulation.
