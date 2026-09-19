'use client';

import { useEffect, type ReactNode } from 'react';
import Lenis from 'lenis';
import { ScrollTrigger } from '@/lib/gsap';

export function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    const lenis = new Lenis({
      lerp: isMobile ? 0.15 : 0.1,
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 4),
    });

    lenis.on('scroll', ScrollTrigger.update);

    let frame = requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    });

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
