import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface AIService {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  serviceUrl: string;
}

export default function AIServices() {
  const [services, setServices] = useState<AIService[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/ai-services.json')
      .then(res => res.json())
      .then(data => {
        setServices(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load AI services:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="pt-32 pb-20 bg-primary min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* 히어로 섹션 */}
        <header className="mb-20 text-center max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-white"
          >
            AI Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-white/60 font-medium"
          >
            Humease가 만드는 AI 서비스를 만나보세요
          </motion.p>
        </header>

        {/* 서비스 카드 그리드 */}
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-4 border-brand border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white/2 border border-white/5 rounded-[32px] overflow-hidden hover:border-brand/30 transition-all flex flex-col h-full"
              >
                {/* 썸네일 */}
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.thumbnail} 
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* 콘텐츠 */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-brand transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-8 flex-grow">
                    {service.description}
                  </p>
                  
                  <a 
                    href={service.serviceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand text-white text-sm font-bold rounded-xl transition-all hover:bg-brand-light transform active:scale-95 group/btn"
                  >
                    바로가기 <ExternalLink size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* 하단 CTA 섹션 */}
        <section className="py-20 bg-brand/5 rounded-[48px] text-center border border-brand/10">
          <h2 className="text-3xl font-bold text-white mb-8">원하는 AI 서비스가 없으신가요?</h2>
          <Link to="/contact">
            <button className="px-10 py-4 bg-brand text-white font-bold rounded-2xl hover:scale-105 transition-all shadow-xl shadow-brand/20 active:scale-95 flex items-center gap-2 mx-auto">
              상담 신청하기 <ArrowRight size={20} />
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
}
