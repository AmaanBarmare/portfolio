import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, ArrowUpRight } from 'lucide-react';
import { FadeInUp } from '@/components/animations/fade-in-up';

export default function NotFound() {
  return (
    <main className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden px-4">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="pointer-events-none absolute -top-20 left-1/2 -z-10 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-md text-center">
        <FadeInUp>
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            404 · Not Found
          </p>
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
            <span className="bg-gradient-to-r from-primary via-indigo-400 to-teal-400 bg-clip-text text-transparent">
              Wrong turn.
            </span>
          </h1>
          <p className="mb-8 text-muted-foreground">
            That page doesn&apos;t exist, or it used to and got cleaned up.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="min-h-[44px] px-6 font-mono text-sm tracking-tight">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="min-h-[44px] px-6 font-mono text-sm tracking-tight">
              <Link href="/projects">
                Projects
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </FadeInUp>
      </div>
    </main>
  );
}
