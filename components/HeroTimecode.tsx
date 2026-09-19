'use client';

import { useEffect, useState, type RefObject } from 'react';

// Length of the self-ticking loop used until the real showreel exists.
const FALLBACK_LOOP_SECONDS = 30;

function format(totalSeconds: number): string {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return [hours, minutes, seconds]
    .map((value) => String(value).padStart(2, '0'))
    .join(':');
}

// The signature element: a live timecode that tracks the hero reel and resets
// on loop, with a pulsing dot that reads as a REC indicator.
export default function HeroTimecode({
  videoRef,
}: {
  videoRef: RefObject<HTMLVideoElement | null>;
}) {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const started = performance.now();
    const id = setInterval(() => {
      const video = videoRef.current;
      if (video && Number.isFinite(video.duration) && video.duration > 0) {
        setElapsed(Math.floor(video.currentTime));
      } else {
        setElapsed(
          Math.floor((performance.now() - started) / 1000) % FALLBACK_LOOP_SECONDS
        );
      }
    }, 250);
    return () => clearInterval(id);
  }, [videoRef]);

  return (
    <div
      className="absolute right-4 top-16 z-10 flex items-center gap-2 font-mono text-[11px] leading-none text-muted"
      aria-hidden="true"
    >
      <span className="rec-dot size-1.5 rounded-full bg-muted" />
      <span>{format(elapsed)}</span>
    </div>
  );
}
