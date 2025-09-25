export default function IntroSection({ title, description, titleClassName }) {
  return (
    <div className="mb-8">
      <h2 className={`text-2xl sm:text-3xl font-bold mb-4 ${titleClassName}`}>
        {title}
      </h2>
      <p className="text-theme-secondary leading-relaxed text-sm sm:text-base">
        {description}
      </p>
    </div>
  );
}
