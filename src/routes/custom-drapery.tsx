import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/landing/LandingPage";
import { landingHead } from "@/components/landing/head";
import { customDrapery } from "@/data/landing";

/** Google Search Ads landing page — not linked from the main website. */
export const Route = createFileRoute("/custom-drapery")({
  head: () => landingHead(customDrapery),
  component: CustomDraperyLanding,
});

function CustomDraperyLanding() {
  return <LandingPage config={customDrapery} />;
}
