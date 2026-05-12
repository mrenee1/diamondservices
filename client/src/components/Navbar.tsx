/* ============================================================
   Navbar — Diamond Home Services LLC
   Theme: Diamond Standard — Navy + Green + Gold + White
   6-page nav: Home | Diamond Cutz | A Diamond Girl | About Us | Gallery | Testimonials
   Phone: 856-371-3971 (lawn) | 856-981-0930 (cleaning)
   ============================================================ */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";

const DHS_LOGO          = "/manus-storage/pasted_file_MwGanH_image_7f7a812c.png";
const DIAMOND_GIRL_LOGO = "/manus-storage/diamond-girl-logo_26e7435d.png";
const DIAMOND_CUTZ_LOGO = "/manus-storage/diamond-cutz-logo_7523a9b6.png";

const NAVY      = "oklch(0.22 0.08 255)";
const NAVY_DARK = "oklch(0.16 0.07 255)";
const GOLD      = "oklch(0.75 0.16 75)";
const GOLD_LT   = "oklch(0.85 0.13 80)";
const GREEN     = "oklch(0.45 0.14 145)";
const WHITE     = "oklch(1 0 0)";
const CHARCOAL  = "oklch(0.18 0.02 255)";

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
        backgroundColor: scrolled ? NAVY_DARK : NAVY,
        boxShadow: scrolled ? "0 2px 16px oklch(0 0 0 / 0.35)" : "none",
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo — swaps based on which page you're on */}
          <Link href="/" className="flex items-center gap-2 group">
            {location === "/diamond-girl" ? (
              <img
                src={DIAMOND_GIRL_LOGO}
                alt="A Diamond Girl Home Cleaning Service"
                className="h-10 md:h-12 w-auto object-contain"
              />
            ) : location === "/diamond-cutz" ? (
              <img
                src={DIAMOND_CUTZ_LOGO}
                alt="Diamond Cutz Lawn & Landscaping"
                className="h-10 md:h-12 w-auto object-contain"
              />
            ) : (
              <img
                src={DHS_LOGO}
                alt="Diamond Home Services LLC"
                className="h-10 md:h-12 w-auto object-contain"
              />
            )}
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold transition-all duration-200 pb-0.5"
                style={{
                  color: location === link.href ? GOLD : "oklch(0.88 0.02 255)",
                  borderBottom: location === link.href ? `2px solid ${GOLD}` : "2px solid transparent",
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
              className="hidden xl:flex items-center gap-1.5 text-sm font-bold px-4 py-2 rounded-md transition-all duration-200 hover:-translate-y-0.5"
              style={{
                backgroundColor: GOLD,
                color: CHARCOAL,
                fontFamily: "'Nunito Sans', sans-serif",
              }}
            >
              <Phone className="w-4 h-4" />
              856-371-3971
            </a>
            <button
              className="xl:hidden p-2 rounded-md transition-colors"
              style={{ color: WHITE }}
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
          className="xl:hidden border-t"
          style={{ backgroundColor: NAVY_DARK, borderColor: "oklch(1 0 0 / 0.10)" }}
        >
          <div className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-semibold text-sm py-2.5 px-3 rounded-md transition-colors"
                style={{
                  color: location === link.href ? GOLD : "oklch(0.88 0.02 255)",
                  backgroundColor: location === link.href ? "oklch(1 0 0 / 0.06)" : "transparent",
                  fontFamily: "'Nunito Sans', sans-serif",
                }}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 mt-1 flex flex-col gap-2" style={{ borderTop: "1px solid oklch(1 0 0 / 0.12)" }}>
              <a
                href="tel:+18563713971"
                className="flex items-center gap-2 font-bold text-sm py-2 px-3 rounded-md"
                style={{ color: GOLD, fontFamily: "'Nunito Sans', sans-serif" }}
              >
                <Phone className="w-4 h-4" />
                Lawn (Mike): 856-371-3971
              </a>
              <a
                href="tel:+18569810930"
                className="flex items-center gap-2 font-bold text-sm py-2 px-3 rounded-md"
                style={{ color: GOLD_LT, fontFamily: "'Nunito Sans', sans-serif" }}
              >
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
