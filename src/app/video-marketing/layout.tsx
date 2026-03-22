import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Video Marketing — Ummah Media',
  description:
    'Full-funnel video marketing: brand films, short-form content, event coverage, and video strategy. Stories that move hearts and drive conversions.',
};

export default function VideoMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
