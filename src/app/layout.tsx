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

// 🔥 SEO 기본 설정
export const metadata: Metadata = {
  title: "여상수 고깃집 | 안동식 양념소갈비 전문",
  description:
    "할머니께 전수받은 안동식 양념소갈비를 트렌디하게 즐길 수 있는 여상수 고깃집.",
  keywords: ["여상수", "안동식 갈비", "양념갈비", "한우", "고깃집"],
  openGraph: {
    title: "여상수 고깃집",
    description: "할머니께 전수받은 안동식 양념소갈비 전문",
    url: "https://여상수.com",
    siteName: "여상수",
    images: [
      {
        url: "https://여상수.com/og-image.jpg", // 🔥 public/og-image.jpg 넣으면 됨
        width: 1200,
        height: 630,
        alt: "여상수 고깃집 대표 이미지",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "여상수 고깃집",
    description: "할머니께 전수받은 안동식 양념소갈비 전문",
    images: ["https://여상수.com/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
