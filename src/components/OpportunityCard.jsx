import Badge from './Badge';

export default function OpportunityCard({
  badgeTone = 'blue', type = 'Scholarship', due, urgent, title, description, org, location, highlight,
}) {
  return (
    <div
      style={{
        border: `1px solid ${highlight ? 'var(--brand-blue)' : 'var(--border-default)'}`,
        borderRadius: 'var(--radius-2xl)',
        padding: 'var(--space-8)',
        background: 'var(--white)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-4)',
        minWidth: 280,
        height: 340,
        overflow: 'hidden',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Badge tone={badgeTone}>{type}</Badge>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-xs)',
            letterSpacing: 'var(--tracking-wide)',
            textTransform: 'uppercase',
            fontWeight: 'var(--weight-bold)',
            color: urgent ? 'var(--danger)' : 'var(--text-muted)',
          }}
        >
          {due}
        </span>
      </div>
      <h3
        style={{
          margin: 0,
          fontFamily: 'var(--font-display)',
          fontWeight: 'var(--weight-bold)',
          fontSize: 'var(--text-2xl)',
          color: highlight ? 'var(--link-default)' : 'var(--text-heading)',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        {title}
      </h3>
      <p
        style={{
          margin: 0,
          fontFamily: 'var(--font-body)',
          color: 'var(--text-body)',
          lineHeight: 'var(--leading-normal)',
          flexGrow: 1,
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        {description}
      </p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: 'var(--space-4)',
          borderTop: '1px solid var(--border-default)',
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-sm)',
        }}
      >
        <span style={{ fontWeight: 'var(--weight-semibold)', color: 'var(--text-heading)' }}>{org}</span>
        <span style={{ color: 'var(--text-muted)' }}>{location}</span>
      </div>
    </div>
  );
}
