// Testimonials.jsx

// Real client testimonials will be added here once collected.
const TESTIMONIALS = [];

function StarRow() {
  return <div style={{ color: '#F5C518', fontSize: 14, letterSpacing: 3, marginBottom: 12 }}>★★★★★</div>;
}

function TestimonialCard({ t, theme }) {
  const cardBg = theme === 'light' ? '#F2F2F2' : '#1F1F1F';
  const cardBorder = theme === 'light' ? '#E0E0E0' : '#2A2A2A';
  const fg = theme === 'light' ? '#111' : '#DDD';
  const muted = theme === 'light' ? '#777' : '#888';

  return (
    <div style={{
      background: cardBg, border: `1px solid ${cardBorder}`,
      borderRadius: 4, padding: '22px 20px',
      minWidth: 280, maxWidth: 300, flexShrink: 0,
      display: 'flex', flexDirection: 'column', gap: 0,
    }}>
      <StarRow />
      <p style={{
        fontFamily: "'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.65,
        color: fg, margin: '0 0 16px', flex: 1,
      }}>
        "{t.quote}"
      </p>
      <div>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 700, color: fg }}>— {t.name}</div>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#D42B2B', marginTop: 3 }}>{t.goal}</div>
      </div>
    </div>
  );
}

function Testimonials({ theme }) {
  const bg = theme === 'light' ? '#FFFFFF' : '#0D0D0D';
  const fg = theme === 'light' ? '#0D0D0D' : '#FFFFFF';
  const cardBg = theme === 'light' ? '#F2F2F2' : '#1F1F1F';
  const border = theme === 'light' ? '#E0E0E0' : '#2A2A2A';
  const muted  = theme === 'light' ? '#666'    : '#888';

  return (
    <section style={{ background: bg, padding: '80px 0' }}>
      <div style={{ padding: '0 24px', marginBottom: 36, textAlign: 'center' }}>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#D42B2B', marginBottom: 10 }}>
          What Clients Say
        </div>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(36px, 10vw, 48px)', lineHeight: 1, letterSpacing: '0.02em', textTransform: 'uppercase', color: fg, margin: 0 }}>
          Be One of the First
        </h2>
      </div>
      {TESTIMONIALS.length === 0 ? (
        <div style={{ padding: '0 24px' }}>
          <div style={{
            maxWidth: 480, margin: '0 auto',
            background: cardBg, border: `1px dashed ${border}`,
            borderRadius: 4, padding: '28px 24px', textAlign: 'center',
          }}>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 26, letterSpacing: '0.03em', color: fg, marginBottom: 8 }}>
              Client Stories Coming Soon
            </div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: muted, margin: 0, lineHeight: 1.6 }}>
              I'm just opening my books. Real reviews from real clients will live here — no fakes, no filler.
            </p>
          </div>
        </div>
      ) : (
        <div style={{
          display: 'flex', gap: 14, overflowX: 'auto',
          padding: '4px 24px 16px', scrollbarWidth: 'none',
          WebkitOverflowScrolling: 'touch',
        }}>
          {TESTIMONIALS.map((t, i) => <TestimonialCard key={i} t={t} theme={theme} />)}
        </div>
      )}
    </section>
  );
}

function StatBar({ theme }) {
  const bg = theme === 'light' ? '#0D0D0D' : '#1A1A1A';
  const stats = [
    { num: '5★', label: 'Rated Coaching' },
    { num: '24/7', label: 'Support Access' },
    { num: '2 Wk', label: 'Risk Free' },
  ];
  return (
    <div style={{
      background: bg, padding: '28px 24px',
      display: 'flex', justifyContent: 'space-around', gap: 16,
    }}>
      {stats.map((s, i) => (
        <div key={i} style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 36, color: '#D42B2B', lineHeight: 1 }}>{s.num}</div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#666', marginTop: 4 }}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}

Object.assign(window, { Testimonials, StatBar, TestimonialCard });
