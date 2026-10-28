import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export type LegalSection = { heading: string; paragraphs: string[]; bullets?: string[] };
export type LegalPageData = {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};

export function legalMetadata(title: string, description: string): Metadata {
  const canonicalPaths: Record<string, string> = {
    "Terms & Conditions": "/terms-and-conditions",
    "Terms of Use": "/terms-of-use",
    "Privacy Policy": "/privacy-policy",
    "Cookie Policy": "/cookie-policy",
  };
  return {
    title,
    description,
    alternates: { canonical: canonicalPaths[title] ?? "/" },
    openGraph: { title, description },
    robots: { index: true, follow: true },
  };
}

export default function LegalPage({ page }: { page: LegalPageData }) {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="inner-page legal-page">
        <section className="inner-hero">
          <div className="inner-hero-image" style={{ backgroundImage: 'linear-gradient(90deg,rgba(0,0,0,.88),rgba(0,0,0,.48)),url("/images/Untitled-design-10.jpg")' }} />
          <div className="inner-hero-content">
            <p className="eyebrow">RGR GRAFFIX PTY (LTD)</p>
            <h1>{page.title}</h1>
            <p className="inner-hero-intro">{page.intro}</p>
          </div>
        </section>
        <article className="section-wrap legal-content">
          <p className="legal-updated">Last updated: {page.updated}</p>
          {page.sections.map((section) => (
            <section className="legal-section" key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
              {section.bullets && <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
            </section>
          ))}
          <div className="legal-contact">
            <h2>Questions?</h2>
            <p>If you have questions about this page or need to discuss an order, contact RGR Graffix.</p>
            <p><a href="mailto:info@rgrgraffix.co.za">info@rgrgraffix.co.za</a> · <a href="tel:+27765352861">+27 76 535 2861</a></p>
            <p className="legal-related">Related policies: <Link href="/terms-and-conditions">Terms &amp; Conditions</Link> · <Link href="/terms-of-use">Terms of Use</Link> · <Link href="/privacy-policy">Privacy Policy</Link> · <Link href="/cookie-policy">Cookie Policy</Link></p>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
