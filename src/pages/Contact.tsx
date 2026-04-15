import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Loader2, ArrowRight, Mail, Phone, Calendar } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    company_name: '',
    manager_name: '',
    phone: '',
    email: '',
    interested_services: [] as string[],
    message: ''
  });

  const services = [
    "e-Discovery 체계 구축",
    "개인정보·민감정보 모니터링",
    "Exchange 아카이빙",
    "AI 컨설팅 (홈페이지/웹서비스/AI 챗봇/MVP 등)",
    "기타"
  ];

  const handleCheckboxChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      interested_services: prev.interested_services.includes(service)
        ? prev.interested_services.filter(s => s !== service)
        : [...prev.interested_services, service]
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Supabase에 데이터 저장
      const { error } = await supabase
        .from('inquiries')
        .insert([
          {
            ...formData,
            interested_services: formData.interested_services.join(', '),
            created_at: new Date().toISOString()
          }
        ]);

      if (error) throw error;
      
      // FormSubmit을 이용한 메일 발송 알림
      await fetch("https://formsubmit.co/ajax/contact@humease.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            "회사명": formData.company_name,
            "담당자명": formData.manager_name,
            "연락처": formData.phone,
            "이메일": formData.email,
            "관심서비스": formData.interested_services.join(', '),
            "요청사항": formData.message,
            "_subject": `[휴미즈] 새로운 상담 신청이 접수되었습니다 (${formData.company_name})`
        })
      });

      setIsSubmitting(false);
      setSubmitted(true);
    } catch (error: any) {
      console.error('Submission failed:', error);
      alert('상담 신청 처리 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 px-6 bg-primary">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-2xl p-12 bg-white/[0.02] border border-white/5 rounded-[40px] shadow-2xl backdrop-blur-xl"
        >
          <div className="w-24 h-24 bg-brand/20 text-brand rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-brand/20">
            <CheckCircle2 size={48} />
          </div>
          <h1 className="text-4xl font-black text-white mb-6">상담 신청이 완료되었습니다.</h1>
          <p className="text-white/60 text-lg leading-relaxed mb-10">
            접수해주신 내용은 담당자가 신속히 검토하고 있습니다. <br />
            영업일 기준 1일 이내에 적어주신 연락처로 연락드리겠습니다.
          </p>
          <Link 
            to="/"
            className="inline-block px-10 py-4 bg-brand text-white font-bold rounded-2xl hover:bg-brand-light transition-all shadow-xl shadow-brand/20"
          >
            닫기
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 md:pt-40 pb-16 md:pb-32 bg-primary overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 blur-[120px] rounded-full -mr-64 -mt-64 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter mb-6 md:mb-8 leading-tight">
                상담 신청
              </h1>
              <p className="text-xl text-white/60 leading-relaxed mb-12 max-w-xl font-medium">
                데이터 컴플라이언스 대응, e-Discovery 체계 구축, 또는 AI 컨설팅까지. 
                어떤 과제이든 먼저 편하게 상담해 보세요. 전문가가 최적의 방향을 제안합니다.
              </p>

              <div className="space-y-12">
                <div className="flex gap-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand shrink-0 group-hover:bg-brand/10 transition-colors">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-white/30 uppercase tracking-[0.4em] mb-2">Direct Email</h4>
                    <p className="text-2xl font-bold text-white">contact@humease.com</p>
                  </div>
                </div>
                
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/[0.02] p-8 md:p-12 rounded-[40px] border border-white/5 shadow-2xl backdrop-blur-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[11px] font-black text-white/30 uppercase tracking-[0.3em] ml-2">회사명 *</label>
                  <input 
                    required 
                    name="company_name"
                    value={formData.company_name}
                    onChange={handleInputChange}
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-brand/50 focus:bg-white/10 transition-all outline-none text-white font-medium"
                    placeholder="회사명"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[11px] font-black text-white/30 uppercase tracking-[0.3em] ml-2">담당자명 *</label>
                  <input 
                    required 
                    name="manager_name"
                    value={formData.manager_name}
                    onChange={handleInputChange}
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-brand/50 focus:bg-white/10 transition-all outline-none text-white font-medium"
                    placeholder="성함 및 직함"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[11px] font-black text-white/30 uppercase tracking-[0.3em] ml-2">연락처 *</label>
                  <input 
                    required 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    type="tel" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-brand/50 focus:bg-white/10 transition-all outline-none text-white font-medium"
                    placeholder="010-0000-0000"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[11px] font-black text-white/30 uppercase tracking-[0.3em] ml-2">이메일 *</label>
                  <input 
                    required 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-brand/50 focus:bg-white/10 transition-all outline-none text-white font-medium"
                    placeholder="이메일 주소 형식"
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <label className="text-[11px] font-black text-white/30 uppercase tracking-[0.3em] ml-2">관심 서비스 (복수 선택 가능)</label>
                <div className="grid grid-cols-1 gap-3 ml-2">
                  {services.map((service) => (
                    <label key={service} className="flex items-center gap-3 cursor-pointer group">
                      <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
                        formData.interested_services.includes(service) 
                        ? 'bg-brand border-brand' 
                        : 'bg-white/5 border-white/10 group-hover:border-white/30'
                      }`}>
                        {formData.interested_services.includes(service) && <CheckCircle2 size={16} className="text-white" />}
                      </div>
                      <input 
                        type="checkbox"
                        className="hidden"
                        checked={formData.interested_services.includes(service)}
                        onChange={() => handleCheckboxChange(service)}
                      />
                      <span className={`text-sm font-medium transition-colors ${
                        formData.interested_services.includes(service) ? 'text-white' : 'text-white/40 group-hover:text-white/60'
                      }`}>
                        {service}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-[11px] font-black text-white/30 uppercase tracking-[0.3em] ml-2">요청 사항 (선택)</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4} 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-brand/50 focus:bg-white/10 transition-all outline-none text-white font-medium resize-none shadow-inner"
                  placeholder="구체적인 고민이나 해결하고 싶은 과제에 대해 자유롭게 적어주세요."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-6 bg-brand text-white text-xl font-black tracking-tight rounded-2xl flex items-center justify-center gap-3 hover:bg-brand-light transition-all transform hover:-translate-y-1 shadow-2xl shadow-brand/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={24} />
                    상담 신청 전송 중...
                  </>
                ) : (
                  <>상담 신청하기 <ArrowRight size={24} /></>
                )}
              </button>
              
              <p className="text-[11px] text-white/20 text-center font-bold uppercase tracking-widest">
                By submitting, you agree to our Privacy Policy.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
