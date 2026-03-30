"use client";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { LinkButton } from "@/components/ui/link-button";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
} from "lucide-react";
import {
  BUSINESS_EMAIL,
  BUSINESS_NAME,
  BUSINESS_PHONE,
  BUSINESS_PHONE_E164,
  GOOGLE_MAPS_URL,
  withBasePath,
} from "@/lib/seo";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { cityNames } from "@/lib/i18n";
import { cityPagePathsByCity } from "@/lib/city-pages";

const PHONE_NUMBER = BUSINESS_PHONE;
const PHONE_HREF = `tel:${BUSINESS_PHONE_E164}`;

export default function Footer() {
  const { t } = useLanguage();
  const quickLinks = t.nav.map((label, index) => ({
    label,
    href: ["#free-inspection", "#why-choose-us", "#before-after", "#testimonials", "#service-area", "#faq"][index],
  }));
  const serviceAreas = [...cityNames].slice(0, 6);

  return (
    <footer className="bg-brand-navy text-brand-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <div className="relative mb-5 h-14 w-[184px]">
              <Image
                src={withBasePath("/images/brand/praiseworthy-wordmark.png")}
                alt="Praise Worthy brand wordmark"
                fill
                sizes="184px"
                className="object-contain object-left brightness-0 invert"
              />
            </div>
            <div className="space-y-3 text-sm text-brand-surface/72">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>North Richland Hills, TX</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <a href={PHONE_HREF} className="hover:text-brand-orange transition-colors">
                  {PHONE_NUMBER}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <a
                  href={`mailto:${BUSINESS_EMAIL}`}
                  className="hover:text-brand-orange transition-colors"
                >
                  {BUSINESS_EMAIL}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 shrink-0" />
                <span>{t.footer.hours}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" />
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-brand-orange transition-colors"
                >
                  {t.footer.mapLabel}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider mb-4">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-brand-surface/72 hover:text-brand-orange transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider mb-4">
              {t.footer.serviceAreas}
            </h3>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area}>
                  <a
                    href={cityPagePathsByCity[area]}
                    className="text-sm text-brand-surface/72 hover:text-brand-orange transition-colors"
                  >
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider mb-4">
              {t.footer.getStarted}
            </h3>
            <p className="text-sm text-brand-surface/72 mb-4">
              {t.footer.getStartedDescription}
            </p>
            <LinkButton
              href={PHONE_HREF}
              className="w-full rounded-full border border-brand-orange/30 bg-brand-orange text-brand-navy hover:bg-brand-amber font-semibold"
            >
              <Phone className="h-4 w-4 mr-2" />
              {t.common.freeInspection}
            </LinkButton>
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                className="p-2 rounded-full bg-white/8 hover:bg-white/14 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white/8 hover:bg-white/14 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="bg-white/12 mb-6" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-brand-surface/52">
            &copy; {new Date().getFullYear()} {BUSINESS_NAME} {t.footer.rightsReserved}
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-xs text-brand-surface/52 hover:text-brand-orange transition-colors">
              {t.footer.privacyPolicy}
            </a>
            <a href="#" className="text-xs text-brand-surface/52 hover:text-brand-orange transition-colors">
              {t.footer.termsOfService}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
