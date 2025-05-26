import {useState} from "react";
import { cn } from "@/lib/utils"; // Assuming you have a utility function for classnames


const skills = [
    //Frontend Skills
    { name: "JavaScript", level: "95", category: "Frontend" },
    { name: "React", level: "90", category: "Frontend" },
    { name: "Next.js", level: "85", category: "Frontend" },
    { name: "HTML", level: "95", category: "Frontend" },
    { name: "CSS", level: "90", category: "Frontend" },
    { name: "Tailwind CSS", level: "85", category: "Frontend" },
    { name: "Bootstrap", level: "80", category: "Frontend" },

    //Backend Skills
    { name: "Node.js", level: "85", category: "Backend" },
    { name: "Express.js", level: "80", category: "Backend" },
    { name: "MongoDB", level: "80", category: "Backend" },
    { name: "MySQL", level: "75", category: "Backend" },
    { name: "PostgreSQL", level: "70", category: "Backend" },
    { name: "GraphQL", level: "70", category: "Backend" },
    //DevOps Skills
    { name: "Docker", level: "75", category: "DevOps" },
    { name: "Kubernetes", level: "70", category: "DevOps" },
    { name: "AWS", level: "70", category: "DevOps" },
    { name: "CI/CD", level: "75", category: "DevOps" },
    //AI/ML Skills
    { name: "Python", level: "80", category: "AI/ML" },
    { name: "TensorFlow", level: "70", category: "AI/ML" },
    { name: "PyTorch", level: "70", category: "AI/ML" },
    { name: "Scikit-learn", level: "75", category: "AI/ML" },
    //Tools
    { name: "Visual Studio Code", level: "90", category: "Tools" },
    { name: "Postman", level: "85", category: "Tools" },
    { name: "Figma", level: "80", category: "Tools" },
    { name: "GitHub", level: "90", category: "Tools" },
    { name: "Jira", level: "75", category: "Tools" },
    { name: "Slack", level: "80", category: "Tools" },
];

const categories = ["all", ...new Set(skills.map(skill => skill.category))];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    
    const filteredSkills = skills.filter(skill =>
        activeCategory === "all" || skill.category === activeCategory
    );


    return (
        <section
            id="skills"
            className="py-20 px-4 relative bg-secondary/30"
        >
            <div className="container max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
                    My <span className="text-primary">Skills</span>
                </h2>


                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 capitalize",
                                activeCategory === category
                                    ? "bg-primary text-white shadow-md"
                                    : "bg-muted text-muted-foreground hover:bg-primary/70 hover:text-white"
                            )}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {filteredSkills.map((skill, key) => (
                        <div
                            key={key}
                            className="bg-white dark:bg-black p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            <h3 className="text-xl font-semibold mb-2 text-primary">
                                {skill.name}
                            </h3>
                            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden mb-2">
                                <div
                                    className={`bg-primary h-full rounded-full origin-left animate-[grow_1.5s_ease-in-out]`}
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Level: {skill.level}%
                            </p>
                        </div>
                    ))}
                </div>
            </div>

        </section>

    )
};  