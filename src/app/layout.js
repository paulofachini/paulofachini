import "./globals.css";

export const metadata = {
  title: "Paulo Luiz Fachini",
  description: "Portfólio de Paulo Luiz Fachini",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning={true}>
      <body>{children}</body>
    </html>
  );
}
