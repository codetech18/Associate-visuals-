import Link from 'next/link';
import ProjectTile from '@/components/ProjectTile';
import RevealOnScroll from '@/components/RevealOnScroll';
import { featuredProjects } from '@/content/projects';

// Three deliberately curated projects: one lead story and two supporting pieces.
export default function SelectedWork() {
  const large = featuredProjects.filter((p) => p.featuredSize === 'large');
  const medium = featuredProjects.filter((p) => p.featuredSize === 'medium');

  return (
    <section className="border-t border-hairline">
      <div className="mx-auto max-w-7xl px-5 py-8 md:px-10 md:py-12">
        <RevealOnScroll className="flex items-end justify-between">
          <div>
            <p className="label-micro text-muted">Selected work</p>
            <h2 className="text-section mt-2">Three ways of telling a story.</h2>
          </div>
          <Link
            href="/work"
            className="text-[13px] text-accent underline underline-offset-4 transition-colors duration-200 hover:text-primary"
          >
            view all →
          </Link>
        </RevealOnScroll>

        <div className="focus-rack mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {large[0] && (
            <RevealOnScroll className="md:col-span-2">
              <ProjectTile project={large[0]} aspect="large" />
            </RevealOnScroll>
          )}
          {medium.map((project) => (
            <RevealOnScroll key={project.slug}>
              <ProjectTile project={project} aspect="medium" />
            </RevealOnScroll>
          ))}
          {large[1] && (
            <RevealOnScroll className="md:col-span-2">
              <ProjectTile project={large[1]} aspect="large" />
            </RevealOnScroll>
          )}
        </div>
      </div>
    </section>
  );
}
