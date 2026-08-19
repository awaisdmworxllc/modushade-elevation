import { Flame, Sun } from "lucide-react";
import type { LandingPromo } from "@/data/landing";

/**
 * Premium seasonal promotion treatment for the paid landing pages.
 *
 * Copy is driven entirely by `LandingPromo` in src/data/landing.ts — no
 * invented end dates, coupon codes, minimums or countdown timers.
 */

/** Rounded, translucent pill used once at the top of the hero. */
export function PromoBadge({ promo, onDark = false }: { promo: LandingPromo; onDark?: boolean }) {
  return (
    <span
      className={`inline-flex max-w-full items-center gap-2 rounded-full border px-3.5 py-1.5 text-[0.68rem] font-bold tracking-[0.16em] uppercase backdrop-blur-sm sm:px-4 sm:py-2 sm:text-xs ${
        onDark
          ? "border-ink-foreground/25 bg-ink/55 text-ink-foreground"
          : "border-border bg-card text-foreground"
      }`}
    >
      <Sun className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
      <span className="truncate">{promo.badge}</span>
    </span>
  );
}

/**
 * Smaller reinforcement strip shown once, directly above the consultation
 * form — deliberately not the large hero badge again.
 */
export function PromoStrip({ promo }: { promo: LandingPromo }) {
  return (
    <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-primary/30 bg-card p-5 shadow-elegant sm:flex-row sm:items-center sm:justify-between sm:p-6">
      <div>
        <p className="flex items-center gap-2 text-xs font-bold tracking-[0.16em] uppercase">
          <Flame className="h-4 w-4 text-primary" aria-hidden="true" />
          {promo.stripTitle}
        </p>
        <p className="mt-2 text-sm text-muted-foreground sm:text-base">{promo.support}</p>
      </div>
      <a
        href="#consultation"
        className="inline-flex shrink-0 items-center justify-center rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-lift transition hover:-translate-y-0.5"
      >
        {promo.cta}
      </a>
    </div>
  );
}
