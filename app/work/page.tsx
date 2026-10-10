import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import WorkGrid from '@/components/WorkGrid';
import styles from '@/components/portfolio.module.css';

export const metadata: Metadata = { title: 'Films', description: 'Brand, location, interview, and social films from Associate Visuals in Lagos.' };

export default function WorkPage() {
  return <><Nav /><main id="main-content">
    <section className={`paper section-space ${styles.archive}`}><div className="shell">
      <p className="eyebrow mb-6">The film collection / Associate Visuals</p>
      <div className={styles.archiveHeading}><h1 className="display">Stories in<br /><em className="editorial">motion.</em></h1><p>A collection of brand, location, interview, and social films. Find a story, then take a closer look.</p></div>
      <WorkGrid />
    </div></section><Contact />
  </main><Footer /></>;
}
