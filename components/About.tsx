import Image from 'next/image';
import RevealOnScroll from '@/components/RevealOnScroll';
import { site } from '@/content/site';

const strengths = [
  ['01', 'Visual direction', 'A clear idea, visual language, and plan before the camera rolls.'],
  ['02', 'Production', 'Purposeful lighting, composition, movement, and drone coverage.'],
  ['03', 'Post-production', 'Editing and colour that give every film rhythm, polish, and consistency.'],
] as const;

export default function About() {
  return (
    <section id="about" className="border-t border-hairline">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.5fr_1fr] md:items-start md:gap-16 md:px-10 md:py-20">
        <RevealOnScroll className="order-last md:order-first">
          <p className="label-micro text-muted">About</p>
          <p className="text-big mt-4 max-w-[28ch]">
            I&apos;m Sam, a Lagos-based cinematographer creating films that look
            considered and communicate clearly.
          </p>
          <div className="mt-6 max-w-[68ch] space-y-4 text-muted">
            <p>
              I help brands, property teams, and creators turn an idea into a
              film people want to keep watching. The work starts before the
              shoot—with the audience, message, location, light, and feeling
              each frame needs to carry.
            </p>
            <p>
              From production through editing and colour, I stay close to the
              details so the final piece feels consistent and made for the
              screen where it will live. Whether it is a property film, brand
              campaign, interview, or social edit, the aim is the same: strong
              images with a clear purpose.
            </p>
          </div>

          <div className="mt-8 border-b border-hairline">
            {strengths.map(([number, title, description]) => (
              <div
                key={number}
                className="grid gap-2 border-t border-hairline py-4 sm:grid-cols-[40px_140px_1fr] sm:items-start"
              >
                <span className="label-micro text-accent">{number}</span>
                <span className="font-medium">{title}</span>
                <span className="text-[15px] text-muted">{description}</span>
              </div>
            ))}
          </div>

          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-12 items-center text-[15px] text-accent underline underline-offset-4 transition-colors duration-200 hover:text-primary"
          >
            Tell me about your project →
          </a>
        </RevealOnScroll>

        <RevealOnScroll className="order-first md:order-last">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-surface">
            <Image
              src="/images/sam-portrait.jpg"
              alt="Portrait of Sam, cinematographer and founder of Associate Visuals"
              fill
              sizes="(max-width: 767px) 100vw, 34vw"
              className="object-cover object-[center_35%]"
            />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
