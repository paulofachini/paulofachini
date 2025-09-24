export default function IntroSection({ title, description }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-dracula-purple">
        {title}
      </h2>
      <p className="text-dracula-foreground leading-relaxed text-sm sm:text-base">
        {description}
      </p>
    </div>
  );
}
