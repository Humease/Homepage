"use client";

import { useState, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionReveal } from "@/components/SectionReveal";
import { contactData } from "@/lib/data";

export function ContactFormSection() {
  const [success, setSuccess] = useState(false);
  const reduceMotion = useReducedMotion();

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = e.currentTarget;
      const name = (form.elements.namedItem("name") as HTMLInputElement)?.value ?? "";
      const email = (form.elements.namedItem("email") as HTMLInputElement)?.value ?? "";
      const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value ?? "";
      const subject = encodeURIComponent("[휴미즈 홈페이지 문의]");
      const body = encodeURIComponent(
        `이름: ${name}\n이메일: ${email}\n\n문의 내용:\n${message}`
      );
      const mailto = `mailto:${contactData.mailto}?subject=${subject}&body=${body}`;
      window.location.href = mailto;
      setSuccess(true);
    },
    []
  );

  return (
    <SectionReveal id="contact" className="py-20 md:py-24 bg-white/80">
      <div className="max-w-xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-primary text-center">
          {contactData.title}
        </h2>
        <p className="mt-2 text-center text-gray-600">{contactData.subtitle}</p>

        {success ? (
          <motion.div
            className="mt-10 glass-card p-8 rounded-2xl text-center"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: reduceMotion ? 0 : 0.3 }}
          >
            <p className="text-primary font-medium">{contactData.successMessage}</p>
            <button
              type="button"
              onClick={() => setSuccess(false)}
              className="mt-4 text-sm text-gray-500 underline hover:text-primary"
            >
              다시 쓰기
            </button>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="mt-10 space-y-5"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0 : 0.4 }}
          >
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1">
                {contactData.fields.name.label}
                {contactData.fields.name.required && " *"}
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required={contactData.fields.name.required}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                autoComplete="name"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1">
                {contactData.fields.email.label}
                {contactData.fields.email.required && " *"}
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required={contactData.fields.email.required}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                autoComplete="email"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1">
                {contactData.fields.message.label}
                {contactData.fields.message.required && " *"}
              </label>
              <textarea
                id="contact-message"
                name="message"
                required={contactData.fields.message.required}
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-y transition"
              />
            </div>
            <button type="submit" className="btn-primary w-full">
              {contactData.submitLabel}
            </button>
          </motion.form>
        )}
      </div>
    </SectionReveal>
  );
}
