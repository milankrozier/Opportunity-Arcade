import { TONES } from './tones';

export default function Avatar({ initials = 'OA', tone = 'pink', size = 56 }) {
  const t = TONES[tone] || TONES.pink;
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: 'var(--radius-lg)',
        background: t.background,
        color: t.color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        fontFamily: 'var(--font-display)',
        fontWeight: 'var(--weight-bold)',
        fontSize: size * 0.36,
      }}
    >
      {initials}
    </div>
  );
}
