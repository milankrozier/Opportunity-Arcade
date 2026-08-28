import { useNavigate } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import SpotlightFeatureCard from '../components/SpotlightFeatureCard';
import { MILAN_SPOTLIGHT } from '../data/spotlight';

export default function Spotlights() {
  const navigate = useNavigate();

  return (
    <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '64px var(--container-pad) 96px' }}>
      <SectionHeading
        layout="hero"
        eyebrow="Student Spotlights"
        titlePlain="High "
        titleGradient="Scores."
        body="Real journeys from students, scholarship recipients, and early-career creatives."
      />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 48 }}>
        <SpotlightFeatureCard spotlight={MILAN_SPOTLIGHT} />
        <div style={{ border: '1px dashed var(--border-default)', borderRadius: 'var(--radius-2xl)', padding: 'var(--space-8)', background: 'var(--surface-muted)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 16 }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-xl)', color: 'var(--text-heading)' }}>
            Your Story Could Go Here.
          </div>
          <p style={{ margin: 0, color: 'var(--text-body)', lineHeight: 'var(--leading-normal)' }}>
            Real people, real outcomes, found through the Arcade. Tell us about the opportunity that changed your path.
          </p>
          <Button variant="secondary" onClick={() => navigate('/submit')}>Submit Your Story</Button>
        </div>
      </div>

      <div style={{ marginTop: 56, padding: 40, border: '1px solid var(--border-default)', borderRadius: 'var(--radius-2xl)', background: 'var(--surface-muted)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
        <div style={{ maxWidth: 520 }}>
          <h3 style={{ margin: '0 0 8px', fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-2xl)', color: 'var(--text-heading)' }}>
            Found Something Here That Changed Your Path?
          </h3>
          <p style={{ margin: 0, color: 'var(--text-body)', lineHeight: 'var(--leading-normal)' }}>
            Tell us about it. Your story could be the reason someone else keeps going.
          </p>
        </div>
        <Button variant="dark" onClick={() => navigate('/submit')}>Share Your Story</Button>
      </div>
    </div>
  );
}
