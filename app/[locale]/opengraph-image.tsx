import { notFound } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";
import { createLocalizedOgImage, ogImageContentType, ogImageSize } from "@/lib/og";

export const size = ogImageSize;
export const contentType = ogImageContentType;

function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export default async function LocaleOpenGraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  return createLocalizedOgImage(locale);
}
