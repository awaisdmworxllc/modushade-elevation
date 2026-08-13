import { Link } from "@tanstack/react-router";
import { Menu, Phone, X, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { services, serviceGroups } from "@/data/services";
import { locations } from "@/data/locations";
import { site } from "@/data/site";
import { trackPhoneClick, trackWhatsAppClick, trackEmailClick } from "@/lib/analytics";

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
      <div className="bg-ink text-ink-foreground">
        <div className="container-page flex flex-wrap items-center justify-center gap-x-4 gap-y-1 py-2 text-[0.68rem] tracking-[0.16em] uppercase sm:justify-between">
          <p className="text-center opacity-80">
            Complimentary in-home design consultation
            <span className="mx-2 text-primary">•</span>
            {site.serviceAreaShort}
          </p>
          <p className="flex items-center gap-3">
            <a
              href={site.phoneHref}
              onClick={() => trackPhoneClick("topbar")}
              className="hover:text-primary"
            >
              {site.phone}
            </a>
            <span className="text-primary">•</span>
            <a
              href={site.emailHref}
              onClick={() => trackEmailClick("topbar")}
              className="hover:text-primary"
            >
              {site.email}
            </a>
          </p>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-lg">
        <div className="container-page flex h-18 items-center gap-4 py-3">
          <Link to="/" className="flex shrink-0 items-center gap-2.5" aria-label="ModuShade home">
            <img src="/logo.svg" alt="" width={38} height={38} className="h-9 w-9 rounded-lg" />
            <span className="text-[0.95rem] font-black tracking-[0.16em]">MODUSHADE</span>
          </Link>

          <nav className="ml-auto hidden items-center gap-6 lg:flex" aria-label="Main navigation">
            <NavLink to="/">Home</NavLink>

            <div className="group relative">
              <Link
                to="/services"
                className="flex items-center gap-1 text-sm font-bold hover:text-primary"
              >
                Services <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
              <div className="invisible absolute left-1/2 top-full z-50 w-[46rem] -translate-x-1/2 pt-4 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
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
                                  className={`block text-sm hover:text-primary ${
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

            <NavLink to="/projects">Projects</NavLink>

            <div className="group relative">
              <Link
                to="/service-areas"
                className="flex items-center gap-1 text-sm font-bold hover:text-primary"
              >
                Service Areas <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
              <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-4 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div className="rounded-2xl border border-border bg-popover p-5 shadow-elegant">
                  <ul className="space-y-2">
                    {locations.map((l) => (
                      <li key={l.slug}>
                        <Link
                          to="/service-areas/$slug"
                          params={{ slug: l.slug }}
                          className="block text-sm hover:text-primary"
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

            <NavLink to="/about">About</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>

          <div className="ml-auto flex items-center gap-2 lg:ml-4">
            <a
              href={site.phoneHref}
              onClick={() => trackPhoneClick("header")}
              className="hidden items-center gap-2 text-sm font-bold hover:text-primary md:flex"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {site.phone}
            </a>
            <Link
              to="/contact"
              className="hidden rounded-full bg-primary px-4 py-2.5 text-xs font-bold text-primary-foreground shadow-lift transition hover:-translate-y-0.5 sm:inline-flex"
            >
              Get a Free Consultation
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border lg:hidden"
              aria-label="Open navigation menu"
              aria-expanded={open}
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-0 z-[60] overflow-y-auto bg-background lg:hidden">
          <div className="container-page flex h-18 items-center justify-between py-3">
            <span className="text-[0.95rem] font-black tracking-[0.16em]">MODUSHADE</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border"
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

            <MobileLink to="/projects" onDone={() => setOpen(false)}>
              Projects
            </MobileLink>

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
                href={site.phoneHref}
                onClick={() => trackPhoneClick("mobile_menu")}
                className="block rounded-full border border-border px-6 py-4 text-center text-sm font-bold"
              >
                Call {site.phone}
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener"
                onClick={() => trackWhatsAppClick("mobile_menu")}
                className="block rounded-full border border-border px-6 py-4 text-center text-sm font-bold"
              >
                WhatsApp
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="text-sm font-bold hover:text-primary"
      activeProps={{ className: "text-sm font-bold text-primary" }}
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
