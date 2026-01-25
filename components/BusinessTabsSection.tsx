"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { SectionReveal } from "@/components/SectionReveal";
import { businessTabsData } from "@/lib/data";

export function BusinessTabsSection() {
  const [activeId, setActiveId] = useState<"consulting" | "mybuddy">("consulting");
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 0.01 : 0.35;

  const consulting = businessTabsData.consulting;
  const mybuddy = businessTabsData.mybuddy;
  const tabs = businessTabsData.tabs;

  const content =
    activeId === "consulting"
      ? { ...consulting, id: "consulting" as const }
      : { ...mybuddy, id: "mybuddy" as const };

  return (
    <SectionReveal id="business" className="py-20 md:py-24 bg-white/70">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex rounded-2xl bg-gray-100/80 p-1.5 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveId(tab.id as "consulting" | "mybuddy")}
              className="flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              aria-pressed={activeId === tab.id}
              aria-controls="business-panel"
              id={`tab-${tab.id}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <motion.div
          className="relative rounded-2xl glass-card p-8 md:p-10 min-h-[280px]"
          role="tabpanel"
          id="business-panel"
          aria-labelledby={`tab-${activeId}`}
          layout
        >
          <div className="absolute inset-1 rounded-2xl bg-white/60 pointer-events-none" />
          <AnimatePresence mode="wait">
            <motion.div
              key={content.id}
              initial={{ opacity: 0, x: reduceMotion ? 0 : 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: reduceMotion ? 0 : -12 }}
              transition={{ duration }}
              className="relative"
            >
              <h3 className="text-xl md:text-2xl font-bold text-primary">{content.title}</h3>
              <p className="mt-4 text-gray-600 leading-relaxed whitespace-pre-line">{content.description}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {content.features.map((f, i) => (
                  <li
                    key={f}
                    className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-sm font-medium"
                  >
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={content.ctaHref}
                className="mt-8 inline-flex items-center gap-2 text-primary font-medium hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              >
                {content.ctaText}
                <span aria-hidden>→</span>
              </Link>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </SectionReveal>
  );
}
