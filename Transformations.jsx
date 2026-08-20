// Transformations.jsx — Before/After section

// Real transformations. `weight` / `duration` are optional — only add them
// when the actual figures are known, never estimate them.
// Clients lead — the coach's own result is proof of method, not the pitch.
const TRANSFORMS = [
  {
    name: 'Online Client',
    type: 'Fat Loss & Muscle Gain',
    before: 'assets/transformations/client1-before.jpg',
    after:  'assets/transformations/client1-after.jpg',
    note: 'Leaner, stronger, and visibly more muscle.',
  },
  {
    name: 'Online Client',
    type: 'Fat Loss Transformation',
    before: 'assets/transformations/client2-before.jpg',
    after:  'assets/transformations/client2-after.jpg',
    note: 'Noticeably leaner through the waist, with better posture and shape.',
  },
  {
    name: 'Ronan O’Callaghan',
    type: 'Your Coach — My Own Transformation',
    before: 'assets/transformations/ronan-before.jpg',
    after:  'assets/transformations/ronan-after.jpg',
    note: 'I coach the exact process I used on myself.',
  },
];

function TransformCard({ t, theme }) {
  const cardBg   = theme === 'light' ? '#F2F2F2' : '#1A1A1A';
  const border   = theme === 'light' ? '#E0E0E0' : '#2A2A2A';
  const fg       = theme === 'light' ? '#0D0D0D' : '#FFFFFF';
  const muted    = theme === 'light' ? '#666'    : '#888';
  const photoBg  = theme === 'light' ? '#D8D8D8' : '#2A2A2A';

  const pair = [
    { label: 'Before', src: t.before },
    { label: 'After',  src: t.after  },
  ];

  return (
    <div style={{
      background: cardBg, border: `1px solid ${border}`,
      borderRadius: 16, overflow: 'hidden', flexShrink: 0,
      width: 'min(88vw, 480px)',
    }}>
      {/* Photo pair */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, background: border }}>
        {pair.map(({ label, src }) => (
          <div key={label} style={{ position: 'relative', background: photoBg, aspectRatio: '1/1' }}>
            <img
              src={src}
              alt={`${t.name} — ${label.toLowerCase()}`}
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div style={{
              position: 'absolute', bottom: 8, left: '50%', transform: 'translateX(-50%)',
              background: label === 'After' ? '#D42B2B' : 'rgba(0,0,0,0.62)', color: '#fff',
              fontFamily: "'DM Sans', sans-serif", fontSize: 10,
              fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
              padding: '4px 10px', borderRadius: 999, whiteSpace: 'nowrap',
            }}>{label}</div>
          </div>
        ))}
      </div>
      {/* Info */}
      <div style={{ padding: '16px 16px 18px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 700, color: fg }}>{t.name}</div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#D42B2B', marginTop: 2 }}>{t.type}</div>
          </div>
          {t.weight && (
            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 24, color: fg, lineHeight: 1 }}>{t.weight}</div>
              {t.duration && <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: muted, marginTop: 2 }}>{t.duration}</div>}
            </div>
          )}
        </div>
        {t.note && (
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, lineHeight: 1.55, color: muted, margin: '10px 0 0' }}>
            {t.note}
          </p>
        )}
      </div>
    </div>
  );
}

function Transformations({ theme }) {
  const bg = theme === 'light' ? '#F2F2F2' : '#0D0D0D';
  const fg = theme === 'light' ? '#0D0D0D' : '#FFFFFF';
  const cardBg = theme === 'light' ? '#FFFFFF' : '#1A1A1A';
  const border = theme === 'light' ? '#E0E0E0' : '#2A2A2A';
  const muted  = theme === 'light' ? '#666'    : '#888';

  return (
    <section id="transformations" style={{ background: bg, padding: '80px 0' }}>
      <div style={{ padding: '0 24px', marginBottom: 32, textAlign: 'center' }}>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#D42B2B', marginBottom: 10 }}>
          Client Transformations
        </div>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(36px, 10vw, 48px)', lineHeight: 1, letterSpacing: '0.02em', textTransform: 'uppercase', color: fg, margin: 0 }}>
          Before &amp; After
        </h2>
      </div>
      {TRANSFORMS.length === 0 ? (
        <div style={{ padding: '0 24px' }}>
          <div style={{
            maxWidth: 480, margin: '0 auto',
            background: cardBg, border: `1px dashed ${border}`,
            borderRadius: 16, padding: '28px 24px', textAlign: 'center',
          }}>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 26, letterSpacing: '0.03em', color: fg, marginBottom: 8 }}>
              Transformations Coming Soon
            </div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: muted, margin: 0, lineHeight: 1.6 }}>
              Before & after photos from real clients will go here — yours could be the first.
            </p>
          </div>
        </div>
      ) : (
        <div style={{
          display: 'flex', gap: 14, overflowX: 'auto',
          justifyContent: 'safe center',
          padding: '4px 24px 16px', scrollbarWidth: 'none',
          WebkitOverflowScrolling: 'touch',
        }}>
          {TRANSFORMS.map((t, i) => <TransformCard key={i} t={t} theme={theme} />)}
        </div>
      )}
    </section>
  );
}

Object.assign(window, { Transformations });
