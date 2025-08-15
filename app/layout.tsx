import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Amaan Barmare - Software Engineer | Full-Stack & AI',
  description: 'I build intelligent, scalable apps across web, data, and ML. BS CS + Econ student at Penn State, graduating May 2025.',
  keywords: ['Software Engineer', 'Full-Stack Developer', 'AI', 'Machine Learning', 'React', 'Next.js', 'TypeScript'],
  authors: [{ name: 'Amaan Barmare' }],
  creator: 'Amaan Barmare',
  metadataBase: new URL('https://amaanbarmare.dev'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://amaanbarmare.dev',
    title: 'Amaan Barmare - Software Engineer | Full-Stack & AI',
    description: 'I build intelligent, scalable apps across web, data, and ML.',
    siteName: 'Amaan Barmare Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amaan Barmare - Software Engineer | Full-Stack & AI',
    description: 'I build intelligent, scalable apps across web, data, and ML.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}