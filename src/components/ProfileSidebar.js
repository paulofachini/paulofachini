import Image from "next/image";
import ThemeSwitcher from "./ThemeSwitcher";

export default function ProfileSidebar({ profileData, iconMap }) {
  const { name, tag, title, profileImage, company, location, contacts } =
    profileData;

  const contactList = Object.keys(contacts).map((key) => ({
    ...contacts[key],
    key: key,
  }));

  const CompanyIcon = iconMap[company.icon];
  const LocationIcon = iconMap[location.icon];

  return (
    <div className="relative w-full md:w-1/3 p-8 bg-theme-background flex flex-col items-center md:items-start text-center md:text-left border-r border-theme-border">
      <ThemeSwitcher />
      <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-theme-primary mb-6 shadow-md">
        <Image
          src={profileImage}
          alt={name}
          width={256}
          height={256}
          className="rounded-full"
        />
      </div>

      <h1 className="text-3xl font-bold text-theme-foreground">{name}</h1>
      <p className="text-sm text-theme-secondary mb-4">{tag}</p>
      <p className="text-theme-foreground text-base font-bold mb-4">{title}</p>

      <div className="text-theme-secondary text-sm mb-6 space-y-2 w-full">
        {/* Company Info */}
        <p className="flex items-center justify-center md:justify-start">
          {CompanyIcon && (
            <CompanyIcon className="mr-2 text-base text-theme-primary" />
          )}
          <a
            href={company.url}
            className="hover:underline text-theme-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {company.text}
          </a>
        </p>

        {/* Location Info */}
        <p className="flex items-center justify-center md:justify-start">
          {LocationIcon && (
            <LocationIcon className="mr-2 text-base text-theme-primary" />
          )}
          <a
            href={location.url}
            className="hover:underline text-theme-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {location.text}
          </a>
        </p>

        {/* Contacts List */}
        {contactList.map((contact) => {
          const Icon = iconMap[contact.icon];
          return (
            <p
              key={contact.key}
              className="flex items-center justify-center md:justify-start"
            >
              {Icon && <Icon className="mr-2 text-base text-theme-primary" />}
              <a
                href={contact.url}
                className="hover:underline text-theme-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                {contact.text}
              </a>
            </p>
          );
        })}
      </div>
    </div>
  );
}
