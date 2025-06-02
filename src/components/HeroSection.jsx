import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-white dark:bg-transparent transition-colors duration-500"
    >
      {/* Subtle Background Glow or Stars */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 w-[600px] h-[600px] bg-gradient-radial from-purple-400/20 via-transparent to-transparent rounded-full blur-3xl transform -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-radial from-teal-400/20 via-transparent to-transparent rounded-full blur-2xl" />
      </div>

      {/* Hero Content */}
      <div className="container max-w-4xl mx-auto text-center z-10 min-h-screen flex flex-col justify-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            <span className="block text-orange dark:text-orange opacity-0 animate-fade-in-delay-1">
                  Hello, I'm
            </span>

            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600 dark:from-teal-400 dark:via-blue-400 dark:to-purple-500 animate-gradient-slow opacity-0 animate-fade-in-delay-2">
              Vikrant Kawadkar
            </span>
          </h1>

          <p className="text-lg md:text-2xl block text-orange dark:text-orange max-w-2xl mx-auto opacity-0 animate-fade-in-delay-4">
                  A passionate web developer crafting immersive experiences and intuitive digital interfaces.
          </p>

          <div className="pt-6 opacity-0 animate-fade-in-delay-5">
            <a
              href="#projects"
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 via-teal-400 to-purple-500 text-white font-semibold shadow-xl hover:shadow-[0_0_25px_rgba(100,200,255,0.4)] transition duration-300"
            >
              🚀 View My Work
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-fade-in-delay-6">
        <span className="text-sm text-gray-600 dark:text-gray-400 mb-2">Scroll</span>
        <ArrowDown className="h-6 w-6 text-blue-500 dark:text-teal-400 animate-bounce" />
      </div>
    </section>
  );
};
