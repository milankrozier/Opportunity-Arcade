import {
  GraduationCap, Compass, Infinity as InfinityIcon, Circle, Calendar,
  Users, Palette, Plus, Share2, Coffee, Sparkles,
} from 'lucide-react';
import { TONES } from './tones';

const ICONS = {
  'graduation-cap': GraduationCap,
  compass: Compass,
  infinity: InfinityIcon,
  circle: Circle,
  calendar: Calendar,
  users: Users,
  palette: Palette,
  plus: Plus,
  'share-2': Share2,
  coffee: Coffee,
  sparkles: Sparkles,
};

export default function IconChip({ icon = 'sparkles', tone = 'violet', size = 44 }) {
  const t = TONES[tone] || TONES.violet;
  const Icon = ICONS[icon] || Sparkles;
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: 'var(--radius-full)',
        background: t.background,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <Icon size={size * 0.46} color={t.color} strokeWidth={2} />
    </div>
  );
}
