// Testimonials.jsx

const TESTIMONIALS = [
  { name: 'Sarah M.', quote: 'Ronan completely changed how I approach food and training. Down 12kg in 14 weeks and I never felt deprived once. Best decision I ever made.', goal: 'Fat Loss · 14 weeks' },
  { name: 'Ciarán O.', quote: 'I was lost in the gym for years. Within a month of working with Ronan I had more structure, more strength, and more confidence than ever.', goal: 'Muscle Gain · 12 weeks' },
  { name: 'Aoife B.', quote: "The nutrition plan is so simple to follow — I wasn't hungry, I wasn't miserable, and I still hit my goal. Couldn't recommend Ronan enough.", goal: 'Fat Loss · 10 weeks' },
  { name: 'Darragh K.', quote: "I'd tried everything online. Nothing stuck. Ronan's plan was built around my schedule and actually worked. I'm stronger and leaner than I was at 22.", goal: 'Recomposition · 16 weeks' },
  { name: 'Niamh T.', quote: 'Accountability is everything. Knowing Ronan was checking in kept me on track even on tough weeks. The results speak for themselves.', goal: 'Fat Loss · 12 weeks' },
];

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

  return (
    <section style={{ background: bg, padding: '80px 0' }}>
      <div style={{ padding: '0 24px', marginBottom: 36, textAlign: 'center' }}>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#D42B2B', marginBottom: 10 }}>
          What Clients Say
        </div>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(36px, 10vw, 48px)', lineHeight: 1, letterSpacing: '0.02em', textTransform: 'uppercase', color: fg, margin: 0 }}>
          Real People. Real Results.
        </h2>
      </div>
      <div style={{
        display: 'flex', gap: 14, overflowX: 'auto',
        padding: '4px 24px 16px', scrollbarWidth: 'none',
        WebkitOverflowScrolling: 'touch',
      }}>
        {TESTIMONIALS.map((t, i) => <TestimonialCard key={i} t={t} theme={theme} />)}
      </div>
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
