import styles from './portfolio.module.css';

const steps = [
  ['01 / Align', 'Start with the story', 'We discuss the audience, direction, locations, and deliverables before the shoot.'],
  ['02 / Create', 'Make every frame count', 'The production brings together light, composition, movement, and the details that matter.'],
  ['03 / Refine', 'Shape the final film', 'Editing, sound, and colour bring the story together, ready for its intended screen.'],
];

export default function Process() {
  return <section className={styles.process} aria-labelledby="process-title"><div className={`shell ${styles.processInner}`}>
    <h2 id="process-title" className="eyebrow text-accent">A clear process,<br />from start to finish.</h2>
    <div className={styles.processSteps}>{steps.map(([label, title, description]) => <div key={label}><p className="eyebrow mb-3">{label}</p><h3>{title}</h3><p>{description}</p></div>)}</div>
  </div></section>;
}
