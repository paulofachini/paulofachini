import { Providers } from "../components/Providers";
import "./globals.css";

export const metadata = {
  title: "Paulo Luiz Fachini",
  description: "Página pessoal e portfólio de Paulo Luiz Fachini.",
  icons: {
    icon: [
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: ["/favicon/favicon.ico"],
    apple: [{ url: "/favicon/apple-touch-icon.png" }],
    manifest: "/favicon/site.webmanifest",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning={true}>
      <body className="bg-theme-background transition-colors duration-300">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
