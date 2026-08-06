// Socials.jsx — brand-tiled links to Ronan's platforms.
// Replaces the old Instagram feed grid: no API, no tokens, no rate limits,
// nothing that can silently go stale.

const SOCIAL_HANDLE = 'ronanocfitness';

const SOCIALS = [
  {
    key: 'instagram',
    name: 'Instagram',
    handle: SOCIAL_HANDLE,
    url: `https://instagram.com/${SOCIAL_HANDLE}`,
    blurb: 'Daily tips & client results',
    // Instagram has no single brand colour — this is its official gradient.
    gradient: 'linear-gradient(45deg, #F58529 0%, #DD2A7B 45%, #8134AF 75%, #515BD4 100%)',
    glow: 'rgba(221,42,123,0.45)',
    icon: (
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    ),
  },
  {
    key: 'tiktok',
    name: 'TikTok',
    handle: SOCIAL_HANDLE,
    url: `https://tiktok.com/@${SOCIAL_HANDLE}`,
    blurb: 'Quick form & nutrition hacks',
    gradient: 'linear-gradient(45deg, #25F4EE 0%, #000000 50%, #FE2C55 100%)',
    glow: 'rgba(254,44,85,0.45)',
    icon: (
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    ),
  },
  {
    key: 'youtube',
    name: 'YouTube',
    handle: SOCIAL_HANDLE,
    url: `https://youtube.com/@${SOCIAL_HANDLE}`,
    blurb: 'Full workouts & breakdowns',
    gradient: 'linear-gradient(45deg, #FF0000 0%, #C4302B 100%)',
    glow: 'rgba(255,0,0,0.45)',
    icon: (
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    ),
  },
];

function SocialCard({ s, theme }) {
  const cardBg = theme === 'light' ? '#FFFFFF' : '#141414';
  const border = theme === 'light' ? '#E0E0E0' : '#2A2A2A';
  const fg     = theme === 'light' ? '#0D0D0D' : '#FFFFFF';
  const muted  = theme === 'light' ? '#666'    : '#888';

  return (
    <a
      href={s.url}
      target="_blank"
      rel="noopener noreferrer"
      className="social-card"
      style={{
        '--glow': s.glow,
        background: cardBg,
        border: `1px solid ${border}`,
        borderRadius: 6,
        padding: '30px 20px 26px',
        textDecoration: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: 4,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Brand wash that fades up on hover */}
      <span className="social-wash" style={{ position: 'absolute', inset: 0, background: s.gradient, opacity: 0 }} />

      <span
        className="social-icon"
        style={{
          position: 'relative',
          width: 60, height: 60, borderRadius: 14,
          background: s.gradient,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: 14, flexShrink: 0,
        }}
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
          {s.icon}
        </svg>
      </span>

      <span style={{
        position: 'relative',
        fontFamily: "'Bebas Neue', sans-serif", fontSize: 24, lineHeight: 1,
        letterSpacing: '0.04em', textTransform: 'uppercase', color: fg,
      }}>
        {s.name}
      </span>

      <span style={{
        position: 'relative',
        fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600,
        color: '#D42B2B', letterSpacing: '0.02em',
      }}>
        @{s.handle}
      </span>

      <span style={{
        position: 'relative',
        fontFamily: "'DM Sans', sans-serif", fontSize: 12.5, lineHeight: 1.5,
        color: muted, marginTop: 6,
      }}>
        {s.blurb}
      </span>

      <span className="social-cta" style={{
        position: 'relative',
        fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 700,
        letterSpacing: '0.14em', textTransform: 'uppercase',
        color: fg, marginTop: 16,
        display: 'inline-flex', alignItems: 'center', gap: 6,
      }}>
        Follow
        <svg className="social-arrow" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </span>
    </a>
  );
}

function Socials({ theme }) {
  const bg    = theme === 'light' ? '#F2F2F2' : '#0D0D0D';
  const fg    = theme === 'light' ? '#0D0D0D' : '#FFFFFF';
  const muted = theme === 'light' ? '#666'    : '#888';

  return (
    <section style={{ background: bg, padding: '80px 24px' }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <div style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: '#D42B2B', marginBottom: 10,
          }}>
            Follow The Journey
          </div>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(36px, 10vw, 48px)', lineHeight: 1,
            letterSpacing: '0.02em', textTransform: 'uppercase',
            color: fg, margin: 0,
          }}>
            Find Me Online
          </h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.6,
            color: muted, margin: '12px auto 0', maxWidth: 420,
          }}>
            Same handle everywhere — <strong style={{ color: fg }}>@{SOCIAL_HANDLE}</strong>
          </p>
        </div>

        {/* Columns come from .socials-grid: 3-across from 700px up, single
            column below — auto-fit left an orphaned third card on tablets. */}
        <div className="socials-grid">
          {SOCIALS.map(s => <SocialCard key={s.key} s={s} theme={theme} />)}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Socials, SocialCard });
