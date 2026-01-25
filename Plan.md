
---

# 📘 휴미즈(Humease) 홈페이지 상세 명세서

**Version 1.0 / Cursor 개발 기준**

---

## 0. 프로젝트 개요

### 🎯 목적

- 휴미즈(Humease)의 **회사 정체성 명확화**
    
- 두 개의 사업(DC 컨설팅 / 내친구 버디)을 **하나의 철학으로 통합 표현**
    
- 초기 단계에서 **신뢰·전문성·확장성**을 동시에 전달
    

### 👥 타깃 사용자

1. B2B 고객 (기업/공공/금융)
    
2. B2C 사용자 (부모)
    
3. 파트너 / 투자자
    
4. 내부 설명용(제안서·링크 공유)
    

---

## 1. 기술 스택 (Cursor 기준 권장안)

### 🔧 Frontend

- **Framework**: Next.js (App Router)
    
- **Language**: TypeScript
    
- **Styling**: Tailwind CSS
    
- **Animation**: Framer Motion (필수는 아님, Hero만 사용)
    
- **Font**: Pretendard (KR) / Inter (EN fallback)
    

### 🧱 구조 원칙

- 정적 페이지 중심 (SEO 고려)
    
- CMS ❌ (초기 불필요)
    
- 다크모드 ❌ (브랜드 불일치)
    

---

## 2. 전체 사이트맵

```
/
├─ / (Home)
├─ /about (회사 소개)
├─ /business/dc (DC 컨설팅)
├─ /business/mybuddy (내친구 버디)
├─ /contact (문의)
└─ /privacy (개인정보 처리방침)
```

---

## 3. 공통 레이아웃 명세

### 🔹 Header

- 좌측: 휴미즈 로고 (한글 가로형)
    
- 우측 메뉴:
    
    - 회사소개
        
    - DC 컨설팅
        
    - 내친구 버디
        
    - 문의하기
        
- 스크롤 시:
    
    - 배경: white (opacity 90%)
        
    - 그림자 최소
        

### 🔹 Footer

- 회사명: 주식회사 휴미즈
    
- 사업 영역 간단 요약
    
- 이메일 / 문의 링크
    
- © Humease. All rights reserved.
    

---

## 4. 메인 페이지 ( / ) 상세 명세

### 4.1 Hero Section

**배경**

- 제공된 PPT 이미지 계열 사용
    
- 화이트 → 블루 그라데이션
    
- 파티클/라인은 CSS or SVG로 은은하게
    

**구성**

- 좌측: 텍스트
    
- 우측: 추상 데이터/AI 이미지
    

**텍스트**

```text
데이터를 이해하는 기술,
사람을 위한 인텔리전스.

휴미즈는 데이터 컴플라이언스와
AI 기반 가족 서비스를 통해
신뢰 가능한 기술의 기준을 만듭니다.
```

**CTA**

- [DC 컨설팅 알아보기]
    
- [내친구 버디 보기]
    

---

### 4.2 Company Philosophy Section

**3 Column 구조**

1. 컨설팅 서비스
    
2. AI Intelligence
    
3. Human-Centered Design
    

**각 항목**

- 아이콘 ❌
    
- 텍스트 중심
    
- 짧고 단단한 문장
    

---

### 4.3 Business Overview Section

#### (1) DC 컨설팅 카드

- 배경: 구조적 / 직선 / 큐브 이미지
    
- 내용:
    
    - 아카이빙
        
    - eDiscovery
        
    - 규제 대응
        
    - 컨설팅 & 라이선스
        

#### (2) 내친구 버디 카드

- 배경: 부드러운 블루 / 곡선
    
- 내용:
    
    - 아이 대화 기록
        
    - 부모 요약
        
    - AI 코칭
        

---

### 4.4 Trust Message Section

**문구**

```text
우리는 빠른 기술보다,
오래 신뢰받는 기술을 선택합니다.
```

---

## 5. DC 컨설팅 페이지 (/business/dc)

### 목적

- “이 회사는 **진짜로 데이터 컴플라이언스를 한다**”는 확신
    

### 구성

1. Hero (정제된 블루 배경)
    
2. 문제 정의 (Why Compliance)
    
3. 서비스 영역
    
    - Archiving
        
    - eDiscovery
        
    - Governance
        
4. 수행 방식 (컨설팅 프로세스)
    
5. 문의 CTA
    

### 톤

- 감성 ❌
    
- 구조 / 논리 / 책임
    

---

## 6. 내친구 버디 페이지 (/business/mybuddy)

### 목적

- 부모가 **안심할 수 있는 AI 서비스**라는 인식
    

### 구성

1. Hero (밝고 따뜻한 블루)
    
2. 서비스 철학
    
3. 사용 시나리오
    
    - 아이
        
    - 부모
        
4. 안전 / 개인정보 / 설계 원칙
    
5. “준비 중” 또는 “문의하기”
    

### 톤

- 기술 ❌
    
- 신뢰 / 따뜻함 / 과학적
    

---

## 7. 디자인 고정 가이드

### 🎨 Color

- Primary: 휴미즈 로고 블루
    
- Background: White
    
- Accent: Light Blue
    

### 🧩 UI 규칙

- 카드 남용 ❌
    
- 그림자 최소
    
- 여백 넉넉
    
- 애니메이션은 느리고 단순
    

---

## 8. Cursor 작업 순서 가이드

1. Next.js 프로젝트 생성
    
2. `/app/layout.tsx` 공통 레이아웃
    
3. `/app/page.tsx` 메인 페이지
    
4. business 하위 페이지 분리
    
5. 이미지 asset 정리
    
6. 문구 고정 → 디자인 미세 조정
    

---

## 9. 향후 확장 고려 (지금은 미구현)

- 다국어(i18n)
    
- CMS
    
- 채용 페이지
    
- 버디 데모 영상
    
