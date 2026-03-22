'use client';

import { useRouter } from 'next/navigation';

interface ServiceCard {
  id: string;
  title: string;
  hook: string;
  href: string;
  icon: string; // emoji for now, will be replaced with custom icons later
}

const SERVICES: ServiceCard[] = [
  { id: 'brand', title: 'Brand Development', hook: 'Your Identity, Elevated', href: '/brand-development', icon: '🏗️' },
  { id: 'video', title: 'Video Marketing', hook: 'Stories That Move', href: '/video-marketing', icon: '🎬' },
  { id: 'social', title: 'Social Media Marketing', hook: 'Own the Feed', href: '/social-media', icon: '📱' },
  { id: 'ugc', title: 'UGC & Influencer Agency', hook: 'Authentic Voices, Real Reach', href: '/ugc-influencer', icon: '🎤' },
  { id: 'smart', title: 'SmartSuite', hook: 'Your Digital Engine', href: '/smartsuite', icon: '⚡' },
  { id: 'ai', title: 'AI Education', hook: 'Master the Future', href: '/ai-education', icon: '🧠' },
];

interface ServiceHubProps {
  isVisible: boolean;
}

export default function ServiceHub({ isVisible }: ServiceHubProps) {
  const router = useRouter();

  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center px-6 transition-opacity duration-500"
      style={{
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? 'auto' : 'none',
      }}
    >
      {/* Heading prompt */}
      <h2
        className="mb-8 text-center font-cinzel text-2xl tracking-[0.15em] text-white uppercase drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] md:text-3xl"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 400ms ease',
        }}
      >
        Which service benefits your organization the most?
      </h2>

      {/* 3×2 grid desktop / 2×3 grid mobile */}
      <div className="grid w-full max-w-5xl grid-cols-2 gap-4 md:grid-cols-3">
        {SERVICES.map((service, index) => (
          <button
            key={service.id}
            onClick={() => router.push(service.href)}
            className="group relative flex flex-col items-center gap-3 rounded-xl border border-white/10 bg-black/40 px-4 py-6 text-center backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.08)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 md:py-8"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
              transition: `opacity 400ms ease ${index * 100}ms, transform 400ms ease ${index * 100}ms, scale 300ms ease, border-color 300ms ease, box-shadow 300ms ease`,
            }}
          >
            {/* Icon */}
            <span className="text-4xl leading-none" role="img" aria-hidden="true">
              {service.icon}
            </span>

            {/* Title */}
            <span className="font-cinzel text-sm font-medium tracking-widest text-white uppercase md:text-base">
              {service.title}
            </span>

            {/* Hook */}
            <span className="font-raleway text-xs text-white/60 md:text-sm">
              {service.hook}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
