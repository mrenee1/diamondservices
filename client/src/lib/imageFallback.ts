/* ============================================================
   Image fallback — Diamond Home Services LLC

   The site is a static SPA: every non-file request rewrites to
   index.html. That means a missing image path resolves to HTML,
   the browser can't decode it, and the visitor sees the grey
   "broken image" icon.

   `handleImageError` swaps any image that fails to load for an
   on-brand navy/gold diamond placeholder, so a bad path degrades
   quietly instead of breaking the page.
   ============================================================ */

import type { SyntheticEvent } from "react";

/** Navy card with a gold diamond — inlined so the fallback never needs the network. */
const PLACEHOLDER_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240" role="img" aria-label="Diamond Home Services">
  <rect width="320" height="240" fill="#1b2845"/>
  <path d="M160 78l38 30-38 54-38-54z" fill="#c4a035"/>
  <path d="M122 108h76l-38 54z" fill="#e8c96a"/>
  <text x="160" y="196" fill="#e8c96a" font-family="system-ui, sans-serif" font-size="17" font-weight="700" text-anchor="middle" letter-spacing="1.5">DIAMOND HOME</text>
</svg>`;

export const IMAGE_PLACEHOLDER = `data:image/svg+xml;utf8,${encodeURIComponent(PLACEHOLDER_SVG)}`;

/**
 * onError handler for <img>. Replaces a failed image with the brand
 * placeholder. The `data-fallback-applied` guard stops the handler
 * re-firing if the placeholder itself ever fails.
 */
export function handleImageError(event: SyntheticEvent<HTMLImageElement>) {
  const img = event.currentTarget;
  if (img.dataset.fallbackApplied === "true") return;
  img.dataset.fallbackApplied = "true";
  img.src = IMAGE_PLACEHOLDER;
}
