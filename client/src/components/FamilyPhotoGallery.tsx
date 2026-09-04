import { cn } from "@/lib/utils";
import BorderGlow from "@/components/BorderGlow";
import { handleImageError } from "@/lib/imageFallback";

export type FamilyPhoto = {
  src: string;
  alt: string;
  caption: string;
  featured?: boolean;
};

type FamilyPhotoGalleryProps = {
  photos: FamilyPhoto[];
  className?: string;
};

const NAVY_HEX = "#1b2845";

function FamilyPhotoCard({ photo, className }: { photo: FamilyPhoto; className?: string }) {
  return (
    <BorderGlow
      className={cn("w-full h-full", className)}
      alwaysGlow
      edgeSensitivity={24}
      glowColor="48 78 70"
      backgroundColor={NAVY_HEX}
      borderRadius={16}
      glowRadius={28}
      glowIntensity={1.25}
      coneSpread={26}
      colors={["#e8c96a", "#ffffff", "#c4a035"]}
      fillOpacity={0.45}
    >
      <div className="family-gallery-card">
        <div
          className={cn(
            "family-gallery-card__image overflow-hidden",
            photo.featured ? "aspect-[5/4]" : "aspect-[4/5]"
          )}
        >
          <img
            src={photo.src}
            alt={photo.alt}
            className="h-full w-full object-cover object-top"
            loading="lazy"
            onError={handleImageError}
          />
        </div>
        <p className="family-gallery-card__caption">{photo.caption}</p>
      </div>
    </BorderGlow>
  );
}

export default function FamilyPhotoGallery({ photos, className }: FamilyPhotoGalleryProps) {
  const featured = photos.find((p) => p.featured) ?? photos.find((p) => p.src.includes("petrutz-family"));
  const rest = photos.filter((p) => p !== featured);

  return (
    <div className={cn("family-photo-gallery", className)} aria-label="Family photos">
      {featured && (
        <FamilyPhotoCard photo={{ ...featured, featured: true }} className="family-gallery-featured" />
      )}
      <div className="family-gallery-grid">
        {rest.map((photo) => (
          <FamilyPhotoCard key={photo.src} photo={photo} />
        ))}
      </div>
    </div>
  );
}
