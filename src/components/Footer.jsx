import { Github, Linkedin, Twitter, Mail, FileText } from "lucide-react";

export const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-background relative overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="bg-card/30 border border-border/50 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden backdrop-blur-sm">
          {/* Content Grid */}
          <div className="grid lg:grid-cols-12 gap-12 mb-12">
            
            {/* Left Column: Brand & Info */}
            <div className="lg:col-span-5 space-y-6">
              <h3 className="text-2xl font-bold text-primary">Vikrant Kawadkar</h3>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                I design & engineer performant web platforms and ML-powered products. I value clarity, reliability & developer experience.
              </p>
              
              <div className="flex gap-3">
                <a href="mailto:vikrantkawadkar2099@gmail.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-medium hover:opacity-90 transition-opacity">
                  <Mail className="w-4 h-4" /> Email
                </a>
                <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:bg-secondary transition-colors">
                  <FileText className="w-4 h-4" /> Resume
                </a>
              </div>

              <div className="flex gap-3 pt-2">
                {[
                  { icon: Github, href: "https://github.com/ark5234" },
                  { icon: Linkedin, href: "https://linkedin.com/in/vikrant-kawadkar-0b9073251" },
                  { icon: Twitter, href: "https://x.com/KawadkarVikrant" },
                  { icon: Mail, href: "mailto:vikrantkawadkar2099@gmail.com" }
                ].map((social, i) => (
                  <a 
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-2 text-sm font-medium">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-muted-foreground">Open for Summer '26 SDE / AI Internship & Full-time</span>
              </div>
            </div>

            {/* Right Column: Stats Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-6 rounded-2xl bg-background/50 border border-border/50 flex flex-col justify-center text-center space-y-1">
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Experience</span>
                <span className="text-lg font-bold">&lt;1 year</span>
              </div>
              
              <div className="p-6 rounded-2xl bg-background/50 border border-border/50 flex flex-col justify-center text-center space-y-1 lg:col-span-2">
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Core Stack</span>
                <span className="text-lg font-bold">MERN • Python • Docker</span>
              </div>

              <div className="p-6 rounded-2xl bg-background/50 border border-border/50 flex flex-col justify-center text-center space-y-1 lg:col-span-2">
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Focus</span>
                <span className="text-lg font-bold">Scalable Systems & ML</span>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-500 to-pink-600 text-white flex flex-col justify-center text-center space-y-1 lg:col-span-2 shadow-lg shadow-orange-500/20">
                <span className="text-xs font-bold text-white/80 uppercase tracking-wider">Current Focus</span>
                <span className="text-lg font-bold">OJ Infra & AI Agents</span>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {year} Vikrant Kawadkar. All rights reserved.</p>
            <div className="flex items-center gap-4 text-xs md:text-sm">
              <span>Stack: React • Node • FastAPI • Docker • CI/CD</span>
              <span className="hidden md:inline">|</span>
              <span>Made with care & caffeine</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
