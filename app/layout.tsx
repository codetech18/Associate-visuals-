import type { Metadata } from "next";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { LenisProvider } from "@/lib/lenis";
import { site } from "@/content/site";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Cinematography, Lagos`,
    template: `%s — ${site.name}`,
  },
  description: site.subheadline,
  openGraph: {
    siteName: site.name,
    title: `${site.name} — Cinematography, Lagos`,
    description: site.subheadline,
    type: "website",
    locale: "en_NG",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      email: site.email,
      telephone: site.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lagos",
        addressCountry: "NG",
      },
      founder: { "@id": `${site.url}/#person` },
      sameAs: [site.social.instagram, site.social.tiktok],
    },
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.owner,
      jobTitle: "Cinematographer",
      worksFor: { "@id": `${site.url}/#organization` },
      workLocation: {
        "@type": "Place",
        name: "Lagos, Nigeria",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="bg-background font-sans text-primary">
        <LenisProvider>{children}</LenisProvider>
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
