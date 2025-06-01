import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (
      storedTheme === "dark" ||
      (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="ml-4 p-2 rounded-full bg-background/80 backdrop-blur-md shadow ring-1 ring-white/20 hover:ring-orange-400 transition"
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 text-yellow-400 transition-transform hover:rotate-180" />
      ) : (
        <Moon className="h-5 w-5 text-blue-600 dark:text-blue-300 transition-transform hover:-rotate-180" />
      )}
    </button>
  );
};
