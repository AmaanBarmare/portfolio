'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ExternalLink, Github, Star, Filter, Code2, Database, Brain } from 'lucide-react';
import { FadeInUp } from '@/components/animations/fade-in-up';
import projectsData from '@/data/projects.json';

const categories = ["All", "Web Development", "Data Engineering", "AI / Machine Learning", "Mobile Development"];

const categoryIcons: Record<string, any> = {
  "All": Filter,
  "Web Development": Code2,
  "Data Engineering": Database,
  "AI / Machine Learning": Brain,
  "Mobile Development": Star,
};

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projectsData.filter(project => {
    if (activeFilter === "All") return true;
    return project.category === activeFilter;
  });

  return (
    <main id="main-content" className="min-h-screen px-4 py-16 md:py-20 relative overflow-hidden bg-background">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <FadeInUp>
          <div className="mb-16">
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-indigo-400 to-teal-400">
              My Arsenal
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl font-light">
              Architecting solutions across the stack. Filter by focus area below.
            </p>
          </div>
        </FadeInUp>

        {/* Sticky Filter Bar */}
        <FadeInUp delay={0.1}>
           <div className="sticky top-20 z-40 mb-12 hidden md:flex items-center gap-2 overflow-x-auto pb-4 scrollbar-hide">
              {categories.map((cat, idx) => {
                 const Icon = categoryIcons[cat] || Star;
                 return (
                   <button
                     key={cat}
                     onClick={() => setActiveFilter(cat)}
                     className={`flex items-center gap-2 px-6 py-3 rounded-full font-mono text-sm tracking-tight transition-all duration-300 whitespace-nowrap ${
                       activeFilter === cat 
                         ? "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(99,102,241,0.4)]" 
                         : "bg-card/50 backdrop-blur border border-border/50 hover:bg-card hover:border-primary/30 text-muted-foreground hover:text-foreground"
                     }`}
                   >
                     {<Icon className={`w-4 h-4 ${activeFilter === cat ? "text-primary-foreground/80" : "text-primary/70"}`} />}
                     {cat}
                   </button>
                 )
              })}
           </div>
           
           {/* Mobile Filter */}
           <div className="md:hidden mb-10 overflow-x-auto pb-4 flex gap-2 scrollbar-none snap-x">
             {categories.map((cat) => (
               <button
                 key={cat}
                 onClick={() => setActiveFilter(cat)}
                 className={`shrink-0 snap-start px-5 py-2 rounded-full font-mono text-xs transition-all ${
                   activeFilter === cat ? "bg-primary text-white" : "bg-card border border-border"
                 }`}
               >
                 {cat}
               </button>
             ))}
           </div>
        </FadeInUp>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-[420px]">
          {filteredProjects.map((project, index) => {
             // Let's make featured items span more space
             const isHero = project.featured && index === 0 && activeFilter === 'All';
             const isWide = project.featured && !isHero;

             return (
               <FadeInUp 
                 key={project.id} 
                 delay={0.1 * (index % 5)}
                 className={`${isHero ? 'md:col-span-2 lg:col-span-3 xl:col-span-2' : ''} ${isWide ? 'md:col-span-2' : ''}`}
               >
                 <ProjectBentoCard project={project} isHero={isHero} isWide={isWide} />
               </FadeInUp>
             )
          })}
        </div>
      </div>
    </main>
  );
}

function ProjectBentoCard({ project, isHero, isWide }: { project: any, isHero: boolean, isWide: boolean }) {
  const hasImages = project.images && project.images.length > 0;

  return (
    <Card className="group h-full overflow-hidden bg-card/40 backdrop-blur-md border border-border/50 hover:border-primary/40 relative transition-all duration-500 hover:shadow-[0_0_40px_rgba(99,102,241,0.15)] flex flex-col">
       
       {/* Background Image Layer */}
       {hasImages && (
          <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
             <Image
                src={project.images[0]}
                alt={`${project.title} Preview`}
                fill
                className="object-cover opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 50vw"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/20" />
          </div>
       )}

       <div className="relative z-10 flex flex-col h-full p-6 lg:p-8 justify-between">
          {/* Top Layer: Badges */}
          <div className="flex justify-between items-start mb-auto">
             <Badge className="font-mono bg-background/80 backdrop-blur text-primary border-primary/20">
                {project.category || "Full-Stack"}
             </Badge>
             
             {project.featured && (
                <div className="w-8 h-8 rounded-full bg-background/90 backdrop-blur-md border border-yellow-500/30 flex items-center justify-center shadow-sm">
                   <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                </div>
             )}
          </div>

          {/* Bottom Layer: Content */}
          <div className="mt-4 sm:mt-6 transition-transform duration-500 group-hover:-translate-y-2">
             <div className="flex items-center gap-3 mb-2">
                 <h3 className={`font-bold text-foreground group-hover:text-primary transition-colors ${isHero ? 'text-3xl md:text-4xl' : 'text-2xl'}`}>
                    {project.title}
                 </h3>
                 {project.links?.live && (
                    <a href={project.links.live} target="_blank" rel="noreferrer" className="opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0">
                       <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-primary" />
                    </a>
                 )}
                 {project.links?.repo && (
                    <a href={project.links.repo} target="_blank" rel="noreferrer" className="opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 delay-75">
                       <Github className="w-5 h-5 text-muted-foreground hover:text-primary" />
                    </a>
                 )}
             </div>

             <p className={`text-muted-foreground/90 mb-6 font-light ${isHero ? 'text-lg max-w-2xl' : 'text-sm line-clamp-2'}`}>
                {project.shortDescription}
             </p>

             <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.slice(0, isHero ? 6 : 4).map((tech: string) => (
                   <Badge key={tech} variant="outline" className="font-mono text-[10px] md:text-xs bg-card/50 backdrop-blur border-border/50">
                      {tech}
                   </Badge>
                ))}
             </div>

             <Button asChild variant={isHero ? "default" : "secondary"} className={`rounded-xl font-mono text-sm tracking-tight ${isHero ? 'bg-primary hover:bg-primary/90' : 'bg-background/80 hover:bg-primary/20'}`}>
                <Link href={`/projects/${project.slug}`}>
                   Analyze System <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
             </Button>
          </div>
       </div>
    </Card>
  );
}