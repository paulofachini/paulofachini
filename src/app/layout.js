import { Providers } from "../components/Providers";
import * as siteMetadata from "../config/siteMetadata";
import "./globals.css";

const ogImageUrl = `${siteMetadata.siteUrl}/og`;

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),

  title: {
    default: siteMetadata.siteTitle,
    template: `%s | ${siteMetadata.siteTitle}`,
  },
  description: siteMetadata.siteDescription,
  keywords: siteMetadata.siteKeywords,
  authors: [{ profileName: siteMetadata.profileName }],

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
    title: siteMetadata.siteTitle,
    description: siteMetadata.siteDescription,
    url: "/",
    siteName: siteMetadata.siteTitle,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: `Imagem de apresentação de ${siteMetadata.profileName}`,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: siteMetadata.siteTitle,
    description: siteMetadata.siteDescription,
    creator: siteMetadata.profileTag,
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
