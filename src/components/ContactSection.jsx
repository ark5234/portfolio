import React, { useState } from 'react';
import { Mail, MapPin, Send, Copy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CONTACT_ENDPOINT = (import.meta.env.VITE_CONTACT_ENDPOINT ?? "").trim();

export const ContactSection = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("vikrantkawadkar2099@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast({ description: "Email copied to clipboard" });
    } catch {
      toast({
        title: "Copy failed",
        description: "Please copy the email address manually.",
        variant: "destructive",
      });
    }
  };

  const openMailClient = ({ name, email, subject, message }) => {
    const composedSubject = encodeURIComponent(`[Portfolio] ${subject} - ${name}`);
    const composedBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.location.href = `mailto:vikrantkawadkar2099@gmail.com?subject=${composedSubject}&body=${composedBody}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "Project Inquiry").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !message) {
      toast({
        title: "Missing details",
        description: "Please complete name, email, and message before sending.",
        variant: "destructive",
      });
      return;
    }

    if (CONTACT_ENDPOINT) {
      setIsSubmitting(true);
      try {
        const response = await fetch(CONTACT_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            subject,
            message,
            _subject: `[Portfolio] ${subject} - ${name}`,
          }),
        });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        toast({
          title: "Message sent",
          description: "Thanks for reaching out. I will get back to you soon.",
        });
        form.reset();
        return;
      } catch {
        toast({
          title: "Online submit unavailable",
          description: "Opening your email app as a fallback.",
          variant: "destructive",
        });
      } finally {
        setIsSubmitting(false);
      }
    }

    openMailClient({ name, email, subject, message });

    toast({
      title: "Opening your email app",
      description: "A pre-filled message is ready for you to send.",
    });

    form.reset();
  };

  return (
    <section id="contact" className="content-auto py-20 md:py-32 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />

      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Text & Info */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Available for work
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Let's build something <br />
                <span className="text-gradient">extraordinary.</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
                Whether you have a project in mind or just want to chat about tech, I'm always open to new opportunities and collaborations.
              </p>
            </div>

            <div className="space-y-4">
              <button
                className="w-full text-left flex items-center gap-4 p-4 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/50 transition-colors group"
                onClick={copyEmail}
                type="button"
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <p className="text-sm text-muted-foreground">Email me at</p>
                  <p className="font-medium text-foreground">vikrantkawadkar2099@gmail.com</p>
                </div>
                <span className="p-2 text-muted-foreground group-hover:text-primary transition-colors">
                  {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                </span>
              </button>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/50 transition-colors group">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Based in</p>
                  <p className="font-medium text-foreground">Ahmedabad, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-[2rem] blur opacity-20" />
            <form onSubmit={handleSubmit} className="relative p-6 md:p-10 rounded-[1.5rem] bg-card border border-border shadow-2xl space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium ml-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border-2 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium ml-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    autoComplete="email"
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border-2 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium ml-1">Subject</label>
                <select 
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border-2 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none"
                >
                  <option>Project Inquiry</option>
                  <option>Freelance Opportunity</option>
                  <option>Job Offer</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium ml-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border-2 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : CONTACT_ENDPOINT ? "Send Message" : "Send via Email"} <Send className="w-5 h-5" />
              </button>

              <p className="text-xs text-muted-foreground text-center">
                {CONTACT_ENDPOINT
                  ? "Messages are sent directly without requiring a local mail client."
                  : "Set VITE_CONTACT_ENDPOINT to enable direct form delivery (Formspree, Netlify Forms, or your API)."}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
