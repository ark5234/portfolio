import { ArrowDown } from "lucide-react";

export const HeroSection = () => {

  
  return (
    <section
      id="hero"
      className="hero-backdrop relative flex flex-col items-center justify-center px-4 overflow-hidden transition-colors duration-500 pt-40 pb-24 scroll-mt-32"
    >
      <div className="panel-glow-wrap section-panel-bridge max-w-6xl mx-auto w-full">
      <div className="section-panel max-w-6xl mx-auto w-full px-9 py-40 relative z-10">
      {/* Subtle Background Glow or Stars */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 w-[600px] h-[600px] bg-gradient-radial from-purple-400/20 via-transparent to-transparent rounded-full blur-3xl transform -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-radial from-teal-400/20 via-transparent to-transparent rounded-full blur-2xl" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col justify-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            <span className="block opacity-0 animate-fade-in-delay-1 text-white drop-shadow-md">
                  Hello, I'm
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-blue-500 to-purple-600 dark:from-teal-400 dark:via-blue-400 dark:to-purple-500 animate-gradient-slow opacity-0 animate-fade-in-delay-2 drop-shadow">
              Vikrant Kawadkar
            </span>
          </h1>
          <p className="text-lg md:text-2xl block max-w-2xl mx-auto opacity-0 animate-fade-in-delay-4 text-white/80">
                  A passionate web developer crafting immersive experiences and intuitive digital interfaces.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
  <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-fade-in-delay-6">
        <span className="text-sm text-gray-600 dark:text-gray-400 mb-2">Scroll</span>
        <ArrowDown className="h-6 w-6 text-blue-500 dark:text-teal-400 animate-bounce" />
      </div>
  </div>
  </div>
    </section>
  );
};
