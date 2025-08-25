import { ArrowRight, ExternalLink, Github } from "lucide-react";
import React, { useEffect, useRef } from "react";

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A brief description of Project One.",
    image: "/projects/project1.png",
    tags: ["React", "JavaScript", "CSS"],
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Project Two",
    description: "A brief description of Project Two.",
    image: "/projects/project2.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Project Three",
    description: "A brief description of Project Three.",
    image: "/projects/project3.png",
    tags: ["Node.js", "Express", "MongoDB"],
    link: "#",
    github: "#",
  },
];

const gradientCombos = [
  "from-blue-500 via-indigo-500 to-purple-600",
  "from-orange-400 via-pink-500 to-red-500",
  "from-teal-400 via-green-400 to-emerald-500",
];

export const ProjectsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const cards = Array.from(el.querySelectorAll('[data-reveal="project"]'));
  const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target;
          if (entry.isIntersecting) {
            // Choose tilt direction based on column; center on small screens
            const col = target.getAttribute('data-col');
            const isSmall = window.matchMedia('(max-width: 767px)').matches;
            const animClass = isSmall
              ? 'animate-roll-in-center'
              : col === '0'
              ? 'animate-roll-in-left'
              : col === '1'
              ? 'animate-roll-in-center'
              : 'animate-roll-in-right';
            target.classList.add(animClass);
            target.classList.remove('opacity-0');
            io.unobserve(target);
          }
        });
      },
      { threshold: 0.2 }
    );
    // Observe and also immediately reveal any that already intersect (e.g., direct link jump)
    cards.forEach((c) => {
      io.observe(c);
      const rect = c.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
        const col = c.getAttribute('data-col');
        const isSmall = window.matchMedia('(max-width: 767px)').matches;
        const animClass = isSmall
          ? 'animate-roll-in-center'
          : col === '0'
          ? 'animate-roll-in-left'
          : col === '1'
          ? 'animate-roll-in-center'
          : 'animate-roll-in-right';
        c.classList.add(animClass);
        c.classList.remove('opacity-0');
        io.unobserve(c);
      }
    });
    return () => io.disconnect();
  }, []);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div ref={sectionRef} className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          My <span className="text-orange-400">Projects</span>
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
          A curated selection of my most impactful work, demonstrating my full-stack capabilities and product thinking.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => {
            const gradient = gradientCombos[i % gradientCombos.length];
            const col = i % 3; // 0,1,2 for lg screens

            return (
              <div
                key={project.id}
                data-reveal="project"
                data-col={col}
                className={`relative group rounded-3xl overflow-hidden bg-gradient-to-br ${gradient} text-white shadow-lg transition-all duration-500 hover:shadow-[0_0_40px_12px_rgba(255,165,0,0.6)] focus-within:shadow-[0_0_40px_12px_rgba(255,165,0,0.6)] data-[pressed=true]:shadow-[0_0_40px_12px_rgba(255,165,0,0.6)] touch-manipulation cursor-pointer will-change-transform opacity-0`}
                onTouchStart={(e) => e.currentTarget.setAttribute('data-pressed', 'true')}
                onTouchEnd={(e) => e.currentTarget.removeAttribute('data-pressed')}
                onTouchCancel={(e) => e.currentTarget.removeAttribute('data-pressed')}
              >
                {/* Optional internal glow or border */}
                <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 data-[pressed=true]:opacity-100 transition duration-500 ring-2 ring-orange-400/30 blur-sm"></div>

                <div className="relative z-10">
                  <div className="h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm mb-4 text-white/90">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs rounded-full font-medium bg-white/20 border border-white/30 backdrop-blur-md hover:bg-white hover:text-black transition"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

          <div className="flex justify-between items-center">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
            className="text-sm font-medium text-white/80 hover:text-white active:opacity-80 flex items-center gap-1"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Project
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
            className="text-sm font-medium text-white/80 hover:text-white active:opacity-80 flex items-center gap-1"
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <a
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-background text-sm font-semibold shadow-md hover:bg-primary/90 hover:shadow-lg transition duration-300"
            href="https://github.com/ark5234"
            target="_blank"
            rel="noopener noreferrer"
          >
            View My GitHub{" "}
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};
