import React, { useState } from 'react';
import { X, Search, CheckCircle2, Clock, AlertCircle, FileCheck, ArrowRight, Download, MessageSquare } from 'lucide-react';
import { REGISPARK_CONFIG } from '../data/config';

interface TrackStatusModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MockStatusRecord {
  ref: string;
  companyName: string;
  package: string;
  submissionDate: string;
  status: 'deposit_verified' | 'name_reserved' | 'cipc_processing' | 'approved_ready';
  currentStep: number;
  steps: { title: string; date: string; done: boolean; inProgress?: boolean }[];
  director: string;
  taxNumberAssistance?: string;
}

export const TrackStatusModal: React.FC<TrackStatusModalProps> = ({ isOpen, onClose }) => {
  const [refInput, setRefInput] = useState('RS-ZA-2026-4821');
  const [activeRecord, setActiveRecord] = useState<MockStatusRecord | null>({
    ref: 'RS-ZA-2026-4821',
    companyName: 'Lumina Tech Solutions (Pty) Ltd',
    package: 'Plus Package (R1,499)',
    submissionDate: '02 March 2026',
    status: 'cipc_processing',
    currentStep: 3,
    steps: [
      { title: 'Application & 50% Deposit Confirmed', date: '02 March 2026', done: true },
      { title: 'CIPC Name Reservation Approved (COR9.4)', date: '03 March 2026', done: true },
      { title: 'Electronic Filing & Statutory Verification', date: 'In Progress (Estimated completion in 1–2 days)', done: false, inProgress: true },
      { title: 'Digital Delivery of COR14.3 & SARS Tax Notice', date: 'Pending final statutory seal', done: false },
    ],
    director: 'Kagiso M.',
    taxNumberAssistance: 'SARS corporate income tax number queued',
  });
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = refInput.trim().toUpperCase();
    if (!cleaned) {
      setErrorMessage('Please enter an Application Reference Number');
      return;
    }

    setErrorMessage('');
    
    // Simulate lookup
    if (cleaned.includes('1044')) {
      setActiveRecord({
        ref: cleaned,
        companyName: 'Apex Creative Studio (Pty) Ltd',
        package: 'Boss Package (R2,999)',
        submissionDate: '24 February 2026',
        status: 'approved_ready',
        currentStep: 4,
        steps: [
          { title: 'Application & 50% Deposit Confirmed', date: '24 Feb 2026', done: true },
          { title: 'CIPC Name Reservation Approved (COR9.4)', date: '25 Feb 2026', done: true },
          { title: 'Electronic Filing & Statutory Verification', date: '27 Feb 2026', done: true },
          { title: 'Digital Delivery of COR14.3 & SARS Tax Notice', date: 'Completed 28 Feb 2026', done: true },
        ],
        director: 'Nomvula Z.',
        taxNumberAssistance: 'SARS Tax Reference: 9840291840 issued',
      });
    } else {
      setActiveRecord({
        ref: cleaned.startsWith('RS-') ? cleaned : `RS-ZA-${cleaned}`,
        companyName: 'Proactive Ventures (Pty) Ltd',
        package: 'Plus Package (R1,499)',
        submissionDate: '03 March 2026',
        status: 'cipc_processing',
        currentStep: 3,
        steps: [
          { title: 'Application & 50% Deposit Confirmed', date: '03 March 2026', done: true },
          { title: 'CIPC Name Reservation Approved (COR9.4)', date: '04 March 2026', done: true },
          { title: 'Electronic Filing & Statutory Verification', date: 'Currently under CIPC review', done: false, inProgress: true },
          { title: 'Digital Delivery of COR14.3 & SARS Tax Notice', date: 'Scheduled for release upon CIPC seal', done: false },
        ],
        director: 'Applicant',
        taxNumberAssistance: 'Queued with SARS integration',
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="bg-[#101D35] px-6 py-5 text-white flex items-center justify-between border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF702E] to-[#FF8C52] flex items-center justify-center text-white">
              <Search className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Track Application Status</h3>
              <p className="text-xs text-slate-300">Live CIPC Registration Timeline</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="space-y-2">
            <label className="block text-xs font-semibold text-slate-700">
              Enter Your Application Reference
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={refInput}
                onChange={(e) => setRefInput(e.target.value)}
                placeholder="e.g. RS-ZA-2026-4821"
                className="flex-1 px-4 py-2.5 text-sm rounded-xl border border-slate-300 font-mono focus:outline-none focus:border-[#FF702E] focus:ring-1 focus:ring-[#FF702E] uppercase"
              />
              <button
                type="submit"
                className="px-5 py-2.5 text-xs font-semibold text-white bg-[#FF702E] hover:bg-[#e05b1c] rounded-xl transition-colors shrink-0"
              >
                Track
              </button>
            </div>
            {errorMessage && (
              <p className="text-xs text-rose-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errorMessage}</span>
              </p>
            )}
            <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-1">
              <span>Demo examples:</span>
              <button
                type="button"
                onClick={() => { setRefInput('RS-ZA-2026-4821'); }}
                className="text-[#FF702E] hover:underline font-mono"
              >
                RS-ZA-2026-4821 (In Progress)
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={() => { setRefInput('RS-ZA-2026-1044'); }}
                className="text-[#FF702E] hover:underline font-mono"
              >
                RS-ZA-2026-1044 (Delivered)
              </button>
            </div>
          </form>

          {/* Result Card */}
          {activeRecord && (
            <div className="bg-[#F1F3F6] rounded-2xl p-5 border border-slate-200/80 space-y-5">
              
              {/* Record Summary */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[#FF702E] bg-[#FF702E]/10 px-2.5 py-0.5 rounded-md">
                      {activeRecord.ref}
                    </span>
                    <span className="text-xs text-slate-500">
                      Lodged {activeRecord.submissionDate}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mt-1">
                    {activeRecord.companyName}
                  </h4>
                  <p className="text-xs text-slate-600">
                    {activeRecord.package} · Director: {activeRecord.director}
                  </p>
                </div>

                <div className="shrink-0">
                  {activeRecord.status === 'approved_ready' ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Registration Approved</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                      <Clock className="w-3.5 h-3.5 animate-spin" />
                      <span>Filing with CIPC (Active)</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Step Timeline */}
              <div className="space-y-4">
                <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Registration Progress
                </h5>
                <div className="space-y-3">
                  {activeRecord.steps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-0.5 shrink-0">
                        {step.done ? (
                          <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                          </div>
                        ) : step.inProgress ? (
                          <div className="w-5 h-5 rounded-full bg-[#FF702E] text-white flex items-center justify-center animate-pulse">
                            <Clock className="w-3 h-3" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full bg-slate-300 text-slate-500 flex items-center justify-center text-[10px] font-bold">
                            {idx + 1}
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <p className={`text-xs font-semibold ${step.done ? 'text-slate-900' : step.inProgress ? 'text-[#FF702E] font-bold' : 'text-slate-500'}`}>
                          {step.title}
                        </p>
                        <p className="text-[11px] text-slate-500">{step.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next Steps / Actions */}
              <div className="pt-2 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <a
                  href={REGISPARK_CONFIG.getWhatsAppUrl(`Hello RegiSpark, I would like an update regarding my application reference ${activeRecord.ref}.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-colors shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>WhatsApp Inquiry</span>
                </a>

                {activeRecord.status === 'approved_ready' ? (
                  <button
                    onClick={() => {
                      alert('Download started: COR14.3 Official Registration Certificate and MOI bundle for ' + activeRecord.companyName);
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#101D35] hover:bg-[#1a2d4f] rounded-xl transition-colors shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5 text-[#FF702E]" />
                    <span>Download COR14.3 Pack (PDF)</span>
                  </button>
                ) : (
                  <span className="text-[11px] text-slate-500 text-center sm:text-right">
                    Notification will be sent via WhatsApp upon CIPC seal
                  </span>
                )}
              </div>

            </div>
          )}

        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-300 rounded-xl transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
