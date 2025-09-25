"use client";

import { useTheme } from "../contexts/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === "dracula" ? "minimalist" : "dracula";
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="absolute top-4 right-4 p-2 rounded-full bg-theme-border text-theme-secondary hover:text-theme-primary transition-colors"
      aria-label="Trocar tema"
    >
      {theme === "dracula" ? <FaSun size={20} /> : <FaMoon size={20} />}
    </button>
  );
}
