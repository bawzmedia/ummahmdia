import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Social Media Marketing — Ummah Media',
  description:
    'Revenue-driven social media marketing: strategy, content creation, community management, paid ads, and analytics. Revenue, not likes.',
};

export default function SocialMediaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
