"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { SectionReveal } from "@/components/SectionReveal";
import { trustData } from "@/lib/data";

function CountUp({
  value,
  suffix,
  inView,
  reduceMotion,
  duration = 2,
}: {
  value: number;
  suffix: string;
  inView: boolean;
  reduceMotion: boolean | null;
  duration?: number;
}) {
  const [current, setCurrent] = useState(0);
  const startTime = useRef<number | null>(null);

  useEffect(() => {
    if (!inView || reduceMotion) {
      setCurrent(value);
      return;
    }
    setCurrent(0);
    startTime.current = null;
    const step = (t: number) => {
      if (startTime.current == null) startTime.current = t;
      const elapsed = (t - startTime.current) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      setCurrent(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    const id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, [inView, value, duration, reduceMotion]);

  return (
    <span>
      {current}
      {suffix}
    </span>
  );
}

export function TrustSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();

  return (
    <SectionReveal id="trust" className="py-20 md:py-24 bg-premium bg-premium-pattern">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {trustData.stats.length > 0 && (
          <>
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-12">
              숫자로 보는 휴미즈
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {trustData.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="glass-card p-6 text-center rounded-2xl"
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1, duration: reduceMotion ? 0 : 0.4 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary">
                    <CountUp
                      value={stat.value}
                      suffix={stat.suffix}
                      inView={inView}
                      reduceMotion={reduceMotion}
                    />
                  </div>
                  <p className="mt-1 text-sm text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </>
        )}

        <h3 className="text-xl font-semibold text-primary text-center mb-8">핵심 가치</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustData.values.map((v, i) => (
            <motion.article
              key={v.title}
              className="glass-card p-6 rounded-2xl card-lift"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.08, duration: reduceMotion ? 0 : 0.4 }}
            >
              <h4 className="font-semibold text-primary">{v.title}</h4>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{v.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
