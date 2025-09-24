import "./globals.css";

export const metadata = {
  title: "Paulo Luiz Fachini",
  description: "Portfólio de Paulo Luiz Fachini",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning={true}
      className="theme-minimalist"
    >
      <body className="bg-dracula-dark">{children}</body>
    </html>
  );
}
