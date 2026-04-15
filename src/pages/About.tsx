import { motion } from 'framer-motion';
import { Shield, Zap, Target, Star, CheckCircle2, TrendingUp, Cpu, Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-28 md:pt-40 pb-16 md:pb-32 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* 섹션 1. 회사 개요 */}
        <section className="mb-16 md:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                <Globe size={14} className="text-white/40" />
                <span className="text-white/60 text-[12px] font-bold tracking-widest uppercase">About Humease</span>
              </div>
              <div className="mt-4"></div>
              <div className="space-y-8 text-xl text-white/80 leading-relaxed font-medium">
                <p>
                  기업이 보유한 데이터를 보다 안전하게 관리하고, 더 높은 가치로 활용할 수 있도록 지원하는 데이터 전문 컨설팅 기업입니다. 
                  단순한 기술 도입이 아닌, 기업 환경에 맞는 전략 설계부터 실행까지 함께합니다.
                </p>
                <p>
                  기업 데이터의 저장, 보존, 검색, 규제 대응, 감사 대응, 법적 증빙, 데이터 이관, 데이터 활용까지 전 과정을 아우르며, 
                  특히 데이터 컴플라이언스 영역에서 실질적인 문제 해결 역량을 보유하고 있습니다. <span className="text-brand">Microsoft MVP · Symantec · Veritas · Arctera</span> 를 거친 전문가가 직접 아키텍처를 설계하고 구축합니다.
                </p>
                <p>
                  동시에, AI 컨설팅을 통해 홈페이지 제작, 웹서비스 개발, AI 도구 접목, 고객의 다양한 사업 아이디어를 실제 서비스로 구현하는 역할까지 수행합니다. 
                  아이디어 단계부터 MVP 구현, 업무 자동화 설계까지 비즈니스의 디지털 전환을 끝까지 책임집니다.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative aspect-video md:aspect-square rounded-[32px] md:rounded-[48px] overflow-hidden shadow-2xl"
            >
              <img src="/company_img.jpg" alt="Humease Office" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/10"></div>
              {/* 상하좌우 테두리 페이드 효과 */}
              <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#050A18] to-transparent pointer-events-none"></div>
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050A18] to-transparent pointer-events-none"></div>
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050A18] to-transparent pointer-events-none"></div>
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050A18] to-transparent pointer-events-none"></div>
            </motion.div>
          </div>
        </section>

        {/* 섹션 2. 핵심 사업 */}
        <section className="mb-20 md:mb-40 py-12 md:py-24 bg-white/[0.02] rounded-[40px] md:rounded-[60px] border border-white/5 px-6 md:px-16">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              <span className="relative inline-block">
                핵심
                <div className="absolute -bottom-2 md:-bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-1 md:h-1.5 bg-brand rounded-full"></div>
              </span> 사업
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 bg-primary/40 rounded-[40px] border border-white/5 hover:border-brand/30 transition-all group"
            >
              <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Shield className="text-brand" size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-6 group-hover:text-brand transition-colors">데이터 컴플라이언스 컨설팅</h3>
              <p className="text-white/60 text-lg leading-relaxed">
                기업이 데이터를 생성하고, 저장하고, 보존하고, 검색하고, 이관하고, 
                폐기하는 전 과정에서 필요한 정책과 시스템을 설계합니다.
                e-Discovery 체계 구축, 개인정보·민감정보 모니터링, 
                Exchange 아카이빙, 데이터 보존 정책 수립, 
                데이터 마이그레이션 등이 핵심 서비스입니다.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-10 bg-primary/40 rounded-[40px] border border-white/5 hover:border-brand/30 transition-all group"
            >
              <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Cpu className="text-brand" size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-6 group-hover:text-brand transition-colors">AI 컨설팅</h3>
              <p className="text-white/60 text-lg leading-relaxed">
                고객의 아이디어를 현실로 만듭니다.
                홈페이지·랜딩페이지 기획 및 제작, 웹 애플리케이션 개발, 
                AI 챗봇·AI Agent 접목, MVP 구현, 업무 자동화 설계, 
                데이터 분석 및 인사이트 리포트 등 
                폭넓은 서비스를 제공합니다.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 섹션 3. 비전 */}
        <section className="mb-20 md:mb-40">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xs font-black text-white/30 tracking-[0.5em] uppercase mb-8">Vision</h2>
              <h3 className="text-[19px] sm:text-2xl md:text-4xl lg:text-5xl font-black mb-10 md:mb-12 leading-tight break-keep">
                <span className="inline-block">데이터를 단순히 저장하는 것이 아니라,</span> <br />
                <span className="text-brand">가치를 창출하는 자산</span>으로
              </h3>
              <p className="text-[18px] md:text-[22px] text-white/60 leading-relaxed font-medium break-keep">
                기업 데이터를 단순히 저장하는 것이 아니라, 비즈니스 의사결정에 활용 가능한 자산으로 전환하는 것을 목표로 합니다. 동시에 고객의 아이디어가 기술의 벽에 막히지 않고 현실의 서비스로 구현될 수 있도록 돕습니다. 궁극적으로는 데이터 관리 기업에서 데이터 활용 및 기술 구현 플랫폼 기업으로 성장하는 것이 휴미즈의 비전입니다.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 섹션 4. 핵심 가치 */}
        <section className="mb-20">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              <span className="relative inline-block">
                핵심
                <div className="absolute -bottom-2 md:-bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-1 md:h-1.5 bg-brand rounded-full"></div>
              </span> 가치
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <Shield size={32} />, 
                title: "안전성", 
                desc: "기업의 중요한 데이터가 장기간 안전하게 저장되고, 필요 시 신속하게 검색 및 제출될 수 있도록 지원합니다." 
              },
              { 
                icon: <CheckCircle2 size={32} />, 
                title: "컴플라이언스", 
                desc: "산업별 규제, 감사 대응, 법적 분쟁 대응, 내부 통제 요건 등을 고려하여 데이터 정책과 시스템을 설계합니다." 
              },
              { 
                icon: <TrendingUp size={32} />, 
                title: "효율성", 
                desc: "중복 저장, 비효율적 구조, 관리 비용 증가 문제를 개선하여 기업의 운영 효율을 높입니다." 
              },
              { 
                icon: <Target size={32} />, 
                title: "실현력", 
                desc: "고객의 아이디어를 단순한 구상 단계에 머물지 않게 하고, AI와 웹 기술을 활용하여 실제 서비스로 구현합니다." 
              }
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] hover:border-brand/40 transition-all"
              >
                <div className="text-brand mb-6">{value.icon}</div>
                <h4 className="text-2xl font-bold mb-4">{value.title}</h4>
                <p className="text-white/50 leading-relaxed text-sm">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
