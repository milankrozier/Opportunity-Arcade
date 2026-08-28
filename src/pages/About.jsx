import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import Badge from '../components/Badge';
import { useLightbox } from '../context/LightboxContext';
import { QUEST_GROUPS } from '../data/questGroups';

const goToKofiStyleLinks = {
  linkedin: 'https://www.linkedin.com/in/milan-rozier/',
  portfolio: 'https://milankrozierdesigns.myportfolio.com/work',
};

export default function About() {
  const { openLightbox } = useLightbox();

  return (
    <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '64px var(--container-pad) 96px' }}>
      <SectionHeading
        layout="hero"
        eyebrow="WHY THIS EXISTS"
        titlePlain="The Person Behind "
        titleGradient="The Arcade."
        body="A UX designer who got tired of finding good opportunities by accident."
      />

      <div style={{ display: 'flex', gap: 48, marginTop: 56, flexWrap: 'wrap', alignItems: 'flex-start' }}>
        <div style={{ flex: '0 0 320px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div
            onClick={() => openLightbox('/assets/about-main.jpg')}
            style={{ borderRadius: 'var(--radius-2xl)', overflow: 'hidden', border: '1px solid var(--border-default)', cursor: 'zoom-in' }}
          >
            <img src="/assets/about-main.jpg" alt="Milan Rozier holding the UX/UI Designer Notebook" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-bold)', letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
            Click To Enlarge
          </span>
        </div>
        <div style={{ flex: '1 1 420px', display: 'flex', flexDirection: 'column', gap: 20 }}>
          <p style={{ margin: 0, color: 'var(--text-body)', fontSize: 'var(--text-lg)', lineHeight: 'var(--leading-normal)' }}>
            I'm Milan Rozier, a UX/UI designer and digital accessibility advocate from Michigan with a soft spot for video games and the arts. I earned my B.A. in Comparative Women's Studies from Spelman College, concentrating in Inclusive Multimedia Design, and I'm now in my second year of the User Experience M.S. program at Michigan State University, where I'm also pursuing a Graduate Certificate in Serious Game Design and Research. Along the way, I've gained great experience in UX/UI and technology through multiple opportunities that have been the building blocks of my design journey and continue to shape my early career today.
          </p>
          <p style={{ margin: 0, color: 'var(--text-body)', fontSize: 'var(--text-lg)', lineHeight: 'var(--leading-normal)' }}>
            However, I started Opportunity Arcade because I kept finding these amazing scholarships, mentorships, programs, conferences, and communities almost by accident. Sometimes it took a deep dive across the web, a random LinkedIn post, an email I happened to come across, or hearing about something through word of mouth. Too often, finding a great opportunity felt less like knowing where to look and more like getting lucky. So I built the place I wish I'd had: one home for the opportunities, tools, and communities that helped shape my own path, so the next technical creative can spend less time searching and more time creating.
          </p>
          <div style={{ display: 'flex', gap: 16, marginTop: 8, flexWrap: 'wrap' }}>
            <Button variant="secondary" onClick={() => window.open(goToKofiStyleLinks.portfolio, '_blank', 'noopener,noreferrer')}>My Portfolio</Button>
            <Button variant="tertiary" onClick={() => window.open(goToKofiStyleLinks.linkedin, '_blank', 'noopener,noreferrer')}>LinkedIn</Button>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 72 }}>
        <SectionHeading layout="row" eyebrow="MY QUEST LOG" titlePlain="Programs I've Actually Done." />
        <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 32 }}>
          {QUEST_GROUPS.map((group) => (
            <div key={group.label}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 24, marginBottom: 16 }}>
                <h4 style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-bold)', letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
                  {group.label}
                </h4>
                <div style={{ flex: 1, height: 1, background: 'var(--border-default)' }} />
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {group.items.map((item) => (
                  <Badge key={item} tone={group.tone}>{item}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 72 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 24, marginBottom: 24 }}>
          <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-2xl)', color: 'var(--text-heading)', whiteSpace: 'nowrap' }}>
            Gallery
          </h3>
          <div style={{ flex: 1, height: 1, background: 'var(--border-default)' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
          <div
            onClick={() => openLightbox('/uploads/Milan Rozier_Professional Headshot-2596e41b.jpg')}
            style={{ borderRadius: 'var(--radius-2xl)', overflow: 'hidden', aspectRatio: '1/1', border: '1px solid var(--border-default)', cursor: 'zoom-in' }}
          >
            <img src="/uploads/Milan Rozier_Professional Headshot-2596e41b.jpg" alt="Milan Rozier professional headshot" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
          </div>
          <div
            onClick={() => openLightbox('/assets/about-podium.jpg')}
            style={{ borderRadius: 'var(--radius-2xl)', overflow: 'hidden', aspectRatio: '1/1', border: '1px solid var(--border-default)', cursor: 'zoom-in' }}
          >
            <img src="/assets/about-podium.jpg" alt="Milan Rozier speaking at the ESA Foundation Nite to Unite" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '62% 22%', display: 'block' }} />
          </div>
          <div
            onClick={() => openLightbox('/assets/about-spelman.jpg')}
            style={{ borderRadius: 'var(--radius-2xl)', overflow: 'hidden', aspectRatio: '1/1', border: '1px solid var(--border-default)', cursor: 'zoom-in' }}
          >
            <img src="/assets/about-spelman.jpg" alt="Milan Rozier at Spelman College" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '56% 50%', display: 'block' }} />
          </div>
        </div>
        <span style={{ display: 'block', marginTop: 12, fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-bold)', letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
          Click Any Photo To Enlarge
        </span>
      </div>
    </div>
  );
}
