import { cn } from "@/lib/utils";

const skills = [
  { name: "JavaScript", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "HTML", category: "Frontend" },
  { name: "CSS", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },

  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "MongoDB", category: "Backend" },
  { name: "MySQL", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },

  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "AWS", category: "DevOps" },

  { name: "Python", category: "AI/ML" },
  { name: "TensorFlow", category: "AI/ML" },
  { name: "PyTorch", category: "AI/ML" },

  { name: "VS Code", category: "Tools" },
  { name: "Postman", category: "Tools" },
  { name: "Figma", category: "Tools" },
  { name: "GitHub", category: "Tools" },
];

const categories = [...new Set(skills.map(skill => skill.category))];

const gradientCombos = [
  "from-blue-500 via-indigo-500 to-purple-600",
  "from-orange-400 via-pink-500 to-red-500",
  "from-teal-400 via-green-400 to-emerald-500",
  "from-purple-500 via-fuchsia-500 to-rose-400",
  "from-cyan-400 via-sky-500 to-blue-600",
  "from-yellow-400 via-orange-500 to-pink-500",
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          My <span className="text-orange-400">Skills</span>
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, i) => {
            const combo = gradientCombos[i % gradientCombos.length];
            const categorySkills = skills.filter(s => s.category === category);

            return (
              <div
                key={category}
                className={cn(
                  "relative overflow-hidden rounded-3xl p-6 text-white shadow-md transition-all duration-500 group touch-manipulation cursor-pointer",
                  `bg-gradient-to-br ${combo}`,
                  "hover:shadow-[0_0_40px_12px_rgba(255,165,0,0.6)] focus-within:shadow-[0_0_40px_12px_rgba(255,165,0,0.6)] data-[pressed=true]:shadow-[0_0_40px_12px_rgba(255,165,0,0.6)]"
                )}
                onTouchStart={(e) => e.currentTarget.setAttribute('data-pressed', 'true')}
                onTouchEnd={(e) => e.currentTarget.removeAttribute('data-pressed')}
                onTouchCancel={(e) => e.currentTarget.removeAttribute('data-pressed')}
              >
                {/* Orange Glow Ring on Hover */}
                <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 data-[pressed=true]:opacity-100 transition-all duration-500 ring-2 ring-orange-400/30 blur-sm"></div>

                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4 text-center uppercase tracking-widest drop-shadow">
                    {category}
                  </h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {categorySkills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-sm font-medium bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-black transition"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
