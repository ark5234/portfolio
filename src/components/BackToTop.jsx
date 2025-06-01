import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.6);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-24 right-4 z-50 p-2 md:p-3 rounded-full border
        border-[#bd93f9] backdrop-blur-sm shadow-lg transition-all duration-300
        ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"}
        bg-[#282a36] hover:bg-[#44475a]/90
        hover:shadow-[0_0_18px_4px_rgba(189,147,249,0.4)]`}
      aria-label="Back to top"
    >
      <ArrowUp className="w-4 h-4 md:w-5 md:h-5 text-[#bd93f9]" />
    </button>
  );
};
