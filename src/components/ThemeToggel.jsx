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
    const root = document.documentElement;
    // Instead of applying transitions to *all* descendants (expensive with many nodes),
    // add a lighter-scoped class that only targets background / color on key containers.
    root.classList.add("theme-swap");
    // Use a shorter timeout for snappier feel.
    window.setTimeout(() => root.classList.remove("theme-swap"), 180);
    const nextDark = !isDarkMode;
    root.classList.toggle("dark", nextDark);
    localStorage.setItem("theme", nextDark ? "dark" : "light");
    setIsDarkMode(nextDark);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
  aria-pressed={isDarkMode}
  className="ml-4 p-2 rounded-full bg-background/80 backdrop-blur-md shadow ring-1 ring-black/10 dark:ring-white/10 hover:ring-orange-400 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-95"
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 text-yellow-400 transition-transform hover:rotate-180" />
      ) : (
        <Moon className="h-5 w-5 text-blue-600 dark:text-blue-300 transition-transform hover:-rotate-180" />
      )}
    </button>
  );
};
