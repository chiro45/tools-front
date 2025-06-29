import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export const Header = () => {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    return (localStorage.getItem("theme") as "dark" | "light") || "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="w-full flex justify-end items-center mb-6">
      <button
        onClick={toggleTheme}
        aria-label="Cambiar tema"
        className="ml-4 p-2 rounded cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      >
        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </div>
  );
};
