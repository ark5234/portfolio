import { ThemeToggle } from "../components/ThemeToggle";
import { AuroraBackground } from "../components/AuroraBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { BackToTop } from "../components/BackToTop";



export const Home = () => {
    return <div className="min-h-screen text-foreground overflow-x-hidden"> 
        
        {/* Theme Toggle */}
        

        {/* Background Effect */}
        <AuroraBackground />

        {/* Navbar */}
        <Navbar />

        {/* Main Section */}
    <main className="space-y-0">{/* spacing handled inside sections */}
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <SkillsSection />
            <ContactSection />
            <BackToTop />

        </main>

        {/* Footer */}
        <Footer />



    </div>;
};