import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SmartSuite — Ummah Media',
  description:
    'AI-powered business systems: Smart Funnel, Smart Agent, Smart Site, Smart Media, and Smart Portal. Modular, connected, intelligent.',
};

export default function SmartSuiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
