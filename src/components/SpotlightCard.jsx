import Avatar from './Avatar';
import Badge from './Badge';

export default function SpotlightCard({
  avatarInitials, avatarTone = 'pink', badgeTone = 'pink', quote, name, role, footnote, compact,
}) {
  return (
    <div
      style={{
        border: '1px solid var(--border-default)',
        borderRadius: 'var(--radius-2xl)',
        padding: 'var(--space-8)',
        background: 'var(--white)',
        display: 'flex',
        flexDirection: compact ? 'column' : 'row',
        gap: 'var(--space-6)',
        alignItems: compact ? 'flex-start' : 'center',
      }}
    >
      <Avatar initials={avatarInitials} tone={avatarTone} size={56} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
        {compact && <Badge tone={badgeTone}>Featured Creator</Badge>}
        <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 'var(--text-xl)', color: 'var(--text-heading)', lineHeight: 'var(--leading-snug)' }}>
          {`"${quote}"`}
        </p>
        {footnote && (
          <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>{footnote}</p>
        )}
        <div style={{ paddingTop: 'var(--space-2)', borderTop: compact ? '1px solid var(--border-default)' : 'none' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontWeight: 'var(--weight-bold)', color: 'var(--text-heading)' }}>{name}</div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>{role}</div>
        </div>
      </div>
    </div>
  );
}
