import { locales, type Locale } from "@/lib/i18n";
import { localeMeta } from "@/lib/seo-i18n";
import {
  BUSINESS_ALT_NAME,
  BUSINESS_EMAIL,
  BUSINESS_NAME,
  BUSINESS_PHONE,
  GOOGLE_MAPS_URL,
  SITE_URL,
} from "@/lib/seo";

function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

function buildLocalizedLlms(locale: Locale) {
  const meta = localeMeta[locale];

  if (locale === "es") {
    return `# ${BUSINESS_NAME}

> ${meta.websiteDescription}

## Resumen del negocio

- Nombre comercial: ${BUSINESS_NAME}
- Nombre alternativo: ${BUSINESS_ALT_NAME}
- Sitio web: ${SITE_URL}/${locale}
- Telefono: ${BUSINESS_PHONE}
- Correo: ${BUSINESS_EMAIL}
- Perfil de Google Maps: ${GOOGLE_MAPS_URL}

## Servicios principales

- Inspeccion gratis de techo
- Revision de dano por tormenta
- Revision de dano por granizo
- Orientacion sobre reparacion de techo
- Apoyo durante el proceso de seguro

## Resumen de la pagina

${meta.description}
`;
  }

  if (locale === "zh") {
    return `# ${BUSINESS_NAME}

> ${meta.websiteDescription}

## 商家概览

- 品牌名称: ${BUSINESS_NAME}
- 备用名称: ${BUSINESS_ALT_NAME}
- 网站: ${SITE_URL}/${locale}
- 电话: ${BUSINESS_PHONE}
- 邮箱: ${BUSINESS_EMAIL}
- Google Maps: ${GOOGLE_MAPS_URL}

## 主要服务

- 免费屋顶检查
- 风暴损伤评估
- 冰雹损伤检查
- 屋顶维修建议
- 保险理赔沟通支持

## 页面摘要

${meta.description}
`;
  }

  if (locale === "ko") {
    return `# ${BUSINESS_NAME}

> ${meta.websiteDescription}

## 업체 개요

- 상호명: ${BUSINESS_NAME}
- 보조명: ${BUSINESS_ALT_NAME}
- 웹사이트: ${SITE_URL}/${locale}
- 전화번호: ${BUSINESS_PHONE}
- 이메일: ${BUSINESS_EMAIL}
- Google Maps: ${GOOGLE_MAPS_URL}

## 주요 서비스

- 무료 지붕 점검
- 폭풍 피해 점검
- 우박 피해 점검
- 지붕 수리 안내
- 보험 처리 과정 지원

## 페이지 요약

${meta.description}
`;
  }

  return `# ${BUSINESS_NAME}

> ${meta.websiteDescription}

## Business Summary

- Brand name: ${BUSINESS_NAME}
- Alternate name: ${BUSINESS_ALT_NAME}
- Website: ${SITE_URL}/${locale}
- Phone: ${BUSINESS_PHONE}
- Email: ${BUSINESS_EMAIL}
- Google Maps profile: ${GOOGLE_MAPS_URL}

## Services

- Free roof inspections
- Storm damage roof assessments
- Hail damage inspections
- Roof repair guidance
- Insurance claim support

## Page Summary

${meta.description}
`;
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ locale: string }> },
) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return new Response("Not Found", { status: 404 });
  }

  return new Response(buildLocalizedLlms(locale), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
