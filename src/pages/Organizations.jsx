import SectionHeading from '../components/SectionHeading';
import InstitutionCard from '../components/InstitutionCard';
import { ORG_GROUPS } from '../data/organizations';

export default function Organizations() {
  return (
    <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '64px var(--container-pad) 96px' }}>
      <SectionHeading
        layout="hero"
        eyebrow="Organizations &amp; Communities"
        titlePlain="Find Your "
        titleGradient="People."
        body="Professional associations and student-run networks where creative technologists gather, learn, and lift each other up."
      />

      {ORG_GROUPS.map((group) => (
        <div key={group.label} style={{ marginTop: 48 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 24, marginBottom: 20 }}>
            <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-2xl)', color: 'var(--text-heading)', whiteSpace: 'nowrap' }}>
              {group.label}
            </h3>
            <div style={{ flex: 1, height: 1, background: 'var(--border-default)' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 360px))', gap: 24 }}>
            {group.items.map((org) => (
              <a key={org.name} href={org.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <InstitutionCard location={org.kind} name={org.name} description={org.description} />
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
