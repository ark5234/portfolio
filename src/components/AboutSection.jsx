import { Briefcase, BookOpen, Award, Download, Eye, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section id="about" className="py-12 md:py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About <span className="text-gradient">Me</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A glimpse into my journey, skills, and what drives me.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <div className="sticky top-24 p-6 rounded-3xl border border-border/50 bg-card/30 backdrop-blur-md text-center">
              <div className="relative w-40 h-40 mx-auto mb-4">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-blue-500 blur-lg opacity-50" />
                <img 
                  src="/projects/my image.jpeg" 
                  alt="Vikrant Kawadkar" 
                  className="relative w-full h-full rounded-full object-cover object-top border-4 border-background shadow-xl"
                />
              </div>
              
              <h3 className="text-xl font-bold mb-1">Vikrant Kawadkar</h3>
              <p className="text-primary font-medium mb-3 text-sm">Fullstack Developer & AI Enthusiast</p>
              
              <div className="flex items-center justify-center gap-2 text-muted-foreground text-xs mb-6">
                <MapPin className="w-3 h-3" />
                <span>Ahmedabad, India</span>
              </div>

              <div className="flex flex-col gap-2">
                <a 
                  href="#contact" 
                  className="w-full py-2.5 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity text-sm"
                >
                  Contact Me
                </a>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="/Vikrant Kawadkar resume.pdf"
                    download
                    className="py-2.5 rounded-xl border border-border bg-background hover:bg-secondary transition-colors flex items-center justify-center gap-2 text-xs font-medium"
                  >
                    <Download className="w-3 h-3" /> Resume
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1SkaQ4OWG9OP9JYTTPndmNJaZ3OF8hVuq/view?usp=sharing"
                    target="_blank" rel="noopener noreferrer"
                    className="py-2.5 rounded-xl border border-border bg-background hover:bg-secondary transition-colors flex items-center justify-center gap-2 text-xs font-medium"
                  >
                    <Eye className="w-3 h-3" /> View
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 space-y-6"
          >
            {/* Bio */}
            <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
              <p>
                <span className="text-foreground font-semibold text-lg">Hello! I'm Vikrant.</span> I am passionate about building scalable, data-driven products. I enjoy solving end-to-end problems: architecting resilient backends, crafting performant UIs, and shipping ML features that create measurable impact.
              </p>
              <p>
                Recently, I've engineered real-time MERN systems, production ML pipelines, and cloud-native developer tools serving thousands of requests per minute. My focus areas include fullstack web (React, Node, Mongo/Postgres), ML platforms (TensorFlow, PyTorch, FastAPI), and cloud deployment (Docker, Kubernetes, Azure).
              </p>
            </div>

            {/* Timeline/Cards */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Education */}
              <div className="p-4 rounded-2xl border border-border/50 bg-card/30 hover:bg-card/50 transition-colors md:col-span-2">
                <div className="flex items-center gap-4">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-500">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-1">
                    <div>
                      <h4 className="text-base font-bold">Education</h4>
                      <p className="text-sm font-medium text-foreground">B.Tech in Computer and Communication Engineering</p>
                      <p className="text-xs text-muted-foreground">Manipal University Jaipur</p>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground whitespace-nowrap bg-secondary/50 px-2 py-1 rounded-full">
                      <Calendar className="w-3 h-3" />
                      <span>2022 - 2026</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="p-4 rounded-2xl border border-border/50 bg-card/30 hover:bg-card/50 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-500">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div className="w-full">
                    <h4 className="text-base font-bold mb-3">Experience</h4>
                    
                    <div className="space-y-4">
                      {/* AlgoUniversity */}
                      <div className="relative pl-4 border-l border-border/50">
                        <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-purple-500" />
                        <div className="mb-1">
                          <h5 className="text-sm font-semibold text-foreground">SWE Co-Op Intern</h5>
                          <p className="text-xs text-muted-foreground">May 2025 – Aug 2025</p>
                        </div>
                        <p className="text-xs font-medium text-primary">AlgoUniversity (YC S21)</p>
                      </div>

                      {/* Celebal Technologies */}
                      <div className="relative pl-4 border-l border-border/50">
                        <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-purple-500" />
                        <div className="mb-1">
                          <h5 className="text-sm font-semibold text-foreground">Data Science Intern</h5>
                          <p className="text-xs text-muted-foreground">May 2025 – July 2025</p>
                        </div>
                        <p className="text-xs font-medium text-primary">Celebal Technologies</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Honours and Awards */}
              <div className="p-4 rounded-2xl border border-border/50 bg-card/30 hover:bg-card/50 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="w-full">
                    <h4 className="text-base font-bold mb-3">Honours & Awards</h4>
                    
                    <div className="space-y-4">
                      {/* Accelerator Camp */}
                      <div className="relative pl-4 border-l border-border/50">
                        <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-amber-500" />
                        <div className="mb-1">
                          <h5 className="text-sm font-semibold text-foreground">Accelerator Camp</h5>
                          <p className="text-xs text-muted-foreground">May 2025 – Present</p>
                        </div>
                        <p className="text-xs font-medium text-primary">Top 1.4% (AlgoUniversity)</p>
                      </div>

                      {/* Graph Camp */}
                      <div className="relative pl-4 border-l border-border/50">
                        <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-amber-500" />
                        <div className="mb-1">
                          <h5 className="text-sm font-semibold text-foreground">Graph Camp</h5>
                          <p className="text-xs text-muted-foreground">Jan 2025</p>
                        </div>
                        <p className="text-xs font-medium text-primary">Codeforces Master</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
