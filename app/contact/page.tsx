import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "문의 | 휴미즈 Humease",
  description: "휴미즈에 문의하세요. DC 컨설팅, 내친구 버디 관련 협업 및 제안을 환영합니다.",
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-semibold text-primary mb-8">문의하기</h1>
      <div className="space-y-6 text-gray-700">
        <p>
          DC 컨설팅, 내친구 버디, 제휴·투자 문의 등 다양한 협업 요청을
          환영합니다.
        </p>
        <div className="pt-4 border-t border-gray-100">
          <p className="text-sm text-gray-500 mb-1">이메일</p>
          <a
            href="mailto:contact@humease.com"
            className="text-primary font-medium hover:underline"
          >
            contact@humease.com
          </a>
        </div>
        <p className="text-sm text-gray-500">
          담당자가 확인 후 연락드리겠습니다.
        </p>
        <Link
          href="/"
          className="inline-block mt-8 text-sm text-primary hover:underline"
        >
          ← 홈으로
        </Link>
      </div>
    </div>
  );
}
