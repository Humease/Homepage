import { motion } from 'framer-motion';

export default function Cases() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand text-xs font-black mb-6 tracking-[0.3em] uppercase"
          >
            Success Stories
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-10 leading-tight tracking-tight max-w-4xl"
          >
            혁신을 현실로 바꾼 <br /> 
            기업들의 실제 기록입니다
          </motion.h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { 
              company: "Global Tech A사", 
              title: "사내 데이터 컴플라이언스 관리 자동화", 
              desc: "10페타바이트 규모의 비정형 데이터를 AI로 분석하여 법적 리스크를 90% 이상 사전 감지했습니다.",
              img: "/JTBD/2.jpg"
            },
            { 
              company: "Financial Group B사", 
              title: "실시간 고객 응대를 위한 RAG 아키텍처 구축", 
              desc: "분산된 기술 문서를 통합하여 상담원 응대 속도를 3배 이상 개선하고 정확도를 확보했습니다.",
              img: "/JTBD/3.jpg"
            },
            { 
              company: "Manufacture C사", 
              title: "디지털 트윈 기반 지식 관리 시스템", 
              desc: "공정 매뉴얼을 휴미즈 H-CORE 엔진에 학습시켜 신규 입사자 교육 기간을 1개월에서 1주일로 단축했습니다.",
              img: "/JTBD/4.jpg"
            },
            { 
              company: "Retail Giant D사", 
              title: "개인정보 비식별화 및 데이터 거버넌스 수립", 
              desc: "불필요한 중복 데이터를 정리하여 인프라 비용을 연간 12억 원 이상 절감했습니다.",
              img: "/JTBD/5.jpg"
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] bg-white/5 rounded-[32px] overflow-hidden mb-8 border border-white/5">
                <img src={item.img} alt="" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                <div className="absolute bottom-10 left-10">
                  <span className="text-brand text-xs font-bold uppercase tracking-widest">{item.company}</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-brand transition-colors">{item.title}</h3>
              <p className="text-text-dim leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <section className="mt-40 py-24 bg-brand/5 rounded-[60px] text-center border border-brand/10">
          <h2 className="text-3xl font-bold mb-8">귀사도 혁신의 주인공이 될 수 있습니다</h2>
          <p className="text-text-dim mb-12 max-w-xl mx-auto">
            휴미즈의 전문가들과 함께 데이터 효율화의 첫걸음을 떼어보세요. 
            맞춤형 상담을 통해 최적의 아키텍처를 제안해 드립니다.
          </p>
          <button className="btn-primary px-12 py-4 font-bold">도입 문의하기</button>
        </section>
      </div>
    </div>
  );
}
