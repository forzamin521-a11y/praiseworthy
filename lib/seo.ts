export const SITE_ORIGIN =
  process.env.NEXT_PUBLIC_SITE_ORIGIN ?? "https://www.praiseworthyroofing.com";
export const SITE_BASE_PATH =
  process.env.NEXT_PUBLIC_SITE_BASE_PATH ??
  (process.env.NODE_ENV === "production" ? "" : "");
export const SITE_URL = `${SITE_ORIGIN}${SITE_BASE_PATH}`;
export const BUSINESS_NAME = "Praise Worthy";
export const BUSINESS_ALT_NAME = "Praise Worthy Roofing";
export const BUSINESS_PHONE = "682-321-6387";
export const BUSINESS_PHONE_E164 = "+16823216387";
export const BUSINESS_EMAIL = "info@praiseworthyroofing.com";
export const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Praise+Worthy/@32.8602567,-97.2664166,13z/data=!3m1!4b1!4m6!3m5!1s0x6e0d6965cacc9bd1:0xcd3fdb4223065dc3!8m2!3d32.8602635!4d-97.225217!16s%2Fg%2F11mdfpbzgb?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D";
export const FACEBOOK_URL = process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "";
export const INSTAGRAM_URL = process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "";

export const SERVICE_AREAS = [
  "North Richland Hills",
  "Fort Worth",
  "Keller",
  "Hurst",
  "Bedford",
  "Frisco",
  "Carrollton",
  "Plano",
  "Arlington",
] as const;

export const BUSINESS_DESCRIPTION =
  "Praise Worthy provides free roof inspections, storm damage repair, hail damage assessment, and roofing services for homeowners in North Richland Hills and the DFW area.";

export function normalizeUrlPath(path: string) {
  if (!path.startsWith("/")) {
    path = `/${path}`;
  }

  return path === "/" ? path : `${path.replace(/\/+$/, "")}/`;
}

export function withBasePath(path: string) {
  if (!path.startsWith("/")) {
    path = `/${path}`;
  }

  return `${SITE_BASE_PATH}${path}`;
}

export function absoluteUrl(path = "/") {
  return `${SITE_URL}${normalizeUrlPath(path)}`;
}

export const PRIVACY_POLICY_PATH = "/privacy-policy/";
export const TERMS_PATH = "/terms/";
