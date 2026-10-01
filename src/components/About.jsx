import React from 'react';
import { Target, Compass, Zap, Shield, Award, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { ROADMAP_STEPS } from '../data/domainsData';

export default function About({ onOpenRecruitment }) {
  const pillars = [
    {
      icon: Zap,
      title: 'Production-Grade Engineering',
      desc: 'No trivial toy scripts. We build, ship, and benchmark robust software used by thousands across campus.'
    },
    {
      icon: Compass,
      title: 'Multidisciplinary Synergy',
      desc: 'Coders, AI researchers, 3D artists, designers, and event managers cross-pollinate ideas without silos.'
    },
    {
      icon: Users,
      title: 'High-Impact Mentorship',
      desc: 'Pair with experienced seniors and industry alumni who help you break through technical plateaus.'
    },
    {
      icon: Award,
      title: 'Hackathons & Summits',
      desc: 'We sponsor member entries to premier national hackathons and organize high-octane flagship campus fests.'
    }
  ];

  return (
    <section id="about" className="py-24 relative bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Target className="w-3.5 h-3.5" />
            Our Mission & Ethos
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white mb-5 tracking-tight">
            Built by builders, <br />
            <span className="text-gradient-cyan">for future tech leaders</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            AURA is more than a student club. It is an incubator for ambition, curiosity, and craft. 
            Whether you want to build foundational open-source tools, train custom neural networks, design jaw-dropping visual identities, or lead flagship 1000+ attendee hackathons, there is a place for your ambition here.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover p-6 rounded-2xl relative overflow-hidden group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-blue-500/10 border border-cyan-500/30 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-cyan-500/30 transition-all duration-300">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-display font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Recruitment Process Roadmap */}
        <div id="roadmap" className="pt-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Shield className="w-3.5 h-3.5" />
              Recruitment Process
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
              How to Join the <span className="text-gradient-purple">AURA Syndicate</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              A transparent, supportive, 4-phase roadmap designed to evaluate your passion and potential — from initial application to final induction and project onboarding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {ROADMAP_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="relative glass-panel p-6 rounded-2xl border border-white/10 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                      {step.step}
                    </span>
                    <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10">
                      {step.timeline}
                    </span>
                  </div>
                  <h3 className="text-lg font-display font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-cyan-400 font-medium">
                  <CheckCircle className="w-4 h-4" />
                  <span>Evaluation criteria provided</span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Apply Banner inside Roadmap */}
          <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-[#0e1627] to-purple-950/40 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-cyan-950/20">
            <div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2">
                Ready to make your mark?
              </h3>
              <p className="text-sm text-slate-400 max-w-xl">
                Phase 1 application takes less than 3 minutes. Choose your primary domain and upload your details today.
              </p>
            </div>
            <button
              onClick={() => onOpenRecruitment()}
              className="px-6 py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/20 hover:scale-105 active:scale-95 transition-all whitespace-nowrap"
            >
              <span>Start Phase 1 Application</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
