"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function MyBuddySection() {
  return (
    <div id="mybuddy">
      <section className="bg-gradient-to-b from-accent-light to-white py-14">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-4">
                AI 친구
              </h2>
              <p className="text-lg text-gray-700 leading-snug">
                아이와의 대화를 기록하고, 부모에게 요약과 인사이트를 전달하며,
                신뢰할 수 있는 AI 코칭을 제공하는 가족 서비스입니다. 기술보다
                신뢰와 따뜻함, 과학적 설계를 우선합니다.
              </p>
            </motion.div>
            <motion.div
              className="relative w-full max-w-[320px] rounded-xl overflow-hidden border border-accent/20 shadow-sm img-float-slow"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/mybuddy.png`}
                alt="AI 친구 – 가족과 함께하는 AI 동반자, 대화와 추천"
                width={320}
                height={213}
                className="w-full h-auto max-h-52 object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section
        className="py-12 border-t border-gray-100"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.4 }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-xl font-semibold text-primary mb-4">
            서비스 철학
          </h3>
          <p className="text-gray-700 leading-snug">
            부모가 안심할 수 있는 AI를 지향합니다. 개인정보 최소 수집, 투명한
            데이터 활용, 아이와 부모 모두를 존중하는 UX를 설계합니다.
          </p>
        </div>
      </motion.section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-xl font-semibold text-primary mb-6">
            사용 시나리오
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h4 className="text-lg font-medium text-gray-900 mb-2">아이</h4>
              <p className="text-gray-600 leading-snug text-sm">
                자연스러운 대화를 통해 감정과 생각을 기록하고, 안전한 범위 내에서
                AI와 소통합니다.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              <h4 className="text-lg font-medium text-gray-900 mb-3">부모</h4>
              <p className="text-gray-600 leading-relaxed text-sm">
                요약된 인사이트와 AI 코칭을 통해 자녀 이해를 돕고, 필요한 경우에만
                적절히 개입할 수 있습니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section
        className="py-12 border-t border-gray-100"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.4 }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-xl font-semibold text-primary mb-4">
            안전 · 개인정보 · 설계 원칙
          </h3>
          <ul className="space-y-2 text-gray-700">
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
      </motion.section>

      <motion.section
        className="py-12 bg-accent-light/50"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.4 }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-700 mb-2">서비스 준비 중입니다.</p>
          <p className="text-gray-600 text-sm mb-4">
            사전 문의·파트너십은 아래 문의하기로 연락 부탁드립니다.
          </p>
          <Link
            href="/#contact"
            className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-light transition-colors"
          >
            문의하기
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
