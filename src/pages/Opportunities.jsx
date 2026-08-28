import { useState, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import Input from '../components/Input';
import Select from '../components/Select';
import Button from '../components/Button';
import OpportunityCard from '../components/OpportunityCard';
import { OPPS, OPPS_SORTED, TYPE_OPTIONS } from '../data/opportunities';

export default function Opportunities() {
  const location = useLocation();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState(location.state?.type || 'All types');
  const [openNowOnly, setOpenNowOnly] = useState(false);

  const filteredOpportunities = useMemo(() => {
    const q = search.trim().toLowerCase();
    return OPPS_SORTED.filter((o) => {
      if (typeFilter !== 'All types' && o.type !== typeFilter) return false;
      if (openNowOnly && !o.openNow) return false;
      if (q && !(o.title.toLowerCase().includes(q) || o.org.toLowerCase().includes(q) || o.description.toLowerCase().includes(q))) return false;
      return true;
    });
  }, [search, typeFilter, openNowOnly]);

  const hasResults = filteredOpportunities.length > 0;

  return (
    <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '64px var(--container-pad) 96px' }}>
      <SectionHeading
        layout="hero"
        eyebrow="The Database"
        titlePlain="Every Opportunity, "
        titleGradient="In One Place."
        body="Filter by type or search by keyword. Updated bi-weekly by the community."
      />

      <div style={{ display: 'flex', gap: 16, marginTop: 40, flexWrap: 'wrap', alignItems: 'stretch' }}>
        <div style={{ flex: '2 1 280px' }}>
          <Input placeholder="Search by name, organization, or keyword…" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div style={{ flex: '1 1 220px' }}>
          <Select options={TYPE_OPTIONS} value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} />
        </div>
        <Button variant={openNowOnly ? 'primary' : 'secondary'} onClick={() => setOpenNowOnly((v) => !v)}>Open Now Only</Button>
      </div>

      <div style={{ marginTop: 24, fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-bold)', letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
        {filteredOpportunities.length} of {OPPS.length} opportunities
      </div>

      {hasResults ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 380px))', gap: 24, marginTop: 24 }}>
          {filteredOpportunities.map((opp) => (
            <a key={opp.title} href={opp.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
              <OpportunityCard
                badgeTone={opp.badgeTone}
                type={opp.type}
                due={opp.due}
                urgent={opp.urgent}
                highlight={opp.highlight}
                title={opp.title}
                description={opp.description}
                org={opp.org}
                location={opp.location}
              />
            </a>
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '80px 20px', color: 'var(--text-muted)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-lg)' }}>
          No opportunities match your filters yet. Try a different search or type, or{' '}
          <a href="#" onClick={(e) => { e.preventDefault(); navigate('/submit'); }}>submit one</a> if you know of one we're missing.
        </div>
      )}
    </div>
  );
}
