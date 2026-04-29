/* ============================================================
   Navbar — Tributary Lawn & Landscape
   Design: "Tributary Roots" — sticky top nav, moss green brand
   ============================================================ */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Leaf, Phone } from "lucide-react";

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
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: "oklch(0.35 0.10 145)" }}>
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col leading-tight">
              <span
                className="font-display font-bold text-base leading-tight"
                style={{ color: scrolled ? "oklch(0.18 0.01 60)" : "white", fontFamily: "'Lora', serif" }}
              >
                Tributary
              </span>
              <span
                className="font-body text-xs font-600 tracking-widest uppercase"
                style={{ color: scrolled ? "oklch(0.35 0.10 145)" : "oklch(0.82 0.12 80)", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                Lawn & Landscape
              </span>
            </div>
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
                className={`font-body text-sm font-600 transition-colors duration-200 hover:opacity-80 ${
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
              href="tel:+19045550123"
              className="hidden md:flex items-center gap-1.5 text-sm font-body font-700"
              style={{ color: scrolled ? "oklch(0.35 0.10 145)" : "oklch(0.82 0.12 80)", fontFamily: "'Nunito Sans', sans-serif" }}
            >
              <Phone className="w-4 h-4" />
              (904) 555-0123
            </a>
            <Link
              href="/book"
              className="hidden md:inline-flex items-center px-4 py-2 rounded-md text-sm font-body font-700 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
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
                className="font-body font-600 text-sm py-2.5 px-3 rounded-md transition-colors hover:bg-secondary"
                style={{ color: "oklch(0.18 0.01 60)", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-border flex flex-col gap-2">
              <a
                href="tel:+19045550123"
                className="flex items-center gap-2 font-body font-700 text-sm py-2 px-3"
                style={{ color: "oklch(0.35 0.10 145)", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                <Phone className="w-4 h-4" />
                (904) 555-0123
              </a>
              <Link
                href="/book"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center py-2.5 px-4 rounded-md font-body font-700 text-sm"
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
