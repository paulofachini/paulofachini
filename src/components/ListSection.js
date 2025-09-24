export default function ListSection({ title, theme, itens }) {
  const themeColorMap = {
    green: "text-dracula-green",
    orange: "text-dracula-orange",
    purple: "text-dracula-purple",
    yellow: "text-dracula-yellow",
  };

  const colorClass = themeColorMap[theme] || themeColorMap.purple;

  return (
    <div className="mb-8">
      <h3 className={`text-xl font-bold mb-4 ${colorClass}`}>{title}</h3>
      <ul className="list-disc list-inside space-y-2 text-dracula-foreground text-sm sm:text-base">
        {itens.map((item, index) => (
          <li key={index}>
            <strong className={colorClass}>{item.title}</strong>:{" "}
            {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
