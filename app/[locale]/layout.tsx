import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { locales, type Locale } from "@/lib/i18n";
import { localeMeta } from "@/lib/seo-i18n";
import {
  BUSINESS_ALT_NAME,
  BUSINESS_EMAIL,
  BUSINESS_NAME,
  BUSINESS_PHONE_E164,
  GOOGLE_MAPS_URL,
  SERVICE_AREAS,
  SITE_URL,
} from "@/lib/seo";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

function localePath(locale: Locale) {
  return locale === "en" ? `${SITE_URL}/en` : `${SITE_URL}/${locale}`;
}

export async function generateMetadata({
  params,
}: LayoutProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }

  const meta = localeMeta[locale];
  const canonical = localePath(locale);

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical,
      languages: {
        en: `${SITE_URL}/en`,
        es: `${SITE_URL}/es`,
        zh: `${SITE_URL}/zh`,
        ko: `${SITE_URL}/ko`,
        "x-default": `${SITE_URL}/en`,
      },
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
      title: meta.title,
      description: meta.description,
      type: "website",
      locale: meta.languageTag.replace("-", "_"),
      url: canonical,
      siteName: meta.siteName,
      images: [
        {
          url: `${SITE_URL}/images/social/social-card.svg`,
          alt: meta.ogAlt,
        },
      ],
    },
    twitter: {
      card: "summary",
      title: meta.title,
      description: meta.description,
      images: [`${SITE_URL}/images/social/social-card.svg`],
    },
    category: "home services",
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const meta = localeMeta[locale];

  return (
    <LanguageProvider initialLocale={locale}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RoofingContractor",
            "@id": `${SITE_URL}/${locale}#roofingcontractor`,
            inLanguage: meta.languageTag,
            name: BUSINESS_NAME,
            alternateName: BUSINESS_ALT_NAME,
            description: meta.businessDescription,
            url: `${SITE_URL}/${locale}`,
            telephone: BUSINESS_PHONE_E164,
            email: BUSINESS_EMAIL,
            logo: `${SITE_URL}/brand-logo.svg`,
            image: `${SITE_URL}/images/social/social-card.svg`,
            sameAs: [GOOGLE_MAPS_URL],
            hasMap: GOOGLE_MAPS_URL,
            geo: {
              "@type": "GeoCoordinates",
              latitude: 32.8602635,
              longitude: -97.225217,
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: "North Richland Hills",
              addressRegion: "TX",
              addressCountry: "US",
            },
            areaServed: SERVICE_AREAS.map((area) => ({
              "@type": "City",
              name: area,
            })),
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "08:00",
                closes: "18:00",
              },
            ],
            serviceType: meta.serviceTypes,
            priceRange: "Free Inspection",
            knowsAbout: meta.knowsAbout,
          }),
        }}
      />
      {children}
    </LanguageProvider>
  );
}
