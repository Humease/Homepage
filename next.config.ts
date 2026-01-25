import type { NextConfig } from "next";

// 커스텀 도메인(www.humease.com) 루트에서 서비스 → basePath 없음
const basePath = "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: { unoptimized: true }, // 정적 내보내기 시 이미지 최적화 API 사용 불가 → 비활성화
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
