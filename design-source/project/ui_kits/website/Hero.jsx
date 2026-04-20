// Hero.jsx — Nav + Hero section with centred sign-up form

function Logo({ theme }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, lineHeight: 1 }}>
      <span style={{ fontFamily: "'Bebas Neue', 'Arial Narrow', sans-serif", fontSize: 28, letterSpacing: 2, color: '#D42B2B' }}>RONANOC</span>
      <span style={{ width: 1, height: 22, background: '#555', flexShrink: 0, display: 'inline-block' }}></span>
      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, fontWeight: 500, color: theme === 'light' ? '#0D0D0D' : '#FFFFFF' }}>fitness</span>
    </div>
  );
}

function Nav({ theme, onToggle }) {
  const bg = theme === 'light' ? '#FFFFFF' : '#0D0D0D';
  const border = theme === 'light' ? '#E0E0E0' : '#1A1A1A';
  const fg = theme === 'light' ? '#0D0D0D' : '#FFFFFF';

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: bg, borderBottom: `1px solid ${border}`,
      padding: '0 20px', height: 56,
      display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
    }}>
      <Logo theme={theme} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginLeft: 'auto' }}>
        <a href="tel:+353833604182" style={{
          color: '#D42B2B', textDecoration: 'none',
          display: 'flex', alignItems: 'center', gap: 6,
        }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D42B2B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.38 2 2 0 0 1 3.57 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.54a16 16 0 0 0 6.07 6.07l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          <span className="phone-label" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: '0.02em' }}>+353 83 360 4182</span>
        </a>
        <button onClick={onToggle} style={{
          background: 'transparent', border: `1px solid ${border}`,
          color: fg, fontFamily: "'DM Sans', sans-serif",
          fontSize: 12, fontWeight: 600, letterSpacing: '0.08em',
          textTransform: 'uppercase', padding: '6px 10px', cursor: 'pointer',
          borderRadius: 2,
        }}>
          {theme === 'light' ? '◑ Dark' : '◑ Light'}
        </button>
      </div>
    </nav>
  );
}

function SignupForm({ theme }) {
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({ name: '', email: '', phone: '', goal: 'Lose fat' });

  const inputStyle = {
    width: '100%', boxSizing: 'border-box',
    background: theme === 'light' ? '#FFFFFF' : '#1A1A1A',
    color: theme === 'light' ? '#0D0D0D' : '#FFFFFF',
    border: `1px solid ${theme === 'light' ? '#D0D0D0' : '#2A2A2A'}`,
    borderRadius: 4, padding: '13px 14px',
    fontFamily: "'DM Sans', sans-serif", fontSize: 16, outline: 'none',
  };
  const labelStyle = {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 11, fontWeight: 600,
    letterSpacing: '0.12em', textTransform: 'uppercase',
    color: theme === 'light' ? '#666' : '#888',
    display: 'block', marginBottom: 6,
  };

  if (submitted) return (
    <div style={{ textAlign: 'center', padding: '24px 0' }}>
      <div style={{ fontSize: 40, marginBottom: 12 }}>✓</div>
      <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 28, color: '#D42B2B', letterSpacing: 1 }}>YOU'RE IN!</div>
      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: theme === 'light' ? '#666' : '#888', marginTop: 8 }}>
        I'll be in touch within 24 hours.
      </div>
    </div>
  );

  return (
    <form
      action="https://formsubmit.co/ronan.ocallaghan13@gmail.com"
      method="POST"
      onSubmit={e => { e.preventDefault(); setSubmitted(true); }}
      style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <input type="hidden" name="_subject" value="New RONANOCfitness Enquiry" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <div>
        <label style={labelStyle}>Your Name</label>
        <input style={inputStyle} type="text" placeholder="Ronan" required name="name"
          value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
      </div>
      <div>
        <label style={labelStyle}>Phone Number</label>
        <input style={inputStyle} type="tel" placeholder="+353 83 000 0000" name="phone"
          value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
      </div>
      <div>
        <label style={labelStyle}>Email</label>
        <input style={inputStyle} type="email" placeholder="ronan@email.com" required name="email"
          value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
      </div>
      <div>
        <label style={labelStyle}>Primary Goal</label>
        <select style={{...inputStyle, appearance: 'none'}} name="goal"
          value={form.goal} onChange={e => setForm({...form, goal: e.target.value})}>
          <option>Lose fat</option>
          <option>Build muscle</option>
          <option>Lose fat &amp; build muscle</option>
          <option>Improve fitness</option>
        </select>
      </div>
      <button type="submit" style={{
        background: '#D42B2B', color: '#FFFFFF',
        border: 'none', borderRadius: 0,
        fontFamily: "'DM Sans', sans-serif", fontSize: 15,
        fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
        padding: '16px 0', cursor: 'pointer', width: '100%',
        marginTop: 4,
      }}>
        Start Your Transformation
      </button>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: '#666', textAlign: 'center', margin: 0 }}>
        Free consultation · No obligation · Reply within 24h
      </p>
    </form>
  );
}

function Hero({ theme }) {
  const bg = theme === 'light' ? '#F2F2F2' : '#0D0D0D';
  const fg = theme === 'light' ? '#0D0D0D' : '#FFFFFF';
  const cardBg = theme === 'light' ? '#FFFFFF' : '#1A1A1A';
  const cardBorder = theme === 'light' ? '#E0E0E0' : '#2A2A2A';

  return (
    <section style={{
      background: bg, minHeight: '100dvh', paddingTop: 56,
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', padding: '80px 24px 60px',
      boxSizing: 'border-box',
    }}>
      <div style={{ maxWidth: 420, width: '100%', textAlign: 'center' }}>
        <div style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600,
          letterSpacing: '0.18em', textTransform: 'uppercase',
          color: '#D42B2B', marginBottom: 16,
        }}>
          Online Transformation Coaching
        </div>
        <h1 style={{
          fontFamily: "'Bebas Neue', 'Arial Narrow', sans-serif",
          fontSize: 'clamp(52px, 14vw, 72px)', lineHeight: 1,
          letterSpacing: '0.02em', textTransform: 'uppercase',
          color: fg, margin: '0 0 16px',
        }}>
          Transform<br />Your Body.<br />
          <span style={{ color: '#D42B2B' }}>Transform</span> Your Life.
        </h1>
        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: 17, lineHeight: 1.65,
          color: theme === 'light' ? '#555' : '#888',
          margin: '0 0 36px',
        }}>
          Personalised nutrition &amp; training coaching built around your life — real results, no fad diets.
        </p>

        <div style={{
          background: cardBg, border: `1px solid ${cardBorder}`,
          borderRadius: 4, padding: '28px 24px',
          textAlign: 'left',
        }}>
          <div style={{
            fontFamily: "'Bebas Neue', sans-serif", fontSize: 20,
            letterSpacing: '0.05em', color: fg, marginBottom: 20,
          }}>
            GET YOUR FREE CONSULTATION
          </div>
          <SignupForm theme={theme} />
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Logo, Nav, Hero, SignupForm });
