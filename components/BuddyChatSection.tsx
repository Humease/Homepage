"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionReveal } from "@/components/SectionReveal";
import { buddyChatData } from "@/lib/data";

const TYPING_SPEED_MS = 50;
const PAUSE_AFTER_MESSAGE_MS = 1200;

export function BuddyChatSection() {
  const [visibleMessages, setVisibleMessages] = useState<
    { role: string; text: string; revealed: boolean }[]
  >([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedLength, setDisplayedLength] = useState(0);
  const reduceMotion = useReducedMotion();
  const messages = buddyChatData.messages;

  useEffect(() => {
    if (reduceMotion) {
      setVisibleMessages(messages.map((m) => ({ ...m, revealed: true })));
      return;
    }
    if (currentIndex >= messages.length) return;

    const msg = messages[currentIndex];
    const fullLen = msg.text.length;

    if (displayedLength < fullLen) {
      const t = setTimeout(() => setDisplayedLength((l) => l + 1), TYPING_SPEED_MS);
      return () => clearTimeout(t);
    }

    setVisibleMessages((prev) => {
      const next = [...prev];
      if (!next[currentIndex]) next[currentIndex] = { ...msg, revealed: true };
      else next[currentIndex] = { ...msg, revealed: true };
      return next;
    });
    const t = setTimeout(() => {
      setCurrentIndex((i) => i + 1);
      setDisplayedLength(0);
    }, PAUSE_AFTER_MESSAGE_MS);
    return () => clearTimeout(t);
  }, [currentIndex, displayedLength, messages, reduceMotion]);

  useEffect(() => {
    if (currentIndex < messages.length && visibleMessages.length <= currentIndex) {
      setVisibleMessages((prev) => {
        const m = messages[currentIndex];
        const text = m.text.slice(0, displayedLength);
        const next = prev.slice(0, currentIndex);
        next.push({ role: m.role, text, revealed: false });
        return next;
      });
    }
  }, [currentIndex, displayedLength, messages, visibleMessages.length]);

  const displayList =
    reduceMotion
      ? messages
      : visibleMessages.length
        ? visibleMessages
        : messages.length
          ? [{ role: messages[0].role, text: "", revealed: false }]
          : [];

  return (
    <SectionReveal id="mybuddy" className="py-20 md:py-24 bg-premium bg-premium-pattern">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-10">
          {buddyChatData.title}
        </h2>

        <motion.div
          className="glass-card rounded-2xl overflow-hidden shadow-soft"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="p-4 border-b border-gray-200/60 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="text-sm text-gray-500">내친구 버디</span>
          </div>
          <div className="p-6 space-y-4 min-h-[260px]">
            {displayList.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                    m.role === "user"
                      ? "bg-primary text-white rounded-br-md"
                      : "bg-gray-100 text-gray-800 rounded-bl-md"
                  }`}
                >
                  <span>
                    {m.text}
                    {!m.revealed && currentIndex === i && (
                      <span className="inline-block w-2 h-4 ml-0.5 bg-current animate-pulse" />
                    )}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionReveal>
  );
}
