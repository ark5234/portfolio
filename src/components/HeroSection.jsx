import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="container px-4 relative z-10 text-center hero-enter">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm font-medium text-muted-foreground">
          Open to new opportunities
        </div>

        <div className="relative py-4 mb-8">
          <div className="absolute -top-10 left-[10%] w-16 h-16 border-4 border-primary/20 rounded-2xl rotate-12 hidden md:block hero-float-slow motion-reduce:animate-none" />
          <div className="absolute top-20 right-[15%] w-20 h-20 border-4 border-blue-500/20 rounded-full hidden md:block hero-float-alt motion-reduce:animate-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-full blur-2xl hero-pulse motion-reduce:animate-none" />

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight relative z-10 mb-6">
            Hi, I'm <span className="text-gradient">Vikrant</span>
            <span className="inline-block animate-wave motion-reduce:animate-none origin-[70%_70%] ml-2">👋</span>
          </h1>

          <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
            A full-stack engineer dedicated to building high-performance applications and intelligent systems.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity w-full sm:w-auto"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-full border border-border bg-background hover:bg-secondary transition-colors w-full sm:w-auto font-medium"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-16 flex items-center justify-center gap-6 text-muted-foreground">
          <a
            href="https://github.com/ark5234"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open GitHub profile"
            className="hover:text-foreground transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/vikrant-kawadkar-0b9073251"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open LinkedIn profile"
            className="hover:text-foreground transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:vikrantkawadkar2099@gmail.com"
            aria-label="Send an email"
            className="hover:text-foreground transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce motion-reduce:animate-none">
        <ArrowDown className="w-5 h-5 text-muted-foreground" />
      </div>
    </section>
  );
};
