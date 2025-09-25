import Image from "next/image";
import ThemeSwitcher from "./ThemeSwitcher";
import KeywordCloud from "./KeywordCloud";

export default function ProfileSidebar({ profileData, iconMap }) {
  const { name, tag, title, profileImage, links, keywords } = profileData;

  return (
    <div className="relative w-full md:w-1/3 p-8 bg-theme-background flex flex-col items-center md:items-start text-center md:text-left border-r border-theme-border">
      <ThemeSwitcher />
      <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-theme-primary mb-6 shadow-md">
        <Image
          src={profileImage}
          alt={name}
          width={256}
          height={256}
          className="rounded-full profile-image transition-all duration-300"
        />
      </div>

      <h1 className="text-3xl font-bold text-theme-foreground">{name}</h1>
      <p className="text-sm text-theme-secondary mb-4">{tag}</p>
      <p className="text-theme-foreground text-base font-bold mb-4">{title}</p>

      <div className="text-theme-secondary text-sm mb-6 space-y-2 w-full">
        {links.map((link) => {
          const Icon = iconMap[link.icon];
          return (
            <p
              key={link.id}
              className="flex items-center justify-center md:justify-start"
            >
              {Icon && <Icon className="mr-2 text-base text-theme-primary" />}
              <a
                href={link.url}
                className="rounded-sm hover:underline text-theme-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-theme-primary focus-visible:ring-offset-theme-background"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.text}
              </a>
            </p>
          );
        })}
      </div>

      {keywords.map((keywordGroup) => (
        <KeywordCloud
          key={keywordGroup.id}
          title={keywordGroup.title}
          words={keywordGroup.words}
        />
      ))}
    </div>
  );
}
