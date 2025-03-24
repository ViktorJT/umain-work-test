import type { Metadata } from "next";

import "./globals.css";

const shared = {
  title: "Munchies",
  description: "Application to Senior Web Developer position at Umain",
  me: "Viktor Jensen-Torp",
  url: "https://umain-work-test.vercel.app",
};

export const metadata: Metadata = {
  metadataBase: new URL(shared.url),
  title: shared.title,
  description: shared.description,
  applicationName: shared.title,
  authors: [{ name: shared.me }],
  generator: "Next.js",
  keywords: ["restaurants", "food delivery", "munchies", "dining"],
  referrer: "origin-when-cross-origin",
  creator: shared.me,
  icons: {
    icon: [
      { url: "/meta/favicon.ico-16x16", sizes: "ico-16x16" },
      { url: "/meta/favicon.ico-32x32", sizes: "ico-32x32" },
      { url: "/meta/icon.svg", type: "image/svg+xml" },
      { url: "/meta/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/meta/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      {
        url: "/meta/apple/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    description: shared.description,
    type: "website",
    title: shared.title,
    siteName: shared.title,
    images: [
      {
        url: "/og/og-image.jpg",
        width: 1200,
        height: 630,
        alt: shared.description,
      },
    ],
    url: shared.url,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: shared.title,
    description: shared.description,
    images: ["/meta/og/twitter-image.jpg"],
    creator: "@ViktorJT",
  },
  alternates: {
    canonical: shared.url,
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
