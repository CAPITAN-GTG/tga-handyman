import type { MetadataRoute } from "next";
import { siteConfig, siteRoutes } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return siteRoutes.map(({ path, priority, changeFrequency }) => ({
    url: path === "/" ? siteConfig.url : `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
