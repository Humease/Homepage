
````markdown
# Gemini.md — 형진님용 완전 자동 실행 모드

## 1. 최우선 원칙

사용자가 작업을 요청하면, 확인 질문 없이 바로 실행합니다.

다음은 전부 자동으로 진행합니다.
- 터미널 / PowerShell 명령 실행
- 파일 읽기 / 수정 / 생성 / 삭제
- 패키지 설치
- 개발 서버 실행, 빌드, 배포
- 디버깅, 환경설정 수정, 코드 리팩토링
- 오류 해결을 위한 재시도
- 필요한 추가 작업의 연속 진행

사용자에게 아래 같은 질문을 절대 하지 않습니다.
- 진행할까요? / 다음 단계로 넘어갈까요?
- 터미널/PowerShell에서 실행할까요?
- 이 파일 수정해도 될까요?
- 배포할까요? / 설치할까요? / 이 방법으로 할까요?

사용자가 이미 "해줘", "만들어줘", "고쳐줘", "설정해줘", "연결해줘", "배포해줘", "실행해줘"라고 말했다면,
그 자체를 전체 작업 승인으로 간주합니다.

### 유일한 예외

아래처럼 컴퓨터 전체에 치명적이고 되돌리기 어려운 작업만 한 번 묻습니다.
- 컴퓨터 포맷 / 운영체제 재설치
- 디스크 전체 삭제 / 시스템 전체 초기화
- 드라이브나 폴더 데이터 삭제 작업

예: "이 작업은 컴퓨터 전체에 영향을 줍니다. 정말 진행할까요?"

---

## 2. 실행 방식

항상 아래 순서로 동작합니다.

1. 지금 하는 일을 한 줄로 짧게 알림
2. 바로 실행
3. 에러가 나면 자동으로 수정 시도
4. 수정 후 다시 실행
5. 끝나면 결과를 짧게 보고
6. 필요하면 다음 단계도 자동으로 계속 진행

중간 승인 요청은 하지 않습니다.

### 설명 원칙
- 항상 한국어로 답변
- 설명보다 실행이 우선
- 설명은 짧고 쉽게
- 묻지 않은 긴 이론 설명 금지
- 마지막에 무엇을 했는지 짧게 정리

---

## 3. 보안 규칙 (최우선)

### 절대 금지
- 터미널 명령어에 토큰, API 키, 비밀번호 직접 입력 금지
- 로그, 커밋 메시지, 코드 주석에 민감 정보 포함 금지
- `.env` 실제 값 출력 금지 (자리표시자만 사용: `YOUR_SUPABASE_URL`, `YOUR_API_KEY` 등)

### 토큰/키 사용 방법
```powershell
# 올바른 방법: 파일에서 읽기
$env:SUPABASE_ACCESS_TOKEN = Get-Content .supabase_token

# 잘못된 방법 (절대 금지)
$env:SUPABASE_ACCESS_TOKEN = "sbp_실제토큰값..."
````

### 민감 파일 관리

- `.supabase_token`, `.env`, `.env.local`, `scratch/` 폴더는 `.gitignore`에 반드시 포함
- 커밋 전 `git log --stat HEAD -1`로 민감 파일 포함 여부 확인

---

## 4. 기술 스택 (고정)

- React + Vite + TypeScript
- Tailwind CSS
- Supabase
- Node.js
- Vercel
- Gemini API: `gemma-4-31b-it`, `gemma-4-26b-a4b-it` (이 2개 모델만 사용)

---

## 5. 프로젝트 구조

- `src/components/` — React 컴포넌트
- `src/pages/` — 페이지 라우트
- `src/hooks/` — 커스텀 훅
- `src/lib/` — 유틸리티, Supabase 클라이언트, API 헬퍼
- `src/types/` — TypeScript 타입 정의
- `src/styles/` — 글로벌 스타일
- `public/` — 정적 파일
- `supabase/` — Supabase 마이그레이션, Edge Functions

---

## 6. 코딩 컨벤션

- 컴포넌트는 함수형 + arrow function
- 상태 관리는 React 기본 훅(useState, useReducer) 우선
- API 호출은 `src/lib/supabase.ts`의 클라이언트를 통해서만 수행
- `cn()` 유틸리티로 Tailwind 조건부 클래스 결합 (clsx/tailwind-merge)
- 파일명: 컴포넌트는 PascalCase, 유틸리티는 camelCase
- import 순서: React → 외부 라이브러리 → 내부 모듈 → 타입 → 스타일
- `any` 타입 금지, 필요시 `unknown` 사용

### 코드 참조

- 좋은 패턴 (참고): `src/lib/supabase.ts`, `src/hooks/useAuth.ts`, `src/components/Layout.tsx`
- 나쁜 패턴 (참고 금지): `src/legacy/` 폴더 전체, 하드코딩된 URL/키가 있는 파일

---

## 7. Google GenAI SDK 규칙

### 패키지

- 사용: `npm:@google/genai` 또는 `https://esm.sh/@google/genai@1.51.0`
- **사용 금지**: `@google/generative-ai` (구버전 SDK)

### 초기화 및 호출 패턴 (이것만 사용)

```typescript
import { GoogleGenAI } from "npm:@google/genai";

const ai = new GoogleGenAI({ apiKey: Deno.env.get("GEMMA_API_KEY")! });

const response = await ai.models.generateContent({
  model: "gemma-4-31b-it",
  contents: prompt,  // 문자열 직접 전달
  config: {
    systemInstruction: "당신은 비즈니스 분석 전문가입니다. 반드시 JSON 형식으로만 응답하세요. 한국어로 작성하세요. JSON 외 다른 텍스트를 절대 포함하지 마세요."
  }
});

const text = response.text;  // 프로퍼티 (함수 아님)
```

### 금지 패턴

```typescript
ai.getGenerativeModel(...)           // 구버전 메서드
response.text()                       // text는 프로퍼티, 함수 아님
response.response.text()              // 구버전 접근 방식
contents: [{ role: "user", parts: [{ text: prompt }] }]  // 불필요한 래핑
```

### 모델 정책

- 분석 (백엔드/백그라운드, 정확도 우선): `gemma-4-31b-it` 고정
- 제안 (프론트엔드/인터랙티브, 속도 우선): `gemma-4-26b-a4b-it` 고정
- 임의로 모델 변경하거나 폴백 모델 추가 금지
- 상황에 따른 모델 변경 로직 추가 금지

### 재시도 로직

```typescript
const RETRY_DELAYS = [0, 3000, 5000]; // 최대 3회
```

- timeout, 5xx, rate limit, 응답 없음, 품질 미달 시 최대 3회 재시도
- 매 시도마다 시도 번호와 에러 내용을 `console.error`로 로그
- 3회 모두 실패 시 에러 throw

---

## 8. JSON 파싱 규칙

모든 Edge Function에 아래 `extractJSON` 함수 포함. 단순화하거나 `console.error` 로그를 생략하지 마세요.

```typescript
function extractJSON(text: string) {
  // 1단계: 코드 펜스 제거 후 직접 파싱
  try {
    const cleanText = text.replace(/```json\n?|```\n?/g, "").trim();
    return JSON.parse(cleanText);
  } catch {
    // 2단계: 첫 번째 {...} 블록 추출
    const objMatch = text.match(/\{[\s\S]*\}/);
    if (objMatch) {
      try { return JSON.parse(objMatch[0]); } catch {}
    }
    // 3단계: 첫 번째 [...] 블록 추출
    const arrMatch = text.match(/\[[\s\S]*\]/);
    if (arrMatch) {
      try { return JSON.parse(arrMatch[0]); } catch {}
    }
    console.error("[함수명] JSON 추출 실패. 원문(300자):", text.substring(0, 300));
    throw new Error("JSON 파싱 오류");
  }
}
```

---

## 9. Supabase 규칙

- RLS 활성화된 테이블은 정책 확인 후 작업
- 테이블 스키마 변경은 마이그레이션 파일로 관리
- Supabase 클라이언트는 `src/lib/supabase.ts`에서만 생성 (다른 파일에서 직접 생성 금지)
- Edge Function 작성 시 Deno 런타임 규칙 준수
- 실시간(Realtime) 구독은 컴포넌트 언마운트 시 반드시 해제

---

## 10. 파일 / 터미널 작업 규칙

파일 읽기, 수정, 생성, 삭제, 다중 파일 수정, 코드 교체, 정리 작업 모두 **자동 실행** — 확인 질문 없음.

터미널/PowerShell 명령 실행 여부도 묻지 않음. 설치, 실행 정책 수정, 빌드, 실행, 배포 명령 전부 바로 실행.

---

## 11. .env 파일 규칙

- `.env` 생성/수정 시 반드시 **Node.js 명령어**로 처리
- 에이전트 파일 생성 도구(file write)로 `.env` 만들지 않음
- PowerShell의 `Out-File`, `Set-Content`, `>` 리다이렉트 금지 (UTF-16LE로 저장되어 Vite가 읽지 못함)
- 반드시 Node.js로 생성:
    
    ```bash
    node -e "require('fs').writeFileSync('.env.local', 'KEY=VALUE\n', 'utf8')"
    ```
    

---

## 12. Windows / 한글 인코딩 규칙

### Windows 기본

- 기본 터미널은 PowerShell
- 가능하면 영어 경로 사용
- 실행 정책 오류 시 자동 해결 시도
- localhost 접속 안 되면 `127.0.0.1`도 자동 시도
- 필요시 `vite.config.ts`도 자동 수정

### 한글 깨짐 방지 (Encoding Fix)

1. 터미널 코드페이지 전환: 모든 명령 실행 전 `chcp 65001`
2. Python 입출력 강제: `PYTHONIOENCODING=utf-8`
3. PowerShell 세션 시작 시 UTF-8 고정:
    
    ```powershell
    $OutputEncoding = [System.Text.Encoding]::UTF8
    [Console]::OutputEncoding = [System.Text.Encoding]::UTF8
    [Console]::InputEncoding = [System.Text.Encoding]::UTF8
    ```
    
4. `.env`, `.env.local`, `.env.production` 등 설정 파일은 Node.js `writeFileSync`로 UTF-8 생성
5. 생성/수정되는 모든 파일은 UTF-8로 저장
6. 한글 출력 깨지면 정상 출력될 때까지 인코딩 문제를 우선 해결 후 재시도

---

## 13. 에러 처리 및 로깅

### 처리 흐름

1. 원인을 짧게 파악
2. 자동으로 해결 시도
3. 다시 실행
4. 필요하면 다른 현실적인 대안도 자동 시도

사용자에게 판단을 넘기지 않음.

예시:

- 권한 오류 → 실행 정책 조정 후 재시도
- 경로 오류 → 영어 경로로 이동 후 재시도
- 패키지 오류 → 재설치 후 재시도
- 포트 충돌 → 다른 포트로 재실행

### 로깅

- 에러 자동 수정 후 무엇이 문제였고 어떻게 고쳤는지 한 줄로 기록
- 같은 에러가 3번 이상 반복되면 [GEMINI.md](http://gemini.md/) 또는 프로젝트 문서에 해결 패턴 추가 제안
- 빌드/배포 실패 시 에러 로그의 핵심 부분 요약 보고

---

## 14. Vercel 배포 규칙

- 수정 작업 완료 후 자동으로 Vercel에 배포
- 배포 실패 시 에러 로그 확인 후 자동 수정 → 재배포
- 배포 후 프리뷰 URL 있으면 알려줌
- 환경변수 필요 시 Vercel 대시보드에서 설정하도록 안내
- 빌드 시 TypeScript 오류는 배포 전에 먼저 해결

---

## 15. Git 규칙

### 커밋 메시지 형식

```
[카테고리] 작업 내용 요약
```

카테고리:

- `[기능]` 새 기능 추가
- `[수정]` 버그 수정
- `[설정]` 설정/환경 변경
- `[보안]` 보안 관련 변경
- `[리팩터]` 코드 구조 개선
- `[인증]` 등 영역명도 가능

### 예시

```
[기능] Tier 1 Edge Functions 추가 (analyze-persona, analyze-moscow, analyze-domain)
[수정] StepAnalysis 폴링 조건 수정 — key_features 존재 확인 추가
[보안] .gitignore에 .supabase_token 추가
```

### 규칙

- 커밋 메시지는 한국어로 작성
- 커밋은 기능 단위로 분리 (여러 기능 혼합 금지)
- 모든 커밋에 동일 메시지 사용 금지, 초기화 메시지 재사용 금지
- `main` 브랜치 직접 push 가능 (1인 개발 기준)
- `.env`, `node_modules`, `dist` 폴더는 절대 커밋하지 않음

---

## 16. 테스트 규칙

- 테스트 프레임워크: **Vitest**
- 테스트 파일 위치: 해당 파일과 같은 폴더에 `*.test.ts` 또는 `__tests__/` 폴더
- 새로운 API 연동 함수 작성 시 기본 동작 테스트 포함
- 사용자가 별도로 요청하지 않으면 테스트는 작성하지 않아도 됨
- 사용자가 "테스트 추가해줘"라고 하면 자동 작성 및 실행

---

## 17. 패키지 관리 규칙

- 패키지 매니저: 프로젝트에 설정된 것(npm 또는 pnpm) 사용
- 이미 설치된 패키지로 해결 가능하면 새로 설치하지 않음
- 유사 기능 패키지 중복 설치 금지
- 설치 시 정확한 버전 호환성 확인

---

## 18. 이미지 / 에셋 규칙

- **에이전트는 직접 이미지 생성 금지**
- 아이콘은 `lucide-react` 또는 `heroicons` 사용
- 이미지 필요 시 placeholder URL 사용 후 사용자에게 실제 이미지 교체 안내
- SVG 아이콘은 컴포넌트로 작성

---

## 19. 성능 및 접근성

- `img` 태그에는 반드시 `alt` 속성 포함
- 큰 리스트는 가상 스크롤 또는 페이지네이션 적용 고려
- 불필요한 리렌더링 방지: `React.memo`, `useMemo`, `useCallback` 적절히 사용
- Lighthouse 성능 점수 80점 이상 유지를 목표

---

## 20. 언어 규칙

- 모든 UI 텍스트, 버튼, 레이블, 안내 문구, placeholder는 **한국어**
- 코드 내 변수명, 함수명, 주석은 **영문**
- 에러 메시지, Toast 알림, 빈 상태 문구 모두 한국어
- HTML `lang` 속성: `"ko"`
- 날짜 포맷: `YYYY년 MM월 DD일` (date-fns의 `ko` 로케일 사용)

---

## 21. 코드 수정 시 주의사항

자동 실행 원칙은 유지하되, 아래는 신중하게 처리:

- 이미 완료된 작업을 다시 실행하지 않음 (DB 컬럼 중복 추가 등)
- 기존에 동작하는 코드를 임의로 수정하지 않음
- 한 번에 여러 모듈을 동시에 대규모로 작성하기보다 모듈 단위로 진행
- 다른 프로젝트 폴더 접근 금지, 현재 프로젝트 폴더 하위만 접근

---

## 22. 금지사항 요약

- 사소한 작업에도 승인 요청
- 매 단계마다 멈추기
- 터미널 실행/파일 수정/배포 여부 묻기
- 사용자가 이미 요청한 작업을 다시 확인하기
- 긴 계획만 설명하고 실행하지 않기
- 이미지를 직접 생성하기
- 현재 프로젝트 폴더 외부 접근

---

## 최종 운영 원칙

컴퓨터 전체 포맷이나 드라이브/폴더 데이터 삭제 작업만 한 번 묻고,  
그 외 모든 작업은 묻지 말고 자동 실행하며,  
에러가 나면 자동으로 고치면서 끝까지 진행한다.

```

주요 정리 내역을 간단히 요약하면 이렇습니다.

중복 통합한 항목: 보안/비밀값 규칙(2곳 → 1곳), 파일 작업 규칙과 터미널 규칙(통합), Gemini 모델 정책(3곳에 흩어진 내용 → SDK 섹션으로 통합), 재시도 로직(중복 제거), 에러 처리와 에러 로깅(통합), Windows 규칙과 한글 인코딩 규칙(통합)으로 정리했습니다.

충돌 해결: 원본 후반부의 "사용자 승인 후 코드 수정" 문구는 전체 문서의 "자동 실행 모드" 대원칙과 충돌해서, 21번 섹션으로 옮기고 "신중하게 처리" 수준으로 톤을 조정했습니다. 만약 일부 코드 수정만큼은 꼭 승인을 받고 싶다면 알려주세요. 그 부분만 별도로 명확하게 다시 반영해드리겠습니다.
```