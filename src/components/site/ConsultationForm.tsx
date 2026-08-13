import { useState } from "react";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import { site } from "@/data/site";
import { leadSource, trackFormSubmit } from "@/lib/analytics";

/**
 * Consultation request form.
 *
 * No backend is connected yet, so submitting composes a pre-filled email to
 * ModuShade (and records the lead source for analytics). When a backend is
 * added, replace the mailto handoff in `handleSubmit` with the API call.
 */
export function ConsultationForm({
  defaultService = "",
  defaultLocation = "",
  formName = "consultation",
}: {
  defaultService?: string;
  defaultLocation?: string;
  formName?: string;
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
      `Town / area: ${get("area")}`,
      `Interested in: ${get("service")}`,
      `Number of windows: ${get("windows")}`,
      `Timeline: ${get("timeline")}`,
      "",
      "Details:",
      get("message"),
      "",
      `Lead source: ${source["lead_source"] ?? "direct"}`,
    ].join("\n");

    trackFormSubmit(formName);
    setSent(true);
    window.location.href = `${site.emailHref}?subject=${encodeURIComponent(
      `Consultation request — ${get("name") || "Website"}`,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-6 shadow-elegant sm:p-8"
    >
      <p className="eyebrow">Free in-home consultation</p>
      <h2 className="display-md mt-3 text-2xl">Tell us about your windows</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        We reply the same day where possible. Prefer to talk? Call {site.phone}.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" required autoComplete="name" />
        <Field label="Phone" name="phone" type="tel" required autoComplete="tel" />
        <Field label="Email" name="email" type="email" required autoComplete="email" />
        <div className="flex flex-col gap-1.5">
          <label htmlFor="area" className="text-xs font-bold tracking-wide uppercase">
            Town / area
          </label>
          <input
            id="area"
            name="area"
            list="ms-areas"
            defaultValue={defaultLocation}
            className="rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
          />
          <datalist id="ms-areas">
            {locations.map((l) => (
              <option key={l.slug} value={l.name} />
            ))}
          </datalist>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="service" className="text-xs font-bold tracking-wide uppercase">
            Interested in
          </label>
          <select
            id="service"
            name="service"
            defaultValue={defaultService}
            className="rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
          >
            <option value="">Not sure yet — please advise</option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="windows" className="text-xs font-bold tracking-wide uppercase">
            Number of windows
          </label>
          <select
            id="windows"
            name="windows"
            className="rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
          >
            <option>1–3</option>
            <option>4–8</option>
            <option>9–15</option>
            <option>Whole home</option>
          </select>
        </div>

        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label htmlFor="timeline" className="text-xs font-bold tracking-wide uppercase">
            Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            className="rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
          >
            <option>As soon as possible</option>
            <option>Next 1–3 months</option>
            <option>Planning / researching</option>
          </select>
        </div>

        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label htmlFor="message" className="text-xs font-bold tracking-wide uppercase">
            What would you like to achieve?
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="e.g. blackout shades in two bedrooms and motorized rollers for the tall living room windows"
            className="rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary px-7 py-4 text-sm font-bold text-primary-foreground shadow-lift transition hover:-translate-y-0.5"
      >
        Request my free consultation
      </button>
      <p className="mt-3 text-xs text-muted-foreground" role="status">
        {sent
          ? "Your email draft is open — press send and we'll be in touch."
          : "No obligation. We never share your details."}
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
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
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
        className="rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
      />
    </div>
  );
}
