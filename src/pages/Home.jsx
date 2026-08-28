import { useNavigate } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import StatBlock from '../components/StatBlock';
import PathCard from '../components/PathCard';
import OpportunityCard from '../components/OpportunityCard';
import InstitutionCard from '../components/InstitutionCard';
import SpotlightCard from '../components/SpotlightCard';
import { OPPS, OPPS_SORTED } from '../data/opportunities';
import { TOOLS, HOME_TOOL_NAMES } from '../data/tools';
import { ORG_GROUPS } from '../data/organizations';
import { PATHS_BASE } from '../data/paths';
import { MILAN_SPOTLIGHT } from '../data/spotlight';

const orgsCount = ORG_GROUPS.reduce((sum, g) => sum + g.items.length, 0);
const openNowOpportunities = OPPS_SORTED.filter((o) => o.openNow && o.highlight).slice(0, 6);
const homeTools = HOME_TOOL_NAMES.map((n) => TOOLS.find((t) => t.name === n)).filter(Boolean)
  .map((t) => ({ ...t, tagline: (t.cost + ' / ' + t.skill).toUpperCase() }));

const darkButtonStyle = { background: 'rgba(255,255,255,0.1)', color: 'var(--white)', border: '1px solid rgba(255,255,255,0.2)' };

export default function Home() {
  const navigate = useNavigate();

  const goToPath = (path) => {
    navigate(path.targetPage === 'Opportunities' ? '/opportunities' : path.targetPage === 'Organizations' ? '/organizations' : '/tools',
      path.targetPage === 'Opportunities' ? { state: { type: path.targetType } } : undefined);
  };

  return (
    <div>
      <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '96px var(--container-pad) 72px', animation: 'heroFadeUp .7s ease-out both' }}>
        <SectionHeading
          layout="hero"
          stacked
          titleSize="var(--text-6xl)"
          eyebrow="A COMMUNITY RESOURCE HUB FOR CREATIVE TECHNOLOGISTS"
          titlePlain="Level Up Your"
          titleGradient="Creative Future."
          body="Opportunity Arcade collects scholarships, programs, mentorships, conferences, events, creative tools, and communities across UX, game design, XR, accessibility, and interactive arts, all in one place, so you don't miss what you never knew existed."
        />
        <div style={{ display: 'flex', gap: 16, marginTop: 40, flexWrap: 'wrap' }}>
          <Button variant="primary" onClick={() => navigate('/opportunities')}>Explore Opportunities</Button>
          <Button variant="secondary" onClick={() => navigate('/tools')}>Browse Tools &amp; Software</Button>
          <Button variant="tertiary" onClick={() => navigate('/submit')}>Submit An Opportunity</Button>
        </div>
        <div style={{ display: 'flex', gap: 64, marginTop: 64, paddingTop: 40, borderTop: '1px solid var(--border-default)', flexWrap: 'wrap' }}>
          <StatBlock value={`${OPPS.length}+`} label="Opportunities Tracked" />
          <StatBlock value={`${TOOLS.length}+`} label="Creative Tools Listed" />
          <StatBlock value={`${orgsCount}+`} label="Orgs &amp; Communities" />
          <StatBlock value="100%" label="Free To Access" />
        </div>
      </section>

      <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--container-pad) 72px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 32 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-bold)', letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
            Select Your Path
          </span>
          <div style={{ flex: 1, height: 1, background: 'var(--border-default)' }} />
        </div>
        <div id="pathRow">
          {PATHS_BASE.map((p) => (
            <PathCard
              key={p.title}
              compact
              icon={p.icon}
              tone={p.tone}
              title={p.title}
              description={p.description}
              onClick={() => goToPath(p)}
            />
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--container-pad) 72px' }}>
        <SectionHeading
          layout="row"
          titlePlain="Open Right Now"
          action="View The Full Database →"
          onAction={() => navigate('/opportunities')}
          body="Live application windows in the network today."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 360px))', gap: 24, marginTop: 32 }}>
          {openNowOpportunities.map((opp) => (
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
      </section>

      <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--container-pad) 72px' }}>
        <div style={{ background: 'var(--surface-dark-gradient)', borderRadius: 'var(--radius-2xl)', padding: 56 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 20, marginBottom: 40 }}>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-bold)', letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--text-on-dark-muted)' }}>
                Start Making Things
              </div>
              <h2 style={{ margin: '10px 0 0', fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-4xl)', color: 'var(--white)' }}>
                Tools &amp; Software
              </h2>
            </div>
            <Button variant="secondary" style={darkButtonStyle} onClick={() => navigate('/tools')}>Browse All Tools</Button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 260px))', gap: 32 }}>
            {homeTools.map((tool) => (
              <a key={tool.name} href={tool.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <InstitutionCard dark location={tool.tagline} name={tool.name} description={tool.best} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--container-pad) 72px' }}>
        <SectionHeading
          layout="row"
          eyebrow="Student Spotlights"
          titlePlain="High Scores."
          action="Read Every Story →"
          onAction={() => navigate('/spotlights')}
        />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 32 }}>
          <SpotlightCard
            avatarInitials={MILAN_SPOTLIGHT.avatarInitials}
            avatarTone={MILAN_SPOTLIGHT.avatarTone}
            quote={MILAN_SPOTLIGHT.quote}
            name={MILAN_SPOTLIGHT.name}
            role={MILAN_SPOTLIGHT.role}
          />
          <div style={{ border: '1px dashed var(--border-default)', borderRadius: 'var(--radius-2xl)', padding: 'var(--space-8)', background: 'var(--surface-muted)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 16 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-xl)', color: 'var(--text-heading)' }}>
              Your Story Could Go Here.
            </div>
            <p style={{ margin: 0, color: 'var(--text-body)', lineHeight: 'var(--leading-normal)' }}>
              Tell us how an opportunity from the Arcade helped you, or share advice for the next person finding their way.
            </p>
            <Button variant="secondary" onClick={() => navigate('/submit')}>Submit Your Story</Button>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--container-pad) 72px' }}>
        <div style={{ background: 'var(--surface-muted)', borderRadius: 'var(--radius-2xl)', padding: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 40, flexWrap: 'wrap' }}>
          <div style={{ maxWidth: 480 }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-bold)', letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
              Submit An Opportunity
            </div>
            <h2 style={{ margin: '10px 0 16px', fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-4xl)', color: 'var(--text-heading)' }}>
              Know About Something We Don't?
            </h2>
            <p style={{ margin: '0 0 24px', color: 'var(--text-body)', lineHeight: 'var(--leading-normal)' }}>
              The Arcade is community-built. Send us scholarships, mentorships, tools, or communities you wish you'd known about sooner. We review every submission.
            </p>
            <Button variant="dark" onClick={() => navigate('/submit')}>Share An Opportunity</Button>
          </div>
          <div style={{ flex: '0 0 260px', height: 180, borderRadius: 'var(--radius-2xl)', border: '2px solid transparent', background: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-3xl)', backgroundImage: 'var(--brand-gradient)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
              +1 EXP
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
