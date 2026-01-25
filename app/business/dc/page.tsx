import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DC 컨설팅 | 휴미즈 Humease",
  description:
    "데이터 컴플라이언스 전문. 아카이빙, eDiscovery, 거버넌스, 컨설팅 & 라이선스로 규제 대응과 책임 있는 데이터 운영을 지원합니다.",
};

const services = [
  {
    title: "Archiving",
    description:
      "이메일·문서·데이터의 체계적 보관과 검색 가능한 아카이브 구축으로 규제 및 감사 대응 기반을 마련합니다.",
  },
  {
    title: "eDiscovery",
    description:
      "소송·조사·규제 대응을 위한 전자증거 수집·검토·제출 프로세스와 도구 도입을 지원합니다.",
  },
  {
    title: "Governance",
    description:
      "데이터 정책, 권한, 보존·폐기 정책을 설계하고 운영 프로세스를 정립합니다.",
  },
];

const processSteps = [
  "요구사항 및 현황 분석",
  "갭 분석 및 로드맵 수립",
  "솔루션·프로세스 설계",
  "도입 지원 및 운영 컨설팅",
];

export default function DCPage() {
  return (
    <div>
      {/* Hero: 정제된 블루 배경 */}
      <section className="bg-gradient-to-b from-primary/5 to-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-semibold text-primary mb-6">
            DC 컨설팅
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            데이터 컴플라이언스와 전자증거(eDiscovery)·아카이빙·거버넌스 분야에서
            구조와 논리, 책임 있는 수행으로 기업과 공공·금융 고객의 규제 대응을
            지원합니다.
          </p>
        </div>
      </section>

      {/* 문제 정의 */}
      <section className="py-16 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-semibold text-primary mb-4">
            Why Compliance
          </h2>
          <p className="text-gray-700 leading-relaxed">
            금융·공공·대기업을 중심으로 데이터 보존 의무, 전자증거 제출 요구,
            개인정보·보안 규제가 강화되고 있습니다. 올바른 아카이빙과 eDiscovery
            프로세스는 리스크 관리와 신뢰 구축에 필수적입니다.
          </p>
        </div>
      </section>

      {/* 서비스 영역 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-semibold text-primary mb-10">
            서비스 영역
          </h2>
          <div className="space-y-10">
            {services.map((s) => (
              <div key={s.title}>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 수행 방식 */}
      <section className="py-16 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-semibold text-primary mb-6">
            컨설팅 프로세스
          </h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-700">
            {processSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-700 mb-6">
            도입·문의는 아래 링크로 부탁드립니다.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-light transition-colors"
          >
            문의하기
          </Link>
        </div>
      </section>
    </div>
  );
}
