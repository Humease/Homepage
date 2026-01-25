"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionReveal } from "@/components/SectionReveal";
import { scenarioData } from "@/lib/data";

export function ScenarioSection() {
  const [focused, setFocused] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();

  return (
    <SectionReveal id="scenario" className="py-20 md:py-24 bg-white/80">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-12">
          {scenarioData.title}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {scenarioData.cards.map((card, i) => (
            <motion.article
              key={card.id}
              className="relative glass-card p-8 rounded-2xl cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: reduceMotion ? 0 : 0.4 }}
              onFocus={() => setFocused(card.id)}
              onBlur={() => setFocused(null)}
              onMouseEnter={() => setFocused(card.id)}
              onMouseLeave={() => setFocused(null)}
              whileHover={
                reduceMotion
                  ? {}
                  : {
                      y: -6,
                      boxShadow: "0 20px 40px -16px rgba(30, 58, 95, 0.12)",
                      transition: { duration: 0.25 },
                    }
              }
            >
              <div className="flex items-center gap-4">
                <span className="text-4xl" aria-hidden>
                  {card.icon}
                </span>
                <h3 className="text-xl font-bold text-primary">{card.title}</h3>
              </div>
              <p className="mt-4 text-gray-600 leading-relaxed">{card.description}</p>
              {focused === card.id && (
                <motion.div
                  className="absolute inset-0 rounded-2xl ring-2 ring-primary/20 pointer-events-none"
                  layoutId="scenario-focus"
                  initial={false}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  aria-hidden
                />
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
