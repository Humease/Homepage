"use client";

import { useEffect } from "react";

export function ScrollToHash() {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash?.slice(1);
      if (hash) {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);
  return null;
}
