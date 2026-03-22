import type { Metadata } from 'next';
import AiEducationClient from './client';

export const metadata: Metadata = {
  title: 'AI Education — Master the Future | Ummah Media',
  description:
    'Practical AI education for Muslim entrepreneurs, organizations, and creators. Workshops, courses, and custom AI tools that save 12+ hours per week.',
};

export default function AiEducationPage() {
  return <AiEducationClient />;
}
