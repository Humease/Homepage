import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Lock, 
  LayoutDashboard, 
  MousePointer2, 
  MessageSquare, 
  LogOut, 
  ChevronRight, 
  Calendar,
  Building2,
  User as UserIcon,
  Mail,
  Phone,
  ArrowUpDown
} from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'logs' | 'inquiries'>('logs');
  const [logSortOrder, setLogSortOrder] = useState<'recent' | 'popular'>('popular');
  const [logPage, setLogPage] = useState(1);
  const LOG_PAGE_SIZE = 10;
  const [logDateFilter, setLogDateFilter] = useState<'week' | 'month' | 'custom'>('week');
  const [customStart, setCustomStart] = useState('');
  const [customEnd, setCustomEnd] = useState('');
  const [chartMode, setChartMode] = useState(true);
  const [loading, setLoading] = useState(false);
  
  // 데이터 상태
  const [logs, setLogs] = useState<any[]>([]);
  const [inquiries, setInquiries] = useState<any[]>([]);

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated, activeTab]);

  const checkUser = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (session) setIsAuthenticated(true);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      alert('로그인 실패: ' + error.message);
    } else {
      setIsAuthenticated(true);
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsAuthenticated(false);
  };

  const fetchData = async () => {
    setLoading(true);
    if (activeTab === 'logs') {
      const { data } = await supabase
        .from('view_logs')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(2000);
      setLogs(data || []);
    } else {
      const { data } = await supabase
        .from('inquiries')
        .select('*')
        .order('created_at', { ascending: false });
      setInquiries(data || []);
    }
    setLoading(false);
  };

  // 날짜 필터 적용
  const getFilteredLogs = () => {
    const now = new Date();
    return logs.filter(log => {
      const created = new Date(log.created_at);
      if (logDateFilter === 'week') {
        const weekAgo = new Date(now);
        weekAgo.setDate(now.getDate() - 7);
        return created >= weekAgo;
      } else if (logDateFilter === 'month') {
        const monthAgo = new Date(now);
        monthAgo.setMonth(now.getMonth() - 1);
        return created >= monthAgo;
      } else if (logDateFilter === 'custom') {
        const start = customStart ? new Date(customStart) : null;
        const end = customEnd ? new Date(customEnd + 'T23:59:59') : null;
        if (start && created < start) return false;
        if (end && created > end) return false;
        return true;
      }
      return true;
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-40 pb-20 px-6 bg-primary flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md bg-white/[0.02] border border-white/10 rounded-[40px] p-10 backdrop-blur-2xl shadow-2xl"
        >
          <div className="w-20 h-20 bg-brand/20 text-brand rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-brand/10">
            <Lock size={36} />
          </div>
          <h1 className="text-3xl font-black text-white text-center mb-10 tracking-tight text-brand">관리자 페이지</h1>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[11px] font-black text-white/30 uppercase tracking-[0.3em] ml-2">ID</label>
              <input 
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-brand/50 focus:bg-white/10 transition-all outline-none text-white"
                placeholder=""
              />
            </div>
            <div className="space-y-2">
              <label className="text-[11px] font-black text-white/30 uppercase tracking-[0.3em] ml-2">Password</label>
              <input 
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-brand/50 focus:bg-white/10 transition-all outline-none text-white"
                placeholder=""
              />
            </div>
            <button 
              type="submit"
              disabled={loading}
              className="w-full py-5 bg-brand text-white font-bold rounded-2xl hover:bg-brand-light transition-all shadow-xl shadow-brand/20 disabled:opacity-50"
            >
              {loading ? '로그인 중...' : '로그인'}
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#020617] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* 헤더 섹션 */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center shadow-lg shadow-brand/20">
                <LayoutDashboard size={20} className="text-white" />
              </div>
              <h1 className="text-3xl font-black tracking-tight">Admin Dashboard</h1>
            </div>
            <p className="text-white/40 font-medium">휴미즈 비즈니스 인사이트 및 상담 신청 현황</p>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all text-white/60 hover:text-white font-bold text-sm"
          >
            <LogOut size={16} /> 로그아웃
          </button>
        </div>

        {/* 탭 네비게이션 */}
        <div className="flex gap-4 mb-10 p-1.5 bg-white/5 rounded-2xl w-fit border border-white/5">
          <button 
            onClick={() => setActiveTab('inquiries')}
            className={`px-8 py-3 rounded-xl font-bold flex items-center gap-2 transition-all ${
              activeTab === 'inquiries' ? 'bg-brand text-white shadow-lg shadow-brand/20' : 'text-white/40 hover:text-white/70'
            }`}
          >
            <MessageSquare size={18} /> 상담 신청 내역
            {inquiries.length > 0 && <span className="ml-2 bg-white/20 px-2 py-0.5 rounded-full text-[10px]">{inquiries.length}</span>}
          </button>
          <button 
            onClick={() => setActiveTab('logs')}
            className={`px-8 py-3 rounded-xl font-bold flex items-center gap-2 transition-all ${
              activeTab === 'logs' ? 'bg-brand text-white shadow-lg shadow-brand/20' : 'text-white/40 hover:text-white/70'
            }`}
          >
            <MousePointer2 size={18} /> 실시간 클릭 로그
          </button>
        </div>

        {/* 로그 서브 필터 (로그 탭일 때만 표시) */}
        {activeTab === 'logs' && (
          <div className="flex flex-wrap items-center gap-4 mb-6">
            {/* 정렬 */}
            <div className="flex gap-2 p-1 bg-white/5 rounded-xl border border-white/5">
              <button 
                onClick={() => { setLogSortOrder('recent'); setLogPage(1); }}
                className={`text-xs font-black uppercase tracking-widest px-4 py-2 rounded-lg transition-all ${
                  logSortOrder === 'recent' ? 'bg-white/10 text-brand' : 'text-white/20 hover:text-white/40'
                }`}
              >
                최신순
              </button>
              <button 
                onClick={() => { setLogSortOrder('popular'); setLogPage(1); }}
                className={`text-xs font-black uppercase tracking-widest px-4 py-2 rounded-lg transition-all ${
                  logSortOrder === 'popular' ? 'bg-white/10 text-brand' : 'text-white/20 hover:text-white/40'
                }`}
              >
                인기순
              </button>
            </div>

            {/* 차트 보기 토글 (인기순일 때만) */}
            {logSortOrder === 'popular' && (
              <div className="flex gap-2 p-1 bg-white/5 rounded-xl border border-white/5">
                <button
                  onClick={() => setChartMode(false)}
                  className={`text-xs font-black uppercase tracking-widest px-4 py-2 rounded-lg transition-all ${
                    !chartMode ? 'bg-white/10 text-brand' : 'text-white/20 hover:text-white/40'
                  }`}
                >
                  목록
                </button>
                <button
                  onClick={() => setChartMode(true)}
                  className={`text-xs font-black uppercase tracking-widest px-4 py-2 rounded-lg transition-all ${
                    chartMode ? 'bg-white/10 text-brand' : 'text-white/20 hover:text-white/40'
                  }`}
                >
                  📊 차트
                </button>
              </div>
            )}

            {/* 기간 필터 */}
            <div className="flex gap-2 p-1 bg-white/5 rounded-xl border border-white/5">
              {(['week', 'month', 'custom'] as const).map(f => (
                <button
                  key={f}
                  onClick={() => { setLogDateFilter(f); setLogPage(1); }}
                  className={`text-xs font-black uppercase tracking-widest px-4 py-2 rounded-lg transition-all ${
                    logDateFilter === f ? 'bg-white/10 text-brand' : 'text-white/20 hover:text-white/40'
                  }`}
                >
                  {f === 'week' ? '최근 일주일' : f === 'month' ? '최근 한 달' : '특정 기간'}
                </button>
              ))}
            </div>

            {/* 특정 기간 날짜 입력 */}
            {logDateFilter === 'custom' && (
              <div className="flex items-center gap-2">
                <input
                  type="date"
                  value={customStart}
                  onChange={e => { setCustomStart(e.target.value); setLogPage(1); }}
                  className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm text-white/70 outline-none focus:border-brand/50 transition-all"
                />
                <span className="text-white/30 text-sm font-bold">~</span>
                <input
                  type="date"
                  value={customEnd}
                  onChange={e => { setCustomEnd(e.target.value); setLogPage(1); }}
                  className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm text-white/70 outline-none focus:border-brand/50 transition-all"
                />
              </div>
            )}
          </div>
        )}

        {/* 인기순 차트 뷰 */}
        {activeTab === 'logs' && logSortOrder === 'popular' && chartMode && (() => {
          const filtered = getFilteredLogs();
          const counts: { [key: string]: number } = {};
          filtered.forEach(log => {
            const key = log.element_text || log.element_id || 'Unknown';
            counts[key] = (counts[key] || 0) + 1;
          });
          const top10 = Object.entries(counts)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 10);
          const maxCount = top10[0]?.[1] || 1;

          return (
            <div className="bg-white/[0.02] border border-white/5 rounded-[40px] p-8 md:p-12 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h3 className="text-xl font-black text-white mb-1">Top 10 클릭 요소</h3>
                  <p className="text-white/30 text-sm">
                    {logDateFilter === 'week' ? '최근 일주일' : logDateFilter === 'month' ? '최근 한 달' : '선택 기간'} · 총 {filtered.length.toLocaleString()}건
                  </p>
                </div>
                <div className="text-5xl font-black text-brand/20">📊</div>
              </div>

              {top10.length === 0 ? (
                <p className="text-center text-white/20 py-20 font-bold">해당 기간에 데이터가 없습니다.</p>
              ) : (
                <div className="space-y-4">
                  {top10.map(([label, count], idx) => {
                    const pct = Math.round((count / maxCount) * 100);
                    const colors = [
                      'from-brand to-blue-400',
                      'from-blue-400 to-cyan-400',
                      'from-cyan-400 to-teal-400',
                      'from-teal-400 to-emerald-400',
                      'from-emerald-400 to-green-400',
                      'from-green-400 to-lime-400',
                      'from-lime-400 to-yellow-400',
                      'from-yellow-400 to-orange-400',
                      'from-orange-400 to-red-400',
                      'from-red-400 to-pink-400',
                    ];
                    return (
                      <div key={idx} className="group flex items-center gap-4">
                        {/* 순위 */}
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black shrink-0 ${
                          idx === 0 ? 'bg-brand text-white shadow-lg shadow-brand/30' :
                          idx === 1 ? 'bg-white/20 text-white' :
                          idx === 2 ? 'bg-white/10 text-white/70' : 'bg-white/5 text-white/30'
                        }`}>
                          {idx + 1}
                        </div>

                        {/* 레이블 */}
                        <div className="w-48 shrink-0">
                          <p className="text-sm font-bold text-white/80 group-hover:text-white transition-colors truncate"
                             title={label}>
                            {label}
                          </p>
                        </div>

                        {/* 바 */}
                        <div className="flex-grow h-8 bg-white/5 rounded-xl overflow-hidden relative">
                          <div
                            className={`h-full bg-gradient-to-r ${colors[idx]} rounded-xl transition-all duration-700`}
                            style={{ width: `${pct}%` }}
                          />
                          <div className="absolute inset-0 flex items-center px-3">
                            {pct > 20 && (
                              <span className="text-xs font-black text-white/80">{count.toLocaleString()}회</span>
                            )}
                          </div>
                        </div>

                        {/* 횟수 */}
                        <div className="w-20 text-right shrink-0">
                          <span className="text-lg font-black text-white">{count.toLocaleString()}</span>
                          <span className="text-white/30 text-xs ml-1">회</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })()}

        {/* 메인 콘텐츠 (테이블) 영역 — 차트 모드가 아닐 때만 */}
        {!(activeTab === 'logs' && logSortOrder === 'popular' && chartMode) && (
        <div className="bg-white/[0.02] border border-white/5 rounded-[40px] overflow-hidden shadow-2xl backdrop-blur-xl min-h-[600px]">
          {loading ? (
            <div className="flex items-center justify-center h-[600px]">
              <div className="animate-spin w-12 h-12 border-4 border-brand border-t-transparent rounded-full"></div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              {activeTab === 'inquiries' ? (
                // ... 상담 신청 내역 테이블 (생략 유지)
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/5 bg-white/[0.01]">
                      <th className="p-6 text-xs font-black text-white/30 uppercase tracking-widest leading-none">신청 일시</th>
                      <th className="p-6 text-xs font-black text-white/30 uppercase tracking-widest leading-none">기업 정보</th>
                      <th className="p-6 text-xs font-black text-white/30 uppercase tracking-widest leading-none">상세 연락처</th>
                      <th className="p-6 text-xs font-black text-white/30 uppercase tracking-widest leading-none w-48">관심 서비스</th>
                      <th className="p-6 text-xs font-black text-white/30 uppercase tracking-widest leading-none min-w-[360px]">요청 메시지</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {inquiries.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="p-20 text-center text-white/20 font-bold">접수된 상담 신청이 없습니다.</td>
                      </tr>
                    ) : (
                      inquiries.map((item) => (
                        <tr key={item.id} className="hover:bg-white/[0.02] transition-colors group">
                          <td className="p-6 whitespace-nowrap">
                            <div className="flex flex-col">
                              <span className="text-white font-bold">{new Date(item.created_at).toLocaleDateString()}</span>
                              <span className="text-white/30 text-xs">{new Date(item.created_at).toLocaleTimeString()}</span>
                            </div>
                          </td>
                          <td className="p-6">
                            <div className="flex flex-col">
                              <div className="flex items-center gap-2 text-brand font-black mb-1">
                                <Building2 size={14} /> {item.company_name}
                              </div>
                              <div className="flex items-center gap-2 text-white/60 text-sm">
                                <UserIcon size={14} /> {item.manager_name}
                              </div>
                            </div>
                          </td>
                          <td className="p-6">
                            <div className="flex flex-col gap-1 text-sm">
                              <div className="flex items-center gap-2 text-white/80 group-hover:text-white">
                                <Mail size={14} className="text-white/30" /> {item.email}
                              </div>
                              <div className="flex items-center gap-2 text-white/80 group-hover:text-white">
                                <Phone size={14} className="text-white/30" /> {item.phone}
                              </div>
                            </div>
                          </td>
                          <td className="p-6 w-48">
                            <div className="flex flex-wrap gap-1.5">
                              {item.interested_services.split(',').map((s: string, idx: number) => (
                                <span key={idx} className="px-2 py-0.5 bg-white/5 border border-white/10 rounded-full text-[9px] font-bold text-white/60 group-hover:text-white/90 whitespace-nowrap">
                                  {s.trim()}
                                </span>
                              ))}
                            </div>
                          </td>
                          <td className="p-6 min-w-[360px]">
                            <p className="text-sm text-white/60 group-hover:text-white/90 transition-all font-medium leading-relaxed">
                              {item.message || '-'}
                            </p>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              ) : (
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/5 bg-white/[0.01]">
                      {logSortOrder === 'recent' ? (
                        <>
                          <th className="p-6 text-xs font-black text-white/30 uppercase tracking-widest leading-none">시간</th>
                          <th className="p-6 text-xs font-black text-white/30 uppercase tracking-widest leading-none">구분</th>
                          <th className="p-6 text-xs font-black text-white/30 uppercase tracking-widest leading-none">텍스트/ID</th>
                          <th className="p-6 text-xs font-black text-white/30 uppercase tracking-widest leading-none">위치</th>
                          <th className="p-6 text-xs font-black text-white/30 uppercase tracking-widest leading-none">기기 정보</th>
                        </>
                      ) : (
                        <>
                          <th className="p-6 text-xs font-black text-white/30 uppercase tracking-widest leading-none">순위</th>
                          <th className="p-6 text-xs font-black text-white/30 uppercase tracking-widest leading-none">클릭 요소 (텍스트/ID)</th>
                          <th className="p-6 text-xs font-black text-white/30 uppercase tracking-widest leading-none w-32">클릭 횟수</th>
                          <th className="p-6 text-xs font-black text-white/30 uppercase tracking-widest leading-none">주요 위치</th>
                        </>
                      )}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {(() => {
                      const filtered = getFilteredLogs();
                      if (filtered.length === 0) return (
                        <tr><td colSpan={5} className="p-20 text-center text-white/20 font-bold">해당 기간에 수집된 로그가 없습니다.</td></tr>
                      );
                      if (logSortOrder === 'recent') {
                        return filtered.slice((logPage - 1) * LOG_PAGE_SIZE, logPage * LOG_PAGE_SIZE).map((log) => (
                          <tr key={log.id} className="hover:bg-white/[0.02] transition-colors group">
                            <td className="p-6 whitespace-nowrap text-sm text-white/30">
                              {new Date(log.created_at).toLocaleString()}
                            </td>
                            <td className="p-6">
                              <span className="px-3 py-1 bg-brand/10 text-brand text-[10px] font-black rounded-full border border-brand/20 uppercase">
                                {log.event_type}
                              </span>
                            </td>
                            <td className="p-6">
                              <div className="flex flex-col">
                                <span className="text-white font-bold line-clamp-1">{log.element_text || '-'}</span>
                                <span className="text-white/20 text-[10px] font-mono">{log.element_id || '-'}</span>
                              </div>
                            </td>
                            <td className="p-6 text-white/60 font-medium text-sm">{log.page_path}</td>
                            <td className="p-6 max-w-xs">
                              <p className="text-[10px] text-white/20 font-mono truncate hover:whitespace-normal transition-all">{log.user_agent}</p>
                            </td>
                          </tr>
                        ));
                      } else {
                        const counts: { [key: string]: any } = {};
                        filtered.forEach(log => {
                          const key = log.element_text || log.element_id || 'Unknown';
                          if (!counts[key]) counts[key] = { text: key, id: log.element_id, count: 0, path: log.page_path };
                          counts[key].count++;
                        });
                        return Object.values(counts).sort((a, b) => b.count - a.count).map((item, idx) => (
                          <tr key={idx} className="hover:bg-white/[0.02] transition-colors group">
                            <td className="p-6">
                              <span className={`w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-black ${
                                idx === 0 ? 'bg-brand text-white' : idx === 1 ? 'bg-white/20 text-white' : idx === 2 ? 'bg-white/10 text-white/60' : 'bg-white/5 text-white/30'
                              }`}>{idx + 1}</span>
                            </td>
                            <td className="p-6"><div className="flex flex-col text-sm"><span className="text-white font-bold">{item.text}</span>{item.id && <span className="text-white/20 text-[10px] font-mono">{item.id}</span>}</div></td>
                            <td className="p-6">
                              <div className="flex items-center gap-3">
                                <div className="flex-grow h-1.5 bg-white/5 rounded-full overflow-hidden max-w-[100px]">
                                  <div className="h-full bg-brand" style={{ width: `${Math.min(100, (item.count / filtered.length) * 500)}%` }}></div>
                                </div>
                                <span className="text-brand font-black text-lg">{item.count}</span>
                              </div>
                            </td>
                            <td className="p-6 text-white/40 text-xs font-medium italic">{item.path}</td>
                          </tr>
                        ));
                      }
                    })()}
                  </tbody>
                </table>
              )}
              {/* 페이지네이션 (로그 탭 + 최신순일 때만) */}
              {activeTab === 'logs' && logSortOrder === 'recent' && (() => {
                const filtered = getFilteredLogs();
                const totalPages = Math.ceil(filtered.length / LOG_PAGE_SIZE);
                if (totalPages <= 1) return null;
                return (
                  <div className="flex items-center justify-center gap-2 py-8 border-t border-white/5">
                    <button onClick={() => setLogPage(p => Math.max(1, p - 1))} disabled={logPage === 1}
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-bold text-white/50 hover:text-white hover:bg-white/10 transition-all disabled:opacity-30 disabled:cursor-not-allowed">
                      ← 이전
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                      <button key={page} onClick={() => setLogPage(page)}
                        className={`w-9 h-9 rounded-xl text-sm font-black transition-all ${
                          logPage === page ? 'bg-brand text-white shadow-lg shadow-brand/20' : 'bg-white/5 text-white/40 hover:text-white hover:bg-white/10'
                        }`}>{page}</button>
                    ))}
                    <button onClick={() => setLogPage(p => Math.min(totalPages, p + 1))} disabled={logPage === totalPages}
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-bold text-white/50 hover:text-white hover:bg-white/10 transition-all disabled:opacity-30 disabled:cursor-not-allowed">
                      다음 →
                    </button>
                  </div>
                );
              })()}
            </div>
          )}
        </div>
        )}
      </div>
    </div>
  );
}
