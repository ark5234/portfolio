import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10 min-h-screen flex flex-col justify-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">
             <span className="tetx-gradient animate-fade-in-delay-1">
                Hello, I'm
             </span>

            <span className="text-primary opacity-0 animate-fade-in-delay-1">
                {" "}
                Vikrant

            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                {" "}
                Kawadkar

            </span>
          </h1>

          <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-4">
            A passionate web developer with a love for creating beautiful and functional websites.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a
              href="#projects"
              className="cosmic-button bg-primary text-foreground hover:bg-primary/80 transition-colors duration-300 px-6 py-3 rounded-full shadow-lg"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-6 w-6 text-primary mt-2 animate-bounce" />
      </div>
    </section>
  );
};
