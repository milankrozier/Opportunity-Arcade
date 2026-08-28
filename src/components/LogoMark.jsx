export default function LogoMark({ size = 40, initials = 'OA' }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.32,
        background: 'var(--brand-gradient-mark)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        color: 'var(--white)',
        fontFamily: 'var(--font-display)',
        fontWeight: 'var(--weight-bold)',
        fontSize: size * 0.36,
      }}
    >
      {initials}
    </div>
  );
}
