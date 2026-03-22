import type { Metadata } from 'next';
import UgcInfluencerClient from './client';

export const metadata: Metadata = {
  title: 'UGC & Influencer Agency — Authentic Voices | Ummah Media',
  description:
    "Edmonton's first curated Muslim creator roster. UGC production, influencer matching, and campaign management that builds trust with Muslim audiences.",
};

export default function UgcInfluencerPage() {
  return <UgcInfluencerClient />;
}
