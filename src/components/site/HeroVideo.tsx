import { useEffect, useRef, useState } from "react";
import {
  HERO_POSTER_URL,
  HERO_VIDEO_URL,
  HERO_VIDEO_URL_WEBM,
} from "@/data/site";

/**
 * Full-bleed hero background video with a poster image underneath.
 *
 * - The <video> is the primary background: it autoplays muted, loops and plays
 *   inline on iOS. The poster image only shows until the first frame is ready
 *   (or permanently if the browser cannot play the file / reduced-motion).
 * - `ready` flips on loadeddata / playing / canplay so a browser that skips one
 *   of those events still reveals the video.
 * - Paused while the hero is scrolled out of view to save battery.
 */
export function HeroVideo({
  posterUrl = HERO_POSTER_URL,
  posterAlt = "Motorized roller shades lowering across floor-to-ceiling windows in a bright modern living room",
}: {
  posterUrl?: string;
  posterAlt?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const [enabled, setEnabled] = useState(false);

  // Mount the video after hydration (never during SSR) unless the visitor has
  // asked for reduced motion or is on a data-saving / very slow connection.
  useEffect(() => {
    if (!HERO_VIDEO_URL) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }
    ).connection;
    const slow =
      connection?.saveData === true ||
      (connection?.effectiveType ? /(^|-)2g/.test(connection.effectiveType) : false);
    if (reduced || slow) return;
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const wrap = wrapRef.current;
    const video = videoRef.current;
    if (!wrap || !video) return;

    const tryPlay = () => {
      const promise = video.play();
      if (promise) void promise.catch(() => undefined);
    };
    tryPlay();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) tryPlay();
        else video.pause();
      },
      { threshold: 0.05 },
    );
    observer.observe(wrap);

    // Some browsers block autoplay until the first user gesture.
    const onGesture = () => tryPlay();
    window.addEventListener("touchstart", onGesture, { once: true, passive: true });
    window.addEventListener("pointerdown", onGesture, { once: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("touchstart", onGesture);
      window.removeEventListener("pointerdown", onGesture);
    };
  }, [enabled]);

  const reveal = () => setReady(true);

  return (
    <div ref={wrapRef} className="absolute inset-0 overflow-hidden bg-ink">
      <img
        src={posterUrl}
        alt={posterAlt}
        width={1920}
        height={1080}
        loading="eager"
        // eslint-disable-next-line react/no-unknown-property
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {enabled && HERO_VIDEO_URL ? (
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            ready ? "opacity-100" : "opacity-0"
          }`}
          poster={posterUrl}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          aria-hidden="true"
          tabIndex={-1}
          onLoadedData={reveal}
          onCanPlay={reveal}
          onPlaying={reveal}
          onTimeUpdate={reveal}
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
