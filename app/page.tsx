"use client";

import { useState } from "react";

const media = "https://www.rgrgraffix.co.za/wp-content/uploads/2025/09/";
const services = [
  "Signage",
  "Vehicle Branding and Wrapping",
  "Large Format Printing",
  "Safety Signs",
  "Apparel",
  "Vehicle Accessories",
];

const projects = [
  { title: "Rev tech polo", image: "20240916_165024-scaled.jpg" },
  { title: "Quite m3", image: "20241109_193505-scaled.jpg" },
  { title: "Nabeels gti 8", image: "IMG-20240808-WA0019-1536x1152.jpg" },
  { title: "Marvin uno wrap", image: "IMG-20211102-WA0052-1.jpg" },
  { title: "Jealousy", image: "IMG-20240814-WA0171-768x346.jpg" },
  { title: "Jd 35 edition", image: "IMG-20190908-WA0056-1-1024x768.jpg" },
  { title: "Ford ranger", image: "20240409_160012.jpg" },
  { title: "Amarok ppf", image: "20240830_154433-2048x1536.jpg" },
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [service, setService] = useState("Stickers");
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="RGR Graffix home">
          <img src={media + "Apparell-Design-Print-1.png"} alt="RGR Graffix" />
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? "✕" : "☰"}
        </button>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
          <div className="nav-dropdown">
            <a href="#services" onClick={() => setMenuOpen(false)}>Services⌄</a>
            <div className="dropdown-menu">
              {services.map((item) => <a key={item} href="#services">{item}</a>)}
            </div>
          </div>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Custom Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Get in Touch <span>↗</span></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="eyebrow">SIGNAGE · PRINTING · BRANDING</p>
            <h1>Brand Better<br /><em>with us.</em></h1>
            <p className="hero-subtitle">Bold Designs. Lasting Impressions.</p>
            <p className="hero-copy">At RGR Graffix, we bring creativity to life with high-quality signage, printing, and branding solutions. From safety signs to custom apparel, we design with precision to make your brand stand out everywhere.</p>
            <a className="button button-light" href="#services">Explore Our Services <span>↗</span></a>
          </div>
          <div className="hero-bottom"><span>Follow us</span><span className="socials"><a href="https://www.facebook.com/" aria-label="Facebook">f</a><a href="https://www.instagram.com/" aria-label="Instagram">◎</a><a href="https://www.tiktok.com/" aria-label="TikTok">♪</a></span><span className="hero-index">01 / 03</span></div>
        </section>

        <section className="trust section-wrap">
          <p className="eyebrow">PROUD TO WORK WITH</p>
          <h2>Trusted by Industry Leaders</h2>
          <div className="client-logos">
            {["Logo-Client-1-1.png", "Logo-Client-2-1.png", "Logo-Client-3-1.png", "Logo-Client-4-1.png", "Logo-Client-5-75x62.png"].map((logo) =>
              <img key={logo} src={media + logo} alt="RGR Graffix client" />
            )}
          </div>
        </section>

        <section className="about section-wrap" id="about">
          <div className="about-art"><div className="about-art-frame"><span>RGR</span><small>MAKE YOUR MARK</small></div><div className="year-stamp"><strong>2012</strong><span>ESTABLISHED</span></div></div>
          <div className="about-copy">
            <p className="eyebrow">DISCOVER OUR STORY</p>
            <h2>Built on creativity.<br /><em>Driven by detail.</em></h2>
            <p>Founded in 2012 in Mitchells Plain, Western Cape, RGR Graffix began as a passion for stickers and vehicle branding. What started as a hobby grew through the trust and happiness of our customers.</p>
            <p>Today, we bring brands to life through PVC banners, vinyl products, vehicle branding, shop and window signage, custom decals, apparel branding and more — with a customer-first approach and a commitment to timely service.</p>
            <a className="text-link" href="#contact">More About Us <span>↗</span></a>
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="section-wrap">
            <div className="section-heading">
              <div><p className="eyebrow">WHAT WE DO</p><h2>Choose Your <em>Drive.</em></h2></div>
              <p>Creative solutions that make your business impossible to miss.</p>
            </div>
            <div className="service-grid">
              {services.map((item, index) => <a className="service-card" href="#contact" key={item}><span className="service-number">0{index + 1}</span><h3>{item}</h3><span className="service-arrow">↗</span></a>)}
            </div>
          </div>
        </section>

        <section className="projects section-wrap" id="projects">
          <div className="section-heading">
            <div><p className="eyebrow">SELECTED WORK</p><h2>Custom <em>Projects.</em></h2></div>
            <a className="text-link" href="#contact">Start a Project <span>↗</span></a>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => <a className="project-card" href="#contact" key={project.title}>
              <div className="project-image"><img src={media + project.image} alt={project.title} loading="lazy" /><span className="project-index">0{index + 1}</span><span className="project-view">View Project ↗</span></div>
              <h3>{project.title}</h3>
            </a>)}
          </div>
        </section>

        <section className="drive-cta">
          <div><p className="eyebrow">TAKE YOUR BRAND FURTHER</p><h2>Advertise while<br /><em>on the drive.</em></h2></div>
          <a className="button button-light" href="#contact">Book Appointment <span>↗</span></a>
        </section>

        <section className="contact section-wrap" id="contact">
          <div className="contact-intro">
            <p className="eyebrow">CONTACT US</p><h2>Let’s get<br /><em>in touch.</em></h2>
            <p>Reach out anytime, anywhere. Your journey begins with one click.</p>
            <div className="contact-detail"><span>PHONE</span><a href="tel:+27765352861">+27 76 535 2861</a></div>
            <div className="contact-detail"><span>EMAIL</span><a href="mailto:info@rgrgraffix.co.za">info@rgrgraffix.co.za</a></div>
            <div className="contact-detail"><span>WORK HOURS</span><p>Mon–Fri: 9:00–17:00<br />Sat: 9:00–13:00</p></div>
          </div>
          <form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
            <h3>Bringing Your Brand to Life</h3>
            <p>Tell us a little about what you have in mind.</p>
            <label>Full Name<input name="name" placeholder="Enter your full name" required /></label>
            <div className="form-row"><label>Email Address *<input name="email" type="email" placeholder="Enter your email" required /></label><label>Phone Number<input name="phone" type="tel" placeholder="Your phone number" /></label></div>
            <label>Address<input name="address" placeholder="Your address" /></label>
            <label>Service Required<select value={service} onChange={(event) => setService(event.target.value)}>{["Stickers", ...services, "Graphic Design", "Other"].map((item) => <option key={item}>{item}</option>)}</select></label>
            <label>Additional Notes<textarea name="notes" rows={3} placeholder="Any special request?" /></label>
            <button className="button button-dark" type="submit">Send Enquiry <span>↗</span></button>
            {submitted && <p className="form-note">Thanks! This demo form is not connected to email yet. We’ll connect it before launch.</p>}
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand"><img src={media + "Apparell-Design-Print-1.png"} alt="RGR Graffix" /><p>Bold designs. Lasting impressions.<br />Bringing your brand to life since 2012.</p><div className="footer-socials"><a href="https://www.facebook.com/">Facebook ↗</a><a href="https://www.instagram.com/">Instagram ↗</a><a href="https://www.tiktok.com/">TikTok ↗</a></div></div>
          <div><h4>COMPANY</h4><a href="#home">Home</a><a href="#about">About Us</a><a href="#services">Services</a><a href="#projects">Gallery</a><a href="#contact">Contact Us</a></div>
          <div><h4>HELP</h4><a href="#contact">Customer Support</a><a href="#services">How It Works</a><a href="#terms">Terms &amp; Conditions</a><a href="#privacy">Privacy Policy</a></div>
          <div><h4>WORK HOURS</h4><p>Monday – Friday<br />9 AM – 5 PM</p><p>Saturday<br />9 AM – 1 PM</p><a href="mailto:info@rgrgraffix.co.za">info@rgrgraffix.co.za</a><a href="tel:+27765352861">+27 76 535 2861</a></div>
        </div>
        <div className="footer-bottom"><span>© 2025 RGR Graffix. All rights reserved.</span><span>Design by Digital Designa</span><span><a href="#terms">Terms of use</a> · <a href="#privacy">Privacy Policy</a> · <a href="#cookies">Cookie Policy</a></span></div>
      </footer>
      <a className="chat-link" href="https://wa.me/27765352861">Need Help? Chat with us ↗</a>
    </>
  );
}