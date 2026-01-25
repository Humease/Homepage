import Link from "next/link";

const dcItems = [
  "아카이빙",
  "eDiscovery",
  "규제 대응",
  "컨설팅 & 라이선스",
];

const buddyItems = [
  "아이 대화 기록",
  "부모 요약",
  "AI 코칭",
];

export function BusinessOverviewSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* 컨설팅 서비스 카드: 구조적/직선/큐브 느낌 */}
          <Link
            href="/#data-compliance"
            className="group block p-8 bg-white border border-gray-200 rounded-lg hover:border-primary/30 hover:shadow-sm transition-all duration-300"
          >
            <div className="flex flex-col gap-4">
              <div className="w-12 h-1 bg-primary" />
              <h3 className="text-xl font-semibold text-primary">
                컨설팅 서비스
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                {dcItems.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-sm" />
                    {item}
                  </li>
                ))}
              </ul>
              <span className="text-sm text-primary font-medium group-hover:underline mt-2">
                자세히 보기 →
              </span>
            </div>
          </Link>

          {/* 내친구 버디 카드: 부드러운 블루/곡선 */}
          <Link
            href="/#mybuddy"
            className="group block p-8 bg-gradient-to-br from-accent-light to-white border border-accent/20 rounded-lg hover:border-accent/40 hover:shadow-sm transition-all duration-300"
          >
            <div className="flex flex-col gap-4">
              <div className="w-12 h-1 rounded-full bg-accent" />
              <h3 className="text-xl font-semibold text-primary">
                내친구 버디
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                {buddyItems.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
              <span className="text-sm text-primary font-medium group-hover:underline mt-2">
                자세히 보기 →
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
