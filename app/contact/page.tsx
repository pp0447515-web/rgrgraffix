import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = { title: "Contact RGR Graffix", description: "Contact RGR Graffix in Mitchells Plain, Cape Town for signage, vehicle branding, printing, safety signs and apparel enquiries.", alternates: { canonical: "/contact" } };

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="inner-page">
        <section className="inner-hero">
          <div className="inner-hero-image" style={{ backgroundImage: 'linear-gradient(90deg,rgba(0,0,0,.82),rgba(0,0,0,.28)),url("/images/20240916_165024-scaled.jpg")' }} />
          <div className="inner-hero-content"><p className="eyebrow">Contact Us</p><h1>Let’s Get in Touch</h1><p className="inner-hero-intro">Reach Out Anytime, Anywhere</p></div>
        </section>
        <section className="section-wrap contact-page-content">
          <div><p className="eyebrow">CONTACT US</p><h2>Bringing Your Brand to Life</h2><p>Your Journey Begins with One Click</p><div className="contact-detail"><span>EMAIL</span><a href="mailto:info@rgrgraffix.co.za">info@rgrgraffix.co.za</a></div><div className="contact-detail"><span>PHONE</span><a href="tel:+27765352861">+27 76 535 2861</a></div><div className="contact-detail"><span>OPERATING HOURS</span><p>Monday – Friday<br />09:00 – 17:00</p><p>Saturday<br />09:00 – 13:00</p></div></div>
          <form className="contact-form" action="mailto:info@rgrgraffix.co.za" method="post" encType="text/plain"><h3>Let’s Get in Touch</h3><p>Send an enquiry to RGR Graffix.</p><label>Full Name<input name="name" required /></label><label>Email Address<input name="email" type="email" required /></label><label>Phone Number<input name="phone" type="tel" /></label><label>Service Required<select name="service" defaultValue=""><option value="" disabled>Select a service</option><option>Signage</option><option>Vehicle Branding and Wrapping</option><option>Large Format Printing</option><option>Safety Signs</option><option>Apparel</option></select></label><label>Additional Notes<textarea name="notes" rows={4} /></label><button className="button button-dark" type="submit">Send Enquiry </button><p className="form-note">This opens your email application to send the enquiry.</p></form>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
