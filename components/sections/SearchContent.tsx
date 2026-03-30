"use client";

import { cityNames, type Locale } from "@/lib/i18n";
import { cityPagePathsByCity } from "@/lib/city-pages";

const seoContent: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    intro: string;
    paragraphs: string[];
    bulletTitle: string;
    bullets: string[];
  }
> = {
  en: {
    eyebrow: "Local Roofing SEO Content",
    title: "Roofing Services for North Richland Hills and the Greater DFW Area",
    intro:
      "Homeowners often search for terms like roof inspection in North Richland Hills, storm damage roof repair near me, hail damage roofing contractor, and free roof inspection in Fort Worth. This page is built to answer those searches with clear local information about what Praise Worthy actually does.",
    paragraphs: [
      "Praise Worthy helps homeowners identify roof damage after hail, heavy rain, and high wind events across North Richland Hills and surrounding DFW communities. Our inspections focus on shingles, flashing, valleys, vents, gutters, and visible leak risk so homeowners can understand what needs attention before the damage spreads.",
      "If a roof shows signs of storm damage, our team explains the condition in plain language, documents the findings with photos, and helps homeowners understand whether repair, replacement, or simple monitoring makes the most sense. That local-first process is especially helpful for homeowners comparing roofing companies in Fort Worth, Keller, Bedford, Hurst, Plano, Arlington, and nearby cities.",
      "Because many roofing searches are urgent, we also make it easy to schedule a free roof inspection quickly. That combination of fast response, storm damage experience, and service area coverage gives searchers a stronger reason to choose a local DFW roofing contractor instead of a temporary storm-chasing crew.",
    ],
    bulletTitle: "Common services homeowners search for",
    bullets: [
      "Free roof inspection for storm and hail damage",
      "Residential roofing contractor services in DFW",
      "Roof damage documentation for insurance claims",
      "Leak risk checks after wind and hail events",
    ],
  },
  es: {
    eyebrow: "Servicios locales de techos",
    title: "Servicios de techos para North Richland Hills y todo el area de DFW",
    intro:
      "Muchos propietarios buscan frases como inspeccion de techo en North Richland Hills, reparacion de techo por tormenta cerca de mi, dano por granizo en techo o inspeccion gratis de techo en Fort Worth. Esta seccion responde con informacion local y clara sobre lo que realmente ofrece Praise Worthy.",
    paragraphs: [
      "Praise Worthy ayuda a propietarios a detectar dano en techos despues de granizo, lluvia fuerte y viento en North Richland Hills y otras comunidades de DFW. Revisamos tejas, tapajuntas, valles, ventilaciones, canaletas y posibles puntos de filtracion para explicar el estado real del techo.",
      "Si encontramos senales de dano por tormenta, explicamos la condicion con palabras sencillas, entregamos evidencia fotografica y orientamos al propietario sobre si conviene reparar, reemplazar o simplemente seguir observando. Ese enfoque local resulta util para quienes comparan empresas de techos en Fort Worth, Keller, Bedford, Hurst, Plano, Arlington y ciudades cercanas.",
      "Tambien damos prioridad a la rapidez para programar una inspeccion gratis. Esa respuesta agil, junto con experiencia en tormentas y cobertura local en DFW, ayuda a propietarios que buscan un contratista confiable en lugar de una cuadrilla temporal que solo aparece despues del clima severo.",
    ],
    bulletTitle: "Servicios que los propietarios suelen buscar",
    bullets: [
      "Inspeccion gratis de techo por tormenta o granizo",
      "Servicios residenciales de techos en DFW",
      "Documentacion de dano para reclamos de seguro",
      "Revision de riesgo de filtraciones despues de viento o granizo",
    ],
  },
  zh: {
    eyebrow: "本地屋顶服务信息",
    title: "服务 North Richland Hills 与整个 DFW 的屋顶检查与维修团队",
    intro:
      "很多业主会搜索 North Richland Hills 屋顶检查、附近风暴损伤屋顶维修、冰雹屋顶损伤、Fort Worth 免费屋顶检查等关键词。这一部分用清楚的本地信息说明 Praise Worthy 实际提供的服务内容。",
    paragraphs: [
      "Praise Worthy 为 North Richland Hills 及周边 DFW 社区业主检查冰雹、大雨和强风后的屋顶状况。我们会查看瓦片、泛水、屋脊、排水沟、通风口和潜在渗漏风险，帮助业主尽早了解问题。",
      "如果发现风暴损伤迹象，我们会用容易理解的方式说明屋顶情况，提供照片记录，并帮助业主判断更适合维修、更换，还是继续观察。对正在比较 Fort Worth、Keller、Bedford、Hurst、Plano、Arlington 等地屋顶公司的业主来说，这种本地化说明尤其有帮助。",
      "很多屋顶相关搜索都带有紧急性质，因此我们也尽量让免费检查预约更快完成。快速响应、熟悉风暴损伤、覆盖多个 DFW 城市，这些都是本地业主选择长期服务团队而不是临时外来施工队的重要原因。",
    ],
    bulletTitle: "业主常搜索的服务内容",
    bullets: [
      "风暴与冰雹后的免费屋顶检查",
      "DFW 住宅屋顶承包服务",
      "保险理赔需要的屋顶损伤记录",
      "强风和冰雹后的渗漏风险检查",
    ],
  },
  ko: {
    eyebrow: "지역 지붕 서비스 안내",
    title: "North Richland Hills와 DFW 전역을 위한 지붕 점검 및 지붕 서비스",
    intro:
      "많은 주택 소유주들이 North Richland Hills 지붕 점검, 근처 폭풍 피해 지붕 수리, 우박 피해 지붕 업체, Fort Worth 무료 지붕 점검 같은 검색어로 업체를 찾습니다. 이 섹션은 Praise Worthy가 실제로 어떤 지역 서비스와 점검을 제공하는지 더 분명하게 설명합니다.",
    paragraphs: [
      "Praise Worthy는 North Richland Hills와 주변 DFW 지역에서 우박, 강풍, 폭우 이후 지붕 상태를 확인하려는 주택 소유주를 돕습니다. 슁글, 후레싱, 골, 환기구, 거터, 누수 위험 지점을 살펴 손상이 퍼지기 전에 상태를 파악할 수 있도록 안내합니다.",
      "폭풍 피해가 확인되면 사진과 함께 상태를 설명하고, 수리, 교체, 경과 관찰 중 어떤 대응이 적절한지 이해하기 쉽게 알려드립니다. Fort Worth, Keller, Bedford, Hurst, Plano, Arlington 등에서 지붕 업체를 비교하는 분들에게 이런 지역 밀착형 설명은 특히 중요합니다.",
      "지붕 관련 검색은 긴급한 경우가 많기 때문에 무료 점검 예약 속도도 중요합니다. 빠른 응답, 폭풍 피해 경험, DFW 지역 커버리지까지 갖춘 점이 일시적으로 들어오는 외부 팀보다 지역 업체를 선택해야 하는 이유가 됩니다.",
    ],
    bulletTitle: "주택 소유주가 자주 찾는 서비스",
    bullets: [
      "폭풍 및 우박 피해 무료 지붕 점검",
      "DFW 지역 주택 지붕 서비스",
      "보험 청구용 지붕 손상 기록 정리",
      "강풍과 우박 이후 누수 위험 점검",
    ],
  },
};

export default function SearchContent({ locale }: { locale: Locale }) {
  const content = seoContent[locale];

  return (
    <section className="bg-brand-surface py-16 md:py-24" aria-labelledby="local-roofing-services">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-brand-navy/8 bg-white px-6 py-8 shadow-[0_18px_40px_rgba(27,54,38,0.08)] md:px-10 md:py-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-brand-orange">
            {content.eyebrow}
          </p>
          <h2
            id="local-roofing-services"
            className="mb-4 font-heading text-3xl font-bold text-brand-text md:text-4xl"
          >
            {content.title}
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-brand-muted">
            {content.intro}
          </p>

          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-4">
              {content.paragraphs.map((paragraph) => (
                <p key={paragraph} className="leading-8 text-brand-muted">
                  {paragraph}
                </p>
              ))}
            </div>

            <aside className="rounded-[24px] bg-brand-navy px-6 py-6 text-brand-surface">
              <h3 className="mb-4 font-heading text-xl font-bold">
                {content.bulletTitle}
              </h3>
              <ul className="space-y-3">
                {content.bullets.map((bullet) => (
                  <li key={bullet} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {cityNames.map((city) => (
                  <a
                    key={city}
                    href={cityPagePathsByCity[city]}
                    className="rounded-full border border-white/12 bg-white/6 px-3 py-2 text-sm text-brand-surface/80 transition-colors hover:bg-white/12 hover:text-white"
                  >
                    {city}
                  </a>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
