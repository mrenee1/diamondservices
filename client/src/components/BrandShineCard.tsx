import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ShineVariant = "girl" | "cutz" | "gold";

type BrandShineCardProps = {
  variant: ShineVariant;
  className?: string;
  children: ReactNode;
};

/** Card wrapper with sweep shine on hover (pink/teal for Girl, green for Cutz). */
export default function BrandShineCard({ variant, className, children }: BrandShineCardProps) {
  return (
    <div className={cn("brand-shine-card", `brand-shine-card--${variant}`, className)}>
      {children}
    </div>
  );
}
