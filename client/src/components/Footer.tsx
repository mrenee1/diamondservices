/* ============================================================
   Footer — Tributary Lawn & Landscape
   Design: "Tributary Roots" — dark moss green, warm accents
   ============================================================ */

import { Leaf, Phone, Mail, MapPin, Facebook, Instagram, Star } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "oklch(0.20 0.08 145)" }} className="text-white">
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: "oklch(0.72 0.15 75)" }}>
                <Leaf className="w-5 h-5" style={{ color: "oklch(0.18 0.01 60)" }} />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-base text-white" style={{ fontFamily: "'Lora', serif" }}>
                  Tributary
                </span>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "oklch(0.72 0.15 75)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Lawn & Landscape
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "oklch(0.80 0.03 145)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Your trusted lawn care and landscaping specialists proudly serving the Tributary community in Yulee, Florida.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:opacity-80"
                style={{ backgroundColor: "oklch(0.30 0.09 145)" }}
              >
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:opacity-80"
                style={{ backgroundColor: "oklch(0.30 0.09 145)" }}
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4 text-base" style={{ fontFamily: "'Lora', serif" }}>Our Services</h4>
            <ul className="space-y-2.5">
              {[
                "Lawn Mowing & Edging",
                "Landscape Design",
                "Fertilization & Weed Control",
                "Sod Installation",
                "Shrub & Hedge Trimming",
                "Mulching & Bed Care",
                "Irrigation Services",
                "Seasonal Clean-Up",
              ].map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "oklch(0.80 0.03 145)", fontFamily: "'Nunito Sans', sans-serif" }}
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-base" style={{ fontFamily: "'Lora', serif" }}>Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Book a Service", href: "/book" },
                { label: "All Services", href: "/services" },
                { label: "About Us", href: "/#about" },
                { label: "Customer Reviews", href: "/#testimonials" },
                { label: "Contact Us", href: "/#contact" },
                { label: "Service Area", href: "/#about" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "oklch(0.80 0.03 145)", fontFamily: "'Nunito Sans', sans-serif" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4 text-base" style={{ fontFamily: "'Lora', serif" }}>Contact Us</h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "oklch(0.72 0.15 75)" }} />
                <span className="text-sm" style={{ color: "oklch(0.80 0.03 145)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Tributary Community<br />
                  Yulee, FL 32097
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0" style={{ color: "oklch(0.72 0.15 75)" }} />
                <a
                  href="tel:+19045550123"
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: "oklch(0.80 0.03 145)", fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  (904) 555-0123
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0" style={{ color: "oklch(0.72 0.15 75)" }} />
                <a
                  href="mailto:hello@tributarylawn.com"
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: "oklch(0.80 0.03 145)", fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  hello@tributarylawn.com
                </a>
              </li>
            </ul>
            <div className="mt-5 p-3 rounded-lg" style={{ backgroundColor: "oklch(0.28 0.09 145)" }}>
              <p className="text-xs font-bold uppercase tracking-wide mb-1" style={{ color: "oklch(0.72 0.15 75)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Business Hours
              </p>
              <p className="text-sm" style={{ color: "oklch(0.80 0.03 145)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Mon–Fri: 7:00 AM – 6:00 PM<br />
                Sat: 8:00 AM – 4:00 PM<br />
                Sun: Closed
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-3" style={{ borderColor: "oklch(0.30 0.09 145)" }}>
          <p className="text-xs" style={{ color: "oklch(0.65 0.04 145)", fontFamily: "'Nunito Sans', sans-serif" }}>
            © {new Date().getFullYear()} Tributary Lawn & Landscape. All rights reserved. · Yulee, FL 32097
          </p>
          <div className="flex items-center gap-1">
            {[1,2,3,4,5].map(i => (
              <Star key={i} className="w-3.5 h-3.5 fill-current" style={{ color: "oklch(0.72 0.15 75)" }} />
            ))}
            <span className="text-xs ml-1.5" style={{ color: "oklch(0.65 0.04 145)", fontFamily: "'Nunito Sans', sans-serif" }}>
              5.0 · Licensed & Insured
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
