/**
 * Central media registry — ALL assets routed through /api/media.
 *
 * Routing every asset (video AND image) through the local proxy gives us:
 *   • Aggressive server-side caching (next: { revalidate: false })
 *   • Consistent Cache-Control headers on every response
 *   • Byte-range forwarding for video seeking
 *   • A single choke-point to swap CDN without touching components
 */
export const MEDIA = {
  /** MR Panel logo — transparent PNG */
  HERO_LOGO:   "/api/media?key=hero-logo",
  /** Same logo used in footer */
  FOOTER_LOGO: "/api/media?key=hero-logo",
  /** Hero background video */
  HERO_VIDEO:  "/api/media?key=hero-video",
  /** Ambient "still calm" video in VideoSection */
  CALM_VIDEO:  "/api/media?key=calm-video",
  /** Furniture set product image in StorySection */
  FURNITURE:   "/api/media?key=furniture",
} as const;
