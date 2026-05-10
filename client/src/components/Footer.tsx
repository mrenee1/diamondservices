/* ============================================================
   Footer — Diamond Home Services LLC
   Palette: Parent navy+gold (#081830, #0F2244, #C8A24A, #E8D08A)
   7-page site: no social media, no booking
   Phone: 856-371-3971 (Mike/lawn) | 856-981-0930 (Lydine/cleaning)
   Email: diamondhomeservicesofflorida@gmail.com
   Nassau County, FL — no home address
   ============================================================ */

import { Phone, Mail, MapPin, Star } from "lucide-react";
import { Link } from "wouter";

const DIAMOND_CUTZ_LOGO = "/manus-storage/diamond-cutz-logo_7523a9b6.png";
const DIAMOND_GIRL_LOGO = "/manus-storage/diamond-girl-logo_26e7435d.png";

// Parent palette hex tokens
const NAVY_900  = "#081830";
const NAVY_800  = "#0F2244";
const NAVY_700  = "#18305C";
const GOLD_500  = "#C8A24A";
const GOLD_300  = "#E8D08A";
const GREEN_500 = "#2E8B3D";
const MAGENTA   = "#C21B6B";
const WHITE     = "#FFFFFF";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: NAVY_900 }} className="text-white">
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-3">
              <img
                src={DIAMOND_CUTZ_LOGO}
                alt="Diamond Cutz Lawn and Landscaping"
                className="h-16 w-auto object-contain mb-3"
              />
              <img
                src={DIAMOND_GIRL_LOGO}
                alt="A Diamond Girl Home Cleaning Service"
                className="h-16 w-auto object-contain"
              />
            </div>
            <p
              className="text-sm leading-relaxed mt-4"
              style={{ color: "rgba(255,255,255,0.68)", fontFamily: "'Manrope', sans-serif" }}
            >
              Family-owned and operated home services proudly serving Nassau County, Florida — rooted right here in the Tributary community of Yulee.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4
              className="font-bold text-white mb-4 text-base uppercase tracking-wide"
              style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.10em" }}
            >
              Our Services
            </h4>
            <ul className="space-y-2.5">
              <li>
                <p
                  className="text-xs font-bold uppercase tracking-wide mb-1.5"
                  style={{ color: GOLD_500, fontFamily: "'Oswald', sans-serif" }}
                >
                  Diamond Cutz
                </p>
              </li>
              {[
                "Lawn Mowing & Edging",
                "Landscape Design",
                "Fertilization & Weed Control",
                "Sod Installation",
                "Shrub & Hedge Trimming",
                "Mulching & Bed Care",
              ].map((s) => (
                <li key={s}>
                  <Link
                    href="/diamond-cutz"
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'Manrope', sans-serif" }}
                  >
                    {s}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <p
                  className="text-xs font-bold uppercase tracking-wide mb-1.5"
                  style={{ color: MAGENTA, fontFamily: "'Oswald', sans-serif" }}
                >
                  A Diamond Girl
                </p>
              </li>
              {[
                "Diamond Deep Clean",
                "Recurring Diamond Shine",
                "Move-In / Move-Out",
                "Post-Construction Clean",
              ].map((s) => (
                <li key={s}>
                  <Link
                    href="/diamond-girl"
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'Manrope', sans-serif" }}
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-bold text-white mb-4 text-base uppercase tracking-wide"
              style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.10em" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home",           href: "/" },
                { label: "Diamond Cutz",   href: "/diamond-cutz" },
                { label: "A Diamond Girl", href: "/diamond-girl" },
                { label: "About Us",       href: "/about" },
                { label: "Photo Gallery",  href: "/gallery" },
                { label: "Testimonials",   href: "/testimonials" },
                { label: "Contact",        href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'Manrope', sans-serif" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-bold text-white mb-4 text-base uppercase tracking-wide"
              style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.10em" }}
            >
              Contact Us
            </h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: GOLD_500 }} />
                <span
                  className="text-sm"
                  style={{ color: "rgba(255,255,255,0.72)", fontFamily: "'Manrope', sans-serif" }}
                >
                  Nassau County, FL
                  <br />
                  <span style={{ color: "rgba(255,255,255,0.45)" }}>
                    Rooted in the Tributary Community, Yulee
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: GOLD_500 }} />
                <div>
                  <a
                    href="tel:+18563713971"
                    className="text-sm block transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.72)", fontFamily: "'Manrope', sans-serif" }}
                  >
                    856-371-3971{" "}
                    <span style={{ color: "rgba(255,255,255,0.40)" }}>(Lawn — Mike)</span>
                  </a>
                  <a
                    href="tel:+18569810930"
                    className="text-sm block transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.72)", fontFamily: "'Manrope', sans-serif" }}
                  >
                    856-981-0930{" "}
                    <span style={{ color: "rgba(255,255,255,0.40)" }}>(Cleaning — Lydine)</span>
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0" style={{ color: GOLD_500 }} />
                <a
                  href="mailto:diamondhomeservicesofflorida@gmail.com"
                  className="text-sm transition-colors hover:text-white break-all"
                  style={{ color: "rgba(255,255,255,0.72)", fontFamily: "'Manrope', sans-serif" }}
                >
                  diamondhomeservicesofflorida@gmail.com
                </a>
              </li>
            </ul>
            <div
              className="mt-5 p-3"
              style={{ backgroundColor: NAVY_700 }}
            >
              <p
                className="text-xs font-bold uppercase tracking-wide mb-1"
                style={{ color: GOLD_500, fontFamily: "'Oswald', sans-serif", letterSpacing: "0.12em" }}
              >
                Business Hours
              </p>
              <p
                className="text-sm"
                style={{ color: "rgba(255,255,255,0.68)", fontFamily: "'Manrope', sans-serif" }}
              >
                Mon–Fri: 7:00 AM – 6:00 PM
                <br />
                Sat: 8:00 AM – 4:00 PM
                <br />
                Sun: Closed
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ borderTop: `1px solid ${NAVY_700}` }}
        >
          <p
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.38)", fontFamily: "'Manrope', sans-serif" }}
          >
            © {new Date().getFullYear()} Diamond Home Services LLC. All rights reserved. · Nassau County, FL
          </p>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-current" style={{ color: GOLD_500 }} />
            ))}
            <span
              className="text-xs ml-1.5"
              style={{ color: "rgba(255,255,255,0.38)", fontFamily: "'Manrope', sans-serif" }}
            >
              Licensed & Insured
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
