/**
 * 휴미즈 랜딩 페이지 콘텐츠 (로컬 데모 데이터)
 * 문구/숫자/링크 등은 이 파일에서 일괄 수정 가능
 */

// ——— Hero ———
export const heroData = {
  headline: "데이터를 이해하는 기술,\n사람을 위한 인텔리전스",
  subline:
    "휴미즈는 기업 컨설팅과 AI 기반 가족 서비스 'AI 친구'를 통해\n불편함을 기술로 해결하고, 일상을 더 따뜻하고 편리하게 만듭니다.",
  ctaConsulting: { label: "컨설팅 문의", href: "/#contact", anchor: "contact" },
  ctaBuddy: { label: "AI 친구 체험", href: "/#mybuddy", anchor: "mybuddy" },
};

// ——— 사업 2개 (탭/카드) ———
export const businessTabsData = {
  tabs: [
    { id: "consulting", label: "기업 컨설팅", short: "컨설팅" },
    { id: "mybuddy", label: "AI 친구", short: "AI 친구" },
  ],
  consulting: {
    title: "기업 컨설팅 서비스",
    description:
      "데이터·프로세스·규제 이해를 바탕으로 기업의 디지털 전환과 운영 효율화를 돕습니다.\nDiscover → Design → Deliver 단계로 맞춤 솔루션을 설계·구현합니다.",
    features: ["데이터 컴플라이언스", "프로세스 진단", "솔루션 설계", "구현 지원"],
    ctaText: "자세히 보기",
    ctaHref: "/#consulting",
  },
  mybuddy: {
    title: "AI 친구",
    description:
      "가족과 아이를 위한 AI 기반 디지털 친구. 대화와 활동 추천으로 따뜻한 동반자를 제공합니다. 부모·아이 모두를 위한 안전하고 유익한 경험을 설계합니다.",
    features: ["대화형 AI", "활동 추천", "가족 단위 사용", "안전·윤리 설계"],
    ctaText: "AI 친구 체험",
    ctaHref: "/#mybuddy",
  },
};

// ——— 신뢰 (CountUp + 가치) ———
// stats: 실제 수치 확정 시 여기에 추가하면 "숫자로 보는 휴미즈" CountUp 카드가 표시됩니다.
export const trustData = {
  stats: [] as { value: number; suffix: string; label: string }[],
  values: [
    {
      title: "신뢰",
      description: "데이터와 프로세스에 대한 투명한 이해를 바탕으로 한 믿을 수 있는 협력",
    },
    {
      title: "따뜻함",
      description: "사람과 가족을 먼저 생각하는 서비스와 소통",
    },
    {
      title: "미래지향",
      description: "기술과 트렌드를 선도하는 솔루션 설계",
    },
    {
      title: "고급스러움",
      description: "품질과 완성도 있는 결과물 추구",
    },
  ],
};

// ——— 컨설팅 타임라인 ———
export const consultingTimelineData = {
  title: "컨설팅 프로세스",
  subtitle: "Discover · Design · Deliver",
  steps: [
    {
      id: "discover",
      title: "Discover",
      kor: "발견",
      description: "현재 데이터·프로세스·규제 요구사항을 파악하고, 개선 포인트와 기회를 정의합니다.",
      icon: "🔍",
    },
    {
      id: "design",
      title: "Design",
      kor: "설계",
      description: "목표에 맞춘 아키텍처와 운영 방안을 설계하고, 단계별 실행 계획을 수립합니다.",
      icon: "✏️",
    },
    {
      id: "deliver",
      title: "Deliver",
      kor: "구현",
      description: "설계된 솔루션을 단계적으로 구축·이관하고, 지속 운영을 위한 교육과 문서를 제공합니다.",
      icon: "🚀",
    },
  ],
};

// ——— AI 친구 채팅 예시 (타이핑 연출용) ———
export const buddyChatData = {
  title: "AI 친구와의 대화 예시",
  messages: [
    { role: "user", text: "오늘 날씨 어때?" },
    { role: "assistant", text: "안녕! 오늘은 맑고 따뜻할 거예요. 밖에 나가서 산책하기 좋은 날이에요. 😊" },
    { role: "user", text: "그럼 뭐 하고 놀까?" },
    {
      role: "assistant",
      text: "그림 그리기, 숨바꼭질, 아니면 간단한 퀴즈도 있어요! 어떤 게 좋아?",
    },
  ],
};

// ——— 사용 시나리오 (부모/아이 카드) ———
export const scenarioData = {
  title: "어떻게 사용하나요?",
  cards: [
    {
      id: "parent",
      title: "부모님",
      description: "AI 친구와의 대화 기록을 확인하고, 아이의 관심사와 활동을 파악할 수 있어요. 안전한 사용 시간과 주제도 설정할 수 있습니다.",
      icon: "👨‍👩‍👧",
    },
    {
      id: "child",
      title: "아이",
      description: "AI 친구와 대화하고 놀이·퀴즈·책 추천을 받아요. 친구처럼 이야기하면서 재미있게 시간을 보낼 수 있어요.",
      icon: "🧒",
    },
  ],
};

// ——— FAQ ———
export const faqData = {
  title: "자주 묻는 질문",
  items: [
    {
      id: "consulting-range",
      question: "컨설팅은 어떤 범위까지 가능한가요?",
      answer:
        "데이터 정책·컴플라이언스, 프로세스 진단, 시스템 설계·도입 지원까지 맞춤 범위로 진행합니다. 첫 상담에서 요구사항을 나누고 범위와 일정을 제안드립니다.",
    },
    {
      id: "buddy-age",
      question: "AI 친구는 몇 살부터 사용할 수 있나요?",
      answer:
        "가족 단위 서비스로, 연령에 맞는 대화와 활동을 제공합니다. 자세한 권장 연령과 기능은 서비스 오픈 시 안내드리겠습니다.",
    },
    {
      id: "contact-method",
      question: "문의는 어떻게 하면 되나요?",
      answer:
        "본 페이지 하단 문의 폼을 통해 이름, 이메일, 문의 내용을 남겨 주시면 이메일로 연락드립니다. 급한 문의는 안내된 메일 주소로 직접 보내주셔도 됩니다.",
    },
    {
      id: "pricing",
      question: "가격 및 견적은 어떻게 받을 수 있나요?",
      answer:
        "컨설팅은 프로젝트 규모와 범위에 따라 견적을 산정합니다. 문의 폼에 예산·기간·요구사항을 간단히 적어 주시면 맞춤 제안을 보내드립니다.",
    },
  ],
};

// ——— 문의 폼 (mailto용) ———
export const contactData = {
  title: "문의하기",
  subtitle: "컨설팅·AI 친구 관련 문의를 남겨 주세요. 빠르게 연락드리겠습니다.",
  mailto: "contact@humease.com",
  fields: {
    name: { label: "이름", name: "name", type: "text", required: true },
    email: { label: "이메일", name: "email", type: "email", required: true },
    message: { label: "문의 내용", name: "message", type: "textarea", required: true },
  },
  submitLabel: "문의 보내기",
  successMessage: "문의해 주셔서 감사합니다. 입력하신 이메일로 안내 메일을 보내드립니다.",
};

// ——— 푸터 ———
export const footerData = {
  companyName: "주식회사 휴미즈",
  oneLiner: "IT 기술로 사람의 일상을 더 편리하고 따뜻하게,\n기업과 가정이 함께 성장하는 환경을 만듭니다.",
  links: [
    { label: "이메일 · 문의", href: "/contact" },
    { label: "개인정보 처리방침", href: "/privacy" },
    { label: "회사 소개", href: "/about" },
  ],
  copyright: "© Humease. All rights reserved.",
};
