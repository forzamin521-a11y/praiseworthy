import type { Metadata } from "next";
import "@/app/globals.css";
import { localeMeta } from "@/lib/seo-i18n";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    shortcut: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
};

export default function DefaultRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={localeMeta.en.languageTag} className="scroll-smooth">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
