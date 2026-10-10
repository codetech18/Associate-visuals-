import { site } from '@/content/site';
import styles from './portfolio.module.css';

export default function Contact() {
  return (
    <section id="contact" className={`section-space ${styles.contact}`} aria-labelledby="contact-title">
      <div className="shell">
        <p className="eyebrow">Let’s make something worth watching</p>
        <div className={styles.contactGrid}>
          <h2 id="contact-title" className={styles.contactHeading}>Have a story<br /><em className="editorial">in mind?</em></h2>
          <div className={styles.contactCopy}><p>Tell me what you’re planning, where you want to shoot, and your ideal timeline. We’ll start with a conversation.</p>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className={styles.contactAction}>Talk to Sam <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className={styles.contactDetails}><a href={`mailto:${site.email}`}>{site.email}</a><a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a><span className="inline-flex min-h-11 items-center">Based in {site.location}</span></div>
      </div>
    </section>
  );
}
