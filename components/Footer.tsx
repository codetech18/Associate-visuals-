import { site } from '@/content/site';

export default function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-4 md:px-10">
        <p className="font-mono text-[11px] text-muted">
          {site.wordmark} © {new Date().getFullYear()}
        </p>
        <div className="flex gap-5 font-mono text-[11px]">
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors duration-200 hover:text-primary"
          >
            instagram
          </a>
          <a
            href={site.social.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors duration-200 hover:text-primary"
          >
            tiktok
          </a>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors duration-200 hover:text-primary"
          >
            whatsapp
          </a>
        </div>
      </div>
    </footer>
  );
}
