import HeroImage from "@/components/HeroImage";

export default function HomeLeagueHero() {
  return (
    <section className="bg-[#020a23] pt-16 md:pt-[4.5rem]">
      <HeroImage
        src="/heroes/home-hero.jpg"
        alt="Diamond Home Services — Built for the Big Leagues. Diamond Cutz lawn care and A Diamond Girl home cleaning."
        objectPosition="center center"
      />
    </section>
  );
}
