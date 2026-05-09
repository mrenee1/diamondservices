/* ============================================================
   Footer — Diamond Home Services LLC
   6-page site: no social media, no booking
   Phone: 856-371-3971 (lawn) | 856-981-0930 (cleaning)
   Email: mpetrutz@yahoo.com
   Nassau County, FL — no home address
   ============================================================ */

import { Phone, Mail, MapPin, Star } from "lucide-react";
import { Link } from "wouter";

const DIAMOND_CUTZ_LOGO = "/manus-storage/diamond-cutz-logo_7523a9b6.png";
const DIAMOND_GIRL_LOGO = "/manus-storage/diamond-girl-logo_26e7435d.png";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "oklch(0.22 0.08 255)" }} className="text-white">
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-3">
              <img src={DIAMOND_CUTZ_LOGO} alt="Diamond Cutz Lawn and Landscaping" className="h-16 w-auto object-contain mb-3" />
              <img src={DIAMOND_GIRL_LOGO} alt="A Diamond Girl Home Cleaning Service" className="h-16 w-auto object-contain" />
            </div>
            <p className="text-sm leading-relaxed mt-4" style={{ color: "oklch(0.80 0.03 255)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Family-owned and operated home services proudly serving Nassau County, Florida — rooted right here in the Tributary community of Yulee.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4 text-base" style={{ fontFamily: "'Lora', serif" }}>Our Services</h4>
            <ul className="space-y-2.5">
              <li>
                <p className="text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: "oklch(0.75 0.16 75)", fontFamily: "'Nunito Sans', sans-serif" }}>Diamond Cutz</p>
              </li>
              {["Lawn Mowing & Edging", "Landscape Design", "Fertilization & Weed Control", "Sod Installation", "Shrub & Hedge Trimming", "Mulching & Bed Care"].map((s) => (
                <li key={s}>
                  <Link href="/diamond-cutz" className="text-sm transition-colors hover:text-white" style={{ color: "oklch(0.80 0.03 255)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    {s}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <p className="text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: "oklch(0.82 0.12 340)", fontFamily: "'Nunito Sans', sans-serif" }}>A Diamond Girl</p>
              </li>
              {["Diamond Deep Clean", "Recurring Diamond Shine", "Move-In / Move-Out", "Post-Construction Clean"].map((s) => (
                <li key={s}>
                  <Link href="/diamond-girl" className="text-sm transition-colors hover:text-white" style={{ color: "oklch(0.80 0.03 255)", fontFamily: "'Nunito Sans', sans-serif" }}>
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
                { label: "Home", href: "/" },
                { label: "Diamond Cutz", href: "/diamond-cutz" },
                { label: "A Diamond Girl", href: "/diamond-girl" },
                { label: "About Us", href: "/about" },
                { label: "Photo Gallery", href: "/gallery" },
                { label: "Testimonials", href: "/testimonials" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm transition-colors hover:text-white" style={{ color: "oklch(0.80 0.03 255)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4 text-base" style={{ fontFamily: "'Lora', serif" }}>Contact Us</h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "oklch(0.75 0.16 75)" }} />
                <span className="text-sm" style={{ color: "oklch(0.80 0.03 255)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  Nassau County, FL<br /><span style={{ color: "oklch(0.55 0.04 255)" }}>Rooted in the Tributary Community, Yulee</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "oklch(0.75 0.16 75)" }} />
                <div>
                  <a href="tel:+18563713971" className="text-sm block transition-colors hover:text-white" style={{ color: "oklch(0.80 0.03 255)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    856-371-3971 <span style={{ color: "oklch(0.55 0.04 255)" }}>(Lawn)</span>
                  </a>
                  <a href="tel:+18569810930" className="text-sm block transition-colors hover:text-white" style={{ color: "oklch(0.80 0.03 255)", fontFamily: "'Nunito Sans', sans-serif" }}>
                    856-981-0930 <span style={{ color: "oklch(0.55 0.04 255)" }}>(Cleaning)</span>
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0" style={{ color: "oklch(0.75 0.16 75)" }} />
                <a href="mailto:mpetrutz@yahoo.com" className="text-sm transition-colors hover:text-white" style={{ color: "oklch(0.80 0.03 255)", fontFamily: "'Nunito Sans', sans-serif" }}>
                  mpetrutz@yahoo.com
                </a>
              </li>
            </ul>
            <div className="mt-5 p-3 rounded-lg" style={{ backgroundColor: "oklch(0.28 0.08 255)" }}>
              <p className="text-xs font-bold uppercase tracking-wide mb-1" style={{ color: "oklch(0.75 0.16 75)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Business Hours
              </p>
              <p className="text-sm" style={{ color: "oklch(0.80 0.03 255)", fontFamily: "'Nunito Sans', sans-serif" }}>
                Mon–Fri: 7:00 AM – 6:00 PM<br />
                Sat: 8:00 AM – 4:00 PM<br />
                Sun: Closed
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-3" style={{ borderColor: "oklch(0.30 0.08 255)" }}>
          <p className="text-xs" style={{ color: "oklch(0.55 0.04 255)", fontFamily: "'Nunito Sans', sans-serif" }}>
            © {new Date().getFullYear()} Diamond Home Services LLC. All rights reserved. · Nassau County, FL
          </p>
          <div className="flex items-center gap-1">
            {[1,2,3,4,5].map(i => (
              <Star key={i} className="w-3.5 h-3.5 fill-current" style={{ color: "oklch(0.75 0.16 75)" }} />
            ))}
            <span className="text-xs ml-1.5" style={{ color: "oklch(0.55 0.04 255)", fontFamily: "'Nunito Sans', sans-serif" }}>
              Licensed & Insured
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
