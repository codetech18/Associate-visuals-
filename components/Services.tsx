import styles from './portfolio.module.css';

const services = [
  { name: 'Brand & commercial', description: 'Product films, interviews, and brand-led stories. A clear visual approach, shaped around what you want your audience to see and feel.', detail: 'Brand films / Interviews / Social edits' },
  { name: 'Spaces & experiences', description: 'Property, location, and lifestyle films that bring a place into focus—from its smallest details to the view from above.', detail: 'Property films / Drone coverage / Highlights' },
  { name: 'Editing & finishing', description: 'Bring the footage together with purposeful pacing, sound, and colour. A finished film prepared for the screen where it will live.', detail: 'Video editing / Colour grading / Short & long form' },
];

export default function Services() {
  return (
    <section id="services" className="section-space" aria-labelledby="services-title">
      <div className="shell">
        <p className="eyebrow text-accent">03 / What we can make</p>
        <div className={styles.servicesHeading}>
          <h2 id="services-title" className="section-title">From the first idea<br /><em className="editorial">to the final frame.</em></h2>
          <p>One creative partner across production and post. Choose a full film, a shoot, or the finishing touches your project needs.</p>
        </div>
        {services.map((service, index) => <div className={styles.service} key={service.name}>
          <span className="eyebrow text-accent">{String(index + 1).padStart(2, '0')}</span>
          <h3>{service.name}</h3>
          <div><p>{service.description}</p><small>{service.detail}</small></div>
        </div>)}
      </div>
    </section>
  );
}
