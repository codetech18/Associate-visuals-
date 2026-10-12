import Image from 'next/image';
import { site } from '@/content/site';
import styles from './portfolio.module.css';

export default function About() {
  return (
    <section id="about" className="paper section-space" aria-labelledby="about-title">
      <div className="shell">
        <div className={styles.sectionTop}>
          <p className="eyebrow">01 / Behind the camera</p>
          <p className="eyebrow">A personal approach.<br />A considered result.</p>
        </div>
        <div className={styles.aboutGrid}>
          <h2 id="about-title" className={`section-title ${styles.aboutTitle}`}>The eye behind<br /><em className="editorial">the frame.</em></h2>
          <figure className={styles.aboutPhoto}>
            <div className={styles.portrait}>
              <Image src="/images/sam-portrait.jpg" alt="Sam, cinematographer behind Associate Visuals" fill sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1200px) 35vw, 450px" className="object-cover object-[center_35%]" />
            </div>
            <figcaption className={`eyebrow ${styles.portraitCaption}`}><span>Sam / Associate Visuals</span><span>Lagos, NG</span></figcaption>
          </figure>
          <div className={styles.aboutCopy}>
            <p className={styles.aboutIntro}>I’m Sam, a Lagos-based cinematographer. I help brands, property teams, and creators turn an idea into a film people want to watch.</p>
            <p className={styles.aboutBody}>My work connects the shoot and the edit: finding the right light, composing with purpose, and shaping the rhythm through post-production. The aim is simple—a film that feels right for your story, not just a collection of good-looking shots.</p>
            <div className={`eyebrow ${styles.aboutTags}`}><span>Cinematography</span><span>Editing & colour</span><span>Drone coverage</span></div>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="text-link mt-7">Let’s talk about your film</a>
          </div>
        </div>
      </div>
    </section>
  );
}
