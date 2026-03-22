'use client';

import ServiceFunnelPage from '@/components/ServiceFunnelPage';
import InfoCards from '@/components/interactive/InfoCards';

const SOCIAL_SERVICES = [
  { title: 'Revenue-Driven Strategy', description: 'Social strategy aligned with revenue goals, not vanity metrics.', icon: '💰' },
  { title: 'Partnership Development', description: 'Identifying and securing brand partnerships and collaborations.', icon: '🤝' },
  { title: 'Content That Converts', description: 'Scroll-stopping content designed for each stage of the buyer journey.', icon: '✨' },
  { title: 'Community As Currency', description: 'Building engaged communities that drive word-of-mouth and loyalty.', icon: '👥' },
  { title: 'Platform Execution', description: 'Platform-native strategies for Instagram, TikTok, LinkedIn, YouTube, and more.', icon: '📱' },
  { title: 'Dawah Outreach', description: 'Digital dawah strategies for Islamic organizations and masjids.', icon: '🕌' },
  { title: 'Paid Advertising', description: 'Targeted ad campaigns with ROAS tracking and continuous optimization.', icon: '📢' },
  { title: 'Analytics & Reporting', description: 'Monthly performance reports with actionable insights and strategy adjustments.', icon: '📊' },
];

export default function SocialMediaClient() {
  return (
    <ServiceFunnelPage
      pageId="social-media"
      interactiveContent={{
        '3.4': <InfoCards items={SOCIAL_SERVICES} columns={4} isVisible />,
      }}
    />
  );
}
