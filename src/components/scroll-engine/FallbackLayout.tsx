'use client';

import Link from 'next/link';
import type { Scene } from '@/lib/scenes';
import type { PageId } from '@/lib/frame-utils';
import { SERVICES } from '@/lib/services';

interface FallbackLayoutProps {
  scenes: Scene[];
  pageId: PageId;
  /** Optional children for interactive overlays rendered as static content */
  children?: React.ReactNode;
}

const CALENDLY_URL = 'https://calendly.com/ummahmedia/strategy-call';

export default function FallbackLayout({ scenes, pageId, children }: FallbackLayoutProps) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {scenes.map((scene) => {
        // Service hub scene on homepage — render as a grid of linked cards
        if (scene.interactive === 'hub' && pageId === 'homepage') {
          return (
            <section
              key={scene.id}
              id="services-hub"
              className="px-6 py-20"
              aria-labelledby="services-heading"
            >
              <h2
                id="services-heading"
                className="mb-12 text-center font-cinzel text-2xl font-bold uppercase tracking-widest text-white md:text-4xl"
              >
                Which service benefits your organization the most?
              </h2>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {SERVICES.map((service) => (
                  <Link
                    key={service.id}
                    href={service.route}
                    className="group rounded-xl border border-white/10 bg-white/5 p-6 transition-colors duration-200 hover:border-white/25 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                  >
                    <h3 className="mb-2 font-cinzel text-sm font-bold uppercase tracking-wide text-white">
                      {service.name}
                    </h3>
                    <p className="font-raleway text-sm text-neutral-400 group-hover:text-neutral-300">
                      {service.tagline}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          );
        }

        // Booking scene — render as a standard CTA section
        if (scene.interactive === 'booking') {
          return (
            <section
              key={scene.id}
              className="flex min-h-[50vh] flex-col items-center justify-center gap-6 px-8 py-20"
            >
              <h2 className="max-w-3xl text-center font-cinzel text-2xl font-bold uppercase tracking-widest text-white md:text-4xl">
                {scene.text ?? 'Ready to build something that matters?'}
              </h2>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-amber-500 px-8 py-4 font-cinzel text-sm font-bold uppercase tracking-widest text-white shadow-lg transition-colors duration-200 hover:bg-amber-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 sm:text-base"
              >
                Book Your Free Strategy Call
              </a>
            </section>
          );
        }

        // Skip scenes with no text and no interactive content
        if (!scene.text && !scene.interactive) return null;

        // Standard text scene
        if (scene.text) {
          return (
            <section
              key={scene.id}
              className="flex min-h-[50vh] items-center justify-center px-8"
            >
              <h2 className="max-w-3xl text-center font-cinzel text-3xl uppercase leading-relaxed tracking-[0.1em] text-white/90 md:text-5xl">
                {scene.text}
              </h2>
            </section>
          );
        }

        return null;
      })}

      {/* Render any static interactive content passed as children */}
      {children}
    </div>
  );
}
