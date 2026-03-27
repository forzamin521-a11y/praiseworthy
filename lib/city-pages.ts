import type { Metadata } from "next";
import { BUSINESS_NAME, BUSINESS_PHONE, SITE_URL } from "@/lib/seo";
import { absoluteUrl } from "@/lib/seo";

export type CityPage = {
  slug: string;
  city: string;
  title: string;
  metaTitle: string;
  description: string;
  metaDescription: string;
  keywords: string[];
  intro: string;
  body: string[];
  serviceBullets: string[];
  nearbyAreas: string[];
  faq: Array<{ question: string; answer: string }>;
};

export const cityPages: CityPage[] = [
  {
    slug: "fort-worth",
    city: "Fort Worth",
    title: "Roof Inspection and Roofing Services in Fort Worth, TX",
    metaTitle:
      "Fort Worth Roof Inspection | Praise Worthy Roofing Contractor",
    description:
      "Praise Worthy provides free roof inspections, storm damage assessments, and residential roofing services for homeowners in Fort Worth, Texas.",
    metaDescription:
      "Need a Fort Worth roof inspection after hail or wind damage? Praise Worthy offers free roof inspections and residential roofing services for Fort Worth homeowners.",
    keywords: [
      "Fort Worth roof inspection",
      "roofing contractor Fort Worth TX",
      "hail damage roof repair Fort Worth",
      "storm damage roofing Fort Worth",
      "free roof inspection Fort Worth",
    ],
    intro:
      "If you are searching for a roofing contractor in Fort Worth after hail, heavy rain, or wind, this page is designed to answer the most common homeowner questions before a small issue turns into a major repair.",
    body: [
      "Praise Worthy works with homeowners in Fort Worth who need a fast and honest roof inspection after storms. We check for missing shingles, lifted edges, granule loss, flashing damage, soft spots, and visible leak risk so you have a clearer picture of the roof condition before making a decision.",
      "Fort Worth homes can take a beating during storm season, especially when hail and high winds affect multiple neighborhoods at once. A local inspection helps determine whether the roof needs simple monitoring, targeted repair, or a larger replacement plan backed by clear photo documentation.",
      "We also help Fort Worth homeowners understand what to expect if insurance is involved. Our role is to document damage clearly, explain findings in plain language, and make the next step easier to understand without pressure.",
    ],
    serviceBullets: [
      "Free roof inspections for Fort Worth homeowners",
      "Storm and hail damage roof assessments",
      "Residential roofing repair and replacement guidance",
      "Roof documentation that supports insurance conversations",
    ],
    nearbyAreas: ["West Fort Worth", "North Fort Worth", "Ridglea", "Benbrook"],
    faq: [
      {
        question: "How quickly can you inspect a roof in Fort Worth?",
        answer:
          "Most Fort Worth inspections can be scheduled within 24 to 48 hours, depending on storm demand and weather conditions.",
      },
      {
        question: "Do you handle hail damage roof inspections in Fort Worth?",
        answer:
          "Yes. Hail damage inspections are one of the main reasons Fort Worth homeowners call us after severe weather.",
      },
      {
        question: "Can you help with insurance documentation?",
        answer:
          "Yes. We provide photo documentation and a clear summary of visible roof conditions to help homeowners understand what to discuss with their insurance company.",
      },
    ],
  },
  {
    slug: "keller",
    city: "Keller",
    title: "Roof Inspection and Storm Damage Roofing in Keller, TX",
    metaTitle: "Keller Roof Inspection | Free Storm Damage Check",
    description:
      "Praise Worthy offers free roof inspections, hail damage checks, and residential roofing services for homeowners in Keller, Texas.",
    metaDescription:
      "Looking for a Keller roof inspection after hail or wind? Praise Worthy provides free inspections and local residential roofing service for Keller homeowners.",
    keywords: [
      "Keller roof inspection",
      "roofing contractor Keller TX",
      "hail damage roofing Keller",
      "storm damage roof repair Keller",
      "free roof inspection Keller",
    ],
    intro:
      "Keller homeowners often search for a roofer right after a storm, but the best next step is usually a documented inspection that shows whether the roof is actually damaged and how urgent the problem is.",
    body: [
      "Praise Worthy helps Keller homeowners inspect roofs for hail marks, wind damage, shingle wear, flashing issues, and early leak risk. That is especially useful when the roof still looks fine from the ground but hidden damage may already be present.",
      "Because Keller sits within the same broader North Tarrant storm pattern as other DFW communities, weather-related roof damage can happen quickly and spread quietly. Catching those signs early gives homeowners more time to protect the home and compare repair options calmly.",
      "Our process focuses on straightforward guidance. We inspect the roof, document findings with photos, explain what we found, and help homeowners understand their options without overcomplicating the next step.",
    ],
    serviceBullets: [
      "Free roof inspections in Keller",
      "Hail and wind damage roof checks",
      "Residential roofing recommendations based on inspection findings",
      "Local support before repair or replacement decisions",
    ],
    nearbyAreas: ["North Keller", "Hidden Lakes", "Southlake border", "Watauga"],
    faq: [
      {
        question: "Why book a roof inspection in Keller after hail?",
        answer:
          "Small hail strikes can shorten roof life even when there is no obvious leak yet. An inspection helps confirm whether damage is cosmetic, functional, or developing into a bigger problem.",
      },
      {
        question: "Do you only work on large roofing jobs?",
        answer:
          "No. We inspect and explain conditions first. Some homeowners need repairs, some need replacement planning, and some only need peace of mind.",
      },
      {
        question: "Are inspections really free?",
        answer:
          "Yes. The initial roof inspection is free for homeowners in Keller and nearby service areas.",
      },
    ],
  },
  {
    slug: "bedford",
    city: "Bedford",
    title: "Bedford TX Roof Inspection and Residential Roofing Services",
    metaTitle: "Bedford Roof Inspection | Praise Worthy Roofing",
    description:
      "Praise Worthy provides free roof inspections, storm damage assessments, and roofing support for homeowners in Bedford, Texas.",
    metaDescription:
      "Schedule a Bedford roof inspection with Praise Worthy. We help homeowners check for storm, hail, and leak-related roof damage with free inspections.",
    keywords: [
      "Bedford roof inspection",
      "roofing contractor Bedford TX",
      "storm damage roof Bedford",
      "hail damage roof inspection Bedford",
      "free roof inspection Bedford",
    ],
    intro:
      "Bedford homeowners often need a roofer after intense weather, but what matters most first is getting a clear local inspection that shows what is actually happening on the roof.",
    body: [
      "Praise Worthy inspects Bedford roofs for storm damage, hail impact, lifted shingles, exposed nail lines, flashing wear, and signs of water intrusion. That kind of early inspection can prevent avoidable interior damage and more expensive repairs later.",
      "Bedford homes often share weather patterns with Hurst, Euless, and surrounding Mid-Cities neighborhoods, so roof issues may develop after the same storm systems that affect the wider DFW area. A fast inspection helps homeowners act before those issues worsen.",
      "Our goal is to make the process easier. We provide clear inspection notes, explain what needs attention, and help you decide whether repair, replacement, or continued observation makes the most sense for your home.",
    ],
    serviceBullets: [
      "Bedford roof inspections after hail and wind",
      "Residential roofing support for leak prevention",
      "Storm damage photo documentation",
      "Honest recommendations for homeowners in the Mid-Cities area",
    ],
    nearbyAreas: ["Hurst", "Euless", "Mid-Cities", "Colleyville border"],
    faq: [
      {
        question: "What roof problems do you look for in Bedford?",
        answer:
          "We look for hail impact, wind damage, shingle deterioration, flashing problems, and visible leak-risk areas around penetrations and roof lines.",
      },
      {
        question: "Can a Bedford roof look fine and still be damaged?",
        answer:
          "Yes. Many roofing issues are not obvious from the driveway, especially after hail or strong wind events.",
      },
      {
        question: "Do you serve neighborhoods around Bedford too?",
        answer:
          "Yes. We serve Bedford and nearby Mid-Cities communities throughout this part of DFW.",
      },
    ],
  },
  {
    slug: "arlington",
    city: "Arlington",
    title: "Arlington TX Roof Inspection for Storm and Hail Damage",
    metaTitle: "Arlington Roof Inspection | Free Roofing Assessment",
    description:
      "Praise Worthy offers free roof inspections and residential roofing support for homeowners in Arlington, Texas after hail, wind, and storm damage.",
    metaDescription:
      "Need an Arlington roof inspection? Praise Worthy provides free roof checks for hail, wind, and storm damage for Arlington homeowners.",
    keywords: [
      "Arlington roof inspection",
      "roofing contractor Arlington TX",
      "hail damage roof Arlington",
      "storm damage roof repair Arlington",
      "free roof inspection Arlington",
    ],
    intro:
      "Arlington homeowners searching for roofing help after a storm usually need two things quickly: a trustworthy inspection and a clear explanation of what the roof condition means.",
    body: [
      "Praise Worthy provides roof inspections for Arlington homes that may have been affected by hail, wind, or heavy rain. We inspect shingles, ridge lines, vents, flashing, and visible drainage-related trouble spots to catch damage before it spreads.",
      "Storm-related roofing issues in Arlington are not always obvious at first. A roof may show only minor surface wear from the ground while still carrying functional hail damage or lifted materials that create leak risk later.",
      "That is why we focus on inspection-first service. Homeowners get a clearer understanding of the roof condition, what to do next, and whether insurance or repair planning should be part of the conversation.",
    ],
    serviceBullets: [
      "Free roofing inspections in Arlington",
      "Hail and wind damage roof checks",
      "Residential roof condition reporting for homeowners",
      "Next-step guidance after severe weather",
    ],
    nearbyAreas: ["North Arlington", "South Arlington", "Dalworthington Gardens", "Mansfield border"],
    faq: [
      {
        question: "Is a roof inspection useful even without an active leak?",
        answer:
          "Yes. Many roof issues start before interior leaks appear, so early inspection can prevent larger costs later.",
      },
      {
        question: "Do you inspect roofs after wind damage in Arlington?",
        answer:
          "Yes. We inspect for wind-lifted shingles, exposed areas, and related storm damage after high-wind events.",
      },
      {
        question: "Can I schedule a free inspection online or by phone?",
        answer:
          `Yes. Arlington homeowners can call ${BUSINESS_PHONE} or use the online scheduling link on the site.`,
      },
    ],
  },
  {
    slug: "north-richland-hills",
    city: "North Richland Hills",
    title: "North Richland Hills Roof Inspection and Roofing Services",
    metaTitle:
      "North Richland Hills Roof Inspection | Praise Worthy Roofing",
    description:
      "Praise Worthy provides free roof inspections, hail damage assessments, and residential roofing services in North Richland Hills, Texas.",
    metaDescription:
      "Looking for a North Richland Hills roof inspection? Praise Worthy offers free roof checks and local roofing support for homeowners after hail and storm damage.",
    keywords: [
      "North Richland Hills roof inspection",
      "roofing contractor North Richland Hills TX",
      "hail damage roofing North Richland Hills",
      "storm damage roof North Richland Hills",
      "free roof inspection North Richland Hills",
    ],
    intro:
      "North Richland Hills is at the center of our service area, so this page is focused on homeowners who want a local roofing company that understands storm damage, inspection timing, and neighborhood-level roof concerns.",
    body: [
      "Praise Worthy provides free roof inspections for homeowners in North Richland Hills who want to check for hail damage, wind damage, missing shingles, flashing wear, and early leak risk. That is often the best first step after a storm passes through the area.",
      "Because North Richland Hills homes experience the same DFW weather pressure as nearby communities, roof damage can show up in subtle ways first. A local inspection helps identify those early signs before they grow into interior damage or larger repair costs.",
      "Our approach is simple: inspect the roof carefully, document visible issues, explain the findings clearly, and help homeowners understand what to do next. That makes it easier to move forward with confidence instead of guessing.",
    ],
    serviceBullets: [
      "Free roof inspections in North Richland Hills",
      "Hail and wind damage roof evaluations",
      "Residential roofing guidance from a local DFW team",
      "Clear documentation for homeowners after storms",
    ],
    nearbyAreas: ["Richland Hills", "Watauga", "Hurst", "Keller"],
    faq: [
      {
        question: "Why is North Richland Hills a priority service area?",
        answer:
          "It is one of the core communities we serve, so we regularly inspect roofs in and around North Richland Hills after severe weather.",
      },
      {
        question: "Do you help homeowners after hail storms?",
        answer:
          "Yes. Hail inspections are a major part of our roofing work in North Richland Hills and nearby DFW cities.",
      },
      {
        question: "What if the roof damage looks minor?",
        answer:
          "Even minor-looking damage can create future leak or structural issues, so it is worth documenting early with a free inspection.",
      },
    ],
  },
];

export const cityPagesBySlug = Object.fromEntries(
  cityPages.map((page) => [page.slug, page]),
) as Record<string, CityPage>;

export function getCityPageUrl(slug: string) {
  return absoluteUrl(`/${slug}`);
}

export function getCityPageMetadata(page: CityPage): Metadata {
  const url = getCityPageUrl(page.slug);

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      type: "article",
      url,
      siteName: BUSINESS_NAME,
      images: [
        {
          url: `${SITE_URL}/images/social/social-card.svg`,
          alt: page.title,
        },
      ],
    },
    twitter: {
      card: "summary",
      title: page.metaTitle,
      description: page.metaDescription,
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
