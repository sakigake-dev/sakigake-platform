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
  metadataBase: new URL("https://sakigake.dev"),
  title: {
    default: "Sakigake (魁) — 個人開発者のための道具箱",
    template: "%s | Sakigake (魁)",
  },
  description:
    "個人開発者向けのプロダクトプラットフォーム。ゲーム素材（アイコン864種・立ち絵）と、AIエージェント前提のSaaS Boilerplateを販売しています。",
  openGraph: {
    siteName: "Sakigake (魁)",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
