import RevealOnScroll from '@/components/RevealOnScroll';
import { site } from '@/content/site';

// Text fallback until Sam delivers real logos. Replace with the logo strip
// (filter: brightness(0.7), full brightness on hover) once SVGs arrive.
export default function TrustedBy() {
  const names = [...site.trustedBy];
  return (
    <section className="border-t border-hairline">
      <div className="mx-auto max-w-7xl px-5 py-6 md:px-10 md:py-8">
        <RevealOnScroll>
          <p className="label-micro text-muted">Trusted by</p>
          <p className="mt-3 max-w-[65ch] text-muted">
            Trusted by {names.slice(0, -1).join(', ')}, {names.at(-1)}, and
            other Lagos brands.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
