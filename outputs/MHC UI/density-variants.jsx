/* global React */
const { useState } = React;

/* ============================================================
   Shared sub-blocks used by all variants
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

function GreetingRow({ compact = false }) {
  return (
    <div className="greeting">
      <div className="greeting-row">
        <div>
          <h1 className="greeting-name" style={compact ? { fontSize: 20 } : undefined}>Hi, Sarah</h1>
          {!compact && <p className="greeting-sub">Welcome back.</p>}
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

function HeroFull() {
  return (
    <section className="hero">
      <div className="hero-photo" style={{ backgroundImage: "url('assets/portrait-woman-laughing.png')" }} />
      <div className="hero-overlay" />
      <div className="hero-body">
        <p className="hero-eyebrow">Personalized for you</p>
        <h2 className="hero-title">Managing Insomnia</h2>
        <p className="hero-desc">A 4-week program to rebuild your sleep, one night at a time. Day 6 of 28.</p>
        <a className="hero-cta" href="#">
          Continue program
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
}

function NextAction() {
  return (
    <div className="next-action">
      <div className="next-action-thumb" />
      <div className="next-action-body">
        <p className="next-action-eyebrow">Up next · Day 6</p>
        <p className="next-action-title">Wind-down session</p>
        <p className="next-action-sub">12 min · Managing Insomnia</p>
      </div>
      <a className="next-action-cta" href="#">
        Start
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" width="11" height="11">
          <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
        </svg>
      </a>
    </div>
  );
}

function Invites({ count = 1 }) {
  const rows = [
    { team: true, avatar: 'A', name: 'Team Aurora invited you to join', detail: 'Spring step challenge · 6 days to join' },
    { team: false, avatar: 'JM', name: 'Jamie M. challenged you', detail: 'Most steps · 5 days · starts when accepted' },
  ].slice(0, count);
  return (
    <section className="invites">
      <div className="invites-head">
        <h2 className="invites-title">Pending invites</h2>
      </div>
      {rows.map((r, i) => (
        <div key={i} className={`invite-row ${r.team ? 'invite-row--team' : ''}`}>
          <div className={`invite-avatar ${r.team ? 'invite-avatar--team' : ''}`}>{r.avatar}</div>
          <div className="invite-body">
            <div className="invite-name">{r.name}</div>
            <div className="invite-detail">{r.detail}</div>
          </div>
          <div className="invite-actions">
            <form className="invite-form"><button type="button" className="invite-btn invite-btn--accept">{r.team ? 'Join' : 'Accept'}</button></form>
            <form className="invite-form"><button type="button" className="invite-btn invite-btn--decline">{r.team ? 'Pass' : 'Decline'}</button></form>
          </div>
        </div>
      ))}
    </section>
  );
}

function ProgressRail({ cards = 'full' }) {
  // cards = 'full' (3) | 'two' | 'one'
  const all = [
    {
      type: 'step', primary: true, focus: true,
      title: 'Better sleep, better days', tag: 'Journey · 4-week track',
      stepIn: '3', stepTotal: '7', pct: 43, next: 'Caffeine & sleep timing',
    },
    {
      type: 'step', focus: false,
      title: 'Managing Insomnia', tag: 'Big Health · DCP',
      stepIn: '9', stepTotal: '28', pct: 32, next: 'Wind-down session',
    },
    {
      type: 'pct',
      title: 'Health risk assessment', tag: 'Assessment · 12 questions',
      pct: 62, pctSub: 'Done', meta: '~5 min left', next: 'Resume to finish',
    },
  ];
  const visible = cards === 'full' ? all : cards === 'two' ? all.slice(0, 2) : all.slice(0, 1);
  return (
    <section className="progress">
      <div className="section-head">
        <h2 className="section-title">Pick up where you left off</h2>
        <a className="section-link" href="#">See all</a>
      </div>
      <div className="progress-grid">
        {visible.map((c, i) => (
          <div key={i} className={`progress-card progress-card--rail ${c.primary ? 'progress-card--primary' : ''}`}>
            {c.type === 'step' ? (
              <div className="progress-card-rail">
                <span className="progress-card-rail-num">{c.stepIn}</span>
                <span className="progress-card-rail-lbl">of {c.stepTotal}</span>
              </div>
            ) : (
              <div className="progress-card-rail progress-card-rail--pct">
                <span className="progress-card-rail-num">{c.pct}<span className="progress-card-rail-pct">%</span></span>
                <span className="progress-card-rail-lbl">{c.pctSub}</span>
              </div>
            )}
            <div className="progress-card-body">
              <div className="progress-card-meta">
                {c.focus && <span className="progress-card-badge">On focus</span>}
                <span className="progress-card-tag">{c.tag}</span>
              </div>
              <h3 className="progress-card-title">{c.title}</h3>
              <div className="progress-card-progress">
                <div className="progress-bar"><div className="progress-bar-fill" style={{ width: `${c.pct}%` }} /></div>
                {c.meta && <span className="progress-card-week">{c.meta}</span>}
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
          { name: 'Meditation', target: '5 min', dots: ['done','missed','done','today','missed'], sub: '2 of last 4 days', log: '+ Log 5 min' },
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

function ThisWeek() {
  return (
    <section className="today">
      <div className="section-head">
        <div className="section-head-stack">
          <h2 className="section-title">This week</h2>
          <p className="section-subtitle">Mon Apr 22 — Today</p>
        </div>
        <a className="section-link" href="#">See all</a>
      </div>
      <div className="today-grid">
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
          <div className="today-card-label">this month</div>
        </div>
      </div>
    </section>
  );
}

function Insights() {
  return (
    <section className="insights">
      <p className="insights-eyebrow">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" /><path d="M12 2v3" /><path d="M12 19v3" /><path d="M4.93 4.93l2.12 2.12" /><path d="M16.95 16.95l2.12 2.12" /><path d="M2 12h3" /><path d="M19 12h3" /><path d="M4.93 19.07l2.12-2.12" /><path d="M16.95 7.05l2.12-2.12" />
        </svg>
        Insight for you
      </p>
      <h3 className="insights-headline">Your sleep is most consistent on weeknights</h3>
      <p className="insights-body">You averaged 7h 18m Mon–Thu but only 6h 02m Fri–Sat. Try keeping weekend bedtime within an hour of weeknights.</p>
      <div className="insights-meta">
        <span className="insights-meta-tag">Sleep</span>
        <span>Generated 2h ago</span>
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

function More() {
  return (
    <section className="secondary">
      <h2 className="secondary-eyebrow">More from Acme Health</h2>
      <div className="secondary-grid">
        {[
          { label: 'Annual checkup', img: 'assets/portrait-older-man.jpg' },
          { label: 'Mental health benefits', img: 'assets/portrait-man-smiling.png' },
          { label: 'Find a doctor', img: 'assets/runner-sunset.png' },
          { label: 'Wellness rewards', img: 'assets/marble-aqua.jpg' },
        ].map((b, i) => (
          <div className="secondary-card" key={i}>
            <div className="secondary-card-img" style={{ backgroundImage: `url('${b.img}')` }} />
            <div className="secondary-card-overlay" />
            <p className="secondary-card-label">{b.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function TabBar({ active = 'home' }) {
  const items = [
    { id: 'home', label: 'Home',
      icon: (<svg viewBox="0 0 24 24"><path d="M3 12 12 4l9 8" /><path d="M5 10v10h14V10" /></svg>) },
    { id: 'tracker', label: 'Tracker',
      icon: (<svg viewBox="0 0 24 24"><path d="M3 12h4l3-8 4 16 3-8h4" /></svg>) },
    { id: 'explore', label: 'Explore',
      icon: (<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M8 12l3 3 5-7" /></svg>) },
    { id: 'profile', label: 'Profile',
      icon: (<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" /><path d="M4 21c1-4 5-6 8-6s7 2 8 6" /></svg>) },
  ];
  return (
    <div className="tabbar">
      {items.map(i => (
        <div key={i.id} className={`tabbar-item ${active === i.id ? 'active' : ''}`}>
          <span className="tabbar-icon">{i.icon}</span>
          <span>{i.label}</span>
        </div>
      ))}
    </div>
  );
}

function MovedTo({ to, what }) {
  return (
    <a href="#" className="moved-to">
      <span className="moved-to-icon">
        <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="m12 5 7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </span>
      <span><b>{what}</b> moved to {to}</span>
    </a>
  );
}

/* ============================================================
   THE FOUR ARTBOARDS
   ============================================================ */

function Variant_Baseline() {
  return (
    <div className="phone">
      <StatusBar />
      <div className="mhc-home">
        <GreetingRow />
        <HeroFull />
        <Invites count={1} />
        <ProgressRail cards="full" />
        <Habits />
        <ThisWeek />
        <Insights />
        <ForYou />
        <More />
      </div>
      <TabBar />
    </div>
  );
}

function Variant_Tight() {
  // hero + invites + in-progress + recommendations only
  return (
    <div className="phone">
      <StatusBar />
      <div className="mhc-home">
        <GreetingRow />
        <HeroFull />
        <Invites count={1} />
        <ProgressRail cards="two" />
        <ForYou />
        <MovedTo to="Tracker tab" what="This week, Habits, Insights" />
      </div>
      <TabBar active="home" />
    </div>
  );
}

function Variant_Layered() {
  // same blocks, but tracker collapses to summary, insights to teaser
  return (
    <div className="phone">
      <StatusBar />
      <div className="mhc-home">
        <GreetingRow />
        <HeroFull />
        <Invites count={1} />
        <ProgressRail cards="two" />

        {/* Compact tracker summary, expandable */}
        <section>
          <div className="section-head">
            <h2 className="section-title">This week</h2>
            <a className="section-link" href="#">View all</a>
          </div>
          <div className="tracker-summary">
            <span className="tracker-summary-icon">
              <svg viewBox="0 0 24 24"><path d="M3 12h4l3-8 4 16 3-8h4" /></svg>
            </span>
            <div className="tracker-summary-stats">
              <span><b>52.8k</b><em>steps</em></span>
              <span><b>48h</b><em>sleep</em></span>
              <span><b>5/6</b><em>active</em></span>
            </div>
          </div>
        </section>

        {/* One-line insight teaser */}
        <div className="insight-teaser">
          <span className="insight-teaser-icon">✦</span>
          <div className="insight-teaser-body">
            <p className="insight-teaser-eyebrow">Insight</p>
            <p className="insight-teaser-text">Your sleep is most consistent on weeknights.</p>
          </div>
          <span className="insight-teaser-cta">Read →</span>
        </div>

        <ForYou />
      </div>
      <TabBar active="home" />
    </div>
  );
}

function Variant_StateAware() {
  // For an actively-engaged user: lead with "next action" not hero;
  // tracker + insights collapse; trim aggressively.
  return (
    <div className="phone">
      <StatusBar />
      <div className="mhc-home">
        <GreetingRow compact />
        <NextAction />
        <Invites count={1} />
        <ProgressRail cards="one" />

        <div className="insight-teaser">
          <span className="insight-teaser-icon">✦</span>
          <div className="insight-teaser-body">
            <p className="insight-teaser-eyebrow">Insight · Sleep</p>
            <p className="insight-teaser-text">Your sleep is most consistent on weeknights.</p>
          </div>
          <span className="insight-teaser-cta">Read →</span>
        </div>

        <section>
          <div className="section-head">
            <h2 className="section-title">This week</h2>
            <a className="section-link" href="#">View all</a>
          </div>
          <div className="tracker-summary">
            <span className="tracker-summary-icon">
              <svg viewBox="0 0 24 24"><path d="M3 12h4l3-8 4 16 3-8h4" /></svg>
            </span>
            <div className="tracker-summary-stats">
              <span><b>52.8k</b><em>steps</em></span>
              <span><b>48h</b><em>sleep</em></span>
              <span><b>5/6</b><em>active</em></span>
            </div>
          </div>
        </section>

        <ForYou />
        <MovedTo to="Explore tab" what="More from Acme Health" />
      </div>
      <TabBar active="home" />
    </div>
  );
}

Object.assign(window, {
  Variant_Baseline, Variant_Tight, Variant_Layered, Variant_StateAware,
});
