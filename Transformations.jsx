// Transformations.jsx — Before/After section

// Real client transformations will be added here once collected.
const TRANSFORMS = [];

function TransformCard({ t, theme }) {
  const cardBg   = theme === 'light' ? '#F2F2F2' : '#1A1A1A';
  const border   = theme === 'light' ? '#E0E0E0' : '#2A2A2A';
  const fg       = theme === 'light' ? '#0D0D0D' : '#FFFFFF';
  const muted    = theme === 'light' ? '#666'    : '#888';
  const photoBg  = theme === 'light' ? '#D8D8D8' : '#2A2A2A';
  const photoTxt = theme === 'light' ? '#999'    : '#555';

  return (
    <div style={{
      background: cardBg, border: `1px solid ${border}`,
      borderRadius: 4, overflow: 'hidden', flexShrink: 0,
      width: 'min(88vw, 320px)',
    }}>
      {/* Photo pair */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, background: border }}>
        {['Before', 'After'].map(label => (
          <div key={label} style={{
            background: photoBg, aspectRatio: '3/4',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'flex-end',
            padding: 8,
          }}>
            <div style={{
              background: 'rgba(0,0,0,0.5)', color: '#fff',
              fontFamily: "'DM Sans', sans-serif", fontSize: 11,
              fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
              padding: '4px 10px', borderRadius: 2,
            }}>{label}</div>
            <div style={{ position: 'absolute', opacity: 0.3, fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: photoTxt }}>Photo</div>
          </div>
        ))}
      </div>
      {/* Info */}
      <div style={{ padding: '16px 16px 18px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 700, color: fg }}>{t.name}</div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#D42B2B', marginTop: 2 }}>{t.type}</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 24, color: fg, lineHeight: 1 }}>{t.weight}</div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: muted, marginTop: 2 }}>{t.duration}</div>
          </div>
        </div>
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
    <section style={{ background: bg, padding: '80px 0' }}>
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
            borderRadius: 4, padding: '28px 24px', textAlign: 'center',
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
