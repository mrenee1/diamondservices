/* ============================================================
   Footer — Diamond Home Services LLC (compact)
   ============================================================ */

import { MapPin, Star } from "lucide-react";
import { Link } from "wouter";
import { BRAND } from "@/lib/brand";
import { CONTACT } from "@/lib/contact";
import { ContactPhone } from "@/components/ContactPhone";
import ContactEmail from "@/components/ContactEmail";

const DHS_LOGO = "/manus-storage/pasted_file_MwGanH_image_7f7a812c.png";

export default function Footer() {
  return (
    <footer className="site-footer text-white" style={{ backgroundColor: BRAND.navy }}>
      <div className="container py-8 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          <div>
            <img src={DHS_LOGO} alt="Diamond Home Services LLC" className="h-12 w-auto object-contain mb-3" />
            <p className="text-sm leading-relaxed text-muted-brand" style={{ color: BRAND.bodyMuted }}>
              Family-owned home services proudly serving Nassau County, Florida — rooted in the Tributary community of Yulee.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <Link href="/diamond-cutz" className="font-semibold hover:text-white transition-colors" style={{ color: BRAND.goldLight }}>
                Diamond Cutz services →
              </Link>
              <Link href="/diamond-girl" className="font-semibold hover:text-white transition-colors" style={{ color: BRAND.goldLight }}>
                A Diamond Girl services →
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-3 text-base">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "Diamond Cutz", href: "/diamond-cutz" },
                { label: "A Diamond Girl", href: "/diamond-girl" },
                { label: "Testimonials", href: "/testimonials" },
                { label: "About Us", href: "/about" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: BRAND.bodyMuted }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-3 text-base">Contact</h4>
            <ul className="space-y-3 text-sm" style={{ color: BRAND.bodyMuted }}>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: BRAND.gold }} />
                <span>
                  Nassau County, FL
                  <br />
                  <span style={{ color: "oklch(0.55 0.04 255)" }}>Tributary, Yulee</span>
                </span>
              </li>
              <li>
                <p className="text-xs font-bold uppercase tracking-wide mb-1" style={{ color: BRAND.goldLight }}>
                  Lawn (Mike)
                </p>
                <ContactPhone contact={CONTACT.mike} linkClassName="hover:text-white transition-colors" />
              </li>
              <li>
                <p className="text-xs font-bold uppercase tracking-wide mb-1" style={{ color: BRAND.goldLight }}>
                  Cleaning (Lydine)
                </p>
                <ContactPhone contact={CONTACT.lydine} linkClassName="hover:text-white transition-colors" />
              </li>
              <li>
                <ContactEmail className="hover:text-white transition-colors" />
              </li>
            </ul>
            <p className="mt-4 text-xs" style={{ color: "oklch(0.55 0.04 255)" }}>
              Mon–Fri 7 AM – 6 PM · Sat 8 AM – 4 PM · Sun Closed
            </p>
          </div>
        </div>

        <div
          className="mt-8 pt-5 border-t flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: "oklch(0.30 0.08 255)" }}
        >
          <p className="text-xs" style={{ color: "oklch(0.55 0.04 255)" }}>
            © {new Date().getFullYear()} Diamond Home Services LLC · Nassau County, FL
          </p>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-current" style={{ color: BRAND.gold }} />
            ))}
            <span className="text-xs ml-1.5" style={{ color: "oklch(0.55 0.04 255)" }}>
              Licensed & Insured
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
