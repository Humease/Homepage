import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import JTBDDetail from './pages/JTBDDetail';
import Contact from './pages/Contact';
import About from './pages/About';
import Solutions from './pages/Solutions';
import Admin from './pages/Admin';

import { logEvent } from './lib/supabase';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // 해시가 있으면 해당 요소로 부드럽게 스크롤 (메뉴 닫힘 애니메이션 후)
      setTimeout(() => {
        const el = document.getElementById(hash.replace('#', ''));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 300);
    } else {
      // 해시 없으면 즉시 맨 위로
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

// 클릭 추적 컴포넌트
function ClickTracker() {
  const location = useLocation();

  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      // 관리자 페이지(/admin)에서의 클릭은 기록하지 않음
      if (location.pathname.startsWith('/admin')) return;

      const target = e.target as HTMLElement;
      
      // 클릭된 요소와 그 부모 요소 중 텍스트가 있는 가장 가까운 요소를 찾음
      const interactiveElement = target.closest('button, a, div, span') as HTMLElement;
      
      if (interactiveElement) {
        // 텍스트 추출 시도 (중첩된 요소 고려)
        let extractedText = (
          interactiveElement.innerText?.trim() || 
          interactiveElement.getAttribute('aria-label') || 
          target.getAttribute('alt') ||
          ''
        );

        // 텍스트가 전혀 없는 경우에만 태그/클래스 분석
        if (!extractedText) {
          const className = String(interactiveElement.className || '');
          const id = interactiveElement.id || '';
          
          if (id) {
            extractedText = `[ID] ${id}`;
          } else if (className.includes('backdrop')) {
            extractedText = '[닫기] 배경 클릭';
          } else if (interactiveElement.closest('nav')) {
            extractedText = '[메뉴] 영역 클릭';
          } else if (className.includes('inset-0')) {
            // 부모 섹션 찾기
            const section = interactiveElement.closest('section');
            const sectionTitle = section?.querySelector('h1, h2')?.textContent?.trim() || '';
            
            if (sectionTitle.includes('데이터는 안전하게')) {
              extractedText = '[메인] 배경 클릭';
            } else {
              extractedText = `[배경] ${sectionTitle.slice(0, 5) || '영역'} 클릭`;
            }
          } else {
            extractedText = `[${interactiveElement.tagName}] ${className.split(' ')[0]}`;
          }
        }

        // 특정 패턴 필터링 (메뉴 항목이 뭉친 경우 등)
        if (extractedText.includes('홈') && extractedText.includes('회사 소개')) {
          extractedText = '[메뉴] 영역 클릭';
        }

        // 길이 제한
        extractedText = extractedText.slice(0, 50);

        // '닫기' 버튼 등 불필요한 로그는 제외
        if (extractedText === '닫기' || extractedText.includes('닫기')) return;

        logEvent({
          event_type: 'click',
          element_id: interactiveElement.id || undefined,
          element_text: extractedText,
          metadata: {
            tagName: interactiveElement.tagName,
            className: String(interactiveElement.className),
            path: location.pathname
          }
        });
      }
    };

    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <ClickTracker />
      <div className="min-h-screen flex flex-col bg-primary text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/services/:id" element={<JTBDDetail />} />
            <Route path="/jtbd/:id" element={<Navigate to="/services/:id" replace />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
