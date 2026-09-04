import { ArrowRight } from "lucide-react";

export default function HomeLeagueHero() {
  return (
    <section
      className="relative min-h-[570px] overflow-hidden bg-[#020a23] pt-16 md:pt-[4.5rem]"
      aria-labelledby="home-hero-heading"
    >
      <img
        src="/heroes/home-hero.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-[58%_center] md:object-[55%_center]"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(2,10,35,0.98) 0%, rgba(2,10,35,0.94) 31%, rgba(2,10,35,0.72) 43%, rgba(2,10,35,0.12) 68%, rgba(2,10,35,0.05) 100%)",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#063d1f]/95 to-transparent" />

      <div className="container relative z-10 flex min-h-[498px] items-center">
        <div className="max-w-[530px] py-10 md:py-8">
            <p
              className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#e8d08a]"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Nassau County · Family-Owned · Est. 2019
            </p>

            <h1
              id="home-hero-heading"
              className="mb-5 text-[clamp(3.1rem,7vw,5.8rem)] font-black uppercase leading-[0.86] tracking-[-0.035em]"
              style={{ fontFamily: "'Anton', 'Oswald', sans-serif" }}
            >
              <span className="block text-white">Built for the</span>
              <span className="block text-[#c8a24a]">Big Leagues.</span>
            </h1>

            <p className="mb-7 max-w-[480px] text-base leading-relaxed text-white/85 md:text-[1.05rem]">
              Two specialist crews, one trusted name. Diamond Cutz keeps your yard sharp. A Diamond Girl makes your home
              shine. Book either — or both.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-[#c8a24a] px-7 py-3.5 text-sm font-bold uppercase tracking-[0.1em] text-[#081830] transition hover:-translate-y-0.5 hover:bg-[#e8d08a]"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                Get a Free Quote
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/55 px-7 py-3.5 text-sm font-bold uppercase tracking-[0.1em] text-white transition hover:-translate-y-0.5 hover:border-white"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                See Our Services <ArrowRight className="h-4 w-4" />
              </a>
            </div>
        </div>
      </div>
    </section>
  );
}
