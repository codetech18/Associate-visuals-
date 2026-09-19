import RevealOnScroll from '@/components/RevealOnScroll';

// One typographic paragraph instead of a stats grid.
export default function Signal() {
  return (
    <section className="border-t border-hairline">
      <div className="mx-auto max-w-7xl px-5 py-8 md:px-10 md:py-12">
        <RevealOnScroll>
          <p className="label-micro text-muted">Signal</p>
          <p className="text-big mt-4 max-w-[42ch]">
            Twenty-plus projects delivered. Two years shooting professionally
            in Lagos. Trusted by growing brands, real estate teams, and
            creators who need visuals that convert attention into results.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
