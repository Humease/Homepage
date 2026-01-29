"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "사업 소개", href: "/#business", hash: "business" },
  { label: "컨설팅", href: "/#consulting", hash: "consulting" },
  { label: "AI 친구", href: "/#mybuddy", hash: "mybuddy" },
  { label: "문의하기", href: "/#contact", hash: "contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card shadow-soft py-0" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-2">
        <Link href="/" className="flex items-center shrink-0" aria-label="휴미즈 홈">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logo.png`}
            alt="휴미즈"
            width={140}
            height={40}
            className="h-7 w-auto object-contain object-left sm:h-[2.25rem]"
            priority
          />
        </Link>
        <nav className="flex items-center gap-2 sm:gap-4 md:gap-8 min-w-0 overflow-x-auto overflow-y-hidden py-1 -mx-1 scrollbar-none" aria-label="주요 메뉴">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.hash)}
              className="text-xs font-medium text-gray-700 hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md whitespace-nowrap sm:text-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
