import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "개인정보 처리방침 | 휴미즈 Humease",
  description: "주식회사 휴미즈 개인정보 처리방침",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-semibold text-primary mb-8">
        개인정보 처리방침
      </h1>
      <div className="prose prose-gray max-w-none space-y-6 text-gray-700 leading-relaxed text-sm">
        <p>
          주식회사 휴미즈(이하 &quot;회사&quot;)는 이용자의 개인정보를 중요시하며,
          관련 법령을 준수합니다. 본 방침은 홈페이지 및 서비스 이용 시 수집·이용되는
          개인정보에 대해 적용됩니다.
        </p>
        <h2 className="text-lg font-semibold text-gray-900 mt-8 mb-2">
          1. 수집 항목 및 목적
        </h2>
        <p>
          문의 시 이름, 이메일, 연락처 등 서비스 제공 및 회신에 필요한 최소
          정보를 수집할 수 있습니다.
        </p>
        <h2 className="text-lg font-semibold text-gray-900 mt-8 mb-2">
          2. 보관 및 파기
        </h2>
        <p>
          수집된 개인정보는 목적 달성 후 지체 없이 파기하며, 법령에 따른 보관
          기간이 있는 경우 해당 기간만 보관합니다.
        </p>
        <h2 className="text-lg font-semibold text-gray-900 mt-8 mb-2">
          3. 문의
        </h2>
        <p>
          개인정보 관련 문의는{" "}
          <a href="mailto:contact@humease.com" className="text-primary hover:underline">
            contact@humease.com
          </a>
          으로 연락 부탁드립니다.
        </p>
      </div>
      <Link
        href="/"
        className="inline-block mt-10 text-sm text-primary hover:underline"
      >
        ← 홈으로
      </Link>
    </div>
  );
}
