export default function Input({ placeholder, value, onChange, type = 'text', style }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{
        width: '100%',
        boxSizing: 'border-box',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-base)',
        color: 'var(--ink-900)',
        background: 'var(--white)',
        border: '1px solid var(--border-default)',
        borderRadius: 'var(--radius-full)',
        padding: '16px 22px',
        outline: 'none',
        transition: 'border-color var(--transition-fast)',
        ...style,
      }}
      onFocus={(e) => { e.target.style.borderColor = 'var(--brand-violet)'; }}
      onBlur={(e) => { e.target.style.borderColor = 'var(--border-default)'; }}
    />
  );
}
