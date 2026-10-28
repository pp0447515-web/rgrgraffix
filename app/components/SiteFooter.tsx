const serviceLinks = [
  { label: "Signage", href: "/signage" },
  { label: "Vehicle Branding", href: "/vehicle-branding-and-wrapping" },
  { label: "Large Format Printing", href: "/large-format-printing" },
  { label: "Safety Signs", href: "/safety-signs" },
  { label: "Apparel", href: "/apparel" },
];

export default function SiteFooter() {
  return (
    <>
      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="/" aria-label="RGR Graffix home"><img src="/images/Apparell-Design-Print-1.png" alt="RGR Graffix" /></a>
            <p>Bold designs. Lasting impressions.</p>
          </div>
          <div><h4>COMPANY</h4><a href="/">Home</a><a href="/about-us">About Us</a><a href="/services">Services</a><a href="/gallery">Gallery</a><a href="/contact">Contact Us</a></div>
          <div><h4>SERVICES</h4>{serviceLinks.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}</div>
          <div><h4>WORK HOURS</h4><p>Monday – Friday<br />09:00 – 17:00</p><p>Saturday<br />09:00 – 13:00</p><a href="mailto:info@rgrgraffix.co.za">info@rgrgraffix.co.za</a><a href="tel:+27765352861">+27 76 535 2861</a></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} RGR Graffix. All rights reserved.</span></div>
      </footer>
    </>
  );
}
