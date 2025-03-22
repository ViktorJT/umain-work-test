import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Munchies",
  description: "Umain web test - Viktor Jensen-Torp",
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
