import { ArrowRight, ExternalLink, Github } from "lucide-react";

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

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          My <span className="text-primary">Projects</span>
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          Here are some of the projects I've worked on, showcasing my skills in web development and design.
          Click on the project titles to view them live or check out the source code on GitHub.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-4xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <div className="h-76 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title || "Project image"}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-muted text-secondary-foreground"
                      key={tag}
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
                    className="text-sm text-primary hover:underline flex items-center gap-1"
                  >
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    View Project
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:underline flex items-center gap-1"
                  >
                    <Github className="w-4 h-4" aria-hidden="true" />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
          

        </div>
        <div className="text-center mt-16">
            <a 
                className= "cosmic-button inline-flex items-center gap-2 mx-auto px-5 py-3 rounded-full bg-primary text-background text-sm font-semibold shadow-md hover:bg-primary/90 hover:shadow-lg transition-all duration-300 ring-1 ring-primary/50" 
                href="https://github.com/ark5234" 
                target="_blank" 
                rel="noopener noreferrer"
                >
                    View My GitHub <ArrowRight size={18} className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
           </div>
      </div>
    </section>
  );
};
