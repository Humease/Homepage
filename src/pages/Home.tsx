import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { JTBDS } from '../types';
import { 
  Settings, 
  ShieldCheck, 
  Zap, 
  Search, 
  Shield, 
  Archive, 
  ArrowRight, 
  CheckCircle2, 
  Users,
  SearchCode,
  Box,
  Rocket,
  X
} from 'lucide-react';

const SLIDE_IMAGES = [
  { url: '/JTBD/landingpage/Hero/1.jpg', caption: '신속 정확한 이디스커버리 방안 필요' },
  { url: '/JTBD/landingpage/Hero/2.jpg', caption: 'AI 기반 지식관리시스템 필요' },
  { url: '/JTBD/landingpage/Hero/3.jpg', caption: '효율적인 메일 서버 관리 방안 필요' },
  { url: '/JTBD/landingpage/Hero/4.jpg', caption: '개인·민감정보 모니터링 방안 필요' },
  { url: '/JTBD/landingpage/Hero/5.jpg', caption: 'Microsoft 365 환경의 내부통제 방안 필요' }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDE_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col bg-primary min-h-screen text-white overflow-hidden">
      {/* 1. 히어로 섹션 */}
      <section className="relative min-h-[100svh] md:min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* 전체 배경 오버레이 레이어 */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
            >
              <img 
                src={SLIDE_IMAGES[currentSlide].url} 
                alt="Background" 
                className="w-full h-full object-cover blur-sm"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-linear-to-b from-primary via-primary/90 to-primary"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full mt-8 mb-16 lg:mb-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 좌측 텍스트 영역 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                <Settings size={14} className="text-white/40 animate-spin-slow" />
                <span className="text-white/60 text-[12px] font-bold tracking-widest uppercase">HUMEASE CONSULTING</span>
              </div>
              
              <p className="text-sm sm:text-base md:text-lg text-white/70 leading-relaxed mb-6 max-w-2xl">
                <span className="font-bold text-white whitespace-nowrap">Microsoft MVP · Symantec · Veritas · Arctera</span>를 거친<br className="hidden sm:block" />{' '}
                전문가가 설계하는 데이터 컴플라이언스 컨설팅과 AI 서비스 구현
              </p>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.2] tracking-tight mb-8 md:mb-12 break-keep">
                <span style={{ color: '#3B82F6' }}>데이터</span>는 안전하게<br />{' '}
                <span style={{ color: '#3B82F6' }}>아이디어</span>는 현실로
              </h1>

              <div className="flex flex-col md:flex-row gap-4">
                <Link 
                  to="/contact"
                  className="px-8 py-4 bg-brand text-white font-bold rounded-xl hover:bg-brand-light transition-all transform hover:-translate-y-1 shadow-2xl shadow-brand/20 text-base flex items-center justify-center gap-2"
                >
                  상담 신청하기 <ArrowRight size={18} />
                </Link>
                <button 
                  onClick={() => scrollToSection('problems')}
                  className="px-8 py-4 bg-transparent text-white font-bold rounded-xl border border-white/20 hover:bg-white/10 transition-all transform hover:-translate-y-1 backdrop-blur-md text-base"
                >
                  서비스 살펴보기
                </button>
              </div>
            </motion.div>

            {/* 우측 이미지 슬라이더 영역 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-full max-w-[340px] sm:max-w-[420px] md:max-w-[480px] mx-auto lg:ml-auto lg:mr-0 aspect-square z-20 group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="relative w-full h-full rounded-[32px] overflow-hidden border border-white/10 shadow-2xl cursor-pointer">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -50) {
                        setCurrentSlide((prev) => (prev + 1) % SLIDE_IMAGES.length);
                      } else if (info.offset.x > 50) {
                        setCurrentSlide((prev) => (prev - 1 + SLIDE_IMAGES.length) % SLIDE_IMAGES.length);
                      }
                    }}
                    className="absolute inset-0 select-none"
                  >
                    <img 
                      src={SLIDE_IMAGES[currentSlide].url} 
                      alt={SLIDE_IMAGES[currentSlide].caption}
                      className="w-full h-full object-cover pointer-events-none"
                    />
                    {/* 하단 그라데이션 오버레이 */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-100 h-full"></div>
                    
                    {/* 캡션 */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <motion.p
                        key={currentSlide + '-caption'}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-white text-base md:text-[18px] font-medium tracking-tight"
                      >
                        {SLIDE_IMAGES[currentSlide].caption}
                      </motion.p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* 도트 네비게이션 */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2">
                {SLIDE_IMAGES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentSlide === idx ? 'bg-white w-4' : 'bg-white/40'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* 스크롤 유도 아이콘 */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-white/60 rounded-full"
              />
            </div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">Scroll</span>
          </motion.div>
        </motion.div>
      </section>


      {/* 3. 기업이 겪는 문제 */}
      <section id="problems" className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-center break-keep">
              이런 문제, <span className="text-brand">겪고 계시지 않습니까?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                label: "규제 대응",
                title: "규제 기관이 데이터를 요구했는데, 즉시 제출할 수 없다",
                desc: "공정거래위원회, 금융감독원, 법원 등에서 이메일, 메신저, 문서 데이터를 제출하라고 요구받았을 때, Microsoft 365에 있는 데이터를 통합적으로 검색하고 추출할 수 있는 체계가 갖춰져 있습니까?",
                link: "/services/e-discovery",
                image: "/JTBD/landingpage/Photorealistic_image_aspect_ratio_169_Korean_mi-1776160312508.jpg"
              },
              {
                label: "개인·민감정보 통제",
                title: "클라우드에 개인정보와 민감정보가 통제 없이 쌓이고 있다",
                desc: "Microsoft 365의 이메일, Teams, SharePoint, OneDrive에 고객 개인정보나 금융 민감정보가 저장되어 있는지 상시적으로 모니터링하고 있습니까? 탐지되었을 때 즉시 조치하는 프로세스가 있습니까?",
                link: "/services/internal-control",
                image: "/JTBD/landingpage/Photorealistic_image_aspect_ratio_169_Korean_ca-1776160327511.jpg"
              },
              {
                label: "운영 효율",
                title: "이메일 데이터가 계속 늘어나는데, 사서함 용량은 한계 달했다",
                desc: "Exchange Server의 사서함 용량은 제한되어 있지만, 사용자들은 과거 메일을 삭제하지 않으려 합니다. 사서함 용량을 줄이면서도 과거 메일에 접근할 수 있는 아카이빙 구조가 있습니까?",
                link: "/services/exchange-archive",
                image: "/JTBD/landingpage/Photorealistic_image_aspect_ratio_169_Korean_la-1776160335542.jpg"
              },
              {
                label: "아이디어 실현",
                title: "좋은 아이디어가 있는데, 서비스로 만들 방법을 모르겠다",
                desc: "홈페이지, 웹서비스, AI 챗봇, MVP를 만들고 싶은데 내부에 기술 역량이 부족합니다. 비즈니스를 이해하면서 기술까지 함께 설계해 줄 파트너가 필요하지 않습니까?",
                link: "/services/ai-consulting",
                image: "/JTBD/landingpage/Photorealistic_image_aspect_ratio_169_Korean_Se-1776160361248.jpg"
              }
            ].map((problem, i) => (
              <motion.button 
                key={i} 
                onClick={() => {
                  const serviceId = problem.link.split('/').pop();
                  const serviceData = JTBDS.find(s => s.id === serviceId);
                  if (serviceData) setSelectedService(serviceData);
                }}
                className="group relative h-[320px] rounded-[32px] overflow-hidden border border-white/10 hover:border-brand/50 transition-all duration-500 text-left w-full"
              >
                <img 
                  src={problem.image} 
                  alt={problem.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/60 to-transparent"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <span className="text-brand font-bold text-[12px] tracking-widest uppercase mb-2">{problem.label}</span>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-brand transition-colors leading-tight">{problem.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed line-clamp-2 group-hover:text-white transition-colors">
                    {problem.desc}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 핵심 서비스 */}
      <section id="services" className="py-32 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12">
              휴미즈가 <span className="relative inline-block">해결<div className="absolute -bottom-4 left-0 w-full h-1.5 bg-brand rounded-full"></div></span>합니다
            </h2>
            <p className="text-white/60 text-lg">기업의 데이터 문제를 근본적으로 해결하는 핵심 서비스입니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {JTBDS.map((jtbd) => (
              <Link key={jtbd.id} to={`/services/${jtbd.id}`} className="block h-full">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group p-8 bg-primary/40 rounded-[32px] border border-white/5 hover:border-brand/40 hover:bg-brand/[0.02] transition-all duration-500 backdrop-blur-sm flex flex-col h-full text-left w-full cursor-pointer hover:-translate-y-1"
                >
                  <div className="mb-8 p-4 bg-brand/10 rounded-2xl w-fit group-hover:scale-110 group-hover:bg-brand/20 transition-all duration-500">
                    {jtbd.id === 'e-discovery' && <Search className="text-brand" size={28} />}
                    {jtbd.id === 'internal-control' && <Shield className="text-brand" size={28} />}
                    {jtbd.id === 'exchange-archive' && <Archive className="text-brand" size={28} />}
                    {jtbd.id === 'ai-consulting' && <Zap className="text-brand" size={28} />}
                  </div>
                  
                  <div className="flex flex-col flex-grow">
                    <span className="text-brand text-[11px] font-black tracking-widest uppercase mb-3 opacity-80">{jtbd.tag}</span>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-brand transition-colors">{jtbd.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-8 flex-grow">
                      {jtbd.fullDesc}
                    </p>
                    <span className="text-brand text-xs font-black tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">자세히 보기 →</span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 접근 방식 */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">진단부터 실행까지, 3단계로 해결합니다.</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
            <div className="hidden lg:block absolute top-[60px] left-[15%] right-[15%] h-[2px] bg-linear-to-r from-brand/5 via-brand/50 to-brand/5 z-0"></div>
            
            {[
              {
                step: "01",
                icon: <SearchCode size={40} className="text-brand" />,
                title: "진단 (Assessment)",
                desc: "현재 데이터 구조, 시스템 환경, 규제 대응 수준, 리스크를 분석합니다. AI 컨설팅의 경우, 고객의 아이디어와 비즈니스 목표를 정리하고 기술적 실현 가능성을 검토합니다."
              },
              {
                step: "02",
                icon: <Box size={40} className="text-brand" />,
                title: "설계 (Design)",
                desc: "아카이빙 구조, 보존 정책, 모니터링 체계, 운영 프로세스를 설계합니다. AI 컨설팅의 경우, 서비스 기능을 정의하고 기술 스택을 선정하며 AI 도구 적용 방식을 결정합니다."
              },
              {
                step: "03",
                icon: <Rocket size={40} className="text-brand" />,
                title: "실행 (Implementation)",
                desc: "시스템을 구축하고, 데이터를 이관하며, 운영을 안정화하고, 확장 계획을 수립합니다. AI 컨설팅의 경우, 웹서비스와 AI 도구를 개발하고 테스트를 거쳐 서비스를 런칭합니다."
              }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-3xl bg-brand/5 border border-brand/20 flex items-center justify-center mb-8 group-hover:bg-brand/10 group-hover:scale-110 transition-all duration-500 shadow-lg shadow-brand/5">
                  {step.icon}
                </div>
                <div className="text-brand font-black text-sm tracking-widest mb-4 opacity-40 uppercase">Step {step.step}</div>
                <h3 className="text-2xl font-bold mb-6">{step.title}</h3>
                <p className="text-white/60 leading-relaxed font-medium">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. 하단 CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand/5 z-0"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-black leading-tight tracking-tight mb-8 break-keep">
              데이터 문제, <br className="sm:hidden" /> 혼자 고민하지 마세요. <br />
              <span className="text-brand">진단부터 실행까지 <br className="sm:hidden" /> 함께합니다.</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/70 mb-10 md:mb-12 max-w-3xl mx-auto font-medium break-keep">
              기업 데이터 관리·컴플라이언스 대응과 AI 기반 서비스 구현, <br className="hidden sm:block" />
              지금 바로 전문가와 <br className="sm:hidden" /> 상담해 보세요.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-3 px-12 py-6 bg-white text-primary font-black text-xl rounded-2xl hover:bg-brand hover:text-white transition-all transform hover:-translate-y-1 shadow-2xl"
            >
              상담 신청하기 <ArrowRight size={24} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 모달 팝업 */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-primary/90 backdrop-blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white/[0.03] border border-white/10 rounded-[40px] overflow-hidden shadow-2xl backdrop-blur-2xl"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-8 right-8 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white/40 hover:text-white"
              >
                <X size={24} />
              </button>

              <div className="p-6 sm:p-8 md:p-12">
                <div className="mb-8 p-4 bg-brand/10 rounded-2xl w-fit">
                  {selectedService.id === 'e-discovery' && <Search className="text-brand" size={32} />}
                  {selectedService.id === 'internal-control' && <Shield className="text-brand" size={32} />}
                  {selectedService.id === 'exchange-archive' && <Archive className="text-brand" size={32} />}
                  {selectedService.id === 'ai-consulting' && <Zap className="text-brand" size={32} />}
                </div>

                <span className="text-brand text-xs font-black tracking-widest uppercase mb-4 block">
                  {selectedService.tag}
                </span>
                <h2 className="text-4xl font-bold mb-8">{selectedService.title}</h2>
                <div className="space-y-6 text-xl text-white/70 leading-relaxed font-medium">
                  {selectedService.fullDesc.split('\n').map((line: string, i: number) => (
                    <p key={i}>{line}</p>
                  ))}
                  <p className="pt-4 border-t border-white/5 text-white/50 text-base">
                    이 서비스에 대해 더 궁금하신가요? 지금 전문가와 상담을 통해 최적화된 방안을 확인해 보세요.
                  </p>
                </div>

                <div className="mt-12 flex gap-4">
                  <Link 
                    to="/contact"
                    onClick={() => setSelectedService(null)}
                    className="flex-1 px-8 py-5 bg-brand text-white font-bold rounded-2xl hover:bg-brand-light transition-all text-center"
                  >
                    상담 신청하기
                  </Link>
                  <button 
                    onClick={() => setSelectedService(null)}
                    className="flex-1 px-8 py-5 bg-white/5 text-white font-bold rounded-2xl hover:bg-white/10 transition-all text-center"
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
