// Pricing.jsx — single coaching plan + money-back guarantee

const WHATSAPP_BASE = 'https://wa.me/353833604182?text=';
const waLink = (msg) => WHATSAPP_BASE + encodeURIComponent(msg);

const PLANS = {
  A: {
    name: '1 on 1 Coaching',
    tag: 'Nutrition + Training + Coaching',
    eur: 20,
    gbp: '17.25',
    featured: true,
    includes: [
      'Personalised nutrition plan',
      'Personalised training plan',
      'Weekly check-ins',
      '24/7 WhatsApp support',
      'Form & technique analysis',
      'Accountability & education',
    ],
    cta: 'Start Coaching',
    waMsg: "Hi Ronan, I'd like to sign up for 1 on 1 Coaching (€20/week). Can you send me next steps?",
  },
};

function PlanCard({ plan, theme, compact }) {
  const fg      = theme === 'light' ? '#0D0D0D' : '#FFFFFF';
  const cardBg  = theme === 'light' ? '#F2F2F2' : '#1A1A1A';
  const border  = theme === 'light' ? '#E0E0E0' : '#2A2A2A';
  const muted   = theme === 'light' ? '#555'    : '#888';
  const accent  = '#D42B2B';

  return (
    <div style={{
      background: cardBg,
      border: plan.featured ? `2px solid ${accent}` : `1px solid ${border}`,
      borderRadius: 18, overflow: 'hidden', display: 'flex', flexDirection: 'column',
    }}>
      <div style={{ height: 4, background: plan.featured ? accent : border }} />

      <div style={{ padding: compact ? '24px 22px' : '32px 28px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        {/* No plan letter or "most popular" flag: there is only one plan. */}
        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: compact ? 26 : 34, letterSpacing: '0.03em', color: fg, lineHeight: 1.05, marginBottom: 4 }}>
          {plan.name.toUpperCase()}
        </div>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: muted, marginBottom: 18 }}>
          {plan.tag}
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 14, marginBottom: 4, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 2 }}>
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: compact ? 44 : 56, color: fg, lineHeight: 1 }}>€{plan.eur}</span>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: muted, marginLeft: 4 }}>/week</span>
          </div>
          <div style={{ borderLeft: `1px solid ${border}`, paddingLeft: 14, display: 'flex', alignItems: 'baseline', gap: 2 }}>
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: compact ? 26 : 32, color: muted, lineHeight: 1 }}>£{plan.gbp}</span>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: muted, marginLeft: 4 }}>/week</span>
          </div>
        </div>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: muted, margin: '0 0 22px', lineHeight: 1.6 }}>
          Billed monthly. Cancel any time.
        </p>

        <div style={{ height: 1, background: border, marginBottom: 18 }} />

        <div style={{ flex: 1 }}>
          {plan.includes.map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 10 }}>
              <span style={{ color: accent, fontWeight: 700, fontSize: 14, flexShrink: 0, lineHeight: 1.5 }}>✓</span>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: fg, lineHeight: 1.5 }}>{item}</span>
            </div>
          ))}
        </div>

        <a href={waLink(plan.waMsg)} target="_blank" rel="noopener noreferrer" className="btn-pill" style={{
          display: 'block', textAlign: 'center', marginTop: 22,
          background: plan.featured ? accent : 'transparent',
          color: plan.featured ? '#FFFFFF' : fg,
          border: plan.featured ? 'none' : `1px solid ${fg}`,
          fontFamily: "'DM Sans', sans-serif", fontSize: 14,
          fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
          padding: '14px 0', textDecoration: 'none', borderRadius: 999,
        }}>
          {plan.cta}
        </a>
      </div>
    </div>
  );
}

function Pricing({ theme }) {
  const bg      = theme === 'light' ? '#FFFFFF'  : '#0D0D0D';
  const fg      = theme === 'light' ? '#0D0D0D'  : '#FFFFFF';
  const cardBg  = theme === 'light' ? '#F2F2F2'  : '#1A1A1A';
  const border  = theme === 'light' ? '#E0E0E0'  : '#2A2A2A';
  const muted   = theme === 'light' ? '#555'     : '#888';

  return (
    <section id="pricing" style={{ background: bg, padding: '80px 24px' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 36, maxWidth: 480, marginLeft: 'auto', marginRight: 'auto' }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#D42B2B', marginBottom: 10 }}>
            Coaching Packages
          </div>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(36px, 10vw, 48px)', lineHeight: 1, letterSpacing: '0.02em', textTransform: 'uppercase', color: fg, margin: '0 0 14px' }}>
            Work With Me
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: muted, margin: 0, lineHeight: 1.6 }}>
            One plan with everything in it — nutrition, training, and direct support.
          </p>
        </div>

        {/* A single plan reads best as one centred card, not a lone column
            in a three-across grid. */}
        <div style={{ maxWidth: 520, margin: '0 auto' }}>
          <PlanCard plan={PLANS.A} theme={theme} />
        </div>

        {/* Money back guarantee */}
        <div style={{
          maxWidth: 480, margin: '24px auto 0',
          background: cardBg, border: `1px solid ${border}`,
          borderRadius: 16, padding: '20px 24px',
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
              If you're not happy after your first 2 weeks, I'll refund you in full — no questions asked.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Pricing });
