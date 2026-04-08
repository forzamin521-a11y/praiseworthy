import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobilePhoneButton from "@/components/layout/MobilePhoneButton";
import { LinkButton } from "@/components/ui/link-button";
import { cityPagesBySlug } from "@/lib/city-pages";
import {
  getGuidePath,
  getGuidesHubUrl,
  type GuideArticle,
} from "@/lib/guides";
import { type Locale } from "@/lib/i18n";
import {
  BUSINESS_NAME,
  BUSINESS_PHONE,
  BUSINESS_PHONE_E164,
  SITE_URL,
} from "@/lib/seo";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  ChevronRight,
  MapPin,
  Phone,
} from "lucide-react";

const PHONE_HREF = `tel:${BUSINESS_PHONE_E164}`;
const SCHEDULE_HREF =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ01K4KNgIlF5_N0dcliaOX-17GpOsjDRKNjnDCZ_giIDfnAqaxLZY90DLEHQfXcTRKuNAtlZ1_v";

const guidesHubUiCopy = {
  en: {
    eyebrow: "Guides and Resources",
    browseLabel: "Browse Guides",
    featuredLabel: "Helpful Topics",
    relatedAreas: "Related Service Areas",
    readGuide: "Read guide",
    bookInspection: "Book a free inspection",
    callNow: "Call now",
    schedule: "Schedule a Free Inspection",
    localHelp: "Local roofing help in",
  },
  es: {
    eyebrow: "Guias y recursos",
    browseLabel: "Explora las guias",
    featuredLabel: "Temas utiles",
    relatedAreas: "Zonas de servicio relacionadas",
    readGuide: "Leer guia",
    bookInspection: "Agenda una inspeccion gratis",
    callNow: "Llamar ahora",
    schedule: "Agenda una inspeccion gratis",
    localHelp: "Ayuda local de techos en",
  },
  zh: {
    eyebrow: "指南与资源",
    browseLabel: "浏览指南",
    featuredLabel: "实用主题",
    relatedAreas: "相关服务区域",
    readGuide: "查看指南",
    bookInspection: "预约免费检查",
    callNow: "立即致电",
    schedule: "预约免费检查",
    localHelp: "本地屋顶服务地区",
  },
  ko: {
    eyebrow: "가이드 및 리소스",
    browseLabel: "가이드 둘러보기",
    featuredLabel: "도움이 되는 주제",
    relatedAreas: "관련 서비스 지역",
    readGuide: "가이드 보기",
    bookInspection: "무료 점검 예약하기",
    callNow: "전화하기",
    schedule: "무료 점검 예약하기",
    localHelp: "지역 지붕 서비스",
  },
} as const;

export default function GuidesHubPage({
  guides,
  locale,
  title,
  intro,
}: {
  guides: GuideArticle[];
  locale: Locale;
  title: string;
  intro: string;
}) {
  const ui = guidesHubUiCopy[locale];
  const hubUrl = getGuidesHubUrl(locale);
  const getCityHref = (slug: string) =>
    locale === "en" ? `/${slug}/` : `/${locale}/${slug}/`;
  const relatedCities = Array.from(
    new Map(
      guides
        .flatMap((guide) =>
          guide.relatedCitySlugs.map((slug) => cityPagesBySlug[slug]).filter(Boolean),
        )
        .map((city) => [city.slug, city]),
    ).values(),
  ).slice(0, 6);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "@id": `${hubUrl}#collection`,
              name: title,
              description: intro,
              url: hubUrl,
              isPartOf: {
                "@id": `${SITE_URL}#website`,
              },
              about: {
                "@id": `${SITE_URL}#roofingcontractor`,
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              "@id": `${hubUrl}#guides`,
              name: `${BUSINESS_NAME} guides`,
              itemListElement: guides.map((guide, index) => ({
                "@type": "ListItem",
                position: index + 1,
                url: `${SITE_URL}${getGuidePath(guide.slug, locale)}`,
                name: guide.title,
              })),
            },
          ]),
        }}
      />
      <Header />
      <main>
        <section className="bg-gradient-to-b from-brand-navy via-[#173122] to-brand-navy pt-32 pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-brand-orange/25 bg-brand-orange/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.2em] text-brand-amber">
                <BookOpen className="mr-2 h-4 w-4" />
                {ui.eyebrow}
              </p>
              <h1 className="mb-6 font-heading text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl md:text-6xl">
                {title}
              </h1>
              <p className="mb-8 max-w-3xl text-lg leading-8 text-brand-surface/82 md:text-xl">
                {intro}
              </p>

              <div className="mb-10 flex flex-col gap-4 sm:flex-row">
                <LinkButton
                  href={PHONE_HREF}
                  size="lg"
                  className="rounded-full border border-brand-orange/35 bg-brand-orange px-8 py-7 text-lg font-bold text-brand-navy shadow-[0_18px_36px_rgba(17,33,24,0.28)]"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  {ui.callNow} {BUSINESS_PHONE}
                </LinkButton>
                <LinkButton
                  href={SCHEDULE_HREF}
                  target="_blank"
                  rel="noreferrer"
                  size="lg"
                  className="rounded-full border border-brand-surface/55 bg-brand-surface px-8 py-7 text-lg font-semibold text-brand-navy shadow-[0_16px_34px_rgba(12,24,18,0.22)]"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  {ui.schedule}
                </LinkButton>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {guides.slice(0, 3).map((guide) => (
                  <div
                    key={guide.slug}
                    className="rounded-[24px] border border-white/10 bg-white/6 px-5 py-4 text-sm leading-6 text-brand-surface/84"
                  >
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange/90">
                      {ui.featuredLabel}
                    </p>
                    <p className="font-semibold text-white">{guide.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-brand-orange">
                {ui.browseLabel}
              </p>
              <h2 className="font-heading text-3xl font-bold text-brand-text md:text-4xl">
                {title}
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="grid gap-6">
                {guides.map((guide) => (
                  <Link
                    key={guide.slug}
                    href={getGuidePath(guide.slug, locale)}
                    className="group rounded-[28px] border border-brand-navy/8 bg-brand-surface p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                  >
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-brand-orange/90">
                      {guide.eyebrow}
                    </p>
                    <h3 className="mb-3 font-heading text-2xl font-bold text-brand-text">
                      {guide.title}
                    </h3>
                    <p className="text-base leading-7 text-brand-muted">{guide.summary}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {guide.relatedCitySlugs.slice(0, 3).map((slug) => {
                        const city = cityPagesBySlug[slug];

                        if (!city) {
                          return null;
                        }

                        return (
                          <span
                            key={slug}
                            className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-navy shadow-sm"
                          >
                            {city.city}
                          </span>
                        );
                      })}
                    </div>
                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy">
                      {ui.readGuide}
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                ))}
              </div>

              <aside className="space-y-6">
                <section className="rounded-[32px] border border-brand-navy/8 bg-brand-navy px-6 py-6 text-brand-surface shadow-[0_18px_40px_rgba(27,54,38,0.08)]">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-brand-orange">
                    {ui.featuredLabel}
                  </p>
                  <p className="leading-7 text-brand-surface/84">{intro}</p>
                </section>

                <section className="rounded-[32px] border border-brand-navy/8 bg-brand-surface px-6 py-6 shadow-[0_18px_40px_rgba(27,54,38,0.08)]">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-brand-orange">
                    {ui.relatedAreas}
                  </p>
                  <div className="space-y-4">
                    {relatedCities.map((city) => (
                      <Link
                        key={city.slug}
                        href={getCityHref(city.slug)}
                        className="block rounded-[24px] bg-white px-5 py-4 transition-all hover:-translate-y-0.5 hover:shadow-md"
                      >
                        <div className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-brand-orange/90">
                          <MapPin className="h-4 w-4" />
                          {city.city}
                        </div>
                        <p className="font-heading text-xl font-bold text-brand-text">
                          {ui.localHelp} {city.city}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-brand-muted">
                          {city.metaDescription}
                        </p>
                      </Link>
                    ))}
                  </div>
                </section>

                <section className="rounded-[32px] border border-brand-navy/8 bg-white px-6 py-6 shadow-[0_18px_40px_rgba(27,54,38,0.08)]">
                  <h3 className="mb-3 font-heading text-2xl font-bold text-brand-text">
                    {ui.bookInspection}
                  </h3>
                  <p className="mb-5 leading-7 text-brand-muted">{intro}</p>
                  <LinkButton
                    href={PHONE_HREF}
                    className="w-full rounded-full border border-brand-orange/40 bg-brand-orange text-brand-navy hover:bg-brand-amber font-semibold"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    {ui.callNow} {BUSINESS_PHONE}
                  </LinkButton>
                  <LinkButton
                    href={SCHEDULE_HREF}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 w-full rounded-full border border-brand-navy/12 bg-brand-surface text-brand-navy hover:bg-brand-navy/6 font-semibold"
                  >
                    <ArrowRight className="mr-2 h-4 w-4" />
                    {ui.schedule}
                  </LinkButton>
                </section>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobilePhoneButton />
    </>
  );
}
