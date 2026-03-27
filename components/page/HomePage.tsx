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
import SearchContent from "@/components/sections/SearchContent";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import { type Locale } from "@/lib/i18n";
import { localeMeta } from "@/lib/seo-i18n";
import { BUSINESS_ALT_NAME, BUSINESS_NAME, SERVICE_AREAS, SITE_URL } from "@/lib/seo";

export default function HomePage({
  locale,
  pageUrl,
}: {
  locale: Locale;
  pageUrl: string;
}) {
  const meta = localeMeta[locale];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": `${SITE_URL}#website`,
              inLanguage: meta.languageTag,
              url: SITE_URL,
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
                "@id": `${SITE_URL}#website`,
              },
              about: {
                "@id": `${SITE_URL}#roofingcontractor`,
              },
              description: meta.description,
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "@id": `${pageUrl}#service`,
              serviceType: meta.serviceTypes,
              areaServed: SERVICE_AREAS.map((area) => ({
                "@type": "City",
                name: area,
              })),
              provider: {
                "@id": `${SITE_URL}#roofingcontractor`,
              },
              availableChannel: {
                "@type": "ServiceChannel",
                serviceUrl: pageUrl,
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: meta.itemListName,
                itemListElement: meta.serviceTypes.map((serviceType) => ({
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: serviceType,
                  },
                })),
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              "@id": `${pageUrl}#serviceareas`,
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
        <SearchContent locale={locale} />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobilePhoneButton />
    </>
  );
}
