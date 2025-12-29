// app/layout.tsx
import "./globals.css";
import type { Metadata, Viewport } from "next";
import ContactDrawerProvider from "@/components/contact/ContactDrawerProvider";
import FloatingKakaoButton from "@/components/FloatingKakaoButton";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aptus-software.com"),
  title: {
    default: "Aptus Software Solutions | IT 외주 개발 · MVP · 앱/웹 개발",
    template: "%s | Aptus Software Solutions",
  },
  description:
    "앱터스는 IT 외주 개발 파트너입니다. 앱·웹·관리자·MVP를 빠르고 투명하게 개발하고, 일정/커뮤니케이션/운영까지 책임집니다.",
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
    title: "Aptus Software Solutions | IT 외주 개발 · MVP · 앱/웹 개발",
    description:
      "앱터스는 IT 외주 개발 파트너입니다. 앱·웹·관리자·MVP를 빠르고 투명하게 개발하고, 운영까지 책임집니다.",
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
    title: "Aptus Software Solutions | IT 외주 개발 · MVP · 앱/웹 개발",
    description:
      "앱터스는 IT 외주 개발 파트너입니다. 앱·웹·관리자·MVP를 빠르고 투명하게 개발하고, 운영까지 책임집니다.",
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
      <body>
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
