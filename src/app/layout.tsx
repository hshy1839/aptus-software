import "./globals.css";
import ContactDrawerProvider from "@/components/contact/ContactDrawerProvider";
import FloatingKakaoButton from "@/components/FloatingKakaoButton";

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

          {/* ✅ 전역 고정 카카오톡 상담 버튼 */}
          <FloatingKakaoButton />
        </ContactDrawerProvider>
      </body>
    </html>
  );
}
