import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/ui";
import { site } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () =>
    pageMeta({
      title: "Terms of Service | ModuShade",
      description:
        "The terms that apply to quotes, orders, custom-made window treatments and installation work carried out by ModuShade.",
      path: "/terms",
    }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <Section>
      <div className="max-w-3xl">
        <p className="eyebrow">Legal</p>
        <h1 className="display-lg mt-4">Terms of service</h1>
        <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <p>
            Quotes are based on the measurements taken at your consultation and remain valid for the
            period stated on the quote. Because every treatment is made to your exact openings,
            orders cannot be cancelled or returned once production has started.
          </p>
          <p>
            Installation dates are scheduled once your order arrives and confirmed with you in
            advance. Please ensure clear access to each window on the day of installation.
          </p>
          <p>
            Manufacturer warranties apply to fabrics, hardware and motors. We will always help you
            make a warranty claim and will correct any fault caused by our own installation.
          </p>
          <p>
            Questions about these terms: email {site.email} or call {site.phone}.
          </p>
        </div>
      </div>
    </Section>
  );
}
