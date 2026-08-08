// InfoSplit.jsx — pairs "Everything You Need to Succeed" with "Common
// Questions" side by side from tablet up, stacked on phones. Merging the two
// sections cuts a meaningful amount of scrolling on desktop.

function InfoSplit({ theme }) {
  const bg = theme === 'light' ? '#F2F2F2' : '#0D0D0D';

  return (
    <section style={{ background: bg, padding: '80px 24px' }}>
      <div className="info-split" style={{ maxWidth: 1200, margin: '0 auto' }}>
        <IncludesContent theme={theme} />
        <FAQContent theme={theme} />
      </div>
    </section>
  );
}

Object.assign(window, { InfoSplit });
