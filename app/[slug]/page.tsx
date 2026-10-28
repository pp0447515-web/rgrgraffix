import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { servicePages } from "../lib/service-pages";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return servicePages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = servicePages.find((item) => item.slug === slug);
  return page
    ? {
        title: page.title,
        description: page.intro ?? `Explore ${page.title.toLowerCase()} services from RGR Graffix in Mitchells Plain, Cape Town.`,
        alternates: { canonical: `/${page.slug}` },
        openGraph: { title: page.title, description: page.intro ?? `Explore ${page.title} services from RGR Graffix in Cape Town.` },
      }
    : { title: "Services", description: "Explore RGR Graffix signage, printing and branding services.", alternates: { canonical: "/services" } };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = servicePages.find((item) => item.slug === slug);
  if (!page) notFound();

  return (
    <>
      <SiteHeader />
      <main id="main-content" className="inner-page service-detail">
        <section className="inner-hero">
          <div className="inner-hero-image"><Image src={`/images/${page.images[0]}`} alt="" fill sizes="100vw" quality={78} priority /></div>
          <div className="inner-hero-content">
            <p className="eyebrow">{page.eyebrow}</p>
            <h1>{page.title}</h1>
            {page.intro && !page.contentTitle && <p className="inner-hero-intro">{page.intro}</p>}
            <Link className="button button-light" href="/contact">Get in Touch </Link>
          </div>
        </section>
        <section className="service-detail-content section-wrap">
          <div className="inner-section-heading">
            {page.contentTitle ? (
              <>
                <h2>{page.contentTitle}</h2>
                {page.intro && <p className="inner-hero-intro">{page.intro}</p>}
              </>
            ) : (
              <>
                <p className="eyebrow">OUR SERVICES</p>
                <h2>{page.eyebrow}</h2>
              </>
            )}
          </div>
          <div className="service-detail-grid">
            {page.items.map((item, index) => (
              <article className="service-detail-card" key={item.title}>
                {item.image && <div className="service-detail-image"><Image src={`/images/${item.image}`} alt={`${item.title} by RGR Graffix`} width={800} height={600} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" quality={78} loading="lazy" /></div>}
                <div className="service-detail-card-copy"><span className="service-number">{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3>{item.description && <p>{item.description}</p>}</div>
              </article>
            ))}
          </div>
          <div className="service-next-step"><div><p className="eyebrow">RGR GRAFFIX</p><h2>Book Appointment</h2></div><Link className="button button-light" href="/contact">Contact Us </Link></div>
          <div className="service-page-links"><Link href="/services">All services</Link><Link href="/">Back to home</Link></div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
