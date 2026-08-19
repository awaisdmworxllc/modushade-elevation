import { useState } from "react";
import { CheckCircle2, MessageCircle, Phone } from "lucide-react";
import { site } from "@/data/site";
import { leadSource, trackEvent, trackPhoneClick, trackWhatsAppClick } from "@/lib/analytics";

/**
 * Short, mobile-first lead form for the paid landing pages.
 *
 * No backend is connected yet, so a submission hands off to a pre-filled email
 * to ModuShade. The conversion event fires ONLY here, after a valid submit —
 * never on page view, form open or form start. When a backend is added, replace
 * the mailto handoff and keep the `trackEvent("generate_lead", …)` call.
 */
export function LandingLeadForm({
  formName,
  interestOptions,
  title,
}: {
  formName: string;
  interestOptions: string[];
  title: string;
}) {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const get = (key: string) => String(data.get(key) ?? "").trim();
    const source = leadSource();

    const body = [
      `Name: ${get("name")}`,
      `Phone: ${get("phone")}`,
      `Email: ${get("email")}`,
      `ZIP code: ${get("zip")}`,
      `Interested in: ${get("interest")}`,
      "",
      `Landing page: ${formName}`,
      `Campaign: ${source["utm_campaign"] ?? "—"} / ${source["utm_source"] ?? "—"} / ${
        source["utm_medium"] ?? "—"
      }`,
      `GCLID: ${source["gclid"] ?? "—"}`,
    ].join("\n");

    // Conversion: successful consultation request from a paid landing page.
    trackEvent("generate_lead", { form_name: formName, lead_type: "consultation_request" });
    setSent(true);
    window.location.href = `${site.emailHref}?subject=${encodeURIComponent(
      `Free consultation request — ${get("name") || formName}`,
    )}&body=${encodeURIComponent(body)}`;
  }

  if (sent) {
    return (
      <div
        id="consultation-success"
        role="status"
        className="rounded-2xl border border-border bg-card p-7 text-center shadow-elegant sm:p-10"
      >
        <CheckCircle2 className="mx-auto h-10 w-10 text-primary" aria-hidden="true" />
        <h2 className="display-md mt-4 text-2xl">
          Thank you — your consultation request has been received.
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          {site.founder} will be in touch to arrange your free in-home consultation. Prefer to talk
          right now?
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={site.phoneHref}
            onClick={() => trackPhoneClick("landing_success")}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-lift"
          >
            <Phone className="h-4 w-4" aria-hidden="true" /> Call Now
          </a>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener"
            onClick={() => trackWhatsAppClick("landing_success")}
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-bold"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-6 shadow-elegant sm:p-8"
    >
      <p className="eyebrow">Free in-home consultation</p>
      <h2 className="display-md mt-3 text-2xl">{title}</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Five quick details and we will arrange a visit with samples. Or call {site.phone}.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" required autoComplete="name" />
        <Field label="Phone" name="phone" type="tel" required autoComplete="tel" inputMode="tel" />
        <Field label="Email" name="email" type="email" required autoComplete="email" inputMode="email" />
        <Field
          label="ZIP code"
          name="zip"
          required
          autoComplete="postal-code"
          inputMode="numeric"
          pattern="[0-9]{5}"
        />
        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label htmlFor="interest" className="text-xs font-bold tracking-wide uppercase">
            Product / project interest
          </label>
          <select
            id="interest"
            name="interest"
            defaultValue={interestOptions[0]}
            className="rounded-lg border border-input bg-background px-4 py-3 text-base outline-none focus:border-primary focus:ring-2 focus:ring-ring/40 sm:text-sm"
          >
            {interestOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary px-7 py-4 text-sm font-bold text-primary-foreground shadow-lift transition hover:-translate-y-0.5"
      >
        Schedule My Free Consultation
      </button>
      <p className="mt-3 text-xs text-muted-foreground">
        No obligation. We never share your details.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  inputMode,
  pattern,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  inputMode?: "tel" | "email" | "numeric";
  pattern?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-xs font-bold tracking-wide uppercase">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        inputMode={inputMode}
        pattern={pattern}
        className="rounded-lg border border-input bg-background px-4 py-3 text-base outline-none focus:border-primary focus:ring-2 focus:ring-ring/40 sm:text-sm"
      />
    </div>
  );
}
