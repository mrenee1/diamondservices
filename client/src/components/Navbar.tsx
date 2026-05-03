/* ============================================================
   Navbar — Diamond Cutz Lawn and Landscaping
   Design: "Tributary Roots" — sticky top nav, moss green brand
   Real business: Diamond Cutz Lawn and Landscaping
   Phone: 856-371-3971 | Owner: Mike Petrutz
   ============================================================ */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";

const DIAMOND_CUTZ_LOGO = "/manus-storage/diamond-cutz-logo_7523a9b6.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#testimonials", label: "Reviews" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAnchorClick = (href: string) => {
    setOpen(false);
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      if (location !== "/") {
        window.location.href = href;
        return;
      }
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <img
              src={DIAMOND_CUTZ_LOGO}
              alt="Diamond Cutz Lawn and Landscaping"
              className="h-12 md:h-14 w-auto object-contain"
              style={{ filter: scrolled ? "none" : "drop-shadow(0 2px 8px rgba(0,0,0,0.4))" }}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith("/#")) {
                    e.preventDefault();
                    handleAnchorClick(link.href);
                  }
                }}
                className={`text-sm font-semibold transition-colors duration-200 hover:opacity-80 ${
                  location === link.href && !link.href.startsWith("/#")
                    ? "border-b-2"
                    : ""
                }`}
                style={{
                  color: scrolled ? "oklch(0.18 0.01 60)" : "white",
                  borderColor: "oklch(0.72 0.15 75)",
                  fontFamily: "'Nunito Sans', sans-serif",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+18563713971"
              className="hidden md:flex items-center gap-1.5 text-sm font-bold"
              style={{ color: scrolled ? "oklch(0.35 0.10 145)" : "oklch(0.82 0.12 80)", fontFamily: "'Nunito Sans', sans-serif" }}
            >
              <Phone className="w-4 h-4" />
              856-371-3971
            </a>
            <Link
              href="/book"
              className="hidden md:inline-flex items-center px-4 py-2 rounded-md text-sm font-bold transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
              style={{
                backgroundColor: "oklch(0.72 0.15 75)",
                color: "oklch(0.18 0.01 60)",
                fontFamily: "'Nunito Sans', sans-serif",
              }}
            >
              Book Now
            </Link>
            <button
              className="md:hidden p-2 rounded-md"
              style={{ color: scrolled ? "oklch(0.18 0.01 60)" : "white" }}
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
        <div className="md:hidden bg-white border-t border-border shadow-lg">
          <div className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith("/#")) {
                    e.preventDefault();
                    handleAnchorClick(link.href);
                  } else {
                    setOpen(false);
                  }
                }}
                className="font-semibold text-sm py-2.5 px-3 rounded-md transition-colors hover:bg-secondary"
                style={{ color: "oklch(0.18 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-border flex flex-col gap-2">
              <a
                href="tel:+18563713971"
                className="flex items-center gap-2 font-bold text-sm py-2 px-3"
                style={{ color: "oklch(0.35 0.10 145)", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                <Phone className="w-4 h-4" />
                856-371-3971
              </a>
              <Link
                href="/book"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center py-2.5 px-4 rounded-md font-bold text-sm"
                style={{
                  backgroundColor: "oklch(0.72 0.15 75)",
                  color: "oklch(0.18 0.01 60)",
                  fontFamily: "'Nunito Sans', sans-serif",
                }}
              >
                Book a Service
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
