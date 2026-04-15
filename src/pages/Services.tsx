import { motion } from 'framer-motion';
import { Database, ShieldCheck, Mail, Cpu, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      id: "e-discovery",
      title: "e-Discovery 컨설팅",
      icon: <Database className="text-brand" size={32} />,
      desc: "법적 분쟁 및 감사 시 방대한 데이터에서 필요한 증거를 신속하게 확보할 수 있는 체계를 구축합니다.",
      items: ["데이터 보존 정책 수립", "고속 검색 인덱싱 설계", "증거 수집 프로세스 최적화"]
    },
    {
      id: "internal-control",
      title: "내부 통제 컨설팅",
      icon: <ShieldCheck className="text-brand" size={32} />,
      desc: "기업 내부의 민감정보 흐름을 가시화하고, 유출 리스크를 사전에 차단하는 거버넌스를 설계합니다.",
      items: ["민감정보 자동 분류 체계", "실시간 유출 모니터링", "접근 권한 거버넌스 수립"]
    },
    {
      id: "exchange-archive",
      title: "Exchange 운영 컨설팅",
      icon: <Mail className="text-brand" size={32} />,
      desc: "급증하는 메일 데이터를 효율적으로 관리하고, 서버 부하를 최소화하는 아카이빙 전략을 제안합니다.",
      items: ["메일 아카이빙 시스템 설계", "스토리지 최적화 전략", "백업 및 복구 체계 고도화"]
    },
    {
      id: "ai-consulting",
      title: "AI 활용 컨설팅",
      icon: <Cpu className="text-brand" size={32} />,
      desc: "기업의 비정형 데이터를 AI가 즉시 활용 가능한 자산으로 전환하는 기술적 기반을 마련합니다.",
      items: ["AI Ready 데이터 레이크 설계", "RAG 기반 지식 베이스 구축", "데이터 정제 자동화 파이프라인"]
    }
  ];

  return (
    <div className="pt-40 pb-32 bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-brand text-xs font-black mb-6 tracking-[0.3em] uppercase"
            >
              Our Services
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-8 leading-tight"
            >
              비즈니스 데이터의 <br />깊은 곳까지 진단합니다
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-text-dim max-w-2xl leading-relaxed"
            >
              고객의 비즈니스 상황을 깊이 이해하고, <br className="hidden md:block" />
              데이터의 근본적인 문제를 해결하는 전략적 파트너입니다.
            </motion.p>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <img 
              src="/JTBD/11.jpg" 
              alt="Humease Services" 
              className="rounded-[40px] shadow-2xl border border-white/10 w-full object-cover aspect-[4/3]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-[40px]" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <Link 
              key={i}
              to={`/services/${service.id}`}
              className="block"
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/2 p-12 rounded-[40px] border border-white/5 hover:border-brand/30 hover:bg-white/5 transition-all group backdrop-blur-sm flex flex-col h-full cursor-pointer"
              >
                <div className="flex-grow">
                  <div className="mb-8 scale-110 origin-left transition-transform group-hover:scale-125 duration-500">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-6 tracking-tight group-hover:text-brand transition-colors">{service.title}</h3>
                  <p className="text-text-dim leading-relaxed mb-10 text-sm md:text-base">{service.desc}</p>
                  <ul className="space-y-4 mb-2">
                    {service.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-4 text-sm font-medium text-white/90">
                        <CheckCircle2 size={18} className="text-brand shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
