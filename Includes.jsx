// Includes.jsx — What you receive.
// Splits into IncludesContent (header + list) so InfoSplit can place it in a
// column beside the FAQ, and Includes (standalone section) for reuse.

const INCLUDES = [
  { text: 'Weekly check-ins to track your progress and adjust your plan' },
  { text: 'Nutritional guidance and education — flexible, no strict diets' },
  { text: 'Personal training plans tailored to your goals, experience, and time available' },
  { text: 'Training and form analysis to keep you safe and progressing' },
  { text: '24/7 contact support via WhatsApp — always there when you need me' },
  { text: 'Accountability on your goals every step of the way' },
  { text: 'Education and knowledge to be your own coach once we finish working together' },
];

function SectionHead({ eyebrow, title, theme }) {
  const fg = theme === 'light' ? '#0D0D0D' : '#FFFFFF';
  return (
    <div className="info-col-head" style={{ marginBottom: 26 }}>
      <span style={{
        display: 'inline-block',
        fontFamily: "'DM Sans', sans-serif", fontSize: 10.5, fontWeight: 700,
        letterSpacing: '0.16em', textTransform: 'uppercase', color: '#D42B2B',
        background: 'rgba(212,43,43,0.12)',
        padding: '6px 14px', borderRadius: 999, marginBottom: 12,
      }}>
        {eyebrow}
      </span>
      <h2 style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 'clamp(32px, 7vw, 42px)', lineHeight: 1.02,
        letterSpacing: '0.02em', textTransform: 'uppercase',
        color: fg, margin: 0,
      }}>
        {title}
      </h2>
    </div>
  );
}

function IncludesContent({ theme }) {
  const fg      = theme === 'light' ? '#0D0D0D' : '#FFFFFF';
  const rowBg   = theme === 'light' ? '#FFFFFF' : '#151515';
  const rowEdge = theme === 'light' ? '#E8E8E8' : '#232323';

  return (
    <div>
      <SectionHead eyebrow="What's Included" title="Everything You Need to Succeed" theme={theme} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {INCLUDES.map((item, i) => (
          <div key={i} className="include-row" style={{
            display: 'flex', gap: 13, alignItems: 'flex-start',
            padding: '13px 16px',
            background: rowBg,
            border: `1px solid ${rowEdge}`,
            borderRadius: 14,
          }}>
            <span style={{
              width: 22, height: 22, background: '#D42B2B', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0, marginTop: 1,
            }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 15,
              lineHeight: 1.5, color: fg, margin: 0,
            }}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Includes({ theme }) {
  const bg = theme === 'light' ? '#F2F2F2' : '#0D0D0D';
  return (
    <section style={{ background: bg, padding: '80px 24px' }}>
      <div style={{ maxWidth: 520, margin: '0 auto' }}>
        <IncludesContent theme={theme} />
      </div>
    </section>
  );
}

Object.assign(window, { Includes, IncludesContent, SectionHead });
