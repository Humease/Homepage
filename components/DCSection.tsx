"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

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

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function DCSection() {
  return (
    <div id="data-compliance">
      <section className="bg-gradient-to-b from-primary/5 to-white py-14">
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
                컨설팅 서비스
              </h2>
              <p className="text-lg text-gray-700 leading-snug">
                아카이빙, eDiscovery, 데이터 관리, 거버넌스 전반에 걸친 IT 컨설팅 서비스를 제공합니다.
              </p>
              <p className="text-lg text-gray-700 leading-snug mt-3">
                기업 및 공공·금융 조직이 데이터를 체계적으로 관리하고, 내부 통제와 각종 규제 요구 사항을 충족할 수 있도록 전략 수립부터 설계, 구축, 운영까지 책임 있게 지원합니다.
              </p>
            </motion.div>
            <motion.div
              className="relative w-full max-w-[340px] rounded-xl overflow-hidden border border-gray-100 shadow-sm img-float"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/consulting-service.png`}
                alt="컨설팅 서비스 – 데이터 프라이버시, 규제, 리스크 평가"
                width={340}
                height={191}
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
          <h3 className="text-xl font-semibold text-primary mb-3">
            Why Compliance
          </h3>
          <p className="text-gray-700 leading-snug">
            금융, 공공, 대기업을 중심으로 데이터 보존 의무와 전자증거(eDiscovery) 제출 요구, 개인정보 보호 규제가 지속적으로 강화되고 있습니다. 이제 컴플라이언스는 단순한 법적 대응을 넘어, 기업의 신뢰와 지속 가능성을 좌우하는 핵심 요소가 되었습니다. 체계적인 아카이빙과 eDiscovery, 명확한 데이터 관리와 거버넌스 없이는 감사·소송·규제 대응 과정에서 큰 리스크가 발생할 수 있습니다. 올바른 컴플라이언스 체계는 리스크를 줄이고, 조직의 책임성과 신뢰를 높이는 기반이 됩니다.
          </p>
        </div>
      </motion.section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-xl font-semibold text-primary mb-6">
            서비스 영역
          </h3>
          <div className="space-y-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <h4 className="text-lg font-medium text-gray-900 mb-1">
                  {s.title}
                </h4>
                <p className="text-gray-600 leading-snug">{s.description}</p>
              </motion.div>
            ))}
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
            컨설팅 프로세스
          </h3>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            {processSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </motion.section>

      <motion.section
        className="py-12 bg-primary/5"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.4 }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-700 mb-4">
            컨설팅 서비스 관련 문의는 아래 버튼을 통해 편하게 연락해 주세요.
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
