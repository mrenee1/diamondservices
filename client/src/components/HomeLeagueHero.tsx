import { ArrowRight, CheckCircle2 } from "lucide-react";

const trustItems = [
  "Licensed & Insured",
  "Free Estimates",
  "Family Owned & Operated",
  "Satisfaction Guaranteed",
  "Nassau County, FL",
];

export default function HomeLeagueHero() {
  return (
    <>
      <section
        className="relative min-h-[560px] overflow-hidden bg-cover bg-center pt-16 md:pt-[4.5rem]"
        style={{ backgroundImage: "url('/backgrounds/big-leagues-hero.png')" }}
      >
        <div className="container relative z-10 flex min-h-[488px] items-start md:items-center">
          <div className="max-w-[620px] py-12 md:py-8">
            <p
              className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#e8d08a]"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Nassau County · Family-Owned · Est. 2019
            </p>

            <h1
              className="mb-5 text-[clamp(3.2rem,8vw,6.6rem)] font-black uppercase leading-[0.84] tracking-[-0.035em]"
              style={{ fontFamily: "'Anton', 'Oswald', sans-serif" }}
            >
              <span className="block text-white">Built for the</span>
              <span className="block text-[#c8a24a]">Big Leagues.</span>
            </h1>

            <p className="mb-7 max-w-[520px] text-base leading-relaxed text-white/80 md:text-lg">
              Two specialist crews, one trusted name. Diamond Cutz keeps your yard sharp. A Diamond Girl makes your home
              shine. Book either — or both.
            </p>

            <div className="mb-7 flex flex-col gap-3 sm:flex-row">
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
        <p
          className="absolute bottom-10 right-4 hidden text-[0.65rem] font-bold uppercase tracking-[0.24em] text-white/50 sm:block md:right-8"
          style={{ fontFamily: "'Oswald', sans-serif" }}
        >
          Licensed · Insured · Bonded
        </p>
      </section>

      <section className="bg-[#081830]">
        <div className="container py-5">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {trustItems.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#c8a24a]" />
                <span className="text-sm font-semibold text-white/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
