import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Domains from './components/Domains';
import PostersGallery from './components/PostersGallery';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import RecruitmentModal from './components/RecruitmentModal';
import AdminDrawer from './components/AdminDrawer';
import { Sparkles } from 'lucide-react';

export default function App() {
  const [isRecruitmentOpen, setIsRecruitmentOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [preselectedDomain, setPreselectedDomain] = useState(null);
  const [appCount, setAppCount] = useState(0);

  const updateCount = () => {
    try {
      const existing = JSON.parse(localStorage.getItem('aura_recruitment_applications') || '[]');
      setAppCount(existing.length);
    } catch {
      setAppCount(0);
    }
  };

  useEffect(() => {
    updateCount();

    // Hotkey: Ctrl+Shift+A or Alt+A to toggle admin reviewer drawer
    const handleKeyDown = (e) => {
      if ((e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'a') || (e.altKey && e.key.toLowerCase() === 'a')) {
        e.preventDefault();
        setIsAdminOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOpenRecruitment = (domainId = null) => {
    setPreselectedDomain(domainId);
    setIsRecruitmentOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Navigation */}
      <Navbar
        onOpenRecruitment={() => handleOpenRecruitment()}
        onOpenAdmin={() => setIsAdminOpen(true)}
        applicationCount={appCount}
      />

      {/* Main Content */}
      <main className="flex-grow">
        <Hero onOpenRecruitment={() => handleOpenRecruitment()} />
        <About onOpenRecruitment={() => handleOpenRecruitment()} />
        <Domains onApplyToDomain={(domainId) => handleOpenRecruitment(domainId)} />
        <PostersGallery />
        <FAQ />
      </main>

      {/* Footer */}
      <Footer onOpenRecruitment={() => handleOpenRecruitment()} />

      {/* Floating Apply Button (Mobile / Global) */}
      <div className="fixed bottom-6 right-6 z-30 sm:hidden">
        <button
          onClick={() => handleOpenRecruitment()}
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-slate-950 font-bold text-xs shadow-2xl shadow-cyan-500/50 active:scale-95 transition"
        >
          <Sparkles className="w-4 h-4 text-slate-950" />
          <span>Apply Now</span>
        </button>
      </div>

      {/* Recruitment Modal */}
      <RecruitmentModal
        isOpen={isRecruitmentOpen}
        onClose={() => setIsRecruitmentOpen(false)}
        preselectedDomain={preselectedDomain}
        onApplicationSubmitted={updateCount}
      />

      {/* Admin Reviewer Drawer */}
      <AdminDrawer
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        onRefreshCount={(count) => setAppCount(count)}
      />
    </div>
  );
}
