import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Code, Database, Cloud, Wrench, Palette, Cpu } from 'lucide-react';
import { FadeInUp } from '@/components/animations/fade-in-up';
import skillsData from '@/data/skills.json';

export const metadata: Metadata = {
  title: 'Skills - Amaan Barmare',
  description: 'Explore Amaan Barmare\'s technical skills in programming languages, frameworks, tools, and cloud technologies.',
};

const skillCategories = [
  {
    title: 'Languages',
    icon: Code,
    skills: skillsData.languages,
    colors: 'from-blue-500/20 to-indigo-500/20 text-blue-400',
  },
  {
    title: 'Frameworks',
    icon: Palette,
    skills: [...skillsData.frameworks, ...skillsData.libraries],
    colors: 'from-green-500/20 to-emerald-500/20 text-green-400',
  },
  {
    title: 'Databases',
    icon: Database,
    skills: skillsData.databases,
    colors: 'from-purple-500/20 to-fuchsia-500/20 text-purple-400',
  },
  {
    title: 'Cloud',
    icon: Cloud,
    skills: skillsData.cloud,
    colors: 'from-orange-500/20 to-red-500/20 text-orange-400',
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: skillsData.tools,
    colors: 'from-teal-500/20 to-cyan-500/20 text-teal-400',
  },
];

export default function SkillsPage() {
  return (
    <main id="main-content" className="min-h-screen pt-24 pb-16 md:py-20 relative overflow-hidden bg-background">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-primary/5 rounded-[100%] blur-[120px] pointer-events-none -z-10" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <FadeInUp>
          <div className="text-center mb-20">
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-indigo-400 to-teal-400">
              Technical Core
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
               The systems, languages, and frameworks I use to bring ideas to reality.
            </p>
          </div>
        </FadeInUp>

        {/* Marquee Infinite Scroll (Simulated with overflow) */}
        <FadeInUp delay={0.1} className="w-full overflow-hidden mb-24 relative">
           <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
           <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
           
           <div className="flex gap-4 animate-[scroll_40s_linear_infinite] w-max select-none hover:[animation-play-state:paused] py-4">
              {[...skillsData.languages, ...skillsData.frameworks, ...skillsData.databases, ...skillsData.languages, ...skillsData.frameworks].map((skill, i) => (
                 <div key={`${skill}-${i}`} className="px-6 py-3 rounded-xl bg-card/50 backdrop-blur border border-border/50 font-mono text-sm tracking-widest text-muted-foreground whitespace-nowrap shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:text-primary transition-colors">
                    {skill}
                 </div>
              ))}
           </div>
           
           <div className="flex gap-4 animate-[scroll_45s_linear_infinite_reverse] w-max select-none mt-4 hover:[animation-play-state:paused] py-4">
              {[...skillsData.cloud, ...skillsData.tools, ...skillsData.libraries, ...skillsData.cloud, ...skillsData.tools].map((skill, i) => (
                 <div key={`${skill}-${i}-rev`} className="px-6 py-3 rounded-xl bg-card/30 backdrop-blur border border-border/50 font-mono text-sm tracking-widest text-muted-foreground whitespace-nowrap shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:text-teal-400 transition-colors">
                    {skill}
                 </div>
              ))}
           </div>
        </FadeInUp>

        {/* Visual Radar / Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
            {skillCategories.map((category, idx) => (
               <FadeInUp key={category.title} delay={0.1 * (idx + 2)} className={idx === 4 ? "md:col-span-2" : ""}>
                   <Card className="p-8 bg-card/40 backdrop-blur-md border border-border/50 hover:border-primary/30 transition-all duration-500 h-full group relative overflow-hidden">
                       <div className={`absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br ${category.colors} rounded-full blur-[50px] group-hover:blur-[70px] transition-all duration-700`} />
                       
                       <div className="relative z-10">
                           <div className="flex items-center gap-3 mb-8">
                               <div className="p-3 rounded-xl bg-background border border-border/50 shadow-inner">
                                   <category.icon className={`w-6 h-6 ${category.colors.split(' ')[1]}`} />
                               </div>
                               <h2 className="text-2xl font-bold tracking-tight">{category.title}</h2>
                           </div>

                           <div className="flex flex-wrap gap-2">
                               {category.skills.map(skill => (
                                   <Badge key={skill} variant="outline" className="px-4 py-1.5 font-mono text-xs bg-background/50 hover:bg-primary/20 hover:text-foreground transition-colors cursor-default border-border/50">
                                       {skill}
                                   </Badge>
                               ))}
                           </div>
                       </div>
                   </Card>
               </FadeInUp>
            ))}
        </div>

        {/* Call to Action */}
        <FadeInUp delay={0.6}>
           <Card className="relative overflow-hidden border-0 ring-1 ring-border/50 rounded-[2rem] bg-gradient-to-b from-card/50 to-background p-12 text-center md:flex md:items-center md:justify-between md:text-left gap-8">
              <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px] pointer-events-none" />
              <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
              
              <div className="relative z-10 md:w-2/3">
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-mono text-xs mb-6 border border-primary/20">
                    <Cpu className="w-3 h-3" /> System Ready
                 </div>
                 <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">Ready to deploy these skills?</h2>
                 <p className="text-muted-foreground text-lg">
                    Whether it&apos;s building resilient APIs or crafting pixel-perfect interfaces, I&apos;m ready to contribute to your engineering team.
                 </p>
              </div>

              <div className="mt-8 md:mt-0 relative z-10 md:w-1/3 flex justify-center md:justify-end">
                 <Button asChild size="lg" className="rounded-full h-14 px-8 text-base shadow-[0_0_20px_rgba(99,102,241,0.2)] hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]">
                    <Link href="/projects">
                       View Implementation <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                 </Button>
              </div>
           </Card>
        </FadeInUp>

      </div>
    </main>
  );
}
