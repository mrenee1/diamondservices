/* ============================================================
   Navbar — Diamond Home Services LLC
   Theme: Diamond Standard — Navy + Green + Gold + White
   Layout: logo left · nav links centered · phone + menu right
   ============================================================ */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { BRAND } from "@/lib/brand";
import { CONTACT } from "@/lib/contact";
import { SITE } from "@/lib/site";
import { ContactPhone } from "@/components/ContactPhone";

const DHS_LOGO = SITE.logo;
const DIAMOND_CUTZ_LOGO = "/logos/diamond-cutz.png";
const DIAMOND_GIRL_LOGO = "/manus-storage/diamond-girl-logo_26e7435d.png";

function navLogo(location: string) {
  if (location === "/diamond-cutz") return { src: DIAMOND_CUTZ_LOGO, alt: "Diamond Cutz Lawn and Landscaping" };
  if (location === "/diamond-girl") return { src: DIAMOND_GIRL_LOGO, alt: "A Diamond Girl Home Cleaning Service" };
  return { src: DHS_LOGO, alt: "Diamond Home Services LLC" };
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/diamond-cutz", label: "Diamond Cutz" },
  { href: "/diamond-girl", label: "A Diamond Girl" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/about", label: "About Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const logo = navLogo(location);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="site-header fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? BRAND.navyDark : BRAND.navy,
        borderBottom: `1px solid ${BRAND.gold}`,
        boxShadow: scrolled ? "0 2px 16px oklch(0 0 0 / 0.35)" : "none",
      }}
    >
      <div className="relative flex items-center h-16 md:h-[4.5rem] w-full">
        {/* Logo — flush left */}
        <Link href="/" className="relative z-10 flex items-center shrink-0 py-1 pl-4 sm:pl-6 lg:pl-8">
          <img
            src={logo.src}
            alt={logo.alt}
            className="h-10 md:h-12 w-auto object-contain max-w-[min(52vw,220px)]"
          />
        </Link>

        {/* Nav links — centered in header */}
        <div
          className="hidden xl:flex absolute inset-x-0 top-0 bottom-0 items-center justify-center pointer-events-none"
          aria-label="Main navigation"
          role="navigation"
        >
          <div className="flex items-center justify-center gap-4 2xl:gap-5 pointer-events-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold transition-all duration-200 pb-0.5 whitespace-nowrap"
                style={{
                  color: location === link.href ? BRAND.gold : BRAND.navText,
                  borderBottom: location === link.href ? `2px solid ${BRAND.gold}` : "2px solid transparent",
                  fontFamily: "'Nunito Sans', sans-serif",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Phone + menu — right */}
        <div className="relative z-10 flex items-center gap-3 sm:gap-4 shrink-0 ml-auto pr-4 sm:pr-6 lg:pr-8">
          <ContactPhone
            contact={CONTACT.mike}
            className="hidden xl:flex btn-brand-primary text-sm px-4 py-2"
            linkClassName="text-white hover:text-white"
            iconClassName="w-4 h-4"
          />

          <button
            type="button"
            className="xl:hidden p-2.5 rounded-md transition-colors"
            style={{ color: BRAND.white }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          className="xl:hidden border-t"
          style={{ backgroundColor: BRAND.navyDark, borderColor: `${BRAND.gold}33` }}
        >
          <div className="max-w-[1280px] mx-auto py-4 px-4 sm:px-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-semibold text-sm py-2.5 px-3 rounded-md transition-colors"
                style={{
                  color: location === link.href ? BRAND.gold : BRAND.navText,
                  backgroundColor: location === link.href ? "oklch(1 0 0 / 0.06)" : "transparent",
                  fontFamily: "'Nunito Sans', sans-serif",
                }}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 mt-1 flex flex-col gap-3" style={{ borderTop: `1px solid ${BRAND.gold}33` }}>
              <div className="px-3 py-2" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                <p className="text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: BRAND.gold }}>
                  Lawn (Mike)
                </p>
                <ContactPhone contact={CONTACT.mike} linkClassName="font-bold text-sm hover:opacity-90" />
              </div>
              <div className="px-3 py-2" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                <p className="text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: BRAND.goldLight }}>
                  Cleaning (Lydine)
                </p>
                <ContactPhone contact={CONTACT.lydine} linkClassName="font-bold text-sm hover:opacity-90" />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
