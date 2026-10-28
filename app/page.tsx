"use client";

import { useEffect, useState } from "react";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

const media = "/images/";
const heroSlides = ["1-1.jpg", "2-1.jpg", "3-1.jpg", "4-1.jpg", "5-1.jpg", "6-1.jpg"];
const services = [
  { title: "Signage", href: "/signage" },
  { title: "Vehicle Branding and Wrapping", href: "/vehicle-branding-and-wrapping" },
  { title: "Large Format Printing", href: "/large-format-printing" },
  { title: "Safety Signs", href: "/safety-signs" },
  { title: "Apparel", href: "/apparel" },
  { title: "Graphic Design", href: "/contact" },
];

const projects = [
  { title: "Vehicle Branding", image: "1-3.jpg" },
  { title: "Custom Wraps", image: "2-3.jpg" },
  { title: "Vehicle Graphics", image: "3-3.jpg" },
  { title: "Vinyl & Decals", image: "4-3.jpg" },
  { title: "Custom Design", image: "5-3.jpg" },
  { title: "Branding Projects", image: "6-3.jpg" },
  { title: "Signage & Print", image: "Safety-Signage.png" },
  { title: "Creative Projects", image: "Untitled-design-14.jpg" },
];

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActiveSlide((current) => (current + 1) % heroSlides.length), 4000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const updateHeader = () => {
      document.querySelector(".site-header")?.classList.toggle("is-scrolled", window.scrollY > 40);
    };
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);
  const [service, setService] = useState("Stickers");
  

  return (
    <>
      <SiteHeader />

      <main>
        <section className="hero" id="home">
          <div className="hero-slides" aria-hidden="true">{heroSlides.map((slide, index) => <img key={slide} className={index === activeSlide ? "hero-slide hero-slide-active" : "hero-slide"} src={media + slide} alt="" />)}</div>
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="eyebrow">SIGNAGE · PRINTING · BRANDING</p>
            <h1>Brand Better<br /><em>with us.</em></h1>
            <p className="hero-subtitle">Bold Designs. Lasting Impressions.</p>
            
            <a className="button button-light" href="#services">Explore Our Services </a>
          </div>
          <div className="hero-bottom"><span className="hero-index">{String(activeSlide + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}</span></div>
        </section>

        <section className="trust section-wrap">
          
          <h2>Trusted by Industry Leaders</h2>
          <div className="client-ticker" role="region" aria-label="Client logos">
            <div className="client-logos-track">
              {[1, 2].map((copy) => (
                <div className="client-logos" key={copy} aria-hidden={copy === 2 ? "true" : undefined}>
                  {["Logo-Client-5.png", "Logo-Client-4.png", "Logo-Client-3.png", "Logo-Client-2.png", "Logo-Client-1.png"].map((logo) =>
                    <img key={logo} src={media + logo} alt={copy === 1 ? logo.replace(".png", "").replaceAll("-", " ") : ""} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="about section-wrap" id="about">
          <div className="about-art about-source-art">
            <img src={media + "Untitled-design-13.jpg"} alt="RGR Graffix creative work" loading="lazy" />
          </div>
          <div className="about-copy">
            <p className="eyebrow">ABOUT US</p>
            <h2>Discover our<br /><em>story.</em></h2>
            <a className="text-link" href="/about-us">About Us </a>
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="section-wrap">
            <div className="section-heading">
              <div><p className="eyebrow">OUR SERVICES</p><h2>Choose Your <em>Drive.</em></h2></div>
            </div>
            <div className="service-grid">
              {services.map((item, index) => <a className="service-card" href={item.href} key={item.title}><span className="service-number">0{index + 1}</span><h3>{item.title}</h3></a>)}
            </div>
          </div>
        </section>

        <section className="projects section-wrap" id="projects">
          <div className="section-heading">
            <div><p className="eyebrow">GALLERY</p><h2>Our <em>Work.</em></h2></div>
            <a className="text-link" href="/gallery">View Gallery </a>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => <a className="project-card" href="/gallery" key={project.title}>
              <div className="project-image"><img src={media + project.image} alt={project.title} loading="lazy" /><span className="project-index">0{index + 1}</span><span className="project-view">View Project</span></div>
              
            </a>)}
          </div>
        </section>

        <section className="drive-cta">
          <div><h2>Advertise while<br /><em>on the drive.</em></h2></div>
          <a className="button button-light" href="#contact">Book Appointment </a>
        </section>

        <section className="contact section-wrap" id="contact">
          <div className="contact-intro">
            <p className="eyebrow">CONTACT US</p><h2>Let’s get<br /><em>in touch.</em></h2>
            <p>Reach Out Anytime, Anywhere</p>
            <div className="contact-detail"><span>PHONE</span><a href="tel:+27765352861">+27 76 535 2861</a></div>
            <div className="contact-detail"><span>EMAIL</span><a href="mailto:info@rgrgraffix.co.za">info@rgrgraffix.co.za</a></div>
            <div className="contact-detail"><span>WORK HOURS</span><p>Mon–Fri: 9:00–17:00<br />Sat: 9:00–13:00</p></div>
          </div>
          <form className="contact-form" action="mailto:info@rgrgraffix.co.za" method="post" encType="text/plain">
            <h3>Bringing Your Brand to Life</h3>
            <p>Tell us a little about what you have in mind.</p>
            <label>Full Name<input name="name" placeholder="Enter your full name" required /></label>
            <div className="form-row"><label>Email Address *<input name="email" type="email" placeholder="Enter your email" required /></label><label>Phone Number<input name="phone" type="tel" placeholder="Your phone number" /></label></div>
            <label>Address<input name="address" placeholder="Your address" /></label>
            <label>Service Required<select value={service} onChange={(event) => setService(event.target.value)}>{["Stickers", ...services.map((item) => item.title), "Other"].map((item) => <option key={item}>{item}</option>)}</select></label>
            <label>Additional Notes<textarea name="notes" rows={3} placeholder="Any special request?" /></label>
            <button className="button button-dark" type="submit">Send Enquiry </button>
            <p className="form-note">Submitting opens your email application.</p>
          </form>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
