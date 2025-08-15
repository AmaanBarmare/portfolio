import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Building, MapPin, Calendar, ExternalLink } from 'lucide-react';
import { FadeInUp } from '@/components/animations/fade-in-up';
import { ReadingToggle } from '@/components/reading-toggle';
import experiencesData from '@/data/experiences.json';
import Image from "next/image";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const experience = experiencesData.find(exp => exp.id === params.slug);
  
  if (!experience) {
    return {
      title: 'Experience Not Found - Amaan Barmare',
    };
  }

  return {
    title: `${experience.title} at ${experience.company} - Amaan Barmare`,
    description: experience.shortDescription,
  };
}

export function generateStaticParams() {
  return experiencesData.map((experience) => ({
    slug: experience.id,
  }));
}

export default function ExperienceDetailPage({ params }: Props) {
  const experience = experiencesData.find(exp => exp.id === params.slug);

  if (!experience) {
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
            <Link href="/experience">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Experience
            </Link>
          </Button>
        </FadeInUp>

        <div className="space-y-8">
          {/* Header */}
          <FadeInUp delay={0.1}>
            <Card className="p-6 md:p-8">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                      {experience.logo && (
                        <Image
                          src={experience.logo} // e.g., "/mu-sigma.png"
                          alt={`${experience.company} logo`}
                          width={40}
                          height={40}
                          className="rounded-sm object-contain border border-border/50 bg-background"
                        />
                      )}
                      <h1 className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold">
                        {experience.title}
                      </h1>
                      {experience.status === 'current' && (
                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                          Current
                        </Badge>
                      )}
                    </div>

                  
                  <div className="flex items-center gap-4 text-muted-foreground flex-wrap">
                    <div className="flex items-center gap-1">
                      <Building className="w-4 h-4" />
                      {experience.company}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {experience.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {experience.timeframe}
                    </div>
                  </div>
                </div>

                <p className="text-fluid-base text-muted-foreground">
                  {experience.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2">
                  {experience.stack.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </FadeInUp>

          {/* Reading Toggle */}
          <FadeInUp delay={0.2}>
            <ReadingToggle
              quickContent={
                <Card className="p-6 md:p-8">
                  <h2 className="font-semibold text-xl mb-6">Key Accomplishments</h2>
                  <div className="space-y-4">
                    {experience.quickRead.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <p className="text-muted-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              }
              fullContent={
                experience.fullStory && (
                  <div className="space-y-8">
                    {/* Problem */}
                    <Card className="p-6 md:p-8">
                      <h2 className="font-semibold text-xl mb-4 text-red-600 dark:text-red-400">
                        The Challenge
                      </h2>
                      <p className="text-muted-foreground leading-relaxed">
                        {experience.fullStory.problem}
                      </p>
                    </Card>

                    {/* Actions */}
                    <Card className="p-6 md:p-8">
                      <h2 className="font-semibold text-xl mb-4 text-blue-600 dark:text-blue-400">
                        My Actions
                      </h2>
                      <div className="space-y-4">
                        {experience.fullStory.actions.map((action, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 text-sm font-semibold flex items-center justify-center mt-0.5 flex-shrink-0">
                              {index + 1}
                            </div>
                            <p className="text-muted-foreground leading-relaxed">{action}</p>
                          </div>
                        ))}
                      </div>
                    </Card>

                    {/* Results */}
                    <Card className="p-6 md:p-8">
                      <h2 className="font-semibold text-xl mb-4 text-green-600 dark:text-green-400">
                        Results & Impact
                      </h2>
                      <div className="space-y-4">
                        {experience.fullStory.impact.map((result, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-green-600 mt-2 flex-shrink-0" />
                            <p className="text-muted-foreground leading-relaxed">{result}</p>
                          </div>
                        ))}
                      </div>
                    </Card>

                    {/* Learnings */}
                    <Card className="p-6 md:p-8">
                      <h2 className="font-semibold text-xl mb-4 text-purple-600 dark:text-purple-400">
                        What I Learned
                      </h2>
                      <p className="text-muted-foreground leading-relaxed">
                        {experience.fullStory.learnings}
                      </p>
                    </Card>
                  </div>
                )
              }
            />
          </FadeInUp>
        </div>

        {/* Navigation */}
        <FadeInUp delay={0.3}>
          <div className="flex flex-col sm:flex-row justify-between gap-4 mt-16 pt-8 border-t">
            <Button asChild variant="outline" className="min-h-[48px] px-6">
              <Link href="/experience">
                <ArrowLeft className="mr-2 h-4 w-4" />
                All Experience
              </Link>
            </Button>
            <Button asChild className="min-h-[48px] px-6">
              <Link href="/projects">
                View Projects
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </FadeInUp>
      </div>
    </main>
  );
}