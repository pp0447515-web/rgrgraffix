import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = { title: "About Us | RGR Graffix" };

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="inner-page">
        <section className="inner-hero">
          <div className="inner-hero-image" style={{ backgroundImage: 'linear-gradient(90deg,rgba(0,0,0,.8),rgba(0,0,0,.3)),url("/images/Untitled-design-13.jpg")' }} />
          <div className="inner-hero-content"><p className="eyebrow">About Us</p><h1>Discover our story</h1></div>
        </section>
        <section className="section-wrap simple-content">
          <img src="/images/Untitled-design-13.jpg" alt="RGR Graffix project" />
          <div><p className="eyebrow">RGR GRAFFIX</p><h2>About Us</h2><p>Discover our story</p><Link className="button button-light" href="/contact">Get in Touch </Link></div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
