import Link from "next/link";
import { footerData } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200/80 bg-white/60 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <p className="font-semibold text-primary">{footerData.companyName}</p>
            <p className="mt-2 text-sm text-gray-600 max-w-md leading-relaxed whitespace-pre-line">
              {footerData.oneLiner}
            </p>
          </div>
          <nav className="flex flex-col gap-3" aria-label="푸터 링크">
            {footerData.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-600 hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="mt-8 pt-6 border-t border-gray-100 text-sm text-gray-500">
          {footerData.copyright}
        </p>
      </div>
    </footer>
  );
}
