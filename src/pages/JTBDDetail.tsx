import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { JTBDS } from '../types';
import { 
  ArrowLeft, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  Search, 
  Shield, 
  Archive, 
  Zap,
  ClipboardCheck,
  Layout,
  Play,
  User,
  Quote,
  Settings,
  BarChart3
} from 'lucide-react';

export default function JTBDDetail() {
  const { id } = useParams();
  const jtbd = JTBDS.find(j => j.id === id);
  const [activeScenario, setActiveScenario] = useState(0);

  if (!jtbd) return <div className="pt-32 text-center text-white font-bold bg-primary min-h-screen">Service not found</div>;

  const getIcon = () => {
    switch (jtbd.id) {
      case 'e-discovery': return <Search className="text-white/40" size={24} />;
      case 'internal-control': return <Shield className="text-white/40" size={24} />;
      case 'exchange-archive': return <Archive className="text-white/40" size={24} />;
      case 'ai-consulting': return <Zap className="text-white/40" size={24} />;
      default: return <Search className="text-white/40" size={24} />;
    }
  };

  return (
    <div className="flex flex-col bg-primary min-h-screen text-white overflow-hidden">
      {/* 1. 히어로 섹션 */}
      <section className="relative pt-28 md:pt-48 pb-16 md:pb-32">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src={jtbd.tobeImage} alt="" className="w-full h-full object-cover blur-3xl" />
          <div className="absolute inset-0 bg-primary"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
              {getIcon()}
              <span className="text-white/60 text-[12px] font-bold tracking-widest uppercase">
                {jtbd.id === 'ai-consulting' ? 'AI 컨설팅' : '데이터 컴플라이언스 컨설팅'}
              </span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter mb-5 md:mb-8 leading-tight break-keep">
              {jtbd.shortDesc}
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-brand mb-8">{jtbd.title} 체계 구축</h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-4xl font-medium break-keep">
              {jtbd.fullDesc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. 고객 시나리오 (New Section) */}
      <section className="py-16 md:py-32 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 italic">"실제로 이런 일이 벌어집니다"</h2>
            <div className="w-20 h-1.5 bg-brand mx-auto rounded-full"></div>
          </div>

          {jtbd.scenarios.length > 1 && (
            <div className="flex justify-center gap-4 mb-12">
              {jtbd.scenarios.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveScenario(idx)}
                  className={`px-8 py-3 rounded-2xl font-bold transition-all border ${
                    activeScenario === idx 
                    ? 'bg-brand text-white border-brand' 
                    : 'bg-white/5 text-white/40 border-white/10 hover:border-white/30'
                  }`}
                >
                  {s.tabLabel}
                </button>
              ))}
            </div>
          )}

          <div className="max-w-[1200px] mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeScenario}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                className="bg-white/[0.03] border border-white/10 rounded-[32px] md:rounded-[60px] p-5 sm:p-8 md:p-16 relative overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative z-10">
                  {/* Left Column: Image only */}
                  <div className="lg:col-span-5">
                    {jtbd.scenarios[activeScenario].image && (
                      <div className="rounded-[40px] overflow-hidden border border-white/10 shadow-2xl group relative cursor-pointer">
                        <img 
                          src={jtbd.scenarios[activeScenario].image} 
                          alt="Scenario situation" 
                          className="w-full h-[240px] sm:h-[340px] md:h-[460px] object-cover group-hover:scale-105 transition-all duration-700 brightness-[0.7] grayscale-[0.2] group-hover:brightness-105 group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-black/40 pointer-events-none group-hover:bg-transparent transition-colors duration-500"></div>
                        <div className="absolute top-6 left-6 group-hover:opacity-20 transition-opacity duration-500">
                          <span className="px-5 py-2 bg-red-600 text-white text-xs font-black tracking-widest rounded-full shadow-lg flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                            BEFORE
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Persona Card on top, then Story & Problems */}
                  <div className="lg:col-span-7 space-y-8">
                    {/* 퍼소나 카드 — 최상단 */}
                    <div className="flex items-center gap-6 py-5 px-6 bg-white/5 rounded-[32px] border border-white/10 backdrop-blur-sm">
                      <div className="w-16 h-16 rounded-2xl bg-brand/20 flex items-center justify-center text-brand shrink-0 shadow-lg shadow-brand/10">
                        <User size={32} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">
                          {jtbd.scenarios[activeScenario].persona.title}
                        </h4>
                        <p className="text-sm text-white/40 font-medium">
                          {jtbd.scenarios[activeScenario].persona.situation}
                        </p>
                      </div>
                    </div>

                    {/* 스토리 */}
                    <div>
                      <p className="text-lg text-white/80 leading-relaxed font-medium">
                        {jtbd.scenarios[activeScenario].story}
                      </p>
                    </div>

                    {/* 핵심 문제 */}
                    <div className="space-y-5">
                      <h5 className="text-sm font-black text-red-500 uppercase tracking-[0.2em] flex items-center gap-2">
                        핵심 문제
                      </h5>
                      <div className="flex flex-wrap gap-3">
                        {jtbd.scenarios[activeScenario].keyProblems.map((p, i) => (
                          <span key={i} className="px-5 py-2.5 bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-bold rounded-2xl shadow-sm">
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 4. 휴미즈가 해결합니다 */}
      <section className="py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight break-keep">
              휴미즈가 <span className="relative inline-block text-brand">해결<div className="absolute -bottom-4 left-0 w-full h-1.5 bg-brand rounded-full opacity-30"></div></span>합니다
            </h2>
          </div>

          {(() => {
            const currentScenario = jtbd.scenarios[activeScenario];
            const displaySolutionImage = currentScenario.solutionImage || jtbd.solutionImage;
            const displaySolutions = currentScenario.solutions || jtbd.solutions;

            return (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                {/* Left: Achievement Imagery */}
                <div className="lg:col-span-6 sticky top-32">
                  <motion.div 
                    key={`sol-img-${activeScenario}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-[48px] overflow-hidden border border-white/10 shadow-2xl relative group"
                  >
                    {displaySolutionImage && (
                      <div className="relative">
                        <img 
                          src={displaySolutionImage} 
                          alt="Solution success result" 
                          className="w-full h-[540px] object-cover group-hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-40"></div>
                        <div className="absolute top-8 left-8">
                          <span className="px-5 py-2 bg-brand text-white text-xs font-black tracking-widest rounded-full shadow-lg flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                            AFTER
                          </span>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* Right: Solution Vertical Cards */}
                <div className="lg:col-span-6 space-y-6">
                  {displaySolutions.map((sol, idx) => (
                    <motion.div
                      key={`sol-card-${activeScenario}-${idx}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                      className="group flex gap-8 p-8 bg-white/5 border border-white/10 rounded-[32px] hover:border-brand/30 hover:bg-white/[0.08] transition-all duration-500"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-brand/5">
                        {idx === 0 ? <Search size={30} /> : idx === 1 ? <Settings size={30} /> : <BarChart3 size={30} />}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-3 group-hover:text-brand transition-colors text-balance">
                          {sol.title}
                        </h4>
                        <p className="text-base text-white/50 leading-relaxed font-medium">
                          {sol.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* 5. 진행 방식 */}
      <section className="py-32 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight">진행 방식</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
            <div className="hidden lg:block absolute top-[60px] left-[15%] right-[15%] h-[2px] bg-linear-to-r from-brand/5 via-brand/50 to-brand/5"></div>
            
            {[
              { icon: <ClipboardCheck size={32} />, title: "진단 (Assessment)" },
              { icon: <Layout size={32} />, title: "설계 (Design)" },
              { icon: <Play size={32} />, title: "실행 (Implementation)" }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center p-8"
              >
                <div className="w-24 h-24 rounded-3xl bg-primary border-2 border-brand/20 flex items-center justify-center mb-8 shadow-xl shadow-brand/10">
                  <div className="text-brand">{step.icon}</div>
                </div>
                <h3 className="text-2xl font-bold mb-6">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                  {jtbd.steps[i]}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA 섹션 */}
      <section className="py-40">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-brand/[0.05] rounded-[60px] p-12 md:p-24 text-center border border-brand/20 relative overflow-hidden group">
            <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <h2 className="text-xl sm:text-3xl md:text-5xl font-black mb-10 leading-tight relative z-10 break-keep">
              더 이상 걱정하지 마세요.<br />
              저희가 완벽하게 해결해 드립니다.
            </h2>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 relative z-10">
              <Link 
                to="/contact" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-brand text-white font-black text-lg rounded-2xl hover:bg-brand-light transition-all transform hover:-translate-y-1 shadow-2xl shadow-brand/20"
              >
                상담 신청하기 <ArrowRight size={20} />
              </Link>
              <Link 
                to="/#services" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/5 text-white font-bold text-lg rounded-2xl border border-white/10 hover:bg-white/10 transition-all"
              >
                다른 서비스 보기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

