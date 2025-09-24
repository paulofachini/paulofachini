import Image from "next/image";

export default function PortfolioGridSection({ title, description, itens }) {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4 text-theme-primary">{title}</h3>
      <p className="text-theme-secondary leading-relaxed text-sm sm:text-base mb-4">
        {description}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {itens.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg overflow-hidden border border-theme-border bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={500}
              height={300}
              className="object-cover"
            />
            <div className="p-4 text-theme-foreground">
              <h4 className="font-bold text-lg mb-1">{item.title}</h4>
              <p className="text-sm text-theme-secondary">{item.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
