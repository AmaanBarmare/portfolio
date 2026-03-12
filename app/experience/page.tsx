import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, MapPin, Calendar, Building, CheckCircle2 } from 'lucide-react';
import { FadeInUp } from '@/components/animations/fade-in-up';
import experiencesData from '@/data/experiences.json';

export const metadata: Metadata = {
  title: 'Experience - Amaan Barmare',
  description: 'Explore Amaan Barmare\'s professional experience, including internships and academic roles.',
};

export default function ExperiencePage() {
  const sortedExperiences = [...experiencesData].sort((a, b) => {
    if (a.status === 'current') return -1;
    if (b.status === 'current') return 1;
    return 0;
  });

  return (
    <main id="main-content" className="min-h-screen px-4 py-16 md:py-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <FadeInUp>
          <div className="text-center mb-20">
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-teal-400">
              Professional Journey
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              Building scalable solutions, integrating AI, and learning from every system I architect.
            </p>
          </div>
        </FadeInUp>

        {/* Interactive Vertical Timeline */}
        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.5rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/30 before:to-transparent">
          {sortedExperiences.map((experience, index) => {
            const isCurrent = experience.status === 'current';
            
            return (
              <FadeInUp key={experience.id} delay={0.1 * index}>
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  
                  {/* Timeline Marker */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-card shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 relative">
                     {isCurrent ? (
                        <div className="w-3 h-3 bg-primary rounded-full animate-pulse shadow-[0_0_15px_rgba(99,102,241,0.6)]" />
                     ) : (
                        <div className="w-3 h-3 bg-muted-foreground/30 rounded-full group-hover:bg-primary/50 transition-colors" />
                     )}
                     
                     {/* Connecting glow on hover */}
                     <div className="absolute inset-0 rounded-full border border-primary/0 group-hover:border-primary/50 scale-150 transition-all duration-500 opacity-0 group-hover:opacity-100" />
                  </div>

                  {/* Date Flag */}
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] text-muted-foreground font-mono text-sm md:text-base hidden md:block">
                     <span className={`block ${index % 2 === 0 ? 'text-left pl-6' : 'text-right pr-6'} ${isCurrent ? 'text-primary font-bold' : ''}`}>
                       {experience.timeframe}
                     </span>
                  </div>

                  {/* Content Card */}
                  <Card className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 md:p-8 bg-card/60 backdrop-blur-md border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] relative overflow-hidden group/card`}>
                    
                    {/* Subtle gradient background on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10 space-y-6">
                       <div className="flex items-start justify-between gap-4">
                          <div>
                             <h3 className="font-bold text-xl group-hover/card:text-primary transition-colors">
                               {experience.title}
                             </h3>
                             <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                               {experience.logo ? (
                                  <Image src={experience.logo} alt={experience.company} width={16} height={16} className="rounded-sm" />
                               ) : (
                                  <Building className="w-4 h-4" />
                               )}
                               <span className="font-medium">{experience.company}</span>
                             </div>
                          </div>
                          {isCurrent && (
                             <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 shrink-0 font-mono">
                               Active
                             </Badge>
                          )}
                       </div>

                       <p className="text-muted-foreground/90 leading-relaxed text-sm">
                         {experience.shortDescription}
                       </p>

                       <div className="space-y-3">
                          {experience.quickRead.map((item, idx) => (
                             <div key={idx} className="flex gap-3 text-sm text-muted-foreground group-hover/card:text-foreground/80 transition-colors">
                                <CheckCircle2 className="w-4 h-4 text-primary/50 shrink-0 mt-0.5" />
                                <span className="leading-relaxed">{item}</span>
                             </div>
                          ))}
                       </div>

                       <div className="pt-4 border-t border-border/50">
                          <div className="flex flex-wrap gap-2">
                             {experience.stack.map(tech => (
                                <Badge key={tech} variant="outline" className="font-mono text-xs bg-background/50 hover:bg-primary/10 hover:text-primary transition-colors">
                                   {tech}
                                </Badge>
                             ))}
                          </div>
                       </div>
                    </div>
                  </Card>
                </div>
              </FadeInUp>
            );
          })}
        </div>

        {/* CTA */}
        <FadeInUp delay={0.4}>
          <div className="mt-24 text-center">
             <div className="inline-flex items-center justify-center p-1 rounded-full bg-gradient-to-r from-primary/50 to-teal-500/50 mb-8">
                <div className="px-6 py-2 rounded-full bg-background font-mono text-sm tracking-widest text-muted-foreground uppercase">
                   Let's Connect
                </div>
             </div>
             <h2 className="text-3xl font-bold mb-6">Ready to engineer the future?</h2>
             <Button asChild size="lg" className="min-h-[56px] px-10 text-lg rounded-full shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-shadow">
               <Link href="/contact">
                 Reach Out Now <ArrowRight className="ml-2 h-5 w-5" />
               </Link>
             </Button>
          </div>
        </FadeInUp>
      </div>
    </main>
  );
}
