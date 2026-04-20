// FAQ.jsx

const FAQS = [
  { q: 'Do I need gym access?', a: 'No — I create both home and gym programmes. I\'ll build your plan around whatever equipment you have access to.' },
  { q: 'What does the coaching include?', a: 'You get a fully personalised training plan, a nutrition guide tailored to your goal, weekly check-ins, and direct WhatsApp access to me.' },
  { q: 'How long until I see results?', a: 'Most clients see noticeable changes within 3–4 weeks. Significant transformation typically takes 10–16 weeks depending on your starting point and goal.' },
  { q: 'Do I have to follow a strict diet?', a: 'Absolutely not. My nutrition approach is flexible — built around foods you actually enjoy. Sustainability is the whole point.' },
  { q: 'How do I get started?', a: 'Message me directly on WhatsApp. We\'ll have a free 15-minute call to see if we\'re a good fit, then I\'ll get your plan built.' },
];

function FAQ({ theme }) {
  const [open, setOpen] = React.useState(null);
  const bg = theme === 'light' ? '#F2F2F2' : '#0D0D0D';
  const fg = theme === 'light' ? '#0D0D0D' : '#FFFFFF';
  const border = theme === 'light' ? '#E0E0E0' : '#2A2A2A';
  const muted = theme === 'light' ? '#555' : '#888';

  return (
    <section style={{ background: bg, padding: '80px 24px' }}>
      <div style={{ maxWidth: 480, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#D42B2B', marginBottom: 10 }}>
            FAQ
          </div>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(36px, 10vw, 48px)', lineHeight: 1, letterSpacing: '0.02em', textTransform: 'uppercase', color: fg, margin: 0 }}>
            Common Questions
          </h2>
        </div>

        {FAQS.map((faq, i) => (
          <div key={i} style={{ borderBottom: `1px solid ${border}` }}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                width: '100%', background: 'none', border: 'none',
                padding: '20px 0', cursor: 'pointer',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                textAlign: 'left', gap: 12,
              }}
            >
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 600, color: fg, lineHeight: 1.3 }}>
                {faq.q}
              </span>
              <span style={{ color: '#D42B2B', fontSize: 18, flexShrink: 0, transform: open === i ? 'rotate(180deg)' : 'none', transition: 'transform 200ms' }}>▼</span>
            </button>
            {open === i && (
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.7, color: muted, margin: '0 0 20px', paddingRight: 24 }}>
                {faq.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { FAQ });
