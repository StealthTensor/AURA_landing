import React, { useState, useEffect } from 'react';
import { 
  X, Download, Trash2, Search, Filter, ExternalLink, 
  Users, CheckCircle2, RefreshCw, Calendar, Mail, Phone, BookOpen 
} from 'lucide-react';
import { DOMAINS } from '../data/domainsData';

export default function AdminDrawer({ isOpen, onClose, onRefreshCount }) {
  const [applications, setApplications] = useState([]);
  const [filterDomain, setFilterDomain] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedApp, setSelectedApp] = useState(null);

  const loadApplications = () => {
    try {
      const data = JSON.parse(localStorage.getItem('aura_recruitment_applications') || '[]');
      setApplications(data);
      if (onRefreshCount) onRefreshCount(data.length);
    } catch (e) {
      console.error(e);
      setApplications([]);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadApplications();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredApps = applications.filter((app) => {
    const matchesDomain = filterDomain === 'all' || app.primaryDomain === filterDomain;
    const matchesSearch = 
      (app.fullName || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (app.email || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (app.rollNo || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (app.id || '').toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDomain && matchesSearch;
  });

  const handleExportCSV = () => {
    if (applications.length === 0) return;
    const headers = ['Application ID', 'Full Name', 'Email', 'Phone', 'Roll No', 'Year', 'Branch', 'Primary Domain', 'Secondary Domain', 'Portfolio', 'Submitted At', 'Motivation'];
    const rows = applications.map(a => [
      `"${a.id || ''}"`,
      `"${a.fullName || ''}"`,
      `"${a.email || ''}"`,
      `"${a.phone || ''}"`,
      `"${a.rollNo || ''}"`,
      `"${a.year || ''}"`,
      `"${a.branch || ''}"`,
      `"${a.primaryDomain || ''}"`,
      `"${a.secondaryDomain || ''}"`,
      `"${a.portfolioUrl || ''}"`,
      `"${a.submittedAt || ''}"`,
      `"${(a.motivation || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `aura_recruitment_applicants_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear all recorded applications?')) {
      localStorage.removeItem('aura_recruitment_applications');
      loadApplications();
      setSelectedApp(null);
    }
  };

  const handleSeedDemoData = () => {
    const demo = [
      {
        id: 'AURA-2026-T8X9',
        fullName: 'Devansh Sharma',
        email: 'devansh.s@college.edu',
        phone: '+91 98112 34567',
        rollNo: '24BCE1009',
        year: '1st Year',
        branch: 'Computer Science & Engineering',
        primaryDomain: 'web-mobile',
        secondaryDomain: 'cybersecurity',
        portfolioUrl: 'https://github.com/devansh-sharma',
        motivation: 'Passionate about building fast React web apps, exploring Next.js 15, and building full-stack products with AURA engineering wing.',
        pastExperience: 'Built a campus lost-and-found tracker and participated in Smart India Hackathon.',
        submittedAt: new Date(Date.now() - 3600000 * 2).toISOString()
      },
      {
        id: 'AURA-2026-M4Z1',
        fullName: 'Aarohi Sen',
        email: 'aarohi.sen@design.edu',
        phone: '+91 97234 56789',
        rollNo: '23BDS2044',
        year: '2nd Year',
        branch: 'Design & Interaction',
        primaryDomain: 'ui-ux',
        secondaryDomain: 'media-motion',
        portfolioUrl: 'https://behance.net/aarohisen',
        motivation: 'I love crafting micro-interactions, clean design systems, and conducting user interviews to solve real student friction points.',
        pastExperience: 'Redesigned the university library app concept in Figma with 50+ interactive components.',
        submittedAt: new Date(Date.now() - 3600000 * 5).toISOString()
      }
    ];
    localStorage.setItem('aura_recruitment_applications', JSON.stringify(demo));
    loadApplications();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-sm animate-fade-in flex justify-end">
      <div 
        className="w-full max-w-3xl bg-[#090d16] border-l border-white/10 h-full flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-6 border-b border-white/10 bg-[#0e1422] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white flex items-center gap-2">
                <span>Applicant Review Dashboard</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 font-mono border border-cyan-500/20">
                  {applications.length} Applicants
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Organizers portal to monitor recruitment submissions
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition"
            aria-label="Close drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Toolbar */}
        <div className="p-4 border-b border-white/5 bg-[#0a0f1b] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 flex-1 min-w-[200px]">
            <div className="relative w-full max-w-xs">
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search name, roll no, id..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-[#121927] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60"
              />
            </div>

            <select
              value={filterDomain}
              onChange={(e) => setFilterDomain(e.target.value)}
              className="px-2.5 py-1.5 rounded-lg bg-[#121927] border border-white/10 text-xs text-slate-300 focus:outline-none"
            >
              <option value="all">All Domains</option>
              {DOMAINS.map(d => (
                <option key={d.id} value={d.id}>{d.title}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            {applications.length === 0 && (
              <button
                onClick={handleSeedDemoData}
                className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-medium border border-white/10 flex items-center gap-1.5"
                title="Populate test applications"
              >
                <RefreshCw className="w-3.5 h-3.5 text-cyan-400" />
                <span>Seed Sample Data</span>
              </button>
            )}

            <button
              onClick={handleExportCSV}
              disabled={applications.length === 0}
              className="px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 disabled:opacity-40 text-slate-950 text-xs font-bold flex items-center gap-1.5 transition"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>

            {applications.length > 0 && (
              <button
                onClick={handleClearAll}
                className="p-1.5 text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 rounded-lg transition"
                title="Clear all applications"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {filteredApps.length === 0 ? (
            <div className="text-center py-20 px-4 text-slate-400">
              <Users className="w-12 h-12 mx-auto mb-3 opacity-30 text-cyan-400" />
              <p className="text-sm font-semibold text-slate-300 mb-1">
                No applications matching filter
              </p>
              <p className="text-xs text-slate-500">
                Submit an application through the modal or click &quot;Seed Sample Data&quot; to test.
              </p>
            </div>
          ) : (
            filteredApps.map((app) => (
              <div
                key={app.id}
                onClick={() => setSelectedApp(selectedApp?.id === app.id ? null : app)}
                className={`p-4 rounded-xl border transition-all cursor-pointer ${
                  selectedApp?.id === app.id
                    ? 'bg-[#151f33] border-cyan-500/50 shadow-md shadow-cyan-500/10'
                    : 'bg-[#0f1523] border-white/5 hover:border-white/15'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-sm text-white">{app.fullName}</span>
                      <span className="font-mono text-[10px] text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded border border-cyan-500/20">
                        {app.id}
                      </span>
                      <span className="text-[10px] text-slate-400 bg-white/5 px-2 py-0.5 rounded">
                        {app.year}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <Mail className="w-3.5 h-3.5 text-slate-500" /> {app.email}
                      </span>
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-3.5 h-3.5 text-slate-500" /> {app.rollNo} ({app.branch})
                      </span>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      {DOMAINS.find(d => d.id === app.primaryDomain)?.title || app.primaryDomain}
                    </span>
                    <div className="text-[10px] text-slate-500 mt-1 flex items-center justify-end gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(app.submittedAt).toLocaleDateString()}
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                {selectedApp?.id === app.id && (
                  <div className="mt-4 pt-4 border-t border-white/10 space-y-3 text-xs animate-fade-in">
                    <div>
                      <span className="text-slate-400 font-medium block mb-1">Phone / WhatsApp:</span>
                      <span className="text-slate-200">{app.phone || 'N/A'}</span>
                    </div>

                    {app.secondaryDomain && (
                      <div>
                        <span className="text-slate-400 font-medium block mb-1">Secondary Domain:</span>
                        <span className="text-purple-300">
                          {DOMAINS.find(d => d.id === app.secondaryDomain)?.title || app.secondaryDomain}
                        </span>
                      </div>
                    )}

                    {app.portfolioUrl && (
                      <div>
                        <span className="text-slate-400 font-medium block mb-1">Portfolio / Profile:</span>
                        <a
                          href={app.portfolioUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-cyan-400 hover:underline flex items-center gap-1"
                        >
                          {app.portfolioUrl}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    )}

                    <div>
                      <span className="text-slate-400 font-medium block mb-1">Motivation / Why AURA:</span>
                      <p className="text-slate-300 bg-black/30 p-2.5 rounded-lg border border-white/5 leading-relaxed">
                        {app.motivation}
                      </p>
                    </div>

                    {app.pastExperience && (
                      <div>
                        <span className="text-slate-400 font-medium block mb-1">Past Experience / Projects:</span>
                        <p className="text-slate-300 bg-black/30 p-2.5 rounded-lg border border-white/5 leading-relaxed">
                          {app.pastExperience}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
