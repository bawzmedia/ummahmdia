import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Education — Ummah Media',
  description:
    'AI training and workshops for Muslim entrepreneurs, organizations, and creators. From AI fundamentals to custom tool development.',
};

export default function AiEducationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
