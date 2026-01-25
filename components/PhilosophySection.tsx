"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    title: "컨설팅 서비스",
    description:
      "데이터의 수집, 보관, 활용 전 과정에 걸친 규제 이해와 체계적 대응으로 조직의 리스크를 낮추고 신뢰를 쌓습니다.",
  },
  {
    title: "AI Intelligence",
    description:
      "검증 가능하고 설명 가능한 AI를 설계합니다. 기술이 사람의 판단을 대체하지 않고, 결정을 지원하도록 합니다.",
  },
  {
    title: "Human-Centered Design",
    description:
      "최종 사용자와 이해관계자를 중심에 두고, 규제 요구와 사용성, 확장성을 함께 만족시키는 솔루션을 설계합니다.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function PhilosophySection() {
  return (
    <section id="philosophy" className="py-14 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="grid md:grid-cols-3 gap-8 lg:gap-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={item}
              className="space-y-3 group"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
            >
              <h3 className="text-lg font-semibold text-primary">
                {pillar.title}
              </h3>
              <p className="text-gray-600 leading-snug text-sm">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
