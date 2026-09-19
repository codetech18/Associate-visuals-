import RevealOnScroll from '@/components/RevealOnScroll';
import { services } from '@/content/services';

// Numbered two-column list. Numbers are enumeration, not sequence.
export default function Services() {
  return (
    <section id="services" className="border-t border-hairline">
      <div className="mx-auto max-w-7xl px-5 py-8 md:px-10 md:py-12">
        <RevealOnScroll>
          <p className="label-micro text-muted">Services</p>
        </RevealOnScroll>
        <RevealOnScroll className="mt-6 grid md:grid-cols-2 md:gap-x-16">
          {services.map((service, index) => (
            <div
              key={service}
              className="flex items-baseline justify-between border-t border-hairline py-3"
            >
              <span className="font-mono text-[11px] text-muted">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-[16px]">{service}</span>
            </div>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}
