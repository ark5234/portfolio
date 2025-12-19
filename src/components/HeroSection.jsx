import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Elements - Removed for performance as AuroraBackground handles this */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse-subtle" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse-subtle delay-1000" />
      </div> */}

      <motion.div 
        style={{ y, opacity }}
        className="container px-4 relative z-10 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full border border-border bg-secondary/50 backdrop-blur-sm text-sm font-medium text-muted-foreground"
        >
          Open to new opportunities
        </motion.div>

        <div className="relative py-4 mb-8">
          {/* Floating Shapes */}
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute -top-10 left-[10%] w-16 h-16 border-4 border-primary/20 rounded-2xl rotate-12 hidden md:block"
          />
          <motion.div
            animate={{ 
              y: [0, 30, 0],
              rotate: [0, -20, 0]
            }}
            transition={{ 
              duration: 7, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-20 right-[15%] w-20 h-20 border-4 border-blue-500/20 rounded-full hidden md:block"
          />
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-full blur-2xl"
          />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight relative z-10 mb-6"
          >
            Hi, I'm <span className="text-gradient">Vikrant</span>
            <span className="inline-block animate-wave origin-[70%_70%] ml-2">👋</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light"
          >
            A full-stack engineer dedicated to building high-performance applications and intelligent systems.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 flex items-center justify-center gap-6 text-muted-foreground"
        >
          <a href="#" className="hover:text-foreground transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="w-5 h-5 text-muted-foreground" />
      </motion.div>
    </section>
  );
};
