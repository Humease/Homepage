"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { heroData } from "@/lib/data";

function useMouseParallax(amount = 8) {
  const [xy, setXy] = useState({ x: 0, y: 0 });
  const reduceMotion = useReducedMotion();
  const onMove = useCallback(
    (e: React.PointerEvent) => {
      if (reduceMotion) return;
      const { clientX, clientY } = e;
      const w = window.innerWidth;
      const h = window.innerHeight;
      const x = ((clientX / w) * 2 - 1) * amount;
      const y = ((clientY / h) * 2 - 1) * amount;
      setXy({ x, y });
    },
    [amount, reduceMotion]
  );
  const onLeave = useCallback(() => setXy({ x: 0, y: 0 }), []);
  return { xy, onMove, onLeave };
}

export function HeroSection() {
  const pathname = usePathname();
  const { xy, onMove, onLeave } = useMouseParallax(6);
  const reduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLElement>(null);

  const scrollToAnchor = (anchor: string) => {
    if (pathname !== "/") return;
    const el = document.getElementById(anchor);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-premium bg-premium-pattern"
    >
      {/* 글로우 오버레이 */}
      <div className="absolute inset-0 glow-overlay" aria-hidden />
      {/* 은은한 블러 오브 (우측 상단) */}
      <div
        className="absolute top-0 right-0 w-[min(60vw,500px)] h-[min(50vh,400px)] rounded-full opacity-40 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(77, 210, 255, 0.35) 0%, transparent 70%)",
          filter: "blur(60px)",
          transform: reduceMotion ? undefined : `translate(${xy.x}px, ${xy.y}px)`,
        }}
        aria-hidden
      />
      {/* 좌측 하단 블러 */}
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-30 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(30, 58, 95, 0.2) 0%, transparent 70%)",
          filter: "blur(50px)",
          transform: reduceMotion ? undefined : `translate(${-xy.x * 0.5}px, ${-xy.y * 0.5}px)`,
        }}
        aria-hidden
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight whitespace-pre-line"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.6, ease: "easeOut" }}
          >
            {heroData.headline}
          </motion.h1>
          <motion.p
            className="mt-5 text-base md:text-lg text-gray-600 leading-relaxed whitespace-pre-line"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.5, delay: 0.1, ease: "easeOut" }}
          >
            {heroData.subline}
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <button
              type="button"
              onClick={() => scrollToAnchor(heroData.ctaConsulting.anchor)}
              className="btn-primary"
            >
              {heroData.ctaConsulting.label}
            </button>
            <button
              type="button"
              onClick={() => scrollToAnchor(heroData.ctaBuddy.anchor)}
              className="btn-secondary"
            >
              {heroData.ctaBuddy.label}
            </button>
          </motion.div>
        </div>

        <motion.div
          className="relative hidden md:block h-80 rounded-2xl overflow-hidden glass-card"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: reduceMotion ? 0 : 0.7, delay: 0.2, ease: "easeOut" }}
          style={{
            transform: reduceMotion ? undefined : `translate(${xy.x * 2}px, ${xy.y * 2}px)`,
          }}
        >
          {/* 배경: 푸른빛 그라데이션 (흰색만 나오지 않도록) */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#b8e0f0] via-[#e0f2fa] to-[#1e3a5f]/20" />
          {/* 중앙 움직이는 원 + 글로우 */}
          <div className="absolute inset-0 flex items-center justify-center hero-particles">
            <motion.div
              className="absolute w-36 h-36 rounded-full border-2 border-primary/30 bg-white/70 shadow-lg"
              animate={
                reduceMotion
                  ? {}
                  : { y: [0, -14, 0], scale: [1, 1.05, 1], opacity: [0.9, 1, 0.9] }
              }
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute w-28 h-28 rounded-full bg-[#4dd2ff]/50 blur-2xl"
              animate={
                reduceMotion
                  ? {}
                  : { scale: [1, 1.3, 1], opacity: [0.6, 0.9, 0.6] }
              }
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute w-20 h-20 rounded-full bg-primary/20"
              animate={
                reduceMotion ? {} : { y: [0, 8, 0], x: [0, -5, 0], scale: [1, 1.1, 1] }
              }
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
          </div>
          {/* 파티클 점들: 떠다니는 애니메이션 */}
          <span className="hero-particles-dot absolute w-3 h-3 rounded-full bg-[#4dd2ff] top-[18%] right-[28%]" style={{ animationDelay: "0s" }} />
          <span className="hero-particles-dot absolute w-2.5 h-2.5 rounded-full bg-primary/60 top-[35%] right-[20%]" style={{ animationDelay: "1s" }} />
          <span className="hero-particles-dot absolute w-2 h-2 rounded-full bg-[#4dd2ff]/80 top-[25%] right-[42%]" style={{ animationDelay: "2.2s" }} />
          <span className="hero-particles-dot absolute w-3 h-3 rounded-full bg-primary/50 top-[55%] right-[25%]" style={{ animationDelay: "0.6s" }} />
          <span className="hero-particles-dot absolute w-2 h-2 rounded-full bg-[#4dd2ff]/70 top-[48%] right-[38%]" style={{ animationDelay: "1.8s" }} />
          <span className="hero-particles-dot absolute w-2.5 h-2.5 rounded-full bg-primary/40 top-[22%] right-[15%]" style={{ animationDelay: "2.8s" }} />
        </motion.div>
      </div>
    </section>
  );
}
