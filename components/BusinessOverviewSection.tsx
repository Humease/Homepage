"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const dcItems = [
  "아카이빙 및 이디스커버리",
  "내부 통제 및 관리 체계 수립",
  "개인정보보호법 등 주요 규제 대응",
  "다양한 라이선스 컨설팅 지원",
];

const buddyItems = [
  "아이 대화 기록",
  "부모 요약",
  "AI 코칭",
  "성장 리포트",
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export function BusinessOverviewSection() {
  return (
    <section id="services" className="py-14 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Link
              href="/#data-compliance"
              className="group block p-6 bg-white border border-gray-200 rounded-lg hover:border-primary/30 hover:shadow-lg transition-all duration-300 card-lift"
            >
              <div className="flex flex-col gap-3">
                <motion.div
                  className="w-12 h-1 bg-primary"
                  whileHover={{ width: 24 }}
                  transition={{ duration: 0.25 }}
                />
                <h3 className="text-xl font-semibold text-primary">
                  컨설팅 서비스
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  {dcItems.map((dcItem) => (
                    <li key={dcItem} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-sm" />
                      {dcItem}
                    </li>
                  ))}
                </ul>
                <span className="text-sm text-primary font-medium group-hover:underline mt-2 inline-block group-hover:translate-x-1 transition-transform">
                  자세히 보기 →
                </span>
              </div>
            </Link>
          </motion.div>

          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Link
              href="/#mybuddy"
              className="group block p-6 bg-gradient-to-br from-accent-light to-white border border-accent/20 rounded-lg hover:border-accent/40 hover:shadow-lg transition-all duration-300 card-lift"
            >
              <div className="flex flex-col gap-3">
                <motion.div
                  className="w-12 h-1 rounded-full bg-accent"
                  whileHover={{ width: 24 }}
                  transition={{ duration: 0.25 }}
                />
                <h3 className="text-xl font-semibold text-primary">
                  AI 친구
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  {buddyItems.map((buddyItem) => (
                    <li key={buddyItem} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {buddyItem}
                    </li>
                  ))}
                </ul>
                <span className="text-sm text-primary font-medium group-hover:underline mt-2 inline-block group-hover:translate-x-1 transition-transform">
                  자세히 보기 →
                </span>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
