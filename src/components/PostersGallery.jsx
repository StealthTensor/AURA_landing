import React, { useState } from 'react';
import { Image, ZoomIn, X, Download, Sparkles } from 'lucide-react';

export default function PostersGallery() {
  const [activePoster, setActivePoster] = useState(null);

  const posters = [
    {
      id: 'poster-1',
      title: 'Official Recruitment Callout',
      subtitle: 'Columnists, Graphic Artists & Creative Roles',
      path: '/recruitment/058f63c87cdf0c279097fe473d0f1724.jpg',
      tags: ['Creative Staff', 'Open Hiring', 'Designers']
    },
    {
      id: 'poster-2',
      title: 'Studio & Engineering Recruitment',
      subtitle: 'Are You Next? Join the Design & Tech Guild',
      path: '/recruitment/dc9190d959dffa7a9384241fc60f90f3.jpg',
      tags: ['Design Studio', 'Innovation', 'All Years']
    }
  ];

  return (
    <section id="posters" className="py-20 relative bg-[#07090e] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Image className="w-3.5 h-3.5" />
            Official Campaign
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-3">
            Campus <span className="text-gradient-purple">Recruitment Posters</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Spot our flyers across the campus notice boards and digital kiosks. Click any poster to expand in high resolution.
          </p>
        </div>

        {/* Posters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {posters.map((poster) => (
            <div
              key={poster.id}
              className="glass-panel rounded-3xl p-4 sm:p-5 group hover:border-pink-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div 
                className="relative overflow-hidden rounded-2xl cursor-pointer bg-[#05070c] aspect-[3/4] flex items-center justify-center"
                onClick={() => setActivePoster(poster)}
              >
                <img
                  src={poster.path}
                  alt={poster.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <div className="flex items-center gap-2 text-white text-xs font-semibold bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">
                    <ZoomIn className="w-4 h-4 text-cyan-300" />
                    <span>Click to Zoom</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <div>
                  <h3 className="font-display font-bold text-white text-base">
                    {poster.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {poster.subtitle}
                  </p>
                </div>
                <div className="flex gap-1.5">
                  {poster.tags.slice(0, 2).map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePoster && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in"
          onClick={() => setActivePoster(null)}
        >
          <div 
            className="relative max-w-2xl w-full max-h-[90vh] bg-[#0b0f19] rounded-2xl overflow-hidden border border-white/20 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-[#0e1422]">
              <span className="font-semibold text-sm text-white">{activePoster.title}</span>
              <div className="flex items-center gap-2">
                <a
                  href={activePoster.path}
                  download
                  className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-white/10 transition"
                  title="Download Poster"
                >
                  <Download className="w-4 h-4" />
                </a>
                <button
                  onClick={() => setActivePoster(null)}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="p-4 overflow-y-auto flex items-center justify-center bg-black/50">
              <img
                src={activePoster.path}
                alt={activePoster.title}
                className="max-h-[75vh] w-auto object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
