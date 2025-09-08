import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
  <section id="about" className="section-bridge section-panel-bridge py-24 px-4 relative scroll-mt-32 panel-spacing">
      <div className="section-panel container max-w-6xl mx-auto px-9 py-16">
        <h2 className="panel-title text-3xl md:text-4xl text-center mb-12">
          About <span className="highlight">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gradient-to-br from-[#1A2980] via-[#114a83] to-[#2b5876] dark:bg-transparent p-6 rounded-3xl shadow-xl">
          {/* Left: About Text */}
          <div className="space-y-6 text-justify">
            <h3 className="text-2xl font-semibold text-white dark:text-white leading-snug">
              Hi, I'm <span className="text-orange-300">Vikrant Kawadkar</span> —
              a passionate full-stack developer crafting seamless, performant digital experiences.
            </h3>

            <p className="text-lg md:text-xl leading-relaxed bg-gradient-to-r from-[#a1c4fd] to-[#c2e9fb] bg-clip-text text-transparent">
              With deep roots in Computer Science and hands-on proficiency across the MERN stack,
              I turn ideas into functional, elegant solutions. My toolkit includes React, Next.js, Node.js,
              and MongoDB — always geared toward scalability and great UX.
            </p>

            <p className="text-lg md:text-xl leading-relaxed bg-gradient-to-r from-[#a1c4fd] to-[#c2e9fb] bg-clip-text text-transparent">
              I thrive on challenges — from designing intuitive interfaces to writing clean, efficient backend logic.
              Beyond coding, I dive into emerging tech, contribute to open-source, and mentor peers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center sm:justify-start">
              <a
                href="#contact"
                className="relative inline-flex items-center justify-center px-6 py-2 text-white bg-orange-500 rounded-full shadow-lg hover:bg-orange-600 hover:scale-105 transition-transform duration-300"
              >
                Contact Me
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center px-6 py-2 rounded-full border border-white text-white hover:bg-white hover:text-black transition-colors duration-300 shadow-lg"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Right: Info Cards */}
          <div className="grid grid-cols-1 gap-6">
  {/* Card 1 */}
  <div className="p-6 rounded-3xl 
                bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 
                shadow-xl 
                transition-all duration-300 will-change-transform
                hover:shadow-[0_0_25px_8px_rgba(99,102,241,0.7)]
                hover:-translate-y-2 hover:scale-[1.03]
                relative overflow-hidden group">
    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg rounded-3xl z-0"></div>
    <div className="relative z-10 flex items-start gap-4">
      <div className="p-3 rounded-full bg-white/20">
        <Code className="h-6 w-6 text-white" />
      </div>
      <div className="text-left">
        <h4 className="text-xl font-semibold text-white mb-1">Full Stack Developer</h4>
        <p className="text-white/90 text-sm">
          Building performant web apps with the MERN stack and modern UI frameworks.
        </p>
      </div>
    </div>
  </div>

  {/* Card 2 */}
  <div className="p-6 rounded-3xl 
                bg-gradient-to-br from-orange-400 via-pink-500 to-red-500 
                shadow-xl 
                transition-all duration-300 will-change-transform
                hover:shadow-[0_0_25px_8px_rgba(99,102,241,0.7)]
                hover:-translate-y-2 hover:scale-[1.03]
                relative overflow-hidden group">
    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg rounded-3xl z-0"></div>
    <div className="relative z-10 flex items-start gap-4">
      <div className="p-3 rounded-full bg-white/20">
        <User className="h-6 w-6 text-white" />
      </div>
      <div className="text-left">
        <h4 className="text-xl font-semibold text-white mb-1">Lifelong Learner</h4>
        <p className="text-white/90 text-sm">
          Exploring AI, cloud computing, and systems design to grow continuously.
        </p>
      </div>
    </div>
  </div>

  {/* Card 3 */}
  <div className="p-6 rounded-3xl 
                bg-gradient-to-br from-teal-400 via-green-400 to-emerald-500
                shadow-xl 
                transition-all duration-300 will-change-transform
                hover:shadow-[0_0_25px_8px_rgba(99,102,241,0.7)]
                hover:-translate-y-2 hover:scale-[1.03]
                relative overflow-hidden group">
    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg rounded-3xl z-0"></div>
    <div className="relative z-10 flex items-start gap-4">
      <div className="p-3 rounded-full bg-white/20">
        <Briefcase className="h-6 w-6 text-white" />
      </div>
      <div className="text-left">
        <h4 className="text-xl font-semibold text-white mb-1">Industry Experience</h4>
        <p className="text-white/90 text-sm">
          Built real-world systems with APIs, dashboards, and production-ready full-stack apps.
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
