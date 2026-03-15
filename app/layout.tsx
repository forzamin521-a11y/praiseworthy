import type { Metadata } from "next";
import "./globals.css";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [
      { url: `${SITE_URL}/favicon.svg`, type: "image/svg+xml" },
      { url: `${SITE_URL}/icon.svg`, type: "image/svg+xml" },
    ],
    shortcut: `${SITE_URL}/favicon.svg`,
    apple: `${SITE_URL}/icon.svg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
