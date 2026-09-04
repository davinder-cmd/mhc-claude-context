# Davinder Product Workflow

Personal operating system for product design work at Mobile Health Consumer.

---

## Tools Stack

| Tool | Purpose |
|------|---------|
| **Notion** | Personal work OS — Tasks, Initiatives, Inbox, Weekly Log databases |
| **Zapier** | Gmail → Notion Inbox, Slack → Notion Inbox automation |
| **Notion AI** | Auto-captures meeting notes into Inbox |
| **GitHub Actions** | Runs Monday morning summary script weekly |
| **Notion MCP** | Connected to Claude Code for reading tasks and meeting notes |
| **Figma** | Design exploration and production specs |
| **Claude Code** | AI-assisted design and development |
| **GitHub** | Version control, explorations, production specs |
| **Jira** | Engineering handoff and sprint tracking |
| **Confluence** | Publishing only (not working docs) |

**Retired:** Trello, Obsidian

---

## Daily Workflow

### Morning
1. Open Notion **Today** view
2. Triage **Inbox** — process items into Tasks or delete
3. Review what's due today and this sprint

### During the Day
- Label emails **Notion** in Gmail when action needed
- React to Slack messages with **📌** when action needed
- Meeting notes auto-capture via Notion AI into Inbox

### End of Day
- Move completed tasks to Done
- Note blockers on stuck items
- Quick scan of tomorrow's tasks

---

## Capture Rules

| Source | Action | Destination |
|--------|--------|-------------|
| Email needs action | Label **Notion** in Gmail | Zapier → Notion Inbox |
| Slack needs action | React with **📌** | Zapier → Notion Inbox |
| Meeting notes | Auto-captured | Notion AI → Inbox |
| Self-generated idea | Add directly | Notion Tasks (Someday) |

---

## Notion Views

| View | Filter | Grouping |
|------|--------|----------|
| **Today** | This sprint | Status |
| **Backlog** | All non-sprint | Triage |
| **By Domain** | All | Type |
| **Initiatives** | Active initiatives | Initiative |

---

## Artifact Rules

| Artifact Type | Location |
|---------------|----------|
| Explorations | `/explorations` in GitHub |
| Production specs | `/design/components` in GitHub |

**Linking rule:** Every significant artifact gets a link pasted into the relevant Notion Initiative card body.

---

## Monday Summary

Automated weekly summary via GitHub Actions:

1. **Trigger:** Every Monday at 8am Pacific
2. **Data pull:** Notion Tasks, Initiatives, Inbox (last 7 days)
3. **Generation:** Claude API generates summary
4. **Output:** Draft lands in Notion Weekly Log
5. **Review:** Edit draft, then send

---

## Design Execution Workflow

### Exploration Phase
1. Create exploration branch in GitHub
2. Work in Figma — low-fi concepts, variations
3. Use Claude Code for rapid prototyping and component generation
4. Save explorations to `/explorations` with date prefix
5. Link exploration to Initiative card in Notion

### Production Phase
1. Finalize design in Figma — high-fi, all states, specs
2. Generate component documentation via Claude Code
3. Save production specs to `/design/components`
4. Create Jira ticket for engineering handoff
5. Link Figma file and component spec in Jira ticket

### Handoff Process
1. Jira ticket includes:
   - Figma link (specific frame)
   - Component spec link (GitHub)
   - Acceptance criteria
   - Edge cases and error states
2. Walk through with engineer in refinement
3. Review PR against spec before merge
4. Update Initiative card with shipped status

### Figma Organization
- **Explorations:** Dated frames, loose organization
- **Production:** Component pages, proper naming, variants documented
- **Handoff:** Frame-level links, not file-level

---

## Weekly Rhythm

| Day | Focus |
|-----|-------|
| **Monday** | Review auto-generated summary, plan week, triage backlog |
| **Tuesday–Thursday** | Deep work — design, specs, reviews |
| **Friday** | Wrap up, update Initiative progress, clear Inbox |
