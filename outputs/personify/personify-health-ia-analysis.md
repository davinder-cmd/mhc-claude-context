# Personify Health — Information Architecture Analysis

**Date:** April 2, 2026
**Source:** 263 screenshots captured March 30, 2026
**Analyst:** UX Research (competitive analysis)

---

## Product Identification

The app is **Personify Health** (formerly Virgin Pulse), a B2B2C employee wellbeing platform. Direct competitor to MHC across all major feature categories: health tracking, challenges, coaching, rewards, and content-driven engagement programs.

---

## Primary Navigation (Bottom Tab Bar)

Five persistent tabs, always visible:

| Tab | Icon | Purpose |
|-----|------|---------|
| **Home** | House | Dashboard hub — personalized feed of rewards, content, stats, and actions |
| **Health** | Heart | Health data, journeys, care checklists, health situations |
| **Social** | People group | Challenges, friends, groups, events |
| **Programs** | Seated figures | Browsable/enrollable programs (coaching, journeys, care checklists) |
| **More** | Ellipsis (•••) | Overflow menu for utilities, settings, and secondary features |

---

## Global Elements

These appear across multiple tabs or as overlays:

- **Profile avatar** (top-right on Home) → Edit My Profile
- **Notifications** (badge indicators)
- **Devices & Apps** connection modal (accessible from Stats and Settings)
- **Achievement badges** (modal overlays triggered by milestone completion)

---

## Tab 1: Home

The Home screen is a vertically scrolling feed of modular content cards. It serves as the primary engagement surface.

### Primary Content (visible above fold)

- **Rewards bar** — progress indicator showing points earned vs. total available (e.g., "5,200 / 10,000")
- **Announcements carousel** — employer-published content cards (workshops, articles, events); each card expands to a detail view with "Add to my calendar" CTA
- **Daily Cards carousel** — swipeable health education cards (e.g., "Good Sleep Posture," "The 101 on Meds"); includes True/False quiz interactions and "Got it!" confirmations

### Secondary Content (below fold)

- **Stats summary** — three circular icons showing Steps, Sleep, Active Minutes with current day values
- **My Actions** — point-earning task list (e.g., "Enter my measurements — 50 Points," "Set a wellbeing goal — 600 Points"); "View All" link expands full list
- **Healthy Habits** — featured habit card with "Track my healthy habits" CTA
- **Featured article** — e.g., "Figuring Out the Cause of Your Fatigue"

### Tertiary Content (deep-linked from Home)

- **Coaching promo card** — "Connect With a Coach" CTA
- **My Programs** — horizontal scroll of recently viewed/enrolled programs
- **Discover section** — content recommendations
- **Destination Challenge promo** — "Join" CTA linking to active challenges

---

## Tab 2: Health

The Health tab organizes personal health data, educational journeys, and preventive care tracking.

### Primary Content (Health landing page)

- **Category icon row** — circular icons for quick access to health data categories (visual shortcut bar)
- **Journeys section** — cards showing active journeys with progress indicators (e.g., "1 of 5 Steps Complete," "1 of 10 Days Complete"); "View All Journeys" link
- **My Care Checklist** — preventive care tracking with activity counts

### Secondary Content

**Stats Detail** (accessed via Home → Stats → individual metric):
- Steps — weekly/monthly bar chart, daily goal, filter by source (Apple Health, Self-Entered, Daily Highest), Edit Goal, Add Steps
- Sleep — weekly/monthly chart, daily goal (hours), Add Sleep with time picker
- Active Minutes — same pattern as above
- Mindful Minutes — same pattern
- Workouts — tracking view
- Biometrics (scrollable list): Weight, Waist, Hip, Blood Pressure, Cholesterol, Glucose, A1C

**Journeys Detail:**
- Journey title + Sources link
- Goal & Progress tracker (step completion, e.g., "Complete 5 Steps" with progress bar)
- "My Completed Steps" checklist
- Time-gated progression: "Come back tomorrow for your next step"
- Filterable by topic categories

**Journey Filters:**
- Learning New Things (5), Sleeping Well (4), Building Relationships (7), Contributing to My Community (2), Acting Sustainably (3), Embracing Diversity (2), Being Effective (0)
- **Fuel:** Eating Healthy (8)
- **Movement:** Getting Active (10)

### Tertiary Content

- **Health Check (HRA)** — multi-step survey with progress bar (6 sections: Info, Nutrition, Activity, Mental Health, Conditions, Results)
  - Question types: multiple choice, Likert scales, numeric sliders, checkbox "choose all that apply"
  - Topics: nutrition habits, alcohol consumption, exercise, loneliness, chronic conditions (arthritis types)
  - Results: risk assessment scores with category breakdown + personalized recommendations
- **Health Situations** — condition-specific content, linked from Health Check results
- **Care Checklist detail** — preventive care activities by category (Preventive Care, Fuel), with recommended frequencies (e.g., "Dental Checkup — last completed May 19, 2025"); linked to rewards

---

## Tab 3: Social

The Social tab is a hub for community features. Landing page shows four circular icon buttons as the primary navigation pattern.

### Primary Content (Social landing page)

Four category buttons:

| Section | Content |
|---------|---------|
| **Challenges** | Active/available challenges with join CTAs; destination challenge progress (map visualization) |
| **Friends** | Friend Requests tab + Leaderboard tab; suggested friends; "Add Friends" and "Invite Friends" buttons |
| **Groups** | Favorites, My Groups, Browse; "Create a Group" flow |
| **Events Calendar** | Company-sponsored events |

### Secondary Content

**Challenges Detail (Destination Challenge — Pacific Crest Trail):**
- Tabs: Description, Leaderboard, Resources
- "Chat With Peers" section
- Team views: All Players, My Team (member count), Rival Teams
- Challenge Details and Rules
- Location-based educational content cards (fun facts about the trail)
- Team creation wizard (4 steps): Name → Motto → Image → Public/Private
- Join Team flow with team roster preview

**Friends Detail:**
- "Build Your Support Group" illustration + CTA
- Suggested friends list with "Add" buttons

**Groups Detail:**
- Favorites section (save groups)
- My Groups list
- Create a Group form: name, description, topics, photo, privacy settings

### Tertiary Content

- Challenge Rules modal (start/end dates, scoring, team size limits)
- Team photo picker (library of stock images)
- Group topic tagging

---

## Tab 4: Programs

The Programs tab is a browsable catalog of enrollable health programs. Three-view structure.

### Primary Content

- **Explore tab** — filterable program list with tag chips (Getting Active, Reducing Stress, Eating Healthy)
- **Saved tab** — user's bookmarked/enrolled programs
- **View All** — unfiltered complete list

### Secondary Content

Program types identified:
- **Coaching** — multiple coaching tracks (Reduce Stress, Manage Weight, Pregnancy, Substance Support); includes credential display (NCHEC, NBDCE certifications), FAQ section, "Schedule a Session" CTA
- **Coaching: Be Tobacco-Free** — standalone smoking cessation coaching program
- **How to Earn** — rewards earning guide (categorized point values for each activity type)
- **Journeys** — links to the Journey content also accessible from Health tab
- **My Care Checklist** — links to preventive care tracking

### Tertiary Content

- Coaching detail: "Why Coaching Works" expandable content, coach credential details, session scheduling
- Coaching FAQ: coverage, topics, cost, session format
- Coaching category pages: topic-specific (Pregnancy, Substance Support, etc.) with "Schedule a Call" and "Don't see what you're looking for?" flows

---

## Tab 5: More

The More tab is an overflow menu for secondary features and account management.

### Primary Content (More menu items)

| Menu Item | Description |
|-----------|-------------|
| **Media** | Video/article content library with category filters; includes "Coach Minute" video series |
| **Topics of Interest** | "Set My Interests" — personalization preferences by health topic category; mirrors Journey filter taxonomy |
| **Devices & Apps** | Connected device management (Apple Health, Fitbit, Garmin, Oura Ring, WHOOP, Strava, Polar, Withings, MyFitnessPal, Max GO/Max/Max Buzz) |
| **Trophy Case** | Achievement badge gallery — grid of circular badges for milestones (steps, streaks, profile completion, etc.) |
| **Store** | Personify Health-branded merchandise store (external webview) with product categories |
| **Settings** | Account settings — Activity Achievements toggles, Measurement Settings (units), Cell Phone Number, Member Phone Number |
| **Support** | Help articles organized by topic (Devices & Apps, Google Fit, Apple Health, Account & Profile, Challenges, Biometric Screening & Pop Forms, Programs, General, Video Tutorials, Ways To Contact Us) |

### Secondary Content

**Trophy Case Detail:**
- Individual badge view with earned date, rarity stats (e.g., "275 earned," "4/18 last earned")
- Badges for: step milestones (7K, 10K), streaks, profile photo ("Say Cheese"), various engagement activities

**Topics of Interest Detail:**
- Recommended topics (auto-generated from Health Check results)
- Category selection: Get Rewarded, Balance, Fuel, Movement
- "Load More" for additional topics

**Media Detail:**
- Filterable video/article library
- Content types: "Coach Minute" video series, "Going Gluten-Free For Beginners," "The Power of Reframing Challenges"

---

## Rewards (Cross-cutting — accessed from Home and Programs)

Rewards is not a standalone tab but surfaces across multiple entry points. Primary access is from the Home screen rewards bar.

### Structure

| Section | Content |
|---------|---------|
| **Overview** | Welcome message, total points earned, level rewards thresholds, rewards cash conversion |
| **How to Earn** | Categorized point values — Steps milestones, Sleep tracking, Challenges, Journeys, Health Check, Coaching, Daily Cards, Biometric Screening |
| **Earnings History** | Transaction log of earned points |
| **Spend Rewards** | Gift card catalog (Nike, Athleta; $10–$250 range); filtered by country (United States) |
| **Redeem a Voucher** | 10-digit voucher code entry for bonus points |

### Key Detail

- Level rewards system with cash-equivalent tiers (e.g., "5,000 Points = $10 Rewards Cash," "10,000 Points = $25 Rewards Cash")
- Total available: $325 maximum reward
- Points earned across all activity categories aggregate into a single balance

---

## Profile (Cross-cutting — accessed from avatar icon)

### Edit My Profile fields:
- Profile Photo + Cover Photo
- First Name, Last Name
- Title, Department, Location (with map pin)
- "What's your superpower of choice?" (personality prompt)
- "My favorite food is..." (personality prompt)
- Additional customization: "An interesting fact about me," "A page from my diary / I am..." (free text)
- Example Goals section with pre-populated goal templates
- Photo gallery (multiple images)

---

## Structural Observations for Competitive Analysis

**Navigation depth:** Most features are 2–3 taps deep from the tab bar. The deepest flows are Health Check (6-section survey) and Challenge team creation (4-step wizard).

**Content duplication:** Journeys appear in both the Health tab and Programs tab. Care Checklist is similarly cross-listed. This creates multiple entry points but may also create wayfinding confusion — a user might not know which tab "owns" their journey progress.

**Rewards integration:** Points are woven into nearly every feature surface (Home actions, Programs, Challenges, Health Check completion, Coaching). This is the primary behavioral lever — everything connects back to the rewards economy.

**Personalization entry points:** Health Check results drive Journey recommendations and Topics of Interest. This is their version of our HRA → DCP recommendation flow, but the connection between assessment results and recommended content is less explicit than it could be.

**Social model:** The Social tab combines peer competition (Challenges, Leaderboards), peer support (Friends, Groups), and company events into one hub. Challenges are the strongest feature — they have the deepest IA (teams, leaderboards, chat, rules, location content). Friends and Groups are thinner.

**Coaching model:** Coaching is positioned as a human service, not AI. Multiple specialty tracks, credential display, scheduling flow. No evidence of AI coaching in the screenshots — this is a notable gap compared to MHC's AI direction.

**Content strategy:** Heavy investment in educational micro-content (Daily Cards, Journeys, Media library). Content is categorized by a consistent taxonomy (Fuel, Movement, Balance, etc.) that threads through Journeys, Filters, and Topics of Interest.

**What's missing vs. MHC:** No visible AI health insights, no AI coaching, no digital care paths (condition-specific clinical programs). Their "Journeys" are lightweight educational step-sequences, not structured multi-week clinical programs. No evidence of wearable-data-driven AI summaries. Their Health Check produces recommendations but doesn't route into structured intervention programs the way our HRA → DCP pipeline does.
