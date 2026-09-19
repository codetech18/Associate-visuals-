'use client';
import { useState } from 'react';

export default function VideoPlayer({
  driveId,
  label,
  poster,
}: {
  driveId: string;
  label: string;
  poster: string;
}) {
  const [loaded, setLoaded] = useState(false);
  const url = `https://drive.google.com/file/d/${driveId}`;
  return (
    <div>
      <div className="relative aspect-video w-full overflow-hidden bg-surface">
        {loaded ? (
          <iframe src={`${url}/preview`} title={label} allow="autoplay; fullscreen" allowFullScreen className="absolute inset-0 h-full w-full border-0" />
        ) : (
          <button
            type="button"
            onClick={() => setLoaded(true)}
            aria-label={`Load video: ${label}`}
            className="absolute inset-0 flex w-full flex-col items-center justify-center gap-4 bg-cover bg-center p-6 text-center focus-visible:-outline-offset-4"
            style={{ backgroundImage: `linear-gradient(rgb(20 18 15 / 0.28), rgb(20 18 15 / 0.58)), url(${poster})` }}
          >
            <span aria-hidden="true" className="flex h-16 w-16 items-center justify-center rounded-full border border-accent text-xl text-accent">▶</span>
            <span className="text-section max-w-[30ch] drop-shadow-lg">{label}</span>
            <span className="label-micro text-primary/80">Play film</span>
          </button>
        )}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-x-4 px-5 py-2 text-sm text-muted">
        <p>Video loads only when you choose to watch.</p>
        <a href={`${url}/view`} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center underline underline-offset-4 hover:text-primary">Open in Google Drive ↗</a>
      </div>
    </div>
  );
}
