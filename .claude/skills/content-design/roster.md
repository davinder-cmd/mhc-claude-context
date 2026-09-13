# Content Design & UX Writing Experts — Reference

People who shaped how we think about product language — microcopy, error messages, empty states, and the words a product uses to talk to someone. Use these references when the question is *are these the right words*, not *is this the right layout* (see `visual-design-experts.md`) or *is this the right voice for stakeholders* (see `strategy/Brand Voice Guide - Product & Design.md` for internal, or `strategy/Brand Voice Guide - Stakeholder & Partner.md` for external — this doc is the craft underneath house style, not a replacement for it).

**Companion to:** `ux-usability-experts.md` (Jarrett's form/survey wording already lives there — this doc is the broader in-product-copy discipline around it). For actual member-facing copy, `strategy/Brand Voice Guide - Member-Facing.md` is the higher authority — this doc supplies craft and precedent, never overrides house style.

**Grounds an existing preference:** [[feedback_inproduct_copy_concision]] — lean microcopy, one message per card, cut tails that restate the headline. Every person in Tier 1 argues some version of the same thing from a different angle.

---

## Tier 1: Foundational Practitioners

*Defined content design as a discipline distinct from copywriting.*

### Kinneret Yifrah
**Known for:** *Microcopy: The Complete Guide*, UX writing as its own craft

**Why she matters:** Wrote the first comprehensive practical manual for microcopy specifically — buttons, error states, empty states, confirmations. Where a copywriter thinks in campaigns, she thinks in the smallest unit of product text and the exact moment a user reads it. Directly useful for the day-to-day of writing a card, a toast, an error.

**Best content:** *Microcopy: The Complete Guide* (book) — start here for anything button/error/empty-state level

**What to learn:** Microcopy as a discrete craft, writing for the exact moment of use, error-message structure

---

### Torrey Podmajersky
**Known for:** *Strategic Writing for UX*, content design at Google/Microsoft, content-design team structure

**Why she matters:** The bridge from individual microcopy to a *system* of content design — voice, tone, and terminology applied consistently across an entire product, not just polished line by line. Her strategic layer (define voice once, apply tone contextually) is the right model for a solo practice: you don't have a content design team to enforce consistency, so the system has to do it.

**Best content:** *Strategic Writing for UX* (book) — voice vs. tone framework, content strategy at product scale

**What to learn:** Voice (constant) vs. tone (contextual) as separate variables, content style guides that scale without a dedicated team

---

### Nicole Fenton & Kate Kiefer Lee
**Known for:** *Nicely Said*, content strategy at Mailchimp, plain-language product writing

**Why they matter:** Mailchimp's voice-and-tone guide (built under Kiefer Lee) is one of the most-cited examples of a small, humane, consistent product voice — proof that a distinctive voice and genuine plainness aren't in tension. Directly relevant to a health product where warmth and clarity both matter and neither can come at the other's expense.

**Best content:** *Nicely Said* (book) — practical plain-language writing · Mailchimp's public voice-and-tone guide (still referenced industry-wide)

**What to learn:** Plain language without losing personality, voice-and-tone documentation as a lightweight artifact, writing that respects the reader's time

---

## Tier 2: Systems & Error-State Craft

*People whose specific domain — content systems, error handling — maps directly onto recurring MHC problems.*

### Sarah Winters
**Known for:** GOV.UK content design, *Content Design* (book), plain-English government writing at massive scale

**Why she matters:** GOV.UK is the most-studied example of content design solving comprehension at scale for a genuinely diverse, low-trust, high-stakes-context audience — closer to MHC's ICP (broad demographics, health context, real consequences for confusion) than most startup UX-writing case studies.

**Best content:** *Content Design* (book) · GOV.UK content design guidance (public, exhaustive)

**What to learn:** Plain-English at scale, content design for high-stakes/low-trust contexts, user-needs-first content structure

---

### Erika Hall — *content angle*
**Known for:** *Conversational Design* (already referenced for research in `ux-usability-experts.md` — different book, same person)

**Why she matters here:** *Conversational Design* treats every UI as a conversation with implicit turn-taking rules, even when there's no chat interface. Useful lens for error states, confirmations, and multi-step flows — is the product "listening" and responding, or just displaying?

**Best content:** *Conversational Design* (book)

**What to learn:** Conversational structure applied to non-conversational UI, implicit dialogue in forms and flows

---

## Frameworks Quick Reference

### Voice vs. Tone (Podmajersky)
**Voice** is constant — who the product *is*, defined once. **Tone** is contextual — how that voice shows up differently in a success state versus an error versus a clinical disclosure. Most inconsistency problems are actually tone problems mistaken for voice problems.

### The microcopy moment (Yifrah)
Before writing a line, name the exact moment the user reads it and the one thing they need to know *right then*. A button label answers "what happens if I press this," not "what is this feature called."

### Plain language at stakes (Winters / GOV.UK)
If a user could misread this and it costs them something (a missed step, a wrong assumption about a clinical result), the plain-language bar is non-negotiable — clever or on-brand loses to unambiguous.

---

## How to Use This Reference

### When writing a card, button, error, or empty state:
1. Yifrah — what's the exact moment, what's the one thing they need to know
2. Check tone against Podmajersky's voice/tone split — is this the right *context*, not just the right *voice*
3. Apply [[feedback_inproduct_copy_concision]] — one message, cut the restating tail

### When something needs to be unambiguous, not just on-brand (clinical disclosures, lab-value context, DCP instructions):
1. Winters — plain-language-at-stakes bar
2. Verify against MHC's own `strategy/Brand Voice Guide - Member-Facing.md` — house style is the final authority here, this doc is precedent only

### When building or auditing a content style guide:
1. Fenton & Kiefer Lee — *Nicely Said* / Mailchimp model for a lightweight, humane voice doc
2. Podmajersky — the voice/tone system underneath it

### When a flow feels transactional instead of responsive:
1. Hall's *Conversational Design* lens — is the product acknowledging what the user just did, or just moving to the next screen

---

## Revision Log

| Date | Change |
|------|--------|
| 2026-09-04 | Initial version — microcopy craft, voice/tone systems, plain-language-at-stakes; grounds [[feedback_inproduct_copy_concision]] and defers to MHC's own brand voice guides as final authority. |
