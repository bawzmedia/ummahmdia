import type { Metadata } from 'next';
import SocialMediaClient from './client';

export const metadata: Metadata = {
  title: 'Social Media Marketing — Revenue, Not Likes | Ummah Media',
  description:
    'Social media management that drives revenue, not vanity metrics. Platform-native strategy, community building, and paid advertising for Muslim businesses and organizations.',
};

export default function SocialMediaPage() {
  return <SocialMediaClient />;
}
