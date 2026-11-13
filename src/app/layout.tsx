// app/layout.tsx
import "./globals.css";
import type { Metadata, Viewport } from "next";
import ContactDrawerProvider from "@/components/contact/ContactDrawerProvider";
import FloatingKakaoButton from "@/components/FloatingKakaoButton";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { IBM_Plex_Mono, Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});


export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aptus-software.com"),
  title: {
    default: "APTUS SYSTEMS — Digital Product Engineering",
    template: "%s | Aptus Software Solutions",
  },
  description:
    "APTUS는 웹사이트, 모바일 앱, 웹사이트 앱 패키징을 정교한 디지털 시스템으로 구현합니다.",
  keywords: [
    "IT 외주 개발",
    "앱 개발 외주",
    "웹 개발 외주",
    "MVP 개발",
    "외주 개발사",
    "관리자 페이지 개발",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Aptus Software Solutions",
    title: "APTUS SYSTEMS — Digital Product Engineering",
    description:
      "APTUS는 웹사이트, 모바일 앱, 웹사이트 앱 패키징을 정교한 디지털 시스템으로 구현합니다.",
    images: [
      {
        url: "/og.png", // public/og.png 준비 추천(1200x630)
        width: 1200,
        height: 630,
        alt: "Aptus Software Solutions",
      },
    ],
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "APTUS SYSTEMS — Digital Product Engineering",
    description:
      "APTUS는 웹사이트, 모바일 앱, 웹사이트 앱 패키징을 정교한 디지털 시스템으로 구현합니다.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${inter.variable} ${plexMono.variable}`}>
        <ContactDrawerProvider>
          {children}

          {/* 🔼 맨 위로 */}
          <ScrollToTopButton />

          {/* 💬 카카오톡 상담 */}
          <FloatingKakaoButton />
        </ContactDrawerProvider>
      </body>
    </html>
  );
}
