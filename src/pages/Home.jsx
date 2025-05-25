import { ThemeToggle } from "../components/ThemeToggel";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden"> 
        
        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Background Effect */}
        <StarBackground />

        {/* Navbar */}
        <Navbar />

        {/* Main Section */}
        <main>
            <HeroSection />
        </main>

        {/* Footer */}



    </div>;
};