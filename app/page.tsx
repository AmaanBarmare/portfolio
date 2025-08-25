import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ArrowRight, Download, ExternalLink, Github } from 'lucide-react';
import { FadeInUp } from '@/components/animations/fade-in-up';
import personalData from '@/data/personal.json';
import projectsData from '@/data/projects.json';

const featuredProjects = projectsData.filter(project => project.featured);

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="px-4 py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-4xl text-center">
          <FadeInUp>
            <h1 className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-tight mb-6 text-balance">
              <span className="gradient-text">
                {personalData.name}
              </span>
            </h1>
          </FadeInUp>
          
          <FadeInUp delay={0.1}>
            <p className="text-[clamp(1.25rem,3vw,1.75rem)] text-muted-foreground mb-4 font-medium">
              {personalData.title}
            </p>
          </FadeInUp>
          
          <FadeInUp delay={0.2}>
            <p className="text-fluid-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              {personalData.tagline}
            </p>
          </FadeInUp>
          
          <FadeInUp delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="min-h-[48px] px-8">
                <Link href="/resume">
                  <Download className="mr-2 h-4 w-4" />
                  View Resume
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="min-h-[48px] px-8">
                <Link href="/contact">
                  Contact Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="px-4 py-16 md:py-20">
        <div className="container mx-auto max-w-6xl">
          <FadeInUp>
            <div className="text-center mb-12">
              <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold mb-4">
                Featured Projects
              </h2>
              <p className="text-fluid-base text-muted-foreground max-w-2xl mx-auto">
                A selection of my recent work spanning full-stack development, AR/VR, and systems programming.
              </p>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredProjects.map((project, index) => (
              <FadeInUp key={project.id} delay={0.1 * index}>
                <Card className="group h-full overflow-hidden hover:shadow-lg transition-all duration-300 border-border/50">
                  {project.images && project.images.length > 0 && (
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={project.images[0]}
                        alt={`${project.title} preview`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {project.timeframe}
                      </span>
                    </div>
                    
                    <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {project.shortDescription}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.stack.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.stack.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.stack.length - 3}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Button asChild size="sm" variant="outline" className="flex-1 min-h-[40px]">
                        <Link href={`/projects/${project.slug}`}>
                          View Case Study
                          <ArrowRight className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                      
                      {project.links.live && (
                        <Button size="sm" variant="ghost" asChild className="min-h-[40px] min-w-[40px] p-2">
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} live demo`}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      
                      {project.links.repo && (
                        <Button size="sm" variant="ghost" asChild className="min-h-[40px] min-w-[40px] p-2">
                          <a
                            href={project.links.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} source code`}
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              </FadeInUp>
            ))}
          </div>

          <FadeInUp delay={0.4}>
            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg" className="min-h-[48px] px-8">
                <Link href="/projects">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
                    </FadeInUp>
        </div>
      </section>


    </div>
  );
}