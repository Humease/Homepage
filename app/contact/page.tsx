import Link from "next/link";

export const metadata = {
  title: "문의하기 | 주식회사 휴미즈",
  description: "컨설팅 서비스, 내친구 버디, 제휴·투자 문의를 받습니다.",
};

export default function ContactPage() {
  return (
    <section className="py-14 bg-gray-50 border-t border-gray-100 min-h-[60vh] flex items-start">
      <div className="max-w-2xl mx-auto px-6 w-full">
        <h1 className="text-3xl font-semibold text-primary mb-6">문의하기</h1>
        <div className="space-y-4 text-gray-700">
          <p>
            컨설팅 서비스, 내친구 버디, 제휴·투자 문의 등 다양한 협업 요청을
            환영합니다.
          </p>
          <div className="pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-2">이메일</p>
            <a
              href="mailto:contact@humease.com"
              className="text-primary font-medium hover:underline"
            >
              contact@humease.com
            </a>
          </div>
          <p className="text-sm text-gray-500">
            담당자가 확인 후 연락드리겠습니다.
          </p>
          <div className="pt-5 flex flex-wrap gap-4">
            <a
              href="mailto:contact@humease.com"
              className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-light transition-colors"
            >
              이메일로 문의하기
            </a>
            <Link
              href="/"
              className="inline-block px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              홈으로
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
