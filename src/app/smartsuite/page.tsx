'use client';

import ServiceFunnelPage from '@/components/ServiceFunnelPage';
import ModuleExplorer from '@/components/interactive/ModuleExplorer';

const SMARTSUITE_MODULES = [
  {
    id: 'funnel',
    title: 'Smart Funnel',
    description: 'Intelligent lead capture and qualification system that identifies, scores, and routes prospects automatically.',
    deliverables: ['Landing page builder', 'Lead scoring engine', 'Email sequence automation', 'A/B testing framework', 'CRM integration'],
  },
  {
    id: 'agent',
    title: 'Smart Agent',
    description: 'AI-powered conversational agent that qualifies leads, answers questions, and books meetings 24/7.',
    deliverables: ['Custom AI chatbot', 'Knowledge base training', 'Lead qualification flows', 'Calendar integration', 'Handoff to human protocols'],
  },
  {
    id: 'site',
    title: 'Smart Site',
    description: 'A team of AI agents researches your business, analyzes competition, studies your market, then produces a cinematic, story-driven website unique to YOUR business.',
    deliverables: ['AI business analysis', 'Competition research', 'Market intelligence report', 'Cinematic scroll website', 'Story-driven content architecture'],
  },
  {
    id: 'media',
    title: 'Smart Media',
    description: 'AI-enhanced content production pipeline that creates, optimizes, and distributes media across all channels.',
    deliverables: ['Content calendar AI', 'Image generation pipeline', 'Video editing automation', 'Multi-platform publishing', 'Performance analytics'],
  },
  {
    id: 'portal',
    title: 'Smart Portal',
    description: 'Client-facing dashboard and project management portal for transparent collaboration and real-time reporting.',
    deliverables: ['Client dashboard', 'Project tracking', 'Asset library', 'Invoice management', 'Real-time analytics'],
  },
];

export default function SmartSuitePage() {
  return (
    <ServiceFunnelPage
      pageId="smartsuite"
      interactiveContent={{
        '5.3': <ModuleExplorer modules={SMARTSUITE_MODULES} isVisible />,
      }}
    />
  );
}
