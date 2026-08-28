import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div style={{ maxWidth: 640, margin: '0 auto', padding: '120px var(--container-pad)', textAlign: 'center' }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-bold)', letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
        Game Over
      </div>
      <h1 style={{ margin: '12px 0 16px', fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-4xl)', color: 'var(--text-heading)' }}>
        This Level Doesn't Exist.
      </h1>
      <p style={{ margin: '0 0 24px', color: 'var(--text-body)', lineHeight: 'var(--leading-normal)' }}>
        Let's get you back to the Arcade.
      </p>
      <Button variant="primary" onClick={() => navigate('/')}>Back To Home</Button>
    </div>
  );
}
