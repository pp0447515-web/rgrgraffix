import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = { title: "Custom Projects", alternates: { canonical: "/custom-project" }, description: "Explore custom vehicle branding, wraps and apparel projects by RGR Graffix." };

const projectImages = [
  { image: "20240916_165024-scaled.jpg", title: "Rev tech polo" },
  { image: "20241109_193505-scaled.jpg", title: "Quite M3" },
  { image: "IMG-20240808-WA0019-1536x1152.jpg", title: "Nabeels GTI 8" },
  { image: "IMG-20211102-WA0052-1.jpg", title: "Marvin Uno wrap" },
  { image: "20240409_160012.jpg", title: "Ford Ranger" },
  { image: "20240830_154433-2048x1536.jpg", title: "Amarok PPF" },
];

export default function CustomProjectPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="inner-page">
        <section className="inner-hero">
          <div className="inner-hero-image"><Image src="/images/20240916_165024-scaled.jpg" alt="" fill sizes="100vw" quality={78} priority /></div>
          <div className="inner-hero-content">
            <p className="eyebrow">CUSTOM PROJECT</p>
            <h1>Custom Projects</h1>
          </div>
        </section>
        <section className="section-wrap gallery-content">
          <div className="gallery-grid custom-project-grid">
            {projectImages.map((project) => (
              <article className="custom-project-card" key={project.image}>
                <figure><Image src={`/images/${project.image}`} alt={`${project.title} by RGR Graffix`} width={900} height={650} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" quality={78} loading="lazy" /></figure>
                <div className="custom-project-caption">
                  <h2>{project.title}</h2>
                  <Link href="/contact" aria-label={`Enquire about ${project.title}`}>View Project</Link>
                </div>
              </article>
            ))}
          </div>
          <div className="service-next-step">
            <div><p className="eyebrow">RGR GRAFFIX</p><h2>Have a project in mind?</h2></div>
            <Link className="button button-light" href="/contact">Get in Touch</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
