import Link from "next/link";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-6xl font-semibold text-gray-300">404</p>
        <p className="mt-2 text-gray-600">페이지를 찾을 수 없습니다.</p>
        <Link
          href={`${basePath}/`}
          className="mt-6 inline-block px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-light transition-colors"
        >
          홈으로 가기
        </Link>
      </div>
    </section>
  );
}
