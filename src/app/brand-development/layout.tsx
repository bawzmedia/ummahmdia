import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Brand Development — Ummah Media',
  description:
    'Comprehensive brand development services: strategy, visual identity, content, and systems. We audit, diagnose, and build everything your brand needs.',
};

export default function BrandDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
