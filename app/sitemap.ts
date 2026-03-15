import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    changeFrequency: "weekly",
    priority: locale === "en" ? 1 : 0.9,
  }));
}
