import type { Metadata } from 'next';
import VideoMarketingClient from './client';

export const metadata: Metadata = {
  title: 'Video Marketing — Stories That Move | Ummah Media',
  description:
    'Cinematic brand films, short-form content, and video strategy that moves hearts and drives results. TOFU to BOFU — every stage of the funnel covered.',
};

export default function VideoMarketingPage() {
  return <VideoMarketingClient />;
}
