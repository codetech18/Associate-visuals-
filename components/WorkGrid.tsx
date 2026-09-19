'use client';

import { useState } from 'react';
import FilterTabs, { type WorkFilter } from '@/components/FilterTabs';
import ProjectTile from '@/components/ProjectTile';
import { projects } from '@/content/projects';

const sorted = projects;

export default function WorkGrid() {
  const [filter, setFilter] = useState<WorkFilter>('all');

  const visible =
    filter === 'all'
      ? sorted
      : sorted.filter((project) => project.category === filter);

  return (
    <div>
      <FilterTabs value={filter} onChange={setFilter} />
      <div className="focus-rack mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <ProjectTile key={project.slug} project={project} aspect="uniform" />
        ))}
      </div>
    </div>
  );
}
