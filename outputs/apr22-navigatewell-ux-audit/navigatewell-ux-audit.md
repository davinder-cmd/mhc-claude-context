# Navigate Well — UX Audit & MHC Comparison

**Date:** 2026-04-22
**Scope:** navigatewell.com public marketing site + inferences about member product
**Evidence:** 25 screenshots (desktop 1440×900 and mobile 375×812), full crawl of home, Why Navigate, Who we work with, Platform Features, Demo form, Platform Tour, and 404 pages
**Loaded context:** `about-me.md`, `working-preferences.md`, `strategy/Product Service Information.md`, `reference/ux-usability-experts.md`, `reference/ux-laws-quick-reference.md`, `reference/visual-design-experts.md`, `competitive/profiles/navigate-health.md`, `competitive/profiles/personify-health-ia-analysis.md`, `competitive/battlecards/navigate-health-battlecard.md`

---

## Important scope note

Navigate Well's member product is gated behind employer enrollment. Everything in this audit is derived from their public marketing site and one embedded product mockup at `/platform-tour`. I'm explicit throughout about what's "marketing UX" vs. "what we can infer about the member product." The MHC side of the comparison anchors to MHC's **member product** (per `Product Service Information.md`), not MHC's marketing site. That asymmetry is real — I name it where it matters.

---

## 1. Executive Summary

Navigate Well's site is visually disciplined — restrained type, one primary color (green on deep navy), generous whitespace, clean grid. It earns respect on first impression. But the site fails the harder UX tests: **it doesn't help a first-time buyer form a mental model of the product, and it asks users to reconcile three overlapping taxonomies on the home page alone** (Platform features, Engagement activation, 8 Pillars of Wellbeing). By the time a visitor hits the audience segmentation ("Employers, Consultants, Health Systems, Health Plans"), they've already been asked to categorize the same product four different ways. That's the central UX problem: the site shows organizational self-image, not user mental models.

The second problem is **a marketing site that won't tour its own product.** Every platform feature page describes what the product does in prose and lifestyle photography; almost none show the actual UI. One product mockup exists at `/platform-tour`. Meanwhile, the footer link to "Take a tour" is malformed — it points to `https://platform-tour/` which fails. A different "take a tour" URL (`/solutions/product/take-a-tour`) 404s. For a product built on "showing users how health happens," the marketing site performs the opposite: it tells, never shows.

Against MHC: Navigate Well wins on **visual restraint and audience segmentation as a surface pattern**. MHC's member product wins on **actual product experience** — it's a functioning member app with measurable engagement flows; Navigate Well's equivalent is walled off from public view, making their UX unknowable from the outside. For MHC, the three insights that matter: (1) **don't replicate their taxonomy overload** — pick one primary lens and own it; (2) **show the product earlier and more** — MHC's marketing and partner-facing comms should lead with UI, not photography; (3) **Navigate Well's marketing restraint is worth studying as a craft reference** — the type, color, and spacing discipline translate to any surface, including member onboarding.

---

## 2. Navigate Well UX Audit

### 2.1 Home page & entry experience

![Home page hero — desktop](screenshots/01b-home-desktop-viewport.png)

**Above-the-fold zones (desktop, 1440×900):**
- *Announcement bar* (green):"Navigate launches new industry level benchmarks → Get the guide"
- *Header:* Logo ("Navigate / Wellbeing Solutions") + 5 nav items + "Book a demo" CTA
- *Hero:* Small eyebrow "Culture, care, and clinical wellbeing" + giant headline "Make health happen" + dark video background + a tiny "Stop video" control in the bottom-right

**What's immediately visible:** The brand. The vibe. Nothing else.

**What's NOT visible above the fold:**
- The primary CTA ("Book a demo") exists in the nav but is *not* in the hero composition itself
- No value proposition beyond "Make health happen"
- No product imagery
- No audience qualifier ("For HR leaders" / "For benefits teams")
- No social proof, metrics, or trust markers
- The supporting callouts ("increase utilization, drive prevention, improve outcomes, reduce risk") visible in the HTML do not appear in the desktop viewport capture — they surface lower on the page or via animation/scroll triggers

**Billboard test (Krug):** A user dropped on this page for 3 seconds cannot tell what Navigate Well sells. "Make health happen" is a slogan, not a description. The header says "Wellbeing Solutions" which is the only literal product signal. A buyer who expected "benefits navigation" or "condition management" (the actual product) gets neither.

**Hierarchy call:** The hero prioritizes visual mood over information. Intentional, but expensive — it spends the user's first 3 seconds on atmosphere when a B2B buyer wants to know if this product solves their problem.

**Entry experience verdict:** Beautiful, nearly empty. This kind of hero works for consumer brands where the product category is understood and you're competing on aesthetic trust (Apple, Airbnb). It under-serves a B2B health-tech buyer comparing 5 vendors in a spreadsheet.

**Mobile (375×812):**

![Home hero — mobile](screenshots/11-home-mobile-abovefold.png)

Mobile is more useful than desktop for one reason: the rotating benefit phrase ("increase utilization" visible in the capture, likely cycling through "drive prevention," "improve outcomes," "reduce risk") is visible above the fold *alongside* the "Culture, care, and clinical wellbeing" eyebrow and "Make health happen" headline. That gives a mobile user more information scent than a desktop user. That's backwards from what responsive design normally inverts — usually desktop gets more, mobile less.

### 2.2 Top-level navigation structure

**Primary navigation (desktop):**
| Position | Label | Type |
|---|---|---|
| 1 | Why Navigate | Direct link |
| 2 | Our solutions | Mega-menu (3 columns) |
| 3 | About us | Direct link |
| 4 | Resources | Mega-menu |
| 5 | Contact | Direct link |
| 6 (CTA) | Book a demo | Green pill button |

5 nav items + a CTA — within Hick's Law guidance (5±2).

**The "Our solutions" mega-menu, expanded:**

![Mega-menu: Our solutions](screenshots/10-megamenu-our-solutions.png)

This is the central IA choice of the site. It presents three parallel taxonomies side-by-side:

| Column 1: Platform features | Column 2: Engagement activation | Column 3: Product |
|---|---|---|
| "Connecting you to what matters" | "Our holistic approach to wellbeing" | "Solutions for groups of every size" |
| Wellbeing resources | Physical wellbeing | Our products |
| Benefits navigation | Financial certainty | Take a tour of Navigate |
| Marketplace & integrations | Community & social engagement | |
| Rewards & incentives | Mental health & balance | |
| Reporting & analytics | Purpose & career | |
| Communications & marketing | | |
| AI Virtual Assistant | | |

Then further down the page, a fourth taxonomy appears:

**8 Pillars of Wellbeing** (home page "holistic approach" section): Balance, Community, Financial, Mindfulness, Nutrition, Physical, Purpose, Social.

**IA verdict:** This is the most serious UX problem on the site. A first-time visitor has to answer: "Which lens do I use to find what I need?" The product is the same underneath, but it's being merchandised via four non-mutually-exclusive axes:

1. **Tools** (Platform features)
2. **Outcome categories** (Engagement activation)
3. **Product packages** (Our products)
4. **Holistic pillars** (8 Pillars)

Note the overlap: "Physical wellbeing" (col 2) overlaps with "Physical" (8 Pillars) but isn't the same as "Wellbeing resources" (col 1). "Financial certainty" overlaps with "Financial" (8 Pillars). "Community & social engagement" overlaps with "Community" *and* "Social" (8 Pillars). A buyer cannot form a clean mental model of what these categories mean, because they don't map cleanly onto each other.

**This is what Cooper called "jurisdictional confusion"** — the internal org structure leaking through the IA. Someone inside Navigate owns "Platform features" and someone else owns "Engagement activation" and both got seats at the home page. The user pays the cost.

**Other nav observations:**
- **"Take a tour of Navigate" in the mega-menu** links to `/platform-tour` (works)
- **"Take a tour" in the footer** links to `https://platform-tour/` (broken — malformed URL)
- A legacy path `/solutions/product/take-a-tour` returns 404 (see §2.4)

**Mobile navigation:**

![Mobile menu open](screenshots/14-mobile-menu-open.png)

The mobile menu contains:
- Primary list: Why Navigate / Our solutions / About us / Resources / Contact
- A second list directly underneath: About us / Careers / Contact / News / Resources / Case studies / Videos / Events

**"About us," "Contact," and "Resources" appear in both lists.** This is recognition-not-recall violation (Nielsen #6) and consistency violation (Nielsen #4) — the user can't tell which one to click, and neither list has a header to differentiate. On a 375px screen this redundancy costs roughly one scroll-length of real estate.

### 2.3 Sections of the home page, in order

| # | Section | Purpose | Screenshot |
|---|---|---|---|
| 1 | Hero + video | Brand impression | [01b](screenshots/01b-home-desktop-viewport.png) |
| 2 | "People to follow through so outcomes improve" + product mockup + 3 proof points (connected platform, pharmacist-led coaching, clinical expertise) | Positioning + first product visual | [02](screenshots/02-home-section-metrics.png) |
| 3 | Impact metrics: 26% / 31% / 43% with outcome descriptions | ROI proof | [04](screenshots/04-home-section-benefits.png) |
| 4 | "Proof over promises" with Impact Guide CTA | Funnel to download | [04](screenshots/04-home-section-benefits.png) (same section) |
| 5 | "A holistic approach" — 8 Pillars of Wellbeing | Framework positioning | [05](screenshots/05-home-section-pillars.png) |
| 6 | "Explore Navigate's applications" — 7 feature cards | Product category wayfinding | [06](screenshots/06-home-section-applications.png) |
| 7 | "Who we work with" — 4 audience buttons | Segment self-identification | [07](screenshots/07-home-section-audiences.png) |
| 8 | "Over 1.7 million people trust..." + 7 client logos | Social proof | [08](screenshots/08-home-section-logos.png) |
| 9 | "An even brighter future starts here" — final "Book a demo" CTA | Conversion | (not captured — scrolled past) |
| 10 | Footer: trust badges (HIPAA, SOC2, Great Place to Work) + 6-column link index | Credentialing + sitemap | [09](screenshots/09-home-footer.png) |

**Internal inconsistency worth flagging:** The home page claims "Over 1.7 million people." The Why Navigate page claims "1.1 million users" (per WebFetch of that page). Two different numbers, two pages apart. Either a stale update, a definitional inconsistency (maybe 1.7M members ever vs. 1.1M active?), or both. Either way, a careful buyer notices and loses trust.

### 2.4 Primary user task flows

I walked four tasks a prospective buyer or partner would perform. Each is scored on findability (high / medium / low) and step count. Task #5 is a member-side task I could *not* complete because the member product is gated.

#### Task 1: "Book a demo" (warm prospect conversion)
**Path:** Home → click "Book a demo" (header) → Demo form → fill 6 fields → submit
**Steps:** 2 clicks to form, 6 fields, 1 submit = ~3 actions
**Findability:** **HIGH** — the CTA appears in the header on every page, in the final home-page section, and in every sub-page hero area
**Mental model:** Clean. User knows what they're signing up for.
**Issues:** None major. The form is lean (First, Last, Job Title, Email, "I am" dropdown, optional notes). No phone required — unusual for a B2B demo and arguably too permissive (it means Navigate sales has to qualify manually, costing sales-cycle time). The role dropdown ("I am") is a nice touch for segmentation, but we didn't get to inspect the options list (see evidence gap note below).

![Demo form](screenshots/15-demo-form-desktop.png)

**Score:** Strongest flow on the site. If Navigate Well loses a sale, it's not because the demo form broke down.

#### Task 2: "Understand what the product actually does" (cold prospect evaluation)
**Path:** Home → scroll through hero → scroll through 8 pillars → scroll through applications grid → click a specific feature → read → back → try another
**Steps:** Highly variable; minimum 5-6 clicks to get a concrete picture, and even then the picture is largely copy-driven
**Findability:** **LOW-MEDIUM** — the path *exists*, but doesn't lead to a satisfying answer
**Mental model:** Confused. The user has to reconcile Platform features vs. Engagement activation vs. 8 Pillars, and the feature pages themselves are heavy on outcome copy and light on UI.

Compare a user's question — *"what does this product look like to my employees?"* — to the answer they get: lifestyle photography of smiling people outdoors, big headlines ("So many ways to help employees be well"), testimonial quotes from HR professionals, and a CTA to book a demo.

![Feature page: Wellbeing resources](screenshots/18-feature-page-wellbeing.png)

![Feature page: AI Assistant](screenshots/19-feature-ai-assistant.png)

**The AI Assistant page is the clearest example of this failure.** The headline is "More than a chatbot, it's your personal wellbeing guide." The body says "Our AI Assistant doesn't just answer questions. It propels your people forward." No conversation screenshot. No sample question. No UI. In 2026, with consumer AI saturation, telling a buyer "it's not just a chatbot" without showing it is a wasted page.

**Score:** The hardest task on the site, by a wide margin. A buyer who wants to understand the product has to book a demo to see it.

#### Task 3: "Find content for my specific role" (audience-specific evaluation)
**Path:** Home → scroll to "Who we work with" → click "Employers" (or "Consultants" / "Health systems" / "Health plans") → land on anchor within a single combined page
**Steps:** 2 clicks to the segment section
**Findability:** **MEDIUM** — visible on the home page, but the destination is disappointing

![Who we work with — segment navigation](screenshots/16-who-we-work-with.png)

All four audience segments land on the *same page* with anchor links, not dedicated pages. The content differentiation per segment is 2-3 sentences and a "Book a demo" CTA. This is a hub-and-spoke pattern executed as a hub-only — the spokes were never built out. A consultant evaluating Navigate Well for a client gets roughly the same page as an HR leader evaluating for their own org. No segment-specific case studies, no segment-specific metrics, no segment-specific feature emphasis.

**Score:** The IA pattern promises vertical-specific relevance; the content delivery doesn't follow through.

#### Task 4: "Take a product tour" (curious evaluator)
**Path A (mega-menu):** Home → "Our solutions" mega-menu → "Take a tour of Navigate" → `/platform-tour` → works
**Path B (footer):** Home → scroll to footer → "Take a tour" → `https://platform-tour/` → **broken (malformed URL)**
**Path C (legacy):** Guess the URL at `/solutions/product/take-a-tour` → **404** (see below)

![Platform tour page](screenshots/20-platform-tour.png)

![404 error on legacy URL](screenshots/17-take-a-tour.png)

**Findability:** **LOW** — one working path, two broken paths, for the single most important task a curious buyer would attempt

**This is a P0 defect.** A prospective buyer who clicks "Take a tour" in the footer (a place users actively look when the header doesn't answer their question — especially on long pages where they've scrolled past the top nav) hits a failure. That failure is silent — no clear error page, just a DNS resolution failure. Navigate Well's analytics presumably show a bounce, not a bug.

The 404 page at `/solutions/product/take-a-tour` is at least designed with recovery — "Oops! We're sorry. Take me home" button. Meets Nielsen #9 (helpful errors) adequately.

**Score:** The most important discovery task on the site has two broken entry points. Easy to fix. Hasn't been fixed.

#### Task 5: "Use the actual member product" — NOT POSSIBLE
I cannot complete this task as an outsider. The member product is behind employer enrollment. The only visible member-UI artifact on the public site is the mockup on `/platform-tour` (one screenshot showing points, activity card, challenge). This means **any claim I make about Navigate Well's member UX is inference, not observation.** Flag this explicitly when citing any member-side comparison.

---

## 3. UX Dimensions Assessment

Ratings on a 5-point scale: 🟥 very weak · 🟧 weak · 🟨 fair · 🟩 good · 🟦 excellent

| Dimension | Rating | Evidence |
|---|---|---|
| **Findability** | 🟨 Fair | Nav is within Hick's Law range. But three competing taxonomies make "find X" harder than it should be. Two broken "Take a tour" links. |
| **Information scent** | 🟧 Weak | Labels like "Engagement activation" and "Platform features" are internal vocabulary. A benefits manager doesn't search for "engagement activation" — they search for "MSK program" or "diabetes management." |
| **Cognitive load** | 🟧 Weak | Four parallel classification schemes on the home page (Platform features / Engagement activation / 8 Pillars / Audiences). Miller's 7±2 applies to each scheme; the user shoulders a 7+5+8+4 recognition burden. |
| **Navigation clarity** | 🟨 Fair | Primary nav is clear. Mega-menu structure is visually clean. Mobile menu has redundant lists that aren't labeled. Breadcrumbs appear on feature pages ("Our solutions › Platform features › Wellbeing resources") — good. |
| **Progressive disclosure** | 🟨 Fair | Home page reveals sections via scroll, good. But feature pages over-disclose in copy and under-disclose in imagery — the complexity unfolds verbally, not visually. |
| **Accessibility** | 🟨 Fair (inferred) | Dark navy background with green/white type looks high-contrast (4.5:1+). "Skip to content" link present (saw it in snapshot). Semantic heading structure appears present. Not tested with keyboard nav or screen reader — flag this as unaudited. Video in hero auto-plays, which can be a problem (auto-play is AA violation unless controls are prominent — "Stop video" is small, bottom-right, easy to miss). |
| **Feedback & affordances** | 🟩 Good | CTAs use consistent green pills. Underlined hover on nav. Arrow-icon affordances on cards. Standard patterns, well-executed. |
| **Mobile experience** | 🟨 Fair | Responsive, cleanly scaled. Rotating benefit phrases actually improve the mobile hero's information density. Menu has redundant content. Would want to test one-handed usability of the dark-theme tap targets. |
| **Consistency & standards (Jakob's Law)** | 🟩 Good | Site follows B2B SaaS marketing conventions. Nothing is "creative" enough to confuse. This is a quiet strength. |
| **Error handling** | 🟨 Fair | 404 page is functional with a home CTA. But the *cause* of the 404 (broken internal link) should have been caught in QA. |

**Net UX rating:** 🟨 Fair. Individually polished surfaces, collectively confused architecture.

---

## 4. Side-by-Side UX Comparison — Navigate Well vs. MHC

### Caveat
Navigate Well is a walled marketing site that won't show its member product. MHC is a member product whose marketing footprint I'm not directly auditing here. **The comparable surface is narrow.** The honest comparison is:

- **Comparable:** Both products' IA choices (how concepts are organized), audience segmentation strategy, first-impression experience design
- **Not directly comparable:** Navigate Well's actual in-product UX (unknowable) vs. MHC's actual in-product UX (exists and functions)

### Dimension-by-dimension

| UX Dimension | Navigate Well | MHC | Winner & Why |
|---|---|---|---|
| **First impression / hero** | Abstract mood hero. No product, no task, no clear value prop. | N/A for member product (they enter via partner-branded SDK or direct app). MHC's marketing ≠ audited here. | **Inconclusive.** NW's marketing hero is beautiful but under-informative. MHC's equivalent surface is partner-branded, so it's a different problem. |
| **Product explanation / demonstration** | Tells in copy, doesn't show in UI. Only one product mockup across the entire public site. | Native app + web, real UI, member flows working against real data (HRA → DCP → rewards). | **MHC wins decisively on actual product experience.** The thing Navigate Well hides, MHC has. The question is whether MHC's marketing surface shows the product *well* to partners — worth a separate audit. |
| **IA taxonomy / information architecture** | Four overlapping taxonomies (Platform features, Engagement activation, 8 Pillars, Audiences). Users bear the reconciliation cost. | Member product IA not fully documented in my context; but the product is built on a configurable Page Layout system (per Product Service Info), suggesting flexibility. DCPs are the clear primary organizing concept. | **MHC wins on clarity of primary concept.** Digital Care Paths (DCPs) are the organizing noun. Navigate Well doesn't have a single comparable primary noun — they have platforms and pillars and categories. |
| **Audience segmentation** | Four audiences (Employers, Consultants, Health Systems, Health Plans) named and visible on home page. But the segment pages are anchor links on a single page with nearly identical content. | Partner-distributed, so segment is expressed through partner branding (Alight, Elevance, Lockton, WTW, Aon). Member segmentation happens via HRA and DCP routing. | **Navigate Well wins on surfacing audience as a visible IA pattern.** MHC could borrow this as a marketing/partner-positioning technique. MHC wins on using *behavioral* segmentation (HRA results → DCP fit) rather than *role-based*. |
| **Task flow clarity** | Demo booking is clean (2 clicks, 6 fields). Other flows — especially "understand the product" — break down. | Member flows are behavioral (tracked, measurable). Onboarding → HRA → DCP recommendation → enrollment is a single logical progression. | **MHC wins on member-facing flow logic.** Navigate Well's demo flow is competitive at the marketing layer. |
| **Cognitive load management** | High. Multiple taxonomies. | Has own risk — Page Layout configurability means different partners can assemble very different experiences. Client Services customization can diverge from design intent. | **Split.** Navigate Well's cognitive load comes from the site IA. MHC's comes from fragmentation across partner deployments. Different failure modes. |
| **Feedback loops / progress** | Static marketing site; rewards and points live in the gated product. | Rewards ($100/program gift card), streaks, DCP progression — visible and central to the member experience. | **MHC wins on progress-as-feature.** Navigate Well has similar machinery but can't demonstrate it publicly. |
| **Design language & consistency** | Tight. One green, one dark navy, one type family (sans-serif display + sans body), one grid rhythm. Professional restraint. | Partner-branded SDK means MHC's own design system gets skinned per deployment; canonical MHC UI exists but is one of many visual expressions. | **Navigate Well wins on consistency of their own brand.** MHC pays a price for partner-distribution: visual design discipline at the product layer is harder to enforce. |
| **Accessibility (inferred)** | Apparent AA contrast; auto-playing hero video is a concern. | Native iOS/Android affords platform accessibility (VoiceOver/TalkBack). Mobile-first is accessibility-friendly by default. | **MHC wins on platform-native accessibility.** Web accessibility on Navigate Well isn't audited here and could be worse than it appears. |
| **Trust markers** | Visible and strong — HIPAA, SOC2, Great Place to Work, top-vendor badges, client logos. | Compliance handled but less visibly foregrounded (member product doesn't need to sell compliance to members; partners need it). | **Navigate Well wins on visible credentialing.** MHC's ICP (self-insured employers) also buys on trust — worth auditing whether MHC's partner-facing comms lead with compliance badges the same way. |

### Where Navigate Well's UX is superior to MHC's
1. **Visual restraint at the marketing layer.** The "nothing extra" aesthetic — one accent color, one type family, deep navy, clean grid — is craft-grade and worth studying as a design system reference.
2. **Audience segmentation as a surfaced IA pattern.** Even if the underlying pages are thin, the *surface* of naming audiences is good practice.
3. **Visible trust badges in the footer.** HIPAA, SOC2, Great Place to Work, and top-vendor are right there. MHC should check whether its partner-facing marketing does this as well.

### Where MHC is differentiated
1. **Behavioral IA rooted in user state, not internal org chart.** MHC's HRA → DCP → rewards → outcomes is one legible story. Navigate Well's site tells four parallel stories.
2. **Native platform accessibility via iOS/Android.** Web can aspire to what native affords.
3. **Actual product experience as the proof point, not the hidden prize.** MHC's partners can show the product. Navigate Well's buyers have to request it.

### Gaps in both
1. **Neither product makes the member experience of the product obvious to a non-enrolled observer.** Navigate Well hides it. MHC ships it inside partner skins. Both pay a positioning cost.
2. **Neither seems to have solved the "too many ways to organize our product" problem.** Navigate Well shows it in their IA. MHC shows it in their Page Layout / configurability story. Different manifestations of the same root issue: health/wellbeing doesn't have one true taxonomy.

---

## 5. Expert Panel Discussion

A 20-person panel with real disagreement. Each expert argues from their documented perspective. Verbatim-style attribution.

### Panelists
Jakob Nielsen · Don Norman · Steve Krug · Luke Wroblewski · Erika Hall · Caroline Jarrett · Jared Spool · Leah Buley · Kim Goodwin · Cyd Harrell · Josef Müller-Brockmann · Dieter Rams · Ellen Lupton · Edward Tufte · Aarron Walter · Alan Cooper · Irene Au · Sarah Richards · Jesse James Garrett · Whitney Quesenbery

---

**Jesse James Garrett (IA strategist):** The fundamental problem is structural. This site presents four parallel classification systems for the same content and forces the user to reconcile them. That's not a navigation problem; it's an information architecture failure. Pick one primary axis — probably outcomes, because that's what buyers care about — and make everything else a secondary facet within it.

**Don Norman:** Agreed with Jesse, but I'd frame it through conceptual models. A product exists in the user's mind as a single coherent thing. When the designer shows it three ways simultaneously, the user can't build a stable mental model. They leave without knowing what they just saw.

**Jakob Nielsen:** Multiple heuristic violations. #4 — consistency — because "Physical wellbeing" means different things in Engagement activation vs. 8 Pillars. #6 — recognition over recall — because the user has to remember which taxonomy a concept lives under. #9 — help with errors — because when you click "Take a tour" in the footer and it fails, there's no diagnostic. They're not catastrophic individually; cumulatively they erode trust.

**Steve Krug:** I'd say it's simpler than all that. Billboard test: drop me on the home page for 3 seconds. What does this company do? I look at it and I see "Make health happen." That's a slogan, not a billboard. Billboards tell me what the business is. The hero failed the three-second test.

**Dieter Rams:** I disagree with Steve on this specific point. Good design is as little design as possible. The restraint in the hero is commendable. The problem isn't that it says too little — the problem is that what it says isn't useful. Less of the right thing is good. Less of nothing is nothing.

**Ellen Lupton:** The typography is disciplined. One display face doing all the hero lifting, one body face below, tight vertical rhythm. That's not accidental and it's not easy. Respect where respect is due — whoever designed the type system did careful work. The issue is the words, not the letterforms.

**Sarah Richards (content design):** Ellen is right about letterforms and wrong about content. "Engagement activation" is internal jargon that leaked into the nav. A buyer doesn't search for "engagement activation." They search for "help my employees with back pain" or "reduce healthcare claims costs." Every label on this site was written for the organization's self-understanding, not for the buyer's task language.

**Erika Hall:** Sarah is right. This is a product that hasn't done enough user research, or hasn't applied what they've done. Real buyer interviews would immediately surface that benefits managers don't categorize their needs as "Platform features" vs. "Engagement activation." They categorize by condition, by population, by claim cost.

**Jared Spool:** I want to bring this back to ROI. The question isn't whether it's pretty or whether the labels are perfect. The question is: does this site convert the right buyer at the right cost? Given that Navigate Well has 93% client retention (per the competitive profile), they clearly close deals. But how much of that is *despite* the site? A buyer who books a demo here does so on brand trust and referral, not on the site's informational value. The site is a trust signal, not a conversion funnel.

**Leah Buley:** Jared's framing is important. At a small company without UX capacity, this site is fine-enough. But the gap between "beautiful" and "functional" is a team-size problem: you need someone whose full-time job is IA and content strategy to fix this, and they probably don't have one.

**Kim Goodwin (personas):** The audience segmentation ("Employers, Consultants, Health Systems, Health Plans") is role-based, not goal-based. What does a consultant actually want to do when they land here? Evaluate Navigate Well for a specific client. What does an employer actually want? Figure out if this solves an internal pain point. Those are different tasks that share an audience label. The segmentation is demographics, not personas.

**Luke Wroblewski:** The demo form is a bright spot. Six fields. No phone. No company size forced. That's lean form design. I'd argue the "I am" dropdown is better than a phone field because it segments the lead usefully without adding friction. Bad teams add fields. Good teams subtract them. This form subtracted.

**Caroline Jarrett:** I'd push back slightly. No phone number means no fast-response path for the sales team. That's a tradeoff. It might serve the user better and serve the business worse. Whether that's the right call depends on Navigate Well's sales motion — if they're running high-touch outbound anyway, the form is fine. If they need inbound response velocity, the absence of a phone is a problem.

**Alan Cooper:** Let me raise the question nobody's raised: where is the interaction? This is a site about a behavioral platform, and nothing on this site is behavioral. No demo flow. No interactive widget. No "try it yourself" moment. For a product whose value proposition is user engagement, the marketing surface shows zero user engagement. That's not ironic — it's a missed opportunity.

**Aarron Walter (emotional design hierarchy):** I'd score this 3/4 on my hierarchy. Functional: yes. Reliable: mostly (broken footer link). Usable: debatable. Pleasurable: yes, visually. The problem is emotional design assumes the lower tiers are solid. Here the functional layer is wobbly — you can't tour the product, labels don't match mental models, and a primary nav link is broken.

**Edward Tufte:** The impact metrics section — 26% / 31% / 43% — is a data-ink ratio win. Large numbers, minimal chrome, single-line supporting text. That's how you present proof. The 8 Pillars section is the opposite: eight equal-weight items displayed as a list, no indication of which pillars matter more to which buyer. All signal, no hierarchy.

**Josef Müller-Brockmann:** The grid work is excellent. Vertical rhythm, column alignment, consistent gutters. That's not commentary on content; that's craft. A lot of B2B health sites are architecturally sloppy. This one isn't.

**Cyd Harrell (accessibility + inclusive design):** I'm less sanguine. Dark navy + bright green hits contrast ratios on paper, but in practice, low-vision users, older users, and users in bright sunlight struggle with dark-theme marketing pages. The auto-playing hero video with a small "Stop video" control is a WCAG concern — auto-play over 5 seconds requires prominent controls. "Small and bottom-right" does not satisfy "prominent." This is a site that looks accessible and probably isn't fully tested.

**Whitney Quesenbery (accessibility):** Agreed with Cyd. I'd also note the heavy reliance on green for interactive affordances. Color alone should never convey interactivity. Links look like links because of underline, which is good, but the CTA buttons only signal their state through color changes, which is a problem for color-vision-deficient users. Would want to audit keyboard-only navigation end to end before certifying.

**Irene Au (enterprise UX):** B2B platforms live or die on trust. Navigate Well leads with trust signals — HIPAA, SOC2, Great Place to Work, logos of City of Boston and Nebraska Medicine. That's textbook. Where it breaks down is: the product page experience doesn't match the credential quality. You trust the company; you don't trust the product from what you saw. That's a funnel leak.

**Jakob Nielsen (return):** Final heuristic note: #1 visibility of system status. When a user clicks "Take a tour" in the footer and nothing happens (broken URL), there's no system status. No error page, no retry option. That silent failure is the worst kind. An error you can see is recoverable; an error you don't see is invisible damage.

**Don Norman (return):** This is a site that's been owned by marketing for a long time. Marketing optimizes for message. Design optimizes for task. Those are different jobs. The marketing is sophisticated; the design thinking is under-invested. If Navigate Well wants to level up, the fix isn't more pages — it's bringing product-design discipline to the public site.

### Panel disagreement, summarized
- **Krug vs. Rams:** Hero restraint — a virtue (Rams) or a failure of informational duty (Krug)?
- **Wroblewski vs. Jarrett:** The demo form — best practice (Wroblewski) or a sales-velocity cost (Jarrett)?
- **Tufte vs. Krug:** The metrics section — evidence of craft (Tufte) or insufficient context about what they prove (Krug)?
- **Buley vs. Cooper:** The absence of interaction — forgivable given team size (Buley) or a missed strategic move (Cooper)?

These aren't resolved. Real panels don't converge. The takeaway for MHC is that thoughtful designers can reasonably disagree about restraint vs. disclosure — and the answer depends on what MHC is optimizing for at any specific surface.

---

## 6. Top 3 UX Insights for MHC

**1. Don't ship a taxonomy problem to your users.**
Navigate Well's IA failure is caused by making internal organizational structure visible to buyers. MHC's Page Layout configurability creates a parallel risk: if Innovations and Client Services each publish different assemblies per partner, the member experience fragments. The discipline is to pick one primary axis of organization — for MHC, that's almost certainly *Digital Care Paths as the primary member noun* — and subordinate everything else to it. Not five competing homepage IAs per partner. One.

**2. Show the product. Then show it again. Then show it again.**
Navigate Well's biggest lost opportunity is that their public surface doesn't demonstrate the product. MHC has a working app and real flows; the asset is already built. Make sure partner-facing decks, marketing one-pagers, sales demos, and any public positioning surface leads with actual UI — AI Insights in action, DCP progression, wearable data translated into advice. "Show, don't tell" isn't copywriting advice here; it's a strategic use of the asset Navigate Well doesn't have.

**3. The restraint is worth stealing; the jargon is not.**
Navigate Well's visual design discipline — one accent color, one type family, tight grid — is exactly the kind of craft language MHC should study for its own system. But their copy is a cautionary tale. Never let "Engagement activation" equivalents appear in MHC's member-facing product. A benefits manager searches for "diabetes program." A member with anxiety searches for "help." The vocabulary must match the search term, not the internal noun.

---

## Appendix: Artifact Index

| # | File | What it shows |
|---|---|---|
| 01 | [01-home-desktop-abovefold.png](screenshots/01-home-desktop-abovefold.png) | Home full viewport (desktop) |
| 01b | [01b-home-desktop-viewport.png](screenshots/01b-home-desktop-viewport.png) | Home hero (desktop) |
| 02 | [02-home-section-metrics.png](screenshots/02-home-section-metrics.png) | Positioning + first product mockup |
| 03 | [03-home-section-proof.png](screenshots/03-home-section-proof.png) | Proof section |
| 04 | [04-home-section-benefits.png](screenshots/04-home-section-benefits.png) | 26% / 31% / 43% metrics |
| 05 | [05-home-section-pillars.png](screenshots/05-home-section-pillars.png) | 8 Pillars of Wellbeing |
| 06 | [06-home-section-applications.png](screenshots/06-home-section-applications.png) | Platform features grid + Who we work with |
| 07 | [07-home-section-audiences.png](screenshots/07-home-section-audiences.png) | Audience segment buttons |
| 08 | [08-home-section-logos.png](screenshots/08-home-section-logos.png) | Client logos + "1.7M" social proof |
| 09 | [09-home-footer.png](screenshots/09-home-footer.png) | Footer (6-column link index + trust badges) |
| 10 | [10-megamenu-our-solutions.png](screenshots/10-megamenu-our-solutions.png) | "Our solutions" mega-menu — three taxonomies |
| 10b | [10b-megamenu-resources.png](screenshots/10b-megamenu-resources.png) | "Resources" mega-menu |
| 11 | [11-home-mobile-abovefold.png](screenshots/11-home-mobile-abovefold.png) | Mobile hero |
| 12-13 | `12-home-mobile-section2.png`, `13-home-mobile-section3.png` | Mobile mid-page sections |
| 14 | [14-mobile-menu-open.png](screenshots/14-mobile-menu-open.png) | Mobile hamburger menu (with redundant secondary list) |
| 15 | [15-demo-form-desktop.png](screenshots/15-demo-form-desktop.png) | Demo form (6 fields) |
| 15b | [15b-demo-form-lower.png](screenshots/15b-demo-form-lower.png) | Demo form lower (privacy language, submit area) |
| 16 | [16-who-we-work-with.png](screenshots/16-who-we-work-with.png) | Who we work with hub |
| 17 | [17-take-a-tour.png](screenshots/17-take-a-tour.png) | 404 error page (broken legacy URL) |
| 18 | [18-feature-page-wellbeing.png](screenshots/18-feature-page-wellbeing.png) | Feature page — lifestyle photo, no product UI |
| 19 | [19-feature-ai-assistant.png](screenshots/19-feature-ai-assistant.png) | AI Assistant feature page — no AI UI shown |
| 20 | [20-platform-tour.png](screenshots/20-platform-tour.png) | Platform tour — the one public product mockup |

### Evidence gaps (transparency)
- The "I am" role dropdown options on the demo form were not captured (dropdown didn't expand in snapshot)
- Demo form post-submit behavior was not observed (did not submit)
- Full keyboard-only navigation and screen-reader behavior not tested
- The actual member product is inaccessible; all member-UX claims are inference
- Some section numbering in §2.3 cross-references screenshot captures that are approximations of scroll positions, not section boundaries

---

## Decision log

- **Scope:** Public marketing site + external sources (added in §7 addendum below). Member product itself is still gated.
- **Comparison asymmetry:** MHC member product vs. Navigate Well marketing + app-store artifacts. Named openly; not silently glossed.
- **Expert panel style:** Structured disagreement rather than unanimous verdict, per the prompt.
- **Rating scale:** 5-point emoji scale for scanability over 10-point for false precision.
- **Output location:** `outputs/apr22-navigatewell-ux-audit/` (per memory on folder naming).

---

## 7. Addendum — External evidence beyond the marketing site

### 7.1 What I should have checked the first time

The original audit scoped to navigatewell.com. Davinder pushed back: *did I look outside the marketing site?* I hadn't. I've now pulled from five external sources:

| Source | What it yielded | Screenshot |
|---|---|---|
| iOS App Store listing | 5 product screenshots, 4.7★ / 4K ratings, release cadence | [ext-08](screenshots/ext-08-appstore-large.png), [ext-01](screenshots/ext-01-appstore-top.png) |
| Navigate Wellbeing YouTube channel (`@navigatewell`) | 125 videos, 94 subscribers, **zero product walkthroughs** | [ext-07](screenshots/ext-07-youtube-channel.png) |
| Google Play Store | JS-gated, couldn't render product screenshots headlessly | — |
| Larimer County training PDF (2019) | Dashboard UI mockup ("Lifetime Stats" widget, device sidebar, 2019 Incentive Tracker), full device-integration docs | — (PDF content embedded) |
| Novant Health client deployment (`livehealthynovanthealth.livehealthyignite.com`) | Cloudflare bot-blocked. But the URL reveals the *product brand name*: "LiveHealthy Ignite" | [ext-06](screenshots/ext-06-novant-client-deploy.png) |

**Net finding:** three of five external sources yielded meaningful new evidence. Two failed (Play Store, live deployment) for infrastructure reasons, not absence of evidence.

### 7.2 What the App Store screenshots reveal

![App Store product screenshots](screenshots/ext-08-appstore-large.png)

Five member-facing screenshots, left to right:

1. **Splash / login** — Navy blue with "Navigate Wellbeing Solutions" logo and a login card
2. **"Navigate your wellbeing with purpose"** — Grid of content tiles (challenge/category selection)
3. **"Check in on your daily progress"** — Green themed daily check-in view, calendar-style
4. **"Easily track your activity and nutrition"** — White screen with tracker entries (activity/meal log)
5. **"Track your workouts and check in at your favorite locations"** — Map view with gym/location pins

**This is the most important finding of the whole audit.** The app publicly advertised on the App Store is a **fitness-tracking + challenges + gym check-in app**. It is *not* the clinical-coaching + benefits-navigation + pharmacist-led-condition-management platform the website sells to HR buyers.

That gap is the UX signal: Navigate Well is one product dressed up as two. The marketing site positions them as enterprise clinical DTx. The member product — going by what they themselves chose to show on their own App Store page — is Virgin Pulse-class engagement software. Either the marketing is ahead of the product, or the App Store storytelling is under-selling what's actually inside. Either way, a buyer who tests the app before signing doesn't get what the pitch promised.

**App metadata:** 4.7★ / 4K ratings, last updated Mar 4 (v3.3.0), "What's new: Bugfixes and performance improvements" (no feature announcement), developer name "Navigate Wellness" (inconsistent with the parent brand "Navigate Wellbeing Solutions"). Privacy posture: "Data Not Linked to You" for Health & Fitness — reasonable.

### 7.3 What the YouTube channel reveals — by its absence

![YouTube channel](screenshots/ext-07-youtube-channel.png)

Channel stats: **94 subscribers, 125 videos.**

Top 20 video titles — every single one is thought-leadership, customer testimonial, or category commentary. A sample:
- "Public & Labor employee benefits: partnership approach"
- "Building wellbeing culture in remote workforces"
- "HR implementation guide for employee wellbeing"
- "Why diets fail: sustainable weight loss without restriction"
- "How pharmacist health coaches manage chronic disease"

**Zero titles indicate a product walkthrough, member tutorial, feature demo, or UI explainer.** For a platform company in 2026, this is a remarkable absence. Compare to Noom, Omada, Headspace, or even Virgin Pulse — all have "how to use the app" video libraries. Navigate doesn't.

94 subscribers also says something: the channel isn't a member destination. Members never find it. It's a sales-and-marketing surface that happens to be hosted on YouTube.

**Implication for MHC:** MHC has 3 AI features in active development (A.I. Health Insights, A.I. Motivator Coach, DCP A.I. Expert). When they ship, demo video is table stakes — sales demos, partner kickoff calls, onboarding activations. A muscle Navigate hasn't built is a muscle MHC *will* need to build.

### 7.4 What the 2019 training PDF reveals

The Larimer County (client) training PDF, while 6 years old, shows:

- **Web portal dashboard** has a right-hand sidebar called "Sync Device" — IA pattern: utilities in a right rail, primary content in the center. Not a modern pattern.
- **"Lifetime Stats" widget** on the dashboard displays: Activity minutes, Steps, Avg Sleep, Weight Loss, Avg Calories, Avg Water — six metrics on one card (violates Miller's 7±2 in a forgivable way but still dense)
- **Separate "Navigate Wellbeing App"** from the web portal — bimodal architecture. Some tasks web-only (device sync setup), some app-only, some both.
- **Apple Watch cannot sync directly** — requires a bridge app (Withings, or similar). Same for Samsung.
- **MyFitnessPal not supported** ("Not at this time. We add new devices and apps to the portal often")

The device integration story is where Navigate loses badly to MHC. **MHC's device-agnostic HealthKit / Health Connect integration is a real UX advantage** — the member connects once at the OS layer, and steps / sleep / active minutes flow in regardless of which wearable they own. Navigate forces the member to enter the vendor's OAuth funnel for each specific brand, and provides broken coverage for Apple Watch and Samsung. Six years later, looking at the current App Store copy ("activity through user input, Location Services, and HealthKit integration"), they've improved — but the training collateral still reflects the old friction.

### 7.5 What the Novant Health deployment reveals

Novant Health's employees access Navigate at `livehealthynovanthealth.livehealthyignite.com`. The underlying product URL template is **`livehealthyignite.com`** — that's Navigate's deployment platform name, separate from the marketing brand.

The front door is Cloudflare-bot-protected, so I can't audit the actual login page visuals. But the *brand architecture* is the finding: **Navigate's product runs under the "LiveHealthy Ignite" brand in deployments.** That mirrors MHC's SDK-and-partner-branding model, where the MHC product ships inside Alight or WTW-branded experiences. Both companies operate a dual-brand architecture: a sales brand (Navigate, MHC) and a deployed brand (LiveHealthy Ignite / partner brand).

**For MHC:** this is a confirmation, not a revelation. The dual-brand pattern is not unique to you; it's how B2B2C wellbeing products are delivered. What differs is how visibly the sales brand gets credit in the deployment. MHC's SDK strategy means the partner brand dominates entirely. Navigate runs a hybrid — their brand shows up enough that "LiveHealthy Ignite" still reads as a Navigate product if you squint. Question worth raising internally at MHC: is full invisibility (SDK only) the right long-term positioning, or should the MHC brand get more surface area in partner deployments over time?

### 7.6 How this changes the original audit

The core conclusions stand, with three updates:

**Stands:** (1) The IA taxonomy problem on the marketing site. (2) The broken "Take a tour" footer link. (3) The visual-craft strengths.

**Updated — and sharper than before:**
- *Original finding:* "The marketing site doesn't show the product." *New finding:* The marketing site and the App Store show *different products*. The marketing site sells clinical DTx; the App Store sells fitness-tracker + challenges + gym check-in. That's not just missing UI — it's brand incoherence.
- *Original finding:* "The AI Assistant page tells you but doesn't show you." *New finding:* Navigate has built zero member-facing video content. There's no walkthrough asset anywhere. The absence is architectural, not tactical.
- *Original finding:* "Member product UX is unknowable from the outside." *Updated:* Partially knowable via the App Store + 2019 training PDF. Member UX = engagement-software class, competent but not clinical; 4.7★ satisfaction; bimodal web-plus-app architecture; device integration has historically been weak for Apple Watch and Samsung.

### 7.7 One additional insight for MHC

Add to the three insights in §6:

**4. The marketing-to-product coherence test.**
If a buyer signs with Navigate Well based on the marketing site's promise of "pharmacist-led coaching" and "clinical wellbeing," then asks their employees to download the app, what their employees see is a challenges-and-activity tracker. That's a reputational risk for Navigate. MHC should audit its own surfaces the same way: **does the story MHC tells employer buyers hold up when a member opens the app?** Partner-distributed SDK deployment makes this especially important — the buyer's expectation and the member's experience are mediated by at least two brands and three surfaces. The coherence audit is: a buyer reads an MHC pitch deck, then hands their employees an Alight-branded app that embeds an MHC DCP. Does the experience match what was sold?
