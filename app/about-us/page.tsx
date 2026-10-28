import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "About Us | RGR Graffix",
  description: "Discover the story behind RGR Graffix, a Cape Town branding and printing company established in Mitchells Plain in 2012.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="inner-page">
        <section className="inner-hero">
          <div
            className="inner-hero-image"
            style={{ backgroundImage: 'linear-gradient(90deg,rgba(0,0,0,.8),rgba(0,0,0,.3)),url("/images/Untitled-design-13.jpg")' }}
          />
          <div className="inner-hero-content">
            <p className="eyebrow">About Us</p>
            <h1>Discover our story</h1>
          </div>
        </section>

        <section className="section-wrap simple-content">
          <img src="/images/Untitled-design-13.jpg" alt="RGR Graffix branding and printing work" />
          <div>
            <p className="eyebrow">RGR GRAFFIX PTY (LTD)</p>
            <h2>About Us</h2>
            <p>
              From our humble home ground in Mitchells Plain, Western Cape, RGR Graffix Pty (Ltd) was established in 2012. The business grew from the owner’s long-standing passion for making stickers and branding vehicles as a hobby. Seeing the smiles and happiness that each finished job brought to customers inspired him to turn that passion into a branding and printing business.
            </p>
            <p>
              We produce PVC banners, vinyl products, vehicle branding, shop signage, window signage text and graphics, custom car decals and designs, and more. We pride ourselves on maintaining close working relationships with our customers, putting them first, and meeting their requirements in a timely manner.
            </p>
            <p>
              RGR Graffix Pty (Ltd) combines the aspirations of communications practitioners and business owners with the practical demands of each specification to create attractive, effective products. From vehicle branding and shop signage to apparel branding and more, we take the time to translate each customer’s wishes into feasible solutions, with the end customer’s expectations in mind.
            </p>
            <Link className="button button-light" href="/contact">Get in Touch</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
