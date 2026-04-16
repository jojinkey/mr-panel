/**
 * Central media registry for all file.garden assets.
 *
 * Images: direct file.garden URLs — consumed by next/image which
 *   already proxies, optimises, and caches them via /_next/image.
 *
 * Videos: routed through /api/media which adds aggressive
 *   Cache-Control headers and forwards Range requests so the
 *   browser's HTTP cache persists them across sessions.
 */

const FG = "https://file.garden/aaq7u9giWjY0-o-W/MR%20PANEL";

export const MEDIA = {
  /** Logo PNG — transparent background */
  HERO_LOGO: `${FG}/MR%20Panel%20log%20png%20no%20bg.png`,
  /** Hero background video */
  HERO_VIDEO: "/api/media?key=hero-video",
  /** Ambient "still calm" video in VideoSection */
  CALM_VIDEO: "/api/media?key=calm-video",
  /** Furniture set product image in StorySection */
  FURNITURE: `${FG}/Furniture%20set.png`,
  /** Footer / alternate logo */
  FOOTER_LOGO: `${FG}/Gemini_Generated_Image_2k94uy2k94uy2k94.png`,
} as const;
