import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <p className="font-semibold text-gray-900">주식회사 휴미즈</p>
            <p className="mt-1.5 text-sm text-gray-600 max-w-md leading-snug">
              휴미즈는 IT 기술을 통해 사람의 일상이 더 편리해지도록 돕습니다.
              <br />
              기업과 가정이 함께 성장하고 행복해질 수 있는 환경을 만들어갑니다.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <Link
              href="/contact"
              className="text-sm text-primary hover:underline"
            >
              이메일 · 문의
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              개인정보 처리방침
            </Link>
          </div>
        </div>
        <p className="mt-6 pt-6 border-t border-gray-100 text-sm text-gray-500">
          © Humease. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
