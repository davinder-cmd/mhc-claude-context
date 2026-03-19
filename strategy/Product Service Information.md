# Product & Service Information

> This file gives all agents the foundational knowledge they need about what we build, how it works, and the constraints we operate within. Reference this before making any design, system, or handoff decision.

---

## Product Overview

- **Product name:** Mobile Health Consumer (MHC)
- **What it does:** A B2B2C employee wellbeing platform. Employers buy it; their employees (members) use it. MHC helps working adults prevent and manage chronic health conditions through structured digital care programs, wearable tracking, team challenges, and incentive-based rewards — all accessible on mobile, at no cost to the member.
- **Stage:** Growth-stage, established player with partner distribution at scale
- **Platform(s):** iOS, Android, Web; also distributed via SDK embedded in partner apps
- **Business model:** B2B2C — sold to self-insured employers and distributed through channel partners (Alight, Elevance, Lockton, WTW, Aon)

---

## Core Features

1. **Digital Care Paths (DCPs)** — Multi-week, condition-specific programs covering MSK (back/neck/knee/hip/shoulder pain), behavioral health (anxiety, depression, insomnia), diabetes (prevention + management), pregnancy, heart health, weight health, and GLP-1 support
2. **Fitness Challenges** — Team step challenges with a social feed; drives broad participation and community engagement
3. **Wearable Tracking** — Steps, sleep, active minutes synced from any device via HealthKit / Health Connect (device-agnostic)
4. **Rewards** — Members earn gift cards ($100/program) for completing health activities; a primary enrollment and completion driver
5. **SDK / White-label Distribution** — MHC experiences (including DCPs) are embedded in third-party partner apps; unique capability in the market
6. **Health Risk Assessment** — Personalized risk assessment at onboarding; informs program recommendations

---

## AI Features — Current State

MHC is building AI at three touchpoints. These are in active development as of early 2026.

### 1. A.I. Health Insights
- **What it does:** Each morning, delivers a personalized summary of the member's wearable data — one key takeaway + one recommended action
- **Tagline:** "Your AI reviews your wearable data and shows you what matters."
- **Design constraint:** One takeaway + one action only. Not a data dump. Motivates without overwhelming.
- **Data used:** Sleep, steps, active minutes from connected wearable

### 2. Fitness Challenge A.I. Motivator Coach
- **What it does:** An AI participant in team challenge social feeds; posts data-driven encouragement, celebrates progress, responds to team members
- **Tagline:** "The coach that keeps your whole team engaged and competing."
- **Design constraint:** Feels like a supportive teammate, not a bot. Human in tone, data-informed in content.

### 3. DCP A.I. Expert
- **What it does:** 24/7 conversational coaching embedded within Digital Care Paths; condition-specific expert that answers health questions grounded in authoritative sources
- **Tagline:** "Expert guidance, any time. Text your health questions just as you'd text an expert."
- **Design constraint:** SMS-style, bite-sized responses. Not information overload.

---

## AI Architecture — Technical Foundation

> Agents should understand this to avoid designing features that contradict our technical approach or overstate current capabilities.

### What makes our AI different from generic chatbots

| Dimension | Generic Chatbots | Mobile Health AI |
|-----------|-----------------|-----------------|
| Personalization | Generic tips | Context-aware, user-specific |
| Content quality | Internet scraping | Authoritative, evidence-based sources (CDC, clinical best practices) |
| Health data integration | None | Wearables |
| Response style | Long-form dumps | SMS-style, bite-sized |
| Safety protocols | Generic filters | Crisis routing to vetted scripts |
| Behavior science | None | Motivational Interviewing (MI) |
| Domain expertise | Generalist | Specialized agents by condition |
| Goal | General information | Measurable health improvement (lower pain, better sleep, fewer symptoms) |

### Technical architecture layers (DCP AI Expert)

1. **RAG (Retrieval-Augmented Generation)** — Responses grounded in authoritative, evidence-based sources including CDC and clinical best practices; not internet training data
2. **Query Rewrite Agent** — Reformulates member questions into search-optimized queries before retrieval; improves relevance
3. **User Context Integration** — AI knows: demographics (age, sex at birth), program progress (completed lessons), locale (adjusts crisis resources and language)
4. **Domain-Specialized Agents** — Separate coaching agents for MSK, pregnancy, behavioral health, and general health; each with its own knowledge base and instructions
5. **Hallucination Prevention** — Agents explicitly instructed to acknowledge limitations transparently rather than fabricate answers
6. **Crisis Routing** — A Router Agent detects crisis topics (self-harm, suicide, abuse, eating disorders, psychosis) and routes to deterministic, vetted scripts — bypassing the LLM entirely for high-stakes safety scenarios
7. **Motivational Interviewing (MI) Grounding** — All responses shaped by MI methodology; evidence-based behavior change science applied systematically

### How to describe our AI architecture (approved framing)

**Do say:** "We built our AI on enterprise-grade foundation models — the same underlying technology as leading consumer AI — but with proprietary intelligence layers that make it health-specific and context-aware."

**Don't say:** "It's basically ChatGPT" or "We use ChatGPT" — this sounds like we embedded a consumer chatbot, not built a health system.

**The analogy:** "It's like the difference between saying 'we use Salesforce.com' versus 'we built our CRM on the Salesforce platform.'"

---

## AI Architecture — Honest Current Limitations

> For internal use only. Agents must understand what the system does NOT yet do to avoid designing features we can't support.

The current AI system does **not** yet have:
- **Cross-session memory** — agents don't remember prior conversations with the same user across sessions
- **Proactive initiation** — agents don't reach out to users autonomously; they respond to user messages
- **Cross-program intelligence** — if a user is in both diabetes and insomnia DCPs, the agents don't connect the dots between programs
- **Closed-loop outcome tracking** — agents don't monitor assessment scores over time and autonomously adjust their approach
- **Feedback loops** — the pipeline is largely linear; agents don't self-evaluate output and retry
- Which DCP coach to use is determined by the UI, not by the agents themselves

---

## Roadmap & Design Considerations

### Cross-session memory (planned)

We intend to add persistent memory across chat sessions. This is a high-stakes UX design challenge because our users share sensitive health information — sleep problems, mental health, lifestyle struggles. Done well, memory makes the AI feel genuinely supportive. Done carelessly, it feels like surveillance.

**Key design pitfalls to navigate:**
- **Over-rotation** — referencing past data too often makes the AI feel like it's watching, not helping
- **Transparency** — users need to know what's stored, especially for sensitive disclosures (mental health, bereavement, behavioral patterns)
- **User control** — ability to view, edit, and delete memories is expected and builds trust
- **Sensitive memory categories need special treatment:** mental health signals, life events, behavioral patterns — store summarized and abstract, not verbatim
- **Consent** — users should know memory is happening before it does, with easy opt-out
- **Staleness** — memories become outdated; prompt users periodically ("Is this still accurate?")
- **Cross-bot memory** — if memory is shared across condition-specific agents, users need to know and have control over that; a user may have told one agent something they didn't intend the other to know

**Two types of data to keep clearly separated in UX:**
- *Conversational memory* — what the user has told the AI
- *Platform data* — what we already know from their profile (HRA, demographics)

Be transparent when the AI is drawing on platform data: "Based on your health assessment..." — never imply it was inferred from conversation. Do not open sessions with platform data in ways that feel like surveillance ("I see you're a 45-year-old woman who...").

---

## Tech Stack (Relevant to Design)

| Layer | Technology | Design Implications |
|-------|-----------|---------------------|
| Frontend | [e.g., React / React Native] | [e.g., Component-based — maps cleanly to our design system] |
| Design system | [e.g., Custom / MUI / Radix] | [e.g., Token-driven, all spacing uses 4px base grid] |
| Token pipeline | [e.g., Tokens Studio + Style Dictionary] | [e.g., JSON export to codebase on every design system update] |
| Accessibility | [e.g., Aria-compliant components] | [e.g., All interactive components must pass automated a11y tests] |

---

## Design System

- **Design system name / location:** [Figma link or name]
- **Component library status:** [e.g., Mature / In progress / Partially documented]
- **Token structure:** [e.g., Primitive → Semantic → Component tokens]
- **Key constraints:**
  - [e.g., No new one-off components without a system contribution plan]
  - [e.g., All colors must use semantic tokens, never hardcoded hex values]
  - [e.g., Typography scale is fixed — do not introduce new type sizes]

---

## Current Roadmap Priorities

[High-level current focus areas. Agents use this to understand what's active and avoid designing outside current scope.]

- **Q[X] 20XX focus:** [e.g., Improving onboarding activation rate]
- **Active feature areas:** [List 2–4 areas currently in design or dev]
- **Off the table right now:** [What is explicitly not being worked on this cycle]

---

## Stakeholder Map

| Stakeholder | Role | Context & What to Know |
|-------------|------|------------------------|
| Darcy Loeb | Head of Product | Recently promoted. Highly organized, excellent communicator. Still defining what she cares about most in this role — treat with care, communicate clearly, avoid surprises. Cares deeply about the team staying together and the long-term success of the company. |
| Alex Young | VP of Product | Brought Davinder to MH; worked together at Jiff. Extremely sharp, well ahead of the team on AI and LLM tools. Calm and thoughtful. High bar for quality of thinking. Cares about keeping this team intact and the company's future — this is personal, not just professional. |
| Katlin Loeb | Product Content | Quiet, deep thinker. Don't underestimate the depth behind the silence. |
| Al Young | Contractor / Digital Care Initiative Lead | Former Head of Product, now contracting. Founding energy — keeps the team oriented and grounded. Honorary leader. Treat with the weight of a founder. The team's cohesion and the company's success matter to him deeply — he built this. |
| Isabel Martynenko | Visual Designer | Talented but under pressure — sales demos create constant urgency. Limited bandwidth for growth right now, but the goal is to help her evolve into a more senior product design role over time. |

---

## Known Constraints & Non-Negotiables

- [e.g., We cannot change the navigation structure without executive sign-off]
- [e.g., All new features must support both light and dark mode from day one]
- [e.g., Mobile-first — desktop is secondary unless otherwise specified]
- [e.g., Accessibility is non-negotiable, not a nice-to-have]

---

## Key Figma Files

| File | Purpose | Link |
|------|---------|------|
| Design System | Master component and token library | [Figma link] |
| [Feature area] | Current active designs | [Figma link] |
| Archive | Past design explorations for reference | [Figma link] |
