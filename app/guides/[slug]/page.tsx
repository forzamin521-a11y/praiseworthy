import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import GuidePage from "@/components/page/GuidePage";
import { getGuideMetadata, guideArticles, guideArticlesBySlug } from "@/lib/guides";

export function generateStaticParams() {
  return guideArticles.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = guideArticlesBySlug[slug];

  if (!guide) {
    return {};
  }

  return getGuideMetadata(guide);
}

export default async function GuideArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = guideArticlesBySlug[slug];

  if (!guide) {
    notFound();
  }

  return (
    <LanguageProvider initialLocale="en">
      <GuidePage guide={guide} />
    </LanguageProvider>
  );
}
