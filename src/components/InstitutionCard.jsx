export default function InstitutionCard({ location, name, description, dark }) {
  return (
    <div
      style={dark ? {
        display: 'flex', flexDirection: 'column', gap: 6,
      } : {
        border: '1px solid var(--border-default)',
        borderRadius: 'var(--radius-2xl)',
        padding: 'var(--space-6)',
        background: 'var(--white)',
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-xs)',
          fontWeight: 'var(--weight-bold)',
          letterSpacing: 'var(--tracking-wider)',
          textTransform: 'uppercase',
          color: dark ? '#f472b6' : 'var(--cat-pink-fg)',
        }}
      >
        {location}
      </span>
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 'var(--weight-bold)',
          fontSize: 'var(--text-xl)',
          color: dark ? 'var(--white)' : 'var(--text-heading)',
        }}
      >
        {name}
      </span>
      {description && (
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-sm)',
            color: dark ? 'var(--text-on-dark-muted)' : 'var(--text-body)',
          }}
        >
          {description}
        </span>
      )}
    </div>
  );
}
