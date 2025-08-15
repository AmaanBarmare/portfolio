import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { FadeInUp } from '@/components/animations/fade-in-up';

export default function NotFound() {
  return (
    <main id="main-content" className="min-h-screen px-4 py-16 md:py-20">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center">
          <FadeInUp>
            <Card className="p-8 md:p-12">
              <div className="mb-8">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-teal-600/20 flex items-center justify-center">
                  <Search className="w-10 h-10 text-primary" />
                </div>
                
                <h1 className="text-[clamp(3rem,8vw,6rem)] font-bold text-muted-foreground/50 mb-4">
                  404
                </h1>
                
                <h2 className="text-xl font-semibold mb-4">
                  Page Not Found
                </h2>
                
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Sorry, the page you're looking for doesn't exist. It might have been moved, 
                  deleted, or you might have typed the wrong URL.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="min-h-[48px] px-8">
                    <Link href="/">
                      <Home className="mr-2 h-4 w-4" />
                      Go Home
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="min-h-[48px] px-8">
                    <Link href="/projects">
                      View Projects
                    </Link>
                  </Button>
                </div>

                <div className="pt-6 border-t">
                  <p className="text-sm text-muted-foreground mb-4">
                    Looking for something specific? Try these popular pages:
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Button asChild variant="ghost" size="sm">
                      <Link href="/about">About</Link>
                    </Button>
                    <Button asChild variant="ghost" size="sm">
                      <Link href="/experience">Experience</Link>
                    </Button>
                    <Button asChild variant="ghost" size="sm">
                      <Link href="/skills">Skills</Link>
                    </Button>
                    <Button asChild variant="ghost" size="sm">
                      <Link href="/contact">Contact</Link>
                    </Button>
                    <Button asChild variant="ghost" size="sm">
                      <Link href="/resume">Resume</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </FadeInUp>
        </div>
      </div>
    </main>
  );
}