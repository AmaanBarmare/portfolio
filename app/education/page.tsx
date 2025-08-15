import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, GraduationCap, Award, Users, Calendar } from 'lucide-react';
import { FadeInUp } from '@/components/animations/fade-in-up';
import personalData from '@/data/personal.json';
import Image from 'next/image';


export const metadata: Metadata = {
  title: 'Education - Amaan Barmare',
  description: 'Learn about Amaan Barmare\'s education at Penn State University, including his Computer Science degree, achievements, and extracurricular activities.',
};

export default function EducationPage() {
  const { education } = personalData;

  return (
    <main id="main-content" className="min-h-screen px-4 py-16 md:py-20">
      <div className="container mx-auto max-w-4xl">
        <FadeInUp>
          <div className="text-center mb-16">
            <h1 className="text-[clamp(2rem,4.5vw,3rem)] font-bold mb-6">
              Education
            </h1>
            <p className="text-fluid-lg text-muted-foreground max-w-2xl mx-auto">
              My academic journey at Penn State University, where I'm building a strong foundation 
              in computer science and economics while actively participating in tech communities.
            </p>
          </div>
        </FadeInUp>

        <div className="space-y-8">
          {/* Main Education Card */}
          <FadeInUp delay={0.1}>
            <Card className="p-6 md:p-8 bg-gradient-to-br from-primary/5 to-teal-600/5 border-primary/20">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg overflow-hidden bg-primary/10 flex items-center justify-center">
                      <Image
                        src="/pennstatelogo.jpeg"
                        alt="Penn State Logo"
                        width={50}
                        height={50}
                        className="object-contain"
                      />
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold">{education.school}</h2>
                      <p className="text-muted-foreground">{education.location}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">{education.degree}</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        Major: {education.major}
                      </Badge>
                      <Badge variant="outline">
                        Minor: {education.minor}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>Expected Graduation: {education.graduationDate}</span>
                  </div>
                </div>

                <div className="text-center lg:text-right">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-teal-600 text-white mb-3">
                    <span className="text-2xl font-bold">2025</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Graduation Year</p>
                </div>
              </div>
            </Card>
          </FadeInUp>

          {/* Achievements */}
          <FadeInUp delay={0.2}>
            <Card className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-5 h-5 text-yellow-600" />
                <h2 className="text-xl font-semibold">Academic Achievements</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {education.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
                    <div className="w-2 h-2 rounded-full bg-yellow-600 mt-2 flex-shrink-0" />
                    <span className="text-sm font-medium">{achievement}</span>
                  </div>
                ))}
              </div>
            </Card>
          </FadeInUp>

          {/* Extracurricular Activities */}
          <FadeInUp delay={0.3}>
            <Card className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-semibold">Involvement & Leadership</h2>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800">
                  <h3 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
                    Google Developer Student Club
                  </h3>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Active member participating in workshops, hackathons, and collaborative projects 
                    focused on emerging technologies and developer best practices.
                  </p>
                </div>
                
                <div className="p-4 rounded-lg bg-teal-50 dark:bg-teal-950 border border-teal-200 dark:border-teal-800">
                  <h3 className="font-medium text-teal-900 dark:text-teal-100 mb-2">
                    Nittany Data Labs
                  </h3>
                  <p className="text-sm text-teal-700 dark:text-teal-300">
                    Contributing to data science and analytics projects, working with real-world datasets 
                    to solve complex problems and gain hands-on experience.
                  </p>
                </div>
                
                <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950 border border-purple-200 dark:border-purple-800">
                  <h3 className="font-medium text-purple-900 dark:text-purple-100 mb-2">
                    Nittany AI Alliance
                  </h3>
                  <p className="text-sm text-purple-700 dark:text-purple-300">
                    Exploring artificial intelligence applications and staying current with ML/AI trends 
                    through peer collaboration and research initiatives.
                  </p>
                </div>
              </div>
            </Card>
          </FadeInUp>

          {/* Academic Focus */}
          <FadeInUp delay={0.4}>
            <Card className="p-6 md:p-8">
              <h2 className="text-xl font-semibold mb-6">Academic Focus</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-primary mb-3">Computer Science</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Data Structures & Algorithms
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Systems Programming
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Software Engineering
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Machine Learning
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-teal-600 mb-3">Economics</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                      Microeconomic Theory
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                      Econometrics
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                      Market Analysis
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                      Business Strategy
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </FadeInUp>
        </div>

        {/* Call to Action */}
        <FadeInUp delay={0.5}>
          <div className="text-center mt-16">
            <h2 className="text-xl font-semibold mb-4">Ready to Graduate and Make an Impact</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              With a strong academic foundation and hands-on experience, I'm excited to bring my 
              skills to a dynamic team and contribute to innovative projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="min-h-[48px] px-8">
                <Link href="/experience">
                  View Experience
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