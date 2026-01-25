# 휴미즈(Humease) 홈페이지

데이터 컴플라이언스(DC) 컨설팅과 AI 기반 가족 서비스(내친구 버디)를 소개하는 휴미즈 공식 홈페이지입니다.

## 기술 스택

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion (Hero 섹션)
- **Font**: Pretendard (KR) / Inter (EN fallback)

## 실행 방법

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

## 빌드 (정적 내보내기)

```bash
npm run build
```

빌드 결과가 `out/` 폴더에 생성됩니다. **`out/index.html`** 이 메인 페이지이며, GitHub Pages가 이 구조를 그대로 인식합니다.

## GitHub Pages 배포

이 프로젝트는 **정적 내보내기**(`output: "export"`)로 설정되어 있어 GitHub Pages에 그대로 올릴 수 있습니다.

### 방법 1: 빌드 결과를 저장소에 올리기

1. `npm run build` 실행 → `out/` 폴더 생성
2. `out/` 안의 **모든 파일**을 저장소의 `main` 브랜치 루트에 넣거나, 별도 브랜치(예: `gh-pages`)에 푸시
3. GitHub 저장소 **Settings → Pages**에서 소스 선택
   - **Branch**: 위에서 올린 브랜치 선택, 폴더는 `/ (root)`

### 방법 2: GitHub Actions로 자동 배포 (권장)

`main`에 푸시할 때마다 자동으로 빌드 후 GitHub Pages에 배포하도록 워크플로를 추가할 수 있습니다. 원하면 이 방식용 YAML 예시를 추가해 드릴 수 있습니다.

### 주의사항

- **사용자/조직 사이트** (`username.github.io`) 로 쓰는 경우: `next.config.ts`의 `basePath`/`assetPrefix`는 그대로 두면 됩니다.
- **프로젝트 사이트** (`username.github.io/Homepage`) 로 쓰는 경우: `next.config.ts`에서 `basePath`와 `assetPrefix` 주석을 해제하고 리포 이름(예: `"/Homepage"`)으로 수정한 뒤 다시 빌드하세요.

## 사이트맵

| 경로 | 설명 |
|------|------|
| `/` | 메인 (Hero, Philosophy, Business, Trust) |
| `/about` | 회사 소개 |
| `/business/dc` | DC 컨설팅 |
| `/business/mybuddy` | 내친구 버디 |
| `/contact` | 문의 |
| `/privacy` | 개인정보 처리방침 |

## 이미지 에셋

- **헤더 로고**: `public/logo.png` — 한글 가로형 로고(심볼 + 휴미즈) 사용 중.
- PPT 계열 이미지 등 Hero용 추가 에셋은 `public/` 폴더에 넣은 뒤 컴포넌트에서 참조하면 됩니다.
