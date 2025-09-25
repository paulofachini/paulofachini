export default function ListSection({ title, itens, titleClassName }) {
  return (
    <div className="mb-8">
      <h3 className={`text-xl font-bold mb-4 ${titleClassName}`}>{title}</h3>
      <ul className="list-disc list-inside space-y-4 text-theme-secondary text-sm sm:text-base">
        {itens.map((item, index) => (
          <li key={index}>
            <strong className="font-semibold text-theme-foreground">
              {item.title}
            </strong>
            : {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
