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
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent nav-shadow",
        isScrolled
          ? "nav-blur py-3 border-white/20 dark:border-white/5"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 font-extrabold text-2xl group relative select-none">
          <span className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
            <span className="text-white text-lg font-bold drop-shadow">V</span>
          </span>
          <span className={cn(
            "tracking-wide relative z-10 transition-colors duration-300",
            (!isDarkMode && !isScrolled) ? "text-white group-hover:text-orange-300" : "text-foreground group-hover:text-orange-400"
          )}>
            <span className="font-extrabold">VIKRANT</span><span className={cn("ml-1 font-semibold", (!isDarkMode && !isScrolled) ? "text-white/70" : "text-foreground/60")}>Portfolio</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-lg">
          {navItems.map((item) => {
            const id = item.href.replace('#','');
            const isActive = active === id;
            const lightOnDark = !isDarkMode && !isScrolled;
            return (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "nav-link text-sm tracking-wide transition-colors duration-300",
                  lightOnDark && !isActive && "text-white/85 hover:text-orange-200",
                  lightOnDark && isActive && "active text-orange-300",
                  !lightOnDark && (isActive ? "active" : "text-foreground/70 hover:text-orange-400")
                )}
              >
                {item.name}
              </a>
            );
          })}
          
          <ThemeToggle />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden text-foreground z-50 p-2 active:scale-95 transition-transform"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
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
        <div className="flex flex-col items-center gap-10 text-2xl">
          {navItems.map((item) => {
            const id = item.href.replace('#','');
            const isActive = active === id;
            const lightOnDark = !isDarkMode && !isScrolled;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "text-foreground/80 hover:text-orange-400 active:opacity-70 active:translate-y-px transition duration-200 font-semibold",
                  lightOnDark && "text-white/90 hover:text-orange-300",
                  isActive && (lightOnDark ? "text-orange-300" : "text-orange-400")
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