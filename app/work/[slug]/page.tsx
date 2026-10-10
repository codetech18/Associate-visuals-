import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import VideoPlayer from '@/components/VideoPlayer';
import { categoryLabels, getProject, getVideoOrientation, projects } from '@/content/projects';
import styles from '@/components/portfolio.module.css';

type Params = { slug: string };
export function generateStaticParams(): Params[] { return projects.map(project => ({ slug: project.slug })); }
export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return project ? { title: project.title, description: project.brief ?? `Watch ${project.title}, a film from Associate Visuals.` } : {};
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const index = projects.findIndex(item => item.slug === slug);
  const next = projects[(index + 1) % projects.length];
  const format = project.format ?? categoryLabels[project.category];
  const meta = [
    { label: 'Format', value: format },
    { label: 'Client', value: project.client },
    { label: 'Role', value: project.role },
    { label: 'Year', value: project.year?.toString() },
  ].filter(item => item.value);
  return <><Nav /><main id="main-content">
    <section className={`paper ${styles.project}`}><div className="shell">
      <Link href="/work" className="eyebrow inline-flex min-h-11 items-center">Back to all films</Link>
      <div className={styles.projectHeader}><h1>{project.title}</h1><p>{project.brief ?? `A ${format.toLowerCase()} from the Associate Visuals collection. Watch the film below.`}</p></div>
      <dl className={styles.projectMeta}>{meta.map(item => <div key={item.label}><dt className="eyebrow">{item.label}</dt><dd>{item.value}</dd></div>)}</dl>
      <VideoPlayer key={project.video.driveId} driveId={project.video.driveId} label={project.title} poster={`/images/previews/${project.slug}.jpg`} orientation={getVideoOrientation(project)} src={project.video.src} />
      <div className={styles.projectNote}><h2 className="eyebrow">Planning something similar?</h2><p>Start with your audience, the story you want to tell, and where the film will be seen. Talk to Sam about the direction, shoot, and deliverables your project needs.</p></div>
      {project.stills && <div className="grid gap-6 pb-12 sm:grid-cols-2">{project.stills.map((still, i) => <div key={still} className="relative aspect-[3/2]"><Image src={still} alt={`${project.title}, still ${i + 1}`} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" /></div>)}</div>}
      <nav className={styles.projectNext} aria-label="More films"><Link href="/work">Explore the collection</Link><Link href={`/work/${next.slug}`}><span className="eyebrow">Next film</span>{next.title}</Link></nav>
    </div></section><Contact />
  </main><Footer /></>;
}
