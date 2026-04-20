// Footer.jsx

function CTASection({ theme }) {
  const bg = theme === 'light' ? '#0D0D0D' : '#1A1A1A';

  return (
    <section style={{ background: bg, padding: '80px 24px', textAlign: 'center' }}>
      <div style={{ maxWidth: 420, margin: '0 auto' }}>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#D42B2B', marginBottom: 12 }}>
          Limited Spots Available
        </div>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(40px, 11vw, 56px)', lineHeight: 1, letterSpacing: '0.02em', textTransform: 'uppercase', color: '#FFFFFF', margin: '0 0 16px' }}>
          Ready to Start?
        </h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.65, color: '#888', margin: '0 0 32px' }}>
          Message me directly on WhatsApp — I'll get back to you within 24 hours.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://wa.me/353833604182?text=Hi%20Ronan%2C%20I%27m%20interested%20in%20your%20coaching%20packages%2C%20can%20you%20send%20me%20more%20information%3F"
            target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-block',
              background: '#D42B2B', color: '#FFFFFF',
              fontFamily: "'DM Sans', sans-serif", fontSize: 15,
              fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
              padding: '16px 32px', textDecoration: 'none', borderRadius: 0,
            }}>
            Message on WhatsApp
          </a>
          <a href="#pricing" style={{
            display: 'inline-block',
            background: 'transparent', color: '#FFFFFF',
            border: '1px solid #FFFFFF',
            fontFamily: "'DM Sans', sans-serif", fontSize: 15,
            fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
            padding: '15px 32px', textDecoration: 'none', borderRadius: 0,
          }}>
            See Plans
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer({ theme }) {
  const bg = theme === 'light' ? '#F2F2F2' : '#0D0D0D';
  const border = theme === 'light' ? '#E0E0E0' : '#1A1A1A';
  const muted = theme === 'light' ? '#888' : '#555';
  const fg = theme === 'light' ? '#0D0D0D' : '#FFFFFF';

  return (
    <footer style={{ background: bg, borderTop: `1px solid ${border}`, padding: '32px 24px' }}>
      <div style={{ maxWidth: 480, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, lineHeight: 1 }}>
          <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 24, letterSpacing: 2, color: '#D42B2B' }}>RONANOC</span>
          <span style={{ width: 1, height: 18, background: '#555', flexShrink: 0, display: 'inline-block' }}></span>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 500, color: fg }}>fitness</span>
        </div>
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="https://instagram.com/ronanocfitness" target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: muted, textDecoration: 'none' }}>Instagram</a>
          <a href="https://wa.me/353833604182?text=Hi%20Ronan%2C%20I'm%20interested%20in%20your%20coaching%20packages%2C%20can%20you%20send%20me%20more%20information%3F" target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: muted, textDecoration: 'none' }}>WhatsApp</a>
          <a href="privacy-policy.html"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: muted, textDecoration: 'none' }}>Privacy Policy</a>
        </div>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: muted }}>
          © {new Date().getFullYear()} RONANOCfitness. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { CTASection, Footer });
