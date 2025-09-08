import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { ThemeToggle} from "./ThemeToggel";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [isDarkMode, setIsDarkMode] = useState(() => document.documentElement.classList.contains('dark'));
  // Watch for theme changes (MutationObserver catches class toggles from ThemeToggle)
  useEffect(() => {
    const root = document.documentElement;
    const update = () => setIsDarkMode(root.classList.contains('dark'));
    update();
    const observer = new MutationObserver(update);
    observer.observe(root, { attributes: true, attributeFilter: ['class'] });
    window.addEventListener('storage', update);
    return () => { observer.disconnect(); window.removeEventListener('storage', update); };
  }, []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const overlayRef = useRef(null);
  const startYRef = useRef(null);
  const bodyScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section observer
  useEffect(() => {
    const ids = navItems.map(i => i.href.replace('#',''));
    const sections = ids.map(id => document.getElementById(id)).filter(Boolean);
    if(!sections.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          setActive(entry.target.id);
        }
      });
    }, { rootMargin: "-40% 0px -50% 0px", threshold:[0,0.25,0.5,0.75,1]});
    sections.forEach(sec => io.observe(sec));
    return () => io.disconnect();
  }, []);

  // Robust body scroll lock (iOS-safe) when mobile menu is open
  useEffect(() => {
    const body = document.body;
    if (isMenuOpen) {
      bodyScrollYRef.current = window.scrollY;
      body.style.position = "fixed";
      body.style.top = `-${bodyScrollYRef.current}px`;
      body.style.width = "100%";
      body.style.overflow = "hidden";
    } else {
      const y = -parseInt(body.style.top || "0", 10) || 0;
      body.style.position = "";
      body.style.top = "";
      body.style.width = "";
      body.style.overflow = "";
      if (y) window.scrollTo(0, y);
    }
    return () => {
      body.style.position = "";
      body.style.top = "";
      body.style.width = "";
      body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Close menu on swipe-up gesture on the overlay
  useEffect(() => {
    const el = overlayRef.current;
    if (!el) return;
    const onTouchStart = (e) => {
      startYRef.current = e.touches?.[0]?.clientY ?? null;
    };
    const onTouchMove = (e) => {
      if (startYRef.current == null) return;
      const currentY = e.touches?.[0]?.clientY ?? startYRef.current;
      const delta = currentY - startYRef.current; // negative = swipe up
      if (delta < -60) {
        setIsMenuOpen(false);
        startYRef.current = null;
      }
    };
    const onTouchEnd = () => {
      startYRef.current = null;
    };
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [isMenuOpen]);


  return (
    <nav className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-full pointer-events-none px-4 md:px-6">
      {/* Dynamic Island Shell */}
      <div className={cn(
        "mx-auto flex items-center justify-between gap-6 transition-all duration-500 pointer-events-auto",
        "rounded-3xl shadow-[0_4px_28px_-8px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.35)] backdrop-blur-xl",
        "px-5 md:px-8",
        isScrolled ? "h-16 md:h-20 w-[min(1100px,92%)] bg-white/70 dark:bg-black/30" : "h-20 md:h-24 w-[min(1200px,95%)] bg-white/60 dark:bg-black/25"
      )}>
        {/* Left Cluster (Logo) */}
        <a href="#hero" className="flex items-center gap-3 font-extrabold text-2xl md:text-3xl group relative select-none tracking-tight">
          <span className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
            <span className="text-white text-xl md:text-2xl font-bold drop-shadow">V</span>
          </span>
          <span className={cn(
            "tracking-wide relative z-10 transition-colors duration-300",
            !isDarkMode ? "text-slate-800 group-hover:text-orange-600" : "text-foreground group-hover:text-orange-400"
          )}>
            <span className="font-extrabold">VIKRANT</span><span className={cn("ml-1 font-semibold hidden sm:inline", !isDarkMode ? "text-slate-600" : "text-foreground/60")}>Portfolio</span>
          </span>
        </a>

        {/* Center Nav (desktop) */}
        <div className="hidden md:flex items-center gap-7 text-base lg:text-lg">
          {navItems.map(item => {
            const id = item.href.replace('#','');
            const isActive = active === id;
            return (
              <a key={item.name} href={item.href} className={cn(
                "relative font-semibold tracking-wide transition-colors duration-300 px-1",
                isActive
                  ? (!isDarkMode ? "text-orange-600" : "text-orange-300")
                  : (!isDarkMode ? "text-slate-700 hover:text-orange-600" : "text-foreground/70 hover:text-orange-400")
              )}>{item.name}</a>
            );
          })}
        </div>

        {/* Right cluster */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Theme toggle now also visible on mobile */}
          <div className="block"><ThemeToggle /></div>
          <button
            onClick={() => setIsMenuOpen(p=>!p)}
            className="md:hidden p-2 rounded-xl bg-white/50 dark:bg-white/10 backdrop-blur-md shadow hover:scale-105 active:scale-95 transition"
            aria-label={isMenuOpen?"Close menu":"Open menu"}
            aria-expanded={isMenuOpen}
          >{isMenuOpen ? <X size={22}/> : <Menu size={22}/>}</button>
        </div>
      </div>

      {/* Mobile Nav */}
  <div
    ref={overlayRef}
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center md:hidden transition-all duration-500",
          isMenuOpen
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        )}
      >
  <div className="flex flex-col items-center gap-10 text-3xl">
          {navItems.map((item) => {
            const id = item.href.replace('#','');
            const isActive = active === id;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
      "font-bold transition duration-200 active:opacity-70 active:translate-y-px",
                  isActive
                    ? (!isDarkMode ? "text-orange-600" : "text-orange-300")
                    : (!isDarkMode
                        ? "text-slate-700 hover:text-orange-600"
                        : "text-foreground/80 hover:text-orange-400")
                )}
              >
                {item.name}
              </a>
            );
          })}
          <div className="active:scale-95 transition-transform"><ThemeToggle /></div>
        </div>
      </div>
    </nav>
  );
};