import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ExternalLink, Github, Star } from 'lucide-react';
import { FadeInUp } from '@/components/animations/fade-in-up';
import projectsData from '@/data/projects.json';

export const metadata: Metadata = {
  title: 'Projects - Amaan Barmare',
  description: 'Explore Amaan Barmare\'s software development projects, including full-stack applications, AR/VR experiences, and systems programming solutions.',
};

export default function ProjectsPage() {
  const featuredProjects = projectsData.filter(project => project.featured);
  const otherProjects = projectsData.filter(project => !project.featured);

  return (
    <main id="main-content" className="min-h-screen px-4 py-16 md:py-20">
      <div className="container mx-auto max-w-6xl">
        <FadeInUp>
          <div className="text-center mb-16">
            <h1 className="text-[clamp(2rem,4.5vw,3rem)] font-bold mb-6">
              My Projects
            </h1>
            <p className="text-fluid-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of projects showcasing my skills in full-stack development, 
              mobile applications, systems programming, and emerging technologies.
            </p>
          </div>
        </FadeInUp>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <section className="mb-16">
            <FadeInUp delay={0.1}>
              <div className="flex items-center gap-2 mb-8">
                <Star className="w-5 h-5 text-yellow-500" />
                <h2 className="text-xl font-semibold">Featured Projects</h2>
              </div>
            </FadeInUp>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
              {featuredProjects.map((project, index) => (
                <FadeInUp key={project.id} delay={0.1 * (index + 2)}>
                  <ProjectCard project={project} featured />
                </FadeInUp>
              ))}
            </div>
          </section>
        )}

        {/* All Projects */}
        <section>
          <FadeInUp delay={0.2}>
            <h2 className="text-xl font-semibold mb-8">All Projects</h2>
          </FadeInUp>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projectsData.map((project, index) => (
              <FadeInUp key={project.id} delay={0.1 * index}>
                <ProjectCard project={project} />
              </FadeInUp>
            ))}
          </div>
        </section>

        <FadeInUp delay={0.4}>
          <div className="text-center mt-16">
            <h2 className="text-xl font-semibold mb-4">Interested in Collaborating?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always excited to work on new projects and explore innovative solutions. 
              Let's build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="min-h-[48px] px-8">
                <Link href="/contact">
                  Start a Conversation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="min-h-[48px] px-8">
                <Link href="/experience">
                  View Experience
                </Link>
              </Button>
            </div>
          </div>
        </FadeInUp>
      </div>
    </main>
  );
}

interface ProjectCardProps {
  project: any;
  featured?: boolean;
}

function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
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
          {featured && (
            <Badge className="absolute top-3 left-3 bg-yellow-500 hover:bg-yellow-600 text-white">
              <Star className="w-3 h-3 mr-1" />
              Featured
            </Badge>
          )}
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
          {project.stack.slice(0, 3).map((tech: string) => (
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
              Case Study
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
  );
}