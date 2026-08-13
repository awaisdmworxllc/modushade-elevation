import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/ui";
import { site } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/privacy-policy")({
  head: () =>
    pageMeta({
      title: "Privacy Policy | ModuShade",
      description:
        "How ModuShade collects, uses and protects the information you share when requesting a window treatment consultation.",
      path: "/privacy-policy",
    }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <Section>
      <div className="max-w-3xl">
        <p className="eyebrow">Legal</p>
        <h1 className="display-lg mt-4">Privacy policy</h1>
        <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <p>
            We collect only the details you choose to share with us — typically your name, phone
            number, email address, town and a description of your project — and we use them solely
            to respond to your enquiry, prepare a quote and complete your installation.
          </p>
          <p>
            We do not sell or rent your information. We share it only with suppliers or installers
            where it is necessary to fulfil your order.
          </p>
          <p>
            Our website may use analytics cookies to understand how visitors find and use the site.
            You can block cookies in your browser settings without affecting your ability to
            contact us.
          </p>
          <p>
            To ask what information we hold, or to have it deleted, email {site.email} or call{" "}
            {site.phone}.
          </p>
        </div>
      </div>
    </Section>
  );
}
