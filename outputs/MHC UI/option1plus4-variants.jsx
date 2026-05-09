/* global React */
const { useState } = React;

/* ============================================================
   Shared atoms
   ============================================================ */

function StatusBar() {
  return (
    <div className="phone-statusbar">
      <span>9:41</span>
      <span className="right">
        <span className="dot" /><span className="dot" /><span className="dot" />
        <span className="battery" />
      </span>
    </div>
  );
}

function RealNav({ active = 'home' }) {
  // Actual MHC nav: Home / Benefits / Wellbeing / Rewards / Challenges
  const items = [
    { id: 'home', label: 'Home', svg: <><path d="M3 12 12 4l9 8" /><path d="M5 10v10h14V10" /></> },
    { id: 'benefits', label: 'Benefits', svg: <><path d="M20 7H4v13h16V7Z" /><path d="M16 7V5a4 4 0 0 0-8 0v2" /><path d="M12 11v6" /><path d="M9 14h6" /></> },
    { id: 'wellbeing', label: 'Wellbeing', svg: <><path d="M12 21s-7-4.5-7-11a4 4 0 0 1 7-2.65A4 4 0 0 1 19 10c0 6.5-7 11-7 11Z" /></> },
    { id: 'rewards', label: 'Rewards', svg: <><circle cx="12" cy="9" r="5" /><path d="m8.5 13-1.5 8 5-3 5 3-1.5-8" /></> },
    { id: 'challenges', label: 'Challenges', svg: <><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></> },
  ];
  return (
    <div className="tabbar tabbar--five">
      {items.map(i => (
        <div key={i.id} className={`tabbar-item ${active === i.id ? 'active' : ''}`}>
          <span className="tabbar-icon">
            <svg viewBox="0 0 24 24">{i.svg}</svg>
          </span>
          <span>{i.label}</span>
        </div>
      ))}
    </div>
  );
}

/* ============================================================
   Greeting WITH the tracker entry-point chip (Option 4)
   ============================================================ */

function GreetingOnly() {
  return (
    <div className="greeting">
      <div className="greeting-row">
        <div>
          <h1 className="greeting-name">Hi, Sarah</h1>
          <p className="greeting-sub">Welcome back.</p>
        </div>
        <div className="greeting-actions">
          <a className="focus-pill" href="#">
            <span className="focus-pill-dot">S</span>
            <span className="focus-pill-label">
              <span className="focus-pill-eyebrow">Your focus</span>
              <span className="focus-pill-value">Sleep</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

function TrackerWithInsight({ insightOpen, onToggleInsight, onOpenTracker }) {
  return (
    <div className="tracker-block">
      <a
        className="tracker-chip"
        href="#tracker-detail"
        onClick={(e) => { e.preventDefault(); onOpenTracker?.(); }}
        aria-label="View your tracker — 52,840 steps this week"
      >
        <span className="tracker-chip-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 12h4l3-8 4 16 3-8h4" />
          </svg>
        </span>
        <span className="tracker-chip-stats">
          <span><b>52.8k</b><em>steps</em></span>
          <span className="tracker-chip-divider" />
          <span><b>48h</b><em>sleep</em></span>
          <span className="tracker-chip-divider" />
          <span><b>5/6</b><em>active days</em></span>
        </span>
        <span className="tracker-chip-cta" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 5 7 7-7 7" />
          </svg>
        </span>
      </a>
      <div className="tracker-insight-attached">
        <InsightTeaser />
      </div>
    </div>
  );
}

/* ============================================================
   Insight — three states: teaser (collapsed), expanded inline
   ============================================================ */

function InsightTeaser() {
  // Single-sentence, no expander, no callouts. Just the line.
  return (
    <p className="insight-line">
      <span className="insight-line-icon" aria-hidden="true">✨</span>
      Your sleep is most consistent on weeknights — weekends drop by an hour.
    </p>
  );
}
/* (removed leftover JSX from the old expanding insight card) */

/* ============================================================
   Re-used blocks (smaller copies of production blocks)
   ============================================================ */

function HeroFull() {
  return (
    <section className="hero">
      <div className="hero-photo" style={{ backgroundImage: "url('assets/portrait-woman-laughing.png')" }} />
      <div className="hero-overlay" />
      <div className="hero-body">
        <p className="hero-eyebrow">Personalized for you</p>
        <h2 className="hero-title">Managing Insomnia</h2>
        <p className="hero-desc">A 4-week program. Day 6 of 28.</p>
        <a className="hero-cta" href="#">
          Continue program
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
}

function Invites() {
  return (
    <section className="invites">
      <div className="invites-head"><h2 className="invites-title">Pending invites</h2></div>
      <div className="invite-row invite-row--team">
        <div className="invite-avatar invite-avatar--team">A</div>
        <div className="invite-body">
          <div className="invite-name">Team Aurora invited you to join</div>
          <div className="invite-detail">Spring step challenge · 6 days to join</div>
        </div>
        <div className="invite-actions">
          <form className="invite-form"><button type="button" className="invite-btn invite-btn--accept">Join</button></form>
          <form className="invite-form"><button type="button" className="invite-btn invite-btn--decline">Pass</button></form>
        </div>
      </div>
    </section>
  );
}

function ActivePractices() {
  // Combined section: in-progress programs + today's habits.
  // Both are "things I'm currently doing" — one section head, one "See all".
  const programs = [
    { primary: true, focus: true, title: 'Better sleep, better days', tag: 'Journey · 4-week track', stepIn: '3', stepTotal: '7', pct: 43, next: 'Caffeine & sleep timing' },
    { title: 'Managing Insomnia', tag: 'Big Health · DCP', stepIn: '9', stepTotal: '28', pct: 32, next: 'Wind-down session' },
  ];
  const habits = null;
  return (
    <section className="active">
      <div className="section-head">
        <h2 className="section-title">Continue</h2>
        <a className="section-link" href="#">See all</a>
      </div>
      <div className="progress-grid">
        {programs.map((c, i) => (
          <div key={i} className={`progress-card progress-card--rail ${c.primary ? 'progress-card--primary' : ''}`}>
            <div className="progress-card-rail">
              <span className="progress-card-rail-num">{c.stepIn}</span>
              <span className="progress-card-rail-lbl">of {c.stepTotal}</span>
            </div>
            <div className="progress-card-body">
              <div className="progress-card-meta">
                {c.focus && <span className="progress-card-badge">On focus</span>}
                <span className="progress-card-tag">{c.tag}</span>
              </div>
              <h3 className="progress-card-title">{c.title}</h3>
              <div className="progress-card-progress">
                <div className="progress-bar"><div className="progress-bar-fill" style={{ width: `${c.pct}%` }} /></div>
              </div>
              <p className="progress-card-next">
                <span className="progress-card-next-label">Up next:</span>
                <span className="progress-card-next-detail"> {c.next}</span>
              </p>
            </div>
          </div>
        ))}

        {/* 3rd card: habits rolled up as a Continue item.
            Same shape as program cards — "X of Y" rail, title, progress bar, next action.
            Treats today's habits as a single "practice" you continue. */}
        <a className="progress-card progress-card--rail progress-card--habits" href="#habits-list">
          <div className="progress-card-rail">
            <span className="progress-card-rail-num">1</span>
            <span className="progress-card-rail-lbl">of 3</span>
          </div>
          <div className="progress-card-body">
            <div className="progress-card-meta">
              <span className="progress-card-tag">Today's habits</span>
            </div>
            <h3 className="progress-card-title">Daily habits</h3>
            <div className="progress-card-progress">
              <div className="progress-bar"><div className="progress-bar-fill" style={{ width: '33%' }} /></div>
            </div>
            <p className="progress-card-next">
              <span className="progress-card-next-label">Up next:</span>
              <span className="progress-card-next-detail"> Log meditation</span>
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}

function ProgressRail() {
  const cards = [
    { type: 'step', primary: true, focus: true, title: 'Better sleep, better days', tag: 'Journey · 4-week track', stepIn: '3', stepTotal: '7', pct: 43, next: 'Caffeine & sleep timing' },
    { type: 'step', title: 'Managing Insomnia', tag: 'Big Health · DCP', stepIn: '9', stepTotal: '28', pct: 32, next: 'Wind-down session' },
  ];
  return (
    <section className="progress">
      <div className="section-head">
        <h2 className="section-title">Pick up where you left off</h2>
        <a className="section-link" href="#">See all</a>
      </div>
      <div className="progress-grid">
        {cards.map((c, i) => (
          <div key={i} className={`progress-card progress-card--rail ${c.primary ? 'progress-card--primary' : ''}`}>
            <div className="progress-card-rail">
              <span className="progress-card-rail-num">{c.stepIn}</span>
              <span className="progress-card-rail-lbl">of {c.stepTotal}</span>
            </div>
            <div className="progress-card-body">
              <div className="progress-card-meta">
                {c.focus && <span className="progress-card-badge">On focus</span>}
                <span className="progress-card-tag">{c.tag}</span>
              </div>
              <h3 className="progress-card-title">{c.title}</h3>
              <div className="progress-card-progress">
                <div className="progress-bar"><div className="progress-bar-fill" style={{ width: `${c.pct}%` }} /></div>
              </div>
              <p className="progress-card-next">
                <span className="progress-card-next-label">Up next:</span>
                <span className="progress-card-next-detail"> {c.next}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function HabitsCollapsed() {
  // One-line summary that links to the full habits list.
  // Keeps a glance at progress without taking three full cards of vertical space.
  const habits = [
    { name: 'Water', state: 'today' },
    { name: 'Meditation', state: 'missed' },
    { name: 'Steps', state: 'done' },
  ];
  return (
    <section className="habits-collapsed">
      <a className="habits-collapsed-row" href="#habits-list">
        <span className="habits-collapsed-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 11l3 3L22 4" />
            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
          </svg>
        </span>
        <span className="habits-collapsed-body">
          <span className="habits-collapsed-eyebrow">Today's habits</span>
          <span className="habits-collapsed-stat"><b>1 of 3</b> logged · 4-day streak on Steps</span>
        </span>
        <span className="habits-collapsed-pips">
          {habits.map((h, i) => (
            <span key={i} className={`habit-pip habit-pip--${h.state}`} title={h.name} />
          ))}
        </span>
        <span className="habits-collapsed-cta" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 5 7 7-7 7" />
          </svg>
        </span>
      </a>
    </section>
  );
}

function Habits() {
  return (
    <section className="habits">
      <div className="section-head">
        <h2 className="section-title">Today's habits</h2>
        <a className="section-link" href="#">See all</a>
      </div>
      <div className="habits-grid">
        {[
          { name: 'Drink water', target: '8 cups', dots: ['done','done','done','today','missed'], streak: '3-day streak', log: '+ 1 cup' },
          { name: 'Meditation', target: '5 min', dots: ['done','missed','done','today','missed'], sub: '2 of last 4 days', log: '+ Log' },
          { name: '10k steps', target: 'daily', dots: ['done','done','done','done','today'], streak: '4-day streak', auto: true },
        ].map((h, i) => (
          <div className="habit" key={i}>
            <div className="habit-head">
              <h3 className="habit-name">{h.name}</h3>
              <span className="habit-target">{h.target}</span>
            </div>
            <div className="habit-dots">
              {h.dots.map((d, j) => <span key={j} className={`habit-dot habit-dot--${d}`} />)}
            </div>
            <div className="habit-meta">
              {h.streak ? <b className="habit-streak">{h.streak}</b> : <span>{h.sub}</span>}
            </div>
            {h.auto
              ? <span className="habit-auto">Auto-tracked</span>
              : <form className="habit-log-form"><button type="button" className="habit-log-btn">{h.log}</button></form>}
          </div>
        ))}
      </div>
    </section>
  );
}

function ForYou() {
  return (
    <section className="foryou">
      <div className="section-head">
        <h2 className="section-title">For your Sleep focus</h2>
        <a className="section-link" href="#">See all</a>
      </div>
      <div className="foryou-grid">
        {[
          { tag: 'Program', title: 'Wind-down routine', sub: '5 days · 6 min/day', img: 'assets/stretch-woman.jpg' },
          { tag: 'Article', title: 'Why caffeine timing matters', sub: '4 min read', img: 'assets/yoga-laptop.png' },
          { tag: 'Audio', title: 'Body scan for sleep', sub: '12 min', img: 'assets/marble-aqua.jpg' },
        ].map((c, i) => (
          <div className="foryou-card" key={i}>
            <div className="foryou-card-img" style={{ backgroundImage: `url('${c.img}')` }} />
            <div className="foryou-card-body">
              <p className="foryou-card-tag">{c.tag}</p>
              <h3 className="foryou-card-title">{c.title}</h3>
              <p className="foryou-card-sub">{c.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   THE THREE ARTBOARDS
   ============================================================ */

function Home_Recommended() {
  const [insightOpen, setInsightOpen] = useState(false);
  return (
    <div className="phone">
      <StatusBar />
      <div className="mhc-home">
        <GreetingOnly />
        <HeroFull />
        <TrackerWithInsight
          insightOpen={insightOpen}
          onToggleInsight={() => setInsightOpen(v => !v)}
        />
        <Invites />
        <ActivePractices />
        <ForYou />
      </div>
      <RealNav active="home" />
    </div>
  );
}

function Home_InsightExpanded() {
  return (
    <div className="phone">
      <StatusBar />
      <div className="mhc-home">
        <GreetingOnly />
        <HeroFull />
        <TrackerWithInsight
          insightOpen={true}
          onToggleInsight={() => {}}
        />
        <Invites />
        <ActivePractices />
        <ForYou />
      </div>
      <RealNav active="home" />
    </div>
  );
}

function Home_TrackerDetail() {
  return (
    <div className="phone">
      <StatusBar />
      <div className="mhc-home" style={{ paddingBottom: 16 }}>
        {/* Detail-page header (deep-link target from the chip).
            Lives under /wellbeing/tracker — back button returns to home. */}
        <div className="detail-head">
          <a className="detail-back" href="#" aria-label="Back">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </a>
          <div>
            <p className="detail-eyebrow">Wellbeing · Tracker</p>
            <h1 className="detail-title">Your tracker</h1>
          </div>
        </div>

        <p className="detail-sub">Mon Apr 22 — Today</p>

        {/* Full weekly stats */}
        <div className="today-grid today-grid--detail">
          <div className="today-card today-card--week">
            <div className="today-card-icon"><img src="uploads/pasted-1777406516462-0.png" alt="" /></div>
            <div className="today-card-value">52,840</div>
            <div className="today-card-label">Steps this week</div>
            <div className="today-card-sub">avg 8,807/day · ↑12%</div>
          </div>
          <div className="today-card today-card--week">
            <div className="today-card-icon"><img src="uploads/pasted-1777406516462-0.png" alt="" /></div>
            <div className="today-card-value">48h 12m</div>
            <div className="today-card-label">Sleep this week</div>
            <div className="today-card-sub">avg 6h 53m/night</div>
          </div>
          <div className="today-card today-card--week">
            <div className="today-card-icon"><img src="uploads/pasted-1777406516462-0.png" alt="" /></div>
            <div className="today-card-value">5 of 6</div>
            <div className="today-card-label">Active days</div>
            <div className="today-card-sub">30+ min movement</div>
          </div>
          <div className="today-card">
            <div className="today-card-icon"><img src="uploads/pasted-1777406516462-0.png" alt="" /></div>
            <div className="today-card-value">1,250</div>
            <div className="today-card-label">points this month</div>
          </div>
        </div>

        {/* Today's habits — full version, lives here too */}
        <Habits />

        {/* Insight, full */}
        <section className="insights">
          <p className="insights-eyebrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v3" /><path d="M12 19v3" />
              <path d="M4.93 4.93l2.12 2.12" /><path d="M16.95 16.95l2.12 2.12" />
              <path d="M2 12h3" /><path d="M19 12h3" />
              <path d="M4.93 19.07l2.12-2.12" /><path d="M16.95 7.05l2.12-2.12" />
            </svg>
            Insight for you
          </p>
          <h3 className="insights-headline">Your sleep is most consistent on weeknights</h3>
          <p className="insights-body">You averaged 7h 18m Mon–Thu but only 6h 02m Fri–Sat. Try keeping weekend bedtime within an hour of weeknights to feel sharper Monday morning.</p>
          <div className="insights-meta">
            <span className="insights-meta-tag">Sleep</span>
            <span>Generated 2h ago</span>
          </div>
        </section>
      </div>
      <RealNav active="wellbeing" />
    </div>
  );
}

Object.assign(window, { Home_Recommended, Home_InsightExpanded, Home_TrackerDetail });
