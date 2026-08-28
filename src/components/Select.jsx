import { ChevronDown } from 'lucide-react';

export default function Select({ value, onChange, options = [], style }) {
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <select
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
          padding: '16px 44px 16px 22px',
          outline: 'none',
          appearance: 'none',
          ...style,
        }}
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
      <ChevronDown
        size={18}
        style={{ position: 'absolute', right: 20, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--ink-500)' }}
      />
    </div>
  );
}
