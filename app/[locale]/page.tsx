import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobilePhoneButton from "@/components/layout/MobilePhoneButton";
import Hero from "@/components/sections/Hero";
import StormAwareness from "@/components/sections/StormAwareness";
import FreeInspection from "@/components/sections/FreeInspection";
import InsuranceGuide from "@/components/sections/InsuranceGuide";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Testimonials from "@/components/sections/Testimonials";
import ServiceArea from "@/components/sections/ServiceArea";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import { locales, type Locale } from "@/lib/i18n";
import { localeMeta } from "@/lib/seo-i18n";
import { BUSINESS_ALT_NAME, BUSINESS_NAME, SERVICE_AREAS, SITE_URL } from "@/lib/seo";

type PageProps = {
  params: Promise<{ locale: string }>;
};

function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export default async function LocalizedHomePage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const meta = localeMeta[locale];
  const pageUrl = `${SITE_URL}/${locale}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": `${pageUrl}#website`,
              inLanguage: meta.languageTag,
              url: pageUrl,
              name: BUSINESS_NAME,
              alternateName: BUSINESS_ALT_NAME,
              description: meta.websiteDescription,
            },
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": `${pageUrl}#webpage`,
              inLanguage: meta.languageTag,
              url: pageUrl,
              name: meta.pageName,
              isPartOf: {
                "@id": `${pageUrl}#website`,
              },
              about: {
                "@id": `${pageUrl}#roofingcontractor`,
              },
              description: meta.description,
            },
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              inLanguage: meta.languageTag,
              name: meta.itemListName,
              itemListElement: SERVICE_AREAS.map((area, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: area,
              })),
            },
          ]),
        }}
      />
      <Header />
      <main>
        <Hero />
        <StormAwareness />
        <FreeInspection />
        <InsuranceGuide />
        <WhyChooseUs />
        <BeforeAfter />
        <Testimonials />
        <ServiceArea />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobilePhoneButton />
    </>
  );
}
