const gradientSpanStyle = {
  backgroundImage: 'var(--brand-gradient)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
};

export default function SectionHeading({
  eyebrow, titlePlain, titleGradient, body, action, onAction,
  layout = 'hero', stacked, titleSize,
}) {
  const titleEl = (
    <h2
      style={{
        margin: '12px 0 0 0',
        fontFamily: 'var(--font-display)',
        fontWeight: 'var(--weight-bold)',
        fontSize: titleSize || (layout === 'hero' ? 'var(--text-5xl)' : 'var(--text-4xl)'),
        lineHeight: 'var(--leading-tight)',
        color: 'var(--text-heading)',
      }}
    >
      {stacked ? (
        <>
          <span style={{ display: 'block' }}>{titlePlain}</span>
          {titleGradient && (
            <span style={{ display: 'block' }}>
              <span style={gradientSpanStyle}>{titleGradient}</span>
            </span>
          )}
        </>
      ) : (
        <>
          {titlePlain}
          {titleGradient && <span style={gradientSpanStyle}>{titleGradient}</span>}
        </>
      )}
    </h2>
  );

  const eyebrowEl = (
    <span
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-xs)',
        fontWeight: 'var(--weight-bold)',
        letterSpacing: 'var(--tracking-wider)',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        whiteSpace: 'nowrap',
      }}
    >
      {eyebrow}
    </span>
  );

  if (layout === 'row') {
    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 24 }}>
          {titleEl}
          <div style={{ flex: 1, height: 1, background: 'var(--border-default)' }} />
          {eyebrow && eyebrowEl}
          {action && (
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); if (onAction) onAction(); }}
              style={{ color: 'var(--link-default)', textDecoration: 'none', fontWeight: 'var(--weight-semibold)', whiteSpace: 'nowrap', cursor: 'pointer' }}
            >
              {action}
            </a>
          )}
        </div>
        {body && (
          <p style={{ margin: '12px 0 0 0', color: 'var(--text-body)', fontSize: 'var(--text-lg)', maxWidth: 640 }}>
            {body}
          </p>
        )}
      </div>
    );
  }

  return (
    <div>
      {eyebrowEl}
      {titleEl}
      {body && (
        <p style={{ margin: '20px 0 0 0', color: 'var(--text-body)', fontSize: 'var(--text-lg)', lineHeight: 'var(--leading-normal)', maxWidth: 640 }}>
          {body}
        </p>
      )}
    </div>
  );
}
