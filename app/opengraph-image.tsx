import { createLocalizedOgImage, ogImageContentType, ogImageSize } from "@/lib/og";

export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpenGraphImage() {
  return createLocalizedOgImage("en");
}
