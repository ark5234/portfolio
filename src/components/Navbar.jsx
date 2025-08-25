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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const overlayRef = useRef(null);
  const startYRef = useRef(null);
  const bodyScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/70 shadow-xl backdrop-blur-xl py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 font-extrabold text-2xl text-primary group relative">
          <span className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
            <span className="text-white text-lg font-bold">V</span>
          </span>
          <span className="text-foreground tracking-wide relative z-10 group-hover:text-orange-400 transition-colors duration-300">
            VIKRANT<span className="text-muted ml-1">Portfolio</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-lg">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative text-foreground/80 hover:text-orange-400 transition duration-300 font-medium"
            >
              {item.name}
            </a>
          ))}
          
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
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
      className="text-foreground/80 hover:text-orange-400 active:opacity-70 active:translate-y-px transition duration-200 font-semibold"
            >
              {item.name}
            </a>
          ))}
   
      <div className="active:scale-95 transition-transform"><ThemeToggle /></div>
        </div>
      </div>
    </nav>
  );
};