import type { Metadata } from 'next';
import BrandDevelopmentClient from './client';

export const metadata: Metadata = {
  title: 'Brand Development — Build Your Identity | Ummah Media',
  description:
    'Full-spectrum brand development for Muslim businesses and organizations. Strategy, visual identity, content, and systems — everything your brand needs to grow.',
};

export default function BrandDevelopmentPage() {
  return <BrandDevelopmentClient />;
}
