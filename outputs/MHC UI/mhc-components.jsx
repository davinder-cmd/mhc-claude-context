// mhc-components.jsx — shared MHC-reskinned home components used by every option.
// All screens pull from here so re-skinning the brand only happens once.

const MHC = {
  blue: '#0f497f',
  blueDark: '#062a42',
  blueInk: '#194e82',
  orange: '#f15922',
  aqua: '#04a0b7',
  green: '#52a045',
  cloud: '#e6ebec',
  silver: '#c6cccd',
  slate: '#6e7a7d',
  charcoal: '#373d3f',
  divider: '#dfe4e5',
  surface: '#ffffff',
};

const font = "'Raleway', 'Helvetica Neue', Helvetica, Arial, sans-serif";

// Simple inline icons (Lucide-style, brand blue stroke).
function Icon({ name, size = 20, color = MHC.blue, stroke = 2 }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: stroke, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (name) {
    case 'mail': return <svg {...common}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>;
    case 'search': return <svg {...common}><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>;
    case 'chevron-right': return <svg {...common}><path d="m9 6 6 6-6 6"/></svg>;
    case 'chevron-left': return <svg {...common}><path d="m15 6-6 6 6 6"/></svg>;
    case 'menu': return <svg {...common}><path d="M3 6h18M3 12h18M3 18h18"/></svg>;
    case 'sparkles': return <svg {...common}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/></svg>;
    case 'home': return <svg {...common}><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/></svg>;
    case 'trophy': return <svg {...common}><path d="M6 4h12v4a6 6 0 0 1-12 0z"/><path d="M6 6H3v2a3 3 0 0 0 3 3M18 6h3v2a3 3 0 0 1-3 3"/><path d="M10 15h4v5H10z"/></svg>;
    case 'leaf': return <svg {...common}><path d="M21 3c-6 0-13 4-13 12 0 3 2 5 5 5 8 0 9-8 8-17z"/><path d="M5 21c4-8 8-12 16-16"/></svg>;
    case 'shield': return <svg {...common}><path d="M12 3 4 6v6c0 5 3 8 8 9 5-1 8-4 8-9V6z"/></svg>;
    case 'star': return <svg {...common}><path d="m12 3 2.5 6 6.5.5-5 4.5 1.5 6.5L12 17l-5.5 3.5L8 14l-5-4.5L9.5 9z"/></svg>;
    case 'footsteps': return <svg {...common}><path d="M7 4c1.5 0 2 1 2 3s-1 4-2 4-2-1-2-3 .5-4 2-4zM17 10c1.5 0 2 1 2 3s-1 4-2 4-2-1-2-3 .5-4 2-4z"/><path d="M5 13c-.5 2 0 4 1 5M15 19c-.5 2 0 4 1 5"/></svg>;
    case 'bed': return <svg {...common}><path d="M3 18V7h8a4 4 0 0 1 4 4v2h6v5"/><path d="M3 14h18"/></svg>;
    case 'heart': return <svg {...common}><path d="M12 21s-8-5-8-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6-8 11-8 11z"/></svg>;
    case 'plus': return <svg {...common}><path d="M12 5v14M5 12h14"/></svg>;
    case 'moon': return <svg {...common}><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/></svg>;
    case 'droplet': return <svg {...common}><path d="M12 3s6 7 6 12a6 6 0 0 1-12 0c0-5 6-12 6-12z"/></svg>;
    case 'activity': return <svg {...common}><path d="M3 12h4l3-8 4 16 3-8h4"/></svg>;
    case 'bell': return <svg {...common}><path d="M6 16V11a6 6 0 1 1 12 0v5l2 2H4zM9 20a3 3 0 0 0 6 0"/></svg>;
    case 'arrow-right': return <svg {...common}><path d="M5 12h14M13 6l6 6-6 6"/></svg>;
    case 'flame': return <svg {...common}><path d="M12 3c2 4-3 5-3 9a5 5 0 0 0 10 0c0-3-2-5-4-7 1 3-1 4-3 4-1 0-2-3 0-6z"/></svg>;
    case 'chevron-down': return <svg {...common}><path d="m6 9 6 6 6-6"/></svg>;
    case 'target': return <svg {...common}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill={color} stroke="none"/></svg>;
    default: return null;
  }
}

// UtilityChips — search + mail (notifications) circles in the page content area.
// Matches the established pattern used on the current home (cloud-bg circles next to greeting).
function UtilityChips({ onSearch, onBell, unread = 3, size = 36, iconSize = 16 }) {
  return (
    <div style={{ display: 'flex', gap: 10, flexShrink: 0 }}>
      <div onClick={onSearch} style={{
        width: size, height: size, borderRadius: '50%', background: MHC.cloud,
        display: 'grid', placeItems: 'center', cursor: 'pointer',
      }}>
        <Icon name="search" size={iconSize} color={MHC.charcoal} stroke={2}/>
      </div>
      <div onClick={onBell} style={{
        width: size, height: size, borderRadius: '50%', background: MHC.cloud,
        display: 'grid', placeItems: 'center', cursor: 'pointer', position: 'relative',
      }}>
        <Icon name="mail" size={iconSize} color={MHC.charcoal} stroke={2}/>
        {unread > 0 && (
          <div style={{
            position: 'absolute', top: -2, right: -2, minWidth: 16, height: 16,
            padding: '0 4px', borderRadius: 999, background: MHC.aqua, color: '#fff',
            fontFamily: font, fontSize: 9, fontWeight: 700,
            display: 'grid', placeItems: 'center', border: '1.5px solid #fff', boxSizing: 'border-box',
          }}>{unread > 9 ? '9+' : unread}</div>
        )}
      </div>
    </div>
  );
}

// Circular IconChip — follows brand's "circle signature"
function IconChip({ icon, bg, fg = '#fff', size = 40 }) {
  return (
    <div style={{ width: size, height: size, borderRadius: '50%', background: bg, display: 'grid', placeItems: 'center', flexShrink: 0 }}>
      <Icon name={icon} size={Math.round(size * 0.5)} color={fg} stroke={2.2} />
    </div>
  );
}

// Pill button
function PillBtn({ children, variant = 'primary', size = 'md', onClick, style = {} }) {
  const h = size === 'sm' ? 32 : size === 'lg' ? 48 : 40;
  const bg = variant === 'primary' ? MHC.blue : variant === 'ghost' ? 'transparent' : '#fff';
  const fg = variant === 'primary' ? '#fff' : MHC.blue;
  const border = variant === 'outline' ? `1.5px solid ${MHC.blue}` : variant === 'ghost' ? '0' : '0';
  return (
    <button onClick={onClick} style={{
      height: h, padding: `0 ${size === 'sm' ? 14 : 20}px`,
      borderRadius: 999, border, background: bg, color: fg,
      fontFamily: font, fontWeight: 600, fontSize: size === 'sm' ? 13 : 14,
      cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6,
      letterSpacing: 0.1, whiteSpace: 'nowrap', ...style,
    }}>{children}</button>
  );
}

// ─── Shared atoms ──────────────────────────────────────────

// Welcome banner (the light-blue "Welcome Davinder" strip)
function WelcomeBanner({ name = 'Davinder', subtitle = "Let's get this party started", compact = false }) {
  return (
    <div style={{
      background: '#eaf2fa', borderRadius: 12, padding: compact ? '16px 18px' : '20px 22px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
    }}>
      <div>
        <div style={{ fontFamily: font, fontWeight: 700, fontSize: compact ? 20 : 22, color: MHC.blueDark, letterSpacing: -0.1 }}>
          Welcome {name}
        </div>
        <div style={{ fontFamily: font, fontSize: 13, color: MHC.slate, marginTop: 2 }}>{subtitle}</div>
      </div>
      <div style={{ color: MHC.blue }}><Icon name="mail" size={22} color={MHC.blue}/></div>
    </div>
  );
}

// Hero challenge card (the "Complete Managing Depression" card)
function HeroCard({ title = 'Complete Managing Depression', eyebrow = 'Digital Therapeutics', cta = 'View Details', image, compact = false, onClick }) {
  return (
    <div style={{
      border: `1px solid ${MHC.divider}`, borderRadius: 12, overflow: 'hidden',
      display: 'grid', gridTemplateColumns: '1fr 1fr', background: '#fff', minHeight: compact ? 140 : 170,
    }}>
      <div style={{
        background: image ? `url(${image}) center/cover` : `linear-gradient(135deg, ${MHC.blue} 0%, ${MHC.aqua} 100%)`,
      }}/>
      <div style={{ padding: compact ? '16px 18px' : '20px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8 }}>
        <div style={{ fontFamily: font, fontWeight: 700, fontSize: compact ? 17 : 19, color: MHC.charcoal, lineHeight: 1.2 }}>{title}</div>
        <div style={{ fontFamily: font, fontSize: 13, color: MHC.slate }}>{eyebrow}</div>
        <div style={{ marginTop: 4 }}>
          <PillBtn size="sm" onClick={onClick}>{cta}</PillBtn>
        </div>
      </div>
    </div>
  );
}

// Hero banner thumbnail card (the "Wellbeing Champion" image + caption)
function BannerCard({ title, subtitle, image, color = MHC.cloud, onClick, compact = false }) {
  return (
    <div onClick={onClick} style={{
      border: `1px solid ${MHC.divider}`, borderRadius: 12, overflow: 'hidden', background: '#fff',
      cursor: onClick ? 'pointer' : 'default', display: 'flex', flexDirection: 'column',
    }}>
      <div style={{
        aspectRatio: '1 / 1',
        background: image ? `url(${image}) center/cover` : color,
      }}/>
      <div style={{ padding: compact ? '10px 12px 12px' : '12px 14px 14px' }}>
        <div style={{ fontFamily: font, fontWeight: 700, fontSize: 14, color: MHC.charcoal, lineHeight: 1.25 }}>{title}</div>
        <div style={{ fontFamily: font, fontSize: 12, color: MHC.slate, marginTop: 2 }}>{subtitle}</div>
      </div>
    </div>
  );
}

// Wide action item row
function ActionRow({ title, subtitle, image, color = '#efe9f5', onClick, compact = false }) {
  return (
    <div onClick={onClick} style={{
      border: `1px solid ${MHC.divider}`, borderRadius: 12, overflow: 'hidden', background: '#fff',
      display: 'flex', alignItems: 'stretch', cursor: onClick ? 'pointer' : 'default',
    }}>
      <div style={{
        width: compact ? 70 : 84, flexShrink: 0,
        background: image ? `url(${image}) center/cover` : color,
      }}/>
      <div style={{ flex: 1, padding: compact ? '12px 14px' : '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
        <div>
          <div style={{ fontFamily: font, fontWeight: 700, fontSize: 15, color: MHC.charcoal }}>{title}</div>
          <div style={{ fontFamily: font, fontSize: 12, color: MHC.slate, marginTop: 2 }}>{subtitle}</div>
        </div>
        <Icon name="chevron-right" size={18} color={MHC.slate} stroke={2}/>
      </div>
    </div>
  );
}

// Sparkline
function Sparkline({ color = MHC.blue, variant = 'bars', width = 110, height = 28, seed = 1 }) {
  const N = 24;
  const r = (i) => {
    const x = Math.sin((i + seed) * 9.13) * 10000;
    return (x - Math.floor(x));
  };
  if (variant === 'ticks') {
    return (
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        {Array.from({length: 7}, (_, i) => (
          <rect key={i} x={10 + i*15} y={4} width={2.5} height={height - 8} fill={color}/>
        ))}
      </svg>
    );
  }
  // bar sparkline with some dotted low bars on the left
  const gap = 2.5, bw = (width - gap*(N-1)) / N;
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      {Array.from({length: N}, (_, i) => {
        const v = r(i);
        const on = i > 8;
        const h = on ? 4 + v * (height - 6) : 1.5;
        return <rect key={i} x={i*(bw+gap)} y={height - h} width={bw} height={h} fill={color} opacity={on ? 1 : 0.35}/>;
      })}
    </svg>
  );
}

// Health data row
function HealthRow({ label, value, unit, icon, color = MHC.blue, date = 'July 12', sparkVariant = 'bars', compact = false, onClick }) {
  return (
    <div onClick={onClick} style={{
      border: `1px solid ${MHC.divider}`, borderRadius: 12, background: '#fff',
      padding: compact ? '12px 14px' : '14px 16px', display: 'flex', flexDirection: 'column', gap: 4,
      cursor: onClick ? 'pointer' : 'default',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <Icon name={icon} size={15} color={MHC.charcoal} stroke={2}/>
          <div style={{ fontFamily: font, fontSize: 13, fontWeight: 600, color: MHC.charcoal }}>{label}</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <span style={{ fontFamily: font, fontSize: 12, color: MHC.slate }}>{date}</span>
          <Icon name="chevron-right" size={14} color={MHC.slate}/>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <div>
          <span style={{ fontFamily: font, fontWeight: 700, fontSize: compact ? 20 : 22, color: MHC.charcoal }}>{value}</span>
          {unit && <span style={{ fontFamily: font, fontSize: 12, color: MHC.slate, marginLeft: 3 }}>{unit}</span>}
        </div>
        <Sparkline color={color} variant={sparkVariant} seed={value.toString().length}/>
      </div>
    </div>
  );
}

// Section header
function SectionHead({ children, right, size = 17 }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 4 }}>
      <div style={{ fontFamily: font, fontWeight: 700, fontSize: size, color: MHC.charcoal, display: 'flex', alignItems: 'center', gap: 6 }}>{children}</div>
      {right}
    </div>
  );
}

// Chat advisor — 3 variations
function ChatAdvisorPills({ items, onPick }) {
  return (
    <div>
      <SectionHead>Chat with Health Advisor <Icon name="sparkles" size={14} color={MHC.aqua}/></SectionHead>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 10 }}>
        {items.map((it, i) => (
          <button key={i} onClick={() => onPick && onPick(it)} style={{
            border: 'none', background: MHC.blue, color: '#fff',
            padding: '8px 14px', borderRadius: 999,
            fontFamily: font, fontWeight: 600, fontSize: 13, cursor: 'pointer',
          }}>{it.title}</button>
        ))}
      </div>
    </div>
  );
}
function ChatAdvisorCards({ items, onPick }) {
  return (
    <div>
      <SectionHead>Chat with Health Advisor <Icon name="sparkles" size={14} color={MHC.aqua}/></SectionHead>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 6, marginTop: 10 }}>
        {items.map((it, i) => (
          <div key={i} onClick={() => onPick && onPick(it)} style={{
            display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px',
            border: `1px solid ${MHC.divider}`, borderRadius: 10, background: '#fff', cursor: 'pointer',
          }}>
            <IconChip icon={it.icon || 'leaf'} bg={it.color || '#e8d5f2'} fg={it.fgColor || '#6e5dc6'} size={32}/>
            <div style={{ fontFamily: font, fontWeight: 600, fontSize: 14, color: MHC.charcoal, flex: 1 }}>{it.title}</div>
            <Icon name="chevron-right" size={16} color={MHC.slate}/>
          </div>
        ))}
      </div>
    </div>
  );
}
function ChatAdvisorButtons({ items, onPick }) {
  // 3-buttons variant (lozenge pills w/ icon avatar)
  return (
    <div>
      <SectionHead>Chat with Health Advisor <Icon name="sparkles" size={14} color={MHC.aqua}/></SectionHead>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginTop: 10 }}>
        {items.map((it, i) => (
          <div key={i} onClick={() => onPick && onPick(it)} style={{
            display: 'flex', alignItems: 'center', gap: 8, padding: '8px 10px',
            border: `1px solid ${MHC.divider}`, borderRadius: 999, background: '#fff', cursor: 'pointer',
            fontFamily: font, fontSize: 12.5, fontWeight: 600, color: MHC.charcoal,
          }}>
            <IconChip icon={it.icon || 'leaf'} bg={it.color || '#e8d5f2'} fg={it.fgColor || '#6e5dc6'} size={26}/>
            <span style={{ flex: 1, lineHeight: 1.1 }}>{it.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Insight card
function InsightCard({ text, onRefresh }) {
  return (
    <div>
      <SectionHead>Insights <Icon name="sparkles" size={14} color={MHC.aqua}/></SectionHead>
      <div style={{
        marginTop: 10, border: `1px solid ${MHC.divider}`, borderRadius: 12, background: '#fff',
        padding: '14px 16px',
      }}>
        <div style={{ fontFamily: font, fontSize: 13, color: MHC.charcoal, lineHeight: 1.5 }}>{text}</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 14 }}>
        <PillBtn size="sm" onClick={onRefresh}>Refresh</PillBtn>
      </div>
    </div>
  );
}

// Bottom tab bar
function BottomNav({ active = 'Home' }) {
  const tabs = [
    { key: 'Home', icon: 'home' },
    { key: 'Challenges', icon: 'trophy', badge: 3 },
    { key: 'Wellbeing', icon: 'leaf', badge: 3 },
    { key: 'Benefits', icon: 'shield', badge: 3 },
    { key: 'Rewards', icon: 'star', badge: 3 },
  ];
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-around', alignItems: 'center',
      padding: '8px 8px 6px', borderTop: `1px solid ${MHC.divider}`, background: '#fff',
    }}>
      {tabs.map(t => {
        const isActive = active === t.key;
        const c = isActive ? MHC.blue : MHC.slate;
        return (
          <div key={t.key} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, position: 'relative', padding: '2px 4px' }}>
            {t.badge ? (
              <div style={{ position: 'absolute', top: -2, right: 2, minWidth: 15, height: 15, padding: '0 4px', borderRadius: 999, background: '#d9435a', color: '#fff', fontSize: 9, fontWeight: 700, fontFamily: font, display: 'grid', placeItems: 'center', lineHeight: 1 }}>{t.badge}</div>
            ) : null}
            <Icon name={t.icon} size={18} color={c} stroke={isActive ? 2.3 : 2}/>
            <div style={{ fontFamily: font, fontSize: 9, fontWeight: isActive ? 700 : 500, color: c }}>{t.key}</div>
          </div>
        );
      })}
    </div>
  );
}

// Mobile top bar with MHC logo
function MobileTopBar() {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '10px 16px 8px', background: '#fff',
    }}>
      <Icon name="menu" size={20} color={MHC.charcoal} stroke={2}/>
      <img src="assets/logo-primary-blue.png" style={{ height: 24 }}/>
      <div style={{ width: 20 }}/>
    </div>
  );
}

// Desktop sidebar
function DesktopSidebar({ active = 'Home' }) {
  const nav = ['Home', 'Digital Care', 'Wellbeing', 'Benefits', 'Rewards'];
  const account = ['Activity Tracker', 'Wellbeing Interests', 'Profile', 'Invite My Dependents', 'Help', 'Sign Out'];
  return (
    <aside style={{
      width: 240, flexShrink: 0, padding: '24px 16px 24px 24px',
      borderRight: `1px solid ${MHC.divider}`, display: 'flex', flexDirection: 'column', gap: 22, background: '#fff',
    }}>
      <div style={{ padding: '0 12px' }}>
        <img src="assets/logo-primary-blue.png" style={{ height: 30 }}/>
      </div>
      <div>
        <div style={{ fontFamily: font, fontSize: 10.5, color: MHC.slate, padding: '0 12px 6px', letterSpacing: 0.12, textTransform: 'uppercase', fontWeight: 700 }}>Navigation</div>
        {nav.map(n => (
          <div key={n} style={{
            padding: '10px 12px', borderRadius: 8,
            background: n === active ? MHC.blue : 'transparent',
            color: n === active ? '#fff' : MHC.charcoal,
            fontFamily: font, fontWeight: n === active ? 700 : 500, fontSize: 14,
            cursor: 'pointer', marginBottom: 2,
          }}>{n}</div>
        ))}
      </div>
      <div>
        <div style={{ fontFamily: font, fontSize: 10.5, color: MHC.slate, padding: '0 12px 6px', letterSpacing: 0.12, textTransform: 'uppercase', fontWeight: 700 }}>My Account</div>
        {account.map(n => (
          <div key={n} style={{
            padding: '8px 12px', color: MHC.slate,
            fontFamily: font, fontWeight: 500, fontSize: 13, cursor: 'pointer',
          }}>{n}</div>
        ))}
      </div>
    </aside>
  );
}

// Desktop top nav bar (just "Home" centered)
function DesktopTopBar() {
  return (
    <div style={{
      height: 52, borderBottom: `1px solid ${MHC.divider}`, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff',
    }}>
      <div style={{ fontFamily: font, fontWeight: 600, fontSize: 15, color: MHC.charcoal }}>Home</div>
    </div>
  );
}

// ── Content sample data ──
const SAMPLE = {
  banners: [
    { title: 'Wellbeing Champion', subtitle: 'Access Your Training', image: 'assets/stretch-woman.jpg' },
    { title: 'Join BurnAlong', subtitle: 'Join your first class', image: 'assets/yoga-laptop.png' },
    { title: 'Start a new daily habit', subtitle: 'Level up your points', image: 'assets/portrait-man-smiling.png' },
    { title: 'Get your A1C checked', subtitle: 'Earn 100 points', image: 'assets/portrait-older-man.jpg' },
  ],
  actions: [
    { title: 'Wellbeing Champion', subtitle: 'Access Your Training', image: 'assets/stretch-woman.jpg' },
    { title: 'Join BurnAlong', subtitle: 'Access Your Training', image: 'assets/yoga-laptop.png' },
    { title: 'Start a new daily habit', subtitle: 'Access Your Training', image: 'assets/portrait-man-smiling.png' },
  ],
  chatItems: [
    { title: 'Treat Insomnia', icon: 'moon', color: '#e8d5f2', fgColor: '#6e5dc6' },
    { title: 'Diabetes Prevention', icon: 'droplet', color: '#ffe3d9', fgColor: MHC.orange },
    { title: 'Healthy Blood Pressure', icon: 'activity', color: '#d5edf4', fgColor: MHC.aqua },
  ],
  insightText: 'Davinder, you logged 5,635 steps today — solid base to build from, and every bit of movement counts. If it fits, consider a relaxed 10-minute after-dinner walk — an easy ~1,200–1,500 extra steps to cap the day.',
};

// Export to window so other Babel scripts can use
Object.assign(window, {
  MHC, MHC_font: font,
  MHCIcon: Icon, IconChip, PillBtn,
  WelcomeBanner, HeroCard, BannerCard, ActionRow, HealthRow, SectionHead,
  ChatAdvisorPills, ChatAdvisorCards, ChatAdvisorButtons, InsightCard,
  BottomNav, MobileTopBar, DesktopSidebar, DesktopTopBar, Sparkline, UtilityChips,
  SAMPLE,
});
