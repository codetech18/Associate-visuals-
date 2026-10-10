'use client';

import { useState } from 'react';
import FilterTabs, { type WorkFilter } from '@/components/FilterTabs';
import ProjectTile from '@/components/ProjectTile';
import { featuredProjects, projects } from '@/content/projects';
import styles from './portfolio.module.css';

const ordered = [...featuredProjects, ...projects.filter(project => !project.featured)];

export default function WorkGrid() {
  const [filter, setFilter] = useState<WorkFilter>('all');
  const visible = filter === 'all' ? ordered : ordered.filter(project => project.category === filter);
  return <div>
    <FilterTabs value={filter} onChange={setFilter} />
    <p className="eyebrow mt-6 text-[#606659]" role="status">{visible.length} films / {filter === 'all' ? 'Full collection' : 'Filtered collection'}</p>
    <div className={styles.archiveGrid}>{visible.map(project => <ProjectTile key={project.slug} project={project} />)}</div>
  </div>;
}
