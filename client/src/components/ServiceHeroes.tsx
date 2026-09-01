import { Mail, MessageCircle, Phone } from "lucide-react";
import { CONTACT } from "@/lib/contact";
import { handleImageError } from "@/lib/imageFallback";

export function DiamondCutzHero() {
  return (
    <section className="bg-[#0e3a1c] pt-16 md:pt-[4.5rem]">
      <div className="container grid min-h-[500px] items-center gap-8 py-12 lg:grid-cols-[1fr_0.9fr] lg:py-16">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <p
            className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#e8d08a]"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Nassau County · Lawn & Landscaping
          </p>
          <h1
            className="mb-4 text-5xl font-black uppercase leading-[0.95] text-white md:text-7xl"
            style={{ fontFamily: "'Anton', 'Oswald', sans-serif" }}
          >
            Beautiful Lawns.
            <span className="block text-[#c8a24a]">Diamond Standard.</span>
          </h1>
          <p className="mx-auto mb-7 max-w-xl text-base leading-relaxed text-white/80 lg:mx-0 md:text-lg">
            Precision lawn care and landscaping from Mike and the Diamond Cutz crew, rooted in Yulee and serving
            communities throughout Nassau County.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a href={CONTACT.mike.tel} className="btn-brand-primary px-7 py-3.5 text-base">
              <Phone className="h-4 w-4" /> Call Mike: {CONTACT.mike.display}
            </a>
            <a href={CONTACT.mike.sms} className="inline-flex items-center justify-center gap-2 border-2 border-white/55 px-7 py-3.5 font-bold text-white">
              <MessageCircle className="h-4 w-4" /> Text for a Quote
            </a>
          </div>
        </div>
        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <img
            src="/logos/diamond-cutz.png"
            alt="Diamond Cutz Lawn and Landscaping"
            className="w-full max-w-[470px] rounded-2xl border-2 border-[#c8a24a] shadow-2xl"
            loading="eager"
            fetchPriority="high"
            onError={handleImageError}
          />
        </div>
      </div>
    </section>
  );
}

export function DiamondGirlHero() {
  return (
    <section className="bg-[#f4a7c3] pt-16 md:pt-[4.5rem]">
      <div className="container grid min-h-[520px] items-center gap-8 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-14">
        <div className="text-center lg:text-left">
          <p
            className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#5c1432]"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Home Cleaning · Deep Clean · Move-Out
          </p>
          <h1 className="mb-5 leading-[0.92]" style={{ fontFamily: "'Anton', 'Oswald', sans-serif" }}>
            <span className="block text-5xl font-black uppercase text-[#30101f] md:text-7xl">Every Home</span>
            <span
              className="block text-4xl font-bold italic text-[#7a1b42] md:text-6xl"
              style={{ fontFamily: "'Lora', serif" }}
            >
              deserves to
            </span>
            <span className="block text-5xl font-black uppercase text-[#30101f] md:text-7xl">Sparkle.</span>
          </h1>
          <p className="mx-auto mb-7 max-w-lg text-base leading-relaxed text-[#5c1432] lg:mx-0 md:text-lg">
            Deep cleans, move-in/move-out, and recurring maintenance — done by a small local team you&apos;ll actually
            recognize.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a href={CONTACT.lydine.tel} className="btn-brand-girl px-7 py-3.5 text-base">
              <Phone className="h-4 w-4" /> Call Lydine: {CONTACT.lydine.display}
            </a>
            <a href="#services" className="inline-flex items-center justify-center border-2 border-[#7a1b42] px-7 py-3.5 font-bold text-[#5c1432]">
              Our Services
            </a>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-[430px] overflow-hidden rounded-full border-4 border-[#c21b6b] bg-[#f9c8da] p-4 shadow-2xl">
            <img
              src="/logos/diamond-girl.png"
              alt="A Diamond Girl Home Cleaning Service"
              className="aspect-square w-full rounded-full object-cover"
              loading="eager"
              fetchPriority="high"
              onError={handleImageError}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutHero() {
  return (
    <section className="bg-[#081830] pt-16 md:pt-[4.5rem]">
      <div className="container flex min-h-[360px] flex-col items-center justify-center py-14 text-center">
        <img src="/logos/diamond-home-services.png" alt="" className="mb-5 h-24 w-auto" aria-hidden="true" />
        <p
          className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#e8d08a]"
          style={{ fontFamily: "'Oswald', sans-serif" }}
        >
          Our Story
        </p>
        <h1
          className="mb-4 text-5xl font-black uppercase text-white md:text-7xl"
          style={{ fontFamily: "'Anton', 'Oswald', sans-serif" }}
        >
          About Diamond Home Services
        </h1>
        <p className="max-w-2xl text-lg text-white/75">
          A family who bet on themselves — and built something beautiful in Nassau County, Florida.
        </p>
        <a href={CONTACT.mailto} className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#e8d08a] hover:underline">
          <Mail className="h-4 w-4" /> Get in touch
        </a>
      </div>
    </section>
  );
}
