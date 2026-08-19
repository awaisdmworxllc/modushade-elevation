import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/landing/LandingPage";
import { landingHead } from "@/components/landing/head";
import { motorizedShades } from "@/data/landing";

/** Google Search Ads landing page — not linked from the main website. */
export const Route = createFileRoute("/motorized-shades")({
  head: () => landingHead(motorizedShades),
  component: MotorizedShadesLanding,
});

function MotorizedShadesLanding() {
  return <LandingPage config={motorizedShades} />;
}
