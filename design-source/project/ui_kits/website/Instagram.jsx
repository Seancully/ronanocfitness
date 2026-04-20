// Instagram.jsx — Feed placeholder + profile link

function Instagram({ theme }) {
  const bg     = theme === 'light' ? '#F2F2F2' : '#0D0D0D';
  const fg     = theme === 'light' ? '#0D0D0D' : '#FFFFFF';
  const muted  = theme === 'light' ? '#666'    : '#888';
  const photoBg= theme === 'light' ? '#E0E0E0' : '#1A1A1A';
  const border = theme === 'light' ? '#D0D0D0' : '#2A2A2A';

  // 6 placeholder tiles
  const tiles = Array.from({ length: 6 });

  return (
    <section style={{ background: bg, padding: '64px 24px' }}>
      <div style={{ maxWidth: 480, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
          <div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#D42B2B', marginBottom: 6 }}>
              Follow Along
            </div>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(28px, 8vw, 36px)', lineHeight: 1, letterSpacing: '0.02em', textTransform: 'uppercase', color: fg, margin: 0 }}>
              @ronanocfitness
            </h2>
          </div>
          <a
            href="https://instagram.com/ronanocfitness"
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', gap: 6,
              background: '#D42B2B', color: '#fff',
              fontFamily: "'DM Sans', sans-serif", fontSize: 12,
              fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
              padding: '10px 16px', textDecoration: 'none', borderRadius: 0, flexShrink: 0,
            }}
          >
            {/* Instagram icon */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
            </svg>
            Follow
          </a>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 3,
          borderRadius: 2, overflow: 'hidden',
        }}>
          {tiles.map((_, i) => (
            <a
              key={i}
              href="https://instagram.com/ronanocfitness"
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'block', aspectRatio: '1/1',
                background: photoBg,
                position: 'relative', overflow: 'hidden',
                textDecoration: 'none',
              }}
            >
              {/* Hover overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                opacity: 0,
                transition: 'opacity 0.2s',
                background: 'rgba(212,43,43,0.65)',
              }}
                onMouseEnter={e => e.currentTarget.style.opacity = 1}
                onMouseLeave={e => e.currentTarget.style.opacity = 0}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              {/* Placeholder shimmer pattern */}
              <div style={{
                position: 'absolute', inset: 0,
                background: `linear-gradient(135deg, ${photoBg} 25%, ${border} 50%, ${photoBg} 75%)`,
                backgroundSize: '200% 200%',
              }} />
            </a>
          ))}
        </div>

        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: muted, textAlign: 'center', marginTop: 16, lineHeight: 1.5 }}>
          Follow <strong style={{ color: fg }}>@ronanocfitness</strong> for daily training tips, client results, and behind the scenes.
        </p>
      </div>
    </section>
  );
}

Object.assign(window, { Instagram });
