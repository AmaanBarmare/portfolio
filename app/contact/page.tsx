"use client";

import { useState } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Github, Linkedin, MapPin, Phone, Send, Check } from 'lucide-react';
import { FadeInUp } from '@/components/animations/fade-in-up';
import { toast } from 'sonner';
import personalData from '@/data/personal.json';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '', // Anti-spam field
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check honeypot
    if (formData.honeypot) {
      return; // Spam detected
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission (replace with actual endpoint)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      toast.success('Message sent successfully! I\'ll get back to you soon.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
        honeypot: '',
      });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalData.email,
      href: `mailto:${personalData.email}`,
      copyable: true,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalData.phone,
      href: `tel:${personalData.phone}`,
      copyable: true,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalData.location,
      href: null,
      copyable: false,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: personalData.github,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: personalData.linkedin,
    },
  ];

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard!`);
  };

  return (
    <main id="main-content" className="min-h-screen px-4 py-16 md:py-20">
      <div className="container mx-auto max-w-4xl">
        <FadeInUp>
          <div className="text-center mb-16">
            <h1 className="text-[clamp(2rem,4.5vw,3rem)] font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-fluid-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in new opportunities, collaborations, and conversations about technology. 
              Let's connect and explore how we can work together.
            </p>
          </div>
        </FadeInUp>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <FadeInUp delay={0.1}>
              <Card className="p-6 md:p-8">
                <h2 className="text-xl font-semibold mb-6">Send me a message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot field (hidden) */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleInputChange}
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-2 min-h-[48px]"
                        autoComplete="name"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-2 min-h-[48px]"
                        autoComplete="email"
                        inputMode="email"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-2 min-h-[120px] resize-none"
                      placeholder="Tell me about your project, opportunity, or just say hello..."
                      rows={5}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full min-h-[48px] px-8"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <Check className="w-4 h-4 mr-2" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    I typically respond within 24 hours. All inquiries are welcome!
                  </p>
                </form>
              </Card>
            </FadeInUp>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            <FadeInUp delay={0.2}>
              <Card className="p-6">
                <h3 className="font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  {contactMethods.map((method) => (
                    <div key={method.label} className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-muted flex-shrink-0">
                        <method.icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium">{method.label}</p>
                        {method.href ? (
                          <a
                            href={method.href}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                          >
                            {method.value}
                          </a>
                        ) : (
                          <p className="text-sm text-muted-foreground">{method.value}</p>
                        )}
                        {method.copyable && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-6 px-2 text-xs mt-1"
                            onClick={() => copyToClipboard(method.value, method.label)}
                          >
                            Copy
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </FadeInUp>

            <FadeInUp delay={0.3}>
              <Card className="p-6">
                <h3 className="font-semibold mb-4">Follow Me</h3>
                <div className="space-y-3">
                  {socialLinks.map((link) => (
                    <Button
                      key={link.label}
                      asChild
                      variant="outline"
                      className="w-full min-h-[44px] justify-start"
                    >
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <link.icon className="w-4 h-4 mr-3" />
                        {link.label}
                      </a>
                    </Button>
                  ))}
                </div>
              </Card>
            </FadeInUp>

            <FadeInUp delay={0.4}>
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-teal-600/5 border-primary/20">
                <h3 className="font-semibold mb-2 text-primary">Quick Response</h3>
                <p className="text-sm text-muted-foreground">
                  Need something urgent? Feel free to call or text me directly. 
                  I'm usually available during business hours EST.
                </p>
              </Card>
            </FadeInUp>
          </div>
        </div>

        {/* Alternative Contact */}
        <FadeInUp delay={0.5}>
          <div className="text-center mt-16 pt-8 border-t">
            <h2 className="text-lg font-semibold mb-4">Prefer a Different Approach?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              You can also download my resume or connect with me directly on professional platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline" size="lg" className="min-h-[48px] px-8">
                <Link href="/resume">
                  View Resume
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="min-h-[48px] px-8">
                <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn Profile
                </a>
              </Button>
            </div>
          </div>
        </FadeInUp>
      </div>
    </main>
  );
}