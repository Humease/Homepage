import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <p className="font-semibold text-gray-900">주식회사 휴미즈</p>
            <p className="mt-2 text-sm text-gray-600 max-w-md">
              데이터 컴플라이언스 컨설팅과 AI 기반 가족 서비스(내친구 버디)를 통해
              신뢰 가능한 기술의 기준을 만듭니다.
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
        <p className="mt-8 pt-8 border-t border-gray-100 text-sm text-gray-500">
          © Humease. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
