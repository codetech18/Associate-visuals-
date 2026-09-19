'use client';

import Link from 'next/link';
import HeroReel from '@/components/HeroReel';
import { getProject } from '@/content/projects';
import { site } from '@/content/site';

export default function Hero() {
  const spotlight = getProject('zizou-project-trailer')!;

  return (
    <section className="flex flex-col pt-14">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-10">
        <p className="label-micro mb-4 text-muted">Project spotlight</p>
        <HeroReel driveId={spotlight.video.driveId} label={spotlight.title} />
      </div>

      <div className="order-first mx-auto grid w-full max-w-7xl gap-8 px-5 py-12 md:grid-cols-[1.5fr_1fr] md:items-end md:px-10 md:py-20">
        <div>
          <p className="label-micro text-muted">Cinematography, Lagos</p>
          <h1 className="text-hero mt-3 max-w-[19ch] text-balance">{site.headline}</h1>
          <p className="mt-4 max-w-[65ch] text-muted">{site.subheadline}</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 md:flex-col md:items-start md:justify-self-end">
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="button-primary">
            Discuss a project ↗
          </a>
          <Link
            href="/work"
            className="inline-flex min-h-12 items-center text-[15px] text-accent underline underline-offset-4 transition-colors duration-200 hover:text-primary"
          >
            View portfolio →
          </Link>
        </div>
      </div>
    </section>
  );
}
