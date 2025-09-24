import Image from "next/image";

export default function PortfolioGridSection({
  title,
  description,
  theme,
  itens,
}) {
  const themeColorMap = {
    green: "text-dracula-green",
    orange: "text-dracula-orange",
    purple: "text-dracula-purple",
    yellow: "text-dracula-yellow",
  };

  const colorClass = themeColorMap[theme] || themeColorMap.purple;
  const shadowClass = "hover:shadow-dracula-purple";

  return (
    <div>
      <h3 className={`text-xl font-bold mb-4 ${colorClass}`}>{title}</h3>
      <p className="text-dracula-foreground leading-relaxed text-sm sm:text-base mb-4">
        {description}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {itens.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`block rounded-lg overflow-hidden shadow-lg ${shadowClass} transition-all duration-300 transform hover:scale-105 bg-dracula-dark`}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={500}
              height={300}
              className="object-cover"
            />
            <div className="p-4 text-dracula-foreground">
              <h4 className="font-bold text-lg mb-1">{item.title}</h4>
              <p className="text-sm">{item.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
