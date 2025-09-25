"use client";

import { useTheme } from "../contexts/ThemeContext";
import { draculaAccentColors, draculaColorMap } from "../config/theme";

export default function KeywordCloud({ words, title }) {
  const { theme } = useTheme();

  if (!words || words.length === 0) {
    return null;
  }

  return (
    <div className="w-full mb-6">
      <h3 className="text-sm font-bold text-theme-foreground mb-3 text-center md:text-left">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2 justify-center md:justify-start">
        {words.map((word, index) => {
          let tagClasses =
            "bg-theme-border text-theme-secondary text-xs font-semibold px-3 py-1 rounded-full transition-transform duration-200 hover:scale-105";

          if (theme === "dracula") {
            const colorKey =
              draculaAccentColors[index % draculaAccentColors.length];
            const dynamicColorClass =
              draculaColorMap[colorKey] || draculaColorMap.primary;
            tagClasses = `bg-theme-border ${dynamicColorClass} text-xs font-semibold px-3 py-1 rounded-full transition-transform duration-200 hover:scale-105 hover:brightness-125`;
          }

          return (
            <span key={word} className={tagClasses}>
              {word}
            </span>
          );
        })}
      </div>
    </div>
  );
}
