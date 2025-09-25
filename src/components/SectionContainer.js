"use client";

import { useTheme } from "../contexts/ThemeContext";
import IntroSection from "./IntroSection";
import ListSection from "./ListSection";
import PortfolioGridSection from "./PortfolioGridSection";

const draculaAccentColors = [
  "cyan",
  "green",
  "orange",
  "pink",
  "yellow",
  "red",
];

const titleColorMap = {
  cyan: "text-theme-cyan",
  green: "text-theme-green",
  orange: "text-theme-orange",
  pink: "text-theme-pink",
  yellow: "text-theme-yellow",
  red: "text-theme-red",
  primary: "text-theme-primary",
};

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
        let titleClassName = titleColorMap.primary;

        if (theme === "dracula") {
          const colorKey =
            draculaAccentColors[index % draculaAccentColors.length];
          titleClassName = titleColorMap[colorKey];
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
