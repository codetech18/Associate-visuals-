import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import VideoPlayer from "@/components/VideoPlayer";
import { categoryLabels, getProject, projects } from "@/content/projects";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.caseStudy?.intro ?? project.brief,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  const meta = [
    { label: "Client", value: project.client },
    { label: "Year", value: project.year ? String(project.year) : undefined },
    { label: "Role", value: project.role },
    { label: "Format", value: project.caseStudy?.format },
    { label: "Category", value: categoryLabels[project.category] },
  ].filter((item) => item.value);

  return (
    <>
      <Nav wordmarkHref="/work" />
      <main className="pt-14">
        <VideoPlayer
          key={project.video.driveId}
          driveId={project.video.driveId}
          label={project.title}
          poster={`/images/previews/${project.slug}.jpg`}
        />

        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid grid-cols-2 gap-y-5 border-b border-hairline py-6 md:flex md:divide-x md:divide-hairline">
            {meta.map((item) => (
              <div key={item.label} className="md:flex-1 md:px-8 md:first:pl-0 md:last:pr-0">
                <p className="label-micro text-muted">{item.label}</p>
                <p className="mt-1 font-mono text-[12px]">{item.value}</p>
              </div>
            ))}
          </div>

          <article className="mx-auto max-w-[760px] py-12 md:py-20">
            <p className="label-micro text-muted">Project</p>
            <h1 className="text-hero mt-3">{project.title}</h1>
            <p className="text-big mt-6 max-w-[30ch]">
              {project.caseStudy?.intro ??
                `A selected ${categoryLabels[project.category].toLowerCase()} project from Associate Visuals.`}
            </p>

            {project.caseStudy && (
              <div className="mt-12 grid gap-8 border-t border-hairline pt-8 md:grid-cols-2 md:gap-12">
                <div>
                  <p className="label-micro text-accent">Creative intent</p>
                  <p className="mt-3 leading-7 text-muted">{project.caseStudy.intent}</p>
                </div>
                <div>
                  <p className="label-micro text-accent">Treatment</p>
                  <p className="mt-3 leading-7 text-muted">{project.caseStudy.treatment}</p>
                </div>
              </div>
            )}

            {project.caseStudy && (
              <div className="mt-10 border-y border-hairline py-6">
                <p className="label-micro text-muted">Creative focus</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.caseStudy.focus.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-hairline-strong px-4 py-2 text-[14px]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </article>

          {project.stills && project.stills.length > 0 && (
            <div className="grid grid-cols-1 gap-4 pb-8 sm:grid-cols-2 md:pb-12">
              {project.stills.slice(0, 6).map((still, i) => (
                <div
                  key={still}
                  className="relative aspect-[3/2] overflow-hidden bg-surface"
                >
                  <Image
                    src={still}
                    alt={`${project.title}, still frame ${i + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <nav
          className="border-t border-hairline"
          aria-label="Project navigation"
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 md:px-10">
            <Link
              href={`/work/${previous.slug}`}
              className="text-[13px] text-accent transition-colors duration-200 hover:text-primary"
            >
              ← {previous.title}
            </Link>
            <Link
              href={`/work/${next.slug}`}
              className="text-[13px] text-accent transition-colors duration-200 hover:text-primary"
            >
              {next.title} →
            </Link>
          </div>
        </nav>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
