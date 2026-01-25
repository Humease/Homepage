import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "회사 소개 | 휴미즈 Humease",
  description: "휴미즈는 데이터 컴플라이언스와 AI 기반 가족 서비스를 통해 신뢰 가능한 기술의 기준을 만듭니다.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-semibold text-primary mb-8">회사 소개</h1>
      <div className="prose prose-gray max-w-none space-y-6 text-gray-700 leading-relaxed">
        <p>
          주식회사 휴미즈는 데이터를 이해하는 기술과 사람을 위한 인텔리전스를
          지향합니다. 데이터 컴플라이언스(DC) 컨설팅과 AI 기반 가족 서비스(내친구
          버디) 두 사업을 하나의 철학으로 연결합니다.
        </p>
        <p>
          빠른 기술보다 오래 신뢰받는 기술을 선택하며, 규제와 윤리, 사용자 경험을
          함께 고려한 설계를 지향합니다.
        </p>
      </div>
    </div>
  );
}
