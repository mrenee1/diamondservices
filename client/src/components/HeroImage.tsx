import { handleImageError } from "@/lib/imageFallback";
type HeroImageProps = {
  src: string;
  alt: string;
  className?: string;
  /** CSS object-position, e.g. "48% center" to shift focal point right */
  objectPosition?: string;
  /** cover fills the banner (no letterboxing); contain preserves full artwork */
  objectFit?: "contain" | "cover";
};

/** Full-width hero artwork — crisp display, adjustable focal point */
export default function HeroImage({
  src,
  alt,
  className = "",
  objectPosition = "48% center",
  objectFit = "contain",
}: HeroImageProps) {
  const fitClass = objectFit === "cover" ? "hero-banner--cover" : "";
  return (
    <div className={`hero-banner ${fitClass} ${className}`.trim()}>
      <img
        src={src}
        alt={alt}
        className="hero-banner__img"
        style={{ objectPosition }}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        onError={handleImageError}
      />
    </div>
  );
}
