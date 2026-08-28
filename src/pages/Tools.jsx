import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import Input from '../components/Input';
import Select from '../components/Select';
import Badge from '../components/Badge';
import Button from '../components/Button';
import { TOOLS, TOOLS_SORTED, COST_OPTIONS, SKILL_OPTIONS, PLATFORM_OPTIONS, FOCUS_OPTIONS } from '../data/tools';

export default function Tools() {
  const navigate = useNavigate();
  const [toolSearch, setToolSearch] = useState('');
  const [costFilter, setCostFilter] = useState('Any cost');
  const [skillFilter, setSkillFilter] = useState('Any skill level');
  const [platformFilter, setPlatformFilter] = useState('Any platform');
  const [focusFilter, setFocusFilter] = useState('Any creative focus');

  const filteredTools = useMemo(() => {
    const tq = toolSearch.trim().toLowerCase();
    return TOOLS_SORTED.filter((t) => {
      if (costFilter !== 'Any cost' && t.cost !== costFilter) return false;
      if (skillFilter !== 'Any skill level' && t.skill !== skillFilter) return false;
      if (platformFilter !== 'Any platform' && !t.platforms.includes(platformFilter)) return false;
      if (focusFilter !== 'Any creative focus' && !t.focus.includes(focusFilter)) return false;
      if (tq && !(t.name.toLowerCase().includes(tq) || t.best.toLowerCase().includes(tq) || t.focus.join(' ').toLowerCase().includes(tq))) return false;
      return true;
    }).map((t) => ({
      ...t,
      costTone: t.cost === 'Free' ? 'teal' : 'blue',
      skillTone: t.skill === 'Beginner-Friendly' ? 'violet' : 'pink',
    }));
  }, [toolSearch, costFilter, skillFilter, platformFilter, focusFilter]);

  const hasToolResults = filteredTools.length > 0;

  return (
    <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '64px var(--container-pad) 96px' }}>
      <SectionHeading
        layout="hero"
        eyebrow="Tools &amp; Software"
        titlePlain="Create Something "
        titleGradient="New."
        body="Discover the tools and software that can turn your ideas into something real."
      />

      <div style={{ marginTop: 48 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 24, marginBottom: 20 }}>
          <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-2xl)', color: 'var(--text-heading)', whiteSpace: 'nowrap' }}>
            Find The Right Tool For You.
          </h3>
          <div style={{ flex: 1, height: 1, background: 'var(--border-default)' }} />
        </div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'stretch' }}>
          <div style={{ flex: '2 1 260px' }}>
            <Input placeholder="Search tools by name or what you want to make…" value={toolSearch} onChange={(e) => setToolSearch(e.target.value)} />
          </div>
          <div style={{ flex: '1 1 170px' }}>
            <Select options={COST_OPTIONS} value={costFilter} onChange={(e) => setCostFilter(e.target.value)} />
          </div>
          <div style={{ flex: '1 1 170px' }}>
            <Select options={SKILL_OPTIONS} value={skillFilter} onChange={(e) => setSkillFilter(e.target.value)} />
          </div>
          <div style={{ flex: '1 1 150px' }}>
            <Select options={PLATFORM_OPTIONS} value={platformFilter} onChange={(e) => setPlatformFilter(e.target.value)} />
          </div>
          <div style={{ flex: '1 1 190px' }}>
            <Select options={FOCUS_OPTIONS} value={focusFilter} onChange={(e) => setFocusFilter(e.target.value)} />
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 24 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-bold)', letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
            {filteredTools.length} of {TOOLS.length} tools
          </span>
          <div style={{ flex: 1, height: 1, background: 'var(--border-default)' }} />
        </div>
      </div>

      {hasToolResults ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20, marginTop: 24 }}>
          {filteredTools.map((tool) => (
            <a key={tool.name} href={tool.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-2xl)', background: 'var(--white)', padding: 24, height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-xl)', color: 'var(--text-heading)', lineHeight: 'var(--leading-tight)' }}>
                  {tool.name}
                </span>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', alignItems: 'center' }}>
                  <Badge tone={tool.costTone}>{tool.cost}</Badge>
                  <Badge tone={tool.skillTone}>{tool.skill}</Badge>
                  {tool.platforms.map((pf) => (
                    <span key={pf} style={{ fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 'var(--weight-bold)', letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--text-muted)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-full)', padding: '4px 9px', whiteSpace: 'nowrap' }}>
                      {pf}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-bold)', letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 6 }}>
                  Best For
                </div>
                <p style={{ margin: 0, color: 'var(--text-body)', lineHeight: 'var(--leading-normal)', textWrap: 'pretty' }}>{tool.best}</p>
              </div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', paddingTop: 14, borderTop: '1px solid var(--border-default)' }}>
                {tool.focus.map((tag) => (
                  <span key={tag} style={{ fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 'var(--weight-bold)', letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--text-body)', background: 'var(--surface-muted)', borderRadius: 'var(--radius-full)', padding: '4px 9px', whiteSpace: 'nowrap' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '80px 20px', color: 'var(--text-muted)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-lg)' }}>
          No tools match those filters yet. Try loosening one, or{' '}
          <a href="#" onClick={(e) => { e.preventDefault(); navigate('/submit'); }}>submit a tool</a> you think belongs here.
        </div>
      )}

      <div style={{ marginTop: 56, padding: 40, border: '1px solid var(--border-default)', borderRadius: 'var(--radius-2xl)', background: 'var(--surface-muted)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
        <div style={{ maxWidth: 560 }}>
          <h3 style={{ margin: '0 0 8px', fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-2xl)', color: 'var(--text-heading)' }}>
            Have Something To Share?
          </h3>
          <p style={{ margin: 0, color: 'var(--text-body)', lineHeight: 'var(--leading-normal)' }}>
            Know an opportunity, tool, or experience that belongs on Opportunity Arcade? Send it our way.
          </p>
        </div>
        <Button variant="dark" onClick={() => navigate('/submit')}>Submit An Opportunity</Button>
      </div>
    </div>
  );
}
