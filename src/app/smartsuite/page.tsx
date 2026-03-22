import type { Metadata } from 'next';
import SmartSuiteClient from './client';

export const metadata: Metadata = {
  title: 'SmartSuite — AI-Powered Business Systems | Ummah Media',
  description:
    'Modular AI-powered business systems: Smart Funnel, Smart Agent, Smart Site, Smart Media, and Smart Portal. One system, zero gaps.',
};

export default function SmartSuitePage() {
  return <SmartSuiteClient />;
}
