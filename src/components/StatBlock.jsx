export default function StatBlock({ value, label, dark }) {
  return (
    <div>
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 'var(--weight-bold)',
          fontSize: 'var(--text-4xl)',
          color: dark ? 'var(--white)' : 'var(--text-heading)',
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-xs)',
          fontWeight: 'var(--weight-bold)',
          letterSpacing: 'var(--tracking-wider)',
          textTransform: 'uppercase',
          color: dark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)',
          marginTop: 6,
        }}
      >
        {label}
      </div>
    </div>
  );
}
