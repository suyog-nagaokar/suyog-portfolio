import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suyog Nagaokar — Data Engineering Leader",
  description:
    "Data Engineering Leader with 13+ years building enterprise data platforms across banking, payments, insurance, and telecom. Targeting Lead Data Engineer / Data Engineering Manager roles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-base text-ink">{children}</body>
    </html>
  );
}
