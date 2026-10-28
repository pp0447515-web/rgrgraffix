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
            <a href="/" aria-label="RGR Graffix home">
              <img src="/images/Apparell-Design-Print-1.png" alt="RGR Graffix" />
            </a>
            <p>Branding, printing and custom designs from Mitchells Plain, Cape Town.</p>
            <div className="footer-socials" aria-label="Social media">
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
              <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer">TikTok</a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
            </div>
          </div>

          <div>
            <h4>COMPANY</h4>
            <a href="/">Home</a>
            <a href="/about-us">About Us</a>
            <a href="/services">Services</a>
            <a href="/custom-project">Custom Projects</a>
            <a href="/gallery">Gallery</a>
            <a href="/contact">Contact Us</a>
          </div>

          <div>
            <h4>HELP</h4>
            <a href="/contact">Customer Support</a>
            <a href="/services">How It Works</a>
            <a href="https://www.rgrgraffix.co.za/terms-and-conditions/" target="_blank" rel="noreferrer">Terms &amp; Conditions</a>
            <a href="https://www.rgrgraffix.co.za/privacy-policy/" target="_blank" rel="noreferrer">Privacy Policy</a>
            <a href="https://www.rgrgraffix.co.za/terms-of-use/" target="_blank" rel="noreferrer">Terms of Use</a>
            <a href="https://www.rgrgraffix.co.za/cookie-policy/" target="_blank" rel="noreferrer">Cookie Policy</a>
          </div>

          <div>
            <h4>WORK HOURS</h4>
            <p>9 AM – 5 PM<br />Monday – Friday</p>
            <p>9 AM – 1 PM<br />Saturday</p>
            <a href="mailto:info@rgrgraffix.co.za">info@rgrgraffix.co.za</a>
            <a href="tel:+27765352861">+27 76 535 2861</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>Copyright © {new Date().getFullYear()} RGR Graffix</span>
          <span>Design by Digital Designa</span>
        </div>
      </footer>
      <a className="chat-link" href="https://wa.me/27765352861" target="_blank" rel="noreferrer" aria-label="Chat with RGR Graffix on WhatsApp">Need Help? Chat with us</a>
    </>
  );
}
