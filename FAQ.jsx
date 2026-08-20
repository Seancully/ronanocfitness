// FAQ.jsx — accordion. FAQContent is the column body used by InfoSplit;
// FAQ is the standalone section wrapper.

const FAQS = [
  { q: 'Do I need gym access?', a: 'No — I create both home and gym programmes. I\'ll build your plan around whatever equipment you have access to.' },
  { q: 'What does the coaching include?', a: 'You get a fully personalised training plan, a nutrition guide tailored to your goal, weekly check-ins, and direct WhatsApp access to me.' },
  { q: 'How long until I see results?', a: 'Most clients see noticeable changes within 3–4 weeks. Significant transformation typically takes 10–16 weeks depending on your starting point and goal.' },
  { q: 'Do I have to follow a strict diet?', a: 'Absolutely not. My nutrition approach is flexible — built around foods you actually enjoy. Sustainability is the whole point.' },
  { q: 'How do I get started?', a: 'Message me directly on WhatsApp. No high pressure sales call, just a chat about your goals.' },
];

function FAQContent({ theme }) {
  const [open, setOpen] = React.useState(null);
  const fg      = theme === 'light' ? '#0D0D0D' : '#FFFFFF';
  const muted   = theme === 'light' ? '#555'    : '#888';
  const cardBg  = theme === 'light' ? '#FFFFFF' : '#151515';
  const edge    = theme === 'light' ? '#E8E8E8' : '#232323';

  return (
    <div>
      <SectionHead eyebrow="FAQ" title="Common Questions" theme={theme} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {FAQS.map((faq, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className={`faq-item${isOpen ? ' is-open' : ''}`} style={{
              background: cardBg,
              border: `1px solid ${isOpen ? '#D42B2B' : edge}`,
              borderRadius: 14,
              overflow: 'hidden',
            }}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                style={{
                  width: '100%', background: 'none', border: 'none',
                  padding: '15px 16px', cursor: 'pointer',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  textAlign: 'left', gap: 12, color: 'inherit',
                }}
              >
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, color: fg, lineHeight: 1.35 }}>
                  {faq.q}
                </span>
                <span className="faq-chevron" style={{
                  flexShrink: 0, width: 24, height: 24, borderRadius: '50%',
                  background: isOpen ? '#D42B2B' : 'rgba(212,43,43,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                    stroke={isOpen ? '#fff' : '#D42B2B'} strokeWidth="3"
                    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>

              {/* 0fr → 1fr animates height without needing a fixed max-height */}
              <div className="faq-answer">
                <div style={{ minHeight: 0, overflow: 'hidden' }}>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif", fontSize: 14.5,
                    lineHeight: 1.65, color: muted, margin: 0,
                    padding: '0 16px 15px',
                  }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Balances the column against the taller Includes list, and catches
          anyone whose question isn't answered above. */}
      <div style={{
        marginTop: 14, padding: '18px 20px',
        background: 'rgba(212,43,43,0.08)',
        border: '1px solid rgba(212,43,43,0.25)',
        borderRadius: 16, textAlign: 'center',
      }}>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14.5, fontWeight: 700, color: fg, marginBottom: 4 }}>
          Still have a question?
        </div>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13.5, lineHeight: 1.55, color: muted, margin: '0 0 14px' }}>
          Message me directly — I reply within 24 hours.
        </p>
        <a
          href="https://wa.me/353833604182?text=Hi%20Ronan%2C%20I%20have%20a%20question%20about%20your%20coaching."
          target="_blank" rel="noopener noreferrer"
          className="btn-pill"
          style={{
            background: '#D42B2B', color: '#fff',
            fontFamily: "'DM Sans', sans-serif", fontSize: 12.5, fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            padding: '11px 24px', textDecoration: 'none', borderRadius: 999,
          }}
        >
          Ask on WhatsApp
        </a>
      </div>
    </div>
  );
}

function FAQ({ theme }) {
  const bg = theme === 'light' ? '#F2F2F2' : '#0D0D0D';
  return (
    <section style={{ background: bg, padding: '80px 24px' }}>
      <div style={{ maxWidth: 520, margin: '0 auto' }}>
        <FAQContent theme={theme} />
      </div>
    </section>
  );
}

Object.assign(window, { FAQ, FAQContent });
