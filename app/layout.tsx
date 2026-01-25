import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ScrollToHash } from "@/components/ScrollToHash";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "휴미즈 Humease | 데이터 컴플라이언스 & AI 가족 서비스",
  description:
    "데이터를 이해하는 기술, 사람을 위한 인텔리전스. 데이터 컴플라이언스와 AI 기반 가족 서비스를 통해 신뢰 가능한 기술의 기준을 만듭니다.",
  openGraph: {
    title: "휴미즈 Humease",
    description: "데이터 컴플라이언스 & AI 기반 가족 서비스",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={inter.variable}>
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
