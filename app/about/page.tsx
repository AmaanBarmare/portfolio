import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, MapPin, GraduationCap, Cpu, Code, Brain } from 'lucide-react';
import { FadeInUp } from '@/components/animations/fade-in-up';
import personalData from '@/data/personal.json';

export const metadata: Metadata = {
  title: 'About - Amaan Barmare',
  description: 'Learn more about Amaan Barmare, a Computer Science and Economics student at Penn State University, passionate about building intelligent, scalable applications.',
};

export default function AboutPage() {
  return (
    <main id="main-content" className="min-h-screen px-4 py-16 md:py-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-teal-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <FadeInUp>
          <div className="mb-12">
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-teal-400">
              About Me
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl font-light">
              Engineer. Economist. Creator.
            </p>
          </div>
        </FadeInUp>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
          
          {/* Box 1: Profile (Spans 1 col, 2 rows technically via flex) */}
          <FadeInUp delay={0.1} className="md:col-span-1 md:row-span-2">
            <Card className="h-full p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-500 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="relative w-full aspect-square mb-6 rounded-2xl overflow-hidden border border-border/50">
                  <Image
                    src="/profile.jpeg"
                    alt="Amaan Barmare"
                    fill
                    priority
                    className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex-grow flex flex-col justify-end">
                  <h2 className="font-bold text-2xl mb-1">{personalData.name}</h2>
                  <p className="text-primary font-mono text-sm mb-4">{personalData.title}</p>
                  
                  <div className="space-y-3 mt-auto pt-4 border-t border-border/50">
                    <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                      <div className="w-8 h-8 rounded-full bg-accent/50 flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-mono text-sm tracking-tight">{personalData.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </FadeInUp>

          {/* Box 2: Bio (Spans 2 cols) */}
          <FadeInUp delay={0.2} className="md:col-span-2">
            <Card className="h-full p-8 bg-card/40 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors duration-500">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Code className="w-5 h-5 text-primary" /> The Engineer
              </h2>
              <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground/90 space-y-4">
                  <p className="leading-relaxed">
                    I&apos;m a recent Computer Science graduate from Penn State with a minor in Economics. Over the past few years, I&apos;ve explored the spectrum of development — from building scalable backend data pipelines at Augle AI to crafting full-stack platforms and AI-powered solutions.
                  </p>
                  <p className="leading-relaxed">
                    For me, development is about more than just writing code. It&apos;s about creating tools that are <span className="text-foreground font-medium">scalable, intuitive, and genuinely useful</span>. Whether optimizing a neural network or designing a sleek UI, I aim to deliver solutions that make a tangible difference.
                  </p>
              </div>
              <div className="mt-8 pt-6 border-t border-border/50 flex flex-wrap gap-2">
                 <Badge variant="outline" className="font-mono bg-background/50">Python</Badge>
                 <Badge variant="outline" className="font-mono bg-background/50">TypeScript</Badge>
                 <Badge variant="outline" className="font-mono bg-background/50">React</Badge>
                 <Badge variant="outline" className="font-mono bg-background/50">Next.js</Badge>
                 <Badge variant="outline" className="font-mono bg-background/50">MongoDB</Badge>
              </div>
            </Card>
          </FadeInUp>

          {/* Box 3: Economics / Alternate Perspective */}
          <FadeInUp delay={0.3} className="md:col-span-1">
            <Card className="h-full p-8 bg-gradient-to-br from-teal-500/10 to-transparent border-teal-500/20 hover:border-teal-500/50 transition-colors duration-500 relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-teal-500/10 rounded-full blur-2xl group-hover:bg-teal-500/20 transition-all duration-500" />
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-teal-400">
                <Brain className="w-5 h-5" /> The Economist
              </h2>
              <p className="text-muted-foreground/90 leading-relaxed text-sm">
                My economics background shapes how I build. I don't just ask "Can this be done?" but rather "Does it create value?" This intersection allows me to approach problems from both a highly technical and deeply practical angle.
              </p>
            </Card>
          </FadeInUp>

          {/* Box 4: Drive / Motivation */}
          <FadeInUp delay={0.4} className="md:col-span-1">
            <Card className="h-full p-8 bg-card/40 backdrop-blur-sm border-border/50 hover:bg-primary/5 transition-colors duration-500">
               <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-primary" /> What Drives Me
              </h2>
              <p className="text-muted-foreground/90 leading-relaxed text-sm">
                What excites me most is when tech feels alive — when an application doesn&apos;t just work, but adapts and solves problems beautifully. The overlap between AI and Web is where the magic happens.
              </p>
            </Card>
          </FadeInUp>

          {/* Box 5: Call to Action spans fully on mobile, spans 3 on desktop */}
          <FadeInUp delay={0.5} className="md:col-span-3 mt-4">
             <div className="p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-background to-teal-500/10 border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                   <h3 className="text-2xl font-bold mb-2">Let&apos;s build something together.</h3>
                   <p className="text-muted-foreground">Always open to discussing new engineering opportunities.</p>
                </div>
                <div className="flex gap-4 w-full md:w-auto">
                  <Button asChild size="lg" className="flex-1 md:flex-none">
                    <Link href="/projects">
                      View Work <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="flex-1 md:flex-none">
                    <Link href="/contact">
                      Get In Touch
                    </Link>
                  </Button>
                </div>
             </div>
          </FadeInUp>

        </div>
      </div>
    </main>
  );
}
