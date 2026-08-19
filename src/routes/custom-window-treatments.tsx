import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/landing/LandingPage";
import { landingHead } from "@/components/landing/head";
import { customWindowTreatments } from "@/data/landing";

/** Google Search Ads landing page — not linked from the main website. */
export const Route = createFileRoute("/custom-window-treatments")({
  head: () => landingHead(customWindowTreatments),
  component: CustomWindowTreatmentsLanding,
});

function CustomWindowTreatmentsLanding() {
  return <LandingPage config={customWindowTreatments} />;
}
