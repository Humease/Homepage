import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ScrollToHash } from "@/components/ScrollToHash";

export const metadata: Metadata = {
  title: "휴미즈 | 데이터를 이해하는 기술, 사람을 위한 인텔리전스",
  description:
    "휴미즈는 기업 컨설팅과 AI 기반 가족 서비스 '내친구 버디'를 통해 신뢰와 따뜻함으로 일상을 더 편리하게 만듭니다.",
  openGraph: {
    title: "휴미즈 | 데이터를 이해하는 기술, 사람을 위한 인텔리전스",
    description: "기업 컨설팅과 내친구 버디를 만나보세요.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16">
          <ScrollToHash />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
