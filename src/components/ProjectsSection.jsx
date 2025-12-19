import { ArrowRight, ExternalLink, Github, Code2, Sparkles, Star, ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1016232509,
    name: "Online Judge Codester",
    description: "A comprehensive online coding platform with real-time code execution, contest management, and automated testing.",
    technologies: ["React", "Node.js", "MongoDB", "Docker"],
    githubUrl: "https://github.com/ark5234/Online-Judge-Codester",
    liveUrl: "https://online-judge-codester.vercel.app",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop",
    featured: true
  },
  {
    id: 999689231,
    name: "Customer Churn Dashboard",
    description: "Interactive analytics dashboard for predicting and visualizing customer churn patterns using advanced ML models.",
    technologies: ["React", "FastAPI", "Python", "Scikit-learn"],
    githubUrl: "https://github.com/ark5234/customer-churn-dashboard",
    liveUrl: "https://customer-churn-dashboard-three.vercel.app",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    featured: true
  },
  {
    id: 884996528,
    name: "AI Agent Project",
    description: "Intelligent AI agent system capable of autonomous decision making and task execution.",
    technologies: ["Python", "OpenAI", "TensorFlow", "NLP"],
    githubUrl: "https://github.com/ark5234/AI-Agent-Project",
    liveUrl: "https://ai-data-analytics-agent.streamlit.app/",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
    featured: true
  },
  {
    id: 1051654780,
    name: "Fraud Detection System",
    description: "ML platform for detecting fraudulent transactions using anomaly detection.",
    technologies: ["Python", "ML", "Pandas"],
    githubUrl: "https://github.com/ark5234/Fraud-Detection-System",
    liveUrl: "https://fraud-detection-web.streamlit.app/",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&h=300&fit=crop",
    featured: false
  },
  {
    id: 935585722,
    name: "Sepsis Detection Model",
    description: "Early warning healthcare model predicting onset of sepsis from vital signs.",
    technologies: ["Python", "Healthcare AI", "Scikit-learn"],
    githubUrl: "https://github.com/ark5234/Sepsis-Detection-Model",
    liveUrl: null,
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&h=300&fit=crop",
    featured: false
  },
  {
    id: 938692590,
    name: "Brain Tumor Model",
    description: "Deep learning pipeline for MRI brain tumor classification.",
    technologies: ["Python", "TensorFlow", "Deep Learning"],
    githubUrl: "https://github.com/ark5234/Brain-Tumor-Model",
    liveUrl: null,
    imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=500&h=300&fit=crop",
    featured: false
  },
  {
    id: 917110873,
    name: "AI Game",
    description: "Python-based strategy game showcasing intelligent agent behavior.",
    technologies: ["Python", "Pygame", "Game Theory"],
    githubUrl: "https://github.com/ark5234/ai_game",
    liveUrl: null,
    imageUrl: "https://images.unsplash.com/photo-1611996991210-8e969746983e?w=500&h=300&fit=crop",
    featured: false
  }
];

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group relative bg-card rounded-3xl border border-border/50 overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 flex flex-col h-full"
  >
    {/* Image Section */}
    <div className="relative h-52 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent z-10 opacity-60" />
      <img 
        src={project.imageUrl} 
        alt={project.name} 
        loading="lazy"
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 will-change-transform"
      />
      
      {/* Floating Links */}
      <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
        {project.githubUrl && (
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2.5 rounded-full bg-background/90 backdrop-blur text-foreground hover:text-primary hover:scale-110 transition-all shadow-lg"
            title="View Code"
          >
            <Github className="w-4 h-4" />
          </a>
        )}
        {project.liveUrl && (
          <a 
            href={project.liveUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2.5 rounded-full bg-background/90 backdrop-blur text-foreground hover:text-primary hover:scale-110 transition-all shadow-lg"
            title="View Live Demo"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>

      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-primary/90 backdrop-blur text-primary-foreground text-xs font-medium flex items-center gap-1.5 shadow-lg">
          <Star className="w-3 h-3 fill-current" /> Featured
        </div>
      )}
    </div>

    {/* Content Section */}
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-1">
        {project.name}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
        {project.description}
      </p>

      <div className="mt-auto pt-4 border-t border-border/50 flex flex-wrap gap-2">
        {project.technologies.slice(0, 4).map((tech) => (
          <span 
            key={tech} 
            className="px-2.5 py-1 rounded-md text-[10px] font-medium bg-secondary/50 text-secondary-foreground border border-border/50 uppercase tracking-wider"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

export const ProjectsSection = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const isExpanded = visibleCount >= projects.length;

  const toggleProjects = () => {
    if (isExpanded) {
      setVisibleCount(3);
      // Optional: Scroll back to top of projects section
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      setVisibleCount(projects.length);
    }
  };

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Explore a collection of my recent work, from full-stack applications to AI models.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <a
              href="https://github.com/ark5234"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-background hover:bg-secondary transition-all group"
            >
              View GitHub <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <AnimatePresence mode="popLayout">
            {projects.slice(0, visibleCount).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {projects.length > 3 && (
          <div className="flex justify-center">
            <button
              onClick={toggleProjects}
              className="group flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all hover:scale-105 active:scale-95"
            >
              {isExpanded ? (
                <>
                  Show Less <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  Show More Projects <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
