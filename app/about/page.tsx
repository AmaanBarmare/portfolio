import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, MapPin, GraduationCap } from 'lucide-react';
import { FadeInUp } from '@/components/animations/fade-in-up';
import personalData from '@/data/personal.json';

export const metadata: Metadata = {
  title: 'About - Amaan Barmare',
  description: 'Learn more about Amaan Barmare, a Computer Science and Economics student at Penn State University, passionate about building intelligent, scalable applications.',
};

export default function AboutPage() {
  return (
    <main id="main-content" className="min-h-screen px-4 py-16 md:py-20">
      <div className="container mx-auto max-w-4xl">
        <FadeInUp>
          <div className="text-center mb-16">
            <h1 className="text-[clamp(2rem,4.5vw,3rem)] font-bold mb-6">
              About Me
            </h1>
            <p className="text-fluid-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating technology that makes a meaningful impact on people's lives.
            </p>
          </div>
        </FadeInUp>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <FadeInUp delay={0.1}>
              <Card className="p-6 md:p-8">
                <h2 className="text-xl font-semibold mb-4">Who I Am</h2>
                <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground space-y-4">
                  <p>
                    I’m a recent Computer Science graduate from Penn State with a minor in Economics, passionate about building intelligent, high-impact software. Over the past few years, I’ve explored the spectrum of development — from backend systems and data pipelines to full-stack platforms and AI-powered solutions.
                  </p>
                  <p>
                    During my two Software Engineering internships at Augle AI, I built scalable data pipelines, machine vision systems, and real-time notification tools using Python, Flask, MongoDB, OpenCV, and PyTorch. Outside of work, I’ve developed full-stack projects like a job portal and a stock monitoring bot using the MERN stack, Next.js, and Cloudinary.
                  </p>
                  <p>
                    For me, development is about more than just writing code — it’s about creating tools that are scalable, intuitive, and genuinely useful. Whether it’s optimizing backend performance, designing user-friendly interfaces, or integrating AI to solve complex problems, I aim to deliver solutions that make a difference.
                  </p>
                </div>
              </Card>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <Card className="p-6 md:p-8">
                <h2 className="text-xl font-semibold mb-4">What Drives Me</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Honestly, what excites me most is when tech feels alive — when an application doesn’t just work, 
                    but starts to understand its users, adapt to them, and almost feel like it’s thinking with you. 
                    That’s why I’m drawn to the overlap between AI and web development. It’s not just about pushing 
                    out features; it’s about creating products that get smarter over time and make life easier in 
                    ways people didn’t expect.
                  </p>
                  <p>
                    I think my economics background shapes how I build — I’m not just asking, “Can this be done?” 
                    but also, “Does it make sense for the people using it? Will it actually create value?” Pair 
                    that with my computer science training, and I end up approaching problems from both a technical 
                    and a practical angle. I like solutions that are clean in code, smart in design, and meaningful 
                    in the real world.
                  </p>
                </div>
              </Card>
            </FadeInUp>


            <FadeInUp delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="min-h-[48px] flex-1">
                  <Link href="/projects">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="min-h-[48px] flex-1">
                  <Link href="/contact">
                    Get In Touch
                  </Link>
                </Button>
              </div>
            </FadeInUp>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <FadeInUp delay={0.1}>
              <Card className="p-6 text-center">
                <Image
                  src="/profile.jpeg"             // file you put in /public
                  alt="Amaan Barmare"
                  width={96}
                  height={96}
                  priority
                  className="mx-auto mb-4 rounded-full object-cover border border-border"
                />

                <h3 className="font-semibold text-lg mb-2">{personalData.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{personalData.title}</p>
                <div className="flex items-center justify-center text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-1" />
                  {personalData.location}
                </div>
              </Card>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <Card className="p-6">
                <h3 className="font-semibold mb-4 flex items-center">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  Education
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium">{personalData.education.degree}</p>
                    <p className="text-muted-foreground">{personalData.education.major}</p>
                    <p className="text-muted-foreground">{personalData.education.minor} Minor</p>
                  </div>
                  <div>
                    <p className="font-medium">{personalData.education.school}</p>
                    <p className="text-muted-foreground">{personalData.education.graduationDate}</p>
                  </div>
                </div>
              </Card>
            </FadeInUp>

          

          </div>
        </div>
      </div>
    </main>
  );
}