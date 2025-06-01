import { ThemeToggle } from "../components/ThemeToggel";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { BackToTop } from "../components/BackToTop";



export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden"> 
        
        {/* Theme Toggle */}
        

        {/* Background Effect */}
        <StarBackground />

        {/* Navbar */}
        <Navbar />

        {/* Main Section */}
        <main>
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