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
 * Performance rules:
 * - The <video> element is not mounted during SSR or first paint, so the poster
 *   image owns LCP and the video never competes for bandwidth with it.
 * - It mounts after the browser is idle (or ~1.2s later as a fallback).
 * - Skipped entirely for reduced-motion, save-data and 2G connections.
 * - Paused whenever the hero scrolls out of view.
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

    const idle = (
      window as Window & { requestIdleCallback?: (cb: () => void) => number }
    ).requestIdleCallback;
    if (idle) {
      const id = idle(() => setEnabled(true));
      return () => {
        (window as Window & { cancelIdleCallback?: (id: number) => void }).cancelIdleCallback?.(id);
      };
    }
    const timer = window.setTimeout(() => setEnabled(true), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  // Play only while the hero is on screen.
  useEffect(() => {
    if (!enabled) return;
    const wrap = wrapRef.current;
    const video = videoRef.current;
    if (!wrap || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          void video.play().catch(() => setReady(false));
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(wrap);
    return () => observer.disconnect();
  }, [enabled]);

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
        className="absolute inset-0 h-full w-full animate-scale-in object-cover"
      />

      {enabled && HERO_VIDEO_URL ? (
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ${
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
