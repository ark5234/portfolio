import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about"className="py-24 px-4 relative">
            {" "}
            <div className="container max-w-5xl mx-auto ">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Hello! I'm Vikrant Kawadkar, a passionate web developer with a love for creating beautiful and functional websites. 
                            I specialize in building responsive and user-friendly web applications using the latest technologies.
                        </h3>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            With a background in computer science and a keen eye for design, 
                            I strive to deliver high-quality code and exceptional user experiences. 
                            Whether it's front-end development or back-end integration, I enjoy tackling challenges and continuously learning new skills.
                        </p>

                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            When I'm not coding, you can find me exploring new technologies, 
                            contributing to open-source projects, or sharing my knowledge through blogging. 
                            I'm always eager to collaborate on exciting projects and bring innovative ideas to life.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">{" "} Contact Me</a>
                            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
                             className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/80 transition-colors duration-300 shadow-lg">
                                    Download Resume
                            </a>
                        </div>

                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Web Development
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Building responsive and user-friendly web applications.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Passionate Learner
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Always eager to learn new technologies and improve skills.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Professional Experience
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Over 3 years of experience in web development and design.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>                
        </section>
    );
    }
    