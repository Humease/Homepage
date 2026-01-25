"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { SectionReveal } from "@/components/SectionReveal";
import { faqData } from "@/lib/data";

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();

  return (
    <SectionReveal id="faq" className="py-20 md:py-24 bg-premium bg-premium-pattern">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-12">
          {faqData.title}
        </h2>
        <ul className="space-y-3">
          {faqData.items.map((item) => {
            const isOpen = openId === item.id;
            return (
              <li key={item.id}>
                <div className="glass-card rounded-2xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="w-full flex items-center justify-between gap-4 py-5 px-6 text-left font-medium text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset rounded-2xl"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                    id={`faq-question-${item.id}`}
                  >
                    <span>{item.question}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: reduceMotion ? 0 : 0.3 }}
                      aria-hidden
                    >
                      ▼
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${item.id}`}
                        role="region"
                        aria-labelledby={`faq-question-${item.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: reduceMotion ? 0 : 0.3 },
                          opacity: { duration: reduceMotion ? 0 : 0.2 },
                        }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 px-6 pt-0 text-gray-600 leading-relaxed border-t border-white/40">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </SectionReveal>
  );
}
