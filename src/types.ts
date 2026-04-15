export interface Scenario {
  persona: {
    title: string;
    situation: string;
  };
  image?: string;
  story: string;
  keyProblems: string[];
  humeaseSolution: string;
  tabLabel?: string;
  solutionImage?: string;
  solutions?: { title: string; desc: string }[];
}

export interface JTBD {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  tag: string;
  asisImage: string;
  tobeImage: string;
  asisImages: string[];
  tobeImages: string[];
  solutionImage?: string;
  situations: string[];
  problems: string[];
  solutions: { title: string; desc: string }[];
  effects: string[];
  steps: string[];
  scenarios: Scenario[];
}

export const JTBDS: JTBD[] = [
  {
    id: 'e-discovery',
    title: 'e-Discovery',
    shortDesc: '법적 대응을 빠르게 끝내고 싶을 때',
    fullDesc: '규제 기관·법적 분쟁 상황에서 Microsoft 365의 이메일, Teams, SharePoint, OneDrive 데이터를 통합 검색하여 즉시 제출할 수 있는 e-Discovery 체계를 설계하고 구축합니다.',
    tag: '법적 대응 시간 단축',
    asisImage: '/JTBD/AS-IS/Photorealistic_image_aspect_ratio_169_Korean_ca-1776160324696.jpg',
    tobeImage: '/JTBD/TO-BE/Photorealistic_image_169_aspect_ratio_Korean_ca-1776160777710.jpg',
    asisImages: [
      '/JTBD/AS-IS/Photorealistic_image_aspect_ratio_169_Korean_ca-1776160324696.jpg',
      '/JTBD/AS-IS/Photorealistic_image_aspect_ratio_169_Korean_ca-1776160327511.jpg',
      '/JTBD/AS-IS/Photorealistic_image_aspect_ratio_169_Korean_ca-1776160331326.jpg'
    ],
    tobeImages: [
      '/JTBD/TO-BE/Photorealistic_image_169_aspect_ratio_Korean_ca-1776160777710.jpg',
      '/JTBD/TO-BE/Photorealistic_image_169_aspect_ratio_Korean_ca-1776160780076.jpg',
      '/JTBD/TO-BE/Photorealistic_image_169_aspect_ratio_Korean_ca-1776160782294.jpg'
    ],
    situations: [
      '공정거래위원회 조사, 금융감독원 검사, 법적 소송 등에서 특정 기간의 데이터를 제출하라는 요구를 받았지만 대응이 어려울 때',
      'Microsoft 365 내 방대한 데이터에서 특정 조건에 맞는 항목을 정확하게 뽑아내기 힘들 때',
      '보존 정책 부재로 임의 삭제된 데이터 복구가 불가능하여 법적 리스크가 발생할 때'
    ],
    problems: [
      '수동 검색으로 인한 시간 낭비 및 제출 기한 준수 불가',
      '누락된 증거로 인한 거액의 과징금 또는 패소 리스크',
      'IT 부서의 과도한 데이터 추출 업무 부하'
    ],
    solutionImage: '/JTBD/TO-BE/Photorealistic_image_169_aspect_ratio_Korean_mi-1776160774361.jpg',
    solutions: [
      { title: '통합 검색·보존 프로세스 설계', desc: 'Microsoft 365 전체 환경을 아우르는 데이터 수집 및 즉각적인 보존 체계를 설계합니다.' },
      { title: '데이터 거버넌스 정책 수립', desc: '전사적 데이터 보존 정책을 수립하여 법적 분쟁 시 데이터 가시성을 확보합니다.' },
      { title: '규제 대응 프로세스 최적화', desc: '조사 기관별 표준 매뉴얼을 구축하여 대응 리소스와 시간을 획기적으로 단축합니다.' }
    ],
    effects: [
      '법적/규제 요구사항에 대한 대응 시간 90% 이상 단축',
      '증거 데이터 누락 방지를 통한 법적 리스크 최소화',
      '데이터 관리 정책 준수를 통한 기업 신뢰도 향상'
    ],
    steps: [
      "진단 — 현재 Microsoft 365 환경 현황, 데이터 보존 수준, 규제 대응 리스크를 분석합니다.",
      "설계 — e-Discovery 프로세스, 보존 정책, 검색 체계, 제출 절차를 설계합니다.",
      "실행 — 시스템을 구축하고, 정책을 적용하고, 운영 안정화 및 교육을 진행합니다."
    ],
    scenarios: [
      {
        persona: {
          title: "한재민 이사 (A 그룹사)",
          situation: "공정위 자료 제출 실패 직전의 위기 상황"
        },
        image: "/JTBD/AS-IS/Photorealistic_image_aspect_ratio_169_Korean_mi-1776160319516.jpg",
        story: "25,000명의 수년치 데이터가 축적된 상태에서 갑작스러운 조사를 받게 되었습니다. IT팀이 수동으로 검색을 시도했지만 삭제된 데이터 복구가 불가능했고 결과도 부정확했습니다. 경영진 앞에서 실패 보고를 해야 했던 밤 9시의 침묵은 잊을 수 없습니다.",
        keyProblems: [
          "규제 기관 제출 기한 초과 리스크",
          "M365 전체 데이터 통합 검색 체계 부재",
          "전사 보존 정책 미수립으로 삭제 데이터 복구 불가"
        ],
        humeaseSolution: "어떤 규제 기관의 요구에도 48시간 이내 대응 가능한 체계를 설계합니다. 이제 한 이사님은 오후 4시에 여유롭게 퇴근하며 성공적으로 보고를 마칩니다."
      }
    ]
  },
  {
    id: 'internal-control',
    title: 'Internal Control',
    shortDesc: '개인·민감정보를 통제하고 싶을 때',
    fullDesc: 'Microsoft 365 클라우드 환경 내 개인정보·민감정보를 상시 탐지하고, 사용자 알림·삭제 권고·이행 추적까지 연결되는 보안조치 체계를 구축합니다.',
    tag: '개인·민감정보 통제',
    asisImage: '/JTBD/AS-IS/Photorealistic_image_aspect_ratio_169_Korean_la-1776160335542.jpg',
    tobeImage: '/JTBD/TO-BE/Photorealistic_image_169_aspect_ratio_Korean_la-1776160785557.jpg',
    asisImages: [
      '/JTBD/AS-IS/Photorealistic_image_aspect_ratio_169_Korean_la-1776160335542.jpg',
      '/JTBD/AS-IS/Photorealistic_image_aspect_ratio_169_Korean_la-1776160340767.jpg',
      '/JTBD/AS-IS/Photorealistic_image_aspect_ratio_169_Korean_la-1776160344883.jpg'
    ],
    tobeImages: [
      '/JTBD/TO-BE/Photorealistic_image_169_aspect_ratio_Korean_la-1776160785557.jpg',
      '/JTBD/TO-BE/Photorealistic_image_169_aspect_ratio_Korean_la-1776160787379.jpg',
      '/JTBD/TO-BE/Photorealistic_image_169_aspect_ratio_Korean_la-1776160790071.jpg'
    ],
    situations: [
      'M365(Email, Teams, SharePoint, OneDrive) 내 민감정보 저장 현황 파악이 안 될 때',
      '수천 명 임직원의 데이터를 수작업으로 점검하는 데 한계를 느낄 때',
      '개인정보 탐지 시 자동 알림 및 삭제 권고 등 이행 추적 프로세스가 필요할 때'
    ],
    problems: [
      '개인정보보호법 위반으로 인한 법적 처벌 및 과징금 리스크',
      '샘플링 방식 점검의 한계로 감독 기관 검사 대응 불가',
      '데이터 유출 사고 발생 시 원인 규명 및 책임 추적의 어려움'
    ],
    solutionImage: '/JTBD/TO-BE/Photorealistic_image_169_aspect_ratio_Korean_ca-1776160782294.jpg',
    solutions: [
      { title: '상시 모니터링 체계 설계', desc: 'Microsoft 365 전 영역 대상 개인정보·민감정보 상시 탐지 및 모니터링 체계를 설계합니다.' },
      { title: '보안조치 자동화 구축', desc: '탐지 시 사용자 알림, 삭제 권고 및 이행 추적까지 이어지는 자동화 프로세스를 구축합니다.' },
      { title: '증적 대시보드 및 리포팅', desc: '감독 기관 검사 시 즉시 제출 가능한 상시 증적 대시보드와 리포팅 체계를 마련합니다.' }
    ],
    effects: [
      '개인정보 보호 규제(GDPR, 개인정보보호법 등) 완벽 준수',
      '상시 모니터링을 통한 유출 사고 사전 예방율 극대화',
      '검사 대응 전담 인력 리소스 절감 및 효율성 증대'
    ],
    steps: [
      "진단 — 현재 Microsoft 365 환경 내 개인정보 저장 현황, 기존 점검 방식의 한계, 규제 요건을 분석합니다.",
      "설계 — 모니터링 정책, 탐지 기준, 조치 프로세스, 대시보드, 증적 체계를 설계합니다.",
      "실행 — 모니터링 시스템을 구축하고, 프로세스를 적용하고, 운영 교육을 진행합니다."
    ],
    scenarios: [
      {
        persona: {
          title: "이수현 팀장 (B 카드사 CISO)",
          situation: "금감원 검사 통보로 인한 부서 간 압박 상황"
        },
        image: "/JTBD/AS-IS/Photorealistic_image_aspect_ratio_169_Korean_ca-1776160331326.jpg",
        story: "금융권 규제상 클라우드 내 개인정보 저장은 엄격히 제한되지만, 2,500명의 데이터를 수작업으로 점검하는 것은 불가능했습니다. 기존 샘플링 방식은 미탐지 리스크가 컸고, 금감원의 구체적인 증적 요구에 대응하기 어려운 상황에서 팀원들은 매일 불안에 떨어야 했습니다.",
        keyProblems: [
          "금융감독원 검사 시 제출할 모니터링 증적 부재",
          "수작업 샘플링 점검의 한계",
          "개인정보 탐지 후 조치·추적 프로세스 미체계화"
        ],
        humeaseSolution: "개인·민감정보에 대한 상시 모니터링 체계를 구축하여, 이 팀장님은 이제 금감원 검사를 자신 있게 통과하고 부서 간 협업의 모범 사례가 되었습니다."
      }
    ]
  },
  {
    id: 'exchange-archive',
    title: 'Exchange Archive',
    shortDesc: 'Exchange 운영을 효율화하고 싶을 때',
    fullDesc: 'Enterprise Vault 기반 Exchange 사서함 아카이빙으로 사서함 용량을 대폭 절감하면서도, 사용자가 Outlook에서 과거 메일을 그대로 검색하고 열람할 수 있는 구조를 설계합니다.',
    tag: '운영 효율화',
    asisImage: '/JTBD/AS-IS/Photorealistic_image_aspect_ratio_169_Korean_me-1776160349267.jpg',
    tobeImage: '/JTBD/TO-BE/Photorealistic_image_169_aspect_ratio_Korean_me-1776160794141.jpg',
    asisImages: [
      '/JTBD/AS-IS/Photorealistic_image_aspect_ratio_169_Korean_me-1776160349267.jpg',
      '/JTBD/AS-IS/Photorealistic_image_aspect_ratio_169_Korean_me-1776160352615.jpg',
      '/JTBD/AS-IS/Photorealistic_image_aspect_ratio_169_Korean_me-1776160355407.jpg'
    ],
    tobeImages: [
      '/JTBD/TO-BE/Photorealistic_image_169_aspect_ratio_Korean_me-1776160794141.jpg',
      '/JTBD/TO-BE/Photorealistic_image_169_aspect_ratio_Korean_me-1776160796362.jpg',
      '/JTBD/TO-BE/Photorealistic_image_169_aspect_ratio_Korean_me-1776160798625.jpg'
    ],
    situations: [
      '사용자 증가로 Exchange Server 사서함 용량 관리에 한계가 왔을 때',
      '사서함 용량 제한에 따른 사용자 불만이 증가하고 업무 효율이 저하될 때',
      'Google Workspace에서 온프레미스 Exchange로 대규모 메일 이관이 필요할 때'
    ],
    problems: [
      '스토리지 확대에 따른 인프라 비용 기하급수적 증가',
      '방대한 사서함 용량으로 인한 서버 백업/복구 시간 지연',
      '과거 이메일 검색 및 열람 속도 저하로 인한 업무 비효율'
    ],
    solutionImage: '/JTBD/TO-BE/Photorealistic_image_169_aspect_ratio_Korean_la-1776160785557.jpg',
    solutions: [
      { title: '아카이빙 구조 최적화 설계', desc: 'Enterprise Vault 기반 Shortcut 구조를 설계하여 사서함 실사용 용량을 80% 이상 절감합니다.' },
      { title: '조직 맞춤형 보존 정책 수립', desc: '기업별 요구사항에 맞는 메일 보존 및 삭제 정책을 수립하여 법적 준거성을 강화합니다.' },
      { title: '데이터 무결성 기반 이관', desc: '대규모 메일 데이터의 손실 없는 무결성 이관 전략을 수립하고 안정적으로 수행합니다.' }
    ],
    effects: [
      'Exchange Server 사서함 실사용 용량 80% 이상 절감',
      '사용자 환경 변화 없이 무제한급 사서함 사용 경험 제공',
      '백업 안정성 강화 및 서버 리소스 운영 효율 극대화'
    ],
    steps: [
      "진단 — 현재 Exchange 환경, 사용자 수, 메일 데이터량, 스토리지 현황을 분석합니다.",
      "설계 — Enterprise Vault 아카이빙 구조, 정책, 운영 프로세스를 설계합니다.",
      "실행 — 아카이빙 시스템을 구축하고, 데이터를 이관하며, 운영 안정화 및 교육을 진행합니다."
    ],
    scenarios: [
      {
        persona: {
          title: "김정훈 상무 (대기업 CIO)",
          situation: "사서함 용량 포화로 인한 프로젝트 지연 보고를 해야하는 상황"
        },
        image: "/JTBD/AS-IS/Photorealistic_image_aspect_ratio_169_Korean_la-1776160344883.jpg",
        story: "12,000명의 사서함 용량이 발목을 잡았습니다. 인프라 비용은 기하급수적으로 늘어났고, 용량을 제한하면 사용자 불만이 폭주할 상황이었습니다. 백업 속도 지연과 데이터 이관의 복잡성 때문에 경영진 앞에서 고개를 들 수 없었습니다.",
        keyProblems: [
          "12,000명 사서함의 스토리지 용량 한계",
          "사서함 용량 제한 시 사용자 업무 효율 저하",
          "대규모 데이터 이관의 무결성 확보 어려움"
        ],
        humeaseSolution: "휴미즈는 Arctera를 통해 사서함 용량을 80% 절감하면서 비용을 최적화합니다. 김 상무님은 이제 예정보다 1개월 일찍 이관을 완료하고 가족과 함께 여유로운 시간을 보냅니다."
      }
    ]
  },
  {
    id: 'ai-consulting',
    title: 'AI Consulting',
    shortDesc: '아이디어를 현실로 만들고 싶을 때',
    fullDesc: '홈페이지 제작, 웹서비스 개발, AI 챗봇 접목, MVP 구현부터 AI 기반 사내 지식관리 시스템 구축까지 고객의 아이디어를 실제 서비스로 만들어 드립니다.',
    tag: '아이디어 현실화',
    asisImage: '/JTBD/AS-IS/Photorealistic_image_aspect_ratio_169_Korean_mi-1776160312508.jpg',
    tobeImage: '/JTBD/TO-BE/Photorealistic_image_169_aspect_ratio_Korean_mi-1776160771911.jpg',
    asisImages: [
      '/JTBD/AS-IS/Photorealistic_image_aspect_ratio_169_Korean_mi-1776160312508.jpg',
      '/JTBD/AS-IS/Photorealistic_image_aspect_ratio_169_Korean_mi-1776160315795.jpg',
      '/JTBD/AS-IS/Photorealistic_image_aspect_ratio_169_Korean_mi-1776160319516.jpg'
    ],
    tobeImages: [
      '/JTBD/TO-BE/Photorealistic_image_169_aspect_ratio_Korean_mi-1776160771911.jpg',
      '/JTBD/TO-BE/Photorealistic_image_169_aspect_ratio_Korean_mi-1776160774361.jpg',
      '/JTBD/TO-BE/Photorealistic_image_169_aspect_ratio_Modern_Ko-1776160769558.jpg'
    ],
    situations: [
      '사업 아이디어는 있으나 기획/디자인/개발 등 기술적 구현 역량이 부족할 때',
      '투자 유치 또는 시장 검증을 위한 MVP(최소 기능 제품)가 시급히 필요할 때',
      '사내에 쌓인 데이터를 AI로 쉽게 검색하고 활용하고 싶을 때'
    ],
    problems: [
      '아이디어가 구상 단계에 머물러 실행되지 못하는 비즈니스 기회 손실',
      '기술 파트너 부재로 인한 개발 속도 저하 및 비용 낭비',
      '보유한 데이터의 가치를 제대로 활용하지 못하는 운영 비효율'
    ],
    solutionImage: '/JTBD/TO-BE/Photorealistic_image_169_aspect_ratio_Modern_Ko-1776160769558.jpg',
    solutions: [
      { title: '맞춤형 웹·애플리케이션 개발', desc: '비즈니스 목표에 최적화된 홈페이지, 랜딩페이지 및 웹 서비스를 기획하고 개발합니다.' },
      { title: 'AI 챗봇 및 에이전트 구축', desc: '최신 LLM 기반의 AI 챗봇과 업무 보조 에이전트를 설계하여 사용자 경험을 혁신합니다.' },
      { title: 'AI 기반 비즈니스 자동화', desc: '사내 지식 관리 시스템 구축 및 반복적인 업무 프로세스를 AI로 자동화합니다.' }
    ],
    effects: [
      '아이디어의 신속한 시장 진입 및 비즈니스 검증 완료',
      'AI 기술 도입을 통한 업무 생산성 및 고객 경험 혁신',
      '데이터 기반 자동화 환경 구축으로 운영 리소스 대폭 절감'
    ],
    steps: [
      "아이디어 정리 및 범위 정의 — 고객의 아이디어와 목표를 정리하고, 실현 가능성을 검토합니다.",
      "설계 및 개발 — UI/UX를 설계하며, 기술 스택을 선정하고 개발을 진행합니다.",
      "런칭 및 개선 — 서비스를 런칭하고 피드백을 반영하여 지속적으로 개선합니다."
    ],
    scenarios: [
      {
        tabLabel: "Case 1) AI 지식 관리",
        persona: {
          title: "박도영 변호사 (파트너)",
          situation: "새벽까지 자료를 찾지 못해 겪는 위기감"
        },
        image: "/JTBD/AS-IS/Photorealistic_image_aspect_ratio_169_Korean_me-1776160355407.jpg",
        story: "과거 판결문은 핵심 자산이지만, 흩어져 있는 자료를 찾는 데에만 수 시간이 걸렸습니다. 퇴직자의 자료는 유실되었고 유사 사건 시 매번 처음부터 리서치하는 비효율 때문에 새벽까지 사무실을 지켜야 했습니다.",
        keyProblems: [
          "법률 문서가 개인별로 분산되어 활용 불가",
          "유사 과거 사건 리서치의 지속적 반복 (비효율)",
          "퇴직자의 지식 자산 유실 및 단절"
        ],
        humeaseSolution: "휴미즈는 AI를 통해 모든 문서를 인덱싱하여 3초 만에 검색 결과와 분석을 제공합니다. 이제 젊은 변호사들도 오전에 핵심 자료를 발견하고 대형 소송을 수임하게 되었습니다.",
        solutionImage: "/JTBD/TO-BE/Photorealistic_image_169_aspect_ratio_Korean_me-1776160798625.jpg",
        solutions: [
          { title: "LLM 기반 법률 지식 인덱싱", desc: "수만 건의 과거 판결문과 내부 문서를 AI가 이해할 수 있는 벡터 데이터로 변환합니다." },
          { title: "전문가용 AI 검색 어시스턴트", desc: "단순 키워드 검색을 넘어, 사건의 맥락을 이해하고 관련 법리를 요약해주는 챗봇을 구축합니다." },
          { title: "지식 자산 자동화 보존", desc: "퇴직이나 인사이동에 상관없이 변호사들의 노하우가 시스템에 자동 축적되는 체계를 마련합니다." }
        ]
      },
      {
        tabLabel: "Case 2) MVP 아이디어 실현",
        persona: {
          title: "최윤서 대표 (스타트업)",
          situation: "VC 데모가 불가능해 새벽까지 에러와 씨름"
        },
        image: "/JTBD/AS-IS/Photorealistic_image_aspect_ratio_169_Korean_Se-1776160364731.jpg",
        story: "투자자 미팅이 45일 남은 상황에서 아이디어를 실제 작동하는 웹서비스로 시연해야 했습니다. 에이전시는 소통이 안 되었고 내부 인력은 부족했습니다. VC 앞에서 데모를 할 수 없는 위기 상황이었습니다.",
        keyProblems: [
          "프론트엔드·AI 개발 역량 내부 부재",
          "투자자 미팅까지의 촉박한 시간 제한",
          "비즈니스를 이해하는 기술 파트너 부재"
        ],
        humeaseSolution: "휴미즈는 기획부터 프론트엔드+AI 챗봇 완성까지 원스톱으로 지원합니다. 미팅 당일 아침 9시, 자신감 있게 VC 앞에서 성공적인 데모를 시연했습니다.",
        solutionImage: "/JTBD/TO-BE/Photorealistic_image_169_aspect_ratio_Korean_Se-1776160806280.jpg",
        solutions: [
          { title: "초고속 MVP 프로토타이핑", desc: "아이디어 기획부터 실제 동작하는 고퀄리티 웹서비스 데모까지 4주 이내에 완성합니다." },
          { title: "투자 유치용 기술 로드맵 설계", desc: "단순 개발을 넘어 VC가 신뢰할 수 있는 아키텍처와 향후 기술 확장 전략을 함께 수립합니다." },
          { title: "풀스택 AI 서비스 구현", desc: "최신 LLM 기술과 모던 프론트엔드 기술을 결합하여 시장 경쟁력 있는 제품을 탄생시킵니다." }
        ]
      }
    ]
  }
];
