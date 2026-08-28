import { useLightbox } from '../context/LightboxContext';
import Badge from './Badge';
import Avatar from './Avatar';

export default function SpotlightFeatureCard({ spotlight }) {
  const { openLightbox } = useLightbox();
  const { photo, photoAlt, avatarTone, avatarInitials, quote, name, role, linkedin } = spotlight;

  return (
    <div style={{ border: '1px solid var(--border-default)', borderRadius: 'var(--radius-2xl)', background: 'var(--white)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <div
        onClick={() => openLightbox(photo)}
        style={{ aspectRatio: '4/3', background: 'var(--surface-muted)', borderBottom: '1px solid var(--border-default)', cursor: 'zoom-in', position: 'relative' }}
      >
        <img src={photo} alt={photoAlt} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%', display: 'block' }} />
        <span style={{ position: 'absolute', left: 12, bottom: 12, padding: '5px 10px', borderRadius: 999, background: 'rgba(17,24,39,0.72)', color: '#fff', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 'var(--weight-bold)', letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase' }}>
          Submitted Photo
        </span>
      </div>
      <div style={{ padding: 'var(--space-8)', display: 'flex', flexDirection: 'column', gap: 16, flex: 1 }}>
        <Badge tone={avatarTone}>Featured Creator</Badge>
        <p style={{ margin: 0, fontSize: 'var(--text-xl)', color: 'var(--text-heading)', lineHeight: 'var(--leading-snug)' }}>
          {`"${quote}"`}
        </p>
        <div style={{ marginTop: 'auto', paddingTop: 'var(--space-4)', borderTop: '1px solid var(--border-default)', display: 'flex', alignItems: 'center', gap: 14 }}>
          <Avatar initials={avatarInitials} tone={avatarTone} size={48} />
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
              <div style={{ fontWeight: 'var(--weight-bold)', color: 'var(--text-heading)' }}>{name}</div>
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 'var(--weight-bold)', letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--link-default)', border: '1px solid var(--border-default)', borderRadius: 999, padding: '3px 9px', textDecoration: 'none' }}
                >
                  LinkedIn ↗
                </a>
              )}
            </div>
            <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>{role}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
