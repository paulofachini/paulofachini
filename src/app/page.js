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
import ProfileSidebar from "../components/ProfileSidebar";
import SectionContainer from "../components/SectionContainer";

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

export default function Home() {
  return (
    <div className="bg-theme-background min-h-screen text-theme-foreground p-4 sm:p-8 md:p-12 lg:p-20 flex flex-col items-center">
      <main className="rounded-xl shadow-lg w-full max-w-7xl flex flex-col md:flex-row overflow-hidden bg-theme-background-card border border-theme-border">
        <ProfileSidebar profileData={profileData} iconMap={IconMap} />
        <div className="w-full md:w-2/3 p-8 md:p-12 flex flex-col justify-start">
          <SectionContainer sections={profileData.sections} />
        </div>
      </main>
    </div>
  );
}
