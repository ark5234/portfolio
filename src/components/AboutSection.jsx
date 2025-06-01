import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8
                         bg-gradient-to-br from-[#2c39b0] via-[#185a9d] to-[#2b5876]
                         dark:bg-transparent p-6 rounded-3xl shadow-xl">
          {/* About Text */}
          <div className="space-y-6 text-justify">
            <h3 className="text-2xl font-semibold text-white dark:text-white">
              I'm Vikrant Kawadkar — a full-stack web developer passionate about
              crafting elegant, fast, and accessible digital experiences.
            </h3>

            <p className="text-lg md:text-xl leading-relaxed bg-gradient-to-r from-[#a1c4fd] to-[#c2e9fb] bg-clip-text text-transparent">
              With a strong foundation in Computer Science and hands-on
              experience across both frontend and backend stacks, I bring ideas
              to life using modern technologies like React, Next.js, Node.js,
              and MongoDB. I’m committed to writing clean, maintainable code and
              delivering products that feel as good as they look.
            </p>

            <p className="text-lg md:text-xl leading-relaxed bg-gradient-to-r from-[#a1c4fd] to-[#c2e9fb] bg-clip-text text-transparent">
              Beyond code, I'm an avid learner who enjoys exploring emerging
              tech, contributing to open source, and mentoring fellow developers.
              Whether it’s solving complex problems or building sleek UI/UX,
              I thrive on turning vision into reality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center sm:justify-start">
              <a href="#contact" className="cosmic-button">
                Contact Me
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/80 hover:text-background transition-colors duration-300 shadow-lg"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 gap-6">
            <div className="p-6 rounded-3xl bg-gradient-to-br from-orange-300 to-orange-500 dark:bg-card shadow-md transition-all duration-300 
    hover:bg-primary/20 dark:hover:bg-[#0a0a0a] 
    hover:shadow-[0_0_25px_6px_rgba(127,90,240,0.4)] 
    dark:hover:shadow-[0_0_25px_8px_rgba(0,240,255,0.3)]">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-black dark:text-white">Full Stack Developer</h4>
                  <p className="text-black dark:text-muted-foreground">
                    Specialized in building scalable web apps using MERN and modern frontend frameworks.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-gradient-to-br from-orange-300 to-orange-500 dark:bg-card shadow-md transition-all duration-300 
    hover:bg-primary/20 dark:hover:bg-[#0a0a0a] 
    hover:shadow-[0_0_25px_6px_rgba(127,90,240,0.4)] 
    dark:hover:shadow-[0_0_25px_8px_rgba(0,240,255,0.3)]">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-black dark:text-white">Lifelong Learner</h4>
                  <p className="text-black dark:text-muted-foreground">
                    Actively pursuing growth in AI, cloud, and system design alongside core development.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-gradient-to-br from-orange-300 to-orange-500 dark:bg-card shadow-md transition-all duration-300 
    hover:bg-primary/20 dark:hover:bg-[#0a0a0a] 
    hover:shadow-[0_0_25px_6px_rgba(127,90,240,0.4)] 
    dark:hover:shadow-[0_0_25px_8px_rgba(0,240,255,0.3)]">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-black dark:text-white">Industry Experience</h4>
                  <p className="text-black dark:text-muted-foreground">
                    Worked on real-world projects involving APIs, dashboards, and full-stack systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
