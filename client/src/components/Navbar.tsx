/* ============================================================
   Navbar — Diamond Home Services LLC
   Palette: Parent navy+gold (#081830, #0F2244, #C8A24A, #E8D08A)
   7-page nav: Home | Diamond Cutz | A Diamond Girl | About Us | Gallery | Testimonials | Contact
   Phone: 856-371-3971 (Mike/lawn) | 856-981-0930 (Lydine/cleaning)
   ============================================================ */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";

const DHS_LOGO = "/manus-storage/diamond-home-services-logo_99065079.png";

// Parent palette hex tokens
const NAVY_900  = "#081830";
const NAVY_800  = "#0F2244";
const GOLD_500  = "#C8A24A";
const GOLD_300  = "#E8D08A";
const WHITE     = "#FFFFFF";
const CHARCOAL  = "#1A1F2E";

const navLinks = [
  { href: "/",             label: "Home" },
  { href: "/diamond-cutz", label: "Lawn" },
  { href: "/diamond-girl", label: "Cleaning" },
  { href: "/about",        label: "About" },
  { href: "/gallery",      label: "Gallery" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact",      label: "Contact" },
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
        backgroundColor: scrolled ? NAVY_900 : NAVY_800,
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.40)" : "none",
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-[68px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
            <img
              src={DHS_LOGO}
              alt="Diamond Home Services LLC"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-5">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold transition-all duration-200 pb-0.5 whitespace-nowrap"
                  style={{
                    color: isActive ? GOLD_500 : "rgba(255,255,255,0.85)",
                    borderBottom: isActive ? `2px solid ${GOLD_500}` : "2px solid transparent",
                    fontFamily: "'Oswald', sans-serif",
                    letterSpacing: "0.06em",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* GET QUOTE CTA */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden xl:flex items-center gap-1.5 text-sm font-bold px-5 py-2 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg whitespace-nowrap"
              style={{
                backgroundColor: GOLD_500,
                color: CHARCOAL,
                fontFamily: "'Oswald', sans-serif",
                letterSpacing: "0.08em",
              }}
            >
              GET QUOTE
            </Link>
            <button
              className="xl:hidden p-2 transition-colors"
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
          style={{ backgroundColor: NAVY_900, borderColor: "rgba(255,255,255,0.10)" }}
        >
          <div className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-semibold text-sm py-2.5 px-3 transition-colors"
                  style={{
                    color: isActive ? GOLD_500 : "rgba(255,255,255,0.85)",
                    backgroundColor: isActive ? "rgba(255,255,255,0.06)" : "transparent",
                    fontFamily: "'Oswald', sans-serif",
                    letterSpacing: "0.06em",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
            <div
              className="pt-3 mt-1 flex flex-col gap-2"
              style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}
            >
              <a
                href="tel:+18563713971"
                className="flex items-center gap-2 font-bold text-sm py-2 px-3"
                style={{ color: GOLD_500, fontFamily: "'Manrope', sans-serif" }}
              >
                <Phone className="w-4 h-4" />
                Lawn (Mike): 856-371-3971
              </a>
              <a
                href="tel:+18569810930"
                className="flex items-center gap-2 font-bold text-sm py-2 px-3"
                style={{ color: GOLD_300, fontFamily: "'Manrope', sans-serif" }}
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
