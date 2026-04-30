import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Lock } from 'lucide-react';

export default function Footer() {
  const services = [
    { name: "e-Discovery", path: "/consulting/e-discovery" },
    { name: "Internal Control", path: "/consulting/internal-control" },
    { name: "Exchange Archive", path: "/consulting/exchange-archive" },
    { name: "AI Transformation (AX)", path: "/consulting/ai-transformation" },
  ];

  return (
    <footer className="bg-primary pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          {/* Left: Company Information */}
          <div className="flex flex-col gap-6">
            <div className="space-y-4">
              <p className="text-white text-lg font-bold">주식회사 휴미즈</p>
              <p className="text-white/50 text-sm leading-relaxed">
                기업의 데이터를 전략적 자산으로 전환하고 <br />
                기술적 문제를 전문가와 함께 해결합니다.
              </p>
            </div>
            <div className="text-brand font-medium text-lg">
              contact@humease.com
            </div>
            <Link to="/" className="mt-4 transition-transform hover:scale-105 origin-left">
              <Logo />
            </Link>
          </div>
          
          {/* Center: Services */}
          <div className="flex flex-col gap-8">
            <h4 className="text-xs font-black text-white/30 uppercase tracking-[0.3em]">Consulting</h4>
            <ul className="grid grid-cols-1 gap-4">
              {services.map((service) => (
                <li key={service.path}>
                  <Link 
                    to={service.path} 
                    className="text-white/60 hover:text-brand transition-all font-medium"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Quick Links */}
          <div className="flex flex-col gap-8">
            <h4 className="text-xs font-black text-white/30 uppercase tracking-[0.3em]">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link to="/about" className="text-white/60 hover:text-brand transition-all font-medium">회사 소개</Link>
              </li>
              <li>
                <Link to="/solutions" className="text-white/60 hover:text-brand transition-all font-medium">솔루션</Link>
              </li>
              <li>
                <a 
                  href="https://blog.humease.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-brand transition-all font-medium"
                >
                  블로그
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-white/60 hover:text-brand transition-all font-medium">상담 신청</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-white/20 font-medium">
            Copyright © 2026 Humease. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs font-bold text-white/20 uppercase tracking-widest items-center">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <Link to="/admin" className="opacity-30 hover:opacity-100 transition-all ml-4 text-white/30 hover:text-white">
              <Lock size={14} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
