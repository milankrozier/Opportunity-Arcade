import { useNavigate } from 'react-router-dom';
import SupportCallout from '../components/SupportCallout';
import PathCard from '../components/PathCard';

const KOFI_URL = 'https://ko-fi.com/milanrozier';

export default function Support() {
  const navigate = useNavigate();
  const goToKofi = () => window.open(KOFI_URL, '_blank', 'noopener,noreferrer');

  return (
    <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '64px var(--container-pad) 96px' }}>
      <SupportCallout
        iconSrc="/uploads/Opportunity Arcade Logo (1).png"
        title="One Coffee = One More Week Of Upkeep."
        body="Opportunity Arcade is community-built and free to access. If it's helped you find your next step, consider chipping in. It goes straight to keeping the database current."
        cta="☕ Support On Ko-fi"
        onSupport={goToKofi}
      />

      <div style={{ display: 'flex', gap: 16, marginTop: 56, flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 220px' }}>
          <PathCard icon="plus" tone="violet" title="Submit An Opportunity" description="Know an opportunity, tool, or story that belongs here? Send it our way." onClick={() => navigate('/submit')} />
        </div>
        <div style={{ flex: '1 1 220px' }}>
          <PathCard icon="share-2" tone="blue" title="Spread The Word" description="Share the Arcade with a classmate, club, or community group." />
        </div>
        <div style={{ flex: '1 1 220px' }}>
          <PathCard icon="coffee" tone="pink" title="Chip In On Ko-fi" description="Every contribution keeps the database free and up to date." onClick={goToKofi} />
        </div>
      </div>
    </div>
  );
}
