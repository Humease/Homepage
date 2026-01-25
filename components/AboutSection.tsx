"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <motion.section
      id="about"
      className="py-14 bg-white border-t border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
    >
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-primary mb-6">회사 소개</h2>
        <div className="text-gray-700 leading-snug space-y-4">
          <p>
            휴미즈(Humease)는 기술이 조직과 사람의 성장을 자연스럽게 지원하는 방식을 고민하는 컨설팅·디지털 서비스 기업입니다.
          </p>
          <p>
            기업에게는 데이터와 기술을 기반으로 한 실행 중심의 컨설팅을 제공하여, 복잡한 문제를 구조적으로 해결하고 지속 가능한 운영과 성과 창출을 돕습니다.
          </p>
          <p>
            가정에는 아이와 부모를 연결하는 가족 중심 디지털 서비스 ‘내친구 버디’를 통해, 일상의 대화와 기록이 성장으로 이어지는 경험을 제공합니다.
          </p>
          <p>
            휴미즈는 신뢰와 안전, 사람 중심의 가치를 바탕으로 기술을 단순한 도구가 아닌 삶을 이해하고 돕는 파트너로 발전시키며, 기업과 가정이 함께 성장하는 미래를 만들어갑니다.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
