"use client";

import { ThemeProvider, useTheme } from "../contexts/ThemeContext";
import { useEasterEgg } from "../hooks/useEasterEgg";

function EasterEggActivator() {
  const { setTheme } = useTheme();
  useEasterEgg(() => setTheme("matrix"));
  return null;
}

export function Providers({ children }) {
  return (
    <ThemeProvider>
      <EasterEggActivator />
      {children}
    </ThemeProvider>
  );
}
