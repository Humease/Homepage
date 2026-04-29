import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsServiceOpen(false);
  }, [location]);

  const services = [
    { name: "e-Discovery", path: "/services/e-discovery" },
    { name: "Internal Control", path: "/services/internal-control" },
    { name: "Exchange Archive", path: "/services/exchange-archive" },
    { name: "AI Consulting", path: "/services/ai-consulting" },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary/80 backdrop-blur-xl border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center group">
          <Logo className="group-hover:scale-105 transition-transform" />
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          <Link 
            to="/" 
            className={`text-sm font-bold transition-all hover:text-brand ${
              location.pathname === '/' ? 'text-brand underline underline-offset-8' : 'text-white/70'
            }`}
          >
            홈
          </Link>
          <Link 
            to="/about" 
            className={`text-sm font-bold transition-all hover:text-brand ${
              location.pathname === '/about' ? 'text-brand underline underline-offset-8' : 'text-white/70'
            }`}
          >
            회사 소개
          </Link>

          <Link 
            to="/solutions" 
            className={`text-sm font-bold transition-all hover:text-brand ${
              location.pathname === '/solutions' ? 'text-brand underline underline-offset-8' : 'text-white/70'
            }`}
          >
            솔루션
          </Link>
          
          <a 
            href="https://blog.humease.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-bold text-white/70 transition-all hover:text-brand"
          >
            블로그
          </a>
          
          <div 
            className="relative"
            onMouseEnter={() => setIsServiceOpen(true)}
            onMouseLeave={() => setIsServiceOpen(false)}
          >
            <button 
              className={`flex items-center gap-1 text-sm font-bold transition-all hover:text-brand ${
                location.pathname.startsWith('/services') ? 'text-brand' : 'text-white/70'
              }`}
            >
              서비스 <ChevronDown size={14} className={`transition-transform ${isServiceOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <AnimatePresence>
              {isServiceOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 bg-primary/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl p-2 z-50"
                >
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all hover:bg-white/5 hover:text-brand ${
                        location.pathname === service.path ? 'bg-white/5 text-brand' : 'text-white/70'
                      }`}
                    >
                      {service.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <Link 
            to="/contact" 
            className="px-6 py-2.5 bg-brand text-white text-sm font-bold rounded-xl transition-all hover:scale-105 shadow-lg shadow-brand/20 active:scale-95"
          >
            상담 신청
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-primary/98 backdrop-blur-3xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-10 flex flex-col gap-8">
              <Link 
                to="/"
                onClick={() => { setIsOpen(false); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                className="text-2xl font-bold text-white hover:text-brand"
              >
                홈
              </Link>
              <Link 
                to="/about"
                onClick={() => { setIsOpen(false); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                className="text-2xl font-bold text-white hover:text-brand"
              >
                회사 소개
              </Link>

              <Link 
                to="/solutions"
                onClick={() => { setIsOpen(false); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                className="text-2xl font-bold text-white hover:text-brand"
              >
                솔루션
              </Link>

              <a 
                href="https://blog.humease.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold text-white hover:text-brand"
              >
                블로그
              </a>
              
              <div className="flex flex-col gap-4">
                <div className="text-xs font-black text-white/30 uppercase tracking-widest">Services</div>
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    onClick={() => { setIsOpen(false); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                    className="text-xl font-bold text-white hover:text-brand pl-2 border-l-2 border-white/5 hover:border-brand transition-all"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              
              <Link 
                to="/contact"
                onClick={() => { setIsOpen(false); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                className="w-full py-4 bg-brand text-white text-center font-black rounded-2xl shadow-xl shadow-brand/20 text-lg"
              >
                상담 신청
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
