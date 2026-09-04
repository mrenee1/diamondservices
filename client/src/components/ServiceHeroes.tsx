import { Mail } from "lucide-react";
import { CONTACT } from "@/lib/contact";
import { handleImageError } from "@/lib/imageFallback";
import HeroImage from "@/components/HeroImage";

export function DiamondCutzHero() {
  return (
    <section className="bg-[#0e3a1c] pt-16 md:pt-[4.5rem]">
      <HeroImage
        src="/heroes/diamond-cutz-hero.jpg"
        alt="Beautiful Lawns. Diamond Standard. Diamond Cutz lawn and landscaping services."
        objectPosition="center center"
      />
    </section>
  );
}

export function DiamondGirlHero() {
  return (
    <section className="bg-[#4a092d] pt-16 md:pt-[4.5rem]">
      <HeroImage
        src="/heroes/diamond-girl-hero.jpg"
        alt="Diamond Clean. Sparkling Results. A Diamond Girl home cleaning services."
        objectPosition="center center"
      />
    </section>
  );
}

export function AboutHero() {
  return (
    <section className="bg-[#081830] pt-16 md:pt-[4.5rem]">
      <div className="container flex min-h-[360px] flex-col items-center justify-center py-14 text-center">
        <img
          src="/logos/diamond-home-services.png"
          alt=""
          className="mb-5 h-24 w-auto"
          aria-hidden="true"
          onError={handleImageError}
        />
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
