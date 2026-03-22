import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UGC & Influencer Agency — Ummah Media',
  description:
    "Curated Muslim creator roster, UGC production, and influencer campaign management. Real people, real influence. Edmonton's first Muslim creator agency.",
};

export default function UgcInfluencerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
