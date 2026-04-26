import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, FileText } from 'lucide-react';
import { FadeInUp } from '@/components/animations/fade-in-up';
import personalData from '@/data/personal.json';

export default function Home() {
  return (
    <main className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />

      <section className="container relative z-10 mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
          <div className="order-2 md:order-1">
            <FadeInUp>
              <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Founding Engineer · Oltaflock AI
              </p>
            </FadeInUp>

            <FadeInUp delay={0.05}>
              <h1 className="mb-8 text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight">
                <span className="bg-gradient-to-r from-primary via-indigo-400 to-teal-400 bg-clip-text text-transparent">
                  {personalData.name}
                </span>
              </h1>
            </FadeInUp>

            <div className="mb-10 max-w-xl space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              {personalData.bio.map((paragraph, i) => (
                <FadeInUp key={i} delay={0.1 + i * 0.05}>
                  <p>{paragraph}</p>
                </FadeInUp>
              ))}
            </div>

            <FadeInUp delay={0.4}>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="min-h-[48px] px-7 font-mono text-sm tracking-tight">
                  <a
                    href={personalData.resumePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open resume PDF in a new tab"
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    Resume
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="min-h-[48px] px-7 font-mono text-sm tracking-tight"
                >
                  <Link href="/contact">
                    Contact
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </FadeInUp>
          </div>

          <FadeInUp delay={0.15} className="order-1 md:order-2">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-border/60 bg-card/40 shadow-[0_0_40px_rgba(99,102,241,0.08)] backdrop-blur">
              <Image
                src={personalData.headshot}
                alt={`${personalData.name} headshot`}
                fill
                priority
                sizes="(max-width: 768px) 80vw, 360px"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-transparent" />
            </div>
          </FadeInUp>
        </div>
      </section>
    </main>
  );
}
