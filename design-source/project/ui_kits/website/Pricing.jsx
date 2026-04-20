// Pricing.jsx — Pricing card + money back guarantee

function Pricing({ theme }) {
  const bg      = theme === 'light' ? '#FFFFFF'  : '#0D0D0D';
  const fg      = theme === 'light' ? '#0D0D0D'  : '#FFFFFF';
  const cardBg  = theme === 'light' ? '#F2F2F2'  : '#1A1A1A';
  const border  = theme === 'light' ? '#E0E0E0'  : '#2A2A2A';
  const muted   = theme === 'light' ? '#555'     : '#888';

  return (
    <section style={{ background: bg, padding: '80px 24px' }}>
      <div style={{ maxWidth: 420, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#D42B2B', marginBottom: 10 }}>
            Coaching Packages
          </div>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(36px, 10vw, 48px)', lineHeight: 1, letterSpacing: '0.02em', textTransform: 'uppercase', color: fg, margin: 0 }}>
            Simple, Honest Pricing
          </h2>
        </div>

        {/* Pricing card */}
        <div style={{
          background: cardBg, border: `1px solid ${border}`,
          borderRadius: 4, overflow: 'hidden',
        }}>
          {/* Top accent bar */}
          <div style={{ height: 4, background: '#D42B2B' }} />

          <div style={{ padding: '32px 28px' }}>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#D42B2B', marginBottom: 16 }}>
              Online Transformation Coaching
            </div>

            {/* Price */}
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 16, marginBottom: 6, flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 2 }}>
                <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 56, color: fg, lineHeight: 1 }}>€20</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: muted, marginLeft: 4 }}>/week</span>
              </div>
              <div style={{
                borderLeft: `1px solid ${border}`, paddingLeft: 16,
                display: 'flex', alignItems: 'baseline', gap: 2,
              }}>
                <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 36, color: muted, lineHeight: 1 }}>£17.25</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: muted, marginLeft: 4 }}>/week</span>
              </div>
            </div>

            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: muted, margin: '0 0 28px', lineHeight: 1.6 }}>
              Billed monthly. Cancel any time. No hidden fees.
            </p>

            {/* Divider */}
            <div style={{ height: 1, background: border, marginBottom: 24 }} />

            {/* Includes preview */}
            {[
              'Personalised training plan',
              'Nutrition guidance',
              'Weekly check-ins',
              '24/7 WhatsApp support',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <span style={{ color: '#D42B2B', fontWeight: 700, fontSize: 14, flexShrink: 0 }}>✓</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: fg }}>{item}</span>
              </div>
            ))}
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: muted, marginBottom: 28 }}>
              + more — see full list below
            </div>

            <a href="#hero" style={{
              display: 'block', textAlign: 'center',
              background: '#D42B2B', color: '#FFFFFF',
              fontFamily: "'DM Sans', sans-serif", fontSize: 15,
              fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
              padding: '16px 0', textDecoration: 'none', borderRadius: 0,
            }}>
              Start Your Transformation
            </a>
          </div>
        </div>

        {/* Money back guarantee */}
        <div style={{
          marginTop: 20, background: cardBg, border: `1px solid ${border}`,
          borderRadius: 4, padding: '20px 24px',
          display: 'flex', gap: 16, alignItems: 'flex-start',
        }}>
          <div style={{
            width: 40, height: 40, borderRadius: '50%',
            border: `2px solid #D42B2B`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0, fontSize: 18,
          }}>🛡</div>
          <div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 700, color: fg, marginBottom: 4 }}>
              2-Week Money Back Guarantee
            </div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: muted, margin: 0, lineHeight: 1.6 }}>
              If you're not happy after your first 2 weeks, I'll refund you in full. No questions asked.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Pricing });
