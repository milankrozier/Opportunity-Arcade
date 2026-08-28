import LogoMark from './LogoMark';
import Button from './Button';

export default function SupportCallout({
  title = 'One coffee = one more week of upkeep.', body, cta = 'Support on Ko-fi →', onSupport, iconSrc, children,
}) {
  return (
    <div
      style={{
        borderRadius: 'var(--radius-2xl)',
        padding: 'var(--space-12) var(--space-10)',
        textAlign: 'center',
        background: 'linear-gradient(120deg, #eef2ff 0%, #fdf2f8 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'var(--space-4)',
      }}
    >
      {iconSrc ? (
        <img src={iconSrc} alt="" style={{ height: 160, width: 'auto' }} />
      ) : (
        <LogoMark size={64} />
      )}
      <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-3xl)', color: 'var(--text-heading)' }}>
        {title}
      </h3>
      {body && (
        <p style={{ margin: 0, color: 'var(--text-body)', maxWidth: 460, lineHeight: 'var(--leading-normal)' }}>{body}</p>
      )}
      <Button variant="kofi" onClick={onSupport} style={{ marginTop: 'var(--space-2)' }}>{cta}</Button>
      {children && (
        <div style={{ width: '100%', marginTop: 'var(--space-6)', paddingTop: 'var(--space-6)', borderTop: '1px solid var(--border-default)', display: 'flex', justifyContent: 'space-around' }}>
          {children}
        </div>
      )}
    </div>
  );
}
