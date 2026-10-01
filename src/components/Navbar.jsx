import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ShieldAlert, ArrowRight } from 'lucide-react';

export default function Navbar({ onOpenRecruitment, onOpenAdmin, applicationCount = 0 }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07090e]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-lg shadow-cyan-500/20">
            <div className="w-full h-full bg-[#07090e] rounded-[10px] flex items-center justify-center font-bold text-cyan-400 text-lg">
              <span className="font-display tracking-tight">AU</span>
            </div>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
            </span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-xl tracking-wider text-white group-hover:text-cyan-400 transition-colors">
                AURA
              </span>
              <span className="text-[10px] font-mono tracking-widest px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 uppercase font-semibold">
                REC 2026
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">Tech & Creative Guild</p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#about" className="hover:text-cyan-400 transition-colors">
            About Club
          </a>
          <a href="#domains" className="hover:text-cyan-400 transition-colors">
            All Domains
          </a>
          <a href="#roadmap" className="hover:text-cyan-400 transition-colors">
            Process
          </a>
          <a href="#posters" className="hover:text-cyan-400 transition-colors">
            Posters
          </a>
          <a href="#faq" className="hover:text-cyan-400 transition-colors">
            FAQ
          </a>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenAdmin}
            title="Review Applications (Admin Drawer)"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
          >
            <ShieldAlert className="w-3.5 h-3.5 text-cyan-400" />
            <span>Applicants</span>
            {applicationCount > 0 && (
              <span className="bg-cyan-500/20 text-cyan-300 text-[10px] px-1.5 py-0.2 rounded-full font-mono font-bold">
                {applicationCount}
              </span>
            )}
          </button>

          <button
            onClick={() => onOpenRecruitment()}
            className="relative group overflow-hidden rounded-xl p-[1px] font-medium text-sm transition-transform duration-300 hover:scale-105 active:scale-95 shadow-md shadow-cyan-500/25"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 transition-all duration-300 group-hover:opacity-90"></span>
            <span className="relative flex items-center gap-2 px-5 py-2 rounded-[11px] bg-[#090d16] text-white font-semibold transition-colors duration-200 group-hover:bg-[#090d16]/70">
              <Sparkles className="w-4 h-4 text-cyan-300 group-hover:rotate-12 transition-transform" />
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4 text-cyan-300 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => onOpenRecruitment()}
            className="text-xs px-3 py-1.5 rounded-lg bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition"
          >
            Apply
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0e18]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 space-y-4">
          <div className="flex flex-col space-y-3 text-sm font-medium text-slate-200">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 px-2 rounded hover:bg-white/5"
            >
              About Club
            </a>
            <a
              href="#domains"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 px-2 rounded hover:bg-white/5"
            >
              All Domains
            </a>
            <a
              href="#roadmap"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 px-2 rounded hover:bg-white/5"
            >
              Recruitment Process
            </a>
            <a
              href="#posters"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 px-2 rounded hover:bg-white/5"
            >
              Recruitment Posters
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 px-2 rounded hover:bg-white/5"
            >
              FAQ
            </a>
          </div>

          <div className="pt-2 flex flex-col gap-2 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRecruitment();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25"
            >
              <Sparkles className="w-4 h-4" />
              Apply for Recruitment 2026
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmin();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-white/5 text-slate-300 font-medium text-xs border border-white/10"
            >
              <ShieldAlert className="w-3.5 h-3.5 text-cyan-400" />
              Applicant Review Dashboard ({applicationCount})
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
