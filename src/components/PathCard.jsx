import IconChip from './IconChip';

export default function PathCard({ icon = 'sparkles', tone = 'violet', title, description, onClick, compact }) {
  return (
    <div
      onClick={onClick}
      style={{
        border: '1px solid var(--border-default)',
        borderRadius: compact ? 'var(--radius-xl)' : 'var(--radius-2xl)',
        padding: compact ? 'var(--space-4)' : 'var(--space-6)',
        background: 'var(--surface-muted)',
        display: 'flex',
        flexDirection: 'column',
        gap: compact ? 'var(--space-2)' : 'var(--space-4)',
        cursor: onClick ? 'pointer' : 'default',
        minWidth: compact ? 0 : 200,
        height: compact ? '100%' : 'auto',
        boxSizing: 'border-box',
      }}
    >
      <IconChip icon={icon} tone={tone} size={compact ? 32 : 44} />
      <div>
        <h4
          style={{
            margin: '0 0 4px 0',
            fontFamily: 'var(--font-display)',
            fontWeight: 'var(--weight-bold)',
            fontSize: compact ? 'var(--text-base)' : 'var(--text-xl)',
            color: 'var(--text-heading)',
          }}
        >
          {title}
        </h4>
        <p
          style={{
            margin: 0,
            fontFamily: 'var(--font-body)',
            fontSize: compact ? 'var(--text-xs)' : 'var(--text-sm)',
            color: 'var(--text-body)',
            lineHeight: 'var(--leading-snug)',
            display: 'block',
            overflow: 'visible',
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
