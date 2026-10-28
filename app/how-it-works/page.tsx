import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "How It Works",
  alternates: { canonical: "/how-it-works" },
  description: "Learn how to request a quote, approve artwork and arrange production with RGR Graffix.",
};

const steps = [
  { number: "01", title: "Tell us what you need", copy: "Contact us with the service you are interested in, the quantity, dimensions, intended use and any timing requirements. Reference images or existing artwork help us understand the brief." },
  { number: "02", title: "Receive a quotation", copy: "We review your requirements and confirm the proposed scope, materials, price and expected lead time. If details are missing, we may ask questions before finalising the quotation." },
  { number: "03", title: "Confirm the design", copy: "Where design or artwork preparation is required, we share a proof for you to review. Check spelling, contact details, colours, sizes and layout carefully, and request any changes before giving final approval." },
  { number: "04", title: "Approve and arrange payment", copy: "Once you approve the proof and accept the quotation, we confirm the order and any payment or deposit requirements. Production begins according to the agreed order details." },
  { number: "05", title: "Production and completion", copy: "We produce your signage, print, apparel or branding according to the approved specifications. We will let you know if a material issue affects the expected timing." },
  { number: "06", title: "Collection, delivery or installation", copy: "We confirm the agreed handover arrangements. Delivery, installation, site preparation and any additional work are included only where they form part of the accepted quotation." },
];

export default function HowItWorksPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="inner-page">
        <section className="inner-hero">
          <div className="inner-hero-image" style={{ backgroundImage: 'linear-gradient(90deg,rgba(0,0,0,.88),rgba(0,0,0,.4)),url("/images/Untitled-design-10.jpg")' }} />
          <div className="inner-hero-content">
            <p className="eyebrow">A SIMPLE PROCESS</p>
            <h1>How It Works</h1>
            <p className="inner-hero-intro">From the first enquiry to the finished product, we work with you to turn your brief into practical branding and print solutions.</p>
          </div>
        </section>
        <section className="section-wrap how-it-works-content">
          <div className="how-it-works-grid">
            {steps.map((step) => (
              <article className="how-it-works-card" key={step.number}>
                <span className="service-number">{step.number}</span>
                <h2>{step.title}</h2>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
          <div className="service-next-step">
            <div><p className="eyebrow">READY TO BEGIN?</p><h2>Tell us about your project</h2></div>
            <Link className="button button-light" href="/contact">Request a Quote</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
