import React, { useState, useEffect } from 'react';
import { 
  X, Sparkles, CheckCircle2, Copy, Check, ArrowRight, 
  AlertCircle, Send, User, Mail, Phone, BookOpen, Layers, Link as LinkIcon 
} from 'lucide-react';
import { DOMAINS } from '../data/domainsData';

export default function RecruitmentModal({ isOpen, onClose, preselectedDomain, onApplicationSubmitted }) {
  const initialFormData = {
    fullName: '',
    email: '',
    phone: '',
    rollNo: '',
    branch: 'Computer Science & Engineering',
    year: '1st Year',
    primaryDomain: preselectedDomain || DOMAINS[0].id,
    secondaryDomain: '',
    portfolioUrl: '',
    motivation: '',
    pastExperience: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(null);
  const [copiedId, setCopiedId] = useState(false);

  useEffect(() => {
    if (preselectedDomain) {
      setFormData((prev) => ({ ...prev, primaryDomain: preselectedDomain }));
    }
  }, [preselectedDomain]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (formData.phone.trim().length < 8) {
      newErrors.phone = 'Please provide a valid phone number';
    }
    if (!formData.rollNo.trim()) newErrors.rollNo = 'College ID/Roll No is required';
    if (!formData.primaryDomain) newErrors.primaryDomain = 'Please select a primary domain';
    if (!formData.motivation.trim() || formData.motivation.trim().length < 20) {
      newErrors.motivation = 'Please share at least 20 characters explaining your interest in AURA';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      // Generate clean application ID
      const randomPart = Math.random().toString(36).substring(2, 6).toUpperCase();
      const appId = `AURA-2026-${randomPart}`;

      const newRecord = {
        id: appId,
        ...formData,
        submittedAt: new Date().toISOString()
      };

      // Store in localStorage
      try {
        const existing = JSON.parse(localStorage.getItem('aura_recruitment_applications') || '[]');
        existing.unshift(newRecord);
        localStorage.setItem('aura_recruitment_applications', JSON.stringify(existing));
      } catch (err) {
        console.error('LocalStorage save error:', err);
      }

      setIsSubmitting(false);
      setSubmissionSuccess(newRecord);
      if (onApplicationSubmitted) onApplicationSubmitted();
    }, 600);
  };

  const handleCopyId = () => {
    if (!submissionSuccess) return;
    navigator.clipboard.writeText(submissionSuccess.id);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  const handleResetAndClose = () => {
    setSubmissionSuccess(null);
    setFormData(initialFormData);
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-[#0b0f19] border border-white/10 rounded-3xl shadow-2xl shadow-cyan-500/10 overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-white/10 bg-[#0e1422] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-sm">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white">
                AURA Recruitment 2026 Portal
              </h3>
              <p className="text-xs text-slate-400">
                Phase 1 Application &bull; Free & Open to All Batches
              </p>
            </div>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {submissionSuccess ? (
            /* Success State */
            <div className="py-6 text-center space-y-5 animate-fade-in">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <div>
                <h4 className="text-2xl font-display font-bold text-white mb-1">
                  Application Received!
                </h4>
                <p className="text-sm text-slate-400 max-w-md mx-auto">
                  Thank you, <span className="text-cyan-400 font-medium">{submissionSuccess.fullName}</span>. Your application for <span className="text-white font-medium">{DOMAINS.find(d => d.id === submissionSuccess.primaryDomain)?.title || submissionSuccess.primaryDomain}</span> has been logged into the AURA recruitment database.
                </p>
              </div>

              {/* Application ID Card */}
              <div className="max-w-md mx-auto p-4 rounded-2xl bg-[#121927] border border-cyan-500/30 flex items-center justify-between">
                <div className="text-left">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                    Your Application ID
                  </span>
                  <span className="font-mono text-lg font-bold text-cyan-300">
                    {submissionSuccess.id}
                  </span>
                </div>
                <button
                  onClick={handleCopyId}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 hover:text-white border border-white/10 transition"
                >
                  {copiedId ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Copy ID</span>
                    </>
                  )}
                </button>
              </div>

              {/* Next Steps Card */}
              <div className="max-w-md mx-auto text-left p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-2">
                <span className="font-semibold text-white block">Next Steps:</span>
                <p>&bull; Keep your Application ID safe for reference during interviews.</p>
                <p>&bull; Shortlisted candidates will receive Phase 2 domain challenge prompts via email ({submissionSuccess.email}).</p>
                <p>&bull; Stay tuned on club announcements and WhatsApp group invitation.</p>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleResetAndClose}
                  className="px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 transition"
                >
                  Close & Return to Home
                </button>
              </div>
            </div>
          ) : (
            /* Application Form */
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Personal Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Full Name <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Alex Rivera"
                      className={`w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#121927] border text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition ${
                        errors.fullName ? 'border-rose-500 focus:ring-rose-500' : 'border-white/10 focus:border-cyan-500/60 focus:ring-cyan-500/50'
                      }`}
                    />
                  </div>
                  {errors.fullName && <p className="text-[11px] text-rose-400 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    College / Student Email <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex.r@college.edu"
                      className={`w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#121927] border text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition ${
                        errors.email ? 'border-rose-500 focus:ring-rose-500' : 'border-white/10 focus:border-cyan-500/60 focus:ring-cyan-500/50'
                      }`}
                    />
                  </div>
                  {errors.email && <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    WhatsApp / Phone Number <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className={`w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#121927] border text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition ${
                        errors.phone ? 'border-rose-500 focus:ring-rose-500' : 'border-white/10 focus:border-cyan-500/60 focus:ring-cyan-500/50'
                      }`}
                    />
                  </div>
                  {errors.phone && <p className="text-[11px] text-rose-400 mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    College Registration / Roll No <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <BookOpen className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      name="rollNo"
                      value={formData.rollNo}
                      onChange={handleChange}
                      placeholder="e.g. 23BCE10452"
                      className={`w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#121927] border text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition ${
                        errors.rollNo ? 'border-rose-500 focus:ring-rose-500' : 'border-white/10 focus:border-cyan-500/60 focus:ring-cyan-500/50'
                      }`}
                    />
                  </div>
                  {errors.rollNo && <p className="text-[11px] text-rose-400 mt-1">{errors.rollNo}</p>}
                </div>
              </div>

              {/* Academic Year & Branch */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Year of Study
                  </label>
                  <select
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#121927] border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-500/60"
                  >
                    <option value="1st Year">1st Year (Freshers)</option>
                    <option value="2nd Year">2nd Year (Sophomores)</option>
                    <option value="3rd Year">3rd Year (Juniors)</option>
                    <option value="4th Year">4th Year (Seniors)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Department / Branch
                  </label>
                  <input
                    type="text"
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    placeholder="e.g. CSE, IT, ECE, Design"
                    className="w-full px-3 py-2.5 rounded-xl bg-[#121927] border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60"
                  />
                </div>
              </div>

              {/* Domain Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Primary Domain <span className="text-rose-400">*</span>
                  </label>
                  <select
                    name="primaryDomain"
                    value={formData.primaryDomain}
                    onChange={handleChange}
                    className={`w-full px-3 py-2.5 rounded-xl bg-[#121927] border text-xs sm:text-sm text-white focus:outline-none transition ${
                      errors.primaryDomain ? 'border-rose-500' : 'border-cyan-500/40 focus:border-cyan-400'
                    }`}
                  >
                    {DOMAINS.map((dom) => (
                      <option key={dom.id} value={dom.id}>
                        {dom.title} ({dom.badge})
                      </option>
                    ))}
                  </select>
                  {errors.primaryDomain && <p className="text-[11px] text-rose-400 mt-1">{errors.primaryDomain}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Secondary Domain <span className="text-slate-500">(Optional)</span>
                  </label>
                  <select
                    name="secondaryDomain"
                    value={formData.secondaryDomain}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#121927] border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-500/60"
                  >
                    <option value="">None / Primary Choice Only</option>
                    {DOMAINS.filter(d => d.id !== formData.primaryDomain).map((dom) => (
                      <option key={dom.id} value={dom.id}>
                        {dom.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Portfolio / GitHub Link */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Portfolio / GitHub / Behance / LinkedIn URL <span className="text-slate-500">(Optional but recommended)</span>
                </label>
                <div className="relative">
                  <LinkIcon className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="url"
                    name="portfolioUrl"
                    value={formData.portfolioUrl}
                    onChange={handleChange}
                    placeholder="https://github.com/yourhandle or https://portfolio.site"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#121927] border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60"
                  />
                </div>
              </div>

              {/* Motivation */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Why do you want to join AURA Club? <span className="text-rose-400">*</span>
                </label>
                <textarea
                  rows="3"
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  placeholder="Share what drives you, what projects you want to build, and how you hope to contribute to the collective..."
                  className={`w-full p-3 rounded-xl bg-[#121927] border text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition resize-none ${
                    errors.motivation ? 'border-rose-500 focus:ring-1 focus:ring-rose-500' : 'border-white/10 focus:border-cyan-500/60'
                  }`}
                ></textarea>
                {errors.motivation && <p className="text-[11px] text-rose-400 mt-1">{errors.motivation}</p>}
              </div>

              {/* Past work / Projects */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Any previous project, design, or achievement you are proud of? <span className="text-slate-500">(Optional)</span>
                </label>
                <textarea
                  rows="2"
                  name="pastExperience"
                  value={formData.pastExperience}
                  onChange={handleChange}
                  placeholder="Briefly describe a tool, website, design mockup, event you organized, or competition you entered..."
                  className="w-full p-3 rounded-xl bg-[#121927] border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 resize-none"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-400 hover:text-white hover:bg-white/5 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:scale-[1.02] active:scale-[0.98] transition disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting Application...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Application</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
