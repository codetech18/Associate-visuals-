'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  src: string;
  poster?: string;
  label: string;
  className?: string;
};

// Muted preview loop: plays on hover on desktop, on viewport entry on mobile.
// Falls back to a surface-colored block while the media file is missing.
export default function VideoPreview({ src, poster, label, className }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia('(hover: hover)').matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.5 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [failed]);

  if (failed) {
    return <div className={`bg-surface ${className ?? ''}`} role="img" aria-label={label} />;
  }

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={label}
      className={`bg-surface object-cover ${className ?? ''}`}
      onMouseEnter={(event) => event.currentTarget.play().catch(() => {})}
      onMouseLeave={(event) => event.currentTarget.pause()}
      onError={() => setFailed(true)}
    />
  );
}
