"use client";

import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="py-20 bg-gray-50 border-t border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
    >
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-primary mb-8">문의하기</h2>
        <div className="space-y-6 text-gray-700">
          <p>
            컨설팅 서비스, 내친구 버디, 제휴·투자 문의 등 다양한
            협업 요청을 환영합니다.
          </p>
          <div className="pt-3 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-1">이메일</p>
            <a
              href="mailto:contact@humease.com"
              className="text-primary font-medium hover:underline"
            >
              contact@humease.com
            </a>
            <div className="mt-3">
              <a
                href="mailto:contact@humease.com"
                className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-light transition-colors"
              >
                이메일로 문의하기
              </a>
            </div>
          </div>
          <p className="text-sm text-gray-500">
            담당자가 확인 후 연락드리겠습니다.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
