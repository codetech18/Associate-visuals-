import RevealOnScroll from '@/components/RevealOnScroll';
import { site } from '@/content/site';

export default function Contact() {
  return (
    <section id="contact" className="border-t border-hairline">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-8 md:grid-cols-2 md:items-center md:px-10 md:py-12">
        <RevealOnScroll>
          <p className="label-micro text-muted">Contact</p>
          <p className="text-big mt-4 max-w-[20ch]">
            What are you planning to shoot?
          </p>
          <p className="mt-4 max-w-[45ch] text-muted">Tell Sam what you have in mind, where you want to shoot, and your ideal timeline.</p>
          <div className="mt-5 flex flex-col items-start text-[15px] text-muted">
            <a href={`mailto:${site.email}`} className="inline-flex min-h-11 items-center break-all underline underline-offset-4 hover:text-primary">{site.email}</a>
            <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="inline-flex min-h-11 items-center hover:text-primary">{site.phone}</a>
          </div>
        </RevealOnScroll>
        <RevealOnScroll className="md:justify-self-end">
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary"
          >
            Chat with Sam on WhatsApp ↗
          </a>
        </RevealOnScroll>
      </div>
    </section>
  );
}
