/* ============================================================
   A Diamond Girl Page — Home Cleaning Service
   Owner: Lydine | Phone: 856-981-0930
   ============================================================ */

import { Link } from "wouter";
import {
  Sparkles, Home, Star, Shield,
  CheckCircle2, Phone, MessageCircle, Mail, ArrowRight, Briefcase, Gem, Zap
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroImage from "@/components/HeroImage";
import BorderGlow from "@/components/BorderGlow";
import { BRAND } from "@/lib/brand";
import { CONTACT } from "@/lib/contact";

const HERO_IMAGE = "/manus-storage/1FF4FDBD-00A7-477C-89BC-36C8611DB049_3ec7f2e3.png";

const { girlPink: PINK, girlPinkDark: PINK_DK, girlTeal: TEAL } = BRAND;

const services = [
  {
    icon: Sparkles,
    title: "The Diamond Deep Clean",
    tagline: "When good enough isn't good enough.",
    description: "Our signature service. A thorough, top-to-bottom deep clean that reaches every surface, every corner, every forgotten spot. We don't just clean — we restore your home to its absolute best.",
    includes: ["Inside appliances & cabinets", "Baseboards & window sills", "Behind & under furniture", "Full bathroom deep scrub", "Ceiling fans & light fixtures", "Detailed kitchen degreasing"],
    frequency: "One-Time / Seasonal",
    badge: "Signature Service",
  },
  {
    icon: Home,
    title: "Recurring Diamond Shine",
    tagline: "Keep your home sparkling, always.",
    description: "Maintain that just-deep-cleaned feeling all year long. Lydine works around your schedule to keep your home consistently spotless — so you never have to worry about it.",
    includes: ["Full kitchen & bathroom cleaning", "Vacuuming & mopping all floors", "Dusting all surfaces & décor", "Sanitizing high-touch areas", "Customized checklist for your home"],
    frequency: "Weekly / Bi-Weekly / Monthly",
    badge: "Most Popular",
  },
  {
    icon: Star,
    title: "Move-In / Move-Out Clean",
    tagline: "Start fresh. Leave spotless.",
    description: "Moving is stressful enough. Let Lydine handle the clean so you can focus on the move. We leave every inch of the property sparkling — whether you're arriving or departing.",
    includes: ["Full property deep clean", "Inside all cabinets & drawers", "All appliances cleaned inside & out", "Bathrooms scrubbed & sanitized", "Window sills"],
    frequency: "One-Time",
    badge: null,
  },
  {
    icon: Gem,
    title: "Diamond-Level Kitchen Clean",
    tagline: "The heart of your home, treated like a gem.",
    description: "A dedicated, intensive kitchen cleaning service. We degrease, sanitize, and polish every surface until your kitchen truly shines. From the stovetop to the backsplash to inside the fridge.",
    includes: ["Full appliance degreasing & cleaning", "Cabinet fronts & hardware", "Backsplash & countertop polish", "Sink & faucet deep scrub", "Inside refrigerator & oven"],
    frequency: "One-Time / Add-On",
    badge: null,
  },
  {
    icon: Shield,
    title: "Post-Construction Clean",
    tagline: "Built beautiful. Now let's make it spotless.",
    description: "Construction and renovation leave behind dust, debris, and residue that requires specialized cleaning. Lydine gets your newly renovated space truly ready to enjoy.",
    includes: ["Construction dust removal", "Surface & floor deep cleaning", "Window & fixture cleaning", "Debris removal", "Final polish & inspection"],
    frequency: "One-Time",
    badge: null,
  },
  {
    icon: Zap,
    title: "Special Occasion Shine",
    tagline: "Because your guests deserve diamond clean.",
    description: "Hosting a gathering, holiday party, or special event? We'll get your home guest-ready before the occasion and clean up after — so you can enjoy every moment without lifting a finger.",
    includes: ["Pre-event deep clean", "Post-event cleanup", "Kitchen & bathroom focus", "Quick turnaround available", "Customized to your event needs"],
    frequency: "As Needed",
    badge: null,
  },
];

const catchphrases = [
  { text: "Diamond Shine, Every Time", icon: Gem },
  { text: "We Don't Just Clean — We Transform", icon: Sparkles },
  { text: "Your Home Deserves Diamond-Level Care", icon: Star },
  { text: "Deep Clean. Spotless. Guaranteed.", icon: Shield },
];

export default function DiamondGirlPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: BRAND.offwhite }}>
      <Navbar />

      <section className="w-full pt-16">
        <HeroImage
          src={HERO_IMAGE}
          alt="A Diamond Girl Home Cleaning Service — Diamond Clean. Sparkling Results."
          objectFit="cover"
          className="hero-banner--girl-bg"
        />
      </section>

      <section className="girl-catchphrase-section">
        <BorderGlow
          className="max-w-6xl mx-auto w-full"
          edgeSensitivity={28}
          glowColor="195 75 72"
          backgroundColor="#4a1d42"
          borderRadius={16}
          glowRadius={36}
          glowIntensity={1.15}
          coneSpread={28}
          animated
          colors={["#e879f9", "#f472b6", "#38bdf8"]}
          fillOpacity={0.45}
        >
          <div className="girl-catchphrase-inner py-8 md:py-9">
            <div className="container">
              <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                {catchphrases.map((phrase) => {
                  const Icon = phrase.icon;
                  return (
                    <div key={phrase.text} className="flex items-center gap-2">
                      <Icon className="w-4 h-4 flex-shrink-0" style={{ color: TEAL }} />
                      <span className="text-sm font-bold uppercase tracking-wide label-caps text-white">
                        {phrase.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </BorderGlow>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <span
              className="label-caps inline-block mb-3 px-3 py-1 rounded-full"
              style={{ backgroundColor: `${PINK}22`, color: PINK }}
            >
              Our Services
            </span>
            <h2 className="font-display text-4xl font-bold" style={{ color: BRAND.charcoal }}>
              The Diamond Clean Difference
            </h2>
            <p className="text-base mt-3 max-w-lg mx-auto text-muted-brand">
              Every service Lydine offers is built around one standard: diamond-level results. No shortcuts. No skipped corners. Just a spotlessly clean home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="service-card-brand service-card-brand--girl service-card-brand--no-hover bg-white rounded-2xl shadow-sm flex flex-col"
                >
                  <div className="p-6 flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${TEAL}22` }}>
                        <Icon className="w-6 h-6" style={{ color: TEAL }} />
                      </div>
                      {service.badge && (
                        <span className="label-caps text-xs px-2.5 py-0.5 rounded-full" style={{ backgroundColor: PINK, color: "white" }}>
                          {service.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-xl font-bold mb-1" style={{ color: BRAND.charcoal }}>{service.title}</h3>
                    <p className="text-xs font-semibold italic mb-3" style={{ color: TEAL }}>{service.tagline}</p>
                    <p className="text-sm leading-relaxed mb-4 text-muted-brand">{service.description}</p>
                    <div className="space-y-2 mb-4">
                      {service.includes.map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: PINK }} />
                          <span className="text-xs font-semibold text-muted-brand">{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full" style={{ backgroundColor: `${PINK}14`, color: PINK }}>
                      {service.frequency}
                    </div>
                  </div>
                  <div className="px-6 pb-6">
                    <div className="flex gap-2">
                      <a href={CONTACT.lydine.tel} className="btn-brand-girl flex-1 py-2.5 text-sm justify-center">
                        <Phone className="w-4 h-4" />
                        Call
                      </a>
                      <a href={CONTACT.lydine.sms} className="btn-brand-girl flex-1 py-2.5 text-sm justify-center">
                        <MessageCircle className="w-4 h-4" />
                        Text
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-10" style={{ backgroundColor: BRAND.sectionGray }}>
        <div className="container max-w-2xl text-center">
          <div className="bg-white rounded-2xl p-7 shadow-sm" style={{ border: `2px solid ${PINK}` }}>
            <Gem className="w-8 h-8 mx-auto mb-3" style={{ color: TEAL }} />
            <h3 className="font-display text-xl font-bold mb-2" style={{ color: BRAND.charcoal }}>
              Specialized Deep Cleaning — Not Household Chores
            </h3>
            <p className="text-sm leading-relaxed text-muted-brand">
              A Diamond Girl specializes in <strong style={{ color: PINK }}>professional deep cleaning services</strong> — not basic household tasks like laundry or dishes. Our focus is delivering a thorough, detailed clean that transforms your home from top to bottom. Have questions about what's included? Just call or text Lydine!
            </p>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: `linear-gradient(135deg, ${PINK_DK} 0%, ${PINK} 100%)` }}>
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: "white" }}>
              <Briefcase className="w-8 h-8" style={{ color: TEAL }} />
            </div>
            <span className="label-caps inline-block mb-3 px-3 py-1 rounded-full" style={{ backgroundColor: "oklch(1 0 0 / 0.2)", color: "white" }}>
              Now Hiring
            </span>
            <h3 className="font-display text-3xl font-bold text-white mb-3">Want to Join the Diamond Team?</h3>
            <p className="text-base mb-6" style={{ color: "oklch(0.95 0.02 255)" }}>
              We're always looking for reliable, detail-oriented people who take pride in their work. If you're interested in joining the A Diamond Girl family, reach out to Lydine directly by email.
            </p>
            <a href={CONTACT.mailto} className="btn-brand-girl px-8 py-3.5 text-base">
              <Mail className="w-4 h-4" />
              Email Lydine to Apply
            </a>
            <p className="text-xs mt-3" style={{ color: "oklch(0.92 0.03 255)" }}>
              Nassau County, FL · Flexible scheduling available
            </p>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: BRAND.offwhite }}>
        <div className="container text-center">
          <h2 className="font-display text-4xl font-bold mb-4" style={{ color: BRAND.charcoal }}>
            Ready for a Diamond-Level Clean?
          </h2>
          <p className="text-lg mb-8 max-w-lg mx-auto text-muted-brand">
            Call or text Lydine to schedule your first cleaning. Free estimates always available throughout Nassau County.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={CONTACT.lydine.tel} className="btn-brand-girl px-7 py-3.5 text-base justify-center">
              <Phone className="w-4 h-4" />
              Call: {CONTACT.lydine.display}
            </a>
            <a href={CONTACT.lydine.sms} className="btn-brand-girl-outline px-7 py-3.5 text-base justify-center">
              <MessageCircle className="w-4 h-4" />
              Text: {CONTACT.lydine.display}
            </a>
            <Link href="/testimonials" className="btn-brand-girl-outline px-7 py-3.5 text-base">
              See What Customers Say <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
