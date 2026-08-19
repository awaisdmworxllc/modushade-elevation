import { createFileRoute } from "@tanstack/react-router";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

const staticPaths: { path: string; priority: string; changefreq: string }[] = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/services", priority: "0.9", changefreq: "monthly" },
  { path: "/service-areas", priority: "0.8", changefreq: "monthly" },
  { path: "/projects", priority: "0.7", changefreq: "monthly" },
  { path: "/about", priority: "0.6", changefreq: "yearly" },
  { path: "/faq", priority: "0.6", changefreq: "yearly" },
  { path: "/contact", priority: "0.8", changefreq: "yearly" },
  { path: "/privacy-policy", priority: "0.2", changefreq: "yearly" },
  { path: "/terms", priority: "0.2", changefreq: "yearly" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const base = site.domain.replace(/\/$/, "");


        const urls = [
          ...staticPaths,
          ...services.map((s) => ({
            path: `/services/${s.slug}`,
            priority: s.slug === "motorized-shades" ? "0.95" : "0.8",
            changefreq: "monthly",
          })),
          ...locations.map((l) => ({
            path: `/service-areas/${l.slug}`,
            priority: l.tier === "core" ? "0.8" : "0.6",
            changefreq: "monthly",
          })),
          ...projects.map((p) => ({
            path: `/projects/${p.slug}`,
            priority: "0.6",
            changefreq: "yearly",
          })),
        ];

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url>\n    <loc>${base}${u.path}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`,
  )
  .join("\n")}
</urlset>
`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
