import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = { title: "Project Gallery", description: "View real signage, vehicle branding, wrapping, decals and print projects completed by RGR Graffix in Cape Town.", alternates: { canonical: "/gallery" } };
const images = ["IMG_20200730_105059-scaled.jpg", "1-3.jpg", "2-3.jpg", "3-3.jpg", "4-3.jpg", "5-3.jpg", "6-3.jpg", "20231206_211224-scaled.jpg", "Safety-Signage.png", "124073065_651581528864444_4303563664991341556_n.jpg", "124371040_651918595497404_6441305460869706927_n.jpg", "Untitled-design-14.jpg"];

export default function GalleryPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="inner-page">
        <section className="inner-hero">
          <div className="inner-hero-image" style={{ backgroundImage: 'linear-gradient(90deg,rgba(0,0,0,.82),rgba(0,0,0,.25)),url("/images/IMG_20200730_105059-scaled.jpg")' }} />
          <div className="inner-hero-content"><p className="eyebrow">Gallery</p><h1>Custom Projects</h1></div>
        </section>
        <section className="section-wrap gallery-content"><p className="eyebrow"><a href="/custom-project">CUSTOM PROJECT</a></p><div className="gallery-grid">{images.map((image) => <figure key={image}><Image src={`/images/${image}`} alt={`RGR Graffix signage, printing or branding project: ${image.replace(/\.(jpg|jpeg|png|webp)$/i, "").replaceAll("-", " ")}`} width={800} height={600} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" quality={78} loading="lazy" /></figure>)}</div></section>
      </main>
      <SiteFooter />
    </>
  );
}
