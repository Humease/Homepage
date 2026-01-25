"use client";

import { useEffect } from "react";

export default function ContactPage() {
  useEffect(() => {
    window.location.replace("/#contact");
  }, []);
  return <p className="p-8 text-center text-gray-500">이동 중...</p>;
}
