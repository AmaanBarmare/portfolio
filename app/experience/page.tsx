import type { Metadata } from 'next';
import Image from 'next/image';
import { Building2 } from 'lucide-react';
import { FadeInUp } from '@/components/animations/fade-in-up';
import experiencesData from '@/data/experiences.json';

export const metadata: Metadata = {
  title: 'Experience · Amaan Barmare',
  description: 'Roles, internships, and the work behind them.',
};

export default function ExperiencePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="pointer-events-none absolute right-0 top-0 -z-10 h-[400px] w-[400px] rounded-full bg-primary/15 blur-[140px]" />

      <section className="container relative z-10 mx-auto max-w-4xl px-4 py-20 md:py-24">
        <FadeInUp>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            02 · Experience
          </p>
          <h1 className="mb-16 text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-primary via-indigo-400 to-teal-400 bg-clip-text text-transparent">
              Where I&apos;ve worked
            </span>
          </h1>
        </FadeInUp>

        <div className="space-y-16">
          {experiencesData.map((exp, index) => (
            <FadeInUp key={exp.id} delay={0.05 * index}>
              <article className="group relative">
                <div className="mb-4 flex items-center gap-3">
                  {exp.logo ? (
                    <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-md border border-border/60 bg-card/60">
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        fill
                        sizes="36px"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border/60 bg-card/60">
                      <Building2 className="h-4 w-4 text-muted-foreground" />
                    </div>
                  )}

                  <div className="min-w-0 flex-1">
                    <h2 className="text-lg font-semibold tracking-tight md:text-xl">
                      {exp.company}
                      <span className="text-muted-foreground"> · </span>
                      <span className="font-normal text-muted-foreground">{exp.role}</span>
                    </h2>
                  </div>
                </div>

                <p className="mb-6 pl-12 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  {exp.timeframe}
                  <span className="mx-2 text-border">/</span>
                  {exp.location}
                </p>

                <ul className="mb-6 space-y-3 pl-12">
                  {exp.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="relative pl-5 text-sm leading-relaxed text-muted-foreground/90 md:text-[15px] before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-primary/60"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pl-12">
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-md border border-border/50 bg-card/40 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {index < experiencesData.length - 1 && (
                  <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-border/60 to-transparent" />
                )}
              </article>
            </FadeInUp>
          ))}
        </div>
      </section>
    </main>
  );
}
