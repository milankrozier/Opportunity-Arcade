import { useEffect } from 'react';
import SectionHeading from '../components/SectionHeading';

const IFRAME_ID = 'JotFormIFrame-262380696491063';

export default function Submit() {
  useEffect(() => {
    let timeoutId;
    const initJotform = () => {
      const sel = `iframe[id='${IFRAME_ID}']`;
      if (!document.querySelector(sel)) return;
      if (window.jotformEmbedHandler) window.jotformEmbedHandler(sel, 'https://form.jotform.com/');
      else timeoutId = setTimeout(initJotform, 500);
    };
    initJotform();
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div style={{ maxWidth: 940, margin: '0 auto', padding: '64px var(--container-pad) 96px' }}>
      <SectionHeading
        layout="hero"
        eyebrow="+1 EXP"
        titlePlain="Submit An "
        titleGradient="Opportunity"
        body="Opportunities, creative tools, and spotlight stories all go through this one form. We review every submission before it goes live."
      />

      <div style={{ marginTop: 40, border: '1px solid var(--border-default)', borderRadius: 'var(--radius-2xl)', background: 'var(--white)', padding: 8, overflow: 'hidden' }}>
        <iframe
          id={IFRAME_ID}
          title="Opportunity Arcade Submission Form"
          src="https://form.jotform.com/262380696491063"
          allow="geolocation; microphone; camera; fullscreen; payment"
          scrolling="auto"
          style={{ width: '100%', height: 1100, border: 0, display: 'block', borderRadius: 'var(--radius-xl)' }}
        />
      </div>
      <p style={{ margin: '20px 0 0', textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-bold)', letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
        Every Submission Is Read By A Human. Thanks For The +1 EXP.
      </p>
    </div>
  );
}
