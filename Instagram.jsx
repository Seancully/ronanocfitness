// Instagram.jsx — Live feed via Behold.io (auto-updates when Ronan posts) with placeholder fallback
//
// SETUP (5 min, free):
//   1. Go to https://behold.so, sign up, connect @ronanocfitness
//   2. Create a "Basic Feed" widget, copy the feed ID from the embed snippet
//      (looks like: 7f8a1b2c-3d4e-5f6a-7b8c-9d0e1f2a3b4c)
//   3. Paste it into BEHOLD_FEED_ID below
//   4. Deploy — the grid below will auto-populate with Ronan's 6 latest posts
//      and refresh every time he posts to Instagram.
//
// No API keys, no server, no rebuilds needed. Works on GitHub Pages.

const BEHOLD_FEED_ID = ''; // e.g. '7f8a1b2c-3d4e-5f6a-7b8c-9d0e1f2a3b4c'
const IG_HANDLE = 'ronanocfitness';
const IG_PROFILE = `https://instagram.com/${IG_HANDLE}`;

function Instagram({ theme }) {
  const bg      = theme === 'light' ? '#F2F2F2' : '#0D0D0D';
  const fg      = theme === 'light' ? '#0D0D0D' : '#FFFFFF';
  const muted   = theme === 'light' ? '#666'    : '#888';
  const photoBg = theme === 'light' ? '#E0E0E0' : '#1A1A1A';
  const border  = theme === 'light' ? '#D0D0D0' : '#2A2A2A';

  const [posts, setPosts] = React.useState(null); // null = loading, [] = empty/fallback, array = real
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    if (!BEHOLD_FEED_ID) { setPosts([]); return; }
    let cancelled = false;
    fetch(`https://feeds.behold.so/${BEHOLD_FEED_ID}`)
      .then(r => r.ok ? r.json() : Promise.reject(r.status))
      .then(data => {
        if (cancelled) return;
        const items = (data.posts || []).slice(0, 6).map(p => ({
          id: p.id,
          permalink: p.permalink || IG_PROFILE,
          thumb: p.sizes?.small?.mediaUrl || p.mediaUrl || p.thumbnailUrl,
          type: p.mediaType,
          caption: (p.caption || '').slice(0, 120),
        }));
        setPosts(items);
      })
      .catch(() => { if (!cancelled) { setError(true); setPosts([]); } });
    return () => { cancelled = true; };
  }, []);

  const hasLive = posts && posts.length > 0;
  const tiles = hasLive ? posts : Array.from({ length: 6 }).map((_, i) => ({ id: 'ph' + i, permalink: IG_PROFILE, thumb: null, caption: '' }));

  return (
    <section style={{ background: bg, padding: '64px 24px' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24, gap: 12, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#D42B2B', marginBottom: 6 }}>
              {hasLive ? 'Latest Posts' : 'Follow Along'}
            </div>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(28px, 8vw, 36px)', lineHeight: 1, letterSpacing: '0.02em', textTransform: 'uppercase', color: fg, margin: 0 }}>
              @{IG_HANDLE}
            </h2>
          </div>
          <a href={IG_PROFILE} target="_blank" rel="noopener noreferrer" style={{
            display: 'flex', alignItems: 'center', gap: 6,
            background: '#D42B2B', color: '#fff',
            fontFamily: "'DM Sans', sans-serif", fontSize: 12,
            fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
            padding: '10px 16px', textDecoration: 'none', borderRadius: 0, flexShrink: 0,
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
            </svg>
            Follow
          </a>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 3,
          borderRadius: 2, overflow: 'hidden',
        }}>
          {tiles.map((t) => (
            <a key={t.id} href={t.permalink} target="_blank" rel="noopener noreferrer"
              style={{
                display: 'block', aspectRatio: '1/1',
                background: photoBg, position: 'relative', overflow: 'hidden',
                textDecoration: 'none',
              }}
              title={t.caption || 'View on Instagram'}
            >
              {t.thumb ? (
                <img src={t.thumb} alt={t.caption || 'Instagram post'} loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              ) : (
                <div style={{
                  position: 'absolute', inset: 0,
                  background: `linear-gradient(135deg, ${photoBg} 25%, ${border} 50%, ${photoBg} 75%)`,
                }} />
              )}
              <div style={{
                position: 'absolute', inset: 0, opacity: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'opacity 0.2s', background: 'rgba(212,43,43,0.65)',
              }}
                onMouseEnter={e => e.currentTarget.style.opacity = 1}
                onMouseLeave={e => e.currentTarget.style.opacity = 0}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
            </a>
          ))}
        </div>

        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: muted, textAlign: 'center', marginTop: 16, lineHeight: 1.5 }}>
          {hasLive
            ? <>Tap any post to view on Instagram — follow <strong style={{ color: fg }}>@{IG_HANDLE}</strong> for more.</>
            : <>Follow <strong style={{ color: fg }}>@{IG_HANDLE}</strong> for daily training tips, client results, and behind the scenes.</>
          }
        </p>
      </div>
    </section>
  );
}

Object.assign(window, { Instagram });
