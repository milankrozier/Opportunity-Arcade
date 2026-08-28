const VARIANTS = {
  primary: { background: 'var(--ink-900)', color: 'var(--white)', border: '1px solid var(--ink-900)' },
  secondary: { background: 'var(--white)', color: 'var(--ink-900)', border: '1px solid var(--border-default)' },
  tertiary: { background: 'var(--cat-teal-bg)', color: 'var(--cat-teal-fg)', border: '1px solid transparent' },
  dark: { background: 'var(--ink-900)', color: 'var(--white)', border: '1px solid var(--ink-900)' },
  kofi: { background: 'var(--kofi)', color: 'var(--white)', border: '1px solid var(--kofi)' },
};

const SIZES = {
  sm: { padding: '8px 16px', fontSize: 'var(--text-sm)' },
  md: { padding: '14px 26px', fontSize: 'var(--text-base)' },
};

export default function Button({ variant = 'primary', size = 'md', children, onClick, disabled, fullWidth, style }) {
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        fontFamily: 'var(--font-body)',
        fontWeight: 'var(--weight-semibold)',
        lineHeight: 1,
        borderRadius: 'var(--radius-full)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transition: 'filter var(--transition-fast)',
        display: fullWidth ? 'flex' : 'inline-flex',
        width: fullWidth ? '100%' : 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        whiteSpace: 'nowrap',
        ...v,
        ...s,
        ...style,
      }}
      onMouseOver={(e) => { e.currentTarget.style.filter = 'brightness(0.92)'; }}
      onMouseOut={(e) => { e.currentTarget.style.filter = 'none'; }}
    >
      {children}
    </button>
  );
}
