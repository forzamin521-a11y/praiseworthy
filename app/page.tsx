import type { Metadata } from "next";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import HomePage from "@/components/page/HomePage";
import { localeMeta } from "@/lib/seo-i18n";
import { getLanguageAlternates, getRootUrl } from "@/lib/seo-routes";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: localeMeta.en.title,
  description: localeMeta.en.description,
  keywords: localeMeta.en.keywords,
  alternates: {
    canonical: getRootUrl(),
    languages: getLanguageAlternates(),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: localeMeta.en.title,
    description: localeMeta.en.description,
    type: "website",
    locale: localeMeta.en.languageTag.replace("-", "_"),
    url: getRootUrl(),
    siteName: localeMeta.en.siteName,
    images: [
      {
        url: `${SITE_URL}/images/social/social-card.svg`,
        alt: localeMeta.en.ogAlt,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: localeMeta.en.title,
    description: localeMeta.en.description,
    images: [`${SITE_URL}/images/social/social-card.svg`],
  },
  category: "home services",
};

export default function RootPage() {
  return (
    <LanguageProvider initialLocale="en">
      <HomePage locale="en" pageUrl={getRootUrl()} />
    </LanguageProvider>
  );
}
