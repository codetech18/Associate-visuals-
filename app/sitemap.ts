import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, priority: 1 },
    { url: `${site.url}/work`, priority: 0.8 },
    ...projects.map((project) => ({
      url: `${site.url}/work/${project.slug}`,
      priority: 0.6,
    })),
  ];
}
