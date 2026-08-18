import { Link } from "@tanstack/react-router";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import { site } from "@/data/site";
import { CallLinks } from "./ui";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-page grid gap-12 py-16 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2.5">
            <img src="/logo.svg" alt="" width={38} height={38} className="h-9 w-9 rounded-lg" />
            <span className="text-[0.95rem] font-black tracking-[0.16em]">MODUSHADE</span>
          </Link>
          <p className="mt-5 text-sm leading-relaxed text-ink-foreground/70">{site.tagline}</p>
          <p className="mt-5 text-sm text-ink-foreground/70">
            {site.address.locality}, {site.address.region} {site.address.postalCode}
          </p>
          <div className="mt-5">
            <CallLinks location="footer" onDark />
          </div>
        </div>

        <div>
          <p className="eyebrow mb-4">Services</p>
          <ul className="space-y-2 text-sm text-ink-foreground/75">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="hover:text-primary"
                >
                  {s.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Service areas</p>
          <ul className="space-y-2 text-sm text-ink-foreground/75">
            {locations.map((l) => (
              <li key={l.slug}>
                <Link
                  to="/service-areas/$slug"
                  params={{ slug: l.slug }}
                  className="hover:text-primary"
                >
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Company</p>
          <ul className="space-y-2 text-sm text-ink-foreground/75">
            <li>
              <Link to="/about" className="hover:text-primary">
                About ModuShade
              </Link>
            </li>
            <li>
              <Link
                to="/services/$slug"
                params={{ slug: "motorized-shades" }}
                className="hover:text-primary"
              >
                Motorized Shades
              </Link>
            </li>


            <li>
              <Link to="/faq" className="hover:text-primary">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary">
                Free consultation
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-primary">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-primary">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-foreground/10">
        <div className="container-page flex flex-wrap items-center justify-between gap-3 py-6 text-xs text-ink-foreground/60">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p>{site.serviceAreaSummary}</p>
        </div>
      </div>
    </footer>
  );
}
