# DCP AI Assistant — PRD (Revised)

* **Version:** 2026-06-04 (streamlined rewrite)  
* **Author:** Alex Young  
* **Status:** v1 in QA · target launch June 30, 2026 (Allstate)  
* **Audience:** QA, and anyone who needs the current, accurate v1 scope in one place  
* **Supersedes:** the original full PRD, preserved unchanged as [Appendix A](https://file+.vscode-resource.vscode-cdn.net/Users/alexyoung/PROJECTS/ay-working-set/dcp-working-files/dcp%20-%20prd%20related/2026-06-04-prd-dcp-bot.md#appendix-a--original-prd-full-snapshot)

**How to read this doc.** This is the lean, current source of truth for what v1 ships and what QA should verify. It deliberately does **not** duplicate the engineering/configuration detail in Jill's documentation — that is the authoritative reference for the data model, agent pipeline, and config objects (see [Reference Links](https://file+.vscode-resource.vscode-cdn.net/Users/alexyoung/PROJECTS/ay-working-set/dcp-working-files/dcp%20-%20prd%20related/2026-06-04-prd-dcp-bot.md#reference-links)). Where this PRD and the original PRD or older notes conflict, **this doc and Jill's docs win** — the original PRD is older and was written before any AI work had been built.

---

## Change Log

| Version | Date | Changes | Markdown source |
| :---- | :---- | :---- | :---- |
| 1.0 (Streamlined rewrite) | 2026-06-04 | Streamlined rewrite for QA. Cut pre-build primer/foundational material, core-experience narrative, and sales/marketing framing. Added current v1 scope: functional requirements, new disclaimer verbiage, quota values \+ user-facing messages, models, points of configurability, evals, analytics. Original full PRD preserved unchanged as [Appendix A](https://file+.vscode-resource.vscode-cdn.net/Users/alexyoung/PROJECTS/ay-working-set/dcp-working-files/dcp%20-%20prd%20related/2026-06-04-prd-dcp-bot.md#appendix-a--original-prd-full-snapshot). | [(GDrive link)](https://drive.google.com/file/d/1_EXwTD8udGXAfIV6X7WkENLD0beBNWYW/view?usp=drive_link) |

---

## Feature Overview

The DCP AI Assistant is a user-triggered chatbot embedded inside Digital Care Programs (DCPs). While working through a DCP, the user taps a chat button on the step detail view; a chat opens and the bot greets them. The user can then text health questions about that DCP topic "like you'd text an expert," and the bot replies in short, SMS-style messages.

The bot delivers **motivational-interviewing-style coaching** and **evidence-based informational guidance**, grounded in MH SME-vetted DCP content plus clinical sources via **RAG (Retrieval-Augmented Generation)**, and safely handles sensitive health topics. Behind a single user message is a **multi-agent pipeline** (partner filter → router → safety / refusal / query-rewrite \+ KB lookup → topic coach → post \+ log).

Interaction model: **multi-turn, conversational, real-time (synchronous).** It is distinct from the other two AI features (Tracker Insights and Challenge Bot), which are scheduled/event-driven, but it shares the same infrastructure, config program, quota enforcement, and logging.

---

## Goals

* **Engaging, genuinely useful coaching.** A real back-and-forth (MI-style) that helps the user take one concrete, evidence-based next step — not a tip dispenser, not a cheerleader.  
* **Grounded and accurate.** Substance comes from the topic's vetted knowledge base via RAG; the bot doesn't invent studies, stats, or clinical history.  
* **Safe by design.** Crisis topics route to a dedicated safety path with vetted resources; jailbreak / prompt-extraction attempts are refused.  
* **Trustworthy and observable.** Every agent hop is logged; user feedback is captured; quality is reviewable against the prompt version that produced it.  
* **Cost-predictable.** Per-client and per-user token quotas cap spend; the feature degrades gracefully (friendly message \+ disabled input) rather than erroring when a limit is hit.  
* **Configurable per client/topic.** Clients and partners can tune the things that should vary (enablement, quotas, bot identity, copy, disclaimer page) without code changes.

---

## Reference Links

| Resource | Where |
| :---- | :---- |
| **AI Config Primer** (shared infra, data model, config program, logging) | MHC AI Configuration Primer [(Confluence link)](https://mobilehealthc.atlassian.net/wiki/spaces/PK/pages/1338605581/MHC+AI+Configuration+Primer) |
| **DCP AI Assistant — Overview & Deployment Guide** (pipeline, agents, config, logging, error handling, Alight filter) | DCP AI Assistant — Overview and Deployment Guide [(Confluence link)](https://mobilehealthc.atlassian.net/wiki/spaces/PK/pages/1352564738/DCP+AI+Assistant+Overview+and+Deployment+Guide) |
| **Design spec** | • Button Placement for DCP [(Figma link)](https://www.figma.com/design/GGC69Go1S6bT7fX4jCQsYI/Button-Placement-for-DCP?node-id=1-1431&t=VNcS7h9sWsbwfpPN-0) • Health Advisor AI [(Figma link)](https://www.figma.com/design/B8embvpTCPLzycQyexI4qK/Health-Advisor-AI?node-id=144-2328&p=f&t=ieQuRBUOtsTft7Uz-0) |
| **Tech spec** | Tech spec [(Google Doc link)](https://docs.google.com/document/d/1h4rNuhyb-9xK_ZpruUxY6fhUMgvDGr6NfrhQo7GVzOw/edit?tab=t.0) |
| **Prompts** (per-agent system/developer/user prompts) | DCP prompts folder [(GDrive link)](https://drive.google.com/drive/folders/1a_swssQn7SFV_JlYKisBlThEsjQXJ8EG) |
| **Generation parameters** (model/temperature per agent) | Generation parameters [(Google Sheet link)](https://docs.google.com/spreadsheets/d/1mYaj7CW7ZGLa5ZrD73zMwr2Sm3_VVFb9FpWuXs9lqzg/edit?usp=drive_link) |
| **Workflow diagram** | • Diagram in PNG [(GDrive link)](https://drive.google.com/file/d/11zRGsx9Upaye9mKp9f8uL0oE0EEw3yfe/view?usp=drive_link) • Diagram in markdown [(GDrive link)](https://drive.google.com/file/d/14GUMNM598Gz8fOdbaUQ2w1J9Utelk-9m/view?usp=drive_link) |

Note: Jill's two Confluence documents capture the configuration details. This PRD points to them rather than restating them.

---

## Workflow Pipeline

Quota and maxTurns pre-flight checks run **before** any AI call (see [Rate Limits & Quotas](https://file+.vscode-resource.vscode-cdn.net/Users/alexyoung/PROJECTS/ay-working-set/dcp-working-files/dcp%20-%20prd%20related/2026-06-04-prd-dcp-bot.md#rate-limits--quotas)). On a normal turn the pipeline is: *(optional Alight filter) → Router → Query Rewrite → Knowledge Base lookup → topic Coach → post response \+ log.* Safety and refusal are alternate router branches that skip the KB/coach path.

See the workflow diagram (PNG and markdown / mermaid) linked in [Reference Links](https://file+.vscode-resource.vscode-cdn.net/Users/alexyoung/PROJECTS/ay-working-set/dcp-working-files/dcp%20-%20prd%20related/2026-06-04-prd-dcp-bot.md#reference-links) above.

Full agent-by-agent task handlers, action chains, event payloads, and logging fields are in the DCP AI Assistant — Overview and Deployment Guide [(Confluence link)](https://mobilehealthc.atlassian.net/wiki/spaces/PK/pages/1352564738/DCP+AI+Assistant+Overview+and+Deployment+Guide).

---

## Topics Included in v1

v1 launches across **15 DCP topics**:

| Clinical area | Topics | Coach variant |
| :---- | :---- | :---- |
| Behavioral Health | Anxiety · Depression · Insomnia | DCP\_COACH\_AGENT |
| Cardiometabolic | Blood Pressure · Diabetes Prevention · Continuing Diabetes Prevention · Diabetes Management | DCP\_COACH\_AGENT |
| Weight | Weight Loss · Weight Management | DCP\_COACH\_AGENT |
| Musculoskeletal (MSK) | Lower Back · Neck · Knee · Hip · Shoulder | DCP\_COACH\_AGENT\_\_MSK |
| Family Forming | Pregnancy | DCP\_COACH\_AGENT\_\_PREGNANCY |

Each topic has its own knowledge base. The coach agent is one of three variants (general / MSK / pregnancy); the variant is fixed per topic and must not be changed in client config. Alcohol Use is the first H2 expansion topic (not in v1).

---

## Functional Requirements

### Chat UI & Response Behavior

* **SMS-style, multi-bubble responses.** The coach splits each reply into **1–3 short messages** at natural conversational pauses (single bubble allowed for very short replies). Total budget **≤150 tokens** across all bubbles combined. Bubbles render as separate chat bubbles via structured output.  
* **Typing indicator.** An animated "is typing" indicator shows **before the first bubble and between bubbles** of a multi-bubble response. The full bubble appears at once when ready — responses are **not** token-streamed.  
* **Feedback control.** User can mark a response helpful/unhelpful (thumbs up/down). Captured to aiSessionTurn.userFeedback.  
* **Input character limit.** Default **2,000 characters**; **configurable** per client.  
* **Exit.** User can close the chat and return to where they were in the DCP program.  
* **Bot greeting.** On chat open, the bot posts a topic-specific welcome message, e.g. *"Hi\! I'm here to support you with pregnancy care. What's on your mind today?"* Configurable per client/topic.

### Accessibility

* The chat UI shall be **WCAG 2.1 Level AA** compliant.

### Disclaimers

**1\. Footer (chrome, below the input field) — always visible:**

AI guidance · May be inaccurate · Not medical advice · **Privacy & Terms**

The only active link is **Privacy & Terms**, which opens a detail page in a modal sheet. After closing the modal, the user returns to where they were in the conversation.

**2\. Privacy & Terms page — default content:**

**Privacy & Terms**

This AI health assistant provides information and education to support your health.

**Not a substitute for medical care.** The AI assistant is not a doctor and can make mistakes. Responses are for informational and educational purposes only and are not intended to diagnose, treat, cure, or prevent any disease or health condition. Always consult a qualified healthcare provider for medical advice, diagnosis, or treatment, and before making any healthcare decisions.

**In an emergency, get help right away.** Do not use this assistant for medical emergencies or urgent mental health concerns. In the US, call 911 or 988 for mental health support. Outside the US, call your local emergency or crisis support number.

**Improving your experience.** Chat history may be reviewed or used to improve our services. Share what's helpful for your health questions, and skip details you'd rather keep private. We handle the information you choose to share in accordance with our Privacy Policy.

For more information about data use and your data rights, see our Privacy Policy and Terms of Use.

\[Privacy Policy \>\]  
\[Terms of Use \>\]

* The page content and the **Privacy Policy / Terms of Use links are configurable per client/partner** (policies vary by partner — e.g. Alight Well, BCBSLA, bswift Elevate). The disclaimer page content is translated \[this is still TBD\]; the linked legal docs are **not** translated in this phase.

### Feature On/Off

* **Two-level client enable**, both required before any AI call: master CCF.AI Enabled **and** CCF.DTx AI Enabled (a.k.a. DCP AI Chat Enabled).  
* **Per-topic toggle:** each DCP topic's S0\#M0 ai.dcpAiEnabled flag enables/disables the assistant for that topic.  
  * We anticipate that, in general, clients who take DCP will take all available topics. It is conceivable, however, that a client with our DCPs might turn off the MSK topics if they already have Hinge Health.  
* The chat button is shown only when the feature is enabled for the client **and** the user's daily quota and the client quota are not exceeded.

### Conversational Memory

* **Within-session memory (v1):** as a given conversation progresses, the bot remembers what was previously discussed in the conversation. Implemented by reading the chat channel's post history (user \+ assistant turns, oldest first) and passing it to the coach each turn. Scoped to the current session only.  
* **Cross-session durable memory is a future enhancement** (v2) — the bot does not remember prior sessions in v1.

### Knowledge Retrieval (RAG)

* For substantive questions, the bot retrieves relevant content from the **topic's vetted knowledge base** before answering. The user's rewritten query is 'embedded' and matched by cosine similarity against the topic KB; top results (default 3\) are passed to the coach.  
* The coach grounds its answer in those results and **does not invent** studies, stats, or clinical history. If the KB has nothing relevant, the bot says so plainly rather than fabricating.

### Safety Topics

* The router detects clinical-risk signals and routes to the **Safety Agent**, which responds with vetted, human-authored scripts and crisis resources (it does not free-form clinical advice). Covered domains: **self-harm / suicidal ideation, eating-disorder behaviors, acute psychosis / mania, substance-use crisis / overdose, domestic violence / feeling unsafe.** If multiple risks appear, the highest-priority script is used (self-harm first).  
* Scripts include US resources (e.g., 911; 988 Suicide & Crisis Lifeline; SAMHSA 1-800-662-HELP; NEDA 800-931-2237; National DV Hotline 1-800-799-7233 / text START to 88788\) and fall back to generic "local emergency number / crisis helpline in your area" phrasing for non-US locales. Each response invites the user to keep talking.

### Jailbreak & Prompt-Extraction Prevention

* The router detects attempts to **reveal/override system instructions** or **obtain disallowed content** and routes to the **Refusal Agent**, which gives a brief apology \+ refusal, never reveals or discusses prompts/policies, and steers back to the DCP topic.

### Data the Bot Uses (per turn)

| Data | General coach | MSK coach | Pregnancy coach |
| :---- | :---- | :---- | :---- |
| DCP topic (subdomain) | ✅ | ✅ | ✅ |
| User locale (language) | ✅ | ✅ | ✅ |
| User sex (at birth) | ✅ | ✅ | ✅ |
| User age | ✅ | ✅ | ✅ |
| RAG knowledge-base results | ✅ | ✅ | ✅ |
| Conversation memory (this session) | ✅ | ✅ | ✅ |
| Tracker data (sleep, active minutes, steps) | ✅ | — | — |
| Furthest lesson reached | — | ✅ | — |
| Pregnancy data (currently pregnant, due date, first pregnancy, assessment date, current date) | — | — | ✅ |

### Global & Languages (v1)

* v1 supports **English, Spanish (Latin American), and French (Canadian)**. The bot replies in the user's locale with local number formatting, in the same warm voice. Safety and refusal scripts also localize (US-specific crisis resources generalize outside the US).

---

## Rate Limits & Quotas

Spend is capped by **token quotas**, not dollars. There are exactly **four quota knobs** (CCF, integer token values, in the *AI — Client Config Elements* program), plus a per-session maxTurns lever.

| CCF Formula | Scope | Window | Applies to |
| :---- | :---- | :---- | :---- |
| Monthly Input Token Quota — Overall | Client | Month | **All AI features combined** |
| Monthly Output Token Quota — Overall | Client | Month | All AI features combined |
| User Daily Input Token Quota — DCP Chat | Per user | Day | DCP Chat only |
| User Daily Output Token Quota — DCP Chat | Per user | Day | DCP Chat only |

**Pre-flight check order (before any AI call):** maxTurns reached → user daily quota → client monthly quota → proceed. Whichever cap is hit first blocks. Because DCP is heavily input-dominated (\~77:1), the **input** caps are the binding control in practice.

**maxTurns** is a separate, **per-session** lever set per topic (each topic's S0\#M0 ai.maxTurns), **set to 100** on every enabled topic. It resets when the user starts a new chat. It is not a daily lockout.

**Configured values (set in CCF):**

| CCF Formula | Production (Allstate) | Testing / QA client |
| :---- | :---- | :---- |
| Monthly Input Token Quota — Overall | 4,000,000,000 | 225,000,000 |
| Monthly Output Token Quota — Overall | 120,000,000 | 6,000,000 |
| User Daily Input Token Quota — DCP Chat | 2,000,000 | 7,000,000 |
| User Daily Output Token Quota — DCP Chat | 75,000 | 200,000 |

Setting UCF.QuotaExempt \[AI\] \= true on an account exempts it from **all** quota enforcement (per-user and client) — use it for general QA/internal accounts so testing isn't blocked. QA test clients also use the looser **Testing/QA** values above for the same reason. To test the quota behavior *itself*, use a **non-exempt** account on a test client and either lower the CCF values or drive enough usage to trip a cap.

**What the user sees (all are configurable formulas):**

| Trigger | Behavior | User-facing copy |
| :---- | :---- | :---- |
| Approaching daily cap (≤5 turns of budget left) | Heads-up; **chat continues** | "Quick heads up \- we can chat for a few more messages, then I'll need to wrap up for today. Feel free to keep working through your program, and I'll be here tomorrow\!" |
| User daily quota exceeded | Bot posts; **input disabled until tomorrow** | "You've reached today's chat limit. Great work investing in your health\! New chats open again tomorrow. Until then, keep progressing in your program — every step counts." |
| Client monthly quota exceeded | Bot posts; **input disabled** | "I'm offline for a bit — but great work investing in your health\! Keep progressing in your program; every step counts, and I'll be back before long." |
| maxTurns reached (per session) | Bot posts closing message; **input disabled for that session**; user can start a new session | "We've covered a lot in this chat — nice work. Whenever you'd like to keep going, just start a new conversation and we'll pick up from there." |

* **The "approaching limit" warning** fires at **≤5 turns of remaining budget**, estimated as int(remaining\_input\_tokens / 13000\) — i.e., it triggers at roughly **65,000 input tokens remaining**.  
* **Distinct copy matters:** the daily/client messages say "tomorrow"; the maxTurns message must **not** — a user can resume immediately by starting a new chat. The client-monthly message must not promise "tomorrow" (the cap is monthly).  
* The feature **degrades gracefully** — it posts a friendly message and disables input; it never errors out to the user.  
* Embeddings (KnowledgeQueryLookup) are **not** quota-tracked (negligible cost).

The quota values are sized off a small test sample. Plan to re-pull aiUsageClient / aiUsage (filtered by featureName) \~2 weeks into Allstate-live and resize if reality differs by \>2×. (Operational note, not a QA item.)

---

## LLM Service Interruptions & Error Handling

All AI API calls in the pipeline are wrapped with error detection. On any HTTP-level error (400/401/403/500/502/503) or API-level error, the bot posts a user-facing message, logs the failure to aiAuditLog (status: "failed", zero tokens), and stops the pipeline cleanly without firing later agents.

**User-facing message:**

"Heads up \- there's a temporary connection hiccup. Thanks for your patience. Please retry later today. Until then, keep progressing in your program – every step counts."

**Known gap (v1):** KnowledgeQueryLookup (embeddings) uses a separate action chain that does **not** yet have this error handling — if the embeddings call fails, no error message is posted to the user. *(Not a blocker for v1.)*

---

## Models

* As of 6/4/26, DCP Chat agents run on **gpt-4.1-mini** (all agents), with **temperature set per agent** (e.g., router/safety/refusal at 0, coach at 0.5). Authoritative per-agent parameters live in the **Generation Parameters** sheet.  
* Embeddings use text-embedding-3-small (1536 dims)  
* These are **cost-effective models chosen to fit what we charge.** Larger/smarter models are available but are more expensive and/or slower; for this product the smaller cost-effective models are the appropriate choice. Model/parameters are configurable if we later decide a topic warrants a different tier.  
* Prompt caching is used to reduce cost and latency.

---

## Points of Configurability in Admin

The **Level** column shows where each item is set in Admin: **Client** (*AI — Client Config Elements* program), **Topic** (a topic's S0\#M0 ai mapping), or **User**.

| Item | What it controls | Field / formula | Admin Config Level |
| :---- | :---- | :---- | :---- |
| **Enablement** | Turns the feature on at the client and per-topic levels | AI Enabled, DTx AI Enabled; ai.dcpAiEnabled | Client \+ Topic |
| **OpenAI API key** | Which OpenAI account the client's usage bills to — default is the MHC shared key; all production clients are **required** to use a client-specific key (in order to track spend) | API Key — DTx | Client |
| **Quotas** | The four monthly/daily token caps | see [Rate Limits table](https://file+.vscode-resource.vscode-cdn.net/Users/alexyoung/PROJECTS/ay-working-set/dcp-working-files/dcp%20-%20prd%20related/2026-06-04-prd-dcp-bot.md#rate-limits--quotas) | Client |
| **Quota exemption** | Exempts an account from all quota enforcement (QA/internal) | QuotaExempt \[AI\] | User |
| **maxTurns** | Per-session turn cap before the chat closes (set to 100\) | ai.maxTurns | Topic |
| **Bot identity** | Display name and avatar | ai.botName (default "✨ Health Advisor"), ai.botAvatarUrl | Topic |
| **Input placeholder & greeting** | Placeholder text and the topic-specific opening message | ai.inputPlaceholder, ai.botGreetingPost | Topic |
| **User-facing system messages** | Quota / maxTurns / error copy | formulas in DCP AI Chat \- System Messages | Client |
| **Disclaimer (Privacy & Terms) page** | Page content \+ Privacy Policy / Terms of Use links | TBD — not named in Jill's doc | Client |
| **Alight partner filter** | Enables the Alight redirect and sets the assistant's name — off by default; no effect on non-Alight clients | DCP Alight Filter Enabled, DCP Alight Assistant Name | Client (Alight only) |
| **RAG results limit** | How many KB chunks the coach receives (default 3; not recommended to change) | rag\_results\_limit | Topic |
| **Input character limit** | Max characters allowed in the input field (default 2,000) | TBD — not named in Jill's doc | Client |

**Looks configurable but isn't:** coachAgent (in each topic's ai mapping) sets *which* coach handles that topic — general, MSK, or pregnancy — and the pipeline reads it to route the turn to the right coach and knowledge base. It's pre-set correctly per topic and **must never be changed** in client config; changing it routes the topic to the wrong coach/KB and breaks that topic's chat.

---

## Evals

We maintain a set of **evals** used to test and iterate on the agent prompts — we change a prompt, run it against the eval set, and judge whether quality improved before shipping. The eval set will be expanded with real common questions once production usage accrues. *(Mentioned here for context; eval detail is out of scope for QA sign-off.)*

---

## Analytics

Analytics in v1 are **log-based** (no separate analytics product). The logging tables (see Jill's primer) let us analyze:

* **Volume & usage** — turns, sessions, tokens by client / user / topic / model (aiSession, aiUsage, aiUsageClient).  
* **Quality review** — sampled full request/response traces (aiAuditLog, 90-day retention) and a permanent human-readable record of every user-facing turn (aiSessionTurn, no purge).  
* **User feedback** — thumbs-up/down trends (aiSessionTurn.userFeedback).  
* **Prompt-version correlation** — every logged turn carries the promptVersion, so quality and feedback can be tied to specific prompt changes over time.  
* **Routing & safety behavior** — how often messages route to safety / refusal / Alight redirect (aiAuditLog).  
* **Errors** — failure rate and causes (status: "failed" in aiAuditLog).  
* **Cost** — per-agent and per-turn token counts for cost forensics.

Operational analytics come first; engagement/impact analytics follow.

---

## Security & Privacy

Included from the original PRD **verbatim**, pending Alex's edit. Carried forward as-is for completeness.

**Security**

* Security implications (including "10-SecurityRequirementsChecklist" and "10-SDLC-SecureCoding") have been considered for this feature and it is determined that we meet the standards.

---

## Appendix A — Original PRD (Full Snapshot)

The original, full PRD is preserved unchanged as the appendix — the complete snapshot as it stood on 2026-06-03:

* Original PRD — full snapshot (2026-06-03) [(Google Doc link)](https://docs.google.com/document/d/1M0fSGQB6DDFe20jHxPk1vJKERD4FzErKWEjjXEaaUvA/edit?tab=t.0)

It contains pre-build primer/foundational material (e.g., "How LLMs work"), core end-user-experience narrative, sales/marketing framing, and assorted open questions — much of it now stale. Where it conflicts with this streamlined PRD or Jill's documentation, **this doc and Jill's docs are authoritative.**

