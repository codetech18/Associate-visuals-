'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { site } from '@/content/site';

const links = [
  { href: '/work', label: 'work' },
  { href: '/#about', label: 'about' },
  { href: '/#services', label: 'services' },
  { href: '/#contact', label: 'contact' },
];

export default function Nav({ wordmarkHref = '/' }: { wordmarkHref?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ${
        scrolled && !open
          ? 'border-hairline bg-background'
          : 'border-transparent bg-transparent'
      }`}
    >
      <nav
        className="mx-auto flex h-14 max-w-7xl items-center justify-between px-5 md:px-10"
        aria-label="Main"
      >
        <Link href={wordmarkHref} className="inline-flex min-h-11 items-center text-[15px] font-medium">
          {site.wordmark}
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex min-h-11 items-center text-[15px] text-muted transition-colors duration-200 hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="relative block h-3 w-5" aria-hidden="true">
            <span
              className={`absolute left-0 top-0 h-px w-full bg-primary transition-transform duration-200 ${
                open ? 'translate-y-[5.5px] rotate-45' : ''
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-px w-full bg-primary transition-transform duration-200 ${
                open ? '-translate-y-[5.5px] -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 top-14 z-40 flex flex-col gap-8 bg-background px-5 pt-16 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-2xl font-medium"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
