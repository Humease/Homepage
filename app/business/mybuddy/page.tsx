import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "내친구 버디 | 휴미즈 Humease",
  description:
    "부모가 안심할 수 있는 AI 가족 서비스. 아이 대화 기록, 부모 요약, AI 코칭으로 따뜻하고 신뢰할 수 있는 경험을 설계합니다.",
};

export default function MyBuddyPage() {
  return (
    <div>
      {/* Hero: 밝고 따뜻한 블루 */}
      <section className="bg-gradient-to-b from-accent-light to-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-semibold text-primary mb-6">
            내친구 버디
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            아이와의 대화를 기록하고, 부모에게 요약과 인사이트를 전달하며,
            신뢰할 수 있는 AI 코칭을 제공하는 가족 서비스입니다. 기술보다
            신뢰와 따뜻함, 과학적 설계를 우선합니다.
          </p>
        </div>
      </section>

      {/* 서비스 철학 */}
      <section className="py-16 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-semibold text-primary mb-6">
            서비스 철학
          </h2>
          <p className="text-gray-700 leading-relaxed">
            부모가 안심할 수 있는 AI를 지향합니다. 개인정보 최소 수집, 투명한
            데이터 활용, 아이와 부모 모두를 존중하는 UX를 설계합니다.
          </p>
        </div>
      </section>

      {/* 사용 시나리오 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-semibold text-primary mb-8">
            사용 시나리오
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">아이</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                자연스러운 대화를 통해 감정과 생각을 기록하고, 안전한 범위 내에서
                AI와 소통합니다.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">부모</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                요약된 인사이트와 AI 코칭을 통해 자녀 이해를 돕고, 필요한 경우에만
                적절히 개입할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 안전 / 개인정보 / 설계 원칙 */}
      <section className="py-16 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-semibold text-primary mb-6">
            안전 · 개인정보 · 설계 원칙
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-2">
              <span className="text-accent font-medium">·</span>
              아동·가족 데이터는 최소 수집·암호화·접근 통제로 관리됩니다.
            </li>
            <li className="flex gap-2">
              <span className="text-accent font-medium">·</span>
              AI 활용은 설명 가능하고, 부모 동의와 투명한 정책 하에 이루어집니다.
            </li>
            <li className="flex gap-2">
              <span className="text-accent font-medium">·</span>
              사용자 중심 설계로 신뢰와 따뜻함을 유지합니다.
            </li>
          </ul>
        </div>
      </section>

      {/* CTA: 준비 중 / 문의하기 */}
      <section className="py-16 bg-accent-light/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-700 mb-2">서비스 준비 중입니다.</p>
          <p className="text-gray-600 text-sm mb-6">
            사전 문의·파트너십은 아래로 연락 부탁드립니다.
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
