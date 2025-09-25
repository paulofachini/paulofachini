"use client";

import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dracula");

  useEffect(() => {
    const root = window.document.documentElement;
    const isDracula = theme === "dracula";

    root.classList.remove(isDracula ? "theme-minimalist" : "theme-dracula");
    root.classList.add(isDracula ? "theme-dracula" : "theme-minimalist");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
