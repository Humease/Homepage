"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionReveal } from "@/components/SectionReveal";
import { consultingTimelineData } from "@/lib/data";

export function ConsultingTimelineSection() {
  const reduceMotion = useReducedMotion();

  return (
    <SectionReveal id="consulting" className="py-20 md:py-24 bg-white/80">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-primary text-center">
          {consultingTimelineData.title}
        </h2>
        <p className="mt-2 text-center text-gray-600">{consultingTimelineData.subtitle}</p>

        <div className="mt-14 relative">
          {/* 타임라인 선 (데스크톱) */}
          <div
            className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2"
            aria-hidden
          />

          <ul className="grid md:grid-cols-3 gap-8 md:gap-6">
            {consultingTimelineData.steps.map((step, i) => (
              <motion.li
                key={step.id}
                className="relative"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.12, duration: reduceMotion ? 0 : 0.4 }}
              >
                <motion.div
                  className="glass-card p-6 md:p-8 rounded-2xl h-full flex flex-col cursor-default"
                  whileHover={reduceMotion ? {} : { y: -4, boxShadow: "0 16px 40px -12px rgba(30, 58, 95, 0.15)" }}
                  transition={{ duration: 0.25 }}
                >
                  <span className="text-3xl" aria-hidden>
                    {step.icon}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-primary">
                    {step.title}
                    <span className="ml-2 text-sm font-normal text-gray-500">({step.kor})</span>
                  </h3>
                  <p className="mt-3 text-gray-600 text-sm leading-relaxed flex-1">
                    {step.description}
                  </p>
                </motion.div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </SectionReveal>
  );
}
