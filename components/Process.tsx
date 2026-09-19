import RevealOnScroll from '@/components/RevealOnScroll';
import { processSteps } from '@/content/process';

// The one section where numbering is genuinely sequential.
export default function Process() {
  return (
    <section className="border-t border-hairline">
      <div className="mx-auto max-w-7xl px-5 py-8 md:px-10 md:py-12">
        <RevealOnScroll>
          <p className="label-micro text-muted">Process</p>
        </RevealOnScroll>
        <RevealOnScroll className="mt-6 grid divide-y divide-hairline md:grid-cols-3 md:divide-x md:divide-y-0">
          {processSteps.map((step) => (
            <div key={step.number} className="py-5 md:px-8 md:py-2 md:first:pl-0 md:last:pr-0">
              <p className="font-mono text-[11px] text-accent">{step.number}</p>
              <p className="mt-3 text-[15px] font-medium">{step.name}</p>
              <p className="mt-2 text-[15px] text-muted">{step.description}</p>
            </div>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}
