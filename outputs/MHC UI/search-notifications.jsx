// search-notifications.jsx
// Search modal + Notifications panel + the trigger row used in top bars.
//
// Both are controlled-presentation: the parent renders triggers and decides whether
// the modal/panel is open. Triggers use a small useState hook for self-contained demos.

function useToggle(init = false) {
  const [v, setV] = React.useState(init);
  return [v, () => setV(x => !x), () => setV(false), () => setV(true)];
}

// ── SEARCH MODAL ──────────────────────────────────────────────
// Opens centered, dimmed backdrop, traps the eye on the input.
function SearchModal({ open, onClose }) {
  if (!open) return null;
  const recent = ['Sleep program', 'A1C test', 'BurnAlong yoga', 'Annual checkup'];
  const suggestions = [
    { icon: 'moon',     fg: '#6e5dc6', bg: '#e8d5f2', label: 'Treat Insomnia',     sub: '8-week digital therapeutic' },
    { icon: 'activity', fg: MHC.aqua,  bg: '#d5edf4', label: 'Healthy Blood Pressure', sub: 'Program · 6 weeks' },
    { icon: 'flame',    fg: MHC.orange,bg: '#ffe3d9', label: 'Quit smoking',       sub: 'Program · self-paced' },
    { icon: 'droplet',  fg: MHC.green, bg: '#d8ecd5', label: 'Diabetes Prevention', sub: 'Program · 4 months' },
  ];
  const places = [
    { label: 'Wellbeing Library', icon:'sparkles' },
    { label: 'My Activity Tracker', icon:'activity' },
    { label: 'Benefits & Rewards', icon:'crown' },
    { label: 'Help Center', icon:'help' },
  ];
  return (
    <div style={{
      position:'absolute', inset: 0, zIndex: 100,
      background:'rgba(15,73,127,0.32)',
      display:'flex', alignItems:'flex-start', justifyContent:'center',
      paddingTop: 80, fontFamily: MHC_font,
    }} onClick={onClose}>
      <div onClick={(e)=>e.stopPropagation()} style={{
        width: 'min(680px, calc(100% - 48px))',
        background:'#fff', borderRadius: 18,
        boxShadow:'0 24px 60px rgba(15,73,127,0.28), 0 4px 16px rgba(0,0,0,0.08)',
        overflow:'hidden',
      }}>
        {/* Input row */}
        <div style={{ display:'flex', alignItems:'center', gap: 12, padding:'18px 22px', borderBottom:`1px solid ${MHC.divider}` }}>
          <Icon name="search" size={20} color={MHC.slate} stroke={2.2}/>
          <input
            autoFocus
            placeholder="Search programs, activities, benefits…"
            style={{
              flex: 1, border:'none', outline:'none', fontFamily: MHC_font, fontSize: 17,
              color: MHC.charcoal, background:'transparent',
            }}
          />
          <kbd style={{
            fontFamily: MHC_font, fontSize: 11, fontWeight: 700, color: MHC.slate,
            background: MHC.cloud, border:`1px solid ${MHC.divider}`, borderRadius: 6, padding:'3px 7px',
          }}>esc</kbd>
        </div>

        <div style={{ padding:'14px 22px 18px', display:'flex', flexDirection:'column', gap: 16, maxHeight: 460, overflow:'auto' }}>
          {/* Recent */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: MHC.slate, letterSpacing: 0.6, textTransform:'uppercase', marginBottom: 8 }}>Recent</div>
            <div style={{ display:'flex', flexWrap:'wrap', gap: 8 }}>
              {recent.map(r => (
                <div key={r} style={{
                  display:'inline-flex', alignItems:'center', gap: 6,
                  background:'#f6f7f8', border:`1px solid ${MHC.divider}`, borderRadius: 999,
                  padding:'6px 12px', fontSize: 13, color: MHC.charcoal, fontWeight: 600, cursor:'pointer',
                }}>
                  <Icon name="target" size={12} color={MHC.slate}/>
                  {r}
                </div>
              ))}
            </div>
          </div>

          {/* Suggested programs */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: MHC.slate, letterSpacing: 0.6, textTransform:'uppercase', marginBottom: 8 }}>Suggested for you</div>
            <div style={{ display:'flex', flexDirection:'column', gap: 4 }}>
              {suggestions.map(s => (
                <div key={s.label} style={{
                  display:'flex', alignItems:'center', gap: 12,
                  padding:'10px 8px', borderRadius: 10, cursor:'pointer',
                }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 10, background: s.bg,
                    display:'grid', placeItems:'center', flexShrink: 0,
                  }}>
                    <Icon name={s.icon} size={18} color={s.fg} stroke={2.2}/>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 700, color: MHC.charcoal }}>{s.label}</div>
                    <div style={{ fontSize: 12.5, color: MHC.slate, marginTop: 1 }}>{s.sub}</div>
                  </div>
                  <Icon name="arrow-right" size={16} color={MHC.slate}/>
                </div>
              ))}
            </div>
          </div>

          {/* Jump to */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: MHC.slate, letterSpacing: 0.6, textTransform:'uppercase', marginBottom: 8 }}>Jump to</div>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 6 }}>
              {places.map(p => (
                <div key={p.label} style={{
                  display:'flex', alignItems:'center', gap: 10, padding:'8px 10px', borderRadius: 8, cursor:'pointer',
                  fontSize: 13.5, fontWeight: 600, color: MHC.charcoal,
                }}>
                  <Icon name={p.icon} size={14} color={MHC.blue} stroke={2.2}/>
                  {p.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer hint */}
        <div style={{ padding:'10px 22px', borderTop:`1px solid ${MHC.divider}`, background:'#fafbfc',
          display:'flex', alignItems:'center', gap: 14, fontSize: 11.5, color: MHC.slate }}>
          <span><kbd style={kbdStyle}>↑</kbd><kbd style={kbdStyle}>↓</kbd> to navigate</span>
          <span><kbd style={kbdStyle}>↵</kbd> to select</span>
          <span style={{ marginLeft:'auto' }}>Powered by MHC search</span>
        </div>
      </div>
    </div>
  );
}

const kbdStyle = {
  fontFamily: 'inherit', fontSize: 11, fontWeight: 700, color: '#6e7a7d',
  background: '#fff', border: '1px solid #e6ebec', borderRadius: 4, padding:'1px 5px', marginRight: 4,
};

// ── NOTIFICATIONS PANEL ──────────────────────────────────────
function NotificationsPanel({ open, onClose, anchor = 'right' }) {
  if (!open) return null;
  const items = [
    { kind:'reward',  icon:'crown',    fg:'#a08200', bg:'#fff7d4',
      title:'You earned 50 points', body:'For completing 7 days of sleep tracking.', time:'2h ago', unread: true },
    { kind:'insight', icon:'sparkles', fg: MHC.blue,  bg:'#eaf2fa',
      title:'New insight is ready', body:'Your steps were higher than usual yesterday — see why.', time:'4h ago', unread: true },
    { kind:'program', icon:'moon',     fg:'#6e5dc6', bg:'#e8d5f2',
      title:'Tonight\u2019s Insomnia session', body:'Week 2 · 12 min wind-down. Tap to start.', time:'8h ago', unread: true },
    { kind:'system',  icon:'activity', fg: MHC.aqua, bg:'#d5edf4',
      title:'Apple Health sync paused', body:'Re-link in Settings to keep your Today data flowing.', time:'Yesterday', unread: false },
    { kind:'social',  icon:'bell',     fg: MHC.orange,bg:'#ffe3d9',
      title:'Wellbeing Champion training', body:'New module unlocked: Conversations that work.', time:'2 days ago', unread: false },
  ];
  return (
    <div style={{
      position:'absolute', inset: 0, zIndex: 99,
      background:'rgba(15,30,45,0.18)',
      fontFamily: MHC_font,
    }} onClick={onClose}>
      <div onClick={(e)=>e.stopPropagation()} style={{
        position:'absolute', top: 12, [anchor]: 16, width: 380, maxHeight:'calc(100% - 24px)',
        background:'#fff', borderRadius: 16,
        boxShadow:'0 16px 48px rgba(15,73,127,0.22), 0 4px 16px rgba(0,0,0,0.08)',
        overflow:'hidden', display:'flex', flexDirection:'column',
      }}>
        {/* Header */}
        <div style={{ padding:'16px 18px 14px', borderBottom:`1px solid ${MHC.divider}`, display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <div style={{ display:'flex', alignItems:'center', gap: 10 }}>
            <div style={{ fontWeight: 700, fontSize: 16, color: MHC.charcoal }}>Notifications</div>
            <span style={{
              background: MHC.orange, color:'#fff', fontSize: 10.5, fontWeight: 700,
              borderRadius: 999, padding:'2px 7px', letterSpacing: 0.3,
            }}>3 new</span>
          </div>
          <div style={{ fontSize: 12.5, color: MHC.blue, fontWeight: 700, cursor:'pointer' }}>Mark all read</div>
        </div>

        {/* Filter chips */}
        <div style={{ display:'flex', gap: 6, padding:'10px 14px', borderBottom:`1px solid ${MHC.divider}`, overflowX:'auto' }}>
          {['All','Unread','Programs','Rewards','System'].map((c,i) => (
            <div key={c} style={{
              padding:'5px 11px', borderRadius: 999,
              background: i === 0 ? MHC.blue : '#f6f7f8',
              color: i === 0 ? '#fff' : MHC.charcoal,
              fontSize: 12, fontWeight: 600, whiteSpace:'nowrap', cursor:'pointer',
            }}>{c}</div>
          ))}
        </div>

        {/* List */}
        <div style={{ flex: 1, overflow:'auto' }}>
          {items.map((it, i) => (
            <div key={i} style={{
              display:'flex', alignItems:'flex-start', gap: 12, padding:'14px 18px',
              borderBottom: i < items.length - 1 ? `1px solid ${MHC.divider}` : 'none',
              background: it.unread ? '#fbfdff' : '#fff', cursor:'pointer', position:'relative',
            }}>
              {it.unread && <span style={{ position:'absolute', left: 6, top: 22, width: 6, height: 6, borderRadius:'50%', background: MHC.blue }}/>}
              <div style={{ width: 34, height: 34, borderRadius: 10, background: it.bg, display:'grid', placeItems:'center', flexShrink: 0 }}>
                <Icon name={it.icon} size={17} color={it.fg} stroke={2.2}/>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13.5, fontWeight: 700, color: MHC.charcoal, lineHeight: 1.25 }}>{it.title}</div>
                <div style={{ fontSize: 12.5, color: MHC.slate, marginTop: 3, lineHeight: 1.4 }}>{it.body}</div>
                <div style={{ fontSize: 11, color: MHC.slate, marginTop: 5 }}>{it.time}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ padding:'10px 18px', borderTop:`1px solid ${MHC.divider}`, textAlign:'center', background:'#fafbfc' }}>
          <span style={{ fontSize: 12.5, color: MHC.blue, fontWeight: 700, cursor:'pointer' }}>See all notifications →</span>
        </div>
      </div>
    </div>
  );
}

// ── TRIGGER GROUPS used in top bars ──────────────────────────
// Desktop: full search field + bell with badge
function DesktopUtilityRow({ onSearch, onBell, unread = 3, search = 'compact' }) {
  if (search === 'inline') {
    // Wide, looks like a real input. Best for the with-left-nav top bar that's otherwise empty.
    return (
      <div style={{ display:'flex', alignItems:'center', gap: 14 }}>
        <div onClick={onSearch} style={{
          display:'flex', alignItems:'center', gap: 10,
          background:'#f3f5f7', border:`1px solid ${MHC.divider}`, borderRadius: 10,
          padding:'8px 14px', minWidth: 320, cursor:'pointer', fontFamily: MHC_font,
        }}>
          <Icon name="search" size={16} color={MHC.slate} stroke={2.2}/>
          <span style={{ fontSize: 13, color: MHC.slate, flex: 1 }}>Search programs, activities, benefits…</span>
          <kbd style={kbdStyle}>⌘K</kbd>
        </div>
        <BellWithBadge onClick={onBell} unread={unread}/>
      </div>
    );
  }
  // Compact: icon + small chip. For dense top-nav.
  return (
    <div style={{ display:'flex', alignItems:'center', gap: 12 }}>
      <div onClick={onSearch} style={{
        display:'flex', alignItems:'center', gap: 8,
        background:'#f3f5f7', border:`1px solid ${MHC.divider}`, borderRadius: 999,
        padding:'7px 12px 7px 11px', cursor:'pointer', fontFamily: MHC_font,
      }}>
        <Icon name="search" size={15} color={MHC.slate} stroke={2.2}/>
        <span style={{ fontSize: 12.5, color: MHC.slate }}>Search</span>
        <kbd style={kbdStyle}>⌘K</kbd>
      </div>
      <BellWithBadge onClick={onBell} unread={unread}/>
    </div>
  );
}

function BellWithBadge({ onClick, unread = 0, size = 20, color }) {
  return (
    <div onClick={onClick} style={{ position:'relative', cursor:'pointer', padding: 4 }}>
      <Icon name="bell" size={size} color={color || MHC.slate} stroke={2.2}/>
      {unread > 0 && (
        <span style={{
          position:'absolute', top: 2, right: 2, minWidth: 14, height: 14,
          borderRadius: 999, background: MHC.orange, color:'#fff',
          fontFamily: MHC_font, fontSize: 9.5, fontWeight: 700,
          display:'grid', placeItems:'center', padding:'0 4px',
          border:'1.5px solid #fff', boxSizing:'border-box',
        }}>{unread > 9 ? '9+' : unread}</span>
      )}
    </div>
  );
}

// Mobile: two icons (search + bell with badge). Tap search → opens modal.
function MobileUtilityRow({ onSearch, onBell, unread = 3 }) {
  return (
    <div style={{ display:'flex', alignItems:'center', gap: 14 }}>
      <div onClick={onSearch} style={{ cursor:'pointer', padding: 4 }}><Icon name="search" size={20} color={MHC.charcoal} stroke={2.2}/></div>
      <BellWithBadge onClick={onBell} unread={unread} size={20} color={MHC.charcoal}/>
    </div>
  );
}

Object.assign(window, {
  SearchModal, NotificationsPanel,
  DesktopUtilityRow, MobileUtilityRow, BellWithBadge,
  useToggle,
});
