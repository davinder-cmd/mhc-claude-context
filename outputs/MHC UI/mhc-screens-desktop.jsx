// mhc-screens-desktop.jsx — Desktop home-page options, MHC-reskinned.

function DesktopShell({ children, density = 'regular' }) {
  return (
    <div style={{
      width: 1280, minHeight: 900, background: '#fff', display: 'flex',
      fontFamily: MHC_font, overflow: 'hidden',
    }}>
      <DesktopSidebar active="Home"/>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <DesktopTopBar/>
        <div style={{ padding: density === 'compact' ? '18px 32px' : '28px 44px', flex: 1, minWidth: 0 }}>
          <div style={{ maxWidth: 820 }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

// Carousel arrows (right side of hero)
function CarouselArrows() {
  return (
    <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginTop: 10 }}>
      <button style={{ width: 28, height: 28, borderRadius: '50%', border: `1px solid ${MHC.divider}`, background: '#fff', cursor: 'pointer', display: 'grid', placeItems: 'center' }}>
        <MHCIcon name="chevron-left" size={14} color={MHC.slate}/>
      </button>
      <button style={{ width: 28, height: 28, borderRadius: '50%', border: `1px solid ${MHC.divider}`, background: '#fff', cursor: 'pointer', display: 'grid', placeItems: 'center' }}>
        <MHCIcon name="chevron-right" size={14} color={MHC.slate}/>
      </button>
    </div>
  );
}

function HealthDataBlock({ density = 'regular', showAll = true }) {
  const compact = density === 'compact';
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: compact ? 8 : 12 }}>
        <div style={{ fontFamily: MHC_font, fontWeight: 700, fontSize: 18, color: MHC.charcoal }}>Latest Health Data</div>
        {showAll && <PillBtn size="sm" variant="outline">All Data</PillBtn>}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: compact ? 8 : 10 }}>
        <HealthRow compact={compact} label="Steps" value="9,344" icon="footsteps" color={MHC.blue} sparkVariant="bars"/>
        <HealthRow compact={compact} label="Sleep" value="7" unit="h 16m" icon="bed" color={MHC.aqua} sparkVariant="ticks"/>
        <HealthRow compact={compact} label="Active Minutes" value="1,972" icon="heart" color={MHC.orange} sparkVariant="bars"/>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: compact ? 16 : 22 }}>
        <PillBtn variant="outline" size="sm">Link Tracker</PillBtn>
      </div>
    </div>
  );
}

// ── Desktop Option 1: Single hero banner
function D_OneBanner({ density = 'regular' }) {
  const compact = density === 'compact';
  const gap = compact ? 18 : 24;
  return (
    <DesktopShell density={density}>
      <div style={{ display: 'flex', flexDirection: 'column', gap }}>
        <div style={{ fontFamily: MHC_font, fontWeight: 700, fontSize: 28, color: MHC.charcoal }}>Welcome Davinder</div>
        <HeroCard image="assets/runner-sunset.png"/>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 12 }}>
          <BannerCard {...SAMPLE.banners[0]} compact={compact}/>
        </div>
        <div>
          <div style={{ fontFamily: MHC_font, fontWeight: 700, fontSize: 18, color: MHC.charcoal, marginBottom: 10 }}>Your Action Items</div>
          <div style={{ display: 'grid', gap: 10 }}>
            {SAMPLE.actions.map((a, i) => <ActionRow key={i} {...a} compact={compact}/>)}
          </div>
        </div>
        <HealthDataBlock density={density} showAll={false}/>
      </div>
    </DesktopShell>
  );
}

// ── Desktop Option 2: Two banners
function D_TwoBanners({ density = 'regular' }) {
  const compact = density === 'compact';
  return (
    <DesktopShell density={density}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: compact ? 18 : 24 }}>
        <div style={{ fontFamily: MHC_font, fontWeight: 700, fontSize: 28, color: MHC.charcoal }}>Welcome Davinder</div>
        <HeroCard image="assets/runner-sunset.png"/>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
          {SAMPLE.banners.slice(0,2).map((b, i) => <BannerCard key={i} {...b} compact={compact}/>)}
        </div>
        <div>
          <div style={{ fontFamily: MHC_font, fontWeight: 700, fontSize: 18, color: MHC.charcoal, marginBottom: 10 }}>Your Action Items</div>
          <div style={{ display: 'grid', gap: 10 }}>
            {SAMPLE.actions.map((a, i) => <ActionRow key={i} {...a} compact={compact}/>)}
          </div>
        </div>
        <HealthDataBlock density={density} showAll={false}/>
      </div>
    </DesktopShell>
  );
}

// ── Desktop Option 3: Three banners (recommended)
function D_ThreeBanners({ density = 'regular' }) {
  const compact = density === 'compact';
  return (
    <DesktopShell density={density}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: compact ? 18 : 24 }}>
        <div style={{ fontFamily: MHC_font, fontWeight: 700, fontSize: 28, color: MHC.charcoal }}>Welcome Davinder</div>
        <HeroCard image="assets/runner-sunset.png"/>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
          {SAMPLE.banners.slice(0,3).map((b, i) => <BannerCard key={i} {...b} compact={compact}/>)}
        </div>
        <div>
          <div style={{ fontFamily: MHC_font, fontWeight: 700, fontSize: 18, color: MHC.charcoal, marginBottom: 10 }}>Your Action Items</div>
          <div style={{ display: 'grid', gap: 10 }}>
            {SAMPLE.actions.map((a, i) => <ActionRow key={i} {...a} compact={compact}/>)}
          </div>
        </div>
        <HealthDataBlock density={density} showAll={false}/>
      </div>
    </DesktopShell>
  );
}

// ── Desktop Option 4: Four banners
function D_FourBanners({ density = 'regular' }) {
  const compact = density === 'compact';
  return (
    <DesktopShell density={density}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: compact ? 18 : 24 }}>
        <div style={{ fontFamily: MHC_font, fontWeight: 700, fontSize: 28, color: MHC.charcoal }}>Welcome Davinder</div>
        <HeroCard image="assets/runner-sunset.png"/>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
          {SAMPLE.banners.map((b, i) => <BannerCard key={i} {...b} compact/>)}
        </div>
        <div>
          <div style={{ fontFamily: MHC_font, fontWeight: 700, fontSize: 18, color: MHC.charcoal, marginBottom: 10 }}>Your Action Items</div>
          <div style={{ display: 'grid', gap: 10 }}>
            {SAMPLE.actions.map((a, i) => <ActionRow key={i} {...a} compact={compact}/>)}
          </div>
        </div>
        <HealthDataBlock density={density} showAll={false}/>
      </div>
    </DesktopShell>
  );
}

// ── Desktop Alternative (welcome banner + hero, no secondary banners)
function D_Alternative({ density = 'regular' }) {
  const compact = density === 'compact';
  return (
    <DesktopShell density={density}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: compact ? 18 : 24 }}>
        <WelcomeBanner compact={compact}/>
        <HeroCard/>
        <CarouselArrows/>
        <div>
          <div style={{ fontFamily: MHC_font, fontWeight: 700, fontSize: 18, color: MHC.charcoal, marginBottom: 10 }}>Your Action Items</div>
          <div style={{ display: 'grid', gap: 10 }}>
            {SAMPLE.actions.map((a, i) => <ActionRow key={i} {...a} compact={compact}/>)}
          </div>
        </div>
        <HealthDataBlock density={density} showAll={false}/>
      </div>
    </DesktopShell>
  );
}

// ── Desktop w/ Chat Advisor — full page
function D_ChatAdvisor({ variant = 'cards', density = 'regular' }) {
  const compact = density === 'compact';
  const gap = compact ? 18 : 24;
  const ChatComponent = variant === 'pills' ? ChatAdvisorPills
                      : variant === 'buttons' ? ChatAdvisorButtons : ChatAdvisorCards;
  return (
    <DesktopShell density={density}>
      <div style={{ display: 'flex', flexDirection: 'column', gap }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontFamily: MHC_font, fontWeight: 700, fontSize: 28, color: MHC.charcoal }}>Welcome Andrew</div>
          <div style={{ display: 'flex', gap: 10 }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: MHC.cloud, display: 'grid', placeItems: 'center' }}>
              <MHCIcon name="search" size={16} color={MHC.charcoal}/>
            </div>
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: MHC.cloud, display: 'grid', placeItems: 'center', position: 'relative' }}>
              <MHCIcon name="mail" size={16} color={MHC.charcoal}/>
              <div style={{ position: 'absolute', top: -2, right: -2, minWidth: 16, height: 16, padding: '0 4px', borderRadius: 999, background: MHC.aqua, color: '#fff', fontSize: 9, fontWeight: 700, display: 'grid', placeItems: 'center' }}>4</div>
            </div>
          </div>
        </div>
        <HeroCard title="Complete Managing Depression" eyebrow="Challenge family and colleagues" image="assets/runner-sunset.png" cta="View details"/>
        <CarouselArrows/>
        <ChatComponent items={SAMPLE.chatItems}/>
        <div>
          <div style={{ fontFamily: MHC_font, fontWeight: 700, fontSize: 18, color: MHC.charcoal, marginBottom: 10 }}>Just for you</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
            {SAMPLE.banners.slice(0,3).map((b, i) => <BannerCard key={i} {...b} compact={compact}/>)}
          </div>
        </div>
        <InsightCard text={SAMPLE.insightText}/>
      </div>
    </DesktopShell>
  );
}

Object.assign(window, {
  DesktopShell,
  D_OneBanner, D_TwoBanners, D_ThreeBanners, D_FourBanners, D_Alternative, D_ChatAdvisor,
  HealthDataBlock,
});
