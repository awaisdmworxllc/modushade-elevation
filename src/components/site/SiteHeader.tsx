import { Link } from "@tanstack/react-router";
import { Menu, MessageCircle, Phone, X, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { services, serviceGroups } from "@/data/services";
import { locations } from "@/data/locations";
import { site } from "@/data/site";
import { trackPhoneClick, trackWhatsAppClick, trackEmailClick } from "@/lib/analytics";

/**
 * Header layout is deliberately balanced in three zones:
 *   logo (fixed)  ·  navigation (centered, flexible)  ·  contact CTAs (fixed)
 * so adding the WhatsApp CTA does not crowd the navigation. Below `xl` the
 * contact cluster progressively collapses to icons, then to the mobile sheet.
 */
export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Utility bar — quiet, informational, hidden on small screens to keep the mobile header airy */}
      <div className="hidden bg-ink text-ink-foreground md:block">
        <div className="container-page flex items-center justify-between gap-6 py-2.5 text-[0.66rem] font-semibold tracking-[0.18em] uppercase">
          <p className="opacity-75">
            Complimentary in-home design consultation
            <span className="mx-2.5 text-primary">•</span>
            {site.serviceAreaShort}
          </p>
          <p className="flex items-center gap-3">
            <a
              href={site.emailHref}
              onClick={() => trackEmailClick("topbar")}
              className="tracking-[0.12em] normal-case opacity-80 transition hover:text-primary hover:opacity-100"
            >
              {site.email}
            </a>
            <span className="text-primary">•</span>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener"
              onClick={() => trackWhatsAppClick("topbar")}
              className="opacity-80 transition hover:text-primary hover:opacity-100"
            >
              WhatsApp
            </a>
          </p>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-lg">
        <div className="container-page flex h-[4.75rem] items-center justify-between gap-4 lg:h-[5.5rem] xl:gap-6">
          {/* Zone 1 — brand */}
          <Link
            to="/"
            className="flex shrink-0 items-center gap-3"
            aria-label="ModuShade — home"
          >
            <img
              src="/logo.svg"
              alt=""
              width={44}
              height={44}
              className="h-10 w-10 rounded-xl lg:h-11 lg:w-11"
            />
            <span className="leading-none">
              <span className="block text-[1.05rem] font-black tracking-[0.2em] lg:text-[1.15rem]">
                MODUSHADE
              </span>
              <span className="mt-1.5 hidden text-[0.58rem] font-semibold tracking-[0.22em] uppercase text-muted-foreground lg:block">
                Custom Window Treatments
              </span>
            </span>
          </Link>

          {/* Zone 2 — navigation */}
          <nav
            className="hidden items-center gap-x-4 xl:flex xl:gap-x-5 2xl:gap-x-6"
            aria-label="Main navigation"
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>

            <div className="group relative">
              <Link
                to="/services"
                className="flex items-center gap-1 text-[0.78rem] font-bold tracking-[0.04em] uppercase transition hover:text-primary"
              >
                Services <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
              <div className="invisible absolute left-1/2 top-full z-50 w-[46rem] -translate-x-1/2 pt-5 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div className="rounded-2xl border border-border bg-popover p-6 shadow-elegant">
                  <div className="grid grid-cols-3 gap-6">
                    {serviceGroups.map((group) => (
                      <div key={group.title}>
                        <p className="eyebrow mb-3">{group.title}</p>
                        <ul className="space-y-2">
                          {services
                            .filter((s) => s.group === group.title)
                            .map((s) => (
                              <li key={s.slug}>
                                <Link
                                  to="/services/$slug"
                                  params={{ slug: s.slug }}
                                  className={`block text-sm transition hover:text-primary ${
                                    s.slug === "motorized-shades" ? "font-bold" : ""
                                  }`}
                                >
                                  {s.navLabel}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
                    <Link to="/services" className="text-sm font-bold underline">
                      View all services
                    </Link>
                    <Link
                      to="/contact"
                      className="rounded-full bg-primary px-4 py-2 text-xs font-bold text-primary-foreground"
                    >
                      Free consultation
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <NavLink to="/services/motorized-shades">Motorized</NavLink>

            <NavLink to="/projects">Our Work</NavLink>



            <div className="group relative">
              <Link
                to="/service-areas"
                className="flex items-center gap-1 text-[0.78rem] font-bold tracking-[0.04em] uppercase transition hover:text-primary"
              >
                Areas <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
              <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-5 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div className="rounded-2xl border border-border bg-popover p-5 shadow-elegant">
                  <ul className="space-y-2">
                    {locations.map((l) => (
                      <li key={l.slug}>
                        <Link
                          to="/service-areas/$slug"
                          params={{ slug: l.slug }}
                          className="block text-sm transition hover:text-primary"
                        >
                          {l.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/service-areas"
                    className="mt-4 block border-t border-border pt-3 text-sm font-bold underline"
                  >
                    All service areas
                  </Link>
                </div>
              </div>
            </div>

            <NavLink to="/contact">Contact</NavLink>
          </nav>

          {/* Zone 3 — contact CTAs */}
          <div className="flex shrink-0 items-center gap-2.5 sm:gap-3">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener"
              onClick={() => trackWhatsAppClick("header")}
              aria-label="Message ModuShade on WhatsApp"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border px-3.5 text-[0.8rem] font-bold transition hover:border-primary hover:text-primary lg:px-5"
            >
              <MessageCircle className="h-[1.05rem] w-[1.05rem]" aria-hidden="true" />
              <span className="hidden lg:inline">WhatsApp</span>
            </a>

            <a
              href={site.phoneHref}
              onClick={() => trackPhoneClick("header")}
              aria-label={`Call ModuShade on ${site.phone}`}
              className="hidden h-11 items-center justify-center gap-2 rounded-full border border-border px-3.5 text-[0.8rem] font-bold transition hover:border-primary hover:text-primary sm:inline-flex lg:px-5"
            >
              <Phone className="h-[1.05rem] w-[1.05rem]" aria-hidden="true" />
              <span className="hidden 2xl:inline">{site.phone}</span>
            </a>

            <Link
              to="/contact"
              className="hidden h-11 items-center rounded-full bg-primary px-5 text-[0.8rem] font-bold text-primary-foreground shadow-lift transition hover:-translate-y-0.5 md:inline-flex xl:px-6"
            >
              Free Consultation
            </Link>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border transition hover:border-primary xl:hidden"
              aria-label="Open navigation menu"
              aria-expanded={open}
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-0 z-[60] overflow-y-auto bg-background xl:hidden">
          <div className="container-page flex h-[4.75rem] items-center justify-between">
            <span className="text-[1.05rem] font-black tracking-[0.2em]">MODUSHADE</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border"
              aria-label="Close navigation menu"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <nav className="container-page pb-16" aria-label="Mobile navigation">
            <MobileLink to="/" onDone={() => setOpen(false)}>
              Home
            </MobileLink>

            <details className="border-b border-border">
              <summary className="flex cursor-pointer items-center justify-between py-4 text-base font-bold">
                Services <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </summary>
              <div className="pb-4">
                <Link
                  to="/services"
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm font-bold text-primary"
                >
                  All services
                </Link>
                {serviceGroups.map((group) => (
                  <div key={group.title} className="mt-3">
                    <p className="eyebrow mb-2">{group.title}</p>
                    {services
                      .filter((s) => s.group === group.title)
                      .map((s) => (
                        <Link
                          key={s.slug}
                          to="/services/$slug"
                          params={{ slug: s.slug }}
                          onClick={() => setOpen(false)}
                          className="block py-2 text-sm"
                        >
                          {s.navLabel}
                        </Link>
                      ))}
                  </div>
                ))}
              </div>
            </details>



            <details className="border-b border-border">
              <summary className="flex cursor-pointer items-center justify-between py-4 text-base font-bold">
                Service Areas <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </summary>
              <div className="pb-4">
                <Link
                  to="/service-areas"
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm font-bold text-primary"
                >
                  All service areas
                </Link>
                {locations.map((l) => (
                  <Link
                    key={l.slug}
                    to="/service-areas/$slug"
                    params={{ slug: l.slug }}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-sm"
                  >
                    {l.name}
                  </Link>
                ))}
              </div>
            </details>

            <MobileLink to="/about" onDone={() => setOpen(false)}>
              About
            </MobileLink>
            <MobileLink to="/projects" onDone={() => setOpen(false)}>
              Our Work
            </MobileLink>
            <MobileLink to="/faq" onDone={() => setOpen(false)}>
              FAQ
            </MobileLink>

            <MobileLink to="/contact" onDone={() => setOpen(false)}>
              Contact
            </MobileLink>

            <div className="mt-8 space-y-3">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-primary px-6 py-4 text-center text-sm font-bold text-primary-foreground"
              >
                Get a Free Consultation
              </Link>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener"
                onClick={() => trackWhatsAppClick("mobile_menu")}
                className="flex items-center justify-center gap-2 rounded-full border border-border px-6 py-4 text-center text-sm font-bold"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp Leo
              </a>
              <a
                href={site.phoneHref}
                onClick={() => trackPhoneClick("mobile_menu")}
                className="flex items-center justify-center gap-2 rounded-full border border-border px-6 py-4 text-center text-sm font-bold"
              >
                <Phone className="h-4 w-4" aria-hidden="true" /> Call {site.phone}
              </a>
              <a
                href={site.emailHref}
                onClick={() => trackEmailClick("mobile_menu")}
                className="block px-6 pt-1 text-center text-sm font-semibold text-muted-foreground"
              >
                {site.email}
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  const cls = "text-[0.78rem] font-bold tracking-[0.04em] uppercase transition hover:text-primary";
  return (
    <Link
      to={to}
      className={cls}
      activeProps={{ className: `${cls} text-primary` }}
      activeOptions={{ exact: to === "/" }}
    >
      {children}
    </Link>
  );
}

function MobileLink({
  to,
  children,
  onDone,
}: {
  to: string;
  children: React.ReactNode;
  onDone: () => void;
}) {
  return (
    <Link
      to={to}
      onClick={onDone}
      className="block border-b border-border py-4 text-base font-bold"
    >
      {children}
    </Link>
  );
}
