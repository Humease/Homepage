import { motion } from 'framer-motion';

export default function Architecture() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-24 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand text-xs font-black mb-6 tracking-[0.3em] uppercase"
          >
            Our Solutions
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-10 leading-tight tracking-tight max-w-4xl mx-auto"
          >
            차세대 엔터프라이즈 <br /> 
            데이터 아키텍처
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-dim max-w-3xl mx-auto leading-relaxed"
          >
            보안과 성능, 그리고 확장성을 동시에 만족시키는 휴미즈 만의 독보적인 기술 스택을 경험해 보세요.
          </motion.p>
        </header>

        <section className="py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 bg-white/5 rounded-[40px] border border-white/10"
          >
            <h3 className="text-3xl font-bold mb-8 tracking-tight">AI Content Pipeline</h3>
            <div className="space-y-8">
              {[
                { step: "01 Ingestion", desc: "다양한 채널(Email, Chat, Docs)의 비정형 데이터 자동 수집" },
                { step: "02 Refinement", desc: "개인정보 비식별화 및 노이즈 제거를 통한 데이터 전처리" },
                { step: "03 Embedding", desc: "검색 성능 최적화를 위한 고차원 벡터 변환 및 저장" },
                { step: "04 Serving", desc: "RAG 기반의 실시간 응답 생성 및 컴플라이언스 체크" }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <span className="text-brand font-black text-sm pt-1">{item.step.split(' ')[0]}</span>
                  <div>
                    <div className="font-bold text-lg mb-1">{item.step.split(' ')[1]}</div>
                    <div className="text-text-dim text-sm">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square bg-gradient-to-br from-brand/20 to-transparent rounded-full flex items-center justify-center p-1"
          >
            <div className="w-full h-full bg-primary rounded-full border border-white/5 flex items-center justify-center text-center p-12 overflow-hidden relative">
               <div className="absolute inset-0 bg-[url('/JTBD/1.jpg')] opacity-20 bg-cover bg-center"></div>
               <div className="relative z-10">
                 <div className="text-4xl font-black text-brand mb-4">H-CORE</div>
                 <p className="text-sm text-text-dim">Consulting & Platform Engine</p>
               </div>
            </div>
          </motion.div>
        </section>

        <section className="py-32 border-t border-white/5">
          <h2 className="text-3xl font-bold mb-16 text-center">Implementation Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Cloud Native', 'Vector Search', 'Hybrid RAG', 'Data Governance', 'NLP Pipeline', 'Auto ML', 'E-Discovery', 'Compliance'].map((tech, i) => (
              <div key={i} className="p-8 border border-white/5 rounded-2xl bg-white/2 hover:border-brand/40 transition-colors text-center font-medium">
                {tech}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
