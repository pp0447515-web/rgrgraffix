import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = { title: "Custom Project | RGR Graffix" };

const projectImages = [
  "Untitled-design-13.jpg",
  "1-3.jpg",
  "2-3.jpg",
  "3-3.jpg",
  "4-3.jpg",
  "5-3.jpg",
  "6-3.jpg",
  "IMG_20200730_105059-scaled.jpg",
  "20231206_211224-scaled.jpg",
];

export default function CustomProjectPage() {
  return (
    <>
      <SiteHeader />
      <main className="inner-page">
        <section className="inner-hero">
          <div className="inner-hero-image" style={{ backgroundImage: 'linear-gradient(90deg,rgba(0,0,0,.82),rgba(0,0,0,.28)),url("/images/Untitled-design-13.jpg")' }} />
          <div className="inner-hero-content">
            <p className="eyebrow">CUSTOM PROJECT</p>
            <h1>Custom Project</h1>
          </div>
        </section>
        <section className="section-wrap gallery-content">
          <div className="gallery-grid">
            {projectImages.map((image) => (
              <figure key={image}><img src={`/images/${image}`} alt="RGR Graffix project" loading="lazy" /></figure>
            ))}
          </div>
          <div className="service-next-step">
            <div><p className="eyebrow">RGR GRAFFIX</p><h2>Book Appointment</h2></div>
            <Link className="button button-light" href="/contact">Contact Us</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
