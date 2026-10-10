'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import styles from './portfolio.module.css';

const source = '/videos/zizou-hero-loop.mp4';
type Connection = EventTarget & { saveData?: boolean; effectiveType?: string };

export default function HeroReel({ label, children }: { label: string; children: ReactNode }) {
  const ref = useRef<HTMLVideoElement>(null);
  const userPaused = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const connection = (navigator as Navigator & { connection?: Connection }).connection;
    const shouldAutoplay = () => !motion.matches && !connection?.saveData && !['slow-2g', '2g'].includes(connection?.effectiveType ?? '');
    let visible = true;
    const play = () => {
      if (!video.getAttribute('src')) video.src = source;
      void video.play().catch(() => { /* The poster and play control remain available. */ });
    };
    const update = () => {
      if (!visible || document.hidden || userPaused.current || !shouldAutoplay()) video.pause();
      else play();
    };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; update(); }, { threshold: 0.1 });
    observer.observe(video);
    motion.addEventListener('change', update);
    connection?.addEventListener('change', update);
    document.addEventListener('visibilitychange', update);
    return () => {
      observer.disconnect();
      motion.removeEventListener('change', update);
      connection?.removeEventListener('change', update);
      document.removeEventListener('visibilitychange', update);
      video.pause();
    };
  }, []);

  const toggle = () => {
    const video = ref.current;
    if (!video) return;
    if (!video.paused) { userPaused.current = true; video.pause(); }
    else {
      userPaused.current = false;
      if (!video.getAttribute('src')) video.src = source;
      void video.play().catch(() => setFailed(true));
    }
  };

  return (
    <div className={styles.reel}>
      <div className={styles.reelMedia}>
        <video ref={ref} poster="/images/previews/zizou-project-trailer.jpg" aria-label={label} muted loop playsInline preload="none" className={styles.reelVideo} onPlay={() => { setPlaying(true); setFailed(false); }} onPause={() => setPlaying(false)} onError={() => { setPlaying(false); setFailed(true); }} />
        <div className={styles.reelShade} aria-hidden="true" />
      </div>
      <button type="button" onClick={toggle} className={styles.reelToggle} aria-label={playing ? 'Pause background film' : 'Play background film'}>
        <span aria-hidden="true">{playing ? 'Ⅱ' : '▷'}</span> {playing ? 'Pause film' : 'Play film'} <span className="eyebrow">/ muted</span>
      </button>
      {failed && <p role="status" className="absolute right-5 top-20 z-10 bg-background p-3 text-sm">Preview unavailable. Use “View the film” below.</p>}
      {children}
    </div>
  );
}
