import Link from 'next/link';
import ProjectTile from '@/components/ProjectTile';
import { featuredProjects } from '@/content/projects';
import styles from './portfolio.module.css';

export default function SelectedWork() {
  return (
    <section id="selected-work" className={`paper section-space ${styles.work}`} aria-labelledby="work-title">
      <div className="shell">
        <div className={styles.workHeading}>
          <div><p className="eyebrow">02 / Selected films</p><h2 id="work-title" className="section-title">Different stories.<br /><em className="editorial">The same intention.</em></h2></div>
          <Link href="/work" className="text-link">Explore all films</Link>
        </div>
        <div className={styles.selectedGrid}>
          {featuredProjects.map((project, index) => <ProjectTile key={project.slug} project={project} aspect={project.video.orientation === 'portrait' ? 'medium' : 'large'} number={index + 1} />)}
        </div>
      </div>
    </section>
  );
}
