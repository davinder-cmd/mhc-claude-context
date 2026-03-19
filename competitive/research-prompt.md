# Competitive AI Feature Research — Prompt

## About MHC (context for research)

**Mobile Health Consumer (MHC)** is a B2B2C employee wellbeing platform.
Employers buy it; their employees (members) use it.

**Core product areas:**
- **Digital Care Paths (DCPs):** multi-week, condition-specific programs covering MSK
  (back/neck/knee/hip/shoulder pain), behavioral health (anxiety, depression, insomnia),
  diabetes, pregnancy, heart health, and weight health
- **Fitness challenges:** team step challenges with a social feed
- **Wearable tracking:** steps, sleep, active minutes
- **Rewards:** members earn gift cards for completing health activities
- **SDK distribution:** MHC experiences (including DCP) are embedded in partner apps
  (e.g. Alight, a benefits administration platform)

**AI features currently in development:**
1. **Health Insights** — each morning, a personalized summary of wearable data:
   one takeaway + one recommended action
2. **Challenge AI Coach** — AI participant in team challenge social feeds;
   posts data-driven encouragement and celebration
3. **DCP AI Coach** — 24/7 conversational coaching embedded within DCPs;
   uses motivational interviewing methodology; RAG against evidence-based sources
   (CDC, clinical best practices); domain-specific agents per condition;
   crisis routing to vetted scripts; user context (demographics, program progress, locale)

**MHC's differentiators (as we describe them):**
- Grounded in authoritative sources (not generic internet scraping)
- Motivational Interviewing methodology
- Domain-specialized agents (not a single generalist model)
- User context integration (age, sex, program progress, locale)
- Crisis routing (bypasses LLM entirely for safety scenarios)
- SMS-style, bite-sized responses — not information overload

---

## Research task

For each competitor provided, research their AI-powered product features.

### For each AI feature found, provide four sections:

#### 1. Marketing view
- What does the company claim about this feature?
- Quote or closely paraphrase their marketing language
- Note: treat this as puffery — it is often exaggerated or vague

#### 2. Literal / mundane view
Answer these concretely, setting aside marketing language:
- What does the **user** actually do? (tap, type, read, speak, nothing?)
- What does the **system** actually do? (retrieve, generate, classify, score, recommend?)
- What **data** does it use? (wearable, self-reported, claims, historical, real-time?)
- Where does it **appear** in the product? (chat interface, feed, dashboard, notification, email?)
- Is it **reactive** (user initiates) or **proactive** (system initiates)?
- What **condition or use case** does it address?

#### 3. Press & user sentiment
Search for independent reviews, press coverage, app store ratings, Reddit threads, and analyst commentary. Capture both praise and criticism — the goal is to understand the gap between the marketing claim and the experienced reality.
- What are reviewers and users saying?
- What are the most common complaints (e.g., generic output, glitchy, not useful, privacy concerns)?
- What are the most common praises?
- Overall sentiment: **Positive / Mixed / Negative / Insufficient data**
- Link to the most useful review sources

#### 4. Relevance to MHC
- How does this compare to what MHC is building?
- Is this competitor ahead, behind, or doing something different?
- Is there anything worth noting as inspiration or as a threat?
- Does the press/user sentiment reveal any unmet needs or failure modes MHC should avoid or exploit?

---

## Output instructions

### Per-competitor profile file
Save to `competitor-research/profiles/[competitor-slug].md`

Use this structure:

```
# [Competitor Name] — AI Features
_Last updated: YYYY-MM-DD_

## Current State
[Bulleted list summarizing all known AI features as of the latest research run.
Use one bullet per feature or key fact. Bold the feature name. Keep each bullet to one line where possible.
Overwrite this section each run.]

---

## Sources
[Bulleted list of markdown hyperlinks to the most useful primary sources for this competitor:
product pages, press releases, demo videos, teardown articles, marketing materials, earnings call transcripts.
Include enough links that a reader can click through to see both the marketing puffery AND the mundane reality.
Prefer: official product pages, BusinessWire/PR Newswire releases, Fierce Healthcare / STAT / MedCity coverage,
YouTube demo videos or conference walkthroughs, S-1 filings if public, G2/Capterra reviews if available.
Overwrite this section each run with the freshest links.]

---

## History

### YYYY-MM-DD
[Full research output for this run, using the three-section format above.
If updating an existing file, note what changed vs. prior run.]
```

### Source quality guidance
When researching, prioritize sources in this order:
1. **Official product/feature pages** — captures marketing claims verbatim
2. **Press releases** (BusinessWire, PR Newswire, GlobeNewswire) — dated, quotable
3. **Demo videos or conference talks** (YouTube, HLTH, HR Tech) — shows actual UX; link directly
4. **Analyst/trade coverage** (Fierce Healthcare, STAT News, MedCity, HIT Consultant) — often more literal than marketing
5. **Earnings call transcripts** — executives describe features with more precision than marketing copy
6. **S-1/IPO filings** — most candid description of what a product actually does (required by SEC)
7. **G2 / Capterra / app store reviews** — user perspectives on what the product actually does

### Aggregate summary CSV
Update `competitor-research/_ai-features-summary.csv` after each run.
Columns: `competitor, category, priority, feature_name, marketing_claim_summary,
literal_description, press_sentiment, relevance_to_mhc, last_updated`
One row per feature (a competitor may have multiple rows).
`press_sentiment` should be a brief phrase: e.g. "Positive — strong user ratings", "Mixed — praised for UX; criticized for generic output", "Negative — panned by press as vaporware", or "Insufficient data".

### Key takeaways file
After each run, prepend a new dated entry to `competitor-research/_key-takeaways.md`.
Each entry should include:
1. **Threat landscape table** — rate each competitor's threat level to MHC and explain why (one row per competitor)
2. **What the press sentiment reveals** — 4–6 numbered insights drawn from the sentiment findings across this run; focus on patterns that inform MHC product decisions
3. **Capability gaps MHC should watch** — specific AI capabilities competitors have that MHC lacks
4. **What MHC can credibly claim** — areas where the market is underdelivering that MHC's design addresses

Keep entries factual and product-focused. This file accumulates over time — do not overwrite prior entries.

---

## Competitors master list
See `competitor-research/_competitors-list.csv` for the full list with
category and priority. Ask the user which to focus on before starting.

## Suggested default scope
If the user says "run core" — research these:
- Personify Health (direct / primary)
- Evive (direct / primary)
- Sharecare (direct / primary)
- Thrive Global (direct / primary)
- Grokker AI (direct / primary)
- Hinge Health (dtx / secondary)
- Sword Health (dtx / secondary)
- Headspace Health (dtx / secondary)
- Oura (consumer / primary)
- Fitbit (consumer / primary)
- Apple Health (consumer / primary)
- Google Fit (consumer / primary)
- ChatGPT Health (foundation-model / primary)
- Claude Health (foundation-model / primary)
