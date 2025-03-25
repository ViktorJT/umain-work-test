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
  referrer: "origin-when-cross-origin",
  creator: shared.me,
  openGraph: {
    description: shared.description,
    type: "website",
    title: shared.title,
    siteName: shared.title,
    images: [
      {
        url: "/og/og-image.png",
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
    images: ["/og/twitter-image.png"],
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
