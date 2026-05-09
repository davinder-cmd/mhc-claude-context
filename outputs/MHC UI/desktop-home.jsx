/* global React, GreetingOnly, HeroFull, TrackerWithInsight, Invites, ActivePractices, ForYou */

function DesktopNav() {
  return (
    <header className="dweb-topbar">
      <div className="dweb-brand">
        <span className="dweb-brand-mark">M</span>
        <span className="dweb-brand-name">MHC</span>
      </div>
      <nav className="dweb-nav">
        <a className="dweb-nav-item active" href="#">Home</a>
        <a className="dweb-nav-item" href="#">Benefits</a>
        <a className="dweb-nav-item" href="#">Wellbeing</a>
        <a className="dweb-nav-item" href="#">Rewards</a>
        <a className="dweb-nav-item" href="#">Challenges</a>
      </nav>
      <div className="dweb-tools">
        <span className="dweb-search">Search…</span>
        <span className="dweb-avatar">S</span>
      </div>
    </header>
  );
}

function HomeDesktop() {
  return (
    <div className="dweb">
      <DesktopNav />
      <div className="dweb-page">
        {/* Top row: Greeting + Tracker chip + Insight, full-width header strip */}
        <div className="dweb-headstrip">
          <GreetingOnly />
        </div>

        {/* Hero full-bleed */}
        <div className="dweb-hero">
          <HeroFull />
        </div>

        {/* Tracker + Insight beneath hero, same as phone */}
        <div className="dweb-tracker">
          <TrackerWithInsight />
        </div>

        {/* Invites — full-width */}
        <Invites />

        {/* Continue + For You side-by-side on desktop */}
        <div className="dweb-twocol">
          <div className="dweb-twocol-main">
            <ActivePractices />
          </div>
          <div className="dweb-twocol-side">
            <ForYou />
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { HomeDesktop });
