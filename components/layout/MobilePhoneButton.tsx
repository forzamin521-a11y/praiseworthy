"use client";

import { Phone } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

const PHONE_HREF = "tel:+16823216387";

export default function MobilePhoneButton() {
  const { t, locale } = useLanguage();
  const mobileCtaClass =
    locale === "zh"
      ? "text-base"
      : locale === "ko"
        ? "text-[1rem]"
        : locale === "es"
          ? "text-[0.95rem]"
          : "text-lg";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <a
        href={PHONE_HREF}
        className={`flex items-center justify-center gap-2 w-full bg-brand-orange hover:bg-brand-amber text-brand-navy font-bold ${mobileCtaClass} py-4 px-4 text-center leading-tight shadow-[0_-8px_22px_rgba(17,33,24,0.16)] transition-colors`}
      >
        <Phone className="h-5 w-5 animate-pulse" />
        {t.mobileBar.cta}
      </a>
    </div>
  );
}
