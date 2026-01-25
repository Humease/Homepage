import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true }, // 정적 내보내기 시 이미지 최적화 API 사용 불가 → 비활성화
  // GitHub Pages 프로젝트 사이트(예: username.github.io/Homepage) 사용
  basePath: "/Homepage",
  assetPrefix: "/Homepage/",
};

export default nextConfig;
