import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, ExternalLink, ArrowLeft } from 'lucide-react';
import { FadeInUp } from '@/components/animations/fade-in-up';

export const metadata: Metadata = {
  title: 'Resume - Amaan Barmare',
  description: 'View and download Amaan Barmare\'s resume showcasing his software engineering experience, education, and skills.',
};

export default function ResumePage() {
  return (
    <main id="main-content" className="min-h-screen px-4 py-16 md:py-20">
      <div className="container mx-auto max-w-4xl">
        <FadeInUp>
          <Button
            asChild
            variant="ghost"
            className="mb-8 -ml-4 hover:bg-transparent hover:text-primary"
          >
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </FadeInUp>

        <div className="space-y-8">
          <FadeInUp delay={0.1}>
            <div className="text-center">
              <h1 className="text-[clamp(2rem,4.5vw,3rem)] font-bold mb-6">
                Resume
              </h1>
              <p className="text-fluid-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Download my complete resume or view it online to learn more about my experience, 
                skills, and educational background.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button asChild size="lg" className="min-h-[48px] px-8">
                  <a
                    href="/AmaanBarmareResume.pdf"
                    download="AmaanBarmare_Resume.pdf"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="min-h-[48px] px-8">
                  <a
                    href="/AmaanBarmareResume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View in New Tab
                  </a>
                </Button>
              </div>
            </div>
          </FadeInUp>

          {/* Resume Preview */}
          <FadeInUp delay={0.2}>
            <Card className="overflow-hidden">
              <div className="aspect-[8.5/11] w-full bg-white">
                <iframe
                  src="/AmaanBarmareResume.pdf"
                  className="w-full h-full border-0"
                  title="Amaan Barmare Resume"
                />
              </div>
            </Card>
          </FadeInUp>

          {/* Quick Links */}
          <FadeInUp delay={0.3}>
            <Card className="p-6 md:p-8">
              <h2 className="text-xl font-semibold mb-6 text-center">Explore More</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button asChild variant="outline" className="min-h-[48px]">
                  <Link href="/experience">
                    View Experience
                  </Link>
                </Button>
                <Button asChild variant="outline" className="min-h-[48px]">
                  <Link href="/projects">
                    View Projects
                  </Link>
                </Button>
                <Button asChild variant="outline" className="min-h-[48px]">
                  <Link href="/skills">
                    Technical Skills
                  </Link>
                </Button>
                <Button asChild variant="outline" className="min-h-[48px]">
                  <Link href="/contact">
                    Get In Touch
                  </Link>
                </Button>
              </div>
            </Card>
          </FadeInUp>

          {/* Contact CTA */}
          <FadeInUp delay={0.4}>
            <div className="text-center pt-8 border-t">
              <h2 className="text-lg font-semibold mb-4">Interested in Working Together?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm always open to discussing new opportunities and exciting projects. 
                Let's connect and explore how we can collaborate.
              </p>
              <Button asChild size="lg" className="min-h-[48px] px-8">
                <Link href="/contact">
                  Start a Conversation
                </Link>
              </Button>
            </div>
          </FadeInUp>
        </div>
      </div>
    </main>
  );
}