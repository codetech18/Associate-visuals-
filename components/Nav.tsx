'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { site } from '@/content/site';
import styles from './portfolio.module.css';

const links = [
  { href: '/work', label: 'Work' },
  { href: '/#about', label: 'About' },
  { href: '/#services', label: 'Capabilities' },
];

export default function Nav() {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const desktop = window.matchMedia('(min-width: 768px)');
    const closeAtDesktop = () => { if (desktop.matches) dialog.current?.close(); };
    desktop.addEventListener('change', closeAtDesktop);
    return () => { document.body.style.overflow = previousOverflow; desktop.removeEventListener('change', closeAtDesktop); };
  }, [open]);

  return (
    <header className={styles.header}>
      <nav className={`shell ${styles.nav}`} aria-label="Main navigation">
        <Link href="/" className={styles.wordmark}><span className={styles.brandMark} aria-hidden="true">a</span>{site.wordmark}</Link>
        <div className={styles.navLinks}>
          {links.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}
          <Link href="/#contact" className={styles.navCta}>Start a project</Link>
        </div>
        <button ref={trigger} type="button" className={styles.menuButton} aria-expanded={open} aria-controls="mobile-menu" aria-label="Open menu" onClick={() => { dialog.current?.showModal(); setOpen(true); }}>Menu +</button>
      </nav>
      <dialog ref={dialog} id="mobile-menu" aria-label="Navigation menu" className={styles.menu} onClose={() => { setOpen(false); trigger.current?.focus(); }}>
        <div className={styles.menuTop}><span className={styles.wordmark}>{site.wordmark}</span><button type="button" className={styles.menuClose} onClick={() => dialog.current?.close()} aria-label="Close menu">Close ×</button></div>
        <nav className={styles.menuLinks} aria-label="Mobile navigation">
          {[...links, { href: '/#contact', label: 'Start a project' }].map((link, index) => <Link key={link.href} href={link.href} onClick={() => dialog.current?.close()}><span className={`eyebrow ${styles.menuIndex}`} aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>{link.label}</Link>)}
        </nav>
        <div className={styles.menuBottom}><p className="eyebrow text-muted">Cinematography & post-production<br />Lagos, Nigeria</p><a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="text-link">Discuss a film on WhatsApp</a></div>
      </dialog>
    </header>
  );
}
