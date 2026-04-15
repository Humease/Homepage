import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Archive, Shield, Zap, Search, Layers, BarChart3, X } from 'lucide-react';

type CardItem = {
  id: string;
  title: string;
  subtitle?: string;
  icon: JSX.Element;
  desc: string;
  mainDesc?: string;
  oneLine?: string;
};

export default function Solutions() {
  const [selectedCard, setSelectedCard] = useState<CardItem | null>(null);

  const sections = [
    {
      id: "ev",
      title: "Enterprise Vault",
      subtitle: "규제 대응을 위한 엔터프라이즈 아카이빙 플랫폼",
      mainDesc: "이메일과 다양한 커뮤니케이션 데이터를 중앙 아카이브에 안전하게 보관하고, 분류·보존·검색·eDiscovery를 지원하며 정보 거버넌스를 강화하도록 설계되어 있습니다.",
      features: [
        {
          id: "ev-archive",
          title: "Exchange Mailbox Archiving",
          icon: <Archive className="text-white/40" size={24} />,
          desc: "사용자 메일함 데이터를 정책 기반으로 자동 아카이빙하여 장기 보존과 빠른 검색을 동시에 지원합니다.",
          mainDesc: "사용자 메일함 데이터를 정책 기반으로 자동 아카이빙하여 장기 보존과 빠른 검색을 동시에 지원합니다.\n\nExchange 환경에서 사서함 용량 문제를 해결하면서도, 사용자가 Outlook에서 과거 메일을 그대로 검색하고 열람할 수 있는 구조를 유지합니다. 보존 정책 수립부터 운영 안정화까지 전과정을 지원합니다.",
          subtitle: "Exchange Mailbox Archiving",
        },
        {
          id: "ev-discovery",
          title: "Discovery Accelerator",
          icon: <Search className="text-white/40" size={24} />,
          desc: "법무·감사 대응을 위해 아카이브 전반에서 필요한 데이터를 케이스 단위로 검색, 검토, 증빙 생산을 지원합니다.",
          mainDesc: "법무·감사 대응을 위해 아카이브 전반에서 필요한 데이터를 케이스 단위로 검색, 검토, 증빙 생산을 지원합니다.\n\n규제 기관의 데이터 제출 요청이 발생했을 때, 이메일·메신저·파일 등 다양한 데이터를 조건에 맞게 추출하고 법적 증빙 포맷으로 생산할 수 있는 체계를 구축합니다.",
          subtitle: "Discovery Accelerator",
        },
        {
          id: "ev-surveillance",
          title: "Surveillance",
          icon: <Shield className="text-white/40" size={24} />,
          desc: "이메일·채팅·음성·영상 등 다양한 커뮤니케이션을 실시간 모니터링하여 규제 리스크를 줄이고 감독 효율을 높입니다.",
          mainDesc: "이메일·채팅·음성·영상 등 다양한 커뮤니케이션을 실시간 모니터링하여 규제 리스크를 줄이고 감독 효율을 높입니다.\n\n상시 자동 탐지와 알림·조치 추적 프로세스를 통해, 금융감독원 등 규제 기관 검사 시 즉시 제출 가능한 모니터링 증적 체계를 함께 구축합니다.",
          subtitle: "Surveillance",
        }
      ]
    },
    {
      id: "merge1",
      title: "Merge1",
      subtitle: "멀티채널 데이터 수집 솔루션",
      mainDesc: "Microsoft 365, Teams, Slack, Zoom 등 120개 이상의 소스에서 데이터를 수집하고 대화의 맥락을 그대로 유지한 채 캡처·보관합니다. 분산된 커뮤니케이션 데이터를 하나의 수집 계층으로 통합하는 것이 강점입니다.",
      icon: <Layers className="text-white/40" size={40} />,
      oneLine: "컴플라이언스 아카이빙과 eDiscovery의 강력한 기반을 만들어줍니다."
    },
    {
      id: "datainsight",
      title: "Data Insight",
      subtitle: "비정형 데이터 리스크 분석 플랫폼",
      mainDesc: "비정형 데이터를 스캔하고 분류하여 민감 정보, 다크 데이터, 내부자 리스크를 식별합니다. 데이터 기반의 판단으로 보안, 컴플라이언스, 스토리지 최적화를 동시에 달성할 수 있습니다.",
      icon: <BarChart3 className="text-white/40" size={40} />,
      oneLine: "어떤 파일을 보관해야 하고, 무엇을 정리해야 하는지 명확한 가이드를 제공합니다."
    }
  ];

  const openModal = (card: CardItem) => setSelectedCard(card);
  const closeModal = () => setSelectedCard(null);

  return (
    <div className="pt-24 md:pt-32 pb-12 md:pb-20 bg-primary min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <header className="mb-12 text-center max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-10 leading-snug tracking-tight text-white break-keep"
          >
            한국 시장에서 유일하게 전담한<br className="hidden md:block" />{" "}
            전문가가 컨설팅 해 드립니다.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-text-dim leading-relaxed break-keep"
          >
            다양한 제품을 활용하여, 비즈니스가 직면한 규제 대응과 데이터 자산화의 문제를
            <br className="hidden md:block" />{" "}가장 완벽하게 풀어냅니다.
          </motion.p>
        </header>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white py-4 px-12 rounded-[32px] mb-20 flex items-center justify-center shadow-lg w-fit mx-auto"
        >
          <img 
            src="/Vendor logo.jpg" 
            alt="Strategic Partners" 
            className="h-16 md:h-20 object-contain"
          />
        </motion.div>

        <div className="space-y-40">
          {/* Section 1: Enterprise Vault */}
          <section id="ev">
            <div className="mb-20 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter break-keep">{sections[0].title}</h2>
              <div className="text-white/60 font-bold text-lg md:text-xl mb-6 break-keep">{sections[0].subtitle}</div>
              <p className="text-text-dim leading-relaxed max-w-3xl mx-auto break-keep">
                이메일과 다양한 커뮤니케이션 데이터를 중앙 아카이브에 안전하게 보관하고, <br className="hidden md:block" /> 
                분류·보존·검색·eDiscovery를 지원하며 정보 거버넌스를 강화하도록 설계되어 있습니다.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sections[0].features?.map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => openModal({
                    id: feature.id,
                    title: feature.title,
                    subtitle: feature.subtitle,
                    icon: feature.icon,
                    desc: feature.desc,
                    mainDesc: feature.mainDesc,
                  })}
                  className="p-6 md:p-10 bg-white/2 rounded-[24px] md:rounded-[32px] border border-white/5 hover:border-brand/30 transition-all backdrop-blur-sm group cursor-pointer hover:bg-white/5 hover:-translate-y-1"
                >
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-500 origin-left">{feature.icon}</div>
                  <h4 className="text-xl font-bold text-white mb-4">{feature.title}</h4>
                  <p className="text-text-dim text-sm leading-relaxed">{feature.desc}</p>
                  <div className="mt-6 text-brand text-xs font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">자세히 보기 →</div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Section 2: Merge1 & Section 3: Data Insight */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[sections[1], sections[2]].map((item, i) => (
              <motion.section 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                onClick={() => openModal({
                  id: item.id,
                  title: item.title,
                  subtitle: item.subtitle,
                  icon: item.icon,
                  desc: item.mainDesc || '',
                  mainDesc: item.mainDesc,
                  oneLine: item.oneLine,
                })}
                className="p-8 md:p-16 bg-white/2 rounded-[32px] md:rounded-[48px] border border-white/5 hover:bg-white/5 hover:border-brand/30 transition-all flex flex-col justify-between cursor-pointer hover:-translate-y-1 group"
              >
                <div>
                  <div className="mb-10">{item.icon}</div>
                  <h2 className="text-4xl font-black text-white mb-6 uppercase tracking-tighter">{item.title}</h2>
                  <div className="text-white/60 font-bold text-lg mb-8">{item.subtitle}</div>
                  <p className="text-text-dim leading-relaxed mb-10">{item.mainDesc}</p>
                </div>
                <div className="pt-8 border-t border-white/5">
                  <p className="text-white font-bold leading-relaxed italic opacity-90">
                    "{item.oneLine}"
                  </p>
                  <div className="mt-4 text-brand text-xs font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">자세히 보기 →</div>
                </div>
              </motion.section>
            ))}
          </div>
        </div>

        <section className="mt-40 py-24 bg-brand/5 rounded-[60px] text-center border border-brand/10">
          <h2 className="text-3xl font-bold text-white mb-8">우리 기업에 필요한 솔루션은 무엇일까요?</h2>
          <p className="text-text-dim mb-12 max-w-xl mx-auto">
            휴미즈의 전문가팀이 귀사의 데이터 환경을 직접 확인하고, <br />
            가장 효율적인 솔루션 아키텍처를 제안해 드립니다.
          </p>
          <Link to="/contact">
            <button className="btn-primary px-12 py-4 font-extrabold text-lg">상담 신청하기</button>
          </Link>
        </section>
      </div>

      {/* 모달 팝업 */}
      <AnimatePresence>
        {selectedCard && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            {/* 배경 딤 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />

            {/* 모달 본체 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 24 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              className="relative w-full max-w-2xl bg-[#0B1629] border border-white/10 rounded-[28px] md:rounded-[40px] overflow-hidden shadow-2xl"
            >
              {/* 닫기 버튼 */}
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/15 transition-colors text-white/40 hover:text-white"
              >
                <X size={22} />
              </button>

              <div className="p-6 sm:p-8 md:p-14">
                {/* 아이콘 */}
                <div className="mb-6 w-14 h-14 bg-brand/10 rounded-2xl flex items-center justify-center">
                  {selectedCard.icon}
                </div>

                {/* 서브타이틀 */}
                {selectedCard.subtitle && (
                  <p className="text-brand text-xs font-black tracking-widest uppercase mb-3">
                    {selectedCard.subtitle}
                  </p>
                )}

                {/* 타이틀 */}
                <h2 className="text-3xl font-black text-white mb-6 tracking-tight">{selectedCard.title}</h2>

                {/* 본문 */}
                <div className="space-y-4 text-white/60 leading-relaxed text-base">
                  {(selectedCard.mainDesc || selectedCard.desc).split('\n\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                {/* 한 줄 문구 */}
                {selectedCard.oneLine && (
                  <div className="mt-8 p-5 bg-brand/5 border border-brand/20 rounded-2xl">
                    <p className="text-white font-bold italic">"{selectedCard.oneLine}"</p>
                  </div>
                )}

                {/* CTA */}
                <div className="mt-10 flex gap-4">
                  <Link
                    to="/contact"
                    onClick={closeModal}
                    className="flex-1 px-6 py-4 bg-brand text-white font-bold rounded-2xl hover:bg-brand/80 transition-all text-center text-sm"
                  >
                    상담 신청하기
                  </Link>
                  <button
                    onClick={closeModal}
                    className="flex-1 px-6 py-4 bg-white/5 text-white font-bold rounded-2xl hover:bg-white/10 transition-all text-center text-sm"
                  >
                    닫기
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
