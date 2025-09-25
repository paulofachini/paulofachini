"use client";

import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

const themeClasses = ["theme-minimalist", "theme-dracula", "theme-matrix"];

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dracula");

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(...themeClasses);
    root.classList.add(`theme-${theme}`);
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
