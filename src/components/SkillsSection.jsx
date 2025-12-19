import { motion } from "framer-motion";
import { Code2, Database, Layout, Server, Terminal, Cpu } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: Layout,
    items: ["JavaScript", "TypeScript", "React", "Next.js", "HTML", "CSS", "Tailwind CSS", "Vite"]
  },
  {
    category: "Backend",
    icon: Server,
    items: ["Node.js", "Express.js", "FastAPI", "MongoDB", "MySQL", "PostgreSQL", "Redis", "REST API"]
  },
  {
    category: "DevOps",
    icon: Terminal,
    items: ["Docker", "Kubernetes", "Azure", "AWS", "Vercel", "Render"]
  },
  {
    category: "AI/ML",
    icon: Cpu,
    items: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "NLP"]
  },
  {
    category: "Data",
    icon: Database,
    items: ["Power BI", "DAX", "Data Visualization", "Data Analysis", "KPI Dashboards"]
  },
  {
    category: "Tools",
    icon: Code2,
    items: ["Git", "GitHub", "VS Code", "Figma", "Postman"]
  }
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 md:py-24 relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical <span className="text-gradient">Skills</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit that enables me to build end-to-end solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-3xl border border-border bg-card/50 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <skill.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">{skill.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span 
                    key={item} 
                    className="px-3 py-1.5 rounded-lg text-sm font-medium bg-secondary text-secondary-foreground border border-border/50 hover:border-primary/50 transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
