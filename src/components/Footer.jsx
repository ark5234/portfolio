import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export const Footer = () => {
  const year = new Date().getFullYear();
  const socials = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/ark5234", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com/in/vikrant-kawadkar-0b9073251", label: "LinkedIn" },
    { icon: <Twitter className="h-5 w-5" />, href: "https://x.com/KawadkarVikrant", label: "Twitter" },
    { icon: <Mail className="h-5 w-5" />, href: "mailto:vikrantkawadkar2099@gmail.com", label: "Email" },
  ];
  const stats = [
    { label: "Experience", value: "~2+ yrs" },
    { label: "Core Stack", value: "MERN · Python · Docker" },
    { label: "Focus", value: "Scalable Systems & ML" },
  ];
  return (
  <footer className="footer-panel footer-dark mt-14 relative px-4 md:px-8 pt-12 pb-10 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-10 dark:opacity-[0.16] bg-[radial-gradient(circle_at_18%_22%,rgba(255,176,90,0.55),transparent_62%),radial-gradient(circle_at_82%_78%,rgba(120,180,255,0.5),transparent_65%)]" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10/5 to-white/5 backdrop-blur-sm px-8 md:px-12 py-8 md:py-9 shadow-[0_0_0_1px_rgba(255,255,255,0.07),0_6px_26px_-10px_rgba(0,0,0,0.6)]">
          <div className="flex flex-wrap items-start justify-between gap-10">
            {/* Left cluster */}
      <div className="flex flex-col gap-4 max-w-xs items-start">
              <div>
        <h3 className="text-base md:text-lg font-bold footer-owner tracking-tight text-left">Vikrant Kawadkar</h3>
                <p className="mt-2 text-[11px] md:text-xs leading-relaxed text-slate-300 text-left">
                  I design & engineer performant web platforms and ML‑powered products. I value clarity, reliability & developer experience.
                </p>
              </div>
              <div className="flex items-center gap-2 justify-start">
                {socials.map(s => (
                  <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer" className="group p-2 rounded-xl bg-white/10 hover:bg-orange-500 transition-colors border border-white/10">
                    <span className="text-slate-300 group-hover:text-white">{s.icon}</span>
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-2 text-[10px] font-medium text-slate-300 justify-start">
                <span className="relative flex h-3 w-3"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span><span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span></span>
                <span>Open for Summer '26 SDE / AI Internship & Full‑time</span>
              </div>
            </div>
            {/* Right grid: stats row + aligned actions below specific columns */}
            <div className="flex flex-col gap-4 grow min-w-[340px] max-w-5xl">
              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map(s => (
                  <div key={s.label} className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-center">
                    <span className="text-[10px] uppercase tracking-wide text-slate-400 font-semibold">{s.label}</span>
                    <span className="text-[11px] font-semibold text-slate-100">{s.value}</span>
                  </div>
                ))}
                <div className="px-5 py-3 rounded-xl bg-gradient-to-br from-orange-500/90 to-pink-500/90 text-white flex flex-col justify-center">
                  <span className="text-[10px] uppercase tracking-wide font-semibold">Current Focus</span>
                  <span className="text-[11px] font-medium">OJ Infra & AI Agents</span>
                </div>
              </div>
              {/* Actions Row compact & equidistant */}
              <div className="grid grid-cols-[auto_auto_1fr] gap-3 md:gap-4 items-center">
                <a href="mailto:vikrantkawadkar2099@gmail.com" className="inline-flex justify-center items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white text-[11px] font-medium shadow hover:shadow-md hover:scale-[1.02] active:scale-95 transition-all">
                  <Mail className="h-4 w-4" /> Email
                </a>
                <a href="/resume.pdf" download className="inline-flex justify-center items-center gap-1.5 px-4 py-2 rounded-full border border-orange-400/60 text-orange-300 text-[11px] font-medium bg-white/5 hover:bg-orange-500 hover:text-white transition-colors shadow">
                  Resume
                </a>
                <p className="text-[10px] leading-relaxed text-slate-400 text-left md:text-left truncate md:whitespace-normal">Type-safe APIs, production observability & pragmatic AI workflows.<span className="text-slate-300"></span></p>
              </div>
            </div>
          </div>
          {/* Meta bar inside box */}
          <div className="mt-6 pt-4 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-[10px] md:text-[11px] tracking-wide text-slate-500">
            <p>&copy; {year} Vikrant Kawadkar. All rights reserved.</p>
            <p className="flex flex-wrap items-center gap-2"><span>Stack: React • Node • FastAPI • Docker • CI/CD</span><span className="hidden sm:inline">|</span><span>Made with care & caffeine</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
};
