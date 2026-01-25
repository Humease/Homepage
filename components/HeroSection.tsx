"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
  return (
    <section id="hero" className="hero-gradient hero-pattern min-h-[85vh] flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.p
            className="text-2xl md:text-3xl font-semibold text-primary leading-tight"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            데이터를 이해하는 기술,
            <br />
            사람을 위한 인텔리전스.
          </motion.p>
          <motion.p
            className="mt-4 text-gray-600 leading-snug"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            휴미즈는 데이터 컴플라이언스와
            <br />
            AI 기반 가족 서비스를 통해
            <br />
            신뢰 가능한 기술의 기준을 만듭니다.
          </motion.p>
          <motion.div
            className="mt-6 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <Link
              href="/#data-compliance"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-light transition-colors"
            >
              컨설팅 서비스 알아보기
            </Link>
            <Link
              href="/#mybuddy"
              className="inline-flex items-center justify-center px-6 py-3 bg-white border-2 border-primary text-primary text-sm font-medium rounded-lg hover:bg-accent-light transition-colors"
            >
              내친구 버디 보기
            </Link>
          </motion.div>
        </div>
        <motion.div
          className="hidden md:block relative h-80 rounded-2xl overflow-hidden hero-particles"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
        >
          {/* 로고와 같은 톤: 밝은 하늘색 → 짙은 블루 그라데이션 */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#e8f8fc] via-[#d0eef9] to-primary/15" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 rounded-full border-2 border-primary/15" />
            <div className="absolute w-36 h-36 rounded-full bg-[#4dd2ff]/25 blur-2xl" />
          </div>
          {/* 은은한 파티클 (로고 상단 점 연상) */}
          <span className="absolute w-2 h-2 top-[20%] right-[28%]" style={{ animationDelay: "0s" }} />
          <span className="absolute w-1.5 h-1.5 top-[30%] right-[22%]" style={{ animationDelay: "1.2s" }} />
          <span className="absolute w-1 h-1 top-[25%] right-[35%]" style={{ animationDelay: "2.5s" }} />
          <span className="absolute w-2 h-2 top-[35%] right-[30%]" style={{ animationDelay: "0.8s" }} />
          <span className="absolute w-1 h-1 top-[22%] right-[18%]" style={{ animationDelay: "3s" }} />
        </motion.div>
      </div>
    </section>
  );
}
