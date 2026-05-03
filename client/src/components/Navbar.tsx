/* ============================================================
   Navbar — Diamond Home Services LLC
   5-page nav: Home | Diamond Cutz | A Diamond Girl | About Us | Gallery
   Phone: 856-371-3971 (lawn) | 856-981-0930 (cleaning)
   ============================================================ */

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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <img
              src={DIAMOND_CUTZ_LOGO}
              alt="Diamond Home Services LLC"
              className="h-11 md:h-14 w-auto object-contain"
              style={{ filter: scrolled ? "none" : "drop-shadow(0 2px 8px rgba(0,0,0,0.45))" }}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors duration-200 hover:opacity-80 pb-0.5 ${
                  location === link.href ? "border-b-2" : ""
                }`}
                style={{
                  color: scrolled ? "oklch(0.18 0.01 60)" : "white",
                  borderColor: "oklch(0.72 0.15 75)",
                  fontFamily: "'Nunito Sans', sans-serif",
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
              className="hidden lg:flex items-center gap-1.5 text-sm font-bold"
              style={{
                color: scrolled ? "oklch(0.35 0.10 145)" : "oklch(0.82 0.12 80)",
                fontFamily: "'Nunito Sans', sans-serif",
              }}
            >
              <Phone className="w-4 h-4" />
              856-371-3971
            </a>
            <button
              className="lg:hidden p-2 rounded-md"
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
        <div className="lg:hidden bg-white border-t border-border shadow-lg">
          <div className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-semibold text-sm py-2.5 px-3 rounded-md transition-colors hover:bg-secondary"
                style={{ color: "oklch(0.18 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-border flex flex-col gap-2">
              <a
                href="tel:+18563713971"
                className="flex items-center gap-2 font-bold text-sm py-2 px-3"
                style={{ color: "oklch(0.35 0.10 145)", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                <Phone className="w-4 h-4" />
                Lawn: 856-371-3971
              </a>
              <a
                href="tel:+18569810930"
                className="flex items-center gap-2 font-bold text-sm py-2 px-3"
                style={{ color: "oklch(0.35 0.10 145)", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                <Phone className="w-4 h-4" />
                Cleaning: 856-981-0930
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
