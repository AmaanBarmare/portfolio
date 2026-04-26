import type { Metadata } from 'next';
import { ArrowUpRight, Github } from 'lucide-react';
import { FadeInUp } from '@/components/animations/fade-in-up';
import projectsData from '@/data/projects.json';

export const metadata: Metadata = {
  title: 'Projects — Amaan Barmare',
  description: 'Selected work across AI, full-stack, and systems.',
};

type Project = {
  id: string;
  title: string;
  blurb: string;
  stack: string[];
  links: { live?: string; repo?: string };
  org?: string;
};

export default function ProjectsPage() {
  const projects = projectsData as Project[];

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="pointer-events-none absolute left-1/2 top-32 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/15 blur-[160px]" />

      <section className="container relative z-10 mx-auto max-w-6xl px-4 py-20 md:py-24">
        <FadeInUp>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            03 — Projects
          </p>
          <h1 className="mb-4 text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-primary via-indigo-400 to-teal-400 bg-clip-text text-transparent">
              Selected work
            </span>
          </h1>
          <p className="mb-16 max-w-xl text-base text-muted-foreground md:text-lg">
            Things I&apos;ve built — for Oltaflock, for clients, for hackathons, and for myself.
          </p>
        </FadeInUp>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <FadeInUp key={project.id} delay={0.04 * index}>
              <ProjectCard project={project} />
            </FadeInUp>
          ))}
        </div>
      </section>
    </main>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const primaryHref = project.links.live || project.links.repo;
  if (!primaryHref) return null;

  return (
    <article className="group relative flex h-full flex-col rounded-xl border border-border/60 bg-card/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-card/60 hover:shadow-[0_0_32px_rgba(99,102,241,0.08)]">
      <a
        href={primaryHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.title}${project.links.live ? '' : ' on GitHub'}`}
        className="absolute inset-0 z-0 rounded-xl"
      />

      <div className="pointer-events-none relative z-[1] flex flex-1 flex-col">
        <div className="mb-4 flex items-start justify-between gap-3">
          {project.org ? (
            <span className="inline-flex items-center rounded-md border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary">
              {project.org}
            </span>
          ) : (
            <span />
          )}
          {project.links.repo && (
            <a
              href={project.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub repository`}
              className="pointer-events-auto rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
        </div>

        <h2 className="mb-3 flex items-center gap-1.5 text-lg font-semibold tracking-tight">
          <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent transition-colors group-hover:from-primary group-hover:to-indigo-400">
            {project.title}
          </span>
          <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
        </h2>

        <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.blurb}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-md border border-border/50 bg-background/50 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
