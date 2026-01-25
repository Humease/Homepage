import type { NextConfig } from "next";

// 배포(GitHub Pages 등)에서만 /Homepage 사용, 로컬 개발 시에는 루트(/)로 동작
const basePath =
  process.env.NODE_ENV === "production" ? "/Homepage" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: { unoptimized: true }, // 정적 내보내기 시 이미지 최적화 API 사용 불가 → 비활성화
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
