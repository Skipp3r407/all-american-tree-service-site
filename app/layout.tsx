import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tree Service in Middleburg FL | All American Tree Service",
  description:
    "Licensed & insured tree service offering trimming, removal, stump grinding & emergency services in Florida. Call now for a free estimate.",
  keywords: [
    "tree service Middleburg FL",
    "tree removal Jacksonville FL",
    "emergency tree service",
    "stump grinding",
    "storm cleanup",
    "land clearing",
  ],
  openGraph: {
    title: "Tree Service in Middleburg FL | All American Tree Service",
    description:
      "Licensed & insured tree service offering trimming, removal, stump grinding & emergency services in Florida. Call now for a free estimate.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
