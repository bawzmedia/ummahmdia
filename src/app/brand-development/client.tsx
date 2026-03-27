'use client';

import ServiceFunnelPage from '@/components/ServiceFunnelPage';
import InfoCards from '@/components/interactive/InfoCards';

const BRAND_COMPONENTS = [
  { title: 'Weekly Strategy', description: 'A dedicated consultant who audits your brand, identifies the gaps, and builds your roadmap.', icon: '🎯' },
  { title: 'Custom Video', description: 'Scroll-stopping short-form videos — filmed, edited, and color-graded for your brand.', icon: '🎬' },
  { title: 'Filming Days', description: 'We come to you. On-location shoots to capture the content your brand actually needs.', icon: '📷' },
  { title: 'Photography', description: 'Professional photos that make your brand look as good as the work you do.', icon: '🖼️' },
  { title: 'Branded Posts', description: 'Instagram-ready posts designed with your colors, fonts, and identity — not templates.', icon: '📱' },
  { title: 'Landing Pages', description: 'Pages that convert visitors into leads and leads into customers.', icon: '🌐' },
  { title: 'Social Media Mgmt', description: 'We post, engage, and grow your audience — so you can focus on running your business.', icon: '📊' },
  { title: 'Add What You Need', description: 'Lead magnets, email sequences, extra content — your package scales with your goals.', icon: '✨' },
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
