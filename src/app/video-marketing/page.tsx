'use client';

import ServiceFunnelPage from '@/components/ServiceFunnelPage';
import InfoAccordion from '@/components/interactive/InfoAccordion';
import InfoCards from '@/components/interactive/InfoCards';

const FUNNEL_STAGES = [
  { title: 'TOFU — Awareness', description: 'Short-form hooks, brand films, and viral content designed to stop the scroll and introduce your brand to cold audiences.', icon: '🔝' },
  { title: 'MOFU — Consideration', description: 'Educational content, behind-the-scenes, case studies, and testimonials that build trust and nurture warm leads.', icon: '🔄' },
  { title: 'BOFU — Conversion', description: 'Product demos, comparison videos, UGC testimonials, and direct response content engineered to close the sale.', icon: '🎯' },
];

const ARSENAL_ITEMS = [
  { title: 'Brand Films', description: 'Cinematic storytelling that captures your brand essence and connects emotionally.', icon: '🎬' },
  { title: 'Short-Form Content', description: "Reels, TikToks, and Shorts optimized for each platform's algorithm.", icon: '📱' },
  { title: 'Event Coverage', description: 'Professional multi-camera coverage for conferences, launches, and community events.', icon: '🎥' },
  { title: 'Documentary', description: 'Long-form storytelling that documents journeys, impacts, and transformations.', icon: '🎞️' },
  { title: 'Product Videos', description: 'Showcase features, demonstrate value, and drive conversions with polished product content.', icon: '📦' },
  { title: 'Video Strategy', description: 'End-to-end video marketing strategy aligned with your business funnel.', icon: '📋' },
];

export default function VideoMarketingPage() {
  return (
    <ServiceFunnelPage
      pageId="video-marketing"
      interactiveContent={{
        '2.3': <InfoAccordion items={FUNNEL_STAGES} isVisible />,
        '2.5': <InfoCards items={ARSENAL_ITEMS} columns={3} isVisible />,
      }}
    />
  );
}
