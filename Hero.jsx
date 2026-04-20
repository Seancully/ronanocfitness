// Hero.jsx — Nav + Hero section with coach intro video

function Logo({ theme }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, lineHeight: 1 }}>
      <span style={{ fontFamily: "'Bebas Neue', 'Arial Narrow', sans-serif", fontSize: 28, letterSpacing: 2, color: '#D42B2B' }}>RONANOC</span>
      <span style={{ width: 1, height: 22, background: '#555', flexShrink: 0, display: 'inline-block' }}></span>
      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, fontWeight: 500, color: theme === 'light' ? '#0D0D0D' : '#FFFFFF' }}>fitness</span>
    </div>
  );
}

function Nav({ theme, onToggle }) {
  const bg = theme === 'light' ? '#FFFFFF' : '#0D0D0D';
  const border = theme === 'light' ? '#E0E0E0' : '#1A1A1A';
  const fg = theme === 'light' ? '#0D0D0D' : '#FFFFFF';

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: bg, borderBottom: `1px solid ${border}`,
      padding: '0 20px', height: 56,
      display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
    }}>
      <Logo theme={theme} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginLeft: 'auto' }}>
        <a href="tel:+353833604182" style={{
          color: '#D42B2B', textDecoration: 'none',
          display: 'flex', alignItems: 'center', gap: 6,
        }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D42B2B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.38 2 2 0 0 1 3.57 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.54a16 16 0 0 0 6.07 6.07l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          <span className="phone-label" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: '0.02em' }}>+353 83 360 4182</span>
        </a>
        <button onClick={onToggle} style={{
          background: 'transparent', border: `1px solid ${border}`,
          color: fg, fontFamily: "'DM Sans', sans-serif",
          fontSize: 12, fontWeight: 600, letterSpacing: '0.08em',
          textTransform: 'uppercase', padding: '6px 10px', cursor: 'pointer',
          borderRadius: 2,
        }}>
          {theme === 'light' ? '◑ Dark' : '◑ Light'}
        </button>
      </div>
    </nav>
  );
}

// Drop-in video player. Set COACH_VIDEO to a YouTube/Vimeo embed URL
// or a direct .mp4 URL when Ronan's video is ready.
const COACH_VIDEO = '';

function CoachVideo({ theme }) {
  const cardBg = theme === 'light' ? '#F2F2F2' : '#111';
  const border = theme === 'light' ? '#E0E0E0' : '#2A2A2A';
  const muted  = theme === 'light' ? '#666'    : '#888';
  const isEmbed = COACH_VIDEO && !/\.(mp4|webm|mov)$/i.test(COACH_VIDEO);

  return (
    <div style={{
      background: cardBg, border: `1px solid ${border}`,
      borderRadius: 4, aspectRatio: '16/9', overflow: 'hidden',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', gap: 14,
    }}>
      {COACH_VIDEO ? (
        isEmbed ? (
          <iframe
            src={COACH_VIDEO}
            title="Meet Ronan"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ width: '100%', height: '100%', border: 0 }}
          />
        ) : (
          <video controls playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', background: '#000' }}>
            <source src={COACH_VIDEO} />
          </video>
        )
      ) : (
        <>
          <div style={{
            width: 64, height: 64, borderRadius: '50%',
            border: `2px solid ${border}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{
              width: 0, height: 0,
              borderTop: '12px solid transparent',
              borderBottom: '12px solid transparent',
              borderLeft: `20px solid #D42B2B`,
              marginLeft: 5,
            }} />
          </div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: muted, letterSpacing: '0.05em' }}>
            Video coming soon
          </div>
        </>
      )}
    </div>
  );
}

function Hero({ theme }) {
  const bg = theme === 'light' ? '#F2F2F2' : '#0D0D0D';
  const fg = theme === 'light' ? '#0D0D0D' : '#FFFFFF';
  const muted = theme === 'light' ? '#555' : '#888';
  const WHATSAPP = 'https://wa.me/353833604182?text=Hi%20Ronan%2C%20I%27m%20interested%20in%20your%20coaching%20packages%2C%20can%20you%20send%20me%20more%20information%3F';

  return (
    <section style={{
      background: bg, minHeight: '100dvh', paddingTop: 56,
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', padding: '80px 24px 60px',
      boxSizing: 'border-box',
    }}>
      <div style={{ maxWidth: 480, width: '100%', textAlign: 'center' }}>
        <div style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600,
          letterSpacing: '0.18em', textTransform: 'uppercase',
          color: '#D42B2B', marginBottom: 16,
        }}>
          Online Transformation Coaching
        </div>
        <h1 style={{
          fontFamily: "'Bebas Neue', 'Arial Narrow', sans-serif",
          fontSize: 'clamp(52px, 14vw, 72px)', lineHeight: 1,
          letterSpacing: '0.02em', textTransform: 'uppercase',
          color: fg, margin: '0 0 16px',
        }}>
          Transform<br />Your Body.<br />
          <span style={{ color: '#D42B2B' }}>Transform</span> Your Life.
        </h1>
        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: 17, lineHeight: 1.65,
          color: muted, margin: '0 0 28px',
        }}>
          Personalised nutrition &amp; training coaching built around your life — real results, no fad diets.
        </p>

        <div style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600,
          letterSpacing: '0.18em', textTransform: 'uppercase',
          color: '#D42B2B', marginBottom: 10,
        }}>
          Meet Your Coach — What I Offer, Why You Should Trust Me
        </div>
        <CoachVideo theme={theme} />

        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" style={{
          display: 'inline-block', marginTop: 28,
          background: '#D42B2B', color: '#FFFFFF',
          fontFamily: "'DM Sans', sans-serif", fontSize: 15,
          fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
          padding: '16px 36px', textDecoration: 'none', borderRadius: 0,
        }}>
          Start Your Transformation
        </a>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: muted, marginTop: 12 }}>
          Message on WhatsApp · Reply within 24h
        </p>
      </div>
    </section>
  );
}

Object.assign(window, { Logo, Nav, Hero, CoachVideo });
