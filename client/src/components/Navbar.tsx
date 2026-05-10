/* ================================================================
   Navbar — Diamond Home Services LLC
   Design System: Parent palette — Navy #081838 / Gold #C8A24A
   Font: Anton (brand name) + Oswald (nav links) + Manrope (body)
   ================================================================ */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";

const DIAMOND_CUTZ_LOGO = "/manus-storage/diamond-cutz-logo_7523a9b6.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/diamond-cutz", label: "Diamond Cutz" },
  { href: "/diamond-girl", label: "A Diamond Girl" },
  { href: "/about", label: "About Us" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Testimonials" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "#06122B" : "#081838",
        borderBottom: "1px solid rgba(200,162,74,0.20)",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.40)" : "none",
      }}
    >
      {/* Gold top ribbon */}
      <div style={{ height: 3, background: "linear-gradient(90deg, #8B7228, #C8A24A, #EBD08A, #C8A24A, #8B7228)" }} />

      <div className="container">
        <div className="flex items-center justify-between" style={{ height: 64 }}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src={DIAMOND_CUTZ_LOGO}
              alt="Diamond Home Services LLC"
              style={{ height: 44, width: "auto", objectFit: "contain" }}
            />
            <div style={{ display: "none" }} className="md:block">
              <div style={{ fontFamily: "'Anton', sans-serif", fontSize: 14, letterSpacing: "0.06em", color: "#fff", lineHeight: 1.1 }}>DIAMOND HOME SERVICES</div>
              <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 10, letterSpacing: "0.25em", color: "#C8A24A", textTransform: "uppercase" }}>Nassau County, FL</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: 13,
                  fontWeight: 500,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: location === link.href ? "#C8A24A" : "rgba(255,255,255,0.82)",
                  borderBottom: location === link.href ? "2px solid #C8A24A" : "2px solid transparent",
                  paddingBottom: 2,
                  transition: "color 0.2s, border-color 0.2s",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Phone CTA */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+18563713971"
              className="hidden xl:flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "#C8A24A",
                color: "#081838",
                padding: "9px 18px",
                borderRadius: 4,
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(200,162,74,0.30)",
              }}
            >
              <Phone className="w-3.5 h-3.5" />
              Get a Quote
            </a>
            <button
              className="xl:hidden p-2 rounded"
              style={{ color: "#fff" }}
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="xl:hidden"
          style={{ backgroundColor: "#06122B", borderTop: "1px solid rgba(200,162,74,0.15)" }}
        >
          <div className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: 14,
                  fontWeight: 500,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: location === link.href ? "#C8A24A" : "rgba(255,255,255,0.82)",
                  padding: "10px 12px",
                  borderRadius: 4,
                  backgroundColor: location === link.href ? "rgba(200,162,74,0.08)" : "transparent",
                  textDecoration: "none",
                  display: "block",
                }}
              >
                {link.label}
              </Link>
            ))}
            <div style={{ borderTop: "1px solid rgba(200,162,74,0.15)", marginTop: 8, paddingTop: 12, display: "flex", flexDirection: "column", gap: 8 }}>
              <a href="tel:+18563713971" style={{ display: "flex", alignItems: "center", gap: 8, color: "#C8A24A", fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: 13, letterSpacing: "0.12em", padding: "8px 12px", textDecoration: "none" }}>
                <Phone className="w-4 h-4" />
                Lawn (Mike): 856-371-3971
              </a>
              <a href="tel:+18569810930" style={{ display: "flex", alignItems: "center", gap: 8, color: "#EC4B99", fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: 13, letterSpacing: "0.12em", padding: "8px 12px", textDecoration: "none" }}>
                <Phone className="w-4 h-4" />
                Cleaning (Lydine): 856-981-0930
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
