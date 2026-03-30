import type { Metadata } from "next";
import { cityPagesBySlug, getCityPagePath } from "@/lib/city-pages";
import { BUSINESS_NAME, SITE_URL, absoluteUrl } from "@/lib/seo";

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

export const guideArticles: GuideArticle[] = [
  {
    slug: "hail-damage-roof-inspection-dfw",
    title: "How to Tell if Hail Damaged Your Roof in DFW",
    metaTitle:
      "How to Tell if Hail Damaged Your Roof in DFW | Free Inspection Guide",
    metaDescription:
      "Not sure if hail damaged your roof in DFW? Learn the early warning signs, what a roof inspection should include, and when to schedule a free check.",
    eyebrow: "Helpful Homeowner Guide",
    intro:
      "Hail damage is not always obvious from the driveway. This guide walks you through what homeowners in DFW should watch for, what usually requires a closer look, and when a professional inspection makes sense.",
    summary:
      "A customer-friendly guide to spotting hail-related roof problems early and knowing when to schedule a professional inspection.",
    keywords: [
      "hail damage roof inspection DFW",
      "how to tell if hail damaged roof",
      "free roof inspection DFW",
      "North Richland Hills hail roof damage",
      "Fort Worth hail damage inspection",
    ],
    keyPoints: [
      "Small hail marks can shorten roof life even before a leak appears.",
      "Damage often shows up around shingles, vents, flashing, gutters, and soft metal surfaces first.",
      "A documented inspection helps you understand whether the roof needs repair, replacement, or simple monitoring.",
    ],
    sections: [
      {
        id: "what-hail-can-do",
        label: "What Hail Does",
        title: "What hail damage can do to a roof",
        paragraphs: [
          "Hail can bruise shingles, loosen granules, crack materials, and weaken areas that still look mostly normal from the ground. That is why many homeowners do not realize there is a problem until weeks later.",
          "In DFW, hail damage also tends to show up around roof vents, flashing, gutters, and other exposed metal pieces. These areas can reveal whether the storm was strong enough to justify a closer inspection.",
        ],
        bullets: [
          "Bruised or softened shingles",
          "Granule loss that exposes darker spots",
          "Dents in gutters, vents, or flashing",
          "Weakened roof areas that can turn into leaks later",
        ],
      },
      {
        id: "signs-from-ground",
        label: "What To Look For",
        title: "Signs homeowners can look for safely from the ground",
        paragraphs: [
          "You do not need to climb on the roof to notice warning signs. Walk the property and look at gutters, downspouts, window screens, roof edges, and any shingles you can clearly see from a safe angle.",
          "If a recent storm hit your neighborhood hard and you are seeing granules in downspouts, unusual dents, or scattered shingle wear, those are enough reasons to get the roof checked more carefully.",
        ],
        bullets: [
          "Granules collecting near downspouts",
          "Visible dents on soft metal surfaces",
          "Unusual dark spots or cracking on shingles",
          "Neighbors getting roofs inspected after the same storm",
        ],
      },
      {
        id: "inspection-includes",
        label: "Inspection Details",
        title: "What a professional hail inspection should include",
        paragraphs: [
          "A useful inspection should go beyond a quick glance. It should include photos, a clear explanation of what was found, and honest guidance on whether the roof needs action now or should simply be monitored.",
          "The goal is not to pressure you into a replacement. The goal is to help you understand the condition of the roof and whether hail created functional damage that affects protection or roof life.",
        ],
        bullets: [
          "Shingle and flashing checks",
          "Review of roof penetrations and edges",
          "Photos of visible storm-related issues",
          "Clear next-step guidance without pressure",
        ],
      },
      {
        id: "when-to-schedule",
        label: "When To Schedule",
        title: "When it makes sense to schedule a roof inspection",
        paragraphs: [
          "If hail passed through your area recently, if neighbors are seeing damage, or if you notice anything unusual around the roofline, scheduling an inspection sooner is usually the safer move.",
          "Even when a roof does not need immediate repair, catching damage early gives you more time to make a calm decision and avoid a larger interior problem later.",
        ],
      },
    ],
    relatedCitySlugs: ["north-richland-hills", "fort-worth", "keller"],
    relatedGuideSlugs: [
      "roof-storm-damage-insurance-texas",
      "signs-of-wind-damage-on-your-roof",
    ],
    faq: [
      {
        question: "Can a roof have hail damage without an active leak?",
        answer:
          "Yes. Many roofs show storm damage before any water gets inside. Early inspection helps catch those weaker areas before a leak begins.",
      },
      {
        question: "Do I need to get on the roof myself to check for hail damage?",
        answer:
          "No. It is safer to look for visible storm signs from the ground and schedule a professional inspection if anything seems off.",
      },
    ],
  },
  {
    slug: "roof-storm-damage-insurance-texas",
    title: "How Roof Storm Damage Insurance Claims Usually Work in Texas",
    metaTitle:
      "Texas Roof Storm Damage Insurance Guide | What Homeowners Should Expect",
    metaDescription:
      "Learn how roof storm damage insurance claims usually work in Texas, what to document after a storm, and how an inspection can help you prepare.",
    eyebrow: "Helpful Homeowner Guide",
    intro:
      "If a storm hit your roof and you are not sure what to do next, this guide explains the usual insurance process in plain language so you can make decisions with less stress.",
    summary:
      "A plain-language guide to storm damage insurance steps, roof documentation, and what Texas homeowners should expect after severe weather.",
    keywords: [
      "Texas roof storm damage insurance",
      "roof insurance claim after storm Texas",
      "roof adjuster storm damage guide",
      "DFW roof insurance inspection",
    ],
    keyPoints: [
      "The first step is documenting what happened and checking whether visible roof damage is present.",
      "A good inspection helps homeowners understand what they are discussing before they ever talk to an adjuster.",
      "Clear photos and plain-language notes reduce confusion during the next step.",
    ],
    sections: [
      {
        id: "first-steps",
        label: "First Steps",
        title: "What to do first after a storm hits your roof",
        paragraphs: [
          "Start by making sure the home is safe and taking note of anything visible from the ground. That can include fallen branches, dents on gutters, missing shingles, ceiling spots, or new leaks.",
          "If there is no emergency, the next useful step is usually a roof inspection that documents visible storm damage clearly. That gives you a better understanding of the roof condition before the insurance conversation begins.",
        ],
      },
      {
        id: "what-to-document",
        label: "What To Document",
        title: "What homeowners should document",
        paragraphs: [
          "You do not need a complicated system. A few clear photos, the date of the storm, and notes about what changed around the property can already help create a stronger record.",
          "If an inspection is performed, photos of shingles, flashing, roof penetrations, gutters, and other storm-affected areas can make the next conversation much easier to follow.",
        ],
        bullets: [
          "Date of the storm",
          "Visible exterior damage",
          "Interior leak or ceiling changes",
          "Photo documentation from the roof inspection",
        ],
      },
      {
        id: "adjuster-process",
        label: "Insurance Review",
        title: "What the adjuster process usually looks like",
        paragraphs: [
          "Every claim is different, but the adjuster process usually involves reviewing the reported damage, inspecting the property, and comparing what is visible with your claim details.",
          "The most helpful thing for homeowners is going into that conversation with a clear understanding of what was actually found on the roof. That makes the process less confusing and helps avoid guesswork.",
        ],
      },
      {
        id: "where-inspection-helps",
        label: "How Inspection Helps",
        title: "Why a clear inspection still matters even if you are unsure about a claim",
        paragraphs: [
          "Some roofs need repair, some need replacement planning, and some only need monitoring. An inspection helps sort that out before assumptions start driving the process.",
          "It is also helpful when homeowners simply want honest guidance without feeling rushed into a major decision right after a storm.",
        ],
      },
    ],
    relatedCitySlugs: ["north-richland-hills", "bedford", "arlington"],
    relatedGuideSlugs: [
      "hail-damage-roof-inspection-dfw",
      "signs-of-wind-damage-on-your-roof",
    ],
    faq: [
      {
        question: "Should I talk to insurance before getting a roof inspection?",
        answer:
          "Homeowners often feel more confident when they understand the visible roof condition first. A clear inspection can make the insurance conversation easier to follow.",
      },
      {
        question: "Does every storm-damaged roof need a claim?",
        answer:
          "Not always. Some roofs need immediate action, while others may only need monitoring or smaller repairs. That is why documentation matters.",
      },
    ],
  },
  {
    slug: "signs-of-wind-damage-on-your-roof",
    title: "Signs of Wind Damage on Your Roof After a North Texas Storm",
    metaTitle:
      "Signs of Wind Damage on Your Roof | North Texas Homeowner Guide",
    metaDescription:
      "Learn the most common signs of wind damage on a roof, what homeowners in North Texas should watch for after a storm, and when to schedule an inspection.",
    eyebrow: "Helpful Homeowner Guide",
    intro:
      "Wind damage does not always look dramatic at first. This guide explains the signs homeowners can watch for after a North Texas storm and when it is smart to have the roof checked.",
    summary:
      "A practical guide to spotting wind-related roof issues early and understanding when a local inspection is worth scheduling.",
    keywords: [
      "signs of wind damage on roof",
      "North Texas wind damage roof",
      "roof inspection after wind storm",
      "wind damaged shingles DFW",
    ],
    keyPoints: [
      "Wind often loosens shingles and roof edges before leaks become obvious.",
      "Damage may show up as lifted tabs, missing shingles, exposed areas, or new interior moisture signs.",
      "A quick inspection after a major storm can help prevent a more expensive problem later.",
    ],
    sections: [
      {
        id: "common-signs",
        label: "Common Signs",
        title: "The most common signs of wind damage",
        paragraphs: [
          "After a strong storm, wind damage often appears as lifted shingles, bent flashing, missing tabs, or exposed areas near roof edges. These changes may be small at first but can create bigger leak risks over time.",
          "Homeowners also sometimes notice debris patterns, loosened ridge caps, or shingle edges that no longer sit flat the way they used to.",
        ],
        bullets: [
          "Lifted or curling shingles",
          "Missing shingle tabs",
          "Bent or loosened flashing",
          "Roof edges that no longer sit flat",
        ],
      },
      {
        id: "subtle-warning-signs",
        label: "Subtle Signs",
        title: "Subtle warning signs homeowners often miss",
        paragraphs: [
          "Wind damage is not always obvious from the first glance. Sometimes the first clues show up as granules in gutters, a small ceiling stain, or a section of the roofline that looks slightly uneven after a storm.",
          "When those subtle signs appear soon after high wind events, it is often worth getting the roof checked before the next storm puts more stress on the same weak area.",
        ],
      },
      {
        id: "when-it-is-urgent",
        label: "When It Is Urgent",
        title: "When to treat wind damage as more urgent",
        paragraphs: [
          "If water is getting inside, if shingles are missing, or if exposed roof areas are visible from the ground, it is better to move quickly. Those conditions can worsen fast when another storm hits.",
          "Even without an active leak, newer visible movement along roof edges or ridge lines can still justify a timely inspection.",
        ],
      },
      {
        id: "what-inspection-checks",
        label: "Inspection Checklist",
        title: "What a wind damage inspection usually checks",
        paragraphs: [
          "A roof inspection should review the roof surface, edges, flashing, penetrations, and visible leak-risk areas. It should also include a simple explanation of what was found and whether the damage needs action now.",
          "That kind of clarity helps homeowners avoid guessing whether the roof is fine or if a hidden issue is getting worse.",
        ],
      },
    ],
    relatedCitySlugs: ["hurst", "euless", "southlake"],
    relatedGuideSlugs: [
      "hail-damage-roof-inspection-dfw",
      "roof-storm-damage-insurance-texas",
    ],
    faq: [
      {
        question: "Can wind damage cause leaks later even if there is no leak now?",
        answer:
          "Yes. Lifted shingles or loosened edges can stay quiet at first and then allow water in during the next storm.",
      },
      {
        question: "Is wind damage different from hail damage?",
        answer:
          "Yes. Hail often bruises or dents materials, while wind more often lifts, loosens, or removes them. A roof can also have both at the same time.",
      },
    ],
  },
];

export const guideArticlesBySlug = Object.fromEntries(
  guideArticles.map((guide) => [guide.slug, guide]),
) as Record<string, GuideArticle>;

export function getGuidePath(slug: string) {
  return `/guides/${slug}/`;
}

export function getGuideUrl(slug: string) {
  return absoluteUrl(getGuidePath(slug));
}

export function getGuideMetadata(guide: GuideArticle): Metadata {
  const url = getGuideUrl(guide.slug);

  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    keywords: guide.keywords,
    alternates: {
      canonical: url,
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

export function getRelatedGuides(guide: GuideArticle) {
  return guide.relatedGuideSlugs
    .map((slug) => guideArticlesBySlug[slug])
    .filter(Boolean);
}
