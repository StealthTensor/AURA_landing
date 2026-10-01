import React, { useState } from 'react';
import { 
  Code, Cpu, Shield, Palette, Video, CalendarCheck, Handshake, FileText, 
  Search, ArrowRight, Check, Sparkles, Filter, Users 
} from 'lucide-react';
import { DOMAINS, DOMAIN_CATEGORIES } from '../data/domainsData';

// Dynamic icon mapper
const ICON_MAP = {
  Code,
  Cpu,
  Shield,
  Palette,
  Video,
  CalendarCheck,
  Handshake,
  FileText
};

export default function Domains({ onApplyToDomain }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDomains = DOMAINS.filter((domain) => {
    const matchesCategory =
      selectedCategory === 'all' || domain.category === selectedCategory;
    const matchesSearch =
      domain.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      domain.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      domain.skills.some((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="domains" className="py-24 relative bg-[#07090e]">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-cyan-600/5 blur-[140px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-purple-600/5 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Filter className="w-3.5 h-3.5" />
            Specialized Wings
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white mb-4 tracking-tight">
            Explore All <span className="text-gradient-cyan">8 Domains</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Find your niche. Every wing operates with complete creative freedom, modern toolchains, and dedicated senior mentorship.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-[#0f1420]/80 border border-white/10 backdrop-blur-md">
            {DOMAIN_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search skill (e.g. React, PyTorch, Figma)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0f1420]/90 border border-white/10 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/50 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-slate-400 mb-6 px-1">
          <span>Showing {filteredDomains.length} domains</span>
          {searchQuery && (
            <span>Filtering by query: &ldquo;{searchQuery}&rdquo;</span>
          )}
        </div>

        {/* Domains Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDomains.map((domain) => {
            const Icon = ICON_MAP[domain.iconName] || Code;
            return (
              <div
                key={domain.id}
                className="glass-panel rounded-2xl p-6 flex flex-col justify-between group hover:border-cyan-500/40 hover:bg-[#121927] transition-all duration-300 relative overflow-hidden"
              >
                {/* Glow highlight */}
                <div
                  className="absolute -top-16 -right-16 w-36 h-36 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"
                  style={{ backgroundColor: domain.glowColor }}
                ></div>

                <div>
                  {/* Top Bar: Icon + Openings Badge */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${domain.accentColor} p-[1px] shadow-md`}
                    >
                      <div className="w-full h-full bg-[#0a0e18] rounded-[11px] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-cyan-300" />
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                        {domain.badge}
                      </span>
                      <span className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        {domain.openings}
                      </span>
                    </div>
                  </div>

                  {/* Title & Summary */}
                  <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {domain.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5">
                    {domain.summary}
                  </p>

                  {/* Responsibilities */}
                  <div className="mb-5">
                    <h4 className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold mb-2">
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-1.5">
                      {domain.responsibilities.slice(0, 3).map((resp, i) => (
                        <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills / Tech Stack Tags */}
                  <div className="mb-6">
                    <h4 className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold mb-2">
                      Tools & Stack
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {domain.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/10 hover:border-cyan-400/40 hover:text-cyan-300 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="text-[11px] text-slate-400 font-medium">
                    {domain.perks[0]}
                  </div>
                  <button
                    onClick={() => onApplyToDomain(domain.id)}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500 text-cyan-300 hover:text-slate-950 font-semibold text-xs border border-cyan-500/30 transition-all duration-200 group-hover:scale-105 active:scale-95"
                  >
                    <span>Apply</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty Search Fallback */}
        {filteredDomains.length === 0 && (
          <div className="text-center py-16 px-4 rounded-2xl bg-white/5 border border-white/10">
            <Search className="w-10 h-10 text-slate-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white mb-1">No domains found</h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-4">
              We couldn&apos;t find any domain matching &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
