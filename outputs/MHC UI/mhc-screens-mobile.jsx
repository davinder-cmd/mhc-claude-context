// mhc-screens-mobile.jsx — Mobile home-page options, MHC-reskinned.

function MobileShell({ children, density = 'regular', variant = 'umbrella' }) {
  // variant controls top bar branding intensity
  const compact = density === 'compact';
  return (
    <div style={{
      width: 390, background: '#fff', fontFamily: MHC_font,
      display: 'flex', flexDirection: 'column', minHeight: 844,
    }}>
      <MobileTopBar/>
      <div style={{ flex: 1, padding: compact ? '14px 16px' : '18px 20px', display: 'flex', flexDirection: 'column', gap: compact ? 14 : 18 }}>
        {children}
      </div>
      <BottomNav active="Home"/>
    </div>
  );
}

function MobileGreeting({ name = 'Davinder', onSearch, onBell, unread = 3 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ fontFamily: MHC_font, fontWeight: 700, fontSize: 26, color: MHC.charcoal }}>Hi {name}</div>
      <UtilityChips onSearch={onSearch} onBell={onBell} unread={unread} size={34} iconSize={16}/>
    </div>
  );
}

// Mobile health data rows (compact)
function MobileHealthBlock({ density = 'regular', zeroState = false, trackerLinked = true }) {
  const compact = density === 'compact';
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
        <div style={{ fontFamily: MHC_font, fontWeight: 700, fontSize: 16, color: MHC.charcoal }}>Latest Health Data</div>
        <div style={{ fontFamily: MHC_font, fontSize: 12, color: MHC.blue, fontWeight: 600 }}>View all</div>
      </div>
      <div style={{ display: 'grid', gap: 8 }}>
        {zeroState ? (
          <>
            <ZeroRow label="Steps" icon="footsteps"/>
            <ZeroRow label="Sleep" icon="bed"/>
            <ZeroRow label="Active Minutes" icon="heart"/>
          </>
        ) : (
          <>
            <HealthRow compact label="Steps" value="8,572" icon="footsteps" color={MHC.blue}/>
            <HealthRow compact label="Sleep" value="7" unit="h 16m" icon="bed" color={MHC.aqua} sparkVariant="ticks"/>
            <HealthRow compact label="Calories Burned" value="1,945" icon="flame" color={MHC.orange}/>
          </>
        )}
      </div>
      {!trackerLinked && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 14 }}>
          <PillBtn size="sm">Link tracker</PillBtn>
        </div>
      )}
    </div>
  );
}

function ZeroRow({ label, icon }) {
  return (
    <div style={{ border: `1px solid ${MHC.divider}`, borderRadius: 10, padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <MHCIcon name={icon} size={14} color={MHC.charcoal}/>
        <div style={{ fontFamily: MHC_font, fontSize: 13, fontWeight: 600, color: MHC.charcoal }}>{label}</div>
      </div>
      <div style={{ fontFamily: MHC_font, fontSize: 12, color: MHC.blue, fontWeight: 600 }}>Add data</div>
    </div>
  );
}

// ── Mobile Final Design
function M_FinalDesign({ density = 'regular' }) {
  const compact = density === 'compact';
  const ChatVariant = ChatAdvisorCards;
  return (
    <MobileShell density={density}>
      <MobileGreeting name="Andrew"/>
      <div style={{ borderRadius: 14, overflow: 'hidden', position: 'relative', height: 180 }}>
        <div style={{ width: '100%', height: '100%', background: `url(assets/portrait-woman-laughing.png) center/cover` }}/>
        <div style={{ position: 'absolute', left: 14, bottom: 12, color: '#fff', textShadow: '0 1px 4px rgba(0,0,0,.5)' }}>
          <div style={{ fontFamily: MHC_font, fontWeight: 700, fontSize: 16 }}>Complete Health Assessment</div>
          <div style={{ fontFamily: MHC_font, fontSize: 12, marginTop: 2 }}>Earn 1000 Points</div>
        </div>
      </div>
      <ChatVariant items={SAMPLE.chatItems}/>
      <div>
        <SectionHead size={16}>Just for you</SectionHead>
        <div style={{ display: 'grid', gap: 8, marginTop: 10 }}>
          <ActionRow title="Get active" subtitle="DTX" image="assets/stretch-woman.jpg" compact/>
          <ActionRow title="Improve your sleep" subtitle="DTX" image="assets/portrait-older-man.jpg" compact/>
          <ActionRow title="Start a new daily habit" subtitle="DTX" compact/>
        </div>
      </div>
      <InsightCard text={SAMPLE.insightText}/>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <div style={{ fontFamily: MHC_font, fontWeight: 700, fontSize: 16, color: MHC.charcoal }}>Measurements</div>
          <div style={{ fontFamily: MHC_font, fontSize: 12, color: MHC.blue, fontWeight: 600 }}>View all</div>
        </div>
        <div style={{ display: 'grid', gap: 8 }}>
          <HealthRow compact label="Steps" value="8,572" icon="footsteps" color={MHC.blue}/>
          <HealthRow compact label="Sleep" value="7" unit="h 16m" icon="bed" color={MHC.aqua} sparkVariant="ticks"/>
          <HealthRow compact label="Calories Burned" value="1,945" icon="flame" color={MHC.orange}/>
        </div>
      </div>
    </MobileShell>
  );
}

// ── Mobile First-pass with device states
function M_FirstPass({ density = 'regular', state = 'no-data' }) {
  // state: 'no-data' | 'data-nolink' | 'data-linked'
  return (
    <MobileShell density={density}>
      <div style={{ fontFamily: MHC_font, fontWeight: 700, fontSize: 24, color: MHC.charcoal }}>Hi, Davinder <MHCIcon name="mail" size={18} color={MHC.charcoal} style={{ marginLeft: 8 }}/></div>
      <HeroCard title="Complete Managing Depression" eyebrow="Digital Therapeutic" cta="Start"/>
      <div>
        <SectionHead size={16}>Your Action Items</SectionHead>
        <div style={{ display: 'grid', gap: 8, marginTop: 10 }}>
          <ActionRow title="Get your A1C checked" subtitle="DTX" image="assets/portrait-older-man.jpg" compact/>
          <ActionRow title="Update your PCP" subtitle="DTX" compact/>
          <ActionRow title="Start a new daily habit" subtitle="DTX" compact/>
        </div>
      </div>
      <MobileHealthBlock density={density} zeroState={state === 'no-data'} trackerLinked={state === 'data-linked'}/>
    </MobileShell>
  );
}

// ── Mobile Options (demo concepts)
function M_Concept({ density = 'regular', kind = 'current' }) {
  // kind: 'current' | 'no-trends' | 'with-search' | 'above-fold'
  return (
    <MobileShell density={density}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontFamily: MHC_font, fontWeight: 700, fontSize: 24, color: MHC.charcoal }}>Hi, Davinder</div>
        <div style={{ display: 'flex', gap: 8 }}>
          {kind === 'with-search' && (
            <div style={{ width: 30, height: 30, display: 'grid', placeItems: 'center' }}><MHCIcon name="search" size={17} color={MHC.charcoal}/></div>
          )}
          <div style={{ width: 30, height: 30, display: 'grid', placeItems: 'center' }}><MHCIcon name="mail" size={17} color={MHC.charcoal}/></div>
        </div>
      </div>
      <HeroCard title="Complete Managing Depression" eyebrow="Digital Therapeutic" cta="Start" image="assets/runner-sunset.png"/>
      <div>
        <SectionHead size={16}>Your Action Items</SectionHead>
        <div style={{ display: 'grid', gap: 8, marginTop: 10 }}>
          <ActionRow title="Get your A1C checked" subtitle="DTX" image="assets/portrait-older-man.jpg" compact/>
          <ActionRow title="Update your PCP" subtitle="DTX" compact/>
          {kind !== 'above-fold' && <ActionRow title="Start a new daily habit" subtitle="DTX" compact/>}
        </div>
      </div>
      {kind !== 'above-fold' && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <div style={{ fontFamily: MHC_font, fontWeight: 700, fontSize: 16, color: MHC.charcoal }}>Latest Measurements</div>
            <MHCIcon name="chevron-right" size={16} color={MHC.slate}/>
          </div>
          <div style={{ display: 'grid', gap: 8 }}>
            <HealthRow compact label="Sleep" value="9,344" icon="footsteps" color={MHC.blue}/>
            <HealthRow compact label="Sleep" value="7" unit="h 16m" icon="bed" color={MHC.aqua} sparkVariant="ticks"/>
            <HealthRow compact label="Sleep" value="1,972" icon="flame" color={MHC.orange}/>
          </div>
          <div style={{ marginTop: 10, padding: '10px 14px', background: '#eaf2fa', borderRadius: 10, fontFamily: MHC_font, fontSize: 13, fontWeight: 600, color: MHC.blueDark, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>Show all measurements</span>
            <MHCIcon name="chevron-right" size={16} color={MHC.blueDark}/>
          </div>
        </div>
      )}
      {kind === 'current' && (
        <div>
          <div style={{ fontFamily: MHC_font, fontWeight: 700, fontSize: 16, color: MHC.charcoal, marginBottom: 4 }}>Trends</div>
          <div style={{ fontFamily: MHC_font, fontSize: 11, color: MHC.slate, marginBottom: 10 }}>Last week: Oct 23 – Oct 29</div>
          <div style={{ display: 'grid', gap: 8 }}>
            <TrendRow label="Steps" value="7,343" dots={[1,1,1,1,1,0,0]}/>
            <TrendRow label="Sleep" value="7h 16m" dots={[1,2,1,1,1,1,1]}/>
            <TrendRow label="Calories" value="1,879" dots={[1,0,1,0,2,1,0]}/>
          </div>
        </div>
      )}
    </MobileShell>
  );
}

function TrendRow({ label, value, dots }) {
  const colors = ['#d9d9d9', MHC.green, MHC.mango || '#f3b31e'];
  return (
    <div style={{ border: `1px solid ${MHC.divider}`, borderRadius: 10, padding: '10px 14px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <MHCIcon name="bed" size={14} color={MHC.charcoal}/>
          <div style={{ fontFamily: MHC_font, fontSize: 13, fontWeight: 600, color: MHC.charcoal }}>{label}</div>
        </div>
        <MHCIcon name="chevron-right" size={14} color={MHC.slate}/>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 4 }}>
        <div style={{ fontFamily: MHC_font, fontWeight: 700, fontSize: 17, color: MHC.charcoal }}>{value}</div>
        <div style={{ display: 'flex', gap: 4 }}>
          {dots.map((d, i) => <div key={i} style={{ width: 9, height: 9, borderRadius: '50%', background: colors[d] || '#d9d9d9' }}/>)}
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: MHC_font, fontSize: 9, color: MHC.slate, marginTop: 4, letterSpacing: 0.1 }}>
        <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
      </div>
    </div>
  );
}

// ── Mobile Chat Advisor variants
function M_ChatAdvisor({ density = 'regular', variant = 'pills' }) {
  const Cmp = variant === 'pills' ? ChatAdvisorPills
           : variant === 'buttons' ? ChatAdvisorButtons : ChatAdvisorCards;
  return (
    <MobileShell density={density}>
      <MobileGreeting name="Andrew"/>
      <div style={{ borderRadius: 14, overflow: 'hidden', position: 'relative', height: 180 }}>
        <div style={{ width: '100%', height: '100%', background: `url(assets/portrait-woman-laughing.png) center/cover` }}/>
        <div style={{ position: 'absolute', left: 14, bottom: 12, color: '#fff', textShadow: '0 1px 4px rgba(0,0,0,.5)' }}>
          <div style={{ fontFamily: MHC_font, fontWeight: 700, fontSize: 16 }}>Complete Health Assessment</div>
          <div style={{ fontFamily: MHC_font, fontSize: 12, marginTop: 2 }}>Earn 1000 Points</div>
        </div>
      </div>
      <Cmp items={SAMPLE.chatItems}/>
      <div>
        <SectionHead size={16}>Just for you</SectionHead>
        <div style={{ display: 'grid', gap: 8, marginTop: 10 }}>
          <ActionRow title="Get active" subtitle="DTX" image="assets/stretch-woman.jpg" compact/>
          <ActionRow title="Improve your sleep" subtitle="DTX" image="assets/portrait-older-man.jpg" compact/>
          <ActionRow title="Start a new daily habit" subtitle="DTX" compact/>
        </div>
      </div>
      <InsightCard text={SAMPLE.insightText}/>
    </MobileShell>
  );
}

// ── Divergent direction: Brand-forward "Whole-day" home
function M_Divergent({ density = 'regular' }) {
  return (
    <div style={{
      width: 390, background: MHC.blueDark, fontFamily: MHC_font,
      display: 'flex', flexDirection: 'column', minHeight: 844,
    }}>
      {/* Dark brand top */}
      <div style={{ padding: '56px 24px 32px', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        {/* Circle motif */}
        <div style={{ position: 'absolute', right: -60, top: -60, width: 220, height: 220, borderRadius: '50%', background: MHC.blue, opacity: 0.6 }}/>
        <div style={{ position: 'absolute', right: 60, top: 40, width: 110, height: 110, borderRadius: '50%', background: MHC.orange, opacity: 0.9 }}/>
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <img src="assets/logo-mark-white.png" style={{ height: 28 }}/>
          <MHCIcon name="bell" size={20} color="#fff"/>
        </div>
        <div style={{ position: 'relative', marginTop: 40 }}>
          <div style={{ fontFamily: MHC_font, fontSize: 12, fontWeight: 700, letterSpacing: 1.5, color: MHC.orange, textTransform: 'uppercase' }}>Good morning</div>
          <div style={{ fontFamily: MHC_font, fontWeight: 700, fontSize: 38, lineHeight: 1, marginTop: 8 }}>Davinder.</div>
          <div style={{ fontFamily: MHC_font, fontSize: 15, color: 'rgba(255,255,255,0.75)', marginTop: 12, maxWidth: 280 }}>Small daily habits, looked after. Here's your day.</div>
        </div>
      </div>
      <div style={{ background: '#fff', borderRadius: '24px 24px 0 0', flex: 1, padding: '24px 20px', display: 'flex', flexDirection: 'column', gap: 22 }}>
        {/* Big focus card — circle-masked hero */}
        <div style={{ position: 'relative', padding: '20px 22px', borderRadius: 18, background: MHC.blue, color: '#fff', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: -30, bottom: -30, width: 140, height: 140, borderRadius: '50%', background: `url(assets/runner-sunset.png) center/cover`, border: '4px solid rgba(255,255,255,.25)' }}/>
          <div style={{ fontFamily: MHC_font, fontSize: 11, fontWeight: 700, letterSpacing: 1.5, color: MHC.orange, textTransform: 'uppercase' }}>Your focus</div>
          <div style={{ fontFamily: MHC_font, fontWeight: 700, fontSize: 22, lineHeight: 1.1, marginTop: 6, maxWidth: 200 }}>Managing Depression</div>
          <div style={{ fontFamily: MHC_font, fontSize: 12, color: 'rgba(255,255,255,.8)', marginTop: 4 }}>Day 3 of 12</div>
          <button style={{ marginTop: 16, padding: '8px 18px', borderRadius: 999, border: 0, background: '#fff', color: MHC.blue, fontFamily: MHC_font, fontWeight: 700, fontSize: 13, cursor: 'pointer' }}>continue →</button>
        </div>
        {/* Today trio */}
        <div>
          <div style={{ fontFamily: MHC_font, fontSize: 11, fontWeight: 700, letterSpacing: 1.5, color: MHC.slate, textTransform: 'uppercase' }}>Today</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginTop: 10 }}>
            {[
              { label: 'Steps', value: '8,572', color: MHC.blue, pct: 0.72, icon: 'footsteps' },
              { label: 'Sleep', value: '7h 16m', color: MHC.aqua, pct: 0.91, icon: 'bed' },
              { label: 'Active', value: '42m', color: MHC.orange, pct: 0.58, icon: 'heart' },
            ].map((t, i) => (
              <div key={i} style={{ aspectRatio: '1', borderRadius: 14, background: '#f7f9fa', padding: 12, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', right: -20, top: -20, width: 80, height: 80, borderRadius: '50%', background: t.color, opacity: 0.12 }}/>
                <MHCIcon name={t.icon} size={18} color={t.color} stroke={2.2}/>
                <div>
                  <div style={{ fontFamily: MHC_font, fontSize: 16, fontWeight: 700, color: MHC.charcoal }}>{t.value}</div>
                  <div style={{ fontFamily: MHC_font, fontSize: 10, color: MHC.slate, marginTop: 2 }}>{t.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Coach — orange accent */}
        <div style={{ border: `1px solid ${MHC.divider}`, borderRadius: 14, padding: '16px 18px', display: 'flex', gap: 14, alignItems: 'center' }}>
          <div style={{ width: 44, height: 44, borderRadius: '50%', background: `linear-gradient(135deg, ${MHC.orange}, ${MHC.aqua})`, display: 'grid', placeItems: 'center', flexShrink: 0 }}>
            <MHCIcon name="sparkles" size={20} color="#fff"/>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: MHC_font, fontSize: 11, fontWeight: 700, color: MHC.orange, letterSpacing: 1, textTransform: 'uppercase' }}>Your coach</div>
            <div style={{ fontFamily: MHC_font, fontSize: 14, color: MHC.charcoal, marginTop: 3, lineHeight: 1.4 }}>A 10-min walk after dinner gets you to your step goal.</div>
          </div>
        </div>
        {/* Journey list (anchor) */}
        <div>
          <div style={{ fontFamily: MHC_font, fontSize: 11, fontWeight: 700, letterSpacing: 1.5, color: MHC.slate, textTransform: 'uppercase' }}>The journey</div>
          <div style={{ display: 'grid', gap: 10, marginTop: 10 }}>
            {[
              { t: 'Treat insomnia', d: 'Start in 2 minutes', ic: 'moon', bg: MHC.blue },
              { t: 'Prevent diabetes', d: '4 short lessons', ic: 'droplet', bg: MHC.aqua },
              { t: 'Healthy blood pressure', d: 'New this week', ic: 'activity', bg: MHC.green },
            ].map((r, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 4px' }}>
                <IconChip icon={r.ic} bg={r.bg} size={36}/>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: MHC_font, fontWeight: 700, fontSize: 14, color: MHC.charcoal }}>{r.t}</div>
                  <div style={{ fontFamily: MHC_font, fontSize: 11, color: MHC.slate, marginTop: 1 }}>{r.d}</div>
                </div>
                <MHCIcon name="arrow-right" size={18} color={MHC.charcoal}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, {
  MobileShell, MobileGreeting, MobileHealthBlock,
  M_FinalDesign, M_FirstPass, M_Concept, M_ChatAdvisor, M_Divergent,
});
