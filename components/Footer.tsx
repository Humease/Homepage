import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <p className="font-semibold text-gray-900">주식회사 휴미즈</p>
            <p className="mt-1.5 text-sm text-gray-600 max-w-md leading-snug">
              기업과 가정의 지속 가능한 성장을 위한 컨설팅과 가족 중심 디지털
              서비스(내친구 버디)로, 신뢰·안전·사람 중심의 경험을 만들어갑니다.
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
