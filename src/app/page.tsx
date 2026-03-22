'use client';

import { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { getPageConfig, type Scene } from '@/lib/scenes';
import type { ServiceInfo } from '@/lib/services';
import CinematicLayout from '@/components/layout/CinematicLayout';
import ServiceHub from '@/components/interactive/ServiceHub';
import PageTransition from '@/components/transitions/PageTransition';

const ScrollCanvas = dynamic(
  () => import('@/components/scroll-engine/ScrollCanvas'),
  { ssr: false }
);

export default function HomePage() {
  const router = useRouter();
  const config = getPageConfig('homepage');
  const [currentScene, setCurrentScene] = useState<Scene | null>(null);
  const [showHub, setShowHub] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [targetRoute, setTargetRoute] = useState('');

  const handleSceneChange = useCallback((scene: Scene) => {
    setCurrentScene(scene);
    if (scene.id === '3.1') {
      setShowHub(true);
    }
  }, []);

  const handleServiceSelect = useCallback((service: ServiceInfo) => {
    setTargetRoute(service.route);
    setTransitioning(true);
  }, []);

  const handleTransitionComplete = useCallback(() => {
    router.push(targetRoute);
  }, [router, targetRoute]);

  const handleContinueScrolling = useCallback(() => {
    setShowHub(false);
  }, []);

  // Suppress unused warning — currentScene used implicitly via showHub
  void currentScene;

  return (
    <CinematicLayout>
      <ScrollCanvas
        pageId={config.pageId}
        scenes={config.scenes}
        totalFrames={config.totalFrames}
        onSceneChange={handleSceneChange}
      >
        <ServiceHub
          isVisible={showHub}
          onServiceSelect={handleServiceSelect}
          onContinueScrolling={handleContinueScrolling}
        />
      </ScrollCanvas>
      <PageTransition
        isActive={transitioning}
        onComplete={handleTransitionComplete}
      />
    </CinematicLayout>
  );
}
