'use client';

import ServiceFunnelPage from '@/components/ServiceFunnelPage';
import InfoCards from '@/components/interactive/InfoCards';

const BRAND_COMPONENTS = [
  { title: 'Brand Strategy', description: 'Positioning, competitive analysis, audience mapping, and value proposition development.', icon: '🎯' },
  { title: 'Visual Identity', description: 'Logo, color palette, typography, and comprehensive brand guidelines.', icon: '🎨' },
  { title: 'Content Strategy', description: 'Content pillars, editorial calendars, and channel-specific strategies.', icon: '📝' },
  { title: 'Digital Presence', description: 'Website optimization, social media profiles, and digital touchpoints.', icon: '🌐' },
  { title: 'Marketing Collateral', description: 'Business cards, presentations, brochures, and print materials.', icon: '📋' },
  { title: 'Brand Voice', description: 'Tone guidelines, messaging frameworks, and communication templates.', icon: '🗣️' },
  { title: 'SOPs & Systems', description: 'Standard operating procedures for brand consistency across teams.', icon: '⚙️' },
  { title: 'Analytics Setup', description: 'Tracking, dashboards, and KPI frameworks to measure brand performance.', icon: '📊' },
];

export default function BrandDevelopmentClient() {
  return (
    <ServiceFunnelPage
      pageId="brand-development"
      interactiveContent={{
        '1.4': <InfoCards items={BRAND_COMPONENTS} columns={4} isVisible />,
      }}
    />
  );
}
