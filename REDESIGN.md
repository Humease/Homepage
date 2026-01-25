# 휴미즈 홈페이지 전면 개편 가이드

프리미엄 SaaS 스타일 랜딩으로 전면 개편된 구조, 실행/빌드/배포 방법, 커스터마이즈 포인트를 정리했습니다.

---

## 1. 프로젝트 구조 (폴더 트리)

```
d:\VibeCoding\Homepage\
├── app/
│   ├── layout.tsx          # 루트 레이아웃 (Header, Footer, ScrollToHash)
│   ├── page.tsx            # 메인 랜딩 (9개 섹션 조립)
│   ├── globals.css         # 디자인 토큰, 글래스/버튼/배경, reduced-motion
│   ├── about/
│   ├── business/dc/
│   ├── business/mybuddy/
│   ├── contact/
│   └── privacy/
├── components/
│   ├── Header.tsx              # 글래스 헤더, 앵커 스크롤
│   ├── Footer.tsx              # footerData 기반
│   ├── ScrollToHash.tsx
│   ├── SectionReveal.tsx       # 스크롤 기반 reveal (Framer)
│   ├── HeroSection.tsx         # 그라데이션/글로우/패럴랙스/마우스/CTA 2개
│   ├── BusinessTabsSection.tsx # 사업 2개 탭·카드 전환
│   ├── TrustSection.tsx        # CountUp + 핵심 가치 카드
│   ├── ConsultingTimelineSection.tsx  # Discover→Design→Deliver 타임라인
│   ├── BuddyChatSection.tsx    # 버디 채팅 UI + 타이핑 애니메이션
│   ├── ScenarioSection.tsx     # 부모/아이 사용 시나리오 카드
│   ├── FAQSection.tsx          # 아코디언 FAQ
│   ├── ContactFormSection.tsx  # 문의 폼 (mailto + 제출 후 모달 스타일 안내)
│   ├── AboutSection.tsx        # (기존, 서브 페이지 등에서 활용 가능)
│   ├── PhilosophySection.tsx
│   ├── BusinessOverviewSection.tsx
│   ├── DCSection.tsx
│   ├── MyBuddySection.tsx
│   └── ContactSection.tsx
├── lib/
│   └── data.ts             # 히어로/사업/신뢰/타임라인/버디 채팅/시나리오/FAQ/문의/푸터 데모 데이터
├── public/
├── next.config.ts          # output: "export", images: { unoptimized: true }
├── tailwind.config.ts      # primary/accent, radius, shadow, motion 토큰
├── package.json
├── REDESIGN.md             # 본 문서
└── DEPLOY.md               # 기존 배포 설명
```

---

## 2. 필요한 패키지

이미 Next.js + Framer Motion + Tailwind가 설치되어 있습니다. 추가 패키지 없이 동작합니다.

```bash
npm install
```

(추가로 Three.js 등 3D를 넣을 경우)

```bash
npm install three @types/three
```

---

## 3. 실행 / 빌드 / 배포 (GitHub Pages)

### 로컬 개발

```bash
npm run dev
```

브라우저에서 http://localhost:3000 확인.

### 정적 빌드

```bash
npm run build
```

`out/` 폴더에 정적 파일이 생성됩니다.

### GitHub Pages 배포

- 저장소 설정에서 Pages 소스로 **GitHub Actions** 사용 시:  
  `.github/workflows/deploy-pages.yml` 그대로 두고, `main` 푸시 시 `out/`을 배포하도록 구성되어 있는지 확인.
- 로컬에서 `out/`을 `gh-pages` 브랜치에 올리는 방식이면:

  ```bash
  npm run build
  # gh-pages 패키지 사용 시 예: npx gh-pages -d out
  ```

자세한 절차는 `DEPLOY.md`를 참고하면 됩니다.

---

## 4. 커스터마이즈 포인트

아래만 바꿔도 톤과 느낌을 크게 조정할 수 있습니다.

| 구분 | 위치 | 내용 |
|------|------|------|
| **색상** | `app/globals.css` `:root` | `--primary`, `--accent`, `--gradient-hero-*`, `--glass-bg` 등 |
| **색상** | `tailwind.config.ts` | `theme.extend.colors` (이미 CSS 변수 참조) |
| **폰트** | `app/globals.css` | 상단 `@import` (Pretendard CDN), `--font-pretendard` |
| **폰트** | `tailwind.config.ts` | `fontFamily.sans` |
| **문구/숫자** | `lib/data.ts` | 히어로 슬로건, 사업 설명, 신뢰 수치(CountUp), 가치, 타임라인, 버디 채팅 문장, 시나리오, FAQ, 문의/푸터 문구 |
| **문의 메일** | `lib/data.ts` | `contactData.mailto` |
| **애니메이션 강도** | `app/globals.css` `:root` | `--motion-duration` (기본 `0.4s`). 값을 줄이면 전반적으로 빠르게 |
| **애니메이션** | 각 섹션 컴포넌트 | `transition={{ duration: 0.4 }}` 등 Framer 옵션, `useReducedMotion()` 반영 구간 |
| **라운드/글래스** | `app/globals.css` | `--radius-card`, `--radius-button`, `--glass-bg`, `--glass-shadow` |
| **Hero 블러/글로우** | `components/HeroSection.tsx` | `useMouseParallax(6)` 숫자, 블러 원의 크기/투명도 |
| **버디 타이핑 속도** | `components/BuddyChatSection.tsx` | `TYPING_SPEED_MS`, `PAUSE_AFTER_MESSAGE_MS` |

이미지/아이콘은 Hero 우측, 시나리오 카드 아이콘 등 placeholder를 사용 중이므로, 나중에 `public/` 이미지로 교체하거나 컴포넌트 내부 경로만 바꾸면 됩니다.

---

## 5. 접근성·성능 요약

- **접근성**: 키보드 포커스 링(`focus-visible:ring`), 시맨틱 헤딩/랜드마크, FAQ·탭 `aria-expanded`/`aria-controls`/`aria-pressed`, `prefers-reduced-motion` 반영(애니메이션 최소화).
- **성능**: 정적 export, 코드 스플리팅(페이지/클라이언트 컴포넌트), 이미지 `unoptimized`(정적 호스팅 대응). 3D/파티클은 가볍게 적용되어 있어 Lighthouse 점수 유지에 유리합니다.

필요 시 `REDESIGN.md`를 팀 규칙에 맞게 확장해 두세요.
