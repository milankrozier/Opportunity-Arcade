import { useNavigate } from 'react-router-dom';

const linkStyle = { color: 'var(--text-heading)', cursor: 'pointer' };

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer style={{ background: 'var(--surface-muted)', padding: '56px 40px', fontFamily: 'var(--font-body)' }}>
      <div style={{ display: 'flex', gap: 64, flexWrap: 'wrap', maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <div style={{ flex: '1 1 320px', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
            <img src="/assets/logo-wordmark.png" alt="Opportunity Arcade" style={{ height: 32, width: 'auto' }} />
          </div>
          <p style={{ margin: 0, color: 'var(--text-body)', lineHeight: 'var(--leading-normal)', maxWidth: 380 }}>
            A community-supported hub for the next generation of creative technologists, interactive artists, and inclusive designers. Here's a collection of opportunities we wish we'd known about sooner.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-bold)', letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Explore</div>
          <a onClick={() => navigate('/opportunities')} style={linkStyle}>Opportunities</a>
          <a onClick={() => navigate('/tools')} style={linkStyle}>Tools &amp; Software</a>
          <a onClick={() => navigate('/organizations')} style={linkStyle}>Organizations</a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-bold)', letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Community</div>
          <a onClick={() => navigate('/spotlights')} style={linkStyle}>Student Spotlights</a>
          <a onClick={() => navigate('/about')} style={linkStyle}>About</a>
          <a href="https://www.linkedin.com/company/opportunity-arcade" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-heading)' }}>LinkedIn</a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-bold)', letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Take Action</div>
          <a onClick={() => navigate('/submit')} style={linkStyle}>Submit Opportunity</a>
          <a onClick={() => navigate('/support')} style={linkStyle}>Support on Ko-fi</a>
          <a onClick={() => navigate('/arcade')} style={linkStyle}>Insert Coin</a>
        </div>
      </div>
    </footer>
  );
}
