/**
 * Analytics + lead-source tracking.
 *
 * NOTHING is loaded until you add your own IDs below (or the matching
 * VITE_ env vars). No third-party script is injected while they are empty, so
 * Core Web Vitals stay unaffected until you are ready.
 *
 * Add ONE of the two — GTM (recommended if you also run Google Ads) or GA4
 * directly. Adding both would double-count events.
 */
export const GTM_ID = (import.meta.env["VITE_GTM_ID"] as string | undefined) ?? "";
export const GA4_MEASUREMENT_ID =
  (import.meta.env["VITE_GA4_ID"] as string | undefined) ?? "";

type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Push a conversion / interaction event to GTM's dataLayer and GA4. */
export function trackEvent(event: string, params: EventParams = {}) {
  if (typeof window === "undefined") return;
  const payload = { ...leadSource(), ...params };
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...payload });
  if (typeof window.gtag === "function") {
    window.gtag("event", event, payload);
  }
}

/**
 * Lead-source attribution: UTM parameters when present, otherwise a best-effort
 * channel derived from the referrer (google organic, GBP, direct, referral).
 */
export function leadSource(): EventParams {
  if (typeof window === "undefined") return {};
  try {
    const params = new URLSearchParams(window.location.search);
    const stored = readStoredSource();
    const utm = {
      utm_source: params.get("utm_source") ?? stored.utm_source,
      utm_medium: params.get("utm_medium") ?? stored.utm_medium,
      utm_campaign: params.get("utm_campaign") ?? stored.utm_campaign,
      gclid: params.get("gclid") ?? stored.gclid,
    };
    return { ...utm, lead_channel: channel(utm), landing_page: window.location.pathname };
  } catch {
    return {};
  }
}

type StoredSource = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  gclid?: string;
};

const STORAGE_KEY = "ms_lead_source";

function readStoredSource(): StoredSource {
  try {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY) ?? "{}") as StoredSource;
  } catch {
    return {};
  }
}

/** Call once after hydration so the original source survives internal navigation. */
export function captureLeadSource() {
  if (typeof window === "undefined") return;
  try {
    const params = new URLSearchParams(window.location.search);
    const incoming: StoredSource = {};
    for (const key of ["utm_source", "utm_medium", "utm_campaign", "gclid"] as const) {
      const value = params.get(key);
      if (value) incoming[key] = value;
    }
    if (Object.keys(incoming).length && !sessionStorage.getItem(STORAGE_KEY)) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(incoming));
    }
  } catch {
    /* storage unavailable — attribution falls back to referrer */
  }
}

function channel(utm: {
  utm_source?: string | undefined;
  utm_medium?: string | undefined;
  gclid?: string | undefined;
}): string {
  if (utm.gclid || utm.utm_medium === "cpc") return "google_ads";
  if (utm.utm_source) {
    if (/google.*(business|gbp|maps)/i.test(`${utm.utm_source}${utm.utm_medium ?? ""}`))
      return "google_business_profile";
    return "campaign";
  }
  const ref = document.referrer;
  if (!ref) return "direct";
  if (/google\./i.test(ref)) return "google_organic";
  if (/bing\.|duckduckgo\.|yahoo\./i.test(ref)) return "other_organic";
  return "referral";
}

/** Convenience wrappers used by CTA components. */
export const trackPhoneClick = (location: string) =>
  trackEvent("phone_click", { cta_location: location });
export const trackWhatsAppClick = (location: string) =>
  trackEvent("whatsapp_click", { cta_location: location });
export const trackEmailClick = (location: string) =>
  trackEvent("email_click", { cta_location: location });
export const trackFormSubmit = (formName: string) =>
  trackEvent("generate_lead", { form_name: formName });
