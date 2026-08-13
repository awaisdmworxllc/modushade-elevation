import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { resolveLegacyPath } from "@/data/redirects";

/** Catch-all: 301s legacy modu-shade.com URLs, otherwise renders the 404. */
export const Route = createFileRoute("/$")({
  loader: ({ location }) => {
    const target = resolveLegacyPath(location.pathname);
    if (target) throw redirect({ href: target, statusCode: 301 });
    throw notFound();
  },
});
