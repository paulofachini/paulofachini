import {
  FaLinkedinIn,
  FaGithub,
  FaDev,
  FaMediumM,
  FaEnvelope,
  FaBuilding,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { profileData } from "../data/profileData.js";
import IntroSection from "../components/IntroSection";
import ListSection from "../components/ListSection";
import PortfolioGridSection from "../components/PortfolioGridSection";
import ProfileSidebar from "../components/ProfileSidebar";

const IconMap = {
  FaBuilding,
  FaMapMarkerAlt,
  FaEnvelope,
  FaLinkedinIn,
  FaGithub,
  FaXTwitter,
  FaDev,
  FaMediumM,
};

const sectionTheming = {
  skills: "green",
  works: "orange",
  portfolio: "yellow",
};

const SectionRenderer = ({ section, theme }) => {
  switch (section.type) {
    case "intro":
      return <IntroSection {...section} />;
    case "list":
      return <ListSection {...section} theme={theme} />;
    case "portfolioGrid":
      return <PortfolioGridSection {...section} theme={theme} />;
    default:
      return null;
  }
};

export default function Home() {
  return (
    <div className="bg-dracula-dark min-h-screen text-dracula-foreground p-4 sm:p-8 md:p-12 lg:p-20 flex flex-col items-center">
      <main className="rounded-xl shadow-lg w-full max-w-7xl flex flex-col md:flex-row overflow-hidden">
        <ProfileSidebar profileData={profileData} iconMap={IconMap} />

        <div className="w-full md:w-2/3 p-8 bg-dracula-current-line flex flex-col justify-start">
          {profileData.sections.map((section) => {
            const theme = sectionTheming[section.id] || "purple";
            return (
              <SectionRenderer
                key={section.id}
                section={section}
                theme={theme}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}
