import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RGR Graffix | Signage, Printing & Branding",
  description:
    "RGR Graffix delivers high-quality signage, printing, vehicle branding, wrapping and custom apparel in Cape Town.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-ZA">
      <body>{children}</body>
    </html>
  );
}