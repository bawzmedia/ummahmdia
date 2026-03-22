'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function CinematicNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0)',
        backdropFilter: scrolled ? 'blur(8px)' : 'blur(0px)',
        WebkitBackdropFilter: scrolled ? 'blur(8px)' : 'blur(0px)',
      }}
      aria-label="Main navigation"
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-cinzel text-white text-base tracking-widest uppercase opacity-90 hover:opacity-100 transition-opacity"
          aria-label="Ummah Media — Home"
        >
          Ummah Media
        </Link>

        <Link
          href="/#services-hub"
          className="text-white/80 hover:text-white text-sm tracking-wide transition-colors duration-200"
        >
          Explore Services
        </Link>
      </div>
    </nav>
  );
}
