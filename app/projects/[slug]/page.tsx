import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { FadeInUp } from '@/components/animations/fade-in-up';
import projectsData from '@/data/projects.json';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find(proj => proj.slug === slug);
  
  if (!project) {
    return {
      title: 'Project Not Found - Amaan Barmare',
    };
  }

  return {
    title: `${project.title} - Amaan Barmare`,
    description: project.shortDescription,
  };
}

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projectsData.find(proj => proj.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main id="main-content" className="min-h-screen px-4 py-16 md:py-20">
      <div className="container mx-auto max-w-4xl">
        <FadeInUp>
          <Button
            asChild
            variant="ghost"
            className="mb-8 -ml-4 hover:bg-transparent hover:text-primary"
          >
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </FadeInUp>

        <div className="space-y-8">
          {/* Header */}
          <FadeInUp delay={0.1}>
            <Card className="p-6 md:p-8">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-4 flex-wrap">
                    <Badge variant="secondary">{project.category}</Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {project.timeframe}
                    </div>
                  </div>
                  
                  <h1 className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold mb-4">
                    {project.title}
                  </h1>
                  
                  <p className="text-fluid-base text-muted-foreground mb-6">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    {project.links.live && (
                      <Button asChild className="min-h-[48px] px-6">
                        <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Live Demo
                        </a>
                      </Button>
                    )}
                    
                    {project.links.repo && (
                      <Button asChild variant="outline" className="min-h-[48px] px-6">
                        <a href={project.links.repo} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          View Source Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          </FadeInUp>

          {/* Images */}
          {project.images && project.images.length > 0 && (
            <FadeInUp delay={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.images.map((image, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="aspect-video relative">
                      <Image
                        src={image}
                        alt={`${project.title} screenshot ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </Card>
                ))}
              </div>
            </FadeInUp>
          )}

          {/* Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeInUp delay={0.3}>
              <Card className="p-6 md:p-8">
                <h2 className="font-semibold text-xl mb-4 text-red-600 dark:text-red-400">
                  The Problem
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.problem}
                </p>
              </Card>
            </FadeInUp>

            <FadeInUp delay={0.4}>
              <Card className="p-6 md:p-8">
                <h2 className="font-semibold text-xl mb-4 text-green-600 dark:text-green-400">
                  The Solution
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </Card>
            </FadeInUp>
          </div>

          {/* Role & Highlights */}
          <FadeInUp delay={0.5}>
            <Card className="p-6 md:p-8">
              <div className="space-y-6">
                <div>
                  <h2 className="font-semibold text-xl mb-3">My Role</h2>
                  <p className="text-muted-foreground">{project.role}</p>
                </div>

                <div>
                  <h2 className="font-semibold text-xl mb-4">Key Highlights</h2>
                  <div className="space-y-3">
                    {project.highlights.map((highlight: string, index: number) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <p className="text-muted-foreground">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </FadeInUp>

          {/* Outcomes */}
          <FadeInUp delay={0.6}>
            <Card className="p-6 md:p-8">
              <h2 className="font-semibold text-xl mb-4">Outcomes & Impact</h2>
              <div className="space-y-3">
                {project.outcomes.map((outcome: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 text-sm font-semibold flex items-center justify-center mt-0.5 flex-shrink-0">
                      ✓
                    </div>
                    <p className="text-muted-foreground">{outcome}</p>
                  </div>
                ))}
              </div>
            </Card>
          </FadeInUp>

          {/* Tech Stack & Learnings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeInUp delay={0.7}>
              <Card className="p-6 md:p-8">
                <h2 className="font-semibold text-xl mb-4 flex items-center">
                  <Tag className="w-5 h-5 mr-2" />
                  Tech Stack
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech: string) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            </FadeInUp>

            <FadeInUp delay={0.8}>
              <Card className="p-6 md:p-8">
                <h2 className="font-semibold text-xl mb-4 text-purple-600 dark:text-purple-400">
                  What I Learned
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.learnings}
                </p>
              </Card>
            </FadeInUp>
          </div>
        </div>

        {/* Navigation */}
        <FadeInUp delay={0.9}>
          <div className="flex flex-col sm:flex-row justify-between gap-4 mt-16 pt-8 border-t">
            <Button asChild variant="outline" className="min-h-[48px] px-6">
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                All Projects
              </Link>
            </Button>
            <Button asChild className="min-h-[48px] px-6">
              <Link href="/contact">
                Let's Work Together
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </FadeInUp>
      </div>
    </main>
  );
}