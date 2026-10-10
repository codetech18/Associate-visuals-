import Link from 'next/link';
import HeroReel from '@/components/HeroReel';
import { site } from '@/content/site';
import styles from './portfolio.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <HeroReel label="ZIZOU project trailer">
        <div className={`shell ${styles.heroContent}`}>
          <p className="eyebrow">Independent cinematographer · Lagos, Nigeria</p>
          <h1 id="hero-title" className={styles.heroHeading}>Make them<br /><em className="editorial">feel something.</em></h1>
          <div className={styles.heroBottom}>
            <p>Cinematography and post-production for brands, spaces, and people. Every frame, with intention.</p>
            <div className={styles.heroActions}>
              <Link href="#selected-work" className="button-primary">Explore the work</Link>
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="text-link">Discuss a project</a>
            </div>
          </div>
        </div>
        <div className={`shell ${styles.heroCredit}`}>
          <p className="eyebrow">On screen / ZIZOU project trailer</p>
          <Link href="/work/zizou-project-trailer" className="eyebrow inline-flex min-h-11 items-center">View the film</Link>
        </div>
      </HeroReel>
    </section>
  );
}
