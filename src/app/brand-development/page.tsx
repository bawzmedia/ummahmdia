import type { Metadata } from 'next';
import BrandDevelopmentClient from './client';

export const metadata: Metadata = {
  title: 'Brand Development — Strategy, Content & Growth | Ummah Media',
  description:
    'Not sure where your brand needs work? We audit it, build the plan, and handle everything — weekly strategy, custom video, photography, and branded content.',
};

export default function BrandDevelopmentPage() {
  return <BrandDevelopmentClient />;
}
