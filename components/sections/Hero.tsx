"use client";
import { useState, useEffect, useCallback } from "react";
import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/link-button";
import { Phone, Calendar, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { withBasePath } from "@/lib/seo";
import { useLanguage } from "@/components/providers/LanguageProvider";

const PHONE_HREF = "tel:+16823216387";
const SCHEDULE_HREF =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ01K4KNgIlF5_N0dcliaOX-17GpOsjDRKNjnDCZ_giIDfnAqaxLZY90DLEHQfXcTRKuNAtlZ1_v";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t, locale } = useLanguage();
  const carouselSlides = t.hero.slides;
  const trustSignals = t.hero.trustSignals;
  const slidesLength = carouselSlides.length;
  const heroHeadlineClass =
    locale === "zh"
      ? "text-4xl sm:text-5xl md:text-[3.6rem] lg:text-[4.2rem]"
      : locale === "ko"
        ? "text-4xl sm:text-5xl md:text-[3.7rem] lg:text-[4.35rem]"
        : locale === "es"
          ? "text-4xl sm:text-5xl md:text-[3.9rem] lg:text-[4.45rem]"
          : "text-4xl sm:text-5xl md:text-6xl lg:text-[4.7rem]";
  const heroBodyClass =
    locale === "zh" || locale === "ko"
      ? "text-lg sm:text-xl md:text-[1.32rem]"
      : "text-lg sm:text-xl md:text-[1.45rem]";

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slidesLength);
  }, [slidesLength]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slidesLength) % slidesLength);
  }, [slidesLength]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={withBasePath("/images/brand/hero-truck-home.png")}
          alt={t.images.heroAlt}
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/96 via-brand-navy/82 to-brand-navy/32" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_18%,rgba(197,160,89,0.18),transparent_24%),linear-gradient(180deg,rgba(249,248,244,0.08),rgba(0,0,0,0))]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,20,14,0.36)_0%,rgba(8,20,14,0)_38%,rgba(8,20,14,0.12)_100%)]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 md:pt-32 md:pb-16 w-full">
        <div className="max-w-3xl lg:max-w-[52rem]">
          <Badge
            variant="secondary"
            className="mb-6 rounded-full border border-brand-orange/26 bg-brand-orange/12 text-brand-amber backdrop-blur-sm text-sm px-4 py-1.5 shadow-[0_10px_20px_rgba(0,0,0,0.08)]"
          >
            {t.hero.badge}
          </Badge>

          <h1 className={`font-heading ${heroHeadlineClass} font-extrabold text-white leading-[1.04] mb-6 max-w-4xl text-balance`}>
            {t.hero.titleLine1}
            <br />
            <span className="text-brand-orange">{t.hero.titleHighlight}</span>
          </h1>

          <p className={`${heroBodyClass} text-brand-surface/82 mb-8 leading-relaxed max-w-2xl text-pretty`}>
            {t.hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <LinkButton
              href={PHONE_HREF}
              size="lg"
              className="rounded-full border border-brand-orange/35 bg-brand-orange hover:bg-brand-amber text-brand-navy text-lg px-8 py-7 font-bold shadow-[0_18px_36px_rgba(17,33,24,0.28)] animate-pulse-glow"
            >
              <Phone className="h-5 w-5 mr-2" />
              {t.mobileBar.cta}
            </LinkButton>
            <LinkButton
              href={SCHEDULE_HREF}
              target="_blank"
              rel="noreferrer"
              size="lg"
              className="rounded-full border border-brand-surface/55 bg-brand-surface text-brand-navy hover:bg-brand-amber hover:border-brand-amber text-lg px-8 py-7 font-semibold shadow-[0_16px_34px_rgba(12,24,18,0.22)]"
            >
              <Calendar className="h-5 w-5 mr-2" />
              {t.common.scheduleOnline}
            </LinkButton>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 rounded-[24px] border border-white/10 bg-black/10 px-5 py-4 backdrop-blur-[2px] max-w-fit">
            {trustSignals.map((signal) => (
              <div key={signal} className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-brand-success shrink-0" />
                <span className="text-brand-surface/90 text-sm sm:text-base font-medium leading-snug text-pretty">
                  {signal}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative z-10 w-full border-t border-white/10 bg-brand-navy/55 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <button
              onClick={prevSlide}
              className="shrink-0 p-2 rounded-full text-brand-surface/70 hover:text-brand-surface hover:bg-white/10 transition-colors"
              aria-label={t.common.previousSlide}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex-1 text-center min-h-[60px] flex flex-col justify-center">
              <p className="text-white font-heading font-semibold text-base sm:text-lg mb-1">
                {carouselSlides[currentSlide].title}
              </p>
              <p className="text-brand-surface/72 text-sm sm:text-base">
                {carouselSlides[currentSlide].desc}
              </p>
            </div>

            <button
              onClick={nextSlide}
              className="shrink-0 p-2 rounded-full text-brand-surface/70 hover:text-brand-surface hover:bg-white/10 transition-colors"
              aria-label={t.common.nextSlide}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-3">
            {carouselSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentSlide
                    ? "bg-brand-orange w-6"
                    : "bg-white/34 hover:bg-white/56"
                }`}
                aria-label={`${t.common.goToSlide} ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
