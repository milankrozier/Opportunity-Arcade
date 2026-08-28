import { useNavigate, useLocation } from 'react-router-dom';
import Button from './Button';

const LINKS = [
  { label: 'Opportunities', path: '/opportunities' },
  { label: 'Tools & Software', path: '/tools' },
  { label: 'Organizations', path: '/organizations' },
  { label: 'Spotlights', path: '/spotlights' },
  { label: 'About', path: '/about' },
];

export default function NavBar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const active = LINKS.find((l) => l.path === pathname)?.label;
  return (
    <nav style={{ borderBottom: '1px solid var(--border-default)', background: 'var(--white)', fontFamily: 'var(--font-body)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20, maxWidth: 'var(--container-max)', margin: '0 auto', padding: '14px var(--container-pad)' }}>
        <img
          src="/assets/logo-wordmark.png"
          alt="Opportunity Arcade"
          onClick={() => navigate('/')}
          style={{ height: 30, width: 'auto', cursor: 'pointer', flexShrink: 0 }}
        />
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'nowrap', flex: 1, minWidth: 0, overflow: 'hidden' }}>
          {LINKS.map((l) => (
            <a
              key={l.label}
              onClick={() => navigate(l.path)}
              style={{
                cursor: 'pointer',
                fontSize: 'var(--text-base)',
                color: active === l.label ? 'var(--text-heading)' : 'var(--text-body)',
                fontWeight: active === l.label ? 'var(--weight-semibold)' : 'var(--weight-regular)',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexShrink: 0 }}>
          <a
            onClick={() => navigate('/submit')}
            style={{ cursor: 'pointer', color: 'var(--text-body)', textDecoration: 'none', whiteSpace: 'nowrap' }}
          >
            Submit
          </a>
          <Button variant="dark" size="sm" onClick={() => navigate('/support')}>Support</Button>
        </div>
      </div>
    </nav>
  );
}
