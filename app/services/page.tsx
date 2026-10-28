import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { servicePages } from "../lib/service-pages";

export const metadata: Metadata = { title: "Services", alternates: { canonical: "/services" }, description: "Explore RGR Graffix signage, vehicle branding, large format printing, safety signs and apparel services." };

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="inner-page">
        <section className="inner-hero services-index-hero">
          <div className="inner-hero-image"><Image src="/images/Untitled-design-10.jpg" alt="" fill sizes="100vw" quality={78} priority /></div>
          <div className="inner-hero-content"><p className="eyebrow">WHAT WE DO</p><h1>Choose Your <em>Drive.</em></h1><p className="inner-hero-intro">Our Services</p></div>
        </section>
        <section className="section-wrap services-index-content">
          <div className="service-index-grid">
            {servicePages.map((service, index) => (
              <Link className="service-index-card" href={`/${service.slug}`} key={service.slug}>
                <Image src={`/images/${service.images[0]}`} alt={`${service.title} by RGR Graffix`} width={900} height={650} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" quality={78} loading="lazy" />
                <div><span className="service-number">{String(index + 1).padStart(2, "0")}</span><h2>{service.eyebrow}</h2></div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
