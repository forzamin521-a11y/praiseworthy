import type { Metadata } from "next";
import { cityPagesBySlug, getCityPagePath } from "@/lib/city-pages";
import { type Locale } from "@/lib/i18n";
import { BUSINESS_NAME, SITE_URL, absoluteUrl } from "@/lib/seo";
import { getGuideLocaleCopy } from "@/lib/guides-content";
import { localeMeta } from "@/lib/seo-i18n";

export type GuideSection = {
  id: string;
  label: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type GuideFaq = {
  question: string;
  answer: string;
};

export type GuideArticle = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  summary: string;
  eyebrow: string;
  keywords: string[];
  keyPoints: string[];
  sections: GuideSection[];
  relatedCitySlugs: string[];
  relatedGuideSlugs: string[];
  faq: GuideFaq[];
};

const guideShared = {
  "hail-damage-roof-inspection-dfw": {
    relatedCitySlugs: ["north-richland-hills", "fort-worth", "keller"],
    relatedGuideSlugs: [
      "roof-repair-near-me-north-richland-hills",
      "roof-storm-damage-insurance-texas",
      "signs-of-wind-damage-on-your-roof",
    ],
  },
  "roof-repair-near-me-north-richland-hills": {
    relatedCitySlugs: ["north-richland-hills", "richland-hills", "keller"],
    relatedGuideSlugs: [
      "hail-damage-roof-inspection-dfw",
      "roof-storm-damage-insurance-texas",
      "signs-of-wind-damage-on-your-roof",
    ],
  },
  "roof-storm-damage-insurance-texas": {
    relatedCitySlugs: ["north-richland-hills", "bedford", "arlington"],
    relatedGuideSlugs: [
      "hail-damage-roof-inspection-dfw",
      "roof-repair-near-me-north-richland-hills",
      "signs-of-wind-damage-on-your-roof",
    ],
  },
  "signs-of-wind-damage-on-your-roof": {
    relatedCitySlugs: ["hurst", "euless", "southlake"],
    relatedGuideSlugs: [
      "hail-damage-roof-inspection-dfw",
      "roof-repair-near-me-north-richland-hills",
      "roof-storm-damage-insurance-texas",
    ],
  },
} as const;

export const guideSlugs = Object.keys(guideShared);

export function getGuidePath(slug: string, locale: Locale = "en") {
  return locale === "en" ? `/guides/${slug}/` : `/${locale}/guides/${slug}/`;
}

export function getGuideUrl(slug: string, locale: Locale = "en") {
  return absoluteUrl(getGuidePath(slug, locale));
}

export function getGuide(locale: Locale, slug: string): GuideArticle | null {
  const shared = guideShared[slug as keyof typeof guideShared];
  const localized = getGuideLocaleCopy(locale, slug);

  if (!shared || !localized) {
    return null;
  }

  return {
    slug,
    title: localized.title,
    metaTitle: localized.metaTitle,
    metaDescription: localized.metaDescription,
    intro: localized.intro,
    summary: localized.summary,
    eyebrow: localized.eyebrow,
    keywords: [...localized.keywords],
    keyPoints: [...localized.keyPoints],
    sections: localized.sections.map((section) => ({
      ...section,
      paragraphs: [...section.paragraphs],
      bullets:
        "bullets" in section && section.bullets ? [...section.bullets] : undefined,
    })),
    faq: localized.faq.map((item) => ({ ...item })),
    relatedCitySlugs: [...shared.relatedCitySlugs],
    relatedGuideSlugs: [...shared.relatedGuideSlugs],
  };
}

export function getGuideMetadata(guide: GuideArticle, locale: Locale): Metadata {
  const url = getGuideUrl(guide.slug, locale);

  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    keywords: guide.keywords,
    other: {
      "content-language": localeMeta[locale].languageTag,
    },
    alternates: {
      canonical: url,
      languages: {
        en: getGuideUrl(guide.slug, "en"),
        es: getGuideUrl(guide.slug, "es"),
        zh: getGuideUrl(guide.slug, "zh"),
        ko: getGuideUrl(guide.slug, "ko"),
        "x-default": getGuideUrl(guide.slug, "en"),
      },
    },
    openGraph: {
      title: guide.metaTitle,
      description: guide.metaDescription,
      type: "article",
      url,
      siteName: BUSINESS_NAME,
      images: [
        {
          url: `${SITE_URL}/images/social/social-card.svg`,
          alt: guide.title,
        },
      ],
    },
    twitter: {
      card: "summary",
      title: guide.metaTitle,
      description: guide.metaDescription,
      images: [`${SITE_URL}/images/social/social-card.svg`],
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
  };
}

export function getGuideRelatedCities(guide: GuideArticle) {
  return guide.relatedCitySlugs
    .map((slug) => cityPagesBySlug[slug])
    .filter(Boolean)
    .map((page) => ({
      slug: page.slug,
      city: page.city,
      href: getCityPagePath(page.slug),
      description: page.metaDescription,
    }));
}

export function getRelatedGuides(locale: Locale, guide: GuideArticle) {
  return guide.relatedGuideSlugs
    .map((slug) => getGuide(locale, slug))
    .filter((item): item is GuideArticle => Boolean(item));
}
