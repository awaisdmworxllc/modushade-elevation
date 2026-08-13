import { useEffect, useRef, useState } from "react";
import {
  HERO_POSTER_URL,
  HERO_VIDEO_URL,
  HERO_VIDEO_URL_WEBM,
} from "@/data/site";

/**
 * Full-bleed hero background: poster image first (fast LCP, no layout shift),
 * with the video fading in on top once it can actually play.
 *
 * The video layer only renders when HERO_VIDEO_URL is set in src/data/site.ts,
 * so the hero is fully functional either way.
 */
export function HeroVideo({
  posterUrl = HERO_POSTER_URL,
  posterAlt = "Custom motorized shades in a bright, modern living room",
}: {
  posterUrl?: string;
  posterAlt?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!HERO_VIDEO_URL) return;
    // Respect reduced-motion and very small/metered devices: poster only.
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }
    ).connection;
    const slow =
      connection?.saveData === true ||
      (connection?.effectiveType ? /2g/.test(connection.effectiveType) : false);
    if (reduced || slow) return;
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => setReady(false));
  }, [enabled]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-ink">
      <img
        src={posterUrl}
        alt={posterAlt}
        width={1920}
        height={1080}
        loading="eager"
        // eslint-disable-next-line react/no-unknown-property
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full animate-scale-in object-cover"
      />

      {enabled && HERO_VIDEO_URL ? (
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            ready ? "opacity-100" : "opacity-0"
          }`}
          poster={posterUrl}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          disablePictureInPicture
          aria-hidden="true"
          tabIndex={-1}
          onCanPlay={() => setReady(true)}
        >
          {HERO_VIDEO_URL_WEBM ? (
            <source src={HERO_VIDEO_URL_WEBM} type="video/webm" />
          ) : null}
          <source src={HERO_VIDEO_URL} type="video/mp4" />
        </video>
      ) : null}

      {/* Readability overlays — keep both so headline contrast never depends on the footage */}
      <div className="absolute inset-0 hero-overlay" aria-hidden="true" />
      <div className="absolute inset-0 hero-overlay-side" aria-hidden="true" />
    </div>
  );
}
