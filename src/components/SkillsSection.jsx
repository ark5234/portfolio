import { cn } from "@/lib/utils";

const gradientCombos = [
  "from-blue-500 via-indigo-500 to-purple-600",
  "from-orange-400 via-pink-500 to-red-500", 
  "from-teal-400 via-green-400 to-emerald-500",
  "from-purple-500 via-fuchsia-500 to-rose-400",
  "from-cyan-400 via-sky-500 to-blue-600",
  "from-yellow-400 via-orange-500 to-pink-500",
];

// Skills data matching the user's image exactly
const skills = {
  "Frontend": [
    "JavaScript", "TypeScript", "React", "Next.js", "HTML", "CSS", "Tailwind CSS", "Vite"
  ],
  "Backend": [
    "Node.js", "Express.js", "FastAPI", "MongoDB", "MySQL", "PostgreSQL", "Redis", "REST API", "JWT", "WebSockets"
  ],
  "DevOps": [
    "Docker", "Kubernetes", "Azure", "AWS", "Vercel", "Render"
  ],
  "AI/ML": [
    "Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "Machine Learning", "Deep Learning", "NLP"
  ],
  "Data / Analytics": [
    "Power BI", "DAX", "Data Visualization", "Data Analysis", "KPI Dashboards"
  ],
  "Tools": [
    "Git", "GitHub", "VS Code", "Figma", "Postman"
  ]
};

export const SkillsSection = () => {
  const categories = Object.keys(skills);

  return (
  <section id="skills" className="py-20 px-4 bg-transparent scroll-mt-32 panel-spacing">
      <div className="panel-glow-wrap section-panel-bridge max-w-6xl mx-auto">
      <div className="section-panel max-w-6xl mx-auto px-9 py-16 relative z-10">
        <h2 className="panel-title text-4xl md:text-5xl text-center mb-16">
          My <span className="highlight">Skills</span>
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, i) => {
            const combo = gradientCombos[i % gradientCombos.length];
            const categorySkills = skills[category] || [];

            return (
              <div
                key={category}
                className={cn(
                  "relative overflow-hidden rounded-3xl p-6 text-white shadow-md transition-all duration-500 group touch-manipulation cursor-pointer",
                  `bg-gradient-to-br ${combo}`,
                  "hover:shadow-[0_0_40px_12px_rgba(255,165,0,0.6)] hover:scale-105 focus-within:shadow-[0_0_40px_12px_rgba(255,165,0,0.6)] focus-within:scale-105 data-[pressed=true]:shadow-[0_0_40px_12px_rgba(255,165,0,0.6)] data-[pressed=true]:scale-105"
                )}
                onTouchStart={(e) => e.currentTarget.setAttribute('data-pressed', 'true')}
                onTouchEnd={(e) => e.currentTarget.removeAttribute('data-pressed')}
                onTouchCancel={(e) => e.currentTarget.removeAttribute('data-pressed')}
              >
                {/* Orange Glow Ring on Hover */}
                <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 data-[pressed=true]:opacity-100 transition-all duration-500 ring-4 ring-orange-400/50 blur-md"></div>

                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4 text-center uppercase tracking-widest drop-shadow group-hover:text-orange-100 transition-colors duration-300">
                    {category}
                  </h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {categorySkills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-sm font-medium bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-110"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
  </div>
  </div>
    </section>
  );
};
