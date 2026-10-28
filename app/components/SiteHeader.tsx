"use client";

import { useEffect, useState } from "react";

const serviceLinks = [
  { label: "Signage", href: "/signage" },
  { label: "Vehicle Branding and Wrapping", href: "/vehicle-branding-and-wrapping" },
  { label: "Large Format Printing", href: "/large-format-printing" },
  { label: "Safety Signs", href: "/safety-signs" },
  { label: "Apparel", href: "/apparel" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const update = () => document.querySelector(".site-header")?.classList.toggle("is-scrolled", window.scrollY > 40);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  const close = () => setMenuOpen(false);
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="RGR Graffix home">
        <img src="/images/Apparell-Design-Print-1.png" alt="RGR Graffix" />
      </a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
        {menuOpen ? "✕" : "☰"}
      </button>
      <nav className={menuOpen ? "nav nav-open" : "nav"} aria-label="Main navigation">
        <a href="/" onClick={close}>Home</a>
        <a href="/about-us" onClick={close}>About Us</a>
        <div className="nav-dropdown">
          <a href="/services" onClick={close}>Services⌄</a>
          <div className="dropdown-menu">
            {serviceLinks.map((item) => <a key={item.href} href={item.href} onClick={close}>{item.label}</a>)}
          </div>
        </div>
        <a href="/custom-project" onClick={close}>Custom Projects</a>        <a href="/gallery" onClick={close}>Gallery</a>
        <a href="/contact" onClick={close}>Contact</a>
        <a className="nav-cta" href="/contact" onClick={close}>Get in Touch </a>
      </nav>
    </header>
  );
}
