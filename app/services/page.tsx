import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { servicePages } from "../lib/service-pages";

export const metadata: Metadata = { title: "Services | RGR Graffix", description: "Explore RGR Graffix signage, vehicle branding, large format printing, safety signs and apparel services." };

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="inner-page">
        <section className="inner-hero services-index-hero">
          <div className="inner-hero-image" style={{ backgroundImage: 'linear-gradient(90deg,rgba(0,0,0,.82),rgba(0,0,0,.28)),url("/images/Untitled-design-10.jpg")' }} />
          <div className="inner-hero-content"><p className="eyebrow">WHAT WE DO</p><h1>Choose Your <em>Drive.</em></h1><p className="inner-hero-intro">Our Services</p></div>
        </section>
        <section className="section-wrap services-index-content">
          <div className="service-index-grid">
            {servicePages.map((service, index) => (
              <Link className="service-index-card" href={`/${service.slug}`} key={service.slug}>
                <img src={`/images/${service.images[0]}`} alt="" loading="lazy" />
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
