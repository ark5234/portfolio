import { Briefcase, Code, User, BookOpen, Award, Layers } from "lucide-react";

export const AboutSection = () => {
  return (
  <section id="about" className="py-24 px-4 relative scroll-mt-32 panel-spacing">
      {/* Localized 7px transparent glow wrapper around the panel */}
      <div className="panel-glow-wrap section-panel-bridge max-w-6xl mx-auto">
      <div className="section-panel container max-w-6xl mx-auto px-9 py-16 relative z-10">
        <h2 className="panel-title text-3xl md:text-4xl text-center mb-12">
          About <span className="highlight">Me</span>
        </h2>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 bg-gradient-to-br from-[#1A2980] via-[#114a83] to-[#2b5876] dark:bg-transparent p-6 rounded-3xl shadow-xl">
          {/* Left: About / Summary */}
          <div className="space-y-6 text-justify">
            <h3 className="text-2xl font-semibold text-white dark:text-white leading-snug">
              Hi, I'm <span className="text-orange-300">Vikrant Kawadkar</span> — a full‑stack developer & AI enthusiast building scalable, data‑driven products.
            </h3>
            <p className="text-base md:text-lg leading-relaxed text-white/90">
              I enjoy solving end‑to‑end problems: architecting resilient backends, crafting performant UIs, and shipping ML features that create measurable impact. Recently I've engineered real‑time MERN systems, production ML pipelines, and cloud‑native developer tools serving thousands of requests per minute.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-white/80">
              My focus areas include full‑stack web (React • Node • Mongo/Postgres), ML platforms (TensorFlow, PyTorch, FastAPI), and cloud deployment (Docker, Kubernetes, Azure, HuggingFace). I iterate fast, profile early, and care about user experience, accessibility, and maintainable code.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#contact" className="relative inline-flex items-center justify-center px-6 py-2 text-white bg-orange-500 rounded-full shadow-lg hover:bg-orange-600 hover:scale-105 transition-transform duration-300">
                Contact Me
              </a>
              <a
                href="/resume.pdf" /* file is at public/resume.pdf */
                download
                className="relative inline-flex items-center justify-center px-6 py-2 rounded-full border border-white text-white hover:bg-white hover:text-black transition-colors duration-300 shadow-lg"
              >
                Download Resume
              </a>
              <a
                href="https://drive.google.com/file/d/1qrop5WRMevEn6O-fNXQTVBfH5-rOb0iw/view?usp=drive_link"
                target="_blank" rel="noopener noreferrer"
                title="View resume in Google Drive"
                className="relative inline-flex items-center justify-center px-6 py-2 rounded-full bg-white/15 text-white hover:bg-white/25 transition-colors duration-300 shadow-lg"
              >
                View Online
              </a>
            </div>

            {/* Skills Summary */}
            <div className="mt-6 space-y-4">
              <h4 className="text-xl font-semibold text-white flex items-center gap-2"><Code className="h-5 w-5" /> Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Python','JavaScript','React','Node.js','FastAPI','MongoDB','PostgreSQL','TensorFlow','Docker','Kubernetes'
                ].map(s => (
                  <span key={s} className="px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-white/90 backdrop-blur-sm border border-white/10">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Structured Cards */}
          <div className="space-y-6">
            {/* Education */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 text-white shadow-xl relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_8px_rgba(99,102,241,0.55)]">
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg rounded-3xl" />
              <div className="relative flex gap-4 items-start">
                <div className="p-3 rounded-full bg-white/20"><BookOpen className="h-6 w-6" /></div>
                <div className="text-left space-y-1">
                  <h4 className="text-lg font-semibold">Education</h4>
                  <p className="text-sm leading-snug font-medium">Manipal University Jaipur (Sept 2022 – Present)</p>
                  <p className="text-xs text-white/90">B.Tech. Computer & Communication Engineering</p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-teal-500 via-cyan-500 to-emerald-500 text-white shadow-xl space-y-4 relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_8px_rgba(16,185,129,0.55)]">
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg rounded-3xl" />
              <div className="relative flex gap-4 items-start">
                <div className="p-3 rounded-full bg-white/20"><Briefcase className="h-6 w-6" /></div>
                <div className="text-left w-full">
                  <h4 className="text-lg font-semibold">Experience</h4>
                  <ul className="mt-2 space-y-3 text-sm">
                    <li>
                      <p className="font-semibold">SWE Co-Op Intern • AlgoUniversity (YC S21) <span className="font-normal">(May 2025 – Aug 2025)</span></p>
                      <ul className="list-disc ml-4 mt-1 space-y-1 text-white/95">
                        <li>Engineered real-time MERN app with auth & syncing; optimized queries cutting latency 35%.</li>
                        <li>Containerized REST APIs (Node/Express + Docker) & improved React UI performance by 25%.</li>
                        <li>Scaled to 10K+ req/min via iterative feedback from senior mentors (Google, Apple, Alphagrep).</li>
                      </ul>
                    </li>
                    <li>
                      <p className="font-semibold">Data Science & AI Intern • Celebal Technologies <span className="font-normal">(May 2025 – Jul 2025)</span></p>
                      <ul className="list-disc ml-4 mt-1 space-y-1 text-white/95">
                        <li>Architected end-to-end churn prediction system across 3 production deployments.</li>
                        <li>Optimized ML pipelines reducing inference latency 40% & enabling full monitoring visibility.</li>
                        <li>Automated ETL workflows shrinking deployment-to-monitoring cycles from days to hours.</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-orange-400 via-pink-500 to-red-500 text-white shadow-xl relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_8px_rgba(244,114,182,0.55)]">
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg rounded-3xl" />
              <div className="relative flex gap-4 items-start">
                <div className="p-3 rounded-full bg-white/20"><Layers className="h-6 w-6" /></div>
                <div className="text-left w-full">
                  <h4 className="text-lg font-semibold">Highlighted Projects</h4>
                  <ul className="mt-2 space-y-2 text-xs leading-relaxed">
                    <li><span className="font-semibold">Online Judge Codester</span> – Cloud-native judge (React, Node, Mongo, Redis) w/ multi-language exec & RBAC; 50+ concurrent users & 99.9% uptime.</li>
                    <li><span className="font-semibold">Customer Churn Dashboard</span> – React + FastAPI pipeline processing 500K+ records &lt;100ms; +10% model accuracy & CI/CD automation.</li>
                    <li><span className="font-semibold">AI Data Query Agent</span> – Streamlit + Gemini AI natural language queries over CSV/Sheets; 70% latency reduction via caching.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Honors */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-fuchsia-500 via-purple-600 to-indigo-600 text-white shadow-xl relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_8px_rgba(139,92,246,0.55)]">
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg rounded-3xl" />
              <div className="relative flex gap-4 items-start">
                <div className="p-3 rounded-full bg-white/20"><Award className="h-6 w-6" /></div>
                <div className="text-left w-full">
                  <h4 className="text-lg font-semibold">Honors & Awards</h4>
                  <ul className="mt-2 space-y-2 text-xs leading-relaxed">
                    <li><span className="font-semibold">Accelerator Camp (AlgoUniversity)</span> – Top 1.4% of 40K+ applicants; built scalable systems with mentorship from industry engineers.</li>
                    <li><span className="font-semibold">Graph Camp (Codeforces Master)</span> – Selected mentee (Top 80 / 80K); mastered 17+ advanced graph techniques.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
  </div>
  </div>
    </section>
  );
};
