import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Code2 } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navItems.map(item => document.querySelector(item.href));
    
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px", // Trigger when section is in the middle of viewport
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => sections.forEach(section => {
      if (section) observer.unobserve(section);
    });
  }, []);

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 transition-all duration-300",
        isScrolled ? "pt-2" : "pt-6"
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between w-full max-w-5xl px-6 py-3 rounded-full transition-all duration-300",
          isScrolled || isMenuOpen
            ? "bg-background/80 backdrop-blur-lg border border-border shadow-lg"
            : "bg-transparent border border-transparent"
        )}
      >
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <Code2 className="w-5 h-5 text-primary" />
          </div>
          <span className="font-bold text-lg tracking-tight">Portfolio</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 bg-secondary/50 p-1 rounded-full border border-border/50 backdrop-blur-sm">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setActive(item.href.replace("#", ""))}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative",
                active === item.href.replace("#", "")
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {active === item.href.replace("#", "") && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{item.name}</span>
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-secondary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 p-4 md:hidden"
          >
            <div className="bg-card/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl p-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="p-4 rounded-xl hover:bg-secondary transition-colors text-center font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
