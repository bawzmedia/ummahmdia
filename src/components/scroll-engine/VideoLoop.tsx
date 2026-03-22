'use client';

import { useEffect, useRef } from 'react';
import { useVideoLoop } from '@/hooks/useVideoLoop';

interface VideoLoopProps {
  src: string | null;    // URL to the loop video (null = don't render)
  isActive: boolean;     // When true, fade in and play. When false, fade out and pause.
  className?: string;
}

export function VideoLoop({ src, isActive, className }: VideoLoopProps) {
  const { videoRef, isReady, play, pause, opacity, fadeIn, fadeOut } = useVideoLoop(src);

  // Track previous isActive so we only react to changes
  const prevIsActive = useRef<boolean | null>(null);

  useEffect(() => {
    if (prevIsActive.current === isActive) return;
    prevIsActive.current = isActive;

    if (isActive) {
      fadeIn();
      play();
    } else {
      // Fade out first, then pause once the fade completes
      fadeOut();
      const timeout = setTimeout(() => pause(), 300);
      return () => clearTimeout(timeout);
    }
  }, [isActive, fadeIn, fadeOut, play, pause]);

  // If src is null, render nothing
  if (!src) return null;

  return (
    <video
      ref={videoRef}
      src={src}
      loop
      autoPlay
      muted
      playsInline
      aria-hidden="true"
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        opacity,
        pointerEvents: 'none',
      }}
    />
  );
}
