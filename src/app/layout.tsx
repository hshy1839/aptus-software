// app/layout.tsx
import "./globals.css";
import ContactDrawerProvider from "@/components/contact/ContactDrawerProvider";
import FloatingKakaoButton from "@/components/FloatingKakaoButton";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export const viewport = {
  width: "device-width",
  initialScale: 1,
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
