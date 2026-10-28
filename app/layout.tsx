import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const siteUrl = "https://www.rgrgraffix.co.za";

const interTight = Inter_Tight({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], display: "swap", variable: "--font-inter-tight" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "RGR Graffix | Signage, Printing & Vehicle Branding in Cape Town",
    template: "%s | RGR Graffix",
  },
  description:
    "RGR Graffix is a Cape Town signage, printing and vehicle branding business based in Mitchells Plain. Explore signage, vehicle wraps, large-format printing, safety signs and custom apparel.",
  applicationName: "RGR Graffix",
  category: "business",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    siteName: "RGR Graffix",
    images: ["/images/Untitled-design-13.jpg"],
    title: "RGR Graffix | Signage, Printing & Vehicle Branding in Cape Town",
    description:
      "Signage, vehicle branding, large-format printing, safety signs and custom apparel from Mitchells Plain, Cape Town.",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/Untitled-design-13.jpg"],
    title: "RGR Graffix | Signage, Printing & Vehicle Branding in Cape Town",
    description:
      "Signage, vehicle branding, large-format printing, safety signs and custom apparel from Mitchells Plain, Cape Town.",
  },
};

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": siteUrl + "/#business",
  name: "RGR Graffix Pty (Ltd)",
  url: siteUrl,
  image: siteUrl + "/images/Untitled-design-13.jpg",
  email: "info@rgrgraffix.co.za",
  telephone: "+27765352861",
  foundingDate: "2012",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mitchells Plain",
    addressRegion: "Western Cape",
    addressCountry: "ZA",
  },
  areaServed: [
    { "@type": "City", name: "Cape Town" },
    { "@type": "AdministrativeArea", name: "Western Cape" },
  ],
  description:
    "Signage, printing, vehicle branding, vehicle wrapping, large-format printing, safety signs and custom apparel.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-ZA">
      <body className={interTight.variable}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
