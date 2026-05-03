/* ============================================================
   Footer — Diamond Cutz Lawn and Landscaping
   Design: "Tributary Roots" — dark moss green, warm accents
   Real business: Mike Petrutz | 856-371-3971 | mpetrutz@yahoo.com
   Sister business: A Diamond Girl Home Cleaning Service | 856-981-0930
   ============================================================ */

import { Phone, Mail, MapPin, Facebook, Instagram, Star } from "lucide-react";
import { Link } from "wouter";

const DIAMOND_CUTZ_LOGO = "/manus-storage/diamond-cutz-logo_7523a9b6.png";
const DIAMOND_GIRL_LOGO = "/manus-storage/diamond-girl-logo_26e7435d.png";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "oklch(0.20 0.08 145)" }} className="text-white">
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img
                src={DIAMOND_CUTZ_LOGO}
                alt="Diamond Cutz Lawn and Landscaping"
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "oklch(0.80 0.03 145)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Your trusted lawn care and landscaping specialists proudly serving the Tributary community in Yulee, Florida. Family-owned and operated.
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
                "Handyman Services",
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
            <ul className="space-y-2.5 mb-6">
              {[
                { label: "Book a Service", href: "/book" },
                { label: "All Services", href: "/services" },
                { label: "About Us", href: "/#about" },
                { label: "Customer Reviews", href: "/#testimonials" },
                { label: "Contact Us", href: "/#contact" },
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

            {/* Sister Business */}
            <div className="p-3 rounded-xl" style={{ backgroundColor: "oklch(0.28 0.09 145)" }}>
              <p className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: "oklch(0.72 0.15 75)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Sister Business
              </p>
              <img
                src={DIAMOND_GIRL_LOGO}
                alt="A Diamond Girl Home Cleaning Service"
                className="h-14 w-auto object-contain mb-2"
              />
              <a
                href="tel:+18569810930"
                className="flex items-center gap-1.5 text-sm font-bold transition-colors hover:text-white"
                style={{ color: "oklch(0.82 0.12 80)", fontFamily: "'Nunito Sans', sans-serif" }}
              >
                <Phone className="w-3.5 h-3.5" />
                856-981-0930
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4 text-base" style={{ fontFamily: "'Lora', serif" }}>Contact Us</h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "oklch(0.72 0.15 75)" }} />
                <span className="text-sm" style={{ color: "oklch(0.80 0.03 145)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  75307 Plumbago Trace<br />
                  Yulee, FL 32097
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0" style={{ color: "oklch(0.72 0.15 75)" }} />
                <a
                  href="tel:+18563713971"
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: "oklch(0.80 0.03 145)", fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  856-371-3971
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0" style={{ color: "oklch(0.72 0.15 75)" }} />
                <a
                  href="mailto:mpetrutz@yahoo.com"
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: "oklch(0.80 0.03 145)", fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  mpetrutz@yahoo.com
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
            © {new Date().getFullYear()} Diamond Cutz Lawn and Landscaping. All rights reserved. · Yulee, FL 32097
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
