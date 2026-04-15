프로젝트명: Humease Homepage2 (완전 리뉴얼)

[프로젝트 목적]
기존 휴미즈 홈페이지를 대체할 신규 홈페이지를 구축한다.
단순 정보 제공이 아니라 "컨설팅 리드 생성"을 목표로 한다.

운영 URL은 유지 (www.humease.com)
배포 대상은 신규 GitHub Repository (Homepage2)

---

[기술 구조]
- Next.js 기반 (App Router)
- GitHub Actions → GitHub Pages 배포 구조 유지
- 반응형 웹 (모바일/태블릿/데스크탑)

---

[기존 시스템 유지 요소]
절대 삭제 금지:
- CNAME (도메인 연결)
- GitHub Actions workflow (.github/workflows)
- SEO 기본 구조 (meta, sitemap, robots)
- 인증 파일 (naver/google verification 등)

---

[핵심 전략]
이 홈페이지는 “회사 소개 사이트”가 아니라
“문제 인식 → 공감 → 해결 제시 → 문의 전환” 구조로 설계한다.

---

[타겟 사용자]
- 법무팀
- 감사팀
- 정보보안팀
- IT 운영팀
- 기업 의사결정자

---

[정보 구조 (IA)]

1. Hero Section
- 한 줄 핵심 메시지
- 고객 문제 직격
- CTA 버튼 (무료 상담 / 문의)

2. Problem Section
- 실제 고객이 겪는 문제 정의
- (소송 대응, 데이터 분산, 감사 대응 등)

3. Solution Section
- 휴미즈 컨설팅 설명
- eDiscovery
- 데이터 컴플라이언스
- AI 기반 분석

4. Use Case Section
- 법무팀 시나리오
- IT팀 시나리오
- 감사 대응 시나리오

5. Process Section
- 컨설팅 진행 프로세스
- (진단 → 분석 → 설계 → 실행)

6. Differentiation Section
- 경쟁사 대비 차별성
- (실행 중심, 경험 기반, 자동화 등)

7. CTA Section (중요)
- 상담 신청 유도
- 간단한 폼 또는 버튼

---

[디자인 방향]
- 프리미엄 B2B 컨설팅 느낌
- 깔끔 / 신뢰 / 전문성
- 과한 애니메이션 금지
- 빠른 로딩 우선

---

[기능 요구사항]

1. 반응형 UI
2. SEO 최적화
3. 빠른 페이지 로딩
4. 클릭 기반 CTA
5. 향후 문의 폼 확장 가능 구조

---

[개발 범위]

포함:
- 전체 UI 재구성
- 페이지 구조 설계
- 컴포넌트화

제외:
- 백엔드 구축 (초기 단계)
- CRM 연동

---

[검증 기준]

1. GitHub Actions build 성공
2. GitHub Pages 정상 배포
3. 모바일/데스크탑 정상 렌더링
4. 깨진 링크 없음
5. 로딩 속도 최적화

---

[배포 전략 (무중단)]

1. 신규 Repository에서 개발 완료
2. GitHub Pages 활성화
3. 테스트 URL로 검증
4. CNAME 적용
5. 신규 repo 정상 확인 후
6. 기존 repo Pages 비활성화

---

[출력 요구]

- 전체 파일 구조
- 주요 페이지 코드
- 변경/삭제/유지 파일 목록
- 배포 방법 설명

---

[주의사항]

- 기존 코드 재사용 최소화 (완전 리뉴얼)
- SEO/도메인 설정 절대 훼손 금지
- UI보다 메시지 전달 구조 우선