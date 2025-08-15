import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Code, Database, Cloud, Wrench, Palette } from 'lucide-react';
import { FadeInUp } from '@/components/animations/fade-in-up';
import skillsData from '@/data/skills.json';

export const metadata: Metadata = {
  title: 'Skills - Amaan Barmare',
  description: 'Explore Amaan Barmare\'s technical skills in programming languages, frameworks, tools, and cloud technologies.',
};

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    skills: skillsData.languages,
    color: 'text-blue-600 dark:text-blue-400',
    bgColor: 'bg-blue-100 dark:bg-blue-900',
  },
  {
    title: 'Frameworks & Libraries',
    icon: Palette,
    skills: [...skillsData.frameworks, ...skillsData.libraries],
    color: 'text-green-600 dark:text-green-400',
    bgColor: 'bg-green-100 dark:bg-green-900',
  },
  {
    title: 'Databases',
    icon: Database,
    skills: skillsData.databases,
    color: 'text-purple-600 dark:text-purple-400',
    bgColor: 'bg-purple-100 dark:bg-purple-900',
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    skills: skillsData.cloud,
    color: 'text-orange-600 dark:text-orange-400',
    bgColor: 'bg-orange-100 dark:bg-orange-900',
  },
  {
    title: 'Tools & Technologies',
    icon: Wrench,
    skills: skillsData.tools,
    color: 'text-teal-600 dark:text-teal-400',
    bgColor: 'bg-teal-100 dark:bg-teal-900',
  },
];

export default function SkillsPage() {
  return (
    <main id="main-content" className="min-h-screen px-4 py-16 md:py-20">
      <div className="container mx-auto max-w-6xl">
        <FadeInUp>
          <div className="text-center mb-16">
            <h1 className="text-[clamp(2rem,4.5vw,3rem)] font-bold mb-6">
              Skills & Technologies
            </h1>
            <p className="text-fluid-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of the technologies, frameworks, and tools I use to build 
              robust, scalable applications across different domains.
            </p>
          </div>
        </FadeInUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <FadeInUp key={category.title} delay={0.1 * index}>
              <Card className="p-6 md:p-8 hover:shadow-lg transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${category.bgColor}`}>
                      <category.icon className={`w-5 h-5 ${category.color}`} />
                    </div>
                    <h2 className="font-semibold text-xl">{category.title}</h2>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary"
                        className="transition-colors hover:bg-primary hover:text-primary-foreground cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </FadeInUp>
          ))}
        </div>

        {/* Proficiency Overview */}
        <FadeInUp delay={0.6}>
          <Card className="p-6 md:p-8 mb-16">
            <h2 className="font-semibold text-xl mb-6 text-center">Experience Levels</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="font-medium text-lg mb-3 text-green-600 dark:text-green-400">Advanced</h3>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">3+ years experience</p>
                  <div className="flex flex-wrap justify-center gap-1">
                    {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'C'].map(skill => (
                      <Badge key={skill} className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-lg mb-3 text-blue-600 dark:text-blue-400">Intermediate</h3>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">1-3 years experience</p>
                  <div className="flex flex-wrap justify-center gap-1">
                    {['Next.js', 'Express.js', 'MongoDB', 'AWS', 'Docker', 'Unity'].map(skill => (
                      <Badge key={skill} className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-lg mb-3 text-orange-600 dark:text-orange-400">Learning</h3>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Currently exploring</p>
                  <div className="flex flex-wrap justify-center gap-1">
                    {['Kubernetes', 'TensorFlow', 'GraphQL'].map(skill => (
                      <Badge key={skill} className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </FadeInUp>

        {/* Call to Action */}
        <FadeInUp delay={0.7}>
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4">Ready to Build Something Amazing?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and learn new technologies. 
              Let's discuss how we can work together on your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="min-h-[48px] px-8">
                <Link href="/projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="min-h-[48px] px-8">
                <Link href="/contact">
                  Get In Touch
                </Link>
              </Button>
            </div>
          </div>
        </FadeInUp>
      </div>
    </main>
  );
}