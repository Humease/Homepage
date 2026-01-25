export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-primary mb-8">문의하기</h2>
        <div className="space-y-6 text-gray-700">
          <p>
            컨설팅 서비스, 내친구 버디, 제휴·투자 문의 등 다양한
            협업 요청을 환영합니다.
          </p>
          <div className="pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-1">이메일</p>
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
        </div>
      </div>
    </section>
  );
}
