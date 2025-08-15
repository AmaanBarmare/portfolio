import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/AmaanBarmare',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/amaan-barmare-3bw',
    icon: Linkedin,
  },
  {
    name: 'Email',
    href: 'mailto:amaan.barmare03@gmail.com',
    icon: Mail,
  },
];

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center space-y-6 sm:flex-row sm:justify-between sm:space-y-0">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-lg font-bold gradient-text hover:opacity-80 transition-opacity focus-ring rounded-sm"
          >
            Amaan Barmare
          </Link>

          {/* Social Links */}
          <div className="flex items-center space-x-2">
            {socialLinks.map((link) => (
              <Button
                key={link.name}
                variant="ghost"
                size="sm"
                asChild
                className="focus-ring min-h-[44px] min-w-[44px] p-2"
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  <link.icon className="h-4 w-4" />
                </a>
              </Button>
            ))}
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>© 2025 Amaan Barmare. All rights reserved.</p>
          <p className="mt-1">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}