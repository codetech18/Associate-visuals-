import Link from 'next/link';
import { categoryLabels, type Project } from '@/content/projects';

type TileAspect = 'large' | 'medium' | 'uniform';

// All tiles are 16/10 on mobile; desktop aspect varies by placement.
const aspectClasses: Record<TileAspect, string> = {
  large: 'aspect-[16/10] md:aspect-[16/9]',
  medium: 'aspect-[16/10] md:aspect-[4/5]',
  uniform: 'aspect-[16/10]',
};

export default function ProjectTile({
  project,
  aspect = 'uniform',
  className,
}: {
  project: Project;
  aspect?: TileAspect;
  className?: string;
}) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className={`group focus-rack-item relative block overflow-hidden bg-surface ${aspectClasses[aspect]} ${className ?? ''}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 scale-[1.01] bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
        style={{
          backgroundImage: `url(/images/previews/${project.slug}.jpg)`,
        }}
      />
      <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center bg-background/10 transition-colors duration-300 group-hover:bg-transparent">
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/60 bg-background/50 text-primary backdrop-blur-sm">▶</span>
        <span className="label-micro absolute left-4 top-4 text-muted">Watch project ↗</span>
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/70 to-transparent p-4 pt-10">
        <p className="text-[17px] font-medium">{project.title}</p>
        <p className="label-micro mt-1 text-muted">
          {categoryLabels[project.category]}{project.year ? ` · ${project.year}` : ''}
        </p>
      </div>
    </Link>
  );
}
