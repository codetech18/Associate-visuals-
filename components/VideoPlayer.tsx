'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './portfolio.module.css';

export default function VideoPlayer({ driveId, label, poster, orientation = 'landscape', src }: {
  driveId: string;
  label: string;
  poster: string;
  orientation?: 'portrait' | 'landscape';
  src?: string;
}) {
  const [embedded, setEmbedded] = useState(false);
  const [status, setStatus] = useState('');
  const [nativeFailed, setNativeFailed] = useState(false);
  const url = `https://drive.google.com/file/d/${driveId}`;
  const native = Boolean(src) && !nativeFailed;

  useEffect(() => {
    if (!embedded) return;
    const timer = window.setTimeout(() => setStatus('Still blank? Open the film in Google Drive instead.'), 8000);
    return () => window.clearTimeout(timer);
  }, [embedded]);

  return <div>
    <div className={`${styles.player} ${orientation === 'portrait' ? styles.playerPortrait : styles.playerLandscape}`}>
      {native ? <video src={src} poster={poster} aria-label={label} controls playsInline preload="none" className="absolute inset-0 h-full w-full object-contain" onError={() => setNativeFailed(true)} /> : <>
        <Image src={poster} alt={`Preview of ${label}`} fill loading="eager" sizes={orientation === 'portrait' ? '(max-width: 480px) calc(100vw - 40px), 440px' : '(max-width: 767px) calc(100vw - 40px), 90vw'} className={styles.playerPoster} />
        <div className={styles.playerShade} aria-hidden="true" />
        {embedded ? <iframe src={`${url}/preview`} title={label} allow="autoplay; fullscreen" allowFullScreen className={styles.playerFrame} onLoad={() => setStatus('If the player is blank or unavailable, open the film in Google Drive.')} /> : <div className={styles.playerControls}>
          <a href={`${url}/view`} target="_blank" rel="noopener noreferrer" className={styles.watchLink} aria-label={`Watch ${label} in Google Drive (opens in a new tab)`}><span className={styles.watchCircle} aria-hidden="true">▷</span>Watch film<span className="eyebrow">Opens in Google Drive</span></a>
          <button type="button" onClick={() => { setEmbedded(true); setStatus('Opening the Google Drive player…'); }} className={styles.embedButton}>Try playing on this page</button>
        </div>}
      </>}
    </div>
    <div className={styles.playerHelp}>
      <p role="status" className="max-w-[60ch] self-center">{embedded ? status : native ? 'Press play to watch. This film loads only when you choose.' : 'No video download until you choose to watch.'}</p>
      <div className="flex flex-wrap items-center gap-x-5">
        {embedded && <button type="button" onClick={() => { setEmbedded(false); setStatus(''); }}>Back to preview</button>}
        <a href={`${url}/view`} target="_blank" rel="noopener noreferrer">{native ? 'Original on Google Drive' : 'Open Google Drive'}</a>
      </div>
    </div>
  </div>;
}
