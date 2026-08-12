# LifeForce — what's the actual product vs. D'Arcy's translation

A refresher for talking to stakeholders. Grounded in three sources:
- **Live product** — the current *LifeForce Dashboard* (`Current_Dashboard_Sreenshots.zip`, enrolled + unenrolled). This is what exists today.
- **Benefits site** — `benefits.truist.com/.../lifeforce-participation` = the authoritative *program mechanics* (what the program requires), separate from the app UI.
- **D'Arcy's V3** — a re-conceptualization shown to McGriff (`LifeForce V3.dc.html` + exports). A **redesign proposal, not yet built.**

## The one-line frame
The **product today** is a plain, text-heavy dashboard with **two tabs: Enrollment · My Progress/Goals**. **D'Arcy's V3** keeps the same underlying data and flow but re-skins and re-structures it (renamed tabs, card UI, focal hierarchy, curated content). Most "requirements" questions come down to: *is this thing in the live product, in the benefits-site rules, or is it D'Arcy's design choice?*

## Why D'Arcy's V3 diverges so much (provenance) — IMPORTANT
There is **no client/product requirements doc** (still pending). What D'Arcy is working off is **her own design prompt** — `LifeForce enrollment flow/uploads/design-prompt-flowB-enrolled.md` — a brief she wrote to generate the concept in Claude Design. That prompt makes the divergence deliberate and explains it:
- It **explicitly treats the current dashboard as "content source only, not the visual model — the legacy dashboard I'm replacing."** So she is *intentionally* not reskinning the live product.
- Her actual visual model is an **earlier redesign iteration, "V2"** (`Updated_LifeforceUX_V2/`). The lineage is **current production → V2 → V3**, so V3 is two redesigns removed from what's live.
- Her sources of truth, per the prompt: (1) the **MHC brand token bundle** `colors_and_type.css`, (2) the **V2 screenshots** for layout, (3) the shared icon set, (4) the current dashboard for **content only**.
- The **`$X of $Y earned` reward card is specified in her prompt** ("Reward info uses the **V2 card style** … '$X of $Y earned' / 'You earned $X'"). So it originates from her **V2 lineage, not the live product** — which is exactly why you don't see it on the current dashboard.
- Other deliberate choices from the prompt: SF Pro system font (not Raleway, "match the V2 render"), the Status/My Progress toggle, phase as a 5-stage indicator, the credit-calculator link, the B0–B6 screen set, and **phone 252-237-5090** (her placeholder; the live product uses **1-888-385-4583**). She also flagged **phase-advancement mechanism as undocumented** and `$[amount]`/Phase as placeholders.

**Bottom line:** V3's differences aren't backed by a requirements doc — they're D'Arcy's design decisions, carried from her own V2 concept, with the live dashboard used only for content. That's the thing to validate against real requirements before treating any of it as "the spec."

---

## Provenance ledger — element by element
Tags: **[PRODUCT]** = exists today · **[RESTYLE]** = same thing, new look (the actual reskin) · **[RESTRUCTURE]** = D'Arcy changed the structure/IA/naming · **[NET-NEW]** = D'Arcy added something not in the product · **[OMITTED]** = in product, D'Arcy dropped it. Rationale is from her prompt where stated.

| Element | Current product | D'Arcy's V3 | Tag | Her rationale |
|---|---|---|---|---|
| Visual system (type, color, cards, pills) | Plain text + boxes, Raleway-era | SF Pro, flat navy, card UI | **RESTYLE** | Match the MHC brand tokens + her "V2" render |
| App chrome / bottom nav | Not shown (dashboard page only) | LifeForce as a "Special Program in Digital Care," full app shell + 5-tab bottom nav | **RESTRUCTURE** | Prompt: "rebuilt natively inside MHC's Health Programs experience" |
| Tab names | **Enrollment · My Progress/Goals** | Status · My Progress | **RESTRUCTURE** | Not stated (she just named the toggle "Status/My Progress") |
| 4 enrollment steps (Step 1 pre-done) | Yes, as chip row + small text box | Full card rows **+ detail pages** | **PRODUCT** content, **RESTRUCTURE** presentation | Prompt allows chevrons on rows that "open a detail page" |
| "Enroll & Earn 200 Points" | Yes (unenrolled) | Kept | **PRODUCT / RESTYLE** | — |
| Dedicated "Points" / Rewards page | Yes (separate page) | Referenced via Rewards | **PRODUCT** | — |
| Lead copy, "20 business days," "earn up to $ annually" | Yes | Kept | **PRODUCT** | — |
| "LifeForce Enrollment Guide" button | Yes (unenrolled) | Dropped | **OMITTED** | — |
| Phase display | Plain "LifeForce Phase: 5" box | 5-stage dot/segment indicator + phase nudge copy | **RESTRUCTURE** + **NET-NEW** (nudge) | Prompt B2: "5-stage indicator"; but **"phase mechanism undocumented — don't assert how you advance"** |
| **`$X of $Y earned` credit banner** | **No** (credit shown via Calculate link only) | Prominent inline banner | **NET-NEW** (from her V2) | Prompt: "Reward uses the **V2 card style** '$X of $Y earned'" |
| "Calculate premiums & credit" link | Yes | Kept | **PRODUCT** | — |
| Credit = "estimate of semi-monthly medical credit" | Yes (text) | Kept, de-emphasized | **PRODUCT** | — |
| Lab-results status + 12-row biometrics | Yes (table) | Kept, styled as data rows | **PRODUCT / RESTYLE** | Prompt B3b: "clean data rows, not a raw table" |
| "From your nurse" persistent section (populated/empty) | Intro mentions nurse recs; no distinct section seen | Dedicated persistent section, both states | **RESTRUCTURE / NET-NEW** | Prompt B3a; "plain text passed to us" |
| Recommended Programs | **One long bulleted list (~11)** | Curated to **4 cards** | **RESTRUCTURE** (curation) | Prompt B5: "For-You rail of program cards" |
| **Recommended Educational Handouts** (separate section) | **No** (product has one program list) | Separate section | **NET-NEW** | Prompt B5: "two independent lists" |
| Appointment states (requested/scheduled/visit-done) | **Not in provided screenshots** (shots are a Phase-5 user) | Full appointment cards | **NET-NEW / unverified** | From her lifecycle flow map |
| "Maximize your credit" / dependent invite + remind | Not in provided screenshots | 3 variants | **NET-NEW UI** for a real program rule | Prompt B4; benefits site: spouse/DP must do HA for full credit |
| "Next steps / Completed steps" sections | Steps shown as chips | Grouped lists | **RESTRUCTURE** | — |
| Peak Health support card | Yes (phone 1-888-385-4583) | Kept (placeholder phone 252-237-5090) | **PRODUCT / RESTYLE** | — |

*Confidence note: the 12 current-product screenshots are one **Phase-5 enrolled** user + one **unenrolled** user. States like appointment-scheduling and dependent-invite wouldn't appear in a Phase-5 view, so "not in provided screenshots" ≠ "not in the product." Confirm against a live account before calling those NET-NEW for certain.*

## Should you adopt ALL of her recommendations? — the scope call
**This is genuinely unresolved, and it's not yours to guess — it's a scope reconciliation.** Two things point in opposite directions:
- **The DEM-35 ticket says "reskin"** (and an explicit non-goal: no total overhaul).
- **But D'Arcy already showed McGriff the V3 re-conceptualization (Jul 17)** — so the client may now *expect* the redesign, not a reskin.

So the safe way to think about the deliverable is **three layers**, not one:
1. **Ship (in scope under any reading):** `[PRODUCT]` content + `[RESTYLE]` visual system = a faithful reskin. No requirement risk, no new config for Ren.
2. **Confirm before building (`[RESTRUCTURE]`):** tab rename, embed-in-app + bottom nav, step detail pages, list→cards, phase indicator, Next/Completed grouping. These change IA/behavior — fine *if* the ask is "adopt V3," but they need D'Arcy + Ren sign-off and may add config.
3. **Validate as requirements (`[NET-NEW]`):** the `$X/$Y earned` banner, the handouts section, dependent-maximize UI, the nurse-note section, appointment states. Several need a **data source / config that may not exist yet** (Ren), and some (the earnings banner) aren't backed by any requirement.

**Recommendation:** don't silently fold all of V3 into the "reskin." Ship layer 1, and hand layers 2–3 back as an explicit **recommendations set** (which is what you instincted earlier). Before committing, get **one question answered:** *"Is DEM-35 scoped as a visual reskin/parity, or as adopting D'Arcy's V3 redesign?"* — and specifically, **what did McGriff sign up for when D'Arcy showed them V3 on Jul 17?** That answer decides how much of layers 2–3 is in.

## Your two questions

### 1) Rewards / earnings — where's the requirement?
**Two separate rewards, both real in the product. Only D'Arcy's inline running-total is invented.**

The product has **two distinct rewards**, and it's important not to conflate them:

**(a) 200 points for enrolling — a first-class product feature.** Confirmed on THREE surfaces:
- Unenrolled dashboard: **"Enroll & Earn 200 Points"** button + headline "Enroll today, earn up to [$amount] annually."
- A **dedicated "Points" page** (the Rewards surface): star-in-hand hero, "200 Points," *"Enroll in LifeForce and earn 200 points… you will also earn 200 points for completing all registration steps. Once all 4 enrollment steps are completed, you will earn 200 points!"* + a "LifeForce Dashboard" button.
- So the points reward is **not** D'Arcy's invention — it's in the live product prominently.

**(b) Medical credit — shown as an estimate + a calculator, never an inline running total.**
- Enrolled dashboard: *"…an estimate of your **semi-monthly medical credit**…"* + link **"Calculate your plan's medical premiums and semi-monthly credit amounts."** Phase-5 message: *"…earning your medical credit."*
- Benefits site: credit is **per pay period (semi-monthly)**, begins the month after the first appointment; a **LifeForce calculator** shows the amount. → matches the live "Calculate…" link.
- *(Copy inconsistency in the product itself: the Points page says "monthly medical credits"; the dashboard says "semi-monthly." Benefits site = semi-monthly/per-pay-period.)*

**What's actually D'Arcy's translation (NOT in the product):** the inline **`$[X] of $[Y] earned` credit banner / earning strip** on the enrolled screen — a running-total progress device. The live product shows credit via the **calculator link**, not a running number. His sync note ("don't surface amounts in-app; points per nurse visit") also **contradicts the live product** (which shows 200 pts for *enrollment* and a credit *estimate*) and his own prototype. So the only thing to reconsider removing is **the `$X of $Y` earning strip**, not "the points."

### 2) Progress tab — one list or three sections?
**You're right: the live product is ONE long list.**
- **Live "My Progress/Goals" tab:** intro → **"My lab results and goals"** (the 12-row biometric table; "CPMH has not received your lab results records") → **"My Recommended Programs"** = a *single bordered box with a ~11-item bulleted list* (Aetna Behavioral Health, Premise Counseling, Virta Diabetes, Virta Weight Loss, Premise Weight Loss, Guidance Resources, Aetna Nutritional, Premise Nutritional, Premise Health Center, Truist Virtual Fitness, Lyra). Each = link + one-line description. There is **no separate "educational handouts" section.**
- **D'Arcy's translation:** split that one list into a curated **"Recommended programs"** (4 featured *cards* — Virta, Premise, Truist Virtual Fitness, Lyra) **+ a new "Recommended educational handouts"** section (3 items). He trimmed ~11 → 4 and invented the handouts split. (His "empty sections vanish" rule only exists *because* he split them.)

---

## Other things D'Arcy changed (worth knowing before you talk)
| Element | Live product | D'Arcy's V3 |
|---|---|---|
| **Tab names** | **Enrollment · My Progress/Goals** | Status · My Progress |
| **Peak Health phone** | **1-888-385-4583** | 252-237-5090 *(placeholder / wrong — flag)* |
| **Enrollment steps** | Chip row (Step 1–4) + small "Step X: … Completed." text box | Full card rows **+ full step-detail pages** |
| **Phase display** | Plain "LifeForce Phase: 5" box | Dots/segments, de-emphasized progression |
| **Enrollment Guide** | "LifeForce Enrollment Guide" button (unenrolled) | Dropped |
| **Program list** | One ~11-item bulleted list | Curated to 4 cards + handouts section |
| **Overall UI** | Plain text, boxes | Cards, focal hierarchy, SF Pro type system |

**Faithful (D'Arcy kept these correctly):** the lead copy ("Truist's premier well-being program… reward you for… a healthy lifestyle"), **"20 business days"** to first appointment, the **12-row biometric table**, the **4 enrollment steps**, the **medical-credit / phase** model, Peak Health email.

---

## Open requirement questions (unresolved — flag in stakeholder talks)
1. **Reward mechanic + amounts:** per-pay-period credit (benefits site + live) vs. "per nurse visit" (D'Arcy sync) vs. 200 points — and the real `$` values. Placeholders throughout.
2. **Surface amounts in-app?** Live product = a *calculator link* (no inline total); D'Arcy's sync = "don't surface amounts"; D'Arcy's prototype = an inline banner. Pick one.
3. **Program list:** keep the full ~11-item list, or curate to featured cards + handouts (D'Arcy's call)?
4. **Labs cadence:** benefits site "per appointment cycle" vs. D'Arcy "every 2 years."
5. **Tab naming:** keep the product's "Enrollment / My Progress/Goals," or adopt D'Arcy's "Status / My Progress"?
6. **Real Peak Health phone number** in all designs (1-888-385-4583).

---

*Reminder on scope: DEM-35 was framed as a "reskin," but D'Arcy already re-conceptualized it. Anything in the "D'Arcy's translation" column that changes structure/IA (tab names, list→cards, dashboard split) is a **decision to confirm**, not just small-form parity.*
