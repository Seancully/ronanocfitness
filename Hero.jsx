// Hero.jsx — Nav + Hero section with coach intro video

function Logo({ theme }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, lineHeight: 1 }}>
      <span style={{ fontFamily: "'Bebas Neue', 'Arial Narrow', sans-serif", fontSize: 28, letterSpacing: 2, color: '#D42B2B' }}>RONANOC</span>
      <span style={{ width: 1, height: 22, background: '#555', flexShrink: 0, display: 'inline-block' }}></span>
      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, fontWeight: 500, color: theme === 'light' ? '#0D0D0D' : '#FFFFFF' }}>coaching</span>
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
      {/* No phone link: enquiries go through WhatsApp, not direct calls. */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginLeft: 'auto' }}>
        <button onClick={onToggle} style={{
          background: 'transparent', border: `1px solid ${border}`,
          color: fg, fontFamily: "'DM Sans', sans-serif",
          fontSize: 12, fontWeight: 600, letterSpacing: '0.08em',
          textTransform: 'uppercase', padding: '6px 10px', cursor: 'pointer',
          borderRadius: 999,
        }}>
          {theme === 'light' ? '◑ Dark' : '◑ Light'}
        </button>
      </div>
    </nav>
  );
}

// Coach intro video. Local file so it works on any domain — swap to a
// YouTube/Vimeo embed URL here if it ever moves to a hosted player.
const COACH_VIDEO  = 'assets/video/meet-ronan.mp4';
const COACH_POSTER = 'assets/video/meet-ronan-poster.jpg';

function CoachVideo({ theme }) {
  const cardBg = theme === 'light' ? '#F2F2F2' : '#111';
  const border = theme === 'light' ? '#E0E0E0' : '#2A2A2A';
  const muted  = theme === 'light' ? '#666'    : '#888';
  const isEmbed = COACH_VIDEO && !/\.(mp4|webm|mov)$/i.test(COACH_VIDEO);

  // Hold the poster until the user asks to play — nothing is downloaded on
  // page load. Kept at 720p/~7MB: a 34MB build blew the 10-minute GitHub
  // Pages deploy timeout, so don't raise this without re-testing the deploy.
  const [playing, setPlaying] = React.useState(false);
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    if (playing && videoRef.current) videoRef.current.play().catch(() => {});
  }, [playing]);

  const frame = {
    background: cardBg, border: `1px solid ${border}`,
    borderRadius: 16, aspectRatio: '16/9', overflow: 'hidden',
    position: 'relative',
  };

  if (!COACH_VIDEO) {
    return (
      <div style={{ ...frame, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14 }}>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: muted, letterSpacing: '0.05em' }}>
          Video coming soon
        </div>
      </div>
    );
  }

  if (isEmbed) {
    return (
      <div style={frame}>
        <iframe
          src={COACH_VIDEO}
          title="Meet Ronan"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ width: '100%', height: '100%', border: 0 }}
        />
      </div>
    );
  }

  return (
    <div style={frame}>
      {playing ? (
        <video
          ref={videoRef}
          controls playsInline
          poster={COACH_POSTER}
          style={{ width: '100%', height: '100%', objectFit: 'cover', background: '#000', display: 'block' }}
        >
          <source src={COACH_VIDEO} type="video/mp4" />
          Your browser doesn't support embedded video.
        </video>
      ) : (
        <button
          onClick={() => setPlaying(true)}
          aria-label="Play Ronan's intro video"
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            border: 'none', padding: 0, cursor: 'pointer',
            background: `#000 center/cover no-repeat url(${COACH_POSTER})`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <span style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.28)' }} />
          <span style={{
            position: 'relative', width: 68, height: 68, borderRadius: '50%',
            background: '#D42B2B', display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 6px 24px rgba(0,0,0,0.45)',
          }}>
            <span style={{
              width: 0, height: 0,
              borderTop: '13px solid transparent',
              borderBottom: '13px solid transparent',
              borderLeft: '21px solid #fff',
              marginLeft: 6,
            }} />
          </span>
          {/* Top-left, so it never clashes with the video's burned-in subtitles */}
          <span style={{
            position: 'absolute', top: 10, left: 10,
            background: 'rgba(0,0,0,0.6)', padding: '4px 9px', borderRadius: 999,
            fontFamily: "'DM Sans', sans-serif", fontSize: 10, fontWeight: 700,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.92)',
          }}>
            Watch · 1:38
          </span>
        </button>
      )}
    </div>
  );
}

// Compact proof strip. Shows a CLIENT result rather than Ronan's own — the
// selling point is what he gets other people, not his own physique. Links
// down to the full Before & After section rather than duplicating it.
function HeroProof({ theme }) {
  const cardBg = theme === 'light' ? '#FFFFFF' : '#141414';
  const border = theme === 'light' ? '#E0E0E0' : '#2A2A2A';
  const fg     = theme === 'light' ? '#0D0D0D' : '#FFFFFF';
  const muted  = theme === 'light' ? '#666'    : '#888';

  const shot = (src, label) => (
    <div style={{ position: 'relative', width: 54, height: 54, borderRadius: 8, overflow: 'hidden', flexShrink: 0 }}>
      <img src={src} alt={`Client ${label.toLowerCase()}`} loading="lazy"
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      <span style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        background: label === 'After' ? '#D42B2B' : 'rgba(0,0,0,0.65)',
        color: '#fff', fontFamily: "'DM Sans', sans-serif", fontSize: 8,
        fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
        textAlign: 'center', padding: '2px 0',
      }}>{label}</span>
    </div>
  );

  return (
    <a href="#transformations" className="hero-proof" style={{
      display: 'flex', alignItems: 'center', gap: 12,
      marginTop: 18, padding: '10px 14px 10px 10px',
      background: cardBg, border: `1px solid ${border}`, borderRadius: 16,
      textDecoration: 'none', textAlign: 'left',
    }}>
      <div style={{ display: 'flex', gap: 3, flexShrink: 0 }}>
        {shot('assets/transformations/client2-before.jpg', 'Before')}
        {shot('assets/transformations/client2-after.jpg', 'After')}
      </div>
      <div style={{ minWidth: 0, flex: 1 }}>
        <div style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: 10, fontWeight: 700,
          letterSpacing: '0.14em', textTransform: 'uppercase', color: '#D42B2B',
        }}>
          Client Transformations
        </div>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: fg, fontWeight: 600, marginTop: 3, lineHeight: 1.35 }}>
          Real results from real clients.
        </div>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11.5, color: muted, marginTop: 2 }}>
          See all results ↓
        </div>
      </div>
    </a>
  );
}

function Hero({ theme }) {
  const bg = theme === 'light' ? '#F2F2F2' : '#0D0D0D';
  const fg = theme === 'light' ? '#0D0D0D' : '#FFFFFF';
  const muted = theme === 'light' ? '#555' : '#888';
  const WHATSAPP = 'https://wa.me/353833604182?text=Hi%20Ronan%2C%20I%27m%20interested%20in%20your%20coaching%20packages%2C%20can%20you%20send%20me%20more%20information%3F';

  return (
    <section className="hero-section" style={{
      background: bg, minHeight: '100dvh',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box',
    }}>
      {/* Phones stack copy -> video -> CTA so the video is reachable without
          scrolling; from 900px the CTA rejoins the copy column on the left
          and the media sits alongside. */}
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="hero-eyebrow" style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: '#D42B2B',
          }}>
            Online Transformation Coaching
          </div>
          <h1 className="hero-title" style={{
            fontFamily: "'Bebas Neue', 'Arial Narrow', sans-serif",
            lineHeight: 0.98,
            letterSpacing: '0.02em', textTransform: 'uppercase',
            color: fg, margin: '0 0 16px',
          }}>
            Build the body you’re <span style={{ color: '#D42B2B' }}>proud of</span>
            <br />
            Keep it <span style={{ color: '#D42B2B' }}>for life</span>
          </h1>
          <p className="hero-lede" style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 17, lineHeight: 1.65,
            color: muted, margin: 0,
          }}>
            Personalised nutrition &amp; training coaching built around your life — real results, no fad diets.
          </p>
        </div>

        <div className="hero-cta">
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-pill btn-pill-lg" style={{
            display: 'inline-block',
            background: '#D42B2B', color: '#FFFFFF',
            fontFamily: "'DM Sans', sans-serif", fontSize: 15,
            fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
            padding: '16px 36px', textDecoration: 'none', borderRadius: 999,
          }}>
            Start Your Transformation
          </a>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: muted, marginTop: 12, marginBottom: 0 }}>
            Message on WhatsApp · Reply within 24h
          </p>
        </div>

        <div className="hero-media">
          <div style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: '#D42B2B', marginBottom: 10,
          }}>
            Meet Your Coach — What I Offer, Why You Should Trust Me
          </div>
          <CoachVideo theme={theme} />
          <HeroProof theme={theme} />
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Logo, Nav, Hero, CoachVideo, HeroProof });
