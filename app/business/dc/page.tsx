"use client";

import { useEffect } from "react";

export default function DCPage() {
  useEffect(() => {
    window.location.replace("/#data-compliance");
  }, []);
  return <p className="p-8 text-center text-gray-500">이동 중...</p>;
}
