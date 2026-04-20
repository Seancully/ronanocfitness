// Includes.jsx — What you receive section

const INCLUDES = [
  { icon: '✓', text: 'Weekly check-ins to track your progress and adjust your plan' },
  { icon: '✓', text: 'Nutritional guidance and education — flexible, no strict diets' },
  { icon: '✓', text: 'Personal training plans tailored to your goals, experience, and time available' },
  { icon: '✓', text: 'Training and form analysis to keep you safe and progressing' },
  { icon: '✓', text: '24/7 contact support via WhatsApp — always there when you need me' },
  { icon: '✓', text: 'Accountability on your goals every step of the way' },
  { icon: '✓', text: 'Education and knowledge to be your own coach once we finish working together' },
];

function Includes({ theme }) {
  const bg     = theme === 'light' ? '#F2F2F2' : '#0D0D0D';
  const fg     = theme === 'light' ? '#0D0D0D' : '#FFFFFF';
  const muted  = theme === 'light' ? '#555'    : '#888';
  const border = theme === 'light' ? '#E0E0E0' : '#1E1E1E';

  return (
    <section style={{ background: bg, padding: '80px 24px' }}>
      <div style={{ maxWidth: 480, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#D42B2B', marginBottom: 10 }}>
            What's Included
          </div>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(36px, 10vw, 48px)', lineHeight: 1, letterSpacing: '0.02em', textTransform: 'uppercase', color: fg, margin: 0 }}>
            Everything You Need to Succeed
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {INCLUDES.map((item, i) => (
            <div key={i} style={{
              display: 'flex', gap: 16, alignItems: 'flex-start',
              padding: '18px 0',
              borderBottom: i < INCLUDES.length - 1 ? `1px solid ${border}` : 'none',
            }}>
              <div style={{
                width: 24, height: 24, background: '#D42B2B', borderRadius: 2,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0, marginTop: 1,
              }}>
                <span style={{ color: '#fff', fontSize: 13, fontWeight: 700 }}>✓</span>
              </div>
              <p style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: 16,
                lineHeight: 1.55, color: fg, margin: 0,
              }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Includes });
