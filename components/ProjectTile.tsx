import Image from 'next/image';
import Link from 'next/link';
import { categoryLabels, getVideoOrientation, type Project } from '@/content/projects';
import styles from './portfolio.module.css';

export default function ProjectTile({ project, aspect = 'uniform', number }: {
  project: Project;
  aspect?: 'large' | 'medium' | 'uniform';
  number?: number;
}) {
  return (
    <Link href={`/work/${project.slug}`} className={styles.tile}>
      <div className={`${styles.tileMedia} ${aspect === 'medium' ? styles.tilePortrait : ''} ${aspect === 'uniform' && getVideoOrientation(project) === 'portrait' ? styles.tileNativePortrait : ''}`}>
        <Image src={`/images/previews/${project.slug}.jpg`} alt="" fill sizes={aspect === 'uniform' ? '(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) 45vw, 30vw' : '(max-width: 767px) calc(100vw - 40px), 50vw'} className={styles.tileImage} />
        {number && <span className={`eyebrow ${styles.tileNumber}`} aria-hidden="true">{String(number).padStart(2, '0')}</span>}
      </div>
      <div className={styles.tileCaption}>
        <div><h3>{project.title}</h3><p className="eyebrow">{project.format ?? categoryLabels[project.category]}</p></div>
        <span aria-hidden="true">View film</span>
      </div>
    </Link>
  );
}
