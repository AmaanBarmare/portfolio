import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, MapPin, Calendar, Building } from 'lucide-react';
import { FadeInUp } from '@/components/animations/fade-in-up';
import experiencesData from '@/data/experiences.json';
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Experience - Amaan Barmare',
  description: 'Explore Amaan Barmare\'s professional experience, including internships at Mu Sigma and Augle AI, and academic roles at Penn State University.',
};

export default function ExperiencePage() {
  const sortedExperiences = [...experiencesData].sort((a, b) => {
    // Sort by status first (current first), then by timeframe
    if (a.status === 'current') return -1;
    if (b.status === 'current') return 1;
    return 0;
  });

  return (
    <main id="main-content" className="min-h-screen px-4 py-16 md:py-20">
      <div className="container mx-auto max-w-4xl">
        <FadeInUp>
          <div className="text-center mb-16">
            <h1 className="text-[clamp(2rem,4.5vw,3rem)] font-bold mb-6">
              Professional Experience
            </h1>
            <p className="text-fluid-lg text-muted-foreground max-w-2xl mx-auto">
              My journey through software engineering, from internships to academic roles, 
              building scalable solutions and learning from every opportunity.
            </p>
          </div>
        </FadeInUp>

        <div className="space-y-8">
          {sortedExperiences.map((experience, index) => (
            <FadeInUp key={experience.id} delay={0.1 * index}>
              <Card className="p-6 md:p-8 hover:shadow-lg transition-all duration-300 border-border/50 group">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  {/* Main Content */}
                  <div className="flex-1 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 flex-wrap">
                        {/* Show logo if exists */}
                        {experience.logo && (
                          <Image
                            src={experience.logo}
                            alt={`${experience.company} logo`}
                            width={32}
                            height={32}
                            className="rounded-sm object-contain border border-border/50 bg-background"
                          />
                        )}

                        <h2 className="font-semibold text-xl group-hover:text-primary transition-colors">
                          {experience.title}
                        </h2>

                        {experience.status === 'current' && (
                          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                            Current
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-4 text-muted-foreground text-sm flex-wrap">
                        <div className="flex items-center gap-1">
                          {!experience.logo && <Building className="w-4 h-4" />}
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

                    <p className="text-muted-foreground">
                      {experience.shortDescription}
                    </p>

                    <div className="space-y-3">
                      <h3 className="font-medium text-sm">Key Accomplishments:</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {experience.quickRead.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="space-y-2">
                      <p className="font-medium text-sm">Technologies Used:</p>
                      <div className="flex flex-wrap gap-2">
                        {experience.stack.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="flex-shrink-0">
                    <Button 
                      asChild 
                      variant="outline" 
                      className="min-h-[48px] px-6 group-hover:border-primary group-hover:text-primary transition-colors"
                    >
                      <Link href={`/experience/${experience.id}`}>
                        Read Full Story
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </FadeInUp>
          ))}
        </div>

        <FadeInUp delay={0.4}>
          <div className="text-center mt-16">
            <h2 className="text-xl font-semibold mb-4">Ready to Work Together?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always interested in new opportunities to create impactful software solutions. 
              Let's discuss how we can work together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="min-h-[48px] px-8">
                <Link href="/contact">
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="min-h-[48px] px-8">
                <Link href="/resume">
                  View Resume
                </Link>
              </Button>
            </div>
          </div>
        </FadeInUp>
      </div>
    </main>
  );
}