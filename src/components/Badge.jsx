import { TONES } from './tones';

export default function Badge({ tone = 'blue', children }) {
  const t = TONES[tone] || TONES.blue;
  return (
    <span
      style={{
        display: 'inline-block',
        fontFamily: 'var(--font-mono)',
        fontWeight: 'var(--weight-bold)',
        fontSize: 'var(--text-xs)',
        letterSpacing: 'var(--tracking-wider)',
        textTransform: 'uppercase',
        padding: '6px 14px',
        borderRadius: 'var(--radius-full)',
        ...t,
      }}
    >
      {children}
    </span>
  );
}
