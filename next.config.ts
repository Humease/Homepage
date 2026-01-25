import type { NextConfig } from "next";

const basePath = "/Homepage";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: `${basePath}/`,
  images: { unoptimized: true }, // 정적 내보내기 시 이미지 최적화 API 사용 불가 → 비활성화
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
