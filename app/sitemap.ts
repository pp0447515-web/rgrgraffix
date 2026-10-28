import type { MetadataRoute } from "next";
import { servicePages } from "./lib/service-pages";

const siteUrl = "https://www.rgrgraffix.co.za";

export default function sitemap(): MetadataRoute.Sitemap {
  const coreRoutes = [
    "",
    "/about-us",
    "/services",
    "/contact",
    "/custom-project",
    "/gallery",
    "/how-it-works",
    "/privacy-policy",
    "/terms-and-conditions",
    "/terms-of-use",
    "/cookie-policy",
  ];

  return [
    ...coreRoutes.map((route) => ({
      url: siteUrl + route,
      lastModified: new Date("2026-10-28"),
      changeFrequency: route === "" ? "weekly" as const : "monthly" as const,
      priority: route === "" ? 1 : ["/services", "/contact"].includes(route) ? 0.9 : 0.5,
    })),
    ...servicePages.map((service) => ({
      url: siteUrl + "/" + service.slug,
      lastModified: new Date("2026-10-28"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
