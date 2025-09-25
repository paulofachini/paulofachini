"use client";

import { useTheme } from "../contexts/ThemeContext";
import { draculaAccentColors, draculaColorMap } from "../config/theme";
import IntroSection from "./IntroSection";
import ListSection from "./ListSection";
import PortfolioGridSection from "./PortfolioGridSection";

const SectionRenderer = ({ section, titleClassName }) => {
  switch (section.type) {
    case "intro":
      return <IntroSection {...section} titleClassName={titleClassName} />;
    case "list":
      return <ListSection {...section} titleClassName={titleClassName} />;
    case "portfolioGrid":
      return (
        <PortfolioGridSection {...section} titleClassName={titleClassName} />
      );
    default:
      return null;
  }
};

export default function SectionContainer({ sections }) {
  const { theme } = useTheme();

  return (
    <>
      {sections.map((section, index) => {
        let titleClassName = "text-theme-primary";

        if (theme === "dracula") {
          const colorKey =
            draculaAccentColors[index % draculaAccentColors.length];
          titleClassName = draculaColorMap[colorKey] || draculaColorMap.primary;
        }

        return (
          <SectionRenderer
            key={section.id}
            section={section}
            titleClassName={titleClassName}
          />
        );
      })}
    </>
  );
}
