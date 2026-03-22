'use client';

import ServiceFunnelPage from '@/components/ServiceFunnelPage';
import InfoCards from '@/components/interactive/InfoCards';

const UGC_FORMATS = [
  { title: 'Problem → Solution', description: 'Creator identifies a pain point and presents your product as the natural solution.', icon: '💡' },
  { title: 'Testimonial', description: 'Authentic reviews and experiences from real users who love your product.', icon: '⭐' },
  { title: 'Unboxing', description: 'First impressions and genuine reactions that build anticipation and excitement.', icon: '📦' },
  { title: 'Tutorial', description: 'Step-by-step guides showing how to use your product or service effectively.', icon: '📚' },
  { title: 'Day-in-the-Life', description: 'Lifestyle integration showing your product as part of an aspirational daily routine.', icon: '🌅' },
];

const AGENCY_SERVICES = [
  { title: 'Brand-Creator Matching', description: 'Data-driven matching of your brand with creators who align with your values and audience.', icon: '🎯' },
  { title: 'Campaign Management', description: 'End-to-end campaign planning, execution, and performance tracking.', icon: '📋' },
  { title: 'Creator Development', description: 'Training and developing Muslim creators to produce professional, brand-safe content.', icon: '🌱' },
  { title: 'Multi-Platform', description: 'Coordinated campaigns across Instagram, TikTok, YouTube, and emerging platforms.', icon: '🌐' },
  { title: 'Performance & ROI', description: 'Transparent reporting with cost-per-acquisition and return-on-ad-spend tracking.', icon: '📊' },
  { title: 'Roster Access', description: "Exclusive access to Edmonton's first curated Muslim creator roster.", icon: '🎤' },
];

export default function UgcInfluencerPage() {
  return (
    <ServiceFunnelPage
      pageId="ugc-influencer"
      interactiveContent={{
        '4.4': <InfoCards items={UGC_FORMATS} columns={3} isVisible />,
        '4.5': <InfoCards items={AGENCY_SERVICES} columns={3} isVisible />,
      }}
    />
  );
}
