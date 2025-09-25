import { Providers } from "../components/Providers";
import { profileData } from "../data/profileData";
import "./globals.css";

const siteTitle = profileData.name;
const siteDescription = `Portfólio de ${profileData.name}, ${profileData.title} especialista em automação de testes e qualidade de software.`;
const siteKeywords = profileData.keywords;
const siteUrl = "https://paulofachini.dev.br/";
const ogImageUrl = `${siteUrl}/og-image.png`;

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: siteTitle,
    template: `%s | ${siteTitle}`,
  },
  description: siteDescription,
  keywords: siteKeywords,
  authors: [{ name: profileData.name }],

  icons: {
    icon: [
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: ["/favicon/favicon.ico"],
    apple: [{ url: "/favicon/apple-touch-icon.png" }],
    manifest: "/favicon/site.webmanifest",
  },

  openGraph: {
    title: `${siteTitle} | ${profileData.title}`,
    description: siteDescription,
    url: "/",
    siteName: `Portfólio ${siteTitle}`,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: `Imagem de apresentação do portfólio de ${siteTitle}`,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: `${siteTitle} | ${profileData.title}`,
    description: siteDescription,
    creator: profileData.tag,
    images: [ogImageUrl],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
