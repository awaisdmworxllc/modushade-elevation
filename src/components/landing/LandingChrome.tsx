import { MessageCircle, Phone } from "lucide-react";
import { site } from "@/data/site";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/analytics";

/**
 * Simplified, conversion-focused chrome for the paid landing pages.
 * Deliberately has NO site navigation — only the logo, Call, WhatsApp and the
 * consultation anchor, so paid traffic is not sent browsing.
 */
export function LandingHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-3 sm:h-20">
        <a href="/" className="flex items-center gap-3" aria-label={`${site.name} home`}>
          <img
            src="/logo.svg"
            alt={`${site.name} logo`}
            width={160}
            height={40}
            className="h-9 w-auto sm:h-11"
          />
        </a>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={site.phoneHref}
            onClick={() => trackPhoneClick("landing_header")}
            className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-2 text-sm font-bold transition hover:border-primary hover:text-primary sm:px-5 sm:py-2.5"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">{site.phone}</span>
            <span className="sr-only sm:hidden">Call {site.phone}</span>
          </a>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener"
            onClick={() => trackWhatsAppClick("landing_header")}
            className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-2 text-sm font-bold transition hover:border-primary hover:text-primary sm:px-5 sm:py-2.5"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">WhatsApp</span>
            <span className="sr-only sm:hidden">Message us on WhatsApp</span>
          </a>
          <a
            href="#consultation"
            className="hidden items-center rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-lift transition hover:-translate-y-0.5 md:inline-flex"
          >
            Free Consultation
          </a>
        </div>
      </div>
    </header>
  );
}

export function LandingFooter() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="container-page flex flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          <span className="font-bold text-foreground">{site.name}</span> — {site.tagline}
        </p>
        <p>
          <a href={site.phoneHref} onClick={() => trackPhoneClick("landing_footer")} className="font-bold text-foreground hover:text-primary">
            {site.phone}
          </a>
          <span className="px-2">·</span>
          <a href={site.emailHref} className="hover:text-primary">
            {site.email}
          </a>
        </p>
      </div>
      <div className="container-page mt-4 text-xs text-muted-foreground">
        {site.serviceAreaSummary}. © {new Date().getFullYear()} {site.legalName}.
      </div>
    </footer>
  );
}

/** Sticky mobile action bar: Call · WhatsApp · Free Consultation. */
export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 backdrop-blur md:hidden">
      <div className="grid grid-cols-3 gap-2 p-2">
        <a
          href={site.phoneHref}
          onClick={() => trackPhoneClick("landing_sticky")}
          className="inline-flex flex-col items-center justify-center rounded-xl border border-border py-2 text-xs font-bold"
        >
          <Phone className="mb-0.5 h-4 w-4" aria-hidden="true" />
          Call
        </a>
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noopener"
          onClick={() => trackWhatsAppClick("landing_sticky")}
          className="inline-flex flex-col items-center justify-center rounded-xl border border-border py-2 text-xs font-bold"
        >
          <MessageCircle className="mb-0.5 h-4 w-4" aria-hidden="true" />
          WhatsApp
        </a>
        <a
          href="#consultation"
          className="inline-flex flex-col items-center justify-center rounded-xl bg-primary py-2 text-xs font-bold text-primary-foreground"
        >
          Free
          <span>Consultation</span>
        </a>
      </div>
    </div>
  );
}

/** Inline Call + WhatsApp pair used inside hero and CTA blocks. */
export function LandingActions({
  location,
  onDark = false,
}: {
  location: string;
  onDark?: boolean;
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full border px-6 py-3.5 text-sm font-bold transition hover:border-primary hover:text-primary";
  const tone = onDark ? "border-ink-foreground/40 text-ink-foreground" : "border-border text-foreground";
  return (
    <>
      <a href={site.phoneHref} onClick={() => trackPhoneClick(location)} className={`${base} ${tone}`}>
        <Phone className="h-4 w-4" aria-hidden="true" /> Call Now
      </a>
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noopener"
        onClick={() => trackWhatsAppClick(location)}
        className={`${base} ${tone}`}
      >
        <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp
      </a>
    </>
  );
}
