// VideoSection.jsx — Coach intro video placeholder

function VideoSection({ theme }) {
  const bg     = theme === 'light' ? '#FFFFFF' : '#0D0D0D';
  const fg     = theme === 'light' ? '#0D0D0D' : '#FFFFFF';
  const cardBg = theme === 'light' ? '#F2F2F2' : '#1A1A1A';
  const border = theme === 'light' ? '#E0E0E0' : '#2A2A2A';
  const muted  = theme === 'light' ? '#666'    : '#888';

  return (
    <section style={{ background: bg, padding: '80px 24px' }}>
      <div style={{ maxWidth: 480, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#D42B2B', marginBottom: 10 }}>
            From the Coach
          </div>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(32px, 9vw, 44px)', lineHeight: 1.05, letterSpacing: '0.02em', textTransform: 'uppercase', color: fg, margin: '0 0 12px' }}>
            What I Offer &amp; Why You Should Trust Me
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.65, color: muted, margin: 0 }}>
            Hear directly from Ronan about the coaching process and what makes this different.
          </p>
        </div>

        {/* Video placeholder */}
        <div style={{
          background: cardBg, border: `1px solid ${border}`,
          borderRadius: 4, aspectRatio: '16/9',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: 14,
        }}>
          <div style={{
            width: 56, height: 56, borderRadius: '50%',
            border: `2px solid ${border}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{
              width: 0, height: 0,
              borderTop: '10px solid transparent',
              borderBottom: '10px solid transparent',
              borderLeft: `18px solid #D42B2B`,
              marginLeft: 4,
            }} />
          </div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: muted, letterSpacing: '0.05em' }}>
            Video coming soon
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { VideoSection });
