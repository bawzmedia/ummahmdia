'use client';

// Manages a <video> element: loads the loop video, handles play/pause,
// exposes opacity for crossfade coordination with the canvas.

import { useRef, useState, useCallback, useEffect } from 'react';
import gsap from 'gsap';

export interface UseVideoLoopReturn {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  isReady: boolean;
  play: () => void;
  pause: () => void;
  opacity: number;
  fadeIn: (durationMs?: number) => void;
  fadeOut: (durationMs?: number) => void;
}

export function useVideoLoop(src: string | null): UseVideoLoopReturn {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [opacity, setOpacity] = useState(0);

  // Internal object that GSAP tweens — we sync it to React state on each tick
  const opacityProxy = useRef({ value: 0 });
  const activeTween = useRef<gsap.core.Tween | null>(null);

  // Reset isReady whenever the src changes so the consumer knows to wait
  useEffect(() => {
    setIsReady(false);

    const video = videoRef.current;
    if (!video || !src) return;

    const handleCanPlay = () => setIsReady(true);
    video.addEventListener('canplay', handleCanPlay);

    // If the video already buffered enough before the listener was attached
    if (video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
      setIsReady(true);
    }

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, [src]);

  const play = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {
      // Autoplay may be blocked; silently swallow
    });
  }, []);

  const pause = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    try {
      video.pause();
    } catch {
      // Nothing to handle
    }
  }, []);

  const fadeIn = useCallback((durationMs = 300) => {
    activeTween.current?.kill();
    activeTween.current = gsap.to(opacityProxy.current, {
      value: 1,
      duration: durationMs / 1000,
      ease: 'none',
      onUpdate: () => setOpacity(opacityProxy.current.value),
      onComplete: () => setOpacity(1),
    });
  }, []);

  const fadeOut = useCallback((durationMs = 300) => {
    activeTween.current?.kill();
    activeTween.current = gsap.to(opacityProxy.current, {
      value: 0,
      duration: durationMs / 1000,
      ease: 'none',
      onUpdate: () => setOpacity(opacityProxy.current.value),
      onComplete: () => setOpacity(0),
    });
  }, []);

  // Kill any running tween on unmount
  useEffect(() => {
    return () => {
      activeTween.current?.kill();
    };
  }, []);

  return { videoRef, isReady, play, pause, opacity, fadeIn, fadeOut };
}
