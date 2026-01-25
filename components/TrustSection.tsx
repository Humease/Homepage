"use client";

import { motion } from "framer-motion";

export function TrustSection() {
  return (
    <motion.section
      id="trust"
      className="py-16 bg-white"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-xl md:text-2xl font-medium text-gray-800 leading-snug">
          우리는 빠른 기술보다,
          <br />
          오래 신뢰받는 기술을 선택합니다.
        </p>
      </div>
    </motion.section>
  );
}
