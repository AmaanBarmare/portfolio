"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Github, Linkedin, Send, Check, ArrowUpRight } from 'lucide-react';
import { FadeInUp } from '@/components/animations/fade-in-up';
import { toast } from 'sonner';
import personalData from '@/data/personal.json';

type ContactCard = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  description: string;
  display: string;
  href: string;
};

const cards: ContactCard[] = [
  {
    icon: Mail,
    label: 'Email',
    description: 'For everything else.',
    display: personalData.email,
    href: `mailto:${personalData.email}`,
  },
  {
    icon: Github,
    label: 'GitHub',
    description: 'Code I\'ve shipped.',
    display: 'AmaanBarmare',
    href: personalData.github,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    description: 'Roles and recruiters.',
    display: 'amaan-barmare-3bw',
    href: personalData.linkedin,
  },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send');

      setIsSubmitted(true);
      toast.success('Message sent. I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '', honeypot: '' });
    } catch {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="pointer-events-none absolute right-1/3 top-32 -z-10 h-[400px] w-[400px] rounded-full bg-primary/15 blur-[140px]" />

      <section className="container relative z-10 mx-auto max-w-4xl px-4 py-20 md:py-24">
        <FadeInUp>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            04 — Contact
          </p>
          <h1 className="mb-4 text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-primary via-indigo-400 to-teal-400 bg-clip-text text-transparent">
              Let&apos;s talk
            </span>
          </h1>
          <p className="mb-12 max-w-xl text-base text-muted-foreground md:text-lg">
            Reach out for roles, collaborations, or anything you&apos;re building.
          </p>
        </FadeInUp>

        <div className="mb-16 grid grid-cols-1 gap-4 md:grid-cols-3">
          {cards.map((card, index) => (
            <FadeInUp key={card.label} delay={0.05 * index}>
              <a
                href={card.href}
                target={card.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={card.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="group relative flex h-full flex-col rounded-xl border border-border/60 bg-card/40 p-5 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-card/60 hover:shadow-[0_0_28px_rgba(99,102,241,0.08)]"
              >
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md border border-border/60 bg-background/60">
                    <card.icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
                <p className="text-sm font-semibold tracking-tight">{card.label}</p>
                <p className="mb-3 text-xs text-muted-foreground">{card.description}</p>
                <p className="mt-auto break-all font-mono text-[11px] text-muted-foreground/80">
                  {card.display}
                </p>
              </a>
            </FadeInUp>
          ))}
        </div>

        <FadeInUp delay={0.2}>
          <div className="rounded-2xl border border-border/60 bg-card/40 p-6 backdrop-blur-sm md:p-8">
            <p className="mb-1 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Or send a message
            </p>
            <h2 className="mb-6 text-xl font-semibold tracking-tight">Drop a line</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleInputChange}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name" className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-2 min-h-[44px] bg-background/40"
                    autoComplete="name"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-2 min-h-[44px] bg-background/40"
                    autoComplete="email"
                    inputMode="email"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message" className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="mt-2 min-h-[140px] resize-none bg-background/40"
                  placeholder="What would you like to talk about?"
                  rows={6}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="min-h-[44px] px-6 font-mono text-sm tracking-tight"
              >
                {isSubmitting ? (
                  <>
                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    Sent
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send message
                  </>
                )}
              </Button>
            </form>
          </div>
        </FadeInUp>
      </section>
    </main>
  );
}
