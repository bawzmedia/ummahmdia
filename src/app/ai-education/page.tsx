'use client';

import ServiceFunnelPage from '@/components/ServiceFunnelPage';
import InfoAccordion from '@/components/interactive/InfoAccordion';
import InfoCards from '@/components/interactive/InfoCards';

const AI_LANDSCAPE = [
  { title: 'AI Writing & Content', description: 'ChatGPT, Claude, Jasper — master AI writing tools for marketing copy, social content, and business communication.', icon: '✍️' },
  { title: 'AI Image Generation', description: 'Midjourney, DALL-E, Stable Diffusion — create professional visuals, product mockups, and brand imagery.', icon: '🖼️' },
  { title: 'AI Video Production', description: 'Runway, Pika, Sora — produce and edit video content at 10x the speed of traditional methods.', icon: '🎬' },
  { title: 'AI Automation', description: 'Zapier, Make, n8n — automate repetitive tasks and build intelligent business workflows.', icon: '⚡' },
  { title: 'AI Research & Analysis', description: 'Perplexity, NotebookLM — accelerate market research, competitive analysis, and data synthesis.', icon: '🔍' },
  { title: 'AI Customer Service', description: 'Custom chatbots, voice agents, and support automation that scale your service capacity.', icon: '🤖' },
];

const AI_PROGRAMS = [
  { title: 'AI for Business 101', description: 'Foundation course covering AI fundamentals, tool selection, and implementation strategy for any business.', icon: '🎓' },
  { title: 'Workflow Automation', description: 'Hands-on workshop building automated workflows that save 12+ hours per week.', icon: '⚙️' },
  { title: 'AI Marketing Mastery', description: 'Deep dive into AI-powered content creation, SEO, social media, and ad optimization.', icon: '📈' },
  { title: 'Custom AI Tool Build', description: 'We build a custom AI tool tailored to your specific business needs and workflows.', icon: '🔧' },
  { title: 'AI Agent Development', description: 'Advanced course on building conversational AI agents for sales, support, and operations.', icon: '🤖' },
  { title: 'Custom Workshops', description: 'Tailored group training for organizations, masjids, and teams at any skill level.', icon: '👥' },
];

export default function AiEducationPage() {
  return (
    <ServiceFunnelPage
      pageId="ai-education"
      interactiveContent={{
        '6.3': <InfoAccordion items={AI_LANDSCAPE} isVisible />,
        '6.4': <InfoCards items={AI_PROGRAMS} columns={3} isVisible />,
      }}
    />
  );
}
