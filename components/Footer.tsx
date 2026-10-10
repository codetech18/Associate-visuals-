import Link from 'next/link';
import { site } from '@/content/site';
import styles from './portfolio.module.css';

export default function Footer() {
  return <footer className={styles.footer}><div className="shell">
    <div className={styles.footerTop}><Link href="/" className={styles.footerBrand}>Associate <em className="editorial">Visuals.</em></Link><div className={styles.footerSocials}>
      <a href={site.social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
      <a href={site.social.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a>
      <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
    </div></div>
    <div className={`eyebrow ${styles.footerBottom}`}><p>© {new Date().getFullYear()} Associate Visuals</p><p>Cinematography & post-production / Lagos, NG</p></div>
  </div></footer>;
}
